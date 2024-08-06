const marval_heros = ["Iron-man", "Spider-man","Thor"];
            const Dc_heros = ["Super-man","Bat-man","Flash"];

            marval_heros.push(Dc_heros); 
            
            // Push add on exiting Array 

            // console.log(marval_heros); 
            // Output: ["Iron-man", "Spider-man","Thor",["Super-man","Bat-man","Flash"]]

            console.log(marval_heros[3][1]); // and access inside the value of the element like this.


            // concat will give us same value because we are not holding value to some where for concat.
            //  because carate return new array.            
            
            marval_heros.concat(Dc_heros); 

            // console.log(marval_heros);
                // Output: ["Iron-man", "Spider-man","Thor",["Super-man","Bat-man","Flash"]]

            // Thus : 
                    const newcnct = marval_heros.concat(Dc_heros);

                    // console.log(newcnct); 
                    // Output: ["Iron-man", "Spider-man","Thor","Super-man","Bat-man","Flash"];


                    // Spread Operator......

                    const all_new_heros = [...marval_heros, ...Dc_heros];

                    //  console.log(all_new_heros);


                /// Array Inside Array or more. array. // MDN: -- 

                const An_Array = [1,2,3,[0,1,2,],1.1,['a','b','c',[11]]];

                const All_Array_togather = An_Array.flat(Infinity) // mdn

                console.log(All_Array_togather) // output : all will give us as spread out , 


                ////// Check and Convert into Array. 

                console.log(Array.isArray("Array")); // Check array or not.

                console.log(Array.from("Array")); // Convert into array.


                // Convert object  into array.

                /* Important one. */
                console.log(Array.from({name:"Manish"})); // but it will give us empty an array.

                //for these we have to be declear which we want to made array , [ Key or Value ];

                // Instead of [ Array.from ] we can use [ Array.of ];

                let score1 = 100; 
                let score2 = 200;
                let score3 = 300;

                console.log(Array.of(score1,score2,score3)) 
