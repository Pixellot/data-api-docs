# Basketball

## Basketball TagEvents Resources and Attributes Glossary

### Introduction
This glossary documents all possible tagEvents resources and their attributes specific to Basketball tagging. It serves as a comprehensive reference for developers working with our Basketball tagging API, which uses a flow-based structure to track continuous game actions, transitions, and player movements throughout the match.

### Tagging Methodology
Our basketball tagging system uses two main types of tag creation:

- **Running Tags**: Continuous tags that are turned on and off based on specific game conditions
- **Instant Tags**: Point-in-time tags that capture specific events with predefined durations


## Shot

An attempt by a player to score points by throwing the ball through the basket.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Result | list | made, missed, blocked | Indicates whether the shot attempt was successful or not |
| Type | list | 2, 3, FT | The point value of the attempted shot |
| Team | teamNames | | Team that attempts the shot |
| Athlete | rosterAthletes | | The player taking the shot |
| Assist | rosterAthletes | | The player providing the assist. An assist is awarded if the player scores after no more than two dribble |
| Blocked By | rosterAthletes | | The player who blocked the shot |
| Location | chartPoint | | The location where shot occurs |
| Description | list | jumper, drive, layup, dunk, pullup jumper, fade away, turnaround jumper, hook, tip-in, alley-oop, floating jumper, wrong basket, stepback jumper, 1 of 3, 2 of 3, 3 of 3, 1 of 2, 2 of 2, 1 of 1 | Description of shot |
| Qualifier | list | 2nd chance, fastbreak, from turnover, in the paint | Which type of made basket (Advanced Basketball only) |

> **Tag Creation**: Instant  
> **Lead Time**: 3 seconds  
> **Duration**: 4 seconds  
> **Timings**: Turn on in the moment when the ball is leaving the shooter's hands

#### Attribute Value Descriptions:

**Result:**

- **made** - Shot attempt that successfully scores points
- **missed** - Shot attempt that does not result in points
- **blocked** - Shot attempt that does not result in points

**Type:**

- **two_pointer** - A shot taken inside the three-point line worth 2 points
- **three_pointer** - A shot taken beyond the three-point line worth 3 points
- **FT** - A shot taken from free throw line worth 1 point

**Description:**

- **jumper** - Shot where the player jumps and releases the ball at the peak of the jump, usually squaring up to the basket
- **drive (hand behind the ball)** - Shot where the athlete dribbles into the lane and shoots with hand behind the ball
- **tip-in** - Quick shot made by tapping or "tipping" the ball into the hoop after a rebound, usually without fully catching it
- **dunk** - Shot where a player jumps and throws the ball directly down through the rim with one or both hands
- **layup (hand under the ball)** - Shot taken close to the basket, usually off the backboard, with the shooting hand under and guiding the ball upward
- **fade away** - Jump shot where the shooter leans or jumps backward, making it harder for the defender to block
- **alley-oop** - Play where one player throws a lob pass near the basket, and a teammate jumps, catches, and scores in midair (usually a dunk or layup)
- **hook shot** - One-handed shot made with a sweeping motion across the body, the arm extended in a hook-like motion, often used in the post
- **floating jumper** - High-arching shot released while moving forward
- **stepback jumper** - Shot where the player creates space by stepping back away from the defender before rising for the jump shot
- **pullup jumper** - Quick jump shot taken off the dribble without setting both feet; the player stops suddenly and rises for the shot
- **turnaround jumper** - Shot where the player posts up, pivots, turns away from the defender, and shoots in one motion
- **wrong basket** - When a player accidentally scores in the opponent's basket (tag opposing team, leave athlete blank)
- **Free Throws: 1 of 1, 1 of 2, 2 of 2, 1 of 3, 2 of 3, 3 of 3** - Free throw count

**Qualifier (Advanced Basketball only, on made baskets):**

