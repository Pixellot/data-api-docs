# Basketball Glossary

This document describes the attributes used in basketball event tracking. Each event type (resource) has specific attributes that provide details about the play.

## Event Types

- [Deflection](#deflection)
- [You Clip](#you-clip)
- [Plays](#plays)
- [Highlight](#highlight)
- [Jump Ball](#jump-ball)
- [Off Ball (legacy)](#off-ball-legacy)
- [On Ball (legacy)](#on-ball-legacy)
- [Playing](#playing)
- [Shot](#shot)
- [Foul](#foul)
- [Turnover](#turnover)
- [Rebound](#rebound)
- [Possession](#possession)
- [Period](#period)

## Deflection

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Team | teamNames | Team involved in the deflection | |
| Athlete | rosterAthletes | Player who made the deflection | |

## You Clip

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Type | list | Type of clip | FTM, FGM, 3PM, assist, rebound, steal, block, good, bad, tag, drill |
| Athlete | number | Athlete number | |
| Description | text | Description of the clip | |

## Plays

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Type | list | Type of play | spot up, transition, off ball screen, pick and roll, hand off, cut, isolation, post up, other |
| Team | teamNames | Team executing the play | |
| Athlete | rosterAthletes | Primary athlete in the play | |
| Athlete_Received | rosterAthletes | Athlete who received the ball | |
| Athlete_on_ball_defender | rosterAthletes | On-ball defender | |
| Athlete_Screener_Defender | rosterAthletes | Screener's defender | |
| Location | chartPoint | Location of the play | |
| Direction | list | Direction of the play | right, left |

## Highlight

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Comment | text | Highlight commentary | |
| Quality | list | Quality of the highlight | Okay, Good, Great |
| Team | teamNames | Team involved | |

## Jump Ball

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Team | teamNames | Team involved | |
| Type | list | Type of jump ball | start period, unclear possession, lodged ball, held ball, block tie up, out of bounds, out of bounds rebound, double violation |
| Won_By_Athlete | rosterAthletes | Athlete who won the jump ball | |
| Lost_By_Athlete | rosterAthletes | Athlete who lost the jump ball | |

## Off Ball (legacy)

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Team | teamNames | Team involved | |
| Type | list | Type of off-ball action | screen, movement, other |
| Movement | list | Movement type | high, low, side |
| Close_Out | list | Close out type | short, long |
| Attacker | rosterAthletes | Attacking player | |
| Defender | rosterAthletes | Defending player | |

## On Ball (legacy)

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Team | teamNames | Team involved | |
| Direction_Handler | list | Handler's direction | right, left, high, low, over, under, flare |
| Ball_Defense | list | Ball defense type | over, under, switch |
| Dir_Screener_Maker | list | Screener's direction | roll, pop, slip, fake |
| Screen_Rec_Defense | list | Screen recovery defense | hedge, drop, stay, help recover, switch |
| Area | list | Area of the court | right, middle, left |
| Result | list | Play result | 2nd action, finish |
| Ball_Handler | rosterAthletes | Ball handler | |
| Ball_Defender | rosterAthletes | Ball defender | |
| Screener_Maker | rosterAthletes | Screener | |
| Screen_Maker_Def | rosterAthletes | Screener's defender | |
| Type | list | Action type | screen, movement, other |
| Screen | list | Screen type | down, back, side |

## Playing

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Athlete | rosterAthletes | Athlete involved | |

## Shot

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| Type | list | Shot type | 2, 3, FT |
| Result | list | Shot result | made, miss, blocked |
| athlete | rosterAthletes | Shooting athlete | |
| assist | rosterAthletes | Assisting athlete | |
| blockedBy | rosterAthletes | Player who blocked the shot | |
| team | teamNames | Team taking the shot | |
| Defender | rosterAthletes | Primary defender | |
| Description | list | Shot description | jumper, drive, tip in, dunk, layup, fade away, alley-oop, hook shot, floating jumper, stepback jumper, pullup jumper, turnaround jumper, wrong basket, 1 of 1, 1 of 2, 1 of 3, 2 of 2, 2 of 3, 3 of 3 |
| Location | chartPoint | Shot location | |
| Qualifier | list | Shot qualifier | 2nd chance, fastbreak, from turnover, in the paint |

## Foul

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| athlete | rosterAthletes | Fouling athlete | |
| team | teamNames | Fouling team | |
| On | rosterAthletes | Player fouled | |
| Type | list | Foul type | offensive, personal, technical, unsportsmanlike, disqualifying, bench technical, coach technical, admin technical, coach disqualifying |
| Description | list | Foul description | block, charge, double, flagrant1, flagrant2, shooting, looseball, class a, class b, contact deadball, lifting, direct, bench class a, bench class b, 1 free throw, 2 free throw, 3 free throw, one and done |

## Turnover

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| athlete | rosterAthletes | Player who turned the ball over | |
| team | teamNames | Team that turned the ball over | |
| teamSteal | teamNames | Team that stole the ball | |
| athleteSteal | rosterAthletes | Player who stole the ball | |
| Type | list | Turnover type | passing, ball handling, foul, violation, offensive goaltending, line violation, dribbling, double dribble, bad pass, lost ball, over and back, back court, out of bounds, travel, shotclock, offensive, lifting, 3 sec, 5 sec, 8 sec, 10 sec, 24 sec |

## Rebound

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| team | teamNames | Rebounding team | Home, Away |
| athlete | rosterAthletes | Rebounding athlete | |
| type | list | Rebound type | offense, defense, Team Offense, Team Defense |
| Boxing_Out | list | Boxing out status | challenged, unchallenged |
| Result | list | Rebound result | 2nd action, finish |
| Rebound_Allowed | rosterAthletes | Player who allowed the rebound | |
| Description | list | Rebound description | dead ball |

## Possession

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| team | teamNames | Team with possession | Home, Away |
| Type | list | Possession type | set play, oobb, oobs, transition, 2nd chance |
| Defense | list | Defense type | man, zone, full court press, hard doubled, less than 5 sec |

## Period

| Attribute | Type | Description | Values |
|-----------|------|-------------|--------|
| period | list | Game period | 1, 2, 3, 4, OT |
