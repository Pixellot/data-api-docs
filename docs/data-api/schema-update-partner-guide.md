# Data API Schema Update Process - Partner Guide

## Overview

This document outlines how Pixellot manages schema updates for the Data API and what partners can expect during major version releases. Our coordinated approach ensures all partners have adequate time to prepare while maintaining system stability.

## Update Types and Notice Periods

### Schema Version Types
- **Major Version (X.0.0)**: Contains breaking changes that may require code modifications
- **Minor Version (0.Y.0)**: Adds new functionality without breaking existing integrations
- **Patch Version (0.0.Z)**: Bug fixes and minor improvements

### Advance Notice
- **Major Version**: 60-day advance notice
- **Minor Version**: 30-day advance notice  
- **Patch Version**: 14-day advance notice
- **Critical Security/Bug Fixes**: 1 hour notice (emergency situations only)

## Major Version Release Process

### Timeline Overview
When we announce a major schema update, here's what you can expect:

**Day 0**: Schema update announcement with draft schema available  
**Day 15**: Partner consultation period begins  
**Day 45**: Integration testing should be completed  
**Day 53**: Final readiness confirmation required  
**Day 60**: New schema goes live

### Key Milestones

#### Day 45: Initial Readiness Check
We'll reach out to confirm your integration testing progress and identify any support needs.

#### Day 30: Testing Deadline
All integration testing should be completed by this date. Sample data and documentation will be available to support your testing.

#### Day 14: Final Confirmation
You'll need to confirm your readiness for the schema change. This is your last chance to raise any blocking issues.

#### Day 7: Go/No-Go Decision
Final decision point. If critical issues are identified, the release may be postponed.

## What We Provide

### Documentation Package
For each major release, you'll receive:
- **Schema Update Document**: Complete overview of changes and impact assessment
- **Sample Data**: Representative payloads using the new schema format
- **Technical Details**: Schema file locations and reference materials

### Schema Documentation
All schema versions and related materials are available in our public GitHub repository:
- Current and historical schema versions
- Sample payloads for testing
- Migration guides and documentation

## Your Responsibilities

### Testing Requirements
Before confirming readiness, please ensure you have:
- [ ] Updated your integration code to handle the new schema structure
- [ ] Tested with all provided sample payloads
- [ ] Verified backward compatibility handling where applicable
- [ ] Conducted performance testing with larger payloads
- [ ] Updated any dependent systems or processes

### Communication Requirements
- **Report integration issues immediately** during the testing period
- **Confirm final readiness** by Day 53

## Schema Change Types

### Breaking Changes
Changes that require code modifications on your end:
- **Removed Fields**: Fields that no longer exist in the payload
- **Modified Field Formats**: Changes to data types, formats, or structure
- **New Required Fields**: Fields that must be handled by your integration
- **Structural Changes**: Changes to the overall payload organization

### Non-Breaking Changes
Changes that shouldn't affect existing integrations:
- **New Optional Fields**: Additional data you can choose to use
- **Enhanced Documentation**: Clarifications and additional examples
- **Performance Improvements**: Backend optimizations

## Emergency Procedures

### Rollback Protocol
In rare cases where critical issues are discovered post-release:
1. We will immediately rollback to the previous schema version
2. All partners will be notified within 1 hour
3. A root cause analysis will be conducted
4. A revised timeline for re-release will be provided

### Urgent Support
For critical issues during the transition period:
- **Immediate Response Channel**: [Contact details to be provided]
- **Escalation Process**: Direct access to senior technical team
- **Status Updates**: Regular communication until resolution

## Best Practices for Partners

### Preparation
- **Start Early**: Begin integration work as soon as the draft schema is available
- **Test Thoroughly**: Use all provided sample data and create additional test scenarios
- **Plan for Rollback**: Ensure you can quickly revert changes if needed
- **Document Changes**: Keep track of modifications made to your systems

### During Transition
- **Monitor Closely**: Watch for any unexpected behavior in your integration
- **Report Issues Quickly**: Don't wait - reach out immediately if you encounter problems
- **Stay Connected**: Participate in office hours and respond to our check-ins

### Post-Release
- **Validate Operations**: Confirm all functionality is working as expected
- **Performance Monitoring**: Check that performance meets your requirements
- **Provide Feedback**: Help us improve the process for future releases

## Frequently Asked Questions

### Q: What happens if we're not ready by the deadline?
If a critical partner cannot meet the deadline, we may postpone the release. However, this affects all partners, so early communication about potential delays is essential.

### Q: Can we test against the new schema before the release?
Yes, draft schemas are available immediately upon announcement, and we provide sample data for testing.

### Q: What if we discover issues during testing?
Please report issues immediately. We'll work with you to resolve them, and if necessary, adjust the schema or timeline.

### Q: Are there any costs associated with schema updates?
No, schema updates are part of your existing Data API subscription. However, you may incur internal development costs for integration updates.

### Q: How often do major schema updates occur?
We aim to minimize breaking changes and typically release major versions no more than twice per year, with advance planning shared during our regular partner communications.

## Support Contacts

- **Technical Questions**: [Technical support channel]
- **Schema Issues**: GitHub Issues in our public data-api repository
- **Account Management**: [Account manager contact]
- **Urgent Escalation**: [Emergency contact information]

---

This process is designed to ensure smooth transitions while maintaining the reliability and functionality of your Data API integration. We're committed to supporting you throughout each update cycle.
