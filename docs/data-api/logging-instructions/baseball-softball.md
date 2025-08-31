# Baseball & Softball Logging Instructions

## Overview

Baseball Basic is the foundational variation of baseball on Vidswap. The logging process and timeline differ from other sports (except outdoor ones), as you will see in the images and clips later in the tutorial.

The timeline is designed and implemented to be filled clip by clip, with specific columns populated in each clip depending on the action in the footage. The software is built so that 60-70% of the columns are automatically populated after the logger fills the first clip, based on what the logger records in the Result column.

## Organizing the Timeline (Clips)

Loggers may sometimes receive a training match with pre-filled clips, so these must first be organized. We organize them as follows: for each pre-filled column, click on it and press Backspace on the keyboard. Under no circumstances should you edit or delete by pressing Delete, as this could erase the entire clip, which cannot be recovered, rendering the match invalid.

**Columns we DO NOT log for Baseball Basic:** Pitcher Delivery, Pitch Type, Strike, Advanced, Base Throw To, Highlight, Pitch, Exit.

## Baseball Basic Logging Columns

In the following text, we will explain each column in detail and what it represents:

### Inning
Recorded as the type of period; there can be up to 9 innings. Each inning is divided into two halves. In one half, Team A is at bat (offense), while in the other, Team B is at bat.

### Team At Bat
We record the team that is in the batter's position (offense).

### Pitcher
We tag the pitcher (defense), the player who throws the ball toward the batter and catcher.

### P Hand
We record which hand the pitcher throws with:
- **LHP** - Left
- **RHP** - Right

### Batter
We tag the batter (offense), the player who hits the ball at home plate.

### H Hand
We record which side/hand the batter hits the ball with:
- **LHH** - Left
- **RHH** - Right

### Count
We record the ratio between Balls and Strikes.

Possible entries include: (0-0, 0-1, 0-2, 1-0, 1-1, 1-2, 2-0, 2-1, 2-2, 3-0, 3-1, 3-2). The software will automatically populate most of this column based on what the logger records in the Result column.

The first number represents Balls, and the second represents Strikes.

### Outs
We record the number of eliminated batters or base runners from the batting team (offensive team).

Possible values: 0, 1, 2.

### On Base
We record the number of base runners on any base from the batting team (offensive team).

Possible values: 0, 1, 2, 3.

### Base Position
We record exactly how many players (base runners) are on the bases.

Possible values:
- **Empty** - All bases are empty/free
- **1st** - Player on first base
- **2nd** - Player on second base
- **3rd** - Player on third base
- **1st-2nd** - Players on first and second bases
- **1st-3rd** - Players on first and third bases
- **2nd-3rd** - Players on second and third bases
- **Loaded** - Players on all three bases

### Result
This is the most important column for baseball logging; we record the outcome/type of action that occurred in the current clip. There are many options, and we will explain each one separately.

#### Result Types:

**Strike** - When the pitcher throws the ball and it passes through the strike zone, and the catcher catches it. It does not matter if the batter attempted to hit it or not. A strike is recognized by the umpire's gesture.

**Strike Out** - When the pitcher already has two prior strikes, and the third strike is recorded as a strike out, automatically eliminating the batter from play in that inning.

**Ball** - When the pitcher throws the ball and it passes outside the strike zone, the catcher catches it, and the batter does not attempt to hit it.

**Walk** - When the pitcher, who has already thrown three balls, throws a fourth. This throw is called a Walk, and the batter then has a free path to first base, advancing automatically. If there is a base runner on that base, they will also advance one base forward.

**Foul** - When the batter hits the ball and it ends up outside the foul lines. When count is 0:0, or 0:1 if the batter hit Foul, count will add it as strike. On count 0:2 it will not add strike if you hit foul.

**Hit** - When the batter hits the pitched ball from the pitcher and then reaches one of the bases (first, second, third, or home plate). We always record the Hit Type and Stat columns along with Hit.

**Out** - When the batter hits the pitched ball from the pitcher but fails to reach any base.

There is also the possibility that the batter reaches a base, but the defense eliminates a base runner; in this case, we record Out, but in the Stat column, we record (Single, Double, Triple, depending on which base the batter reached). We always record the Hit Type column along with Out.

**Double Play Out** - Recorded when the defense, after the batter's hit, manages to eliminate the batter and a base runner, or two base runners.

**Triple Play Out** - Recorded when the defense, after the batter's hit, manages to eliminate the batter and two base runners, or three base runners.

