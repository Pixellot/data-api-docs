# Basketball Logging Instructions

## Overview

Basketball Basic is the foundational variation of basketball that loggers can work on within the Vidswap platform. In addition to Basketball Basic, other variations include FIBA, Advanced, and Amplify, which are introduced in separate tutorials after gaining sufficient knowledge and logging experience.

In Basketball Basic, the logger is responsible for tagging the following actions: Period, Possession, Jump Ball, Shot, Rebound, Turnover, Playing, Foul, and Lineup.

The following section provides a detailed explanation of each tag (with the letter in parentheses indicating the keyboard shortcut):

## Logging Tags

### PERIOD (P)

Tag each quarter (1, 2, 3, 4), or halves (1st and 2nd), and any overtime (OT) periods. If there are multiple overtimes, tag each one as a separate OT.

### POSSESSION (Q)

Used to tag which team has possession of the ball. Pressing 'Q' twice automatically switches team possession. Possession should be started 1–2 seconds before the ball is inbounded.

End the possession in the following situations: end of period or half, during timeouts, after fouls, during free throws (FT), or when the ball goes out of bounds.

Tag the following: team (team in possession) and type (type of offensive possession). Do not tag defense type.

On Vidswap, the "transition" possession type is determined by the movement of the defensive team and whether the offensive team is attacking against a set or unset defense. Every first possession of a period is automatically marked as a set play, regardless of where or how the ball is inbounded.

#### Possession Types:
- **Set Play** – 5-on-5 half-court offense
- **Transition** – fast break or early offense against an unset defense; includes plays stopped by fouls, turnovers, timeouts, etc.
- **OOBB** – inbound from baseline (offensive half)
- **OOBS** – inbound from sideline (offensive half only)
- **2nd Chance** – possession after an offensive rebound

### JUMP BALL

Tag all jump ball events at the start of the game, OT, or after a held ball situation.

**Fields:** team (winner), type (jump ball type), won by athlete, lost by athlete

#### Jump Ball Types to tag:
- **Start Period** – beginning of game or OT
- **Unclear Possession** – when referee calls a jump ball due to unclear out-of-bounds call
- **Lodged Ball** – ball stuck between rim and backboard
- **Held Ball** – simultaneous possession by both teams

**Do not tag:** Block Tie-Up, Out of Bounds, Out of Bounds Rebound, Double Violation

### SHOT (1)

Tag the moment the shot is attempted.

**Fields:** team, type (FT, 2, 3), result (miss, made, blocked), description (shot type), athlete (shooter), assist (only on made shots), blocked by athlete (only on blocked shots), location (for 2PT/3PT shots).

**Do not tag:** Qualifier, Defender Legacy

#### Shot Descriptions:
- Jumper
- Drive (hand behind the ball)
- Tip-In
- Dunk
- Layup (hand under the ball)
- Fade Away
- Alley-Oop
- Hook Shot
- Floating Jumper
- Stepback Jumper
- Pullup Jumper
- Turnaround Jumper
- Wrong Basket (tag opposing team, leave athlete blank)
- Free Throws: 1 of 1, 1 of 2, 2 of 2, etc.

**Assist rules:** In USA/Canada basketball, assist is allowed even after two dribbles. In FIBA/Europe, it's only allowed after one dribble.

For FT shots, do not tag shot location.

### REBOUND (R)

Tag all rebounds (defensive or offensive) when the player gains full control. Do not tag team rebounds in Basketball Basic.

**Fields:** team, type (Offense or Defense), athlete

**Do not tag:** Result, Description, Boxing Out, Rebound Allowed, or Team Offense/Defense under Type

If the ball remains in play after a block, tag a rebound depending on who gains control.

### TURNOVER (T)

Tag when a player makes an error that results in a change of possession.

**Fields:** team (losing possession), type (turnover type), team steal, athlete (loser), athlete steal (defender who stole it)

If a dead ball results in a change of possession, tag it as TO – Ball Handling and include players if possible. If the same team retains possession, do not tag TO.

**Do not tag these turnover types:** Violation, Dribbling, Bad Pass, Lost Ball, Over and Back, Out of Bounds, Offensive (without foul), 24 Sec

