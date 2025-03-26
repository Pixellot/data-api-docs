const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
const fs = require('fs');

// Read the schema file
const schema = JSON.parse(fs.readFileSync('./docs/data-api/pixellot-dataapi-statstics-schema.json', 'utf8'));

// Create the validator
const validate = ajv.compile(schema);

// Function to validate a stats file
function validateStats(statsFilePath) {
    try {
        // Read the stats file
        const stats = JSON.parse(fs.readFileSync(statsFilePath, 'utf8'));
        
        // Validate against schema
        const valid = validate(stats);
        
        if (valid) {
            console.log('Stats file is valid!');
        } else {
            console.log('Stats file is invalid:');
            console.log(validate.errors);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Example usage
if (process.argv.length < 3) {
    console.log('Usage: node validate-stats.js <path-to-stats-file>');
    process.exit(1);
}

validateStats(process.argv[2]); 