- **2nd chance** - Scored after an offensive rebound
- **fastbreak** - Scored during transition
- **from turnover** - Scored immediately after a turnover
- **in the paint** - Scored inside the paint

## Foul

A breach of the rules that concerns illegal personal contact with an opponent or unsportsmanlike behavior.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Team | teamNames | | The team of the player committing the foul |
| Athlete | rosterAthletes | | The player committing the foul |
| On | rosterAthletes | | The player on whom the foul is committed (only used on charging fouls) |
| Type | list | offensive, personal, technical, unsportsmanlike, disqualifying, bench technical, coach technical, admin technical, coach disqualifying | The type of foul committed |
| Description | list | shooting, block, charge, flagrant_1, flagrant_2, loose ball foul, 1 free throw, 2 free throws, 3 free throws, one and done | The description of foul committed (Advanced Basketball) |

> **Tag Creation**: Instant  
> **Lead Time**: 3 seconds  
> **Duration**: 1 second  
> **Timings**: Turn on the moment when player commits a foul

#### Attribute Value Descriptions:

**Type:**

- **offensive** - A foul committed by the player or team in possession of the ball (charging, illegal screen, push-off). Results in a turnover
- **personal** - Basic infraction for illegal contact. Any illegal physical contact between two players (defensive or offensive). Includes blocking, holding, reaching, etc.
- **technical** - Non-contact foul for unsportsmanlike conduct, delay of game, improper behavior, or rules infractions. Results in free throws and possession for the opponent. Technical foul after which team gets 1 free throw
- **unsportsmanlike** - Unnecessary, excessive, or intentional illegal contact judged not to be a normal basketball play. Very rough and unsportsmanlike foul after which team gets 2 free throws and possession
- **disqualifying** - Severe foul. Issued for violent conduct, fighting, or extreme unsportsmanlike actions and leads to immediate ejection. Same as unsportsmanlike, except player who committed this foul can NOT enter game again
- **bench technical** - A technical foul assessed against a team's bench personnel (non-active players, assistants) for misconduct or violations
- **coach technical** - A technical foul specifically charged to the head coach for improper conduct (arguing, leaving the coaching box, etc.)
- **admin technical** - A technical foul given for procedural issues (wrong jersey number, scorebook error, excessive timeouts, delay of game). Not necessarily unsportsmanlike. Team is late for jump ball or something is wrong with documents, so opposite team gets 2 free throws before jump ball
- **coach disqualifying** - Issued when a head coach receives the foul(s) that merit disqualification (e.g., 2 technicals, or 1 disqualifying foul). Requires leaving the bench and game area. Coach gets ejected from the game and can't lead his team, also opposite team gets 2 free throws and possession

**Description (Advanced Basketball):**

- **shooting** - Defender fouls a player in the act of shooting. Results in free throws
- **block** - Defender fails to establish legal guarding position and makes illegal contact, usually while impeding a drive
- **charge** - Offensive player with the ball runs into a defender who has established legal position. 
- **flagrant_1** - Unnecessary contact judged to be excessive but not malicious. Opponent gets free throws and possession
- **flagrant_2** - Unnecessary and excessive contact, often intentional or violent. Results in free throws, possession, and automatic ejection
- **loose ball foul** - Contact during a rebound or scramble when neither team has possession
- **1 free throw, 2 free throws, 3 free throws** - Counts the number of free throws awarded on the foul
- **one and done** - Free throw situation where the shooter gets one attempt, and if made, gets a second attempt

## Turnover

A turnover occurs when the offensive team loses possession of the ball without attempting a shot.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Type | list | passing, ball handling, foul, offensive goaltending, line violation, double dribble, back court, travel, lifting, 3sec, 5sec, 8sec, 10sec, 24sec | The specific rule violation that caused the turnover |
| Team | teamNames | | The team of the player committing the turnover |
| Team Steal | teamNames | | The team of the player stealing the ball |
| Athlete | rosterAthletes | | The player committing the turnover |
| Athlete Steal | rosterAthletes | | The player who steals the ball |