#### Taggable Turnover Types:
- Passing
- Ball Handling
- Foul
- Offensive Goaltending
- Line Violation
- Double Dribble
- Back Court
- Travel
- Shot Clock
- Lifting (carrying)
- 3 Seconds
- 5 Seconds
- 8 Seconds
- 10 Seconds (used in HS or some women's leagues with 35-sec shot clocks)

### PLAYING

Tag the players currently on the court. With 1 tag, log 5 players for that team. With 2 tags, log 5 players for both teams. After each substitution, update playing tags accordingly.

### FOUL

Tag all personal and team fouls.

**Fields:** team, athlete, type, foul-on (only for offensive fouls), description (only Charge or Block, used with offensive fouls)

#### Foul Types:
- Offensive
- Personal
- Technical
- Unsportsmanlike
- Disqualifying
- Bench Technical
- Coach Technical
- Admin Technical
- Coach Disqualifying

Leave athlete field blank for bench, coach, admin, and disqualifying fouls.

### LINEUP

Located in the top-right of the logging interface. Select 5 players per team depending on the tags available to record starting lineups.

## Basketball Advanced

Basketball Advanced is an upgraded version of Basketball Basic, introducing additional tags for deeper analysis and improved insight into gameplay. While the core elements remain the same, this version adds new tagging options explained below.

### Period (P)
Same as in Basic.

### Possession (Q)
Same as in Basic for team and type.

#### Possession Defense (new):
- **Man** – each player guards their man
- **Zone** – includes all zone types (2-3, 3-2, 1-3-1, etc.)
- **Full Court Press** – two or more defenders applying pressure across full court
- **Hard Doubled** – all types of double-team on opponent's half court
- **Less than 5 seconds** – used when under 5 seconds remain in the period

### Jump Ball
Same as in Basic.

### Shot (1)
All fields same as in Basic.

#### Shot Qualifier (new) – used only on Made shots:
- **2nd Chance** – after an offensive rebound
- **Fastbreak** – scored during transition
- **From Turnover** – scored immediately after a turnover
- **In the Paint** – scored inside the paint

Multiple qualifiers can be tagged together (e.g. Fastbreak + From Turnover + In the Paint).

### Rebound (R)
Same as in Basic, plus:
- Team Offense and Team Defense (under Type)

### Turnover (T)
Same as in Basic.

### Deflection (D)
Tag when a defender disrupts a pass or dribble without gaining possession.
**Fields:** Team, Athlete

### Playing
Same as in Basic.

### Foul (F)
Same as in Basic for team, athlete, and type.

Do not tag Foul On.

In Description, only tag:
- Shooting
- 1 Free Throw, 2 Free Throw, 3 Free Throw, One and Done

Multiple options can be used together (e.g. Shooting + 3 Free Throw).

### Plays (L)
Tag the type of offensive action for every possession (1:1 ratio).
**Fields:** Team, Type, Direction, Athlete, Athlete Receiver, Athlete On Ball Defender, Athlete Screener Defender, Location

#### Play Types:
- **Spot Up** – immediate shot after catch
- **Transition** – quick score within first 6–7 seconds
- **Off Ball Screen** – screens away from the ball leading to a shot or drive (tag 4 players)
- **Pick and Roll** – standard PnR ending in shot (use Direction: left/right, tag 4 players)
- **Hand Off** – handoff followed by scoring attempt (tag 4 players)
- **Cut** – cutting into space (tag shooter and on-ball defender)
- **Isolation** – 1-on-1 action without screens
- **Post Up** – low-post or back-to-basket play (can follow an offensive rebound)
- **Other** – undefined actions like broken plays, TOs, fouls, etc. (no athletes tagged)

#### Special Cases:
- Plays ending with a foul (before shot): tag as Other
- Offensive rebound → quick attack = Isolation
- Offensive rebound → back-down/dribble = Post Up
- Offensive rebound → pass out = tag the actual play that followed

### Total Minutes Tracking
Each team's total athlete minutes should be:
- 198–201 minutes for 4x10 min games
- 223–226 minutes if OT is played

No single player should exceed 40:00 (or 45:00 with OT).

Use Opus Imperium Bot for automatic calculations. If the total is off, adjust by extending or shortening specific team possessions.

## Basketball FIBA

Basketball FIBA is a variation adapted to international FIBA rules with additional tag logic and specific differences compared to Basic.

### Period (P)
Same as in Basic.

### Possession (Q)
Same as in Basic.

### Jump Ball
Same as in Basic.

### Shot (1)
Same as in Basic, with key assist rule differences:
- Assists are only logged if the scorer takes 1 or fewer dribbles
- Assists on FT: only log if it's a shooting foul, shot was missed, and at least one FT is made (tag assist on the first made FT)

### Rebound (R)
Same as in Basic, plus:
- Tag Team Offense and Team Defense under Type

Team rebound is tagged when:
- Ball goes out of bounds after a missed shot (airball)
- Ball gets lodged on the rim
- Ball is contested with no clear possession and goes out
- Blocked shot directly out of bounds

If the shot happens at the buzzer, do not tag a team rebound.

### Turnover (T)
Same as in Basic.

### Playing
Same as in Basic.

### Foul (F)
Same as in Basic, except:
- For Offensive Fouls, do not tag Foul On or Foul Description

### Total Minutes Tracking
Same logic as in Advanced:
- 198–201 minutes per team in regular time
- 223–226 minutes per team with OT
- No player should exceed 40:00 (or 45:00 with OT)

All totals are auto-calculated by Opus Imperium Bot. If minutes are off, adjust team possessions accordingly.
