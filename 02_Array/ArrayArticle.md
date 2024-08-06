* When we use to make merge the two Array by using [ PUSH ] or [ concat ] , then our Array will not be merge or make a new array inside of other array, 

Example = :
            const marval_heros = ["Iron-man", "Spider-man","Thor"];
            const Dc_heros = ["Super-man","Bat-man","Flash"];

            marval_heros.push(Dc_heros);
            console.log(marval_heros);

            / * Push add on existing Array */

            // Output: ["Iron-man", "Spider-man","Thor",["Super-man","Bat-man","Flash"]]

            <!-- ------------------------------------------------------------------- -->

            // concat will give us same value because we are not holding value to some where for concat because carate return new array.

            marval_heros.concat(Dc_heros); 
                // Output: ["Iron-man", "Spider-man","Thor",["Super-man","Bat-man","Flash"]]
            console.log(marval_heros);

            Thus : 
                    const newcnct = marval_heros.concat(Dc_heros);

                    console.log(newcnct); 
                    // Output: ["Iron-man", "Spider-man","Thor","Super-man","Bat-man","Flash"];

<!-- -________________________________________________________________________________ -->

    * Spread Operator......

        <!--* Spread syntax looks exactly like rest syntax, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See rest parameters and rest property. -->

    const all_new_heros = [...marval_heros,...dc_heros];

    console.log(all_new_heros);





    <!-- -________________________________________________-? -->

    