> **Tag Creation**: Instant  
> **Lead Time**: 3 seconds  
> **Duration**: 1 second  
> **Timings**: Turn on 1-2 seconds before turnover occurs

#### Attribute Value Descriptions:

**Type:**

- **passing** - Turnover caused by a bad or intercepted pass that results in the defense gaining possession
- **ball handling** - Losing control of the ball while dribbling, without direct defensive contact. When a player loses possession of the ball due to a mistake while dribbling, such as losing control, being stripped by a defender
- **foul** - An offensive foul (charging, illegal screen, push-off, etc.) that results in loss of possession
- **offensive goaltending** - A turnover when an offensive player illegally touches the ball on its downward flight or interferes with the rim/net during their team's shot attempt
- **line violation** - Stepping on or over a boundary line while holding the ball (sideline, baseline, free throw line). Occurs when a player steps on or over the boundary line, such as stepping out of bounds during play or stepping on or over the free-throw line before the ball touches the rim during a free throw attempt
- **double dribble** - Dribbling with both hands at once or stopping the dribble and then starting again. Dribbling with both hands or pausing and resuming dribble
- **back court** - After crossing half court, the offense returns the ball illegally into the backcourt. Returning the ball to the backcourt after it has been established in the frontcourt
- **travel** - Taking too many steps without dribbling, dragging the pivot foot, or moving illegally with the ball. Occurs when a player holding the ball moves one or both feet illegally without dribbling
- **lifting (carrying)** - The dribbler places their hand under the ball and "lifts" it while continuing the dribble, gaining an unfair advantage. Putting hand under the ball while dribbling
- **3sec** - An offensive player remains in the paint (restricted lane area) for longer than 3 consecutive seconds without actively moving out. An offensive player cannot remain in the key (paint) area for more than three consecutive seconds while their team is in possession of the ball
- **5sec** - Failing to inbound the ball within 5 seconds. Applies when a closely guarded player holding the ball fails to pass, shoot, or dribble within five seconds, or when a player takes longer than five seconds to inbound the ball
- **8sec** - The offense fails to advance the ball past half court within 8 seconds (NBA/FIBA rule). Requires the offensive team to advance the ball past half-court within 8 seconds; failing to do so results in a turnover
- **10sec** - The offense fails to advance the ball past half court within 10 seconds (used in HS or some women's leagues with 35-sec shot clocks). Requires the offensive team to advance the ball past half-court within 10 seconds; failing to do so results in a turnover
- **24sec** - Failing to attempt a shot that touches the rim before the 24-second (or league-specific) clock expires. Failing to attempt a shot within the allotted time

## Rebound

A rebound is the act of gaining possession of the ball after a missed field goal or free throw attempt.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Type | list | offensive, defensive, team offense, team defense | Indicates type of the rebound, team offense/defense only for FIBA Basketball |
| Team | teamNames | | The team of the player grabbing the rebound |
| Athlete | rosterAthletes | | The player grabbing the rebound |

> **Tag Creation**: Instant  
> **Lead Time**: 3 seconds  
> **Duration**: 4 seconds  
> **Timings**: Turn on the moment when rebound occurs

#### Attribute Value Descriptions:

**Type:**

- **offensive** - Rebound secured by a player on the team that attempted the shot. When the offensive team gains control of the ball off a missed/blocked shot
- **defensive** - Rebound secured by a player on the team that did not attempt the shot. When the defensive team gains control of the ball off a missed/blocked shot
- **team offense** - Occurs when no individual player secures the rebound after a missed shot, but the offensive team retains possession of the ball (Basketball FIBA & Advanced). When the ball goes out of bounds and the offensive team retains possession
- **team defense** - Occurs when no individual player secures the rebound after a missed shot, but the defensive team gains possession of the ball (Basketball FIBA & Advanced). When the ball goes out of bounds and the defensive team gains possession

## Jump Ball

A jump ball is a method used to begin or resume play by tossing the ball up between two opponents.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Team | teamNames | | The team awarded the jump ball |
| Type | list | start period, lodged ball, block tie up, out of bounds | Type of jump ball |
| Won By Athlete | rosterAthletes | | Player that won jump ball |
| Lost By Athlete | rosterAthletes | | Player that lost jump ball |

> **Tag Creation**: Instant  
> **Lead Time**: 0 seconds  
> **Duration**: 5 Seconds  
> **Timings**: Turn on the moment when jump ball occurs

#### Attribute Value Descriptions:

**Type:**

- **start period** - Used only at the beginning of the game, or beginning of extra time to determine initial possession. Beginning of game or OT
- **lodged ball** - Called when the ball gets stuck between the rim and backboard, resulting in a jump ball situation. Ball stuck between rim and backboard
- **block tie up** - Occurs when a defender legally blocks a shot and both players maintain simultaneous possession of the ball, leading to a jump ball situation. Held ball - simultaneous possession by both teams
- **out of bounds** - Called when two opposing players touch the ball simultaneously before it goes out of bounds, and the referee cannot determine who last touched it, resulting in a jump ball. When referee calls a jump ball due to unclear out-of-bounds call

## Playing

A playing tag tracks all substitutions and continuously monitors which players are on the court throughout the entire game.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Athlete | rosterAthletes | | The players who are currently on the court |

> **Tag Creation**: Running  
> **Lead Time** 0 seconds  
> **Duration**: 0 seconds(active until next substitution)  
> **Timings**: Start tracking when the match begins. Turn it off after the first substitution, then immediately turn it back on. Repeat this process throughout the entire game for each substitution. Turned off between quarter breaks, halftime breaks, timeout and serious injuries that need medical attention

## Possession

Possession refers to the state of a team having control of the ball.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Team | teamNames | | The team in possession of the ball |
| Type | list | set play, transition, 2nd chance, oobb, oobs | The type of offensive possession |
| Defense | list | man, zone, full court press, hard doubled, less than 5 sec | The type of defense possession (Advanced Basketball only) |

> **Tag Creation**: Running  
> **Lead Time**: 0 seconds  
> **Duration**: 0 seconds (continuous until possession ends)  
> **Timings**: Turn on when team has full control on the ball, turn off after team made a shot, quarter break, halftime break, during FT attempts, medical treatment, or ball goes out of bounds. Possession starts 1-2 seconds before ball is inbounded

#### Attribute Value Descriptions:

**Type:**

- **set play** - Possession with positional play. 5-on-5 half-court offense
- **transition** - Possession finished quickly with a shot, under 6-7s, most of time after TO or missed shot from opponent team. Fast break or early offense against an unset defense; includes plays stopped by fouls, turnovers, timeouts, etc.
- **2nd chance** - Possession started after offensive rebound. 
- **oobb** - Possession (Out of Bounds - Baseline) refers to an inbound play where the offensive team puts the ball back into play from the baseline, typically after a made basket, foul, or ball out of bounds behind the basket. Inbound from baseline (offensive half)
- **oobs** - Possession (Out of Bounds - Sideline) refers to an inbound play where the ball is returned into play from the sideline, usually after a violation, foul, or ball going out of bounds along the side of the court. Inbound from sideline (offensive half only)

**Defense (Advanced Basketball only):**

- **man** - Each player guards their man. Team plays man on man defense
- **zone** - Includes all zone types (2-3, 3-2, 1-3-1, etc.). Team plays zone 1-3-1, 2-3, 3-2, 1-2-2, etc.
- **full court press** - Two or more defenders applying pressure across full court. Team presses in opponent's half with 2 or more players
- **hard doubled** - All types of double-team on opponent's half court. Team presses in opponent's half and 2 players try to double team one of offensive player
- **less than 5 sec** - Used when under 5 seconds remain in the period. When there is less than 5 sec left in quarter

## Period

This resource tracks game periods - quarters, halves, and overtime periods.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Period | list | 1, 2, 3, 4, OT | Current period of play |

> **Tag Creation**: Running  
> **Lead Time**: 0 seconds  
> **Duration**: 0 seconds (continuous throughout period)  
> **Timings**: Turn on 3 seconds before start of the quarter and turn off 3 seconds after end of quarter

#### Attribute Value Descriptions:

**Period:**

- **1** - 1st quarter-period
- **2** - 2nd quarter-period
- **3** - 3rd quarter
- **4** - 4th quarter
- **OT** - Extra time (overtime). If there are multiple overtimes, tag each one as a separate OT

## Deflection

Deflection in basketball is when a defensive player gets a hand on the ball, disrupting a pass, dribble, or shot without gaining full possession.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Team | teamNames | | The team that makes a deflection |
| Athlete | rosterAthletes | | The player making the deflection |

> **Tag Creation**: Instant  
> **Lead Time**: 3 seconds  
> **Duration**: 2 seconds  
> **Timings**: Turn on in the moment of deflection occur

> **Note**: Advanced Basketball only

## Plays

Plays in basketball are organized offensive sequences—such as pick and roll, off-ball screens, and transition actions—designed to create high-percentage scoring opportunities through coordinated team execution.

| Attribute Name | Type | Possible Values | Description |
|----------------|------|-----------------|-------------|
| Team | teamNames | | The team making the play |
| Type | list | spot up, transition, off ball screen, pick and roll, hand off, cut, isolation, post up, other | The type of play |
| Direction | list | left, right | The direction of pick and roll developed |
| Athlete | rosterAthletes | | The athlete who initiates the play |
| Athlete Receiver | rosterAthletes | | On pass plays, athlete who receives the pass |
| Athlete On Ball Defender | rosterAthletes | | Athlete defending the ball handler/shooter |
| Athlete Screener Defender | rosterAthletes | | Athlete defending the screener |
| Location | chartPoint | | Location of where play is initiated |

> **Tag Creation**: Instant  
> **Lead Time**: 4-5 seconds  
> **Duration**: Instant  
> **Timings**: Turn on 4-5 seconds before play occurs so we can capture whole play. Tagged for each offensive possession

#### Attribute Value Descriptions:

**Type:**

- **spot up** - An offensive action designed to create an open shot for a stationary shooter, usually positioned outside the three-point line. Immediate shot after catch
- **transition** - Fast-paced offensive actions that occur immediately after gaining possession, aiming to score before the defense is set. Quick score within first 6-7 seconds
- **off ball screen** - Offensive actions where a player or two players sets a screen for a teammate who does not have the ball, helping them get open for a shot or cut. Screens away from the ball leading to a shot or drive 
- **pick and roll** - Offensive actions where a player sets a screen for the ball handler and then rolls toward the basket to receive a pass or create space for a scoring opportunity. Standard PnR ending in shot (use Direction: left/right)
- **hand off** - Offensive actions where the ball handler hands the ball directly to a teammate, often while both are in motion, to create space or initiate a scoring opportunity. Handoff followed by scoring attempt 
- **cut** - Offensive actions where a player makes a quick movement, usually toward the basket or open space, to receive a pass and create a scoring chance. Cutting into space (tag shooter and on-ball defender)
- **isolation** - Offensive actions where one player is given space to take on their defender in a one-on-one situation, aiming to score without relying on screens or passes. 1-on-1 action without screens
- **post up** - Offensive actions where a player positions themselves near the basket, usually with their back to the defender, to receive the ball and create a scoring opportunity through strength and footwork. Low-post or back-to-basket play (can follow an offensive rebound)
- **other** - Undefined actions like broken plays, TOs, fouls, etc. (no athletes tagged). This plays when there is no shot taken, usually for TO, Foul, Shot clock violation and technical foul

> **Note**: Advanced Basketball only

