const express = require('express')
const app = express()
const PORT = 8000
require('dotenv').config()
const seasonalEpis = {
  'autumn': {
    'season 1': {
      'Episode 3':{ 
        'EpiName':'Kill Me Now',
        'Description': 'Rory goes golfing with her grandfather and surprisingly has a good time. At Lorelai\'s inn, a wedding is stressing everyone out.'
      },
    
      'Episode 4':{
        'EpiName':'The Deer Hunters',
        'Description': 'Rory receives a bad grade as she still struggles to catch up at Chilton.'
      },
  
      'Episode 5':{
        'EpiName':'Cinnamon\'s Wake',
        'Description': 'Lorelai is struck by two deaths; Lorelai decides to finally confront Max with her feelings for him, and he tackles his feelings as well.'
      },
    
      'Episode 6':{
        'EpiName':'Rory\'s Birthday Parties',
        'Description': 'It\'s Rory\'s birthday. She gets two parties. An elegant and horrible affair thrown by her grandmother and an informal fun party thrown by Lorelai.'
      },
    
      'Episode 7':{
        'EpiName':'Rory\'s Birthday Parties',
        'Description': 'Rory gets her first kiss from Dean. The whole town is buzzing about it, yet Rory has not told Lorelai.'
      }
    },
  
    'season 2': {
      'Episode 4':{
        'EpiName':'Road Trip to Harvard',
        'Description': 'Lorelai takes Rory on a road trip, where they stay at an unusual bread-and-breakfast and visit Rory\'s dream school.'
      },
  
      'Episode 6':{
        'EpiName':'Presenting Lorelai Gilmore',
        'Description': 'Rory makes her debut at a Debutante Ball at her grandmother\'s request. Lorelai asks Rory\'s dad Christopher to present his daughter to society.'
      },
  
      'Episode 7':{
        'EpiName':'Like Mother, Like Daughter',
        'Description': 'Headmaster Charleston wants Lorelai and Rory to be more socially engaged at school.'
      },
  
      'Episode 8':{
        'EpiName':'The Ins and Outs of Inns',
        'Description': 'Lorelai and Sookie have the first fight of their long friendship when, upon hearing that the Independence Inn may be sold, Lorelai panics and decides that their shared dream of opening an inn together is doomed to failure.'
      },
  
      'Episode 10':{
        'EpiName':'The Bracebridge Dinner',
        'Description': 'Lorelai invites the residents of Stars Hollow to an elaborate feast complete with Elizabethan costumes and horse-drawn sleigh rides.'
      }
    },
  
    'season 3':{
      'Episode 5':{
        'EpiName':'Eight O\'Clock at the Oasis',
        'Description': 'Lorelai is cornered by a new local and talked in to watering his garden whilst he\'s away on a business trip. When Lorelai has to get to work, she asks Rory to take over, but when things go wrong she has to enlist Jess\' help. Lorelai also asks Emily for help finding a guy she met at an auction house, but realizes he\'s not quite what she anticipated.'
      },
  
      'Episode 6':{
        'EpiName':'Take the Deviled Eggs...',
        'Description': 'Rory is invited to Sherry\'s baby shower and Lorelai gets pulled in with her. Between Sherry\'s goodwill and the party poppers, Lorelai is at her breaking point and feels the need to let off some steam. Jess comes home with a car and the town gathers for a not so successful town demonstration...stop the noodle shoes?'
      },
  
      'Episode 7':{
        'EpiName':'They Shoot Gilmores, Don\'t They?',
        'Description': 'It\'s time for the annual Stars Hollow Dance marathon again and Lorelai is determined to win. Dean sits in the bleachers to support Rory, but so does Jess whose intentions aren\'t quite so innocent.'
      },
  
      'Episode 8':{
        'EpiName':'Let the Games Begin',
        'Description': 'Lorelai and Rory are still sore from the dance marathon. Richard invites Rory to a Yale reunion.'
      },
  
      'Episode 10':{
        'EpiName':'A Deep Fried Korean Thanksgiving',
        'Description': 'Rory and Lorelai work to accommodate four Thanksgiving dinners. Lorelai finds out Rory applied to more colleges then just Harvard. Lane has her first kiss. Human Kirk and cat Kirk have a little adjusting to do.'
      }
    },
  
    'season 4':{
      'Episode 5':{
        'EpiName':'The Fundamental Things Apply',
        'Description': 'Rory tries dating in college. Lorelai is still adjusting to an empty house.'
      },
  
      'Episode 6':{
        'EpiName':'An Affair to Remember',
        'Description': 'Rory\'s roommates have her on edge so she tries to find the perfect place to study. Meanwhile Emily hires Sookie and Lorelai to cater Richard\'s office party only to find out Jason has other ideas.'
      },
  
      'Episode 7':{
        'EpiName':'The Festival of Living Art',
        'Description': 'Stars Hollow is asked to host a Festival of Living Art when a neighboring town backs out, inspiring the town regulars pitch in to pull it off in only a week. Lane finds the perfect guitarist to replace Dave, but Zach objects because of his age. Sookie and Jackson hire one of the best midwifes on the eastern seaboard. Luke and Nicole decide to hold off on their divorce.'
      },
  
      'Episode 8':{
        'EpiName':'Die, Jerk',
        'Description': 'After receiving advice from the Yale Daily News editor on what he is looking for, Rory\'s next article is a huge hit with everybody except the dancer she reviewed. Richard and Emily return from their Atlantic City business trip while Lane is told to send a special jug to Dave in California. Lorelai confronts Luke about his relationship with Nicole and Bruce confronts Lorelai and her anti midwife energy on retarding the baby\'s acquisition rate.'
      },
  
      'Episode 9':{
        'EpiName':'Ted Koppel\'s Big Night Out',
        'Description': 'At lunch, Richard introduces Rory and Paris to his old friend. The Gilmores go in style to the Harvard-Yale game.'
      }
    },
  
    'season 5':{
      'Episode 5':{
        'EpiName':'We Got Us a Pippi Virgin',
        'Description': 'Jackson is overwhelmed by the demands of his new job while Lorelai and Rory decide to see if they can get Richard and Emily back together. With Dean back in the picture, Lorelai tries to make things right with dinner and a movie, but when Pippi Longstocking isn\'t a good enough distraction for Luke\'s feelings that Dean isn\'t good enough for Rory, Lorelai has to bring out the Bop It!.'
      },
  
      'Episode 7':{
        'EpiName':'You Jump, I Jump, Jack',
        'Description': 'When Emily discovers that Lorelai is dating Luke, she insists he come to dinner. Not to be outdone, Richard invites Luke to a game of golf, and Luke finds himself overwhelmed by the strength of the elder Gilmores\' personalities.'
      },
  
      'Episode 8':{
        'EpiName':'The Party\'s Over',
        'Description': 'Luke tries to smooth things over with Liz and TJ when they stress out about buying a house in Stars Hollow. When Emily learns Rory and Dean are dating again, she calls a temporary truce with Richard to throw a party to introduce Rory to more suitable men. Dean realizes he isn\'t one of them, and Logan realizes he is.'
      },
      
      'Episode 9*':{
        'EpiName':'Emily Says Hello',
        'Description': 'Jackson has his hands full between Sookie\'s food cravings and his town selectman duties. Lorelai invites Christopher to lunch, but Rory tells him off and asks Lorelai what Luke thinks of her and Christopher having lunch. Emily decides she\'s still a viable commodity and asks Lorelai to help her start dating.'
      },
  
      'Episode 10':{
        'EpiName':'But Not as Cute as Pushkin',
        'Description': 'Rory is asked to host a Chilton student for a few days at Yale, but the student is more interested in her freedoms than the responsibilities that go with them. Lorelai learns about Luke\'s dark day, which happens to fall on the same day as Miss Patty\'s 40th anniversary party. Logan works his way into Rory\'s life, prompting her and Richard to pull a little prank of their own.'
      }
    },
  
    'season 6':{
      'Episode 5':{
        'EpiName':'We\'ve Got Magic to Do',
        'Description': 'Rory\'s World War II-themed DAR bash is a piperoo (even when suddenly impoverished Paris joins the proletariat as a server). But the bash goes smash when Richard confronts Mitchum Huntzberger.'
      },
  
      'Episode 6':{
        'EpiName':'Welcome to the Dollhouse',
        'Description': 'What\'s in a name? To boost tourism, Taylor suggests reviving Stars Hollow\'s original street names. Lorelai thinks that\'s a charming idea -until she learns what the new Dragonfly Inn address will be.'
      },
  
      'Episode 7':{
        'EpiName':'Twenty-One is the Loneliest Number',
        'Description': 'Since Rory was a tyke, the Gilmore girls have planned her 21st birthday: in Atlantic City, sipping martinis, playing 21. But with the estrangement, Emily plans the birthday party -and it\'s soooo not Atlantic City.'
      },
  
      'Episode 8':{
        'EpiName':'Let Me Hear Your Balalaikas Ringing Out',
        'Description': 'Who can finally get Rory thinking she made a BIG mistake dropping out of Yale? If you guess Jess, you\'re right. Her old flame returns with exciting news about his life... and some blunt advice about hers.'
      },
  
      'Episode 9':{
        'EpiName':'The Prodigal Daughter Returns',
        'Description': 'Like meat and potatoes, like salt and tomatoes, the Gilmore girls belong together. Rory comes home. And a supersmart middle schooler shows up at Luke\'s Diner with a startling idea for a science fair project.'
      },
      
      'Episode 10':{
        'EpiName':'He\'s Slippin\' \'Em Bread... Dig?',
        'Description': 'Thanksgiving arrives and, after months of emotional turmoil, all is well on Planet Gilmore. Except for one teeny issue: Luke doesn\'t know how to tell Lorelai about his daughter. Lane\'s band plays a showcase.'
      }
    },
    //add season 7 epis from THE PIC NEXT DOOR, and Fall
    
    'season 7':{
      'Episode 4':{
        'EpiName':'\'S Wonderful, \'S Marvelous',
        'Description': 'Lorelai and Christopher have begun to date, and although Lorelai is finding it difficult to fully commit to the relationship, Christopher keeps coming up with romantic dates to win her over. Back at Yale, Rory meets some eccentric new girlfriends at an art exhibit, and Richard becomes a guest lecturer. April comes to stay with Luke for a few weeks while Ana is out of town. Finally, Emily gets arrested and Lorelai has to bail her out of jail.'
      },
  
      'Episode 5':{
        'EpiName':'The Great Stink',
        'Description': 'Emily and Richard are delighted when Lorelai and Christopher attend Friday night dinner together as a couple. Christopher reveals that Sherry has written him a letter saying she regrets leaving their daughter, G.G., and asking him to send G.G. to visit her in Paris. Lorelai can\'t believe that Chris would consider this and they get into an argument over dinner. Logan returns to town on business to acquire an internet company and pays Rory a surprise visit. Rory is thrilled, but during a dinner with Logan\'s colleagues, she realizes that she has no connection to his new business world, and is especially threatened by one of his beautiful co-workers. Meanwhile, Stars Hollow is plagued by a terrible odor when a train with a full load of pickles derails, and Taylor refuses to pay for the cleanup.'
      },
  
      'Episode 6':{
        'EpiName':'Go Bulldogs',
        'Description': 'Christopher talks Lorelai into visiting Rory at Yale during Parents\' Weekend, and Lorelai is surprised to find that Richard and Emily are also there. Trying to prove how cool he is, Christopher invites all of Rory\'s co-workers on the Yale Daily News to an expensive lunch where they all drink too much, and the meal ends abruptly when Rory insists they leave to cover a breaking story. Meanwhile, Luke meets April\'s swimming coach, who convinces him to take her adult swimming class. When the coach flirts with him, Luke asks her out on a date..'
      },
  
      'Episode 18':{
        'EpiName':'Hay Bale Maze',
        'Description': 'Taylor organizes the Hay Bale Maze. Luke and Lorelai reconcile. Rory has a job interview.'
      }
    },
  
    'gilmore girls: a year in the life':{
      'Episode 4':{
        'EpiName':'Fall',
        'Description': 'At odds with the most important people in her life, Lorelai seeks wisdom in nature. Rory goes out for a wild night with an unexpected crowd.'
      }
    } 
  },

  'winter':{
    'season 1': {
      'Episode 8':{ 
        'EpiName':'Love and War and Snow',
        'Description': 'It\'s snowing, and Lorelai is giddy. She runs into Max in Stars Hollow, and invites him back to her place. But they run into someone unexpected when they get there. Lane feels left-out of Rory\'s life.'
      },
    
      'Episode 9':{
        'EpiName':'Rory\'s Dance',
        'Description': 'Rory and Dean attend a formal dance at Chilton. A mishap leads to a fight between Emily and Lorelai.'
      },

      'Episode 10':{
        'EpiName':'Forgiveness and Stuff',
        'Description': 'Richard Gilmore is rushed to hospital after collapsing at the Christmas party. Luke goes with Lorelai to the hospital, where Emily and Rory already are.'
      }
    },

    'season 2':{
      'Episode 10':{
        'EpiName':'The Bracebridge Dinner',
        'Description': 'Lorelai invites the residents of Stars Hollow to an elaborate feast complete with Elizabethan costumes and horse-drawn sleigh rides.'
      }
    },

    'season 3':{
      'Episode 10':{
        'EpiName':'That\'ll Do, Pig',
        'Description': 'It\'s Richard\'s birthday. His mother arrives from England and announces her return to the States. Rory deals with Francie at school. Rory and Dean decide to be friends.'
      },

      'Episode 10':{
        'EpiName':'I Solemnly Swear',
        'Description': 'Emily is being sued by a maid for wrongful termination and asks Lorelai to attest to her character. Francie manages to come between Paris and Rory leaving Rory out in the cold and Sookie unwittingly sets up a date with an old friend.'
      }
    },
    'season 4':{
      'Episode 11':{
        'EpiName':'In the Clamor and the Clangor',
        'Description': 'Lane\'s band gets a gig at famous CBGB\'s in New York, but it doesn\'t come without a price. Luke and Lorelai make up to silence the newly restored bells but only after Lorelai realizes maybe Luke hasn\'t moved completely away and Rory confronts William about their relationship.'
      }
    },
    
    'season 5':{
      'Episode 11':{
        'EpiName':'Woman of Questionable Morals',
        'Description': 'Rory continues to give her dad the cold shoulder until she learns his father has passed away. Lorelai spends time comforting Christopher but keeps it from Luke, and Richard and Emily find a lost dog.'
      },

      'Episode 12':{
        'EpiName':'Come Home',
        'Description': 'Richard gets jealous and comes to a realization after finding out who Emily is dating. Rory offers to help Logan with an article, but she has ulterior motives. Tensions arise when Lane and Zack attend a Kim Family tradition. A "ghost" haunts the Dragon Fly. Emily has a time-sensitive warning for Christopher.'
      }
    },

    'season 6':{
      'Episode 12':{
        'EpiName':'Just Like Gwen and Gavin',
        'Description': 'Getting an education: Taylor Doose learns the Winter Carnival can be successful without him. Paris learns the Yale Daily News staff loathes and fears her, and Lorelai learns Luke has a daughter.'
      }
    },

    'season 7':{
      'Episode 11':{
        'EpiName':'Santa\'s Secret Stuff',
        'Description': 'Lorelai and Christopher put the holidays on hold until Rory returns from London; Luke asks Lorelai to write a recommendation letter for his custody battle.'
      },

      'Episode 12':{
        'EpiName':'To Whom It May Concern',
        'Description': 'Noticing Sookie\'s recent odd behavior, Lorelai forces Jackson to tell her the reason. Luke and Anna attend a hearing to decide their custody battle over April. While attending Richard\'s economics class at Yale, Rory witnesses a frightening scene. Finally, Christopher finds the letter Lorelai wrote for Luke\'s character reference.'
      }

    },

    'gilmore girls: a year in the life':{
      'Episode 1':{
        'EpiName':'Winter',
        'Description': 'AFresh from a career high, Rory pays a visit to Stars Hollow. Emily copes with Richard\'s death. The inn keeps Lorelai busy as she ponders her future.'
      }
    } 
  }
}


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
  res.json(seasonalEpis)
})

app.get('/api/:season', (req, res) => {
  const whichSeason = req.params.season.toLowerCase()
  if ( seasonalEpis[whichSeason]){
    res.json(seasonalEpis[whichSeason])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on ${PORT}! You better go catch it!`)
})