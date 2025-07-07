# Widgets Support Specification

## Overview

The Data API supports various widget types that provide structured statistical data for different sports. This document outlines widget availability, structure, and implementation details across all supported sports.

## Supported Widget Types

The following widget types are available in the DATA API:

- **`matchTeamStats`** - Team-level statistics for the match
- **`matchRosterStats`** - Individual player statistics and roster information  
- **`matchBoxScore`** - Comprehensive box score data
- **`matchRosterLeaders`** - Top performers and statistical leaders

## Widget Support by Sport

### ✅ Full Widget Support

All four widget types are supported for these sports:

| Sport | Type | Status |
|-------|------|--------|
| Basketball | flowbased | ✅ Full support |
| Soccer | flowbased | ✅ Full support |
| Volleyball | flowbased | ✅ Full support |
| American Football | playbased | ✅ Full support |
| Handball | flowbased | ✅ Full support |
| Field Hockey | flowbased | ✅ Full support |

### ⚠️ Partial Widget Support

Limited widget functionality available:

| Sport | Type | Supported Widgets |
|-------|------|-------------------|
| Futsal | flowbased | `match_roster_leaders` only |
| Rugby | flowbased | `match_box_score`, `match_team_stats` |
| Netball | flowbased | `match_box_score`, `match_team_stats` |
| Water Polo | flowbased | `match_box_score`, `match_team_stats` |

### ❌ No Widget Support

These sports do not currently support widgets:

| Sport | Type | Status |
|-------|------|--------|
| Ice-Hockey | flowbased | 🚧 Not supported yet |
| Lacrosse-Men | flowbased | 🚧 Not supported yet |
| Lacrosse-Women | flowbased | 🚧 Not supported yet |
| Baseball | playbased | 🚧 Not supported yet |
| Softball | playbased | 🚧 Not supported yet |
| Flag Football | playbased | 🚧 Not supported yet |

## Related Documentation

- [Schema Documentation](pixellot-dataapi-statstics-schema.md) - Complete API schema including widget structures
- [Sport-Specific Glossaries](../glossary/glossaries.md) - Terminology and definitions for each sport
