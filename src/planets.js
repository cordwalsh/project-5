// import { age } from './main';


// export function toString() {
  //   return this.userAge +" " +this.mercury +" " + this.venus +" " +this.mars +" " this.jupiter;
  // };

  console.log("him")
  // class LifeExpectancy {
    //   constructor() {
      //     this.userAge = userAge;
      //     this.mercury = .24;
      //     this.venus = .62;
      //     this.mars = 1.88;
      //     this.jupiter = 11.86;
      //   }
      //   // checkType() {
        //   //   function worldAge() {
          //   //     return age*this.mercury;
          //   //   }
          //   //   var lifeExpectency = new LifeExpectancy();
          //   //   console.log("hu");
          //   //   return lifeExpectency;
          //   // }
          // };
          class LifeExpectancy {
            constructor(userAge) {
              this.userAge = userAge;
              this.mercury = .24;
              this.venus = .62;
              this.mars = 1.88;
              this.jupiter = 11.86;
              console.log(this.userAge)
            }
            mercuryAge() {
              return this.userAge*this.mercury;
            }
            venusAge() {
              return this.userAge*this.venus;
            }
            marsAge() {
              return this.userAge*this.mars;
            }
            jupiterAge() {
              return this.userAge*this.jupiter;
            }

          }
          export function world(age) {
            let lifeExpectency = new LifeExpectancy(age);

            console.log("mercury:" + lifeExpectency.mercuryAge());
            console.log("venus:" + lifeExpectency.venusAge());
            console.log("mars:" + lifeExpectency.marsAge());
            console.log("jupiter:" + lifeExpectency.jupiterAge());


            console.log("F this assignment");
            // let world = age
          };

          // };
          //   // checkType() {
            //   //   let userAge*.24 = mercury
            //   // }
            // export function pingPong(goal) {
              //   var output = [];
              //   for (var i = 1; i <= goal; i++) {
                //     if (i % 15 === 0) {
                  //       output.push("ping-pong");
                  //     } else if (i % 3 === 0) {
                    //       output.push("ping");
                    //     } else if (i % 5 === 0) {
                      //       output.push("pong");
                      //     } else  {
                        //       output.push(i);
                        //     }
                        //   }
                        //   return output;
                        // }
                        //
                        //
