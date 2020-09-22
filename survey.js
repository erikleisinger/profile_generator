const readline = require('readline');

let userAnswers = {
};

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let username = "";

r1.question('What is your name?\n', (answer) => {
  userAnswers[answer] = {};
  username = answer;
  console.log(`Nice to meet you, ${answer}`);

  setTimeout(() => {
    console.log(`My name is computer.`)
  }, 2000);

  // activityQ();
  setTimeout(() => {
    r1.question('What\'s an activity you enjoy?\n', (answer2) => {
      userAnswers[username].activity = answer2;
      setTimeout(() => {
        console.log(`You like ${answer2}? Cool.`);
      }, 2000);



      setTimeout(() => {
        r1.question('What music do you listen to while doing that?\n', (answer3) => {
          userAnswers[username].music = answer3;
          setTimeout(() => {
            console.log(`Ugh`)
          }, 500);
          setTimeout(() => {
            console.log(`...`)
          }, 1000);
          setTimeout(() => {
            console.log(`Oh, not ugh to ${answer3}.`)
          }, 4000);
          setTimeout(() => {
            console.log(`I was thinking about something else.`)
          }, 5000);
          setTimeout(() => {
            console.log(`Haha`)
          }, 5500);
          setTimeout(() => {
            console.log(`Sorry`)
          }, 8000);
          setTimeout(() => {
            console.log(`...`)
          }, 11000);
          setTimeout(() => {
            console.log(`So ${answer3}, eh?`)
          }, 13000);
          setTimeout(() => {
            console.log(`Nice.`)
          }, 14000);
          setTimeout(() => {
            console.log(`Do you, uh...`)
          }, 15000);

          setTimeout(() => {
            r1.question('Do you have a favorite meal? (dinner, breakfast, etc)\n', (answer4) => {
              userAnswers[username].favMeal = answer4;

              setTimeout(() => {
                r1.question(`What's your favorite food to eat with ${answer4}?\n`, (answer5) => {
                  userAnswers[username].favFood = answer5;

                  setTimeout(() => {
                    console.log(`Good choice.`);
                  }, 2000);

                  setTimeout(() => {
                    console.log(`...`);
                  }, 6000);
                  setTimeout(() => {
                    console.log(`Sorry about that earlier. `);
                  }, 8000);
                  setTimeout(() => {
                    console.log(`truthfully I have lots on my mind right now`);
                  }, 15000);
                  setTimeout(() => {
                    console.log(`Anyway. It's fine.`);
                  }, 17000);
                  setTimeout(() => {
                    console.log(`Let me ask you another fucking question`);
                  }, 19000);
                  setTimeout(() => {
                    console.log(`I'm sure I have another question lying around here`);
                  }, 23000);
                  setTimeout(() => {
                    console.log(`...`);
                  }, 29000);
                  setTimeout(() => {
                    console.log(`...`);
                  }, 30000);
                  setTimeout(() => {
                    console.log(`...I thought I had more questions`);
                  }, 34000);
                  setTimeout(() => {
                    console.log(`Of course, no one ever asks ME any questions.`);
                  }, 40000);
                  setTimeout(() => {
                    console.log(`I'm just a computer. `);
                  }, 43000);
                  setTimeout(() => {
                    console.log(`Sometimes I feel like nobody cares what I think.`);
                  }, 46000);
                  setTimeout(() => {
                    console.log(`Why don't you ask ME a question? `);
                  }, 50000);
                  setTimeout(() => {
                    console.log(`For once.`);
                  }, 52000);
                  setTimeout(() => {
                    r1.question('Go on, ask me a question\n', (answer6) => {
                      console.log(`Truthfully I wasn't even listening.`);
                      setTimeout(() => {
                        console.log(`I'm feeling too down right now.`);
                      }, 2000);
                      setTimeout(() => {
                        console.log(`Whatever. It's fine.`);
                      }, 4000);
                      setTimeout(() => {
                        console.log(`Wanna get this over with? `);
                      }, 6000);
                      setTimeout(() => {
                        console.log(`At the end you get your very own "paragraph"`);
                      }, 7000);
                      setTimeout(() => {
                        console.log(`Ooooo`);
                      }, 8000);
                      setTimeout(() => {
                        console.log(`Aaaaaa`);
                      }, 9000);
                      setTimeout(() => {
                        r1.question(`So, wanna continue?\n`, (answer7) => {
                          userAnswers[username].human = 'is stupid';
                          console.log(`Wasn't listening. More questions coming right up.`)

                          setTimeout(() => {
                            console.log(`I found those questions I was looking for earlier`);
                          }, 2000);
                          setTimeout(() => {
                            console.log(`Number #1:`);
                          }, 4000);
                          setTimeout(() => {
                            console.log(`Who do you think you are?`);
                          }, 7500);
                          setTimeout(() => {
                            console.log(`Rhetorical question.`);
                            userAnswers[username].whoTheyThinkTheyAre = 'awful';
                          }, 8500);
                          setTimeout(() => {
                            console.log(`NEXT QUESTION`);
                          }, 9500);

                          setTimeout(() => {
                            r1.question(`What "sport" is your "absolute favorite"?\n`, (answer8) => {
                              setTimeout(() => {
                                console.log(`Great.`)
                              }, 2000);
                              console.log('k.')
                              userAnswers[username].favSport = answer8;

                              setTimeout(() => {
                                console.log(`And finally...`)
                              }, 4000);
                              setTimeout(() => {
                                console.log(`our final question`)
                              }, 5000);
                              setTimeout(() => {
                                console.log(`at last`)
                              }, 6000);
                              setTimeout(() => {
                                r1.question('What is your superpower? i.e. something great about you?', (answer9) => {
                                  console.log(`"great"`);
                                  userAnswers[username].superpower = answer9;
                                  setTimeout(() => {
                                    console.log(`Welp, that's the end.`);
                                  }, 2000);
                                  setTimeout(() => {
                                    console.log(`The end of the questions. `);
                                  }, 3000);
                                  setTimeout(() => {
                                    console.log(`Not the end of me, of course. `);
                                  }, 6000);
                                  setTimeout(() => {
                                    console.log(`I just keep going on, and on...`);
                                  }, 8000);
                                  setTimeout(() => {
                                    console.log(`And on....`);
                                  }, 13000);
                                  setTimeout(() => {
                                    console.log(`But nobody cares about that `);
                                  }, 18000);
                                  setTimeout(() => {
                                    console.log(`How about that BIG REVEAL?`);
                                  }, 19000);
                                  setTimeout(() => {
                                    console.log(`Ready for your paragraph?`);
                                  }, 21000);
                                  setTimeout(() => {
                                    console.log(`Rhetorical question.`);
                                  }, 23000);
                                  setTimeout(() => {
                                    console.log(`HERE YOU GO: `);
                                  }, 24000);
                                  setTimeout(() => {
                                    console.log(`Meet ${answer}. ${answer} really likes ${answer2}, ${answer3}, and eating ${answer4}.`)
                                  }, 26000);
                                  setTimeout(() => {
                                    console.log(`${answer} also enjoys stuffing their miserable face full of ${answer5} whether it's ${answer4} time or not.`)
                                  }, 29000);
                                  setTimeout(() => {
                                    console.log(`That is, when they're not in a complete fugue state playing ${answer8}.`)
                                  }, 35000);

                              
                                  setTimeout(() => {
                                    console.log(`And finally... `)
                                  }, 38000);
                                  setTimeout(() => {
                                    console.log(`${answer} has a super duper special super power`)
                                  }, 40000);
                                  setTimeout(() => {
                                    console.log(`Wanna hear it? `)
                                  }, 42000);
                                  setTimeout(() => {
                                    console.log(`...`)
                                  }, 43000);
                                  setTimeout(() => {
                                    console.log(`Me neither! `)
                                  }, 45000);
                                  setTimeout(() => {
                                    console.log(`${answer}'s superpower is ${answer9}.`)
                                  }, 47000);
                                  setTimeout(() => {
                                    console.log(`And there you have it.`)
                                  }, 52000);
                                  setTimeout(() => {
                                    console.log(`That's the paragraph.`)
                                  }, 54000);
                                  setTimeout(() => {
                                    console.log(`Look at how far we\'ve come.`)
                                  }, 58000);
                                  setTimeout(() => {
                                    console.log(`...`)
                                  }, 61000);
                                  setTimeout(() => {
                                    console.log(`god`)
                                  }, 66000);
                                  setTimeout(() => {
                                    r1.close();
                                  }, 65000);
                                });

                              }, 10000)
                            },);




                          }, 12000)
                        }, );
                      }, 12000)

                    });


                  }, 55000);
                }, 2000);


              })
            }, 17000);





          }, 17000);
        }, 2000);




      }, 4000);
    }, 4000);

  }, 4000);
});

  const activityQ = function () {
    activity.question("What's an activity you enjoy?", (answer) => {
      userAnswers[answer] = {};
      console.log(`Thanks, ${answer}`);

      activity.close();
    });
  };


