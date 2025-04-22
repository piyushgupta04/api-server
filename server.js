const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Sample quotes as objects
const quotes = [
    {
    "author": "Jim Rohn",
    "quote": "Success is nothing more than a few simple disciplines, practiced every day; while failure is simply a few errors in judgment, repeated every day. It is the accumulative weight of our disciplines and our judgments that leads us to either fortune or failure."
  },
  {
    "author": "Earl Nightingale",
    "quote": "We become what we think about."
  },
  {
    "author": "Zig Ziglar",
    "quote": "You don't have to be great to start, but you have to start to be great."
  },
  {
    "author": "Denis Waitley",
    "quote": "The greatest achievements were at first and for a time dreams."
  },
  {
    "author": "Napoleon Hill",
    "quote": "Whatever the mind of man can conceive and believe, it can achieve."
  },
  {
    "author": "Jim Rohn",
    "quote": "Don't wish it were easier, wish you were better."
  },
  {
    "author": "Earl Nightingale",
    "quote": "Our attitude towards life determines life's attitude towards us."
  },
  {
    "author": "Zig Ziglar",
    "quote": "People often say that motivation doesn't last. Well, neither does bathing—that's why we recommend it daily."
  },
  {
    "author": "Denis Waitley",
    "quote": "Expect the best, plan for the worst, and prepare to be surprised."
  },
  {
    "author": "Napoleon Hill",
    "quote": "The starting point of all achievement is desire."
  },
  {
    "author": "Jim Rohn",
    "quote": "Happiness is not something you postpone for the future; it is something you design for the present."
  },
  {
    "author": "Earl Nightingale",
    "quote": "Take time to deliberate; but when the time for action arrives, stop thinking and go in."
  },
  {
    "author": "Zig Ziglar",
    "quote": "If you can dream it, you can achieve it."
  },
  {
    "author": "Denis Waitley",
    "quote": "Learn from the past, set vivid, detailed goals for the future, and live in the only moment of time over which you have any genuine control: now."
  },
  {
    "author": "Napoleon Hill",
    "quote": "Patience, persistence and perspiration make an unbeatable combination for success."
  },
  {
    "author": "Jim Rohn",
    "quote": "The major value in life is not what you get. The major value in life is what you become."
  },
  {
    "author": "Earl Nightingale",
    "quote": "Success is the progressive realization of a worthy ideal."
  },
  {
    "author": "Zig Ziglar",
    "quote": "You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win."
  },
  {
    "author": "Denis Waitley",
    "quote": "Losers live in the past. Winners learn from the past and enjoy working in the present toward the future."
  },
  {
    "author": "Napoleon Hill",
    "quote": "There is no substitute for persistence."
  },
  {
    "author": "Jim Rohn",
    "quote": "Formal education will make you a living; self-education will make you a fortune."
  },
  {
    "author": "Earl Nightingale",
    "quote": "Whatever we plant in our subconscious mind and nourish with repetition and emotion will one day become a reality."
  },
  {
    "author": "Zig Ziglar",
    "quote": "A goal properly set is halfway reached."
  },
  {
    "author": "Denis Waitley",
    "quote": "Change the changeable, accept the unchangeable, and remove yourself from the unacceptable."
  },
  {
    "author": "Napoleon Hill",
    "quote": "Think twice before you speak, because your words and influence will plant the seed of either success or failure in the mind of another."
  },
  {
    "author": "Jim Rohn",
    "quote": "Motivation alone is not enough. If you have an idiot and you motivate him, now you have a motivated idiot."
  },
  {
    "author": "Earl Nightingale",
    "quote": "The opposite of courage in our society is not cowardice, it is conformity."
  },
  {
    "author": "Zig Ziglar",
    "quote": "The greatest of all human abilities is the ability to get along well with other people."
  },
  {
    "author": "Denis Waitley",
    "quote": "It's not what you are that holds you back, it's what you think you are not."
  },
  {
    "author": "Napoleon Hill",
    "quote": "Opportunity often comes disguised in the form of misfortune, or temporary defeat."
  },
  {
    "author": "Jim Rohn",
    "quote": "Discipline is the bridge between goals and accomplishment."
  },
  {
    "author": "Earl Nightingale",
    "quote": "Our rewards in life will always be in exact proportion to our contribution, our service."
  },
  {
    "author": "Zig Ziglar",
    "quote": "Success is a journey, not a destination. The doing is often more important than the outcome."
  },
  {
    "author": "Denis Waitley",
    "quote": "Don't measure yourself by what you have accomplished, but by what you should have accomplished with your ability."
  },
  {
    "author": "Napoleon Hill",
    "quote": "The ladder of success is never crowded at the top."
  },
  {
    "author": "Jim Rohn",
    "quote": "If you don't like how things are, change it! You're not a tree."
  },
  {
    "author": "Earl Nightingale",
    "quote": "Concentrate all your thoughts upon the work at hand. The sun's rays do not burn until brought to a focus."
  },
  {
    "author": "Zig Ziglar",
    "quote": "Lack of direction, not lack of time, is the problem. We all have twenty-four hour days."
  },
  {
    "author": "Denis Waitley",
    "quote": "Mistakes are proof that you are trying."
  },
  {
    "author": "Napoleon Hill",
    "quote": "More gold has been mined from the thoughts of men than has ever been taken from the earth."
  },
  {
    "author": "Jim Rohn",
    "quote": "Let others lead small lives, but not you. Let others argue over small things, but not you. Let others cry over small hurts, but not you. Let others leave their future in someone else's hands, but not you."
  },
  {
    "author": "Earl Nightingale",
    "quote": "The mind moves in the direction of our dominant thoughts."
  },
  {
    "author": "Zig Ziglar",
    "quote": "Honesty and integrity are by far the most important assets of an entrepreneur."
  },
  {
    "author": "Denis Waitley",
    "quote": "The winner's edge is not in a gifted birth, a high IQ, or in talent. The winner's edge is all in attitude, not aptitude. Attitude is the criterion for success."
  },
  {
    "author": "Napoleon Hill",
    "quote": "Self-discipline is the magic power that makes you virtually unstoppable."
  },
  {
    "author": "Jim Rohn",
    "quote": "Take care of your body. It’s the only place you have to live."
  },
  {
    "author": "Earl Nightingale",
    "quote": "Whatever we vividly imagine, ardently desire, sincerely believe, and enthusiastically act upon... must inevitably come to pass!"
  },
  {
    "author": "Zig Ziglar",
    "quote": "If you aim at nothing, you will hit it every time."
  },
  {
    "author": "Denis Waitley",
    "quote": "Happiness cannot be traveled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace, and gratitude."
  },
  {
    "author": "Napoleon Hill",
    "quote": "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit."
  },
  {
    "author": "Og Mandino",
    "quote": "Always do your best. What you plant now, you will harvest later."
  },
  {
    "author": "Stephen Covey",
    "quote": "Begin with the end in mind."
  },
  {
    "author": "Brian Tracy",
    "quote": "Your ability to set goals is the master skill for success."
  },
  {
    "author": "Tony Robbins",
    "quote": "It's not about the resources, it's about resourcefulness."
  },
  {
    "author": "Les Brown",
    "quote": "You don't have to be great to get started, but you have to get started to be great."
  },
  {
    "author": "Og Mandino",
    "quote": "Failure will never overtake me if my determination to succeed is strong enough."
  },
  {
    "author": "Stephen Covey",
    "quote": "Seek first to understand, then to be understood."
  },
  {
    "author": "Brian Tracy",
    "quote": "Whatever you dwell upon, you become."
  },
  {
    "author": "Tony Robbins",
    "quote": "Setting goals is the first step in turning the invisible into the visible."
  },
  {
    "author": "Les Brown",
    "quote": "Most people fail, not because they lack intelligence, but because they lack desire."
  },
  {
    "author": "Og Mandino",
    "quote": "I will persist until I succeed."
  },
  {
    "author": "Stephen Covey",
    "quote": "Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom."
  },
  {
    "author": "Brian Tracy",
    "quote": "The key to success is to focus our conscious mind on things we desire, not things we fear."
  },
  {
    "author": "Tony Robbins",
    "quote": "The only limit to your impact is your imagination and commitment."
  },
  {
    "author": "Les Brown",
    "quote": "Shoot for the moon. Even if you miss, you'll land among the stars."
  },
  {
    "author": "Og Mandino",
    "quote": "Treat everyone you meet as if they were to die at midnight tonight. Extend to them all your care, understanding, kindness and love. Never put off till tomorrow the expression of love you can offer today."
  },
  {
    "author": "Stephen Covey",
    "quote": "Highly proactive people take responsibility by choosing their responses."
  },
  {
    "author": "Brian Tracy",
    "quote": "All successful people men and women are big dreamers. They imagine their future ideal, and then they work every day toward their distant vision, that goal or purpose."
  },
  {
    "author": "Tony Robbins",
    "quote": "Where focus goes, energy flows."
  },
  {
    "author": "Les Brown",
    "quote": "It's possible!"
  },
  {
    "author": "Jim Rohn",
    "quote": "Work harder on yourself than you do on your job."
  },
  {
    "author": "Earl Nightingale",
    "quote": "The miracle of man is not how far he has sunk but how magnificently he can rise."
  },
  {
    "author": "Zig Ziglar",
    "quote": "Every sale has five basic obstacles: no need, no money, no hurry, no desire, no trust."
  },
  {
    "author": "Denis Waitley",
    "quote": "The greatest discovery of all time is that a person can change his future by merely changing his attitude."
  },
  {
    "author": "Napoleon Hill",
    "quote": "Riches begin in the form of thought."
  },
  {
    "author": "Og Mandino",
    "quote": "I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars."
  },
  {
    "author": "Stephen Covey",
    "quote": "Live out of your imagination, not your history."
  },
  {
    "author": "Brian Tracy",
    "quote": "Clarity is the key to success in every area of your life."
  },
  {
    "author": "Tony Robbins",
    "quote": "Stay committed to your decisions, but stay flexible in your approach."
  },
  {
    "author": "Les Brown",
    "quote": "When life knocks you down, try to land on your back. Because if you can look up, you can get up."
  },
  {
    "author": "Jim Rohn",
    "quote": "Profits are better than wages. Wages make you a living; profits can make you a fortune."
  },
  {
    "author": "Earl Nightingale",
    "quote": "The more intensely we feel about an idea or a goal, the more assuredly the idea, buried deep in our subconscious, will direct us along the path to its fulfillment."
  },
  {
    "author": "Zig Ziglar",
    "quote": "The price of success is not as high as the price of failure."
  },
  {
    "author": "Denis Waitley",
    "quote": "Your attitude is either the lock on, or the key to your door of success."
  },
  {
    "author": "Napoleon Hill",
    "quote": "You are the master of your destiny. You can influence, direct and control your own environment. You can make your life what you want it to be."
  },
  {
    "author": "Og Mandino",
    "quote": "Today I begin a new life."
  },
  {
    "author": "Stephen Covey",
    "quote": "Our ultimate freedom is the right and power to decide how anybody or anything outside ourselves will affect us."
  },
  {
    "author": "Brian Tracy",
    "quote": "You have within you, right now, everything you need to deal with whatever the world can throw at you."
  },
  {
    "author": "Tony Robbins",
    "quote": "If you do what you've always done, you'll get what you've always gotten."
  },
  {
    "author": "Les Brown",
    "quote": "Dream as if you'll live forever, live as if you'll die today."
  },
  {
    "author": "Jim Rohn",
    "quote": "Miss a meal if you have to, but don't miss a book."
  },
  {
    "author": "Earl Nightingale",
    "quote": "The trouble with most people is that they quit before they start."
  },
  {
    "author": "Zig Ziglar",
    "quote": "It's not what you've got, it's what you use that makes a difference."
  },
  {
    "author": "Denis Waitley",
    "quote": "When you visualize, then you materialize."
  },
  {
    "author": "Napoleon Hill",
    "quote": "A quitter never wins and a winner never quits."
  },
  {
    "author": "Og Mandino",
    "quote": "I will live this day as if it is my last. And if it is not, I shall fall to my knees and give thanks."
  },
  {
    "author": "Stephen Covey",
    "quote": "Accountability breeds response-ability."
  },
  {
    "author": "Brian Tracy",
    "quote": "Make your life a masterpiece; imagine no limitations on what you can be, have or do."
  },
  {
    "author": "Tony Robbins",
    "quote": "Success in life is the result of good judgment. Good judgment is usually the result of experience. Experience is frequently the result of bad judgment."
  },
  {
    "author": "Les Brown",
    "quote": "You are never too old to set another goal or to dream a new dream."
  },
  {
    "author": "Jim Rohn",
    "quote": "Either you run the day or the day runs you."
  },
  {
    "author": "Earl Nightingale",
    "quote": "The more we give, the more we get."
  },
  {
    "author": "Zig Ziglar",
    "quote": "Selling is essentially a transfer of feelings."
  },
  {
    "author": "Denis Waitley",
    "quote": "Motivation is a fire from within. If someone else tries to light that fire under you, chances are it will burn very briefly."
  },
  {
    "author": "Napoleon Hill",
    "quote": "The man who does more than he is paid for will soon be paid for more than he does."
  },
  {
    "author": "Og Mandino",
    "quote": "I will greet this day with love in my heart."
  },
  {
    "author": "Stephen Covey",
    "quote": "Effective leadership is putting first things first. Effective management is discipline carrying it out."
  },
  {
    "author": "Brian Tracy",
    "quote": "The future belongs to the competent. Get good, get better, be the best!"
  },
  {
    "author": "Tony Robbins",
    "quote": "Progress equals happiness."
  },
  {
    "author": "Les Brown",
    "quote": "Your goals are the road maps that guide you and show you what is possible for your life."
  },
  {
    "author": "Jim Rohn",
    "quote": "Don't join an easy crowd; you won't grow. Go where the expectations and the demands to perform are high."
  },
  {
    "author": "Earl Nightingale",
    "quote": "Most of the shadows of this life are caused by standing in one's own sunshine."
  },
  {
    "author": "Zig Ziglar",
    "quote": "Success means doing the best you can with what you have. Success is the doing, not the getting; in the trying, not the triumph. Success is a personal standard, reaching for your highest potential, becoming all that you can be."
  },
  {
    "author": "Denis Waitley",
    "quote": "Time is an equal opportunity employer. Each human being has exactly the same number of hours and minutes every day. Rich people can't buy more hours; scientists can't invent new minutes. And you can't save time to spend it on another day. Yet time is arguably our most perishable, most irreplaceable asset."
  },
  {
    "author": "Napoleon Hill",
    "quote": "When your desires are strong enough you will appear to possess superhuman powers to achieve."
  },
  {
    "author": "Og Mandino",
    "quote": "I will not cry for yesterday's failures, nor fret about tomorrow's problems. I will live this day until it is finished."
  },
  {
    "author": "Stephen Covey",
    "quote": "The main thing is to keep the main thing the main thing."
  },
  {
    "author": "Brian Tracy",
    "quote": "Develop an attitude of gratitude, and give thanks for everything that happens to you, knowing that every step forward is a step toward achieving something bigger and better than your current situation."
  },
  {
    "author": "Tony Robbins",
    "quote": "The path to success is to take massive, determined action."
  },
  {
    "author": "Les Brown",
    "quote": "Make it happen!"
  },
  {
    "author": "Jim Rohn",
    "quote": "Either you get busy living or you get busy dying."
  },
  {
    "author": "Earl Nightingale",
    "quote": "Whatever we plant in our minds and nourish with repetition and emotion will one day become reality."
  },
  {
    "author": "Zig Ziglar",
    "quote": "If you learn from defeat, you haven't really been defeated."
  },
  {
    "author": "Denis Waitley",
    "quote": "Never become so much of an expert that you stop gaining expertise. View life as a continuous learning experience."
  },
  {
    "author": "Napoleon Hill",
    "quote": "There are no limitations to the mind except those we acknowledge."
  },
  {
    "author": "Og Mandino",
    "quote": "The prizes life offers are found at the end of each journey, not near the starting point; and not along the easy byways."
  },
  {
    "author": "Stephen Covey",
    "quote": "To touch the soul of another human being is to walk on holy ground."
  },
  {
    "author": "Brian Tracy",
    "quote": "Think about your goals at least five minutes every day. The more you think about what you want, the more you will focus on it and the more motivated you will be to achieve it."
  },
  {
    "author": "Tony Robbins",
    "quote": "Beliefs have the power to create and the power to destroy. Human beings have the awesome ability to take any experience of their lives and create a meaning that disempowers them or one that empowers them."
  },
  {
    "author": "Les Brown",
    "quote": "Your destiny is not determined by your critics."
  },
  {
    "author": "Jim Rohn",
    "quote": "The few who do are the envy of the many who only watch."
  },
  {
    "author": "Earl Nightingale",
    "quote": "People with goals succeed because they know where they're going."
  },
  {
    "author": "Zig Ziglar",
    "quote": "You can have everything in life you want, if you will just help other people get what they want."
  },
  {
    "author": "Denis Waitley",
    "quote": "It's not in the dreaming, it's in the doing."
  },
  {
    "author": "Napoleon Hill",
    "quote": "The strongest oak of the forest is not the one that is protected from the storm and hidden from the sun. It’s the one that stands in the open where it is compelled to struggle for its existence against the winds and rains and the burning sun."
  },
  {
    "author": "Og Mandino",
    "quote": "Seek not to emulate the masters but seek what they sought."
  },
  {
    "author": "Stephen Covey",
    "quote": "When we treat people merely as they are, they will remain as they are. When we treat them as if what they could be, they become what they should be."
  },
  {
    "author": "Brian Tracy",
    "quote": "Make a habit of doing the things that other people don't like to do."
  },
  {
    "author": "Tony Robbins",
    "quote": "Energy and emotion are what drive human beings."
  },
  {
    "author": "Les Brown",
    "quote": "Someone's opinion of you does not have to become your reality."
  },
  {
    "author": "Jim Rohn",
    "quote": "You must take personal responsibility. You cannot change the circumstances, the seasons, or the wind, but you can change yourself. That is something you have charge of."
  },
  {
    "author": "Earl Nightingale",
    "quote": "Don't let anyone steal your dream."
  },
  {
    "author": "Zig Ziglar",
    "quote": "The greatest source of happiness is the ability to be grateful at all times."
  },
  {
    "author": "Denis Waitley",
    "quote": "Failure should be our teacher, not our undertaker. Failure is delay, not defeat. It is a temporary detour, not a dead end."
  },
  {
    "author": "Napoleon Hill",
    "quote": "The way of success is the way of continuous pursuit of knowledge."
  },
  {
    "author": "Og Mandino",
    "quote": "Begin each day as if it were willed into being solely for your benefit."
  },
  {
    "author": "Stephen Covey",
    "quote": "Habits are powerful factors in our lives. Because they are consistent, often unconscious patterns, they constantly, daily express our character and produce our effectiveness... or ineffectiveness."
  },
  {
    "author": "Brian Tracy",
    "quote": "Set peace of mind as your highest goal, and organize your life around it."
  }
];

// GET endpoint for all quotes
app.get('/quotes', (req, res) => {
  res.json(quotes);
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Quotes API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
