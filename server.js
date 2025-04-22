const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Sample quotes as objects
const quotes = [{
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
  },
    {
    "author": "Unknown",
    "quote": "The best time to plant a tree was 20 years ago. The second best time is now."
  },
  {
    "author": "Seneca",
    "quote": "Difficulties strengthen the mind, as labor does the body."
  },
  {
    "author": "Marcus Aurelius",
    "quote": "Waste no more time arguing about what a good man should be. Be one."
  },
  {
    "author": "Epictetus",
    "quote": "It's not what happens to you, but how you react to it that matters."
  },
  {
    "author": "Benjamin Franklin",
    "quote": "Lost time is never found again."
  },
  {
    "author": "Thomas Sowell",
    "quote": "Mistakes can be corrected by those who pay attention... but geniuses blunder in grand style because they don't believe they are making mistakes."
  },
  {
    "author": "Theodore Roosevelt",
    "quote": "Believe you can and you're halfway there."
  },
  {
    "author": "Winston Churchill",
    "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts."
  },
  {
    "author": "Henry Ford",
    "quote": "Whether you think you can, or you think you can't – you're right."
  },
  {
    "author": "Albert Einstein",
    "quote": "The definition of insanity is doing the same thing over and over again and expecting different results."
  },
  {
    "author": "Maya Angelou",
    "quote": "You may not control all the events that happen to you, but you can decide not to be reduced by them."
  },
  {
    "author": "Eleanor Roosevelt",
    "quote": "Do one thing every day that scares you."
  },
  {
    "author": "Ralph Waldo Emerson",
    "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us."
  },
  {
    "author": "Confucius",
    "quote": "Our greatest glory is not in never failing, but in rising up every time we fail."
  },
  {
    "author": "Lao Tzu",
    "quote": "The journey of a thousand miles begins with a single step."
  },
  {
    "author": "Bruce Lee",
    "quote": "The successful warrior is the average man, with laser-like focus."
  },
  {
    "author": "Walt Disney",
    "quote": "All our dreams can come true, if we have the courage to pursue them."
  },
  {
    "author": "Oprah Winfrey",
    "quote": "The biggest adventure you can ever take is to live the life of your dreams."
  },
  {
    "author": "Steve Jobs",
    "quote": "The only way to do great work is to love what you do."
  },
  {
    "author": "Mark Twain",
    "quote": "The secret of getting ahead is getting started."
  },
  {
    "author": "Plato",
    "quote": "Human behavior flows from three main sources: desire, emotion, and knowledge."
  },
  {
    "author": "Aristotle",
    "quote": "Well begun is half done."
  },
  {
    "author": "Socrates",
    "quote": "The only true wisdom is in knowing you know nothing."
  },
  {
    "author": "Buddha",
    "quote": "What you think, you become. What you feel, you attract. What you imagine, you create."
  },
  {
    "author": "Rumi",
    "quote": "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself."
  },
  {
    "author": "Viktor Frankl",
    "quote": "Everything can be taken from a man but one thing: the last of the human freedoms—to choose one’s attitude in any given set of circumstances, to choose one’s own way."
  },
  {
    "author": "Carl Jung",
    "quote": "Until you make the unconscious conscious, it will direct your life and you will call it fate."
  },
  {
    "author": "Abraham Lincoln",
    "quote": "The best way to predict your future is to create it."
  },
  {
    "author": "Leonardo da Vinci",
    "quote": "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things."
  },
  {
    "author": "Isaac Newton",
    "quote": "To every action there is always opposed an equal reaction."
  },
  {
    "author": "Marie Curie",
    "quote": "Nothing in life is to be feared, it is only to be understood."
  },
  {
    "author": "Thomas Edison",
    "quote": "I have not failed. I've just found 10,000 ways that won't work."
  },
  {
    "author": "Henry David Thoreau",
    "quote": "Go confidently in the direction of your dreams! Live the life you've imagined."
  },
  {
    "author": "Mahatma Gandhi",
    "quote": "Be the change that you wish to see in the world."
  },
  {
    "author": "Martin Luther King Jr.",
    "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."
  },
  {
    "author": "Nelson Mandela",
    "quote": "It always seems impossible until it's done."
  },
  {
    "author": "Mother Teresa",
    "quote": "If you judge people, you have no time to love them."
  },
  {
    "author": "Dalai Lama",
    "quote": "The purpose of our lives is to be happy."
  },
  {
    "author": "Eleanor Roosevelt",
    "quote": "The future belongs to those who believe in the beauty of their dreams."
  },
  {
    "author": "Helen Keller",
    "quote": "The only thing worse than being blind is having sight but no vision."
  },
  {
    "author": "Booker T. Washington",
    "quote": "Success is to be measured not so much by the position that one has reached in life as by the obstacles which one has overcome while trying to succeed."
  },
  {
    "author": "Coco Chanel",
    "quote": "In order to be irreplaceable one must always be different."
  },
  {
    "author": "Audrey Hepburn",
    "quote": "Nothing is impossible, the word itself says 'I'm possible'!"
  },
  {
    "author": "Muhammad Ali",
    "quote": "I am the greatest, I said that even before I knew I was."
  },
     {
    "author": "Bill Gates",
    "quote": "Patience is a key element of success."
  },
  {
    "author": "Warren Buffett",
    "quote": "Rule No. 1: Never lose money. Rule No. 2: Never forget rule No. 1."
  },
  {
    "author": "Oprah Winfrey",
    "quote": "What I know for sure is that what you give comes back to you."
  },
  {
    "author": "Tony Robbins",
    "quote": "The quality of your life is in direct proportion to the quality of your relationships."
  },
  {
    "author": "Les Brown",
    "quote": "The graveyard is the richest place on earth, because it is here that you will find all the hopes and dreams that were never fulfilled, the books that were never written, the songs that were never sung, the inventions that were never shared, the cures that were never discovered, all because someone was too afraid to take that first step, keep with the problem, or determined to carry out their dream."
  },
  {
    "author": "Zig Ziglar",
    "quote": "If you go out looking for friends, you'll find they are very scarce. If you go out to be a friend, you'll find them everywhere."
  },
  {
    "author": "Denis Waitley",
    "quote": "We are all self-made, but only the successful will admit it."
  },
  {
    "author": "Napoleon Hill",
    "quote": "Think and grow rich."
  },
  {
    "author": "Earl Nightingale",
    "quote": "One hour a day of study will put you at the top of your field in three years. Three hours a day will put you there in one year."
  },
  {
    "author": "Jim Rohn",
    "quote": "Don't let your learning lead to knowledge. Let your learning lead to action."
  },
  {
    "author": "Brian Tracy",
    "quote": "Goals are the fuel in the furnace of achievement."
  },
  {
    "author": "Og Mandino",
    "quote": "I will act now. I will act now. I will act now. Henceforth, I will repeat these words each hour, each day, each week, each month, each year, and forever."
  },
  {
    "author": "Unknown",
    "quote": "The road to success is always under construction."
  },
  {
    "author": "Seneca",
    "quote": "Every new beginning comes from some other beginning's end."
  },
  {
    "author": "Marcus Aurelius",
    "quote": "You have power over your mind, not outside events. Realize this, and you will find strength."
  },
  {
    "author": "Epictetus",
    "quote": "First say to yourself what you would be; and then do what you have to do."
  },
  {
    "author": "Benjamin Franklin",
    "quote": "By failing to prepare, you are preparing to fail."
  },
  {
    "author": "Thomas Sowell",
    "quote": "It is usually futile to try to talk facts and analysis to people who are enjoying a sense of moral superiority in their ignorance."
  },
  {
    "author": "Theodore Roosevelt",
    "quote": "Do what you can, with what you have, where you are."
  },
  {
    "author": "Winston Churchill",
    "quote": "Never give in--never, never, never, never, in nothing great or small, large or petty, never give in except to convictions of honour and good sense."
  },
  {
    "author": "Henry Ford",
    "quote": "Coming together is a beginning; keeping together is progress; working together is success."
  },
  {
    "author": "Albert Einstein",
    "quote": "Strive not to be a success, but rather to be of value."
  },
  {
    "author": "Maya Angelou",
    "quote": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
  },
  {
    "author": "Eleanor Roosevelt",
    "quote": "No one can make you feel inferior without your consent."
  },
  {
    "author": "Ralph Waldo Emerson",
    "quote": "The only person you are destined to become is the person you decide to be."
  },
  {
    "author": "Confucius",
    "quote": "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life."
  },
  {
    "author": "Lao Tzu",
    "quote": "Nature does not hurry, yet everything is accomplished."
  },
  {
    "author": "Bruce Lee",
    "quote": "Adapt what is useful, reject what is useless, and add what is specifically your own."
  },
  {
    "author": "Walt Disney",
    "quote": "The way to get started is to quit talking and begin doing."
  },
  {
    "author": "Oprah Winfrey",
    "quote": "Follow your instincts. That's where true wisdom manifests itself."
  },
  {
    "author": "Steve Jobs",
    "quote": "Your time is limited, so don't waste it living someone else's life."
  },
  {
    "author": "Mark Twain",
    "quote": "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover."
  },
  {
    "author": "Plato",
    "quote": "Knowledge is the food of the soul."
  },
  {
    "author": "Aristotle",
    "quote": "The ultimate value of life depends upon awareness and the power of contemplation rather than upon mere survival."
  },
  {
    "author": "Socrates",
    "quote": "Beware the barrenness of a busy life."
  },
  {
    "author": "Buddha",
    "quote": "Peace comes from within. Do not seek it without."
  },
  {
    "author": "Rumi",
    "quote": "Don't be satisfied with stories, how things have gone with others. Unfold your own myth."
  },
  {
    "author": "Viktor Frankl",
    "quote": "When we are no longer able to change a situation, we are challenged to change ourselves."
  },
  {
    "author": "Carl Jung",
    "quote": "Who looks outside, dreams; who looks inside, awakes."
  },
  {
    "author": "Abraham Lincoln",
    "quote": "Give me six hours to chop down a tree and I will spend the first four sharpening the axe."
  },
  {
    "author": "Leonardo da Vinci",
    "quote": "Iron rusts from disuse, stagnant water loses its purity... so does inaction sap the vigor of the mind."
  },
  {
    "author": "Isaac Newton",
    "quote": "If I have seen further than others, it is by standing upon the shoulders of giants."
  },
  {
    "author": "Marie Curie",
    "quote": "Be less curious about people and more curious about ideas."
  },
  {
    "author": "Thomas Edison",
    "quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."
  },
  {
    "author": "Henry David Thoreau",
    "quote": "If one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours."
  },
  {
    "author": "Mahatma Gandhi",
    "quote": "An eye for an eye will only make the whole world blind."
  },
  {
    "author": "Martin Luther King Jr.",
    "quote": "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy."
  },
  {
    "author": "Nelson Mandela",
    "quote": "Education is the most powerful weapon which you can use to change the world."
  },
  {
    "author": "Mother Teresa",
    "quote": "Not all of us can do great things. But we can do small things with great love."
  },
  {
    "author": "Dalai Lama",
    "quote": "Happiness is not something ready made. It comes from your own actions."
  },
  {
    "author": "Eleanor Roosevelt",
    "quote": "With the new day comes new strength and new thoughts."
  },
  {
    "author": "Helen Keller",
    "quote": "Life is either a daring adventure or nothing at all."
  },
  {
    "author": "Booker T. Washington",
    "quote": "Character, not circumstances, makes the man."
  },
  {
    "author": "Coco Chanel",
    "quote": "Success is most often achieved by those who don't know that failure is inevitable."
  },
  {
    "author": "Audrey Hepburn",
    "quote": "The most important thing is to enjoy your life – to be happy – it's all that matters."
  },
  {
    "author": "Muhammad Ali",
    "quote": "Impossible is just a big word thrown around by small men who find it easier to live in the world they've been given than to explore the power they have to change it. Impossible is not a fact. It's an opinion. Impossible is potential. Impossible is temporary. Impossible is nothing."
  },
     {
    "author": "Bill Gates",
    "quote": "Success is a lousy teacher. It seduces smart people into thinking they can't lose."
  },
  {
    "author": "Warren Buffett",
    "quote": "It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price."
  },
  {
    "author": "Oprah Winfrey",
    "quote": "You get in life what you have the courage to ask for."
  },
  {
    "author": "Tony Robbins",
    "quote": "It's your decisions, not your conditions, that determine your destiny."
  },
  {
    "author": "Les Brown",
    "quote": "If you are not willing to risk the unusual, you will have to settle for the ordinary."
  },
  {
    "author": "Zig Ziglar",
    "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals."
  },
  {
    "author": "Denis Waitley",
    "quote": "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes."
  },
  {
    "author": "Napoleon Hill",
    "quote": "Great achievements are born of great sacrifice and are never the result of selfishness."
  },
  {
    "author": "Earl Nightingale",
    "quote": "We can let circumstances rule us, or we can take charge and rule our lives from within."
  },
  {
    "author": "Jim Rohn",
    "quote": "The ultimate reason for setting goals is to entice you to become the person it takes to achieve them."
  },
  {
    "author": "Brian Tracy",
    "quote": "Every minute you spend in planning saves 10 minutes in execution; this gives you a 1,000% return on energy!"
  },
  {
    "author": "Og Mandino",
    "quote": "The greatest miracle is not walking on water, but walking on earth right now."
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