**Throw to Base** - Recorded when the pitcher does not throw the ball toward home plate and the batter but instead throws to one of the bases and attempts to eliminate a base runner on that base but fails.

**Throw to Base Out** - Recorded when the pitcher does not throw the ball toward home plate and the batter but instead throws to one of the bases and succeeds in eliminating a base runner on that base.

**Bean** - When the pitcher hits the batter above the waist (head, back, stomach, etc.). After this, the batter automatically advances to first base.

**Balk** - When the pitcher makes an error, such as in movement, during the throw, or if the ball slips from their hand.

### Hit Type
We record the ball's trajectory when the batter hits the pitched ball from the pitcher.

We always record and link this to the Result column and the following options from it: Hit, Out, Double Play Out, Triple Play Out.

There are 4 types of Hit Type:

**Grounder** - Recorded when the ball, after the hit, goes toward or along the ground.

**Fly Ball** - Recorded when the ball, after the hit, goes very high into the air and falls back to the ground with a delay.

**Line Drive** - Recorded when the ball, after the hit, travels in a straight line or with a slight arc through the air and ends up very quickly and deep in the outfield or in the stands.

**Bunt** - Recorded when the batter simply positions the bat so the ball bounces shortly into the field.

### RBI (Runs Batted In - Points)
We record the number of players (from the offensive team) who run through home plate and thereby score points. Points can be scored after a hit, after a throwing error, etc.

Possible point values: 1, 2, 3, 4. 4 is the maximum number a team can score in one action.

### Stat
There are multiple options we record, each linked to a specific option from Result. The options we log are as follows:

**Single** - When the batter hits the ball and reaches first base (can be with Hit, Out, or Double Play Out).

**Double** - When the batter hits the ball and reaches second base (can be with Hit, Out, or Double Play Out).

**Triple** - When the batter hits the ball and reaches third base (can be with Hit, Out, or Double Play Out).

**Home Run** - When the batter hits the ball and it goes beyond the field's boundaries, allowing the batter and all base runners (if any on bases) a free path to home plate and scoring points.

**Steal** - When one of the base runners on a base successfully runs to the next base and reaches it without being eliminated by the defense players.

Options we do not use in the Stat column are: Caught, Back Safe, and Error.

### Location
We record where the ball ends up after the pitcher throws it toward the batter. The location includes a sketch of the strike zone and areas outside it; depending on the umpire's ruling and where the ball lands, we record its location.

Location filling is always relative to the pitcher, regardless of the camera's position.

We do not record Location in the following situations: Throw to Base, Throw to Base Out, Bean, and Balk.

## Softball Basic

Softball Basic logging and timeline are identical to those of Baseball Basic.

For this reason, we will not explain each column in detail as we did for Baseball Basic. The software is designed so that 80-90% of the columns are automatically populated after the logger fills the first clip, based on what the logger records in the Result column.

### Organizing the Timeline (Clips)
Loggers may sometimes receive a training match with pre-filled clips, which must first be organized. We organize them as follows: for each pre-filled column, click on it and press Backspace on the keyboard. Under no circumstances should you edit or delete by pressing Delete, as this could erase the entire clip, which cannot be recovered, rendering the match invalid.

**Columns we log:** Inning, Team at Bat, Pitcher, P Hand, Batter, H Hand, Count, Outs, On Base, Base Position, Result, Hit Type, RBI, Stat, Location.

**Columns we do NOT log:** Pitch Type, Pitch, Exit, Highlight.

## Clipping

For baseball and softball matches, as you are already familiar with, the software operates by having the logger fill specific columns in the clips with data depending on what occurred in the given action.

A logger may receive a match that is not clipped, meaning the logger is required to clip (prepare and cut the clips) before the actual logging.

The clipping process itself is straightforward; it simply requires following a few tips:

1. When a logger receives a match that needs clipping, go to the "Clipping Queue" option in the upper right corner, then select the angle and open the clipping program in a new window.

2. Always thoroughly review the entire video and confirm whether all innings are on the recording.

3. Locate the start of the match (Top 1st inning) and begin cutting the first clip.

4. Cut clips so that each clip starts 3-5 seconds before the pitch (from the pitcher) begins and ends 3-5 seconds after the action concludes.

5. All actions must be neatly cut, as this will make the logging and player tagging easier for the logger.

6. Once the logger has cut all actions in the match, go to the "Import Clips" option. It is very important to wait 5-15 minutes, as this is the time needed for the software to import all clips into the program; after that, the logger can refresh the link and begin logging.
