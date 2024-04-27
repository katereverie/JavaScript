1. Step 15, typo in hint message: Should be "You should reassign *an* empty array to your `diceValuesArr` variable". (raised issue and created a PR)
2. Step 52 (the mechanism is not necessarily tied to this step): I find the logic or mechanism of the dice game a bit confusing. The way it is set up makes it possible for users to choose between taking a non-zero score and a zero score. If the goal is to win with the highest score possible, it is implausible that users would choose a zero score over a non-zero score. If that is the case, there is no reason to enable this choice. Instead, I think a better mechanism should keep always keep a non-zero score over a zero score, which disables the option of selecting the zero score. 