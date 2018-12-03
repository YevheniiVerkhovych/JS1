var
    today = new Date()
    ,time = new Date() 
    ,t1 = ""
    ;

t1 = time.getHours() + "-" +  time.getMinutes() + "-" + time.getSeconds();
console.log(t1);

console.log(today.getDate(), today.getMonth(), today.getFullYear());

function calcSum(num1, num2) {
console.log(num1, num2);
return num1 + num2;
}
console.log(calcSum(4,6));

function getCals(foodName, weight) {
var foodData = {
         "Белые свежие"   :  32
        ,"Белые сушеные"  :  277
        ,"Вешенки свежие" :  34
        ,"Лисички свежие" :  22
        ,"Опята свежие"   :  25
        ,"Молоко"         :  265
        ,"Сыр"            :  275
        ,"Сало"           :  250
    },
    cals = 0
    ;

    if (foodData[foodName]) {
        cals = foodData[foodName]*weight/100;
    }
    else {
        console.log("Продукт отсутствует в БД");
    }
return cals;

}
console.log(getCals("Вешенки свежие",130), "ккал");

function getDinnersCals(dinnerData) {
    var foodData = {
        "Белые свежие"   :  32
       ,"Белые сушеные"  :  277
       ,"Вешенки свежие" :  34
       ,"Лисички свежие" :  22
       ,"Опята свежие"   :  25
       ,"Молоко"         :  265
       ,"Сыр"            :  275
       ,"Сало"           :  250
   }
,cals = 0
;

for (var foodName in dinnerData) {
    cals += foodData[foodName] * dinnerData[foodName] / 100;
}
return Math.round(cals);
}

var myDinner = {
     "Белые свежие"   :  150
    ,"Белые сушеные"  :  200
    ,"Вешенки свежие" :  300
    ,"Лисички свежие" :  40
};

console.log(getDinnersCals(myDinner), "ккал");

// How to spend dinner calories

cals = getDinnersCals(myDinner);

function getTimeActivity(actType, cals) {

  var activities = {
     "Walking"      :  2.5
    ,"Run"          :  6.9
    ,"Skating"      :  7
    ,"Swimming"     :  8.8
    ,"Skiing"       :  5.9
    ,"Table tennis" :  3.9
    }

if (activities[actType])
return ("You have to " + actType + " for " + Math.floor((cals/activities[actType])/60) + " hours " + Math.round((cals/activities[actType])%60) + "min.");
else return "Wrong activity!"
}

console.log(getTimeActivity("Swimming", cals));

// Horoscope

function getHorData(zodiac) {
    var horData = {
         0 :  {
            "Aries"       : "In astrology, Jupiter is the \"ruler\" of both Sagittarius AND the ninth house, so you've got a triple shot of this auspicious energy—like rocket fuel in your tank for the next 12 months. Pretty awesome! But with such a strong \"footloose and fancy-free\" vibe, your gambling instincts are also dialed up high. "
          , "Taurus"      : "Try your best to adapt to this vulnerable new M.O. because you've got to live with it for the next 13 months."
          , "Gemini"      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus in. Consectetur adipiscing elit pellentesque habitant morbi. "
          , "Cancer"      : "In massa tempor nec feugiat nisl pretium fusce id. Semper auctor neque vitae tempus quam pellentesque. Sem fringilla ut morbi tincidunt augue interdum velit euismod. "
          , "Leo"         : "Faucibus nisl tincidunt eget nullam. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Cras semper auctor neque vitae tempus quam pellentesque nec. "
          , "Virgo"       : "Fusce ut placerat orci nulla pellentesque. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Risus feugiat in ante metus dictum at tempor. "
          , "Libra"       : "Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Sit amet nulla facilisi morbi. Id cursus metus aliquam eleifend."
          , "Scorpio"     : "Eget felis eget nunc lobortis mattis. Lacus viverra vitae congue eu consequat. Auctor urna nunc id cursus metus aliquam eleifend. Sit amet consectetur adipiscing elit ut aliquam purus. "
          , "Sagittarius" : "Viverra nam libero justo laoreet sit amet cursus. In metus vulputate eu scelerisque felis imperdiet proin. Elit sed vulputate mi sit. Dui accumsan sit amet nulla facilisi morbi tempus. Eu consequat ac felis donec et odio."
          , "Capricorn"   : "Eget velit aliquet sagittis id consectetur. Nunc sed id semper risus in hendrerit gravida rutrum. Ullamcorper malesuada proin libero nunc consequat interdum. "
          , "Aquarius"    : "Nec nam aliquam sem et tortor consequat. Imperdiet proin fermentum leo vel orci porta. Condimentum mattis pellentesque id nibh tortor id aliquet. Feugiat in ante metus dictum at tempor commodo ullamcorper. "
          , "Pisces"      : "Risus nullam eget felis eget. Nisl rhoncus mattis rhoncus urna neque viverra. Ut eu sem integer vitae justo eget. Vestibulum rhoncus est pellentesque elit ullamcorper. "
            }
        ,1 :  {
            "Aries"       : "During Sagittarius season, you'll be especially impulsive, so DO try to think of the consequences for a sec before you jump without a parachute."
          , "Taurus"      : "If you do embrace it, there could be serious rewards. The eighth house rules \"big money\" and long-term wealth, particularly the kind that comes from joining up with other people. Jupiter is the planet that rules risk and gambling, and while you don't want to be wasteful, you could roll the dice on an investment, a property or passive-income opportunity. (Just avoid anything that gives off even a whiff of a pyramid scheme.) "
          , "Gemini"      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus in. Consectetur adipiscing elit pellentesque habitant morbi. "
          , "Cancer"      : "In massa tempor nec feugiat nisl pretium fusce id. Semper auctor neque vitae tempus quam pellentesque. Sem fringilla ut morbi tincidunt augue interdum velit euismod. "
          , "Leo"         : "Faucibus nisl tincidunt eget nullam. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Cras semper auctor neque vitae tempus quam pellentesque nec. "
          , "Virgo"       : "Fusce ut placerat orci nulla pellentesque. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Risus feugiat in ante metus dictum at tempor. "
          , "Libra"       : "Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Sit amet nulla facilisi morbi. Id cursus metus aliquam eleifend."
          , "Scorpio"     : "Eget felis eget nunc lobortis mattis. Lacus viverra vitae congue eu consequat. Auctor urna nunc id cursus metus aliquam eleifend. Sit amet consectetur adipiscing elit ut aliquam purus. "
          , "Sagittarius" : "Viverra nam libero justo laoreet sit amet cursus. In metus vulputate eu scelerisque felis imperdiet proin. Elit sed vulputate mi sit. Dui accumsan sit amet nulla facilisi morbi tempus. Eu consequat ac felis donec et odio."
          , "Capricorn"   : "Eget velit aliquet sagittis id consectetur. Nunc sed id semper risus in hendrerit gravida rutrum. Ullamcorper malesuada proin libero nunc consequat interdum. "
          , "Aquarius"    : "Nec nam aliquam sem et tortor consequat. Imperdiet proin fermentum leo vel orci porta. Condimentum mattis pellentesque id nibh tortor id aliquet. Feugiat in ante metus dictum at tempor commodo ullamcorper. "
          , "Pisces"      : "Risus nullam eget felis eget. Nisl rhoncus mattis rhoncus urna neque viverra. Ut eu sem integer vitae justo eget. Vestibulum rhoncus est pellentesque elit ullamcorper. "
            }
        ,2 :  {
            "Aries"       : "If you're planning to take a calculated risk, the December 7 Sagittarius new moon lines everything up perfectly. With a \"fresh start\" lunar lift, the energizing Sun AND Jupiter here, the seeds you plant could yield a bumper crop over the next six months. "
          , "Taurus"      : "Overall, you're looking for ways that you can make your time and money work harder for you, and you'll have special support from the stars this month."
          , "Gemini"      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus in. Consectetur adipiscing elit pellentesque habitant morbi. "
          , "Cancer"      : "In massa tempor nec feugiat nisl pretium fusce id. Semper auctor neque vitae tempus quam pellentesque. Sem fringilla ut morbi tincidunt augue interdum velit euismod. "
          , "Leo"         : "Faucibus nisl tincidunt eget nullam. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Cras semper auctor neque vitae tempus quam pellentesque nec. "
          , "Virgo"       : "Fusce ut placerat orci nulla pellentesque. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Risus feugiat in ante metus dictum at tempor. "
          , "Libra"       : "Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Sit amet nulla facilisi morbi. Id cursus metus aliquam eleifend."
          , "Scorpio"     : "Eget felis eget nunc lobortis mattis. Lacus viverra vitae congue eu consequat. Auctor urna nunc id cursus metus aliquam eleifend. Sit amet consectetur adipiscing elit ut aliquam purus. "
          , "Sagittarius" : "Viverra nam libero justo laoreet sit amet cursus. In metus vulputate eu scelerisque felis imperdiet proin. Elit sed vulputate mi sit. Dui accumsan sit amet nulla facilisi morbi tempus. Eu consequat ac felis donec et odio."
          , "Capricorn"   : "Eget velit aliquet sagittis id consectetur. Nunc sed id semper risus in hendrerit gravida rutrum. Ullamcorper malesuada proin libero nunc consequat interdum. "
          , "Aquarius"    : "Nec nam aliquam sem et tortor consequat. Imperdiet proin fermentum leo vel orci porta. Condimentum mattis pellentesque id nibh tortor id aliquet. Feugiat in ante metus dictum at tempor commodo ullamcorper. "
          , "Pisces"      : "Risus nullam eget felis eget. Nisl rhoncus mattis rhoncus urna neque viverra. Ut eu sem integer vitae justo eget. Vestibulum rhoncus est pellentesque elit ullamcorper. "
            }
        ,3 :  {
            "Aries"       : "Make sure to cultivate something you actually WANT since you'll get a bounty. Any inspiring initiatives launched at the new moon will be cosmically catalyzed—especially if they unite people across differences or spread a hopeful message."
          , "Taurus"      : "Spiritual, emotional and sexual merging also fall under the eighth-house domain. This is a year that could bring a marriage—or divorce—a pregnancy, the pooling of money or some other super-officializing move. The eighth house is very black-and-white: You're either in or you're out, and in some ways, your straightforward sign might actually prefer that."
          , "Gemini"      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus in. Consectetur adipiscing elit pellentesque habitant morbi. "
          , "Cancer"      : "In massa tempor nec feugiat nisl pretium fusce id. Semper auctor neque vitae tempus quam pellentesque. Sem fringilla ut morbi tincidunt augue interdum velit euismod. "
          , "Leo"         : "Faucibus nisl tincidunt eget nullam. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Cras semper auctor neque vitae tempus quam pellentesque nec. "
          , "Virgo"       : "Fusce ut placerat orci nulla pellentesque. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Risus feugiat in ante metus dictum at tempor. "
          , "Libra"       : "Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Sit amet nulla facilisi morbi. Id cursus metus aliquam eleifend."
          , "Scorpio"     : "Eget felis eget nunc lobortis mattis. Lacus viverra vitae congue eu consequat. Auctor urna nunc id cursus metus aliquam eleifend. Sit amet consectetur adipiscing elit ut aliquam purus. "
          , "Sagittarius" : "Viverra nam libero justo laoreet sit amet cursus. In metus vulputate eu scelerisque felis imperdiet proin. Elit sed vulputate mi sit. Dui accumsan sit amet nulla facilisi morbi tempus. Eu consequat ac felis donec et odio."
          , "Capricorn"   : "Eget velit aliquet sagittis id consectetur. Nunc sed id semper risus in hendrerit gravida rutrum. Ullamcorper malesuada proin libero nunc consequat interdum. "
          , "Aquarius"    : "Nec nam aliquam sem et tortor consequat. Imperdiet proin fermentum leo vel orci porta. Condimentum mattis pellentesque id nibh tortor id aliquet. Feugiat in ante metus dictum at tempor commodo ullamcorper. "
          , "Pisces"      : "Risus nullam eget felis eget. Nisl rhoncus mattis rhoncus urna neque viverra. Ut eu sem integer vitae justo eget. Vestibulum rhoncus est pellentesque elit ullamcorper. "
            }
        ,4 :  {
            "Aries"       : "You'll have lots to celebrate at the new moon because the day before, December 6, communication planet Mercury ends a frustrating retrograde that began on November 16, scrambling signals with communication, technology and travel."
          , "Taurus"      : "Mercury was retrograde in Sagittarius until December 1, then backed into Scorpio and your intense eighth house for its final backslide. During the first week of December, keep extra-tight tabs on your finances and strengthen your passwords since Mercury's mayhem could impact sensitive data. Relationships might also be tainted by jealousy or cutting comments that leave you both feeling wounded."
          , "Gemini"      : "That day, action planet Mars and creative Neptune will also make a rare meetup in Pisces and your collaborative eleventh house. Your networking efforts could pay off with a big opportunity, perhaps one related to technology or innovation."
          , "Gemini"      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus in. Consectetur adipiscing elit pellentesque habitant morbi. "
          , "Cancer"      : "In massa tempor nec feugiat nisl pretium fusce id. Semper auctor neque vitae tempus quam pellentesque. Sem fringilla ut morbi tincidunt augue interdum velit euismod. "
          , "Leo"         : "Faucibus nisl tincidunt eget nullam. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Cras semper auctor neque vitae tempus quam pellentesque nec. "
          , "Virgo"       : "Fusce ut placerat orci nulla pellentesque. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Risus feugiat in ante metus dictum at tempor. "
          , "Libra"       : "Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Sit amet nulla facilisi morbi. Id cursus metus aliquam eleifend."
          , "Scorpio"     : "Eget felis eget nunc lobortis mattis. Lacus viverra vitae congue eu consequat. Auctor urna nunc id cursus metus aliquam eleifend. Sit amet consectetur adipiscing elit ut aliquam purus. "
          , "Sagittarius" : "Viverra nam libero justo laoreet sit amet cursus. In metus vulputate eu scelerisque felis imperdiet proin. Elit sed vulputate mi sit. Dui accumsan sit amet nulla facilisi morbi tempus. Eu consequat ac felis donec et odio."
          , "Capricorn"   : "Eget velit aliquet sagittis id consectetur. Nunc sed id semper risus in hendrerit gravida rutrum. Ullamcorper malesuada proin libero nunc consequat interdum. "
          , "Aquarius"    : "Nec nam aliquam sem et tortor consequat. Imperdiet proin fermentum leo vel orci porta. Condimentum mattis pellentesque id nibh tortor id aliquet. Feugiat in ante metus dictum at tempor commodo ullamcorper. "
          , "Pisces"      : "Risus nullam eget felis eget. Nisl rhoncus mattis rhoncus urna neque viverra. Ut eu sem integer vitae justo eget. Vestibulum rhoncus est pellentesque elit ullamcorper. "
            }
        ,5 :  {
            "Aries"       : "Once Mercury turns direct (forward) on December 6, you can breathe a sigh of relief because we'll FINALLY be free of 2018's seemingly endless procession of retrograde planets—from Mercury to Mars to Venus and back to Mercury again, at times without a break in between. Any relationships left standing ought to last for the long haul after all those loyalty tests you've gone through!"
          , "Taurus"      : "Today, it really IS about who you know! Just be careful not to get too excited too soon, especially with gullible Neptune clouding your better judgment."
          , "Gemini"      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus in. Consectetur adipiscing elit pellentesque habitant morbi. "
          , "Cancer"      : "In massa tempor nec feugiat nisl pretium fusce id. Semper auctor neque vitae tempus quam pellentesque. Sem fringilla ut morbi tincidunt augue interdum velit euismod. "
          , "Leo"         : "Faucibus nisl tincidunt eget nullam. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Cras semper auctor neque vitae tempus quam pellentesque nec. "
          , "Virgo"       : "Fusce ut placerat orci nulla pellentesque. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Risus feugiat in ante metus dictum at tempor. "
          , "Libra"       : "Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Sit amet nulla facilisi morbi. Id cursus metus aliquam eleifend."
          , "Scorpio"     : "Eget felis eget nunc lobortis mattis. Lacus viverra vitae congue eu consequat. Auctor urna nunc id cursus metus aliquam eleifend. Sit amet consectetur adipiscing elit ut aliquam purus. "
          , "Sagittarius" : "Viverra nam libero justo laoreet sit amet cursus. In metus vulputate eu scelerisque felis imperdiet proin. Elit sed vulputate mi sit. Dui accumsan sit amet nulla facilisi morbi tempus. Eu consequat ac felis donec et odio."
          , "Capricorn"   : "Eget velit aliquet sagittis id consectetur. Nunc sed id semper risus in hendrerit gravida rutrum. Ullamcorper malesuada proin libero nunc consequat interdum. "
          , "Aquarius"    : "Nec nam aliquam sem et tortor consequat. Imperdiet proin fermentum leo vel orci porta. Condimentum mattis pellentesque id nibh tortor id aliquet. Feugiat in ante metus dictum at tempor commodo ullamcorper. "
          , "Pisces"      : "Risus nullam eget felis eget. Nisl rhoncus mattis rhoncus urna neque viverra. Ut eu sem integer vitae justo eget. Vestibulum rhoncus est pellentesque elit ullamcorper. "
            }
        ,6 :  {
            "Aries"       : "You might short-circuit if you overextend yourself—and it will be tough to resist the deluge of tempting invitations and offers. But if you keep going for \"just one more,\" you could crash. Mix up all the ambitious action with plenty of enchanting escapes—or at least a few rejuvenating breaks."
          , "Taurus"      : "Pour a hot toddy and grab a sprig of mistletoe, Taurus. It's finally safe to open up and reconnect with people. Given your headstrong temperament, it's a safe bet that you have a few amends to make. Swallow that pride and apologize—for everyone's sake. Now that the planets are back in their right mind, you can be too."
          , "Gemini"      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus in. Consectetur adipiscing elit pellentesque habitant morbi. "
          , "Cancer"      : "In massa tempor nec feugiat nisl pretium fusce id. Semper auctor neque vitae tempus quam pellentesque. Sem fringilla ut morbi tincidunt augue interdum velit euismod. "
          , "Leo"         : "Faucibus nisl tincidunt eget nullam. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Cras semper auctor neque vitae tempus quam pellentesque nec. "
          , "Virgo"       : "Fusce ut placerat orci nulla pellentesque. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Risus feugiat in ante metus dictum at tempor. "
          , "Libra"       : "Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Sit amet nulla facilisi morbi. Id cursus metus aliquam eleifend."
          , "Scorpio"     : "Eget felis eget nunc lobortis mattis. Lacus viverra vitae congue eu consequat. Auctor urna nunc id cursus metus aliquam eleifend. Sit amet consectetur adipiscing elit ut aliquam purus. "
          , "Sagittarius" : "Viverra nam libero justo laoreet sit amet cursus. In metus vulputate eu scelerisque felis imperdiet proin. Elit sed vulputate mi sit. Dui accumsan sit amet nulla facilisi morbi tempus. Eu consequat ac felis donec et odio."
          , "Capricorn"   : "Eget velit aliquet sagittis id consectetur. Nunc sed id semper risus in hendrerit gravida rutrum. Ullamcorper malesuada proin libero nunc consequat interdum. "
          , "Aquarius"    : "Nec nam aliquam sem et tortor consequat. Imperdiet proin fermentum leo vel orci porta. Condimentum mattis pellentesque id nibh tortor id aliquet. Feugiat in ante metus dictum at tempor commodo ullamcorper. "
          , "Pisces"      : "Risus nullam eget felis eget. Nisl rhoncus mattis rhoncus urna neque viverra. Ut eu sem integer vitae justo eget. Vestibulum rhoncus est pellentesque elit ullamcorper. "
            }
        ,7 :  {
            "Aries"       : "With aggravating Mars in this codependent zone, you can get sucked into holiday drama if you don't keep firm boundaries, especially on December 7, when Mars makes a rare meetup with boundary-blurring Neptune. With the Sagittarius new moon making you extra-benevolent today, you could easily volunteer for something you instantly regret taking on. Honor your need for personal space and avoid any energy-draining rescue missions, especially with needy or demanding loved ones. "
          , "Taurus"      : "The Cancer full moon arrives the next day, December 22, igniting your third house of communication. Not only will you be filled with grand visions, but you'll be eager to talk about them. These moonbeams should bring plenty of kindred spirits your way, and since it falls in your third house of local affairs, you won't need to go far to find them!"
          , "Gemini"      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus in. Consectetur adipiscing elit pellentesque habitant morbi. "
          , "Cancer"      : "In massa tempor nec feugiat nisl pretium fusce id. Semper auctor neque vitae tempus quam pellentesque. Sem fringilla ut morbi tincidunt augue interdum velit euismod. "
          , "Leo"         : "Faucibus nisl tincidunt eget nullam. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Cras semper auctor neque vitae tempus quam pellentesque nec. "
          , "Virgo"       : "Fusce ut placerat orci nulla pellentesque. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Risus feugiat in ante metus dictum at tempor. "
          , "Libra"       : "Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Sit amet nulla facilisi morbi. Id cursus metus aliquam eleifend."
          , "Scorpio"     : "Eget felis eget nunc lobortis mattis. Lacus viverra vitae congue eu consequat. Auctor urna nunc id cursus metus aliquam eleifend. Sit amet consectetur adipiscing elit ut aliquam purus. "
          , "Sagittarius" : "Viverra nam libero justo laoreet sit amet cursus. In metus vulputate eu scelerisque felis imperdiet proin. Elit sed vulputate mi sit. Dui accumsan sit amet nulla facilisi morbi tempus. Eu consequat ac felis donec et odio."
          , "Capricorn"   : "Eget velit aliquet sagittis id consectetur. Nunc sed id semper risus in hendrerit gravida rutrum. Ullamcorper malesuada proin libero nunc consequat interdum. "
          , "Aquarius"    : "Nec nam aliquam sem et tortor consequat. Imperdiet proin fermentum leo vel orci porta. Condimentum mattis pellentesque id nibh tortor id aliquet. Feugiat in ante metus dictum at tempor commodo ullamcorper. "
          , "Pisces"      : "Risus nullam eget felis eget. Nisl rhoncus mattis rhoncus urna neque viverra. Ut eu sem integer vitae justo eget. Vestibulum rhoncus est pellentesque elit ullamcorper. "
            }
        ,8 :  {
            "Aries"       : "Visiting family? Spring for that hotel or Airbnb so you can have all the personal space you need."
          , "Taurus"      : "The rest of the year looks especially bright for travel and spontaneous adventure. With Mars in Pisces and your convivial eleventh house until 31, your social life will be off the charts. "
          , "Gemini"      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus in. Consectetur adipiscing elit pellentesque habitant morbi. "
          , "Cancer"      : "In massa tempor nec feugiat nisl pretium fusce id. Semper auctor neque vitae tempus quam pellentesque. Sem fringilla ut morbi tincidunt augue interdum velit euismod. "
          , "Leo"         : "Faucibus nisl tincidunt eget nullam. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Cras semper auctor neque vitae tempus quam pellentesque nec. "
          , "Virgo"       : "Fusce ut placerat orci nulla pellentesque. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Risus feugiat in ante metus dictum at tempor. "
          , "Libra"       : "Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Sit amet nulla facilisi morbi. Id cursus metus aliquam eleifend."
          , "Scorpio"     : "Eget felis eget nunc lobortis mattis. Lacus viverra vitae congue eu consequat. Auctor urna nunc id cursus metus aliquam eleifend. Sit amet consectetur adipiscing elit ut aliquam purus. "
          , "Sagittarius" : "Viverra nam libero justo laoreet sit amet cursus. In metus vulputate eu scelerisque felis imperdiet proin. Elit sed vulputate mi sit. Dui accumsan sit amet nulla facilisi morbi tempus. Eu consequat ac felis donec et odio."
          , "Capricorn"   : "Eget velit aliquet sagittis id consectetur. Nunc sed id semper risus in hendrerit gravida rutrum. Ullamcorper malesuada proin libero nunc consequat interdum. "
          , "Aquarius"    : "Nec nam aliquam sem et tortor consequat. Imperdiet proin fermentum leo vel orci porta. Condimentum mattis pellentesque id nibh tortor id aliquet. Feugiat in ante metus dictum at tempor commodo ullamcorper. "
          , "Pisces"      : "Risus nullam eget felis eget. Nisl rhoncus mattis rhoncus urna neque viverra. Ut eu sem integer vitae justo eget. Vestibulum rhoncus est pellentesque elit ullamcorper. "
            }
        ,9 :  {
            "Aries"       : "Mars in Pisces and your twelfth house can make it hard to unwind, and your immune system will need extra protection from seasonal bugs. Make an effort to power down your devices a couple hours before bedtime so your mind and body can relax."
          , "Taurus"      : "If you're in a relationship, it's the perfect night to co-host a gathering or head out with your plus-one somewhere fun and filled with positive vibes. Single Bulls could meet someone with LTR potential, perhaps through mutual friends. So don't even THINK about staying home to watch a televised ball drop or tucking in before the countdown!"
          , "Gemini"      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus in. Consectetur adipiscing elit pellentesque habitant morbi. "
          , "Cancer"      : "In massa tempor nec feugiat nisl pretium fusce id. Semper auctor neque vitae tempus quam pellentesque. Sem fringilla ut morbi tincidunt augue interdum velit euismod. "
          , "Leo"         : "Faucibus nisl tincidunt eget nullam. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Cras semper auctor neque vitae tempus quam pellentesque nec. "
          , "Virgo"       : "Fusce ut placerat orci nulla pellentesque. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Risus feugiat in ante metus dictum at tempor. "
          , "Libra"       : "Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Sit amet nulla facilisi morbi. Id cursus metus aliquam eleifend."
          , "Scorpio"     : "Eget felis eget nunc lobortis mattis. Lacus viverra vitae congue eu consequat. Auctor urna nunc id cursus metus aliquam eleifend. Sit amet consectetur adipiscing elit ut aliquam purus. "
          , "Sagittarius" : "Viverra nam libero justo laoreet sit amet cursus. In metus vulputate eu scelerisque felis imperdiet proin. Elit sed vulputate mi sit. Dui accumsan sit amet nulla facilisi morbi tempus. Eu consequat ac felis donec et odio."
          , "Capricorn"   : "Eget velit aliquet sagittis id consectetur. Nunc sed id semper risus in hendrerit gravida rutrum. Ullamcorper malesuada proin libero nunc consequat interdum. "
          , "Aquarius"    : "Nec nam aliquam sem et tortor consequat. Imperdiet proin fermentum leo vel orci porta. Condimentum mattis pellentesque id nibh tortor id aliquet. Feugiat in ante metus dictum at tempor commodo ullamcorper. "
          , "Pisces"      : "Risus nullam eget felis eget. Nisl rhoncus mattis rhoncus urna neque viverra. Ut eu sem integer vitae justo eget. Vestibulum rhoncus est pellentesque elit ullamcorper. "
            }
        ,10:  {
            "Aries"       : "Treat your evenings like \"spa time\" and get into a Zen space with Piscean pastimes like a guided meditation, soothing music or an essential-oil salt bath. That could spell the difference between nightmares or insomnia and restorative deep sleep during which your subconscious untangles thorny emotions and you receive powerful intuitive guidance."
          , "Taurus"      : "That said, on New Year's Eve around 9:00 pm EST, Mars will disappear faster than this year did, plunging into Aries and your twelfth house of rest and fantasy. With Mars powered down until  14, you'll want to give yourself some generous lead time on any ambitious resolutions. "
          , "Gemini"      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus in. Consectetur adipiscing elit pellentesque habitant morbi. "
          , "Cancer"      : "In massa tempor nec feugiat nisl pretium fusce id. Semper auctor neque vitae tempus quam pellentesque. Sem fringilla ut morbi tincidunt augue interdum velit euismod. "
          , "Leo"         : "Faucibus nisl tincidunt eget nullam. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Cras semper auctor neque vitae tempus quam pellentesque nec. "
          , "Virgo"       : "Fusce ut placerat orci nulla pellentesque. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Risus feugiat in ante metus dictum at tempor. "
          , "Libra"       : "Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Sit amet nulla facilisi morbi. Id cursus metus aliquam eleifend."
          , "Scorpio"     : "Eget felis eget nunc lobortis mattis. Lacus viverra vitae congue eu consequat. Auctor urna nunc id cursus metus aliquam eleifend. Sit amet consectetur adipiscing elit ut aliquam purus. "
          , "Sagittarius" : "Viverra nam libero justo laoreet sit amet cursus. In metus vulputate eu scelerisque felis imperdiet proin. Elit sed vulputate mi sit. Dui accumsan sit amet nulla facilisi morbi tempus. Eu consequat ac felis donec et odio."
          , "Capricorn"   : "Eget velit aliquet sagittis id consectetur. Nunc sed id semper risus in hendrerit gravida rutrum. Ullamcorper malesuada proin libero nunc consequat interdum. "
          , "Aquarius"    : "Nec nam aliquam sem et tortor consequat. Imperdiet proin fermentum leo vel orci porta. Condimentum mattis pellentesque id nibh tortor id aliquet. Feugiat in ante metus dictum at tempor commodo ullamcorper. "
          , "Pisces"      : "Risus nullam eget felis eget. Nisl rhoncus mattis rhoncus urna neque viverra. Ut eu sem integer vitae justo eget. Vestibulum rhoncus est pellentesque elit ullamcorper. "
            }
        ,11 :  {
            "Aries"       : "Why wait until New Year's Eve to start plotting your next moves? This entire month sets your sights on the big picture, inspiring you to expand your limits. Not only is the Sun in Sagittarius and your worldly, horizon-broadening ninth house until December 21, but lucky Jupiter is also here from November 8, 2018, until December 2, 2019. For the next year, your biggest dreams will move to the fast track, especially ones associated with travel, media, higher learning and entrepreneurship."
          , "Taurus"      : "Have you noticed your moods have been a little pricklier, your emotions a wave or two stronger? It's not your imagination, Taurus. You've entered a sensitive new cycle that began back on November 8, when expansive Jupiter entered its home sign of Sagittarius, a cycle that only happens once every 12 years."
          , "Gemini"      : "Two is your magic number this December as the Sun takes its annual spin through the most partnership-driven zones of your chart. This kind of #twinning is just your speed, Gemini! December marks the first full month of expansive Jupiter's lengthy visit to Sagittarius and your seventh house of committed relationships, which is happening from November 8, 2018, until December 2, 2019. Joining forces with the right like-minded people will take you both so much farther."
          , "Cancer"      : "Happy, healthy holiday season? The stars play a bit of a cosmic prank on you every year because the Sun spends the first three weeks of December—peak hedonism time—in Sagittarius and your sixth house of fitness and wellbeing. While everyone else is blissfully loading up on rich desserts and hearty feasts, el Sol is trying to drop a spoonful of dark leafy greens onto your plate and send you out for a hike."
          , "Leo"         : "Come out and play, Leo! December is always one of your brightest months, and not only because of the holidays. The Sun is making its annual lap around Sagittarius and your flamboyant, festive fifth house until December 21. And the decadence is double this year (at least) because Jupiter, the planet of expansion and abundance, is in Sagittarius from November 2018 until December 2019."
          , "Virgo"       : "'Tis the season to get sentimental—especially if you're a Virgo. With the Sun in Sagittarius and your heart-stirring fourth house, you're in the mood to bond, nest and spend time with your closest people. All the way through December 21, your attention will be focused on home—from improving your living situation and hanging holiday decorations to targeting the relatives to avoid at family gatherings."
          , "Libra"       : "All together now! December stirs up a social whirlwind and just-like-that, your calendar is packed. From lively meetings to holiday parties to glam-squad appointments, you won't touch down at home base much during the first three weeks of the month. Good thing you're the zodiac's reigning social butterfly! Whether you entertain guests or hop between events, you can mingle and make merry to your Libra heart's content—in fabulous style, of course."
          , "Scorpio"     : "The month could get off to a confusing start, but luckily that energy won't stick around for long. Blame it on communication planet Mercury, which is retrograde in Scorpio until December 6 and causing you to feel misunderstood or overlooked—or just crossing the conversational wires. Slow down and let things settle before you say \"yes\" to anyone or anything. And give yourself a little pep talk as needed, because Mercury's machinations could disrupt the flow of your swagger for a second."
          , "Sagittarius" : "It's your time—at last! You carried a heavy load for most of 2018, Sagittarius—and really, for the past few years. Up until November 8, your ruling planet, Jupiter, spent the entire year napping in Scorpio and your twelfth house of rest, closure and sacrifice. There was a lot of behind-the-scenes activity, and you paid your share of dues. Sometimes it felt like you were taking one step forward and two steps back."
          , "Capricorn"   : "Early hibernation, anyone? You're definitely gonna be late to the resolutions party this month…and it's a refreshing change, Capricorn. Not only is the Sun in Sagittarius and your restful, dreamy twelfth house until December 21, but expansive Jupiter is there from November 2018 to December 2019, a 13-month visit that only happens every 12 years. The magic for you now is in the \"not doing\"—so go on and explore the negative space or see where the universe takes you when you don't try to plan and control everything."
          , "Aquarius"    : "What are friends for, Aquarius? This month—and for the next year, actually—the answer is: everything! The Sun is in Sagittarius until December 21, heating up your eleventh house of group activity. The festive season will hit its high notes in the first three weeks of the month. And they could be especially elevated this year because expansive Jupiter is also in Sagittarius from November 2018 to December 2019, a once-every-12-years cycle that will bring incredible new souls into your orbit."
          , "Pisces"      : "Get a jump-start on those goals, Pisces! While others are winding down for the holidays, you're just warming up. In fact, you might be actively looking for projects to keep you busy, especially ones that involve a degree of responsibility and leadership. What's come over you?"
          }    
    }
month = {
         0 : "Jan"
        ,1 : "Feb"
        ,2 : "Mar"
        ,3 : "Apr"
        ,4 : "May"
        ,5 : "Jun"
        ,6 : "Jul"
        ,7 : "Aug"
        ,8 : "Sep"
        ,9 : "Oct"
        ,10: "Nov"
        ,11: "Dec"
    }

    return month[today.getMonth()] + ". Horoscope for " + zodiac + ": " + horData[today.getMonth()][zodiac]
}

console.log(getHorData("Leo"));



