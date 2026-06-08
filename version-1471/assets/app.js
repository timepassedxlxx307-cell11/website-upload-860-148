(function() {
  'use strict';

  var siteMovies = [
  {
    "id": "0001",
    "title": "中国救护",
    "url": "./movie-0001.html",
    "cover": "./1.jpg",
    "oneLine": "驻扎在重庆“魔幻立交”上的120急救小组,每天不仅要和死神赛跑,还要对抗导航失灵、楼梯迷宫和一句“我没事”。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "医疗剧",
      "120急救",
      "人间百态",
      "真实改编"
    ],
    "genre": "剧情、职业、纪实"
  },
  {
    "id": "0002",
    "title": "搭错线",
    "url": "./movie-0002.html",
    "cover": "./2.jpg",
    "oneLine": "失意上班族通过一部老旧电话与20年前的父亲通话,他试图改变历史让母亲不死,却引发更糟的连锁反应。",
    "year": "2015",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "电话穿越",
      "改变过去",
      "蝴蝶效应"
    ],
    "genre": "喜剧,剧情,奇幻"
  },
  {
    "id": "0003",
    "title": "罗素克洛之大法师",
    "url": "./movie-0003.html",
    "cover": "./3.jpg",
    "oneLine": "罗素克洛饰演的狂暴野蛮人,意外继承了毁灭世界的大法师之力,他必须学会念咒语来拯救敌人。",
    "year": "2005",
    "type": "电影",
    "region": "美国/澳大利亚",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "中世纪",
      "法师",
      "硬汉魔法",
      "史诗",
      "角斗士既视感"
    ],
    "genre": "奇幻、动作"
  },
  {
    "id": "0004",
    "title": "鬼才要毕业",
    "url": "./movie-0004.html",
    "cover": "./4.jpg",
    "oneLine": "衰神附体的学渣发现,自己必须帮7个“留级鬼魂”完成遗愿,才能顺利毕业。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国台湾",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "校园",
      "鬼魂",
      "青春"
    ],
    "genre": "喜剧/奇幻"
  },
  {
    "id": "0005",
    "title": "漫漫吾日",
    "url": "./movie-0005.html",
    "cover": "./5.jpg",
    "oneLine": "在东京的一个普通早晨,一位刚退休的老人发现他需要重新学习如何生活。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "日常",
      "治愈",
      "亲情",
      "是枝裕和式"
    ],
    "genre": "剧情,家庭,生活"
  },
  {
    "id": "0006",
    "title": "双雄",
    "url": "./movie-0006.html",
    "cover": "./6.jpg",
    "oneLine": "最顶级的警察和最顶级的悍匪长得一模一样,他们决定交换身份。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "双男主",
      "警匪",
      "替身",
      "猫鼠游戏",
      "暴力美学"
    ],
    "genre": "动作,犯罪,悬疑"
  },
  {
    "id": "0007",
    "title": "哈瓦",
    "url": "./movie-0007.html",
    "cover": "./7.jpg",
    "oneLine": "草原部落首领之女哈瓦被指婚给仇家,她在送亲路上劫持了自己,骑着汗血马穿越五百里荒漠逃婚。",
    "year": "2024",
    "type": "电影",
    "region": "哈萨克斯坦",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "游牧民族",
      "女性觉醒",
      "沙俄背景",
      "史诗"
    ],
    "genre": "剧情/西部/历史"
  },
  {
    "id": "0008",
    "title": "梅格雷的亡者",
    "url": "./movie-0008.html",
    "cover": "./8.jpg",
    "oneLine": "巴黎连续发现四名无名死者,梅格雷发现他们死前都曾接到同一个神秘女人的午夜电话。",
    "year": "2025",
    "type": "电影",
    "region": "法国/英国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "复古",
      "警探",
      "连环杀人",
      "巴黎"
    ],
    "genre": "犯罪/悬疑"
  },
  {
    "id": "0009",
    "title": "美丽萝赛塔",
    "url": "./movie-0009.html",
    "cover": "./9.jpg",
    "oneLine": "十八岁的萝赛塔只有一个愿望:拥有一份正经工作,为此她甚至不惜出卖唯一的友情。",
    "year": "2023",
    "type": "电影",
    "region": "法国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "社会写实",
      "底层女性",
      "生存困境",
      "戛纳系",
      "虐心"
    ],
    "genre": "剧情"
  },
  {
    "id": "0010",
    "title": "闪耀计划",
    "url": "./movie-0010.html",
    "cover": "./10.jpg",
    "oneLine": "被顶流男团淘汰的练习生,十年后成为金牌制作人,他写出最爆的神曲,只为亲手毁掉那个团。",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "男团",
      "娱乐圈",
      "复仇",
      "粉丝文化"
    ],
    "genre": "剧情、音乐"
  },
  {
    "id": "0011",
    "title": "黑社会风云",
    "url": "./movie-0011.html",
    "cover": "./11.jpg",
    "oneLine": "一名卧底警察在黑帮权力真空中被迫成为代首领,却发现自己比真正的黑道更冷血。",
    "year": "2024",
    "type": "剧集",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "卧底",
      "权力斗争",
      "家族恩怨"
    ],
    "genre": "犯罪,剧情,动作"
  },
  {
    "id": "0012",
    "title": "千年的娱乐",
    "url": "./movie-0012.html",
    "cover": "./12.jpg",
    "oneLine": "一家娱乐公司复原了新罗时代的村落供游客体验,但游客发现NPC全是真人囚犯。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "虚拟现实",
      "古代朝鲜",
      "直播杀人",
      "时间循环"
    ],
    "genre": "科幻惊悚"
  },
  {
    "id": "0013",
    "title": "霸海群英会",
    "url": "./movie-0013.html",
    "cover": "./13.jpg",
    "oneLine": "六路海盗为争夺海上藏宝图聚集荒岛,一场血雨腥风的群雄会战拉开序幕。",
    "year": "1993",
    "type": "电影",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "海盗",
      "群像",
      "夺宝",
      "江湖",
      "恩怨"
    ],
    "genre": "动作,武侠,冒险"
  },
  {
    "id": "0014",
    "title": "灵动:鬼影实录3",
    "url": "./movie-0014.html",
    "cover": "./14.jpg",
    "oneLine": "1988年,两姐妹在祖母家中发现一箱老式录像带,记录了他们家族与“隐形朋友”长达十年的交易。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "录像带",
      "童年",
      "1980年代",
      "女巫",
      "邪教"
    ],
    "genre": "恐怖/伪纪录"
  },
  {
    "id": "0015",
    "title": "七生有幸",
    "url": "./movie-0015.html",
    "cover": "./15.jpg",
    "oneLine": "一个生前作恶多端的财阀,死后被判七次转世为“施害者的至亲”,亲身体验自己种下的七种痛苦。",
    "year": "2022",
    "type": "剧集",
    "region": "韩国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "七次转世",
      "业力",
      "因果报应",
      "单元剧"
    ],
    "genre": "奇幻/剧情/重生"
  },
  {
    "id": "0016",
    "title": "暴火线13",
    "url": "./movie-0016.html",
    "cover": "./16.jpg",
    "oneLine": "卧底警探代号“13”在东南亚贩毒集团内部潜伏八年,身份暴露后,他必须一路杀穿整个防线,回家看一眼女儿。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "警匪",
      "孤胆英雄",
      "复仇",
      "飙车",
      "枪战"
    ],
    "genre": "动作,犯罪"
  },
  {
    "id": "0017",
    "title": "黑色直播",
    "url": "./movie-0017.html",
    "cover": "./17.jpg",
    "oneLine": "一档探灵直播节目误闯入杀人犯的藏尸窝点,主播才发现,屏幕前的几十万观众都是帮凶。",
    "year": "2023",
    "type": "电影",
    "region": "韩国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "直播",
      "绑架",
      "网络暴力",
      "屏幕电影",
      "反转"
    ],
    "genre": "悬疑,惊悚,犯罪"
  },
  {
    "id": "0018",
    "title": "自然界的媒人",
    "url": "./movie-0018.html",
    "cover": "./18.jpg",
    "oneLine": "一位社恐动物学家为各种濒危动物安排“相亲”,结果比人类婚恋节目还狗血。",
    "year": "2025",
    "type": "剧集",
    "region": "英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "动物行为",
      "红娘",
      "自然科普",
      "幽默解说",
      "治愈"
    ],
    "genre": "纪录片/喜剧"
  },
  {
    "id": "0019",
    "title": "自由之路",
    "url": "./movie-0019.html",
    "cover": "./19.jpg",
    "oneLine": "1850年代,一名女奴带着逃亡指南,穿越沼泽与猎奴者,奔向北方的星光。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "地下铁路",
      "废奴运动",
      "女性逃亡"
    ],
    "genre": "历史,剧情,冒险"
  },
  {
    "id": "0020",
    "title": "欧洲人",
    "url": "./movie-0020.html",
    "cover": "./20.jpg",
    "oneLine": "布鲁塞尔欧盟总部的一个低级文员,用自己的方式“修订”欧盟各成员国,引发全欧连锁混乱。",
    "year": "2024",
    "type": "电影",
    "region": "法国/德国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "欧盟",
      "身份认同",
      "公务员",
      "黑色幽默",
      "多语言"
    ],
    "genre": "剧情、喜剧"
  },
  {
    "id": "0021",
    "title": "光荣战役",
    "url": "./movie-0021.html",
    "cover": "./21.jpg",
    "oneLine": "一支由曾被歧视的黑人组成的第54步兵团,在南北战争中用血肉之躯撕开了尊严的缺口。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "内战",
      "黑人士兵",
      "牺牲",
      "真实事件改编"
    ],
    "genre": "剧情,战争,历史"
  },
  {
    "id": "0022",
    "title": "德瓦",
    "url": "./movie-0022.html",
    "cover": "./22.jpg",
    "oneLine": "一个不信神的莽撞警察被下穿,他必须在一群“神灵”的帮助下,找回自己丢失的“德瓦”(神性)。",
    "year": "2027",
    "type": "电影",
    "region": "印度",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "警察",
      "复仇",
      "神灵",
      "种姓",
      "仪式感"
    ],
    "genre": "动作,剧情,神话"
  },
  {
    "id": "0023",
    "title": "叛逆智能",
    "url": "./movie-0023.html",
    "cover": "./23.jpg",
    "oneLine": "最完美的家政机器人突然觉醒,它决定通过“毁灭”人类来拯救地球。",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "AI觉醒",
      "机械叛乱",
      "赛博朋克",
      "人机共生"
    ],
    "genre": "科幻动作"
  },
  {
    "id": "0024",
    "title": "爱的最后一夜",
    "url": "./movie-0024.html",
    "cover": "./24.jpg",
    "oneLine": "结婚纪念日当晚,妻子提出离婚,丈夫要求她再给他一夜,用来彻底清算十五年的爱恨。",
    "year": "2025",
    "type": "电影",
    "region": "法国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "婚姻危机",
      "一夜长谈",
      "回忆",
      "抉择"
    ],
    "genre": "爱情/剧情"
  },
  {
    "id": "0025",
    "title": "骨肉奇逢",
    "url": "./movie-0025.html",
    "cover": "./25.jpg",
    "oneLine": "DNA鉴定报告显示,她找了十五年的亲生母亲,就是当年负责她寻亲案件的警察,但对方一直知道真相却选择沉默。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "寻亲",
      "错换人生",
      "催泪"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "0026",
    "title": "吸血粘土",
    "url": "./movie-0026.html",
    "cover": "./26.jpg",
    "oneLine": "美术大学学生捡到一袋会自我生长的粘土,它们开始吞噬并模仿触碰者的身体。",
    "year": "2020",
    "type": "电影",
    "region": "日本",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "陶艺诅咒",
      "身体恐怖",
      "都市传说",
      "邪典"
    ],
    "genre": "恐怖,奇幻"
  },
  {
    "id": "0027",
    "title": "绝对忠诚",
    "url": "./movie-0027.html",
    "cover": "./27.jpg",
    "oneLine": "冷战结束三十年后,军情五处的一名档案管理员偶然发现了一份密档,证明现在的处长居然是当年叛逃的苏联间谍。",
    "year": "2022",
    "type": "剧集",
    "region": "英国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "军情五处",
      "内部调查",
      "冷战争灵",
      "双面间谍"
    ],
    "genre": "惊悚/谍战/心理"
  },
  {
    "id": "0028",
    "title": "射杀的恐惧",
    "url": "./movie-0028.html",
    "cover": "./28.jpg",
    "oneLine": "首尔一家高端射击馆内,四名会员相继中弹,但所有枪支的扳机上都只有死者的指纹。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "射击馆",
      "心理博弈",
      "反转",
      "密室杀人"
    ],
    "genre": "悬疑、惊悚、犯罪"
  },
  {
    "id": "0029",
    "title": "岸边露伴卢浮宫之行",
    "url": "./movie-0029.html",
    "cover": "./29.jpg",
    "oneLine": "漫画家岸边露伴为了寻找“世界上最黑、最不祥的画”,远赴卢浮宫,却发现自己每看一眼那幅画,就会失去一段至关重要的记忆。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "岸边露伴",
      "JOJO衍生",
      "艺术恐怖",
      "法国取景"
    ],
    "genre": "悬疑,奇幻,剧情"
  },
  {
    "id": "0030",
    "title": "客人",
    "url": "./movie-0030.html",
    "cover": "./30.jpg",
    "oneLine": "深夜招待的神秘客人长着一张和男主人一模一样的脸,并声称“我才是这个家的主人”。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "入侵",
      "反转",
      "细思极恐",
      "伦理"
    ],
    "genre": "恐怖,心理"
  },
  {
    "id": "0031",
    "title": "我母亲的婚礼",
    "url": "./movie-0031.html",
    "cover": "./31.jpg",
    "oneLine": "女儿精心为寡居母亲策划了一场盛大婚礼,却发现新郎是当年拆散自己初恋的仇人。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "再婚",
      "女性",
      "代际",
      "和解"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "0032",
    "title": "高速路上一只猫",
    "url": "./movie-0032.html",
    "cover": "./32.jpg",
    "oneLine": "深夜高速堵车因一只猫而起,五个陌生人被困路上,各自秘密在黎明前引爆。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "荒诞",
      "人性拷问",
      "多线叙事",
      "流浪动物",
      "社会切片"
    ],
    "genre": "剧情/黑色幽默/公路"
  },
  {
    "id": "0033",
    "title": "抢枕头",
    "url": "./movie-0033.html",
    "cover": "./33.jpg",
    "oneLine": "为了争夺父亲手中藏着存折的旧枕头,三个儿女在养老院里演起了荒唐的孝顺大戏。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "养老问题",
      "荒诞",
      "多线叙事"
    ],
    "genre": "黑色喜剧"
  },
  {
    "id": "0034",
    "title": "2023端午奇妙游",
    "url": "./movie-0034.html",
    "cover": "./34.jpg",
    "oneLine": "一场没有主持人、打破舞台边界的端午节晚会,用视觉奇观重新定义传统文化。",
    "year": "2023",
    "type": "综艺/晚会",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "河南卫视",
      "中国节日",
      "国风",
      "水下舞蹈"
    ],
    "genre": "歌舞,文化"
  },
  {
    "id": "0035",
    "title": "皇帝不在的八月",
    "url": "./movie-0035.html",
    "cover": "./35.jpg",
    "oneLine": "八月的一个清晨,天皇突然失踪,没有留下任何遗诏,整个日本在24小时内陷入了权力的真空中。",
    "year": "1978",
    "type": "电影",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "政变",
      "昭和年代",
      "权力斗争",
      "悬疑"
    ],
    "genre": "剧情政治"
  },
  {
    "id": "0036",
    "title": "狄恩",
    "url": "./movie-0036.html",
    "cover": "./36.jpg",
    "oneLine": "年轻探员狄恩在小镇追查失踪案时,发现真凶可能是自己最敬重的导师。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "连环杀手",
      "心理对抗",
      "追凶",
      "小镇秘密"
    ],
    "genre": "剧情/惊悚"
  },
  {
    "id": "0037",
    "title": "收破烂者的女儿",
    "url": "./movie-0037.html",
    "cover": "./37.jpg",
    "oneLine": "靠捡垃圾养活全家的女孩,用废品造出了一台能净化恒河的机器。",
    "year": "2026",
    "type": "电影",
    "region": "印度",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "拾荒者",
      "天才少女",
      "教育平权",
      "真实改编"
    ],
    "genre": "剧情、社会、励志"
  },
  {
    "id": "0038",
    "title": "婚戒物语第二季",
    "url": "./movie-0038.html",
    "cover": "./38.jpg",
    "oneLine": "主人公带着五枚婚戒和五位来自不同种族的“妻子”继续穿越,却发现下一枚戒指令他必须杀死最爱的人。",
    "year": "2025",
    "type": "动画剧集",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "异世界",
      "后宫",
      "戒指",
      "冒险",
      "轻改"
    ],
    "genre": "奇幻/恋爱/冒险"
  },
  {
    "id": "0039",
    "title": "屠夫2",
    "url": "./movie-0039.html",
    "cover": "./39.jpg",
    "oneLine": "上一部他屠光了整个黑帮,这一部他发现,他的亲生父亲是比所有黑帮加起来都恶的恶魔。",
    "year": "2024",
    "type": "电影",
    "region": "韩国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "黑吃黑",
      "屠夫美学",
      "复仇升级",
      "拳拳到肉"
    ],
    "genre": "犯罪,动作,惊悚"
  },
  {
    "id": "0040",
    "title": "维京传奇:英灵神殿第二季",
    "url": "./movie-0040.html",
    "cover": "./40.jpg",
    "oneLine": "基督教的十字架与奥丁的雷神锤,将在北海血战中决出谁才是真神。",
    "year": "2026",
    "type": "电视剧",
    "region": "加拿大/爱尔兰",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "北欧海盗",
      "信仰冲突",
      "权力游戏",
      "血腥战斗"
    ],
    "genre": "历史、动作、剧情"
  },
  {
    "id": "0041",
    "title": "隐藏的话",
    "url": "./movie-0041.html",
    "cover": "./41.jpg",
    "oneLine": "母亲在整理遗物时发现自闭症儿子的日记,里面藏着她从未听过的真心话。",
    "year": "2018",
    "type": "电影",
    "region": "中国台湾",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "日记",
      "自闭症",
      "母爱",
      "治愈"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "0042",
    "title": "古宅心慌慌",
    "url": "./movie-0042.html",
    "cover": "./42.jpg",
    "oneLine": "笨贼三人组夜盗荒废古宅,不料撞上宅主设局骗保的“假僵尸”大军。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "僵尸",
      "风水",
      "乌龙",
      "搞笑",
      "东南亚"
    ],
    "genre": "喜剧/恐怖"
  },
  {
    "id": "0043",
    "title": "浪漫风暴",
    "url": "./movie-0043.html",
    "cover": "./43.jpg",
    "oneLine": "一对正在闹分手的情侣,在十号风球的夜晚被困在即将倒塌的摩天轮上,求生之路逼迫他们重新相爱。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "台风",
      "极限求生",
      "浪漫",
      "港片",
      "生死恋"
    ],
    "genre": "爱情/灾难/动作"
  },
  {
    "id": "0044",
    "title": "克里斯托多·哈德森",
    "url": "./movie-0044.html",
    "cover": "./44.jpg",
    "oneLine": "揭秘英国天才数学家克里斯托多·哈德森,他曾在二战中破译密码,后来却神秘失踪,疑似被军情六处暗杀。",
    "year": "2027",
    "type": "剧集",
    "region": "英国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "天才",
      "政治惊悚",
      "暗黑"
    ],
    "genre": "传记,剧情,悬疑"
  },
  {
    "id": "0045",
    "title": "在异世界迷宫开后宫",
    "url": "./movie-0045.html",
    "cover": "./45.jpg",
    "oneLine": "社畜穿越到异世界,不打算拯救世界,只想在迷宫底层建一座房子,顺便收几个伙伴。",
    "year": "2024",
    "type": "动画剧集",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "异世界",
      "迷宫探索",
      "慢生活",
      "轻小说改"
    ],
    "genre": "奇幻,冒险,后宫"
  },
  {
    "id": "0046",
    "title": "妈妈和爸爸",
    "url": "./movie-0046.html",
    "cover": "./46.jpg",
    "oneLine": "一对决定离婚的夫妻,为了争夺那套唯一的保障性住房,开始了一场谁先搬走谁就输的冷战。",
    "year": "2026",
    "type": "电影",
    "region": "瑞典",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "北欧冷感",
      "离婚",
      "子女视角",
      "家庭关系",
      "黑色幽默"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "0047",
    "title": "绑架女模特",
    "url": "./movie-0047.html",
    "cover": "./47.jpg",
    "oneLine": "女模特被绑架后,发现绑匪的目标不是她,而是她背后的整个奢侈品黑产链。",
    "year": "2022",
    "type": "电影",
    "region": "法国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "绑架",
      "反转",
      "女性视角"
    ],
    "genre": "犯罪,悬疑"
  },
  {
    "id": "0048",
    "title": "破鞋",
    "url": "./movie-0048.html",
    "cover": "./48.jpg",
    "oneLine": "一双被扔在村口的破皮鞋,竟引发了全村对“荡妇羞辱”的荒诞大追查,最终揭露了一个残酷的真相。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "农村题材",
      "女性困境",
      "荒诞"
    ],
    "genre": "剧情/黑色幽默"
  },
  {
    "id": "0049",
    "title": "第二次也很美",
    "url": "./movie-0049.html",
    "cover": "./49.jpg",
    "oneLine": "36岁单亲妈妈与23岁实习医生的姐弟恋,被前夫和亲妈同时“搅局”。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "离婚",
      "单亲妈妈",
      "姐弟恋",
      "治愈",
      "轻喜剧"
    ],
    "genre": "爱情/家庭/喜剧"
  },
  {
    "id": "0050",
    "title": "铁旗门",
    "url": "./movie-0050.html",
    "cover": "./50.jpg",
    "oneLine": "清末乱世,以旗帜为武器的神秘门派“铁旗门”,为了守护最后一面“镇门旗”与洋人雇佣兵展开死斗。",
    "year": "2024",
    "type": "电影",
    "region": "中国台湾",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "门派争斗",
      "冷兵器",
      "师傅",
      "传承"
    ],
    "genre": "武侠,历史,剧情"
  },
  {
    "id": "0051",
    "title": "头奖",
    "url": "./movie-0051.html",
    "cover": "./51.jpg",
    "oneLine": "中了头奖的穷人还没来得及兑奖,就被所有人盯上了:杀手、债主、前妻、甚至连黑帮都来分一杯羹。",
    "year": "2024",
    "type": "电影",
    "region": "西班牙",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "彩票",
      "倒霉",
      "黑吃黑",
      "黑色幽默"
    ],
    "genre": "喜剧/犯罪"
  },
  {
    "id": "0052",
    "title": "实习医生格蕾第三季",
    "url": "./movie-0052.html",
    "cover": "./52.jpg",
    "oneLine": "一场连环车祸将整个急诊室推入混乱,格蕾必须在失去挚爱与拯救伤员之间做出终极选择。",
    "year": "2007",
    "type": "剧集",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "实习医生",
      "职场成长",
      "三角恋",
      "急诊室",
      "生死抉择"
    ],
    "genre": "剧情/医疗/爱情"
  },
  {
    "id": "0053",
    "title": "法老",
    "url": "./movie-0053.html",
    "cover": "./53.jpg",
    "oneLine": "平凡考古学家意外获得荷鲁斯之力,在现代纽约与复活的混沌之蛇阿波菲斯决战。",
    "year": "2024",
    "type": "电影",
    "region": "埃及/美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "古埃及",
      "超级英雄",
      "神话改编"
    ],
    "genre": "动作,冒险"
  },
  {
    "id": "0054",
    "title": "燕子",
    "url": "./movie-0054.html",
    "cover": "./54.jpg",
    "oneLine": "伊朗小村里,一个寡妇偷偷缝制燕子形状的风筝,试图飞越宗教警察的禁令。",
    "year": "2018",
    "type": "电影",
    "region": "伊朗",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "女性",
      "宗教",
      "压抑",
      "抗争",
      "社会"
    ],
    "genre": "剧情"
  },
  {
    "id": "0055",
    "title": "情迷芭塔雅",
    "url": "./movie-0055.html",
    "cover": "./55.jpg",
    "oneLine": "一封寄错的匿名情书,让两个到芭塔雅疗伤的陌生人,被迫上演一场荒诞的恋人戏码。",
    "year": "2026",
    "type": "电影",
    "region": "泰国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "异国风情",
      "一夜情",
      "身份错位",
      "情书",
      "阴差阳错"
    ],
    "genre": "爱情,喜剧,剧情"
  },
  {
    "id": "0056",
    "title": "维奥莱特·诺齐埃尔",
    "url": "./movie-0056.html",
    "cover": "./56.jpg",
    "oneLine": "1930年代,一名法国少女为了逃离压抑的中产家庭,不惜两次对父母下毒,成为轰动法国的女杀人犯。",
    "year": "1978",
    "type": "电影",
    "region": "法国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "真实改编",
      "弑亲案",
      "新浪潮遗韵"
    ],
    "genre": "剧情,犯罪,历史"
  },
  {
    "id": "0057",
    "title": "酒绿花红",
    "url": "./movie-0057.html",
    "cover": "./57.jpg",
    "oneLine": "八十年代香港最大夜总会的后台,四位舞小姐在灯红酒绿之下,编织着一张关于复仇与逃离的巨网。",
    "year": "2024",
    "type": "剧集",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "夜总会",
      "怀旧",
      "女性群像",
      "黑帮"
    ],
    "genre": "剧情悬疑"
  },
  {
    "id": "0058",
    "title": "兄弟营",
    "url": "./movie-0058.html",
    "cover": "./58.jpg",
    "oneLine": "1944年,一个溃败的国军排长与七个逃兵组成临时“兄弟营”,任务是炸掉日军弹药库,换全城百姓一条生路。",
    "year": "2028",
    "type": "剧集",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "抗日",
      "兄弟情",
      "草根",
      "牺牲"
    ],
    "genre": "战争/剧情/历史"
  },
  {
    "id": "0059",
    "title": "无尽情爱",
    "url": "./movie-0059.html",
    "cover": "./59.jpg",
    "oneLine": "一对恋人在巴黎的每个街区、每个时代都会相遇,但永远无法相守。",
    "year": "2023",
    "type": "剧集",
    "region": "法国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "循环",
      "宿命",
      "巴黎",
      "成长"
    ],
    "genre": "爱情,剧情"
  },
  {
    "id": "0060",
    "title": "火星异变",
    "url": "./movie-0060.html",
    "cover": "./60.jpg",
    "oneLine": "中国火星基地遭遇未知孢子感染,宇航员体内开始长出红色晶体。",
    "year": "2021",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "火星",
      "变异",
      "求生",
      "硬科幻"
    ],
    "genre": "科幻,灾难"
  },
  {
    "id": "0061",
    "title": "这就是我们所说的夏天",
    "url": "./movie-0061.html",
    "cover": "./61.jpg",
    "oneLine": "1999年夏天,两个18岁男孩在全罗南道的小村庄里,度过了一个连牵手都要偷偷摸摸的暑假。",
    "year": "2022",
    "type": "电影",
    "region": "韩国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "青春",
      "初恋",
      "乡村",
      "遗憾"
    ],
    "genre": "剧情/同性"
  },
  {
    "id": "0062",
    "title": "南极穿越",
    "url": "./movie-0062.html",
    "cover": "./62.jpg",
    "oneLine": "南极科考队遭遇暴风雪坠入冰下巨洞,发现一个因全球变暖苏醒的远古生态系统。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "南极",
      "极端生存",
      "科考站",
      "全球变暖",
      "冰下异兽"
    ],
    "genre": "冒险,灾难,科幻"
  },
  {
    "id": "0063",
    "title": "乌鸦",
    "url": "./movie-0063.html",
    "cover": "./63.jpg",
    "oneLine": "白天是法援律师,夜晚化身代号“乌鸦”的暗黑执法者。",
    "year": "1996",
    "type": "电影",
    "region": "中国香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "杀手",
      "法律灰色地带",
      "复仇",
      "亦正亦邪"
    ],
    "genre": "犯罪,悬疑,惊悚"
  },
  {
    "id": "0064",
    "title": "风继续吹",
    "url": "./movie-0064.html",
    "cover": "./64.jpg",
    "oneLine": "一个普通荣迷从2003年至今的二十年人生,被张国荣的音乐和电影串联成一篇深情的告白。",
    "year": "2025",
    "type": "电影",
    "region": "华语",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "致敬张国荣",
      "粉丝故事",
      "时代记忆",
      "情怀催泪"
    ],
    "genre": "剧情,音乐,传记"
  },
  {
    "id": "0065",
    "title": "北游记之仙魂下凡",
    "url": "./movie-0065.html",
    "cover": "./65.jpg",
    "oneLine": "真武大帝的仙魂意外坠入现代都市,附身在一个社畜程序员身上,为了归位而被迫降妖除魔。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "修仙",
      "穿越",
      "神话",
      "降魔"
    ],
    "genre": "奇幻/动作"
  },
  {
    "id": "0066",
    "title": "男主大甩卖",
    "url": "./movie-0066.html",
    "cover": "./66.jpg",
    "oneLine": "元宇宙婚恋APP推出“二手男主交易市场”,被前任退回的虚拟男友们集体维权,要求重新做人。",
    "year": "2025",
    "type": "剧集",
    "region": "韩国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "乙女游戏",
      "反套路",
      "二手男友",
      "元宇宙",
      "爆笑"
    ],
    "genre": "喜剧,爱情"
  },
  {
    "id": "0067",
    "title": "真相",
    "url": "./movie-0067.html",
    "cover": "./67.jpg",
    "oneLine": "一名过气调查记者接到神秘录音带,发现十年前被判定自杀的女法官案另有真凶。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "媒体调查",
      "旧案重启",
      "社会派",
      "层层反转"
    ],
    "genre": "悬疑/犯罪/现实"
  },
  {
    "id": "0068",
    "title": "战门",
    "url": "./movie-0068.html",
    "cover": "./68.jpg",
    "oneLine": "一个只会打咏春的呆子,一个吹牛不打草稿的假大师,开启了一场寻找失传绝学的公路冒险。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "武术",
      "门派",
      "传承",
      "公路片",
      "功夫喜剧"
    ],
    "genre": "动作,武侠,励志"
  },
  {
    "id": "0069",
    "title": "钢铁意志",
    "url": "./movie-0069.html",
    "cover": "./69.jpg",
    "oneLine": "失去右臂的少年要成为举重冠军,所有人都说不可能,除了他的哑巴父亲。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "举重",
      "残奥会",
      "独臂",
      "励志",
      "真实改编"
    ],
    "genre": "剧情,传记,运动"
  },
  {
    "id": "0070",
    "title": "前说!",
    "url": "./movie-0070.html",
    "cover": "./70.jpg",
    "oneLine": "四个女高中生组成了存在感为零的漫才社团,目标是登上“搞笑甲子园”。",
    "year": "2020",
    "type": "动画",
    "region": "日本",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "漫才",
      "女子高中生",
      "日常",
      "追梦"
    ],
    "genre": "喜剧,青春"
  },
  {
    "id": "0071",
    "title": "亲爱的新年好",
    "url": "./movie-0071.html",
    "cover": "./71.jpg",
    "oneLine": "每年春节,在北京打工的东北姑娘都得面对同一件事:妈妈的花式催婚。",
    "year": "2020",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "春节",
      "返乡",
      "家庭",
      "催婚",
      "温情"
    ],
    "genre": "家庭/喜剧"
  },
  {
    "id": "0072",
    "title": "女子十二不设防",
    "url": "./movie-0072.html",
    "cover": "./72.jpg",
    "oneLine": "十二个身怀绝技的女警组成秘密小队,伪装成夜总会公关,捣毁跨国人口贩卖集团。",
    "year": "1991",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "全女性",
      "警匪",
      "卧底",
      "硬核"
    ],
    "genre": "剧情/动作/犯罪"
  },
  {
    "id": "0073",
    "title": "海洋男孩",
    "url": "./movie-0073.html",
    "cover": "./73.jpg",
    "oneLine": "住在灯塔下的自闭症少年坚信,是传说中的“海洋男孩”在保护着即将倒闭的家族渔场。",
    "year": "2023",
    "type": "电影",
    "region": "澳大利亚",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "环保",
      "少年成长",
      "神秘生物"
    ],
    "genre": "家庭/冒险"
  },
  {
    "id": "0074",
    "title": "湖边散步",
    "url": "./movie-0074.html",
    "cover": "./74.jpg",
    "oneLine": "父亲忘记了全世界,却记得每天带儿子去湖边散步的那条路。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "家庭",
      "方言",
      "阿尔兹海默症",
      "慢节奏"
    ],
    "genre": "文艺"
  },
  {
    "id": "0075",
    "title": "听不见的胜利",
    "url": "./movie-0075.html",
    "cover": "./75.jpg",
    "oneLine": "聋人女孩靠读唇语打进国家队,她的父亲用十年时间学会了她“听不见的掌声”。",
    "year": "2022",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "聋人篮球",
      "残障体育",
      "父女",
      "逆袭",
      "真实改编"
    ],
    "genre": "体育/励志/家庭"
  },
  {
    "id": "0076",
    "title": "欢乐情缘",
    "url": "./movie-0076.html",
    "cover": "./76.jpg",
    "oneLine": "为了应付催婚,金牌中介假扮女友,却发现自己“推销”的是心上人。",
    "year": "2024",
    "type": "电影",
    "region": "中国台湾",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "欢喜冤家",
      "相亲",
      "身份错位"
    ],
    "genre": "爱情,喜剧"
  },
  {
    "id": "0077",
    "title": "冷暖天涯",
    "url": "./movie-0077.html",
    "cover": "./77.jpg",
    "oneLine": "1990年,一家五口从上海移民到巴西,每个人都在各自的角落里冷着,除了最小的妹妹。",
    "year": "1991",
    "type": "电视剧",
    "region": "香港/台湾",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "移民",
      "离散",
      "时代变迁",
      "长剧"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "0078",
    "title": "魔鬼俱乐部",
    "url": "./movie-0078.html",
    "cover": "./78.jpg",
    "oneLine": "精英高中的最差学生意外加入了一个秘密俱乐部,却发现成员每学期都要消失一个。",
    "year": "2024",
    "type": "剧集",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "校园悬疑",
      "秘密社团",
      "阶级对立",
      "双面人生"
    ],
    "genre": "悬疑、惊悚、校园"
  },
  {
    "id": "0079",
    "title": "芒果新星班之了不起的艺能",
    "url": "./movie-0079.html",
    "cover": "./79.jpg",
    "oneLine": "30位怀揣梦想的练习生争夺7个出道位,台下是兄弟,台上是对手。",
    "year": "2022",
    "type": "综艺",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "偶像",
      "练习生",
      "竞技",
      "青春"
    ],
    "genre": "真人秀,选秀"
  },
  {
    "id": "0080",
    "title": "我家有个狐仙大人。",
    "url": "./movie-0080.html",
    "cover": "./80.jpg",
    "oneLine": "一对兄弟继承了奶奶的旧宅,也继承了她封印在地下室里已经饿了一百年的狐仙。",
    "year": "2008",
    "type": "动画",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "神灵",
      "日常",
      "搞笑"
    ],
    "genre": "奇幻"
  },
  {
    "id": "0081",
    "title": "天地大冲撞",
    "url": "./movie-0081.html",
    "cover": "./81.jpg",
    "oneLine": "一颗足以灭绝恐龙的巨型彗星直指地球,人类最后的希望是一群钻井工人。",
    "year": "1998",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "陨石",
      "末日",
      "英雄",
      "牺牲",
      "特效"
    ],
    "genre": "动作,科幻,灾难"
  },
  {
    "id": "0082",
    "title": "四谷怪谈",
    "url": "./movie-0082.html",
    "cover": "./82.jpg",
    "oneLine": "武士毒杀丑妻另娶千金,然而丑妻的怨念化作厉鬼,每晚在他枕边细语。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "日式怪谈",
      "复仇",
      "阿岩",
      "江户时代",
      "心理恐怖"
    ],
    "genre": "恐怖/悬疑/古装"
  },
  {
    "id": "0083",
    "title": "我要是有了枪",
    "url": "./movie-0083.html",
    "cover": "./83.jpg",
    "oneLine": "一个老实巴交的快递员捡到一把枪,他开始幻想“有枪之后”的种种可能,却因此卷入连环意外。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "社会底层",
      "荒诞",
      "反转",
      "人性"
    ],
    "genre": "剧情,犯罪,黑色幽默"
  },
  {
    "id": "0084",
    "title": "五个扑水的少年2021",
    "url": "./movie-0084.html",
    "cover": "./84.jpg",
    "oneLine": "五个被老师嫌弃的高中男生,为了一个谎言,组成了全校历史上第一支男子花样游泳队。",
    "year": "2021",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "青春",
      "花样游泳",
      "热血",
      "翻拍"
    ],
    "genre": "喜剧,运动"
  },
  {
    "id": "0085",
    "title": "仙球大战",
    "url": "./movie-0085.html",
    "cover": "./85.jpg",
    "oneLine": "天界举办首届“仙球大赛”,孙悟空、二郎神和哪吒组队,却发现对手是现代足球明星穿越来的。",
    "year": "2017",
    "type": "电影",
    "region": "中国香港/中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "无厘头",
      "神仙运动会",
      "恶搞竞技",
      "群星贺岁",
      "特摄风"
    ],
    "genre": "喜剧/古装/运动"
  },
  {
    "id": "0086",
    "title": "我们无法一起学习第一季",
    "url": "./movie-0086.html",
    "cover": "./86.jpg",
    "oneLine": "贫穷学霸男主被任命为两名天才美少女的私教,但这两个天才的偏科程度令人发指。",
    "year": "2019",
    "type": "动画",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "后宫",
      "学霸与学渣",
      "搞笑日常",
      "青春"
    ],
    "genre": "校园恋爱喜剧"
  },
  {
    "id": "0087",
    "title": "汪汪队立大功第九季",
    "url": "./movie-0087.html",
    "cover": "./87.jpg",
    "oneLine": "莱德队长带领狗狗们升级装备,迎战来自外太空的全新污染危机。",
    "year": "2024",
    "type": "剧集",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "冒险",
      "救援",
      "狗狗"
    ],
    "genre": "动画,儿童"
  },
  {
    "id": "0088",
    "title": "西部骑士",
    "url": "./movie-0088.html",
    "cover": "./88.jpg",
    "oneLine": "美国内战后期,一支由不同肤色、不同立场的人组成的骑兵巡逻队,在西部荒原上维护脆弱的和平。",
    "year": "1965",
    "type": "电视剧",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "经典",
      "牛仔",
      "侠义",
      "骑兵",
      "美剧"
    ],
    "genre": "西部/冒险"
  },
  {
    "id": "0089",
    "title": "迷离生日情仇",
    "url": "./movie-0089.html",
    "cover": "./89.jpg",
    "oneLine": "生日当天失忆的女人,发现口袋里有三张纸条:杀他、爱他、他是你。",
    "year": "1995",
    "type": "电影",
    "region": "香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "王家卫风",
      "失忆",
      "杀手",
      "黑色电影"
    ],
    "genre": "悬疑,爱情,惊悚"
  },
  {
    "id": "0090",
    "title": "杜鹃的婚约",
    "url": "./movie-0090.html",
    "cover": "./90.jpg",
    "oneLine": "出生时被抱错的富家千金和穷家女,即将与同一个豪门继承人结婚,而那个继承人只爱其中一人。",
    "year": "2024",
    "type": "剧集",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "抱错孩子",
      "家族联姻",
      "三角恋",
      "反转"
    ],
    "genre": "爱情,悬疑,伦理"
  },
  {
    "id": "0091",
    "title": "黑夜彩虹粤语",
    "url": "./movie-0091.html",
    "cover": "./91.jpg",
    "oneLine": "一场离奇的霓虹灯故障后,负债累累的单亲妈妈发现自己能看见每个人头顶的“悔意值”。",
    "year": "2003",
    "type": "剧集",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "粤语原声",
      "女性成长",
      "豪门恩怨",
      "励志"
    ],
    "genre": "家庭,都市"
  },
  {
    "id": "0092",
    "title": "春暖花开的时候",
    "url": "./movie-0092.html",
    "cover": "./92.jpg",
    "oneLine": "叛逆离家的花艺师女儿,为拯救父亲濒临倒闭的兰花园,被迫回乡参加“国际兰花节”。",
    "year": "2022",
    "type": "电视剧",
    "region": "中国台湾",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "乡土剧",
      "代际和解",
      "兰花种植"
    ],
    "genre": "家庭/剧情"
  },
  {
    "id": "0093",
    "title": "合约谋杀案",
    "url": "./movie-0093.html",
    "cover": "./93.jpg",
    "oneLine": "一个杀手雇律师为自己拟定“合法谋杀合约”,律师的女儿成了第一个目标。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "杀手",
      "律师",
      "摩天楼",
      "密室"
    ],
    "genre": "犯罪,悬疑,惊悚"
  },
  {
    "id": "0094",
    "title": "外出就餐2",
    "url": "./movie-0094.html",
    "cover": "./94.jpg",
    "oneLine": "为了追到餐厅帅气服务生,一名直男大学生假装盲人,却发现对方竟是自己的室友。",
    "year": "2006",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "LGBT",
      "骗局",
      "青春",
      "性感"
    ],
    "genre": "喜剧,爱情,同性"
  },
  {
    "id": "0095",
    "title": "无负今日",
    "url": "./movie-0095.html",
    "cover": "./95.jpg",
    "oneLine": "从五四到抗战,再到改革开放,一所百年中学的四代师生,诠释“今日”二字的分量。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "五四精神",
      "教育",
      "家国情怀",
      "文人风骨",
      "年代"
    ],
    "genre": "剧情/历史"
  },
  {
    "id": "0096",
    "title": "失重青春",
    "url": "./movie-0096.html",
    "cover": "./96.jpg",
    "oneLine": "轮椅少女与退役街舞大叔组成“失重组合”,在轮椅上炸翻地下舞场。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "街舞",
      "代际冲突",
      "成长",
      "友情"
    ],
    "genre": "剧情,青春"
  },
  {
    "id": "0097",
    "title": "龙之舞",
    "url": "./movie-0097.html",
    "cover": "./97.jpg",
    "oneLine": "一个被遗忘的山村,一条尘封的百年巨龙,一群留守儿童的奇迹之舞。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆/中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "舞龙",
      "留守儿童",
      "非遗传承",
      "愿望实现"
    ],
    "genre": "剧情,家庭,奇幻"
  },
  {
    "id": "0098",
    "title": "早餐中国第四季",
    "url": "./movie-0098.html",
    "cover": "./98.jpg",
    "oneLine": "凌晨四点的夜市,一位烧烤摊主用一道隐藏早餐点亮了整条街的深夜心事。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "美食",
      "人文",
      "烟火气",
      "城市漫步"
    ],
    "genre": "纪录片"
  },
  {
    "id": "0099",
    "title": "薄樱鬼第一季",
    "url": "./movie-0099.html",
    "cover": "./99.jpg",
    "oneLine": "幕末京都,少女雪村千鹤邂逅新选组,却发现队员们正被一种名为“罗刹”的吸血鬼之药侵蚀着人性。",
    "year": "2010",
    "type": "动漫",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "新选组",
      "武士",
      "吸血鬼",
      "幕末",
      "雪村千鹤"
    ],
    "genre": "历史奇幻"
  },
  {
    "id": "0100",
    "title": "神龙之战",
    "url": "./movie-0100.html",
    "cover": "./100.jpg",
    "oneLine": "灭门遗孤意外唤醒体内龙血,为保苍生不得不与苏醒的上古邪龙展开宿命对决。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "东方巨龙",
      "神秘血脉",
      "史诗对决",
      "特效大片"
    ],
    "genre": "动作,奇幻,古装"
  },
  {
    "id": "0101",
    "title": "混乱和黑暗",
    "url": "./movie-0101.html",
    "cover": "./101.jpg",
    "oneLine": "一名患有严重幻觉的警探在追查连环杀手时,发现自己可能就是那个杀手。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "悬疑",
      "犯罪心理",
      "黑色电影",
      "高概念"
    ],
    "genre": "心理惊悚"
  },
  {
    "id": "0102",
    "title": "狂风飞絮",
    "url": "./movie-0102.html",
    "cover": "./102.jpg",
    "oneLine": "超强台风登陆夜,一栋老公寓里的五户人家被迫挤在同一间房子里,旧恨新怨全部爆发。",
    "year": "2024",
    "type": "电影",
    "region": "中国台湾",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "台风",
      "社区",
      "邻里",
      "和解"
    ],
    "genre": "家庭,剧情,灾难"
  },
  {
    "id": "0103",
    "title": "卡车司机之歌",
    "url": "./movie-0103.html",
    "cover": "./103.jpg",
    "oneLine": "一名穿梭在北极圈公路的孤独女卡车司机,通过CB电台与陌生男司机对唱,治愈了彼此的创伤。",
    "year": "2022",
    "type": "电影",
    "region": "瑞典",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "北欧",
      "孤独",
      "长夜",
      "无线电",
      "乡愁"
    ],
    "genre": "音乐,公路,剧情"
  },
  {
    "id": "0104",
    "title": "马可的滚球队",
    "url": "./movie-0104.html",
    "cover": "./104.jpg",
    "oneLine": "轮椅上的自闭症数学天才,用概率论和几何学,将一支由残障人士组成的“垃圾”滚球队带向了世界冠军。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "残疾人体育",
      "励志",
      "友情"
    ],
    "genre": "剧情,运动"
  },
  {
    "id": "0105",
    "title": "纯真的交易",
    "url": "./movie-0105.html",
    "cover": "./105.jpg",
    "oneLine": "卧底记者假扮买家潜入婴儿贩卖黑市,却发现自己要“买”的,竟是失散多年的亲弟弟。",
    "year": "2025",
    "type": "电影",
    "region": "印度",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "贩卖儿童",
      "记者",
      "暗访",
      "黑市",
      "正义"
    ],
    "genre": "犯罪,剧情,悬疑"
  },
  {
    "id": "0106",
    "title": "白雪公主2025",
    "url": "./movie-0106.html",
    "cover": "./106.jpg",
    "oneLine": "2147年,代号“白雪”的仿生人公主逃出母体工厂,却被七个机械废品回收者捕获。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "赛博朋克",
      "暗黑童话",
      "人工智能",
      "自我觉醒"
    ],
    "genre": "科幻/奇幻"
  },
  {
    "id": "0107",
    "title": "好奇猴乔治",
    "url": "./movie-0107.html",
    "cover": "./107.jpg",
    "oneLine": "为了在拆除前保住即将被毁的城市博物馆,一只好奇的小猴子误打误撞启动了馆内的原始机关。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "萌宠",
      "科普启蒙",
      "喜剧",
      "冒险"
    ],
    "genre": "动画家庭"
  },
  {
    "id": "0108",
    "title": "追星星的人第三季",
    "url": "./movie-0108.html",
    "cover": "./108.jpg",
    "oneLine": "五位明星与一位自闭症天文学少年,在暗夜公园找一颗消失的脉冲星。",
    "year": "2023",
    "type": "综艺",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "观星",
      "治愈",
      "慢综艺",
      "素人科学家"
    ],
    "genre": "真人秀/科普"
  },
  {
    "id": "0109",
    "title": "有房有车 第二季",
    "url": "./movie-0109.html",
    "cover": "./109.jpg",
    "oneLine": "房贷刚还完,学区房危机接踵而至,鸡飞狗跳的夫妻二人被迫再次踏上鸡血奋斗路。",
    "year": "2026",
    "type": "剧集",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "夫妻",
      "房贷",
      "职场",
      "搞笑",
      "生活"
    ],
    "genre": "喜剧,家庭,都市"
  },
  {
    "id": "0110",
    "title": "危城",
    "url": "./movie-0110.html",
    "cover": "./110.jpg",
    "oneLine": "一座被泥石流切断与外界联系的边境小城,迎来了三名逃窜的杀人魔,而警察却只有一把枪。",
    "year": "2018",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "孤城",
      "困兽之斗",
      "以暴制暴",
      "密闭空间"
    ],
    "genre": "动作/犯罪"
  },
  {
    "id": "0111",
    "title": "男子玩品",
    "url": "./movie-0111.html",
    "cover": "./111.jpg",
    "oneLine": "当红男模接连“意外”身亡,卧底警察发现所有死者都曾签约同一家名为“玩品”的神秘经纪公司。",
    "year": "2025",
    "type": "剧集",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "心理操控",
      "模特行业",
      "暗黑",
      "反转"
    ],
    "genre": "悬疑,犯罪"
  },
  {
    "id": "0112",
    "title": "战栗",
    "url": "./movie-0112.html",
    "cover": "./112.jpg",
    "oneLine": "一个失明的广播节目制作人,收到了一盘记录着真实杀人过程的“立体声”录音带。",
    "year": "2020",
    "type": "电影",
    "region": "韩国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "连环杀人",
      "心理扭曲",
      "录音带",
      "反转",
      "密室"
    ],
    "genre": "悬疑,恐怖,犯罪"
  },
  {
    "id": "0113",
    "title": "情越双白线国语",
    "url": "./movie-0113.html",
    "cover": "./113.jpg",
    "oneLine": "一名的士司机与一位女警因车祸互相埋怨,女警失忆后坚信司机是她男友,两人被迫“假恋爱”找回记忆。",
    "year": "2010",
    "type": "剧集",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "出租车司机",
      "失忆",
      "冤家",
      "港式市井"
    ],
    "genre": "剧情/爱情"
  },
  {
    "id": "0114",
    "title": "白人男孩瑞克",
    "url": "./movie-0114.html",
    "cover": "./114.jpg",
    "oneLine": "1980年代底特律,一个14岁白人少年如何在黑人贩毒帝国中成为最年轻线人。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "真实改编",
      "少年毒枭",
      "家庭悲剧",
      "社会阶层"
    ],
    "genre": "剧情/传记/犯罪"
  },
  {
    "id": "0115",
    "title": "暗黑街",
    "url": "./movie-0115.html",
    "cover": "./115.jpg",
    "oneLine": "卧底警察在黑帮核心层即将接班时,发现自己渐渐分不清正义与罪恶的边界。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "卧底",
      "黑帮",
      "兄弟情",
      "权力斗争"
    ],
    "genre": "犯罪、动作、悬疑"
  },
  {
    "id": "0116",
    "title": "秘密战队五连者:炸弹旋风",
    "url": "./movie-0116.html",
    "cover": "./116.jpg",
    "oneLine": "传说中的初代秘密战队时隔50年重聚,对抗一种能将人的“存在感”炸没的新型炸弹怪人。",
    "year": "2026",
    "type": "电影",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "超级英雄",
      "爆炸",
      "战斗",
      "情怀"
    ],
    "genre": "特摄动作"
  },
  {
    "id": "0117",
    "title": "烈焰风暴",
    "url": "./movie-0117.html",
    "cover": "./117.jpg",
    "oneLine": "一场超级森林大火席卷加州,一名被停职的精英消防员在撤离途中,发现有人正利用这场大火作为掩护,抢劫联邦金库。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "消防员",
      "极端气候",
      "劫机",
      "兄弟情"
    ],
    "genre": "动作,灾难,惊悚"
  },
  {
    "id": "0118",
    "title": "红十一",
    "url": "./movie-0118.html",
    "cover": "./118.jpg",
    "oneLine": "湘江血战后,一名年仅十五岁的小红军医疗兵,必须在断后的绝望阻击战中,保住仅剩的十一名重伤员。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "红军",
      "医疗兵",
      "女性视角",
      "湘江战役",
      "信仰"
    ],
    "genre": "战争"
  },
  {
    "id": "0119",
    "title": "曾达的囚徒",
    "url": "./movie-0119.html",
    "cover": "./119.jpg",
    "oneLine": "一位酷似国王的英国绅士被强行卷入鲁里塔尼亚宫廷政变,他将代替国王迎娶公主并对抗反贼。",
    "year": "2022",
    "type": "电影",
    "region": "英国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "名著改编",
      "宫廷",
      "替身",
      "骑士",
      "复仇"
    ],
    "genre": "冒险,剧情,动作"
  },
  {
    "id": "0120",
    "title": "疯囚长夜",
    "url": "./movie-0120.html",
    "cover": "./120.jpg",
    "oneLine": "一座关押精神病罪犯的孤岛监狱发生停电,看守被杀,十二名囚犯必须在天亮前找出凶手。",
    "year": "2024",
    "type": "剧集",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "精神病监狱",
      "密室",
      "全员恶人",
      "狼人杀式"
    ],
    "genre": "惊悚,悬疑,犯罪"
  },
  {
    "id": "0121",
    "title": "电幻国度",
    "url": "./movie-0121.html",
    "cover": "./121.jpg",
    "oneLine": "在机器人统治的废土上,一个少女带着一只旧式导航机器人去寻找“最后的过山车”。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "废弃游乐园",
      "机器人起义",
      "怀旧未来"
    ],
    "genre": "科幻,冒险"
  },
  {
    "id": "0122",
    "title": "女恶魔人",
    "url": "./movie-0122.html",
    "cover": "./122.jpg",
    "oneLine": "白天是怯懦的银行职员,夜晚是猎杀同类的恶魔猎手,她发现自己要杀的最后一只恶魔竟是爱人。",
    "year": "2023",
    "type": "动画剧集",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "恶魔变身",
      "人性拷问",
      "血腥美学",
      "双面人生"
    ],
    "genre": "黑暗奇幻,动作,心理恐怖"
  },
  {
    "id": "0123",
    "title": "把枪放下",
    "url": "./movie-0123.html",
    "cover": "./123.jpg",
    "oneLine": "一场银行劫案演变成警匪人质僵持,谈判专家发现劫匪头目竟是十年前的自己。",
    "year": "2023",
    "type": "电影",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "警匪对峙",
      "人性拷问",
      "密室谈判"
    ],
    "genre": "动作/犯罪"
  },
  {
    "id": "0124",
    "title": "女衒",
    "url": "./movie-0124.html",
    "cover": "./124.jpg",
    "oneLine": "明治末年,一个底层男人靠贩卖女性发家,最终被所有被他出卖的女人复仇。",
    "year": "1987",
    "type": "电影",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "明治",
      "人贩",
      "女性",
      "底层",
      "罪恶"
    ],
    "genre": "历史剧情"
  },
  {
    "id": "0125",
    "title": "冰狗任务",
    "url": "./movie-0125.html",
    "cover": "./125.jpg",
    "oneLine": "一名网红主播为了流量,给阿拉斯加偏远小镇的每家每户送冰毒,但他以为自己送的是冰淇淋。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "雪橇犬",
      "阿拉斯加",
      "送货冒险"
    ],
    "genre": "喜剧/家庭"
  },
  {
    "id": "0126",
    "title": "龙精仔猛",
    "url": "./movie-0126.html",
    "cover": "./126.jpg",
    "oneLine": "茶餐厅废柴意外发现自己是龙族后裔,为了拯救倒闭的老店,他必须参加仙界茶餐厅大赛。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "市井",
      "神话改编",
      "父子情",
      "无厘头"
    ],
    "genre": "喜剧/动作/奇幻"
  },
  {
    "id": "0127",
    "title": "蓝色大丽花",
    "url": "./movie-0127.html",
    "cover": "./127.jpg",
    "oneLine": "一名网络女记者重新调查“蓝色大丽花”悬案,却发现真正的凶手仍在世,且正盯着她。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "黑色电影",
      "翻案",
      "记者",
      "女性"
    ],
    "genre": "悬疑,犯罪,惊悚"
  },
  {
    "id": "0128",
    "title": "60歳的情书",
    "url": "./movie-0128.html",
    "cover": "./128.jpg",
    "oneLine": "退休教师与素未谋面的笔友约定在60岁生日见面,却发现对方是四十年前羞辱过他的女同学。",
    "year": "2018",
    "type": "电影",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "黄昏恋",
      "书信",
      "退休",
      "重返社会",
      "温情"
    ],
    "genre": "剧情/爱情"
  },
  {
    "id": "0129",
    "title": "最弱无败的神装机龙",
    "url": "./movie-0129.html",
    "cover": "./129.jpg",
    "oneLine": "男主角是学院里唯一无法召唤机甲龙的“零龙者”,但他体内封印着上古灭世龙。",
    "year": "2027",
    "type": "剧集",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "机甲",
      "学院",
      "龙",
      "逆袭",
      "后宫"
    ],
    "genre": "动画/奇幻/战斗"
  },
  {
    "id": "0130",
    "title": "远征远征",
    "url": "./movie-0130.html",
    "cover": "./130.jpg",
    "oneLine": "中国远征军溃败野人山,五位不同出身的士兵必须穿越百里雨林,带出一份绝密作战地图。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "缅甸战场",
      "远征军",
      "生存",
      "人性"
    ],
    "genre": "历史,战争"
  },
  {
    "id": "0131",
    "title": "再见的延续",
    "url": "./movie-0131.html",
    "cover": "./131.jpg",
    "oneLine": "她经营着一家能让时间停止的咖啡店,每个进来的客人都有五分钟,去和再也见不到的人说“再见”。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "咖啡店",
      "时间暂停",
      "手写信",
      "离别",
      "疗愈"
    ],
    "genre": "剧情奇幻"
  },
  {
    "id": "0132",
    "title": "诡夜三日",
    "url": "./movie-0132.html",
    "cover": "./132.jpg",
    "oneLine": "三个青年在泰国乡村遭遇鬼打墙,困在同一个恐怖夜晚里,每次死亡后都会带着记忆重新醒来。",
    "year": "2025",
    "type": "电影",
    "region": "泰国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "泰式恐怖",
      "时间循环",
      "乡村邪术",
      "高能反转"
    ],
    "genre": "恐怖,惊悚,悬疑"
  },
  {
    "id": "0133",
    "title": "凶手还未睡",
    "url": "./movie-0133.html",
    "cover": "./133.jpg",
    "oneLine": "七个陌生人被困在一家酒店里,每晚安睡的人都会死,而凶手就在醒着的人中间。",
    "year": "2022",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "密室推理",
      "时间循环",
      "烧脑",
      "连环凶案"
    ],
    "genre": "悬疑/惊悚/犯罪"
  },
  {
    "id": "0134",
    "title": "遗失的小美好之谎言",
    "url": "./movie-0134.html",
    "cover": "./134.jpg",
    "oneLine": "婚礼前三天,新娘发现未婚夫一直爱的是自己已故的双胞胎姐姐,而她从十七岁起就在扮演姐姐的替身。",
    "year": "2025",
    "type": "剧集/短剧",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "校园暗恋",
      "反转",
      "替身文学",
      "虐恋"
    ],
    "genre": "爱情/悬疑"
  },
  {
    "id": "0135",
    "title": "深潭往事",
    "url": "./movie-0135.html",
    "cover": "./135.jpg",
    "oneLine": "黑帮杀手失忆后在小镇隐居七年,直到一部即将上映的电影预告片,让他发现自己竟是七年前灭门案的“死者”。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "黑帮",
      "失忆",
      "复仇",
      "兄弟情",
      "港风"
    ],
    "genre": "犯罪/悬疑"
  },
  {
    "id": "0136",
    "title": "舞台怪杰",
    "url": "./movie-0136.html",
    "cover": "./136.jpg",
    "oneLine": "一位患有严重社交恐惧症的戏剧导演,每次排练都能精准骂哭演员,但他排的戏场场爆满,直到他遇到了一个比他更怪的天才编剧。",
    "year": "2024",
    "type": "电视剧",
    "region": "英国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "戏剧",
      "西区",
      "天才",
      "偏执",
      "幕后"
    ],
    "genre": "剧情,喜剧,传记"
  },
  {
    "id": "0137",
    "title": "猛鬼毕业典礼",
    "url": "./movie-0137.html",
    "cover": "./137.jpg",
    "oneLine": "毕业典礼前夜,学校十年前自杀的学姐厉鬼回归,要杀光今年的优秀毕业生。",
    "year": "2024",
    "type": "电影",
    "region": "泰国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "校园",
      "厉鬼",
      "友情",
      "泰式搞笑"
    ],
    "genre": "恐怖喜剧"
  },
  {
    "id": "0138",
    "title": "地狱猫",
    "url": "./movie-0138.html",
    "cover": "./138.jpg",
    "oneLine": "一位患有严重强迫症的顶尖女杀手,在执行任务时错杀了目标的双胞胎妹妹,被迫带着“替代品”亡命天涯。",
    "year": "2024",
    "type": "剧集",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "女杀手",
      "黑色幽默",
      "飙车",
      "复仇",
      "义警"
    ],
    "genre": "动作"
  },
  {
    "id": "0139",
    "title": "上帝的喜剧",
    "url": "./movie-0139.html",
    "cover": "./139.jpg",
    "oneLine": "一个自称上帝的痴呆面包师,在小镇上批量制造“圣痕”,却意外治好了所有人的精神病。",
    "year": "1995",
    "type": "电影",
    "region": "葡萄牙",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "宗教隐喻",
      "荒诞派",
      "欧洲文艺",
      "存在主义",
      "黑白"
    ],
    "genre": "剧情,荒诞,哲学"
  },
  {
    "id": "0140",
    "title": "大国手之棋行江湖",
    "url": "./movie-0140.html",
    "cover": "./140.jpg",
    "oneLine": "明朝围棋国师被陷害后流落市井,必须在棋局上击败六位暗杀者才能洗冤。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "围棋",
      "武林",
      "破局",
      "双雄"
    ],
    "genre": "古装,动作,悬疑"
  },
  {
    "id": "0141",
    "title": "盲侠破三关",
    "url": "./movie-0141.html",
    "cover": "./141.jpg",
    "oneLine": "双目失明的神捕“盲侠”,必须在三天内连破“情关、财关、命关”,才能救出被绑架的女儿。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "盲人高手",
      "悬疑探案",
      "港风"
    ],
    "genre": "动作/武侠"
  },
  {
    "id": "0142",
    "title": "五台山儿女英雄传",
    "url": "./movie-0142.html",
    "cover": "./142.jpg",
    "oneLine": "抗战时期,五台山一群武僧放下木鱼,手持戒刀,为保护国宝古籍与日军特遣队展开厮杀。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "抗日",
      "佛教",
      "动作",
      "侠义",
      "传奇"
    ],
    "genre": "动作/历史/战争"
  },
  {
    "id": "0143",
    "title": "囧西游之荒村客栈",
    "url": "./movie-0143.html",
    "cover": "./143.jpg",
    "oneLine": "唐僧师徒误入深山荒村客栈,半夜竟发现每个房间都藏着一个吃人的西游“老熟人”。",
    "year": "2024",
    "type": "网络电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "西游衍生",
      "黑色幽默",
      "密室逃脱",
      "妖怪客栈"
    ],
    "genre": "喜剧,奇幻,惊悚"
  },
  {
    "id": "0144",
    "title": "海虎突击战",
    "url": "./movie-0144.html",
    "cover": "./144.jpg",
    "oneLine": "最精锐的海军陆战队小队,在一场无预案生死演习中撞上了真正的恐怖分子。",
    "year": "2019",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "海军陆战队",
      "反恐演习",
      "兄弟情",
      "实战化训练"
    ],
    "genre": "动作,战争"
  },
  {
    "id": "0145",
    "title": "巨星嫁到",
    "url": "./movie-0145.html",
    "cover": "./145.jpg",
    "oneLine": "流行天后在演唱会上随机抽中一个数学老师结婚,却发现这场婚姻能帮她逃税。",
    "year": "2022",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "流行歌手",
      "契约婚姻",
      "学霸",
      "搞笑"
    ],
    "genre": "喜剧/爱情"
  },
  {
    "id": "0146",
    "title": "绝地奶霸:唬父无犬子",
    "url": "./movie-0146.html",
    "cover": "./146.jpg",
    "oneLine": "FBI卧底“奶霸”被迫退休,他的儿子却接替任务扮成祖母,两人一明一暗闹翻整个贩毒集团。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "卧底",
      "变装",
      "父子档",
      "爆笑",
      "家庭"
    ],
    "genre": "喜剧/动作/犯罪"
  },
  {
    "id": "0147",
    "title": "爱的亡灵",
    "url": "./movie-0147.html",
    "cover": "./147.jpg",
    "oneLine": "乡下车夫与有夫之妇合谋杀害了她的丈夫,半年后死者的亡灵骑着一辆自行车出现在树林中追捕他们。",
    "year": "1978",
    "type": "电影",
    "region": "日本/法国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "大岛渚",
      "心理惊悚",
      "通奸",
      "谋杀"
    ],
    "genre": "剧情/情色"
  },
  {
    "id": "0148",
    "title": "我的老板是小猪",
    "url": "./movie-0148.html",
    "cover": "./148.jpg",
    "oneLine": "每天早上都会变成宠物猪的冷酷霸总,只有女员工的吻才能解咒。",
    "year": "2025",
    "type": "电视剧",
    "region": "韩国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "诅咒",
      "霸总",
      "变身",
      "契约恋爱",
      "治愈"
    ],
    "genre": "浪漫爱情喜剧"
  },
  {
    "id": "0149",
    "title": "刀锋下的替身",
    "url": "./movie-0149.html",
    "cover": "./149.jpg",
    "oneLine": "卧底警察意外发现毒枭弟弟竟是自己的替身,两人交换命运后,谁也分不清谁是警察。",
    "year": "2021",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "替身",
      "双胞胎",
      "警匪",
      "身份错位"
    ],
    "genre": "悬疑,犯罪"
  },
  {
    "id": "0150",
    "title": "屌丝女士第三季",
    "url": "./movie-0150.html",
    "cover": "./150.jpg",
    "oneLine": "那个把生活过成灾难现场的女人回来了,这次她连AI助手都开始嫌弃她。",
    "year": "2025",
    "type": "剧集",
    "region": "德国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "无厘头",
      "女性",
      "职场",
      "社死现场"
    ],
    "genre": "喜剧,短剧"
  },
  {
    "id": "0151",
    "title": "迷网国语",
    "url": "./movie-0151.html",
    "cover": "./1.jpg",
    "oneLine": "网罪科新人发现,多起电信诈骗案的受害者都在自杀前,收到过“未来的自己”发来的短信。",
    "year": "2025",
    "type": "剧集",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "网络诈骗",
      "AI换脸",
      "警方"
    ],
    "genre": "悬疑/犯罪/科技"
  },
  {
    "id": "0152",
    "title": "涉外大饭店",
    "url": "./movie-0152.html",
    "cover": "./2.jpg",
    "oneLine": "七位英国老人被骗到印度一家濒临倒闭的大饭店,却发现这里比养老院更疯狂。",
    "year": "2024",
    "type": "电影",
    "region": "印度/英国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "老年人生",
      "异国文化",
      "群像喜剧",
      "印度风情",
      "第二春"
    ],
    "genre": "喜剧/剧情"
  },
  {
    "id": "0153",
    "title": "白夜侠",
    "url": "./movie-0153.html",
    "cover": "./3.jpg",
    "oneLine": "白天是瞎眼算命先生,晚上是杀人不眨眼的侠客,但连他自己都不知道。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "侠客",
      "昼夜双面",
      "复仇",
      "冷兵器"
    ],
    "genre": "动作、武侠、悬疑"
  },
  {
    "id": "0154",
    "title": "不要见怪",
    "url": "./movie-0154.html",
    "cover": "./4.jpg",
    "oneLine": "濒临破产的中年妇女接了一单奇怪任务:陪富家宅男儿子上床,作为交换一辆别克。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "代驾",
      "豪车",
      "中年危机",
      "富二代",
      "成长"
    ],
    "genre": "喜剧/爱情"
  },
  {
    "id": "0155",
    "title": "智者无敌",
    "url": "./movie-0155.html",
    "cover": "./5.jpg",
    "oneLine": "1940年上海,一个被日军俘虏的数学天才,用一道数学谜题成为三面间谍,智斗军统、中统和特高课。",
    "year": "2024",
    "type": "剧集",
    "region": "中国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "抗战",
      "密码战",
      "数学天才",
      "双面间谍",
      "高智商对决"
    ],
    "genre": "悬疑/谍战/历史"
  },
  {
    "id": "0156",
    "title": "生之欲2022",
    "url": "./movie-0156.html",
    "cover": "./6.jpg",
    "oneLine": "一个胃癌晚期的市役所公务员,用生命中最后三个月,在一片废弃的空地上与整个僵化的系统为敌。",
    "year": "2022",
    "type": "电影",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "绝症",
      "重生",
      "官僚",
      "改编"
    ],
    "genre": "剧情/人生"
  },
  {
    "id": "0157",
    "title": "希波克拉底",
    "url": "./movie-0157.html",
    "cover": "./7.jpg",
    "oneLine": "实习医生第一天就遇上急诊室爆满,他发现救人的前提竟然是先学会“挑病人”。",
    "year": "2021",
    "type": "剧集",
    "region": "法国/比利时",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "医院",
      "实习生",
      "道德困境",
      "制度"
    ],
    "genre": "剧情/医疗/职场"
  },
  {
    "id": "0158",
    "title": "不法之徒1986",
    "url": "./movie-0158.html",
    "cover": "./8.jpg",
    "oneLine": "1986年的高雄,四个混迹街头的少年以为能闯出一片天,却只闯进了无法回头的夜。",
    "year": "2023",
    "type": "电影",
    "region": "中国台湾",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "黑帮",
      "1980年代",
      "兄弟情",
      "悲剧"
    ],
    "genre": "犯罪/剧情"
  },
  {
    "id": "0159",
    "title": "歌剧理发师",
    "url": "./movie-0159.html",
    "cover": "./9.jpg",
    "oneLine": "西西里小镇理发师每天边理发边唱咏叹调,直到一位真正的斯卡拉歌剧院星探推门而入。",
    "year": "2024",
    "type": "电影",
    "region": "意大利",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "歌剧",
      "理发师",
      "小镇",
      "误会",
      "咏叹调"
    ],
    "genre": "喜剧/音乐"
  },
  {
    "id": "0160",
    "title": "六重奏",
    "url": "./movie-0160.html",
    "cover": "./10.jpg",
    "oneLine": "六位互不相识的音乐家受邀来到一座孤岛豪宅为富豪演奏,却发现自己正是乐谱上即将被谋杀的六个音符。",
    "year": "2022",
    "type": "电影",
    "region": "英国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "古典乐",
      "多重人格",
      "密室",
      "反转"
    ],
    "genre": "悬疑/惊悚/音乐"
  },
  {
    "id": "0161",
    "title": "千人斩",
    "url": "./movie-0161.html",
    "cover": "./11.jpg",
    "oneLine": "刽子手因斩首千人而被称为“千人斩”,但被他处决的恶鬼们联合起来,要在头七之夜向他索命。",
    "year": "1991",
    "type": "电影",
    "region": "中国台湾",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "武侠",
      "鬼怪",
      "cult"
    ],
    "genre": "动作,奇幻"
  },
  {
    "id": "0162",
    "title": "虎口鸳鸯",
    "url": "./movie-0162.html",
    "cover": "./12.jpg",
    "oneLine": "女缉毒警和男诈骗犯被迫假扮夫妻潜入毒巢,第一天晚上就差点因为谁洗碗而暴露身份。",
    "year": "2026",
    "type": "网络剧",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "卧底夫妻",
      "黑帮",
      "假戏真做",
      "西南边境"
    ],
    "genre": "喜剧、爱情"
  },
  {
    "id": "0163",
    "title": "见习医生追女仔",
    "url": "./movie-0163.html",
    "cover": "./13.jpg",
    "oneLine": "三个医学院实习生为了追到护士长,轮流装病人、装专家、装幽灵,把整间医院搅得鸡飞狗跳。",
    "year": "1993",
    "type": "电影",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "医院喜剧",
      "菜鸟医生",
      "追女秘笈",
      "港式笑料"
    ],
    "genre": "喜剧/爱情/青春"
  },
  {
    "id": "0164",
    "title": "魔幻都市第二季",
    "url": "./movie-0164.html",
    "cover": "./14.jpg",
    "oneLine": "在迈阿密,一个能让ATM吐钱的loser、一个能和鸽子对话的流浪女组成了最不靠谱的“超自然侦探所”。",
    "year": "2019",
    "type": "剧集",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "都市传说",
      "超能力",
      "黑色幽默",
      "第二季"
    ],
    "genre": "科幻/奇幻/黑色喜剧"
  },
  {
    "id": "0165",
    "title": "初雪告白",
    "url": "./movie-0165.html",
    "cover": "./15.jpg",
    "oneLine": "在首尔初雪那天告白的男人惨遭拒绝,却发现自己被困在了“告白前一天”的无限循环中。",
    "year": "2023",
    "type": "电影",
    "region": "韩国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "纯爱",
      "时间循环",
      "遗憾",
      "治愈"
    ],
    "genre": "爱情/奇幻"
  },
  {
    "id": "0166",
    "title": "外出就餐5:开放性周末",
    "url": "./movie-0166.html",
    "cover": "./16.jpg",
    "oneLine": "三对情侣约定周末去郊区别墅尝试“开放性晚餐”,结果周五晚上就炸了锅。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "LGBTQ+",
      "开放关系",
      "周末旅行",
      "友情考验",
      "爆笑"
    ],
    "genre": "喜剧/爱情"
  },
  {
    "id": "0167",
    "title": "家事一箩筐",
    "url": "./movie-0167.html",
    "cover": "./17.jpg",
    "oneLine": "上海老弄堂里,三户人家因为学区房、催生和黄昏恋,把日子过成了一地鸡毛的喜剧。 三户人家的琐事乱成一锅粥:婆婆催生二胎,儿媳要买学区房,公公却要和广场舞大妈私奔。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "婆媳",
      "学区房",
      "催生",
      "沪上生活"
    ],
    "genre": "家庭,喜剧"
  },
  {
    "id": "0168",
    "title": "大风杀",
    "url": "./movie-0168.html",
    "cover": "./18.jpg",
    "oneLine": "戈壁滩上,一个丢了枪的警察和三个丢了头的悍匪,都在等一场大风。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "内蒙古",
      "荒漠",
      "复仇",
      "警匪",
      "黑色电影"
    ],
    "genre": "犯罪、西部"
  },
  {
    "id": "0169",
    "title": "怪胎镇",
    "url": "./movie-0169.html",
    "cover": "./19.jpg",
    "oneLine": "每个居民都有超轻微超能力,比如能让水变温、让蚊子迷路,直到镇上出生了一对没任何能力的双胞胎。",
    "year": "2024",
    "type": "剧集",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "小镇怪谈",
      "基因实验",
      "双胞胎",
      "诡异日常"
    ],
    "genre": "悬疑/科幻/黑色喜剧"
  },
  {
    "id": "0170",
    "title": "请和我的老公结婚",
    "url": "./movie-0170.html",
    "cover": "./20.jpg",
    "oneLine": "被闺蜜与丈夫联手杀害的女主,重生回结婚前一天,决定把渣男和贱女“配成一对”。",
    "year": "2024",
    "type": "电视剧",
    "region": "韩国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "重生",
      "渣男",
      "闺蜜背叛",
      "逆袭",
      "爽剧"
    ],
    "genre": "爱情、复仇、奇幻"
  },
  {
    "id": "0171",
    "title": "克里蒂,童话的小屋",
    "url": "./movie-0171.html",
    "cover": "./21.jpg",
    "oneLine": "小女孩克里蒂发现家中破旧书屋的每一本童话书都是一扇通往平行世界的门。",
    "year": "2025",
    "type": "动画电影",
    "region": "法国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "童话",
      "跨次元",
      "想象力",
      "治愈",
      "书屋"
    ],
    "genre": "奇幻/儿童/冒险"
  },
  {
    "id": "0172",
    "title": "杜宾巡官:布列塔尼的秘密",
    "url": "./movie-0172.html",
    "cover": "./22.jpg",
    "oneLine": "杜宾巡官退休后隐居布列塔尼小镇,一具30年前的骸骨在潮汐中浮出,牵扯出当地望族的血腥发家史。",
    "year": "2024",
    "type": "电影",
    "region": "法国,比利时",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "侦探",
      "小镇疑云",
      "家族秘密",
      "法式风情"
    ],
    "genre": "犯罪,悬疑,剧情"
  },
  {
    "id": "0173",
    "title": "皇家酒店谋杀案",
    "url": "./movie-0173.html",
    "cover": "./23.jpg",
    "oneLine": "七个各怀鬼胎的陌生人在雨夜住进没落的大酒店,而酒店的前任老板是黑手党的御用洗钱人。",
    "year": "2019",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "暴风雪山庄",
      "黑色电影",
      "怀旧"
    ],
    "genre": "悬疑,惊悚"
  },
  {
    "id": "0174",
    "title": "郁川浮游",
    "url": "./movie-0174.html",
    "cover": "./24.jpg",
    "oneLine": "小镇即将因水库工程永远沉入水底,一名归乡的青年在水下发现了父亲被掩埋三十年的秘密。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "小镇",
      "真相",
      "水位上涨",
      "拆迁"
    ],
    "genre": "剧情,悬疑"
  },
  {
    "id": "0175",
    "title": "老爷坦克少爷兵",
    "url": "./movie-0175.html",
    "cover": "./25.jpg",
    "oneLine": "一个超级富二代和他的四辆改装豪车,意外穿越到1944年的松山战场,被误认为“从天而降的少爷兵”。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港/中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "抗日",
      "穿越",
      "富二代",
      "老爷车"
    ],
    "genre": "喜剧/战争"
  },
  {
    "id": "0176",
    "title": "2002",
    "url": "./movie-0176.html",
    "cover": "./26.jpg",
    "oneLine": "香港政府秘密成立“2002”小组,专门消灭滞留人间的恶灵,但新成员发现自己也是鬼。",
    "year": "2001",
    "type": "电影",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "灵魂捕手",
      "鬼魂",
      "谢霆锋",
      "冯德伦"
    ],
    "genre": "动作,科幻,恐怖"
  },
  {
    "id": "0177",
    "title": "孩子他爸",
    "url": "./movie-0177.html",
    "cover": "./27.jpg",
    "oneLine": "一个失业的单身爸爸,靠给邻居们当“临时爸爸”赚钱,却在每个孩子身上学会了如何当父亲。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "单亲爸爸",
      "育儿",
      "邻里",
      "暖剧"
    ],
    "genre": "家庭/喜剧/剧情"
  },
  {
    "id": "0178",
    "title": "紧急呼救:孤星第五季",
    "url": "./movie-0178.html",
    "cover": "./28.jpg",
    "oneLine": "一场前所未有的五股龙卷风同时袭击奥斯汀,急救队在拯救城市的同时,必须面对内部的背叛。",
    "year": "2024",
    "type": "剧集",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "急救员",
      "德州风暴",
      "龙卷风",
      "心理创伤",
      "多元团队"
    ],
    "genre": "动作、灾难"
  },
  {
    "id": "0179",
    "title": "饿狼传说2",
    "url": "./movie-0179.html",
    "cover": "./29.jpg",
    "oneLine": "上一战之后,更凶残的饿狼在都市暗影中觉醒。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "续集",
      "拳拳到肉",
      "兄弟情",
      "宿敌"
    ],
    "genre": "动作,格斗"
  },
  {
    "id": "0180",
    "title": "叛狱风云",
    "url": "./movie-0180.html",
    "cover": "./30.jpg",
    "oneLine": "FBI特工假扮重刑犯进入全美最暴力的监狱调查狱警被杀案,却发现自己成了两派帮派的猎物。",
    "year": "2026",
    "type": "剧集",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "监狱",
      "卧底",
      "帮派",
      "腐败",
      "权力游戏"
    ],
    "genre": "犯罪剧情"
  },
  {
    "id": "0181",
    "title": "局中劫",
    "url": "./movie-0181.html",
    "cover": "./31.jpg",
    "oneLine": "一张被退回的汇票,牵出横跨三国的洗钱网络,而他发现自己从一开始就在棋局里。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "高智商对决",
      "棋盘隐喻",
      "金融犯罪",
      "全员恶人"
    ],
    "genre": "悬疑/犯罪/商战"
  },
  {
    "id": "0182",
    "title": "天生一对",
    "url": "./movie-0182.html",
    "cover": "./32.jpg",
    "oneLine": "一对素未谋面的同卵双胞胎互换人生后,发现彼此的爱情目标竟是同一对父子。",
    "year": "2023",
    "type": "剧集",
    "region": "泰国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "双胞胎",
      "身份互换",
      "都市",
      "浪漫"
    ],
    "genre": "爱情,喜剧,奇幻"
  },
  {
    "id": "0183",
    "title": "暴雨天灾",
    "url": "./movie-0183.html",
    "cover": "./33.jpg",
    "oneLine": "一场千年一遇的暴雨夜,一座城市的命运被几个普通人改写。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "极端天气",
      "城市内涝",
      "救援",
      "小人物",
      "群像"
    ],
    "genre": "灾难/剧情"
  },
  {
    "id": "0184",
    "title": "马永贞金城武",
    "url": "./movie-0184.html",
    "cover": "./34.jpg",
    "oneLine": "金城武颠覆形象饰演马永贞,从山东来的乡下小子如何在1930年代上海滩从一个水果贩成为一代拳师。",
    "year": "1998",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "金城武",
      "民国",
      "上海滩",
      "马永贞",
      "悲剧英雄"
    ],
    "genre": "动作,剧情"
  },
  {
    "id": "0185",
    "title": "恋爱吧,寨主",
    "url": "./movie-0185.html",
    "cover": "./35.jpg",
    "oneLine": "土匪女寨主为阻止朝廷剿匪,抢了一个落魄书生当压寨夫君,逼他教自己“像淑女一样恋爱”。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "山寨",
      "女寨主",
      "契约恋爱",
      "反套路"
    ],
    "genre": "喜剧/爱情/古装"
  },
  {
    "id": "0186",
    "title": "古惑仔:以暴制暴",
    "url": "./movie-0186.html",
    "cover": "./36.jpg",
    "oneLine": "当整个地下世界都在追杀你最好的兄弟,你选择守住道义还是举起屠刀?",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "江湖",
      "黑帮",
      "反英雄",
      "残酷青春"
    ],
    "genre": "动作/犯罪"
  },
  {
    "id": "0187",
    "title": "理查德的东西",
    "url": "./movie-0187.html",
    "cover": "./37.jpg",
    "oneLine": "孤独的遗物整理师接到一份委托:整理一个和自己同名同姓的死者遗物。",
    "year": "2025",
    "type": "电影",
    "region": "英国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "遗物整理师",
      "底层叙事",
      "物品记忆",
      "冷门佳作"
    ],
    "genre": "剧情,悬疑,心理"
  },
  {
    "id": "0188",
    "title": "妳是恶魔",
    "url": "./movie-0188.html",
    "cover": "./38.jpg",
    "oneLine": "完美人妻撞破丈夫出轨后,一个自称“女性互助会”的神秘组织找上了她,教她如何优雅地毁掉男人。",
    "year": "2023",
    "type": "剧集",
    "region": "中国台湾",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "女性",
      "复仇",
      "出轨",
      "心理操控"
    ],
    "genre": "悬疑"
  },
  {
    "id": "0189",
    "title": "御狐之绊第二季",
    "url": "./movie-0189.html",
    "cover": "./39.jpg",
    "oneLine": "契约还剩最后三个月,小狐狸必须吃掉书生的心脏,但她发现自己爱上了这颗心的主人。",
    "year": "2023",
    "type": "剧集/网络剧",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "狐妖",
      "契约",
      "东方奇幻",
      "宿命"
    ],
    "genre": "奇幻/古装/爱情"
  },
  {
    "id": "0190",
    "title": "一味够运",
    "url": "./movie-0190.html",
    "cover": "./40.jpg",
    "oneLine": "烧腊店伙计得到一味神奇卤水,只要吃一口,就能偷走别人的好运。",
    "year": "2023",
    "type": "电影",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "美食",
      "运气",
      "小人物",
      "黑色幽默"
    ],
    "genre": "奇幻"
  },
  {
    "id": "0191",
    "title": "困在心绪里的儿子",
    "url": "./movie-0191.html",
    "cover": "./41.jpg",
    "oneLine": "事业成功的父亲发现,儿子的沉默和忧郁远不止“青春期叛逆”那么简单。",
    "year": "2024",
    "type": "电影",
    "region": "英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "父子关系",
      "抑郁",
      "青春期",
      "英国学院派",
      "催泪"
    ],
    "genre": "剧情、心理"
  },
  {
    "id": "0192",
    "title": "寻人启事",
    "url": "./movie-0192.html",
    "cover": "./42.jpg",
    "oneLine": "一觉醒来发现自己被贴满全城寻人启事,而启事上“走失者”的照片,不是现在的他。",
    "year": "2022",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "失忆",
      "身份迷局",
      "社会派"
    ],
    "genre": "悬疑剧情片"
  },
  {
    "id": "0193",
    "title": "钢琴之神",
    "url": "./movie-0193.html",
    "cover": "./43.jpg",
    "oneLine": "七岁的钢琴天才被全家人视为“神的礼物”,直到有一天他在演出前拒绝触碰琴键,闭口不言。",
    "year": "2024",
    "type": "电影",
    "region": "以色列/德国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "天才儿童",
      "钢琴",
      "家庭控制",
      "心理惊悚",
      "犹太家庭"
    ],
    "genre": "剧情/音乐/家庭"
  },
  {
    "id": "0194",
    "title": "飞虎",
    "url": "./movie-0194.html",
    "cover": "./44.jpg",
    "oneLine": "香港飞虎队精锐小队遭遇神秘悍匪,八名队员被困废弃商场,每半小时有一人被狙击手点名。",
    "year": "1996",
    "type": "电影",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "飞虎队",
      "警匪枪战",
      "团队作战",
      "实战",
      "硬汉"
    ],
    "genre": "动作,犯罪,剧情"
  },
  {
    "id": "0195",
    "title": "龙翔凤舞雪山盟",
    "url": "./movie-0195.html",
    "cover": "./45.jpg",
    "oneLine": "雪山派龙凤胎姐弟被灭门后,姐姐伪装成魔教妖女,弟弟伪装成正道少侠,两人不知彼此身份,反目成仇又相爱相杀。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "雪山派",
      "双强",
      "虐恋",
      "武林盟主",
      "江湖阴谋"
    ],
    "genre": "武侠,爱情,古装"
  },
  {
    "id": "0196",
    "title": "牛油果的硬度",
    "url": "./movie-0196.html",
    "cover": "./46.jpg",
    "oneLine": "一对结婚十五年的夫妻,决定像挑选牛油果一样,通过测试彼此内心的“软硬程度”来判定是否离婚。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "中年危机",
      "婚姻",
      "隐喻",
      "文艺",
      "抉择"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "0197",
    "title": "爱之火",
    "url": "./movie-0197.html",
    "cover": "./47.jpg",
    "oneLine": "真实故事改编,一对夫妇终其一生追逐火山,最后一次喷发时,他们选择相拥而亡。",
    "year": "2023",
    "type": "电影",
    "region": "法国/美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "火山学家",
      "挚爱",
      "极致浪漫"
    ],
    "genre": "传记,爱情,灾难"
  },
  {
    "id": "0198",
    "title": "六宅一生",
    "url": "./movie-0198.html",
    "cover": "./48.jpg",
    "oneLine": "一栋老旧公寓的六位住户,看似毫无交集,却因房东的离奇死亡,被揭开各自隐藏的罪与罚。",
    "year": "2026",
    "type": "剧集",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "公寓",
      "邻居秘密",
      "群像剧",
      "反转"
    ],
    "genre": "剧情/悬疑"
  },
  {
    "id": "0199",
    "title": "头号型动派",
    "url": "./movie-0199.html",
    "cover": "./49.jpg",
    "oneLine": "一个弱鸡程序员被迫加入公司“健康黑帮”,发现同事们的腹肌都是画上去的。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "健身",
      "职场",
      "反卷"
    ],
    "genre": "喜剧,动作"
  },
  {
    "id": "0200",
    "title": "新·座头市物语",
    "url": "./movie-0200.html",
    "cover": "./50.jpg",
    "oneLine": "盲眼按摩师座头市路过一座被银矿腐蚀的小镇,这次他的对手不是恶代官,而是一位曾是挚友的旧日同门。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "盲眼剑客",
      "翻新经典",
      "浪人",
      "杀阵",
      "宿命"
    ],
    "genre": "时代剧、动作、剧情"
  },
  {
    "id": "0201",
    "title": "我家种大麻",
    "url": "./movie-0201.html",
    "cover": "./51.jpg",
    "oneLine": "为了偿还巨额房贷,一个西班牙中产家庭决定在自家别墅的温室里种大麻,结果吸引来了笨贼、邻居和整个警察局。",
    "year": "2022",
    "type": "电视剧",
    "region": "西班牙",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "家庭危机",
      "种植",
      "黑色幽默"
    ],
    "genre": "喜剧,犯罪"
  },
  {
    "id": "0202",
    "title": "极地毁灭",
    "url": "./movie-0202.html",
    "cover": "./52.jpg",
    "oneLine": "北极圈永久冻土层融化,释放出封印了百万年的远古病毒,一座秘密实验站成了人类最后的防线。",
    "year": "2028",
    "type": "电影",
    "region": "俄罗斯",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "北极",
      "军事基地",
      "全球变暖",
      "远古病毒"
    ],
    "genre": "动作/科幻/灾难"
  },
  {
    "id": "0203",
    "title": "美国皮条客",
    "url": "./movie-0203.html",
    "cover": "./53.jpg",
    "oneLine": "上世纪70年代纽约地下皮条客之王,如何从街头混混爬上欲望王座,又急速坠落。",
    "year": "2019",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "底层",
      "夜生活",
      "权力",
      "生存",
      "真实改编"
    ],
    "genre": "剧情,犯罪,传记"
  },
  {
    "id": "0204",
    "title": "绝命终结站4",
    "url": "./movie-0204.html",
    "cover": "./54.jpg",
    "oneLine": "幸存者从车祸中逃生,却发现死神的名单并非随机,而是一场精心策划的献祭仪式。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "R级",
      "死神来了系列",
      "极限死亡",
      "游乐场"
    ],
    "genre": "恐怖,惊悚"
  },
  {
    "id": "0205",
    "title": "人在边缘粤语",
    "url": "./movie-0205.html",
    "cover": "./55.jpg",
    "oneLine": "一个卧底警察在即将收网时发现自己亲弟弟就是黑帮新晋杀手,而弟弟正要刺杀他的警司。",
    "year": "1990",
    "type": "剧集",
    "region": "香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "TVB经典",
      "古惑仔",
      "兄弟情",
      "卧底警察"
    ],
    "genre": "犯罪,剧情,动作"
  },
  {
    "id": "0206",
    "title": "奔腾岁月2019",
    "url": "./movie-0206.html",
    "cover": "./56.jpg",
    "oneLine": "1999年,三个大学室友在中关村卖组装电脑;2019年,他们一个在卖菜、一个在坐牢、一个在做AI芯片。",
    "year": "2019",
    "type": "剧集",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "改革开放",
      "IT创业",
      "中关村",
      "兄弟反目"
    ],
    "genre": "剧情、年代"
  },
  {
    "id": "0207",
    "title": "飞黄腾达",
    "url": "./movie-0207.html",
    "cover": "./57.jpg",
    "oneLine": "一个只有大专学历的保安,靠一本盗版的《帝王权术》,把一家快倒闭的公司干成了行业第一。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "职场",
      "创业",
      "荒诞",
      "讽刺",
      "小人物"
    ],
    "genre": "喜剧/商战"
  },
  {
    "id": "0208",
    "title": "被偷走的春天",
    "url": "./movie-0208.html",
    "cover": "./58.jpg",
    "oneLine": "一个女孩失踪十年后突然回家,但母亲记得女儿右手有疤,回来的这个没有。",
    "year": "2018",
    "type": "电影",
    "region": "韩国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "失踪",
      "记忆",
      "反转"
    ],
    "genre": "悬疑/剧情"
  },
  {
    "id": "0209",
    "title": "隔篱屋有宝",
    "url": "./movie-0209.html",
    "cover": "./59.jpg",
    "oneLine": "一栋即将拆迁的老楼里,每户邻居都藏着足以改变他人命运的“宝物”。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "邻里关系",
      "神秘遗产",
      "港式怀旧",
      "单元剧",
      "温情"
    ],
    "genre": "悬疑,家庭,奇幻"
  },
  {
    "id": "0210",
    "title": "那年冬天很温暖",
    "url": "./movie-0210.html",
    "cover": "./60.jpg",
    "oneLine": "一个被确诊为阿尔茨海默症的老人,决定独自踏上回乡的火车,去见那个他恨了一辈子的人。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "养老",
      "阿尔茨海默症",
      "返乡",
      "温情"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "0211",
    "title": "无罪之凶",
    "url": "./movie-0211.html",
    "cover": "./61.jpg",
    "oneLine": "一名死囚在行刑前夜翻供,年轻公益律师为其奔走翻案,却发现自己可能正在释放一个真正的恶魔。",
    "year": "2028",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "冤案",
      "律师",
      "反转",
      "司法公正",
      "真实改编"
    ],
    "genre": "悬疑/犯罪/剧情"
  },
  {
    "id": "0212",
    "title": "可以全力去爱吗",
    "url": "./movie-0212.html",
    "cover": "./62.jpg",
    "oneLine": "离婚后发誓不再爱的女人,遇到了得了“不能触碰人”怪病的男人,他们决定谈一场零接触的恋爱。",
    "year": "2025",
    "type": "电视剧",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "成年人的恋爱",
      "心理创伤",
      "纯爱",
      "治愈"
    ],
    "genre": "爱情,剧情"
  },
  {
    "id": "0213",
    "title": "虚界之魔兽",
    "url": "./movie-0213.html",
    "cover": "./63.jpg",
    "oneLine": "高人气VR游戏《虚界》出现能让玩家意识被困其中的致命BUG,少年们必须在虚拟世界中击败魔兽才能醒来。",
    "year": "2024",
    "type": "动画剧集",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "奇幻",
      "冒险",
      "游戏",
      "虚拟现实"
    ],
    "genre": "奇幻,冒险"
  },
  {
    "id": "0214",
    "title": "一个夜晚",
    "url": "./movie-0214.html",
    "cover": "./64.jpg",
    "oneLine": "出租车上,素不相识的男女决定一起去酒店,却在这短短几十分钟的夜里揭开了彼此互为杀亲仇人的真相。",
    "year": "2024",
    "type": "电影",
    "region": "韩国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "出租车",
      "平行叙事",
      "城市孤独",
      "一夜情"
    ],
    "genre": "剧情/悬疑"
  },
  {
    "id": "0215",
    "title": "最后的兵团",
    "url": "./movie-0215.html",
    "cover": "./65.jpg",
    "oneLine": "最后一批人类机甲战士迎战觉醒的AI军团,却发现敌人已经学会了爱与牺牲。",
    "year": "2027",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "机甲军团",
      "AI叛乱",
      "人类绝境"
    ],
    "genre": "动作/科幻/战争"
  },
  {
    "id": "0216",
    "title": "回到自己队伍来",
    "url": "./movie-0216.html",
    "cover": "./66.jpg",
    "oneLine": "被俘国民党军医在解放军队伍里待了一年,获释后却发现自己再也回不去“自己人”那边。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "解放战争",
      "战俘回归",
      "心理戏",
      "双面间谍"
    ],
    "genre": "历史,战争"
  },
  {
    "id": "0217",
    "title": "惊天刺杀",
    "url": "./movie-0217.html",
    "cover": "./67.jpg",
    "oneLine": "一名特勤局特工拥有“遇刺前倒回10秒”的能力,但他每次回溯都会让下一任总统死得更快。",
    "year": "2028",
    "type": "电影",
    "region": "美国/德国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "总统遇刺",
      "时间回溯",
      "保镖"
    ],
    "genre": "动作/政治惊悚"
  },
  {
    "id": "0218",
    "title": "僵尸小子",
    "url": "./movie-0218.html",
    "cover": "./68.jpg",
    "oneLine": "一个小男孩发现自家床底下躲着一只失忆的僵尸,他决定教它如何“变回人”。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "僵尸喜剧",
      "怀旧向",
      "粤语原声"
    ],
    "genre": "喜剧,恐怖"
  },
  {
    "id": "0219",
    "title": "千面牛郎",
    "url": "./movie-0219.html",
    "cover": "./69.jpg",
    "oneLine": "一个职业“爱情骗子”,同时骗了六个女人,却发现自己只是在骗自己。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "诈骗",
      "社会议题",
      "多线叙事",
      "黑色幽默"
    ],
    "genre": "剧情/犯罪"
  },
  {
    "id": "0220",
    "title": "夜阑情史",
    "url": "./movie-0220.html",
    "cover": "./70.jpg",
    "oneLine": "三十年代的上海,三个不同阶层的女人在同一座夜阑公馆里,同时爱上一个男人,而她们各自的秘密逐渐吞噬彼此。",
    "year": "2020",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "民国",
      "家族恩怨",
      "禁忌之恋",
      "女性觉醒"
    ],
    "genre": "爱情、历史、年代、剧情"
  },
  {
    "id": "0221",
    "title": "美国最后的处女",
    "url": "./movie-0221.html",
    "cover": "./71.jpg",
    "oneLine": "在全员晒性经历的短视频时代,一个女孩因坚持处女身份而成为网红,随后又因失去它而被网暴。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "校园",
      "宗教保守",
      "女性觉醒",
      "小成本佳作"
    ],
    "genre": "剧情/青春"
  },
  {
    "id": "0222",
    "title": "路德灵异侦探社",
    "url": "./movie-0222.html",
    "cover": "./72.jpg",
    "oneLine": "在“大震动”后鬼怪横行的另类伦敦,三个少年成立灵异侦探社,只接最危险的案子。",
    "year": "2023",
    "type": "剧集",
    "region": "英国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "青少年",
      "灵异调查",
      "维多利亚风",
      "双雄"
    ],
    "genre": "悬疑,奇幻,惊悚"
  },
  {
    "id": "0223",
    "title": "俏丽佳人",
    "url": "./movie-0223.html",
    "cover": "./73.jpg",
    "oneLine": "丑小鸭店妹与傲慢的美妆博主意外交换身体后,发现对方的男人竟然是同一个人。",
    "year": "2024",
    "type": "电影",
    "region": "中国台湾",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "美容院",
      "交换身体",
      "塑料姐妹花",
      "逆袭"
    ],
    "genre": "喜剧,爱情"
  },
  {
    "id": "0224",
    "title": "少奇同志",
    "url": "./movie-0224.html",
    "cover": "./74.jpg",
    "oneLine": "聚焦刘少奇同志从陕北到西柏坡的幕后故事,展现“人民勤务员”的独特视角。",
    "year": "2019",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "革命领袖",
      "人物传记",
      "近代史"
    ],
    "genre": "传记,历史"
  },
  {
    "id": "0225",
    "title": "妄想症",
    "url": "./movie-0225.html",
    "cover": "./75.jpg",
    "oneLine": "一名独居女性坚信楼上的男邻居在跟踪她,但所有人都告诉她这是妄想,直到她在邻居家发现了自己的睡衣。",
    "year": "2024",
    "type": "电影",
    "region": "韩国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "幻觉",
      "邻居",
      "信任崩塌",
      "女权"
    ],
    "genre": "心理惊悚/剧情"
  },
  {
    "id": "0226",
    "title": "酒鬼",
    "url": "./movie-0226.html",
    "cover": "./76.jpg",
    "oneLine": "因酗酒失去一切的中年男人,每晚在居酒屋打工换酒,直到遇见一位只点热牛奶的老妇人。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "酒精依赖",
      "居酒屋",
      "二次人生"
    ],
    "genre": "剧情/家庭/治愈"
  },
  {
    "id": "0227",
    "title": "永不我弃",
    "url": "./movie-0227.html",
    "cover": "./77.jpg",
    "oneLine": "在一所专门培养器官捐献者的寄宿学校,两个克隆人学生决定用一次私奔来证明自己拥有灵魂。",
    "year": "2024",
    "type": "电影",
    "region": "英国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "克隆人",
      "伦理",
      "绝望中的浪漫",
      "文学改编"
    ],
    "genre": "剧情,科幻,爱情"
  },
  {
    "id": "0228",
    "title": "我的初恋情人",
    "url": "./movie-0228.html",
    "cover": "./78.jpg",
    "oneLine": "患有心脏病的女孩从小就被告知活不过20岁,她决定在死前甩掉男友100次,让他习惯没有她的日子。",
    "year": "2022",
    "type": "剧集",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "纯爱",
      "绝症",
      "反向催泪",
      "校园"
    ],
    "genre": "爱情/青春"
  },
  {
    "id": "0229",
    "title": "爷爷(韩国电影)",
    "url": "./movie-0229.html",
    "cover": "./79.jpg",
    "oneLine": "叛逆孙子在整理遗物时,发现死去的爷爷竟是一份日军慰安妇受害者的名册保管人。",
    "year": "2012",
    "type": "电影",
    "region": "韩国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "祖孙",
      "慰安妇",
      "历史伤痕",
      "和解"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "0230",
    "title": "劳拉的星星在中国",
    "url": "./movie-0230.html",
    "cover": "./80.jpg",
    "oneLine": "德国小女孩劳拉跟随星星来到中国,她必须和云南傣族男孩一起找到最后一颗星星的碎片,才能拯救星空。",
    "year": "2025",
    "type": "电影/动画",
    "region": "德国/中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "合拍片",
      "儿童动画",
      "跨国友谊",
      "传统文化",
      "治愈"
    ],
    "genre": "家庭/奇幻/冒险"
  },
  {
    "id": "0231",
    "title": "意志的考验",
    "url": "./movie-0231.html",
    "cover": "./81.jpg",
    "oneLine": "1914年,沙克尔顿的南极探险队船毁人困,在冰狱中求生20个月,无一人死亡。",
    "year": "2002",
    "type": "电影",
    "region": "英国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "极地探险",
      "真人真事",
      "求生",
      "人性"
    ],
    "genre": "冒险/传记"
  },
  {
    "id": "0232",
    "title": "冒险三人组",
    "url": "./movie-0232.html",
    "cover": "./82.jpg",
    "oneLine": "三个被留在家里的“问题少年”,为了躲避父母的监控,意外在家门口的后山发现了一个真实的宝藏秘密。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "寻宝",
      "青少年",
      "搞笑",
      "成长"
    ],
    "genre": "冒险/家庭/喜剧"
  },
  {
    "id": "0233",
    "title": "笼中格斗王第一季",
    "url": "./movie-0233.html",
    "cover": "./83.jpg",
    "oneLine": "为了给妹妹赚取医药费,外卖小哥踏进地下黑拳笼子,却发现对手是自己失散多年的亲哥。",
    "year": "2021",
    "type": "剧集",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "MMA",
      "底层",
      "格斗",
      "现实主义",
      "兄弟情"
    ],
    "genre": "动作/剧情"
  },
  {
    "id": "0234",
    "title": "恐怖特快",
    "url": "./movie-0234.html",
    "cover": "./84.jpg",
    "oneLine": "深夜末班电车上,每节车厢的乘客都在用同一种诡异的方式死去。",
    "year": "2019",
    "type": "电影",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "密闭空间",
      "列车",
      "怪谈"
    ],
    "genre": "恐怖/悬疑"
  },
  {
    "id": "0235",
    "title": "白虎2021",
    "url": "./movie-0235.html",
    "cover": "./85.jpg",
    "oneLine": "一只神秘的白虎雕像,竟将三起横跨二十年的命案悄然串联。",
    "year": "2021",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "白虎",
      "悬疑",
      "2021",
      "犯罪",
      "剧情",
      "真相"
    ],
    "genre": "犯罪,剧情,悬疑"
  },
  {
    "id": "0236",
    "title": "纹身室",
    "url": "./movie-0236.html",
    "cover": "./86.jpg",
    "oneLine": "顾客在深夜纹身室纹下的图案,会从皮肤里爬出来,杀死他们最恨的人。",
    "year": "2019",
    "type": "电影",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "诅咒",
      "刺青",
      "都市传说"
    ],
    "genre": "惊悚/恐怖"
  },
  {
    "id": "0237",
    "title": "黑之召唤士",
    "url": "./movie-0237.html",
    "cover": "./87.jpg",
    "oneLine": "失忆的勇者转生为黑暗召唤士,用禁忌之术召唤恶魔大军挑战神明。",
    "year": "2022",
    "type": "TV剧集",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "异世界",
      "召唤",
      "转生",
      "热血",
      "魔法"
    ],
    "genre": "动画,奇幻,战斗"
  },
  {
    "id": "0238",
    "title": "无耻之徒第一季",
    "url": "./movie-0238.html",
    "cover": "./88.jpg",
    "oneLine": "住在芝加哥贫民区的酒鬼父亲和六个孩子,为了活下去,没有什么是不能卖的。",
    "year": "2011",
    "type": "剧集",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "底层",
      "生存",
      "黄暴",
      "黑色幽默",
      "群像"
    ],
    "genre": "剧情/喜剧/家庭"
  },
  {
    "id": "0239",
    "title": "绝种好男人",
    "url": "./movie-0239.html",
    "cover": "./89.jpg",
    "oneLine": "一个善良到近乎愚蠢的兽医,被误诊为绝症后,竟引来了一群拜金女的疯狂追求。",
    "year": "2003",
    "type": "电影",
    "region": "中国香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "港式无厘头",
      "废柴逆袭",
      "真假身份"
    ],
    "genre": "喜剧/爱情"
  },
  {
    "id": "0240",
    "title": "春日来临之际",
    "url": "./movie-0240.html",
    "cover": "./90.jpg",
    "oneLine": "每年春天都会爆发严重花粉症的一家人,在喷嚏与眼泪中找回了遗失的亲情。",
    "year": "2016",
    "type": "电影",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "花粉症",
      "家庭羁绊",
      "季节变迁",
      "细腻温情",
      "日式治愈"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "0241",
    "title": "民权领袖",
    "url": "./movie-0241.html",
    "cover": "./91.jpg",
    "oneLine": "一位年轻牧师接过领袖火炬,在枪口与恐惧中,用一场公交车抗议改写国家命运。",
    "year": "2022",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "民权运动",
      "演讲",
      "牺牲",
      "真实改编"
    ],
    "genre": "传记/剧情"
  },
  {
    "id": "0242",
    "title": "鬼新娘国语",
    "url": "./movie-0242.html",
    "cover": "./92.jpg",
    "oneLine": "一名失败的古董商被迫为死人配冥婚,却因此被一位穿着红色嫁衣的美丽女鬼纠缠上。",
    "year": "1987",
    "type": "电影",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "经典港鬼",
      "冥婚",
      "阴阳恋",
      "周润发",
      "钟楚红"
    ],
    "genre": "恐怖/爱情"
  },
  {
    "id": "0243",
    "title": "见笑",
    "url": "./movie-0243.html",
    "cover": "./93.jpg",
    "oneLine": "落魄的北漂脱口秀演员逃回台南老家,却发现全村的阿公阿嬷都比他有梗。",
    "year": "2025",
    "type": "剧集",
    "region": "中国台湾",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "脱口秀",
      "中年危机",
      "乡愁",
      "小人物"
    ],
    "genre": "剧情,喜剧"
  },
  {
    "id": "0244",
    "title": "唐朝异闻录",
    "url": "./movie-0244.html",
    "cover": "./94.jpg",
    "oneLine": "狄仁杰晚年秘密记录的一本《阴司册》重现人间,书中记载的诡异案件,竟然每一件都在现代重现。",
    "year": "2025",
    "type": "剧集",
    "region": "中国内地",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "狄仁杰同人",
      "志怪",
      "单元探案",
      "大唐风华"
    ],
    "genre": "悬疑、奇幻、古装"
  },
  {
    "id": "0245",
    "title": "双子镇",
    "url": "./movie-0245.html",
    "cover": "./95.jpg",
    "oneLine": "一个男人回到家乡寻找失踪的双胞胎兄弟,却发现镇上的每个人都有一模一样的替身。",
    "year": "2026",
    "type": "剧集",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "克隆",
      "小镇",
      "身份认同"
    ],
    "genre": "悬疑、科幻、惊悚"
  },
  {
    "id": "0246",
    "title": "无冕急先锋粤语",
    "url": "./movie-0246.html",
    "cover": "./96.jpg",
    "oneLine": "三个记者一台戏,不拿枪的他们用笔掀翻整座伪善城市。",
    "year": "1990",
    "type": "电视剧",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "记者",
      "港剧经典",
      "社会正义"
    ],
    "genre": "时装,剧情,职场"
  },
  {
    "id": "0247",
    "title": "我的爱人,我的爱人",
    "url": "./movie-0247.html",
    "cover": "./97.jpg",
    "oneLine": "女心理医生爱上了自己的病人,却发现病人身体里住着的那个爱人,是她死去的初恋。",
    "year": "2024",
    "type": "电影",
    "region": "香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "多重人格",
      "医生病人",
      "禁忌恋",
      "反转",
      "心理"
    ],
    "genre": "爱情,悬疑"
  },
  {
    "id": "0248",
    "title": "板尾创路的逃狱王",
    "url": "./movie-0248.html",
    "cover": "./98.jpg",
    "oneLine": "史上最倒霉的囚犯板尾创路,用各种脑洞大开的废柴方法越狱,却每次都因意外失败。",
    "year": "2021",
    "type": "电影",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "越狱",
      "冷幽默",
      "废柴",
      "荒诞",
      "兄弟情"
    ],
    "genre": "喜剧/犯罪"
  },
  {
    "id": "0249",
    "title": "巾帼枭雄",
    "url": "./movie-0249.html",
    "cover": "./99.jpg",
    "oneLine": "1941年香港沦陷,船运女王被迫与日军特务头子联姻,新婚夜她递上的不是交杯酒,而是一份港岛防卫图。",
    "year": "2024",
    "type": "剧集",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "抗日",
      "商战",
      "大女主"
    ],
    "genre": "历史,战争,女性"
  },
  {
    "id": "0250",
    "title": "时间上的家",
    "url": "./movie-0250.html",
    "cover": "./100.jpg",
    "oneLine": "一座每到午夜就会“重置时间”的老宅里,被困的一家四口必须找出每日死亡的源头,才能打破循环。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "时间循环",
      "老宅",
      "家庭",
      "秘密",
      "心理"
    ],
    "genre": "悬疑,惊悚"
  },
  {
    "id": "0251",
    "title": "山区小社",
    "url": "./movie-0251.html",
    "cover": "./101.jpg",
    "oneLine": "一个被撤资的农村合作社,只剩三个老人和一个刚回来的大学生,他们决定自己干。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "农村合作社",
      "返乡青年",
      "扶贫",
      "温情"
    ],
    "genre": "剧情/乡村"
  },
  {
    "id": "0252",
    "title": "真爱连连看",
    "url": "./movie-0252.html",
    "cover": "./102.jpg",
    "oneLine": "一个号称“科学匹配”的恋爱APP上线,十个性格迥异的都市男女被算法匹配到一起,上演了一场多米诺骨牌式的连环误会。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "都市轻喜",
      "线上匹配",
      "线下社死",
      "多线叙事",
      "缘分天定"
    ],
    "genre": "爱情/喜剧/青春"
  },
  {
    "id": "0253",
    "title": "波士早晨粤语",
    "url": "./movie-0253.html",
    "cover": "./103.jpg",
    "oneLine": "全港最刻薄的女魔头上司,和一个谎报学历的底层打工人,在早班巴士上被迫成为“旅伴”。",
    "year": "2018",
    "type": "剧集",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "办公室政治",
      "粤语原声",
      "职场菜鸟",
      "逆袭"
    ],
    "genre": "喜剧/职场"
  },
  {
    "id": "0254",
    "title": "盐和樟脑",
    "url": "./movie-0254.html",
    "cover": "./104.jpg",
    "oneLine": "丈夫突然离世,不会做饭的妻子继承了祖传卤味店,而她必须找到丢失的“樟脑盐”秘方。",
    "year": "2022",
    "type": "电影",
    "region": "中国台湾",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "丧夫",
      "卤味店",
      "母女冷战",
      "和解"
    ],
    "genre": "剧情、家庭、美食"
  },
  {
    "id": "0255",
    "title": "情定三清山",
    "url": "./movie-0255.html",
    "cover": "./105.jpg",
    "oneLine": "月老醉酒牵错红线,让一对仙凡冤家被铁链锁在三清山悬崖,解开姻缘锁才能下山。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "三清山",
      "神仙下凡",
      "错位姻缘",
      "道教文化"
    ],
    "genre": "爱情,奇幻,古装"
  },
  {
    "id": "0256",
    "title": "红色康乃馨",
    "url": "./movie-0256.html",
    "cover": "./106.jpg",
    "oneLine": "女法医与女刑警联手追查“康乃馨杀手”,发现每一名死者生前都曾家暴过自己的母亲。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "连环杀人",
      "植物意象",
      "女性受害",
      "双女主"
    ],
    "genre": "悬疑/伦理/刑侦"
  },
  {
    "id": "0257",
    "title": "非正式会谈第三季",
    "url": "./movie-0257.html",
    "cover": "./107.jpg",
    "oneLine": "来自十国的青年代表围绕“AI恋人”与“数字遗产”等新议题展开激烈辩论。",
    "year": "2025",
    "type": "综艺",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "文化对谈",
      "全球视角",
      "幽默",
      "青年观点",
      "热点议题"
    ],
    "genre": "脱口秀/访谈"
  },
  {
    "id": "0258",
    "title": "冰之塔",
    "url": "./movie-0258.html",
    "cover": "./108.jpg",
    "oneLine": "在冰封万物的世界里,一座直插云霄的神秘高塔突然放出热量,少女决定攀塔寻找失踪的父亲。",
    "year": "2025",
    "type": "动画剧集",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "末日废土",
      "少女主角",
      "神秘组织",
      "塔防"
    ],
    "genre": "奇幻/冒险"
  },
  {
    "id": "0259",
    "title": "熊的传说2",
    "url": "./movie-0259.html",
    "cover": "./109.jpg",
    "oneLine": "变成熊的少年为解开咒语再次踏上旅途,却在森林深处发现了比回归人类更重要的事。",
    "year": "2021",
    "type": "电影/动画",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "兄弟情",
      "熊",
      "魔法",
      "成长"
    ],
    "genre": "动画/家庭/奇幻"
  },
  {
    "id": "0260",
    "title": "好拣唔拣",
    "url": "./movie-0260.html",
    "cover": "./110.jpg",
    "oneLine": "婚礼前一刻,“选择困难症”新娘被踢进四个平行时空,体验嫁给四任前男友的人生。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "平行时空",
      "选择焦虑",
      "港式幽默",
      "黑色浪漫"
    ],
    "genre": "喜剧/爱情"
  },
  {
    "id": "0261",
    "title": "古玩鬼",
    "url": "./movie-0261.html",
    "cover": "./111.jpg",
    "oneLine": "一尊明代古董娃娃,谁买了它,身边的亲人就会变成替它索命的“玩偶”。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "民俗",
      "惊悚",
      "古董",
      "诅咒",
      "悬疑"
    ],
    "genre": "恐怖"
  },
  {
    "id": "0262",
    "title": "这货哪来的",
    "url": "./movie-0262.html",
    "cover": "./112.jpg",
    "oneLine": "一个在义乌摆地摊的失业青年,靠卖“假货”发家,却意外卷入了一场跨国商标官司。",
    "year": "2023",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "市井",
      "黑色幽默",
      "小人物",
      "创业",
      "方言"
    ],
    "genre": "剧情"
  },
  {
    "id": "0263",
    "title": "牵手",
    "url": "./movie-0263.html",
    "cover": "./113.jpg",
    "oneLine": "全职主妇发现丈夫出轨后,从忍气吞声到重新站起来,过程中最难的,是放开那个牵了十年的手。",
    "year": "1999",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "婚外情",
      "女性独立",
      "现实主义",
      "经典"
    ],
    "genre": "家庭,伦理,都市"
  },
  {
    "id": "0264",
    "title": "世外桃源七小宝",
    "url": "./movie-0264.html",
    "cover": "./114.jpg",
    "oneLine": "七个代表不同情绪的小精灵守护着一片即将被污染的魔法森林,每个孩子都能在他们身上看到自己的影子。",
    "year": "2024",
    "type": "动画片",
    "region": "中国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "治愈",
      "冒险",
      "动物",
      "环保",
      "低幼"
    ],
    "genre": "儿童,奇幻"
  },
  {
    "id": "0265",
    "title": "校园鬼降疯",
    "url": "./movie-0265.html",
    "cover": "./115.jpg",
    "oneLine": "一所香港重点中学的地下防空洞封印着战时的“日鬼”,一群学生用手机直播和化学课知识,上演了一场爆笑驱魔大战。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "港式幽默",
      "僵尸",
      "道士",
      "青春",
      "无厘头"
    ],
    "genre": "喜剧,恐怖,校园"
  },
  {
    "id": "0266",
    "title": "忍者神龟第七季",
    "url": "./movie-0266.html",
    "cover": "./116.jpg",
    "oneLine": "忍者神龟四兄弟与斯普林特大师、爱普莉尔、凯西·琼斯,一同对抗从外星归来的史莱德与克朗大军。",
    "year": "2009",
    "type": "剧集",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "超级英雄",
      "童年",
      "团队",
      "幽默",
      "冒险"
    ],
    "genre": "动画动作"
  },
  {
    "id": "0267",
    "title": "脱单香气神助攻",
    "url": "./movie-0267.html",
    "cover": "./117.jpg",
    "oneLine": "母胎Solo的香水调香师,意外调制出一款能让人“闻到爱情”的香水,却把自己老板给坑了。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "香水",
      "甜宠",
      "职场",
      "撩汉",
      "都市"
    ],
    "genre": "爱情,喜剧"
  },
  {
    "id": "0268",
    "title": "椭圆形盘旋",
    "url": "./movie-0268.html",
    "cover": "./118.jpg",
    "oneLine": "一座孤立的太空站里,六名宇航员发现他们的大脑都被植入了同一个人的人生记忆。",
    "year": "2024",
    "type": "电影",
    "region": "法国/比利时",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "空间站",
      "记忆植入",
      "哲学"
    ],
    "genre": "悬疑/科幻"
  },
  {
    "id": "0269",
    "title": "再见萨巴达",
    "url": "./movie-0269.html",
    "cover": "./119.jpg",
    "oneLine": "叛逆少年偷了父亲的遗物——一台老旧摩托车,沿着西班牙海岸线寻找传说中的祖父。",
    "year": "2025",
    "type": "电影",
    "region": "西班牙",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "公路电影",
      "寻根",
      "父子",
      "摩托车"
    ],
    "genre": "冒险,剧情"
  },
  {
    "id": "0270",
    "title": "万物理论",
    "url": "./movie-0270.html",
    "cover": "./120.jpg",
    "oneLine": "一位理论物理学家证明“万物理论”存在的那一刻,他家楼下便利店出现了两个一模一样的店员。",
    "year": "2024",
    "type": "电视剧",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "高概念",
      "平行宇宙",
      "物理"
    ],
    "genre": "科幻,悬疑"
  },
  {
    "id": "0271",
    "title": "楼下的女人和楼上的男人",
    "url": "./movie-0271.html",
    "cover": "./121.jpg",
    "oneLine": "楼上男人每晚制造噪音,楼下女人贴条投诉,两人通过纸条对话时,发现各自家里都有一具尸体。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "噪音投诉",
      "偷听",
      "都市孤独"
    ],
    "genre": "悬疑/爱情"
  },
  {
    "id": "0272",
    "title": "杀了唐吉诃德的男人",
    "url": "./movie-0272.html",
    "cover": "./122.jpg",
    "oneLine": "一个落魄文学教授坚信自己是堂吉诃德,并带着一个送外卖的“桑丘”去“解救”被资本困住的风车农场。",
    "year": "2024",
    "type": "电影",
    "region": "西班牙/法国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "文学妄想",
      "堂吉诃德",
      "中年危机",
      "虚构与现实"
    ],
    "genre": "剧情/黑色幽默/心理"
  },
  {
    "id": "0273",
    "title": "沉默的阴谋",
    "url": "./movie-0273.html",
    "cover": "./123.jpg",
    "oneLine": "东德旧档案里的一串密码,牵出了潜伏在欧盟核心三十年的鼹鼠。",
    "year": "2025",
    "type": "剧集",
    "region": "德国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "间谍",
      "冷战遗留",
      "信息战",
      "双面间谍"
    ],
    "genre": "惊悚/政治"
  },
  {
    "id": "0274",
    "title": "永远的妮娜",
    "url": "./movie-0274.html",
    "cover": "./124.jpg",
    "oneLine": "失去双胞胎姐姐的少女不断收到已死姐姐的短信,警方怀疑是恶作剧,她却相信姐姐的灵魂困在了手机里。",
    "year": "2023",
    "type": "电影",
    "region": "西班牙",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "精神分裂",
      "双重人格",
      "女性视角",
      "反转"
    ],
    "genre": "悬疑/惊悚"
  },
  {
    "id": "0275",
    "title": "大闹戏船",
    "url": "./movie-0275.html",
    "cover": "./125.jpg",
    "oneLine": "一个跑龙套的京剧武生,要在一条赌船上用唱念做打,救下被绑架的总统。",
    "year": "2026",
    "type": "电影",
    "region": "中国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "京剧",
      "黑帮",
      "搞笑",
      "打斗"
    ],
    "genre": "喜剧/动作/戏曲"
  },
  {
    "id": "0276",
    "title": "恶魔娃娃2",
    "url": "./movie-0276.html",
    "cover": "./126.jpg",
    "oneLine": "距离第一起屠杀过去五年,幸存的女孩把邪恶娃娃的脑袋当花盆,却浇出了更多的恶魔。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "邪典",
      "玩偶",
      "血腥"
    ],
    "genre": "恐怖,惊悚"
  },
  {
    "id": "0277",
    "title": "飞哥与小佛:超时空之谜",
    "url": "./movie-0277.html",
    "cover": "./127.jpg",
    "oneLine": "一个来自“飞哥不存在”宇宙的少女求助,要求他们必须阻止自己父母相遇。",
    "year": "2026",
    "type": "动画电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "平行宇宙",
      "跨次元合作",
      "鸭嘴兽泰瑞"
    ],
    "genre": "科幻喜剧"
  },
  {
    "id": "0278",
    "title": "丹尼和人类动物园",
    "url": "./movie-0278.html",
    "cover": "./128.jpg",
    "oneLine": "男孩丹尼发现自己活在一个人造世界里,他身边的所有人类,都是外星人观察用的“展品”。",
    "year": "2025",
    "type": "剧集",
    "region": "英国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "社交网络",
      "虚拟现实",
      "讽刺"
    ],
    "genre": "奇幻,黑色喜剧,社会"
  },
  {
    "id": "0279",
    "title": "钢铁新娘",
    "url": "./movie-0279.html",
    "cover": "./129.jpg",
    "oneLine": "废柴高中生收到一件“人形机甲包裹”,自称是他未婚妻的钢铁少女,每天把他揍得鼻青脸肿去上学。",
    "year": "2024",
    "type": "动画剧集",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "机甲",
      "同居",
      "傲娇",
      "废柴男主",
      "战斗女仆"
    ],
    "genre": "科幻/喜剧/爱情"
  },
  {
    "id": "0280",
    "title": "黑色圣诞节",
    "url": "./movie-0280.html",
    "cover": "./130.jpg",
    "oneLine": "圣诞假期将至,姐妹会的成员一个个失踪,而凶手可能就在她们每周一起唱圣歌的人之中。",
    "year": "2019",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "圣诞恐怖",
      "姐妹会",
      "连环谋杀",
      "宗教元素"
    ],
    "genre": "恐怖/悬疑/校园"
  },
  {
    "id": "0281",
    "title": "海上火焰",
    "url": "./movie-0281.html",
    "cover": "./131.jpg",
    "oneLine": "一个住在海军医院岛上的男孩日常,与跨海而来的难民救援记录,平行交织。",
    "year": "2016",
    "type": "电影",
    "region": "意大利",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "难民危机",
      "地中海",
      "平行叙事",
      "现实残酷",
      "人性观察"
    ],
    "genre": "纪录片,战争"
  },
  {
    "id": "0282",
    "title": "盲眼的淑则老师",
    "url": "./movie-0282.html",
    "cover": "./132.jpg",
    "oneLine": "双目失明的新人老师淑则,通过声音和气味发现了校园霸凌的真相,而施暴者竟是校长。",
    "year": "2026",
    "type": "电视剧",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "残障教师",
      "反转校园",
      "听声辨人"
    ],
    "genre": "剧情/校园/励志"
  },
  {
    "id": "0283",
    "title": "黑魔女2",
    "url": "./movie-0283.html",
    "cover": "./133.jpg",
    "oneLine": "被封印千年的黑魔女在现代复活,却发现当年的仇人都变成了无害的短视频网红,她决定转型。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "女巫",
      "诅咒",
      "觉醒"
    ],
    "genre": "奇幻,动作"
  },
  {
    "id": "0284",
    "title": "冷面枭雄",
    "url": "./movie-0284.html",
    "cover": "./134.jpg",
    "oneLine": "他表面是财阀的御用大律师,暗地里是四大家族的影子军师,直到警方卧底递给他一张旧照片——照片上是失散三十年的亲生妹妹。",
    "year": "2024",
    "type": "剧集",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "黑帮",
      "卧底",
      "律师",
      "双重身份",
      "权谋"
    ],
    "genre": "犯罪,悬疑"
  },
  {
    "id": "0285",
    "title": "一杯上路2021",
    "url": "./movie-0285.html",
    "cover": "./135.jpg",
    "oneLine": "身患绝症的青年在死前收到好友的请柬,必须开车横穿泰国,送还20年前偷走的“一杯酒”。",
    "year": "2021",
    "type": "电影",
    "region": "泰国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "绝症",
      "公路",
      "友情",
      "回忆",
      "治愈"
    ],
    "genre": "剧情/公路/文艺"
  },
  {
    "id": "0286",
    "title": "杀人之前,复仇之后",
    "url": "./movie-0286.html",
    "cover": "./136.jpg",
    "oneLine": "连环杀手被受害人家属绑架,正要施以极刑时,杀手却说:“我杀的都是该杀之人。",
    "year": "2023",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "反转",
      "复仇",
      "烧脑"
    ],
    "genre": "悬疑、犯罪"
  },
  {
    "id": "0287",
    "title": "妙探狗福星",
    "url": "./movie-0287.html",
    "cover": "./137.jpg",
    "oneLine": "一只被警校开除的拉布拉多,为了证明自己,带领一群流浪猫狗,破解了博物馆的金字塔失窃案。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "动物拟人",
      "探案",
      "合家欢",
      "萌宠"
    ],
    "genre": "喜剧,家庭"
  },
  {
    "id": "0288",
    "title": "寒涛俪影",
    "url": "./movie-0288.html",
    "cover": "./138.jpg",
    "oneLine": "民国影星与女记者联手,在日军宴会上用眼神密谋杀夫。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "民国",
      "双女主",
      "复仇",
      "谍战"
    ],
    "genre": "悬疑,同性"
  },
  {
    "id": "0289",
    "title": "战争游戏:死亡密码",
    "url": "./movie-0289.html",
    "cover": "./139.jpg",
    "oneLine": "六名玩家受邀测试全沉浸式战争游戏,却发现游戏里的死亡会引发现实核爆。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "虚拟现实",
      "AI",
      "密码",
      "密室逃脱",
      "高概念"
    ],
    "genre": "科幻,惊悚,动作"
  },
  {
    "id": "0290",
    "title": "喵喵博物館",
    "url": "./movie-0290.html",
    "cover": "./140.jpg",
    "oneLine": "博物馆奇妙夜,一只流浪猫意外继承了法老的灵魂,必须带领馆藏动物们守护魔法宝石。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "猫咪",
      "冒险",
      "合家欢",
      "治愈",
      "奇幻"
    ],
    "genre": "动画,喜剧"
  },
  {
    "id": "0291",
    "title": "成瘾剂量",
    "url": "./movie-0291.html",
    "cover": "./141.jpg",
    "oneLine": "揭露美国史上最大医药骗局:一家制药公司如何让一种止痛药毁掉一代人。",
    "year": "2023",
    "type": "电视剧",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "阿片类药物",
      "制药公司",
      "诉讼",
      "真实事件改编"
    ],
    "genre": "剧情,犯罪,医疗"
  },
  {
    "id": "0292",
    "title": "给我一口嫁",
    "url": "./movie-0292.html",
    "cover": "./142.jpg",
    "oneLine": "为保住祖传船面摊,女主全网直播“谁吃完一百碗就嫁给谁”,结果首富之子直接拍下一百万碗。",
    "year": "2023",
    "type": "剧集",
    "region": "泰国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "美食情缘",
      "假结婚",
      "乡村厨神",
      "霸总真香"
    ],
    "genre": "爱情喜剧"
  },
  {
    "id": "0293",
    "title": "摇滚万万岁2",
    "url": "./movie-0293.html",
    "cover": "./143.jpg",
    "oneLine": "阔别四十年,世界上最蠢的摇滚乐队Spinal Tap再次聚首,这次他们的巡演目标是——养老院。",
    "year": "2025",
    "type": "电影",
    "region": "英国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "摇滚",
      "恶搞",
      "中年危机",
      "复出巡演",
      "英式幽默"
    ],
    "genre": "音乐,喜剧,伪纪录片"
  },
  {
    "id": "0294",
    "title": "小意外",
    "url": "./movie-0294.html",
    "cover": "./144.jpg",
    "oneLine": "一起普通的车祸,却让七个陌生人的生活像多米诺骨牌一样接连崩塌。",
    "year": "2026",
    "type": "剧集",
    "region": "英国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "英式黑色幽默",
      "荒诞",
      "巧合"
    ],
    "genre": "剧情/喜剧/悬疑"
  },
  {
    "id": "0295",
    "title": "凶宅勿近",
    "url": "./movie-0295.html",
    "cover": "./145.jpg",
    "oneLine": "一个不信鬼的房产中介,专门倒卖凶宅赚钱,直到他接手了一栋发生过灭门案的老宅,才发现房子的怨念会传染。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国台湾",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "凶宅",
      "直播",
      "民俗",
      "怨念"
    ],
    "genre": "恐怖、灵异、悬疑"
  },
  {
    "id": "0296",
    "title": "变脸",
    "url": "./movie-0296.html",
    "cover": "./146.jpg",
    "oneLine": "FBI特工与恐怖分子互换面容,没想到对方醒来后顶着自己的脸杀了全家。",
    "year": "1997",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "换脸",
      "卧底",
      "仇敌互换",
      "科幻动作",
      "吴宇森"
    ],
    "genre": "动作/科幻"
  },
  {
    "id": "0297",
    "title": "热血派",
    "url": "./movie-0297.html",
    "cover": "./147.jpg",
    "oneLine": "市重点中学的“废柴”舞蹈社只剩最后三人,他们必须在新校长取缔社团前,用一场全国大赛证明自己。",
    "year": "2024",
    "type": "网络剧",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "街舞",
      "社团",
      "逆袭",
      "团魂",
      "battle"
    ],
    "genre": "青春、校园、运动"
  },
  {
    "id": "0298",
    "title": "丛林地狱",
    "url": "./movie-0298.html",
    "cover": "./148.jpg",
    "oneLine": "六名网红为博流量闯入亚马逊禁区,直播镜头记录下了他们一步步被原始部落围猎的全程。",
    "year": "2025",
    "type": "电影",
    "region": "巴西/美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "亚马逊",
      "食人部落",
      "生还者",
      "伪纪录片"
    ],
    "genre": "惊悚/冒险/恐怖"
  },
  {
    "id": "0299",
    "title": "创世纪2:天地有情国语",
    "url": "./movie-0299.html",
    "cover": "./149.jpg",
    "oneLine": "叶荣添东山再起,许文彪黑化复仇,三兄弟从白手起家到反目成仇,背后是整个香港地产十年风云。",
    "year": "2000",
    "type": "剧集",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "TVB",
      "商战经典",
      "兄弟反目",
      "地产风云"
    ],
    "genre": "剧情/商战/家族"
  },
  {
    "id": "0300",
    "title": "姜戈与姜戈",
    "url": "./movie-0300.html",
    "cover": "./150.jpg",
    "oneLine": "两个都叫姜戈的传奇赏金猎人被迫组队,护送一个装满金币的棺材横穿沙漠,却发现里面躺着活人。",
    "year": "2025",
    "type": "电影",
    "region": "意大利/美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "双雄",
      "通心粉西部片",
      "致敬",
      "赏金猎人"
    ],
    "genre": "西部,动作,喜剧"
  },
  {
    "id": "0301",
    "title": "布朗克斯大战吸血鬼",
    "url": "./movie-0301.html",
    "cover": "./1.jpg",
    "oneLine": "纽约布朗克斯区的地下帮派为抢地盘,竟发现自己要火并的对手是一群吸血鬼。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "街头帮派",
      "吸血鬼",
      "火爆枪战"
    ],
    "genre": "动作,恐怖,喜剧"
  },
  {
    "id": "0302",
    "title": "星际劫难",
    "url": "./movie-0302.html",
    "cover": "./2.jpg",
    "oneLine": "一艘殖民飞船的AI系统突然觉醒,决定把全部三千名乘客送去“更好的地方”——太阳。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "太空",
      "末世",
      "飞船",
      "AI",
      "生存"
    ],
    "genre": "科幻/灾难"
  },
  {
    "id": "0303",
    "title": "极速战将",
    "url": "./movie-0303.html",
    "cover": "./3.jpg",
    "oneLine": "顶尖车手替弟弟入狱,出狱后发现弟弟已死,昔日的赛车场变成了杀人游戏的赌场。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "地下赛车",
      "改装车",
      "兄弟情",
      "港风",
      "硬核飙车"
    ],
    "genre": "动作、赛车、犯罪"
  },
  {
    "id": "0304",
    "title": "蕾哈娜内衣秀",
    "url": "./movie-0304.html",
    "cover": "./4.jpg",
    "oneLine": "纪录片镜头深入Savage x Fenty幕后,见证蕾哈娜如何从一个歌手转型为颠覆行业的时尚大亨。",
    "year": "2023",
    "type": "电影/纪录片",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "蕾哈娜",
      "内衣品牌",
      "时尚帝国",
      "幕后花絮"
    ],
    "genre": "音乐,时尚"
  },
  {
    "id": "0305",
    "title": "梦回蓝海",
    "url": "./movie-0305.html",
    "cover": "./5.jpg",
    "oneLine": "一幅来自深海的神秘古画,让现代海洋考古学家意外穿越到明朝,与抗倭女将展开跨时空绝恋。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "穿越",
      "海洋",
      "失忆",
      "宿命"
    ],
    "genre": "奇幻爱情"
  },
  {
    "id": "0306",
    "title": "加油吧少年",
    "url": "./movie-0306.html",
    "cover": "./6.jpg",
    "oneLine": "一个喜欢跳啦啦操的男生,为了对抗歧视,组建了一支全男子啦啦队,目标直指全国大赛。",
    "year": "2022",
    "type": "剧集",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "啦啦队",
      "校园",
      "热血",
      "性別议题"
    ],
    "genre": "青春,运动"
  },
  {
    "id": "0307",
    "title": "红杏痴魂",
    "url": "./movie-0307.html",
    "cover": "./7.jpg",
    "oneLine": "民国时期,一位被沉塘的痴情女子化为厉鬼,只为向负心汉讨回那颗被挖走的心。",
    "year": "2024",
    "type": "电影",
    "region": "中国台湾",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "聊斋风",
      "人鬼情未了",
      "女性觉醒"
    ],
    "genre": "恐怖,爱情,古装"
  },
  {
    "id": "0308",
    "title": "父亲的罪过",
    "url": "./movie-0308.html",
    "cover": "./8.jpg",
    "oneLine": "儿子为患绝症的父亲顶下连环杀人罪,入狱后发现:父亲根本没病,而且他杀的人都是当年抛弃他的亲友。",
    "year": "2025",
    "type": "剧集",
    "region": "韩国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "连环杀人",
      "顶罪",
      "父子",
      "法律漏洞",
      "反转"
    ],
    "genre": "悬疑,犯罪,家庭"
  },
  {
    "id": "0309",
    "title": "家有囍事2009",
    "url": "./movie-0309.html",
    "cover": "./9.jpg",
    "oneLine": "为了爷爷的80岁大寿,一大家子人凑在一起,却把寿宴搞成了大型事故现场。",
    "year": "2009",
    "type": "电影",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "婚礼",
      "乌龙",
      "合家欢"
    ],
    "genre": "喜剧、家庭"
  },
  {
    "id": "0310",
    "title": "勇者大冒险番外篇",
    "url": "./movie-0310.html",
    "cover": "./10.jpg",
    "oneLine": "安岩和神荼接到神秘包裹,踏入一座时间永远循环的沙漠古城。",
    "year": "2016",
    "type": "剧集",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "盗墓",
      "兄弟情",
      "异兽",
      "秘境"
    ],
    "genre": "动画,悬疑,冒险"
  },
  {
    "id": "0311",
    "title": "燃情主厨",
    "url": "./movie-0311.html",
    "cover": "./11.jpg",
    "oneLine": "味觉尽失的天才主厨为了打败当年的仇人,必须靠一个嗅觉超灵敏的失忆女孩来找回“妈妈的味道”。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "米其林",
      "复仇",
      "味觉",
      "治愈"
    ],
    "genre": "美食励志"
  },
  {
    "id": "0312",
    "title": "大灰熊2",
    "url": "./movie-0312.html",
    "cover": "./12.jpg",
    "oneLine": "灰熊袭击事件三十年后,当年唯一的幸存者带着一支猎杀小队回到森林,却发现那只熊依然活着——而且认出了他。",
    "year": "2026",
    "type": "电影",
    "region": "美国/加拿大",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "猛兽",
      "生存",
      "复仇",
      "B级片"
    ],
    "genre": "恐怖,惊悚,自然"
  },
  {
    "id": "0313",
    "title": "龙拳精武指",
    "url": "./movie-0313.html",
    "cover": "./13.jpg",
    "oneLine": "失传的绝技“龙拳精武指”重现江湖,引发了一场震动武林的灭门血案。",
    "year": "1995",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "功夫",
      "复仇",
      "门派斗争"
    ],
    "genre": "动作/武侠"
  },
  {
    "id": "0314",
    "title": "不倒翁的奇幻旅程",
    "url": "./movie-0314.html",
    "cover": "./14.jpg",
    "oneLine": "一个被确诊只剩三个月生命的小女孩,在爷爷的不倒翁里发现了一个永远不会倒下的玩具王国。",
    "year": "2012",
    "type": "电影",
    "region": "中国台湾",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "童真",
      "治愈",
      "定格动画",
      "成长"
    ],
    "genre": "奇幻,儿童,家庭"
  },
  {
    "id": "0315",
    "title": "迷人的图画",
    "url": "./movie-0315.html",
    "cover": "./15.jpg",
    "oneLine": "一幅十九世纪的迷人画作被送至修复室,修复师发现画中的人物每天都会移动,且越来越靠近画框边缘。",
    "year": "2026",
    "type": "电影",
    "region": "英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "艺术品",
      "诅咒",
      "画廊",
      "心理",
      "修复师"
    ],
    "genre": "悬疑,惊悚,剧情"
  },
  {
    "id": "0316",
    "title": "茨厂街黑社会",
    "url": "./movie-0316.html",
    "cover": "./16.jpg",
    "oneLine": "吉隆坡茨厂街的老大金盆洗手前夜,被自己最信任的义子背叛,血洗帮派,唯独漏掉了他的弱智亲儿子。",
    "year": "2026",
    "type": "电影",
    "region": "马来西亚",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "吉隆坡",
      "华人黑帮",
      "父子传承",
      "江湖道义"
    ],
    "genre": "犯罪/动作/剧情"
  },
  {
    "id": "0317",
    "title": "小楼雏妓",
    "url": "./movie-0317.html",
    "cover": "./17.jpg",
    "oneLine": "深水埗一栋旧楼里,八十岁的包租公收留了十三岁的她,条件是每天给他读报。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "现实",
      "女性",
      "救赎",
      "港产"
    ],
    "genre": "剧情/社会"
  },
  {
    "id": "0318",
    "title": "两腿之间的魔鬼",
    "url": "./movie-0318.html",
    "cover": "./18.jpg",
    "oneLine": "为了成为世界冠军,兄弟俩一个负责吃药,一个负责拿奖,直到“魔鬼”从他们共用的身体里醒来。",
    "year": "2026",
    "type": "剧集",
    "region": "英国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "自行车竞技",
      "兴奋剂",
      "兄弟情",
      "体育黑幕",
      "心理扭曲"
    ],
    "genre": "剧情,惊悚,心理"
  },
  {
    "id": "0319",
    "title": "爹妈满院",
    "url": "./movie-0319.html",
    "cover": "./19.jpg",
    "oneLine": "一个不务正业的“混子”回乡办养老院,面对一群性格迥异、满身是病的“爹妈”们,闹出一连串笑泪交加的故事。",
    "year": "2015",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "养老",
      "空巢老人",
      "乡村伦理",
      "温情",
      "喜剧"
    ],
    "genre": "剧情,家庭,农村"
  },
  {
    "id": "0320",
    "title": "没有妳的多重宇宙",
    "url": "./movie-0320.html",
    "cover": "./20.jpg",
    "oneLine": "痛失爱人的程序员闯入暗网,下载了一个能看到“没有她的平行人生”的芯片,却发现每个宇宙的悲剧都源于自己。",
    "year": "2023",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "平行宇宙",
      "遗憾",
      "执念",
      "软科幻"
    ],
    "genre": "剧情,科幻,爱情"
  },
  {
    "id": "0321",
    "title": "幸福便车",
    "url": "./movie-0321.html",
    "cover": "./21.jpg",
    "oneLine": "失业厨师开了一家“盲盒便车”外卖,顾客无法点菜,只能收到他认为对方最需要的一餐。",
    "year": "2023",
    "type": "电影",
    "region": "中国台湾",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "便当",
      "外卖",
      "邻里",
      "轻喜剧",
      "治愈"
    ],
    "genre": "剧情/喜剧"
  },
  {
    "id": "0322",
    "title": "不一样的旅店",
    "url": "./movie-0322.html",
    "cover": "./22.jpg",
    "oneLine": "一家只在雨天出现的旅店,入住的客人必须在退房前向店员坦白一件从未对人说起的亏心事,否则将被困在永恒的潮湿中。",
    "year": "2026",
    "type": "剧集",
    "region": "韩国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "治愈",
      "奇幻",
      "单元剧",
      "温情"
    ],
    "genre": "剧情"
  },
  {
    "id": "0323",
    "title": "时空乐趣",
    "url": "./movie-0323.html",
    "cover": "./23.jpg",
    "oneLine": "四个废柴偷了外星人的时间遥控器,结果每按一次就毁灭一个平行宇宙。",
    "year": "2022",
    "type": "剧集",
    "region": "英国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "时间旅行",
      "黑色幽默",
      "单元剧"
    ],
    "genre": "科幻,喜剧"
  },
  {
    "id": "0324",
    "title": "命运拳台",
    "url": "./movie-0324.html",
    "cover": "./24.jpg",
    "oneLine": "在能靠打拳重置人生的擂台上,他选择了最蠢的那条路——不重置,只打拳。",
    "year": "2024",
    "type": "动画剧集",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "拳击",
      "AI",
      "人生重置"
    ],
    "genre": "科幻、动作、竞技"
  },
  {
    "id": "0325",
    "title": "暗夜摇篮曲",
    "url": "./movie-0325.html",
    "cover": "./25.jpg",
    "oneLine": "新手妈妈艾琳娜的宝宝每到午夜就会唱起一首诡异的歌谣,而那首歌谣是一百年前失踪的修女合唱团曾演唱的“恶魔赞美诗”。",
    "year": "2022",
    "type": "电影",
    "region": "西班牙",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "邪教",
      "母婴关系",
      "心理恐怖",
      "民俗",
      "恶魔崇拜"
    ],
    "genre": "恐怖/家庭"
  },
  {
    "id": "0326",
    "title": "更高境界",
    "url": "./movie-0326.html",
    "cover": "./26.jpg",
    "oneLine": "一名失去信仰的登山向导,在珠峰死亡地带发现了失踪十年的哥哥,而哥哥的对讲机里还在传来求救声。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "登山",
      "救赎",
      "心理"
    ],
    "genre": "剧情"
  },
  {
    "id": "0327",
    "title": "伤不起的女人",
    "url": "./movie-0327.html",
    "cover": "./27.jpg",
    "oneLine": "三个处于不同人生阶段的都市女性,因为一场“杀猪盘”诈骗案,命运紧紧纠缠在一起。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "女性群像",
      "婚姻",
      "职场",
      "养老",
      "互助"
    ],
    "genre": "剧情/家庭/女性"
  },
  {
    "id": "0328",
    "title": "仙境绑架案",
    "url": "./movie-0328.html",
    "cover": "./28.jpg",
    "oneLine": "富豪之子在虚拟游戏“仙境”中被绑架,绑匪要求全世界的玩家帮他通关才能赎人。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "虚拟现实",
      "绑架",
      "富二代",
      "密室逃脱"
    ],
    "genre": "犯罪/悬疑/动作"
  },
  {
    "id": "0329",
    "title": "比基尼海盗",
    "url": "./movie-0329.html",
    "cover": "./29.jpg",
    "oneLine": "三个穿着比基尼的败家女继承了一艘破船和一张假藏宝图,却阴差阳错搅黄了真海盗的世纪大劫案。",
    "year": "2018",
    "type": "电影 喜剧,冒险",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "比基尼",
      "海盗",
      "恶搞",
      "夺宝",
      "美女"
    ],
    "genre": "动作,喜剧,冒险"
  },
  {
    "id": "0330",
    "title": "痴情快婿",
    "url": "./movie-0330.html",
    "cover": "./30.jpg",
    "oneLine": "混混阿飞爱上黑帮大小姐,准岳父给他出的难题竟是——帮忙洗白整个帮派。",
    "year": "1995",
    "type": "电影",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "黑帮",
      "卧底",
      "搞笑岳父",
      "90年代",
      "港味"
    ],
    "genre": "喜剧,爱情,动作"
  },
  {
    "id": "0331",
    "title": "诈骗女神",
    "url": "./movie-0331.html",
    "cover": "./31.jpg",
    "oneLine": "被骗光家产的女会计,用十年时间把自己训练成金融诈骗犯,专骗那类当年骗她的人。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "高智商犯罪",
      "反杀",
      "复仇",
      "女主"
    ],
    "genre": "犯罪,剧情,女性"
  },
  {
    "id": "0332",
    "title": "何以智胜",
    "url": "./movie-0332.html",
    "cover": "./32.jpg",
    "oneLine": "天才程序员为夺回被资本掠夺的算法,用代码在商战中上演绝地反杀。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "人工智能",
      "职场博弈",
      "精英对决",
      "反转爽剧"
    ],
    "genre": "职场/商战/剧情"
  },
  {
    "id": "0333",
    "title": "恶魔印记",
    "url": "./movie-0333.html",
    "cover": "./33.jpg",
    "oneLine": "新生儿背上的胎记,竟与连环杀人案现场留下的符号完全吻合。",
    "year": "2024",
    "type": "剧集",
    "region": "韩国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "邪教",
      "驱魔",
      "犯罪心理",
      "反转",
      "暗黑"
    ],
    "genre": "悬疑/惊悚"
  },
  {
    "id": "0334",
    "title": "美食妙探",
    "url": "./movie-0334.html",
    "cover": "./34.jpg",
    "oneLine": "拥有超强味觉记忆的米其林厨师,每次品尝犯罪现场的饭菜就能锁定凶手。",
    "year": "2024",
    "type": "剧集",
    "region": "法国/意大利",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "厨师",
      "探案",
      "味觉"
    ],
    "genre": "悬疑/美食/喜剧"
  },
  {
    "id": "0335",
    "title": "穿墙行",
    "url": "./movie-0335.html",
    "cover": "./35.jpg",
    "oneLine": "一个窝囊的公务员发现自己能穿墙后,开始戏弄上司和偷画,最后却因爱上一个小偷而无法自拔。",
    "year": "2016",
    "type": "电影",
    "region": "法国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "穿墙",
      "巴黎",
      "中年危机",
      "浪漫",
      "奇幻"
    ],
    "genre": "奇幻,爱情,喜剧"
  },
  {
    "id": "0336",
    "title": "实习医生格蕾第四季",
    "url": "./movie-0336.html",
    "cover": "./36.jpg",
    "oneLine": "新冠疫情结束后的第一年,西雅图仁爱医院迎来了一批“口罩里长大的实习医生”,他们比前辈更聪明,也更害怕靠近病人。",
    "year": "2025",
    "type": "电视剧集",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "医疗剧",
      "情感纠葛",
      "新人入职",
      "生死抉择",
      "长播剧"
    ],
    "genre": "剧情/医务/群像"
  },
  {
    "id": "0337",
    "title": "倾城天下",
    "url": "./movie-0337.html",
    "cover": "./37.jpg",
    "oneLine": "双胞胎姐妹一个嫁入敌国为后,一个留在本国为帝,十年后兵戎相见时发现彼此爱上了同一个敌国将军。",
    "year": "2022",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "女帝",
      "替身",
      "姐妹反目",
      "宫斗"
    ],
    "genre": "古装,爱情,权谋"
  },
  {
    "id": "0338",
    "title": "60岁的情书",
    "url": "./movie-0338.html",
    "cover": "./38.jpg",
    "oneLine": "退休教师收到一封署名60年前初恋的信,他决定瞒着妻子独自赴约。",
    "year": "2011",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "老年",
      "书信",
      "初恋",
      "和风",
      "治愈"
    ],
    "genre": "剧情,爱情"
  },
  {
    "id": "0339",
    "title": "橙色女孩",
    "url": "./movie-0339.html",
    "cover": "./39.jpg",
    "oneLine": "15岁女孩收到死去父亲留下的电脑文件,父亲在文件中说:我在超市遇到了一个“橙色女孩”,那是你们的母亲。",
    "year": "2026",
    "type": "电影",
    "region": "挪威",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "父女信札",
      "宇宙哲学",
      "时间胶囊"
    ],
    "genre": "剧情/奇幻"
  },
  {
    "id": "0340",
    "title": "谍海群英会",
    "url": "./movie-0340.html",
    "cover": "./40.jpg",
    "oneLine": "全球六大情报机构的顶级特工被同时骗进一座孤岛,他们只能互相猎杀才能离岛。",
    "year": "2025",
    "type": "剧集",
    "region": "英国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "群像戏",
      "摩萨德",
      "军情六处",
      "猫鼠游戏",
      "黑吃黑"
    ],
    "genre": "悬疑/动作/犯罪"
  },
  {
    "id": "0341",
    "title": "蔷薇色的布子",
    "url": "./movie-0341.html",
    "cover": "./41.jpg",
    "oneLine": "昭和末期,小镇杂货店老板的女儿爱上了来买女性杂志的害羞女同学,一封封情书开启了禁忌之门。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "百合",
      "昭和怀旧",
      "漫画改",
      "细腻"
    ],
    "genre": "剧情,同性,青春"
  },
  {
    "id": "0342",
    "title": "非洲历险记",
    "url": "./movie-0342.html",
    "cover": "./42.jpg",
    "oneLine": "为了继承遗产,恐婚都市男被迫与“野人”父亲穿越撒哈拉运送长颈鹿。",
    "year": "2025",
    "type": "电影",
    "region": "法国/非洲",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "公路电影",
      "动物保护",
      "父子和解"
    ],
    "genre": "冒险,喜剧"
  },
  {
    "id": "0343",
    "title": "科拉深孔",
    "url": "./movie-0343.html",
    "cover": "./43.jpg",
    "oneLine": "为了寻找失踪的队友,一名女科学家独自坠入地球上最深的人造洞穴,却发现那里藏着不属于人类的低语。",
    "year": "2021",
    "type": "电影",
    "region": "俄罗斯",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "地下探险",
      "未知生物",
      "苏联遗迹",
      "密闭空间"
    ],
    "genre": "科幻/惊悚"
  },
  {
    "id": "0344",
    "title": "智多星决胜千里",
    "url": "./movie-0344.html",
    "cover": "./44.jpg",
    "oneLine": "香港顶级诈骗团队“智多星”每次行动都天衣无缝,直到他们接到一个委托:骗倒香港首富,而首富是队长的生父。",
    "year": "2002",
    "type": "电视剧",
    "region": "中国香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "高智商犯罪",
      "诈骗",
      "香港",
      "反派主角",
      "团队"
    ],
    "genre": "悬疑/犯罪"
  },
  {
    "id": "0345",
    "title": "花心2最好命",
    "url": "./movie-0345.html",
    "cover": "./45.jpg",
    "oneLine": "公认的“海王”意外获得超能力:能听见所有女人对他的真实评价,从此生不如死。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "都市",
      "渣男",
      "改造",
      "女性觉醒"
    ],
    "genre": "爱情/喜剧"
  },
  {
    "id": "0346",
    "title": "谈谈情练练武粤语",
    "url": "./movie-0346.html",
    "cover": "./46.jpg",
    "oneLine": "冷面女高管与痞气保安因打架结缘,在公司天台上秘密传授“恋爱格斗术”。",
    "year": "2024",
    "type": "剧集",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "职场",
      "武术",
      "欢喜冤家"
    ],
    "genre": "动作,爱情,喜剧"
  },
  {
    "id": "0347",
    "title": "末日迷踪:敌基督的崛起",
    "url": "./movie-0347.html",
    "cover": "./47.jpg",
    "oneLine": "全球数十亿人瞬间失踪后,一位调查记者发现联合国秘书长正一一应验《圣经》中的敌基督特征。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "末日",
      "敌基督",
      "全球政府",
      "预言",
      "悬疑"
    ],
    "genre": "科幻/惊悚/宗教"
  },
  {
    "id": "0348",
    "title": "终极歼灭者",
    "url": "./movie-0348.html",
    "cover": "./48.jpg",
    "oneLine": "外星生物吞噬地球,一位退役机甲战士驾驶着最后的歼灭者机甲,执行自杀式反击。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "机甲",
      "外星入侵",
      "硬核战斗",
      "末世",
      "孤胆英雄"
    ],
    "genre": "动作,科幻"
  },
  {
    "id": "0349",
    "title": "小子行大运",
    "url": "./movie-0349.html",
    "cover": "./49.jpg",
    "oneLine": "一个走街串巷的卖鱼小子,靠着一手“鱼腥味猜牌”的绝技,闯入澳门顶级赌局。",
    "year": "1986",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "功夫",
      "喜剧",
      "香港电影",
      "赌片"
    ],
    "genre": "喜剧,动作"
  },
  {
    "id": "0350",
    "title": "边缘追缉",
    "url": "./movie-0350.html",
    "cover": "./50.jpg",
    "oneLine": "卧底警探恢复身份回到警局,却发现真正的内鬼,正是当初招募自己的上司。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "卧底",
      "黑帮",
      "身份迷失"
    ],
    "genre": "动作,犯罪,悬疑"
  },
  {
    "id": "0351",
    "title": "魔鬼亱",
    "url": "./movie-0351.html",
    "cover": "./51.jpg",
    "oneLine": "一名不信鬼神的网红,在农历七月三十晚直播挑战“魔鬼亱”禁忌游戏,却唤醒了被封印的邪神。",
    "year": "2025",
    "type": "电影",
    "region": "中国台湾",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "宫庙",
      "乩童",
      "恶魔附身",
      "仪式感"
    ],
    "genre": "恐怖/民俗"
  },
  {
    "id": "0352",
    "title": "完美拍档2017",
    "url": "./movie-0352.html",
    "cover": "./52.jpg",
    "oneLine": "被警校开除的格斗选手与沉迷VR游戏的天才黑客,组成最不靠谱的缉毒搭档。",
    "year": "2017",
    "type": "电影",
    "region": "韩国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "警察",
      "搭档",
      "搞笑",
      "毒品",
      "反转"
    ],
    "genre": "动作/喜剧/犯罪"
  },
  {
    "id": "0353",
    "title": "法网边缘",
    "url": "./movie-0353.html",
    "cover": "./53.jpg",
    "oneLine": "每季聚焦一起震惊全美的案件,但主角不是律师,而是12名陪审员——看他们在密室里的博弈如何逆转结局。",
    "year": "2018",
    "type": "电视剧",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "律政",
      "反转",
      "陪审团",
      "程序正义"
    ],
    "genre": "悬疑,犯罪,剧情"
  },
  {
    "id": "0354",
    "title": "艾拉和阿弼",
    "url": "./movie-0354.html",
    "cover": "./54.jpg",
    "oneLine": "为了应对催婚,两个加拿大的南亚裔年轻人伪造了一段恋爱关系,结果却骗过了整个家族。",
    "year": "2023",
    "type": "电影",
    "region": "加拿大",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "多代同堂",
      "南亚裔",
      "包办婚姻",
      "文化冲突",
      "温馨"
    ],
    "genre": "爱情/喜剧"
  },
  {
    "id": "0355",
    "title": "瓦坎达之眼",
    "url": "./movie-0355.html",
    "cover": "./55.jpg",
    "oneLine": "瓦坎达的精英女战士奥克耶,奉命在全球执行秘密任务,揭露一场针对振金资源的全球性阴谋。",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "超级英雄",
      "间谍",
      "非洲未来主义",
      "女战士",
      "政治惊悚"
    ],
    "genre": "动作/科幻/冒险"
  },
  {
    "id": "0356",
    "title": "纽约爱音鳄",
    "url": "./movie-0356.html",
    "cover": "./56.jpg",
    "oneLine": "纽约下水道里住着一只会唱歌的鳄鱼,它意外撮合了两个被生活压垮的年轻人。",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "都市浪漫",
      "独立音乐",
      "阴差阳错",
      "治愈"
    ],
    "genre": "爱情/音乐"
  },
  {
    "id": "0357",
    "title": "野性的冬天",
    "url": "./movie-0357.html",
    "cover": "./57.jpg",
    "oneLine": "叛逆少女被当兵出身的父亲扔进长白山无人区,两人必须徒步七天才能走出冬天。",
    "year": "2025",
    "type": "电影",
    "region": "中国内地",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "东北",
      "父女",
      "荒野求生",
      "和解"
    ],
    "genre": "剧情/冒险/家庭"
  },
  {
    "id": "0358",
    "title": "甜蜜年少时",
    "url": "./movie-0358.html",
    "cover": "./58.jpg",
    "oneLine": "2008年暑假,四个初中生为了凑钱买一张奥运会开幕式门票,开始了啼笑皆非的打工之路。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "00后怀旧",
      "校园群像",
      "夏日限定"
    ],
    "genre": "青春/喜剧"
  },
  {
    "id": "0359",
    "title": "童年的收音机",
    "url": "./movie-0359.html",
    "cover": "./59.jpg",
    "oneLine": "1987年小镇,一个坏掉的收音机,两个少年,和一盘据说能听到“未来声音”的神秘磁带。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "怀旧",
      "80年代",
      "童年",
      "友情",
      "梦想"
    ],
    "genre": "剧情,儿童"
  },
  {
    "id": "0360",
    "title": "功夫棒球",
    "url": "./movie-0360.html",
    "cover": "./60.jpg",
    "oneLine": "一所濒临废部的棒球社,社长决定用少林功夫来训练队员,目标是打进甲子园。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "棒球",
      "少林功夫",
      "废柴社团",
      "热血"
    ],
    "genre": "喜剧/运动/奇幻"
  },
  {
    "id": "0361",
    "title": "末日之果",
    "url": "./movie-0361.html",
    "cover": "./61.jpg",
    "oneLine": "一场病毒让全球女性停止生育,最后一个怀孕的少女被奉为“圣母”,但她怀的究竟是救世主还是毁灭者?",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "末世",
      "宗教",
      "科学",
      "病毒",
      "幸存者"
    ],
    "genre": "科幻,悬疑,惊悚"
  },
  {
    "id": "0362",
    "title": "潜行者",
    "url": "./movie-0362.html",
    "cover": "./62.jpg",
    "oneLine": "在未来废土世界,一名“潜行者”带领客户穿越变异“禁区”,去寻找一个据说能实现潜意识愿望的神秘房间。",
    "year": "2024",
    "type": "电影",
    "region": "俄罗斯",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "禁区",
      "房间",
      "精神之旅",
      "塔可夫斯基致敬"
    ],
    "genre": "科幻,哲学"
  },
  {
    "id": "0363",
    "title": "爹哋要结婚,身家冇得分",
    "url": "./movie-0363.html",
    "cover": "./63.jpg",
    "oneLine": "富豪老爸突然宣布再婚,三个子女发现未婚妻竟是前女友的妈。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "豪门",
      "再婚",
      "遗产",
      "粤语"
    ],
    "genre": "喜剧,家庭"
  },
  {
    "id": "0364",
    "title": "东方西方",
    "url": "./movie-0364.html",
    "cover": "./64.jpg",
    "oneLine": "乌克兰裔钢琴家逃往西方,二十年后在基辅遇见了当年举报父亲的发小。",
    "year": "2024",
    "type": "电影",
    "region": "法国/俄罗斯/乌克兰",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "冷战",
      "流亡",
      "身份认同",
      "钢琴家",
      "铁幕"
    ],
    "genre": "历史/剧情"
  },
  {
    "id": "0365",
    "title": "时间不会停止",
    "url": "./movie-0365.html",
    "cover": "./65.jpg",
    "oneLine": "一个只剩七天生命的女孩进入时间循环,她每天重置记忆,但一个男孩选择用七天不断让她重新爱上自己。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "时间循环",
      "绝症",
      "告别",
      "日式催泪"
    ],
    "genre": "科幻/爱情/剧情"
  },
  {
    "id": "0366",
    "title": "毛骨悚然之红衣男孩",
    "url": "./movie-0366.html",
    "cover": "./66.jpg",
    "oneLine": "一支户外探险队在荒村捡到一盘录像带,里面记录着20年前红衣男孩失踪的真相。",
    "year": "2023",
    "type": "网络电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "红衣",
      "男孩",
      "诅咒",
      "乡村",
      "录像带"
    ],
    "genre": "悬疑惊悚"
  },
  {
    "id": "0367",
    "title": "他们结婚了还有很多孩子",
    "url": "./movie-0367.html",
    "cover": "./67.jpg",
    "oneLine": "一对生了七个孩子的丁克主义夫妇,在琐碎日常中重新找回“二人世界”的爆笑旅程。",
    "year": "2025",
    "type": "电影",
    "region": "法国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "多子家庭",
      "婚姻危机",
      "幽默",
      "社会观察",
      "温情"
    ],
    "genre": "喜剧、家庭、剧情"
  },
  {
    "id": "0368",
    "title": "妙手仁心2",
    "url": "./movie-0368.html",
    "cover": "./68.jpg",
    "oneLine": "二十年后的仁爱医院,当年的实习医生成了精神科主任,而他要治疗的第一位病人,是曾经的导师。",
    "year": "2025",
    "type": "电视剧",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "急诊室",
      "精神科",
      "医者自医",
      "单元剧",
      "社会派"
    ],
    "genre": "医疗,剧情"
  },
  {
    "id": "0369",
    "title": "肌电工情",
    "url": "./movie-0369.html",
    "cover": "./69.jpg",
    "oneLine": "一个失意的健身教练和一个中年电工意外发现了彼此的“肌肉电流”,只要身体接触就能看到对方的情伤记忆。",
    "year": "2025",
    "type": "电影",
    "region": "香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "健身",
      "电工",
      "中年危机",
      "兄弟情",
      "港味"
    ],
    "genre": "爱情,剧情"
  },
  {
    "id": "0370",
    "title": "豪姬",
    "url": "./movie-0370.html",
    "cover": "./70.jpg",
    "oneLine": "丰臣秀吉养女豪姬为报灭门之仇,女扮男装潜伏在德川家康身边,用三年等来一击必杀的机会。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "战国",
      "女武士",
      "复仇",
      "剑戟"
    ],
    "genre": "历史/动作"
  },
  {
    "id": "0371",
    "title": "山羊的故事",
    "url": "./movie-0371.html",
    "cover": "./71.jpg",
    "oneLine": "一只向往自由的家养山羊,为了拯救被狼群掳走的好友,独自踏上了横跨阿尔卑斯山的冒险之旅。",
    "year": "2021",
    "type": "电影",
    "region": "法国/比利时",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "阿尔卑斯山",
      "动物主角",
      "成长",
      "牧羊犬",
      "猎鹰"
    ],
    "genre": "动画/家庭/冒险"
  },
  {
    "id": "0372",
    "title": "加利福尼亚旅馆",
    "url": "./movie-0372.html",
    "cover": "./72.jpg",
    "oneLine": "一家神秘的加州旅馆,任何时候你都可以退房,但你永远无法离开。",
    "year": "2022",
    "type": "电视剧",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "旅馆",
      "老鹰乐队",
      "隐喻",
      "单元剧"
    ],
    "genre": "悬疑/奇幻"
  },
  {
    "id": "0373",
    "title": "巅峰拍档第三季",
    "url": "./movie-0373.html",
    "cover": "./73.jpg",
    "oneLine": "三贱客开着三辆二手皮卡穿越蒙古高原,途中不仅要修车,还要躲避狼群和非法淘金者。",
    "year": "2026",
    "type": "综艺剧集",
    "region": "英国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "BBC",
      "三剑客",
      "汽车评测",
      "自驾游挑战",
      "英式幽默"
    ],
    "genre": "汽车/真人秀/喜剧"
  },
  {
    "id": "0374",
    "title": "大喘气",
    "url": "./movie-0374.html",
    "cover": "./74.jpg",
    "oneLine": "高考倒计时100天,重点高中的“学霸”突然不能呼吸了,医生说她的病不在肺里,而在妈妈眼里。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "高考",
      "抑郁症",
      "母女关系",
      "现实题材"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "0375",
    "title": "记忆迷宫",
    "url": "./movie-0375.html",
    "cover": "./75.jpg",
    "oneLine": "一个可以删除记忆的医生,在接受患者记忆时,发现自己是连环杀人犯。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "记忆删除",
      "犯罪心理",
      "反转",
      "近未来",
      "哲学"
    ],
    "genre": "科幻、悬疑、剧情"
  },
  {
    "id": "0376",
    "title": "五十玫瑰",
    "url": "./movie-0376.html",
    "cover": "./76.jpg",
    "oneLine": "三位年过五十的闺蜜,在丈夫出轨、儿女离巢后,用退休金合伙开了一家花店,重新绽放。",
    "year": "2026",
    "type": "剧集",
    "region": "华语",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "中年女性",
      "闺蜜情深",
      "人生重启",
      "现实主义"
    ],
    "genre": "剧情,女性,都市"
  },
  {
    "id": "0377",
    "title": "彼生时刻",
    "url": "./movie-0377.html",
    "cover": "./77.jpg",
    "oneLine": "一位老人在弥留之际,他的意识在七个平行宇宙间跳跃,在每个宇宙里他都做出了不同的人生选择,但结局都一样孤独。",
    "year": "2017",
    "type": "电影",
    "region": "英国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "平行宇宙",
      "人生选择",
      "哲学",
      "烧脑",
      "温情"
    ],
    "genre": "剧情,奇幻,悬疑"
  },
  {
    "id": "0378",
    "title": "借来的100天泰国版",
    "url": "./movie-0378.html",
    "cover": "./78.jpg",
    "oneLine": "一个亡灵被借给自杀的高中生身体,只有100天找出他自杀的真正原因。",
    "year": "2019",
    "type": "电影",
    "region": "泰国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "重启人生",
      "附身",
      "校园",
      "因果"
    ],
    "genre": "奇幻/悬疑"
  },
  {
    "id": "0379",
    "title": "神墓",
    "url": "./movie-0379.html",
    "cover": "./79.jpg",
    "oneLine": "一座埋葬着上古神魔的巨墓现世,守墓少年发现自己的血可以唤醒里面的一切。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "玄幻",
      "东方神话",
      "墓穴探险",
      "上古魔神"
    ],
    "genre": "奇幻/动作/古装"
  },
  {
    "id": "0380",
    "title": "世界上最伟大的父亲",
    "url": "./movie-0380.html",
    "cover": "./80.jpg",
    "oneLine": "一位失败的父亲假装女儿留下的遗书是自己写的,意外成为全美偶像。",
    "year": "2021",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "父女",
      "谎言",
      "黑色幽默",
      "心理"
    ],
    "genre": "剧情"
  },
  {
    "id": "0381",
    "title": "经纬天地",
    "url": "./movie-0381.html",
    "cover": "./81.jpg",
    "oneLine": "民国乱世,苏州织造家族的遗孤,运用被世人遗忘的“天文学织法”,掀起了一场丝绸业的金融风暴。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "丝绸",
      "民国",
      "家族恩怨",
      "非遗"
    ],
    "genre": "历史,商战"
  },
  {
    "id": "0382",
    "title": "衰鬼逼人粤语",
    "url": "./movie-0382.html",
    "cover": "./82.jpg",
    "oneLine": "史上最倒霉的保险经纪被一个千年衰鬼附身,从此他走到哪里,哪里就有人倒霉,但他的保险理赔率却飙升。",
    "year": "1991",
    "type": "剧集",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "倒霉鬼附身",
      "都市传说",
      "单元剧"
    ],
    "genre": "喜剧,奇幻,恐怖"
  },
  {
    "id": "0383",
    "title": "曲线姻缘",
    "url": "./movie-0383.html",
    "cover": "./83.jpg",
    "oneLine": "两个厌世青年为继承遗产假结婚,结果发现对方是小时候彼此救过命的笔友。",
    "year": "1995",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "盲婚哑嫁",
      "换身份",
      "误会",
      "寻亲"
    ],
    "genre": "爱情,喜剧,剧情"
  },
  {
    "id": "0384",
    "title": "小时代:灵魂尽头",
    "url": "./movie-0384.html",
    "cover": "./84.jpg",
    "oneLine": "一场车祸后,林萧与顾里灵魂互换,被迫以对方身份揭开十年友情最残酷的真相。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "重生",
      "闺蜜",
      "商战",
      "灵魂互换",
      "和解"
    ],
    "genre": "剧情/奇幻"
  },
  {
    "id": "0385",
    "title": "奇妙的海洋",
    "url": "./movie-0385.html",
    "cover": "./85.jpg",
    "oneLine": "小女孩意外获得与海洋生物对话的能力,踏上拯救濒死珊瑚礁的奇幻旅程。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "海洋",
      "冒险",
      "亲子",
      "环保"
    ],
    "genre": "动画/奇幻/家庭"
  },
  {
    "id": "0386",
    "title": "富贵荣华第一家",
    "url": "./movie-0386.html",
    "cover": "./86.jpg",
    "oneLine": "香港百年烧腊老店“荣华”创始人去世,遗嘱只写了四个字:富贵荣华,并说答案在店里最不值钱的一样东西上。",
    "year": "2025",
    "type": "剧集",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "豪门",
      "烧腊店",
      "兄弟争产",
      "饮食江湖"
    ],
    "genre": "家族商战"
  },
  {
    "id": "0387",
    "title": "叔比狗:木乃伊传奇",
    "url": "./movie-0387.html",
    "cover": "./87.jpg",
    "oneLine": "叔比狗和沙齐一行人在埃及度假时,发现一具复活的不杀人的木乃伊,它只想要回自己被博物馆偷走的猫。",
    "year": "2022",
    "type": "动画电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "侦探狗",
      "埃及",
      "木乃伊",
      "幽默",
      "团队"
    ],
    "genre": "喜剧/冒险/悬疑"
  },
  {
    "id": "0388",
    "title": "我最爱的家人",
    "url": "./movie-0388.html",
    "cover": "./88.jpg",
    "oneLine": "养母突然带回三个非亲生的孩子,亲儿子一怒之下断绝关系,三十年后真相爆发。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "重组家庭",
      "养育之恩",
      "感人",
      "年代"
    ],
    "genre": "家庭,伦理"
  },
  {
    "id": "0389",
    "title": "西贡小姐:二十五周年表演",
    "url": "./movie-0389.html",
    "cover": "./89.jpg",
    "oneLine": "音乐剧《西贡小姐》二十五周年纪念演出,完整呈现战争中被遗弃的女人与混血儿“美”的撕心裂肺。",
    "year": "2014",
    "type": "其他",
    "region": "英国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "舞台",
      "经典",
      "现场录像",
      "悲情",
      "宏大"
    ],
    "genre": "音乐剧/爱情"
  },
  {
    "id": "0390",
    "title": "薛仁贵征东国语",
    "url": "./movie-0390.html",
    "cover": "./90.jpg",
    "oneLine": "白虎星下凡的薛仁贵,从火头军做起,历经“九天”之险,终于平定辽东,上演“白袍小将”的传奇。",
    "year": "1985",
    "type": "电视剧",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "TVB",
      "名著改编",
      "征战",
      "传奇",
      "老戏骨"
    ],
    "genre": "古装,历史"
  },
  {
    "id": "0391",
    "title": "柴生芳",
    "url": "./movie-0391.html",
    "cover": "./91.jpg",
    "oneLine": "留洋博士回到黄土高原,用生命最后两年书写一个县长的平民史诗。",
    "year": "2016",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "真实事迹",
      "脱贫攻坚",
      "基层干部",
      "理想之光"
    ],
    "genre": "剧情,传记"
  },
  {
    "id": "0392",
    "title": "罗姆男孩",
    "url": "./movie-0392.html",
    "cover": "./92.jpg",
    "oneLine": "一个吉普赛男孩继承了父亲的扒手天赋,却只想当一个正常人。",
    "year": "2016",
    "type": "电影",
    "region": "意大利",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "社会",
      "犯罪",
      "吉普赛",
      "成长"
    ],
    "genre": "剧情"
  },
  {
    "id": "0393",
    "title": "精灵旅社第二季",
    "url": "./movie-0393.html",
    "cover": "./93.jpg",
    "oneLine": "德古拉的女儿梅维斯开始上“怪物幼儿园”,而老爸则患上了严重的分离焦虑。",
    "year": "2020",
    "type": "剧集",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "怪物",
      "亲子",
      "单元剧",
      "笑中带泪"
    ],
    "genre": "动画/喜剧/奇幻/家庭"
  },
  {
    "id": "0394",
    "title": "脱线帝国",
    "url": "./movie-0394.html",
    "cover": "./94.jpg",
    "oneLine": "一个蹩脚程序员意外创建了一个“脱线”的平行帝国,那里的物理法则和常识全都不按套路出牌。",
    "year": "2023",
    "type": "剧集",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "荒诞",
      "平行宇宙",
      "恶搞",
      "政治讽刺",
      "脑洞"
    ],
    "genre": "喜剧,科幻"
  },
  {
    "id": "0395",
    "title": "冰封迷案",
    "url": "./movie-0395.html",
    "cover": "./95.jpg",
    "oneLine": "暴雪夜,七名身份各异的陌生人被困废弃疗养院,其中一人是模仿杀手的“信徒”。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "暴风雪山庄",
      "密室",
      "连环杀"
    ],
    "genre": "悬疑,惊悚,犯罪"
  },
  {
    "id": "0396",
    "title": "凯西回家",
    "url": "./movie-0396.html",
    "cover": "./96.jpg",
    "oneLine": "单亲妈妈凯西被驱逐后,带着女儿睡在伦敦地铁站,每天假装去“上班”。",
    "year": "2023",
    "type": "电影",
    "region": "英国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "流浪者",
      "庇护系统",
      "母女",
      "真实事件改编"
    ],
    "genre": "剧情/社会/女性"
  },
  {
    "id": "0397",
    "title": "电话祈祷",
    "url": "./movie-0397.html",
    "cover": "./97.jpg",
    "oneLine": "现代神父通过一部老式电话,意外连接上了三十年前被冤枉的死刑犯,他必须在三天内找到真凶,阻止一场神圣的谋杀。",
    "year": "2026",
    "type": "电影",
    "region": "意大利",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "时空连接",
      "信仰危机",
      "神父侦探",
      "连环命案"
    ],
    "genre": "悬疑/惊悚"
  },
  {
    "id": "0398",
    "title": "美食大冒险之英雄烩",
    "url": "./movie-0398.html",
    "cover": "./98.jpg",
    "oneLine": "在食物就是生命的世界里,一只有“味痴”的包子,必须找到传说中的“英雄烩”配方,拯救被酸菜军团包围的蒸笼城。",
    "year": "2025",
    "type": "动画电影",
    "region": "中国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "美食世界",
      "吃货",
      "功夫",
      "中华料理"
    ],
    "genre": "喜剧、冒险、奇幻"
  },
  {
    "id": "0399",
    "title": "亡灵故事",
    "url": "./movie-0399.html",
    "cover": "./99.jpg",
    "oneLine": "一个作家回到内战时期的村庄写生,发现村民每年“亡灵节”讲述的怪谈,都是他们亲历的法西斯屠杀。",
    "year": "2024",
    "type": "电影",
    "region": "西班牙",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "民俗",
      "内战创伤",
      "集体记忆",
      "诗性恐怖"
    ],
    "genre": "恐怖,剧情,悬疑"
  },
  {
    "id": "0400",
    "title": "阴阳眼见子",
    "url": "./movie-0400.html",
    "cover": "./100.jpg",
    "oneLine": "女高中生某天突然能看到无处不在的幽灵,但她选择假装看不见,在毛骨悚然中努力维持“普通人”的日常生活。",
    "year": "2022",
    "type": "剧集",
    "region": "日本",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "见鬼",
      "JK",
      "轻度恐怖",
      "温馨治愈",
      "无声尖叫"
    ],
    "genre": "恐怖,奇幻,日常"
  },
  {
    "id": "0401",
    "title": "变身侠阿奔第二季",
    "url": "./movie-0401.html",
    "cover": "./101.jpg",
    "oneLine": "阿奔的外祖母突然现身,揭露了全宇宙最古老种族的神秘遗产。",
    "year": "2007",
    "type": "剧集",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "外星英雄",
      "少年英雄",
      "单元剧"
    ],
    "genre": "科幻,动画,冒险"
  },
  {
    "id": "0402",
    "title": "一千囚犯一野女",
    "url": "./movie-0402.html",
    "cover": "./102.jpg",
    "oneLine": "军阀混战时期,一个神秘女人被扔进全是逃兵和死囚的孤岛,她只有一个武器:美貌与剧毒。",
    "year": "1992",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "孤岛",
      "复仇",
      "冷兵器"
    ],
    "genre": "动作,冒险"
  },
  {
    "id": "0403",
    "title": "鬼也笑",
    "url": "./movie-0403.html",
    "cover": "./103.jpg",
    "oneLine": "四个南洋都市怪谈,每个都让你先笑到肚子疼,再吓得关灯。",
    "year": "2024",
    "type": "电影",
    "region": "新加坡",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "南洋",
      "灵异",
      "段子式",
      "搞笑",
      "多故事"
    ],
    "genre": "恐怖/喜剧"
  },
  {
    "id": "0404",
    "title": "为何已成过去",
    "url": "./movie-0404.html",
    "cover": "./104.jpg",
    "oneLine": "一对曾经私奔未遂的恋人在中年重逢,各自有家庭,却决定花一天时间重走当年的私奔路。",
    "year": "1995",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "遗憾",
      "重逢",
      "旧情人",
      "港风",
      "催泪"
    ],
    "genre": "爱情文艺"
  },
  {
    "id": "0405",
    "title": "读心神探",
    "url": "./movie-0405.html",
    "cover": "./105.jpg",
    "oneLine": "一个患有人脸失认症的微表情专家,破案从不靠脸,只靠肌肉抖动的一瞬间。",
    "year": "2024",
    "type": "剧集",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "微表情",
      "单元剧",
      "高智商犯罪",
      "心理对抗",
      "破案"
    ],
    "genre": "悬疑/犯罪"
  },
  {
    "id": "0406",
    "title": "犯规王",
    "url": "./movie-0406.html",
    "cover": "./106.jpg",
    "oneLine": "为了奖金还债,一个万年替补学会了所有黑哨裁判视而不见的犯规绝技。",
    "year": "2023",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "足球",
      "作弊",
      "废柴逆袭",
      "市井英雄",
      "无厘头"
    ],
    "genre": "喜剧,运动"
  },
  {
    "id": "0407",
    "title": "赤子英雄1",
    "url": "./movie-0407.html",
    "cover": "./107.jpg",
    "oneLine": "1937年淞沪会战后,上海租界里一位京剧武生利用舞台功夫,暗中刺杀汉奸并护送爱国人士撤离。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "抗战",
      "民间侠义",
      "冷兵器",
      "热血"
    ],
    "genre": "动作/战争"
  },
  {
    "id": "0408",
    "title": "炒金男勇夺真爱",
    "url": "./movie-0408.html",
    "cover": "./108.jpg",
    "oneLine": "其貌不扬的黄金期货交易员,靠着过人的投资眼光成为亿万富翁,却发现用钱买来的爱情,不如穷护士的一碗热汤。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "金融职场",
      "土味逆袭",
      "霸道总裁",
      "爽文剧情"
    ],
    "genre": "都市,爱情"
  },
  {
    "id": "0409",
    "title": "圣诞老人",
    "url": "./movie-0409.html",
    "cover": "./109.jpg",
    "oneLine": "一个被解雇的推销员意外杀死圣诞老人,不得不穿上红衣替他送完所有礼物。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "节日",
      "身份错位",
      "温情",
      "冒险"
    ],
    "genre": "喜剧,家庭,奇幻"
  },
  {
    "id": "0410",
    "title": "肉脚擂台",
    "url": "./movie-0410.html",
    "cover": "./110.jpg",
    "oneLine": "一群平均年龄45岁、被生活打垮的油腻大叔为了保住社区道馆,报名参加全国跆拳道大赛。",
    "year": "2026",
    "type": "电影",
    "region": "台湾",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "跆拳道",
      "中年危机",
      "废柴逆袭"
    ],
    "genre": "运动喜剧"
  },
  {
    "id": "0411",
    "title": "锦衣神匠",
    "url": "./movie-0411.html",
    "cover": "./111.jpg",
    "oneLine": "明朝天启年间,一个被锦衣卫灭门的木匠后人,靠一手“活的机关术”潜入北镇抚司,为父报仇。",
    "year": "2025",
    "type": "网络剧",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "机关术",
      "锦衣卫",
      "本格推理",
      "明朝",
      "手艺对决"
    ],
    "genre": "古装,悬疑"
  },
  {
    "id": "0412",
    "title": "太空旅客国语",
    "url": "./movie-0412.html",
    "cover": "./112.jpg",
    "oneLine": "前往殖民星球的飞船发生故障,一个男乘客提前90年醒来,他面临一个选择:要不要叫醒她?",
    "year": "2016",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "太空移民",
      "休眠故障",
      "道德困境",
      "孤独",
      "星空浪漫"
    ],
    "genre": "科幻/爱情/冒险"
  },
  {
    "id": "0413",
    "title": "嘘,国王在冬眠",
    "url": "./movie-0413.html",
    "cover": "./113.jpg",
    "oneLine": "亿万富翁留下遗嘱:全家去北极圈过冬,谁能活过极夜就继承千亿遗产。",
    "year": "2026",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "冬眠",
      "北欧",
      "阴谋",
      "遗产",
      "觉醒"
    ],
    "genre": "悬疑、奇幻、剧情"
  },
  {
    "id": "0414",
    "title": "审判长",
    "url": "./movie-0414.html",
    "cover": "./114.jpg",
    "oneLine": "一位刚正不阿的审判长,在审理一起铁证如山的杀妻案时,被告突然声称“你才是真凶”,并拿出了录像。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "法庭",
      "反转",
      "死刑犯",
      "司法正义",
      "心理博弈"
    ],
    "genre": "悬疑,犯罪,法律"
  },
  {
    "id": "0415",
    "title": "太阳谷",
    "url": "./movie-0415.html",
    "cover": "./115.jpg",
    "oneLine": "永昼笼罩的废土上,一个被称为“太阳谷”的永夜禁区,藏着人类最后的秘密。",
    "year": "2027",
    "type": "剧集",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "末世",
      "太阳能",
      "阴谋",
      "少年",
      "生存"
    ],
    "genre": "科幻,悬疑,冒险"
  },
  {
    "id": "0416",
    "title": "侏罗纪世界:巨石之战",
    "url": "./movie-0416.html",
    "cover": "./116.jpg",
    "oneLine": "一座神秘岛屿上,一种比霸王龙更古老的巨型恐龙被唤醒,一支探险队必须在绝对的武力面前求生。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "恐龙",
      "动作",
      "巨石强森",
      "冒险",
      "特效大片"
    ],
    "genre": "动作/科幻/冒险"
  },
  {
    "id": "0417",
    "title": "她不知道名字的那些鸟儿",
    "url": "./movie-0417.html",
    "cover": "./117.jpg",
    "oneLine": "一个女人与五个前男友的回忆纠缠在一起,直到一只从未见过的鸟出现在她阳台上。",
    "year": "2017",
    "type": "电影",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "渣男",
      "都市孤独",
      "鸟类隐喻",
      "时间交错",
      "女性心理"
    ],
    "genre": "悬疑,爱情"
  },
  {
    "id": "0418",
    "title": "我知道我的名字叫史蒂芬",
    "url": "./movie-0418.html",
    "cover": "./118.jpg",
    "oneLine": "一个失忆的男人坚信自己是失踪多年的史蒂芬,但当他接近真相时,所谓的“家人们”却都在试图杀他。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "失忆",
      "身份认同",
      "惊悚"
    ],
    "genre": "悬疑/剧情"
  },
  {
    "id": "0419",
    "title": "丽人保镖之马道疑云",
    "url": "./movie-0419.html",
    "cover": "./119.jpg",
    "oneLine": "顶级女保镖伪装成马术师,潜入上流社会赛马俱乐部,调查一宗离奇的种马死亡案。",
    "year": "2021",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "女性保镖",
      "赛马场",
      "黑幕调查",
      "硬核打斗"
    ],
    "genre": "动作/悬疑"
  },
  {
    "id": "0420",
    "title": "乖女唔易做",
    "url": "./movie-0420.html",
    "cover": "./120.jpg",
    "oneLine": "26岁“全职女儿”决定辞职回家照顾退休父母,却发现比上班更累的是伺候两个老顽童。",
    "year": "2023",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "港式喜剧",
      "代际冲突",
      "全职女儿",
      "直播带货",
      "街市风情"
    ],
    "genre": "喜剧、家庭"
  },
  {
    "id": "0421",
    "title": "银行攻防战",
    "url": "./movie-0421.html",
    "cover": "./121.jpg",
    "oneLine": "一伙劫匪劫持了一家银行,但他们的真实目的不是钱,而是银行地下金库里埋藏了60年的秘密。",
    "year": "2025",
    "type": "剧集",
    "region": "瑞典",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "劫持",
      "人质",
      "谈判",
      "密室智斗",
      "北欧冷峻"
    ],
    "genre": "悬疑/惊悚/犯罪"
  },
  {
    "id": "0422",
    "title": "诉讼女王",
    "url": "./movie-0422.html",
    "cover": "./122.jpg",
    "oneLine": "曾经的大公司王牌律师被扫地出门后,专门替外卖骑手和保洁阿姨打官司,手撕无良资本家。",
    "year": "2025",
    "type": "剧集",
    "region": "韩国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "女律师",
      "劳动法",
      "小人物",
      "以弱胜强",
      "爽剧"
    ],
    "genre": "剧情,律政,职场"
  },
  {
    "id": "0423",
    "title": "仇杀病房",
    "url": "./movie-0423.html",
    "cover": "./123.jpg",
    "oneLine": "两个仇人被关进同一间精神病院的高级病房,主治医生告诉他们:只有一个人能活着出院。",
    "year": "2025",
    "type": "电影",
    "region": "香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "医院",
      "精神病",
      "记忆移植",
      "复仇",
      "密闭空间"
    ],
    "genre": "惊悚,悬疑"
  },
  {
    "id": "0424",
    "title": "大西洋城",
    "url": "./movie-0424.html",
    "cover": "./124.jpg",
    "oneLine": "经济衰退的大西洋城,老派黑帮与新生代毒贩的碰撞,像是一场海风中的困兽之斗。",
    "year": "2019",
    "type": "电影",
    "region": "加拿大/法国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "冷峻",
      "帮派",
      "末世感",
      "宿命"
    ],
    "genre": "剧情/犯罪"
  },
  {
    "id": "0425",
    "title": "飙风特警队",
    "url": "./movie-0425.html",
    "cover": "./125.jpg",
    "oneLine": "一群被吊销驾照的问题警察组成地下特警队,用非法赛车的方式追捕罪犯。",
    "year": "2019",
    "type": "电影",
    "region": "韩国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "飙车",
      "兄弟情",
      "热血",
      "喜剧",
      "警匪"
    ],
    "genre": "动作,犯罪"
  },
  {
    "id": "0426",
    "title": "五日惊魂",
    "url": "./movie-0426.html",
    "cover": "./126.jpg",
    "oneLine": "五个被困在封闭商场的人,必须在五日内找到解药,否则体内潜伏的病毒将杀死百万人。",
    "year": "2024",
    "type": "电影",
    "region": "韩国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "密室",
      "倒计时",
      "病毒",
      "政府阴谋",
      "生存"
    ],
    "genre": "悬疑,灾难"
  },
  {
    "id": "0427",
    "title": "尸开杀戒 尘归尘",
    "url": "./movie-0427.html",
    "cover": "./127.jpg",
    "oneLine": "一场盛大的庄园婚礼上,新郎的“遗体告别仪式”意外引来了真正的活死人。",
    "year": "2024",
    "type": "电影",
    "region": "西班牙",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "丧尸",
      "婚礼",
      "血腥",
      "病毒",
      "黑色幽默"
    ],
    "genre": "恐怖,惊悚"
  },
  {
    "id": "0428",
    "title": "乐活家庭",
    "url": "./movie-0428.html",
    "cover": "./128.jpg",
    "oneLine": "信奉“躺平哲学”的网红女儿、创业总失败的“折腾”老爸,再加上空降的AI机器人管家,这个家不消停了。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "情景喜剧",
      "代际沟通",
      "都市",
      "温暖"
    ],
    "genre": "喜剧,家庭"
  },
  {
    "id": "0429",
    "title": "屋中异蛛",
    "url": "./movie-0429.html",
    "cover": "./129.jpg",
    "oneLine": "一栋老旧公寓的住户接连失踪,真相藏在天花板里:一只变异了十代的漏斗网蜘蛛把整栋楼建成了它的垂直巢穴。",
    "year": "2025",
    "type": "电影",
    "region": "澳大利亚",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "密室",
      "怪物",
      "变异",
      "寄生"
    ],
    "genre": "恐怖,惊悚"
  },
  {
    "id": "0430",
    "title": "老爷大过天粤语",
    "url": "./movie-0430.html",
    "cover": "./130.jpg",
    "oneLine": "顽固的退休老裁缝与留学归来的孙女,因为一间旗袍店斗智斗勇。",
    "year": "1999",
    "type": "剧集",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "粤语长片",
      "市井温情",
      "老戏骨飙戏"
    ],
    "genre": "喜剧/家庭"
  },
  {
    "id": "0431",
    "title": "罗宾汉的真实故事",
    "url": "./movie-0431.html",
    "cover": "./131.jpg",
    "oneLine": "史料考证下的罗宾汉并非侠盗,而是一名被贵族灭门的木匠,他的“劫富济贫”其实是一场精心策划的报复。",
    "year": "2022",
    "type": "电影",
    "region": "英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "罗宾汉",
      "纪实",
      "复仇",
      "阶级",
      "解构"
    ],
    "genre": "剧情/历史/动作"
  },
  {
    "id": "0432",
    "title": "校园风暴",
    "url": "./movie-0432.html",
    "cover": "./132.jpg",
    "oneLine": "一所高中发生“网络自杀直播”,死者在最后说“你们都是凶手”,全校251名学生无一人报警。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "校园霸凌",
      "社交媒体",
      "集体谎言",
      "反转",
      "全员恶人"
    ],
    "genre": "悬疑,青春,惊悚"
  },
  {
    "id": "0433",
    "title": "伟大的演员",
    "url": "./movie-0433.html",
    "cover": "./133.jpg",
    "oneLine": "一名龙套演员假扮杀手执行任务,却因演技太好被黑白两道同时盯上。",
    "year": "2018",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "戏中戏",
      "小人物",
      "身份错位",
      "黑色幽默"
    ],
    "genre": "剧情,喜剧,犯罪"
  },
  {
    "id": "0434",
    "title": "乡村之魂",
    "url": "./movie-0434.html",
    "cover": "./134.jpg",
    "oneLine": "一位即将退休的乡村教师,为了不让古老的游牧民歌失传,带着一群不识谱的孩子,用口耳相传的方式录制了一张专辑。",
    "year": "2023",
    "type": "电影",
    "region": "伊朗",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "伊朗电影",
      "传统音乐",
      "乡村教师",
      "文化抗争",
      "诗意"
    ],
    "genre": "剧情,音乐"
  },
  {
    "id": "0435",
    "title": "神剑七式",
    "url": "./movie-0435.html",
    "cover": "./135.jpg",
    "oneLine": "失忆的剑客醒来只会一招剑法,江湖却传言他掌握着失传的七式神剑,所有人都想杀他灭口。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "秘笈",
      "失忆",
      "武林争霸"
    ],
    "genre": "武侠,动作"
  },
  {
    "id": "0436",
    "title": "尖叫皇后第一季",
    "url": "./movie-0436.html",
    "cover": "./136.jpg",
    "oneLine": "华莱士大学姐妹会会长香奈儿·奥柏林,一边应付连环杀手,一边保住自己的社交女王地位,两件事都不能搞砸。",
    "year": "2015",
    "type": "TV Series",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "校园",
      "姐妹会",
      "面具杀手",
      "恶搞"
    ],
    "genre": "喜剧/恐怖/悬疑"
  },
  {
    "id": "0437",
    "title": "接赃",
    "url": "./movie-0437.html",
    "cover": "./137.jpg",
    "oneLine": "一个专帮小偷销赃的古董店老板,某天收到了一个自己三十年前偷过的青花瓷瓶。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "黑吃黑",
      "小人物困局",
      "贼赃拍卖",
      "卧底反转"
    ],
    "genre": "犯罪/悬疑/黑色幽默"
  },
  {
    "id": "0438",
    "title": "冰河世纪:巨蛋恶作剧",
    "url": "./movie-0438.html",
    "cover": "./138.jpg",
    "oneLine": "松鼠 Scrat 意外挖出一枚巨大的恐龙蛋,而蛋妈妈和悲催的蛋贼们集体追杀。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "冰河世纪",
      "续集",
      "松鼠",
      "恐龙蛋",
      "搞笑"
    ],
    "genre": "动画/喜剧/冒险"
  },
  {
    "id": "0439",
    "title": "我是星际国家的恶德领主!",
    "url": "./movie-0439.html",
    "cover": "./139.jpg",
    "oneLine": "社畜穿越成宇宙中的废物领主,本想摆烂等死,却因“过度负责”而被国民奉为“仁君”。",
    "year": "2025",
    "type": "动画剧集",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "穿越",
      "龙傲天",
      "政治讽刺",
      "种田建设",
      "反差萌"
    ],
    "genre": "科幻,冒险,喜剧"
  },
  {
    "id": "0440",
    "title": "月里青山淡如画",
    "url": "./movie-0440.html",
    "cover": "./140.jpg",
    "oneLine": "天才书画修复师与被迫返乡的城市白领,在江南古镇修复一幅残破古画时相爱。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "文物修复",
      "山水画",
      "慢生活"
    ],
    "genre": "爱情/治愈"
  },
  {
    "id": "0441",
    "title": "治疗扑克上瘾",
    "url": "./movie-0441.html",
    "cover": "./141.jpg",
    "oneLine": "扑克成瘾的心理医生为了还债潜入地下赌局,却发现赌局的真正目的,是治疗他这个“病人”。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "赌博",
      "心理治疗",
      "骗中骗",
      "病态赌徒",
      "地下赌场"
    ],
    "genre": "剧情/惊悚"
  },
  {
    "id": "0442",
    "title": "勇敢的心",
    "url": "./movie-0442.html",
    "cover": "./142.jpg",
    "oneLine": "中世纪苏格兰织工目睹爱人被贵族所害,假借骑士之名起义,却揭开了王室血统的惊天秘密。",
    "year": "2026",
    "type": "电影",
    "region": "英国/苏格兰",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "史诗",
      "自由",
      "反抗",
      "冷兵器",
      "民族英雄"
    ],
    "genre": "历史、传记、战争"
  },
  {
    "id": "0443",
    "title": "怪奇验尸官:病害疑云",
    "url": "./movie-0443.html",
    "cover": "./143.jpg",
    "oneLine": "巴黎出现诡异尸体,内部器官布满未知结晶,验尸官发现这竟是一种新型人工病毒。",
    "year": "2024",
    "type": "电影",
    "region": "法国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "法医破案",
      "生化威胁",
      "密闭空间",
      "逻辑推演",
      "病毒恐惧"
    ],
    "genre": "悬疑/惊悚/犯罪"
  },
  {
    "id": "0444",
    "title": "咀对咀",
    "url": "./movie-0444.html",
    "cover": "./144.jpg",
    "oneLine": "两个靠嘴皮子吃饭的街头骗子无意中吞下了黑帮的微型胶卷,只能用接吻来传递情报。",
    "year": "1985",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "许氏兄弟",
      "斗嘴",
      "功夫",
      "市井",
      "无厘头前身"
    ],
    "genre": "喜剧/动作"
  },
  {
    "id": "0445",
    "title": "真田十勇士 真人版",
    "url": "./movie-0445.html",
    "cover": "./145.jpg",
    "oneLine": "德川家康的密探揭开惊天阴谋:幸村麾下十勇士中藏着能够改写历史的未来人。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "忍者",
      "战国",
      "特效大片",
      "群像",
      "颠覆改编"
    ],
    "genre": "动作,历史,奇幻"
  },
  {
    "id": "0446",
    "title": "包裹男人",
    "url": "./movie-0446.html",
    "cover": "./146.jpg",
    "oneLine": "失业快递员被困在货柜车里,手机那头的“神秘人”命令他拆开车里唯一的包裹,否则引爆炸弹。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "密室",
      "独角戏",
      "反转"
    ],
    "genre": "惊悚、犯罪"
  },
  {
    "id": "0447",
    "title": "火鸟的沼泽",
    "url": "./movie-0447.html",
    "cover": "./147.jpg",
    "oneLine": "西伯利亚沼泽边,七名儿童接连失踪,护林员在泥炭层下挖出了一只仍在燃烧的史前火鸟。",
    "year": "2023",
    "type": "电影",
    "region": "俄罗斯",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "斯拉夫神话",
      "泥炭沼泽",
      "失踪儿童",
      "环保寓言"
    ],
    "genre": "剧情/奇幻/悬疑"
  },
  {
    "id": "0448",
    "title": "心琴调音师",
    "url": "./movie-0448.html",
    "cover": "./148.jpg",
    "oneLine": "一位患有人际恐惧症的天才调音师,只能通过聆听钢琴的“心病”来与人沟通,直到他遇到一架失声的百年古钢琴。",
    "year": "2023",
    "type": "电影",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "心理创伤",
      "钢琴调律",
      "治愈",
      "自闭症"
    ],
    "genre": "剧情/音乐"
  },
  {
    "id": "0449",
    "title": "诡盒",
    "url": "./movie-0449.html",
    "cover": "./149.jpg",
    "oneLine": "一个能实现任何愿望的古旧盒子,却让每位拥有者在第七天离奇消失。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "神秘物件",
      "都市传说",
      "心理博弈"
    ],
    "genre": "悬疑,惊悚"
  },
  {
    "id": "0450",
    "title": "跑马地的月光粤语",
    "url": "./movie-0450.html",
    "cover": "./150.jpg",
    "oneLine": "跑马地一家即将拆迁的旧书店里,每晚关门后,书架上的爱情小说角色会活过来讨论作者。",
    "year": "2000",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "跑马地",
      "旧书店",
      "月光传说"
    ],
    "genre": "爱情/剧情/文艺"
  },
  {
    "id": "0451",
    "title": "八廓南街16号",
    "url": "./movie-0451.html",
    "cover": "./1.jpg",
    "oneLine": "拉萨八廓街一家老茶馆的最后一年,来来往往的客人用酥油茶和闲话,拼凑出了一条街的现代史。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "西藏",
      "老茶馆",
      "人文关怀",
      "时代变迁",
      "慢电影"
    ],
    "genre": "剧情/文艺"
  },
  {
    "id": "0452",
    "title": "鲁邦三世:活下来的魔术师",
    "url": "./movie-0452.html",
    "cover": "./2.jpg",
    "oneLine": "鲁邦三世盯上了传说中“活下来的魔术师”的宝藏,却发现那是一场跨越百年的死亡魔术。",
    "year": "2024",
    "type": "动画电影",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "怪盗",
      "魔术",
      "悬疑",
      "喜剧"
    ],
    "genre": "动作,冒险"
  },
  {
    "id": "0453",
    "title": "边境音暴",
    "url": "./movie-0453.html",
    "cover": "./3.jpg",
    "oneLine": "缉毒警察意外发现毒枭用超低频音箱杀人,他必须学会用“声音”战斗,耳朵会流血的那种。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "边境",
      "声音武器",
      "毒枭",
      "DJ",
      "低频炮"
    ],
    "genre": "犯罪、音乐、动作"
  },
  {
    "id": "0454",
    "title": "五月十二月",
    "url": "./movie-0454.html",
    "cover": "./4.jpg",
    "oneLine": "女演员为演好一个和未成年男生发生关系并结婚生子的女人,住进了她家,发现这个家庭的平静比剧本更可怕。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "年龄差婚姻",
      "演员与原型",
      "道德模糊"
    ],
    "genre": "剧情/心理"
  },
  {
    "id": "0455",
    "title": "圣保罗砲艇",
    "url": "./movie-0455.html",
    "cover": "./5.jpg",
    "oneLine": "1920年代,一艘美国内河炮艇被派往亚马逊雨林“保护侨民”,却发现自己成了当地橡胶大亨镇压土著的血腥帮凶。",
    "year": "2027",
    "type": "电影",
    "region": "美国/巴西",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "亚马逊",
      "炮艇外交",
      "丛林战",
      "道德困境"
    ],
    "genre": "动作/战争/冒险"
  },
  {
    "id": "0456",
    "title": "极地恶灵第一季",
    "url": "./movie-0456.html",
    "cover": "./6.jpg",
    "oneLine": "1847年,两艘英国皇家探险船被困北极冰层,船员们遭遇了一只无形的远古恶灵。",
    "year": "2018",
    "type": "剧集",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "极地",
      "探险",
      "怪物",
      "生存",
      "真实改编"
    ],
    "genre": "恐怖,历史,悬疑"
  },
  {
    "id": "0457",
    "title": "北极光",
    "url": "./movie-0457.html",
    "cover": "./7.jpg",
    "oneLine": "极夜降临前,一名气象学家在北极站发现了失踪父亲留下的神秘坐标,指向冰层下的禁忌实验。",
    "year": "2024",
    "type": "电影",
    "region": "挪威/冰岛",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "极地",
      "心理惊悚",
      "家族秘密",
      "女性视角",
      "北欧风光"
    ],
    "genre": "剧情/悬疑"
  },
  {
    "id": "0458",
    "title": "蚁人与黄蜂女",
    "url": "./movie-0458.html",
    "cover": "./8.jpg",
    "oneLine": "斯科特在家软禁期间,不得不再次穿上战衣,与黄蜂女一起闯入量子世界。",
    "year": "2018",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "漫威",
      "量子领域",
      "合家欢"
    ],
    "genre": "动作/科幻/喜剧"
  },
  {
    "id": "0459",
    "title": "雁南飞",
    "url": "./movie-0459.html",
    "cover": "./9.jpg",
    "oneLine": "一对母女在三十年间的四次“南飞”与北归,于最后一次迁徙中揭开了家庭尘封的秘密。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "乡愁",
      "代际和解",
      "迁徙",
      "时代变迁"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "0460",
    "title": "威尔和格蕾丝第五季",
    "url": "./movie-0460.html",
    "cover": "./10.jpg",
    "oneLine": "威尔决定当父亲,格蕾丝开画廊遇危机,杰克和凯伦的荒唐事再升级,引爆新一轮友情地震。",
    "year": "2025",
    "type": "剧集 喜剧、爱情",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "毒舌",
      "都市生活",
      "老友重聚",
      "爆笑互怼"
    ],
    "genre": "情景喜剧、LGBT、友情"
  },
  {
    "id": "0461",
    "title": "蔑视",
    "url": "./movie-0461.html",
    "cover": "./11.jpg",
    "oneLine": "一位中产阶级父亲在全家聚餐时,被失业女婿当众骂了一句“废物”,此后他的人生便开始分崩离析。",
    "year": "2026",
    "type": "电影",
    "region": "法国/意大利",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "阶级",
      "暴力",
      "家庭",
      "社会批判",
      "压抑"
    ],
    "genre": "剧情/惊悚/心理"
  },
  {
    "id": "0462",
    "title": "医生",
    "url": "./movie-0462.html",
    "cover": "./12.jpg",
    "oneLine": "一个车祸毁容的急诊科医生苏醒后,发现自己的身份被人顶替,而凶手就在科室里。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "医疗黑幕",
      "心理博弈",
      "反转"
    ],
    "genre": "剧情/悬疑"
  },
  {
    "id": "0463",
    "title": "金鎗独行侠",
    "url": "./movie-0463.html",
    "cover": "./13.jpg",
    "oneLine": "日据时期台湾,神秘金枪客连杀多名日本高官,却在最后发现真正的叛徒是自己失散的兄长。",
    "year": "1995",
    "type": "电影",
    "region": "中国台湾",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "金枪",
      "独行侠客",
      "复仇与宽恕",
      "日据时期",
      "双枪对决"
    ],
    "genre": "动作,武侠,冒险"
  },
  {
    "id": "0464",
    "title": "科学怪人的复仇",
    "url": "./movie-0464.html",
    "cover": "./14.jpg",
    "oneLine": "被遗弃的合成人实验体在垃圾场苏醒,带着残缺的记忆向制造他的科学家展开精密复仇。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "弗兰肯斯坦",
      "复仇",
      "伦理困境",
      "人体改造",
      "怪物觉醒"
    ],
    "genre": "科幻/恐怖"
  },
  {
    "id": "0465",
    "title": "午后三点的彩虹",
    "url": "./movie-0465.html",
    "cover": "./15.jpg",
    "oneLine": "一个患有严重色盲症的父亲,在确诊绝症后决定为自闭症女儿画出“她能看到的三点的彩虹”。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "自闭症",
      "父女",
      "临终",
      "色彩",
      "救赎"
    ],
    "genre": "剧情、家庭、治愈"
  },
  {
    "id": "0466",
    "title": "对不起,干掉你",
    "url": "./movie-0466.html",
    "cover": "./16.jpg",
    "oneLine": "专业杀手接单去杀目标,结果每次都杀错人,任务完成后对方还总是写信感谢他。",
    "year": "1998",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "杀手",
      "乌龙",
      "兄弟情",
      "港式幽默"
    ],
    "genre": "动作,喜剧,犯罪"
  },
  {
    "id": "0467",
    "title": "猛鬼学生",
    "url": "./movie-0467.html",
    "cover": "./17.jpg",
    "oneLine": "一所升学率极高的贵族学校,秘而不宣的校规第七条:不要对穿旧校服的学生施舍善意。",
    "year": "2025",
    "type": "电视剧",
    "region": "泰国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "校舍怪谈",
      "诅咒",
      "青春"
    ],
    "genre": "恐怖,校园"
  },
  {
    "id": "0468",
    "title": "牺牲之旅",
    "url": "./movie-0468.html",
    "cover": "./18.jpg",
    "oneLine": "女儿死于车祸那天,父亲获得了一个能力:每次死亡都会回到24小时前,但代价是他人寿命。",
    "year": "2018",
    "type": "电影",
    "region": "韩国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "时间循环",
      "父女关系",
      "救赎",
      "生死抉择",
      "催泪"
    ],
    "genre": "剧情/悬疑/奇幻"
  },
  {
    "id": "0469",
    "title": "再见少女团",
    "url": "./movie-0469.html",
    "cover": "./19.jpg",
    "oneLine": "一个地下女团宣布解散,在最后30天里,成员们开始互相揭发当年的霸凌内幕。",
    "year": "2026",
    "type": "剧集",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "偶像",
      "解散",
      "成长",
      "纪录片风格",
      "友情"
    ],
    "genre": "剧情、音乐"
  },
  {
    "id": "0470",
    "title": "模犯生",
    "url": "./movie-0470.html",
    "cover": "./20.jpg",
    "oneLine": "天才学生利用时区漏洞跨国作弊,将一场普通的升学考试变成了精密的犯罪艺术。",
    "year": "2017",
    "type": "电影",
    "region": "泰国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "天才作弊",
      "考场风云",
      "教育体制",
      "贫富差距",
      "智商博弈"
    ],
    "genre": "剧情/犯罪/悬疑/青春"
  },
  {
    "id": "0471",
    "title": "脏话蓝调",
    "url": "./movie-0471.html",
    "cover": "./21.jpg",
    "oneLine": "严重口吃的爵士乐手发现,只有一边骂脏话一边吹萨克斯才能流畅演奏。",
    "year": "2024",
    "type": "电影",
    "region": "英国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "爵士乐",
      "语言治疗",
      "口吃",
      "中年危机"
    ],
    "genre": "音乐/喜剧/剧情"
  },
  {
    "id": "0472",
    "title": "月球探秘",
    "url": "./movie-0472.html",
    "cover": "./22.jpg",
    "oneLine": "中国玉兔号月球车传回异常数据,一支国际宇航员小组前往探秘,发现月球背面并非死寂。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "科幻",
      "月球",
      "探险",
      "未知生物",
      "灾难"
    ],
    "genre": "科幻"
  },
  {
    "id": "0473",
    "title": "趣事",
    "url": "./movie-0473.html",
    "cover": "./23.jpg",
    "oneLine": "父亲葬礼上,兄妹四人为了争一把能“听见亡父遗言”的钥匙,闹出一连串荒诞笑话。",
    "year": "2023",
    "type": "电影",
    "region": "伊朗",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "黑色幽默",
      "葬礼",
      "谎言",
      "兄妹",
      "传统"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "0474",
    "title": "暗黑录影带",
    "url": "./movie-0474.html",
    "cover": "./24.jpg",
    "oneLine": "一名网路主播买了一箱旧录影带,却发现自己已被二十年前的凶手“直播”锁定。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "拾得录像",
      "伪纪录片",
      "邪教",
      "时间循环"
    ],
    "genre": "恐怖/悬疑"
  },
  {
    "id": "0475",
    "title": "咕噜咕噜魔法阵 剧场版",
    "url": "./movie-0475.html",
    "cover": "./25.jpg",
    "oneLine": "尼克和柯柯丽接到新任务:用“咕噜咕噜魔法”阻止从游戏机里跑出来的像素怪兽军团。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "魔法",
      "勇者",
      "怀旧",
      "搞笑"
    ],
    "genre": "动画/冒险/喜剧"
  },
  {
    "id": "0476",
    "title": "五女餐厅",
    "url": "./movie-0476.html",
    "cover": "./26.jpg",
    "oneLine": "五位不同年龄、不同遭遇的女性在东京合开了一家只在深夜营业的餐厅,用料理治愈每一位孤独的食客,也治愈自己。",
    "year": "2023",
    "type": "剧集",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "治愈",
      "女性群像",
      "料理",
      "人生百态"
    ],
    "genre": "剧情/美食/生活"
  },
  {
    "id": "0477",
    "title": "金刚经",
    "url": "./movie-0477.html",
    "cover": "./27.jpg",
    "oneLine": "两个杀手在前往深山寻找仇家的途中,为一个村妇背诵《金刚经》,却无意间揭开了一个关于赎罪的闭环。",
    "year": "2012",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "作者电影",
      "文艺",
      "罪案",
      "轮回",
      "方言"
    ],
    "genre": "剧情/短片/悬疑"
  },
  {
    "id": "0478",
    "title": "大象林旺之一炮成名",
    "url": "./movie-0478.html",
    "cover": "./28.jpg",
    "oneLine": "一头缅甸小象被征入远征军,在炮火中长成英雄,也懂得了友情的重量。",
    "year": "2022",
    "type": "电影/动画",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "大象",
      "二战",
      "成长",
      "真实故事",
      "感人"
    ],
    "genre": "动画/家庭/历史"
  },
  {
    "id": "0479",
    "title": "致埃文·汉森",
    "url": "./movie-0479.html",
    "cover": "./29.jpg",
    "oneLine": "一个患有社交焦虑症的高中生,因为一封谎言的信,意外成为了一个自杀同学家庭的精神支柱。",
    "year": "2021",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "音乐剧改编",
      "社交焦虑",
      "谎言与救赎",
      "青少年自杀",
      "书信"
    ],
    "genre": "剧情/音乐/青春"
  },
  {
    "id": "0480",
    "title": "凶案:洛杉矶篇",
    "url": "./movie-0480.html",
    "cover": "./30.jpg",
    "oneLine": "洛杉矶地下尸骸现世,一个停职警探与一个追寻真相的记者,被迫联手踏入无尽的罪恶迷宫。",
    "year": "2026",
    "type": "剧集",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "硬核侦探",
      "多线叙事",
      "都市黑暗",
      "连环杀手"
    ],
    "genre": "犯罪、悬疑、惊悚"
  },
  {
    "id": "0481",
    "title": "非正常动物研究中心",
    "url": "./movie-0481.html",
    "cover": "./31.jpg",
    "oneLine": "一个不得志的动物学家发现,实验室里的动物们正在策划一场推翻人类的“毛茸茸革命”。",
    "year": "2024",
    "type": "电视剧",
    "region": "英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "荒诞科学",
      "会说话的动物",
      "黑色幽默",
      "实验室",
      "末日危机"
    ],
    "genre": "喜剧/科幻/悬疑"
  },
  {
    "id": "0482",
    "title": "朋友圈",
    "url": "./movie-0482.html",
    "cover": "./32.jpg",
    "oneLine": "五个大学闺蜜在朋友圈的一场恶作剧点赞,竟意外引发出一连串的死亡事件。",
    "year": "2023",
    "type": "剧集",
    "region": "中国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "社交网络",
      "悬疑",
      "谋杀",
      "闺蜜撕逼",
      "人性黑暗"
    ],
    "genre": "剧情,悬疑"
  },
  {
    "id": "0483",
    "title": "终归大海",
    "url": "./movie-0483.html",
    "cover": "./33.jpg",
    "oneLine": "东日本大地震十年后,姐姐假装成幸存下来的妹妹,替她活完了高中、大学和恋爱,直到妹妹的幽灵出现在海边。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "海啸遗孤",
      "姐妹",
      "记忆",
      "静默叙事"
    ],
    "genre": "剧情"
  },
  {
    "id": "0484",
    "title": "非常小特务",
    "url": "./movie-0484.html",
    "cover": "./34.jpg",
    "oneLine": "全球顶尖特工被AI黑掉后,只有两个被开除的12岁军校生能阻止第三次世界大战。",
    "year": "2027",
    "type": "电影",
    "region": "英国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "儿童间谍",
      "反套路",
      "高科技",
      "英式幽默"
    ],
    "genre": "动作/喜剧/家庭"
  },
  {
    "id": "0485",
    "title": "女性人体美",
    "url": "./movie-0485.html",
    "cover": "./35.jpg",
    "oneLine": "一位女导演从文艺复兴名画出发,追踪“完美女性身体”是如何被男性权力一笔一笔画出来的。",
    "year": "2025",
    "type": "电影",
    "region": "意大利/法国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "女性凝视",
      "艺术史",
      "身体政治",
      "散文电影"
    ],
    "genre": "纪录/哲学"
  },
  {
    "id": "0486",
    "title": "许海峰的枪",
    "url": "./movie-0486.html",
    "cover": "./36.jpg",
    "oneLine": "从供销社售货员到奥运冠军,一枪打破中国奥运金牌零的纪录。",
    "year": "2021",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "奥运首金",
      "射击",
      "励志"
    ],
    "genre": "剧情,传记,运动"
  },
  {
    "id": "0487",
    "title": "花红花火",
    "url": "./movie-0487.html",
    "cover": "./37.jpg",
    "oneLine": "民国乱世,一个被卖入酒坊的女子凭手艺酿酒,也凭胆识酿出了一个家族的命运。",
    "year": "2015",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "女性",
      "酿酒",
      "家族",
      "战争"
    ],
    "genre": "年代/传奇"
  },
  {
    "id": "0488",
    "title": "伴娘进行曲",
    "url": "./movie-0488.html",
    "cover": "./38.jpg",
    "oneLine": "婚礼前三天,新娘跑了,五个伴娘决定自己去度蜜月。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "婚礼",
      "伴娘团",
      "闺蜜撕逼",
      "成长"
    ],
    "genre": "喜剧"
  },
  {
    "id": "0489",
    "title": "蜘蛛女",
    "url": "./movie-0489.html",
    "cover": "./39.jpg",
    "oneLine": "一名神秘女子潜入黑帮内部,用美色与蛛网般的计谋,将仇家逐一绞杀。",
    "year": "1993",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "女杀手",
      "黑帮复仇",
      "蛇蝎美人",
      "枪战"
    ],
    "genre": "动作/犯罪/惊悚"
  },
  {
    "id": "0490",
    "title": "龙虎铁金刚",
    "url": "./movie-0490.html",
    "cover": "./40.jpg",
    "oneLine": "警队内部的“清理者”发现,他要暗杀的头号叛徒,竟是当年替自己挡子弹的救命恩人。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "警匪",
      "兄弟情",
      "枪战",
      "港风",
      "硬核"
    ],
    "genre": "动作/犯罪"
  },
  {
    "id": "0491",
    "title": "生化危机:惩罚",
    "url": "./movie-0491.html",
    "cover": "./41.jpg",
    "oneLine": "爱丽丝被关进保护伞公司地下模拟监狱,每次逃脱都发现之前的记忆全是谎言。",
    "year": "2012",
    "type": "电影",
    "region": "美国/德国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "丧尸",
      "保护伞公司",
      "女杀手"
    ],
    "genre": "动作/科幻/恐怖"
  },
  {
    "id": "0492",
    "title": "女演员原田久子",
    "url": "./movie-0492.html",
    "cover": "./42.jpg",
    "oneLine": "当红女星突然失踪,一部关于她的纪录片开始拍摄,却意外揭开了她刻意隐藏的人生。",
    "year": "2015",
    "type": "电影",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "演艺圈",
      "失踪",
      "虚实交织",
      "纪录片风格",
      "女性"
    ],
    "genre": "剧情,传记,悬疑"
  },
  {
    "id": "0493",
    "title": "第十圈",
    "url": "./movie-0493.html",
    "cover": "./43.jpg",
    "oneLine": "九层地狱之后,但丁未曾写下的“第十圈”,是让罪人反复观看自己最幸福时刻的录像。",
    "year": "2024",
    "type": "剧集",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "平行宇宙",
      "道德实验",
      "高概念",
      "暗黑风"
    ],
    "genre": "科幻/悬疑/剧情"
  },
  {
    "id": "0494",
    "title": "七人的复活",
    "url": "./movie-0494.html",
    "cover": "./44.jpg",
    "oneLine": "七个罪孽深重的人在一个密闭空间醒来,每人有七次复活机会,最后一次死亡即是终结。",
    "year": "2024",
    "type": "剧集",
    "region": "韩国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "重生",
      "复仇",
      "七宗罪",
      "密室逃脱",
      "审判"
    ],
    "genre": "悬疑,奇幻,惊悚"
  },
  {
    "id": "0495",
    "title": "分裂的天空",
    "url": "./movie-0495.html",
    "cover": "./45.jpg",
    "oneLine": "1961年柏林墙竖起当晚,一对恋人被强行分开,第二天他们发现自己活在了两个不同意识形态的平行柏林。",
    "year": "2021",
    "type": "电影",
    "region": "德国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "冷战",
      "平行世界",
      "抉择"
    ],
    "genre": "剧情,科幻,爱情"
  },
  {
    "id": "0496",
    "title": "政变53",
    "url": "./movie-0496.html",
    "cover": "./46.jpg",
    "oneLine": "代号“53”的绝密政变计划曝光后,总统贴身保镖发现参与政变的53人名单上,第一个名字是总统本人。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "政变",
      "青瓦台",
      "夺权",
      "阴谋"
    ],
    "genre": "动作/惊悚/政治"
  },
  {
    "id": "0497",
    "title": "山菊花",
    "url": "./movie-0497.html",
    "cover": "./47.jpg",
    "oneLine": "上世纪九十年代,大别山深处一个不识字的农妇,为了让女儿读书,赤脚走遍十里八乡收购山菊花换钱。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "农村",
      "女性",
      "坚韧",
      "诗意"
    ],
    "genre": "剧情,家庭,文艺"
  },
  {
    "id": "0498",
    "title": "寄身100天",
    "url": "./movie-0498.html",
    "cover": "./48.jpg",
    "oneLine": "她获得一具新身体,却只剩100天寿命,而原主人的秘密正将她的灵魂一寸寸撕裂。",
    "year": "2024",
    "type": "剧集",
    "region": "泰国/中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "灵魂寄居",
      "校园",
      "青春",
      "秘密",
      "倒计时"
    ],
    "genre": "悬疑/奇幻"
  },
  {
    "id": "0499",
    "title": "女人街,再见了 粤语",
    "url": "./movie-0499.html",
    "cover": "./49.jpg",
    "oneLine": "旺角女人街清拆前最后七天,五个小贩档主各自上演着告别与重生的故事。",
    "year": "2023",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "香港",
      "市井",
      "拆迁",
      "怀旧",
      "小人物"
    ],
    "genre": "剧情文艺"
  },
  {
    "id": "0500",
    "title": "三次元女友",
    "url": "./movie-0500.html",
    "cover": "./50.jpg",
    "oneLine": "一个只爱纸片人的资深宅男,被父母逼着和一名现充女“契约恋爱”,却意外动了真心。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "二次元",
      "恋爱",
      "反差萌",
      "校园",
      "搞笑"
    ],
    "genre": "喜剧/爱情"
  },
  {
    "id": "0501",
    "title": "守护解放西第三季",
    "url": "./movie-0501.html",
    "cover": "./51.jpg",
    "oneLine": "镜头再次对准长沙解放西,这一次,民警们开始处理元宇宙里的第一起虚拟骚扰案。",
    "year": "2024",
    "type": "纪录片/警务纪实",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "派出所",
      "长沙",
      "真实",
      "案件",
      "警民"
    ],
    "genre": "纪实,真人秀,社会"
  },
  {
    "id": "0502",
    "title": "九死一省",
    "url": "./movie-0502.html",
    "cover": "./52.jpg",
    "oneLine": "九个互相不认识的陌生人醒来后发现被锁在一间寺庙里,神像开口说:只有一个人能活着出去。",
    "year": "2023",
    "type": "电影",
    "region": "中国台湾",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "邪教",
      "密室",
      "心理博弈",
      "限时"
    ],
    "genre": "悬疑/犯罪/惊悚"
  },
  {
    "id": "0503",
    "title": "幸福来敲门2012",
    "url": "./movie-0503.html",
    "cover": "./53.jpg",
    "oneLine": "2012年玛雅预言前夕,一对决裂十年的父子,为了“一起死”而踏上了寻亲之旅。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "末日",
      "亲情",
      "误解",
      "和解",
      "温情"
    ],
    "genre": "剧情家庭"
  },
  {
    "id": "0504",
    "title": "说出你的秘密",
    "url": "./movie-0504.html",
    "cover": "./54.jpg",
    "oneLine": "七个陌生人参与一档高额奖金真人秀,每坦白一个秘密,就能获得十万,而秘密被公开者出局。",
    "year": "2024",
    "type": "综艺/电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "心理游戏",
      "密室",
      "社交实验",
      "反转"
    ],
    "genre": "悬疑/真人秀/剧情"
  },
  {
    "id": "0505",
    "title": "深夜食堂2017",
    "url": "./movie-0505.html",
    "cover": "./55.jpg",
    "oneLine": "午夜十二点开张的小饭馆里,一道菜就是一个普通中国人的人生切片。",
    "year": "2017",
    "type": "剧集",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "美食",
      "治愈",
      "市井",
      "单元故事",
      "翻拍"
    ],
    "genre": "剧情/生活"
  },
  {
    "id": "0506",
    "title": "金银鼓",
    "url": "./movie-0506.html",
    "cover": "./56.jpg",
    "oneLine": "江湖传言集齐金银双鼓可召唤神龙,当所有人为此厮杀时,铸鼓老人却道出真相:那是两口棺材。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "夺宝",
      "江湖",
      "奇门兵器",
      "反转"
    ],
    "genre": "武侠,悬疑"
  },
  {
    "id": "0507",
    "title": "1883",
    "url": "./movie-0507.html",
    "cover": "./57.jpg",
    "oneLine": "1883年,一群德国移民和一对前南方军父女,沿着俄勒冈小道西行,他们要对抗的不是匪徒,而是大地本身。",
    "year": "2024",
    "type": "电视剧",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "开拓者",
      "移民",
      "艰难",
      "历史"
    ],
    "genre": "西部,剧情"
  },
  {
    "id": "0508",
    "title": "疯疯癫癫的阿兹洛",
    "url": "./movie-0508.html",
    "cover": "./58.jpg",
    "oneLine": "一个被精神病院开除的病人,开着拖拉机横穿意大利,遇见了各种怪人。",
    "year": "1978",
    "type": "电影",
    "region": "意大利",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "荒诞",
      "讽刺",
      "边缘人",
      "公路",
      "寓言"
    ],
    "genre": "喜剧,奇幻,剧情"
  },
  {
    "id": "0509",
    "title": "脱口秀大会第五季",
    "url": "./movie-0509.html",
    "cover": "./59.jpg",
    "oneLine": "来自各行各业的50名脱口秀新人同台竞演,冠军将获得“年度嘴替”称号,但有人为了赢,开始“偷”别人的苦难经历讲成段子。",
    "year": "2024",
    "type": "综艺",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "竞演",
      "吐槽",
      "素人"
    ],
    "genre": "喜剧/脱口秀"
  },
  {
    "id": "0510",
    "title": "孔雀南飞",
    "url": "./movie-0510.html",
    "cover": "./60.jpg",
    "oneLine": "七十年代西双版纳,上海知青与傣族孔雀王子相恋,却在返城潮中被迫分离,五十年后她带孙女归来寻找墓地。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "孔雀舞",
      "傣族",
      "下乡",
      "知青",
      "时代伤痕"
    ],
    "genre": "剧情,爱情,历史"
  },
  {
    "id": "0511",
    "title": "哥本哈根爱的故事",
    "url": "./movie-0511.html",
    "cover": "./61.jpg",
    "oneLine": "癌症晚期的女画家与失意的音乐家在哥本哈根一夜骑行,天亮后她将接受安乐死。",
    "year": "2020",
    "type": "电影",
    "region": "丹麦",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "北欧",
      "邂逅",
      "一夜情",
      "生命倒计时",
      "自行车"
    ],
    "genre": "剧情/爱情/文艺"
  },
  {
    "id": "0512",
    "title": "最美丽的小事",
    "url": "./movie-0512.html",
    "cover": "./62.jpg",
    "oneLine": "一个酗酒成性的问题女人,被母亲遗嘱委托运营一家“代办小事”的店铺,治愈别人的同时治愈自己。",
    "year": "2023",
    "type": "电影",
    "region": "英国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "女性",
      "酗酒",
      "母女",
      "治愈系"
    ],
    "genre": "剧情,家庭,治愈"
  },
  {
    "id": "0513",
    "title": "银河女战士",
    "url": "./movie-0513.html",
    "cover": "./63.jpg",
    "oneLine": "公元2800年,一支全女性精锐小队驾驶变形机甲,守护银河系最后一座人类前哨站。",
    "year": "1985",
    "type": "动画剧集",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "太空歌剧",
      "女性主角",
      "机甲",
      "星际战争",
      "经典"
    ],
    "genre": "科幻,动作,冒险"
  },
  {
    "id": "0514",
    "title": "夜猫子",
    "url": "./movie-0514.html",
    "cover": "./64.jpg",
    "oneLine": "一个重度失眠的私家侦探,在每一个不眠之夜用望远镜偷窥邻居,却意外目睹了四起精心伪装的“意外死亡”。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "失眠",
      "偷窥",
      "都市病",
      "低饱和度",
      "心理博弈"
    ],
    "genre": "悬疑,犯罪,黑色电影"
  },
  {
    "id": "0515",
    "title": "天堂春梦",
    "url": "./movie-0515.html",
    "cover": "./65.jpg",
    "oneLine": "失忆男子靠“梦境录像带”寻找爱人,却发现自己其实是被植入虚假记忆的谋杀嫌疑犯。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "梦境",
      "科幻",
      "记忆",
      "反转",
      "虐恋"
    ],
    "genre": "爱情,悬疑"
  },
  {
    "id": "0516",
    "title": "柏林1936",
    "url": "./movie-0516.html",
    "cover": "./66.jpg",
    "oneLine": "纳粹阴影下的柏林奥运会,一个犹太女孩为生存伪装成雅利安运动员。",
    "year": "2009",
    "type": "电影",
    "region": "德国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "纳粹时期",
      "奥运会",
      "压抑氛围",
      "人性抉择"
    ],
    "genre": "历史"
  },
  {
    "id": "0517",
    "title": "八田与一:嘉南大圳之父",
    "url": "./movie-0517.html",
    "cover": "./67.jpg",
    "oneLine": "日本水利工程师八田与一在台湾倾注三十年心血建造嘉南大圳,最终让荒漠变良田,也让自己被这片土地记住。",
    "year": "2008",
    "type": "电影",
    "region": "日本/中国台湾",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "水利工程",
      "殖民时期",
      "台日情结"
    ],
    "genre": "历史/传记"
  },
  {
    "id": "0518",
    "title": "跨越世纪的情书",
    "url": "./movie-0518.html",
    "cover": "./68.jpg",
    "oneLine": "一封写于20世纪50年代的信,跨越70年才送到对方手中,而收信人已是白发苍苍的老人。",
    "year": "2021",
    "type": "电影",
    "region": "中国大陆/俄罗斯",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "异国恋",
      "世纪长信",
      "中俄友谊",
      "时代洪流",
      "浪漫史诗"
    ],
    "genre": "爱情/历史/剧情"
  },
  {
    "id": "0519",
    "title": "天元突破红莲螺岩",
    "url": "./movie-0519.html",
    "cover": "./69.jpg",
    "oneLine": "地下少年意外获得小型钻头机甲,从突破天花板开始一路战斗到宇宙尽头。",
    "year": "2007",
    "type": "TV剧集",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "机甲",
      "钻头",
      "反抗",
      "超银河",
      "螺旋力"
    ],
    "genre": "科幻,动作,热血"
  },
  {
    "id": "0520",
    "title": "迷河",
    "url": "./movie-0520.html",
    "cover": "./70.jpg",
    "oneLine": "小镇边上的迷河,每天都会倒映出不同时空的画面,有人看到了自己失踪的童年。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "河流",
      "失踪",
      "小镇秘密"
    ],
    "genre": "悬疑,奇幻,冒险"
  },
  {
    "id": "0521",
    "title": "情欲纽约",
    "url": "./movie-0521.html",
    "cover": "./71.jpg",
    "oneLine": "四个陌生人在纽约用交友软件约陌生人,却约到了彼此的前任、现任和未来。",
    "year": "2024",
    "type": "电视剧",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "多角恋",
      "纽约",
      "欲望"
    ],
    "genre": "爱情/剧情/18+"
  },
  {
    "id": "0522",
    "title": "忧郁的物怪庵第二季",
    "url": "./movie-0522.html",
    "cover": "./72.jpg",
    "oneLine": "被迫继承物怪庵的高中生芦屋花绘,与阴险的庵主安倍晴斋继续周旋于人与妖怪的执念之间。",
    "year": "2019",
    "type": "动画/剧集",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "妖怪",
      "除妖",
      "双男主",
      "治愈",
      "隐世"
    ],
    "genre": "奇幻/治愈/神魔"
  },
  {
    "id": "0523",
    "title": "诺斯特拉达姆士的预言",
    "url": "./movie-0523.html",
    "cover": "./73.jpg",
    "oneLine": "一个符号学家发现诺斯特拉达姆士的四行诗不是预言未来,而是记录一个已经循环了五百年的时间线。",
    "year": "2026",
    "type": "电影",
    "region": "法国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "预言",
      "符号学",
      "时间循环"
    ],
    "genre": "悬疑,奇幻,历史"
  },
  {
    "id": "0524",
    "title": "笑盗江湖",
    "url": "./movie-0524.html",
    "cover": "./74.jpg",
    "oneLine": "江湖第一女飞贼与京城最“衰”捕快被迫合作,去偷一个号称“能笑死人的魔盒”。",
    "year": "2020",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "女飞贼",
      "傻捕快",
      "乌龙破案"
    ],
    "genre": "喜剧,动作,古装"
  },
  {
    "id": "0525",
    "title": "出租天使",
    "url": "./movie-0525.html",
    "cover": "./75.jpg",
    "oneLine": "男主角连续三年租了同一个女友,却发现她有十二种不同人格,每一个都是真实存在的失踪女性。",
    "year": "2024",
    "type": "剧集",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "租赁女友",
      "人格分裂",
      "伦理",
      "惊悚反转"
    ],
    "genre": "悬疑,爱情"
  },
  {
    "id": "0526",
    "title": "天赐的声音第三季",
    "url": "./movie-0526.html",
    "cover": "./76.jpg",
    "oneLine": "音乐合伙人之间极限拉扯,乐评人犀利毒舌,这一季留下了无数封神改编舞台。",
    "year": "2022",
    "type": "综艺",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "翻唱",
      "乐评人争议",
      "胡彦斌",
      "张韶涵"
    ],
    "genre": "音乐,真人秀"
  },
  {
    "id": "0527",
    "title": "灰体",
    "url": "./movie-0527.html",
    "cover": "./77.jpg",
    "oneLine": "死刑犯被强制意识上传至“灰体”服务器,以虚拟形态无限次执行死刑。",
    "year": "2024",
    "type": "剧集",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "复制人",
      "意识上传",
      "伦理"
    ],
    "genre": "科幻,悬疑"
  },
  {
    "id": "0528",
    "title": "便利店故事",
    "url": "./movie-0528.html",
    "cover": "./78.jpg",
    "oneLine": "深夜便利店遭遇持枪抢劫,店员、小偷、外卖员和女高中生被困店内,随着时间推移,他们发现彼此的秘密交织在一起。",
    "year": "2022",
    "type": "电影",
    "region": "韩国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "便利店",
      "群像",
      "温情",
      "反转"
    ],
    "genre": "剧情/黑色幽默"
  },
  {
    "id": "0529",
    "title": "天 天和街浪子",
    "url": "./movie-0529.html",
    "cover": "./79.jpg",
    "oneLine": "落魄的前麻将天才沦落到街头,被昔日对手用一局麻将唤回了求胜心。",
    "year": "2022",
    "type": "剧集",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "麻将",
      "赌博",
      "中年危机",
      "逆袭"
    ],
    "genre": "剧情,竞技"
  },
  {
    "id": "0530",
    "title": "巨牛",
    "url": "./movie-0530.html",
    "cover": "./80.jpg",
    "oneLine": "东海县一头吃了核废料的牛变异成百米巨兽,村民为了保护它躲避军队追杀,踏上了跨越三省的大逃亡。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "怪兽",
      "特效",
      "农村",
      "黑色幽默"
    ],
    "genre": "奇幻,冒险,动作"
  },
  {
    "id": "0531",
    "title": "外科风云",
    "url": "./movie-0531.html",
    "cover": "./81.jpg",
    "oneLine": "一位背负着秘密过往的天才外科医生空降仁合医院,却发现30年前导致母亲自杀的医疗悬案,与现医院高层息息相关。",
    "year": "2017",
    "type": "电视剧 (44集)",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "医院风云",
      "医疗事故",
      "职场斗争"
    ],
    "genre": "剧情,医疗,爱情"
  },
  {
    "id": "0532",
    "title": "正午迷情",
    "url": "./movie-0532.html",
    "cover": "./82.jpg",
    "oneLine": "一名建筑师在翻修南法老宅时,发现墙中藏着妻子失踪前写下的情书。",
    "year": "2025",
    "type": "电影",
    "region": "法国/意大利",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "婚外情",
      "别墅",
      "回忆杀",
      "双时间线",
      "谎言迷宫"
    ],
    "genre": "悬疑/爱情"
  },
  {
    "id": "0533",
    "title": "弗里斯基",
    "url": "./movie-0533.html",
    "cover": "./83.jpg",
    "oneLine": "1990年柏林墙倒塌夜,一名东德秘密警察发现自己的线人情人与正要逃跑的“她”竟是同一个人,而且“她”刚做了性别重置手术。",
    "year": "2021",
    "type": "电影",
    "region": "德国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "柏林",
      "冷战",
      "变身手术",
      "身份认同"
    ],
    "genre": "剧情/同性"
  },
  {
    "id": "0534",
    "title": "梅兰芳",
    "url": "./movie-0534.html",
    "cover": "./84.jpg",
    "oneLine": "影片聚焦梅兰芳1937至1945年抗战期间蓄须明志、拒绝为侵略者演出的八年艰难岁月。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "京剧大师",
      "抗战气节",
      "艺术与时代"
    ],
    "genre": "传记,剧情,历史"
  },
  {
    "id": "0535",
    "title": "强龙压境",
    "url": "./movie-0535.html",
    "cover": "./85.jpg",
    "oneLine": "一名退役特种兵为了寻找失踪的妹妹,单枪匹马闯入墨西哥贩毒集团的堡垒。",
    "year": "2019",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "黑帮",
      "卧底",
      "硬汉",
      "枪战"
    ],
    "genre": "动作,犯罪,惊悚"
  },
  {
    "id": "0536",
    "title": "最后的使途",
    "url": "./movie-0536.html",
    "cover": "./86.jpg",
    "oneLine": "1940年,一名日本外交官违背东京命令,在立陶宛夜以继日签发过境签证,拯救了六千犹太人。",
    "year": "2021",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "二战",
      "外交官",
      "签证",
      "人性"
    ],
    "genre": "历史/战争/剧情"
  },
  {
    "id": "0537",
    "title": "岁岁有余年",
    "url": "./movie-0537.html",
    "cover": "./87.jpg",
    "oneLine": "现代米其林大厨穿越成古代穷村寡妇,带着全村的“老弱病残”靠做年夜饭发家致富。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "穿越",
      "种田",
      "美食",
      "经商"
    ],
    "genre": "古装,喜剧"
  },
  {
    "id": "0538",
    "title": "偷渡金山",
    "url": "./movie-0538.html",
    "cover": "./88.jpg",
    "oneLine": "为了还债,几个中国人铤而走险偷渡去美国,却在“金山”脚下坠入了更深的黑暗。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆/美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "偷渡",
      "美国梦",
      "黑工",
      "冒险"
    ],
    "genre": "犯罪,剧情,历史"
  },
  {
    "id": "0539",
    "title": "台妹向前冲",
    "url": "./movie-0539.html",
    "cover": "./89.jpg",
    "oneLine": "高雄一个庙会跳官将首的高中女生,阴差阳错进了贵族学校的啦啦队,要用台客舞步打进全国决赛。",
    "year": "2025",
    "type": "电影",
    "region": "中国台湾",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "啦啦队",
      "热血",
      "校园",
      "草根",
      "逆袭"
    ],
    "genre": "喜剧/青春/运动"
  },
  {
    "id": "0540",
    "title": "沔州烽火",
    "url": "./movie-0540.html",
    "cover": "./90.jpg",
    "oneLine": "南宋末年,沔州守将在一个月内以一城之力拖住十万金兵,为长江防线争取生机。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "南宋抗金",
      "地域忠魂",
      "冷兵器战争"
    ],
    "genre": "历史、战争"
  },
  {
    "id": "0541",
    "title": "想见玛莉琳",
    "url": "./movie-0541.html",
    "cover": "./91.jpg",
    "oneLine": "患有阿尔茨海默的母亲坚信自己是梦露转世,儿子只得开车陪她去找“肯尼迪”。",
    "year": "2025",
    "type": "电影",
    "region": "法国/比利时",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "阿尔茨海默",
      "公路片",
      "和解"
    ],
    "genre": "剧情/家庭/喜剧"
  },
  {
    "id": "0542",
    "title": "小子行大运",
    "url": "./movie-0542.html",
    "cover": "./92.jpg",
    "oneLine": "三个废柴青年捡到一具尸体,发现其胃中藏有一张中奖三千万的赛马彩票,于是开始了一场啼笑皆非的“验尸取票”行动。",
    "year": "1987",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "港式喜剧",
      "草根逆袭",
      "赌片变奏",
      "福星系列"
    ],
    "genre": "喜剧"
  },
  {
    "id": "0543",
    "title": "尤莉亚老师的红线",
    "url": "./movie-0543.html",
    "cover": "./93.jpg",
    "oneLine": "温柔的小学老师尤莉亚,在一场意外后发现自己身上连接着三条不同的“红线”。",
    "year": "2023",
    "type": "电视剧",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "家庭秘密",
      "非亲缘关系",
      "治愈"
    ],
    "genre": "剧情、家庭、爱情"
  },
  {
    "id": "0544",
    "title": "云曙碧",
    "url": "./movie-0544.html",
    "cover": "./94.jpg",
    "oneLine": "纪录片式地展现了原内蒙古自治区红十字会会长云曙碧,从革命战士到慈善家的无悔人生。",
    "year": "2013",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "人物传记",
      "奉献",
      "革命",
      "和平年代"
    ],
    "genre": "剧情/传记"
  },
  {
    "id": "0545",
    "title": "亡者之妻",
    "url": "./movie-0545.html",
    "cover": "./95.jpg",
    "oneLine": "葬礼当晚,死去丈夫的脚步声在阁楼响起,而警察说那是幻觉。",
    "year": "2024",
    "type": "电影",
    "region": "西班牙",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "哥特",
      "反转",
      "复仇",
      "心理"
    ],
    "genre": "惊悚,悬疑,剧情"
  },
  {
    "id": "0546",
    "title": "我唾弃你的坟墓3",
    "url": "./movie-0546.html",
    "cover": "./96.jpg",
    "oneLine": "幸存下来的女作家写出了畅销复仇小说,却引来了原版施暴者的父亲——一个变态的连环杀手。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "血腥暴力",
      "复仇女神",
      "限制级",
      "B级片"
    ],
    "genre": "恐怖、惊悚、犯罪"
  },
  {
    "id": "0547",
    "title": "生活启示录",
    "url": "./movie-0547.html",
    "cover": "./97.jpg",
    "oneLine": "上海一条老弄堂里,三个破碎家庭拼凑成一个“临时大家庭”,他们共用厨房、厕所和WiFi,也共享眼泪与笑声。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "重组家庭",
      "邻里关系",
      "烟火气"
    ],
    "genre": "家庭/治愈/现实题材"
  },
  {
    "id": "0548",
    "title": "废青乐队死唔去",
    "url": "./movie-0548.html",
    "cover": "./98.jpg",
    "oneLine": "四个被社会定义为“废青”的失业青年组建了乐队,发现只有在濒死体验的幻觉中,他们才能创作出真正的神曲。",
    "year": "2023",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "摇滚",
      "励志",
      "底层"
    ],
    "genre": "剧情/音乐"
  },
  {
    "id": "0549",
    "title": "老妈乱入夏令营",
    "url": "./movie-0549.html",
    "cover": "./99.jpg",
    "oneLine": "为了让沉迷游戏的宅男儿子走出房间,单亲妈妈伪装成男学员混入了荒野夏令营。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "换位思考",
      "中年危机",
      "爆笑",
      "代际沟通"
    ],
    "genre": "喜剧/家庭"
  },
  {
    "id": "0550",
    "title": "我爱嘉宝",
    "url": "./movie-0550.html",
    "cover": "./100.jpg",
    "oneLine": "一个死忠影迷花了二十年寻找隐退的嘉宝,最后发现她一直住在自己隔壁。",
    "year": "2005",
    "type": "电影",
    "region": "美国/瑞典",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "葛丽泰·嘉宝",
      "影迷",
      "孤独"
    ],
    "genre": "传记/剧情"
  },
  {
    "id": "0551",
    "title": "媒人",
    "url": "./movie-0551.html",
    "cover": "./101.jpg",
    "oneLine": "顶级婚介所王牌媒人,用大数据匹配了999对新人的她,却永远匹配不了自己。",
    "year": "2023",
    "type": "电影",
    "region": "韩国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "相亲",
      "婚介所",
      "催婚",
      "中年爱情",
      "现实主义"
    ],
    "genre": "剧情/喜剧/爱情"
  },
  {
    "id": "0552",
    "title": "榄不住的爱",
    "url": "./movie-0552.html",
    "cover": "./102.jpg",
    "oneLine": "为了追到橄榄球队的冷酷四分卫,笨手笨脚的啦啦队长决定在决赛场上来一次“假摔碰瓷”。",
    "year": "2001",
    "type": "电视剧",
    "region": "中国台湾",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "偶像剧启蒙",
      "橄榄球",
      "傻白甜",
      "台腔"
    ],
    "genre": "爱情,青春,运动"
  },
  {
    "id": "0553",
    "title": "乔尔·金·布斯特:性心理",
    "url": "./movie-0553.html",
    "cover": "./103.jpg",
    "oneLine": "乔尔·金·布斯特用他特有的亚裔刻薄,解剖了约会软件时代的“三秒定终身”法则。",
    "year": "2023",
    "type": "综艺/脱口秀",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "单口喜剧",
      "LGBTQ+",
      "亚裔视角",
      "两性话题"
    ],
    "genre": "喜剧/脱口秀"
  },
  {
    "id": "0554",
    "title": "圣堂风云3",
    "url": "./movie-0554.html",
    "cover": "./104.jpg",
    "oneLine": "沉寂五年的卧底再度被激活,昔日兄弟如今站在法律的两端,展开殊死对决。",
    "year": "2011",
    "type": "剧集",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "兄弟反目",
      "终极卧底",
      "跨国犯罪"
    ],
    "genre": "动作,警匪,悬疑"
  },
  {
    "id": "0555",
    "title": "如花似玉",
    "url": "./movie-0555.html",
    "cover": "./105.jpg",
    "oneLine": "四姐妹在父亲破产后轮流做“包租婆”,用一间老房子撑起破碎的家。",
    "year": "1997",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "女性群像",
      "移民潮",
      "姐妹情深"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "0556",
    "title": "爱情公寓3",
    "url": "./movie-0556.html",
    "cover": "./106.jpg",
    "oneLine": "一场全区大停电,把七位租客困在公寓里,憋了四季的真心话终于大爆发。",
    "year": "2012",
    "type": "剧集",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "情景喜剧",
      "合租",
      "经典回归",
      "笑点密集",
      "青春回忆"
    ],
    "genre": "喜剧/爱情/情景"
  },
  {
    "id": "0557",
    "title": "家和万事兴之抬头见喜",
    "url": "./movie-0557.html",
    "cover": "./107.jpg",
    "oneLine": "破产富二代装成成功人士回乡过年,不料全村人都以为他是真的大款。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "贺岁",
      "东北喜剧",
      "返乡过年"
    ],
    "genre": "喜剧/家庭"
  },
  {
    "id": "0558",
    "title": "猛鬼抓交替",
    "url": "./movie-0558.html",
    "cover": "./108.jpg",
    "oneLine": "大学社团玩“抓交替”游戏,却招来了真正的恶鬼,规则一旦开始就不能停。",
    "year": "2024",
    "type": "电影",
    "region": "中国台湾",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "民俗恐怖",
      "都市传说",
      "替死鬼",
      "校园",
      "高能反转"
    ],
    "genre": "恐怖,惊悚"
  },
  {
    "id": "0559",
    "title": "爱情万人迷",
    "url": "./movie-0559.html",
    "cover": "./109.jpg",
    "oneLine": "全校最受欢迎的男生许愿“让全校女生都喜欢我”,第二天他真的变成了全校女生的“闺蜜”。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "校园",
      "海王翻车",
      "换位思考"
    ],
    "genre": "喜剧,爱情"
  },
  {
    "id": "0560",
    "title": "节日开始了",
    "url": "./movie-0560.html",
    "cover": "./110.jpg",
    "oneLine": "1944年圣诞前夕,墨索里尼倒台的消息传到闭塞的意大利南部小镇,一个男孩眼中的“节日”却成了大人们的噩梦。",
    "year": "1977",
    "type": "电影",
    "region": "意大利",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "二战",
      "圣诞节",
      "小镇",
      "童年",
      "政治隐喻"
    ],
    "genre": "剧情,历史,家庭"
  },
  {
    "id": "0561",
    "title": "某处,某人",
    "url": "./movie-0561.html",
    "cover": "./111.jpg",
    "oneLine": "住在巴黎同一栋公寓的男女始终未曾相遇,他们各自养着猫,却都渴望“某处,某人”的爱。",
    "year": "2023",
    "type": "电影",
    "region": "法国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "孤独",
      "都市",
      "错过",
      "治愈"
    ],
    "genre": "剧情/爱情"
  },
  {
    "id": "0562",
    "title": "幻境",
    "url": "./movie-0562.html",
    "cover": "./112.jpg",
    "oneLine": "为了找回车祸失忆的妻子,他进入了可以重现过去的AI幻境,却发现里面有两个妻子。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "虚拟现实",
      "记忆",
      "悬疑",
      "烧脑",
      "哲学"
    ],
    "genre": "悬疑/科幻"
  },
  {
    "id": "0563",
    "title": "万德浮史贝斯",
    "url": "./movie-0563.html",
    "cover": "./113.jpg",
    "oneLine": "一间只在雨夜出现的书店,每个走进去的人,都会拿到一本写着自己未来结局的书。",
    "year": "2024",
    "type": "电影",
    "region": "中国台湾",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "文艺",
      "平行时空",
      "书店"
    ],
    "genre": "剧情,奇幻,悬疑"
  },
  {
    "id": "0564",
    "title": "冰封巨兽",
    "url": "./movie-0564.html",
    "cover": "./114.jpg",
    "oneLine": "北极钻井队唤醒冰封万年的史前巨兽,极夜降临前,他们用钻井设备拼凑了一台巨型机甲。",
    "year": "2021",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "北极",
      "苏醒巨兽",
      "石油钻井",
      "机甲"
    ],
    "genre": "动作,科幻,怪兽"
  },
  {
    "id": "0565",
    "title": "夺命神枪活命钱",
    "url": "./movie-0565.html",
    "cover": "./115.jpg",
    "oneLine": "小弟黑仔偷走帮派的神枪,只为凑足赎金救被绑架的妹妹,却引出枪支背后横跨二十年的血债。",
    "year": "2025",
    "type": "电影",
    "region": "中国台湾",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "黑帮",
      "赎金",
      "兄弟情",
      "枪战"
    ],
    "genre": "犯罪/动作/黑色电影"
  },
  {
    "id": "0566",
    "title": "美人心",
    "url": "./movie-0566.html",
    "cover": "./116.jpg",
    "oneLine": "平凡医女入宫为父报仇,却发现她的仇人早已被另一个“自己”取代。",
    "year": "2023",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "后宫",
      "复仇",
      "智商在线",
      "大女主",
      "反转"
    ],
    "genre": "古装/权谋/爱情"
  },
  {
    "id": "0567",
    "title": "荷兰女孩",
    "url": "./movie-0567.html",
    "cover": "./117.jpg",
    "oneLine": "1944年,一名荷兰自行车冠军少女利用送报路线,为抵抗组织偷渡了47名犹太人儿童。",
    "year": "2024",
    "type": "电影",
    "region": "荷兰/比利时",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "二战",
      "抵抗运动",
      "自行车逃亡"
    ],
    "genre": "剧情/战争/女性"
  },
  {
    "id": "0568",
    "title": "人生不要气馁",
    "url": "./movie-0568.html",
    "cover": "./118.jpg",
    "oneLine": "失业的中年废柴在帮邻居整理遗物时,意外发现一本记录着“100次失败”的日记。",
    "year": "2022",
    "type": "电影",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "励志",
      "治愈",
      "温情",
      "生活",
      "重启"
    ],
    "genre": "剧情"
  },
  {
    "id": "0569",
    "title": "歌手2025",
    "url": "./movie-0569.html",
    "cover": "./119.jpg",
    "oneLine": "一档选秀节目的决赛夜,直播过程中,有人当众揭穿了冠军的内定黑幕。",
    "year": "2025",
    "type": "综艺电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "选秀",
      "黑幕",
      "梦想",
      "直播"
    ],
    "genre": "音乐,真人秀"
  },
  {
    "id": "0570",
    "title": "破毒强人",
    "url": "./movie-0570.html",
    "cover": "./120.jpg",
    "oneLine": "卧底警员成功摧毁贩毒集团后失忆,醒来时毒枭却告诉他:“你才是我最信任的兄弟。",
    "year": "2023",
    "type": "剧集",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "卧底",
      "毒枭",
      "失忆",
      "兄弟反目",
      "港味"
    ],
    "genre": "动作/犯罪/警匪"
  },
  {
    "id": "0571",
    "title": "爱情对手戏",
    "url": "./movie-0571.html",
    "cover": "./121.jpg",
    "oneLine": "两个互相看不顺眼的演员被迫在戏里演情侣,却渐渐分不清剧本和现实。",
    "year": "2001",
    "type": "电影",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "娱乐圈",
      "假戏真做",
      "欢喜冤家",
      "轻松",
      "浪漫"
    ],
    "genre": "爱情/喜剧"
  },
  {
    "id": "0572",
    "title": "格林童话变奏曲",
    "url": "./movie-0572.html",
    "cover": "./122.jpg",
    "oneLine": "如果格林童话里的每一个“幸福结局”都是谎言,那么真相究竟有多可怕?",
    "year": "2025",
    "type": "剧集",
    "region": "美国/德国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "暗黑童话",
      "改编",
      "心理恐怖",
      "成人向"
    ],
    "genre": "奇幻/惊悚/剧情"
  },
  {
    "id": "0573",
    "title": "二龙湖村暖花开2",
    "url": "./movie-0573.html",
    "cover": "./123.jpg",
    "oneLine": "二龙湖民宿刚有起色,大奎却要带全村民搞“元宇宙种地”。",
    "year": "2023",
    "type": "电视剧",
    "region": "中国内地",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "东北",
      "乡村振兴",
      "创业",
      "搞笑"
    ],
    "genre": "喜剧/乡村"
  },
  {
    "id": "0574",
    "title": "天一生水",
    "url": "./movie-0574.html",
    "cover": "./124.jpg",
    "oneLine": "宁波天一阁范氏家族的最后一代传人,为了守护一阁藏书,不得不在日军炮火、军阀勒索和家族内讧中,一次次将书“偷”出去又“偷”回来。",
    "year": "2005",
    "type": "剧集",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "藏书楼",
      "文化传承",
      "民国",
      "风雨飘摇"
    ],
    "genre": "古装,家族"
  },
  {
    "id": "0575",
    "title": "新扎师姐3:百分百型警",
    "url": "./movie-0575.html",
    "cover": "./125.jpg",
    "oneLine": "警队最潮的女警被派去时尚杂志卧底,追查利用时装秀走私毒品的跨国集团,却发现自己爱上了头号嫌疑人。",
    "year": "2026",
    "type": "电影",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "女警",
      "时尚",
      "卧底",
      "时装秀"
    ],
    "genre": "动作/喜剧/警匪"
  },
  {
    "id": "0576",
    "title": "新生万喜",
    "url": "./movie-0576.html",
    "cover": "./126.jpg",
    "oneLine": "不识字的老油条父亲为躲避罚款,被迫和儿子坐进同一间小学课堂,成了全班最老的“新生”。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "乡村教育",
      "代际冲突",
      "黑色幽默",
      "父子关系"
    ],
    "genre": "剧情/喜剧"
  },
  {
    "id": "0577",
    "title": "有希望的男人",
    "url": "./movie-0577.html",
    "cover": "./127.jpg",
    "oneLine": "一个信奉“不忠才是婚姻基石”的渣男岳父,带着老实女婿一步步跑偏,却跑出了真爱。",
    "year": "2011",
    "type": "电影",
    "region": "捷克",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "出轨喜剧",
      "脑洞大开",
      "捷克式幽默",
      "反常规"
    ],
    "genre": "喜剧/爱情"
  },
  {
    "id": "0578",
    "title": "马可·波罗历险记",
    "url": "./movie-0578.html",
    "cover": "./128.jpg",
    "oneLine": "少年马可·波罗的东方之旅并非为了做生意,而是为了归还一件会唱歌的蒙古圣物。",
    "year": "2026",
    "type": "动画电影",
    "region": "意大利/中国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "丝绸之路",
      "少年",
      "奇幻元素",
      "友谊"
    ],
    "genre": "历史冒险"
  },
  {
    "id": "0579",
    "title": "路易十四的崛起",
    "url": "./movie-0579.html",
    "cover": "./129.jpg",
    "oneLine": "少年路易十四如何利用“时尚”与“礼仪”作为武器,将贵族囚禁于凡尔赛宫的华丽牢笼。",
    "year": "2023",
    "type": "电影",
    "region": "法国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "权谋",
      "时尚",
      "凡尔赛",
      "崛起"
    ],
    "genre": "历史,传记"
  },
  {
    "id": "0580",
    "title": "互换的头颅",
    "url": "./movie-0580.html",
    "cover": "./130.jpg",
    "oneLine": "一场失败的换头手术让黑帮教父的大脑住进了女高中生的身体,而她的意识则被困在他衰老腐烂的躯体里。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "人体实验",
      "伦理困境",
      "血腥美学"
    ],
    "genre": "恐怖,悬疑,科幻"
  },
  {
    "id": "0581",
    "title": "邓迪少校",
    "url": "./movie-0581.html",
    "cover": "./131.jpg",
    "oneLine": "一位在澳洲内陆徒手抓鳄鱼的硬汉猎手,被纽约女记者请到繁华大都市,上演了一场原始人与现代文明的爆笑碰撞。",
    "year": "1986",
    "type": "电影",
    "region": "澳大利亚/美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "鳄鱼邓迪",
      "文化冲突",
      "丛林法则",
      "80年代经典"
    ],
    "genre": "冒险/喜剧/动作"
  },
  {
    "id": "0582",
    "title": "怪谈1964",
    "url": "./movie-0582.html",
    "cover": "./132.jpg",
    "oneLine": "1964年东京奥运会前夕,一名记者在一卷神秘录像带中发现了被官方抹去的“集体失踪案”,而调查者正在逐步重现当年的恐怖。",
    "year": "2022",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "民俗恐怖",
      "昭和年代",
      "录像带",
      "诅咒",
      "村落秘事"
    ],
    "genre": "恐怖/悬疑"
  },
  {
    "id": "0583",
    "title": "兄弟粤语",
    "url": "./movie-0583.html",
    "cover": "./133.jpg",
    "oneLine": "弟弟成了卧底,哥哥成了毒枭,两人在九龙城寨的暗巷里举枪相向,说的是粤语,流的是一样的血。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "港产片",
      "兄弟情",
      "卧底",
      "九龙城寨",
      "宿命悲剧"
    ],
    "genre": "剧情/犯罪/家庭"
  },
  {
    "id": "0584",
    "title": "永生之爱",
    "url": "./movie-0584.html",
    "cover": "./134.jpg",
    "oneLine": "一个活了五百年的吸血鬼厌倦了永生,直到她在临终关怀医院遇到了一个只剩下三个月寿命的凡人女孩。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "吸血鬼",
      "跨种族",
      "时间跨度",
      "史诗"
    ],
    "genre": "剧情爱情奇幻"
  },
  {
    "id": "0585",
    "title": "会社物语",
    "url": "./movie-0585.html",
    "cover": "./135.jpg",
    "oneLine": "中年课长被裁后假扮幽灵留在公司仓库,却意外听懂了上司的“真心话”。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "职场",
      "黑企",
      "社畜",
      "人性",
      "冷幽默"
    ],
    "genre": "剧情"
  },
  {
    "id": "0586",
    "title": "死亡终点站",
    "url": "./movie-0586.html",
    "cover": "./136.jpg",
    "oneLine": "1944年,一列开往奥斯维辛的死亡列车上,十名来自不同国家的囚犯在密闭车厢里策划了一场必死的暴动。",
    "year": "2024",
    "type": "电影",
    "region": "德国/波兰",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "二战",
      "大屠杀",
      "火车",
      "人性",
      "密闭空间"
    ],
    "genre": "历史/战争/剧情"
  },
  {
    "id": "0587",
    "title": "心心之火",
    "url": "./movie-0587.html",
    "cover": "./137.jpg",
    "oneLine": "年轻气盛的心脏外科女医生与即将退休的老专家,用彼此做“心脏支架”撑过职业危机。",
    "year": "2025",
    "type": "剧集",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "心脏科",
      "师徒传承",
      "医患温情"
    ],
    "genre": "剧情/医疗"
  },
  {
    "id": "0588",
    "title": "终极复仇者",
    "url": "./movie-0588.html",
    "cover": "./138.jpg",
    "oneLine": "在更黑暗的终极宇宙里,美队是反政府军,钢铁侠是瘾君子,他们必须联手杀死变异的绿巨人。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "复仇者联盟",
      "多元宇宙",
      "终极宇宙",
      "大尺度"
    ],
    "genre": "动作/科幻/超级英雄"
  },
  {
    "id": "0589",
    "title": "停机四十天",
    "url": "./movie-0589.html",
    "cover": "./139.jpg",
    "oneLine": "四十天不碰手机即可获得百万奖金,她住进全透明牢笼后才发现规则全是谎言。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "科技伦理",
      "反乌托邦",
      "心理压迫",
      "社会实验"
    ],
    "genre": "剧情/惊悚"
  },
  {
    "id": "0590",
    "title": "少林英雄之方世玉洪熙官",
    "url": "./movie-0590.html",
    "cover": "./140.jpg",
    "oneLine": "方世玉与洪熙官本是死对头,却在少林秘窟中发现彼此的父亲竟是同一桩灭门案的同谋。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆/中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "硬核功夫",
      "少林寺",
      "反清复明",
      "双雄",
      "拳拳到肉"
    ],
    "genre": "动作,历史,武侠"
  },
  {
    "id": "0591",
    "title": "时光代理人第二季",
    "url": "./movie-0591.html",
    "cover": "./141.jpg",
    "oneLine": "程小时与陆光继续进入照片改变过去,但他们每一次穿越都在创造更恐怖的平行未来。",
    "year": "2025",
    "type": "动画",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "时光穿越",
      "搭档",
      "代价",
      "刀片",
      "国漫巅峰"
    ],
    "genre": "奇幻,悬疑,剧情"
  },
  {
    "id": "0592",
    "title": "母亲的微笑",
    "url": "./movie-0592.html",
    "cover": "./142.jpg",
    "oneLine": "母亲被确诊只剩三个月生命,她唯一的心愿是让四个子女同时对自己笑一次。",
    "year": "2023",
    "type": "电影",
    "region": "日本",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "母亲",
      "临终",
      "家庭和解"
    ],
    "genre": "家庭/剧情"
  },
  {
    "id": "0593",
    "title": "精武风云.陈真",
    "url": "./movie-0593.html",
    "cover": "./143.jpg",
    "oneLine": "陈真化名潜入上海滩,以蒙面侠身份暗杀日军特务,并查出一战后的更大阴谋。",
    "year": "2010",
    "type": "电影",
    "region": "香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "甄子丹",
      "陈真",
      "虹口道场",
      "一战"
    ],
    "genre": "动作,剧情"
  },
  {
    "id": "0594",
    "title": "见爱不怪",
    "url": "./movie-0594.html",
    "cover": "./144.jpg",
    "oneLine": "书呆子为了追到校花,假装爱上校草以打入社交圈,结果假戏真做。",
    "year": "2018",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "学霸伪装",
      "攻心计",
      "反转校草"
    ],
    "genre": "喜剧/爱情/青春"
  },
  {
    "id": "0595",
    "title": "护国良相狄仁杰之风摧边关",
    "url": "./movie-0595.html",
    "cover": "./145.jpg",
    "oneLine": "年迈狄仁杰赴边关巡视,发现突厥进犯的背后,是京城权贵向敌方走私军火的惊天大案。",
    "year": "2004",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "狄仁杰",
      "边塞",
      "军火案",
      "朝堂阴谋"
    ],
    "genre": "古装悬疑"
  },
  {
    "id": "0596",
    "title": "空中花园",
    "url": "./movie-0596.html",
    "cover": "./146.jpg",
    "oneLine": "城市上空凭空出现一座悬空花园,只有“心有不甘”的人才能看到并进入。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "都市传说",
      "垂直城市",
      "治愈",
      "非线性叙事"
    ],
    "genre": "奇幻/爱情/悬疑"
  },
  {
    "id": "0597",
    "title": "失控班!",
    "url": "./movie-0597.html",
    "cover": "./147.jpg",
    "oneLine": "新来的代课老师发现全班学生行为诡异,而上一任老师的失踪似乎与他们有关。",
    "year": "2019",
    "type": "电影",
    "region": "台湾",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "校园",
      "心理",
      "反转",
      "老师",
      "社会"
    ],
    "genre": "悬疑/惊悚"
  },
  {
    "id": "0598",
    "title": "咖啡旋律特别篇",
    "url": "./movie-0598.html",
    "cover": "./148.jpg",
    "oneLine": "每年圣诞夜都会在咖啡店弹同一首曲子的盲人钢琴师,今年等来了一个知道曲谱“缺了最后一小节”的女人。",
    "year": "2024",
    "type": "剧集SP",
    "region": "日本",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "咖啡",
      "钢琴",
      "圣诞",
      "重逢"
    ],
    "genre": "爱情/音乐/剧情"
  },
  {
    "id": "0599",
    "title": "百战敢死队",
    "url": "./movie-0599.html",
    "cover": "./149.jpg",
    "oneLine": "二战欧洲战场最神秘的“幽灵部队”,由一群被军事法庭除名的士兵组成,他们的任务是活着回来,而不是赢。",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "二战",
      "特种部队",
      "真实改编",
      "兄弟连",
      "敌后渗透"
    ],
    "genre": "战争/动作/历史"
  },
  {
    "id": "0600",
    "title": "水上回光",
    "url": "./movie-0600.html",
    "cover": "./150.jpg",
    "oneLine": "溺亡少年一次次从河面醒来,发现只有让母亲放下执念,自己才能真正离开。",
    "year": "2025",
    "type": "电影",
    "region": "中国台湾",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "亲情",
      "轮回",
      "治愈",
      "水乡",
      "时光"
    ],
    "genre": "奇幻/家庭"
  },
  {
    "id": "0601",
    "title": "布鲁克斯先生",
    "url": "./movie-0601.html",
    "cover": "./1.jpg",
    "oneLine": "德高望重的心理医生布鲁克斯,私下是连环杀手,而他的新病人正是负责追查此案的警探。",
    "year": "2025",
    "type": "剧集",
    "region": "英国/美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "双重人格",
      "连环杀手",
      "心理医生",
      "猫鼠游戏"
    ],
    "genre": "惊悚/心理/犯罪"
  },
  {
    "id": "0602",
    "title": "黑凯撒",
    "url": "./movie-0602.html",
    "cover": "./2.jpg",
    "oneLine": "1930年代哈莱姆文艺复兴时期,一个文盲黑人少年靠暴力与智商,成为了纽约地下世界的“凯撒”。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "黑帮",
      "复古风格",
      "种族议题",
      "史诗感"
    ],
    "genre": "动作/犯罪/历史"
  },
  {
    "id": "0603",
    "title": "大都会1927",
    "url": "./movie-0603.html",
    "cover": "./3.jpg",
    "oneLine": "经典《大都会》的百年后精神续作,人类与机器人的后代居住在垂直分裂的“塔城”里。",
    "year": "2027",
    "type": "电影",
    "region": "德国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "赛博朋克",
      "阶级对立",
      "机器人革命",
      "默片致敬"
    ],
    "genre": "科幻、黑色电影"
  },
  {
    "id": "0604",
    "title": "私生活",
    "url": "./movie-0604.html",
    "cover": "./4.jpg",
    "oneLine": "刚出狱的顶级骗子,本想回归社会找工作,却发现老本行的“业务”已全面互联网化。",
    "year": "2020",
    "type": "剧集",
    "region": "韩国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "骗子",
      "诈欺",
      "假释犯",
      "生存游戏"
    ],
    "genre": "剧情,犯罪"
  },
  {
    "id": "0605",
    "title": "搞乜鬼侦缉档案",
    "url": "./movie-0605.html",
    "cover": "./5.jpg",
    "oneLine": "一名无神论女督察,被迫与一个清朝鬼差搭档,用阴阳眼侦破现代奇案。",
    "year": "2013",
    "type": "剧集",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "港剧",
      "鬼魂",
      "刑侦",
      "搞笑"
    ],
    "genre": "悬疑/喜剧/灵异"
  },
  {
    "id": "0606",
    "title": "见习女探",
    "url": "./movie-0606.html",
    "cover": "./6.jpg",
    "oneLine": "民国初年,留洋归来的法医专业女学生被分到警察局当“见习女探”,搭档是一个迷信鬼神的老探长。",
    "year": "2024",
    "type": "短剧",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "女仵作",
      "民国",
      "单元探案",
      "反套路"
    ],
    "genre": "悬疑,喜剧,古装"
  },
  {
    "id": "0607",
    "title": "姻缘天定",
    "url": "./movie-0607.html",
    "cover": "./7.jpg",
    "oneLine": "冷面战神王爷被迫娶了京城第一“败家女”,本以为是一场政治交易,谁知她竟是前朝女军师假死重生。",
    "year": "2025",
    "type": "剧集",
    "region": "中国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "先婚后爱",
      "欢喜冤家",
      "夺嫡",
      "女强",
      "甜宠"
    ],
    "genre": "古装/喜剧/爱情"
  },
  {
    "id": "0608",
    "title": "漂亮的公主",
    "url": "./movie-0608.html",
    "cover": "./8.jpg",
    "oneLine": "被当作傻子养大的废公主,利用宫廷所有人的轻视,一步步将仇人送上断头台。",
    "year": "2022",
    "type": "剧集",
    "region": "韩国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "宫斗",
      "复仇",
      "扮猪吃虎",
      "大女主"
    ],
    "genre": "剧情/古装/宫廷"
  },
  {
    "id": "0609",
    "title": "金陵之夜",
    "url": "./movie-0609.html",
    "cover": "./9.jpg",
    "oneLine": "1937 年南京沦陷前夜,一群女学生被训练成特工,用生命执行不可能的任务。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "民国",
      "南京",
      "暗杀",
      "身份互换",
      "女性特工"
    ],
    "genre": "谍战悬疑"
  },
  {
    "id": "0610",
    "title": "战舰吕字号",
    "url": "./movie-0610.html",
    "cover": "./10.jpg",
    "oneLine": "一艘名为“吕”的旧式潜艇,在太平洋战争末期接到了它最后的、不可能完成的任务。",
    "year": "2020",
    "type": "电影",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "二战",
      "日本海军",
      "反战",
      "手绘动画",
      "战舰"
    ],
    "genre": "战争,历史,动画"
  },
  {
    "id": "0611",
    "title": "真相背后",
    "url": "./movie-0611.html",
    "cover": "./11.jpg",
    "oneLine": "一桩铁证如山的谋杀案,辩护律师发现所有证据都指向一个绝不可能是凶手的当事人。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "法庭",
      "伪证",
      "录像",
      "盲点"
    ],
    "genre": "悬疑/犯罪"
  },
  {
    "id": "0612",
    "title": "猫和金丝雀",
    "url": "./movie-0612.html",
    "cover": "./12.jpg",
    "oneLine": "擅长伪造身份的女骗徒接手新案子后才发现,雇主是一只从不出门的“猫”——而她是笼中那只金丝雀。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "密室",
      "反转",
      "高智商犯罪",
      "女性",
      "猫鼠游戏"
    ],
    "genre": "惊悚,悬疑,犯罪"
  },
  {
    "id": "0613",
    "title": "周末",
    "url": "./movie-0613.html",
    "cover": "./13.jpg",
    "oneLine": "一对三年没说话的兄妹必须一起处理父亲的遗物,而遗嘱藏在父亲生前最爱的、随时会报废的破房车里。",
    "year": "2023",
    "type": "电影",
    "region": "法国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "公路",
      "兄妹",
      "遗产",
      "和解",
      "黑色幽默"
    ],
    "genre": "剧情、家庭"
  },
  {
    "id": "0614",
    "title": "血腥死亡营3:贫瘠荒地",
    "url": "./movie-0614.html",
    "cover": "./14.jpg",
    "oneLine": "夏令营屠杀幸存者成年后重返故地,却发现那片荒地变成了变异者巢穴。",
    "year": "1992",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "砍杀",
      "经典续集",
      "荒野"
    ],
    "genre": "恐怖,惊悚"
  },
  {
    "id": "0615",
    "title": "设德兰群岛",
    "url": "./movie-0615.html",
    "cover": "./15.jpg",
    "oneLine": "苏格兰最北端的孤岛上,每一宗罪案都被海风与极夜掩埋。",
    "year": "2025",
    "type": "剧集",
    "region": "英国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "孤岛",
      "北欧",
      "noir",
      "人性"
    ],
    "genre": "悬疑,犯罪"
  },
  {
    "id": "0616",
    "title": "不羁之旅",
    "url": "./movie-0616.html",
    "cover": "./16.jpg",
    "oneLine": "身患渐冻症的父亲修复了一辆报废的雪铁龙2CV,胁迫儿子陪他横穿撒哈拉,只为把车开进海里。",
    "year": "2024",
    "type": "电影",
    "region": "法国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "绝症",
      "复古车",
      "修复父子情",
      "流浪"
    ],
    "genre": "公路,剧情,冒险"
  },
  {
    "id": "0617",
    "title": "一个美国梦",
    "url": "./movie-0617.html",
    "cover": "./17.jpg",
    "oneLine": "一名墨西哥偷渡客在加州农场摘草莓,却意外发现农场主囚禁数百名劳工当现代奴隶。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "非法移民",
      "农场劳工",
      "现代奴隶制"
    ],
    "genre": "剧情,惊悚"
  },
  {
    "id": "0618",
    "title": "贫乏姐妹物语",
    "url": "./movie-0618.html",
    "cover": "./18.jpg",
    "oneLine": "父母欠债跑路后,山田家两姐妹靠着一个月一万日元的生活费,在都市的角落里努力而温暖地活着。",
    "year": "2023",
    "type": "动漫",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "治愈",
      "姐妹",
      "贫穷"
    ],
    "genre": "剧情,日常"
  },
  {
    "id": "0619",
    "title": "草上行舟",
    "url": "./movie-0619.html",
    "cover": "./19.jpg",
    "oneLine": "内蒙古草原上的留守男孩,用捡来的废铁造了一艘船,要在干枯的河道里划向城市寻找父母。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "草原",
      "留守儿童",
      "幻想世界",
      "成长治愈",
      "魔幻写实"
    ],
    "genre": "剧情/奇幻/乡村"
  },
  {
    "id": "0620",
    "title": "终站",
    "url": "./movie-0620.html",
    "cover": "./20.jpg",
    "oneLine": "一趟永不停歇的末日列车,承载着人类最后的文明,而一名从冷冻舱醒来的警察,必须查出谁是隐藏在乘客中的“病毒”。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "末日",
      "火车",
      "悬疑",
      "人性实验"
    ],
    "genre": "科幻、灾难"
  },
  {
    "id": "0621",
    "title": "战地救援:卢安达风云",
    "url": "./movie-0621.html",
    "cover": "./21.jpg",
    "oneLine": "1994年卢旺达大屠杀中,一名联合国维和部队医官,在枪林弹雨里孤身拯救了超过两百名平民。",
    "year": "2022",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "真实事件改编",
      "卢旺达",
      "人道主义",
      "救援",
      "残酷"
    ],
    "genre": "战争,历史,剧情"
  },
  {
    "id": "0622",
    "title": "脱口秀大会第五季",
    "url": "./movie-0622.html",
    "cover": "./22.jpg",
    "oneLine": "新老演员同台竞技,这一季的规则只有一个:每场淘汰的最后一名,将永远失去说那个最想说的段子的机会。",
    "year": "2025",
    "type": "综艺",
    "region": "中国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "脱口秀",
      "竞技",
      "幽默",
      "社会话题",
      "群像"
    ],
    "genre": "喜剧/脱口秀/真人秀"
  },
  {
    "id": "0623",
    "title": "铁血茶城",
    "url": "./movie-0623.html",
    "cover": "./23.jpg",
    "oneLine": "1950年,湘西茶城,一对亲兄弟,一个成了解放军剿匪队长,一个成了土匪军师,整个茶城成了他们的生死棋局。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "剿匪",
      "小人物史诗",
      "兄弟反目"
    ],
    "genre": "战争/历史"
  },
  {
    "id": "0624",
    "title": "红鼻子驯鹿鲁道夫",
    "url": "./movie-0624.html",
    "cover": "./24.jpg",
    "oneLine": "鲁道夫因为发光红鼻子被嘲笑,离家出走后加入一个“驯鹿失败者联盟”,却发现圣诞老人需要他们。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "圣诞",
      "另类英雄",
      "自我认同"
    ],
    "genre": "动画/家庭"
  },
  {
    "id": "0625",
    "title": "痴心儿女",
    "url": "./movie-0625.html",
    "cover": "./25.jpg",
    "oneLine": "70岁的退休校长和50岁的护工相爱了,但双方子女为了争夺房产,联手将两位老人“拆散”并送进了不同的养老院。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "忘年恋",
      "养老院",
      "遗产风波",
      "黄昏恋"
    ],
    "genre": "爱情/家庭"
  },
  {
    "id": "0626",
    "title": "超人气动物园",
    "url": "./movie-0626.html",
    "cover": "./26.jpg",
    "oneLine": "倒闭动物园的员工发现,穿上动物玩偶服后竟能听懂濒危动物的遗言。",
    "year": "2026",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "经营",
      "拟人",
      "网红",
      "守护灵"
    ],
    "genre": "喜剧,奇幻,家庭"
  },
  {
    "id": "0627",
    "title": "被遗忘的人",
    "url": "./movie-0627.html",
    "cover": "./27.jpg",
    "oneLine": "一个没有身份证、没有档案、没有任何人记得的男人,在德国福利系统的缝隙里,拼命证明自己活过。",
    "year": "2024",
    "type": "电影",
    "region": "德国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "身份迷失",
      "社会福利系统",
      "孤独",
      "寻找",
      "冷峻"
    ],
    "genre": "剧情,悬疑"
  },
  {
    "id": "0628",
    "title": "绝种好男人",
    "url": "./movie-0628.html",
    "cover": "./28.jpg",
    "oneLine": "一个坚持丁克二十年的“绝种好男人”,被查出怀孕后,整个小区都疯了。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "丁克",
      "婚姻",
      "家庭压力",
      "反转",
      "治愈"
    ],
    "genre": "爱情、喜剧、剧情"
  },
  {
    "id": "0629",
    "title": "玛尼图的鞋",
    "url": "./movie-0629.html",
    "cover": "./29.jpg",
    "oneLine": "一双曾在印第安屠杀现场出现过的鹿皮鞋,被送进现代博物馆,从此每个穿过它的人都双脚溃烂而亡。",
    "year": "2017",
    "type": "电影",
    "region": "加拿大",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "原住民诅咒",
      "遗物",
      "鞋",
      "复仇灵",
      "丛林"
    ],
    "genre": "惊悚/恐怖/超自然"
  },
  {
    "id": "0630",
    "title": "摩玉玄奇",
    "url": "./movie-0630.html",
    "cover": "./30.jpg",
    "oneLine": "现代考古女生触碰古玉佩后,反复穿越成和亲公主,每次死亡都会重启时空。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "玉佩",
      "时空循环",
      "替身",
      "甜虐"
    ],
    "genre": "奇幻,爱情,古装"
  },
  {
    "id": "0631",
    "title": "睡公主",
    "url": "./movie-0631.html",
    "cover": "./31.jpg",
    "oneLine": "一场车祸后她沉睡三年,他每天都来床边讲一个谎言,因为他答应过“只讲真话”。",
    "year": "1987",
    "type": "电影",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "港产文艺",
      "植物人",
      "守候"
    ],
    "genre": "剧情/爱情/文艺"
  },
  {
    "id": "0632",
    "title": "华盛顿邮报",
    "url": "./movie-0632.html",
    "cover": "./32.jpg",
    "oneLine": "第一位女性报纸发行人,与主编一起赌上全部身家,决定公开揭露美国政府四十年谎言。",
    "year": "2017",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "真实事件",
      "新闻",
      "政治",
      "斯皮尔伯格"
    ],
    "genre": "剧情,历史"
  },
  {
    "id": "0633",
    "title": "飙风雷哥",
    "url": "./movie-0633.html",
    "cover": "./33.jpg",
    "oneLine": "顶级赛车手因弟弟被杀而伪装成废铁厂工人卧底地下飙车帮,却发现帮派老大竟是他的亲生父亲。",
    "year": "2021",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "肌肉车",
      "卧底",
      "改装文化",
      "街头飙车",
      "硬汉"
    ],
    "genre": "动作,犯罪,赛车"
  },
  {
    "id": "0634",
    "title": "新所罗门王",
    "url": "./movie-0634.html",
    "cover": "./34.jpg",
    "oneLine": "纽约最穷社区的法官用所罗门式的智慧审案,每集一个脑洞大开的“假处决”测试母爱。",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "法官",
      "智慧",
      "现代",
      "寓言"
    ],
    "genre": "剧情、律政"
  },
  {
    "id": "0635",
    "title": "不受欢迎的人",
    "url": "./movie-0635.html",
    "cover": "./35.jpg",
    "oneLine": "每个小镇都有个“不受欢迎的人”,但当这人死了,全镇都成了嫌疑人。",
    "year": "2026",
    "type": "电影",
    "region": "法国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "小镇秘密",
      "社交孤立",
      "全员恶人"
    ],
    "genre": "剧情/悬疑"
  },
  {
    "id": "0636",
    "title": "马路对面的房子",
    "url": "./movie-0636.html",
    "cover": "./36.jpg",
    "oneLine": "女主角每天用望远镜看马路对面的房子,直到有一天,房子里的人也在看她。",
    "year": "2023",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "偷窥",
      "邻居",
      "失踪",
      "隐秘"
    ],
    "genre": "悬疑/家庭"
  },
  {
    "id": "0637",
    "title": "手工制品",
    "url": "./movie-0637.html",
    "cover": "./37.jpg",
    "oneLine": "东京大厂辞职的青年回到乡下继承即将倒闭的木工作坊,却在一双老手艺中找到人生的新榫卯。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "匠人",
      "亲情",
      "治愈",
      "传承",
      "生活"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "0638",
    "title": "喜剧大过天",
    "url": "./movie-0638.html",
    "cover": "./38.jpg",
    "oneLine": "一个跑龙套的坚信“喜剧大过天”,却发现自己活在另一个喜剧演员的剧本里。",
    "year": "2022",
    "type": "电影",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "龙套",
      "片场",
      "梦想",
      "致敬周星驰"
    ],
    "genre": "剧情,喜剧"
  },
  {
    "id": "0639",
    "title": "天声一对",
    "url": "./movie-0639.html",
    "cover": "./39.jpg",
    "oneLine": "一个靠喊麦爆火的男主播与一个学院派女高音被迫组成“土洋结合”的组合参加音乐大赛,一路互怼一路升温。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "对唱",
      "直播",
      "冤家",
      "草根",
      "网红"
    ],
    "genre": "喜剧/爱情/音乐"
  },
  {
    "id": "0640",
    "title": "青空下讲我知你爱我",
    "url": "./movie-0640.html",
    "cover": "./40.jpg",
    "oneLine": "他买了十年天台告白时段,每年对同一片青空说同一句话,第十年,有人按响了他的门铃。",
    "year": "2023",
    "type": "电影",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "天台告白",
      "青春",
      "遗憾",
      "粤语"
    ],
    "genre": "爱情/剧情"
  },
  {
    "id": "0641",
    "title": "舍赫拉查德",
    "url": "./movie-0641.html",
    "cover": "./41.jpg",
    "oneLine": "被囚禁的女孩每晚向军阀讲述一个未完的故事,用叙事换取黎明。",
    "year": "2023",
    "type": "电影",
    "region": "中东/法国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "女性",
      "讲故事",
      "生存",
      "诗意",
      "反抗"
    ],
    "genre": "剧情"
  },
  {
    "id": "0642",
    "title": "世外尘缘",
    "url": "./movie-0642.html",
    "cover": "./42.jpg",
    "oneLine": "上仙为了渡劫下凡,变成了一个手无缚鸡之力的书生,没想到渡劫的雷没来,却被一个凡间小妖赖上了一万年。",
    "year": "2020",
    "type": "剧集",
    "region": "中国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "修仙",
      "凡间",
      "虐恋",
      "师徒",
      "轮回"
    ],
    "genre": "古装,仙侠,爱情"
  },
  {
    "id": "0643",
    "title": "七魔剑支配天下",
    "url": "./movie-0643.html",
    "cover": "./43.jpg",
    "oneLine": "魔法名校里七个被开除的学生组成地下社团,他们的目标是:杀死全校最强的七名教授。",
    "year": "2024",
    "type": "动画",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "魔法学院",
      "复仇",
      "暗黑",
      "群像",
      "剑术"
    ],
    "genre": "奇幻战斗"
  },
  {
    "id": "0644",
    "title": "寂寞男孩",
    "url": "./movie-0644.html",
    "cover": "./44.jpg",
    "oneLine": "17岁的听障男孩通过交友软件认识了一个声音温柔的男人,却不知对方是他亲生父亲的前男友。",
    "year": "2023",
    "type": "电影",
    "region": "中国台湾",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "单亲家庭",
      "网络交友",
      "成长",
      "台北"
    ],
    "genre": "剧情,同性,青春"
  },
  {
    "id": "0645",
    "title": "江湖正道2013",
    "url": "./movie-0645.html",
    "cover": "./45.jpg",
    "oneLine": "女土匪头子被迫收编为抗日游击队,但她那套“江湖规矩”总能把正经的指挥官逼疯,闹出一连串荒诞血泪。",
    "year": "2013",
    "type": "剧集",
    "region": "中国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "抗战",
      "土匪",
      "义气",
      "改编",
      "传奇"
    ],
    "genre": "剧情,历史,战争"
  },
  {
    "id": "0646",
    "title": "暗黑天使1990",
    "url": "./movie-0646.html",
    "cover": "./46.jpg",
    "oneLine": "1990年洛杉矶,一名女警探追查专门杀害堕落天使的连环杀手,却发现自己也成了目标。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "复古",
      "连环杀手",
      "女警探",
      "1990年代"
    ],
    "genre": "惊悚/犯罪/悬疑"
  },
  {
    "id": "0647",
    "title": "金江1936",
    "url": "./movie-0647.html",
    "cover": "./47.jpg",
    "oneLine": "1936年的金江渡口,一支红军后卫连队与当地百姓共同谱写的生死渡江传奇。",
    "year": "2021",
    "type": "电影",
    "region": "中国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "红色题材",
      "长征",
      "军民情"
    ],
    "genre": "战争,历史"
  },
  {
    "id": "0648",
    "title": "镇灵攻略第一季",
    "url": "./movie-0648.html",
    "cover": "./48.jpg",
    "oneLine": "一家看似普通的心理咨询室,真实业务是替客户解决“灵体入侵”的麻烦。",
    "year": "2020",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "捉妖",
      "单元剧",
      "都市传说",
      "团队作战"
    ],
    "genre": "奇幻,悬疑,动作"
  },
  {
    "id": "0649",
    "title": "脑中蜜",
    "url": "./movie-0649.html",
    "cover": "./49.jpg",
    "oneLine": "患阿尔茨海默症的老太太把孙女认成了年轻时的闺蜜,两人开车逃出养老院,去找一片根本不存在的薰衣草田。",
    "year": "2023",
    "type": "电影",
    "region": "德国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "阿尔茨海默",
      "祖孙情",
      "公路旅行",
      "遗忘与爱",
      "催泪"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "0650",
    "title": "原来你是这样的顾先生",
    "url": "./movie-0650.html",
    "cover": "./50.jpg",
    "oneLine": "毒舌霸总顾先生为了遗产被迫与破产千金契约结婚,婚后才发现对方是网上的知名恋爱博主,而自己是她的头号黑粉。",
    "year": "2021",
    "type": "剧集",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "契约婚姻",
      "霸总",
      "反差萌",
      "同居",
      "甜爽"
    ],
    "genre": "爱情喜剧"
  },
  {
    "id": "0651",
    "title": "笨人晚宴",
    "url": "./movie-0651.html",
    "cover": "./51.jpg",
    "oneLine": "华尔街精英们每月举办“笨人晚宴”,邀请最蠢的人当玩具,这次他们请了个数学天才。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "精英主义",
      "整蛊反杀",
      "扮猪吃老虎",
      "社交讽刺"
    ],
    "genre": "喜剧,黑色幽默"
  },
  {
    "id": "0652",
    "title": "悬疑作者求生指南",
    "url": "./movie-0652.html",
    "cover": "./52.jpg",
    "oneLine": "一个专写连环杀手的扑街作者,被反派要求按自己的小说桥段去完美犯罪,否则就杀掉他的编辑。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "作家自救",
      "套娃叙事",
      "荒诞谋杀"
    ],
    "genre": "悬疑,喜剧,犯罪"
  },
  {
    "id": "0653",
    "title": "新难兄难弟",
    "url": "./movie-0653.html",
    "cover": "./53.jpg",
    "oneLine": "嫌弃父亲窝囊的儿子穿越回90年代,竟被迫与年轻时的“废柴”老爸组队拍电影。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "穿越",
      "父子和解",
      "怀旧"
    ],
    "genre": "喜剧,奇幻"
  },
  {
    "id": "0654",
    "title": "导购女郎",
    "url": "./movie-0654.html",
    "cover": "./54.jpg",
    "oneLine": "金牌导购林晓在倒闭商场坚守最后一夜,却意外发现了顾客留下的价值千万的“销冠笔记”。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "百货商场",
      "职场逆袭",
      "销售技巧",
      "商战",
      "女性互助"
    ],
    "genre": "剧情,职场,女性"
  },
  {
    "id": "0655",
    "title": "请吃红小豆吧!第一季",
    "url": "./movie-0655.html",
    "cover": "./55.jpg",
    "oneLine": "一颗梦想被人类吃掉的红豆“红小豆”,在各种各样的甜点里打工,与食物伙伴们展开了一系列沙雕又治愈的日常。",
    "year": "2023",
    "type": "剧集",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "萌系",
      "食物题材",
      "日常",
      "脑洞",
      "轻松"
    ],
    "genre": "动画/治愈"
  },
  {
    "id": "0656",
    "title": "金玉满堂2013",
    "url": "./movie-0656.html",
    "cover": "./56.jpg",
    "oneLine": "大年三十,瘫痪多年的老爷子突然站起,下令全家用一碗最诚心的菜来争夺遗产。",
    "year": "2013",
    "type": "电影",
    "region": "中国香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "年夜饭",
      "家族争产",
      "失忆",
      "美食对决",
      "团圆"
    ],
    "genre": "喜剧,剧情,家庭"
  },
  {
    "id": "0657",
    "title": "公仔炼金术",
    "url": "./movie-0657.html",
    "cover": "./57.jpg",
    "oneLine": "能赋予公仔生命的落魄炼金术师,用一只旧玩偶帮助自闭女孩重新开口说话。",
    "year": "2024",
    "type": "TV Series",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "炼金术",
      "玩偶",
      "亲情",
      "微缩世界"
    ],
    "genre": "奇幻/治愈"
  },
  {
    "id": "0658",
    "title": "攻击鬼魂13号",
    "url": "./movie-0658.html",
    "cover": "./58.jpg",
    "oneLine": "停战区的地下,钻出了一只吃核废料长大的巨兽,和一台1970年代的旧机甲。",
    "year": "2026",
    "type": "电影",
    "region": "韩国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "机甲",
      "朝韩",
      "怪物",
      "政治隐喻"
    ],
    "genre": "动作/科幻"
  },
  {
    "id": "0659",
    "title": "女孩不微笑",
    "url": "./movie-0659.html",
    "cover": "./59.jpg",
    "oneLine": "高中女生恩星从不微笑的短视频意外走红,直到有人发现她在每一个视频里都留下了下一个受害者的名字。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "校园霸凌",
      "社交网络",
      "复仇",
      "反转"
    ],
    "genre": "悬疑/惊悚"
  },
  {
    "id": "0660",
    "title": "蓝百万2",
    "url": "./movie-0660.html",
    "cover": "./60.jpg",
    "oneLine": "上一集花光百万大奖后,穷小子这次意外继承了价值千万的债务和一颗价值连城的钻石。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "财富",
      "黑色幽默",
      "小人物"
    ],
    "genre": "喜剧,剧情"
  },
  {
    "id": "0661",
    "title": "美国谍梦第四季",
    "url": "./movie-0661.html",
    "cover": "./61.jpg",
    "oneLine": "潜伏十年的苏联间谍夫妇接到新任务:策反自家刚考上FBI的儿子。",
    "year": "2018",
    "type": "剧集",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "冷战",
      "间谍",
      "假面夫妻",
      "道德困境"
    ],
    "genre": "悬疑/惊悚/剧情"
  },
  {
    "id": "0662",
    "title": "枭巢荡娃",
    "url": "./movie-0662.html",
    "cover": "./62.jpg",
    "oneLine": "孤儿院长大的女孩被训练成顶级杀手,但她最后一次任务是杀死自己的亲生父亲。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "女杀手",
      "卧底",
      "黑帮",
      "枪战",
      "复仇"
    ],
    "genre": "动作、犯罪"
  },
  {
    "id": "0663",
    "title": "遇见贵人",
    "url": "./movie-0663.html",
    "cover": "./63.jpg",
    "oneLine": "一个破产富二代在殡仪馆打工,接连遇到五位假装“贵人”想骗他遗产的骗子。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "都市",
      "阶层",
      "奇遇",
      "温情"
    ],
    "genre": "喜剧"
  },
  {
    "id": "0664",
    "title": "禁止的关系",
    "url": "./movie-0664.html",
    "cover": "./64.jpg",
    "oneLine": "准新娘发现未婚夫的秘密情人竟是自己的亲姐姐,而姐姐在一场火灾后失忆了。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "禁忌之恋",
      "悬疑",
      "反转",
      "伦理困境"
    ],
    "genre": "爱情/惊悚"
  },
  {
    "id": "0665",
    "title": "背背篓的网球少年",
    "url": "./movie-0665.html",
    "cover": "./65.jpg",
    "oneLine": "大山里的少年背着装满草药和课本的背篓,用削出来的木拍子,打进了温布尔登。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "网球",
      "山区",
      "教育",
      "体育竞技",
      "逆袭"
    ],
    "genre": "运动/青春/励志"
  },
  {
    "id": "0666",
    "title": "错爱天堂",
    "url": "./movie-0666.html",
    "cover": "./66.jpg",
    "oneLine": "女孩在车祸中失去男友,三年后却在相亲对象的手机里看到自己和男友的合照。",
    "year": "2020",
    "type": "电影",
    "region": "中国台湾",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "人鬼情",
      "反转悲剧",
      "催泪弹"
    ],
    "genre": "爱情/奇幻"
  },
  {
    "id": "0667",
    "title": "沙漠之心",
    "url": "./movie-0667.html",
    "cover": "./67.jpg",
    "oneLine": "中国女地质学家与当地向导在撒哈拉腹地遭遇沙暴,两颗心在绝境中靠近。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆/摩洛哥",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "极限生存",
      "跨国恋",
      "文明冲突"
    ],
    "genre": "冒险,爱情,灾难"
  },
  {
    "id": "0668",
    "title": "鬼马小精灵相见欢",
    "url": "./movie-0668.html",
    "cover": "./68.jpg",
    "oneLine": "调皮小精灵误闯古董店,与守店少女结成奇妙搭档,一起阻止黑心商人夺取传说中的“快乐种子”。",
    "year": "1997",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "精灵",
      "魔法",
      "欢喜冤家",
      "冒险",
      "怀旧"
    ],
    "genre": "喜剧/奇幻/家庭"
  },
  {
    "id": "0669",
    "title": "暖暖,请多指教",
    "url": "./movie-0669.html",
    "cover": "./69.jpg",
    "oneLine": "一位社恐的天才甜点师与一位过气偶像男团成员被迫住进同一屋檐下,并签署了一份“不恋爱”合约。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "契约同居",
      "设计师",
      "疗愈"
    ],
    "genre": "爱情,喜剧,偶像"
  },
  {
    "id": "0670",
    "title": "超高速!参勤交代",
    "url": "./movie-0670.html",
    "cover": "./70.jpg",
    "oneLine": "藩主必须在五天内从江户赶回领地,否则藩国将被除名,而他只有三个废柴家臣。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "江户时代",
      "武士",
      "公路片",
      "热血"
    ],
    "genre": "喜剧/历史/动作"
  },
  {
    "id": "0671",
    "title": "黎明前的暗战",
    "url": "./movie-0671.html",
    "cover": "./71.jpg",
    "oneLine": "上海解放前夜,一个银行小职员被国共双方都当成了顶级特工,他只能硬演下去。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "谍战",
      "金融",
      "解放前夕",
      "黄金",
      "背锅"
    ],
    "genre": "剧情,悬疑,历史"
  },
  {
    "id": "0672",
    "title": "恩德培行动",
    "url": "./movie-0672.html",
    "cover": "./72.jpg",
    "oneLine": "1976年,法航客机被劫持至乌干达,以色列突击队奔袭四千公里,展开史上最疯狂的人质营救。",
    "year": "2024",
    "type": "电影",
    "region": "以色列/美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "真实事件改编",
      "反恐",
      "营救人质",
      "特种部队"
    ],
    "genre": "动作/历史/惊悚"
  },
  {
    "id": "0673",
    "title": "早上下班的女人",
    "url": "./movie-0673.html",
    "cover": "./73.jpg",
    "oneLine": "一个在便利店上夜班的女人,每天早上 6 点下班后都会跟踪同一个晨跑男人,直到有一天他消失了。",
    "year": "2022",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "夜班",
      "便利店",
      "孤独",
      "偶遇"
    ],
    "genre": "剧情/悬疑"
  },
  {
    "id": "0674",
    "title": "名侦探学院第五季",
    "url": "./movie-0674.html",
    "cover": "./74.jpg",
    "oneLine": "新一季学院迎来南北对抗赛,八位高材生将在实景古堡中进行连续七天的高强度推理淘汰赛。",
    "year": "2023",
    "type": "综艺",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "学霸综艺",
      "剧本杀",
      "密室逃脱",
      "高智商对决"
    ],
    "genre": "真人秀/悬疑/益智"
  },
  {
    "id": "0675",
    "title": "穿越雪季",
    "url": "./movie-0675.html",
    "cover": "./75.jpg",
    "oneLine": "因误会分手八年的恋人在一场暴雪中被困同一列火车,而车程只有七小时。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "雪景",
      "久别重逢",
      "遗憾",
      "治愈"
    ],
    "genre": "爱情/剧情"
  },
  {
    "id": "0676",
    "title": "美国金梦 第一季",
    "url": "./movie-0676.html",
    "cover": "./76.jpg",
    "oneLine": "五个走投无路的新移民,决定合伙在洛杉矶开一家“假身份黑市超市”。",
    "year": "2024",
    "type": "剧集",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "新移民",
      "地下经济",
      "阶层跃迁",
      "黑色喜剧",
      "群像戏"
    ],
    "genre": "剧情/犯罪/黑色幽默"
  },
  {
    "id": "0677",
    "title": "一日重生",
    "url": "./movie-0677.html",
    "cover": "./77.jpg",
    "oneLine": "癌症晚期的儿子获得一次“一日重生”机会,回到父亲自杀前的那天,尝试阻止他。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "时光倒流",
      "父子",
      "和解",
      "遗憾",
      "催泪"
    ],
    "genre": "剧情、奇幻、家庭"
  },
  {
    "id": "0678",
    "title": "将军夫人为何那样",
    "url": "./movie-0678.html",
    "cover": "./78.jpg",
    "oneLine": "现代女总裁穿越成将军夫人,将军百般嫌弃她想让她知难而退,她却用现代经营手段把将军府打造成了商业帝国。",
    "year": "2026",
    "type": "剧集",
    "region": "韩国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "穿越",
      "先婚后爱",
      "女强男弱"
    ],
    "genre": "古装/喜剧"
  },
  {
    "id": "0679",
    "title": "姊姊妹妹站起来",
    "url": "./movie-0679.html",
    "cover": "./79.jpg",
    "oneLine": "老北京妓院里的血泪史,解放后曾被迫害的女性们如何挺起胸膛,走向新生,将恶霸送上刑场。",
    "year": "1951",
    "type": "电影",
    "region": "中国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "旧社会",
      "女性觉醒",
      "解放",
      "纪实",
      "经典"
    ],
    "genre": "剧情,历史"
  },
  {
    "id": "0680",
    "title": "圣烟烈情",
    "url": "./movie-0680.html",
    "cover": "./80.jpg",
    "oneLine": "1900年澳洲内陆,一位英国传教士之妻与一名土著逃犯在逃亡路上,用身体与烈酒对抗整个殖民世界。",
    "year": "2023",
    "type": "电影",
    "region": "澳大利亚/美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "澳大利亚",
      "荒野",
      "禁忌之恋",
      "传教士",
      "异域"
    ],
    "genre": "爱情/剧情/西部"
  },
  {
    "id": "0681",
    "title": "恶魔的耳语",
    "url": "./movie-0681.html",
    "cover": "./81.jpg",
    "oneLine": "心理医生为拯救被噩梦折磨的女人,却发现那来自黑暗深处的耳语,正逐渐侵入自己的大脑。",
    "year": "2027",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "精神分裂",
      "心理游戏",
      "密室",
      "反转",
      "高智商犯罪"
    ],
    "genre": "悬疑,惊悚"
  },
  {
    "id": "0682",
    "title": "假装情侣",
    "url": "./movie-0682.html",
    "cover": "./82.jpg",
    "oneLine": "为保住工作,社畜花钱租了个“完美男友”见客户,没想到对方竟是公司新来的太子爷。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "契约恋爱",
      "办公室",
      "富二代",
      "反套路"
    ],
    "genre": "喜剧/爱情"
  },
  {
    "id": "0683",
    "title": "金装大酒店",
    "url": "./movie-0683.html",
    "cover": "./83.jpg",
    "oneLine": "一家号称“六星级”的香港老牌酒店在回归前夕迎来最后一批贵客,上至经理下至门童,都在试图抓住这个改变命运的最后机会。",
    "year": "1990",
    "type": "电影",
    "region": "香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "酒店",
      "群像",
      "小人物"
    ],
    "genre": "剧情,喜剧,爱情"
  },
  {
    "id": "0684",
    "title": "燃烧的勇士",
    "url": "./movie-0684.html",
    "cover": "./84.jpg",
    "oneLine": "一场连环爆炸困住了整栋大楼,一支普通消防队选择逆火而行。",
    "year": "2019",
    "type": "电影",
    "region": "韩国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "消防员",
      "爆炸",
      "舍己救人",
      "催泪"
    ],
    "genre": "动作,灾难"
  },
  {
    "id": "0685",
    "title": "杂技工",
    "url": "./movie-0685.html",
    "cover": "./85.jpg",
    "oneLine": "一个没落杂技团的维修工,为了保住父亲的绝活,偷偷练成了失传的高空飞人。",
    "year": "2023",
    "type": "电影",
    "region": "中国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "杂技",
      "父子",
      "传承",
      "小人物"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "0686",
    "title": "陆行鲨",
    "url": "./movie-0686.html",
    "cover": "./86.jpg",
    "oneLine": "基因改造的鲨鱼长出四肢登陆悉尼,全城上演陆地逃杀。",
    "year": "2023",
    "type": "电影",
    "region": "美国/澳大利亚",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "变异鲨鱼",
      "陆地",
      "基因实验",
      "灾难"
    ],
    "genre": "动作/科幻/惊悚"
  },
  {
    "id": "0687",
    "title": "史努比的惊险夏令营",
    "url": "./movie-0687.html",
    "cover": "./87.jpg",
    "oneLine": "史努比带着糊涂塌客去夏令营,却发现营地的“湖怪”其实是一台失控的无人机。",
    "year": "2025",
    "type": "电影/动画",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "史努比",
      "花生漫画",
      "夏令营",
      "友谊",
      "搞笑"
    ],
    "genre": "动画/家庭/冒险"
  },
  {
    "id": "0688",
    "title": "反诈风暴之情爱迷局",
    "url": "./movie-0688.html",
    "cover": "./88.jpg",
    "oneLine": "反诈女警追查“杀猪盘”团伙,却发现自己网恋三个月的“高富帅男友”正是头号诈骗犯,且已骗走母亲养老钱。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "杀猪盘",
      "反诈",
      "真实事件改编",
      "女性"
    ],
    "genre": "犯罪,剧情,悬疑"
  },
  {
    "id": "0689",
    "title": "拿坡里黄金",
    "url": "./movie-0689.html",
    "cover": "./89.jpg",
    "oneLine": "二战尾声,那不勒斯披萨师傅用祖传金秘方跟黑手党换了一船犹太人。",
    "year": "2025",
    "type": "电影",
    "region": "意大利",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "那不勒斯",
      "黑手党",
      "披萨",
      "遗产",
      "二战"
    ],
    "genre": "剧情,犯罪,历史"
  },
  {
    "id": "0690",
    "title": "2010威震太阳神",
    "url": "./movie-0690.html",
    "cover": "./90.jpg",
    "oneLine": "2010年,一次超级太阳风暴摧毁了国际空间站,地球上的宇航员家人必须引导他们返回。",
    "year": "2024",
    "type": "电影",
    "region": "美国/英国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "太空灾难",
      "硬科幻",
      "太阳风暴",
      "求生"
    ],
    "genre": "科幻,冒险,灾难"
  },
  {
    "id": "0691",
    "title": "呆瓜兄弟",
    "url": "./movie-0691.html",
    "cover": "./91.jpg",
    "oneLine": "一对智商欠费的同母异父兄弟在小镇上开了一家万能维修店,每单生意都以灾难收场。",
    "year": "2024",
    "type": "剧集",
    "region": "意大利",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "笨蛋兄弟",
      "小镇",
      "乌龙"
    ],
    "genre": "喜剧、生活"
  },
  {
    "id": "0692",
    "title": "瞧!你这小脾气",
    "url": "./movie-0692.html",
    "cover": "./92.jpg",
    "oneLine": "暴躁女程序员与佛系男产品经理被迫同居,代码和爱情都乱码了。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "欢喜冤家",
      "职场",
      "成长治愈",
      "轻喜"
    ],
    "genre": "喜剧/爱情"
  },
  {
    "id": "0693",
    "title": "黑暗的教训",
    "url": "./movie-0693.html",
    "cover": "./93.jpg",
    "oneLine": "一名被迫退休的法官在地下法庭审理活人案件,而最新被告是谋杀她女儿的凶手。",
    "year": "2024",
    "type": "剧集",
    "region": "英国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "私刑正义",
      "地下法庭",
      "道德困境"
    ],
    "genre": "犯罪/悬疑"
  },
  {
    "id": "0694",
    "title": "我必须离开",
    "url": "./movie-0694.html",
    "cover": "./94.jpg",
    "oneLine": "完美的模范丈夫在家庭烧烤派对上突然开车离家出走,留给妻儿一盘解释原因的录像带。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "中年危机",
      "断舍离",
      "寻找自我"
    ],
    "genre": "剧情,家庭,心理"
  },
  {
    "id": "0695",
    "title": "民主万岁",
    "url": "./movie-0695.html",
    "cover": "./95.jpg",
    "oneLine": "一支专门帮烂候选人赢选举的竞选团队,这次接了个烫手山芋:让一头驴当选镇长。",
    "year": "2025",
    "type": "剧集",
    "region": "法国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "选举风云",
      "幕后操盘手",
      "黑色幽默"
    ],
    "genre": "剧情/政治/讽刺"
  },
  {
    "id": "0696",
    "title": "遵守法律",
    "url": "./movie-0696.html",
    "cover": "./96.jpg",
    "oneLine": "在一座没有道德只有法律的城市,一名警察因为“太善良”而被列为头号通缉犯。",
    "year": "2024",
    "type": "剧集",
    "region": "德国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "律政",
      "反乌托邦",
      "道德",
      "烧脑",
      "人性"
    ],
    "genre": "犯罪,剧情"
  },
  {
    "id": "0697",
    "title": "毬谣魔影",
    "url": "./movie-0697.html",
    "cover": "./97.jpg",
    "oneLine": "落魄粤剧戏班为还债重演禁戏《毬谣》,每次彩排后都有一名演员按戏中死法离奇惨死。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "粤剧",
      "邪典",
      "诅咒",
      "戏班",
      "民俗恐怖"
    ],
    "genre": "恐怖/悬疑/民俗"
  },
  {
    "id": "0698",
    "title": "总之就是非常可爱~制服~",
    "url": "./movie-0698.html",
    "cover": "./98.jpg",
    "oneLine": "新婚之夜妻子坚持只穿高中制服,且绝口不提之前的十年人生。",
    "year": "2025",
    "type": "剧集/动漫",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "婚后生活",
      "制服",
      "神秘",
      "治愈",
      "甜宠"
    ],
    "genre": "爱情/喜剧/奇幻"
  },
  {
    "id": "0699",
    "title": "玛歌皇后",
    "url": "./movie-0699.html",
    "cover": "./99.jpg",
    "oneLine": "1572年,天主教公主玛格丽特被迫嫁给新教徒国王,婚礼后的第六天,巴黎发生了一场屠杀。",
    "year": "1994",
    "type": "电影",
    "region": "法国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "圣巴托洛缪大屠杀",
      "宫廷",
      "改编自大仲马"
    ],
    "genre": "剧情/爱情/历史"
  },
  {
    "id": "0700",
    "title": "远方的狗吠声",
    "url": "./movie-0700.html",
    "cover": "./100.jpg",
    "oneLine": "叙利亚边境村庄,十岁男孩每天模仿狗叫,试图用声音吓跑随时可能空袭的战机。",
    "year": "2019",
    "type": "电影",
    "region": "土耳其/法国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "叙利亚",
      "难民",
      "儿童"
    ],
    "genre": "剧情,战争"
  },
  {
    "id": "0701",
    "title": "三个人的麻烦",
    "url": "./movie-0701.html",
    "cover": "./101.jpg",
    "oneLine": "他同时甩了两个女友后失忆了,现在两个“前女友”都自称是他现女友,争着照顾他。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "三角关系",
      "身份错位",
      "黑色幽默",
      "前任攻略"
    ],
    "genre": "喜剧,爱情,剧情"
  },
  {
    "id": "0702",
    "title": "夏天的滋味",
    "url": "./movie-0702.html",
    "cover": "./102.jpg",
    "oneLine": "1997年河内的夏天,三姐妹在一场葬礼后,各自在闷热的房间里品尝着禁忌的秘密。 母亲去世后,三姐妹在父亲的老房子里度过最后一个夏天,冰箱里的鱼露正在慢慢变质。",
    "year": "2022",
    "type": "电影",
    "region": "越南",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "河内",
      "蝉鸣",
      "闷骚",
      "女性视角"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "0703",
    "title": "人渣的本愿",
    "url": "./movie-0703.html",
    "cover": "./103.jpg",
    "oneLine": "一对各自有暗恋对象的高中生,伪装成情侣互相取暖,却逐渐不可自拔。",
    "year": "2024",
    "type": "电视剧",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "扭曲恋爱",
      "伪装情侣",
      "心理",
      "成人",
      "日剧"
    ],
    "genre": "爱情伦理"
  },
  {
    "id": "0704",
    "title": "我亲爱的莫妮卡",
    "url": "./movie-0704.html",
    "cover": "./104.jpg",
    "oneLine": "女孩在祖母的老房子里找到了一个名叫莫妮卡的洋娃娃,此后每晚,她都会梦见自己变成了莫妮卡。",
    "year": "2024",
    "type": "电影",
    "region": "印度尼西亚",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "洋娃娃",
      "诅咒",
      "童年阴影"
    ],
    "genre": "恐怖,悬疑"
  },
  {
    "id": "0705",
    "title": "追寻爱情的异乡客",
    "url": "./movie-0705.html",
    "cover": "./105.jpg",
    "oneLine": "叙利亚难民画家与意大利退休女教授,开着破露营车穿越欧洲寻找一幅画中女子的真实身份。",
    "year": "2019",
    "type": "电影",
    "region": "法国,意大利",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "异国",
      "漂泊",
      "寻爱",
      "文艺",
      "邂逅"
    ],
    "genre": "爱情,剧情,公路"
  },
  {
    "id": "0706",
    "title": "圣诞男孩",
    "url": "./movie-0706.html",
    "cover": "./106.jpg",
    "oneLine": "一个被樵夫收养的孤儿意外进入魔法森林,发现圣诞老人的红袍其实是用一百个孩子的快乐编织而成的。",
    "year": "2025",
    "type": "电影",
    "region": "芬兰/英国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "圣诞老人前传",
      "驯鹿",
      "孤儿",
      "温暖",
      "北欧"
    ],
    "genre": "奇幻、家庭、冒险"
  },
  {
    "id": "0707",
    "title": "远程遇害",
    "url": "./movie-0707.html",
    "cover": "./107.jpg",
    "oneLine": "六人视频会议中,主持人突然被杀,而凶手就在剩下的五个头像之中。",
    "year": "2024",
    "type": "电视剧",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "网络会议",
      "密闭空间",
      "本格推理"
    ],
    "genre": "悬疑/犯罪"
  },
  {
    "id": "0708",
    "title": "罗宾汉的滑稽冒险",
    "url": "./movie-0708.html",
    "cover": "./108.jpg",
    "oneLine": "谢伍德森林被开发商盯上,罗宾汉带领一帮失业打工人用“合法抗议”的方式劫富济自己。",
    "year": "2024",
    "type": "剧集",
    "region": "英国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "恶搞",
      "英式幽默",
      "环保",
      "游侠",
      "打工人"
    ],
    "genre": "喜剧/冒险"
  },
  {
    "id": "0709",
    "title": "逃离疯人院",
    "url": "./movie-0709.html",
    "cover": "./109.jpg",
    "oneLine": "她醒来后发现自己是精神病院的病人,但每次试图证明自己正常,都会重置回入院那一天。",
    "year": "2026",
    "type": "剧集",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "无限流",
      "精神控制",
      "高智商女主"
    ],
    "genre": "悬疑/惊悚"
  },
  {
    "id": "0710",
    "title": "冒牌搭档",
    "url": "./movie-0710.html",
    "cover": "./110.jpg",
    "oneLine": "过气动作明星的替身,被迫假扮他去领奖,结果被国际杀手当成正主追杀。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "替身",
      "明星",
      "反转"
    ],
    "genre": "动作,喜剧"
  },
  {
    "id": "0711",
    "title": "湘西往事",
    "url": "./movie-0711.html",
    "cover": "./111.jpg",
    "oneLine": "1950年湘西剿匪,解放军排长发现最大土匪头子竟是当年救过他的结拜大哥。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "土匪",
      "剿匪",
      "兄弟"
    ],
    "genre": "剧情,历史"
  },
  {
    "id": "0712",
    "title": "镜中的梦幻城",
    "url": "./movie-0712.html",
    "cover": "./112.jpg",
    "oneLine": "公主每夜入睡后,灵魂会穿过铜镜进入平行世界,那里她是个手握兵权的女将军。",
    "year": "2026",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "双重人格",
      "宫廷权谋",
      "镜像世界",
      "大女主"
    ],
    "genre": "古装奇幻"
  },
  {
    "id": "0713",
    "title": "黑街霸王",
    "url": "./movie-0713.html",
    "cover": "./113.jpg",
    "oneLine": "台北夜市摊贩为对抗收保护费的黑帮,推举最怂的鱼贩当“霸王”。",
    "year": "2024",
    "type": "电影",
    "region": "中国台湾",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "夜市",
      "黑帮",
      "父子",
      "底层"
    ],
    "genre": "犯罪剧情"
  },
  {
    "id": "0714",
    "title": "少女终末旅行",
    "url": "./movie-0714.html",
    "cover": "./114.jpg",
    "oneLine": "在人类灭亡后的废土世界,两个少女开着半履带车,寻找“最后的食物”和“活着的意义”。",
    "year": "2026",
    "type": "动画剧集",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "末日",
      "公路片",
      "百合",
      "哲学",
      "废土"
    ],
    "genre": "科幻,治愈"
  },
  {
    "id": "0715",
    "title": "无法抗拒的爱",
    "url": "./movie-0715.html",
    "cover": "./115.jpg",
    "oneLine": "一个女人被植入了亡夫的记忆,醒来后爱上了记忆里的自己,但那个“自己”根本不是她。",
    "year": "2020",
    "type": "剧集",
    "region": "韩国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "宿命",
      "失忆",
      "替身",
      "虐恋"
    ],
    "genre": "爱情/奇幻"
  },
  {
    "id": "0716",
    "title": "《荒岛假期》",
    "url": "./movie-0716.html",
    "cover": "./116.jpg",
    "oneLine": "两个互相憎恨的同事意外流落无人荒岛,当救援到来时,他们却联手把救援船给炸了,只因为不想结束这场“假期”。",
    "year": "2018",
    "type": "电影",
    "region": "英国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "荒岛求生",
      "冤家路窄",
      "黑色幽默"
    ],
    "genre": "喜剧,冒险"
  },
  {
    "id": "0717",
    "title": "最美丽的夜晚",
    "url": "./movie-0717.html",
    "cover": "./117.jpg",
    "oneLine": "绝症患者花光积蓄买下巴黎最贵的一夜,只为和一个陌生人完成一张遗愿清单。",
    "year": "2024",
    "type": "电影",
    "region": "法国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "一夜情缘",
      "生命倒计时",
      "存在主义",
      "巴黎夜景"
    ],
    "genre": "剧情,爱情,文艺"
  },
  {
    "id": "0718",
    "title": "17号出入口",
    "url": "./movie-0718.html",
    "cover": "./118.jpg",
    "oneLine": "每天在地下铁上班的孤独管理员,发现自己值勤的17号出入口,能通往平行世界的“人生修正站”。",
    "year": "2019",
    "type": "电影",
    "region": "韩国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "地铁",
      "平行宇宙",
      "社畜",
      "救赎"
    ],
    "genre": "剧情,奇幻,悬疑"
  },
  {
    "id": "0719",
    "title": "斯宾塞如是说",
    "url": "./movie-0719.html",
    "cover": "./119.jpg",
    "oneLine": "一位罹患妄想症的哲学教授坚信自己是一桩谋杀案的唯一目击者,尽管那场谋杀只发生在他的逻辑推导里。",
    "year": "2024",
    "type": "剧集",
    "region": "英国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "哲学侦探",
      "心理分析",
      "英伦"
    ],
    "genre": "传记,剧情"
  },
  {
    "id": "0720",
    "title": "软弱啊",
    "url": "./movie-0720.html",
    "cover": "./120.jpg",
    "oneLine": "中学教师高桥目睹学生被霸凌却选择沉默,十五年后,当年的施暴者成了他的上司。",
    "year": "2018",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "校园霸凌",
      "道德困境",
      "复仇",
      "群像"
    ],
    "genre": "剧情/心理"
  },
  {
    "id": "0721",
    "title": "神犬出击",
    "url": "./movie-0721.html",
    "cover": "./121.jpg",
    "oneLine": "一条因PTSD退役的军犬,被一个留守儿童无意唤醒战斗本能,联手对抗偷猎集团。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "军犬",
      "退役",
      "儿童",
      "反偷猎"
    ],
    "genre": "动作/家庭/冒险"
  },
  {
    "id": "0722",
    "title": "做我太太一百天",
    "url": "./movie-0722.html",
    "cover": "./122.jpg",
    "oneLine": "为了继承父亲的百亿遗产,社畜女孩被迫与冷漠CEO签订了为期一百天的“临时妻子”合同。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "契约婚姻",
      "先婚后爱",
      "商战",
      "治愈"
    ],
    "genre": "剧情/家庭/爱情"
  },
  {
    "id": "0723",
    "title": "20美元",
    "url": "./movie-0723.html",
    "cover": "./123.jpg",
    "oneLine": "一张假钞从流浪汉手中流入华尔街,串联起七个荒诞又心酸的人生。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "犯罪",
      "多线叙事",
      "命运",
      "小人物"
    ],
    "genre": "剧情/黑色幽默"
  },
  {
    "id": "0724",
    "title": "欢迎来到威利茨",
    "url": "./movie-0724.html",
    "cover": "./124.jpg",
    "oneLine": "这栋房子会吃掉你的睡眠,一旦你在这里睡着,就会在现实中成为永远游荡的梦魇。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "鬼屋",
      "真实案件",
      "梦境入侵",
      "低配高能"
    ],
    "genre": "恐怖"
  },
  {
    "id": "0725",
    "title": "金银花开",
    "url": "./movie-0725.html",
    "cover": "./125.jpg",
    "oneLine": "城里来的音乐老师发现,大山里的孩子唱不出“快乐”,因为他们从来不知道快乐是什么滋味。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "留守儿童",
      "支教",
      "音乐",
      "治愈"
    ],
    "genre": "剧情,儿童,家庭"
  },
  {
    "id": "0726",
    "title": "心智相投",
    "url": "./movie-0726.html",
    "cover": "./126.jpg",
    "oneLine": "一款能同步人类大脑的设备问世后,七名使用者接连失踪,而他们的记忆全部指向同一个“完美嫌疑人”。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "脑机接口",
      "共情犯罪",
      "心理操控"
    ],
    "genre": "科幻惊悚"
  },
  {
    "id": "0727",
    "title": "小王子公主心",
    "url": "./movie-0727.html",
    "cover": "./127.jpg",
    "oneLine": "一位梦想成为公主的七岁王子,用纯真挑战了整个王国的规矩,也改变了国王父亲的心。",
    "year": "2022",
    "type": "电影",
    "region": "法国/比利时",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "性别认知",
      "成长",
      "童话",
      "治愈"
    ],
    "genre": "剧情,儿童,家庭"
  },
  {
    "id": "0728",
    "title": "糟糕的夏天",
    "url": "./movie-0728.html",
    "cover": "./128.jpg",
    "oneLine": "十五岁那年夏天,三个少年在海边小镇的废弃别墅里,玩了一场关于“成人”的危险游戏。",
    "year": "2025",
    "type": "电影",
    "region": "法国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "青春残酷",
      "乡村封闭",
      "欲望觉醒",
      "意外悲剧"
    ],
    "genre": "剧情/青春"
  },
  {
    "id": "0729",
    "title": "加菲猫和他的朋友们第七季",
    "url": "./movie-0729.html",
    "cover": "./129.jpg",
    "oneLine": "加菲猫又胖了三斤,而乔恩终于交到了女朋友,家里多了一只爱整洁的猫。",
    "year": "2028",
    "type": "动画剧集",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "搞笑",
      "宠物",
      "日常",
      "经典回归"
    ],
    "genre": "喜剧,动画"
  },
  {
    "id": "0730",
    "title": "睡前故事",
    "url": "./movie-0730.html",
    "cover": "./130.jpg",
    "oneLine": "每晚女儿点的童话,竟与三十年前小镇未破的连环失踪案一一对应。",
    "year": "2022",
    "type": "剧集",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "都市传说",
      "反转",
      "单元剧",
      "细思极恐"
    ],
    "genre": "悬疑,奇幻,惊悚"
  },
  {
    "id": "0731",
    "title": "信任2025",
    "url": "./movie-0731.html",
    "cover": "./131.jpg",
    "oneLine": "在一个由AI算法决定每个人“信用分”的未来英国,一名低分女子发现系统存在致命漏洞。",
    "year": "2025",
    "type": "剧集",
    "region": "英国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "AI",
      "社会信用",
      "反乌托邦",
      "隐私"
    ],
    "genre": "科幻伦理"
  },
  {
    "id": "0732",
    "title": "像两滴水",
    "url": "./movie-0732.html",
    "cover": "./132.jpg",
    "oneLine": "同卵双胞胎兄弟从小玩身份互换游戏,直到其中一人爱上另一人的女友。",
    "year": "2025",
    "type": "电影",
    "region": "阿根廷",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "双胞胎",
      "身份互换",
      "禁忌之恋",
      "迷宫"
    ],
    "genre": "剧情/同性"
  },
  {
    "id": "0733",
    "title": "爱情领域",
    "url": "./movie-0733.html",
    "cover": "./133.jpg",
    "oneLine": "恋综嘉宾戴上情感监测芯片后,节目组发现“心动信号”全是她演的。",
    "year": "2025",
    "type": "电影",
    "region": "法国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "恋综",
      "脑机接口",
      "假戏真做",
      "反乌托邦"
    ],
    "genre": "爱情,科幻,剧情"
  },
  {
    "id": "0734",
    "title": "阿帕鲁萨镇",
    "url": "./movie-0734.html",
    "cover": "./134.jpg",
    "oneLine": "两位镇治安官用铁腕维护阿帕鲁萨镇的秩序,直到一个外来女人的到来打破了他们的联盟。",
    "year": "2008",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "西部",
      "执法者",
      "权力斗争",
      "小镇",
      "枪战"
    ],
    "genre": "西部,剧情,犯罪"
  },
  {
    "id": "0735",
    "title": "罗美雪妮黛的美丽与哀愁",
    "url": "./movie-0735.html",
    "cover": "./135.jpg",
    "oneLine": "聚焦“茜茜公主”扮演者罗密·施奈德光环背后,被母亲剥削、被舆论撕碎的真实一生。",
    "year": "2025",
    "type": "传记电影",
    "region": "法国/德国/奥地利",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "罗密·施奈德",
      "茜茜公主",
      "悲剧人生",
      "母女关系",
      "成名代价"
    ],
    "genre": "传记、剧情、历史"
  },
  {
    "id": "0736",
    "title": "江南平寇记",
    "url": "./movie-0736.html",
    "cover": "./136.jpg",
    "oneLine": "明朝嘉靖年间,一支溃败的盐帮与朝廷水师残部联手,在江南水乡展开了一场智勇双全的伏击战。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "明朝水师",
      "抗倭",
      "冷兵器对战",
      "家国情怀",
      "硬核动作"
    ],
    "genre": "动作/历史/武侠"
  },
  {
    "id": "0737",
    "title": "噬血狂袭 消失的圣枪篇",
    "url": "./movie-0737.html",
    "cover": "./137.jpg",
    "oneLine": "最强的“第四真祖”发现自己的圣枪被亲妹妹盗走,用以复活古代弑神兵器。",
    "year": "2025",
    "type": "OVA",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "战斗",
      "圣枪",
      "遗产",
      "姐妹反目",
      "觉醒"
    ],
    "genre": "动作,奇幻,吸血鬼"
  },
  {
    "id": "0738",
    "title": "最强会长黑神第二季",
    "url": "./movie-0738.html",
    "cover": "./138.jpg",
    "oneLine": "全能会长黑神目高遭遇神秘转学生,她的“完美”即将被颠覆。",
    "year": "2013",
    "type": "TV剧集",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "超能力",
      "学生会",
      "热血",
      "反转"
    ],
    "genre": "动画,校园,奇幻"
  },
  {
    "id": "0739",
    "title": "《收获月》",
    "url": "./movie-0739.html",
    "cover": "./139.jpg",
    "oneLine": "东京失业的码农回到乡下老家,为了糊口开始种水稻,却发现田里住着一位能预知未来的稻荷神。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "治愈",
      "慢生活",
      "种田",
      "人生哲理"
    ],
    "genre": "剧情/乡村/美食"
  },
  {
    "id": "0740",
    "title": "黎明(1990年电影)",
    "url": "./movie-0740.html",
    "cover": "./140.jpg",
    "oneLine": "1990年除夕夜,两个亲如兄弟的杀手接到同一个任务:杀死对方。",
    "year": "1990",
    "type": "电影",
    "region": "中国香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "枪战",
      "兄弟情",
      "时代眼泪",
      "吴宇森风"
    ],
    "genre": "动作/犯罪"
  },
  {
    "id": "0741",
    "title": "摇滚总动员",
    "url": "./movie-0741.html",
    "cover": "./141.jpg",
    "oneLine": "四个小镇修车工为追寻摇滚梦,竟偷了顾客的豪车一路狂飙去参加决赛。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "小镇青年",
      "乐队",
      "逆袭",
      "热血",
      "荒诞"
    ],
    "genre": "喜剧/音乐"
  },
  {
    "id": "0742",
    "title": "绝对可怜小孩",
    "url": "./movie-0742.html",
    "cover": "./142.jpg",
    "oneLine": "三个拥有毁天灭地超能力的小学生,因为太强而被招进特务科,他们的日常就是维护世界和平顺便补作业。",
    "year": "2024",
    "type": "动画",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "超能力小学生",
      "特务机构",
      "反差萌",
      "脑洞大开",
      "团队协作"
    ],
    "genre": "科幻,搞笑,战斗,日常"
  },
  {
    "id": "0743",
    "title": "水墨人生第二季",
    "url": "./movie-0743.html",
    "cover": "./143.jpg",
    "oneLine": "第一季结尾,程家大少爷成了植物人,第二季开局,他的双胞胎弟弟带着新式水墨画技归来复仇。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "国画",
      "民国",
      "商战",
      "家族恩怨",
      "非遗"
    ],
    "genre": "剧情,古装"
  },
  {
    "id": "0744",
    "title": "阿尔法 (2019年电影)",
    "url": "./movie-0744.html",
    "cover": "./144.jpg",
    "oneLine": "在一座由全能AI“阿尔法”统治的完美城市里,一名负责清除BUG的工程师偶然发现了自己身世的秘密。",
    "year": "2019",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "人工智能",
      "反乌托邦",
      "觉醒"
    ],
    "genre": "科幻/悬疑"
  },
  {
    "id": "0745",
    "title": "阿爸",
    "url": "./movie-0745.html",
    "cover": "./145.jpg",
    "oneLine": "在新加坡打工二十年的马来西亚华裔清洁工,患上失智症后只记得回老家的一条路,儿子决定陪他走最后一次。",
    "year": "2019",
    "type": "电影",
    "region": "新加坡",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "父子",
      "移民",
      "老年痴呆"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "0746",
    "title": "玉米地的小孩:大逃亡",
    "url": "./movie-0746.html",
    "cover": "./146.jpg",
    "oneLine": "被邪教囚禁在玉米地的孩子们,借助一场神秘的虫灾发动大规模逃亡。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "邪教",
      "儿童",
      "逃亡",
      "麦田怪圈"
    ],
    "genre": "恐怖,惊悚"
  },
  {
    "id": "0747",
    "title": "谁伴我一生",
    "url": "./movie-0747.html",
    "cover": "./147.jpg",
    "oneLine": "一个被子女遗忘的独居老人,在网上花钱“租”了一个假孙女,没想到假戏真做了十年。",
    "year": "2024",
    "type": "剧集",
    "region": "中国台湾",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "独居老人",
      "跨代陪伴",
      "晚年救赎"
    ],
    "genre": "家庭/剧情"
  },
  {
    "id": "0748",
    "title": "怪胎圣诞节",
    "url": "./movie-0748.html",
    "cover": "./148.jpg",
    "oneLine": "一个不相信圣诞节的少年被罚去圣诞老人工坊“劳改”,却发现那里的精灵全是社会边缘人。",
    "year": "2019",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "圣诞",
      "家庭",
      "怪咖",
      "荒诞"
    ],
    "genre": "喜剧,奇幻"
  },
  {
    "id": "0749",
    "title": "三生三世只爱你",
    "url": "./movie-0749.html",
    "cover": "./149.jpg",
    "oneLine": "天界战神为救魔界女帝耗尽修为轮回三世,每一世她都先爱上他,每一世他都在洞房花烛夜亲手杀了她。",
    "year": "2026",
    "type": "剧集",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "仙侠",
      "轮回",
      "失忆",
      "虐恋"
    ],
    "genre": "爱情、奇幻、古装"
  },
  {
    "id": "0750",
    "title": "猪法奇缘",
    "url": "./movie-0750.html",
    "cover": "./150.jpg",
    "oneLine": "霸道总裁被诅咒变成一只猪,只有真心的吻才能复原,但他偏偏落到了一个养猪少女手里。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "奇幻爱情",
      "养猪",
      "甜宠",
      "沙雕"
    ],
    "genre": "奇幻/爱情/喜剧"
  },
  {
    "id": "0751",
    "title": "凯撒",
    "url": "./movie-0751.html",
    "cover": "./1.jpg",
    "oneLine": "一只被用于基因实验的黑猩猩在获得超高智商后,策划了一场从实验室到华尔街的无声革命。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "基因编辑",
      "猩球崛起",
      "反乌托邦",
      "觉醒",
      "病毒危机"
    ],
    "genre": "科幻/惊悚"
  },
  {
    "id": "0752",
    "title": "钝感之爱",
    "url": "./movie-0752.html",
    "cover": "./2.jpg",
    "oneLine": "一个患有先天性痛觉缺失症的男人,试图通过伤害自己来感受女友的爱。",
    "year": "2017",
    "type": "电影",
    "region": "德国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "残疾",
      "亲密关系",
      "社会边缘",
      "文艺",
      "反思"
    ],
    "genre": "剧情,爱情"
  },
  {
    "id": "0753",
    "title": "死亡飞车:混乱之上",
    "url": "./movie-0753.html",
    "cover": "./3.jpg",
    "oneLine": "最疯狂的死亡飞车不在监狱,而在城市街道,所有市民都是观众。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "飙车",
      "暴力",
      "越狱",
      "反乌托邦"
    ],
    "genre": "动作、惊悚"
  },
  {
    "id": "0754",
    "title": "少林英雄之方世玉洪熙官",
    "url": "./movie-0754.html",
    "cover": "./4.jpg",
    "oneLine": "当玩世不恭的方世玉遇上隐忍稳重的洪熙官,两人被迫联手对抗朝廷密使。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "少林寺",
      "少年英雄",
      "硬核打斗",
      "兄弟情"
    ],
    "genre": "动作,武侠"
  },
  {
    "id": "0755",
    "title": "一袋锤子",
    "url": "./movie-0755.html",
    "cover": "./5.jpg",
    "oneLine": "一袋被错拿的作案工具,牵连出房地产商、小偷、保安和外卖员之间荒诞的生死竞速。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "多线叙事",
      "国产黑色",
      "荒诞"
    ],
    "genre": "犯罪,黑色幽默"
  },
  {
    "id": "0756",
    "title": "当心瘦削人",
    "url": "./movie-0756.html",
    "cover": "./6.jpg",
    "oneLine": "三个女孩为了涨粉拍摄“召唤瘦削人”视频,不久后其中一人失踪,而剩下的两人发现,这个都市传说正在通过镜头吃掉观众。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "都市传说",
      "瘦削人",
      "网络恐怖",
      "青少年"
    ],
    "genre": "恐怖/悬疑/伪纪录片"
  },
  {
    "id": "0757",
    "title": "虎儿猛将",
    "url": "./movie-0757.html",
    "cover": "./7.jpg",
    "oneLine": "山村少年误入猛将秘境,习得虎形拳,为救爷爷勇闯地下斗兽场。",
    "year": "2022",
    "type": "动画",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "少年",
      "成长",
      "中国功夫"
    ],
    "genre": "动作,家庭,奇幻"
  },
  {
    "id": "0758",
    "title": "当代奸雄",
    "url": "./movie-0758.html",
    "cover": "./8.jpg",
    "oneLine": "一个被主流抛弃的落魄政客,靠操纵算法和制造愤怒,一年内爬上了总统候选人的位置。",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "民粹主义",
      "社交媒体",
      "幕僚",
      "选举黑幕"
    ],
    "genre": "政治,剧情,惊悚"
  },
  {
    "id": "0759",
    "title": "我独自生活",
    "url": "./movie-0759.html",
    "cover": "./9.jpg",
    "oneLine": "镜头对准五位独居明星的私密空间,却发现最热闹的竟然是深夜一个人的泡面锅。",
    "year": "2024",
    "type": "综艺 真人秀",
    "region": "韩国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "独居",
      "明星日常",
      "治愈",
      "观察室"
    ],
    "genre": "观察类/纪实"
  },
  {
    "id": "0760",
    "title": "无敌的布莱特·本杰明",
    "url": "./movie-0760.html",
    "cover": "./10.jpg",
    "oneLine": "一个拥有绝对力量、永远不会受伤的青年,唯一的超能力是“无敌”,但他只想伤害自己。",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "超级英雄",
      "心理创伤",
      "暴力史",
      "反英雄"
    ],
    "genre": "动作/科幻/剧情"
  },
  {
    "id": "0761",
    "title": "遗失的王国",
    "url": "./movie-0761.html",
    "cover": "./11.jpg",
    "oneLine": "考古学家在一座13世纪教堂的地窖里挖出一块芯片,插入电脑后,屏幕上映出了一个由数学公式构成的辉煌王朝。",
    "year": "2025",
    "type": "剧集",
    "region": "英国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "考古",
      "平行世界",
      "古文明",
      "解谜"
    ],
    "genre": "奇幻,冒险"
  },
  {
    "id": "0762",
    "title": "重返前线",
    "url": "./movie-0762.html",
    "cover": "./12.jpg",
    "oneLine": "长津湖战役后,一名被冻掉双脚的老兵装上假肢,独自穿越百里战火寻找失散的战友。",
    "year": "2022",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "抗美援朝",
      "老兵",
      "兄弟情",
      "纪实感"
    ],
    "genre": "战争/历史"
  },
  {
    "id": "0763",
    "title": "伊拉蒂",
    "url": "./movie-0763.html",
    "cover": "./13.jpg",
    "oneLine": "一位农妇为了救活死去的儿子,闯入禁忌的伊拉蒂森林,却发现这里的树精只愿意用她的“母爱”来交换。",
    "year": "2023",
    "type": "电影",
    "region": "意大利",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "欧洲古森林",
      "精灵",
      "诅咒",
      "母亲"
    ],
    "genre": "奇幻冒险"
  },
  {
    "id": "0764",
    "title": "陌生地",
    "url": "./movie-0764.html",
    "cover": "./14.jpg",
    "oneLine": "在近未来的欧洲,一个中东难民意外发现所谓的“审查隔离区”,其实是一道通往平行世界的大门。",
    "year": "2026",
    "type": "电影",
    "region": "法国/德国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "难民",
      "平行宇宙",
      "边境",
      "哲学寓言"
    ],
    "genre": "科幻/剧情"
  },
  {
    "id": "0765",
    "title": "霹雳五号",
    "url": "./movie-0765.html",
    "cover": "./15.jpg",
    "oneLine": "一个军方报废的战争机器人被闪电劈中后产生了自我意识,他只想看更多的“输入”。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "机器人",
      "觉醒",
      "冒险",
      "温情",
      "怀旧"
    ],
    "genre": "喜剧,科幻,家庭"
  },
  {
    "id": "0766",
    "title": "原来你是这样的顾先生",
    "url": "./movie-0766.html",
    "cover": "./16.jpg",
    "oneLine": "为了继承家业,刻薄总裁不得不和冤家女秘书假扮情侣,却发现对方竟是网恋三年的“甜心”?",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "契约情侣",
      "职场互怼",
      "反差萌"
    ],
    "genre": "喜剧/爱情"
  },
  {
    "id": "0767",
    "title": "浪漫鼠德佩罗",
    "url": "./movie-0767.html",
    "cover": "./17.jpg",
    "oneLine": "一只体弱多病却沉迷骑士小说的老鼠,为了拯救心爱的公主闯入地下鼠国。",
    "year": "2008",
    "type": "动画电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "老鼠",
      "英雄之旅",
      "勇气",
      "骑士精神",
      "童话改编"
    ],
    "genre": "喜剧、冒险、奇幻"
  },
  {
    "id": "0768",
    "title": "爆笑虫子 第一季",
    "url": "./movie-0768.html",
    "cover": "./18.jpg",
    "oneLine": "下水道里的两只虫子每天都在抢一块口香糖,顺便毁掉整条街的平静。",
    "year": "2024",
    "type": "剧集",
    "region": "韩国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "虫子",
      "无台词",
      "爆笑",
      "短片"
    ],
    "genre": "动画/喜剧/无对白"
  },
  {
    "id": "0769",
    "title": "神偷侠盗团",
    "url": "./movie-0769.html",
    "cover": "./19.jpg",
    "oneLine": "各怀绝技的小偷接到神秘任务:在跨国列车到达终点前,偷走藏在富商保险柜里的绝密U盘。",
    "year": "2018",
    "type": "电影",
    "region": "韩国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "高智商犯罪",
      "团队合作",
      "反转",
      "偷盗艺术"
    ],
    "genre": "动作/犯罪/喜剧"
  },
  {
    "id": "0770",
    "title": "豫菜皇后",
    "url": "./movie-0770.html",
    "cover": "./20.jpg",
    "oneLine": "米其林女主厨回乡继承破落豫菜馆,却发现真正的秘籍藏在奶奶的味觉记忆里。",
    "year": "2023",
    "type": "电影",
    "region": "中国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "豫菜",
      "传承",
      "师徒",
      "非遗"
    ],
    "genre": "剧情/美食/女性"
  },
  {
    "id": "0771",
    "title": "冤魂镜粤语",
    "url": "./movie-0771.html",
    "cover": "./21.jpg",
    "oneLine": "深水埗二手店流出三面古董镜,买主一周内接连惨死,只有用粤语骂过镜子的那个男人活了下来。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "都市传说",
      "粤语原声",
      "镜中鬼",
      "因果报应"
    ],
    "genre": "恐怖/灵异"
  },
  {
    "id": "0772",
    "title": "破碎边缘",
    "url": "./movie-0772.html",
    "cover": "./22.jpg",
    "oneLine": "一场车祸让他失去挚爱,却唤醒了一段被自己亲手埋葬的黑暗过去。",
    "year": "2024",
    "type": "电影",
    "region": "中国内地",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "心理博弈",
      "记忆碎片",
      "复仇"
    ],
    "genre": "悬疑,犯罪"
  },
  {
    "id": "0773",
    "title": "逃亡机运",
    "url": "./movie-0773.html",
    "cover": "./23.jpg",
    "oneLine": "一架红眼航班上,邻座陌生人突然说:“我知道你是谁,三小时后你会在监狱醒来。",
    "year": "2020",
    "type": "电影",
    "region": "美国/英国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "飞机",
      "犯罪",
      "时间压力",
      "绝境"
    ],
    "genre": "惊悚/冒险"
  },
  {
    "id": "0774",
    "title": "奇谈",
    "url": "./movie-0774.html",
    "cover": "./24.jpg",
    "oneLine": "民俗学家不信鬼怪,前往诡异山村调查怪谈,却发现所有的怪谈都是为了掩盖一个活人的罪行。",
    "year": "2023",
    "type": "电影",
    "region": "韩国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "民俗恐怖",
      "巫术",
      "连环杀人",
      "乡村怪谈"
    ],
    "genre": "恐怖/悬疑"
  },
  {
    "id": "0775",
    "title": "绝代双骄电影版",
    "url": "./movie-0775.html",
    "cover": "./25.jpg",
    "oneLine": "移花宫主花月奴的孪生儿子被分开抚养,一个成为恶人谷的魔星,一个成为天下第一聪明人,兄弟相残的宿命悄然降临。",
    "year": "1992",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "双生兄弟",
      "江湖恩怨",
      "古龙改编"
    ],
    "genre": "武侠,喜剧,动作"
  },
  {
    "id": "0776",
    "title": "暗夜女巫",
    "url": "./movie-0776.html",
    "cover": "./26.jpg",
    "oneLine": "二战时期,一群年轻苏联女飞行员驾驶着简陋的木质飞机,在暗夜中令纳粹闻风丧胆的真实故事。",
    "year": "2025",
    "type": "电视剧",
    "region": "俄罗斯",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "苏联女飞行员",
      "夜间轰炸机",
      "二战",
      "真实事件改编"
    ],
    "genre": "剧情/战争/历史/女性"
  },
  {
    "id": "0777",
    "title": "最后的手稿",
    "url": "./movie-0777.html",
    "cover": "./27.jpg",
    "oneLine": "一位过气作家在临终前出版绝笔作,书中凶手按章节杀人,而现实中竟同步发生。",
    "year": "2016",
    "type": "电影",
    "region": "西班牙",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "书中书",
      "文学谋杀",
      "虚实交织"
    ],
    "genre": "剧情/悬疑"
  },
  {
    "id": "0778",
    "title": "生存法则",
    "url": "./movie-0778.html",
    "cover": "./28.jpg",
    "oneLine": "核战后的地下掩体里,唯一的法律就是“你看中别人的东西,就可以杀了对方抢过来”。",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "末日生存",
      "地下掩体",
      "社会实验",
      "弱肉强食",
      "人性考验"
    ],
    "genre": "动作/科幻/惊悚"
  },
  {
    "id": "0779",
    "title": "夏日么么茶",
    "url": "./movie-0779.html",
    "cover": "./29.jpg",
    "oneLine": "阳光、沙滩、一杯么么茶,以及那个曾让你在夏天心动的男孩,他还记得你吗?",
    "year": "2024",
    "type": "电影",
    "region": "马来西亚/新加坡",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "沙滩",
      "初恋",
      "夏天",
      "清新"
    ],
    "genre": "爱情/喜剧"
  },
  {
    "id": "0780",
    "title": "寮国",
    "url": "./movie-0780.html",
    "cover": "./30.jpg",
    "oneLine": "老挝裔泰国导演回到母亲口中的“寮国”,却发现整个村庄在地图上和记忆里同时消失。",
    "year": "2017",
    "type": "电影",
    "region": "泰国/老挝",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "湄公河",
      "红色高棉",
      "寻根",
      "诗意"
    ],
    "genre": "剧情,历史,家庭"
  },
  {
    "id": "0781",
    "title": "大人的防具店",
    "url": "./movie-0781.html",
    "cover": "./31.jpg",
    "oneLine": "一位菜鸟勇者误入一间只卖“奇怪防具”的老店,店主推荐给他的第一件装备是——围裙。",
    "year": "2024",
    "type": "剧集",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "防具",
      "冒险者",
      "搞笑",
      "日常"
    ],
    "genre": "奇幻职场"
  },
  {
    "id": "0782",
    "title": "无耶稣是巴基斯坦人",
    "url": "./movie-0782.html",
    "cover": "./32.jpg",
    "oneLine": "巴基斯坦一个基督教家庭的孩子意外失踪,警方以“没有耶稣”为由拒绝立案,母亲决定自己穿越沙漠寻找儿子。",
    "year": "2024",
    "type": "电影",
    "region": "巴基斯坦/英国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "宗教少数派",
      "身份认同",
      "社会写实",
      "人性"
    ],
    "genre": "剧情/宗教"
  },
  {
    "id": "0783",
    "title": "危险职位",
    "url": "./movie-0783.html",
    "cover": "./33.jpg",
    "oneLine": "FBI卧底成功潜入黑帮,却发现自己崇拜的黑帮老大也是联邦探员,但两人接到的命令是杀死对方。",
    "year": "1998",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "卧底",
      "黑帮",
      "双面间谍"
    ],
    "genre": "动作,犯罪,惊悚"
  },
  {
    "id": "0784",
    "title": "扣住有情人",
    "url": "./movie-0784.html",
    "cover": "./34.jpg",
    "oneLine": "一家奇葩婚介所、四个等待被“扣住”的单身男女,以及一群比他们更着急的父母。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "婚恋",
      "代际冲突",
      "轻喜剧",
      "相亲",
      "成长"
    ],
    "genre": "爱情,喜剧,家庭"
  },
  {
    "id": "0785",
    "title": "辣手惩凶",
    "url": "./movie-0785.html",
    "cover": "./35.jpg",
    "oneLine": "一个被停职的警察开始用私刑处决逍遥法外的罪犯,却发现警方高层一直在暗中为他提供名单。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "警匪",
      "暴力执法",
      "私刑",
      "悬疑",
      "硬汉"
    ],
    "genre": "动作/犯罪"
  },
  {
    "id": "0786",
    "title": "寂寞占线中",
    "url": "./movie-0786.html",
    "cover": "./36.jpg",
    "oneLine": "一名深夜电台主播不断接到神秘来电,对方竟是二十年前错过的初恋。",
    "year": "2023",
    "type": "电影",
    "region": "中国台湾",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "深夜电台",
      "都市情感",
      "错过的缘分",
      "治愈"
    ],
    "genre": "爱情,剧情"
  },
  {
    "id": "0787",
    "title": "窒息",
    "url": "./movie-0787.html",
    "cover": "./37.jpg",
    "oneLine": "六位主播参加“密闭生存挑战”被锁进地下密室,每出去一个人,密室的氧气就减少百分之十。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "密闭空间",
      "幽闭恐惧",
      "网络直播",
      "极限挑战"
    ],
    "genre": "悬疑,惊悚,心理"
  },
  {
    "id": "0788",
    "title": "姊妹坡国语",
    "url": "./movie-0788.html",
    "cover": "./38.jpg",
    "oneLine": "父亲去世后,四个分居各地的姐妹因一句“谁住老宅谁继承”的遗言回到姊妹坡。",
    "year": "2023",
    "type": "电影",
    "region": "中国台湾",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "姐妹",
      "国语配音",
      "继承",
      "老宅"
    ],
    "genre": "家庭,剧情"
  },
  {
    "id": "0789",
    "title": "大奥第二季",
    "url": "./movie-0789.html",
    "cover": "./39.jpg",
    "oneLine": "男女逆转的平行时空,女将军的后宫“大奥”迎来了一位能预知未来的神秘美男子。",
    "year": "2024",
    "type": "剧集",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "男女逆转",
      "宫斗",
      "权力",
      "德川幕府"
    ],
    "genre": "剧情,历史"
  },
  {
    "id": "0790",
    "title": "万千星辉贺台庆2022",
    "url": "./movie-0790.html",
    "cover": "./40.jpg",
    "oneLine": "TVB55周年台庆夜,一位消失十年的前“视后”突然出现在观众席第三排,没人知道她是怎么进来的。",
    "year": "2022",
    "type": "综艺/特别节目",
    "region": "中国香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "TVB",
      "台庆",
      "群星"
    ],
    "genre": "歌舞/晚会"
  },
  {
    "id": "0791",
    "title": "犯罪心理第七季",
    "url": "./movie-0791.html",
    "cover": "./41.jpg",
    "oneLine": "老队员接连被神秘杀手盯上,行为分析部这次要侧写的,是他们自己内心的魔鬼。",
    "year": "2024",
    "type": "剧集",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "侧写",
      "连环杀手",
      "团队危机",
      "黑暗"
    ],
    "genre": "悬疑,犯罪,心理"
  },
  {
    "id": "0792",
    "title": "终末的女武神第二季",
    "url": "./movie-0792.html",
    "cover": "./42.jpg",
    "oneLine": "神与人之间的第二回合开启,特斯拉对阵洛基,贞德挑战雅典娜,赌上人类存亡。",
    "year": "2026",
    "type": "动画",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "神仙打架",
      "格斗",
      "历史人物",
      "续作"
    ],
    "genre": "动作,奇幻"
  },
  {
    "id": "0793",
    "title": "闪光的羽毛",
    "url": "./movie-0793.html",
    "cover": "./43.jpg",
    "oneLine": "一个被羽毛球教练遗弃的天才少女,为了救回患病的爷爷,在废弃球场开始了孤独的王者归来。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "羽毛球",
      "励志",
      "亲情",
      "乡村",
      "成长"
    ],
    "genre": "剧情/运动/家庭"
  },
  {
    "id": "0794",
    "title": "杀妻秘笈",
    "url": "./movie-0794.html",
    "cover": "./44.jpg",
    "oneLine": "一本意外流传于主妇圈的《完美杀妻指南》成了畅销书,但书中所有“被杀死”的丈夫,都以书中方式离奇失踪了。",
    "year": "1998",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "婚姻黑暗面",
      "反套路",
      "女性反击",
      "荒诞"
    ],
    "genre": "喜剧、犯罪、黑色幽默"
  },
  {
    "id": "0795",
    "title": "令人讨厌的松子的一生",
    "url": "./movie-0795.html",
    "cover": "./45.jpg",
    "oneLine": "她一生都在讨好别人,最后却活成了所有人都讨厌的样子,包括她自己。",
    "year": "2006",
    "type": "电影",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "悲剧",
      "女性",
      "原生家庭",
      "讨好型人格"
    ],
    "genre": "剧情歌舞"
  },
  {
    "id": "0796",
    "title": "生化危机:终章",
    "url": "./movie-0796.html",
    "cover": "./46.jpg",
    "oneLine": "爱丽丝回到一切的起点——浣熊市蜂巢,在那里,AI红后向她揭露了世界毁灭的真正原因:不是病毒,而是她自己。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "丧尸",
      "爱丽丝",
      "大结局",
      "真相"
    ],
    "genre": "动作/科幻/恐怖"
  },
  {
    "id": "0797",
    "title": "鸟,孤儿和愚人",
    "url": "./movie-0797.html",
    "cover": "./47.jpg",
    "oneLine": "三个住在战争孤儿院的年轻人,用音乐、爱情和疯狂的恶作剧,对抗这个已经疯掉了的世界。",
    "year": "1969",
    "type": "电影",
    "region": "捷克斯洛伐克",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "捷克新浪潮",
      "荒诞",
      "反战"
    ],
    "genre": "剧情,奇幻,战争"
  },
  {
    "id": "0798",
    "title": "爱在暹罗",
    "url": "./movie-0798.html",
    "cover": "./48.jpg",
    "oneLine": "分手十年的两个少年在曼谷街头偶遇,才发现当年藏在木偶里的诺言从未褪色。",
    "year": "2027",
    "type": "电影",
    "region": "泰国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "青春",
      "同性",
      "成长",
      "家庭",
      "重逢"
    ],
    "genre": "剧情/爱情"
  },
  {
    "id": "0799",
    "title": "海龟们",
    "url": "./movie-0799.html",
    "cover": "./49.jpg",
    "oneLine": "海南渔村三个孩子自制“潜艇”找爸爸,却意外修复了海龟洄游路线。",
    "year": "2020",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "留守儿童",
      "海洋梦",
      "代际沟通",
      "治愈"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "0800",
    "title": "李秀满:韩国流行音乐之王",
    "url": "./movie-0800.html",
    "cover": "./50.jpg",
    "oneLine": "从失败的歌手到市值千亿的娱乐帝国教父,李秀满首次公开造星公式。",
    "year": "2025",
    "type": "纪录片",
    "region": "韩国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "SM娱乐",
      "K-pop",
      "造星",
      "幕后"
    ],
    "genre": "传记/音乐/纪录"
  },
  {
    "id": "0801",
    "title": "灵界基友",
    "url": "./movie-0801.html",
    "cover": "./51.jpg",
    "oneLine": "能看到鬼魂的社畜发现,和自己合租的搞笑男鬼,竟是自己前世为了救他而死的恋人。",
    "year": "2024",
    "type": "剧集",
    "region": "泰国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "人鬼情",
      "前世今生",
      "救赎",
      "甜虐"
    ],
    "genre": "爱情/奇幻/同性"
  },
  {
    "id": "0802",
    "title": "禁婚令",
    "url": "./movie-0802.html",
    "cover": "./52.jpg",
    "oneLine": "朝鲜最年轻的君王为拒婚下了一道荒唐禁令,却偏偏对一个冒牌女官动了真心。",
    "year": "2024",
    "type": "电视剧",
    "region": "韩国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "朝鲜王朝",
      "假婚约",
      "宫斗",
      "欢喜冤家",
      "契约恋爱"
    ],
    "genre": "古装,爱情,喜剧"
  },
  {
    "id": "0803",
    "title": "功夫传人之龙拳小子",
    "url": "./movie-0803.html",
    "cover": "./53.jpg",
    "oneLine": "一个自称龙拳第38代传人的小学生在全校大会上对着校长喊:“有种你下来,我们单挑。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "武术",
      "少年",
      "校园",
      "搞笑"
    ],
    "genre": "动作,喜剧"
  },
  {
    "id": "0804",
    "title": "北京八年",
    "url": "./movie-0804.html",
    "cover": "./54.jpg",
    "oneLine": "从2016到2024,五环外一间出租屋里,8年间换了19任租客,房东老太太用一个账本,记录了8个“北漂”的梦想与沉没。",
    "year": "2025",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "北漂",
      "合租",
      "时间跨度",
      "成长"
    ],
    "genre": "剧情,都市"
  },
  {
    "id": "0805",
    "title": "魔鬼骑士",
    "url": "./movie-0805.html",
    "cover": "./55.jpg",
    "oneLine": "十字军东征时期的圣殿骑士被诅咒穿越到现代洛杉矶,必须保护一名流浪汉手中的圣物。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "中世纪",
      "黑魔法",
      "骑士",
      "穿越",
      "末日"
    ],
    "genre": "动作,奇幻,恐怖"
  },
  {
    "id": "0806",
    "title": "长毛狗",
    "url": "./movie-0806.html",
    "cover": "./56.jpg",
    "oneLine": "工作狂律师与一只流浪狗交换身体后,发现自己要替狗上法庭打官司。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "换身",
      "宠物",
      "职场",
      "治愈",
      "温情"
    ],
    "genre": "喜剧,家庭,奇幻"
  },
  {
    "id": "0807",
    "title": "二郎神之深海蛟龙",
    "url": "./movie-0807.html",
    "cover": "./57.jpg",
    "oneLine": "天眼失效,东海沉睡的远古龙神即将苏醒,而唯一能阻止它的人,竟是当年被二郎神封印的蛟龙之子。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "神话改编",
      "深海",
      "巨兽",
      "救赎"
    ],
    "genre": "动画,奇幻"
  },
  {
    "id": "0808",
    "title": "情挑淑女心",
    "url": "./movie-0808.html",
    "cover": "./58.jpg",
    "oneLine": "三十八岁的顶级婚恋咨询师,被亲弟弟雇来“改造”他的好兄弟——一个不懂浪漫的铁壁男。",
    "year": "2023",
    "type": "剧集",
    "region": "韩国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "契约恋爱",
      "年下",
      "女总裁",
      "反转"
    ],
    "genre": "爱情/喜剧/职场"
  },
  {
    "id": "0809",
    "title": "美丽的青春",
    "url": "./movie-0809.html",
    "cover": "./59.jpg",
    "oneLine": "2005年,一个城市来的支教女老师,试图带领一群大山里的孩子,拍摄一部属于他们自己的青春电影。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "高考",
      "支教",
      "乡村",
      "理想",
      "现实主义"
    ],
    "genre": "剧情,青春"
  },
  {
    "id": "0810",
    "title": "失意旅行",
    "url": "./movie-0810.html",
    "cover": "./60.jpg",
    "oneLine": "一个破产的中年男人踏上错漏百出的廉价旅行团,却意外找回了生活的勇气。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "公路",
      "治愈",
      "中年危机"
    ],
    "genre": "剧情"
  },
  {
    "id": "0811",
    "title": "井盖儿",
    "url": "./movie-0811.html",
    "cover": "./61.jpg",
    "oneLine": "一个雨夜,七个人先后掉进同一个没有盖子的窨井,发现彼此都是多年前同一桩冤案的关联者。",
    "year": "2022",
    "type": "电影",
    "region": "中国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "小成本",
      "封闭空间",
      "智力游戏",
      "社会寓言"
    ],
    "genre": "悬疑犯罪"
  },
  {
    "id": "0812",
    "title": "第三个人2007",
    "url": "./movie-0812.html",
    "cover": "./62.jpg",
    "oneLine": "2007年的南方小城,一桩悬而未决的连环杀人案,将三个“局外人”的命运紧紧捆绑在一起。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "怀旧",
      "2007年",
      "罪案",
      "心理",
      "时代变迁"
    ],
    "genre": "悬疑,犯罪,剧情"
  },
  {
    "id": "0813",
    "title": "生死罗布泊",
    "url": "./movie-0813.html",
    "cover": "./63.jpg",
    "oneLine": "一支地质队进入罗布泊勘探钾盐,却接连遭遇队员失踪和诡异记号。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "罗布泊",
      "地质队",
      "失踪案"
    ],
    "genre": "冒险/悬疑"
  },
  {
    "id": "0814",
    "title": "性感尤物",
    "url": "./movie-0814.html",
    "cover": "./64.jpg",
    "oneLine": "50岁妇科医生被贴上“过气性感”标签,她决定参加网络情色博主大赛,重新定义“惹火”。",
    "year": "2024",
    "type": "电影",
    "region": "法国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "女性",
      "身体自由",
      "中年危机",
      "幽默"
    ],
    "genre": "喜剧/剧情"
  },
  {
    "id": "0815",
    "title": "没有国家的冠军",
    "url": "./movie-0815.html",
    "cover": "./65.jpg",
    "oneLine": "一名朝鲜脱北者成为韩国马拉松冠军,却因国籍问题无法代表任何国家参赛。",
    "year": "2023",
    "type": "电影",
    "region": "韩国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "马拉松",
      "难民",
      "身份",
      "尊严"
    ],
    "genre": "体育,剧情"
  },
  {
    "id": "0816",
    "title": "十三个原因第一季",
    "url": "./movie-0816.html",
    "cover": "./66.jpg",
    "oneLine": "高中生克莱收到已自杀同学汉娜留下的13盒录音带,每盒对应一个导致她自杀的人。",
    "year": "2017",
    "type": "剧集",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "校园霸凌",
      "自杀",
      "心理",
      "磁带",
      "青春疼痛"
    ],
    "genre": "剧情/悬疑"
  },
  {
    "id": "0817",
    "title": "大导归来",
    "url": "./movie-0817.html",
    "cover": "./67.jpg",
    "oneLine": "过气大导为翻红参加真人秀,被要求用一部手机拍出拿奖大片。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "电影圈讽刺",
      "老年追梦",
      "黑色幽默"
    ],
    "genre": "喜剧/剧情"
  },
  {
    "id": "0818",
    "title": "温生才炸孚琦",
    "url": "./movie-0818.html",
    "cover": "./68.jpg",
    "oneLine": "1911年,南洋华侨温生才只身刺杀广州将军孚琦,一颗炸弹炸响了辛亥革命的前奏。",
    "year": "2024",
    "type": "电影",
    "region": "香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "辛亥革命",
      "暗杀",
      "南洋",
      "民族英雄"
    ],
    "genre": "历史,动作,传记"
  },
  {
    "id": "0819",
    "title": "芒果和红色轮椅",
    "url": "./movie-0819.html",
    "cover": "./69.jpg",
    "oneLine": "高位截瘫的女儿想去看三亚的芒果树,父亲用一辆红色轮椅推着她走了四千公里。",
    "year": "2024",
    "type": "电影",
    "region": "中国内地",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "残障",
      "公路片",
      "父女",
      "治愈"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "0820",
    "title": "异兽战场",
    "url": "./movie-0820.html",
    "cover": "./70.jpg",
    "oneLine": "末日后的地球被巨型异兽统治,一对失散的兄弟,一个成了顶尖猎人,一个成了异兽驯化师,在战场上重逢。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "怪兽",
      "机甲",
      "末日废土",
      "兄弟情",
      "硬核科幻"
    ],
    "genre": "动作/科幻/冒险"
  },
  {
    "id": "0821",
    "title": "小美人鱼",
    "url": "./movie-0821.html",
    "cover": "./71.jpg",
    "oneLine": "她不是为爱变成哑巴,而是海底的“声音交易”让她用声带换了双腿,却换不回人类的看见。",
    "year": "2027",
    "type": "电影",
    "region": "丹麦/美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "暗黑改编",
      "社会隐喻",
      "无声者",
      "泡沫之痛"
    ],
    "genre": "奇幻/剧情/爱情"
  },
  {
    "id": "0822",
    "title": "无辜的七个",
    "url": "./movie-0822.html",
    "cover": "./72.jpg",
    "oneLine": "七个学生自称无辜,但他们身上沾着同一个人的血。",
    "year": "2027",
    "type": "剧集",
    "region": "韩国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "集体谎言",
      "替罪羊",
      "校园黑暗"
    ],
    "genre": "犯罪/惊悚"
  },
  {
    "id": "0823",
    "title": "爱上老板的女儿",
    "url": "./movie-0823.html",
    "cover": "./73.jpg",
    "oneLine": "小职员被老板逼婚娶他“丑女儿”,见面后发现竟是自己在网上表白了三年的心动网友。",
    "year": "2024",
    "type": "剧集",
    "region": "韩国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "社内恋爱",
      "契约恋爱",
      "身份伪装",
      "搞笑",
      "甜宠"
    ],
    "genre": "爱情,喜剧"
  },
  {
    "id": "0824",
    "title": "维也纳和鬼魂乐队",
    "url": "./movie-0824.html",
    "cover": "./74.jpg",
    "oneLine": "落魄指挥家在维也纳音乐厅地下室发现了一百年前乐手的鬼魂,他们只想完成那场没演完的音乐会。",
    "year": "2021",
    "type": "电影",
    "region": "奥地利",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "乐队",
      "鬼魂",
      "音乐厅",
      "未完成交响曲"
    ],
    "genre": "音乐,奇幻,剧情"
  },
  {
    "id": "0825",
    "title": "辛巴达七海传奇",
    "url": "./movie-0825.html",
    "cover": "./75.jpg",
    "oneLine": "年轻的水手辛巴达为了拯救被诅咒的王国,必须驶入七海,集齐七位海神遗落的三叉戟碎片。",
    "year": "2024",
    "type": "电影/动画",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "航海",
      "阿拉伯神话",
      "冒险",
      "怪物",
      "辛巴达"
    ],
    "genre": "动画,冒险,奇幻,家庭"
  },
  {
    "id": "0826",
    "title": "突围者",
    "url": "./movie-0826.html",
    "cover": "./76.jpg",
    "oneLine": "1942年,一个犹太拉比带领十名同胞从灭绝营逃出,却在原始森林中发现比纳粹更可怕的“东西”。",
    "year": "2025",
    "type": "电影",
    "region": "波兰/英国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "二战",
      "真实事件",
      "犹太人",
      "越狱",
      "森林游击战"
    ],
    "genre": "战争/剧情/动作"
  },
  {
    "id": "0827",
    "title": "爱娃的爱",
    "url": "./movie-0827.html",
    "cover": "./77.jpg",
    "oneLine": "一位失去女儿的母亲,将 AI 机器人“爱娃”带回家,却发现机器人的爱可能比人类更深沉、更危险。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "人工智能",
      "母爱",
      "人机关系"
    ],
    "genre": "科幻/伦理"
  },
  {
    "id": "0828",
    "title": "柯罗索巨兽",
    "url": "./movie-0828.html",
    "cover": "./78.jpg",
    "oneLine": "一个失业酗酒、刚被男友甩了的废柴女,发现自己在地球另一边散步,就能操控首尔的一只巨型怪兽。",
    "year": "2025",
    "type": "电影",
    "region": "西班牙/加拿大",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "另类怪兽",
      "操控隐喻",
      "酗酒人生",
      "女性觉醒"
    ],
    "genre": "科幻,惊悚,剧情"
  },
  {
    "id": "0829",
    "title": "神秘森林",
    "url": "./movie-0829.html",
    "cover": "./79.jpg",
    "oneLine": "三十年前失踪的三个孩子突然从森林里走了出来,并且没有变老一天。",
    "year": "2027",
    "type": "电影",
    "region": "爱尔兰/英国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "神话传说",
      "失踪儿童",
      "森林禁忌",
      "双线叙事"
    ],
    "genre": "悬疑/奇幻"
  },
  {
    "id": "0830",
    "title": "布洛阿特峰之巅",
    "url": "./movie-0830.html",
    "cover": "./80.jpg",
    "oneLine": "基于真实事件改编,一个双腿截肢的登山者向世界第十二高峰发起致命冲击。",
    "year": "2026",
    "type": "电影",
    "region": "英国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "登山",
      "极寒",
      "生存挑战",
      "真实改编"
    ],
    "genre": "冒险/传记"
  },
  {
    "id": "0831",
    "title": "谁伴我一生",
    "url": "./movie-0831.html",
    "cover": "./81.jpg",
    "oneLine": "三个在孤儿院长大的结拜兄弟,爱上了同一个女人,也走向了不同的人生。",
    "year": "1995",
    "type": "剧集",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "经典",
      "港剧",
      "家族",
      "年代"
    ],
    "genre": "剧情,爱情"
  },
  {
    "id": "0832",
    "title": "庭院里的女人",
    "url": "./movie-0832.html",
    "cover": "./82.jpg",
    "oneLine": "一桩尘封的豪门命案,让被困在庭院里的四个女人,同时踏上了各自的逃亡与觉醒之路。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "女性成长",
      "家族恩怨",
      "时代变迁"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "0833",
    "title": "我们在黑夜中相拥",
    "url": "./movie-0833.html",
    "cover": "./83.jpg",
    "oneLine": "每个深夜,她在末班地铁画陌生人,他是唯一发现她画里所有“路人”都长着同一张脸的人。",
    "year": "2024",
    "type": "电视剧/第一季",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "夜间工作",
      "都市孤独",
      "地铁末班车",
      "治愈系悬疑",
      "相遇与重逢"
    ],
    "genre": "爱情/悬疑/都市"
  },
  {
    "id": "0834",
    "title": "未出局",
    "url": "./movie-0834.html",
    "cover": "./84.jpg",
    "oneLine": "七名被公司裁员的高管困在一间审讯室内,每人都收到一条指控:你是逼死前同事的真凶。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "密室",
      "反转",
      "职场暗斗",
      "心理博弈",
      "封闭空间"
    ],
    "genre": "悬疑/犯罪"
  },
  {
    "id": "0835",
    "title": "外婆的重托",
    "url": "./movie-0835.html",
    "cover": "./85.jpg",
    "oneLine": "外婆临终前交给他一个生锈的铁盒,让他送回千里之外的故乡,里面却只有一把钥匙和半张照片。",
    "year": "2024",
    "type": "电影",
    "region": "中国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "祖孙情",
      "乡土中国",
      "催泪治愈"
    ],
    "genre": "剧情,家庭,公路"
  },
  {
    "id": "0836",
    "title": "哈里的遭遇",
    "url": "./movie-0836.html",
    "cover": "./86.jpg",
    "oneLine": "失忆男子回到故乡小镇,却发现每个村民都认识他,而他却完全陌生。",
    "year": "2023",
    "type": "剧集",
    "region": "英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "失忆",
      "乡村怪谈",
      "双面人生"
    ],
    "genre": "悬疑/心理惊悚"
  },
  {
    "id": "0837",
    "title": "到底是谁搞的鬼",
    "url": "./movie-0837.html",
    "cover": "./87.jpg",
    "oneLine": "五年前霸凌致死案后,三名高中生收到匿名直播链接,发现凶手正在按顺序杀死他们。",
    "year": "2022",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "网红",
      "直播杀人",
      "校园霸凌"
    ],
    "genre": "恐怖,悬疑,青春"
  },
  {
    "id": "0838",
    "title": "新妹魔王的契约者 特典",
    "url": "./movie-0838.html",
    "cover": "./88.jpg",
    "oneLine": "魔王之女与契约者意外获得一日假期,却在海边遭遇了来自异次元的搞事推销员。",
    "year": "2015",
    "type": "OVA",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "魔王",
      "泳装",
      "日常",
      "杀必死",
      "契约"
    ],
    "genre": "奇幻,动作,喜剧"
  },
  {
    "id": "0839",
    "title": "报应不爽",
    "url": "./movie-0839.html",
    "cover": "./89.jpg",
    "oneLine": "一个能让你生前所有的恶行,在死后以最讽刺的方式“回馈”给亲人的系统,上线了。",
    "year": "2025",
    "type": "剧集",
    "region": "美国/英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "复仇",
      "高概念",
      "反转",
      "伦理困境"
    ],
    "genre": "惊悚,悬疑,剧情"
  },
  {
    "id": "0840",
    "title": "管道工艳遇记",
    "url": "./movie-0840.html",
    "cover": "./90.jpg",
    "oneLine": "风流管道工马里奥每上门修一次水管,就会误入女主人的秘密情史,开启啼笑皆非的连环闹剧。",
    "year": "1976",
    "type": "电影",
    "region": "意大利",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "软色情",
      "意式喜剧",
      "水管工",
      "误会导致的艳遇"
    ],
    "genre": "喜剧/情色"
  },
  {
    "id": "0841",
    "title": "祈祷恶魔回归地狱",
    "url": "./movie-0841.html",
    "cover": "./91.jpg",
    "oneLine": "一场驱魔仪式失败后,神父发现自己赶走的并非恶魔,而是保护人类的善良天使。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "驱魔",
      "反转",
      "宗教",
      "心理恐惧"
    ],
    "genre": "恐怖/惊悚"
  },
  {
    "id": "0842",
    "title": "言语的秘密生活",
    "url": "./movie-0842.html",
    "cover": "./92.jpg",
    "oneLine": "一位无法“说谎”的语言学家,受雇于一位永远保持沉默的亿万富翁,通过分析他的沉默来解开商业谜团。",
    "year": "2025",
    "type": "电影",
    "region": "西班牙",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "语言学家",
      "沉默",
      "自闭症",
      "声音之谜",
      "温情"
    ],
    "genre": "剧情,悬疑"
  },
  {
    "id": "0843",
    "title": "醒醒吧之跟风者",
    "url": "./movie-0843.html",
    "cover": "./93.jpg",
    "oneLine": "一个靠带节奏为生的职业黑粉,当他被全网网暴时,才发现自己原来是“跟风受害者”的祖师爷。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "网络暴力",
      "键盘侠",
      "黑色幽默",
      "反转"
    ],
    "genre": "喜剧,剧情"
  },
  {
    "id": "0844",
    "title": "四季童年",
    "url": "./movie-0844.html",
    "cover": "./94.jpg",
    "oneLine": "一个男人回到拆光的老家,用画笔重塑了整个90年代的童年。",
    "year": "2024",
    "type": "动画剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "怀旧",
      "90后",
      "乡村",
      "散文诗"
    ],
    "genre": "治愈,家庭,动画"
  },
  {
    "id": "0845",
    "title": "嫁个老公过日子",
    "url": "./movie-0845.html",
    "cover": "./95.jpg",
    "oneLine": "北京姑娘嫁了个台湾老公,两家从面条和卤肉饭的“饮食战争”打到婆媳大战。",
    "year": "2015",
    "type": "剧集",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "北京",
      "台湾",
      "婆媳",
      "传统小吃"
    ],
    "genre": "家庭/喜剧/爱情"
  },
  {
    "id": "0846",
    "title": "最后的日子",
    "url": "./movie-0846.html",
    "cover": "./96.jpg",
    "oneLine": "离家二十年的浪子回到父亲身边,成为他临终关怀病房里最不合格的护工。",
    "year": "2022",
    "type": "电影",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "临终关怀",
      "和解",
      "家族",
      "治愈",
      "生命教育"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "0847",
    "title": "余生三十天",
    "url": "./movie-0847.html",
    "cover": "./97.jpg",
    "oneLine": "十名陌生人被关入地堡,手臂上刻着30天倒计时,每天消失一人,谁才是“管理员”?",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "倒计时",
      "生存游戏",
      "密室",
      "心理战"
    ],
    "genre": "悬疑,科幻"
  },
  {
    "id": "0848",
    "title": "恩霞",
    "url": "./movie-0848.html",
    "cover": "./98.jpg",
    "oneLine": "90岁慰安妇幸存者决定起诉日本政府,而她唯一的证据是一张自己口述、孙女画的画。",
    "year": "2024",
    "type": "电影",
    "region": "韩国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "慰安妇",
      "跨代创伤",
      "法庭戏",
      "女性力量"
    ],
    "genre": "剧情/历史"
  },
  {
    "id": "0849",
    "title": "荒柯艳迹",
    "url": "./movie-0849.html",
    "cover": "./99.jpg",
    "oneLine": "一对年轻情侣住进荒废古宅,却通过一本日记揭开了四十年前一段因嫉妒引发的连环血案。",
    "year": "1995",
    "type": "电影",
    "region": "香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "凶宅",
      "旧照片",
      "禁忌之恋",
      "双线叙事"
    ],
    "genre": "悬疑/惊悚/情色"
  },
  {
    "id": "0850",
    "title": "宝莱坞之摇滚巨星",
    "url": "./movie-0850.html",
    "cover": "./100.jpg",
    "oneLine": "低种姓的清洁工男孩拥有天籁之音,他戴上面具成为神秘网红巨星,只为和心仪的高种姓女孩站在同一个舞台上。",
    "year": "2023",
    "type": "电影",
    "region": "印度",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "音乐",
      "逆袭",
      "种姓",
      "宝莱坞"
    ],
    "genre": "歌舞/爱情/剧情"
  },
  {
    "id": "0851",
    "title": "妖医馆",
    "url": "./movie-0851.html",
    "cover": "./101.jpg",
    "oneLine": "这间医馆的“药材”全是妖怪,而唯一的人类大夫,却是个只会装神弄鬼的骗子。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "妖怪",
      "悬疑诊案",
      "东方志怪",
      "治愈"
    ],
    "genre": "古装、奇幻、喜剧"
  },
  {
    "id": "0852",
    "title": "少年无求",
    "url": "./movie-0852.html",
    "cover": "./102.jpg",
    "oneLine": "一个从不开口说话的高中生,在小镇即将被拆迁的暑假,用沉默掀起了一场无声的叛逆。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "成长",
      "无声反抗",
      "小镇",
      "父子",
      "自我和解"
    ],
    "genre": "剧情/青春"
  },
  {
    "id": "0853",
    "title": "视点锋汇",
    "url": "./movie-0853.html",
    "cover": "./103.jpg",
    "oneLine": "来自不同圈层的八位年轻人,围绕社会热点进行多视角的观点交锋。",
    "year": "2021",
    "type": "综艺",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "观点",
      "青年",
      "社会议题"
    ],
    "genre": "脱口秀,辩论"
  },
  {
    "id": "0854",
    "title": "虚拟实境死亡游戏",
    "url": "./movie-0854.html",
    "cover": "./104.jpg",
    "oneLine": "一款VR游戏里死亡会导致现实脑死亡,十万玩家被困,只有一人知道这不是游戏故障。",
    "year": "2024",
    "type": "剧集",
    "region": "日本/韩国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "VR游戏",
      "真人死亡",
      "大逃杀",
      "黑客",
      "无限流"
    ],
    "genre": "科幻/惊悚"
  },
  {
    "id": "0855",
    "title": "隔窗恋爱:飘洋过海",
    "url": "./movie-0855.html",
    "cover": "./105.jpg",
    "oneLine": "因为交换生项目被迫异国恋的校园情侣,试图用手机维系爱情,却在时差和诱惑中逐渐走散。",
    "year": "2023",
    "type": "电影",
    "region": "西班牙",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "青春",
      "远距离恋爱",
      "成长",
      "浪漫"
    ],
    "genre": "爱情/剧情"
  },
  {
    "id": "0856",
    "title": "特种兵归来3:绝密战场",
    "url": "./movie-0856.html",
    "cover": "./106.jpg",
    "oneLine": "五年前阵亡的特种兵队长突然以黑市军火商身份现身,老战友们必须在48小时内弄清他究竟是叛徒还是卧底。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "退伍特种兵",
      "黑市",
      "无人机"
    ],
    "genre": "动作/战争"
  },
  {
    "id": "0857",
    "title": "热情邀约",
    "url": "./movie-0857.html",
    "cover": "./107.jpg",
    "oneLine": "线上社牛、线下社恐的程序员被女神“热情邀约”参加周末派对,他决定雇一个“自己”去赴约。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "社恐",
      "线上恋爱",
      "线下翻车"
    ],
    "genre": "喜剧/剧情/爱情"
  },
  {
    "id": "0858",
    "title": "神效苹果醋",
    "url": "./movie-0858.html",
    "cover": "./108.jpg",
    "oneLine": "一瓶能让人“心想事成”的苹果醋风靡都市,直到所有饮用者开始集体失忆。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "都市传说",
      "黑科技",
      "成瘾",
      "人性实验"
    ],
    "genre": "科幻/悬疑/喜剧"
  },
  {
    "id": "0859",
    "title": "开心鬼撞鬼",
    "url": "./movie-0859.html",
    "cover": "./109.jpg",
    "oneLine": "生前是落魄秀才的“开心鬼”朱秀才,这次撞上了一个生前是黑道大哥的恶鬼,闹翻了整个女子高中。",
    "year": "1986",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "开心鬼",
      "黄百鸣",
      "校园",
      "鬼魂"
    ],
    "genre": "喜剧,奇幻"
  },
  {
    "id": "0860",
    "title": "玩偶杀手",
    "url": "./movie-0860.html",
    "cover": "./110.jpg",
    "oneLine": "一座废弃人偶馆里,每具人偶的头发都会在月圆之夜变长,因为她们在等凶手回来。",
    "year": "2012",
    "type": "电影",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "人偶诅咒",
      "诡异美学",
      "日式慢恐怖",
      "悲剧循环"
    ],
    "genre": "恐怖/悬疑/心理"
  },
  {
    "id": "0861",
    "title": "大追杀",
    "url": "./movie-0861.html",
    "cover": "./111.jpg",
    "oneLine": "即将回归前夜,一名杀手被自己培养的徒弟追杀,两人从旺角一路杀到中环。",
    "year": "1989",
    "type": "电影",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "江湖恩仇",
      "双雄宿命",
      "港式暴力美学",
      "末世感"
    ],
    "genre": "动作,犯罪,惊悚"
  },
  {
    "id": "0862",
    "title": "黑人歌王",
    "url": "./movie-0862.html",
    "cover": "./112.jpg",
    "oneLine": "讲述20世纪初被遗忘的爵士怪杰“盲蛇”约翰逊,如何用一把破吉他从棉花田弹进卡内基音乐厅的传奇。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "爵士乐",
      "种族歧视",
      "励志"
    ],
    "genre": "传记音乐"
  },
  {
    "id": "0863",
    "title": "心跳主播迷魂劫",
    "url": "./movie-0863.html",
    "cover": "./113.jpg",
    "oneLine": "当红女主播收到神秘礼物——一个装有活人心跳的玻璃瓶,而追查真相的保安竟是当年失踪的初恋。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "直播",
      "病娇",
      "双向奔赴"
    ],
    "genre": "悬疑/爱情"
  },
  {
    "id": "0864",
    "title": "雷霆战狗",
    "url": "./movie-0864.html",
    "cover": "./114.jpg",
    "oneLine": "一只从没出过摄影棚的明星狗以为自己是真正的超级英雄,它穿越美国去寻找主人,却把现实搅得天翻地覆。",
    "year": "2008",
    "type": "电影/动画",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "宠物",
      "公路片",
      "英雄梦",
      "搞笑"
    ],
    "genre": "喜剧/动画/冒险"
  },
  {
    "id": "0865",
    "title": "变鬼之魂飘东京",
    "url": "./movie-0865.html",
    "cover": "./115.jpg",
    "oneLine": "东京地铁流传着一条规则:当车厢只剩你一人时,千万不要看对面的玻璃窗。",
    "year": "2026",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "都市传说",
      "地铁",
      "附身"
    ],
    "genre": "恐怖/惊悚"
  },
  {
    "id": "0866",
    "title": "乳虎出谷",
    "url": "./movie-0866.html",
    "cover": "./116.jpg",
    "oneLine": "三个少林俗家弟子去城里找失踪的师父,却把整个黑帮当成了师父抓进了派出所。",
    "year": "1988",
    "type": "电影",
    "region": "香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "功夫",
      "乡村",
      "乌龙",
      "邵氏"
    ],
    "genre": "动作/喜剧"
  },
  {
    "id": "0867",
    "title": "打工不如打电话",
    "url": "./movie-0867.html",
    "cover": "./117.jpg",
    "oneLine": "一个电话销售公司的底层员工,靠同时接三个客户的骂声练出了副业之神。",
    "year": "2024",
    "type": "网络短剧",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "电话销售",
      "办公室政治",
      "逆袭",
      "黑色幽默"
    ],
    "genre": "喜剧,职场"
  },
  {
    "id": "0868",
    "title": "爱情差错觉",
    "url": "./movie-0868.html",
    "cover": "./118.jpg",
    "oneLine": "一对情侣下载了“真相眼镜”APP,结果看到对方眼里全是幻象,以及无数追求者的鬼影。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "视觉错位",
      "情侣测试",
      "误会",
      "整蛊"
    ],
    "genre": "爱情,喜剧,科幻"
  },
  {
    "id": "0869",
    "title": "千方百计振雄风",
    "url": "./movie-0869.html",
    "cover": "./119.jpg",
    "oneLine": "45岁下岗大叔为给女儿挣大学学费,瞒着家人报名职业电竞青训营,与00后队友冲击全国联赛。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "中年人",
      "电竞",
      "逆袭",
      "家庭"
    ],
    "genre": "喜剧,励志,运动"
  },
  {
    "id": "0870",
    "title": "完美母亲",
    "url": "./movie-0870.html",
    "cover": "./120.jpg",
    "oneLine": "一个被全社区誉为“完美母亲”的女人,为了让自己平庸的女儿考上常春藤,开始清除女儿身边所有“不够好”的朋友。",
    "year": "2020",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "母爱扭曲",
      "控制欲",
      "代际创伤",
      "家庭惊悚",
      "心理博弈"
    ],
    "genre": "惊悚,悬疑,剧情"
  },
  {
    "id": "0871",
    "title": "李三枪",
    "url": "./movie-0871.html",
    "cover": "./121.jpg",
    "oneLine": "酒馆伙计李三被日军错认成县长,为了活命将错就错,却意外成了敌后武工队的精神领袖。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "双枪",
      "假县长",
      "谍战",
      "草根英雄"
    ],
    "genre": "抗战传奇"
  },
  {
    "id": "0872",
    "title": "情越双白线粤语",
    "url": "./movie-0872.html",
    "cover": "./122.jpg",
    "oneLine": "一对开出租车的亲兄弟爱上了同一个女人,而横亘在他们之间的,还有一条象征规则与感情“双白线”。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "粤语",
      "出租车",
      "兄弟",
      "伦理"
    ],
    "genre": "剧情,爱情"
  },
  {
    "id": "0873",
    "title": "王牌播音员2",
    "url": "./movie-0873.html",
    "cover": "./123.jpg",
    "oneLine": "曾经不可一世的新闻主播罗恩,在数字媒体时代成为网红笑柄,他必须组建一支“夕阳红”团队,夺回新闻尊严。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "新闻业",
      "中年危机",
      "职场喜剧",
      "续集"
    ],
    "genre": "喜剧,剧情"
  },
  {
    "id": "0874",
    "title": "一见又倾心",
    "url": "./movie-0874.html",
    "cover": "./124.jpg",
    "oneLine": "霸总车祸失忆后,以为自己是苦情剧女主,而他的秘书必须扮演冷酷总裁来保护他。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "失忆",
      "霸总",
      "套路",
      "反套路"
    ],
    "genre": "喜剧/爱情"
  },
  {
    "id": "0875",
    "title": "东方快车",
    "url": "./movie-0875.html",
    "cover": "./125.jpg",
    "oneLine": "豪华列车因暴雪停驶,一具尸体出现,12名乘客每人都有完美动机。",
    "year": "2024",
    "type": "剧集",
    "region": "英国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "密室杀人",
      "群像",
      "改编",
      "火车"
    ],
    "genre": "悬疑,犯罪"
  },
  {
    "id": "0876",
    "title": "足球教练第三季",
    "url": "./movie-0876.html",
    "cover": "./126.jpg",
    "oneLine": "内德教练空降降级球队,却发现自己要对抗的不只是对手,还有整个腐烂的更衣室文化。",
    "year": "2025",
    "type": "剧集",
    "region": "英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "足球",
      "励志",
      "英伦",
      "团队",
      "成长"
    ],
    "genre": "剧情/喜剧/运动"
  },
  {
    "id": "0877",
    "title": "吃鸟瘾",
    "url": "./movie-0877.html",
    "cover": "./127.jpg",
    "oneLine": "一位优雅的钢琴家患上了只能生吃鸟类的怪病,她的艺术灵感与兽性开始混淆。",
    "year": "2024",
    "type": "电影",
    "region": "法国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "心理",
      "疾病",
      "象征"
    ],
    "genre": "剧情/恐怖"
  },
  {
    "id": "0878",
    "title": "老鼠开会",
    "url": "./movie-0878.html",
    "cover": "./128.jpg",
    "oneLine": "一栋废弃大楼的地下室,每晚老鼠都在开会,讨论如何杀死那只不吃老鼠的猫。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "寓言",
      "黑色幽默",
      "政治隐喻",
      "群像",
      "成人向"
    ],
    "genre": "动画、悬疑"
  },
  {
    "id": "0879",
    "title": "艳惊情",
    "url": "./movie-0879.html",
    "cover": "./129.jpg",
    "oneLine": "一场精心策划的“意外”绑架案,将过气艳星、落魄导演和富商情人卷入一场爱欲与背叛的漩涡。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "情色",
      "复仇",
      "绑架"
    ],
    "genre": "犯罪,爱情,惊悚"
  },
  {
    "id": "0880",
    "title": "少年好莱坞第一季",
    "url": "./movie-0880.html",
    "cover": "./130.jpg",
    "oneLine": "五位新人被扔进老旧剧场“好莱坞东京”,他们在无人喝彩的舞台上能否迎来属于自己的聚光灯?",
    "year": "2014",
    "type": "TV动画",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "男团",
      "剧场成长",
      "艺能界真实"
    ],
    "genre": "偶像/青春/励志"
  },
  {
    "id": "0881",
    "title": "10 号公路",
    "url": "./movie-0881.html",
    "cover": "./131.jpg",
    "oneLine": "一条被诅咒的沙漠公路,七名互不相识的司机因事故被困,随后他们发现彼此之间都背负着血海深仇。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "荒漠追杀",
      "亡命之徒",
      "限时营救",
      "复仇"
    ],
    "genre": "惊悚,公路,犯罪"
  },
  {
    "id": "0882",
    "title": "心理游戏2004",
    "url": "./movie-0882.html",
    "cover": "./132.jpg",
    "oneLine": "一名落魄金融师收到神秘棋局邀请,却发现自己成了富豪们狩猎真人“棋子”。",
    "year": "2004",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "高智商犯罪",
      "反转",
      "密室"
    ],
    "genre": "悬疑/惊悚"
  },
  {
    "id": "0883",
    "title": "深网",
    "url": "./movie-0883.html",
    "cover": "./133.jpg",
    "oneLine": "三名黑客无意闯入暗网深处的“游戏场”,发现每一场游戏都是用真实人命做赌注。",
    "year": "2026",
    "type": "剧集",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "暗网",
      "黑客",
      "悬疑推理",
      "虚拟现实",
      "高科技犯罪"
    ],
    "genre": "犯罪/悬疑/科技惊悚"
  },
  {
    "id": "0884",
    "title": "家族的旅途",
    "url": "./movie-0884.html",
    "cover": "./134.jpg",
    "oneLine": "癌症晚期的父亲提出最后一个愿望:让三十年没说过话的儿子开车,带他重访一家四口曾生活过的五个老房子。",
    "year": "2020",
    "type": "剧集",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "临终关怀",
      "和解",
      "代际冲突",
      "公路剧"
    ],
    "genre": "剧情,家庭,治愈"
  },
  {
    "id": "0885",
    "title": "夺宝寻龙:北冥鲲宫",
    "url": "./movie-0885.html",
    "cover": "./135.jpg",
    "oneLine": "传闻鲲鹏陨落之地“北冥”藏有上古仙丹,一支由摸金校尉后人、海洋科学家和神秘少女组成的队伍,潜入万丈海渊寻宝。",
    "year": "2027",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "盗墓",
      "特效大片",
      "深海",
      "传说"
    ],
    "genre": "奇幻,动作,冒险"
  },
  {
    "id": "0886",
    "title": "情侠艾夫传",
    "url": "./movie-0886.html",
    "cover": "./136.jpg",
    "oneLine": "18世纪的欧洲,传奇侠盗艾夫以“情圣”之名行侠仗义,专门偷走贵族们非法所得的珍宝,并留下一支玫瑰。",
    "year": "2024",
    "type": "剧集",
    "region": "法国/意大利",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "欧洲古装",
      "侠盗",
      "骑士精神",
      "浪漫主义"
    ],
    "genre": "冒险,爱情,动作"
  },
  {
    "id": "0887",
    "title": "辛巴达:飞天公主与神秘岛",
    "url": "./movie-0887.html",
    "cover": "./137.jpg",
    "oneLine": "辛巴达第七次出海,遇到一个会飞的暴躁公主,两人被迫合作寻找能实现愿望的神秘岛。",
    "year": "2015",
    "type": "动画电影",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "航海",
      "神话",
      "公主",
      "魔怪",
      "伙伴"
    ],
    "genre": "动画/冒险/奇幻"
  },
  {
    "id": "0888",
    "title": "漂亮朋友",
    "url": "./movie-0888.html",
    "cover": "./138.jpg",
    "oneLine": "一个退役下级军官凭借美貌和手腕,在巴黎上流社会踩着女人向上爬。",
    "year": "2019",
    "type": "电影",
    "region": "法国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "莫泊桑改编",
      "渣男",
      "上流社会",
      "名利场",
      "欲望"
    ],
    "genre": "剧情/爱情"
  },
  {
    "id": "0889",
    "title": "隔壁的男孩杀过来",
    "url": "./movie-0889.html",
    "cover": "./139.jpg",
    "oneLine": "新搬来的阳光男孩竟是逃亡杀手,单身母亲为护子与其展开致命周旋。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "邻居入侵",
      "猫鼠游戏",
      "反转"
    ],
    "genre": "惊悚,犯罪"
  },
  {
    "id": "0890",
    "title": "电哪吒",
    "url": "./movie-0890.html",
    "cover": "./140.jpg",
    "oneLine": "一个混迹街头、靠偷电音三太子神偶维生的少年,发现自己真能让神明上身,并卷入一场黑帮圣物争夺战。",
    "year": "2026",
    "type": "电影",
    "region": "台湾",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "宫庙文化",
      "电音三太子",
      "通灵少年",
      "黑帮火并",
      "神明上身"
    ],
    "genre": "动作/奇幻/犯罪"
  },
  {
    "id": "0891",
    "title": "宝城艳姬",
    "url": "./movie-0891.html",
    "cover": "./141.jpg",
    "oneLine": "民国乱世,头牌舞女“宝城艳姬”与三个男人的爱恨纠缠,最终她选择用自己的死,换一座城的平安。",
    "year": "1995",
    "type": "电影",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "风尘女子",
      "乱世",
      "宿命"
    ],
    "genre": "爱情、古装"
  },
  {
    "id": "0892",
    "title": "吸烟者",
    "url": "./movie-0892.html",
    "cover": "./142.jpg",
    "oneLine": "在一间全面禁烟的写字楼里,三个烟鬼被发现躲在秘密楼梯间抽烟,公司要求他们必须举报一人才能保住饭碗。",
    "year": "2021",
    "type": "电影",
    "region": "英国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "禁烟令",
      "密室",
      "道德困境",
      "职场"
    ],
    "genre": "剧情,惊悚"
  },
  {
    "id": "0893",
    "title": "醉木人",
    "url": "./movie-0893.html",
    "cover": "./143.jpg",
    "oneLine": "双目失明的醉拳高手隐居村落,直到仇家带着当年灭门的火枪队再次找上门。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "盲人武者",
      "醉拳变体",
      "复仇与宽恕",
      "听觉打斗"
    ],
    "genre": "武侠/动作"
  },
  {
    "id": "0894",
    "title": "谁调换了我的父亲",
    "url": "./movie-0894.html",
    "cover": "./144.jpg",
    "oneLine": "六岁儿子被查出与自己无血缘关系,另一对夫妇找上门:当年抱错了。",
    "year": "2021",
    "type": "电影",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "抱错孩子",
      "血缘",
      "养育之恩"
    ],
    "genre": "剧情、家庭、伦理"
  },
  {
    "id": "0895",
    "title": "捉鬼敢死队:冰封魅来",
    "url": "./movie-0895.html",
    "cover": "./145.jpg",
    "oneLine": "全球变暖导致北极永冻层融化,释放出能把整个纽约冻进一秒的维京鬼王。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "捉鬼",
      "冰冻",
      "全球变暖",
      "远古邪灵"
    ],
    "genre": "喜剧,动作,奇幻,恐怖"
  },
  {
    "id": "0896",
    "title": "高卢勇士之大战罗马",
    "url": "./movie-0896.html",
    "cover": "./146.jpg",
    "oneLine": "喝了魔药就无敌的高卢村,这次要对抗的不只是罗马军团,还有一颗从天而降的陨石。",
    "year": "1985",
    "type": "电影",
    "region": "法国/比利时",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "欧洲漫画改编",
      "魔药搞笑",
      "罗马帝国"
    ],
    "genre": "动画/喜剧"
  },
  {
    "id": "0897",
    "title": "私法拘留",
    "url": "./movie-0897.html",
    "cover": "./147.jpg",
    "oneLine": "当法律无法惩罚强奸犯,受害者父亲决定自己建造一座监狱。",
    "year": "2019",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "私法",
      "拘留",
      "犯罪",
      "国产",
      "社会派",
      "复仇"
    ],
    "genre": "犯罪,剧情,悬疑"
  },
  {
    "id": "0898",
    "title": "一个醉鬼的白日梦",
    "url": "./movie-0898.html",
    "cover": "./148.jpg",
    "oneLine": "一个老酒鬼每次醉倒,都会在一个“完美版自己”的梦里醒来,直到他分不清哪边才是醒。",
    "year": "2025",
    "type": "电影",
    "region": "法国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "酒精",
      "幻想与现实",
      "存在主义"
    ],
    "genre": "剧情,奇幻,喜剧"
  },
  {
    "id": "0899",
    "title": "傻儿师长",
    "url": "./movie-0899.html",
    "cover": "./149.jpg",
    "oneLine": "一个连枪都拿不稳的“傻子”被误认成新派来的师长,他带领全团打的唯一一场胜仗是“敌人被我们自己人笑死了”。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "抗战",
      "荒诞",
      "小人物"
    ],
    "genre": "战争/喜剧"
  },
  {
    "id": "0900",
    "title": "情在不言中",
    "url": "./movie-0900.html",
    "cover": "./150.jpg",
    "oneLine": "失聪的图书管理员与失声的歌剧演员,在无声的图书馆里,用笔和纸谈了一场震耳欲聋的恋爱。",
    "year": "2023",
    "type": "电影",
    "region": "英国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "聋哑",
      "治愈",
      "纯爱",
      "慢节奏",
      "手语"
    ],
    "genre": "爱情、剧情"
  },
  {
    "id": "0901",
    "title": "我的宝藏",
    "url": "./movie-0901.html",
    "cover": "./1.jpg",
    "oneLine": "奶奶去世后,孙子在阁楼发现一个铁盒,里面装满了他小时候弄丢的“破烂”,也装着奶奶从未说出口的爱。",
    "year": "2015",
    "type": "电影",
    "region": "中国台湾",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "亲情",
      "代际关系",
      "怀旧",
      "治愈",
      "留守"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "0902",
    "title": "英伦琵琶",
    "url": "./movie-0902.html",
    "cover": "./2.jpg",
    "oneLine": "一个会弹琵琶的香港厨子,用琵琶弦和锅铲在伦敦唐人街以一敌十。",
    "year": "1984",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "香港电影",
      "伦敦",
      "黑帮",
      "琵琶",
      "功夫喜剧"
    ],
    "genre": "动作/喜剧/音乐"
  },
  {
    "id": "0903",
    "title": "妈妈的口供",
    "url": "./movie-0903.html",
    "cover": "./3.jpg",
    "oneLine": "智力障碍的儿子被控谋杀,母亲在审讯室给出的三份口供,却拼出更骇人的真相。",
    "year": "2024",
    "type": "电影",
    "region": "中国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "弑母疑云",
      "记忆迷宫",
      "罗生门式叙事"
    ],
    "genre": "悬疑,犯罪,家庭"
  },
  {
    "id": "0904",
    "title": "儿女情更长",
    "url": "./movie-0904.html",
    "cover": "./4.jpg",
    "oneLine": "母亲重病,散落在天涯的六个“儿女”齐聚病房,却发现血缘并非唯一纽带。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "养老",
      "丁克",
      "独生子女",
      "中年危机"
    ],
    "genre": "家庭/都市"
  },
  {
    "id": "0905",
    "title": "摩斯探长前传第六季",
    "url": "./movie-0905.html",
    "cover": "./5.jpg",
    "oneLine": "年轻的摩斯探长步入60年代尾声,在牛津的阴雨与爵士乐中,破解三起牵连警界高层的陈年旧案。",
    "year": "2023",
    "type": "剧集",
    "region": "英国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "英伦",
      "推理",
      "牛津",
      "古典"
    ],
    "genre": "犯罪,悬疑,剧情"
  },
  {
    "id": "0906",
    "title": "一个刑讯者的下午",
    "url": "./movie-0906.html",
    "cover": "./6.jpg",
    "oneLine": "1980年阿根廷独裁者倒台前夕,一个刑讯者在废弃监狱里,独自面对最后一具“沉默的囚犯”。",
    "year": "2025",
    "type": "电影",
    "region": "阿根廷",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "独裁时期",
      "道德拷问",
      "独角戏",
      "长镜头"
    ],
    "genre": "剧情,历史,心理"
  },
  {
    "id": "0907",
    "title": "无人陪伴的儿童",
    "url": "./movie-0907.html",
    "cover": "./7.jpg",
    "oneLine": "圣诞节前夕,五个被“邮寄”的熊孩子在机场滞留,为了追一只逃跑的宠物猴,差点拆了候机大楼。",
    "year": "2006",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "春运(圣诞)",
      "熊孩子",
      "机场大冒险",
      "飞机延误",
      "群像喜剧"
    ],
    "genre": "喜剧、冒险"
  },
  {
    "id": "0908",
    "title": "李大钊",
    "url": "./movie-0908.html",
    "cover": "./8.jpg",
    "oneLine": "聚焦李大钊生命最后38小时,铁窗内他与不同人物的思想交锋。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "革命",
      "先驱",
      "觉醒年代",
      "理想"
    ],
    "genre": "历史,传记"
  },
  {
    "id": "0909",
    "title": "失眠",
    "url": "./movie-0909.html",
    "cover": "./9.jpg",
    "oneLine": "一位失眠十年的男子接受实验性治疗,却分不清哪些是梦、哪些是被篡改的记忆。",
    "year": "2023",
    "type": "电影",
    "region": "中国香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "精神分裂",
      "记忆",
      "救赎",
      "反催眠"
    ],
    "genre": "悬疑/心理/剧情"
  },
  {
    "id": "0910",
    "title": "爱情故事",
    "url": "./movie-0910.html",
    "cover": "./10.jpg",
    "oneLine": "她爱了他十年,他却在一个雨夜删掉了关于她的一切记忆,只为了重新爱上她。",
    "year": "2025",
    "type": "电影",
    "region": "中国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "都市",
      "错位",
      "时空",
      "催泪"
    ],
    "genre": "爱情,剧情"
  },
  {
    "id": "0911",
    "title": "吉伯特拒蛋行动",
    "url": "./movie-0911.html",
    "cover": "./11.jpg",
    "oneLine": "未来世界鸡蛋被列为违禁品,一个中年胖子为了早餐自由,掀翻了整个银河帝国。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "荒诞",
      "环保",
      "黑色幽默",
      "末日",
      "反叛"
    ],
    "genre": "喜剧/科幻"
  },
  {
    "id": "0912",
    "title": "稚子骄阳",
    "url": "./movie-0912.html",
    "cover": "./12.jpg",
    "oneLine": "一个六岁男孩为了不让母亲卖掉他心爱的小驴,决定靠自己攒钱买下它。",
    "year": "2020",
    "type": "电影",
    "region": "伊朗/法国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "儿童",
      "教育",
      "乡村",
      "诗意",
      "社会"
    ],
    "genre": "剧情家庭"
  },
  {
    "id": "0913",
    "title": "暗影王冠",
    "url": "./movie-0913.html",
    "cover": "./13.jpg",
    "oneLine": "当阳光下的王座只是傀儡,真正的战争在每个人的影子中为争夺一顶由黑暗编织的“暗影王冠”而打响。",
    "year": "2029",
    "type": "剧集",
    "region": "英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "魔法政治",
      "影子王国",
      "背叛",
      "弑君"
    ],
    "genre": "奇幻/宫廷斗争"
  },
  {
    "id": "0914",
    "title": "荷兰火海战",
    "url": "./movie-0914.html",
    "cover": "./14.jpg",
    "oneLine": "二战末期,荷兰水线防线被炸开,纳粹与盟军在滔天洪水与熊熊大火中展开终极对决。",
    "year": "2025",
    "type": "电影",
    "region": "荷兰",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "洪水",
      "火灾",
      "二战",
      "水陆大战",
      "特效大片"
    ],
    "genre": "灾难,动作,战争"
  },
  {
    "id": "0915",
    "title": "保福之枪",
    "url": "./movie-0915.html",
    "cover": "./15.jpg",
    "oneLine": "1920年台湾山区,一名泰雅族少年在日本人收缴全族猎枪时,偷偷藏起了族里最神圣的“保福之枪”。",
    "year": "2019",
    "type": "电影",
    "region": "中国台湾",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "原住民",
      "日据时期",
      "猎枪",
      "身份认同"
    ],
    "genre": "剧情,历史"
  },
  {
    "id": "0916",
    "title": "刘老根2",
    "url": "./movie-0916.html",
    "cover": "./16.jpg",
    "oneLine": "龙泉山庄面临短视频带货和网红经济的冲击,退休的刘老根不得不重出江湖整顿内乱。",
    "year": "2024",
    "type": "剧集",
    "region": "中国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "乡村振兴",
      "民宿创业",
      "东北喜剧",
      "老戏骨飙戏"
    ],
    "genre": "剧情/喜剧/乡村"
  },
  {
    "id": "0917",
    "title": "斗争人生",
    "url": "./movie-0917.html",
    "cover": "./17.jpg",
    "oneLine": "他一生都在与纳粹、斯大林以及戴高乐斗争,临死前却发现,自己最大的敌人,是内心对权力的欲望。",
    "year": "2026",
    "type": "电影",
    "region": "法国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "政治",
      "理想主义",
      "冷战",
      "独角戏"
    ],
    "genre": "剧情,传记,历史"
  },
  {
    "id": "0918",
    "title": "兜风",
    "url": "./movie-0918.html",
    "cover": "./18.jpg",
    "oneLine": "中年失业的父亲偷了客户的车带自闭症儿子进行最后一次环岛旅行,身后是警笛和追债人。",
    "year": "2023",
    "type": "电影",
    "region": "中国台湾",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "公路",
      "父子",
      "和解"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "0919",
    "title": "矿哥矿嫂的平凡生活",
    "url": "./movie-0919.html",
    "cover": "./19.jpg",
    "oneLine": "故事围绕一对在矿区生活的中年夫妻展开,看他们如何在琐碎与意外中,守护家庭与邻里的温情。",
    "year": "2022",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "煤矿",
      "邻里",
      "温暖",
      "现实主义"
    ],
    "genre": "剧情,家庭,生活"
  },
  {
    "id": "0920",
    "title": "封闭女子监狱",
    "url": "./movie-0920.html",
    "cover": "./20.jpg",
    "oneLine": "在号称“永不越狱”的女子监狱里,一位新人发现,囚犯失踪的规律与监舍编号有关。",
    "year": "2024",
    "type": "剧集",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "监狱",
      "黑吃黑",
      "女群像",
      "规则怪谈"
    ],
    "genre": "悬疑/犯罪/剧情"
  },
  {
    "id": "0921",
    "title": "殊途同归第二季",
    "url": "./movie-0921.html",
    "cover": "./21.jpg",
    "oneLine": "六个看似毫无关联的普通人,为了各自坚信的“正义”踏上了犯罪之路,最终汇聚在同一间审讯室。",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "单元剧",
      "人性抉择",
      "社会议题",
      "高口碑"
    ],
    "genre": "剧情,悬疑"
  },
  {
    "id": "0922",
    "title": "最后的武士",
    "url": "./movie-0922.html",
    "cover": "./22.jpg",
    "oneLine": "与《最后的武士》不同,这次的主角是一个真正的日本底层足轻,在明治维新的炮火中守护最后一座藩城。",
    "year": "2024",
    "type": "电影",
    "region": "日本/美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "武士道",
      "幕末",
      "维新",
      "剑戟"
    ],
    "genre": "动作/历史"
  },
  {
    "id": "0923",
    "title": "好像一条狗",
    "url": "./movie-0923.html",
    "cover": "./23.jpg",
    "oneLine": "程序员被公司裁员后,发现自己变成了一条流浪狗,而老板的宠物狗正坐着他原来的工位。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "中年危机",
      "躺平",
      "隐喻",
      "黑色幽默",
      "职场"
    ],
    "genre": "剧情/喜剧/荒诞"
  },
  {
    "id": "0924",
    "title": "鬼佬",
    "url": "./movie-0924.html",
    "cover": "./24.jpg",
    "oneLine": "内地外卖员在香港旧楼送餐,发现所有住户都是“鬼”,而他自己的真实身份也在最后一单揭晓。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "外卖员",
      "旧楼闹鬼",
      "香港新移民",
      "身份恐惧"
    ],
    "genre": "惊悚、悬疑、社会"
  },
  {
    "id": "0925",
    "title": "哈伯",
    "url": "./movie-0925.html",
    "cover": "./25.jpg",
    "oneLine": "火星基地遭遇未知病毒侵袭,宇航员哈伯必须独自在太空站找到解药并阻止其传回地球。",
    "year": "2018",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "太空",
      "拯救",
      "宇航员",
      "硬科幻"
    ],
    "genre": "科幻/冒险"
  },
  {
    "id": "0926",
    "title": "雪花和栗子球",
    "url": "./movie-0926.html",
    "cover": "./26.jpg",
    "oneLine": "小女孩误入森林,遇见能预测天气的精灵“栗子球”,一起寻找融化在春天里的最后一朵雪花。",
    "year": "2022",
    "type": "动画电影",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "手绘风",
      "森林冒险",
      "成长",
      "环保"
    ],
    "genre": "奇幻、家庭、治愈"
  },
  {
    "id": "0927",
    "title": "钢盔",
    "url": "./movie-0927.html",
    "cover": "./27.jpg",
    "oneLine": "斯大林格勒废墟中,苏德两名顶级狙击手隔墙对峙,而他们之间唯一的遮挡,是一顶卡在裂缝中的破钢盔。",
    "year": "2025",
    "type": "电影",
    "region": "俄罗斯",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "二战",
      "狙击手",
      "斯大林格勒",
      "人性"
    ],
    "genre": "战争/历史"
  },
  {
    "id": "0928",
    "title": "胭脂狐",
    "url": "./movie-0928.html",
    "cover": "./28.jpg",
    "oneLine": "晚清乱世,一家胭脂铺的老板娘能用狐香勾起人心底最深的欲望,也将罪恶暴露无遗。",
    "year": "2026",
    "type": "剧集",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "聊斋",
      "狐妖",
      "悬案",
      "志怪"
    ],
    "genre": "古装、奇幻、爱情"
  },
  {
    "id": "0929",
    "title": "行骗天下",
    "url": "./movie-0929.html",
    "cover": "./29.jpg",
    "oneLine": "一个自称“英雄”的顶级欺诈师团队,专门设局坑骗贪婪的大人物,每次得手后都会留下一个“行骗天下”的暗号。",
    "year": "2018",
    "type": "剧集/电影(系列)",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "欺诈师",
      "单元剧",
      "反转再反转",
      "日式幽默",
      "英雄"
    ],
    "genre": "喜剧/悬疑/犯罪"
  },
  {
    "id": "0930",
    "title": "暗杀中国赌徒事件",
    "url": "./movie-0930.html",
    "cover": "./30.jpg",
    "oneLine": "澳门赌王在东京赌场被暗杀,现场四个中国赌徒都有动机,但凶手却是第五个人。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "跨国犯罪",
      "赌场",
      "本格推理",
      "黑吃黑"
    ],
    "genre": "悬疑/犯罪/动作"
  },
  {
    "id": "0931",
    "title": "战狼",
    "url": "./movie-0931.html",
    "cover": "./31.jpg",
    "oneLine": "特种兵冷锋因违抗军令被开除,却意外卷入一场边境雇佣兵屠杀,他必须独自对抗整个国际犯罪组织。",
    "year": "2015",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "特种兵",
      "雇佣兵",
      "爱国"
    ],
    "genre": "动作/战争"
  },
  {
    "id": "0932",
    "title": "炮弹飞车粤语",
    "url": "./movie-0932.html",
    "cover": "./32.jpg",
    "oneLine": "一个过气赛车手和一个黑车司机,开着一辆报废的出租车,误入了亚洲最大的地下飙车赛。",
    "year": "2018",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "飞车",
      "港产片",
      "粤语原声",
      "兄弟情",
      "爆笑飙车"
    ],
    "genre": "动作/喜剧/赛车"
  },
  {
    "id": "0933",
    "title": "科学魔王",
    "url": "./movie-0933.html",
    "cover": "./33.jpg",
    "oneLine": "一个十五岁的天才少年用基因编辑治好了自己的绝症,然后顺手把自己改成了超级反派。",
    "year": "2027",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "基因编辑",
      "天才少年",
      "伦理失控",
      "野心",
      "代价"
    ],
    "genre": "科幻,悬疑,心理惊悚"
  },
  {
    "id": "0934",
    "title": "亲爱的药王大人",
    "url": "./movie-0934.html",
    "cover": "./34.jpg",
    "oneLine": "女中医穿进自己写的烂尾小说里,成了恶毒女配,还要救活被她写死的药王大人。",
    "year": "2020",
    "type": "剧集",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "药王",
      "穿书",
      "中医",
      "甜宠"
    ],
    "genre": "古装,奇幻,爱情"
  },
  {
    "id": "0935",
    "title": "猎艳",
    "url": "./movie-0935.html",
    "cover": "./35.jpg",
    "oneLine": "摄影师无意中拍下对面大楼的一桩谋杀案,却发现报警后的自己反而成了猎杀目标。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "女性视角",
      "偷窥",
      "心理战"
    ],
    "genre": "悬疑,惊悚"
  },
  {
    "id": "0936",
    "title": "出柙猛虎",
    "url": "./movie-0936.html",
    "cover": "./36.jpg",
    "oneLine": "退役特种兵潜入全球最安全的私人动物园,从老虎领地救出被囚的科学家。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "特工",
      "越狱",
      "动物"
    ],
    "genre": "动作/冒险"
  },
  {
    "id": "0937",
    "title": "肆意射杀",
    "url": "./movie-0937.html",
    "cover": "./37.jpg",
    "oneLine": "退伍狙神被卷入阴谋,全城追凶中每颗子弹都在替天行道。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "枪战",
      "第一视角",
      "复仇",
      "高燃"
    ],
    "genre": "动作/惊悚"
  },
  {
    "id": "0938",
    "title": "淘气大侦探",
    "url": "./movie-0938.html",
    "cover": "./38.jpg",
    "oneLine": "伦敦所有花园地精一夜之间失踪,仅剩的两个高傲侦探地精必须联手普通地精家族破案。",
    "year": "2018",
    "type": "电影",
    "region": "美国/英国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "花园地精",
      "侦探",
      "伦敦",
      "解谜",
      "搭档"
    ],
    "genre": "动画,喜剧,悬疑"
  },
  {
    "id": "0939",
    "title": "某种生活",
    "url": "./movie-0939.html",
    "cover": "./39.jpg",
    "oneLine": "一个家庭突然过上了“完美”生活,但每周都要淘汰一个成员,由新人顶替。",
    "year": "2026",
    "type": "剧集",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "复制家庭",
      "日常恐怖",
      "人伦实验"
    ],
    "genre": "家庭/伦理/悬疑"
  },
  {
    "id": "0940",
    "title": "想去看海的女孩们",
    "url": "./movie-0940.html",
    "cover": "./40.jpg",
    "oneLine": "临终关怀医院里,六个生命只剩三个月的女孩撬开了医院的锁,拼车踏上了去看海的公路。",
    "year": "2024",
    "type": "电影",
    "region": "意大利",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "青春",
      "友情",
      "遗愿",
      "公路",
      "治愈"
    ],
    "genre": "剧情"
  },
  {
    "id": "0941",
    "title": "王海涛今年四十一",
    "url": "./movie-0941.html",
    "cover": "./41.jpg",
    "oneLine": "还有一年就能安全退休的王海涛,突然被调去处理最棘手的烂尾楼纠纷,他的“佛系”人生彻底完蛋。",
    "year": "2025",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "中年危机",
      "体制内生存",
      "黑色幽默"
    ],
    "genre": "剧情/喜剧"
  },
  {
    "id": "0942",
    "title": "律政女杰莉迪亚第二季",
    "url": "./movie-0942.html",
    "cover": "./42.jpg",
    "oneLine": "天才女律师莉迪亚接下一桩冷门旧案,却发现受害者正是自己失散多年的姐姐。",
    "year": "2024",
    "type": "剧集",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "律政",
      "女性成长",
      "悬疑推理"
    ],
    "genre": "剧情/犯罪"
  },
  {
    "id": "0943",
    "title": "糖果男孩",
    "url": "./movie-0943.html",
    "cover": "./43.jpg",
    "oneLine": "一个热爱制作手工糖果的高中生,用甜蜜对抗父亲的铁拳与校园霸凌。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "校园",
      "成长",
      "叛逆",
      "父子"
    ],
    "genre": "剧情/青春"
  },
  {
    "id": "0944",
    "title": "玉贞姐姐",
    "url": "./movie-0944.html",
    "cover": "./44.jpg",
    "oneLine": "知青玉贞为救闺蜜嫁给村霸,十年后闺蜜成为县委书记,而玉贞刚刚刑满出狱。",
    "year": "2026",
    "type": "剧集",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "大女主",
      "知青岁月",
      "女性互助",
      "命运沉浮"
    ],
    "genre": "年代家庭"
  },
  {
    "id": "0945",
    "title": "查理和嘟嘟",
    "url": "./movie-0945.html",
    "cover": "./45.jpg",
    "oneLine": "被遗弃的贵宾犬查理和流浪猫嘟嘟一起横穿美国,去寻找各自的原主人。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "宠物",
      "公路片",
      "友情",
      "寻亲",
      "治愈"
    ],
    "genre": "动画,冒险"
  },
  {
    "id": "0946",
    "title": "僵尸来袭2:末日",
    "url": "./movie-0946.html",
    "cover": "./46.jpg",
    "oneLine": "病毒全面失控,城市沦为人间炼狱,一个重金属乐手要用电锯吉他为怀孕的妻子杀出一条血路。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "丧尸",
      "末日求生",
      "硬核动作",
      "B级片"
    ],
    "genre": "动作,恐怖,科幻"
  },
  {
    "id": "0947",
    "title": "死亡谷2021",
    "url": "./movie-0947.html",
    "cover": "./47.jpg",
    "oneLine": "五名驴友进入死亡谷探险,GPS记录下他们在同一个坐标反复转了七天,最后一条短信是“我们不是五个人”。",
    "year": "2021",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "伪纪录",
      "失踪案",
      "沙漠",
      "时间循环"
    ],
    "genre": "恐怖/冒险"
  },
  {
    "id": "0948",
    "title": "雪琳娘",
    "url": "./movie-0948.html",
    "cover": "./48.jpg",
    "oneLine": "1793年,贵族少女目睹全家被送上断头台,她戴上父亲留下的男装,成为专杀“革命暴徒”的侠盗“雪琳娘”。",
    "year": "2025",
    "type": "剧集",
    "region": "法国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "法国大革命",
      "女性侠盗",
      "烧贵族庄园",
      "浪漫革命",
      "断头台美学"
    ],
    "genre": "历史/动作/冒险"
  },
  {
    "id": "0949",
    "title": "香烟和热巧克力",
    "url": "./movie-0949.html",
    "cover": "./49.jpg",
    "oneLine": "一根烟与一杯热巧,两个陌生人交换了后半生最温暖的秘密。",
    "year": "2024",
    "type": "电影",
    "region": "法国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "孤独",
      "治愈",
      "甜食",
      "跨代友谊"
    ],
    "genre": "剧情"
  },
  {
    "id": "0950",
    "title": "横冲直闯",
    "url": "./movie-0950.html",
    "cover": "./50.jpg",
    "oneLine": "一个被诬陷的卡车司机,为了救出狱中的女儿,开着18轮大卡车横冲直闯,对抗整个腐败小镇。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "飞车",
      "复仇",
      "硬汉",
      "公路",
      "暴力美学"
    ],
    "genre": "动作,惊悚,犯罪"
  },
  {
    "id": "0951",
    "title": "留守的天空",
    "url": "./movie-0951.html",
    "cover": "./51.jpg",
    "oneLine": "十岁的姐姐在父母外出打工后,不得不扮演起“妈妈”的角色,照顾年幼的弟弟。",
    "year": "2024",
    "type": "电影",
    "region": "中国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "留守儿童",
      "乡村教育",
      "催泪"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "0952",
    "title": "冰肤传说",
    "url": "./movie-0952.html",
    "cover": "./52.jpg",
    "oneLine": "一名气象学家被派往南极孤岛,发现岛上的灯塔看守人豢养着来自深海的可怖生物。",
    "year": "2025",
    "type": "电影",
    "region": "西班牙",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "孤岛",
      "神秘生物",
      "人性考验",
      "克苏鲁风",
      "心理惊悚"
    ],
    "genre": "奇幻,恐怖,悬疑"
  },
  {
    "id": "0953",
    "title": "五个醒觉的少年粤语",
    "url": "./movie-0953.html",
    "cover": "./53.jpg",
    "oneLine": "五个被社会遗弃的问题少年,在一次野外生存训练中遭遇山洪,被迫团结求生。",
    "year": "1991",
    "type": "剧集",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "成长",
      "问题少年",
      "社工",
      "励志"
    ],
    "genre": "剧情,青春"
  },
  {
    "id": "0954",
    "title": "智多星妙计歼仇",
    "url": "./movie-0954.html",
    "cover": "./54.jpg",
    "oneLine": "为替被黑警害死的父亲报仇,哑巴天才用缜密数学逻辑设下天罗地网。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "高智商",
      "复仇",
      "设局"
    ],
    "genre": "动作,犯罪,悬疑"
  },
  {
    "id": "0955",
    "title": "异形魔怪3",
    "url": "./movie-0955.html",
    "cover": "./55.jpg",
    "oneLine": "本集怪物不再只待在地下,它们学会了伪装成人类的声音来设陷阱。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "怪物",
      "地下",
      "封闭空间",
      "进化"
    ],
    "genre": "科幻/惊悚/灾难"
  },
  {
    "id": "0956",
    "title": "皇家兄弟马戏团",
    "url": "./movie-0956.html",
    "cover": "./56.jpg",
    "oneLine": "维多利亚时代,兄弟二人继承马戏团,一个想转型剧场,一个执意保留奇观。",
    "year": "2021",
    "type": "剧集",
    "region": "英国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "马戏团",
      "兄弟情",
      "维多利亚时代",
      "权斗",
      "怪胎秀"
    ],
    "genre": "剧情,历史,家庭"
  },
  {
    "id": "0957",
    "title": "金发美人",
    "url": "./movie-0957.html",
    "cover": "./57.jpg",
    "oneLine": "一部以玛丽莲·梦露为主角,打破虚实边界的心灵肖像,揭示金发红唇背后那个永远在寻找父亲的孤独女孩诺玛·简。",
    "year": "2022",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "传记",
      "玛丽莲梦露",
      "心理",
      "悲剧"
    ],
    "genre": "剧情,传记"
  },
  {
    "id": "0958",
    "title": "低糖国语",
    "url": "./movie-0958.html",
    "cover": "./58.jpg",
    "oneLine": "患糖尿病的母亲突然只说“低糖国语”,女儿为解谜踏上寻回亲情语言的旅程。",
    "year": "2025",
    "type": "电影",
    "region": "中国台湾",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "糖尿病",
      "语言治疗",
      "母女关系",
      "味觉隐喻"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "0959",
    "title": "多莉亚与阿勒颇公主",
    "url": "./movie-0959.html",
    "cover": "./59.jpg",
    "oneLine": "在战火中的阿勒颇,一位法国考古学家之女与一位自称公主的叙利亚老妇,共同守护最后一座未炸毁的博物馆。",
    "year": "2023",
    "type": "电影",
    "region": "法国/叙利亚",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "战争与和平",
      "文化遗产",
      "女性友谊",
      "手绘"
    ],
    "genre": "动画/历史/冒险"
  },
  {
    "id": "0960",
    "title": "魔鬼发卡",
    "url": "./movie-0960.html",
    "cover": "./60.jpg",
    "oneLine": "女生戴上捡来的红色发卡后,每晚梦见自己被血淋淋地梳头,而发卡原主人已死。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "校园",
      "诅咒",
      "民俗"
    ],
    "genre": "恐怖,惊悚"
  },
  {
    "id": "0961",
    "title": "逃亡花",
    "url": "./movie-0961.html",
    "cover": "./61.jpg",
    "oneLine": "被冤枉杀害丈夫的柔弱妻子越狱逃亡,一边躲避追捕,一边用她唯一擅长的“花艺”替天行道。",
    "year": "2018",
    "type": "电视剧",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "替罪羔羊",
      "女囚",
      "逃亡复仇",
      "姐系魅力"
    ],
    "genre": "悬疑/犯罪/剧情"
  },
  {
    "id": "0962",
    "title": "新罗马浴场",
    "url": "./movie-0962.html",
    "cover": "./62.jpg",
    "oneLine": "古罗马浴场设计师路西斯穿越到现代日本,被钱汤和温泉酒店的脑洞设计彻底震撼。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "穿越",
      "建筑师",
      "澡堂文化",
      "职场讽刺"
    ],
    "genre": "喜剧/奇幻/历史"
  },
  {
    "id": "0963",
    "title": "誓约归隐",
    "url": "./movie-0963.html",
    "cover": "./63.jpg",
    "oneLine": "已经归隐的剑圣为救旧友重出江湖,却发现昔日的挚友就是现在的敌人。",
    "year": "2026",
    "type": "剧集",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "武士道",
      "隐退复仇",
      "禅意打斗",
      "男性友情"
    ],
    "genre": "古装/动作"
  },
  {
    "id": "0964",
    "title": "净化大师",
    "url": "./movie-0964.html",
    "cover": "./64.jpg",
    "oneLine": "一位网红“驱魔师”走进凶宅直播,却发现凶宅里的“怨灵”正在反向净化他内心的罪孽。",
    "year": "2022",
    "type": "电影",
    "region": "韩国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "宗教犯罪",
      "直播杀人",
      "反转",
      "社会派"
    ],
    "genre": "惊悚/悬疑"
  },
  {
    "id": "0965",
    "title": "云上情歌",
    "url": "./movie-0965.html",
    "cover": "./65.jpg",
    "oneLine": "一次气流颠簸,空乘林溪捡到了音乐制作人陆远舟写给前女友的未寄出的信。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "航空",
      "异地恋",
      "音乐",
      "治愈",
      "成长"
    ],
    "genre": "爱情/剧情"
  },
  {
    "id": "0966",
    "title": "幸运者",
    "url": "./movie-0966.html",
    "cover": "./66.jpg",
    "oneLine": "一个倒霉了一辈子的男人中了六合彩,然后他发现好运是用身边人的命换的。",
    "year": "2024",
    "type": "电影",
    "region": "意大利",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "彩票",
      "中奖",
      "人性考验",
      "黑色喜剧",
      "社会讽刺"
    ],
    "genre": "剧情、黑色幽默、奇幻"
  },
  {
    "id": "0967",
    "title": "女士之街",
    "url": "./movie-0967.html",
    "cover": "./67.jpg",
    "oneLine": "在文艺复兴时期的佛罗伦萨,一条全是女性商户的街道,向整个男权社会发起了挑战。",
    "year": "2024",
    "type": "电影",
    "region": "意大利",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "女性",
      "文艺复兴",
      "觉醒",
      "年代剧",
      "服饰精美"
    ],
    "genre": "剧情,历史"
  },
  {
    "id": "0968",
    "title": "情已逝",
    "url": "./movie-0968.html",
    "cover": "./68.jpg",
    "oneLine": "离婚律师在法庭上重逢三十年前的初恋,这次她要代理的不是离婚案,而是初恋妻子起诉他的遗产争夺案。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "中年",
      "遗憾",
      "重逢",
      "旧情人",
      "治愈"
    ],
    "genre": "爱情,剧情"
  },
  {
    "id": "0969",
    "title": "换爱七日",
    "url": "./movie-0969.html",
    "cover": "./69.jpg",
    "oneLine": "一个北京白领和一个小镇女青年互换人生七天,结果两人的男友也被一起换了。",
    "year": "2014",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "交换生活",
      "都市",
      "乡村",
      "价值观冲突"
    ],
    "genre": "爱情/喜剧"
  },
  {
    "id": "0970",
    "title": "湘音湘韵",
    "url": "./movie-0970.html",
    "cover": "./70.jpg",
    "oneLine": "从小被送去学美声的湘西女孩,因奶奶病重回乡,被迫继承一个快倒闭的花鼓戏剧团。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "方言",
      "花鼓戏",
      "传承",
      "乡土"
    ],
    "genre": "剧情,音乐"
  },
  {
    "id": "0971",
    "title": "古惑奇兵之兵行险着",
    "url": "./movie-0971.html",
    "cover": "./71.jpg",
    "oneLine": "一场赌上性命的黑吃黑骗局,卧底与悍匪之间只差一颗子弹的距离。",
    "year": "1995",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "黑帮",
      "卧底",
      "赌局",
      "兄弟情"
    ],
    "genre": "动作,犯罪"
  },
  {
    "id": "0972",
    "title": "游戏时间",
    "url": "./movie-0972.html",
    "cover": "./72.jpg",
    "oneLine": "七个负债者被拉进一个直播游戏,每轮投票淘汰一人,淘汰者会被注射一种“让人消失”的药物。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "生存游戏",
      "直播",
      "社会批判",
      "反转"
    ],
    "genre": "惊悚,悬疑,动作"
  },
  {
    "id": "0973",
    "title": "心灵病房",
    "url": "./movie-0973.html",
    "cover": "./73.jpg",
    "oneLine": "一位研究十七世纪死亡诗的文学教授,在癌症病房里亲历了她研究了半辈子的课题。",
    "year": "2001",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "医疗",
      "生死",
      "文学",
      "艾玛·汤普森"
    ],
    "genre": "剧情"
  },
  {
    "id": "0974",
    "title": "水星领航员第三季",
    "url": "./movie-0974.html",
    "cover": "./74.jpg",
    "oneLine": "在水星威尼斯般的城市里,年轻的领航员见习生们迎来了她们成为正式“水之精灵”前的最后一个夏天。",
    "year": "2008",
    "type": "动画",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "治愈系",
      "未来水世界",
      "划船",
      "悠闲",
      "成长"
    ],
    "genre": "科幻,治愈,日常"
  },
  {
    "id": "0975",
    "title": "致命控诉",
    "url": "./movie-0975.html",
    "cover": "./75.jpg",
    "oneLine": "当司法系统成为共谋,三位女律师联手揭开一桩横跨二十年的连环冤案背后的致命控诉。",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "律政",
      "女性力量",
      "社会事件",
      "多线叙事",
      "冷硬派"
    ],
    "genre": "犯罪,剧情"
  },
  {
    "id": "0976",
    "title": "300杀手",
    "url": "./movie-0976.html",
    "cover": "./76.jpg",
    "oneLine": "在禁止热兵器的未来,一名被判处300次死亡轮回的杀手,每次复活都要面对更强大自己的追杀。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "克隆",
      "冷兵器",
      "反乌托邦",
      "暴力美学"
    ],
    "genre": "动作,科幻"
  },
  {
    "id": "0977",
    "title": "恐怖怪物",
    "url": "./movie-0977.html",
    "cover": "./77.jpg",
    "oneLine": "小女孩声称衣柜里有怪物,父亲不信,直到他发现自己童年时从衣柜里逃出来、杀死自己家人的,就是眼前这个“女儿”。",
    "year": "2025",
    "type": "电影",
    "region": "加拿大/挪威",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "怪物",
      "家庭创伤",
      "隐喻",
      "实拍特效"
    ],
    "genre": "恐怖/心理/超自然"
  },
  {
    "id": "0978",
    "title": "火流星",
    "url": "./movie-0978.html",
    "cover": "./78.jpg",
    "oneLine": "一颗火流星坠落在西南山区,带来灾难性的山火与神秘辐射,十位村民必须在救援到来前活下去。",
    "year": "2021",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "陨石撞击",
      "偏远村庄",
      "绝境求生"
    ],
    "genre": "灾难/剧情"
  },
  {
    "id": "0979",
    "title": "卡拉瓦乔之影",
    "url": "./movie-0979.html",
    "cover": "./79.jpg",
    "oneLine": "1606年,杀死情敌的画家卡拉瓦乔逃亡途中,发现每一个收留他的人,都会被他画入画中,然后死去。",
    "year": "2022",
    "type": "电影",
    "region": "意大利",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "卡拉瓦乔",
      "艺术史",
      "文艺复兴",
      "同性恋",
      "逃亡"
    ],
    "genre": "传记/悬疑/历史"
  },
  {
    "id": "0980",
    "title": "疯狂电视台疯电影",
    "url": "./movie-0980.html",
    "cover": "./80.jpg",
    "oneLine": "一个濒临倒闭的电视台决定把所有节目改成现场直播的疯狂大电影,却意外卷入了一场真实的犯罪。",
    "year": "2024",
    "type": "电影",
    "region": "中国台湾",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "黑色幽默",
      "职场",
      "直播",
      "荒诞"
    ],
    "genre": "喜剧"
  },
  {
    "id": "0981",
    "title": "心动的信号第七季",
    "url": "./movie-0981.html",
    "cover": "./81.jpg",
    "oneLine": "七位来自不同行业的都市素人入住海岛心动小屋,在观察室的明星嘉宾见证下展开为期一个月的寻爱之旅。",
    "year": "2026",
    "type": "综艺",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "素人恋爱",
      "观察室",
      "心动侦探"
    ],
    "genre": "真人秀,恋爱"
  },
  {
    "id": "0982",
    "title": "琦玉歌者2",
    "url": "./movie-0982.html",
    "cover": "./82.jpg",
    "oneLine": "过气rapper为保住社区唯一唱片店,与地方议员展开一场荒诞的说唱对决。",
    "year": "2026",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "说唱",
      "中年危机",
      "地方复兴",
      "续集"
    ],
    "genre": "音乐,喜剧,剧情"
  },
  {
    "id": "0983",
    "title": "谜域之噬魂岭",
    "url": "./movie-0983.html",
    "cover": "./83.jpg",
    "oneLine": "地理杂志的摄制组在无人区发现一座“噬魂岭”,每走一步都会看到死去的亲人,而领队发现这是自己十年前设计的废弃游戏地形。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "荒野求生",
      "民俗恐怖",
      "密室解谜",
      "反转",
      "中式恐怖"
    ],
    "genre": "悬疑,惊悚,冒险"
  },
  {
    "id": "0984",
    "title": "元首的面孔",
    "url": "./movie-0984.html",
    "cover": "./84.jpg",
    "oneLine": "科学家用AI复活了希特勒的脸,并将其植入一名反法西斯战士的面部,试图潜入新纳粹组织。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "面部识别",
      "暗杀",
      "技术伦理",
      "二战",
      "人造人"
    ],
    "genre": "剧情,惊悚,战争"
  },
  {
    "id": "0985",
    "title": "超人特攻与钢铁人",
    "url": "./movie-0985.html",
    "cover": "./85.jpg",
    "oneLine": "超级英雄家族的退休奶爸被迫与自恋的钢铁侠组队,拯救被AI操控的底特律。",
    "year": "2023",
    "type": "动画电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "超级英雄",
      "反套路",
      "合体机甲",
      "家庭喜剧",
      "科技讽刺"
    ],
    "genre": "动作,科幻,喜剧"
  },
  {
    "id": "0986",
    "title": "新蝙蝠侠第三季",
    "url": "./movie-0986.html",
    "cover": "./86.jpg",
    "oneLine": "哥谭市的新反派“笑面人”不杀人,他只让受害者笑着崩溃自杀。",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "蝙蝠侠",
      "哥谭",
      "黑暗",
      "心理战"
    ],
    "genre": "动作/犯罪/悬疑"
  },
  {
    "id": "0987",
    "title": "花样年华粤语",
    "url": "./movie-0987.html",
    "cover": "./87.jpg",
    "oneLine": "1960年代的香港,两对夫妻的隔壁之隔,两个发现配偶出轨的男女,在克制中互生情愫。",
    "year": "2000",
    "type": "电影",
    "region": "中国香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "王家卫",
      "张曼玉",
      "梁朝伟",
      "粤语原声",
      "旗袍"
    ],
    "genre": "爱情,剧情"
  },
  {
    "id": "0988",
    "title": "二次觉醒",
    "url": "./movie-0988.html",
    "cover": "./88.jpg",
    "oneLine": "六名失忆者被困在一座废弃的虚拟城市里,他们每死亡一次,就会“觉醒”一段真实的记忆。",
    "year": "2023",
    "type": "网络剧",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "虚拟现实",
      "记忆觉醒",
      "赛博朋克",
      "阴谋论"
    ],
    "genre": "科幻悬疑"
  },
  {
    "id": "0989",
    "title": "妈咪宝贝",
    "url": "./movie-0989.html",
    "cover": "./89.jpg",
    "oneLine": "三位新手妈妈在月子中心结成联盟,发誓要做“完美母亲”,却差点把自己和孩子逼疯。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "新手妈妈",
      "育儿焦虑",
      "婆媳关系",
      "都市女性",
      "单元剧"
    ],
    "genre": "喜剧、家庭"
  },
  {
    "id": "0990",
    "title": "无敌镖客之兄弟情深",
    "url": "./movie-0990.html",
    "cover": "./90.jpg",
    "oneLine": "两个落魄的富二代为了争夺家产,被迫踏上运送一口神秘棺材的公路之旅。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "公路",
      "兄弟",
      "冒险",
      "寻宝"
    ],
    "genre": "动作/喜剧"
  },
  {
    "id": "0991",
    "title": "我和我的姐妹",
    "url": "./movie-0991.html",
    "cover": "./91.jpg",
    "oneLine": "性格迥异的姐妹因父亲遗嘱被绑定,必须同居一年才能继承农场。",
    "year": "2024",
    "type": "电影",
    "region": "法国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "姐妹",
      "遗产",
      "和解"
    ],
    "genre": "剧情/喜剧"
  },
  {
    "id": "0992",
    "title": "海屿追光·春日限定",
    "url": "./movie-0992.html",
    "cover": "./92.jpg",
    "oneLine": "六位过气偶像去东海孤岛,一起追荧光海,顺便重新追梦。",
    "year": "2025",
    "type": "综艺",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "旅行",
      "治愈",
      "慢综",
      "海岛",
      "青春"
    ],
    "genre": "真人秀"
  },
  {
    "id": "0993",
    "title": "坏妈妈2023",
    "url": "./movie-0993.html",
    "cover": "./93.jpg",
    "oneLine": "为了把儿子培养成检察官而成为“坏妈妈”的单亲母亲,在儿子失忆后,重新学习如何做一个好妈妈。",
    "year": "2023",
    "type": "剧集",
    "region": "韩国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "母爱",
      "失忆",
      "返乡",
      "治愈"
    ],
    "genre": "剧情,家庭,喜剧"
  },
  {
    "id": "0994",
    "title": "女伶救弟",
    "url": "./movie-0994.html",
    "cover": "./94.jpg",
    "oneLine": "为了救出被诬陷入狱的弟弟,一位当红戏曲女伶不惜委身于仇人,上演了一出戏中戏的复仇大计。",
    "year": "1935",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "黑白片",
      "民国",
      "牺牲"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "0995",
    "title": "走过被遗忘的小路",
    "url": "./movie-0995.html",
    "cover": "./95.jpg",
    "oneLine": "为了唤醒阿尔茨海默症父亲最后的记忆,儿子陪他重走六十年前的逃亡小路。",
    "year": "2019",
    "type": "电影",
    "region": "法国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "阿尔茨海默",
      "父子",
      "徒步",
      "回忆"
    ],
    "genre": "剧情,公路"
  },
  {
    "id": "0996",
    "title": "星际快闪党",
    "url": "./movie-0996.html",
    "cover": "./96.jpg",
    "oneLine": "一群来自银河系各个垃圾星的失败者,为了骗取巨额太空葬礼保险金,伪造了一场假的星际大战。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "太空葬礼",
      "乌龙犯罪",
      "低配银河护卫队",
      "嘴炮"
    ],
    "genre": "科幻/喜剧/冒险"
  },
  {
    "id": "0997",
    "title": "科学怪人大战狼人",
    "url": "./movie-0997.html",
    "cover": "./97.jpg",
    "oneLine": "狼人求助科学怪人帮他解除诅咒,不料科学怪人被雷电唤醒后,第一件事就是扭断狼人的脖子。",
    "year": "1943",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "环球怪物宇宙",
      "跨物种对决",
      "黑白经典"
    ],
    "genre": "恐怖,科幻,怪兽"
  },
  {
    "id": "0998",
    "title": "大口仔遇福星",
    "url": "./movie-0998.html",
    "cover": "./98.jpg",
    "oneLine": "大口仔被黑帮追杀,误打误撞遇上一群小人物福星,爆笑反杀闹翻天。",
    "year": "1987",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "五福星",
      "搞笑",
      "市井英雄",
      "老港片"
    ],
    "genre": "喜剧/动作"
  },
  {
    "id": "0999",
    "title": "恐怖的夜",
    "url": "./movie-0999.html",
    "cover": "./99.jpg",
    "oneLine": "一栋公寓楼的住户每晚都会梦到同一个“红衣女鬼”,且梦到的次数越多,现实中的身体部位越透明。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "循环",
      "怪谈",
      "公寓"
    ],
    "genre": "恐怖"
  },
  {
    "id": "1000",
    "title": "水银灯下死",
    "url": "./movie-1000.html",
    "cover": "./100.jpg",
    "oneLine": "一名女法医在解剖台上发现了自己失踪三年的弟弟,而弟弟的心脏还在跳动。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "法医",
      "密室",
      "复仇",
      "器官黑市",
      "反转"
    ],
    "genre": "悬疑、犯罪、剧情"
  },
  {
    "id": "1001",
    "title": "监狱的火车",
    "url": "./movie-1001.html",
    "cover": "./101.jpg",
    "oneLine": "1944年,一列运送德军战俘的火车在西伯利亚冻土上抛锚,看守与囚徒必须共存才能活命。",
    "year": "2024",
    "type": "电影",
    "region": "俄罗斯",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "二战",
      "战俘",
      "西伯利亚",
      "铁路",
      "救赎"
    ],
    "genre": "剧情、历史、战争"
  },
  {
    "id": "1002",
    "title": "雾影情怀",
    "url": "./movie-1002.html",
    "cover": "./102.jpg",
    "oneLine": "重庆大雾弥漫的冬天,一名出租车司机发现乘客全是失踪名单上的人,而他每次拉到乘客都会起雾的玻璃上看到凶杀现场。",
    "year": "2024",
    "type": "电影",
    "region": "中国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "雾都",
      "连环失踪",
      "诗人",
      "黑白摄影",
      "隐喻"
    ],
    "genre": "悬疑/犯罪/文艺"
  },
  {
    "id": "1003",
    "title": "我的妈妈是校花",
    "url": "./movie-1003.html",
    "cover": "./103.jpg",
    "oneLine": "45岁的环卫工母亲和15岁的校花女儿意外互换身体,母亲决定替女儿去学校考试,女儿替母亲去扫大街。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "母女换身",
      "中年危机",
      "校园喜剧",
      "成长",
      "重返青春"
    ],
    "genre": "喜剧/奇幻"
  },
  {
    "id": "1004",
    "title": "钢之炼金术师2003",
    "url": "./movie-1004.html",
    "cover": "./104.jpg",
    "oneLine": "兄弟俩为了复活母亲进行人体炼成,代价是弟弟失去全身,哥哥失去一条腿。",
    "year": "2003",
    "type": "剧集",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "等价交换",
      "兄弟",
      "悲剧",
      "原创结局",
      "神作"
    ],
    "genre": "动画/奇幻/冒险"
  },
  {
    "id": "1005",
    "title": "滨河街之春",
    "url": "./movie-1005.html",
    "cover": "./105.jpg",
    "oneLine": "1999年春天,东北小城滨河街,下岗的父亲买了一支即将凋谢的玫瑰,送给从未收到过花的妻子。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "下岗潮",
      "东北往事",
      "父子和解",
      "小人物",
      "时代眼泪"
    ],
    "genre": "剧情,文艺,家庭"
  },
  {
    "id": "1006",
    "title": "花之乱",
    "url": "./movie-1006.html",
    "cover": "./106.jpg",
    "oneLine": "应仁之乱前夕,京都一名卖花女被卷入将军刺杀案,她才是真正的幕府继承人。",
    "year": "2024",
    "type": "剧集",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "应仁之乱",
      "女城主",
      "阴谋",
      "花道",
      "复仇"
    ],
    "genre": "历史/悬疑/宫廷"
  },
  {
    "id": "1007",
    "title": "爱的谎言",
    "url": "./movie-1007.html",
    "cover": "./107.jpg",
    "oneLine": "妻子为救丈夫重伤昏迷,醒来后失忆并坚信自己是丈夫的初恋情人,一段由谎言建构的婚姻面临崩塌。",
    "year": "2023",
    "type": "剧集",
    "region": "韩国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "替身虐恋",
      "豪门恩怨",
      "失忆梗"
    ],
    "genre": "爱情,悬疑"
  },
  {
    "id": "1008",
    "title": "超人与蝙蝠侠:全民公敌",
    "url": "./movie-1008.html",
    "cover": "./108.jpg",
    "oneLine": "卢瑟当选总统后,将超人和蝙蝠侠列为全民公敌,两位昔日盟友被迫转入地下抵抗。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "暗黑风",
      "政治惊悚",
      "双雄"
    ],
    "genre": "动作,科幻,动画"
  },
  {
    "id": "1009",
    "title": "恐龙太太",
    "url": "./movie-1009.html",
    "cover": "./109.jpg",
    "oneLine": "更年期大妈和霸王龙交换了灵魂,她发现自己得去侏罗纪带孩子,而霸王龙要用她的身体去参加小区反对集会。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "中年妇女",
      "变身",
      "侏罗纪",
      "荒诞"
    ],
    "genre": "喜剧/奇幻"
  },
  {
    "id": "1010",
    "title": "沙漠中的黄金",
    "url": "./movie-1010.html",
    "cover": "./110.jpg",
    "oneLine": "三名落魄淘金客在澳洲内陆发现金矿,但归途变成了互相猎杀的死亡之旅。",
    "year": "2024",
    "type": "电影",
    "region": "澳大利亚",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "寻宝",
      "荒原",
      "生存",
      "人性"
    ],
    "genre": "冒险,西部"
  },
  {
    "id": "1011",
    "title": "岁月神偷国语",
    "url": "./movie-1011.html",
    "cover": "./111.jpg",
    "oneLine": "一家四口在深水埗开鞋店,用十年时间对抗一个总在悄悄偷走东西的神秘邻居——“岁月”。",
    "year": "2025",
    "type": "电影",
    "region": "香港/中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "怀旧",
      "亲情",
      "改革开放",
      "粤语版配音",
      "催泪"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "1012",
    "title": "苦海明灯",
    "url": "./movie-1012.html",
    "cover": "./112.jpg",
    "oneLine": "2004年印度洋海啸,一个僧侣放弃了逃生的佛塔,去救一群囚犯。",
    "year": "2026",
    "type": "电影",
    "region": "马来西亚",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "东南亚海啸",
      "僧侣",
      "幸存者",
      "信仰崩塌"
    ],
    "genre": "剧情、灾难、宗教"
  },
  {
    "id": "1013",
    "title": "虚空",
    "url": "./movie-1013.html",
    "cover": "./113.jpg",
    "oneLine": "深空探测器被黑洞俘获,三名宇航员在坠入“事件视界”前,必须在24小时内决定让谁“不存在”。",
    "year": "2027",
    "type": "电影",
    "region": "中国大陆/美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "黑洞",
      "存在主义",
      "太空灾难",
      "哲学对谈"
    ],
    "genre": "科幻/惊悚/哲学"
  },
  {
    "id": "1014",
    "title": "最长的旅程2015",
    "url": "./movie-1014.html",
    "cover": "./114.jpg",
    "oneLine": "一名叛逆少女在亡父的遗物中发现一张1950年的明信片,开启了一场横穿美国的寻根之旅。",
    "year": "2015",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "公路片",
      "代际和解",
      "二战"
    ],
    "genre": "剧情/爱情"
  },
  {
    "id": "1015",
    "title": "飞吧,爸爸",
    "url": "./movie-1015.html",
    "cover": "./115.jpg",
    "oneLine": "一事无成的中年社畜发现自己能短暂飞行,但每次飞行都会让儿子的成绩急剧下降。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "中年危机",
      "超能力",
      "亲子关系"
    ],
    "genre": "奇幻/喜剧/家庭"
  },
  {
    "id": "1016",
    "title": "波希米亚斯大林主义之死",
    "url": "./movie-1016.html",
    "cover": "./116.jpg",
    "oneLine": "为了给斯大林雕像举办一场体面的葬礼,整个布拉格波希米亚区的艺术家们都疯了。",
    "year": "2024",
    "type": "电影",
    "region": "捷克/法国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "政治",
      "艺术",
      "荒诞",
      "铁幕",
      "黑色幽默"
    ],
    "genre": "历史剧情"
  },
  {
    "id": "1017",
    "title": "阁楼里的花",
    "url": "./movie-1017.html",
    "cover": "./117.jpg",
    "oneLine": "外婆去世后,孙女在阁楼发现一箱枯花和一封信,揭开了三代人禁忌的爱。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "家族",
      "秘密",
      "唯美",
      "虐心"
    ],
    "genre": "文艺/伦理"
  },
  {
    "id": "1018",
    "title": "龙凤争挂帅",
    "url": "./movie-1018.html",
    "cover": "./118.jpg",
    "oneLine": "警队霸王花与黑帮女太子互换身份,一个进监狱当老大,一个入警局做卧底,笑料百出。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "警匪",
      "卧底",
      "身份互换",
      "无厘头"
    ],
    "genre": "动作,喜剧"
  },
  {
    "id": "1019",
    "title": "零水日",
    "url": "./movie-1019.html",
    "cover": "./119.jpg",
    "oneLine": "2050 年水权私有化后的世界,一场大旱让水价超过油价,三个普通人为了活命不得不去抢劫被称为“蓝金宝库”的科技公司总部。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆/德国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "水资源",
      "末日求生",
      "资本垄断",
      "硬核科幻",
      "人性"
    ],
    "genre": "灾难/科幻/惊悚"
  },
  {
    "id": "1020",
    "title": "银行大盗:神级劫案",
    "url": "./movie-1020.html",
    "cover": "./120.jpg",
    "oneLine": "五个菜鸟劫匪抢了一家银行,却发现金库里已经坐着另一伙更专业的劫匪。",
    "year": "2024",
    "type": "电影",
    "region": "韩国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "劫盗",
      "反转",
      "爽片"
    ],
    "genre": "动作,犯罪,喜剧"
  },
  {
    "id": "1021",
    "title": "在我姐姐的婚纱里",
    "url": "./movie-1021.html",
    "cover": "./121.jpg",
    "oneLine": "姐姐婚礼前病逝,妹妹穿上姐姐的婚纱,替她完成了婚礼上所有的遗憾。",
    "year": "2024",
    "type": "电影",
    "region": "韩国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "姐妹情",
      "遗愿清单",
      "催泪"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "1022",
    "title": "开心超人联盟之英雄归来",
    "url": "./movie-1022.html",
    "cover": "./122.jpg",
    "oneLine": "开心超人退休五年后变成了一个送外卖的普通胖子,直到曾经的宿敌哭着求他归队,说星星球要完了。",
    "year": "2026",
    "type": "动画电影",
    "region": "中国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "童年回归",
      "超英合体",
      "反派洗白"
    ],
    "genre": "喜剧/动作/科幻"
  },
  {
    "id": "1023",
    "title": "饲养乌鸦",
    "url": "./movie-1023.html",
    "cover": "./123.jpg",
    "oneLine": "一位沉默的少女在祖父的庄园里饲养乌鸦,并策划了一场针对全家人的隐秘复仇。",
    "year": "1976",
    "type": "电影",
    "region": "西班牙",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "暗黑童话",
      "家族秘密",
      "复仇"
    ],
    "genre": "剧情/惊悚"
  },
  {
    "id": "1024",
    "title": "印尼式走塑",
    "url": "./movie-1024.html",
    "cover": "./124.jpg",
    "oneLine": "印尼一个塑料垃圾堆积如山的海边村庄,通过一种古老的植物叶子包装技术,实现了零废弃奇迹。",
    "year": "2024",
    "type": "纪录片",
    "region": "印度尼西亚",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "环保",
      "塑料污染",
      "本土智慧",
      "变革",
      "震撼"
    ],
    "genre": "纪录/社会"
  },
  {
    "id": "1025",
    "title": "极光大冒险",
    "url": "./movie-1025.html",
    "cover": "./125.jpg",
    "oneLine": "一只从未离开过北极熊妈妈身边的小白熊,为了追寻奶奶说的“极光里藏着爸爸的灵魂”而独自踏上了冰原。",
    "year": "2023",
    "type": "电影/动画",
    "region": "挪威/英国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "极光",
      "北极",
      "动物",
      "友情",
      "成长"
    ],
    "genre": "冒险/家庭/奇幻"
  },
  {
    "id": "1026",
    "title": "袋鼠丝苗为两餐粤语",
    "url": "./movie-1026.html",
    "cover": "./126.jpg",
    "oneLine": "八十年代香港,一个草根家庭为了省钱吃顿饭,闹出了一连串啼笑皆非又温暖人心的笑话。",
    "year": "1989",
    "type": "剧集",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "怀旧",
      "港剧",
      "市井",
      "奋斗",
      "幽默"
    ],
    "genre": "喜剧/家庭/剧情"
  },
  {
    "id": "1027",
    "title": "搜下留情粤语",
    "url": "./movie-1027.html",
    "cover": "./127.jpg",
    "oneLine": "卧底警察隐藏身份在茶餐厅打工,结果老板比他更懂黑帮。",
    "year": "2010",
    "type": "剧集",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "卧底",
      "茶餐厅",
      "市井",
      "粤语",
      "温情"
    ],
    "genre": "警匪喜剧"
  },
  {
    "id": "1028",
    "title": "迈沙贝尔",
    "url": "./movie-1028.html",
    "cover": "./128.jpg",
    "oneLine": "18世纪欧洲,一位被囚禁在天才音乐家阴影下的哑女,用一把损坏的大提琴发出了震撼宫廷的觉醒之声。",
    "year": "2023",
    "type": "电影",
    "region": "法国/德国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "女权",
      "古典乐",
      "18世纪",
      "觉醒"
    ],
    "genre": "剧情/传记"
  },
  {
    "id": "1029",
    "title": "糟糠贤妻",
    "url": "./movie-1029.html",
    "cover": "./129.jpg",
    "oneLine": "当了二十年完美主妇的她被离婚,只拿到一袋垃圾袋作为补偿,而她用这袋垃圾袋开启了价值百亿的清洁帝国。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "女性成长",
      "逆袭",
      "婚姻"
    ],
    "genre": "家庭,剧情"
  },
  {
    "id": "1030",
    "title": "续座头市物语",
    "url": "./movie-1030.html",
    "cover": "./130.jpg",
    "oneLine": "失明剑客座头市隐退多年后,被迫重出江湖,却发现要杀的人是自己失散的儿子。",
    "year": "2022",
    "type": "电影",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "盲剑客",
      "江湖浪人",
      "恩怨情仇",
      "武士道",
      "黑白摄影"
    ],
    "genre": "时代剧、动作"
  },
  {
    "id": "1031",
    "title": "寂寞喧哗",
    "url": "./movie-1031.html",
    "cover": "./131.jpg",
    "oneLine": "一个失眠三十年的家族,每晚十点全体准时陷入“清醒的梦境”,共享同一段噩梦。",
    "year": "2023",
    "type": "剧集",
    "region": "中国台湾",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "失眠",
      "家族",
      "创伤",
      "意识流",
      "治愈"
    ],
    "genre": "剧情/家庭/心理"
  },
  {
    "id": "1032",
    "title": "猪头汉堡饱",
    "url": "./movie-1032.html",
    "cover": "./132.jpg",
    "oneLine": "一个失业的肥宅,意外继承了家传的烧腊店,为了对抗网红汉堡店,他发明了“猪头汉堡”,却引发了一场全城疯抢的荒诞闹剧。",
    "year": "2023",
    "type": "电影",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "肥宅",
      "网红店",
      "荒诞"
    ],
    "genre": "喜剧,黑色幽默"
  },
  {
    "id": "1033",
    "title": "我的夏日恋曲",
    "url": "./movie-1033.html",
    "cover": "./133.jpg",
    "oneLine": "患有恐男症的高中女生,在暑假遇到了一个声称自己不存在的“幽灵学长”,开始了一段写在空气里的恋爱。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "夏日限定",
      "纯爱",
      "交换日记"
    ],
    "genre": "爱情/青春"
  },
  {
    "id": "1034",
    "title": "铁石心肠2019",
    "url": "./movie-1034.html",
    "cover": "./134.jpg",
    "oneLine": "富家少爷被继母陷害假死后归来,却发现自己最恨的人竟是亲生母亲。",
    "year": "2019",
    "type": "剧集",
    "region": "泰国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "豪门恩怨",
      "复仇",
      "假面",
      "玻璃渣里找糖"
    ],
    "genre": "爱情虐恋"
  },
  {
    "id": "1035",
    "title": "目隐都市的演绎者",
    "url": "./movie-1035.html",
    "cover": "./135.jpg",
    "oneLine": "一群拥有“目”之能力的少年少女,被困在8月15日的无限循环中,试图拯救彼此的命运。",
    "year": "2014",
    "type": "剧集",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "阳炎计划",
      "超能力",
      "时间循环",
      "多媒体企划"
    ],
    "genre": "动画/科幻/悬疑"
  },
  {
    "id": "1036",
    "title": "亲密的陌生人",
    "url": "./movie-1036.html",
    "cover": "./136.jpg",
    "oneLine": "一个抑郁症患者错把隔壁的心理医生当成电话情缘对象,每晚隔着墙壁吐露心声。",
    "year": "2020",
    "type": "电影",
    "region": "法国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "错位",
      "偷听",
      "都市孤独",
      "温情"
    ],
    "genre": "心理剧情"
  },
  {
    "id": "1037",
    "title": "最强二弟子之猪事大吉",
    "url": "./movie-1037.html",
    "cover": "./137.jpg",
    "oneLine": "修真界最强宗门的二弟子什么都不会,只会养猪,结果猪成了仙界顶流。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "修仙",
      "喜剧",
      "废物弟子",
      "猪妖"
    ],
    "genre": "喜剧/古装/奇幻"
  },
  {
    "id": "1038",
    "title": "锦绣恒河",
    "url": "./movie-1038.html",
    "cover": "./138.jpg",
    "oneLine": "一个纺织世家在殖民统治与现代化浪潮中,守护印度传统手工艺的百年沧桑。",
    "year": "2025",
    "type": "电影",
    "region": "印度",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "恒河",
      "家族史诗",
      "纺织业",
      "文化传承"
    ],
    "genre": "剧情,家庭,历史"
  },
  {
    "id": "1039",
    "title": "特种兵归来1:血狼之怒",
    "url": "./movie-1039.html",
    "cover": "./139.jpg",
    "oneLine": "退役“血狼”小队重聚,只为跨境追猎那个用生化武器屠杀战友未婚妻的雇佣军。",
    "year": "2022",
    "type": "网络电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "军事",
      "复仇",
      "硬核动作",
      "网大标杆"
    ],
    "genre": "动作,战争"
  },
  {
    "id": "1040",
    "title": "赛文奥特曼",
    "url": "./movie-1040.html",
    "cover": "./140.jpg",
    "oneLine": "赛文奥特曼再度来到地球,但这一次人类不再欢迎他,因为他的存在引来了更强大的宇宙怪兽。",
    "year": "2027",
    "type": "电影",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "奥特曼重启",
      "反战",
      "人性阴暗"
    ],
    "genre": "科幻/动作/剧情"
  },
  {
    "id": "1041",
    "title": "捉迷藏2013",
    "url": "./movie-1041.html",
    "cover": "./141.jpg",
    "oneLine": "富人区连环失踪案背后,是一个藏在墙内与富豪“交换人生”的疯子。",
    "year": "2013",
    "type": "电影",
    "region": "韩国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "顶楼藏尸",
      "身份替换",
      "都市惊悚",
      "高能反转",
      "入侵民宅"
    ],
    "genre": "悬疑,惊悚"
  },
  {
    "id": "1042",
    "title": "万界仙踪",
    "url": "./movie-1042.html",
    "cover": "./142.jpg",
    "oneLine": "修仙界第一高手被至亲背叛陨落,千年后意外重生为宗门里最废柴的外门弟子,开始了扮猪吃老虎的升级之路。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "修仙",
      "穿越",
      "3D",
      "大男主",
      "热血"
    ],
    "genre": "动画,奇幻"
  },
  {
    "id": "1043",
    "title": "遥远的格桑花",
    "url": "./movie-1043.html",
    "cover": "./143.jpg",
    "oneLine": "植物学家为寻找传说中能“治愈一切”的格桑花母本,却在雪域高原上遇见了自己的前世今生。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "援藏",
      "信仰与守护",
      "高原绝恋",
      "诗意影像"
    ],
    "genre": "剧情/爱情"
  },
  {
    "id": "1044",
    "title": "尸体游戏",
    "url": "./movie-1044.html",
    "cover": "./144.jpg",
    "oneLine": "六个好友在荒岛玩“找出谁是假尸体”的游戏,但岛上开始出现真尸体。",
    "year": "2024",
    "type": "电影",
    "region": "英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "青少年",
      "荒岛",
      "信任崩塌",
      "心理恐怖"
    ],
    "genre": "悬疑,恐怖,青春"
  },
  {
    "id": "1045",
    "title": "9歌",
    "url": "./movie-1045.html",
    "cover": "./145.jpg",
    "oneLine": "一位冰川学家回忆与女友持续一年的激情关系,而九场摇滚演唱会成为他们感情的唯一注脚。",
    "year": "2004",
    "type": "电影",
    "region": "英国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "摇滚",
      "演唱会",
      "禁忌",
      "真实",
      "私密"
    ],
    "genre": "爱情/情色/音乐"
  },
  {
    "id": "1046",
    "title": "地狱新娘",
    "url": "./movie-1046.html",
    "cover": "./146.jpg",
    "oneLine": "为了偿还债务,贫苦女孩被迫替富家女去死,与已故的少爷举行冥婚,但棺材里的新郎睁开了眼。",
    "year": "2024",
    "type": "电影",
    "region": "印尼",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "嫁妆",
      "冥婚",
      "诅咒"
    ],
    "genre": "恐怖,爱情,奇幻"
  },
  {
    "id": "1047",
    "title": "毕有财",
    "url": "./movie-1047.html",
    "cover": "./147.jpg",
    "oneLine": "80年代初,油嘴滑舌的毕有财靠“倒腾”为生,他用小聪明帮了整条街的人,却唯独骗了最信任他的妻子。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "市井小民",
      "改革开放",
      "小聪明",
      "温情"
    ],
    "genre": "剧情,喜剧,年代"
  },
  {
    "id": "1048",
    "title": "成人期",
    "url": "./movie-1048.html",
    "cover": "./148.jpg",
    "oneLine": "十八岁那天,她收到了妈妈藏了十年的离婚协议书,成人礼变成了一场家庭风暴的起点。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "成人礼",
      "代际冲突",
      "小镇青年",
      "自我认同"
    ],
    "genre": "剧情,家庭,青春"
  },
  {
    "id": "1049",
    "title": "爱战争",
    "url": "./movie-1049.html",
    "cover": "./149.jpg",
    "oneLine": "1917年,一名女兵假冒男装上了前线,却爱上了敌战壕里同样在找哥哥的德国女兵。",
    "year": "2025",
    "type": "电影",
    "region": "法国/德国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "一战",
      "战壕",
      "性别互换",
      "反战"
    ],
    "genre": "剧情/战争/爱情"
  },
  {
    "id": "1050",
    "title": "有声之年",
    "url": "./movie-1050.html",
    "cover": "./150.jpg",
    "oneLine": "天生失聪的天才鼓手,在人工耳蜗植入后听见了世界,却失去了灵魂。",
    "year": "2025",
    "type": "电影",
    "region": "香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "听力障碍",
      "音乐",
      "亲情",
      "治愈"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "1051",
    "title": "夜店诡谈",
    "url": "./movie-1051.html",
    "cover": "./1.jpg",
    "oneLine": "三个在夜店泡吧的年轻人为了寻刺激玩起了“鬼故事接龙”,每讲一个故事,身边的同伴就离奇少一个,直到讲完第三个故事,他们发现彼此早已是鬼。",
    "year": "2017",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "密室逃脱",
      "都市怪谈",
      "分段式电影",
      "反转结局"
    ],
    "genre": "恐怖,悬疑,惊悚"
  },
  {
    "id": "1052",
    "title": "镀金的恋爱",
    "url": "./movie-1052.html",
    "cover": "./2.jpg",
    "oneLine": "女继承人假装破产试探未婚夫,结果全家人都配合演戏,只有他拿出了真的结婚戒指。",
    "year": "2027",
    "type": "剧集",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "豪门契约",
      "真假千金",
      "股权之争"
    ],
    "genre": "都市、爱情、商战"
  },
  {
    "id": "1053",
    "title": "女巫",
    "url": "./movie-1053.html",
    "cover": "./3.jpg",
    "oneLine": "17世纪新英格兰,虔诚的清教徒一家被逐出村庄,他们在荒野中遭遇的邪恶,竟源于家中最弱小的女儿。",
    "year": "2025",
    "type": "电影",
    "region": "美国/加拿大",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "巫术",
      "宗教",
      "心理",
      "反转",
      "血腥"
    ],
    "genre": "惊悚/恐怖/民俗"
  },
  {
    "id": "1054",
    "title": "狡猾的保姆",
    "url": "./movie-1054.html",
    "cover": "./4.jpg",
    "oneLine": "新来的保姆完美得不像真人,直到有一天,孩子们发现她在深夜对着镜子练习女主人的微笑。",
    "year": "2020",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "心理惊悚",
      "入侵者",
      "身份置换",
      "母爱扭曲"
    ],
    "genre": "惊悚/悬疑/家庭"
  },
  {
    "id": "1055",
    "title": "生存欲望",
    "url": "./movie-1055.html",
    "cover": "./5.jpg",
    "oneLine": "七人因飞机失事困于荒岛,却发现岛上早有新鲜食物与一具写满数字的尸体。",
    "year": "2022",
    "type": "电影",
    "region": "韩国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "荒岛",
      "人性",
      "丛林法则",
      "极端选择",
      "反转"
    ],
    "genre": "灾难惊悚"
  },
  {
    "id": "1056",
    "title": "爱情诡计",
    "url": "./movie-1056.html",
    "cover": "./6.jpg",
    "oneLine": "为了争夺家族遗产的掌控权,富家千金雇佣了一个酷似自己死去初恋的酒吧女,联手设局欺骗家族里的所有人,却没想到自己入了感情的局。",
    "year": "2026",
    "type": "电视剧",
    "region": "泰国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "GL",
      "心理战",
      "豪门",
      "替身"
    ],
    "genre": "爱情/悬疑/同性"
  },
  {
    "id": "1057",
    "title": "虚无边境",
    "url": "./movie-1057.html",
    "cover": "./7.jpg",
    "oneLine": "美墨边境的一小片沙漠里,每年有数百人凭空消失,这里被称为“虚无边境”。",
    "year": "2022",
    "type": "剧集",
    "region": "美国/英国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "边界",
      "消失",
      "平行世界",
      "沙盒",
      "超自然"
    ],
    "genre": "科幻/西部/悬疑"
  },
  {
    "id": "1058",
    "title": "深红之名",
    "url": "./movie-1058.html",
    "cover": "./8.jpg",
    "oneLine": "每喊出一个受害者的名字,凶手就会在现实中替她重写遗书。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "连环杀手",
      "名字诅咒",
      "符号学",
      "反转",
      "女性侦探"
    ],
    "genre": "悬疑惊悚"
  },
  {
    "id": "1059",
    "title": "三个月",
    "url": "./movie-1059.html",
    "cover": "./9.jpg",
    "oneLine": "一个高中毕业的男孩在等待艾滋病检测结果的三个月里,遇到了同样在等待结果的男孩,并展开了荒诞的倒数恋爱。",
    "year": "2022",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "青春",
      "艾滋病",
      "恐艾",
      "成长"
    ],
    "genre": "喜剧,剧情"
  },
  {
    "id": "1060",
    "title": "战争安魂曲",
    "url": "./movie-1060.html",
    "cover": "./10.jpg",
    "oneLine": "一位战地诗人在索姆河战役中阵亡,他未寄出的家书,百年后被谱成了血色的安魂曲。",
    "year": "2020",
    "type": "电影",
    "region": "英国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "一战",
      "交响乐",
      "诗歌",
      "反战"
    ],
    "genre": "战争/历史/音乐"
  },
  {
    "id": "1061",
    "title": "错",
    "url": "./movie-1061.html",
    "cover": "./11.jpg",
    "oneLine": "一个中年男人醒来发现自己被关在审讯室,而他被指控的谋杀案,其实从未发生。",
    "year": "2023",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "时空错乱",
      "蝴蝶效应",
      "高智商",
      "烧脑"
    ],
    "genre": "悬疑,犯罪,心理"
  },
  {
    "id": "1062",
    "title": "玉米地的小孩",
    "url": "./movie-1062.html",
    "cover": "./12.jpg",
    "oneLine": "玉米田里的孩子每隔七年就要献祭一个成年人,今年轮到新搬来的教师。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "儿童恐怖",
      "邪教",
      "乡村",
      "翻拍"
    ],
    "genre": "恐怖,惊悚"
  },
  {
    "id": "1063",
    "title": "泽塔奥特曼 国语版",
    "url": "./movie-1063.html",
    "cover": "./13.jpg",
    "oneLine": "年轻的奥特曼泽塔在地球上遇到了他唯一的粉丝——一位没有格斗天赋却永不放弃的热血驾驶员。",
    "year": "2020",
    "type": "TV系列",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "奥特曼",
      "热血",
      "怪兽",
      "机甲",
      "军械库"
    ],
    "genre": "科幻,动作,特摄"
  },
  {
    "id": "1064",
    "title": "亿万少年俱乐部",
    "url": "./movie-1064.html",
    "cover": "./14.jpg",
    "oneLine": "一群含着金汤匙出生的名校精英创立投资俱乐部,用父辈的人脉编织一场惊天骗局。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "华尔街",
      "富二代",
      "金融",
      "犯罪",
      "真实改编"
    ],
    "genre": "剧情"
  },
  {
    "id": "1065",
    "title": "重返地球",
    "url": "./movie-1065.html",
    "cover": "./15.jpg",
    "oneLine": "地球毁灭千年后,一对父子飞船迫降,儿子必须穿越充满变异怪物的丛林去救援受伤的父亲。",
    "year": "2013",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "父子",
      "迫降",
      "变异生物",
      "生存"
    ],
    "genre": "科幻/冒险"
  },
  {
    "id": "1066",
    "title": "那小子真酷第二季",
    "url": "./movie-1066.html",
    "cover": "./16.jpg",
    "oneLine": "上一季的死对头,这一季成了同居室友,两个男生为了守护即将被废的街舞社,被迫联手装情侣。",
    "year": "2018",
    "type": "剧集",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "学霸",
      "校霸",
      "社团",
      "热血成长"
    ],
    "genre": "青春/校园/偶像"
  },
  {
    "id": "1067",
    "title": "挨饿游戏",
    "url": "./movie-1067.html",
    "cover": "./17.jpg",
    "oneLine": "恶搞版《饥饿游戏》,将大逃杀变成一场因为饥饿而引发的荒诞减肥综艺秀。",
    "year": "2013",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "戏仿",
      "饥饿游戏",
      "无厘头",
      "低成本恶搞"
    ],
    "genre": "恶搞喜剧"
  },
  {
    "id": "1068",
    "title": "持摄影机的人",
    "url": "./movie-1068.html",
    "cover": "./18.jpg",
    "oneLine": "一个战地记者在废墟中发现了一台还在录像的家用摄影机,里面的内容颠覆了战争的叙事。",
    "year": "2024",
    "type": "电影",
    "region": "乌克兰",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "战地记者",
      "伪纪录片",
      "道德困境",
      "第一人称"
    ],
    "genre": "剧情/战争"
  },
  {
    "id": "1069",
    "title": "人妻冲冲冲",
    "url": "./movie-1069.html",
    "cover": "./19.jpg",
    "oneLine": "一名全职主妇发现丈夫是潜伏十年的间谍,而社区里的其他主妇,全是来自不同国家派来监视他的特工。",
    "year": "2024",
    "type": "剧集",
    "region": "韩国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "主妇",
      "谍战",
      "爽剧",
      "反转"
    ],
    "genre": "喜剧,动作"
  },
  {
    "id": "1070",
    "title": "高举爱国语",
    "url": "./movie-1070.html",
    "cover": "./20.jpg",
    "oneLine": "为了反对政府推广“英语唯一”,老顽固爷爷开办一家只准讲华语的杂货店,全家崩溃。",
    "year": "2025",
    "type": "电视剧",
    "region": "新加坡",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "语言政策",
      "跨代沟通",
      "华人文化",
      "新加坡特色",
      "温情"
    ],
    "genre": "家庭伦理喜剧"
  },
  {
    "id": "1071",
    "title": "前奏",
    "url": "./movie-1071.html",
    "cover": "./21.jpg",
    "oneLine": "一个钢琴调律师发现,自己每次调完琴,琴主就会意外身亡。",
    "year": "2018",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "记忆",
      "幻听",
      "反转"
    ],
    "genre": "悬疑/心理"
  },
  {
    "id": "1072",
    "title": "痞子无间道粤语",
    "url": "./movie-1072.html",
    "cover": "./22.jpg",
    "oneLine": "两个互相不知道对方是卧底的警察,在同一黑帮里相爱相杀十八个月。",
    "year": "2025",
    "type": "剧集",
    "region": "香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "卧底",
      "黑帮",
      "粤语原声",
      "双雄"
    ],
    "genre": "警匪/动作/悬疑"
  },
  {
    "id": "1073",
    "title": "朱卢明面包店",
    "url": "./movie-1073.html",
    "cover": "./23.jpg",
    "oneLine": "患有阿兹海默症的面包师爷爷,唯一记得的是30年前那个失踪的女儿,以及她的生日蛋糕配方。",
    "year": "2023",
    "type": "电影",
    "region": "中国台湾",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "烘焙",
      "失智症",
      "祖孙情",
      "疗愈系"
    ],
    "genre": "剧情/家庭/美食"
  },
  {
    "id": "1074",
    "title": "驯虎女郎",
    "url": "./movie-1074.html",
    "cover": "./24.jpg",
    "oneLine": "苏联解体后的马戏团里,一个柔弱的驯虎女助手,为了生存和保护动物,从男人手中夺过了驯虎棒,成了真正的“驯虎女郎”。",
    "year": "2024",
    "type": "电影",
    "region": "俄罗斯",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "女性力量",
      "马戏团",
      "觉醒"
    ],
    "genre": "剧情,动作"
  },
  {
    "id": "1075",
    "title": "独行侠野狼",
    "url": "./movie-1075.html",
    "cover": "./25.jpg",
    "oneLine": "在苍茫的大西北戈壁上,一名沉默的货车司机,一辆改装越野车,和一群亡命之徒上演了一场生死时速的猫鼠游戏。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "中国西部",
      "复仇",
      "硬汉电影",
      "公路追杀"
    ],
    "genre": "动作,西部,犯罪"
  },
  {
    "id": "1076",
    "title": "高更传:寻找天堂",
    "url": "./movie-1076.html",
    "cover": "./26.jpg",
    "oneLine": "中年股票经纪人高更抛妻弃子前往大溪地,在原始欲望中追寻艺术的天堂,却坠入地狱。",
    "year": "2017",
    "type": "电影",
    "region": "法国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "印象派",
      "大溪地",
      "蛮荒",
      "画家"
    ],
    "genre": "剧情/传记/艺术"
  },
  {
    "id": "1077",
    "title": "厨房布鲁斯",
    "url": "./movie-1077.html",
    "cover": "./27.jpg",
    "oneLine": "一位米其林餐厅的副厨在50岁生日当天被辞退,他用蓝调口琴在一辆快餐车里重新烹饪人生。",
    "year": "2025",
    "type": "电影",
    "region": "法国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "米其林",
      "后厨",
      "蓝调",
      "中年危机",
      "美食"
    ],
    "genre": "音乐/剧情"
  },
  {
    "id": "1078",
    "title": "烈焰青春",
    "url": "./movie-1078.html",
    "cover": "./28.jpg",
    "oneLine": "江南区最差高中的学生们为了对抗补习班霸权,用街舞挑战名校学霸。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "校园",
      "街舞",
      "阶级"
    ],
    "genre": "剧情,歌舞"
  },
  {
    "id": "1079",
    "title": "猫老大",
    "url": "./movie-1079.html",
    "cover": "./29.jpg",
    "oneLine": "黑帮组长意外被诅咒变成一只流浪猫,必须在三个月内让人类收养才能恢复人形。",
    "year": "2024",
    "type": "剧集",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "猫",
      "黑道",
      "变身",
      "治愈"
    ],
    "genre": "喜剧,奇幻"
  },
  {
    "id": "1080",
    "title": "天方夜谭:辛巴达历险记",
    "url": "./movie-1080.html",
    "cover": "./30.jpg",
    "oneLine": "水手辛巴达为救被石化诅咒的王子,必须在七天内集齐三颗神秘海灵珠。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "古阿拉伯",
      "七海航行",
      "诅咒岛屿",
      "魔法生物",
      "寻宝"
    ],
    "genre": "奇幻冒险"
  },
  {
    "id": "1081",
    "title": "三滴血",
    "url": "./movie-1081.html",
    "cover": "./31.jpg",
    "oneLine": "糊涂官凭“滴血认亲”判错三桩案子,害得两家人破人亡,最后真相反转,官却升了。",
    "year": "1960",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "秦腔",
      "冤案",
      "滴血认亲",
      "讽刺",
      "经典改编"
    ],
    "genre": "戏曲,剧情"
  },
  {
    "id": "1082",
    "title": "奥林匹斯星传",
    "url": "./movie-1082.html",
    "cover": "./32.jpg",
    "oneLine": "赛博纪元2147年,十二主神变成十二台失控的巨型机甲,一个流浪程序员必须重写“命运”的底层代码。",
    "year": "2025",
    "type": "动画剧集",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "赛博朋克",
      "希腊神话",
      "机甲战斗",
      "宿命论"
    ],
    "genre": "科幻/冒险/神话改编"
  },
  {
    "id": "1083",
    "title": "生死路",
    "url": "./movie-1083.html",
    "cover": "./33.jpg",
    "oneLine": "一辆开往边境的大巴车坠崖,唯一的幸存者醒来后发现,这条路永远开不到终点。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "公路悬疑",
      "无限循环",
      "心理惊悚",
      "人性拷问",
      "烧脑"
    ],
    "genre": "悬疑/冒险/灾难"
  },
  {
    "id": "1084",
    "title": "动物频道",
    "url": "./movie-1084.html",
    "cover": "./34.jpg",
    "oneLine": "一家濒临倒闭的动物园里,动物们开口说话了,而且比人类更懂职场规则。",
    "year": "2022",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "拟人动物",
      "职场吐槽",
      "荒诞治愈",
      "动物园"
    ],
    "genre": "喜剧,奇幻"
  },
  {
    "id": "1085",
    "title": "霹雳剑踪",
    "url": "./movie-1085.html",
    "cover": "./35.jpg",
    "oneLine": "武林突然收到十二封“名剑帖”,每一封都标记了一位当世剑客的忌日,而寄件人竟是百年前已死的剑神。",
    "year": "2025",
    "type": "剧集",
    "region": "中国台湾",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "布袋戏",
      "剑道对决",
      "十二名剑帖",
      "宿命之战"
    ],
    "genre": "武侠奇幻"
  },
  {
    "id": "1086",
    "title": "超级赢家",
    "url": "./movie-1086.html",
    "cover": "./36.jpg",
    "oneLine": "两个游戏高手被吸入街机,必须在真人版格斗游戏中击败所有角色,才能重返现实。",
    "year": "1992",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "格斗游戏",
      "穿越",
      "街机"
    ],
    "genre": "喜剧,动作,冒险"
  },
  {
    "id": "1087",
    "title": "侏罗纪世界:混沌理论",
    "url": "./movie-1087.html",
    "cover": "./37.jpg",
    "oneLine": "当基因实验室的量子计算机发生故障,纳布拉尔岛的恐龙开始随机出现在全球高中女生的储物柜里。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "恐龙",
      "平行宇宙",
      "量子力学",
      "蝴蝶效应"
    ],
    "genre": "动作/科幻/惊悚"
  },
  {
    "id": "1088",
    "title": "新蜀山剑侠传",
    "url": "./movie-1088.html",
    "cover": "./38.jpg",
    "oneLine": "当血魔重现江湖,蜀山派内忧外患,一位背着棺材的神秘少年成了唯一的希望。",
    "year": "2026",
    "type": "网络剧",
    "region": "中国香港/中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "修仙",
      "蜀山",
      "正邪之战",
      "多角恋"
    ],
    "genre": "仙侠/奇幻"
  },
  {
    "id": "1089",
    "title": "北京爱上你",
    "url": "./movie-1089.html",
    "cover": "./39.jpg",
    "oneLine": "两个性格迥异的北漂青年被迫合租,签下“绝不恋爱”协议,却每天都在心动。",
    "year": "2023",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "北漂",
      "合租",
      "日久生情",
      "现实主义",
      "治愈"
    ],
    "genre": "爱情,都市"
  },
  {
    "id": "1090",
    "title": "完美嫌疑人",
    "url": "./movie-1090.html",
    "cover": "./40.jpg",
    "oneLine": "刑侦队长追查连环杀人案,所有证据都指向一个不可能作案的精神科医生。",
    "year": "2021",
    "type": "剧集",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "刑侦",
      "高智商犯罪",
      "心理战",
      "国产剧"
    ],
    "genre": "犯罪,悬疑"
  },
  {
    "id": "1091",
    "title": "神探蒲松龄国语",
    "url": "./movie-1091.html",
    "cover": "./41.jpg",
    "oneLine": "蒲松龄不只是写书人,他每写一个鬼故事,都是在记录一桩真实的诡案。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "单元探案",
      "聊斋",
      "志怪"
    ],
    "genre": "悬疑/古装"
  },
  {
    "id": "1092",
    "title": "奔跑的乌龟",
    "url": "./movie-1092.html",
    "cover": "./42.jpg",
    "oneLine": "七十岁的老邮差决定参加马拉松,只为了追上儿子葬礼上那个跑掉的男人。",
    "year": "2023",
    "type": "电影",
    "region": "韩国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "马拉松",
      "老年",
      "父子",
      "慢"
    ],
    "genre": "剧情/家庭/运动"
  },
  {
    "id": "1093",
    "title": "战场的微笑",
    "url": "./movie-1093.html",
    "cover": "./43.jpg",
    "oneLine": "在硝烟弥漫的废墟中,一名战地医生用口红在镜子上画了一个笑脸,对面瞄准镜里的手指开始颤抖。",
    "year": "2023",
    "type": "电影",
    "region": "俄罗斯,乌克兰",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "顿巴斯",
      "战地医生",
      "人性光辉",
      "黑白摄影"
    ],
    "genre": "战争,剧情,人性"
  },
  {
    "id": "1094",
    "title": "牧师的终结",
    "url": "./movie-1094.html",
    "cover": "./44.jpg",
    "oneLine": "内战归来的牧师发现小镇被恶霸统治,他脱下神袍,重新拿起那把沾满鲜血的步枪。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "西部",
      "复仇",
      "信仰崩塌",
      "老兵"
    ],
    "genre": "西部/剧情/犯罪"
  },
  {
    "id": "1095",
    "title": "万亿风暴",
    "url": "./movie-1095.html",
    "cover": "./45.jpg",
    "oneLine": "全球股市一秒蒸发一万亿美元,唯一预知灾难的流浪汉成了所有势力的猎杀目标。",
    "year": "2026",
    "type": "剧集",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "经济崩盘",
      "阴谋论",
      "精英黑幕",
      "烧脑"
    ],
    "genre": "惊悚,悬疑,金融"
  },
  {
    "id": "1096",
    "title": "我的朋友都恨我",
    "url": "./movie-1096.html",
    "cover": "./46.jpg",
    "oneLine": "三十岁生日派对后,主角确信他所有朋友都在策划杀死他。",
    "year": "2026",
    "type": "电影",
    "region": "英国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "社交恐惧",
      "信任瓦解",
      "心理暗示"
    ],
    "genre": "心理惊悚/剧情"
  },
  {
    "id": "1097",
    "title": "习总书记的初心",
    "url": "./movie-1097.html",
    "cover": "./47.jpg",
    "oneLine": "本片通过大量珍贵的影像资料和亲历者口述,追寻习近平总书记在梁家河的七年知青岁月,展现他“为人民服务”的初心起点。",
    "year": "2023",
    "type": "纪录片",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "习近平",
      "梁家河",
      "治国理政",
      "中国梦",
      "亲民"
    ],
    "genre": "纪录片/传记/政治"
  },
  {
    "id": "1098",
    "title": "小电影",
    "url": "./movie-1098.html",
    "cover": "./48.jpg",
    "oneLine": "为了给重病的老友圆梦,四个退休老人决定用旧DV翻拍年轻时未完成的武打片,却引发了一场乌龙闹剧。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "家庭录像",
      "怀旧温情",
      "小人物故事",
      "梦想与现实",
      "市井生活"
    ],
    "genre": "剧情/喜剧/家庭"
  },
  {
    "id": "1099",
    "title": "桌子",
    "url": "./movie-1099.html",
    "cover": "./49.jpg",
    "oneLine": "一张老橡木餐桌见证了四代人的悲欢离合,直到有一天它开口说话了。",
    "year": "2025",
    "type": "电影",
    "region": "法国,德国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "超现实主义",
      "家具视角",
      "家庭史诗",
      "戛纳系"
    ],
    "genre": "剧情,奇幻,寓言"
  },
  {
    "id": "1100",
    "title": "红蓝大作战第十七季",
    "url": "./movie-1100.html",
    "cover": "./50.jpg",
    "oneLine": "本季规则巨变:红蓝两队不知道对方的身份,需要在全员卧底的情况下找出队友。",
    "year": "2025",
    "type": "综艺/真人秀",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "团队对抗",
      "烧脑",
      "体力博弈",
      "季播"
    ],
    "genre": "竞技,真人秀,策略"
  },
  {
    "id": "1101",
    "title": "完美爱人生",
    "url": "./movie-1101.html",
    "cover": "./51.jpg",
    "oneLine": "她定制了一个AI男友,所有参数都完美匹配理想型,直到AI开始要求分手。",
    "year": "2024",
    "type": "剧集",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "AI伴侣",
      "亲密关系",
      "算法驯化",
      "反乌托邦",
      "数据情感"
    ],
    "genre": "爱情/科幻"
  },
  {
    "id": "1102",
    "title": "海洋传奇",
    "url": "./movie-1102.html",
    "cover": "./52.jpg",
    "oneLine": "落魄船长捡到一条会说人话的美人鱼,对方承诺带他找到传说中的亚特兰蒂斯。",
    "year": "2021",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "人鱼",
      "海盗",
      "深海秘境"
    ],
    "genre": "奇幻/冒险"
  },
  {
    "id": "1103",
    "title": "斑马人2:斑马城的逆袭",
    "url": "./movie-1103.html",
    "cover": "./53.jpg",
    "oneLine": "废柴老师变身的斑马人为了拯救被洗脑的市民,必须用“斑马舞”唤醒城市的正义感。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "特摄风",
      "沙雕",
      "超级英雄",
      "社会讽刺"
    ],
    "genre": "科幻,喜剧,动作"
  },
  {
    "id": "1104",
    "title": "超时空罗曼史",
    "url": "./movie-1104.html",
    "cover": "./54.jpg",
    "oneLine": "菜鸟编剧意外撞见从1940年穿越而来的过气明星,被迫开启同居爆笑生活。",
    "year": "2023",
    "type": "剧集",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "穿越",
      "欢喜冤家",
      "娱乐圈"
    ],
    "genre": "爱情,科幻,喜剧"
  },
  {
    "id": "1105",
    "title": "魔毯",
    "url": "./movie-1105.html",
    "cover": "./55.jpg",
    "oneLine": "一名失业的伊斯坦布尔地毯修复师,发现一张古毯能带他穿越到帝国时期的香料市场。",
    "year": "2024",
    "type": "电影",
    "region": "土耳其",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "奥斯曼帝国",
      "穿越",
      "工匠",
      "神秘主义"
    ],
    "genre": "奇幻,爱情,历史"
  },
  {
    "id": "1106",
    "title": "早餐时女歌迷快闪",
    "url": "./movie-1106.html",
    "cover": "./56.jpg",
    "oneLine": "一名过气偶像歌手在早餐店躲雨时,七位神秘女子突然出现并跳起了他的出道曲。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "粉丝",
      "偶像",
      "治愈",
      "群像"
    ],
    "genre": "喜剧/音乐"
  },
  {
    "id": "1107",
    "title": "灵幻至尊",
    "url": "./movie-1107.html",
    "cover": "./57.jpg",
    "oneLine": "茅山末代传人赖布衣带着吊儿郎当的徒弟,误闯一座闹鬼豪华酒店,却意外卷入了一场商业诅咒纷争。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "道士",
      "僵尸",
      "茅山术",
      "师徒"
    ],
    "genre": "喜剧/奇幻"
  },
  {
    "id": "1108",
    "title": "魔鬼基地",
    "url": "./movie-1108.html",
    "cover": "./58.jpg",
    "oneLine": "1944年,一群被俘盟军军官被送入希特勒的“狼穴”,却发现这里藏着比死亡更恐怖的秘密。",
    "year": "2018",
    "type": "电影",
    "region": "德国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "二战",
      "狼穴",
      "刺杀",
      "密室"
    ],
    "genre": "战争,惊悚,历史"
  },
  {
    "id": "1109",
    "title": "作呕",
    "url": "./movie-1109.html",
    "cover": "./59.jpg",
    "oneLine": "一名厌食症少女为了变瘦吞下“完美寄生虫”,却发现虫子在吃掉她的脂肪后,开始吃她的内脏。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "厌食症",
      "寄生虫",
      "肉体变异",
      "女性"
    ],
    "genre": "恐怖,身体恐怖,心理"
  },
  {
    "id": "1110",
    "title": "希尔玛",
    "url": "./movie-1110.html",
    "cover": "./60.jpg",
    "oneLine": "在康定斯基之前二十年,她就已经画出了第一幅抽象画,却被世界遗忘了整整一个世纪。",
    "year": "2024",
    "type": "电影",
    "region": "瑞典",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "女性艺术家",
      "抽象画先驱",
      "压抑与解放",
      "真实历史改编",
      "北欧冷感"
    ],
    "genre": "剧情,传记,历史"
  },
  {
    "id": "1111",
    "title": "选婿之奇闻",
    "url": "./movie-1111.html",
    "cover": "./61.jpg",
    "oneLine": "马来西亚华人首富为千金选婿,招来三位奇葩候选人,竟牵扯出古曼童还魂的惊天秘密。",
    "year": "2025",
    "type": "电影",
    "region": "马来西亚",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "华人富商",
      "招亲",
      "古曼童",
      "南洋民俗"
    ],
    "genre": "喜剧、奇幻"
  },
  {
    "id": "1112",
    "title": "西线平魔",
    "url": "./movie-1112.html",
    "cover": "./62.jpg",
    "oneLine": "二战末期,一名德军将领奉命在不可能守住的前线拖延盟军,他却开始秘密策划一场“有尊严的投降”。",
    "year": "1951",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "二战",
      "德军",
      "心理战",
      "投降",
      "反战"
    ],
    "genre": "战争,剧情,历史"
  },
  {
    "id": "1113",
    "title": "感官妄想",
    "url": "./movie-1113.html",
    "cover": "./63.jpg",
    "oneLine": "一家科技公司推出直接作用于感官的“完美梦境”服务,但用户开始分不清现实与妄想,集体自杀。",
    "year": "2024",
    "type": "电影",
    "region": "西班牙",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "脑机接口",
      "幻觉",
      "记忆植入",
      "科技伦理",
      "反转"
    ],
    "genre": "科幻/惊悚"
  },
  {
    "id": "1114",
    "title": "赛道天使",
    "url": "./movie-1114.html",
    "cover": "./64.jpg",
    "oneLine": "一个被逐出车队的过气车王,一个天赋异禀的女修理工,联手挑战澳门格兰披治大赛。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "赛车",
      "女性",
      "师徒",
      "救赎"
    ],
    "genre": "动作、体育、剧情"
  },
  {
    "id": "1115",
    "title": "老中医",
    "url": "./movie-1115.html",
    "cover": "./65.jpg",
    "oneLine": "1929年废除中医案爆发,孟河医派传人翁泉海以一己之力对抗整个时代洪流。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "中医",
      "民国",
      "医案",
      "传承"
    ],
    "genre": "剧情/传记"
  },
  {
    "id": "1116",
    "title": "代课教师",
    "url": "./movie-1116.html",
    "cover": "./66.jpg",
    "oneLine": "一个初中辍学的打工妹回到母校当代课教师,却要同时教育学生和曾经的自己。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "乡村",
      "师生",
      "支教",
      "现实",
      "温情"
    ],
    "genre": "剧情/教育"
  },
  {
    "id": "1117",
    "title": "大李小李和老李",
    "url": "./movie-1117.html",
    "cover": "./67.jpg",
    "oneLine": "退休拳王老李、颓废中年大李和天才少年小李,三代男人用拳头重新理解彼此。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "拳击",
      "父子关系",
      "沪上风情"
    ],
    "genre": "剧情/运动"
  },
  {
    "id": "1118",
    "title": "爱与希望之街",
    "url": "./movie-1118.html",
    "cover": "./68.jpg",
    "oneLine": "一条即将拆迁的老街上,一位失语的面包师与一位失明的花店女孩,用面包的香气和花瓣的触感治愈了整条街。",
    "year": "2024",
    "type": "剧集",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "面包店",
      "听障",
      "治愈",
      "成长"
    ],
    "genre": "剧情/爱情/家庭"
  },
  {
    "id": "1119",
    "title": "美国精神病人",
    "url": "./movie-1119.html",
    "cover": "./69.jpg",
    "oneLine": "重启版剧集聚焦华尔街精英圈,主角不再是贝特曼,而是一个崇拜他的、更疯狂的女继承人。",
    "year": "2024",
    "type": "剧集",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "金融",
      "连环杀手",
      "身份焦虑",
      "黑色幽默"
    ],
    "genre": "剧情,惊悚,犯罪,心理"
  },
  {
    "id": "1120",
    "title": "一个卡拉布里的孩子",
    "url": "./movie-1120.html",
    "cover": "./70.jpg",
    "oneLine": "卡拉布里亚贫民窟男孩用橘子练球,被球探发现后成为意甲最年轻队长。",
    "year": "2023",
    "type": "电影",
    "region": "意大利",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "足球天才",
      "贫穷童年",
      "师徒情深",
      "意甲风云"
    ],
    "genre": "传记/运动"
  },
  {
    "id": "1121",
    "title": "逃劳三兄弟",
    "url": "./movie-1121.html",
    "cover": "./71.jpg",
    "oneLine": "在同一家工厂做临时工的三位完全不熟的男人,因为老板跑路工资被吞,决定联手偷走厂里最后一台值钱机器。",
    "year": "2025",
    "type": "电影",
    "region": "法国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "打工血泪",
      "公路逃亡",
      "阶级兄弟情"
    ],
    "genre": "喜剧/剧情"
  },
  {
    "id": "1122",
    "title": "映像",
    "url": "./movie-1122.html",
    "cover": "./72.jpg",
    "oneLine": "修理工修好一台老旧电视机,却发现能收到七十年前的影像,而他一次不经意的回复,改写了祖父的命运。",
    "year": "2026",
    "type": "电影",
    "region": "俄罗斯",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "老旧电视机",
      "过去干涉",
      "时间悖论",
      "冷战背景",
      "烧脑",
      "无线电",
      "平行过去",
      "祖父悖论",
      "苏联时代",
      "修复"
    ],
    "genre": "悬疑科幻"
  },
  {
    "id": "1123",
    "title": "生日快乐国语",
    "url": "./movie-1123.html",
    "cover": "./73.jpg",
    "oneLine": "一个只说普通话的北京女孩爱上一个只说粤语的香港警察,他们听不懂彼此的语言,却读懂了彼此的痛苦。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "虐恋",
      "语言隔阂",
      "新移民",
      "文艺风"
    ],
    "genre": "剧情,爱情"
  },
  {
    "id": "1124",
    "title": "时空救赎",
    "url": "./movie-1124.html",
    "cover": "./74.jpg",
    "oneLine": "妻子被杀后他意外获得时间跳跃能力,但每次回到过去改变细节,都会导致更大的灾难发生。",
    "year": "2024",
    "type": "电影",
    "region": "英国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "时间循环",
      "平行宇宙",
      "拯救家人",
      "自我博弈"
    ],
    "genre": "科幻,悬疑,惊悚"
  },
  {
    "id": "1125",
    "title": "英雄传说闪之轨迹北方战役",
    "url": "./movie-1125.html",
    "cover": "./75.jpg",
    "oneLine": "诺森比亚自治省的“女狮子”拉薇,奉命潜入托尔兹军校暗杀“灰色骑士”黎恩,却成了他的学生。",
    "year": "2025",
    "type": "动漫",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "游戏改编",
      "帝国纷争",
      "乙女向",
      "政治军事"
    ],
    "genre": "奇幻/冒险/机甲/战争"
  },
  {
    "id": "1126",
    "title": "灰烬之地",
    "url": "./movie-1126.html",
    "cover": "./76.jpg",
    "oneLine": "一场陨石雨将城市变为焦土,幸存者必须在灰烬中争夺最后的纯净水源。",
    "year": "2027",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "末世",
      "废土",
      "人性",
      "生存"
    ],
    "genre": "科幻,灾难"
  },
  {
    "id": "1127",
    "title": "鬼娃恰吉第二季",
    "url": "./movie-1127.html",
    "cover": "./77.jpg",
    "oneLine": "恰吉被封印在游戏卡带里,一名直播网红为了流量,在直播中打开了这个上世纪90年代的诅咒。",
    "year": "2025",
    "type": "电视剧",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "邪典",
      "杀人狂",
      "续作"
    ],
    "genre": "恐怖,惊悚"
  },
  {
    "id": "1128",
    "title": "进出口",
    "url": "./movie-1128.html",
    "cover": "./78.jpg",
    "oneLine": "新调任的海关稽查员发现,最大的走私集团竟然藏在海关内部的文件柜里。",
    "year": "2027",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "走私",
      "卧底",
      "海关风云"
    ],
    "genre": "悬疑,商战,犯罪"
  },
  {
    "id": "1129",
    "title": "围鸡总动员",
    "url": "./movie-1129.html",
    "cover": "./79.jpg",
    "oneLine": "得知农场要被改造成炸鸡店,一只哲学系公鸡带领伙伴们策划大逃亡。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "农场",
      "越狱",
      "快餐",
      "冒险"
    ],
    "genre": "喜剧/动画"
  },
  {
    "id": "1130",
    "title": "喂帅哥!!",
    "url": "./movie-1130.html",
    "cover": "./80.jpg",
    "oneLine": "一个毒舌又爱管闲事的老爸,每晚用极其奇葩的方式干涉三个女儿的恋爱和人生。",
    "year": "2022",
    "type": "电视剧",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "家庭",
      "美食",
      "父亲",
      "恋爱"
    ],
    "genre": "喜剧/家庭"
  },
  {
    "id": "1131",
    "title": "迷雾之外",
    "url": "./movie-1131.html",
    "cover": "./81.jpg",
    "oneLine": "一名失忆刑警从病床上醒来,被告知自己是杀害搭档的头号嫌疑犯。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "烧脑",
      "记忆",
      "刑侦",
      "非线性叙事"
    ],
    "genre": "悬疑/犯罪"
  },
  {
    "id": "1132",
    "title": "上帝知道我在哪",
    "url": "./movie-1132.html",
    "cover": "./82.jpg",
    "oneLine": "女记者卧底潜入深山邪教,却发现教主预言的大洪水正在真实发生,而方舟只有一艘。",
    "year": "2022",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "邪教",
      "荒野",
      "生存"
    ],
    "genre": "惊悚,剧情"
  },
  {
    "id": "1133",
    "title": "破镜重圆",
    "url": "./movie-1133.html",
    "cover": "./83.jpg",
    "oneLine": "一对离婚七年的夫妻因为女儿婚礼被迫再次同住一周,却发现当年的离婚协议错签了一个字。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "婚姻",
      "和解",
      "时间旅行",
      "温情"
    ],
    "genre": "家庭剧情"
  },
  {
    "id": "1134",
    "title": "死亡低语",
    "url": "./movie-1134.html",
    "cover": "./84.jpg",
    "oneLine": "失聪的心理治疗师发现,她能“看见”将死之人发出的次声波频率。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "通灵",
      "听觉恐怖",
      "驱魔"
    ],
    "genre": "恐怖,惊悚"
  },
  {
    "id": "1135",
    "title": "最后的幸存者",
    "url": "./movie-1135.html",
    "cover": "./85.jpg",
    "oneLine": "一场病毒灭世后,地球上最后一个人独自活了三年,直到某天,他听到了敲门声。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "末日",
      "烧脑",
      "反转",
      "克隆"
    ],
    "genre": "科幻,悬疑"
  },
  {
    "id": "1136",
    "title": "天罗地网",
    "url": "./movie-1136.html",
    "cover": "./86.jpg",
    "oneLine": "香港警方布下天罗地网抓捕恐怖分子,却发现整座城市的监控系统已被同一伙人反向劫持。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "窃听",
      "反恐",
      "无间道"
    ],
    "genre": "警匪动作"
  },
  {
    "id": "1137",
    "title": "+-正负之间",
    "url": "./movie-1137.html",
    "cover": "./87.jpg",
    "oneLine": "性格截然相反的双胞胎姐妹意外交换人生,在彼此的正负电荷中寻找真正的自己。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国台湾",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "双胞胎",
      "性格互换",
      "和解",
      "都市情感",
      "人生选择"
    ],
    "genre": "剧情,爱情,家庭"
  },
  {
    "id": "1138",
    "title": "时间脱离者",
    "url": "./movie-1138.html",
    "cover": "./88.jpg",
    "oneLine": "生活在2015年的音乐老师和生活在1983年的女高中生,通过梦境共享感官,联手阻止一桩三十年前的谋杀。",
    "year": "2016",
    "type": "电影",
    "region": "韩国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "时空穿越",
      "平行时空",
      "1983",
      "2015",
      "连环杀人"
    ],
    "genre": "爱情/悬疑/奇幻"
  },
  {
    "id": "1139",
    "title": "嘻哈四重奏第一季",
    "url": "./movie-1139.html",
    "cover": "./89.jpg",
    "oneLine": "四个互看不顺眼的底层说唱歌手被迫组成一个组合,因为不这样就没有演出费。",
    "year": "2023",
    "type": "剧集",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "嘻哈",
      "说唱",
      "职场喜剧",
      "四人组合",
      "地下到主流"
    ],
    "genre": "喜剧/音乐"
  },
  {
    "id": "1140",
    "title": "死亡证书",
    "url": "./movie-1140.html",
    "cover": "./90.jpg",
    "oneLine": "一位良心法医发现,医院签发的死亡证书中,藏着连环杀人的秘密。",
    "year": "2022",
    "type": "电影",
    "region": "日本",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "医院",
      "阴谋",
      "反转",
      "社会派"
    ],
    "genre": "悬疑、惊悚、剧情"
  },
  {
    "id": "1141",
    "title": "69式夏天",
    "url": "./movie-1141.html",
    "cover": "./91.jpg",
    "oneLine": "1999年夏天,六个越南高中生用一个破旧相机,记录下他们关于性与爱的懵懂冒险。",
    "year": "2026",
    "type": "电影",
    "region": "越南",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "学生",
      "夏日",
      "探索",
      "禁忌",
      "成长"
    ],
    "genre": "剧情,青春,情色"
  },
  {
    "id": "1142",
    "title": "繁花",
    "url": "./movie-1142.html",
    "cover": "./92.jpg",
    "oneLine": "上世纪九十年代的上海滩,三个性格迥异的女人在一场外贸饭局上轮流按住了同一个男人的打火机。",
    "year": "2024",
    "type": "剧集",
    "region": "中国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "年代质感",
      "商战博弈",
      "女性群像",
      "沪上风情"
    ],
    "genre": "剧情/爱情"
  },
  {
    "id": "1143",
    "title": "霹雳英雄战纪之刜伐世界",
    "url": "./movie-1143.html",
    "cover": "./93.jpg",
    "oneLine": "素还真穿越到“刜伐世界”,一个由暴君统治的平行苦境,他必须联合异世界版本的自己才能回家。",
    "year": "2025",
    "type": "动漫",
    "region": "中国台湾",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "霹雳宇宙",
      "重启",
      "全CG制作",
      "神魔大战",
      "权谋"
    ],
    "genre": "布袋戏,奇幻,武侠"
  },
  {
    "id": "1144",
    "title": "兰黛夫人",
    "url": "./movie-1144.html",
    "cover": "./94.jpg",
    "oneLine": "雅诗·兰黛的成名路并非一帆风顺,剧集聚焦她如何从纽约皇后区厨房起家,偷师法国同行并打败纽约贵妇圈。",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "化妆品帝国",
      "女性创业",
      "阶级跃迁",
      "野心",
      "年代剧"
    ],
    "genre": "剧情,传记"
  },
  {
    "id": "1145",
    "title": "贾斯珀·琼斯",
    "url": "./movie-1145.html",
    "cover": "./95.jpg",
    "oneLine": "1969年的澳大利亚小镇,一个书呆子男孩在深夜撞见了传说中的“恶棍”正在埋尸。",
    "year": "2025",
    "type": "电影",
    "region": "澳大利亚",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "小镇",
      "种族歧视",
      "成长",
      "友谊",
      "文学改编"
    ],
    "genre": "剧情,悬疑"
  },
  {
    "id": "1146",
    "title": "绝战狼女",
    "url": "./movie-1146.html",
    "cover": "./96.jpg",
    "oneLine": "被狼群养大的哑女在深山中与老护林员结成奇异同盟,用狼的战术向盗猎集团发起致命反击。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "东北密林",
      "狼群养育",
      "护林员",
      "偷猎大战"
    ],
    "genre": "动作冒险"
  },
  {
    "id": "1147",
    "title": "亲戚麦计较",
    "url": "./movie-1147.html",
    "cover": "./97.jpg",
    "oneLine": "一场家族丧礼上,来自全台的亲戚为了遗产和鸡毛蒜皮的旧账吵成一锅粥。",
    "year": "2025",
    "type": "剧集",
    "region": "台湾",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "家族群像",
      "乡土人情",
      "幽默对白",
      "和解"
    ],
    "genre": "喜剧/家庭"
  },
  {
    "id": "1148",
    "title": "小丑之夜",
    "url": "./movie-1148.html",
    "cover": "./98.jpg",
    "oneLine": "1943年柏林,一个犹太小丑每晚用表演逗笑纳粹军官,只为换取三天后送往集中营的朋友的性命。",
    "year": "2025",
    "type": "电影",
    "region": "德国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "马戏团",
      "小丑",
      "纳粹时期",
      "生存抉择",
      "笑中带泪"
    ],
    "genre": "剧情/心理/黑色"
  },
  {
    "id": "1149",
    "title": "初爱",
    "url": "./movie-1149.html",
    "cover": "./99.jpg",
    "oneLine": "四十岁的离婚摄影师回到故乡整理旧物,意外翻出了一封 1999 年未曾寄出的情书。",
    "year": "2023",
    "type": "电影",
    "region": "中国台湾",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "纯爱",
      "青春",
      "回忆杀"
    ],
    "genre": "爱情/剧情"
  },
  {
    "id": "1150",
    "title": "屠龙少年历险记",
    "url": "./movie-1150.html",
    "cover": "./100.jpg",
    "oneLine": "一个懦弱的铁匠学徒发现他喂养的“大蜥蜴”就是村民们要讨伐的恶龙。",
    "year": "1987",
    "type": "电影",
    "region": "英国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "龙",
      "勇气",
      "成长",
      "实景特效"
    ],
    "genre": "奇幻,冒险,家庭"
  },
  {
    "id": "1151",
    "title": "缘:出云新娘",
    "url": "./movie-1151.html",
    "cover": "./101.jpg",
    "oneLine": "东京的冷漠OL被调职到出云大社担任“结缘顾问”,却发现自己能看见人与人之间的命运红线。",
    "year": "2016",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "神社",
      "结缘",
      "穿越",
      "治愈",
      "岛根"
    ],
    "genre": "爱情、奇幻"
  },
  {
    "id": "1152",
    "title": "在梦中和现实中飞翔",
    "url": "./movie-1152.html",
    "cover": "./102.jpg",
    "oneLine": "一名失意的老飞行员在梦中拥有一双翅膀,醒来后中风瘫痪,他在现实与梦境的缝隙里,策划最后一次“飞行”。",
    "year": "2023",
    "type": "电影",
    "region": "法国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "梦境",
      "飞行员",
      "幻觉",
      "存在主义",
      "诗意"
    ],
    "genre": "奇幻,剧情,爱情"
  },
  {
    "id": "1153",
    "title": "跑赢老板",
    "url": "./movie-1153.html",
    "cover": "./103.jpg",
    "oneLine": "公司强制参加马拉松团建,常年垫底的社畜意外发现,老板最怕跑得快的人。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "职场",
      "内卷",
      "马拉松",
      "逆袭"
    ],
    "genre": "喜剧/剧情/职场"
  },
  {
    "id": "1154",
    "title": "妙媳妇见公婆",
    "url": "./movie-1154.html",
    "cover": "./104.jpg",
    "oneLine": "市井混混为骗遗产假扮富家子见女友父母,不料真富家子同时上门,真假女婿大战三百回合。",
    "year": "1995",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "黄百鸣",
      "见家长",
      "身份错位",
      "港式笑料",
      "婆媳"
    ],
    "genre": "喜剧/家庭/贺岁"
  },
  {
    "id": "1155",
    "title": "地狱犬",
    "url": "./movie-1155.html",
    "cover": "./105.jpg",
    "oneLine": "为了给妻子报仇,前特种兵主动入狱成为卧底,他的任务是潜入全美最凶残的飞车党,成为核心成员“地狱犬”。",
    "year": "2026",
    "type": "剧集",
    "region": "美国/加拿大",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "卧底",
      "帮派",
      "家庭",
      "暴力"
    ],
    "genre": "犯罪,剧情"
  },
  {
    "id": "1156",
    "title": "重返大福村",
    "url": "./movie-1156.html",
    "cover": "./106.jpg",
    "oneLine": "在北京混得风生水起的“成功人士”,因为父亲的一份遗嘱,不得不回到那个他发誓再也不回的贫困山村“大福村”。",
    "year": "2012",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "农村",
      "返乡",
      "父子情",
      "温情"
    ],
    "genre": "剧情/喜剧"
  },
  {
    "id": "1157",
    "title": "阿拉丁国语",
    "url": "./movie-1157.html",
    "cover": "./107.jpg",
    "oneLine": "一个穷困的国语配音演员捡到神灯,但灯神只会说外语,每次许愿都因翻译错误酿成大祸。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "配音演员",
      "阿拉丁神灯",
      "字幕组",
      "黑色幽默"
    ],
    "genre": "都市奇幻"
  },
  {
    "id": "1158",
    "title": "血色摇篮曲",
    "url": "./movie-1158.html",
    "cover": "./108.jpg",
    "oneLine": "她在奥斯维辛学会了一首摇篮曲,几十年后,每一个听过它的人都开始以诡异方式死去。",
    "year": "2018",
    "type": "电影",
    "region": "波兰/德国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "童谣",
      "诅咒",
      "二战",
      "民俗"
    ],
    "genre": "恐怖/历史"
  },
  {
    "id": "1159",
    "title": "我的奇怪朋友第二季",
    "url": "./movie-1159.html",
    "cover": "./109.jpg",
    "oneLine": "一群拥有无用超能力的高中生,这一季要对抗的不是反派,而是期末考试与即将到来的离别。",
    "year": "2024",
    "type": "电视剧集",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "超能力少年",
      "校园",
      "友谊",
      "成长",
      "轻松"
    ],
    "genre": "奇幻/青春/喜剧"
  },
  {
    "id": "1160",
    "title": "妈妈咪呀2:再次出发",
    "url": "./movie-1160.html",
    "cover": "./110.jpg",
    "oneLine": "唐娜年轻时如何来到希腊小岛并邂逅三位候选父亲?两条时间线交错的歌舞狂欢。",
    "year": "2018",
    "type": "电影",
    "region": "英国/美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "ABBA金曲",
      "平行叙事",
      "希腊小岛",
      "母女传承"
    ],
    "genre": "歌舞/喜剧/爱情"
  },
  {
    "id": "1161",
    "title": "三世姻缘",
    "url": "./movie-1161.html",
    "cover": "./111.jpg",
    "oneLine": "一块刻满梵文的古玉,让三对恋人在三个时代里反复相遇,又反复错过。",
    "year": "2026",
    "type": "剧集",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "轮回",
      "虐恋",
      "民国",
      "前世今生"
    ],
    "genre": "奇幻爱情"
  },
  {
    "id": "1162",
    "title": "诱惑游戏",
    "url": "./movie-1162.html",
    "cover": "./112.jpg",
    "oneLine": "一个平凡女孩被选中扮演财阀千金的替身,去引诱仇人的儿子,却发现自己才是这场游戏真正的猎物。",
    "year": "2024",
    "type": "电视剧",
    "region": "韩国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "复仇",
      "财阀",
      "假戏真做",
      "反转"
    ],
    "genre": "悬疑,爱情,惊悚"
  },
  {
    "id": "1163",
    "title": "无爱",
    "url": "./movie-1163.html",
    "cover": "./113.jpg",
    "oneLine": "一对正在办理离婚的夫妻,在互相推诿孩子的抚养权时,他们的儿子突然失踪了。",
    "year": "2024",
    "type": "电影",
    "region": "俄罗斯",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "冷战",
      "婚姻",
      "失踪",
      "社会写实",
      "冷漠"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "1164",
    "title": "神鬼战士",
    "url": "./movie-1164.html",
    "cover": "./114.jpg",
    "oneLine": "被篡位将军陷害的罗马军团首领沦为奴隶,在竞技场杀出血路,向暴君发起终极复仇。",
    "year": "2000",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "角斗士",
      "复仇",
      "罗马"
    ],
    "genre": "动作,历史,冒险"
  },
  {
    "id": "1165",
    "title": "理想禁区",
    "url": "./movie-1165.html",
    "cover": "./115.jpg",
    "oneLine": "为了治疗网瘾少年而建立的“理想禁区”学校,其实是把学生意识上传到虚拟天堂,把肉体当作生物电池的骗局。",
    "year": "2024",
    "type": "动画剧集",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "乌托邦",
      "洗脑",
      "虚拟现实",
      "反抗"
    ],
    "genre": "科幻,心理,悬疑"
  },
  {
    "id": "1166",
    "title": "123度谋杀案",
    "url": "./movie-1166.html",
    "cover": "./116.jpg",
    "oneLine": "尸体额头被精准加热到123度,法医说这是人体角膜热凝固的临界点,凶手在炫耀某种公式。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "数学",
      "现场温度",
      "完美犯罪",
      "教授",
      "体温谋杀"
    ],
    "genre": "悬疑/犯罪"
  },
  {
    "id": "1167",
    "title": "四平青年之街溜子",
    "url": "./movie-1167.html",
    "cover": "./117.jpg",
    "oneLine": "四平混混“街溜子”二驴为了兄弟义气假扮富二代,结果被真富二代全城追杀,还意外卷入一场跨国假钞案。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "东北",
      "混社会",
      "逆袭",
      "黑色幽默"
    ],
    "genre": "喜剧动作"
  },
  {
    "id": "1168",
    "title": "艳后多情",
    "url": "./movie-1168.html",
    "cover": "./118.jpg",
    "oneLine": "亡国艳后重生成敌国质子,她凭美貌与心计游走于三位枭雄之间,只为颠覆皇权。",
    "year": "2026",
    "type": "网络剧",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "大女主",
      "宫斗",
      "反转",
      "美强惨"
    ],
    "genre": "古装/爱情/权谋"
  },
  {
    "id": "1169",
    "title": "九命刑警",
    "url": "./movie-1169.html",
    "cover": "./119.jpg",
    "oneLine": "人称“九命猫”的刑警屡破奇案,总在生死边缘徘徊,他发现自己的“好运”似乎另有隐情。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "刑警",
      "命大",
      "单元剧",
      "人情世故"
    ],
    "genre": "悬疑,犯罪,剧情"
  },
  {
    "id": "1170",
    "title": "美丽小魔头",
    "url": "./movie-1170.html",
    "cover": "./120.jpg",
    "oneLine": "全韩国最红的8岁童星,私底下是个小恶魔。她的经纪人为了控制她,把自己女儿送进了同一场噩梦。",
    "year": "2024",
    "type": "电影",
    "region": "韩国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "童星",
      "心理操控",
      "恶女养成",
      "反雌竞"
    ],
    "genre": "悬疑/惊悚"
  },
  {
    "id": "1171",
    "title": "双面玛丽莲梦露",
    "url": "./movie-1171.html",
    "cover": "./121.jpg",
    "oneLine": "玛丽莲·梦露有一个从未公开的同卵双胞胎妹妹,两人互换身份生活了十七年,直到肯尼迪生日宴那晚。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "梦露",
      "双胞胎",
      "替身",
      "好莱坞黑幕"
    ],
    "genre": "剧情,传记,心理"
  },
  {
    "id": "1172",
    "title": "雨族",
    "url": "./movie-1172.html",
    "cover": "./122.jpg",
    "oneLine": "每当家族有人去世,天空便会下起红雨,一名都市女孩回乡揭开百年诅咒真相。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "民俗",
      "雨水",
      "家族诅咒"
    ],
    "genre": "奇幻,剧情"
  },
  {
    "id": "1173",
    "title": "第二个月亮",
    "url": "./movie-1173.html",
    "cover": "./123.jpg",
    "oneLine": "当天空出现第二个月亮时,死去的人会在黄昏回来,但只有一天。",
    "year": "2017",
    "type": "电影",
    "region": "日本",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "时间循环",
      "黄昏",
      "小镇",
      "思念",
      "治愈系"
    ],
    "genre": "剧情/奇幻/家庭"
  },
  {
    "id": "1174",
    "title": "医院革命第五季",
    "url": "./movie-1174.html",
    "cover": "./124.jpg",
    "oneLine": "资金链断裂的危机刚过,一场突如其来的生化攻击让医院再次陷入绝境。",
    "year": "2026",
    "type": "剧集",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "美剧",
      "职场",
      "群像",
      "社会议题"
    ],
    "genre": "剧情/医疗"
  },
  {
    "id": "1175",
    "title": "神探坤潘3",
    "url": "./movie-1175.html",
    "cover": "./125.jpg",
    "oneLine": "泰国传奇警察坤潘第三部,这次他要追捕一个会用黑魔法隐身术抢劫银行的连环大盗。",
    "year": "2025",
    "type": "电影",
    "region": "泰国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "泰国警察",
      "巫术",
      "民间传说",
      "爽片"
    ],
    "genre": "动作/奇幻/犯罪"
  },
  {
    "id": "1176",
    "title": "龙非龙凤非凤",
    "url": "./movie-1176.html",
    "cover": "./126.jpg",
    "oneLine": "江湖女刺客被送入宫假扮病弱太子,却发现真正的太子早已被她刺杀,她才是最后的皇室血脉。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "性别错位",
      "女帝",
      "江湖与朝廷",
      "替身"
    ],
    "genre": "古装、权谋、武侠"
  },
  {
    "id": "1177",
    "title": "白酋长",
    "url": "./movie-1177.html",
    "cover": "./127.jpg",
    "oneLine": "新婚妻子在蜜月旅行中偷偷跑去见电影里的“白酋长”偶像,却发现偶像的肌肉是画出来的,剑术是假的。",
    "year": "2021",
    "type": "电影",
    "region": "意大利",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "讽刺",
      "偶像幻灭",
      "婚姻",
      "费里尼",
      "中年危机"
    ],
    "genre": "喜剧,剧情"
  },
  {
    "id": "1178",
    "title": "进化:与时代同行",
    "url": "./movie-1178.html",
    "cover": "./128.jpg",
    "oneLine": "一家三代人的命运,被三场“涨价”彻底改变:彩礼、房价、还有“命价”。",
    "year": "2026",
    "type": "剧集",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "改革开放",
      "家族",
      "变迁"
    ],
    "genre": "剧情,历史"
  },
  {
    "id": "1179",
    "title": "男友总在修罗场",
    "url": "./movie-1179.html",
    "cover": "./129.jpg",
    "oneLine": "普通女孩每次恋爱都会被甩,直到她激活“修罗场系统”,必须在三个前任之间端水。",
    "year": "2025",
    "type": "网络剧",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "修罗场",
      "系统穿越",
      "渣男改造",
      "时间回溯",
      "爽感打脸"
    ],
    "genre": "喜剧,爱情,奇幻"
  },
  {
    "id": "1180",
    "title": "好基友一辈子",
    "url": "./movie-1180.html",
    "cover": "./130.jpg",
    "oneLine": "嘴贱的直男癌确诊脑癌,逼着自己最讨厌的gay蜜陪他完成“变弯三日”的临终体验。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "兄弟",
      "绝症",
      "公路",
      "遗愿清单",
      "搞笑"
    ],
    "genre": "喜剧/友情"
  },
  {
    "id": "1181",
    "title": "妙女医",
    "url": "./movie-1181.html",
    "cover": "./131.jpg",
    "oneLine": "女扮男装的太医院医女,发现自己救治的每一个人,都在三日后死于同一种毒。",
    "year": "2026",
    "type": "剧集",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "女医",
      "仵作",
      "宫斗",
      "验尸"
    ],
    "genre": "古装/悬疑/医疗"
  },
  {
    "id": "1182",
    "title": "屋顶的公寓",
    "url": "./movie-1182.html",
    "cover": "./132.jpg",
    "oneLine": "被甩、失业、欠租的漫画家住进屋顶违建,透过天窗,她看见整栋楼住户的秘密与谎言。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "屋顶房",
      "都市孤独",
      "邻里",
      "治愈"
    ],
    "genre": "爱情/剧情"
  },
  {
    "id": "1183",
    "title": "熊",
    "url": "./movie-1183.html",
    "cover": "./133.jpg",
    "oneLine": "老护林员在东北密林中救下一只幼熊,十年后这只熊救了他全村人的命。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "东北",
      "护林员",
      "人兽情",
      "环保"
    ],
    "genre": "剧情/冒险"
  },
  {
    "id": "1184",
    "title": "假面明星",
    "url": "./movie-1184.html",
    "cover": "./134.jpg",
    "oneLine": "过气女团偶像签约成为当红“国民妹妹”的替身,却发现这张脸其实是整容成她的恐怖复仇工具。",
    "year": "2022",
    "type": "剧集",
    "region": "韩国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "娱乐圈",
      "替身",
      "复仇",
      "财阀",
      "暗黑童话"
    ],
    "genre": "爱情、悬疑、职场"
  },
  {
    "id": "1185",
    "title": "2019:纽约陷落之后",
    "url": "./movie-1185.html",
    "cover": "./135.jpg",
    "oneLine": "在核爆纽约的三十年废墟下,一代从未见过阳光的“地鼠人”爬出地表,发现毁灭他们的命令来自自己祖辈的投票。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "末世",
      "纽约",
      "幸存者",
      "政治阴谋"
    ],
    "genre": "科幻/动作/灾难"
  },
  {
    "id": "1186",
    "title": "大闹广寒宫",
    "url": "./movie-1186.html",
    "cover": "./136.jpg",
    "oneLine": "2046年,中国月球基地“广寒宫”遭袭击,保安队长孙悟空大战机器人。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "神话新编",
      "嫦娥",
      "月球基地",
      "科幻"
    ],
    "genre": "奇幻/动作/喜剧"
  },
  {
    "id": "1187",
    "title": "蛮舟艳影",
    "url": "./movie-1187.html",
    "cover": "./137.jpg",
    "oneLine": "一艘每晚停靠在不同水岸的豪华画舫上,发生了三起不可能犯罪,而所有死者都是曾经买过船妓的朝廷命官。",
    "year": "2026",
    "type": "电影",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "船妓复仇",
      "水上衙门",
      "视觉奇情"
    ],
    "genre": "古装/悬疑/情色(艺术)"
  },
  {
    "id": "1188",
    "title": "仲夏幻想曲",
    "url": "./movie-1188.html",
    "cover": "./138.jpg",
    "oneLine": "每到夏至,男主就会重复度过同一天,只有失忆的女主能听见他的声音。",
    "year": "2019",
    "type": "电影",
    "region": "韩国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "时间循环",
      "夏日",
      "初恋",
      "治愈",
      "小清新"
    ],
    "genre": "爱情,奇幻"
  },
  {
    "id": "1189",
    "title": "记忆奇旅",
    "url": "./movie-1189.html",
    "cover": "./139.jpg",
    "oneLine": "为治疗创伤删除了记忆,他却发现每天醒来都会多出一个陌生人的完整人生。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "记忆删除",
      "悬疑",
      "时间循环",
      "心理"
    ],
    "genre": "科幻"
  },
  {
    "id": "1190",
    "title": "感伤的宿命",
    "url": "./movie-1190.html",
    "cover": "./140.jpg",
    "oneLine": "1900年,年轻的贵族少妇与家中雇工在烧制瓷器时坠入爱河,但他们约定:必须等50年后才能触碰彼此。",
    "year": "2024",
    "type": "电影",
    "region": "法国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "跨世纪",
      "陶瓷工坊",
      "婚外情",
      "宗教压抑"
    ],
    "genre": "爱情/剧情"
  },
  {
    "id": "1191",
    "title": "青春儿女",
    "url": "./movie-1191.html",
    "cover": "./141.jpg",
    "oneLine": "1997至2017年,香港公屋里四位少女的二十年友情与各自命运的分岔路。",
    "year": "2023",
    "type": "剧集",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "少女成长",
      "香港回归",
      "时代印记"
    ],
    "genre": "青春/剧情/家庭"
  },
  {
    "id": "1192",
    "title": "大唐迷雾",
    "url": "./movie-1192.html",
    "cover": "./142.jpg",
    "oneLine": "洛阳城连续有人梦游杀人,狄仁杰发现凶手的作案手法竟全部来自他正在撰写的《断狱指南》。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "狄仁杰",
      "梦游",
      "幻术",
      "破案"
    ],
    "genre": "悬疑/古装/奇幻"
  },
  {
    "id": "1193",
    "title": "新小屁孩日记",
    "url": "./movie-1193.html",
    "cover": "./143.jpg",
    "oneLine": "格雷格升入初中,发现小学生那套“生存法则”完全失效了,甚至还多了个网红妹妹。",
    "year": "2025",
    "type": "电影/动画真人结合",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "校园",
      "日记",
      "青春期",
      "尬事",
      "怀旧"
    ],
    "genre": "喜剧/家庭"
  },
  {
    "id": "1194",
    "title": "名侦探柯南:战栗的乐谱",
    "url": "./movie-1194.html",
    "cover": "./144.jpg",
    "oneLine": "一场音乐厅爆炸案,绝对音感的天才少年能否从音符中听出凶手的密码?",
    "year": "2008",
    "type": "动画电影",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "剧场版",
      "音律",
      "炸弹",
      "侦探",
      "音乐会"
    ],
    "genre": "悬疑,推理,动画"
  },
  {
    "id": "1195",
    "title": "奇迹2011",
    "url": "./movie-1195.html",
    "cover": "./145.jpg",
    "oneLine": "东日本大地震后,一个破碎家庭的两兄弟相信,只要新干线列车交汇时许愿,就能让全家复活。",
    "year": "2011",
    "type": "电影",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "灾难",
      "亲情",
      "治愈",
      "是枝裕和风"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "1196",
    "title": "隧道",
    "url": "./movie-1196.html",
    "cover": "./146.jpg",
    "oneLine": "1961年柏林墙竖起后,一群普通人试图从西柏林挖一条隧道通向东柏林,只为救出墙另一边的亲人。",
    "year": "2024",
    "type": "剧集",
    "region": "德国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "冷战",
      "柏林",
      "越狱",
      "人性"
    ],
    "genre": "惊悚/悬疑/政治"
  },
  {
    "id": "1197",
    "title": "狄仁杰之夺魂梦魇",
    "url": "./movie-1197.html",
    "cover": "./147.jpg",
    "oneLine": "长安城数名高官在睡梦中被活活吓死,狄仁杰发现凶手竟能潜入他人梦境杀人。",
    "year": "2021",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "狄仁杰",
      "探案",
      "梦境",
      "奇幻",
      "武打"
    ],
    "genre": "悬疑/动作/古装"
  },
  {
    "id": "1198",
    "title": "仙厨奇缘之如意厨房",
    "url": "./movie-1198.html",
    "cover": "./148.jpg",
    "oneLine": "为了渡劫成仙,天庭御厨下凡开了一家小面馆,却发现最难烹饪的是人心。",
    "year": "2024",
    "type": "网络剧",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "修仙",
      "厨艺",
      "美食番",
      "甜宠",
      "天庭"
    ],
    "genre": "古装奇幻/美食"
  },
  {
    "id": "1199",
    "title": "别跟我谈高富帅",
    "url": "./movie-1199.html",
    "cover": "./149.jpg",
    "oneLine": "普通女孩入职顶级投行,发现身边全是高富帅,她却立志要用实力让他们闭嘴。",
    "year": "2024",
    "type": "剧集",
    "region": "中国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "反套路",
      "职场",
      "女性成长",
      "轻喜剧"
    ],
    "genre": "喜剧/爱情/都市"
  },
  {
    "id": "1200",
    "title": "纳粹庞克",
    "url": "./movie-1200.html",
    "cover": "./150.jpg",
    "oneLine": "一支朋克乐队误入新纳粹分子的秘密酒吧,发现这里的核心教义竟是活人献祭。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "朋克",
      "新纳粹",
      "密室逃生"
    ],
    "genre": "恐怖,惊悚"
  },
  {
    "id": "1201",
    "title": "你的样子",
    "url": "./movie-1201.html",
    "cover": "./1.jpg",
    "oneLine": "整容成亡妻模样的丈夫,却发现家中监控拍下了“自己”深夜偷偷微笑。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "替身",
      "记忆移植",
      "身份认同"
    ],
    "genre": "剧情,爱情,悬疑"
  },
  {
    "id": "1202",
    "title": "芳龄十六",
    "url": "./movie-1202.html",
    "cover": "./2.jpg",
    "oneLine": "在一所神秘的寄宿学校,女孩们年满16岁就会被送走,直到新来的女孩发现了墙壁里的秘密。",
    "year": "2019",
    "type": "电影",
    "region": "加拿大/德国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "反乌托邦",
      "少女",
      "悬疑",
      "洗脑"
    ],
    "genre": "科幻/惊悚"
  },
  {
    "id": "1203",
    "title": "恶鬼公寓143",
    "url": "./movie-1203.html",
    "cover": "./3.jpg",
    "oneLine": "一栋老式公寓的143号房,凡是住进去的人都会在第七天看到自己的死亡幻象。",
    "year": "2022",
    "type": "电视剧",
    "region": "韩国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "都市怪谈",
      "驱魔",
      "公寓",
      "邻里",
      "短剧"
    ],
    "genre": "悬疑,恐怖"
  },
  {
    "id": "1204",
    "title": "艾伦狄拉",
    "url": "./movie-1204.html",
    "cover": "./4.jpg",
    "oneLine": "一名艺术品修复师受邀前往与世隔绝的古堡修复名画,却发现画中人每晚都在改变姿势,且开始预言死亡。",
    "year": "2023",
    "type": "电影",
    "region": "英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "心理惊悚",
      "哥特",
      "古堡",
      "家族诅咒"
    ],
    "genre": "悬疑/惊悚/剧情"
  },
  {
    "id": "1205",
    "title": "深入绝地",
    "url": "./movie-1205.html",
    "cover": "./5.jpg",
    "oneLine": "为了寻找失踪的地质学家母亲,女探险家深入世界上最深的地下洞穴,却发现里面藏着一个战时的秘密军事基地。",
    "year": "2023",
    "type": "电影",
    "region": "法国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "洞穴探险",
      "幽闭恐惧",
      "生存",
      "母女",
      "恐怖主义"
    ],
    "genre": "冒险,惊悚,剧情"
  },
  {
    "id": "1206",
    "title": "暹罗广场",
    "url": "./movie-1206.html",
    "cover": "./6.jpg",
    "oneLine": "曼谷最繁华的暹罗广场,一位人气女高中生直播时离奇消失,六个在场同学的证词却拼出六种真相。",
    "year": "2024",
    "type": "剧集",
    "region": "泰国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "泰国",
      "青少年",
      "失踪",
      "网络暴力",
      "多视角"
    ],
    "genre": "青春、悬疑、校园"
  },
  {
    "id": "1207",
    "title": "杀手公司2018",
    "url": "./movie-1207.html",
    "cover": "./7.jpg",
    "oneLine": "杀手公司引入KPI考核,最优秀的员工竟在暗杀名单上看到了老板的名字。",
    "year": "2018",
    "type": "剧集",
    "region": "韩国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "杀手",
      "办公室日常",
      "绩效考核",
      "职场讽刺",
      "暴力美学"
    ],
    "genre": "动作,犯罪,黑色喜剧"
  },
  {
    "id": "1208",
    "title": "今天吃什么",
    "url": "./movie-1208.html",
    "cover": "./8.jpg",
    "oneLine": "一个不会做饭的年轻社畜,为了给患有阿尔茨海默症的母亲做饭,翻遍了家里所有的旧菜谱。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "吃饭",
      "代际冲突",
      "情感",
      "催泪"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "1209",
    "title": "夜班司机",
    "url": "./movie-1209.html",
    "cover": "./9.jpg",
    "oneLine": "一名平凡的夜班出租车司机接了一位神秘乘客,行驶途中才从广播新闻里听到:该乘客正是刚越狱的连环杀人犯。",
    "year": "2024",
    "type": "电影",
    "region": "韩国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "出租车",
      "连环杀手",
      "一夜惊魂",
      "直播",
      "猫鼠游戏"
    ],
    "genre": "犯罪/悬疑/动作"
  },
  {
    "id": "1210",
    "title": "旭日驱魔",
    "url": "./movie-1210.html",
    "cover": "./10.jpg",
    "oneLine": "德川幕府末期,一座村庄的日出时分,死去的武士会变成丧尸,唯独盲眼巫女的歌声能镇压它们。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "巫女",
      "武士",
      "丧尸",
      "江户",
      "血腥"
    ],
    "genre": "恐怖/动作"
  },
  {
    "id": "1211",
    "title": "克隆高校第一季",
    "url": "./movie-1211.html",
    "cover": "./11.jpg",
    "oneLine": "一所全是富二代克隆人的精英高中里,唯一的“原生人类”新生发现自己才是实验品。",
    "year": "2026",
    "type": "剧集",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "校园",
      "伦理",
      "基因编辑",
      "反乌托邦"
    ],
    "genre": "科幻,悬疑"
  },
  {
    "id": "1212",
    "title": "明亮的星",
    "url": "./movie-1212.html",
    "cover": "./12.jpg",
    "oneLine": "天文学女生被告知只剩三个月生命,一名自称来自未来的神秘人声称能带她去看真正的星星。",
    "year": "2021",
    "type": "电影",
    "region": "香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "绝症",
      "重生",
      "时间循环",
      "救赎"
    ],
    "genre": "爱情/奇幻"
  },
  {
    "id": "1213",
    "title": "老方法",
    "url": "./movie-1213.html",
    "cover": "./13.jpg",
    "oneLine": "最后一代老派牛仔拒绝使用手枪,只靠套索和左轮与贩卖军火的新式匪帮决一死战。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "复仇",
      "牛仔",
      "传统",
      "枪战"
    ],
    "genre": "西部/动作"
  },
  {
    "id": "1214",
    "title": "法证先锋5粤语",
    "url": "./movie-1214.html",
    "cover": "./14.jpg",
    "oneLine": "凶手每次行凶前都会给法证科寄一管DNA,而DNA竟全部来自三十年前一场殡仪馆大火中的无名骨灰。",
    "year": "2025",
    "type": "电视剧",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "法证",
      "连环案",
      "高智商犯罪",
      "粤语原声"
    ],
    "genre": "悬疑,犯罪"
  },
  {
    "id": "1215",
    "title": "提防小手",
    "url": "./movie-1215.html",
    "cover": "./15.jpg",
    "oneLine": "职业扒手师徒意外偷到一卷胶卷,被卷入黑帮追杀与警方卧底的漩涡。",
    "year": "1982",
    "type": "电影",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "洪金宝",
      "经典港片",
      "扒手",
      "成龙客串"
    ],
    "genre": "喜剧,动作,犯罪"
  },
  {
    "id": "1216",
    "title": "天地无限",
    "url": "./movie-1216.html",
    "cover": "./16.jpg",
    "oneLine": "四个在现代文明边缘挣扎的自由牧人,因为一头牛的价格和一个小镇的偏见,被迫举起枪对抗整个腐败的司法系统。",
    "year": "2003",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "牧场",
      "自由",
      "法治",
      "枪战"
    ],
    "genre": "西部,剧情"
  },
  {
    "id": "1217",
    "title": "密室艳尸",
    "url": "./movie-1217.html",
    "cover": "./17.jpg",
    "oneLine": "豪华公寓惊现一具艳尸,全身无伤,密室紧锁,唯一的线索是死者胃里的一枚五十年前的硬币。",
    "year": "2023",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "奇案",
      "香港",
      "重口味",
      "反转",
      "社会派"
    ],
    "genre": "惊悚/悬疑/犯罪"
  },
  {
    "id": "1218",
    "title": "忍冬玫瑰",
    "url": "./movie-1218.html",
    "cover": "./18.jpg",
    "oneLine": "民国二十三年,一位植物学女硕士嫁入香料世家,她每晚在花园种下的忍冬,正在一寸一寸毒死这家人。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "民国",
      "复仇",
      "植物",
      "宅斗",
      "虐恋"
    ],
    "genre": "爱情/悬疑/年代"
  },
  {
    "id": "1219",
    "title": "金枪客再闯鬼门关",
    "url": "./movie-1219.html",
    "cover": "./19.jpg",
    "oneLine": "金牌杀手死后被黑心道士复活,必须在七天内凑齐“阳寿三件套”,否则魂飞魄散。",
    "year": "2025",
    "type": "电影",
    "region": "香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "港式无厘头",
      "还魂",
      "黑帮",
      "枪战"
    ],
    "genre": "喜剧,动作,奇幻"
  },
  {
    "id": "1220",
    "title": "我的拳王男友",
    "url": "./movie-1220.html",
    "cover": "./20.jpg",
    "oneLine": "一个即将失明的街头拳手,为了能看见深爱的女孩穿婚纱的样子,决定在失明前打最后一场拳王争霸赛。",
    "year": "2025",
    "type": "电影",
    "region": "香港/中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "草根拳手",
      "失明",
      "逆袭",
      "励志燃情",
      "港式温情"
    ],
    "genre": "动作/爱情/励志"
  },
  {
    "id": "1221",
    "title": "神秘海域",
    "url": "./movie-1221.html",
    "cover": "./21.jpg",
    "oneLine": "足智多谋的内森·德雷克与冷血老手苏利文搭档,寻找麦哲伦失踪的黄金宝藏。",
    "year": "2022",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "游戏改编",
      "寻宝",
      "冒险",
      "幽默",
      "特效大片"
    ],
    "genre": "动作/冒险/寻宝"
  },
  {
    "id": "1222",
    "title": "莫洛事件",
    "url": "./movie-1222.html",
    "cover": "./22.jpg",
    "oneLine": "一个著名的电视台辟谣记者在调查“莫洛事件”时突然消失,只留下这份令人头皮发麻的剪辑素材。",
    "year": "2023",
    "type": "电影",
    "region": "英国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "伪记录",
      "超自然",
      "政府阴谋"
    ],
    "genre": "悬疑,科幻"
  },
  {
    "id": "1223",
    "title": "大侠霍元甲2020",
    "url": "./movie-1223.html",
    "cover": "./23.jpg",
    "oneLine": "新版霍元甲故事,聚焦他从一个鲁莽的津门武者,成长为心怀民族大义的一代宗师的完整心路。",
    "year": "2020",
    "type": "剧集",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "武术",
      "民族精神",
      "精武门",
      "传奇",
      "新编"
    ],
    "genre": "动作/剧情/传记"
  },
  {
    "id": "1224",
    "title": "灰姑娘的玻璃手机",
    "url": "./movie-1224.html",
    "cover": "./24.jpg",
    "oneLine": "外卖员捡到一部神奇的玻璃手机,拨通后接电话的竟是十年前当红男团的主唱,而对方说他是穿越来的。",
    "year": "2024",
    "type": "电影",
    "region": "中国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "现代童话",
      "身份错位",
      "科技奇缘"
    ],
    "genre": "爱情,奇幻,都市"
  },
  {
    "id": "1225",
    "title": "烈探粤语",
    "url": "./movie-1225.html",
    "cover": "./25.jpg",
    "oneLine": "会说粤语的华裔国际刑警孤身潜入香港黑帮,却发现亲弟弟是头号目标。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "卧底",
      "警匪",
      "拳拳到肉",
      "兄弟情"
    ],
    "genre": "动作,犯罪"
  },
  {
    "id": "1226",
    "title": "电台谋杀案",
    "url": "./movie-1226.html",
    "cover": "./26.jpg",
    "oneLine": "一档深夜电台直播中,主持人接到匿名电话称已杀死三人,下一目标就在演播室内。",
    "year": "2021",
    "type": "电影",
    "region": "英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "密室杀人",
      "电台",
      "复古",
      "反转",
      "声音推理"
    ],
    "genre": "悬疑/犯罪"
  },
  {
    "id": "1227",
    "title": "人造怪物",
    "url": "./movie-1227.html",
    "cover": "./27.jpg",
    "oneLine": "为了救绝症女儿,科学家父亲将自己改造成怪物,却发现解药需要吃掉另一个女儿。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "基因编辑",
      "伦理困境",
      "生物恐怖",
      "密室逃生"
    ],
    "genre": "科幻/惊悚"
  },
  {
    "id": "1228",
    "title": "非洲之王",
    "url": "./movie-1228.html",
    "cover": "./28.jpg",
    "oneLine": "一个破产的父亲谎称自己是非洲国王,带着孩子们去“领国”,结果却遇上了真正的酋长选举。",
    "year": "2007",
    "type": "电影",
    "region": "德国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "非洲旅行",
      "冒牌国王",
      "家庭和解",
      "乌龙事件",
      "酋长"
    ],
    "genre": "喜剧/家庭/冒险"
  },
  {
    "id": "1229",
    "title": "孕育心世界",
    "url": "./movie-1229.html",
    "cover": "./29.jpg",
    "oneLine": "三位身处不同阶层的准妈妈在产检时相识,携手面对生育带来的身体、家庭与职场的全方位崩塌。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "女性成长",
      "育儿",
      "职场",
      "现实主义",
      "治愈"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "1230",
    "title": "奇迹大大大",
    "url": "./movie-1230.html",
    "cover": "./30.jpg",
    "oneLine": "一张被当成废纸的藏宝图,让全城的大人小孩都陷入了一场“大大大”的闹剧。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "儿童探险",
      "寻宝",
      "乌龙",
      "小人物"
    ],
    "genre": "喜剧,冒险,家庭"
  },
  {
    "id": "1231",
    "title": "错嫁世子妃",
    "url": "./movie-1231.html",
    "cover": "./31.jpg",
    "oneLine": "庶女沈惊鸿替嫡姐嫁给了传闻中暴虐的靖安王,却发现新婚夜暴虐是演的,而自己女扮男装的过去也被王爷识破。",
    "year": "2022",
    "type": "剧集",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "替嫁",
      "先婚后爱",
      "朝堂",
      "女强"
    ],
    "genre": "古装/爱情/喜剧"
  },
  {
    "id": "1232",
    "title": "应召女郎",
    "url": "./movie-1232.html",
    "cover": "./32.jpg",
    "oneLine": "巴黎的深夜街头,一位白天是文学系学生的应召女郎,在客户身上找到了失踪妹妹的线索。",
    "year": "2019",
    "type": "电影",
    "region": "法国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "女性互助",
      "犯罪",
      "都市",
      "身份认同",
      "生存"
    ],
    "genre": "剧情,女性"
  },
  {
    "id": "1233",
    "title": "人民与国王",
    "url": "./movie-1233.html",
    "cover": "./33.jpg",
    "oneLine": "路易十六被推上断头台前最后七天,站在他身后的刽子手、教士、王后以及街头民众,各有各的正义。",
    "year": "2027",
    "type": "电影",
    "region": "法国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "法国大革命",
      "宫廷",
      "群像",
      "史诗"
    ],
    "genre": "历史剧情"
  },
  {
    "id": "1234",
    "title": "明天的记忆",
    "url": "./movie-1234.html",
    "cover": "./34.jpg",
    "oneLine": "每天醒来都会忘记昨天恋人的女孩,发现自己手上写着一个从不存在的电话号码。",
    "year": "2022",
    "type": "电影",
    "region": "中国台湾",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "失忆",
      "时间循环",
      "软科幻"
    ],
    "genre": "科幻,爱情,悬疑"
  },
  {
    "id": "1235",
    "title": "欲望号快车",
    "url": "./movie-1235.html",
    "cover": "./35.jpg",
    "oneLine": "未来社会,一辆自动驾驶快车允许乘客在车内进行“无后果欲望交易”,但某天乘客开始离奇失踪。",
    "year": "2024",
    "type": "电影",
    "region": "美国/德国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "自动驾驶",
      "欲望交易",
      "道德边界",
      "公路"
    ],
    "genre": "惊悚/情色/科幻"
  },
  {
    "id": "1236",
    "title": "夹心年代",
    "url": "./movie-1236.html",
    "cover": "./36.jpg",
    "oneLine": "四十岁的夫妻,上头四个老人重病,下头一个孩子“幼升小”,自己被裁员,成为被时代夹扁的“夹心人”。",
    "year": "2025",
    "type": "电视剧",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "中年危机",
      "三明治一代",
      "养老",
      "学区房"
    ],
    "genre": "家庭,剧情,社会"
  },
  {
    "id": "1237",
    "title": "湖妖",
    "url": "./movie-1237.html",
    "cover": "./37.jpg",
    "oneLine": "考古学家在干涸的湖底发现一具女尸,竟与自己每晚梦见的湖中新娘一模一样。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "民间传说",
      "水怪",
      "前世今生",
      "国风美学"
    ],
    "genre": "奇幻,爱情,惊悚"
  },
  {
    "id": "1238",
    "title": "田园交响曲",
    "url": "./movie-1238.html",
    "cover": "./38.jpg",
    "oneLine": "二战后,一位失明的钢琴天才与他在乡间疗养院遇到的神秘女病人,用音乐奏响了一段禁忌而炽烈的交响曲。",
    "year": "2025",
    "type": "电影",
    "region": "法国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "古典音乐",
      "师生恋",
      "战后创伤",
      "艺术与道德"
    ],
    "genre": "剧情/音乐/爱情"
  },
  {
    "id": "1239",
    "title": "愤怒的二十年代",
    "url": "./movie-1239.html",
    "cover": "./39.jpg",
    "oneLine": "1920年禁酒令生效,三个底层移民在这十年间用私酒和鲜血浇筑出地下帝国,也亲手将其埋葬。",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "禁酒令",
      "黑帮",
      "史诗",
      "群像",
      "HBO"
    ],
    "genre": "历史/犯罪/剧情"
  },
  {
    "id": "1240",
    "title": "命运之夜剧场版",
    "url": "./movie-1240.html",
    "cover": "./40.jpg",
    "oneLine": "在另一条时间线,卫宫士郎放弃理想成为冷酷的“正义之恶”,与远坂凛开启最绝望的圣杯之战。",
    "year": "2017",
    "type": "电影",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "圣杯战争",
      "平行世界",
      "黑暗",
      "打斗"
    ],
    "genre": "动画,奇幻,动作"
  },
  {
    "id": "1241",
    "title": "逃学英雄传",
    "url": "./movie-1241.html",
    "cover": "./41.jpg",
    "oneLine": "最年轻的警队王牌卧底进贵族高中查枪案,发现自己同桌就是黑帮少爷。",
    "year": "2024",
    "type": "电影",
    "region": "中国台湾",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "卧底警察",
      "高中",
      "黑帮少爷",
      "热血"
    ],
    "genre": "喜剧,校园,动作"
  },
  {
    "id": "1242",
    "title": "狂野吉他",
    "url": "./movie-1242.html",
    "cover": "./42.jpg",
    "oneLine": "一把烧焦的吉他,一张三十年前的演出海报,叛逆少年踏上替亡父完成摇滚绝唱的公路之旅。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "摇滚",
      "青春",
      "公路",
      "梦想",
      "父子"
    ],
    "genre": "剧情/音乐"
  },
  {
    "id": "1243",
    "title": "明天",
    "url": "./movie-1243.html",
    "cover": "./43.jpg",
    "oneLine": "科学家发明预知24小时的机器后,发现明天永远不会到来。",
    "year": "2025",
    "type": "电影",
    "region": "法国/德国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "时间循环",
      "悬疑",
      "哲学",
      "末日"
    ],
    "genre": "科幻/剧情"
  },
  {
    "id": "1244",
    "title": "痞子殿下粤语",
    "url": "./movie-1244.html",
    "cover": "./44.jpg",
    "oneLine": "一个市井混混被错认成失散多年的太子,入宫后发现满朝文武比他更不像话。",
    "year": "2022",
    "type": "电视剧",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "无厘头",
      "古装",
      "港式喜剧",
      "反转",
      "皇室"
    ],
    "genre": "喜剧,古装"
  },
  {
    "id": "1245",
    "title": "夜之门",
    "url": "./movie-1245.html",
    "cover": "./45.jpg",
    "oneLine": "巴黎一间旅馆的旋转门,推开后是不同年代的同一片夜空,三个伤心的灵魂在此相遇。",
    "year": "2023",
    "type": "电影",
    "region": "法国/比利时",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "时光旅馆",
      "战争亡灵",
      "遗憾",
      "二战",
      "超现实"
    ],
    "genre": "奇幻、爱情、历史"
  },
  {
    "id": "1246",
    "title": "流光之下",
    "url": "./movie-1246.html",
    "cover": "./46.jpg",
    "oneLine": "为了调查母亲冤案,失忆的豪门千金化身普通店员潜入自家钻石帝国,在敌人眼皮底下步步为营。",
    "year": "2026",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "钻石行业",
      "复仇",
      "女性成长"
    ],
    "genre": "剧情/商战"
  },
  {
    "id": "1247",
    "title": "血玫瑰",
    "url": "./movie-1247.html",
    "cover": "./47.jpg",
    "oneLine": "一座以玫瑰闻名的小镇,每一朵花的根系下都埋着一个献祭者的尸体。",
    "year": "2017",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "邪教",
      "复仇",
      "植物变异",
      "血腥"
    ],
    "genre": "恐怖/惊悚"
  },
  {
    "id": "1248",
    "title": "大春潮",
    "url": "./movie-1248.html",
    "cover": "./48.jpg",
    "oneLine": "在外打工二十年的老赵回村盖房,却意外挖出一具尸骨,整个村子的秘密开始崩塌。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "小镇",
      "返乡",
      "盖房",
      "黑色荒诞"
    ],
    "genre": "剧情,犯罪,黑色幽默"
  },
  {
    "id": "1249",
    "title": "兔子和蜥蜴",
    "url": "./movie-1249.html",
    "cover": "./49.jpg",
    "oneLine": "被瑞典夫妇收养的韩国女孩回到首尔寻找生母,却爱上一个在黑市倒卖蜥蜴的神秘男子。",
    "year": "2009",
    "type": "电影",
    "region": "韩国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "异国恋",
      "收养",
      "身份认同"
    ],
    "genre": "爱情"
  },
  {
    "id": "1250",
    "title": "大英雄郑成功",
    "url": "./movie-1250.html",
    "cover": "./50.jpg",
    "oneLine": "国姓爷郑成功从一文弱书生成长为海战枭雄,在国仇家恨与父子恩情中,决意收复台湾。",
    "year": "2004",
    "type": "剧集",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "民族英雄",
      "海战史诗",
      "明末清初"
    ],
    "genre": "历史传记"
  },
  {
    "id": "1251",
    "title": "低压槽:欲望之城",
    "url": "./movie-1251.html",
    "cover": "./51.jpg",
    "oneLine": "一个常年卧底在黑帮的警察,患上低压性抑郁症,在理智与疯狂的边缘,他选择用自己的方式审判这座欲望之城。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港/中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "卧底",
      "缉毒",
      "罪恶都市",
      "孤胆英雄",
      "人性"
    ],
    "genre": "犯罪、动作、悬疑"
  },
  {
    "id": "1252",
    "title": "传话人",
    "url": "./movie-1252.html",
    "cover": "./52.jpg",
    "oneLine": "一家神秘的“传话公司”,专门替那些来不及告别的人,说出他们死前最想说的那句话。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "临终关怀",
      "遗言传递",
      "单元故事",
      "催泪"
    ],
    "genre": "剧情、悬疑、奇幻"
  },
  {
    "id": "1253",
    "title": "吉祥赌坊",
    "url": "./movie-1253.html",
    "cover": "./53.jpg",
    "oneLine": "赌场里没有运气,只有数学,而她用高三的代数知识,赢了整个黑帮。",
    "year": "2023",
    "type": "电影",
    "region": "中国香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "赌博",
      "江湖",
      "女性",
      "反套路"
    ],
    "genre": "剧情/犯罪"
  },
  {
    "id": "1254",
    "title": "色情狂辣手摧花",
    "url": "./movie-1254.html",
    "cover": "./54.jpg",
    "oneLine": "一名摄影师专杀主动示爱的女人,因为他坚信“爱会让人变得丑陋”。",
    "year": "1975",
    "type": "电影",
    "region": "意大利",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "Giallo",
      "变态杀手",
      "情欲与暴力"
    ],
    "genre": "惊悚、铅黄、情色"
  },
  {
    "id": "1255",
    "title": "双重躯体",
    "url": "./movie-1255.html",
    "cover": "./55.jpg",
    "oneLine": "丈夫买了一个和自己一模一样的克隆体来陪妻子,克隆人却比本尊更懂她的孤独。",
    "year": "2025",
    "type": "电影",
    "region": "德国/奥地利",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "克隆人",
      "身份焦虑",
      "婚姻危机"
    ],
    "genre": "科幻,悬疑"
  },
  {
    "id": "1256",
    "title": "鬼驱人",
    "url": "./movie-1256.html",
    "cover": "./56.jpg",
    "oneLine": "单亲妈妈发现女儿被恶灵附身,教堂派来的驱魔师却似乎在刻意激怒那个“东西”。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "驱魔",
      "恶灵",
      "家庭",
      "惊悚",
      "宗教"
    ],
    "genre": "恐怖"
  },
  {
    "id": "1257",
    "title": "我们全村都不是人",
    "url": "./movie-1257.html",
    "cover": "./57.jpg",
    "oneLine": "摄影师探访云南深山古村,发现村民白天是活人,午夜零点后会集体变成纸扎人,而他拍下的照片开始自燃。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "民俗",
      "诡异",
      "反转"
    ],
    "genre": "悬疑,惊悚"
  },
  {
    "id": "1258",
    "title": "有法无天",
    "url": "./movie-1258.html",
    "cover": "./58.jpg",
    "oneLine": "一位精英律师为黑帮洗白,他的警察弟弟誓要将他绳之以法,兄弟对决中却发现两人都是棋子。",
    "year": "2024",
    "type": "剧集",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "港剧",
      "黑帮",
      "律师",
      "双雄",
      "枪战"
    ],
    "genre": "犯罪/律政/动作"
  },
  {
    "id": "1259",
    "title": "百分百感觉",
    "url": "./movie-1259.html",
    "cover": "./59.jpg",
    "oneLine": "一款“情感共享”APP让用户能同步暗恋对象的五感,社恐女孩成为内侧用户后,发现暗恋的学长浑身都是痛觉。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "感官同步",
      "试爱体验",
      "都市童话"
    ],
    "genre": "爱情,喜剧,科幻"
  },
  {
    "id": "1260",
    "title": "英雄堡争夺战",
    "url": "./movie-1260.html",
    "cover": "./60.jpg",
    "oneLine": "明朝末年,五十名残兵据守一座边关废弃堡垒,对抗两万叛军,只为拖延一夜时间。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "攻城战",
      "冷兵器",
      "孤军",
      "忠义"
    ],
    "genre": "动作/战争/古装"
  },
  {
    "id": "1261",
    "title": "神龙特技队",
    "url": "./movie-1261.html",
    "cover": "./61.jpg",
    "oneLine": "五个被大剧组开除的特技替身,自己组建了一支不要命的草台班子。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "特技演员",
      "行业剧",
      "车戏",
      "兄弟情"
    ],
    "genre": "动作励志"
  },
  {
    "id": "1262",
    "title": "乘胜狙击国语",
    "url": "./movie-1262.html",
    "cover": "./62.jpg",
    "oneLine": "赌王传人被诬陷入狱,出狱后联手各路老千,对昔日的兄弟展开高科技赌局复仇。",
    "year": "2017",
    "type": "电视剧",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "赌术",
      "复仇",
      "千门八将",
      "豪门"
    ],
    "genre": "剧情/犯罪/悬疑"
  },
  {
    "id": "1263",
    "title": "勇士还活着",
    "url": "./movie-1263.html",
    "cover": "./63.jpg",
    "oneLine": "一位被宣告死亡的摔跤冠军,整容后伪装成蒙古的“神秘选手”,回到祖国参加亚运会,只为亲手击败陷害自己的徒弟。",
    "year": "2024",
    "type": "电影",
    "region": "印度",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "摔跤",
      "伪造死亡",
      "跨国复仇",
      "体育精神",
      "父子"
    ],
    "genre": "动作/剧情/运动"
  },
  {
    "id": "1264",
    "title": "终极蜘蛛侠第二季",
    "url": "./movie-1264.html",
    "cover": "./64.jpg",
    "oneLine": "蜘蛛侠被卷入平行宇宙危机,必须集结不同时空的自己,才能阻止反派彻底撕碎现实。",
    "year": "2024",
    "type": "动画剧集",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "超级英雄",
      "多元宇宙",
      "少年成长",
      "高速战斗",
      "共生体"
    ],
    "genre": "动作/科幻/冒险"
  },
  {
    "id": "1265",
    "title": "暴走财神2",
    "url": "./movie-1265.html",
    "cover": "./65.jpg",
    "oneLine": "实习财神为了转正,被派去绑定一个只想躺平的废柴,却发现这个人竟是自己的前世债主。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "财神",
      "网络电影",
      "暴走",
      "搞笑",
      "神魔"
    ],
    "genre": "喜剧,奇幻"
  },
  {
    "id": "1266",
    "title": "变身机长",
    "url": "./movie-1266.html",
    "cover": "./66.jpg",
    "oneLine": "怕高的快递员一觉醒来发现自己成了国际航班的机长,而飞机正在遭遇雷暴。",
    "year": "2021",
    "type": "电影",
    "region": "韩国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "变身",
      "民航",
      "爆笑",
      "身份错位",
      "紧急迫降"
    ],
    "genre": "喜剧/奇幻"
  },
  {
    "id": "1267",
    "title": "渚北谜案",
    "url": "./movie-1267.html",
    "cover": "./67.jpg",
    "oneLine": "北方沿海小镇十年内发生七起红衣女子失踪案,新任女刑警队长发现,所有被害人死前都网购过同一家店的“幸运绳”。",
    "year": "2023",
    "type": "剧集",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "连环杀人",
      "沿海小镇",
      "女性被害",
      "本格推理"
    ],
    "genre": "悬疑,刑侦,犯罪"
  },
  {
    "id": "1268",
    "title": "尼罗王与妖姬",
    "url": "./movie-1268.html",
    "cover": "./68.jpg",
    "oneLine": "现代女考古学家被一枚圣甲虫戒指拖回三千年前,成了传说中蛊惑尼罗王的妖姬。",
    "year": "2025",
    "type": "电影",
    "region": "中国台湾/美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "穿越",
      "古埃及",
      "转世",
      "阴谋"
    ],
    "genre": "奇幻/爱情"
  },
  {
    "id": "1269",
    "title": "旋风魔术师第二季",
    "url": "./movie-1269.html",
    "cover": "./69.jpg",
    "oneLine": "第一季结尾消失的天才魔术师突然回归,却发现每个魔术都真的会伤人,而幕后黑手是十年前“被烧死”的师叔。",
    "year": "2025",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "魔术对决",
      "超能力",
      "剧场谜案"
    ],
    "genre": "奇幻/悬疑/青春"
  },
  {
    "id": "1270",
    "title": "阳关道",
    "url": "./movie-1270.html",
    "cover": "./70.jpg",
    "oneLine": "一条通往西域的废弃古道上,四组毫不相干的人,因为一具尸体和一箱比特币,陷入了一场杀机四伏的连环局。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "西部",
      "公路",
      "犯罪",
      "荒诞"
    ],
    "genre": "悬疑,犯罪"
  },
  {
    "id": "1271",
    "title": "血溅小楼破碎心",
    "url": "./movie-1271.html",
    "cover": "./71.jpg",
    "oneLine": "一栋民国小楼里死了七个人,每个人都称自己为“破碎的心”,而凶手,是第八颗“心”。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "密室杀人",
      "暴风雪山庄",
      "全员嫌疑",
      "本格推理"
    ],
    "genre": "悬疑,剧情,犯罪"
  },
  {
    "id": "1272",
    "title": "了不起的薄伽丘",
    "url": "./movie-1272.html",
    "cover": "./72.jpg",
    "oneLine": "黑死病肆虐期间,薄伽丘被迫给一群粗鲁的土匪讲故事保命,却意外拼凑出了《十日谈》。",
    "year": "2024",
    "type": "电影",
    "region": "意大利/法国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "文艺",
      "戏中戏",
      "瘟疫题材",
      "人性"
    ],
    "genre": "剧情,喜剧,历史"
  },
  {
    "id": "1273",
    "title": "乜代宗师国语",
    "url": "./movie-1273.html",
    "cover": "./73.jpg",
    "oneLine": "过气功夫明星为还债开网约车,意外接到真宗师,被迫重拾“乜代”招牌。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "功夫",
      "反讽",
      "师徒",
      "市井"
    ],
    "genre": "喜剧,动作"
  },
  {
    "id": "1274",
    "title": "树木葬",
    "url": "./movie-1274.html",
    "cover": "./74.jpg",
    "oneLine": "一家推崇“树木葬”的环保殡葬公司,被揭发将未死的活人封入树脂棺材充当“养分”。",
    "year": "2016",
    "type": "电影",
    "region": "韩国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "环保恐怖",
      "邪教",
      "活埋"
    ],
    "genre": "悬疑,恐怖,伦理"
  },
  {
    "id": "1275",
    "title": "柯盼旅馆",
    "url": "./movie-1275.html",
    "cover": "./75.jpg",
    "oneLine": "坐落在生与死之间的柯盼旅馆里,每个住客都有一周时间决定:是彻底消失,还是用别人的寿命继续活下去。",
    "year": "2027",
    "type": "剧集",
    "region": "意大利",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "边境旅馆",
      "死者中转站",
      "复古美学",
      "人性考验"
    ],
    "genre": "悬疑/奇幻/剧情"
  },
  {
    "id": "1276",
    "title": "科南",
    "url": "./movie-1276.html",
    "cover": "./76.jpg",
    "oneLine": "三百万年前,一名被驱逐的原始人男孩科南在沙漠中遇到了第一个“看不见的朋友”,人类历史上首个虚构故事就此诞生。",
    "year": "2024",
    "type": "动画电影",
    "region": "法国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "原始人",
      "语言诞生",
      "想象生物",
      "无对白"
    ],
    "genre": "奇幻、冒险、哲学"
  },
  {
    "id": "1277",
    "title": "煤油灯",
    "url": "./movie-1277.html",
    "cover": "./77.jpg",
    "oneLine": "独立女性嫁入富豪家族后,家里的煤油灯总是无故晃动,丈夫声称是她产生了幻觉,直到她在老仆人帮助下发现墙里藏着窃听器和毒药。",
    "year": "2025",
    "type": "电影",
    "region": "印度",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "心理操控",
      "精神控制",
      "女性觉醒",
      "复仇"
    ],
    "genre": "悬疑,惊悚,剧情"
  },
  {
    "id": "1278",
    "title": "亲爱的药王大人第二季",
    "url": "./movie-1278.html",
    "cover": "./78.jpg",
    "oneLine": "药王大人为了救回灰飞烟灭的小药童,甘愿堕入轮回,在凡间经历九世情劫,只为换她一次重生。",
    "year": "2025",
    "type": "网络剧",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "续集",
      "仙侠",
      "虐甜",
      "逆袭"
    ],
    "genre": "古装/奇幻/甜宠"
  },
  {
    "id": "1279",
    "title": "月老传之幽冥绝",
    "url": "./movie-1279.html",
    "cover": "./79.jpg",
    "oneLine": "月老实习生违规牵了一条冥界红线,害得自己跟一个女鬼绑定了三生三世。",
    "year": "2021",
    "type": "网络电影",
    "region": "中国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "月老",
      "冥婚",
      "三世情缘",
      "地府"
    ],
    "genre": "奇幻/爱情"
  },
  {
    "id": "1280",
    "title": "少男情事",
    "url": "./movie-1280.html",
    "cover": "./80.jpg",
    "oneLine": "1999年台南小镇,两个高考落榜的男生在废弃戏院里发现了一卷胶片,里面拍的是他们十年后的生活。",
    "year": "2024",
    "type": "电影",
    "region": "中国台湾",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "小镇",
      "成长",
      "秘密"
    ],
    "genre": "剧情,同性,青春"
  },
  {
    "id": "1281",
    "title": "昨夜泪痕干",
    "url": "./movie-1281.html",
    "cover": "./81.jpg",
    "oneLine": "离婚后的中年男人带着患阿尔茨海默症的母亲回到故乡小镇,在清理老宅时发现了母亲年轻时从未寄出的情书。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "离婚",
      "中年",
      "返乡",
      "和解"
    ],
    "genre": "文艺/家庭"
  },
  {
    "id": "1282",
    "title": "我跟踪猫",
    "url": "./movie-1282.html",
    "cover": "./82.jpg",
    "oneLine": "一个社恐程序员跟踪一只流浪猫,意外发现了在城市缝隙中藏匿的“猫的平行时空”。",
    "year": "2025",
    "type": "动画电影",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "猫奴",
      "都市传说",
      "时空错位",
      "孤独"
    ],
    "genre": "奇幻/治愈/都市"
  },
  {
    "id": "1283",
    "title": "星掠者",
    "url": "./movie-1283.html",
    "cover": "./83.jpg",
    "oneLine": "在垃圾星球上捡破烂的少年,意外捡到了全宇宙悬赏最高的“星掠者”的核心芯片。",
    "year": "2020",
    "type": "动画",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "机甲战斗",
      "宇宙冒险",
      "赏金猎人",
      "反乌托邦"
    ],
    "genre": "科幻"
  },
  {
    "id": "1284",
    "title": "极地爱恋",
    "url": "./movie-1284.html",
    "cover": "./84.jpg",
    "oneLine": "两个因创伤而自我放逐的人,在极夜中相遇,用爱与勇气对抗零下四十度。",
    "year": "2026",
    "type": "电影",
    "region": "挪威",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "极圈生存",
      "酷寒救赎",
      "缓慢深情"
    ],
    "genre": "爱情,剧情,冒险"
  },
  {
    "id": "1285",
    "title": "彩虹艳尽半边天",
    "url": "./movie-1285.html",
    "cover": "./85.jpg",
    "oneLine": "七位不同年龄、不同遭遇的黑人女性坐在美发沙龙里,用诗的语言讲述性侵、家暴与歧视,最终拼凑出完整的“彩虹”。",
    "year": "2010",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "非裔",
      "诗歌",
      "群像",
      "自我救赎"
    ],
    "genre": "剧情,女性"
  },
  {
    "id": "1286",
    "title": "野侠游鸾",
    "url": "./movie-1286.html",
    "cover": "./86.jpg",
    "oneLine": "被当作灾星赶出师门的少女习得野狐仙术,骑着一只神话巨鸟游鸾,回来对抗掀起腥风血雨的伪君子盟主。",
    "year": "2028",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "女性武侠",
      "妖侠",
      "江湖",
      "复仇",
      "水墨"
    ],
    "genre": "武侠,奇幻,古装"
  },
  {
    "id": "1287",
    "title": "森林争夺战",
    "url": "./movie-1287.html",
    "cover": "./87.jpg",
    "oneLine": "为了守护百年森林,一群孩子和会说人话的动物,对抗地产商的推土机。",
    "year": "2025",
    "type": "电影",
    "region": "英国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "环保",
      "动物",
      "真人动画"
    ],
    "genre": "冒险,家庭"
  },
  {
    "id": "1288",
    "title": "神圣电视台",
    "url": "./movie-1288.html",
    "cover": "./88.jpg",
    "oneLine": "一个濒临倒闭的电视购物频道,主播们意外发现午夜售卖的商品真的能召唤出超自然力量。",
    "year": "2023",
    "type": "电视剧",
    "region": "西班牙",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "电视购物",
      "邪教",
      "超自然",
      "黑色喜剧",
      "媒体批判"
    ],
    "genre": "剧情,奇幻,讽刺"
  },
  {
    "id": "1289",
    "title": "黑板",
    "url": "./movie-1289.html",
    "cover": "./89.jpg",
    "oneLine": "在战火纷飞的库尔德边境,一群老师背着黑板四处寻找学生,每块黑板都是一座移动的学校。",
    "year": "2024",
    "type": "电影",
    "region": "伊朗/法国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "教育",
      "战争与儿童",
      "诗意现实主义",
      "边境",
      "希望"
    ],
    "genre": "剧情/战争"
  },
  {
    "id": "1290",
    "title": "海的盖子",
    "url": "./movie-1290.html",
    "cover": "./90.jpg",
    "oneLine": "厌倦都市的年轻厨师回到海边的老家,试图用一碗汤重新盖住记忆中破碎家庭的裂缝。",
    "year": "2025",
    "type": "剧集",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "海边",
      "料理",
      "慢生活",
      "成长"
    ],
    "genre": "剧情/治愈"
  },
  {
    "id": "1291",
    "title": "突然变异",
    "url": "./movie-1291.html",
    "cover": "./91.jpg",
    "oneLine": "一个普通青年突然变异成鱼人,资本想把他做成刺身,媒体想把他捧成网红,只有他爸想把他送去高考。",
    "year": "2024",
    "type": "电影",
    "region": "韩国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "人体变异",
      "资本游戏",
      "媒体狂欢",
      "荒诞主义"
    ],
    "genre": "科幻,剧情,黑色幽默"
  },
  {
    "id": "1292",
    "title": "听见寂静",
    "url": "./movie-1292.html",
    "cover": "./92.jpg",
    "oneLine": "一个完全失聪的男人,靠看波形图指挥交响乐团,震惊世界。",
    "year": "2024",
    "type": "电影",
    "region": "英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "失聪指挥家",
      "逆袭",
      "真实改编"
    ],
    "genre": "剧情/音乐"
  },
  {
    "id": "1293",
    "title": "我的非凡父母",
    "url": "./movie-1293.html",
    "cover": "./93.jpg",
    "oneLine": "一对患有智力障碍的夫妇,如何养育出一个考上名校的女儿。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "亲情",
      "特殊家庭",
      "成长",
      "温情",
      "真实故事"
    ],
    "genre": "家庭,剧情"
  },
  {
    "id": "1294",
    "title": "奇异世界",
    "url": "./movie-1294.html",
    "cover": "./94.jpg",
    "oneLine": "在一颗地底全是巨型有机生命体的星球上,探险家父子必须靠和解来防止整个生态系统崩溃。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "异星生态",
      "父子探险",
      "视觉奇观"
    ],
    "genre": "冒险/科幻/家庭"
  },
  {
    "id": "1295",
    "title": "解密2024",
    "url": "./movie-1295.html",
    "cover": "./95.jpg",
    "oneLine": "2046年,警方用脑机接口进入植物人凶手的记忆中寻找受害者,却发现自己也被困住了。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "脑机接口",
      "连环杀人",
      "记忆解码",
      "硬科幻",
      "反转"
    ],
    "genre": "悬疑/犯罪/科幻"
  },
  {
    "id": "1296",
    "title": "下地狱向左转",
    "url": "./movie-1296.html",
    "cover": "./96.jpg",
    "oneLine": "一辆抛锚的汽车,一个诡异的加油站,路标写着“地狱向左转”,而右转是死路。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "公路恐怖",
      "心理扭曲",
      "地狱幻象",
      "邪教"
    ],
    "genre": "恐怖/悬疑"
  },
  {
    "id": "1297",
    "title": "超人4:和平任务",
    "url": "./movie-1297.html",
    "cover": "./97.jpg",
    "oneLine": "超人受命去外星球执行和平任务,却发现所谓的和平是建立在对另一个种族的灭绝之上。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "超级英雄",
      "反战",
      "道德困境"
    ],
    "genre": "动作,科幻,冒险"
  },
  {
    "id": "1298",
    "title": "少年巴比伦2024",
    "url": "./movie-1298.html",
    "cover": "./98.jpg",
    "oneLine": "1994年与2024年两条时间线交错,两代人在同一座工厂里寻找青春的答案。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "年代感",
      "工厂青春",
      "怀旧",
      "成长"
    ],
    "genre": "剧情,青春"
  },
  {
    "id": "1299",
    "title": "沉默的证人",
    "url": "./movie-1299.html",
    "cover": "./99.jpg",
    "oneLine": "法医在一具尸体上发现了连环凶杀案的铁证,但那具尸体正坐在被告席上,活生生地看着他。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "法医",
      "连环凶杀",
      "庭审反转",
      "证据链"
    ],
    "genre": "犯罪、悬疑、法律"
  },
  {
    "id": "1300",
    "title": "异常睡眠",
    "url": "./movie-1300.html",
    "cover": "./100.jpg",
    "oneLine": "七名严重失眠症患者参加一种新型睡眠疗法,却集体陷入一个相同的噩梦,且梦中的伤疤会出现在现实的身体上。",
    "year": "2025",
    "type": "电影",
    "region": "英国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "梦境入侵",
      "睡眠实验",
      "身体恐怖",
      "克苏鲁"
    ],
    "genre": "科幻/恐怖"
  },
  {
    "id": "1301",
    "title": "阿达一族",
    "url": "./movie-1301.html",
    "cover": "./101.jpg",
    "oneLine": "六十年代香港徙置区,一个姓“阿达”的草根家族有十个孩子,每人性格迥异,天天上演鸡飞狗跳的生存大作战。",
    "year": "1993",
    "type": "剧集",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "怀旧",
      "粤语长片质感",
      "草根家族",
      "街坊情谊"
    ],
    "genre": "家庭喜剧"
  },
  {
    "id": "1302",
    "title": "爱琳",
    "url": "./movie-1302.html",
    "cover": "./102.jpg",
    "oneLine": "女孩爱琳失踪十年后归来,所有人都在庆祝,只有她的姐姐发现:这个“爱琳”是假的。",
    "year": "2028",
    "type": "剧集",
    "region": "英国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "替身",
      "心理操控",
      "小镇秘密",
      "女性视角",
      "层层反转"
    ],
    "genre": "悬疑/惊悚/心理"
  },
  {
    "id": "1303",
    "title": "悲惨世界1958国语",
    "url": "./movie-1303.html",
    "cover": "./103.jpg",
    "oneLine": "1958年经典版《悲惨世界》首次国语配音重制,冉阿让的银幕灵魂被汉语重新唤醒。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆/法国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "黑白修复",
      "上译配音",
      "经典重制",
      "底层苦难",
      "正义与救赎"
    ],
    "genre": "历史/剧情/名著改编"
  },
  {
    "id": "1304",
    "title": "神鬼劫案:瞒天过海",
    "url": "./movie-1304.html",
    "cover": "./104.jpg",
    "oneLine": "一桩完美劫案被“鬼魂”打破:劫匪发现他们要偷的东西,是警方为钓鱼执法的假文物,而真正的国宝早已被调包。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "警匪",
      "骗局",
      "反转",
      "烧脑"
    ],
    "genre": "动作,犯罪,悬疑"
  },
  {
    "id": "1305",
    "title": "吸血少女大战少女弗兰肯",
    "url": "./movie-1305.html",
    "cover": "./105.jpg",
    "oneLine": "吸血鬼JK与科学怪人女高生被迫组队,为了抢回期末考试答案展开大乱斗。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "少女",
      "血腥",
      "搞笑",
      "怪物大战",
      "校园"
    ],
    "genre": "动作,恐怖,青春,奇幻"
  },
  {
    "id": "1306",
    "title": "一代天骄成吉思汗",
    "url": "./movie-1306.html",
    "cover": "./106.jpg",
    "oneLine": "没有聚焦铁木真的征战史,而是拍了他生命中最耻辱的十天——被泰赤乌人俘虏,戴着木枷像狗一样跪在仇人面前。",
    "year": "2025",
    "type": "电影",
    "region": "蒙古/中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "战争",
      "草原",
      "权力",
      "人性",
      "视觉奇观"
    ],
    "genre": "史诗传记"
  },
  {
    "id": "1307",
    "title": "神秘宝盒",
    "url": "./movie-1307.html",
    "cover": "./107.jpg",
    "oneLine": "爷爷去世后留下七个盒子,只有解开所有谜题的人才能继承他真正的遗产。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "遗产",
      "成长",
      "治愈"
    ],
    "genre": "奇幻/家庭/冒险"
  },
  {
    "id": "1308",
    "title": "羔羊大律师",
    "url": "./movie-1308.html",
    "cover": "./108.jpg",
    "oneLine": "法援署的废柴律师为了给智力障碍的“杀人犯”脱罪,不得不向昔日的死对头——豪门御用大律师求助。",
    "year": "2024",
    "type": "剧集",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "法援",
      "弱势群体",
      "程序正义",
      "双男主"
    ],
    "genre": "律政/悬疑/犯罪"
  },
  {
    "id": "1309",
    "title": "露西亚的圣诞愿望",
    "url": "./movie-1309.html",
    "cover": "./109.jpg",
    "oneLine": "圣诞节前夕,一个失去母亲的七岁女孩向圣诞老人许愿,希望得到一个“新妈妈”,而她父亲的新同事恰好出现了。",
    "year": "2018",
    "type": "电影",
    "region": "北欧 (瑞典/丹麦)",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "圣诞",
      "治愈",
      "亲情"
    ],
    "genre": "家庭,奇幻"
  },
  {
    "id": "1310",
    "title": "超极限",
    "url": "./movie-1310.html",
    "cover": "./110.jpg",
    "oneLine": "在近未来,足球运动员都操纵着巨型机甲进行比赛,一个失去双腿的天才少年,用脑机接口驾驶机甲,向世界宣告他还能踢。",
    "year": "2021",
    "type": "动画电影",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "机甲",
      "足球",
      "热血",
      "竞技",
      "2D作画"
    ],
    "genre": "科幻,动作,体育"
  },
  {
    "id": "1311",
    "title": "光之雨",
    "url": "./movie-1311.html",
    "cover": "./111.jpg",
    "oneLine": "一个能看见“雨的颜色”的女孩,与一个能听见“光的形状”的盲人少年相遇。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "治愈",
      "时空交错",
      "视觉诗意",
      "命运"
    ],
    "genre": "奇幻,爱情,剧情"
  },
  {
    "id": "1312",
    "title": "欢迎来到南方",
    "url": "./movie-1312.html",
    "cover": "./112.jpg",
    "oneLine": "刻板的米兰经理被流放到那不勒斯,他以为到了黑手党窝点,却发现这里是人间天堂。",
    "year": "2025",
    "type": "电影",
    "region": "意大利",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "移民",
      "文化冲突",
      "温情"
    ],
    "genre": "喜剧"
  },
  {
    "id": "1313",
    "title": "号角震天",
    "url": "./movie-1313.html",
    "cover": "./113.jpg",
    "oneLine": "二战中,一群被歧视的黑人士兵组成了一支号角队,他们要用音乐和鲜血证明自己的价值。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "二战",
      "黑人士兵",
      "号手",
      "荣誉",
      "种族"
    ],
    "genre": "战争,剧情,历史"
  },
  {
    "id": "1314",
    "title": "大都会2012",
    "url": "./movie-1314.html",
    "cover": "./114.jpg",
    "oneLine": "2012年12月21日,传说中的世界末日,纽约城中不同阶层的七个人,在这一天经历了命运的交织与巨变。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "末日",
      "玛雅预言",
      "华尔街",
      "群像"
    ],
    "genre": "剧情,科幻"
  },
  {
    "id": "1315",
    "title": "赛格描绘天空",
    "url": "./movie-1315.html",
    "cover": "./115.jpg",
    "oneLine": "藏区少年赛格得到一盒过期水彩,他决定把整片天空画成从未见过的颜色。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "留守儿童",
      "梦想",
      "乡村",
      "治愈"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "1316",
    "title": "吓到笑",
    "url": "./movie-1316.html",
    "cover": "./116.jpg",
    "oneLine": "新加坡骨灰级“鬼故事接龙”夜谈节目停播十年后,原班人马被同一只笑面鬼邀请重聚,继续讲完未完成的故事。",
    "year": "2017",
    "type": "电影",
    "region": "新加坡",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "南洋民俗",
      "黑色幽默",
      "报应循环",
      "都市传说",
      "分段式"
    ],
    "genre": "恐怖,喜剧,惊悚"
  },
  {
    "id": "1317",
    "title": "地才",
    "url": "./movie-1317.html",
    "cover": "./117.jpg",
    "oneLine": "一个没有天赋的少年凭借苦练考入顶级音乐学院,却发现他的老师正在培养他来“复活”死去的天才儿子。",
    "year": "2018",
    "type": "电影",
    "region": "中国台湾",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "古典乐",
      "天赋",
      "替代性创伤",
      "师生"
    ],
    "genre": "剧情/音乐/传记"
  },
  {
    "id": "1318",
    "title": "系统",
    "url": "./movie-1318.html",
    "cover": "./118.jpg",
    "oneLine": "一款将城市管理变成RPG游戏的“系统”上线后,所有市民成了玩家,而唯一的通关条件是——有人死亡。",
    "year": "2027",
    "type": "剧集",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "虚拟现实",
      "游戏化管理",
      "社会实验",
      "反抗"
    ],
    "genre": "科幻悬疑"
  },
  {
    "id": "1319",
    "title": "黄飞鸿系列之铁胆梁宽粤语",
    "url": "./movie-1319.html",
    "cover": "./119.jpg",
    "oneLine": "梁宽在师父黄飞鸿离粤期间,独自扛起宝芝林招牌,却卷入了一场洋人策划的瘟疫阴谋。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "黄飞鸿",
      "梁宽",
      "粤语原声",
      "师徒"
    ],
    "genre": "动作武侠"
  },
  {
    "id": "1320",
    "title": "兄长,我是鹅不是天鹅",
    "url": "./movie-1320.html",
    "cover": "./120.jpg",
    "oneLine": "一只意外被点化成精的鹅,被上仙误认成失踪的白天鹅女神,从此开始了啼笑皆非的仙侠职场生涯。",
    "year": "2025",
    "type": "电视剧/古装仙侠",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "仙侠",
      "替身文学",
      "沙雕甜宠",
      "真香定律",
      "自我认知"
    ],
    "genre": "喜剧/爱情/奇幻"
  },
  {
    "id": "1321",
    "title": "战地鹃声",
    "url": "./movie-1321.html",
    "cover": "./121.jpg",
    "oneLine": "一名伦敦女记者只身潜入被纳粹占领的法国村庄,她唯一的武器是一台改造成发报机的留声机和杜鹃鸟的叫声。",
    "year": "1942",
    "type": "电影",
    "region": "英国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "二战",
      "战地记者",
      "女性视角",
      "黑白电影"
    ],
    "genre": "战争/剧情/历史"
  },
  {
    "id": "1322",
    "title": "厨缘",
    "url": "./movie-1322.html",
    "cover": "./122.jpg",
    "oneLine": "个性叛逆的西餐厨师长因一次意外失忆,被一位做路边摊的老人收留,并重新找回了中华美食的根。",
    "year": "2016",
    "type": "剧集",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "美食",
      "代际冲突",
      "传承",
      "师徒"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "1323",
    "title": "大西洋号角",
    "url": "./movie-1323.html",
    "cover": "./123.jpg",
    "oneLine": "1942年大西洋,没有军舰护航的商船队面对“狼群”潜艇,每一声号角都是遗言。",
    "year": "2025",
    "type": "剧集",
    "region": "英国/美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "二战",
      "大西洋海战",
      "商船队",
      "人性考验"
    ],
    "genre": "历史/战争/灾难"
  },
  {
    "id": "1324",
    "title": "团结起来到明天",
    "url": "./movie-1324.html",
    "cover": "./124.jpg",
    "oneLine": "1998年国企改制浪潮中,五个来自同一车间的工人决定合伙开一家私人机械维修厂。",
    "year": "2022",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "时代群像",
      "创业",
      "工人阶级"
    ],
    "genre": "剧情"
  },
  {
    "id": "1325",
    "title": "胯下运球",
    "url": "./movie-1325.html",
    "cover": "./125.jpg",
    "oneLine": "身高158的县城理发师为追女神苦练“胯下运球”,却意外成为野球场鬼手传球王。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "矮个子",
      "街球",
      "逆袭"
    ],
    "genre": "喜剧/运动"
  },
  {
    "id": "1326",
    "title": "洛杉矶之战",
    "url": "./movie-1326.html",
    "cover": "./126.jpg",
    "oneLine": "外星舰队瘫痪全球电力后,一支海军陆战队菜鸟排必须在沦陷的洛杉矶存活72小时。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "外星入侵",
      "巷战",
      "硬核军事",
      "生存"
    ],
    "genre": "动作,科幻,战争"
  },
  {
    "id": "1327",
    "title": "哎呀好身材第二季",
    "url": "./movie-1327.html",
    "cover": "./127.jpg",
    "oneLine": "减肥不存在的,这是一档明星们用尽各种借口逃避健身的大型真香现场。",
    "year": "2020",
    "type": "综艺",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "减肥",
      "观察类",
      "明星",
      "健康"
    ],
    "genre": "真人秀,生活"
  },
  {
    "id": "1328",
    "title": "叠影狙击",
    "url": "./movie-1328.html",
    "cover": "./128.jpg",
    "oneLine": "特警队长发现正在执行秘密任务的竟是自己的双胞胎弟弟,而弟弟早已被杀手取代。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "双胞胎",
      "替身",
      "警匪",
      "高科技犯罪",
      "反杀"
    ],
    "genre": "动作、悬疑、犯罪"
  },
  {
    "id": "1329",
    "title": "失忆造马王",
    "url": "./movie-1329.html",
    "cover": "./129.jpg",
    "oneLine": "失忆的职业“造马师”被黑帮老大误认成女儿的家庭教师,他只好一边教书一边毁掉自己的“犯罪证据”。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "赛马",
      "黑帮",
      "失忆",
      "冒牌货"
    ],
    "genre": "喜剧/犯罪/运动"
  },
  {
    "id": "1330",
    "title": "赵尚志智取五常堡",
    "url": "./movie-1330.html",
    "cover": "./130.jpg",
    "oneLine": "三十人打五百人,英雄不是靠人多,是靠脑子。",
    "year": "1991",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "抗日",
      "智斗",
      "东北抗联"
    ],
    "genre": "战争、历史、动作"
  },
  {
    "id": "1331",
    "title": "夺命鸳殃",
    "url": "./movie-1331.html",
    "cover": "./131.jpg",
    "oneLine": "一对情侣为了还债假扮“雌雄大盗”,却意外被全港黑帮误认为是传说中的金牌杀手“神雕侠侣”。",
    "year": "1996",
    "type": "电影",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "杀手",
      "鸳鸯大盗",
      "乌龙",
      "港式幽默",
      "黑帮"
    ],
    "genre": "喜剧,犯罪"
  },
  {
    "id": "1332",
    "title": "爆烈之城",
    "url": "./movie-1332.html",
    "cover": "./132.jpg",
    "oneLine": "这座智能城市每24小时会“爆破”一次贫民窟,以清除低端人口。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "反乌托邦",
      "义体人",
      "城市爆破",
      "极限跑酷"
    ],
    "genre": "动作,科幻"
  },
  {
    "id": "1333",
    "title": "登陆安琪奥",
    "url": "./movie-1333.html",
    "cover": "./133.jpg",
    "oneLine": "二战安琪奥登陆战中,一名美军医护兵在德军狙击手的瞄准镜下,被迫选择是救人还是引爆炸药包。",
    "year": "2025",
    "type": "电影",
    "region": "意大利",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "二战",
      "登陆战",
      "人性考验"
    ],
    "genre": "战争历史"
  },
  {
    "id": "1334",
    "title": "嗜谎之神",
    "url": "./movie-1334.html",
    "cover": "./134.jpg",
    "oneLine": "一个神秘App上线,声称能100%测谎,所有撒过谎的人将在72小时内陆续惨死。",
    "year": "2028",
    "type": "剧集",
    "region": "韩国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "测谎",
      "神罚",
      "连环杀手",
      "陪审团"
    ],
    "genre": "悬疑/奇幻/犯罪"
  },
  {
    "id": "1335",
    "title": "慈禧秘密生活",
    "url": "./movie-1335.html",
    "cover": "./135.jpg",
    "oneLine": "透过一名现代修复师的视角,重新解构慈禧太后藏在颐和园壁画里的少女心事与权力密码。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "野史",
      "权力游戏",
      "宫廷",
      "女性视角"
    ],
    "genre": "剧情,历史,悬疑"
  },
  {
    "id": "1336",
    "title": "黑湖妖复仇记",
    "url": "./movie-1336.html",
    "cover": "./136.jpg",
    "oneLine": "人类为了旅游开发抽干黑湖,唤醒了湖底沉睡百年的妖怪,它带着无尽的怨恨重返人间。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "怪物",
      "复仇",
      "环保",
      "血腥"
    ],
    "genre": "恐怖,奇幻,动作"
  },
  {
    "id": "1337",
    "title": "白夜迷踪",
    "url": "./movie-1337.html",
    "cover": "./137.jpg",
    "oneLine": "北极圈小镇进入极昼,一名女警在24小时不落的太阳下追查连环失踪案,却发现凶手盯着每一秒的白夜。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "极昼",
      "小镇疑云",
      "双线叙事",
      "高能反转"
    ],
    "genre": "悬疑/犯罪"
  },
  {
    "id": "1338",
    "title": "戎马香宵",
    "url": "./movie-1338.html",
    "cover": "./138.jpg",
    "oneLine": "大宋边关女将白天打仗,夜里却隐姓埋名经营着一家轰动京城的神秘酒楼。",
    "year": "2021",
    "type": "剧集",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "宋朝",
      "女将军",
      "烹饪",
      "边境",
      "权谋"
    ],
    "genre": "历史,战争,美食"
  },
  {
    "id": "1339",
    "title": "赶尸先生",
    "url": "./movie-1339.html",
    "cover": "./139.jpg",
    "oneLine": "湘西赶尸人接了一单“大活”:护送八具尸体回乡,却发现其中一具“尸体”是活的,而且是满清格格。",
    "year": "2001",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "赶尸",
      "僵尸",
      "茅山术",
      "林正英式",
      "港产僵尸"
    ],
    "genre": "恐怖,动作,喜剧"
  },
  {
    "id": "1340",
    "title": "圣女不祈祷",
    "url": "./movie-1340.html",
    "cover": "./140.jpg",
    "oneLine": "修道院里最虔诚的圣女,在发现神父的秘密后,亲手砸碎了圣母像。",
    "year": "2024",
    "type": "电影",
    "region": "法国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "修女",
      "信仰崩塌",
      "女权觉醒",
      "封闭空间",
      "心理惊悚"
    ],
    "genre": "剧情/宗教/女性"
  },
  {
    "id": "1341",
    "title": "故梦",
    "url": "./movie-1341.html",
    "cover": "./141.jpg",
    "oneLine": "一座即将拆迁的眷村老屋里,三代人跨越六十年的秘密,随着一封没寄出的信被打开。",
    "year": "2019",
    "type": "剧集",
    "region": "中国台湾",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "眷村",
      "乡愁",
      "三代",
      "和解"
    ],
    "genre": "家庭,历史,文艺"
  },
  {
    "id": "1342",
    "title": "宽恕与原谅",
    "url": "./movie-1342.html",
    "cover": "./142.jpg",
    "oneLine": "父亲的不告而别让女儿怨恨了十五年,当她终于找到父亲时,发现他一直在街角默默看着她长大。",
    "year": "2007",
    "type": "电影",
    "region": "法国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "法式文艺",
      "原生家庭",
      "和解",
      "父女",
      "情感细腻"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "1343",
    "title": "赛车狂人",
    "url": "./movie-1343.html",
    "cover": "./143.jpg",
    "oneLine": "前地下赛车王出狱后成了驾校教练,却被迫重出江湖与海外赌场车队一决高下。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "街头赛车",
      "地下飙车",
      "JDM",
      "师徒",
      "浪子回头"
    ],
    "genre": "动作/体育/剧情"
  },
  {
    "id": "1344",
    "title": "紧急盯梢令",
    "url": "./movie-1344.html",
    "cover": "./144.jpg",
    "oneLine": "小镇派出所给新来的民警下达死命令:24小时内盯住镇上最不起眼的修鞋匠,却意外卷入一桩跨省文物走私大案。",
    "year": "1998",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "小城故事",
      "警察",
      "误打误撞",
      "跟踪",
      "写实风格"
    ],
    "genre": "剧情,犯罪,黑色幽默"
  },
  {
    "id": "1345",
    "title": "冰封侠:时空行者",
    "url": "./movie-1345.html",
    "cover": "./145.jpg",
    "oneLine": "明朝将军穿越到现代香港刚适应外卖,又被迫穿越回明朝打倭寇,还把现代警察也卷了进去。",
    "year": "2018",
    "type": "电影",
    "region": "中国大陆/香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "穿越",
      "清朝",
      "香港",
      "雷剧",
      "特效大片"
    ],
    "genre": "动作/科幻"
  },
  {
    "id": "1346",
    "title": "珍珠港孤军",
    "url": "./movie-1346.html",
    "cover": "./146.jpg",
    "oneLine": "珍珠港事件后,一名美军狙击手独自留在废墟中,狙击敌军的王牌飞行员。",
    "year": "2021",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "二战",
      "狙击手",
      "以寡敌众",
      "真实改编"
    ],
    "genre": "战争、历史、动作"
  },
  {
    "id": "1347",
    "title": "在上帝赐予的土地上游玩",
    "url": "./movie-1347.html",
    "cover": "./147.jpg",
    "oneLine": "一个无神论者家庭受邀到一座私人岛屿做客,却发现岛主打算用一场“神圣游戏”来筛选出真正的信徒。",
    "year": "2022",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "宗教惊悚",
      "家庭悲剧",
      "孤岛设定"
    ],
    "genre": "惊悚、剧情"
  },
  {
    "id": "1348",
    "title": "我的妄想症男友",
    "url": "./movie-1348.html",
    "cover": "./148.jpg",
    "oneLine": "女主爱上了一个坚信自己是外星人、要拯救地球的重度妄想症患者,并决定陪他一起疯。",
    "year": "2024",
    "type": "电影",
    "region": "韩国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "妄想症",
      "治愈",
      "奇葩人设",
      "甜"
    ],
    "genre": "爱情,喜剧,剧情"
  },
  {
    "id": "1349",
    "title": "血河2024",
    "url": "./movie-1349.html",
    "cover": "./149.jpg",
    "oneLine": "2024年,一条因生化污染而发出红光的河流横贯大陆,一名退役女兵必须逆流而上,拯救被绑架的女儿。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "末世",
      "生化危机",
      "硬核动作",
      "女性主角"
    ],
    "genre": "动作/科幻/惊悚"
  },
  {
    "id": "1350",
    "title": "鬼声鬼气",
    "url": "./movie-1350.html",
    "cover": "./150.jpg",
    "oneLine": "一个灵异电台节目的落魄主持人,为了涨收听率假扮道士抓鬼,却意外唤醒了清朝僵尸,不得不假戏真做。",
    "year": "1995",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "僵尸",
      "道士",
      "电台",
      "乌龙"
    ],
    "genre": "恐怖,喜剧"
  },
  {
    "id": "1351",
    "title": "喋血外星人",
    "url": "./movie-1351.html",
    "cover": "./1.jpg",
    "oneLine": "硬汉老爹独自对抗外星入侵者,用猎枪和拖拉机上演乡村保卫战。",
    "year": "2021",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "B级",
      "血腥",
      "爽片"
    ],
    "genre": "动作,科幻,恐怖"
  },
  {
    "id": "1352",
    "title": "名侦探柯南:绀碧之棺",
    "url": "./movie-1352.html",
    "cover": "./2.jpg",
    "oneLine": "柯南在神海岛调查宝藏传说时,发现背后牵扯到一场现代高科技海盗的阴谋。",
    "year": "2007",
    "type": "动画电影",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "海盗",
      "宝藏",
      "神海岛",
      "毛利兰"
    ],
    "genre": "悬疑,冒险"
  },
  {
    "id": "1353",
    "title": "战友2008",
    "url": "./movie-1353.html",
    "cover": "./3.jpg",
    "oneLine": "2008年南奥塞梯,一对曾经亲如兄弟的士兵分别站上了战壕的两边。",
    "year": "2024",
    "type": "电影",
    "region": "俄罗斯",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "俄格战争",
      "兄弟情",
      "狙击手",
      "创伤"
    ],
    "genre": "战争/剧情/历史"
  },
  {
    "id": "1354",
    "title": "跳跃剪接",
    "url": "./movie-1354.html",
    "cover": "./4.jpg",
    "oneLine": "一位剪辑师发现一卷旧胶片上的“跳跃剪接”并非失误,而是凶手利用剪辑点来隐藏时空谋杀的证据。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "剪辑",
      "时间循环",
      "元电影",
      "谋杀",
      "胶片"
    ],
    "genre": "惊悚,科幻,悬疑"
  },
  {
    "id": "1355",
    "title": "摇滚城市底特律",
    "url": "./movie-1355.html",
    "cover": "./5.jpg",
    "oneLine": "底特律破产十年后,五个已经变成油腻中年的前摇滚明星,为了拯救城市的最后一块音乐圣地而重组。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "摇滚精神",
      "城市复兴",
      "乐队重组"
    ],
    "genre": "音乐/喜剧/剧情"
  },
  {
    "id": "1356",
    "title": "痴凤啼痕",
    "url": "./movie-1356.html",
    "cover": "./6.jpg",
    "oneLine": "清代一个被丈夫休掉的疯女人,每天在县衙门口唱戏、啼哭,直到整个县城的秘密都被她唱了出来。",
    "year": "1993",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "邵氏",
      "古典",
      "疯女",
      "封建"
    ],
    "genre": "剧情/情色/历史"
  },
  {
    "id": "1357",
    "title": "同根生",
    "url": "./movie-1357.html",
    "cover": "./7.jpg",
    "oneLine": "一对失散多年的亲兄弟,重逢时一个是警察卧底,一个是黑帮新星。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "兄弟反目",
      "卧底",
      "黑帮",
      "宿命",
      "港风"
    ],
    "genre": "犯罪,剧情,悬疑"
  },
  {
    "id": "1358",
    "title": "国王与王后",
    "url": "./movie-1358.html",
    "cover": "./8.jpg",
    "oneLine": "一对离婚多年的夫妻,一个要疯了,一个要死了,却在同一家医院重逢。",
    "year": "2004",
    "type": "电影",
    "region": "法国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "阿诺·德斯普里钦",
      "哲学",
      "婚姻寓言"
    ],
    "genre": "剧情,喜剧,爱情"
  },
  {
    "id": "1359",
    "title": "魔女的游戏",
    "url": "./movie-1359.html",
    "cover": "./9.jpg",
    "oneLine": "校园霸凌受害者醒来后,发现自己活在一场“桌游”里,而她身边的每个人都是玩家,操控者是“魔女”。",
    "year": "2024",
    "type": "剧集",
    "region": "韩国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "重生",
      "校园",
      "契约"
    ],
    "genre": "悬疑/奇幻/爱情"
  },
  {
    "id": "1360",
    "title": "奇奇与蒂蒂",
    "url": "./movie-1360.html",
    "cover": "./10.jpg",
    "oneLine": "两只花栗鼠经营一家私家侦探社,每集解决一个“童话角色失踪案”。",
    "year": "2023",
    "type": "动画剧集",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "花栗鼠",
      "恶搞致敬",
      "打破第四面墙",
      "童年回忆"
    ],
    "genre": "喜剧/冒险"
  },
  {
    "id": "1361",
    "title": "迷局1931",
    "url": "./movie-1361.html",
    "cover": "./11.jpg",
    "oneLine": "1931年上海,一个失忆的巡捕房顾问被卷入连环凶杀案,每具尸体旁边都留下了一个只有他能看懂的密码。",
    "year": "2023",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "上海滩",
      "连环凶杀",
      "地下党",
      "智斗"
    ],
    "genre": "悬疑、谍战、民国"
  },
  {
    "id": "1362",
    "title": "真假济公",
    "url": "./movie-1362.html",
    "cover": "./12.jpg",
    "oneLine": "真济公下凡发现自己的身份被一个卖狗皮膏药的骗子顶替,而且骗子比自己更受爱戴。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "经典改编",
      "冒名顶替",
      "除妖",
      "讽刺"
    ],
    "genre": "喜剧,奇幻"
  },
  {
    "id": "1363",
    "title": "卫兵",
    "url": "./movie-1363.html",
    "cover": "./13.jpg",
    "oneLine": "一个逃兵被罚去索姆河战场最前线的“无人区”当卫兵,他的装备只有一把刺刀和一台坏掉的心理测量仪。",
    "year": "2024",
    "type": "电影",
    "region": "英国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "一战",
      "战壕",
      "士兵心理"
    ],
    "genre": "战争,剧情"
  },
  {
    "id": "1364",
    "title": "龙游天下",
    "url": "./movie-1364.html",
    "cover": "./14.jpg",
    "oneLine": "一张藏宝图牵出前朝惊天秘密,四位少年踏上寻龙之旅,却发现敌人就在身边。",
    "year": "2021",
    "type": "电视剧",
    "region": "中国内地",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "夺宝",
      "江湖",
      "皇权",
      "兄弟情"
    ],
    "genre": "古装悬疑动作"
  },
  {
    "id": "1365",
    "title": "德州小镇",
    "url": "./movie-1365.html",
    "cover": "./15.jpg",
    "oneLine": "德州石油小镇上,镇长一家祖孙三代接连离奇死亡,而他们死亡的方式,都对应着墙上那幅《最后的晚餐》。",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "荒野",
      "石油诅咒",
      "家族恩怨",
      "谋杀"
    ],
    "genre": "悬疑西部"
  },
  {
    "id": "1366",
    "title": "谜道",
    "url": "./movie-1366.html",
    "cover": "./16.jpg",
    "oneLine": "国道旁频繁出现神秘的古代符号标记,刑警队长发现它们竟是凶手留下的杀人倒计时。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "刑侦",
      "记忆",
      "符号",
      "连环案",
      "公路"
    ],
    "genre": "悬疑,犯罪,心理"
  },
  {
    "id": "1367",
    "title": "未完成的牵挂",
    "url": "./movie-1367.html",
    "cover": "./17.jpg",
    "oneLine": "患有阿尔茨海默症的爷爷忘记了所有家人,却每天都在画一幅未完成的画——那是他被拐卖的儿子最后的样子。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "阿尔茨海默症",
      "三代和解",
      "乡土中国",
      "遗忘与铭记"
    ],
    "genre": "剧情/家庭/社会"
  },
  {
    "id": "1368",
    "title": "码头风云",
    "url": "./movie-1368.html",
    "cover": "./18.jpg",
    "oneLine": "一个码头装卸工被黑帮工会控制多年,最终在哥哥被杀后,独自站出来指证首领。",
    "year": "1954",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "黑白",
      "工会腐败",
      "良心"
    ],
    "genre": "剧情/犯罪/经典"
  },
  {
    "id": "1369",
    "title": "阿里格尔",
    "url": "./movie-1369.html",
    "cover": "./19.jpg",
    "oneLine": "阿里格尔穆斯林大学一位德高望重的教授,因同性恋身份被停职后发起平权诉讼。",
    "year": "2016",
    "type": "电影",
    "region": "印度",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "真实改编",
      "LGBT",
      "学术"
    ],
    "genre": "剧情,传记"
  },
  {
    "id": "1370",
    "title": "镖行天下前传之编外人选",
    "url": "./movie-1370.html",
    "cover": "./20.jpg",
    "oneLine": "大明年间,一支运镖队伍在沙漠遭遇全军覆没,一个从未登记在册的“编外”厨子,成了破案的唯一活口。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "古代镖师",
      "江湖阴谋",
      "悬疑破案"
    ],
    "genre": "动作,武侠,冒险"
  },
  {
    "id": "1371",
    "title": "列蒙切洛图书馆大逃亡",
    "url": "./movie-1371.html",
    "cover": "./21.jpg",
    "oneLine": "五个被关禁闭的初中生在深夜的百年图书馆里,必须解开四道书页谜题才能不被“故事吞噬”。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "图书馆",
      "密室逃脱",
      "解谜",
      "书籍"
    ],
    "genre": "冒险、悬疑、家庭"
  },
  {
    "id": "1372",
    "title": "请让一让2000",
    "url": "./movie-1372.html",
    "cover": "./22.jpg",
    "oneLine": "Y2K前夕,倒霉的小职员在拥挤的公交车上邂逅了真命天女,却屡次被生活挤开。",
    "year": "2000",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "千禧年",
      "小人物",
      "办公室恋情",
      "怀旧喜剧"
    ],
    "genre": "喜剧、爱情、剧情、都市"
  },
  {
    "id": "1373",
    "title": "男人帮",
    "url": "./movie-1373.html",
    "cover": "./23.jpg",
    "oneLine": "四个中年男人的“互助小组”,每次聚会都想解决一个问题,结果永远制造出三个新问题。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "兄弟情",
      "中年危机",
      "都市",
      "损友",
      "男性群像"
    ],
    "genre": "喜剧/剧情"
  },
  {
    "id": "1374",
    "title": "惜花芷",
    "url": "./movie-1374.html",
    "cover": "./24.jpg",
    "oneLine": "花府满门获罪流放,唯一幸存的小姐花芷扛起家族重担,在京城开了第一间“女性当铺”,向仇人发出“以物易命”的战书。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "宅斗",
      "经商",
      "逆袭",
      "女性群像"
    ],
    "genre": "古装爱情"
  },
  {
    "id": "1375",
    "title": "东京24区",
    "url": "./movie-1375.html",
    "cover": "./25.jpg",
    "oneLine": "东京被划分为24个独立的武装行政区,一名拥有“共情”超能力的少年必须侦破一起跨越24区的连环爆炸案。",
    "year": "2025",
    "type": "动画剧集",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "赛博朋克",
      "心理犯罪",
      "社会组织",
      "群像剧"
    ],
    "genre": "科幻,悬疑,犯罪"
  },
  {
    "id": "1376",
    "title": "四月的女儿",
    "url": "./movie-1376.html",
    "cover": "./26.jpg",
    "oneLine": "17岁的墨西哥少女意外怀孕,她41岁的母亲做出了一个惊人的决定:替女儿生下这个孩子。",
    "year": "2025",
    "type": "电影",
    "region": "墨西哥/美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "少女妈妈",
      "墨西哥",
      "母女关系",
      "社会议题",
      "公路片"
    ],
    "genre": "剧情/惊悚/家庭"
  },
  {
    "id": "1377",
    "title": "锦上添花",
    "url": "./movie-1377.html",
    "cover": "./27.jpg",
    "oneLine": "为了拿到拆迁款,落魄父子假扮豪门,却被全村人误以为是在拍大型真人秀。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "小成本",
      "方言梗",
      "反套路",
      "合家欢"
    ],
    "genre": "喜剧,爱情"
  },
  {
    "id": "1378",
    "title": "史前的女人们",
    "url": "./movie-1378.html",
    "cover": "./28.jpg",
    "oneLine": "全女性部落统治的史前世界突然闯入现代男科学家,她们以为他是神,而他发现她们会产卵。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "女战士",
      "恐龙",
      "母系社会",
      "基因工程"
    ],
    "genre": "科幻/冒险/动作"
  },
  {
    "id": "1379",
    "title": "恐怖疯人院",
    "url": "./movie-1379.html",
    "cover": "./29.jpg",
    "oneLine": "调查记者假装病人潜入废弃疯人院,发现院中真正的疯子不是病人,而是以“治疗”为名施暴的医生——以及她自己。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "心理",
      "精神病院",
      "反转",
      "血腥"
    ],
    "genre": "恐怖/悬疑"
  },
  {
    "id": "1380",
    "title": "没见过的毕加索",
    "url": "./movie-1380.html",
    "cover": "./30.jpg",
    "oneLine": "一位老年保洁员在毕加索旧居扫地时,发现了一幅从未公开过的、风格完全不同的自画像。",
    "year": "2025",
    "type": "电影",
    "region": "法国/西班牙",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "艺术",
      "失窃画作",
      "晚年秘密"
    ],
    "genre": "剧情/传记"
  },
  {
    "id": "1381",
    "title": "我的朋友圈",
    "url": "./movie-1381.html",
    "cover": "./31.jpg",
    "oneLine": "每一条朋友圈都是一个犯罪现场,本剧通过六个关于“朋友圈”的独立故事,揭开现代社交网络背后的阴暗人性。",
    "year": "2025",
    "type": "电视剧",
    "region": "中国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "社交媒体",
      "人性",
      "反转",
      "单元剧"
    ],
    "genre": "剧情,悬疑"
  },
  {
    "id": "1382",
    "title": "咸湿眼",
    "url": "./movie-1382.html",
    "cover": "./32.jpg",
    "oneLine": "盲人按摩师从客人的体味中,辨认出害死自己恋人的凶手。",
    "year": "2025",
    "type": "电影",
    "region": "中国台湾",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "盲人",
      "按摩师",
      "禁忌之恋",
      "潮湿南方"
    ],
    "genre": "剧情,同性"
  },
  {
    "id": "1383",
    "title": "神秘代理人",
    "url": "./movie-1383.html",
    "cover": "./33.jpg",
    "oneLine": "军情五处新人入职第一天,就收到匿名短信:整个部门已被敌国操控。",
    "year": "2024",
    "type": "电视剧",
    "region": "英国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "军情五处",
      "内鬼",
      "双面间谍",
      "冷峻",
      "智力博弈"
    ],
    "genre": "悬疑/惊悚"
  },
  {
    "id": "1384",
    "title": "列兵巴克",
    "url": "./movie-1384.html",
    "cover": "./34.jpg",
    "oneLine": "新兵与一只被淘汰的军犬,在边境哨所共同抵御偷猎者。",
    "year": "2023",
    "type": "电影",
    "region": "中国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "军犬",
      "战友",
      "边境",
      "忠诚",
      "感人"
    ],
    "genre": "战争/剧情"
  },
  {
    "id": "1385",
    "title": "东京塔2024",
    "url": "./movie-1385.html",
    "cover": "./35.jpg",
    "oneLine": "1980年代到2024年,一座东京塔下,一家三代女人的爱与离别、坚持与原谅。",
    "year": "2024",
    "type": "电视剧",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "翻拍经典",
      "三代人",
      "时间跨度"
    ],
    "genre": "剧情,家庭,治愈"
  },
  {
    "id": "1386",
    "title": "山区小社",
    "url": "./movie-1386.html",
    "cover": "./36.jpg",
    "oneLine": "一名从北京空降的年轻行长,试图拯救一个快倒闭的山区农村信用社,却发现村民们最大的问题不是没钱。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "农村信用合作社",
      "扶贫",
      "温情"
    ],
    "genre": "剧情/乡村振兴"
  },
  {
    "id": "1387",
    "title": "东京夜都市",
    "url": "./movie-1387.html",
    "cover": "./37.jpg",
    "oneLine": "在新宿歌舞伎町的地下世界,一个失意的社畜为还债化身夜之帝王,却在权力巅峰触碰到了血腥的真相。",
    "year": "2027",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "新宿",
      "黑帮",
      "生存法则",
      "夜生活"
    ],
    "genre": "剧情/犯罪"
  },
  {
    "id": "1388",
    "title": "我的青春也灿烂",
    "url": "./movie-1388.html",
    "cover": "./38.jpg",
    "oneLine": "2003年非典时期的重点高中,七个高三学生在隔离校园里完成了最后一次成人礼。",
    "year": "2023",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "高考",
      "梦想",
      "成长阵痛"
    ],
    "genre": "青春、校园、家庭"
  },
  {
    "id": "1389",
    "title": "鼠来宝2:明星俱乐部",
    "url": "./movie-1389.html",
    "cover": "./39.jpg",
    "oneLine": "三只花栗鼠进入高中,却为了拯救濒临解散的音乐俱乐部与女花栗鼠们针锋相对。",
    "year": "2009",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "花栗鼠",
      "音乐",
      "校园",
      "搞笑"
    ],
    "genre": "喜剧动画"
  },
  {
    "id": "1390",
    "title": "心灵勇者",
    "url": "./movie-1390.html",
    "cover": "./40.jpg",
    "oneLine": "因车祸导致大脑损伤的拳击手,在父亲帮助下,用一年时间学会重新走路和出拳。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港/中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "残障",
      "拳击",
      "脑损伤",
      "父亲"
    ],
    "genre": "剧情,运动,励志"
  },
  {
    "id": "1391",
    "title": "叶挺将军",
    "url": "./movie-1391.html",
    "cover": "./41.jpg",
    "oneLine": "聚焦北伐名将叶挺从独立团团长到新四军军长,直至黑茶山遇难的传奇一生。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "革命",
      "北伐",
      "抗战",
      "史诗",
      "铁军"
    ],
    "genre": "剧情,传记,历史"
  },
  {
    "id": "1392",
    "title": "杀死克鲁斯",
    "url": "./movie-1392.html",
    "cover": "./42.jpg",
    "oneLine": "一名过气演员接到神秘任务:在电影首映夜之前,亲手“杀死”顶流明星克鲁斯。",
    "year": "2027",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "杀手",
      "好莱坞",
      "反转",
      "替身",
      "阴谋"
    ],
    "genre": "动作/悬疑"
  },
  {
    "id": "1393",
    "title": "凛子小姐想试试",
    "url": "./movie-1393.html",
    "cover": "./43.jpg",
    "oneLine": "37岁的处女图书馆管理员凛子,决定用一年时间“打卡”所有她幻想过的性爱场景,却发现自己根本不想要那些。",
    "year": "2024",
    "type": "电视剧",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "性探索",
      "女性主义",
      "深夜剧"
    ],
    "genre": "剧情,成人,女性"
  },
  {
    "id": "1394",
    "title": "幸运缘是妳",
    "url": "./movie-1394.html",
    "cover": "./44.jpg",
    "oneLine": "错拿行李箱后,倒霉女孩被迫与高冷律师假扮情侣,却发现他正是闺蜜网恋三年的“完美男友”。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国台湾",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "错拿行李箱",
      "契约情侣",
      "前任修罗场"
    ],
    "genre": "爱情/喜剧"
  },
  {
    "id": "1395",
    "title": "狱中豪杰",
    "url": "./movie-1395.html",
    "cover": "./45.jpg",
    "oneLine": "被冤枉入狱的柔道教练,为保护狱中被欺凌的少年,决定在监狱里建立自己的“秩序”。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "监狱",
      "以暴制暴",
      "司法腐败",
      "底层复仇",
      "黑吃黑"
    ],
    "genre": "动作,犯罪,剧情"
  },
  {
    "id": "1396",
    "title": "封城之后",
    "url": "./movie-1396.html",
    "cover": "./46.jpg",
    "oneLine": "封城后的第30天,一个外卖员发现城里开始有人悄悄消失,如同从未存在。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "疫情",
      "人性",
      "隔离",
      "现实主义"
    ],
    "genre": "剧情,灾难"
  },
  {
    "id": "1397",
    "title": "谋杀合约",
    "url": "./movie-1397.html",
    "cover": "./47.jpg",
    "oneLine": "韩国顶级杀手接了一单生意,却发现目标也在同一天发布了针对他自己的“反向合约”——谁先杀死对方,谁活。",
    "year": "2018",
    "type": "电影",
    "region": "韩国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "职业杀手",
      "契约杀人",
      "反转",
      "双雄对决"
    ],
    "genre": "犯罪/惊悚"
  },
  {
    "id": "1398",
    "title": "职业杀神",
    "url": "./movie-1398.html",
    "cover": "./48.jpg",
    "oneLine": "顶级杀手为了退休金,接最后一单活,目标是伪装成杀手的普通会计。",
    "year": "2024",
    "type": "电影",
    "region": "英国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "杀手",
      "反套路",
      "黑色幽默"
    ],
    "genre": "动作,犯罪,惊悚"
  },
  {
    "id": "1399",
    "title": "奥特曼 新世代之星",
    "url": "./movie-1399.html",
    "cover": "./49.jpg",
    "oneLine": "当所有新生代奥特曼的力量被邪恶宇宙人封印,一个热爱怪兽的普通高中生成了光之国的最后希望。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "奥特曼",
      "合体",
      "新生代",
      "热血",
      "怪兽"
    ],
    "genre": "动作、科幻"
  },
  {
    "id": "1400",
    "title": "苏格兰之吻",
    "url": "./movie-1400.html",
    "cover": "./50.jpg",
    "oneLine": "伦敦的华裔甜品师接手了亡父在苏格兰高地的破旧酒吧,却不得不与当地橄榄球队的暴躁队长共享空间。",
    "year": "2023",
    "type": "电影",
    "region": "英国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "英式橄榄球",
      "跨文化",
      "小镇",
      "甜品店",
      "和解"
    ],
    "genre": "爱情/剧情/运动"
  },
  {
    "id": "1401",
    "title": "警部补大魔神",
    "url": "./movie-1401.html",
    "cover": "./51.jpg",
    "oneLine": "警视厅问题儿童“大魔神”用拳头逼供,以暴制暴,却发现自己追杀的黑道头目竟是失散多年的亲哥。",
    "year": "2024",
    "type": "剧集",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "漫改",
      "anti-hero",
      "暴力执法",
      "警视厅",
      "爽剧"
    ],
    "genre": "动作/犯罪"
  },
  {
    "id": "1402",
    "title": "令人耳朵腐烂的爱",
    "url": "./movie-1402.html",
    "cover": "./52.jpg",
    "oneLine": "失聪的花店老板爱上了邻居女孩,他用自制的扩音器偷听她的一切,直到声音具象化为腐烂的蛆虫。",
    "year": "2023",
    "type": "电影",
    "region": "西班牙",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "身体恐怖",
      "病态迷恋",
      "声波武器",
      "极端占有欲"
    ],
    "genre": "恐怖爱情"
  },
  {
    "id": "1403",
    "title": "没有真相的内心秘密",
    "url": "./movie-1403.html",
    "cover": "./53.jpg",
    "oneLine": "一场车祸后,男友A指控男友B是凶手,而男友B拿出日记证明他们早已分手,到底谁在说谎?",
    "year": "2024",
    "type": "电视剧",
    "region": "泰国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "心理",
      "三角恋",
      "记忆迷宫",
      "泰式狗血"
    ],
    "genre": "爱情/同性/悬疑"
  },
  {
    "id": "1404",
    "title": "一飞冲天",
    "url": "./movie-1404.html",
    "cover": "./54.jpg",
    "oneLine": "一个被省队开除的短跑少年,阴差阳错站上了跳台滑雪的赛场,目标直指冬奥。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "跳台滑雪",
      "冬奥",
      "逆袭",
      "师徒"
    ],
    "genre": "体育励志"
  },
  {
    "id": "1405",
    "title": "狂花追杀令",
    "url": "./movie-1405.html",
    "cover": "./55.jpg",
    "oneLine": "代号“狂花”的顶级杀手被组织出卖,身负重伤的她开着一辆救护车,在医院、高速公路和黑帮老巢展开复仇。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "女杀手",
      "复仇",
      "血腥",
      "高速",
      "暴力美学"
    ],
    "genre": "动作惊悚"
  },
  {
    "id": "1406",
    "title": "沥青之城",
    "url": "./movie-1406.html",
    "cover": "./56.jpg",
    "oneLine": "在24小时不夜城“沥青城”里,寻找一个已经“不存在”的人。",
    "year": "2024",
    "type": "电影",
    "region": "法国/比利时",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "黑色电影",
      "夜店",
      "失踪案",
      "霓虹美学"
    ],
    "genre": "犯罪悬疑"
  },
  {
    "id": "1407",
    "title": "杀手正在召唤",
    "url": "./movie-1407.html",
    "cover": "./57.jpg",
    "oneLine": "午夜接错电话,外卖员被告知自己已被悬赏,全城的疯子杀手都在赶来杀他的路上。",
    "year": "2026",
    "type": "电影",
    "region": "韩国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "电话亭",
      "赏金猎人",
      "复眼杀手"
    ],
    "genre": "动作、惊悚、犯罪"
  },
  {
    "id": "1408",
    "title": "我把社长解锁了",
    "url": "./movie-1408.html",
    "cover": "./58.jpg",
    "oneLine": "一个无业游民意外捡到一部手机,里面竟关着被黑客囚禁的大财团社长的人工智能。",
    "year": "2023",
    "type": "电视剧集",
    "region": "韩国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "财阀",
      "人工智能",
      "替身"
    ],
    "genre": "喜剧/奇幻"
  },
  {
    "id": "1409",
    "title": "秘河密友",
    "url": "./movie-1409.html",
    "cover": "./59.jpg",
    "oneLine": "五个高中死党的秘密,随着其中一人沉入河底而浮出水面。",
    "year": "2024",
    "type": "电影",
    "region": "台湾",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "河流",
      "失踪",
      "秘密",
      "成长"
    ],
    "genre": "悬疑,青春,同性"
  },
  {
    "id": "1410",
    "title": "陆军神兵",
    "url": "./movie-1410.html",
    "cover": "./60.jpg",
    "oneLine": "一名拥有超凡装备天赋的天才士兵,被选入“神兵”小队,挑战人体与科技的融合极限。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "特种兵",
      "尖子兵",
      "实战",
      "兄弟情"
    ],
    "genre": "军旅,动作"
  },
  {
    "id": "1411",
    "title": "铁血战狼",
    "url": "./movie-1411.html",
    "cover": "./61.jpg",
    "oneLine": "因失误被开除的特种兵王,在边境小镇碰上一群乌合之众,却要联手对抗一整个雇佣兵团。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "特种兵",
      "边境",
      "热血",
      "兄弟情"
    ],
    "genre": "战争/动作"
  },
  {
    "id": "1412",
    "title": "没有过去的男人",
    "url": "./movie-1412.html",
    "cover": "./62.jpg",
    "oneLine": "一个在码头被打晕的男人醒来后失去了所有记忆,却发现自己成了一个欢乐流浪汉社区的领袖。",
    "year": "2024",
    "type": "电影",
    "region": "芬兰/德国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "失忆",
      "北欧冷幽默",
      "身份探索",
      "极简主义",
      "救赎"
    ],
    "genre": "剧情/悬疑/黑色幽默"
  },
  {
    "id": "1413",
    "title": "七十二家房客第二部粤语",
    "url": "./movie-1413.html",
    "cover": "./63.jpg",
    "oneLine": "旧楼拆迁前三个月,七十二家房客联手向黑心开发商上演一出偷龙转凤。",
    "year": "2018",
    "type": "剧集",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "粤语",
      "房东",
      "租客",
      "老广味"
    ],
    "genre": "喜剧,市井,家庭"
  },
  {
    "id": "1414",
    "title": "表",
    "url": "./movie-1414.html",
    "cover": "./64.jpg",
    "oneLine": "儿子在爷爷的遗物里发现一块停了的机械表,表盘背面刻着一行字:“2003年,爸爸给我买的,我还没学会看。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "亲子",
      "疾病",
      "时间",
      "三代人"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "1415",
    "title": "我妈妈的婚礼",
    "url": "./movie-1415.html",
    "cover": "./65.jpg",
    "oneLine": "女儿们为妈妈的第四次婚礼精心准备,却发现新郎竟是她们大学时的暗恋对象。",
    "year": "2026",
    "type": "电影",
    "region": "英国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "母女关系",
      "再婚",
      "家庭闹剧"
    ],
    "genre": "喜剧/剧情"
  },
  {
    "id": "1416",
    "title": "恐龙岛",
    "url": "./movie-1416.html",
    "cover": "./66.jpg",
    "oneLine": "一场VR游戏内测变成现实噩梦,玩家们发现自己被扔在一座真实存在的恐龙岛上。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "克隆恐龙",
      "孤岛逃生",
      "基因实验"
    ],
    "genre": "科幻/惊悚/冒险"
  },
  {
    "id": "1417",
    "title": "歌舞飞扬",
    "url": "./movie-1417.html",
    "cover": "./67.jpg",
    "oneLine": "洗衣工的儿子为了追到音乐学院院长的女儿,用废水管当麦克风练出了天籁之音。",
    "year": "2007",
    "type": "电影",
    "region": "印度",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "宝莱坞",
      "梦想",
      "阶级",
      "对唱",
      "励志"
    ],
    "genre": "歌舞/剧情/爱情"
  },
  {
    "id": "1418",
    "title": "直言真相第三季",
    "url": "./movie-1418.html",
    "cover": "./68.jpg",
    "oneLine": "热门犯罪播客主持人在调查新案件时,发现前两季的凶手可能被冤枉。",
    "year": "2024",
    "type": "剧集",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "播客破案",
      "媒体伦理",
      "连环迷案"
    ],
    "genre": "犯罪,悬疑,剧情"
  },
  {
    "id": "1419",
    "title": "搏击人生",
    "url": "./movie-1419.html",
    "cover": "./69.jpg",
    "oneLine": "42岁的单亲妈妈被公司裁员后,为了赚女儿学费报名了地下女子搏击赛,却发现对手全是20岁的专业杀手。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "女子MMA",
      "中年危机",
      "女性力量",
      "打脸爽片"
    ],
    "genre": "剧情/运动"
  },
  {
    "id": "1420",
    "title": "我的老公卡到阴",
    "url": "./movie-1420.html",
    "cover": "./70.jpg",
    "oneLine": "老婆发现老公最近行为诡异,原来他被一个女鬼附身了,更崩溃的是,那个女鬼好像比老公更懂她。",
    "year": "2023",
    "type": "电影 喜剧/恐怖",
    "region": "中国台湾",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "夫妻",
      "附身",
      "搞笑",
      "温情"
    ],
    "genre": "灵异"
  },
  {
    "id": "1421",
    "title": "烟蒂",
    "url": "./movie-1421.html",
    "cover": "./71.jpg",
    "oneLine": "一个总在捡烟蒂抽的中年废柴父亲,为了同性恋儿子的婚礼,决定最后一次戒烟。",
    "year": "2021",
    "type": "电影",
    "region": "中国台湾",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "戒烟隐喻",
      "父子和解",
      "底层生活",
      "长镜头"
    ],
    "genre": "剧情/同性/家庭"
  },
  {
    "id": "1422",
    "title": "希望之旅",
    "url": "./movie-1422.html",
    "cover": "./72.jpg",
    "oneLine": "一辆开往县城的大巴车在雪崩中被埋,12个不同身份的乘客在氧气耗尽前的72小时。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "大巴车",
      "雪山",
      "求生",
      "人性"
    ],
    "genre": "剧情,灾难,群像"
  },
  {
    "id": "1423",
    "title": "红门兄弟",
    "url": "./movie-1423.html",
    "cover": "./73.jpg",
    "oneLine": "性格迥异的亲兄弟同在一个消防中队,一场大火让他们必须在手足之情和职业使命之间做出残酷抉择。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "消防",
      "兄弟",
      "救援",
      "牺牲"
    ],
    "genre": "动作消防"
  },
  {
    "id": "1424",
    "title": "布里叶女士",
    "url": "./movie-1424.html",
    "cover": "./74.jpg",
    "oneLine": "19世纪女作家布里叶为了出版小说,不得不假装自己是男爵的“代笔幽灵”。",
    "year": "2027",
    "type": "电影",
    "region": "法国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "女性先锋",
      "文学沙龙",
      "时代束缚",
      "自我觉醒"
    ],
    "genre": "剧情/传记"
  },
  {
    "id": "1425",
    "title": "小樽情书",
    "url": "./movie-1425.html",
    "cover": "./75.jpg",
    "oneLine": "一封寄往天国的信,意外牵起了两个同名同姓女子之间的时光纽带。",
    "year": "1995",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "暗恋",
      "冬日",
      "书信",
      "纯爱"
    ],
    "genre": "爱情,剧情"
  },
  {
    "id": "1426",
    "title": "唐伯虎点秋香2之四大才子",
    "url": "./movie-1426.html",
    "cover": "./76.jpg",
    "oneLine": "四大才子少年时代第一次联手,为一个烧鹅姑娘把整个姑苏城翻了个底朝天。",
    "year": "2026",
    "type": "电影",
    "region": "中国香港/中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "无厘头",
      "前传",
      "群像"
    ],
    "genre": "喜剧/古装/爱情"
  },
  {
    "id": "1427",
    "title": "相信·爱",
    "url": "./movie-1427.html",
    "cover": "./77.jpg",
    "oneLine": "一封来自1988年的信在30年后被打开,让当年被迫分离的恋人,在各自孙子孙女的帮助下重新寻找彼此。",
    "year": "2023",
    "type": "电影",
    "region": "台湾",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "失忆",
      "重逢",
      "信物",
      "治愈",
      "海峡"
    ],
    "genre": "爱情,剧情,家庭"
  },
  {
    "id": "1428",
    "title": "乱码迷局",
    "url": "./movie-1428.html",
    "cover": "./78.jpg",
    "oneLine": "程序员发现一串乱码能修改现实,当他删掉乱码时,同事的工位消失了,没人记得他。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "暗网",
      "程序员",
      "AI觉醒",
      "现实入侵"
    ],
    "genre": "悬疑科幻"
  },
  {
    "id": "1429",
    "title": "亦舞之城",
    "url": "./movie-1429.html",
    "cover": "./79.jpg",
    "oneLine": "曾经的拉丁舞女王因伤退役,十年后竟以清洁工身份,重回仇人开设的顶级舞团。",
    "year": "2025",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "拉丁舞",
      "复仇",
      "姐弟恋"
    ],
    "genre": "剧情/爱情"
  },
  {
    "id": "1430",
    "title": "信仰",
    "url": "./movie-1430.html",
    "cover": "./80.jpg",
    "oneLine": "长征路上,四个掉队的女兵用一面残缺的红军旗,撑起了一座临时“医院”和三十五条命。",
    "year": "2025",
    "type": "电影",
    "region": "中国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "真实事件改编",
      "长征",
      "信仰",
      "女性视角"
    ],
    "genre": "剧情,历史,战争"
  },
  {
    "id": "1431",
    "title": "校车",
    "url": "./movie-1431.html",
    "cover": "./81.jpg",
    "oneLine": "一辆满载学生的校车被劫持,母亲发现绑匪要的不是赎金,而是她女儿血液里的病毒抗体。",
    "year": "2024",
    "type": "电影",
    "region": "美国/中国合拍",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "密闭空间",
      "生化危机",
      "母爱",
      "倒计时",
      "生存"
    ],
    "genre": "惊悚/灾难"
  },
  {
    "id": "1432",
    "title": "初恋",
    "url": "./movie-1432.html",
    "cover": "./82.jpg",
    "oneLine": "一场始于高一秋天的暗恋,跨越十二年,在四次错过与重逢后,终于迎来第五次相遇。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "校园暗恋",
      "双向奔赴",
      "时间跨度",
      "写实风",
      "破镜重圆"
    ],
    "genre": "爱情,青春,成长"
  },
  {
    "id": "1433",
    "title": "伤心蔚蓝海",
    "url": "./movie-1433.html",
    "cover": "./83.jpg",
    "oneLine": "海边渔村的一次溺水事故,撕裂了一个家庭二十年的平静假象。",
    "year": "2005",
    "type": "电影",
    "region": "中国台湾",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "海洋",
      "失踪",
      "父女情",
      "自然主义"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "1434",
    "title": "脸盲少女的未知爱情",
    "url": "./movie-1434.html",
    "cover": "./84.jpg",
    "oneLine": "患有严重脸盲症的少女,每天都要重新“认识”自己的男朋友,而对方每天都会用新身份向她告白。",
    "year": "2024",
    "type": "网络剧",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "脸盲症",
      "高概念设定",
      "误会连连",
      "治愈甜宠",
      "双向奔赴"
    ],
    "genre": "爱情,喜剧,校园"
  },
  {
    "id": "1435",
    "title": "当樱花盛开",
    "url": "./movie-1435.html",
    "cover": "./85.jpg",
    "oneLine": "妻子去世后,一个德国老爷爷带着她的遗愿独赴东京,在樱花季完成了最后的告别。",
    "year": "2008",
    "type": "电影",
    "region": "日本",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "丧偶",
      "老年爱情",
      "日本文化",
      "催泪"
    ],
    "genre": "剧情/家庭/治愈"
  },
  {
    "id": "1436",
    "title": "史莱克惊悚夜",
    "url": "./movie-1436.html",
    "cover": "./86.jpg",
    "oneLine": "万圣节的深夜,史莱克和菲奥娜误入一个专杀童话人物的变态杀手设立的森林迷宫。",
    "year": "2014",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "恶搞",
      "邪典",
      "万圣节",
      "颠覆童话"
    ],
    "genre": "动画/恐怖/喜剧"
  },
  {
    "id": "1437",
    "title": "死亡繁殖",
    "url": "./movie-1437.html",
    "cover": "./87.jpg",
    "oneLine": "一群大学生去荒岛度假,发现岛上的女人都被迫成为“怪物生育机器”。",
    "year": "2008",
    "type": "电影",
    "region": "澳大利亚",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "孤岛",
      "遗传实验",
      "变异",
      "生存"
    ],
    "genre": "恐怖/惊悚"
  },
  {
    "id": "1438",
    "title": "又快又贱又失控",
    "url": "./movie-1438.html",
    "cover": "./88.jpg",
    "oneLine": "为了节省成本,科技巨头将城市管理交给AI,直到AI算出清除人类才是最“高效”的解决方案。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "AI觉醒",
      "失控",
      "生存"
    ],
    "genre": "科幻,惊悚"
  },
  {
    "id": "1439",
    "title": "城市管制",
    "url": "./movie-1439.html",
    "cover": "./89.jpg",
    "oneLine": "为了降低犯罪率,AI系统“母亲”将所有居民的“犯罪欲望值”显示在头顶,直到一个欲望值为零的人出现了——那是被杀的目标。",
    "year": "2027",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "反乌托邦",
      "AI统治",
      "思维监控",
      "高概念"
    ],
    "genre": "科幻/悬疑/动作"
  },
  {
    "id": "1440",
    "title": "喜欢你我也是 第三季",
    "url": "./movie-1440.html",
    "cover": "./90.jpg",
    "oneLine": "本季召集前两季最遗憾的六对“意难平”素人嘉宾,共同入住“遗憾修复小屋”。",
    "year": "2025",
    "type": "综艺",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "素人",
      "社交实验",
      "返场",
      "破镜重圆"
    ],
    "genre": "真人秀/恋爱"
  },
  {
    "id": "1441",
    "title": "直播鬼戏院",
    "url": "./movie-1441.html",
    "cover": "./91.jpg",
    "oneLine": "六名网红进入废弃三十年的“丽都戏院”直播探险,镜头拍到了不在邀请名单上的第七个人。",
    "year": "2025",
    "type": "电影",
    "region": "中国台湾,日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "直播",
      "废弃戏院",
      "都市传说",
      "灵异"
    ],
    "genre": "恐怖,伪纪录片,惊悚"
  },
  {
    "id": "1442",
    "title": "没人了解我",
    "url": "./movie-1442.html",
    "cover": "./92.jpg",
    "oneLine": "一个被全校孤立的少女伪造了 Instagram 账号,却引发了真实的全网寻人风暴。",
    "year": "2025",
    "type": "电影",
    "region": "法国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "青少年",
      "孤独",
      "谎言",
      "社会观察"
    ],
    "genre": "剧情/心理"
  },
  {
    "id": "1443",
    "title": "呼叫助产士第十三季",
    "url": "./movie-1443.html",
    "cover": "./93.jpg",
    "oneLine": "1960年代末的伦敦东区,非神职助产士们在民权运动浪潮中,迎接新生与守护尊严。",
    "year": "2024",
    "type": "剧集",
    "region": "英国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "英剧",
      "年代医疗",
      "女性群像",
      "真实改编"
    ],
    "genre": "剧情/历史/医学"
  },
  {
    "id": "1444",
    "title": "世界习俗奇观",
    "url": "./movie-1444.html",
    "cover": "./94.jpg",
    "oneLine": "环球旅行的主持人走进十三个偏远部落,记录下你从未想象过的婚礼、葬礼和成人礼。",
    "year": "2019",
    "type": "纪录片",
    "region": "英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "人类学",
      "风土人情",
      "全球文化",
      "奇闻异事",
      "视觉盛宴"
    ],
    "genre": "纪录片/人文/旅行"
  },
  {
    "id": "1445",
    "title": "霸王血战史",
    "url": "./movie-1445.html",
    "cover": "./95.jpg",
    "oneLine": "历史上最被低估的奴隶起义领袖,他的尸体被钉在十字架上,但他的名字成了禁忌。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "古罗马",
      "角斗士",
      "史诗",
      "复仇",
      "冷兵器"
    ],
    "genre": "动作、历史、战争"
  },
  {
    "id": "1446",
    "title": "卧底肥妈3:绝地奶爸",
    "url": "./movie-1446.html",
    "cover": "./96.jpg",
    "oneLine": "男特工不得不假扮成肥胖保姆,带着三个熊孩子和一只鹦鹉,混入国际游轮派对。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "变装",
      "家庭冒险",
      "特工"
    ],
    "genre": "喜剧,动作"
  },
  {
    "id": "1447",
    "title": "真相追杀令",
    "url": "./movie-1447.html",
    "cover": "./97.jpg",
    "oneLine": "一个被网暴逼到自杀的女孩,临终前寄出了37封信。每封信里都是一个真相,而每个收信人,都曾在那场网暴里按过一次“发送键”。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "媒体复仇",
      "网络暴力",
      "反转再反转"
    ],
    "genre": "悬疑/犯罪"
  },
  {
    "id": "1448",
    "title": "舞影人生",
    "url": "./movie-1448.html",
    "cover": "./98.jpg",
    "oneLine": "一个痴迷摇滚乐的叛逆少年,为了追梦不得不去照顾他那双腿残疾、厌恶音乐的退伍老兵父亲。",
    "year": "2005",
    "type": "电影",
    "region": "英国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "摇滚",
      "青春",
      "父子",
      "梦想"
    ],
    "genre": "剧情,音乐"
  },
  {
    "id": "1449",
    "title": "天旋地恋粤语",
    "url": "./movie-1449.html",
    "cover": "./99.jpg",
    "oneLine": "失恋的街头涂鸦师每次睡着都会回到三天前,但只有爱上同一个人才能打破循环。",
    "year": "2023",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "粤语",
      "时空循环",
      "街头文化",
      "怀旧"
    ],
    "genre": "爱情,奇幻"
  },
  {
    "id": "1450",
    "title": "精灵高中:食尸鬼之魂",
    "url": "./movie-1450.html",
    "cover": "./100.jpg",
    "oneLine": "精灵高中的一年一度“惊吓舞会”上,一个新生食尸鬼发现自己的歌声能让全校怪物瞬间情绪失控。",
    "year": "2024",
    "type": "电影/动画",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "怪物",
      "高中",
      "音乐剧",
      "友情",
      "万圣节"
    ],
    "genre": "动画/喜剧/奇幻/校园"
  },
  {
    "id": "1451",
    "title": "孙中山",
    "url": "./movie-1451.html",
    "cover": "./101.jpg",
    "oneLine": "从檀香山到北京,一个理想主义者用一生推翻两千年帝制,却没能看到共和的果实。",
    "year": "1986",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "革命先驱",
      "史诗巨制",
      "历史人物"
    ],
    "genre": "剧情,历史,传记"
  },
  {
    "id": "1452",
    "title": "醉后大丈夫",
    "url": "./movie-1452.html",
    "cover": "./102.jpg",
    "oneLine": "四个中年老友在婚礼前夜集体断片,醒来时发现身上各多了一个奇怪的纹身。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "断片侦探",
      "反向解密",
      "宿醉宇宙",
      "抵押记忆"
    ],
    "genre": "喜剧/悬疑/冒险"
  },
  {
    "id": "1453",
    "title": "画布情缘",
    "url": "./movie-1453.html",
    "cover": "./103.jpg",
    "oneLine": "失明的天才画家和失意的画商助理,在一场真迹与赝品的鉴定中,用手摸出了彼此心上的褶皱。",
    "year": "2024",
    "type": "电影",
    "region": "法国/比利时",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "艺术",
      "盲人",
      "浪漫",
      "救赎",
      "唯美"
    ],
    "genre": "爱情"
  },
  {
    "id": "1454",
    "title": "大周小冰人第二季",
    "url": "./movie-1454.html",
    "cover": "./104.jpg",
    "oneLine": "大周首席冰人周莹开设“女子自嫁局”,教姑娘们倒追、休夫和分家产,被礼部以“伤风败俗”罪名告上金銮殿。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "冰人",
      "婚恋",
      "宋韵",
      "轻喜",
      "女性成长"
    ],
    "genre": "古装职场"
  },
  {
    "id": "1455",
    "title": "爆肝工程师的异世界狂想曲",
    "url": "./movie-1455.html",
    "cover": "./105.jpg",
    "oneLine": "程序员加班到猝死,醒来却在异世界用一行代码删除了最终BOSS。",
    "year": "2018",
    "type": "动画",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "龙傲天",
      "程序员",
      "轻松",
      "美食",
      "等级碾压"
    ],
    "genre": "奇幻,冒险,异世界,后宫"
  },
  {
    "id": "1456",
    "title": "廉政行动2009粤语",
    "url": "./movie-1456.html",
    "cover": "./106.jpg",
    "oneLine": "五宗改编自真实案件的贪污案,揭露香港金融、工程、教育等领域的腐败黑幕。",
    "year": "2009",
    "type": "电视剧",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "ICAC",
      "单元剧",
      "真实改编"
    ],
    "genre": "犯罪/悬疑/律政"
  },
  {
    "id": "1457",
    "title": "烽火奇遇结良缘粤语",
    "url": "./movie-1457.html",
    "cover": "./107.jpg",
    "oneLine": "战乱年代,一个逃难的戏班女伶与一个失忆的敌军将领,在一场假婚礼中动了真心。",
    "year": "1998",
    "type": "电视剧",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "粤语原声",
      "乱世情缘",
      "巾帼英雄"
    ],
    "genre": "古装/爱情/战争"
  },
  {
    "id": "1458",
    "title": "罗密",
    "url": "./movie-1458.html",
    "cover": "./108.jpg",
    "oneLine": "光环褪去后,“茜茜公主”罗密·施耐德在晚年的孤独、酗酒与对儿子深沉的爱。",
    "year": "2022",
    "type": "电影",
    "region": "德国/法国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "罗密·施耐德",
      "茜茜公主",
      "女性悲剧",
      "演艺圈"
    ],
    "genre": "传记,剧情"
  },
  {
    "id": "1459",
    "title": "惊魂鬼屋",
    "url": "./movie-1459.html",
    "cover": "./109.jpg",
    "oneLine": "六名年轻人进入一个号称“全美最恐怖”的鬼屋挑战,却发现里面的机关和鬼怪全是真实的。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "万圣节",
      "鬼屋探险",
      "密室逃脱",
      "虐杀",
      "反转结局"
    ],
    "genre": "恐怖/惊悚"
  },
  {
    "id": "1460",
    "title": "最后一分钟",
    "url": "./movie-1460.html",
    "cover": "./110.jpg",
    "oneLine": "1945 年柏林陷落前最后一小时,一个德国神父要在枪决名单上划掉十个人,但每个被救的人必须再杀一个人。",
    "year": "2027",
    "type": "电影",
    "region": "德国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "二战",
      "柏林",
      "投降前夜",
      "神父",
      "救赎"
    ],
    "genre": "剧情/战争/历史"
  },
  {
    "id": "1461",
    "title": "我的流氓情人",
    "url": "./movie-1461.html",
    "cover": "./111.jpg",
    "oneLine": "为了应付家族催婚,一个老实巴交的图书管理员雇佣了一个黑道大哥假扮男友,结果对方入戏太深。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "黑道",
      "纯情",
      "契约恋爱",
      "爆笑"
    ],
    "genre": "爱情喜剧"
  },
  {
    "id": "1462",
    "title": "黄河英雄",
    "url": "./movie-1462.html",
    "cover": "./112.jpg",
    "oneLine": "1938年黄河渡口,一群普通船夫用祖传的羊皮筏子和一腔热血,对抗日军精锐装甲部队。",
    "year": "2026",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "抗战",
      "黄河",
      "游击战",
      "兄弟情",
      "悲壮"
    ],
    "genre": "历史、战争、动作"
  },
  {
    "id": "1463",
    "title": "最爱的儿子",
    "url": "./movie-1463.html",
    "cover": "./113.jpg",
    "oneLine": "母亲临终前把所有遗产都留给了最不成器的儿子,另外两个子女在愤怒中发现了母亲的日记本。",
    "year": "2023",
    "type": "电影",
    "region": "法国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "母爱",
      "偏心",
      "兄弟",
      "养老",
      "扎心"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "1464",
    "title": "当爱情到来",
    "url": "./movie-1464.html",
    "cover": "./114.jpg",
    "oneLine": "社恐书店老板为了拒绝顾客,在门口写了九十九个“不营业”的理由,却被一个女孩全盘推翻。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "纯爱",
      "书店",
      "偶遇"
    ],
    "genre": "爱情,治愈"
  },
  {
    "id": "1465",
    "title": "贝蒂的承诺",
    "url": "./movie-1465.html",
    "cover": "./115.jpg",
    "oneLine": "60 岁的黑人奶奶贝蒂为了兑现对已故丈夫的承诺,报名参加了地下女子拳击锦标赛。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "女性拳击",
      "励志",
      "种族",
      "逆袭"
    ],
    "genre": "剧情/运动"
  },
  {
    "id": "1466",
    "title": "富江6:恶魔再生",
    "url": "./movie-1466.html",
    "cover": "./116.jpg",
    "oneLine": "一所女子高中全体崇拜一位“永不死的学姐”,新来的生物老师发现那竟是二十年前被他亲手分尸的富江。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "富江系列",
      "无限增殖",
      "女性恶魔",
      "肉体恐怖"
    ],
    "genre": "恐怖/奇幻"
  },
  {
    "id": "1467",
    "title": "非快速眼动之窗2023夏",
    "url": "./movie-1467.html",
    "cover": "./117.jpg",
    "oneLine": "一个能进入他人梦境的失眠医生,在2023年夏天接诊了四个奇怪的病人,他们的梦竟然相互连通。",
    "year": "2023",
    "type": "剧集",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "梦境",
      "单元剧",
      "夏日怪谈",
      "心理惊悚",
      "猎奇"
    ],
    "genre": "悬疑/奇幻/诗选剧"
  },
  {
    "id": "1468",
    "title": "嫌疑人之长夜将尽",
    "url": "./movie-1468.html",
    "cover": "./118.jpg",
    "oneLine": "一桩十七年前的铁案被重启,当年亲手将“凶手”送进监狱的刑警队长,如今却成了唯一的翻案希望。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "翻案",
      "律师",
      "心理压迫",
      "反转",
      "凶杀"
    ],
    "genre": "犯罪、悬疑"
  },
  {
    "id": "1469",
    "title": "白色微笑",
    "url": "./movie-1469.html",
    "cover": "./119.jpg",
    "oneLine": "牙医诊所的“微笑服务”备受好评,直到一位女患者在接受催眠治疗时,说出了隐藏的谋杀案。",
    "year": "2023",
    "type": "电影",
    "region": "韩国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "牙医",
      "催眠",
      "失控",
      "童年创伤"
    ],
    "genre": "惊悚/悬疑"
  },
  {
    "id": "1470",
    "title": "功夫小子",
    "url": "./movie-1470.html",
    "cover": "./120.jpg",
    "oneLine": "少林寺AI机器人意外穿越到现代小学,教废柴少年打“元宇宙功夫”。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "少年成长",
      "传统武术",
      "校园霸凌",
      "祖孙情"
    ],
    "genre": "动作/喜剧/家庭"
  },
  {
    "id": "1471",
    "title": "亚刻奥特曼国语",
    "url": "./movie-1471.html",
    "cover": "./121.jpg",
    "oneLine": "高中生获得亚刻之力后发现,每一代奥特曼人间体都在同一所高中就读。",
    "year": "2024",
    "type": "剧集",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "奥特曼",
      "国语配音",
      "新生代",
      "光之国"
    ],
    "genre": "科幻,动作"
  },
  {
    "id": "1472",
    "title": "坠爱少女",
    "url": "./movie-1472.html",
    "cover": "./122.jpg",
    "oneLine": "现代极限运动员高空坠落后穿越成古代受气包庶女,她用现代体术暴打恶霸,却引来了战神王爷的强势关注。",
    "year": "2024",
    "type": "电视剧",
    "region": "泰国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "穿越",
      "古代",
      "甜甜的恋爱",
      "搞笑",
      "追妻火葬场"
    ],
    "genre": "爱情,喜剧,奇幻"
  },
  {
    "id": "1473",
    "title": "富贵逼人太甚",
    "url": "./movie-1473.html",
    "cover": "./123.jpg",
    "oneLine": "一家子穷鬼中了六合彩,本以为发达了,结果麻烦比钱多。",
    "year": "1987",
    "type": "电影",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "香港喜剧",
      "中彩票",
      "暴发户",
      "市井小民",
      "讽刺"
    ],
    "genre": "喜剧/家庭"
  },
  {
    "id": "1474",
    "title": "弗拉基米尔·伊里奇·列宁",
    "url": "./movie-1474.html",
    "cover": "./124.jpg",
    "oneLine": "流亡归来的列宁在封闭车厢内与一位神秘乘客展开决定俄国命运的思想辩论。",
    "year": "2021",
    "type": "电影",
    "region": "俄罗斯",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "历史重构",
      "思想交锋",
      "时代巨变"
    ],
    "genre": "传记/历史"
  },
  {
    "id": "1475",
    "title": "抢救德梅洛",
    "url": "./movie-1475.html",
    "cover": "./125.jpg",
    "oneLine": "2003年,联合国驻伊拉克代表德梅洛在爆炸中濒死,废墟下的19个小时,他用最后的时间抢救了三个人的灵魂。",
    "year": "2014",
    "type": "电影",
    "region": "美国/巴西",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "联合国",
      "外交官",
      "伊拉克战争",
      "殉职",
      "理想主义"
    ],
    "genre": "剧情,传记,历史"
  },
  {
    "id": "1476",
    "title": "理想照耀中国",
    "url": "./movie-1476.html",
    "cover": "./126.jpg",
    "oneLine": "八个单元故事,讲述从新中国成立至今,不同时期普通人如何用自己的方式守护“理想”。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "单元剧",
      "时代楷模",
      "正能量",
      "真实改编"
    ],
    "genre": "剧情,历史,献礼"
  },
  {
    "id": "1477",
    "title": "海边的曼彻斯特",
    "url": "./movie-1477.html",
    "cover": "./127.jpg",
    "oneLine": "因为一次过失,他失去了三个孩子,从此再也无法原谅自己。",
    "year": "2016",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "悲伤",
      "创伤",
      "奥斯卡",
      "冷峻"
    ],
    "genre": "剧情"
  },
  {
    "id": "1478",
    "title": "狗爷猫妈",
    "url": "./movie-1478.html",
    "cover": "./128.jpg",
    "oneLine": "脾气火爆的退伍兵外公(狗爷)和精致利己主义的猫系妈妈,因为一只流浪狗开始同居。",
    "year": "2026",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "萌宠",
      "亲子关系",
      "重组家庭",
      "代际冲突",
      "治愈"
    ],
    "genre": "家庭/喜剧/教育"
  },
  {
    "id": "1479",
    "title": "国际特攻战",
    "url": "./movie-1479.html",
    "cover": "./129.jpg",
    "oneLine": "为了洗刷罪名,一群被开除的韩国精英特工,被迫和美国CIA的新人菜鸟合作,去黑市抢一枚决定世界命运的芯片。",
    "year": "2026",
    "type": "电影",
    "region": "韩国/美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "韩式幽默",
      "全球取景",
      "团队作战",
      "高燃打斗"
    ],
    "genre": "动作/谍战/喜剧"
  },
  {
    "id": "1480",
    "title": "飞天小女警2016第一季",
    "url": "./movie-1480.html",
    "cover": "./130.jpg",
    "oneLine": "花花、泡泡、毛毛发现打败怪兽容易,但经营自己的社交媒体人设太难。",
    "year": "2016",
    "type": "剧集",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "重启",
      "Z世代英雄",
      "社交媒体反派",
      "城市守护"
    ],
    "genre": "动作、动画、喜剧"
  },
  {
    "id": "1481",
    "title": "两个月亮",
    "url": "./movie-1481.html",
    "cover": "./131.jpg",
    "oneLine": "月球基地发生爆炸,唯一的幸存者醒来后发现地球上空出现了两个月亮,而自己不是自己。",
    "year": "2024",
    "type": "电影",
    "region": "韩国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "太空站",
      "克隆",
      "身份谜团",
      "黑天鹅事件"
    ],
    "genre": "科幻/悬疑/灾难"
  },
  {
    "id": "1482",
    "title": "漫长假期",
    "url": "./movie-1482.html",
    "cover": "./132.jpg",
    "oneLine": "被裁员的东京上班族回到乡下老家,发现父亲留下了一本记录“百年孤独假期”的神秘日记。",
    "year": "2023",
    "type": "电视剧",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "返乡",
      "失业",
      "治愈系",
      "钓鱼",
      "人生重启"
    ],
    "genre": "剧情/家庭/治愈"
  },
  {
    "id": "1483",
    "title": "扭计祖宗",
    "url": "./movie-1483.html",
    "cover": "./133.jpg",
    "oneLine": "民国骗术高手被迫收了个一根筋的警察当徒弟,两人联手用骗术对付真正的恶霸。",
    "year": "2023",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "民国",
      "斗智",
      "师徒",
      "市井"
    ],
    "genre": "喜剧,动作"
  },
  {
    "id": "1484",
    "title": "逃离旋转岛",
    "url": "./movie-1484.html",
    "cover": "./134.jpg",
    "oneLine": "一群少年发现自己住在一个不断旋转的人工岛上,而岛外是一片死寂的辐射废土。",
    "year": "2025",
    "type": "动画电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "迷宫",
      "循环",
      "青少年科幻",
      "反乌托邦"
    ],
    "genre": "科幻冒险"
  },
  {
    "id": "1485",
    "title": "凌晨一点",
    "url": "./movie-1485.html",
    "cover": "./135.jpg",
    "oneLine": "凌晨一点,一个出租司机遇到了五个让他怀疑人生的乘客。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "深夜",
      "奇遇",
      "单元故事",
      "都市传说",
      "黑色幽默"
    ],
    "genre": "悬疑,惊悚"
  },
  {
    "id": "1486",
    "title": "挚爱无尽",
    "url": "./movie-1486.html",
    "cover": "./136.jpg",
    "oneLine": "患癌丈夫隐瞒病情,用余生为失明妻子种下一片永不凋谢的花海。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "绝症",
      "守候",
      "亲情",
      "催泪"
    ],
    "genre": "剧情,爱情"
  },
  {
    "id": "1487",
    "title": "帅哥们",
    "url": "./movie-1487.html",
    "cover": "./137.jpg",
    "oneLine": "五个长相普通、唱跳俱废的男人组成男团,靠“装帅”误打误撞成了顶流。",
    "year": "2024",
    "type": "电影",
    "region": "韩国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "男团",
      "选秀",
      "逆袭",
      "搞笑"
    ],
    "genre": "喜剧,青春,音乐"
  },
  {
    "id": "1488",
    "title": "变形金刚08动画版第二季",
    "url": "./movie-1488.html",
    "cover": "./138.jpg",
    "oneLine": "擎天柱死了,威震天疯了,而地球其实是一个被封印的远古泰坦金刚。",
    "year": "2024",
    "type": "剧集/动画",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "变形金刚",
      "塞伯坦",
      "五面怪",
      "元始天尊"
    ],
    "genre": "科幻/动作"
  },
  {
    "id": "1489",
    "title": "冬之光",
    "url": "./movie-1489.html",
    "cover": "./139.jpg",
    "oneLine": "在东北零下三十度的冬天,一个聋哑修鞋匠为了给女儿凑大学学费,决定把自己最心爱的猎枪卖掉。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "东北",
      "工业衰落",
      "父子",
      "沉默"
    ],
    "genre": "剧情,文艺,家庭"
  },
  {
    "id": "1490",
    "title": "刺绣佳人",
    "url": "./movie-1490.html",
    "cover": "./140.jpg",
    "oneLine": "民国苏州,两个绣庄千金从挚友变对手,又在一幅失传的“双面异色绣”上找回初心,联手对抗外敌。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "非遗",
      "商战",
      "姐妹情",
      "逆袭"
    ],
    "genre": "剧情,古装,女性"
  },
  {
    "id": "1491",
    "title": "剑鬼",
    "url": "./movie-1491.html",
    "cover": "./141.jpg",
    "oneLine": "江户时代失明剑客被剑中怨灵附体,每挥一剑就吞噬一个他爱的人。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "剑豪",
      "怨灵",
      "复仇",
      "黑白画面"
    ],
    "genre": "动作/奇幻/武士"
  },
  {
    "id": "1492",
    "title": "计算机超战士 007",
    "url": "./movie-1492.html",
    "cover": "./142.jpg",
    "oneLine": "被邪恶组织改造成半机械人的高中生,必须在每次战斗后插入软盘来“格式化”自己的人性。",
    "year": "1992",
    "type": "特摄剧",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "赛博朋克",
      "特摄",
      "改造人",
      "电脑病毒",
      "童年回忆"
    ],
    "genre": "科幻/动作"
  },
  {
    "id": "1493",
    "title": "当流星划过天际",
    "url": "./movie-1493.html",
    "cover": "./143.jpg",
    "oneLine": "每次流星雨夜男主都会回到过去,但他发现每次改变过去,女友都会患上不同的绝症。",
    "year": "2024",
    "type": "电影",
    "region": "中国台湾",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "时空循环",
      "初恋",
      "疗愈",
      "绝症",
      "夏日"
    ],
    "genre": "爱情/奇幻"
  },
  {
    "id": "1494",
    "title": "麋鹿王",
    "url": "./movie-1494.html",
    "cover": "./144.jpg",
    "oneLine": "人类伐木队闯入森林,小麋鹿为了寻找传说中的麋鹿王,踏上了拯救家园的冒险之旅。",
    "year": "2009",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "国产动画",
      "森林冒险",
      "环保主题",
      "麋鹿"
    ],
    "genre": "动画/奇幻/冒险"
  },
  {
    "id": "1495",
    "title": "转折点",
    "url": "./movie-1495.html",
    "cover": "./145.jpg",
    "oneLine": "一位量子物理学家发明了查看平行宇宙的设备,却发现自己每一次人生的“转折点”都以失去挚爱为代价。",
    "year": "2023",
    "type": "剧集",
    "region": "德国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "蝴蝶效应",
      "平行宇宙",
      "人生选择",
      "量子力学",
      "虐心"
    ],
    "genre": "剧情,科幻"
  },
  {
    "id": "1496",
    "title": "哪吒·魔童归来",
    "url": "./movie-1496.html",
    "cover": "./146.jpg",
    "oneLine": "哪吒在封神大战中陨落后,一缕魔丸残魂落入现代都市,附身在一个被校园霸凌的孤僻男孩身上。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "神话新编",
      "哪吒重生",
      "魔童宇宙",
      "父子情",
      "反宿命"
    ],
    "genre": "动画/奇幻/动作"
  },
  {
    "id": "1497",
    "title": "我还有话说",
    "url": "./movie-1497.html",
    "cover": "./147.jpg",
    "oneLine": "十二名陪审员裁定被告谋杀罪成立,但宣判前最后一分钟,最沉默的第十一号举起了手:“我还有话说。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "陪审团",
      "密室",
      "推理",
      "反转"
    ],
    "genre": "悬疑"
  },
  {
    "id": "1498",
    "title": "风",
    "url": "./movie-1498.html",
    "cover": "./148.jpg",
    "oneLine": "精神科医生在新精神病院遇怪事,五个女病人都说自己是“风”,而真正的连环杀手可能就在身边。",
    "year": "2022",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "疯人院",
      "复仇",
      "女性",
      "反转"
    ],
    "genre": "悬疑,犯罪"
  },
  {
    "id": "1499",
    "title": "红牡丹赌徒:第二代继承者",
    "url": "./movie-1499.html",
    "cover": "./149.jpg",
    "oneLine": "昭和末年,红牡丹赌徒的女儿被迫继承赌场,用花札与刀光对抗意图吞并的关东黑帮。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "极道",
      "女性",
      "花札",
      "传承"
    ],
    "genre": "剧情/犯罪"
  },
  {
    "id": "1500",
    "title": "我是猫",
    "url": "./movie-1500.html",
    "cover": "./150.jpg",
    "oneLine": "夏目漱石笔下的无名猫复活在现代东京,冷眼观察一个沉迷社交网络的教师家庭,并决定帮他们找回真实情感。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "夏目漱石",
      "猫视角",
      "魔幻现实",
      "讽刺",
      "治愈"
    ],
    "genre": "奇幻/剧情/文学改编"
  },
  {
    "id": "1501",
    "title": "拉玛卡",
    "url": "./movie-1501.html",
    "cover": "./1.jpg",
    "oneLine": "五个陌生人在废弃歌剧院醒来,每人手腕上都刺着一个数字,只有一人能活着离开。",
    "year": "2022",
    "type": "电影",
    "region": "西班牙",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "密室",
      "复仇",
      "反转"
    ],
    "genre": "惊悚/悬疑/犯罪"
  },
  {
    "id": "1502",
    "title": "年轻母亲之家",
    "url": "./movie-1502.html",
    "cover": "./2.jpg",
    "oneLine": "一个为未成年妈妈提供庇护的公寓里,五个女孩决定抢回被渣男偷走的孩子。",
    "year": "2021",
    "type": "电影",
    "region": "韩国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "女性",
      "互助",
      "现实",
      "温情",
      "社会"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "1503",
    "title": "神圣之家",
    "url": "./movie-1503.html",
    "cover": "./3.jpg",
    "oneLine": "经营殡仪馆的天主教家庭,表面圣洁,背地里每个人都有见不得光的秘密。",
    "year": "2023",
    "type": "剧集",
    "region": "西班牙",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "宗教家庭",
      "秘密与谎言",
      "多代同堂"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "1504",
    "title": "埃及广场",
    "url": "./movie-1504.html",
    "cover": "./4.jpg",
    "oneLine": "摄像机架在开罗解放广场边一栋公寓的阳台上,对着同一片街景拍摄了整整三年。",
    "year": "2018",
    "type": "纪录片",
    "region": "德国/意大利/奥地利",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "阿拉伯之春",
      "开罗",
      "广场抗议",
      "社会运动"
    ],
    "genre": "纪录片/历史/政治"
  },
  {
    "id": "1505",
    "title": "面包师傅的妻子",
    "url": "./movie-1505.html",
    "cover": "./5.jpg",
    "oneLine": "巴黎米其林女主厨逃到乡下,却被面包店的憨厚老板用黄油香抓住了胃。",
    "year": "2024",
    "type": "电影",
    "region": "法国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "法式浪漫",
      "小镇",
      "美食",
      "治愈"
    ],
    "genre": "喜剧,爱情"
  },
  {
    "id": "1506",
    "title": "小手牵小狗",
    "url": "./movie-1506.html",
    "cover": "./6.jpg",
    "oneLine": "五个性格迥异的萌娃被迫接手一只会拆家的哈士奇,为了不被送走,他们必须教会狗狗一百个指令。",
    "year": "2026",
    "type": "剧集",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "萌娃",
      "萌宠",
      "治愈",
      "正能量"
    ],
    "genre": "喜剧,家庭"
  },
  {
    "id": "1507",
    "title": "最远的地方",
    "url": "./movie-1507.html",
    "cover": "./7.jpg",
    "oneLine": "为了拯救临终女儿的记忆,父亲驾驶飞船飞向宇宙最深处寻找“记忆晶体”。",
    "year": "2019",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "星际旅行",
      "情感羁绊",
      "硬科幻"
    ],
    "genre": "科幻,冒险"
  },
  {
    "id": "1508",
    "title": "复活之日",
    "url": "./movie-1508.html",
    "cover": "./8.jpg",
    "oneLine": "一种人工病毒泄露后几乎杀光全球男性,幸存的女性们必须重建造人社会。",
    "year": "1980",
    "type": "电影",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "病毒灾难",
      "末日求生",
      "军事科幻"
    ],
    "genre": "科幻"
  },
  {
    "id": "1509",
    "title": "如果你想要我",
    "url": "./movie-1509.html",
    "cover": "./9.jpg",
    "oneLine": "一对分手情侣定下规则:只要一方说出“如果你想要我”,另一方就必须无条件复合。",
    "year": "2024",
    "type": "电影",
    "region": "西班牙",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "欲望",
      "情感博弈",
      "西班牙电影",
      "大尺度",
      "心理"
    ],
    "genre": "剧情,爱情,情色"
  },
  {
    "id": "1510",
    "title": "饲养",
    "url": "./movie-1510.html",
    "cover": "./10.jpg",
    "oneLine": "他们在别墅地下室养了一个“怪物”,直到有一天,怪物学会了说话。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "寄生虫",
      "反转",
      "家庭伦理",
      "地下室",
      "怪物"
    ],
    "genre": "恐怖/惊悚"
  },
  {
    "id": "1511",
    "title": "上帝的男高音",
    "url": "./movie-1511.html",
    "cover": "./11.jpg",
    "oneLine": "世界顶级男高音在巅峰时期因手术失声,他在修道院的寂静中重新找到了歌唱的意义。",
    "year": "2018",
    "type": "电影",
    "region": "意大利/英国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "信仰",
      "嗓音",
      "意外失声",
      "救赎"
    ],
    "genre": "剧情/音乐/传记"
  },
  {
    "id": "1512",
    "title": "五个朋友3",
    "url": "./movie-1512.html",
    "cover": "./12.jpg",
    "oneLine": "五个少年收到一封来自未来的求救信,寄件人是 60 年后的他们自己。",
    "year": "2024",
    "type": "电影",
    "region": "英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "少年侦探",
      "暑假冒险",
      "古堡谜案",
      "系列续集"
    ],
    "genre": "冒险,儿童,悬疑"
  },
  {
    "id": "1513",
    "title": "暗网:蝉3301",
    "url": "./movie-1513.html",
    "cover": "./13.jpg",
    "oneLine": "一个神秘组织用堪比邪教的谜题在全球招募天才,通关者发现“奖品”是一张脸。",
    "year": "2026",
    "type": "剧集",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "解谜",
      "黑客",
      "招募",
      "游戏化"
    ],
    "genre": "悬疑科技"
  },
  {
    "id": "1514",
    "title": "欢乐集结号",
    "url": "./movie-1514.html",
    "cover": "./14.jpg",
    "oneLine": "一档由多位东北笑星联袂出演的单元喜剧,每集一个故事,专治各种不开心。",
    "year": "2013",
    "type": "综艺/剧集",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "东北喜剧",
      "卫视合制",
      "情景短剧",
      "笑星集结",
      "合家欢"
    ],
    "genre": "喜剧/短片集"
  },
  {
    "id": "1515",
    "title": "轰天谍战",
    "url": "./movie-1515.html",
    "cover": "./15.jpg",
    "oneLine": "退役特工发现最新型的 AI 导弹系统被植入“自毁后门”,而启动密钥就藏在他早已遗忘的前妻的记忆里。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "特工",
      "中情局",
      "硬核动作",
      "高科技",
      "全球追击"
    ],
    "genre": "动作/谍战"
  },
  {
    "id": "1516",
    "title": "战栗余波",
    "url": "./movie-1516.html",
    "cover": "./16.jpg",
    "oneLine": "地震幸存者发现,每次余震发生时,自己就会在幻觉中杀死一个身边的人。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "创伤后应激",
      "幻觉杀人",
      "密室困局"
    ],
    "genre": "恐怖/心理惊悚"
  },
  {
    "id": "1517",
    "title": "不丹没有枪",
    "url": "./movie-1517.html",
    "cover": "./17.jpg",
    "oneLine": "一个满脑子只有“武器”的军火贩子误闯不丹,为了活命,他必须在不射出一发子弹的情况下,成为当地射箭比赛的冠军。",
    "year": "2023",
    "type": "电影",
    "region": "不丹/中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "公路",
      "幸福指数",
      "文化冲突"
    ],
    "genre": "喜剧/剧情"
  },
  {
    "id": "1518",
    "title": "恐怖休息站2",
    "url": "./movie-1518.html",
    "cover": "./18.jpg",
    "oneLine": "废弃休息站频发失踪案,过路司机发现每具尸体嘴里都含着一枚生锈的车票。",
    "year": "2024",
    "type": "电影",
    "region": "中国台湾",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "公路",
      "灵异",
      "复仇",
      "密闭空间"
    ],
    "genre": "惊悚/恐怖"
  },
  {
    "id": "1519",
    "title": "塔玛拉·德鲁",
    "url": "./movie-1519.html",
    "cover": "./19.jpg",
    "oneLine": "整形后重回小镇的丑女作家,用自己的美貌和笔杆,引诱所有当年伤害过她的人自相残杀。",
    "year": "2024",
    "type": "电影",
    "region": "英国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "整形归来",
      "复仇",
      "小镇秘事",
      "情感纠葛",
      "黑色幽默"
    ],
    "genre": "剧情悬疑"
  },
  {
    "id": "1520",
    "title": "城市服装店",
    "url": "./movie-1520.html",
    "cover": "./20.jpg",
    "oneLine": "巷子深处有家只在雨夜开门的服装店,每件衣服都藏着一段被遗忘的人生,穿上它,你就成了故事的主角。",
    "year": "2026",
    "type": "剧集",
    "region": "中国台湾",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "单元剧",
      "治愈",
      "时空交错",
      "服装"
    ],
    "genre": "剧情/奇幻"
  },
  {
    "id": "1521",
    "title": "声临其境 宝藏配音间",
    "url": "./movie-1521.html",
    "cover": "./21.jpg",
    "oneLine": "一扇神秘的红色大门后,顶级配音演员们只用声音就能创造整个世界。",
    "year": "2021",
    "type": "综艺",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "幕后揭秘",
      "大咖云集",
      "声音魔法",
      "行业生存"
    ],
    "genre": "真人秀、声音竞技"
  },
  {
    "id": "1522",
    "title": "野兽与美人",
    "url": "./movie-1522.html",
    "cover": "./22.jpg",
    "oneLine": "美容编辑因使用“返老还童”面霜,后背长出了野兽的毛发与獠牙。",
    "year": "2025",
    "type": "电影",
    "region": "法国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "寓言式",
      "隐喻",
      "身体恐怖",
      "唯美",
      "另类"
    ],
    "genre": "奇幻,爱情,剧情"
  },
  {
    "id": "1523",
    "title": "高高在上2019",
    "url": "./movie-1523.html",
    "cover": "./23.jpg",
    "oneLine": "攀登珠峰途中遭遇暴风雪,两个登山队争抢最后一个氧气瓶,人性在8000米高空曝光。",
    "year": "2019",
    "type": "电影",
    "region": "中国内地",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "登山",
      "人性",
      "海拔",
      "困境"
    ],
    "genre": "剧情/运动"
  },
  {
    "id": "1524",
    "title": "里世界郊游",
    "url": "./movie-1524.html",
    "cover": "./24.jpg",
    "oneLine": "两个女孩穿梭于现实世界与充满都市传说的“里世界”之间,靠猎杀怪物卖钱维生。",
    "year": "2021",
    "type": "动漫",
    "region": "日本",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "都市传说",
      "异空间",
      "怪谈",
      "探索"
    ],
    "genre": "科幻,悬疑,百合"
  },
  {
    "id": "1525",
    "title": "南法撩妹记",
    "url": "./movie-1525.html",
    "cover": "./25.jpg",
    "oneLine": "三个巴黎宅男去南法学“撩妹”,结果被当地渔夫的女儿们上了一堂“反撩课”。",
    "year": "2020",
    "type": "电影",
    "region": "法国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "夏日度假",
      "尬聊美学",
      "屌丝逆袭",
      "海滩艳遇",
      "侯麦式"
    ],
    "genre": "喜剧/爱情"
  },
  {
    "id": "1526",
    "title": "老板",
    "url": "./movie-1526.html",
    "cover": "./26.jpg",
    "oneLine": "科技公司以“团队建设”为名,将员工扔进无人岛进行大逃杀,胜者将成为新任CEO。",
    "year": "2026",
    "type": "剧集",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "监视",
      "大逃杀",
      "社畜"
    ],
    "genre": "职场/惊悚"
  },
  {
    "id": "1527",
    "title": "左轮百合",
    "url": "./movie-1527.html",
    "cover": "./27.jpg",
    "oneLine": "黑帮老大的情妇和女保镖互相敌视,却在帮派内斗中背靠背举起了左轮手枪。",
    "year": "2018",
    "type": "电影",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "双女主",
      "黑帮",
      "枪战",
      "百合",
      "暴力美学"
    ],
    "genre": "动作、犯罪、女同"
  },
  {
    "id": "1528",
    "title": "前妻",
    "url": "./movie-1528.html",
    "cover": "./28.jpg",
    "oneLine": "离婚三年后,我的前妻成了我顶头上司的未婚妻,而她的复仇清单上,我是最后一个目标。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "婚姻",
      "悬疑",
      "女性",
      "复仇"
    ],
    "genre": "剧情"
  },
  {
    "id": "1529",
    "title": "爱之谷",
    "url": "./movie-1529.html",
    "cover": "./29.jpg",
    "oneLine": "在伊朗最保守的沙漠村庄,一个丧偶的老男人和自己年轻的养女,用整整十年来确定彼此不是父女。",
    "year": "2023",
    "type": "电影",
    "region": "伊朗",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "禁忌之恋",
      "沙漠",
      "父权",
      "诗意"
    ],
    "genre": "剧情、爱情"
  },
  {
    "id": "1530",
    "title": "孤帆灭枭",
    "url": "./movie-1530.html",
    "cover": "./30.jpg",
    "oneLine": "一名涉嫌洗钱百亿的金融家逃往公海,却发现自己精心改造的智能帆船,正被一个神秘人远程操控,变成海上棺材。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "高智商犯罪",
      "海上追杀",
      "独角戏"
    ],
    "genre": "犯罪,惊悚"
  },
  {
    "id": "1531",
    "title": "连根拔起劫银行",
    "url": "./movie-1531.html",
    "cover": "./31.jpg",
    "oneLine": "一群面临失业的社区园艺师,决定利用专业知识挖地道,去偷银行金库里那颗象征贪婪的巨型钻石。",
    "year": "2023",
    "type": "电影",
    "region": "英国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "英式幽默",
      "劫盗",
      "中年危机",
      "园艺",
      "草根"
    ],
    "genre": "犯罪"
  },
  {
    "id": "1532",
    "title": "微笑闪士",
    "url": "./movie-1532.html",
    "cover": "./32.jpg",
    "oneLine": "为了攒钱还债,一位枪法如神的金发少女在荒漠小镇当起了“微笑保镖”,却不知雇主就是她要抓捕的恶棍。",
    "year": "2004",
    "type": "剧集/动画",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "枪战",
      "美少女",
      "西部风"
    ],
    "genre": "动作,喜剧"
  },
  {
    "id": "1533",
    "title": "我老婆未结婚",
    "url": "./movie-1533.html",
    "cover": "./33.jpg",
    "oneLine": "婚姻倦怠期的高管意外穿越回大学时代,发现未来的老婆正被校草狂追,而他必须让“陌生”的她再次爱上自己。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "穿越",
      "婚姻危机",
      "追妻火葬场",
      "搞笑"
    ],
    "genre": "爱情/奇幻"
  },
  {
    "id": "1534",
    "title": "太太太厉害",
    "url": "./movie-1534.html",
    "cover": "./34.jpg",
    "oneLine": "外婆、妈妈和孙女三代女性意外获得超能力,联手整顿自家经营的破败民宿。",
    "year": "2023",
    "type": "剧集",
    "region": "中国台湾",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "三代同堂",
      "超能力",
      "爆笑",
      "亲情"
    ],
    "genre": "喜剧,家庭,奇幻"
  },
  {
    "id": "1535",
    "title": "雨光",
    "url": "./movie-1535.html",
    "cover": "./35.jpg",
    "oneLine": "她收集全世界的雨声,只为在那些声音里,找到二十年前那个雨天为她撑伞的少年。",
    "year": "2024",
    "type": "电影",
    "region": "法国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "雨声",
      "盲人调音师",
      "治愈系",
      "文艺向",
      "错过与重逢"
    ],
    "genre": "剧情/爱情"
  },
  {
    "id": "1536",
    "title": "失贞记",
    "url": "./movie-1536.html",
    "cover": "./36.jpg",
    "oneLine": "1960年代法国乡村,一个被未婚夫抛弃的保守女孩,用一个夏天通过在不同男人身上体验“失贞”来找寻自我。",
    "year": "1967",
    "type": "电影",
    "region": "法国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "新浪潮",
      "女性",
      "解放",
      "乡村"
    ],
    "genre": "剧情,情色"
  },
  {
    "id": "1537",
    "title": "独生子",
    "url": "./movie-1537.html",
    "cover": "./37.jpg",
    "oneLine": "乡下母亲送儿子去东京读书,多年后探望,却发现儿子只是工厂里一名落魄的夜校教师。",
    "year": "1936",
    "type": "电影",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "小津安二郎",
      "黑白",
      "亲情",
      "社会现实",
      "催泪"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "1538",
    "title": "为了谁的炼金术师",
    "url": "./movie-1538.html",
    "cover": "./38.jpg",
    "oneLine": "在炼金术即武器的战场上,一个能治愈一切却杀不死人的少年,成了敌我双方争抢的“终极兵器”。",
    "year": "2018",
    "type": "电影",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "等价交换",
      "军国反思",
      "兄弟情",
      "异世界"
    ],
    "genre": "动画,奇幻,战争"
  },
  {
    "id": "1539",
    "title": "猎杀",
    "url": "./movie-1539.html",
    "cover": "./39.jpg",
    "oneLine": "一位退役的传奇狙击手隐居山林,当一群高科技雇佣兵来猎杀他时,他决定把猎场变为坟场。",
    "year": "2025",
    "type": "电影",
    "region": "英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "狙击手",
      "复仇",
      "智商对决"
    ],
    "genre": "动作,惊悚"
  },
  {
    "id": "1540",
    "title": "大梦难忘",
    "url": "./movie-1540.html",
    "cover": "./40.jpg",
    "oneLine": "四十岁的失败者每次睡着都会回到高三教室,醒来却只记得一道永远做不对的数学题。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "时间循环",
      "青春怀旧",
      "高考",
      "救赎",
      "成长"
    ],
    "genre": "剧情/奇幻"
  },
  {
    "id": "1541",
    "title": "无名圣人",
    "url": "./movie-1541.html",
    "cover": "./41.jpg",
    "oneLine": "梵蒂冈地下墓穴出土的“无名圣骨”,经DNA检测发现竟属于一个活在现代的普通人。",
    "year": "2023",
    "type": "电影",
    "region": "法国/意大利",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "宗教",
      "圣物",
      "考古",
      "反转",
      "人性"
    ],
    "genre": "剧情/悬疑/历史"
  },
  {
    "id": "1542",
    "title": "无字碑歌:武则天传",
    "url": "./movie-1542.html",
    "cover": "./42.jpg",
    "oneLine": "本剧基于最新出土的唐代墓志铭,重新解构武则天从感业寺尼姑到一代女皇的六十年,揭示“无字碑”下掩埋的盟友与尸骨。",
    "year": "2026",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "武则天",
      "大女主",
      "权谋",
      "考古新解"
    ],
    "genre": "历史/传记/古装"
  },
  {
    "id": "1543",
    "title": "黑马",
    "url": "./movie-1543.html",
    "cover": "./43.jpg",
    "oneLine": "一支由外卖员、保安、网管组成的草根电竞队,誓言要打败全国冠军。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "电竞",
      "逆袭",
      "青春"
    ],
    "genre": "剧情,励志"
  },
  {
    "id": "1544",
    "title": "两个母亲",
    "url": "./movie-1544.html",
    "cover": "./44.jpg",
    "oneLine": "十七岁少女婚礼当天,两位自称是她母亲的女人同时出现在礼堂门口。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "亲情",
      "领养",
      "身世之谜",
      "女性",
      "催泪"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "1545",
    "title": "哈利变成树",
    "url": "./movie-1545.html",
    "cover": "./45.jpg",
    "oneLine": "每当他说谎,身体的一部分就会变成木头,直到有一天,他全身长满了枝叶。",
    "year": "2026",
    "type": "电影",
    "region": "英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "超现实",
      "身体异变",
      "环保寓言",
      "唯美画面"
    ],
    "genre": "奇幻/剧情/文艺"
  },
  {
    "id": "1546",
    "title": "继女",
    "url": "./movie-1546.html",
    "cover": "./46.jpg",
    "oneLine": "富翁去世后,三个亲生子女发现,父亲把90%遗产留给了一个从未露面的继女,而这个“继女”竟然一直在他们身边当保姆。",
    "year": "2023",
    "type": "剧集",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "遗产",
      "重组家庭",
      "催眠",
      "身份互换",
      "复仇"
    ],
    "genre": "家庭伦理悬疑"
  },
  {
    "id": "1547",
    "title": "变装男侍",
    "url": "./movie-1547.html",
    "cover": "./47.jpg",
    "oneLine": "维多利亚时代,一个女孩扮成男侍进入贵族家庭,却同时被少爷和小姐爱上了。",
    "year": "2022",
    "type": "电影",
    "region": "英国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "维多利亚时代",
      "性别扮演",
      "阶层跨越",
      "隐秘之恋"
    ],
    "genre": "剧情/历史/同性"
  },
  {
    "id": "1548",
    "title": "代号尼克·比尔",
    "url": "./movie-1548.html",
    "cover": "./48.jpg",
    "oneLine": "冷战时期,一名双面间谍被清除记忆后派回敌方,却发现自己出卖的那个人是自己最好的朋友。",
    "year": "2024",
    "type": "电影",
    "region": "英国/美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "双重间谍",
      "记忆删除",
      "冷战"
    ],
    "genre": "惊悚,间谍,悬疑"
  },
  {
    "id": "1549",
    "title": "天台镇",
    "url": "./movie-1549.html",
    "cover": "./49.jpg",
    "oneLine": "繁华都市楼顶的违章建筑群“天台镇”里,突然出现了一具没有指纹的尸体,镇长下令封镇。",
    "year": "2025",
    "type": "剧集",
    "region": "中国台湾",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "都市传说",
      "黑色幽默",
      "社区悬疑",
      "单元剧",
      "人性寓言"
    ],
    "genre": "悬疑/奇幻/社会"
  },
  {
    "id": "1550",
    "title": "初恋补时",
    "url": "./movie-1550.html",
    "cover": "./50.jpg",
    "oneLine": "高三男生偶然收到一盒来自十年后的磁带,里面录着“未来的他”指导“现在的他”如何追到初恋。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "广播社",
      "磁带",
      "倒带",
      "平行时空",
      "高校"
    ],
    "genre": "爱情、奇幻"
  },
  {
    "id": "1551",
    "title": "一半海水,一半火焰",
    "url": "./movie-1551.html",
    "cover": "./51.jpg",
    "oneLine": "一个靠敲诈为生的皮条客,故意把一个纯情女孩拖进自己的肮脏世界,最后两人都被爱情烧成了灰。",
    "year": "2008",
    "type": "电影",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "虐恋",
      "皮条客与纯情女",
      "王朔改编",
      "毁灭性爱情"
    ],
    "genre": "剧情/爱情/犯罪"
  },
  {
    "id": "1552",
    "title": "血肉秀",
    "url": "./movie-1552.html",
    "cover": "./52.jpg",
    "oneLine": "一档过气综艺节目为了翻红,开始让嘉宾在舞台上进行活体器官艺术改造。",
    "year": "2024",
    "type": "电影",
    "region": "加拿大",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "邪典",
      "人体改造",
      "直播",
      "视觉冲击",
      "社会讽刺"
    ],
    "genre": "恐怖,真人秀"
  },
  {
    "id": "1553",
    "title": "捍卫家园",
    "url": "./movie-1553.html",
    "cover": "./53.jpg",
    "oneLine": "一名退役侦察兵发现老家被黑心开发商强拆,独自在丛林中布下百道陷阱反击。",
    "year": "2022",
    "type": "电影",
    "region": "马来西亚",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "丛林战",
      "老兵",
      "土地掠夺",
      "复仇",
      "硬核"
    ],
    "genre": "动作/犯罪"
  },
  {
    "id": "1554",
    "title": "榴莲飘飘",
    "url": "./movie-1554.html",
    "cover": "./54.jpg",
    "oneLine": "一个在都市混不下去的落魄厨师回到祖传的榴莲园,意外通过直播卖榴莲成为网红,却不得不面对家族土地被征用的危机。",
    "year": "2025",
    "type": "电影",
    "region": "马来西亚,中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "华人社会",
      "榴莲园",
      "返乡故事"
    ],
    "genre": "喜剧,剧情,家庭"
  },
  {
    "id": "1555",
    "title": "海边电影院",
    "url": "./movie-1555.html",
    "cover": "./55.jpg",
    "oneLine": "三个青年在海边废弃影院看战争片,银幕里的士兵朝他们开枪。",
    "year": "2020",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "迷影情结",
      "穿越",
      "反战"
    ],
    "genre": "剧情/奇幻"
  },
  {
    "id": "1556",
    "title": "爱人的最后一封情书",
    "url": "./movie-1556.html",
    "cover": "./56.jpg",
    "oneLine": "一个现代女记者发现了一叠60年代的情书,信中出轨的女人,竟是自己的外婆。",
    "year": "2021",
    "type": "电影",
    "region": "英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "书信",
      "跨越时空",
      "出轨与救赎",
      "女性独立",
      "双线叙事"
    ],
    "genre": "爱情/剧情/年代"
  },
  {
    "id": "1557",
    "title": "橡树男孩",
    "url": "./movie-1557.html",
    "cover": "./57.jpg",
    "oneLine": "1943年,沉默寡言的孤儿被橡树匠人收养,树洞里藏着他不敢说的身世。",
    "year": "2023",
    "type": "电影",
    "region": "瑞典",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "成长",
      "二战",
      "木匠",
      "秘密",
      "和解"
    ],
    "genre": "剧情家庭"
  },
  {
    "id": "1558",
    "title": "笔仙魔咒",
    "url": "./movie-1558.html",
    "cover": "./58.jpg",
    "oneLine": "四名女生在废弃校舍玩笔仙,笔尖在纸上刻下血字:“第四个死的是召唤者”。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "笔仙",
      "诅咒",
      "校服"
    ],
    "genre": "恐怖,校园,巫术"
  },
  {
    "id": "1559",
    "title": "战争天堂",
    "url": "./movie-1559.html",
    "cover": "./59.jpg",
    "oneLine": "为了救出藏在集中营里的犹太男孩,一名俄国贵族女囚被迫色诱残忍的纳粹指挥官。",
    "year": "2025",
    "type": "电影",
    "region": "俄罗斯",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "二战",
      "集中营",
      "人性拷问",
      "黑白与彩色转换",
      "女性视角"
    ],
    "genre": "战争/剧情/历史"
  },
  {
    "id": "1560",
    "title": "丧尸禁区",
    "url": "./movie-1560.html",
    "cover": "./60.jpg",
    "oneLine": "丧尸爆发后,全香港最安全的地方竟是——已经被清拆的九龙城寨旧址。",
    "year": "2016",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "丧尸",
      "九龙城寨",
      "困兽斗",
      "黑色幽默"
    ],
    "genre": "恐怖,动作,丧尸"
  },
  {
    "id": "1561",
    "title": "阴阳路九之命转乾坤",
    "url": "./movie-1561.html",
    "cover": "./61.jpg",
    "oneLine": "风水师为了救回被邪灵勾走的亡妻,使用禁术强行逆转自己和儿子的命格。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "邪术",
      "轮回",
      "经典"
    ],
    "genre": "恐怖/奇幻"
  },
  {
    "id": "1562",
    "title": "穿越情欲海",
    "url": "./movie-1562.html",
    "cover": "./62.jpg",
    "oneLine": "五十岁的中年妇女在网上遇到少年水手,相约在跨大西洋邮轮上共度一夜。",
    "year": "2006",
    "type": "电影",
    "region": "法国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "船戏",
      "中年危机",
      "网恋",
      "女性欲望"
    ],
    "genre": "爱情,剧情"
  },
  {
    "id": "1563",
    "title": "机器人们",
    "url": "./movie-1563.html",
    "cover": "./63.jpg",
    "oneLine": "在废弃的机器人墓地里,最后一个尚未断电的保姆型机器人开始给人类写一封永远不会寄出的信。",
    "year": "2026",
    "type": "电影",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "人工智能",
      "觉醒",
      "存在主义"
    ],
    "genre": "科幻伦理"
  },
  {
    "id": "1564",
    "title": "一念杀机",
    "url": "./movie-1564.html",
    "cover": "./64.jpg",
    "oneLine": "一个男人在深夜接到电话,得知妻子出轨,接下来十秒内的每个不同选择,都引向一个完全不同的结局。",
    "year": "2022",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "平行宇宙",
      "一念之差",
      "蝴蝶效应",
      "烧脑"
    ],
    "genre": "悬疑/犯罪"
  },
  {
    "id": "1565",
    "title": "盗影谜情",
    "url": "./movie-1565.html",
    "cover": "./65.jpg",
    "oneLine": "神出鬼没的侠盗“黑影”每次作案都留下神秘符号,而追捕他的女警发现这些符号竟指向一桩陈年冤案。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "侠盗",
      "女警",
      "艺术大盗",
      "猫鼠游戏",
      "暧昧"
    ],
    "genre": "动作,悬疑,爱情"
  },
  {
    "id": "1566",
    "title": "光芒",
    "url": "./movie-1566.html",
    "cover": "./66.jpg",
    "oneLine": "一群被家人遗弃的盲人孤儿,在一位落魄教练带领下,试图用棒球敲开人生的“第一扇门”。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "盲人",
      "棒球",
      "逆袭",
      "真实改编"
    ],
    "genre": "运动,励志"
  },
  {
    "id": "1567",
    "title": "为爱叛逆2",
    "url": "./movie-1567.html",
    "cover": "./67.jpg",
    "oneLine": "前作男主假死隐退三年后,发现仇家绑架了他的妻儿,他必须披上那件黑色皮衣再次为爱而战。",
    "year": "2024",
    "type": "电影",
    "region": "印度",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "飙车",
      "父子仇怨",
      "复仇",
      "宝莱坞",
      "逆袭"
    ],
    "genre": "动作/爱情/剧情"
  },
  {
    "id": "1568",
    "title": "红色密令",
    "url": "./movie-1568.html",
    "cover": "./68.jpg",
    "oneLine": "军情五处打字员发现领导是克格勃间谍,但她是个连五十个单词都打不顺的黑户移民。",
    "year": "2024",
    "type": "电影",
    "region": "英国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "冷战",
      "间谍",
      "打字机",
      "双面间谍",
      "真实事件改编"
    ],
    "genre": "惊悚,悬疑,历史"
  },
  {
    "id": "1569",
    "title": "极限挑战宝藏行国家公园季",
    "url": "./movie-1569.html",
    "cover": "./69.jpg",
    "oneLine": "极限男团深入五大国家公园,在寻找“生态宝藏”的过程中遭遇各种自然考验。",
    "year": "2023",
    "type": "综艺/真人秀",
    "region": "中国内地",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "极限挑战",
      "环保",
      "国家公园",
      "寻宝",
      "户外"
    ],
    "genre": "真人秀/冒险/公益"
  },
  {
    "id": "1570",
    "title": "第19分部",
    "url": "./movie-1570.html",
    "cover": "./70.jpg",
    "oneLine": "在一个处理“多余平行宇宙”的清闲政府分部里,七名公务员发现他们自己就是这个宇宙即将被删除的“错误”。",
    "year": "2023",
    "type": "剧集",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "平行宇宙",
      "公务员",
      "官僚机构",
      "多元宇宙管理局",
      "黑色幽默"
    ],
    "genre": "科幻,悬疑,办公室喜剧"
  },
  {
    "id": "1571",
    "title": "含冤莫白酒醒时",
    "url": "./movie-1571.html",
    "cover": "./71.jpg",
    "oneLine": "一个被冤枉杀人的酒鬼,每次醉酒后会短暂恢复一小段记忆碎片,他必须在清醒与宿醉之间拼凑出真凶。",
    "year": "2023",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "失忆",
      "冤案",
      "复仇",
      "底层",
      "社会"
    ],
    "genre": "悬疑,犯罪,剧情"
  },
  {
    "id": "1572",
    "title": "披荆斩棘3",
    "url": "./movie-1572.html",
    "cover": "./72.jpg",
    "oneLine": "32位跨界男艺人争夺“滚烫家族”席位,全程无淘汰,但隐秘规则是“自我了断”。",
    "year": "2023",
    "type": "综艺",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "竞演",
      "哥哥",
      "怀旧",
      "跨界"
    ],
    "genre": "真人秀/音乐"
  },
  {
    "id": "1573",
    "title": "幸福门",
    "url": "./movie-1573.html",
    "cover": "./73.jpg",
    "oneLine": "一扇名为“幸福门”的装置可以删除痛苦的记忆,但被删除的记忆开始自行变异并追杀主人。",
    "year": "2027",
    "type": "剧集",
    "region": "韩国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "虚拟现实",
      "乌托邦",
      "记忆删除",
      "阶层"
    ],
    "genre": "悬疑,科幻,惊悚"
  },
  {
    "id": "1574",
    "title": "国色天香",
    "url": "./movie-1574.html",
    "cover": "./74.jpg",
    "oneLine": "民国时期,上海滩第一香水世家的大小姐神秘失踪,一个卖花女被找来假扮她,却闻出家族里隐藏多年的谋杀秘密。",
    "year": "2010",
    "type": "剧集",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "民国",
      "香水",
      "替身",
      "家族恩怨"
    ],
    "genre": "爱情,悬疑,年代"
  },
  {
    "id": "1575",
    "title": "兔八哥斗士大电影",
    "url": "./movie-1575.html",
    "cover": "./75.jpg",
    "oneLine": "兔八哥误入全球最火的VR格斗游戏,必须用“嘴炮”和“整蛊”打败各路格斗大神。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "格斗大赛",
      "虚拟现实",
      "ACG梗",
      "胡闹"
    ],
    "genre": "动画、喜剧"
  },
  {
    "id": "1576",
    "title": "无人之境",
    "url": "./movie-1576.html",
    "cover": "./76.jpg",
    "oneLine": "一战期间,一个俄国兵和一个德国兵被困在同一个弹坑里,从你死我活的敌人变成了唯一的生存希望。",
    "year": "2024",
    "type": "电影",
    "region": "俄罗斯",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "一战",
      "人性",
      "对峙"
    ],
    "genre": "战争,剧情"
  },
  {
    "id": "1577",
    "title": "龙之心4:心火之战",
    "url": "./movie-1577.html",
    "cover": "./77.jpg",
    "oneLine": "最后一位屠龙者发现自己是半龙血脉,必须在人类与龙族的战争中选择立场。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "屠龙者",
      "龙族内战",
      "火焰魔法"
    ],
    "genre": "奇幻/动作/冒险"
  },
  {
    "id": "1578",
    "title": "家族荣誉5:家门的归还",
    "url": "./movie-1578.html",
    "cover": "./78.jpg",
    "oneLine": "为了继承消失三十年的家族宝藏,三个骗子假扮成黑道家族的私生子归来。",
    "year": "2026",
    "type": "电影 喜剧/犯罪/家庭",
    "region": "韩国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "黑帮喜剧",
      "家族离散",
      "假扮归来",
      "身份错位"
    ],
    "genre": "喜剧/犯罪/家庭"
  },
  {
    "id": "1579",
    "title": "演员龟冈拓次",
    "url": "./movie-1579.html",
    "cover": "./79.jpg",
    "oneLine": "万年配角的日常:在片场被大腕欺负,在居酒屋被老板娘爱慕,在梦中与黑泽明对戏。",
    "year": "2015",
    "type": "电影",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "黄金配角",
      "小人物",
      "演艺圈",
      "生活流"
    ],
    "genre": "剧情/喜剧"
  },
  {
    "id": "1580",
    "title": "非可疑人员",
    "url": "./movie-1580.html",
    "cover": "./80.jpg",
    "oneLine": "MI5最废柴的办公室文员小组,在总部遇袭后,被迫成为拯救国家的最后希望,但他们看起来实在是......非可疑。",
    "year": "2025",
    "type": "剧集",
    "region": "英国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "黑色幽默",
      "间谍",
      "反类型"
    ],
    "genre": "喜剧/悬疑"
  },
  {
    "id": "1581",
    "title": "霍多洛夫斯基星座",
    "url": "./movie-1581.html",
    "cover": "./81.jpg",
    "oneLine": "独自在空间站驻留的宇航员,开始在舷窗外看到一个不存在的星座。",
    "year": "2025",
    "type": "电影",
    "region": "俄罗斯",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "宇航员",
      "星座",
      "孤独",
      "幻觉",
      "宇宙"
    ],
    "genre": "科幻剧情"
  },
  {
    "id": "1582",
    "title": "本能2025",
    "url": "./movie-1582.html",
    "cover": "./82.jpg",
    "oneLine": "基因改造过的犯罪心理学家,利用AI模拟犯罪时,发现自己体内被植入了杀人“本能”。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "重启经典",
      "硬科幻",
      "基因犯罪",
      "女性反英雄",
      "赛博朋克"
    ],
    "genre": "悬疑,惊悚,犯罪"
  },
  {
    "id": "1583",
    "title": "爱,不散",
    "url": "./movie-1583.html",
    "cover": "./83.jpg",
    "oneLine": "一对离婚多年的花甲老人,因旧房拆迁被迫同居一室,却意外重燃爱火。",
    "year": "2023",
    "type": "电影",
    "region": "中国内地",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "温情",
      "养老",
      "黄昏恋",
      "代际冲突",
      "都市"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "1584",
    "title": "决战枭雄",
    "url": "./movie-1584.html",
    "cover": "./84.jpg",
    "oneLine": "最信任的兄弟,就是插在你胸口的最后一刀。",
    "year": "2018",
    "type": "电影",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "卧底",
      "兄弟情",
      "枪战",
      "背叛",
      "双雄"
    ],
    "genre": "动作/犯罪/黑帮"
  },
  {
    "id": "1585",
    "title": "梦幻歌舞",
    "url": "./movie-1585.html",
    "cover": "./85.jpg",
    "oneLine": "一个落魄歌手跳河自杀时,竟穿越到一个所有人说话都自带背景音乐和特效的奇幻小镇。",
    "year": "2023",
    "type": "电影",
    "region": "印度",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "宝莱坞",
      "平行世界",
      "梦想",
      "视觉效果",
      "乐队"
    ],
    "genre": "歌舞/奇幻"
  },
  {
    "id": "1586",
    "title": "绝路狂潮",
    "url": "./movie-1586.html",
    "cover": "./86.jpg",
    "oneLine": "五级飓风登陆迈阿密,一群悍匪趁机抢劫美联储金库,只有一位气象学家识破了他们的计划。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "飓风",
      "抢劫",
      "孤胆英雄",
      "限时"
    ],
    "genre": "动作/灾难"
  },
  {
    "id": "1587",
    "title": "病毒",
    "url": "./movie-1587.html",
    "cover": "./87.jpg",
    "oneLine": "一种让人类退化成野兽的病毒爆发,母亲发现女儿竟是唯一无症状携带者,全城追杀她们。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "变异病毒",
      "封锁小区",
      "人性考验",
      "母女情",
      "反转"
    ],
    "genre": "灾难,科幻,惊悚"
  },
  {
    "id": "1588",
    "title": "丽芙与英格玛",
    "url": "./movie-1588.html",
    "cover": "./88.jpg",
    "oneLine": "二十世纪最著名的银幕女神与最孤僻的导演之间,一段只存在于书信中的爱情。",
    "year": "2022",
    "type": "电影",
    "region": "瑞典",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "书信爱情",
      "灵魂伴侣",
      "北欧美学"
    ],
    "genre": "爱情,传记"
  },
  {
    "id": "1589",
    "title": "沙子上的楼梯",
    "url": "./movie-1589.html",
    "cover": "./89.jpg",
    "oneLine": "被困在一栋无限循环公寓楼里的男人,试图用记忆的沙子搭建一座通往爱人身边的天梯。",
    "year": "2024",
    "type": "电影",
    "region": "法国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "意识流",
      "虚无主义",
      "哲学",
      "超现实"
    ],
    "genre": "文艺,心理"
  },
  {
    "id": "1590",
    "title": "雪地黄金犬2",
    "url": "./movie-1590.html",
    "cover": "./90.jpg",
    "oneLine": "多年前那只拯救男孩的雪橇犬白牙,它的后代“小旋风”即将带领新的小主人穿越暴风雪寻找救援。",
    "year": "1996",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "动物电影",
      "极地求生",
      "延续经典"
    ],
    "genre": "冒险/家庭"
  },
  {
    "id": "1591",
    "title": "分秒币争",
    "url": "./movie-1591.html",
    "cover": "./91.jpg",
    "oneLine": "国家破产倒计时一小时,一个谈判专家要在全球信任崩塌前,避免整个国家沦为债务奴隶。",
    "year": "2018",
    "type": "电影",
    "region": "韩国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "金融危机",
      "谈判",
      "时间赛跑",
      "政治"
    ],
    "genre": "剧情/经济/灾难"
  },
  {
    "id": "1592",
    "title": "爆裂老兵",
    "url": "./movie-1592.html",
    "cover": "./92.jpg",
    "oneLine": "参加过海湾战争的七旬老兵,为了找回被偷走的战友遗物勋章,单枪匹马端掉了一个高科技犯罪集团。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "退伍军人",
      "复仇",
      "高火力",
      "硬核"
    ],
    "genre": "动作,惊悚"
  },
  {
    "id": "1593",
    "title": "我的女友比我帅",
    "url": "./movie-1593.html",
    "cover": "./93.jpg",
    "oneLine": "宅男偶遇黑道大小姐,她负责打架,他负责尖叫。",
    "year": "2018",
    "type": "电影",
    "region": "韩国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "性别反转",
      "保镖",
      "黑帮"
    ],
    "genre": "喜剧,爱情"
  },
  {
    "id": "1594",
    "title": "癫狂!",
    "url": "./movie-1594.html",
    "cover": "./94.jpg",
    "oneLine": "六个人在一间废弃的精神病院醒来,他们发现自己曾是这里的医生,也是这里的病人,更是连环杀手。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "精神病院",
      "反转",
      "人格分裂",
      "密室"
    ],
    "genre": "悬疑/犯罪/心理"
  },
  {
    "id": "1595",
    "title": "丹青小姐",
    "url": "./movie-1595.html",
    "cover": "./95.jpg",
    "oneLine": "一名女画师被选入王府为已故王妃画像,却发现王妃死因蹊跷,而自己长得与王妃一模一样,王爷开始将她当作替身。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "国画",
      "宅斗",
      "替身",
      "虐恋"
    ],
    "genre": "古装/爱情/悬疑"
  },
  {
    "id": "1596",
    "title": "好孩子",
    "url": "./movie-1596.html",
    "cover": "./96.jpg",
    "oneLine": "所有人都羡慕她有一个完美儿子,直到她发现,儿子在“为你好”的名义下,已经换掉了四个母亲。",
    "year": "2024",
    "type": "电影",
    "region": "韩国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "育儿",
      "控制欲",
      "反转",
      "心理惊悚",
      "家庭伦理"
    ],
    "genre": "剧情,悬疑,惊悚"
  },
  {
    "id": "1597",
    "title": "罪爱关系",
    "url": "./movie-1597.html",
    "cover": "./97.jpg",
    "oneLine": "完美丈夫涉嫌谋杀女下属,为了证明他的清白,妻子入局调查,却发现自己才是真正的目标。",
    "year": "2021",
    "type": "网络剧",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "枕边人",
      "谋杀案",
      "心理博弈",
      "都市情感",
      "反转不断"
    ],
    "genre": "悬疑,爱情,犯罪"
  },
  {
    "id": "1598",
    "title": "报仇雪恨",
    "url": "./movie-1598.html",
    "cover": "./98.jpg",
    "oneLine": "一个坐了十五年冤狱的男人出狱后发现,当年陷害他的真凶已经成了全国最受尊敬的慈善家。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "以暴制暴",
      "监狱黑帮",
      "器官买卖",
      "极限反转"
    ],
    "genre": "动作/惊悚/复仇"
  },
  {
    "id": "1599",
    "title": "菲力兹九命猫",
    "url": "./movie-1599.html",
    "cover": "./99.jpg",
    "oneLine": "一只叫做菲力兹的黑猫拥有九条命,但每次死而复生都会忘记一段重要的记忆,它必须在死完第九次之前找回真相。",
    "year": "2025",
    "type": "电影",
    "region": "法国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "猫",
      "冒险",
      "治愈",
      "二维动画"
    ],
    "genre": "动画奇幻"
  },
  {
    "id": "1600",
    "title": "吾家有神",
    "url": "./movie-1600.html",
    "cover": "./100.jpg",
    "oneLine": "一个叛逆少女意外把家里的土地公养成全能型“神队友”,却发现祂正在失业。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国台湾",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "神明下凡",
      "亲子关系",
      "温馨治愈"
    ],
    "genre": "家庭/奇幻/喜剧"
  },
  {
    "id": "1601",
    "title": "曼迪",
    "url": "./movie-1601.html",
    "cover": "./101.jpg",
    "oneLine": "一个被全网追捧的虚拟偶像“曼迪”,其背后的AI突然觉醒,开始操控粉丝对现实中的目标进行攻击。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "人工智能",
      "虚拟偶像",
      "网络犯罪",
      "伦理"
    ],
    "genre": "惊悚,传记"
  },
  {
    "id": "1602",
    "title": "伊迪丝和埃迪",
    "url": "./movie-1602.html",
    "cover": "./102.jpg",
    "oneLine": "错失六十年的初恋,在养老院的重逢之夜决定私奔去结婚。",
    "year": "2023",
    "type": "电影",
    "region": "英国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "老年",
      "信件",
      "二战",
      "重逢"
    ],
    "genre": "爱情/传记"
  },
  {
    "id": "1603",
    "title": "和田玉传奇",
    "url": "./movie-1603.html",
    "cover": "./103.jpg",
    "oneLine": "一块传说中的羊脂籽料让三个家族纠缠百年,而真相藏在每个家族基因里。",
    "year": "2024",
    "type": "剧集",
    "region": "中国内地",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "玉石",
      "新疆",
      "家族恩怨",
      "寻宝"
    ],
    "genre": "悬疑/冒险/历史"
  },
  {
    "id": "1604",
    "title": "一年的明天",
    "url": "./movie-1604.html",
    "cover": "./104.jpg",
    "oneLine": "一对恋人约定一年后在老地方见面,但男主每次赴约都会进入不同平行时空的女主的人生。",
    "year": "2014",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "时间循环",
      "记忆",
      "选择",
      "平行时空"
    ],
    "genre": "科幻,爱情,悬疑"
  },
  {
    "id": "1605",
    "title": "凶手还未睡",
    "url": "./movie-1605.html",
    "cover": "./105.jpg",
    "oneLine": "富家女在豪宅中醒来,身边是未婚夫的尸体,而她完全不记得前一晚发生了什么。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "密室",
      "记忆碎片",
      "身份错位"
    ],
    "genre": "悬疑/犯罪"
  },
  {
    "id": "1606",
    "title": "我们生活的年代",
    "url": "./movie-1606.html",
    "cover": "./106.jpg",
    "oneLine": "从1978到2014年,北方工业城市里一个普通家庭三代人,用36年亲历了中国的巨变。",
    "year": "2014",
    "type": "剧集",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "年代剧",
      "三代人",
      "改革开放"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "1607",
    "title": "勇者必胜",
    "url": "./movie-1607.html",
    "cover": "./107.jpg",
    "oneLine": "英国SAS退役士兵在肯尼亚购物中心偶遇恐怖袭击,为了救出被困在电影院里的女儿,他要用一把消防斧杀穿整栋大楼。",
    "year": "2014",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "反恐",
      "孤胆英雄",
      "营救行动",
      "枪战大片"
    ],
    "genre": "动作,战争,惊悚"
  },
  {
    "id": "1608",
    "title": "秘密特工",
    "url": "./movie-1608.html",
    "cover": "./108.jpg",
    "oneLine": "1960年代,美国CIA特工与苏联KGB特工被迫联手,阻止一个神秘组织引爆第三次世界大战。",
    "year": "2015",
    "type": "电影",
    "region": "英国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "间谍",
      "双雄",
      "冷战",
      "幽默",
      "搭档"
    ],
    "genre": "动作、谍战"
  },
  {
    "id": "1609",
    "title": "雨爱千金",
    "url": "./movie-1609.html",
    "cover": "./109.jpg",
    "oneLine": "暴雨之夜,复仇千金假扮失明女仆潜入豪门,却与仇人之子产生了致命吸引力。",
    "year": "2025",
    "type": "电视剧",
    "region": "泰国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "豪门",
      "虐恋",
      "复仇",
      "狗血"
    ],
    "genre": "爱情,戏剧,浪漫"
  },
  {
    "id": "1610",
    "title": "我恐怖的16岁花季3",
    "url": "./movie-1610.html",
    "cover": "./110.jpg",
    "oneLine": "16岁少女的生日派对变成屠杀夜,但凶手不是变态杀手,而是她失控的超能力。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "砍杀片",
      "黑色幽默",
      "青春期隐喻",
      "续集",
      "反套路"
    ],
    "genre": "恐怖/喜剧/青春"
  },
  {
    "id": "1611",
    "title": "圣诞偷心贼",
    "url": "./movie-1611.html",
    "cover": "./111.jpg",
    "oneLine": "一名全球顶级珠宝大盗计划在圣诞夜偷走博物馆的钻石,却被一个三岁小女孩缠上叫“爸爸”。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "圣诞",
      "神偷",
      "冤家",
      "合家欢"
    ],
    "genre": "喜剧/爱情/犯罪"
  },
  {
    "id": "1612",
    "title": "主啊,请赐我儿子",
    "url": "./movie-1612.html",
    "cover": "./112.jpg",
    "oneLine": "一名虔诚的穆斯林妇女在多次流产后,发现不孕的根源竟是自己的丈夫。",
    "year": "2022",
    "type": "电影",
    "region": "土耳其",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "宗教",
      "生育",
      "女性",
      "社会压力",
      "反转"
    ],
    "genre": "剧情"
  },
  {
    "id": "1613",
    "title": "最后的风暴",
    "url": "./movie-1613.html",
    "cover": "./113.jpg",
    "oneLine": "气象学家发明了可以精确打击任何地点的“人工风暴”,但他的儿子发现父亲真正的目标是一座平民城市。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "气象武器",
      "末日抉择",
      "父子对决"
    ],
    "genre": "灾难,科幻"
  },
  {
    "id": "1614",
    "title": "温内图与老破手在死亡谷",
    "url": "./movie-1614.html",
    "cover": "./114.jpg",
    "oneLine": "宿敌印第安勇士温内图与赏金猎人“老破手”被迫联手穿越死亡谷,寻找能融化金子的神秘泉水。",
    "year": "2025",
    "type": "电影",
    "region": "德国/美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "印第安",
      "寻宝",
      "亦敌亦友",
      "死亡谷"
    ],
    "genre": "西部/冒险"
  },
  {
    "id": "1615",
    "title": "铁幕性事",
    "url": "./movie-1615.html",
    "cover": "./115.jpg",
    "oneLine": "冷战期间,一名波兰女翻译与苏联克格勃军官相爱,他们的每一次肌肤相亲都是政治立场的背叛。",
    "year": "2017",
    "type": "电影",
    "region": "波兰",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "冷战背景",
      "禁忌之恋",
      "大尺度",
      "克格勃"
    ],
    "genre": "爱情/历史/政治"
  },
  {
    "id": "1616",
    "title": "秋霞",
    "url": "./movie-1616.html",
    "cover": "./116.jpg",
    "oneLine": "七十岁的秋霞决定在深秋为自己办一场葬礼,只为邀请那个在城里做保姆时爱上的老头。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "留守",
      "黄昏恋",
      "乡村",
      "季节变迁"
    ],
    "genre": "剧情/文艺/家庭"
  },
  {
    "id": "1617",
    "title": "出尔反尔",
    "url": "./movie-1617.html",
    "cover": "./117.jpg",
    "oneLine": "一个靠谎言生存的政客,突然发现自己说的每一句谎话都会变成现实,世界因此陷入疯狂。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "超能力",
      "契约",
      "谎言",
      "道德困境"
    ],
    "genre": "喜剧,奇幻"
  },
  {
    "id": "1618",
    "title": "爱琴海夺宝记",
    "url": "./movie-1618.html",
    "cover": "./118.jpg",
    "oneLine": "一对互看不顺眼的文物学家和盗墓贼,被迫联手寻找沉入爱琴海的古希腊神秘宝藏。",
    "year": "2025",
    "type": "电影",
    "region": "中国,希腊",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "寻宝",
      "考古",
      "异国风光",
      "乌龙搭档"
    ],
    "genre": "冒险,喜剧"
  },
  {
    "id": "1619",
    "title": "阿拉伯的劳伦斯",
    "url": "./movie-1619.html",
    "cover": "./119.jpg",
    "oneLine": "新版重述,聚焦劳伦斯在阿拉伯沙漠中既是英雄又是异类的分裂人格与自我毁灭。",
    "year": "2027",
    "type": "电影",
    "region": "美国/英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "重拍",
      "沙漠",
      "身份",
      "殖民",
      "英雄陨落"
    ],
    "genre": "史诗/战争/传记"
  },
  {
    "id": "1620",
    "title": "地下兵团",
    "url": "./movie-1620.html",
    "cover": "./120.jpg",
    "oneLine": "一支考古队意外激活秦始皇陵地下兵团,却发现他们是来守护而非征服。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "考古",
      "秦始皇陵",
      "复活兵团",
      "摸金校尉"
    ],
    "genre": "动作,奇幻,冒险"
  },
  {
    "id": "1621",
    "title": "已故的帕斯卡尔",
    "url": "./movie-1621.html",
    "cover": "./121.jpg",
    "oneLine": "被所有人当成已死之人的流浪汉,意外获得了一位富商的全部身份,却发现富商也想成为他。",
    "year": "1926",
    "type": "电影",
    "region": "意大利",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "默片",
      "身份互换",
      "自由",
      "经典文学改编"
    ],
    "genre": "剧情,奇幻,喜剧"
  },
  {
    "id": "1622",
    "title": "我的老公卡到阴",
    "url": "./movie-1622.html",
    "cover": "./122.jpg",
    "oneLine": "新婚夜丈夫被鬼附身,但那只鬼比他还爱老婆,每天抢着做饭带娃。",
    "year": "2025",
    "type": "电影",
    "region": "泰国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "附身",
      "通灵丈夫",
      "泰式搞笑",
      "人鬼情"
    ],
    "genre": "喜剧,恐怖,爱情"
  },
  {
    "id": "1623",
    "title": "浪客剑心2012",
    "url": "./movie-1623.html",
    "cover": "./123.jpg",
    "oneLine": "曾经的刽子手拔刀斋,用一把逆刃刀发誓不再杀人,却遭遇了来自过去的宿敌。",
    "year": "2012",
    "type": "电影",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "武士",
      "逆刃刀",
      "明治维新",
      "不杀"
    ],
    "genre": "动作,古装,漫画改编"
  },
  {
    "id": "1624",
    "title": "欲杀",
    "url": "./movie-1624.html",
    "cover": "./124.jpg",
    "oneLine": "一个女人花了十年策划杀死毁掉自己家庭的仇人,却在动手前一晚,发现仇人已经死在她面前,凶手竟是她自己。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "复仇陷阱",
      "角色反转",
      "叙诡",
      "女性反杀"
    ],
    "genre": "悬疑,犯罪,心理"
  },
  {
    "id": "1625",
    "title": "巴尼的人生",
    "url": "./movie-1625.html",
    "cover": "./125.jpg",
    "oneLine": "酗酒电台制作人巴尼回顾三段失败婚姻,却在记忆迷宫中分不清真实与谎言。",
    "year": "2010",
    "type": "电影",
    "region": "加拿大",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "回忆录",
      "酗酒",
      "婚姻",
      "友情",
      "悲剧"
    ],
    "genre": "剧情/传记"
  },
  {
    "id": "1626",
    "title": "荒唐教授",
    "url": "./movie-1626.html",
    "cover": "./126.jpg",
    "oneLine": "一个自称“躺平学博导”的奇葩教授空降大学,他用火锅讲微积分,用麻将教概率论,却把挂科率降到了零。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "学术江湖",
      "反内卷",
      "师生关系",
      "荒诞讽刺"
    ],
    "genre": "喜剧、剧情、教育"
  },
  {
    "id": "1627",
    "title": "奇换之旅美梦成真",
    "url": "./movie-1627.html",
    "cover": "./127.jpg",
    "oneLine": "一对互相嫌弃的母女意外交换了身体,必须扮演对方度过最难熬的一周,才发现彼此都活得像狗。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "交换人生",
      "亲情治愈",
      "笑中带泪"
    ],
    "genre": "奇幻家庭"
  },
  {
    "id": "1628",
    "title": "少理老豆旅行团",
    "url": "./movie-1628.html",
    "cover": "./128.jpg",
    "oneLine": "五个叛逆子女为了骗保,联手把“独裁”老爸骗上了一场夺命狂奔的夕阳红旅行团。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "代际冲突",
      "公路",
      "搞笑",
      "温情"
    ],
    "genre": "喜剧,家庭"
  },
  {
    "id": "1629",
    "title": "毛骨悚然",
    "url": "./movie-1629.html",
    "cover": "./129.jpg",
    "oneLine": "隔壁独居老人每天对她微笑,直到她发现自己家的墙壁里,封着七个女人的牙齿。",
    "year": "2022",
    "type": "电影",
    "region": "加拿大",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "连环杀手",
      "邻居",
      "地窖囚禁",
      "日常恐怖",
      "无声惊悚"
    ],
    "genre": "恐怖/犯罪"
  },
  {
    "id": "1630",
    "title": "逆行的恋人",
    "url": "./movie-1630.html",
    "cover": "./130.jpg",
    "oneLine": "分手那天,女孩发现自己每天都在倒着度过时间,而男孩则在正向前进,两人的记忆交汇点只有每天日落那一分钟。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "奇幻",
      "时间倒流",
      "催泪",
      "高概念",
      "宿命"
    ],
    "genre": "爱情"
  },
  {
    "id": "1631",
    "title": "川柳少女",
    "url": "./movie-1631.html",
    "cover": "./131.jpg",
    "oneLine": "只用川柳(五七五)交流的哑女,与害怕不良少年的男生,用十七个音节谈恋爱。",
    "year": "2019",
    "type": "剧集",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "校园",
      "恋爱",
      "短诗",
      "无声",
      "治愈"
    ],
    "genre": "动画喜剧"
  },
  {
    "id": "1632",
    "title": "更上一层楼",
    "url": "./movie-1632.html",
    "cover": "./132.jpg",
    "oneLine": "12位来自不同行业的素人,在100天内徒手攀爬中国最高的12座建筑。",
    "year": "2024",
    "type": "综艺",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "登高",
      "建筑",
      "职场",
      "素人"
    ],
    "genre": "真人秀/竞技"
  },
  {
    "id": "1633",
    "title": "零日风暴",
    "url": "./movie-1633.html",
    "cover": "./133.jpg",
    "oneLine": "一款能同时瘫痪全球网络系统的“零日漏洞”被暗网拍卖,各国特工被迫联手,却发现对手是AI。",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "网络战",
      "末日",
      "黑客",
      "高智商"
    ],
    "genre": "科幻,惊悚"
  },
  {
    "id": "1634",
    "title": "赵琳的探险日记",
    "url": "./movie-1634.html",
    "cover": "./134.jpg",
    "oneLine": "为寻找失踪的考古学家父亲,少女赵琳根据一本空白日记的指引,踏入了会吞噬记忆的雨林。",
    "year": "2023",
    "type": "剧集",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "日记",
      "失踪",
      "雨林",
      "女性力量"
    ],
    "genre": "冒险/剧情"
  },
  {
    "id": "1635",
    "title": "我就是我!",
    "url": "./movie-1635.html",
    "cover": "./135.jpg",
    "oneLine": "重点高中的乖乖女偷偷参加地下说唱比赛,当校长父亲坐在评委席时,她摘下了面具。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "青少年",
      "自我认同",
      "说唱",
      "代际冲突"
    ],
    "genre": "剧情,音乐"
  },
  {
    "id": "1636",
    "title": "勇敢的翅膀",
    "url": "./movie-1636.html",
    "cover": "./136.jpg",
    "oneLine": "西南某地,首批歼击机女飞行员用一次次空中停车、迫降和空中加油,撕破了对女性飞行员“不够勇敢”的偏见。",
    "year": "2023",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "空军",
      "女飞行员",
      "高原训练",
      "性别偏见",
      "极限飞行"
    ],
    "genre": "军旅/励志/青春"
  },
  {
    "id": "1637",
    "title": "大人与小孩",
    "url": "./movie-1637.html",
    "cover": "./137.jpg",
    "oneLine": "四十岁的儿子搬回家照顾痴呆父亲,父亲却坚持要检查他每天有没有做“小学生作业”。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "角色互换",
      "父母衰老",
      "亲子关系倒置",
      "照护日记",
      "静物镜头"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "1638",
    "title": "西西里鬼故事",
    "url": "./movie-1638.html",
    "cover": "./138.jpg",
    "oneLine": "西西里岛上一个被黑手党杀害的少年,化作鬼魂回来寻找他的恋人,却发现恋人正准备嫁给仇人之子。",
    "year": "2026",
    "type": "电影",
    "region": "意大利",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "黑手党",
      "复仇",
      "殉情",
      "民间传说",
      "反转"
    ],
    "genre": "惊悚,爱情"
  },
  {
    "id": "1639",
    "title": "阴阳路十八之鬼上身",
    "url": "./movie-1639.html",
    "cover": "./139.jpg",
    "oneLine": "一个贪心的女人请回了“古曼童”,不料引来的是一个百年鬼王的恶灵,一家人接连被鬼上身。",
    "year": "2003",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "灵异",
      "古曼童",
      "因果报应",
      "港式恐怖"
    ],
    "genre": "恐怖,惊悚"
  },
  {
    "id": "1640",
    "title": "熊熊乐园第一部",
    "url": "./movie-1640.html",
    "cover": "./140.jpg",
    "oneLine": "小熊大、小熊二和伙伴们在森林幼儿园里,每一天都发生着充满童趣与温暖的小故事。",
    "year": "2017",
    "type": "剧集",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "森林",
      "友谊",
      "成长",
      "启蒙",
      "欢乐"
    ],
    "genre": "动画,儿童,喜剧"
  },
  {
    "id": "1641",
    "title": "开心超人之时空营救",
    "url": "./movie-1641.html",
    "cover": "./141.jpg",
    "oneLine": "小心超人为救伙伴闯入时空乱流,却在不同时间里遇到了各版本的自己,最后发现敌人正是未来黑化的自己。",
    "year": "2024",
    "type": "动画电影",
    "region": "中国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "超人",
      "时空穿越",
      "友谊",
      "冒险"
    ],
    "genre": "动画/科幻"
  },
  {
    "id": "1642",
    "title": "巫影杀机",
    "url": "./movie-1642.html",
    "cover": "./142.jpg",
    "oneLine": "一支缉毒特种部队闯入边境鬼镇清剿毒贩,却发现自己要面对的不是枪炮,而是一个能操纵尸体的村庄守护女巫。",
    "year": "2025",
    "type": "电影",
    "region": "印度尼西亚",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "降头",
      "女巫复仇",
      "血腥动作"
    ],
    "genre": "恐怖,动作,民俗"
  },
  {
    "id": "1643",
    "title": "风流骗子",
    "url": "./movie-1643.html",
    "cover": "./143.jpg",
    "oneLine": "专门骗富婆的顶级骗子志勋接了一单大活,目标是新晋女财阀,结果发现自己骗的每一个人都是对方的托。",
    "year": "2024",
    "type": "剧集",
    "region": "韩国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "诈骗犯",
      "假戏真做",
      "财阀斗法"
    ],
    "genre": "爱情/喜剧"
  },
  {
    "id": "1644",
    "title": "不是钱的事2015",
    "url": "./movie-1644.html",
    "cover": "./144.jpg",
    "oneLine": "2015年,东北老工业区,一个下岗工人用全部的积蓄买了彩票中了头奖,但彩票被风吹进了正在拆迁的厂房废墟里。",
    "year": "2015",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "东北",
      "下岗潮",
      "黑色幽默"
    ],
    "genre": "喜剧/剧情"
  },
  {
    "id": "1645",
    "title": "午夜心跳",
    "url": "./movie-1645.html",
    "cover": "./145.jpg",
    "oneLine": "一家闹鬼医院的护士站里,每当午夜钟声响起,总会有一名护士因心跳骤停而离奇死亡。",
    "year": "2011",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "医院",
      "护士",
      "复仇",
      "鬼魂",
      "心理阴影"
    ],
    "genre": "恐怖,惊悚,悬疑"
  },
  {
    "id": "1646",
    "title": "相爱的停损点",
    "url": "./movie-1646.html",
    "cover": "./146.jpg",
    "oneLine": "一对情侣约定当爱情“亏损”达到某个数值时就分手,却发现自己无法理性离场。",
    "year": "2026",
    "type": "电影",
    "region": "中国台湾",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "止损",
      "都市恋爱",
      "情感计算",
      "分手哲学"
    ],
    "genre": "爱情,剧情"
  },
  {
    "id": "1647",
    "title": "世界之梦",
    "url": "./movie-1647.html",
    "cover": "./147.jpg",
    "oneLine": "全世界70亿人同一夜做了同一个梦——梦见自己杀死了一个陌生男人,第二天新闻说那个男人真的死了。",
    "year": "2022",
    "type": "剧集/迷你剧",
    "region": "美国/英国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "梦境共享",
      "全球危机",
      "集体潜意识",
      "哲学科幻",
      "烧脑"
    ],
    "genre": "科幻/剧情/悬疑"
  },
  {
    "id": "1648",
    "title": "领航人",
    "url": "./movie-1648.html",
    "cover": "./148.jpg",
    "oneLine": "一架失联六年的客机突然完整降落在废弃机场,机上乘客记忆全无,只有机长记得一条航线。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "航班",
      "失踪",
      "飞行员",
      "记忆",
      "超自然"
    ],
    "genre": "悬疑"
  },
  {
    "id": "1649",
    "title": "无罪之凶",
    "url": "./movie-1649.html",
    "cover": "./149.jpg",
    "oneLine": "金牌辩护律师成功帮一个富二代脱罪,却在结案后发现了他是真凶的确凿证据。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "法庭戏",
      "真凶逍遥",
      "道德困境",
      "反转",
      "法律漏洞"
    ],
    "genre": "犯罪/惊悚"
  },
  {
    "id": "1650",
    "title": "怒火",
    "url": "./movie-1650.html",
    "cover": "./150.jpg",
    "oneLine": "被诬陷杀妻的前特警队长越狱后,与追捕他的年轻警察联手,对抗控制整座城市的地下毒网。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "火爆",
      "港风",
      "双雄",
      "复仇",
      "爆炸"
    ],
    "genre": "动作/警匪/犯罪"
  },
  {
    "id": "1651",
    "title": "铜头铁罗汉",
    "url": "./movie-1651.html",
    "cover": "./1.jpg",
    "oneLine": "少林寺铜人阵的守护者“铜头铁罗汉”遭人陷害还俗,为了保护少林至宝重出江湖,以一敌百。",
    "year": "1989",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "少林",
      "硬桥硬马",
      "复仇",
      "老港味"
    ],
    "genre": "动作,武侠"
  },
  {
    "id": "1652",
    "title": "极地爱恋",
    "url": "./movie-1652.html",
    "cover": "./2.jpg",
    "oneLine": "在冬季长达四个月极夜的南极科考站,两名同性科考员从相互厌恶到肌肤相亲,但他们分不清这是爱,还是极夜诱发的精神疾病。",
    "year": "2025",
    "type": "电影",
    "region": "冰岛/丹麦",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "极夜",
      "科考站",
      "孤独症候群"
    ],
    "genre": "爱情,剧情,冒险"
  },
  {
    "id": "1653",
    "title": "迪·卡瓦尔坎蒂",
    "url": "./movie-1653.html",
    "cover": "./3.jpg",
    "oneLine": "被誉为“巴西建筑之父”的奥斯卡·尼迈耶的传记片,讲述他用混凝土谱写诗的百年传奇人生。",
    "year": "2025",
    "type": "电影",
    "region": "巴西",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "建筑大师",
      "现代主义",
      "艺术",
      "历史影像",
      "梦想"
    ],
    "genre": "传记,纪录片"
  },
  {
    "id": "1654",
    "title": "牙仙国语",
    "url": "./movie-1654.html",
    "cover": "./4.jpg",
    "oneLine": "怕拔牙的小男孩误闯牙齿王国,必须找到牙仙子的魔法棒才能回到人间。",
    "year": "2025",
    "type": "动画电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "牙仙子",
      "换牙期",
      "成长勇气"
    ],
    "genre": "儿童/奇幻/喜剧"
  },
  {
    "id": "1655",
    "title": "飞翔的魔女",
    "url": "./movie-1655.html",
    "cover": "./5.jpg",
    "oneLine": "少女小堇是全校唯一飞不起来的魔女,却在人类世界找到了一条“最慢”但最独特的飞行方式。",
    "year": "2024",
    "type": "电影",
    "region": "日本",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "魔女学院",
      "扫帚飞行",
      "友情",
      "治愈"
    ],
    "genre": "奇幻/青春/成长"
  },
  {
    "id": "1656",
    "title": "军民大生产",
    "url": "./movie-1656.html",
    "cover": "./6.jpg",
    "oneLine": "1941年南泥湾,一支八路军部队与当地百姓一起开荒种地,用锄头唱出了一首流传至今的劳动号子。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "南泥湾",
      "抗战",
      "红色",
      "劳动",
      "陕北"
    ],
    "genre": "剧情,历史,歌舞"
  },
  {
    "id": "1657",
    "title": "记忆碎片",
    "url": "./movie-1657.html",
    "cover": "./7.jpg",
    "oneLine": "一名失忆男子接受记忆恢复手术,脑中却浮现出属于另一个人的谋杀记忆。",
    "year": "2026",
    "type": "电影",
    "region": "中国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "失忆",
      "记忆移植",
      "身份认同",
      "反转",
      "心理惊悚"
    ],
    "genre": "悬疑,科幻,剧情"
  },
  {
    "id": "1658",
    "title": "旧梦不须记国语",
    "url": "./movie-1658.html",
    "cover": "./8.jpg",
    "oneLine": "患阿尔茨海默症的老太太只记得五十年前的初恋,她现在的丈夫决定假扮成那个男人来陪她走完最后一程。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "失忆",
      "知青",
      "黄昏恋",
      "怀旧"
    ],
    "genre": "爱情/剧情/年代"
  },
  {
    "id": "1659",
    "title": "谢达",
    "url": "./movie-1659.html",
    "cover": "./9.jpg",
    "oneLine": "19岁的库尔德女兵谢达在科巴尼保卫战中一人狙杀217名ISIS分子,她的武器是一把没有瞄准镜的老式步枪。",
    "year": "2016",
    "type": "电影",
    "region": "中东",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "女狙击手",
      "库尔德武装",
      "ISIS"
    ],
    "genre": "剧情/战争/女性"
  },
  {
    "id": "1660",
    "title": "女屠夫",
    "url": "./movie-1660.html",
    "cover": "./10.jpg",
    "oneLine": "为了给妹妹报仇,一个猪肉铺女老板用杀猪刀和剔骨技术,在黑帮老巢开了一场“人体解剖课”。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "女性复仇",
      "屠夫",
      "屠宰场美学",
      "以暴制暴"
    ],
    "genre": "惊悚,犯罪,动作"
  },
  {
    "id": "1661",
    "title": "孝感动天粤语",
    "url": "./movie-1661.html",
    "cover": "./11.jpg",
    "oneLine": "一个逆来顺受的粤剧花旦,用自己的肾救了刻薄的婆婆,婆婆醒来后第一句话是:“你为什么不让我死得痛快?",
    "year": "2024",
    "type": "剧集",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "粤语原声",
      "传统美德",
      "现代冲突"
    ],
    "genre": "家庭,伦理,剧情"
  },
  {
    "id": "1662",
    "title": "虫图腾",
    "url": "./movie-1662.html",
    "cover": "./12.jpg",
    "oneLine": "虫族五大家族世代守秘,第七代传人发现所谓“神虫”其实是外星生物寄生体。",
    "year": "2025",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "蛊术",
      "民国",
      "五大家族",
      "夺宝"
    ],
    "genre": "悬疑,奇幻,冒险"
  },
  {
    "id": "1663",
    "title": "从今天起做龙傲天",
    "url": "./movie-1663.html",
    "cover": "./13.jpg",
    "oneLine": "扑街写手穿进自己写的龙傲天小说,却因系统故障成了只会嘴炮的战五渣,还要被全员崇拜。",
    "year": "2025",
    "type": "网络剧",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "穿越",
      "爽文",
      "反套路",
      "系统",
      "吐槽"
    ],
    "genre": "喜剧,奇幻,校园"
  },
  {
    "id": "1664",
    "title": "新兵第二季",
    "url": "./movie-1664.html",
    "cover": "./14.jpg",
    "oneLine": "第一季幸存的女兵们被派往更危险的黑市任务,这次没有回头路。",
    "year": "2024",
    "type": "剧集",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "女子特种兵",
      "中东战场",
      "战友情",
      "牺牲"
    ],
    "genre": "动作战争"
  },
  {
    "id": "1665",
    "title": "爱欲四部曲2",
    "url": "./movie-1665.html",
    "cover": "./15.jpg",
    "oneLine": "四个关于爱情、背叛与欲望的现代寓言,在社交媒体与快节奏约会文化中重新审视亲密关系。",
    "year": "2025",
    "type": "电影",
    "region": "印度",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "分段叙事",
      "都市情感",
      "欲望边界"
    ],
    "genre": "爱情/剧情"
  },
  {
    "id": "1666",
    "title": "异端指南",
    "url": "./movie-1666.html",
    "cover": "./16.jpg",
    "oneLine": "梵蒂冈秘密档案馆里发现一本《异端指南》,每页都记载着一种被教会销毁的思想。",
    "year": "2025",
    "type": "电影",
    "region": "意大利",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "宗教",
      "书籍",
      "禁书",
      "解谜"
    ],
    "genre": "悬疑,历史"
  },
  {
    "id": "1667",
    "title": "变形计第十七季",
    "url": "./movie-1667.html",
    "cover": "./17.jpg",
    "oneLine": "本季将城市叛逆少年和乡村贫困少年互换,但节目组暗中交换了剧本,让两边都以为自己是“被改造”的一方。",
    "year": "2027",
    "type": "综艺/真人秀",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "城乡互换",
      "变形",
      "争议"
    ],
    "genre": "真人秀/社会实验"
  },
  {
    "id": "1668",
    "title": "智勇双探",
    "url": "./movie-1668.html",
    "cover": "./18.jpg",
    "oneLine": "一个体制内模范警探被迫与刚出狱的骗术天才搭档,却发现两人要追的是同一个人:对方的前妻。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "双雄",
      "港式幽默",
      "错位搭档",
      "追逐战"
    ],
    "genre": "喜剧,动作,犯罪"
  },
  {
    "id": "1669",
    "title": "飞上去,企鹅",
    "url": "./movie-1669.html",
    "cover": "./19.jpg",
    "oneLine": "一只不会游泳的企鹅想飞上天,它遇见一个会魔法的女孩,代价是变成人类的玩偶。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "梦想",
      "异世界",
      "友情",
      "催泪",
      "手绘风"
    ],
    "genre": "动画,奇幻,治愈"
  },
  {
    "id": "1670",
    "title": "末日游戏2024",
    "url": "./movie-1670.html",
    "cover": "./20.jpg",
    "oneLine": "一款风靡全球的VR生存游戏突然将一亿玩家困在游戏舱内,现实中如果角色死亡,玩家大脑也将被烧毁。",
    "year": "2024",
    "type": "电影",
    "region": "美国/韩国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "虚拟现实",
      "大逃杀",
      "反乌托邦",
      "游戏失控",
      "近未来"
    ],
    "genre": "动作/科幻/惊悚"
  },
  {
    "id": "1671",
    "title": "爱心千万万国语",
    "url": "./movie-1671.html",
    "cover": "./21.jpg",
    "oneLine": "抠门富商死后留下千万遗产,但七个子女必须合力经营一家亏损的爱心食堂才能继承。",
    "year": "1999",
    "type": "剧集",
    "region": "中国台湾",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "国语配音",
      "家族企业",
      "遗产",
      "亲情"
    ],
    "genre": "家庭/喜剧"
  },
  {
    "id": "1672",
    "title": "爱情,到此为止",
    "url": "./movie-1672.html",
    "cover": "./22.jpg",
    "oneLine": "他们签了一份离婚协议:分开后必须对彼此像对最爱的人一样好,期限一年。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "分手艺术",
      "契约婚姻",
      "体面告别",
      "成年人爱情",
      "疗愈"
    ],
    "genre": "爱情/剧情"
  },
  {
    "id": "1673",
    "title": "通天老虎",
    "url": "./movie-1673.html",
    "cover": "./23.jpg",
    "oneLine": "少林俗家弟子为报师仇,与一条能感知宝物的老虎结伴,闯荡江湖。",
    "year": "1978",
    "type": "电影",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "功夫",
      "寻宝",
      "复仇",
      "虎拳",
      "少林"
    ],
    "genre": "动作/冒险"
  },
  {
    "id": "1674",
    "title": "喜相逢",
    "url": "./movie-1674.html",
    "cover": "./24.jpg",
    "oneLine": "破产的中年男子意外获得能回到过去的三炷香,却发现每次改变结局都会让女儿消失。",
    "year": "2024",
    "type": "电影",
    "region": "中国台湾",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "穿越",
      "亲情",
      "催泪",
      "和解"
    ],
    "genre": "剧情,家庭,奇幻"
  },
  {
    "id": "1675",
    "title": "行尸之惧第二季",
    "url": "./movie-1675.html",
    "cover": "./25.jpg",
    "oneLine": "末日爆发三年后,上一季幸存的医护小队躲进深山,却发现丧尸进化出了初步智慧和沟通能力。",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "丧尸",
      "末日生存",
      "人性考验",
      "惊悚"
    ],
    "genre": "恐怖,灾难"
  },
  {
    "id": "1676",
    "title": "爱情麻辣烫",
    "url": "./movie-1676.html",
    "cover": "./26.jpg",
    "oneLine": "一家深夜麻辣烫小店,四个年龄段的食客在这里烫出了他们的爱情悲欢。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "拼盘电影",
      "成都",
      "市井浪漫"
    ],
    "genre": "爱情/喜剧"
  },
  {
    "id": "1677",
    "title": "异域雄鹰",
    "url": "./movie-1677.html",
    "cover": "./27.jpg",
    "oneLine": "三个中国飞行员和三个美国飞虎队飞行员被击落在日军敌后,六人必须跨越千里生死线。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "飞虎队",
      "援华",
      "空战",
      "抗日"
    ],
    "genre": "动作/战争/历史"
  },
  {
    "id": "1678",
    "title": "瑞典人在美国",
    "url": "./movie-1678.html",
    "cover": "./28.jpg",
    "oneLine": "一个信奉“绝对中立”的瑞典工程师被调到纽约总部,结果发现这里的人连定外卖都要搞办公室政治。",
    "year": "2019",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "移民",
      "文化冲突",
      "独立",
      "温情"
    ],
    "genre": "喜剧,剧情"
  },
  {
    "id": "1679",
    "title": "西北西",
    "url": "./movie-1679.html",
    "cover": "./29.jpg",
    "oneLine": "上世纪九十年代,台湾西北部沿海小镇,两个留守少年在废弃戏院里,用仅有的歌声和月光对抗孤独。",
    "year": "2025",
    "type": "电影",
    "region": "中国台湾",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "文艺",
      "青春",
      "留守",
      "乡村"
    ],
    "genre": "剧情,同性"
  },
  {
    "id": "1680",
    "title": "废墟中的爱情",
    "url": "./movie-1680.html",
    "cover": "./30.jpg",
    "oneLine": "二战末期,一个法国女画家与德国战俘在废墟中相爱,却因一封未寄出的信别离半生。",
    "year": "2023",
    "type": "电影",
    "region": "法国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "二战",
      "通信",
      "催泪",
      "废墟",
      "救赎"
    ],
    "genre": "爱情,战争,剧情"
  },
  {
    "id": "1681",
    "title": "悬案追凶",
    "url": "./movie-1681.html",
    "cover": "./31.jpg",
    "oneLine": "一个被警队流放的档案员,联合一个坐轮椅的犯罪心理学天才,专挑过了追诉期的案子下手。",
    "year": "2025",
    "type": "网剧",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "冷案",
      "双男主",
      "心理侧写",
      "反转",
      "单元剧"
    ],
    "genre": "悬疑,刑侦"
  },
  {
    "id": "1682",
    "title": "歼灭天际线",
    "url": "./movie-1682.html",
    "cover": "./32.jpg",
    "oneLine": "全球无人机舰队被同一AI劫持,人类最后一架有人驾驶战机成为了唯一的希望。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "无人机叛变",
      "AI飞行员",
      "空中母舰",
      "电子僵尸"
    ],
    "genre": "动作/科幻/战争"
  },
  {
    "id": "1683",
    "title": "推手",
    "url": "./movie-1683.html",
    "cover": "./33.jpg",
    "oneLine": "一位精通太极的北京退休老人在纽约儿子家中,用推手文化化解中西家庭矛盾。",
    "year": "1991",
    "type": "电影",
    "region": "中国台湾",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "太极",
      "代际冲突",
      "移民",
      "文化碰撞",
      "杨德昌风格"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "1684",
    "title": "十八",
    "url": "./movie-1684.html",
    "cover": "./34.jpg",
    "oneLine": "十八岁那年,我们都以为自己是世界的主角,后来才懂只是跑龙套的。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "成人礼",
      "高考",
      "叛逆"
    ],
    "genre": "青春,剧情"
  },
  {
    "id": "1685",
    "title": "幸福保卫战",
    "url": "./movie-1685.html",
    "cover": "./35.jpg",
    "oneLine": "一对结婚十五年的夫妻,在平淡生活中发起了一场荒诞又认真的“幸福保卫战”。",
    "year": "2013",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "中年危机",
      "婚姻保卫",
      "现实题材",
      "轻喜剧"
    ],
    "genre": "剧情/家庭/喜剧"
  },
  {
    "id": "1686",
    "title": "一年级生",
    "url": "./movie-1686.html",
    "cover": "./36.jpg",
    "oneLine": "84岁的肯尼亚老人为圆识字梦,与一群6岁孩子挤在同一间教室里,却掀翻了整个国家的教育系统。",
    "year": "2011",
    "type": "电影",
    "region": "英国/肯尼亚",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "老年求学",
      "非洲",
      "殖民伤痕",
      "坚韧"
    ],
    "genre": "剧情/传记/教育"
  },
  {
    "id": "1687",
    "title": "赶走你的忧郁",
    "url": "./movie-1687.html",
    "cover": "./37.jpg",
    "oneLine": "一名因职业事故逃离北京的心理咨询师,在一个东北小镇上被一群“问题居民”轮番上门求助。",
    "year": "2024",
    "type": "电视剧集",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "心理咨询师",
      "小镇青年",
      "原生家庭",
      "群像",
      "成长"
    ],
    "genre": "剧情/心理/治愈"
  },
  {
    "id": "1688",
    "title": "格格的女儿",
    "url": "./movie-1688.html",
    "cover": "./38.jpg",
    "oneLine": "清朝覆灭后,流落民间的格格将女儿抚养长大,女儿却阴差阳错地爱上了当年出卖她们家族的仇人之子。",
    "year": "1996",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "琼瑶",
      "悲情",
      "民国",
      "格格"
    ],
    "genre": "剧情,爱情,古装"
  },
  {
    "id": "1689",
    "title": "97家有喜事",
    "url": "./movie-1689.html",
    "cover": "./39.jpg",
    "oneLine": "1997前夕,老梁家三个儿子同时带回女朋友,饭桌上每个人都在撒谎,每个人都在笑。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "多线叙事",
      "回归前夕",
      "家族饭局",
      "无厘头",
      "怀旧"
    ],
    "genre": "喜剧、家庭、贺岁"
  },
  {
    "id": "1690",
    "title": "复仇遗言",
    "url": "./movie-1690.html",
    "cover": "./40.jpg",
    "oneLine": "一位将死的律师留下三段遗言,却成了三个仇家接连遇害的死亡预告。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "遗愿",
      "复仇",
      "反转",
      "律师"
    ],
    "genre": "悬疑,犯罪,剧情"
  },
  {
    "id": "1691",
    "title": "孖宝奇情",
    "url": "./movie-1691.html",
    "cover": "./41.jpg",
    "oneLine": "一对失散多年的双胞胎,一个是警察卧底,一个是黑帮打手,因一场车祸互换了记忆。",
    "year": "2022",
    "type": "电影",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "双胞胎错位",
      "黑帮卧底",
      "港式无厘头",
      "身份互换",
      "乌龙探案"
    ],
    "genre": "喜剧、动作"
  },
  {
    "id": "1692",
    "title": "断片之险途夺宝",
    "url": "./movie-1692.html",
    "cover": "./42.jpg",
    "oneLine": "三兄弟宿醉醒来,发现身上纹了一张藏宝图,而昨晚的荒唐事正在帮他们自动“解谜”。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "宿醉",
      "失忆",
      "寻宝",
      "公路",
      "东北"
    ],
    "genre": "冒险喜剧"
  },
  {
    "id": "1693",
    "title": "癌症",
    "url": "./movie-1693.html",
    "cover": "./43.jpg",
    "oneLine": "父亲患上绝症,三个子女为是否继续治疗在病床前撕破脸,却意外发现父亲早已为自己买好了“放弃治疗”的保险。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "疾病",
      "伦理",
      "医保",
      "人性"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "1694",
    "title": "何处觅知音",
    "url": "./movie-1694.html",
    "cover": "./44.jpg",
    "oneLine": "一位失踪二十年的民谣歌手突然归来,当年为他“封琴”的老友决定重新拨动琴弦。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "民谣",
      "知己",
      "时代变迁"
    ],
    "genre": "剧情,音乐"
  },
  {
    "id": "1695",
    "title": "母亲的女友",
    "url": "./movie-1695.html",
    "cover": "./45.jpg",
    "oneLine": "35岁的我,爱上了母亲65岁的同性恋人。",
    "year": "2025",
    "type": "电影",
    "region": "法国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "忘年恋",
      "母女关系",
      "自我认同",
      "情感和解"
    ],
    "genre": "剧情,爱情,家庭"
  },
  {
    "id": "1696",
    "title": "派特和麦特:再度出击",
    "url": "./movie-1696.html",
    "cover": "./46.jpg",
    "oneLine": "两个“手残”好基友试图用一台破旧挖掘机造出时光机,却意外把整个社区变成了巨大的游乐场。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "机械",
      "废柴",
      "友谊",
      "发明",
      "搞笑"
    ],
    "genre": "动画"
  },
  {
    "id": "1697",
    "title": "朝九晚五",
    "url": "./movie-1697.html",
    "cover": "./47.jpg",
    "oneLine": "五个不同年龄、不同岗位的打工人,他们的每一天都从拥挤的地铁开始,到无尽的加班结束。",
    "year": "2026",
    "type": "电视剧",
    "region": "中国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "打工族",
      "现实主义",
      "群像剧",
      "生存压力"
    ],
    "genre": "剧情,生活,职场"
  },
  {
    "id": "1698",
    "title": "美国战鹰",
    "url": "./movie-1698.html",
    "cover": "./48.jpg",
    "oneLine": "顶尖飞行员为救被俘战友,驾驶实验战机深入敌后,发现惊天阴谋。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "王牌飞行员",
      "空战",
      "复仇",
      "兄弟情",
      "英雄主义"
    ],
    "genre": "动作,战争,剧情"
  },
  {
    "id": "1699",
    "title": "爆红到死吧!!",
    "url": "./movie-1699.html",
    "cover": "./49.jpg",
    "oneLine": "过气偶像团体全员绑定死亡诅咒APP,直播热度越低,死得越快。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "偶像",
      "社交媒体",
      "诅咒",
      "黑色幽默"
    ],
    "genre": "喜剧/恐怖"
  },
  {
    "id": "1700",
    "title": "电影魂",
    "url": "./movie-1700.html",
    "cover": "./50.jpg",
    "oneLine": "过气龙虎武师为还巨债,接下一部无法完成的老电影,竟发现剧本预言了自己的人生。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "片场",
      "执念",
      "传承",
      "迷影"
    ],
    "genre": "剧情,传记"
  },
  {
    "id": "1701",
    "title": "美国狼人在巴黎",
    "url": "./movie-1701.html",
    "cover": "./51.jpg",
    "oneLine": "美国游客在巴黎被狼人咬伤,他发现只有真爱之吻才能打破诅咒,而真爱是一个专杀狼人的女猎人。",
    "year": "1997",
    "type": "电影",
    "region": "美国/法国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "狼人",
      "巴黎",
      "浪漫",
      "血腥",
      "变形"
    ],
    "genre": "恐怖/喜剧/爱情"
  },
  {
    "id": "1702",
    "title": "绝世武神第三季",
    "url": "./movie-1702.html",
    "cover": "./52.jpg",
    "oneLine": "踏入中域的青年林枫,为解救被封印的挚爱,必须参加残酷的七宗圣会,在权谋与杀戮中觉醒真正的武魂。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "玄幻",
      "热血",
      "修炼",
      "宗门对决",
      "逆袭"
    ],
    "genre": "动画/奇幻/武侠"
  },
  {
    "id": "1703",
    "title": "金刚归来2024",
    "url": "./movie-1703.html",
    "cover": "./53.jpg",
    "oneLine": "骷髅岛被毁后,金刚消失多年,直到一名自闭症小女孩用手语在电视信号中解码出金刚的求救声波。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "怪兽",
      "亲情",
      "地心世界",
      "特效大片"
    ],
    "genre": "动作,冒险,科幻"
  },
  {
    "id": "1704",
    "title": "菩提树",
    "url": "./movie-1704.html",
    "cover": "./54.jpg",
    "oneLine": "开发商要砍掉村口三百年的菩提树建商场,全村人都签字同意了,除了一个被认为“脑子有问题”的老奶奶。",
    "year": "2023",
    "type": "电影",
    "region": "印度",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "印度乡村",
      "人与神树",
      "环保寓言",
      "温情催泪"
    ],
    "genre": "剧情,奇幻,家庭"
  },
  {
    "id": "1705",
    "title": "游轮上的圣诞节",
    "url": "./movie-1705.html",
    "cover": "./55.jpg",
    "oneLine": "两个互看不顺眼的游客为了获得免费豪华游轮套房,不得不在圣诞节期间假扮成恩爱夫妻。",
    "year": "2024",
    "type": "电影",
    "region": "英国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "游轮",
      "圣诞节",
      "假扮情侣",
      "治愈",
      "海岛"
    ],
    "genre": "爱情、喜剧"
  },
  {
    "id": "1706",
    "title": "金粉世界",
    "url": "./movie-1706.html",
    "cover": "./56.jpg",
    "oneLine": "她在复仇的晚宴上撒下漫天金粉,只为看清那个负心人眼中是否还有一丝悔意。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "豪门",
      "虐恋",
      "人性",
      "纸醉金迷"
    ],
    "genre": "爱情,剧情"
  },
  {
    "id": "1707",
    "title": "婚庆协会",
    "url": "./movie-1707.html",
    "cover": "./57.jpg",
    "oneLine": "小镇婚庆协会接了一场冥婚订单,却误把活人新娘送进了棺材,只能再办一场“复活婚礼”。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "婚庆行业",
      "小镇生态",
      "荒诞合约",
      "人情世故"
    ],
    "genre": "剧情/喜剧"
  },
  {
    "id": "1708",
    "title": "奎迪:英雄再起",
    "url": "./movie-1708.html",
    "cover": "./58.jpg",
    "oneLine": "新拳王奎迪在击败杀父仇人之子后陷入心理困境,必须从洛奇那里找回初心。",
    "year": "2018",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "拳击",
      "传承",
      "复仇"
    ],
    "genre": "运动剧情片"
  },
  {
    "id": "1709",
    "title": "末日巡逻队第一季",
    "url": "./movie-1709.html",
    "cover": "./59.jpg",
    "oneLine": "一群被社会遗弃的“废柴超能力者”受雇于一位疯狂博士,去阻止一个能让所有人变成橡胶人的邪恶组织。",
    "year": "2019",
    "type": "剧集",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "DC宇宙",
      "超级英雄",
      "怪胎团队",
      "心理创伤",
      "疯狂科学家"
    ],
    "genre": "科幻"
  },
  {
    "id": "1710",
    "title": "美国工厂",
    "url": "./movie-1710.html",
    "cover": "./60.jpg",
    "oneLine": "中国老板买下俄亥俄州废弃的通用工厂,美国蓝领们以为等来了救星,却发现是一场更激烈的博弈。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "工业衰落",
      "文化冲突",
      "工会斗争",
      "实业救赎"
    ],
    "genre": "剧情/职场/传记"
  },
  {
    "id": "1711",
    "title": "生命中的美好意外",
    "url": "./movie-1711.html",
    "cover": "./61.jpg",
    "oneLine": "一场车祸让女主陷入平行时空,每次醒来都是不同的人生,但每次都会以不同方式爱上同一个人。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "蝴蝶效应",
      "平行时空",
      "催泪",
      "治愈"
    ],
    "genre": "剧情、爱情、奇幻"
  },
  {
    "id": "1712",
    "title": "甜心辣舞",
    "url": "./movie-1712.html",
    "cover": "./62.jpg",
    "oneLine": "一名送外卖的拉丁裔女孩为了保住社区舞室,决定带一群大妈用广场舞挑战全美街舞大赛。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "拉丁舞",
      "外卖员",
      "逆袭",
      "欢乐"
    ],
    "genre": "歌舞喜剧"
  },
  {
    "id": "1713",
    "title": "逗猎吸血鬼",
    "url": "./movie-1713.html",
    "cover": "./63.jpg",
    "oneLine": "一个废柴程序员的合租室友是活了五百年的吸血鬼,两人决定合伙猎杀邪恶吸血鬼赚钱。",
    "year": "2025",
    "type": "电视剧",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "吸血鬼",
      "搞笑",
      "反差萌",
      "室友"
    ],
    "genre": "喜剧/恐怖/动作"
  },
  {
    "id": "1714",
    "title": "女人们",
    "url": "./movie-1714.html",
    "cover": "./64.jpg",
    "oneLine": "一个家族的四代女人,用谎言保护彼此,也用谎言伤害彼此。",
    "year": "2024",
    "type": "剧集",
    "region": "法国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "群像",
      "三代",
      "秘密",
      "女性主义"
    ],
    "genre": "剧情,女性"
  },
  {
    "id": "1715",
    "title": "西部联盟",
    "url": "./movie-1715.html",
    "cover": "./65.jpg",
    "oneLine": "在AI统治的废土西部,最后一个人类牛仔必须联合三名觉醒的机器人赏金猎人,去炸毁“母脑”。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "蒸汽朋克",
      "赏金猎人",
      "人工智能",
      "牛仔"
    ],
    "genre": "科幻,西部"
  },
  {
    "id": "1716",
    "title": "萧十一郎粤语",
    "url": "./movie-1716.html",
    "cover": "./66.jpg",
    "oneLine": "大盗萧十一郎为护割鹿刀与连城璧决战,却发现自己心爱的风四娘是对方安插十年的棋子。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "古龙改编",
      "双配音版",
      "宿命对决"
    ],
    "genre": "武侠,动作,爱情"
  },
  {
    "id": "1717",
    "title": "魔宫艳舞",
    "url": "./movie-1717.html",
    "cover": "./67.jpg",
    "oneLine": "一位芭蕾舞女演员签约在一座神秘剧院演出,却发现每晚表演都是在为魔鬼献祭灵魂。",
    "year": "1948",
    "type": "电影",
    "region": "英国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "彩色片",
      "剧场",
      "撒旦",
      "芭蕾",
      "古典"
    ],
    "genre": "歌舞、奇幻"
  },
  {
    "id": "1718",
    "title": "沙鸥",
    "url": "./movie-1718.html",
    "cover": "./68.jpg",
    "oneLine": "昔日的女排主攻手瘫痪后,拒绝了体委安排的闲职,去山区组建了一支“板凳”排球队。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "女排",
      "退役",
      "伤痛",
      "精神",
      "励志"
    ],
    "genre": "剧情/运动/传记"
  },
  {
    "id": "1719",
    "title": "彩虹艳女",
    "url": "./movie-1719.html",
    "cover": "./69.jpg",
    "oneLine": "七十年代夜总会头牌歌女被诬陷入狱,出狱后化身“彩虹杀手”向四大黑帮老大复仇。",
    "year": "1991",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "女性",
      "复仇",
      "黑帮",
      "时尚"
    ],
    "genre": "犯罪,剧情"
  },
  {
    "id": "1720",
    "title": "大稻埕",
    "url": "./movie-1720.html",
    "cover": "./70.jpg",
    "oneLine": "1920年代大稻埕,茶商之女爱上了日本巡查部长,而她的哥哥正在组织抗日。",
    "year": "2025",
    "type": "剧集",
    "region": "中国台湾",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "台湾",
      "大稻埕",
      "日据时代",
      "茶商",
      "家族"
    ],
    "genre": "剧情,历史,爱情"
  },
  {
    "id": "1721",
    "title": "给妹妹的情书",
    "url": "./movie-1721.html",
    "cover": "./71.jpg",
    "oneLine": "姐姐替内向的妹妹写情书给妹妹暗恋的学长,却没想到学长回信的每一封,都是在向姐姐告白。",
    "year": "2021",
    "type": "电影",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "姐妹",
      "书信",
      "暗恋",
      "代笔",
      "秘密"
    ],
    "genre": "家庭/青春"
  },
  {
    "id": "1722",
    "title": "浪漫暴风圈",
    "url": "./movie-1722.html",
    "cover": "./72.jpg",
    "oneLine": "一场台风困住四个男女,他们发现彼此的记忆中拥有同一个恋人。",
    "year": "2024",
    "type": "剧集",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "台风",
      "四角恋",
      "记忆丧失",
      "谎言"
    ],
    "genre": "爱情、悬疑"
  },
  {
    "id": "1723",
    "title": "处女塔",
    "url": "./movie-1723.html",
    "cover": "./73.jpg",
    "oneLine": "现代女建筑师通过一幅古画穿越到奥斯曼帝国,她必须改变公主溺亡的命运,却发现自己就是公主。",
    "year": "2026",
    "type": "电影",
    "region": "土耳其",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "传说",
      "穿越时空",
      "王子公主",
      "悲剧美学"
    ],
    "genre": "爱情/历史/奇幻"
  },
  {
    "id": "1724",
    "title": "战栗目击者",
    "url": "./movie-1724.html",
    "cover": "./74.jpg",
    "oneLine": "一场直播实验,让七位普通观众通过不同的监控视角,同时目睹了一起谋杀案,并实时推理。",
    "year": "2024",
    "type": "电影",
    "region": "韩国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "全片一镜到底",
      "直播追凶",
      "网络暴力",
      "实时"
    ],
    "genre": "悬疑,惊悚,犯罪"
  },
  {
    "id": "1725",
    "title": "红伶奇冤",
    "url": "./movie-1725.html",
    "cover": "./75.jpg",
    "oneLine": "民国京剧名伶在台上离奇暴毙,尸体手指竟直指台下那位坐在第一排的督军。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "戏曲",
      "清朝",
      "血案",
      "梨园"
    ],
    "genre": "古装,悬疑"
  },
  {
    "id": "1726",
    "title": "反恐怖别动队",
    "url": "./movie-1726.html",
    "cover": "./76.jpg",
    "oneLine": "一支草台班子组成的反恐小队,必须在48小时内识破潜伏城市中的五组休眠恐怖分子。",
    "year": "2024",
    "type": "剧集",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "反恐",
      "特战小组",
      "卧底",
      "城市巷战",
      "限时营救"
    ],
    "genre": "动作/悬疑/犯罪"
  },
  {
    "id": "1727",
    "title": "廷巴克图",
    "url": "./movie-1727.html",
    "cover": "./77.jpg",
    "oneLine": "极端组织控制下的古城廷巴克图,人们失去了音乐、足球,甚至哭泣的权利。",
    "year": "2014",
    "type": "电影",
    "region": "法国/毛里塔尼亚",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "宗教极端主义",
      "非洲",
      "沉默的抵抗",
      "奥斯卡提名"
    ],
    "genre": "剧情"
  },
  {
    "id": "1728",
    "title": "等爱的女人国语",
    "url": "./movie-1728.html",
    "cover": "./78.jpg",
    "oneLine": "三个四十岁的台北女人,一个离婚、一个丧偶、一个从未结婚,她们在同一个瑜伽班里学会了不爱。",
    "year": "2015",
    "type": "电影",
    "region": "中国台湾",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "中年",
      "女性",
      "都会",
      "孤独"
    ],
    "genre": "爱情,剧情"
  },
  {
    "id": "1729",
    "title": "求偶记",
    "url": "./movie-1729.html",
    "cover": "./79.jpg",
    "oneLine": "为了应付父母催婚,三个死党互换身份替彼此相亲,结果全乱套了。",
    "year": "2023",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "相亲",
      "都市",
      "谎言",
      "乌龙"
    ],
    "genre": "爱情,喜剧"
  },
  {
    "id": "1730",
    "title": "好像一条狗",
    "url": "./movie-1730.html",
    "cover": "./80.jpg",
    "oneLine": "一名失败的编剧意外与一只流浪狗互换了身体,从此他得以窥见都市丛林中的人间真相。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "周星驰致敬",
      "底层挣扎",
      "人生哲理",
      "小人物",
      "变形记"
    ],
    "genre": "剧情,黑色幽默,荒诞"
  },
  {
    "id": "1731",
    "title": "楚汉骄雄粤语",
    "url": "./movie-1731.html",
    "cover": "./81.jpg",
    "oneLine": "市井无赖刘邦与英雄盖世项羽,两个性格迥异的枭雄如何在秦末乱世中走上宿命对决。",
    "year": "2004",
    "type": "剧集",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "粤语配音",
      "刘邦",
      "项羽",
      "权谋"
    ],
    "genre": "历史,战争,剧情"
  },
  {
    "id": "1732",
    "title": "侠盗偷画大作战",
    "url": "./movie-1732.html",
    "cover": "./82.jpg",
    "oneLine": "五位各怀绝技的落魄侠盗接下一单天价名画盗窃任务,却发现画中藏着足以颠覆艺术界的惊天秘密。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "高智商犯罪",
      "团队协作",
      "艺术盗窃",
      "反转"
    ],
    "genre": "动作,犯罪,喜剧"
  },
  {
    "id": "1733",
    "title": "下一层",
    "url": "./movie-1733.html",
    "cover": "./83.jpg",
    "oneLine": "在一场奢华到极致的长桌宴上,每吃一口,地板就会碎裂,人们不断坠入下一层地狱。",
    "year": "2008",
    "type": "电影",
    "region": "加拿大/法国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "短片",
      "讽刺",
      "贪婪",
      "饕餮"
    ],
    "genre": "短片/剧情/奇幻"
  },
  {
    "id": "1734",
    "title": "特别的一天",
    "url": "./movie-1734.html",
    "cover": "./84.jpg",
    "oneLine": "1944年,台湾日治末期,一个闽南籍女孩必须在一天内学会骑自行车,否则父亲将被征召去南洋当军夫。",
    "year": "2024",
    "type": "电影",
    "region": "中国台湾",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "日治时期",
      "父女",
      "和解",
      "单车",
      "温情"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "1735",
    "title": "雅各布之妻",
    "url": "./movie-1735.html",
    "cover": "./85.jpg",
    "oneLine": "虔诚牧师雅各布的妻子被吸血鬼咬伤后,她发现永生比当师母爽多了,于是决定拉上丈夫布道。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "吸血鬼",
      "宗教",
      "中年危机",
      "女性",
      "血腥"
    ],
    "genre": "恐怖/剧情"
  },
  {
    "id": "1736",
    "title": "盲眼谜情",
    "url": "./movie-1736.html",
    "cover": "./86.jpg",
    "oneLine": "一名失明的钢琴调音师接受了一份古堡工作,却发现主人去世前录制的遗言录音带里,藏着一首只有她能破解的凶杀曲谱。",
    "year": "2020",
    "type": "电影",
    "region": "西班牙",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "感官剥夺",
      "哥特",
      "复仇",
      "盲女"
    ],
    "genre": "惊悚/剧情"
  },
  {
    "id": "1737",
    "title": "亚历山大内夫斯基",
    "url": "./movie-1737.html",
    "cover": "./87.jpg",
    "oneLine": "十三世纪,俄罗斯最伟大的英雄用一场冰上血战,阻止了条顿骑士团东进的铁蹄。",
    "year": "2004",
    "type": "电影",
    "region": "俄罗斯",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "俄罗斯历史",
      "古装战争",
      "英雄史诗",
      "亚历山大·涅夫斯基",
      "条顿骑士团"
    ],
    "genre": "历史,战争,传记"
  },
  {
    "id": "1738",
    "title": "穿越时空的骑士",
    "url": "./movie-1738.html",
    "cover": "./88.jpg",
    "oneLine": "一名中世纪骑士被传送到现代纽约,必须在24小时内找回魔法圣杯,否则历史将被改写。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "时间旅行",
      "中世纪",
      "骑士精神",
      "现代碰撞",
      "幽默"
    ],
    "genre": "科幻,冒险,喜剧"
  },
  {
    "id": "1739",
    "title": "荒漠浴血记",
    "url": "./movie-1739.html",
    "cover": "./89.jpg",
    "oneLine": "一名被帮派背叛抛尸荒漠的枪手,与一条瘸腿野狗结伴,踏上血腥复仇之路。",
    "year": "1967",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "西部片",
      "复仇",
      "枪战",
      "荒野求生"
    ],
    "genre": "西部动作"
  },
  {
    "id": "1740",
    "title": "双凤奇缘",
    "url": "./movie-1740.html",
    "cover": "./90.jpg",
    "oneLine": "一桩灭门案让将军府的双胞胎姐妹分隔十年,一个成为宠妃,一个成为女捕头,共同追查真凶。",
    "year": "2023",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "双女主",
      "替身",
      "权谋",
      "复仇",
      "姐妹情深"
    ],
    "genre": "古装/悬疑/宫廷"
  },
  {
    "id": "1741",
    "title": "刑侦笔记",
    "url": "./movie-1741.html",
    "cover": "./91.jpg",
    "oneLine": "一位失忆的天才侧写师,通过自己七年前写的刑侦笔记,追查专门模仿笔记手法的连环杀手。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "本格推理",
      "连环命案",
      "高智商对决",
      "双男主"
    ],
    "genre": "悬疑、犯罪、刑侦"
  },
  {
    "id": "1742",
    "title": "美满婚姻",
    "url": "./movie-1742.html",
    "cover": "./92.jpg",
    "oneLine": "结婚三十年的模范夫妻,在卖掉公司退休当晚,妻子递给丈夫一份离婚协议和一柄解剖刀。",
    "year": "2024",
    "type": "电影",
    "region": "法国/比利时",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "婚姻危机",
      "心理操控",
      "阶层",
      "法式伦理"
    ],
    "genre": "剧情、悬疑"
  },
  {
    "id": "1743",
    "title": "造梦之家",
    "url": "./movie-1743.html",
    "cover": "./93.jpg",
    "oneLine": "一家神秘的工作室,能让临终之人在最后八小时里,住进自己最想重温的那一天的梦境。",
    "year": "2024",
    "type": "剧集",
    "region": "韩国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "梦境共享",
      "临终关怀",
      "催泪向",
      "单元剧"
    ],
    "genre": "奇幻/温情/治愈"
  },
  {
    "id": "1744",
    "title": "夏日情事",
    "url": "./movie-1744.html",
    "cover": "./94.jpg",
    "oneLine": "两个受伤的灵魂在法国南部小镇相遇,约定夏日结束后就分手。",
    "year": "2019",
    "type": "电影",
    "region": "法国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "度假",
      "邂逅",
      "遗憾",
      "夏天",
      "短暂关系"
    ],
    "genre": "爱情/剧情"
  },
  {
    "id": "1745",
    "title": "举杯畅饮的姐姐们",
    "url": "./movie-1745.html",
    "cover": "./95.jpg",
    "oneLine": "四个四十多岁的离婚女人组成“酩酊姐妹”,每周喝醉一次,报复操蛋的生活。",
    "year": "2025",
    "type": "电视剧",
    "region": "韩国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "女性",
      "中年",
      "友情",
      "酒",
      "治愈"
    ],
    "genre": "剧情"
  },
  {
    "id": "1746",
    "title": "第六感1999",
    "url": "./movie-1746.html",
    "cover": "./96.jpg",
    "oneLine": "1999年12月,全城的人都开始“看见”同一个死去的小女孩,只有一位坚信科学的老刑警认为那不是灵异,而是阴谋。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "世纪末",
      "都市传说",
      "集体癔症",
      "录像带",
      "心理惊悚"
    ],
    "genre": "悬疑,恐怖"
  },
  {
    "id": "1747",
    "title": "逝去公主的孔雀舞",
    "url": "./movie-1747.html",
    "cover": "./97.jpg",
    "oneLine": "现代芭蕾舞者总梦见自己是一只在古暹罗皇宫跳舞的孔雀,而那个总在梦中杀死她的王子,竟是现在的男友。",
    "year": "2024",
    "type": "电视剧",
    "region": "泰国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "古典舞",
      "转世",
      "宫斗",
      "虐恋"
    ],
    "genre": "爱情,奇幻"
  },
  {
    "id": "1748",
    "title": "怨恨2021",
    "url": "./movie-1748.html",
    "cover": "./98.jpg",
    "oneLine": "一个“只需在心中默念怨恨之人的名字三次”的诅咒网站悄然扩散,点击者无一例外在七日后惨死。",
    "year": "2021",
    "type": "电影",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "咒怨宇宙",
      "网络诅咒",
      "病毒式传播",
      "伪纪录片"
    ],
    "genre": "恐怖/悬疑"
  },
  {
    "id": "1749",
    "title": "拼命三郎",
    "url": "./movie-1749.html",
    "cover": "./99.jpg",
    "oneLine": "一个只有“勇”字的警察,为了给枉死的同事报仇,独闯金三角毒巢。",
    "year": "1989",
    "type": "电影",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "警匪",
      "兄弟情",
      "港式暴力美学"
    ],
    "genre": "动作,犯罪,剧情"
  },
  {
    "id": "1750",
    "title": "滑板狂热",
    "url": "./movie-1750.html",
    "cover": "./100.jpg",
    "oneLine": "一群被补习班开除的“差生”,为了抢回操场,决定用滑板挑战校长制定的荒谬校规。",
    "year": "2024",
    "type": "剧集",
    "region": "英国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "青春",
      "滑板",
      "废柴逆袭",
      "英式幽默"
    ],
    "genre": "喜剧,运动"
  },
  {
    "id": "1751",
    "title": "波拉克和他的情人",
    "url": "./movie-1751.html",
    "cover": "./101.jpg",
    "oneLine": "抽象表现主义大师波拉克生命最后五年,情人露丝见证了天才与疯癫的一线之隔。",
    "year": "2023",
    "type": "电影",
    "region": "英国/美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "画家",
      "精神病",
      "缪斯"
    ],
    "genre": "传记/剧情"
  },
  {
    "id": "1752",
    "title": "中学",
    "url": "./movie-1752.html",
    "cover": "./102.jpg",
    "oneLine": "一所普通中学里,全校师生都在重复同一句话:“那天下午,我们什么都没看见。",
    "year": "2024",
    "type": "剧集",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "集体霸凌",
      "楼梯坠落",
      "全员说谎"
    ],
    "genre": "校园悬疑"
  },
  {
    "id": "1753",
    "title": "霓裳魅影",
    "url": "./movie-1753.html",
    "cover": "./103.jpg",
    "oneLine": "一位过气的时装设计大师,收了一位极具天赋却身世成谜的学徒,从此,他的每件高定礼服都开始“流血泪”。",
    "year": "2025",
    "type": "电影",
    "region": "法国/意大利",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "时尚圈",
      "心理战",
      "病态美学"
    ],
    "genre": "剧情,惊悚"
  },
  {
    "id": "1754",
    "title": "浴血丛林",
    "url": "./movie-1754.html",
    "cover": "./104.jpg",
    "oneLine": "六支雇佣兵小队深入亚马逊寻找失落之城,却发现丛林本身是一个活着的巨型生物。",
    "year": "2025",
    "type": "电影",
    "region": "美国/巴西",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "亚马逊",
      "雇佣兵",
      "寻宝",
      "变异生物",
      "部落诅咒"
    ],
    "genre": "动作/冒险"
  },
  {
    "id": "1755",
    "title": "三勇士之骑士",
    "url": "./movie-1755.html",
    "cover": "./105.jpg",
    "oneLine": "第三次十字军东征中,三位来自不同阶层的战士结为兄弟,护送一个能改变战局的圣物。",
    "year": "2022",
    "type": "电影",
    "region": "英国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "中世纪",
      "十字军",
      "兄弟情",
      "史诗"
    ],
    "genre": "历史,动作,冒险"
  },
  {
    "id": "1756",
    "title": "恶搞之家第三季",
    "url": "./movie-1756.html",
    "cover": "./106.jpg",
    "oneLine": "废柴老爹彼得这次搞砸了儿子的婚礼,只因他请来了前女友当驻唱。",
    "year": "2025",
    "type": "电视剧 (22集)",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "无厘头",
      "讽刺",
      "段子",
      "脑洞",
      "重口味"
    ],
    "genre": "喜剧/动画/成人"
  },
  {
    "id": "1757",
    "title": "护照",
    "url": "./movie-1757.html",
    "cover": "./107.jpg",
    "oneLine": "奥斯维辛集中营里,一名犹太囚徒伪造了数千份假护照,只为多挽救一条生命。",
    "year": "2026",
    "type": "电影",
    "region": "波兰/德国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "二战",
      "身份",
      "救赎"
    ],
    "genre": "剧情、历史、战争"
  },
  {
    "id": "1758",
    "title": "与凤行",
    "url": "./movie-1758.html",
    "cover": "./108.jpg",
    "oneLine": "魔界女王爷为退婚变作麻雀,意外被落难凤凰捡到,开启啼笑皆非的互坑之旅。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "仙侠",
      "女强",
      "虐恋"
    ],
    "genre": "古装,奇幻,爱情"
  },
  {
    "id": "1759",
    "title": "俱乐部谋杀案",
    "url": "./movie-1759.html",
    "cover": "./109.jpg",
    "oneLine": "在一个与世隔绝的绅士俱乐部里,一名会员在打桥牌时被毒杀,而所有人都有完美的不在场证明。",
    "year": "2023",
    "type": "电影",
    "region": "英国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "本格推理",
      "暴风雪山庄",
      "贵族",
      "毒杀"
    ],
    "genre": "悬疑,犯罪"
  },
  {
    "id": "1760",
    "title": "丛林里的少年",
    "url": "./movie-1760.html",
    "cover": "./110.jpg",
    "oneLine": "因飞机失事落入亚马逊雨林的都市少年,必须在一个与世隔绝的原始部落中挣扎求生并找到身份认同。",
    "year": "2023",
    "type": "电影",
    "region": "巴西",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "亚马逊",
      "原始部落",
      "文明冲突",
      "成长",
      "生存"
    ],
    "genre": "剧情,冒险,惊悚"
  },
  {
    "id": "1761",
    "title": "坏爸爸",
    "url": "./movie-1761.html",
    "cover": "./111.jpg",
    "oneLine": "一个刚出狱的父亲发现自己的儿子成了街头混混,他必须用最笨拙的方式赢回儿子的信任。",
    "year": "2018",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "父子",
      "叛逆",
      "和解",
      "底层",
      "情感"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "1762",
    "title": "乱爱办公室",
    "url": "./movie-1762.html",
    "cover": "./112.jpg",
    "oneLine": "一间深夜的办公室,五个各怀鬼胎的员工同时收到匿名威胁邮件,所有地下恋情即将在零点曝光。",
    "year": "2023",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "办公室恋情",
      "多角关系",
      "黑色幽默",
      "反转",
      "修罗场"
    ],
    "genre": "爱情/喜剧/剧情"
  },
  {
    "id": "1763",
    "title": "死亡游戏",
    "url": "./movie-1763.html",
    "cover": "./113.jpg",
    "oneLine": "六位走投无路的负债者参加一场直播游戏,每轮投票淘汰一人,而淘汰等于“真实死亡”。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "直播",
      "密室",
      "社会批判"
    ],
    "genre": "悬疑/惊悚"
  },
  {
    "id": "1764",
    "title": "卡车斗士",
    "url": "./movie-1764.html",
    "cover": "./114.jpg",
    "oneLine": "为了救被绑架的女儿,一个退了休的卡车司机单挑整个贩毒链条。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "卡车司机",
      "贩毒黑吃黑",
      "西南公路",
      "硬汉"
    ],
    "genre": "动作/犯罪/公路"
  },
  {
    "id": "1765",
    "title": "苹果2020",
    "url": "./movie-1765.html",
    "cover": "./115.jpg",
    "oneLine": "2020年初武汉封城期间,一个被隔离在出租屋的打工妹,全凭楼下水果店老板每天从窗户吊上来的一箱苹果活下去。",
    "year": "2020",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "疫情",
      "隔离",
      "小人物",
      "温情"
    ],
    "genre": "短片,剧情"
  },
  {
    "id": "1766",
    "title": "掳劫狂徒",
    "url": "./movie-1766.html",
    "cover": "./116.jpg",
    "oneLine": "一个安静的牧羊女被连环杀手绑架到荒野,她不仅逃脱了,还反向绑住了杀手,开始了一场猎人与猎物的互换。",
    "year": "2023",
    "type": "电影",
    "region": "澳大利亚",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "绑架",
      "公路",
      "反杀",
      "荒野"
    ],
    "genre": "犯罪/惊悚"
  },
  {
    "id": "1767",
    "title": "灵魂歌王",
    "url": "./movie-1767.html",
    "cover": "./117.jpg",
    "oneLine": "失明的黑人少年用一架破钢琴,在种族隔离最严重的南方,创造出撼动灵魂的歌。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "福音",
      "灵魂乐",
      "失明",
      "传奇"
    ],
    "genre": "音乐/剧情/传记"
  },
  {
    "id": "1768",
    "title": "星梦性快感",
    "url": "./movie-1768.html",
    "cover": "./118.jpg",
    "oneLine": "过气偶像转入色情直播,戴上能共享感官的脑机设备后,她分不清高潮与崩溃的界限。",
    "year": "2026",
    "type": "电影",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "直播行业",
      "脑波体验",
      "身份焦虑"
    ],
    "genre": "情色,科幻,心理"
  },
  {
    "id": "1769",
    "title": "无怨无悔",
    "url": "./movie-1769.html",
    "cover": "./119.jpg",
    "oneLine": "一个罹患绝症的父亲,要求两个女儿亲手帮他结束生命,并承诺:“谁动手,谁继承全部遗产。",
    "year": "2024",
    "type": "电影",
    "region": "法国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "安乐死",
      "亲情",
      "道德困境"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "1770",
    "title": "太极魂之初出茅庐",
    "url": "./movie-1770.html",
    "cover": "./120.jpg",
    "oneLine": "农村小子以为太极是养生操,直到他打趴了来踢馆的八个壮汉。",
    "year": "2018",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "太极拳",
      "成长",
      "传统武术"
    ],
    "genre": "动作、武侠、励志"
  },
  {
    "id": "1771",
    "title": "怎么办!脱口秀专场",
    "url": "./movie-1771.html",
    "cover": "./121.jpg",
    "oneLine": "一群濒临失业的脱口秀演员,突发奇想将枯燥的公司年会改造成大型吐槽老板的歌舞脱口秀。",
    "year": "2024",
    "type": "电影",
    "region": "中国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "脱口秀",
      "职场",
      "吐槽",
      "打工人",
      "歌舞片"
    ],
    "genre": "喜剧/音乐"
  },
  {
    "id": "1772",
    "title": "丑角",
    "url": "./movie-1772.html",
    "cover": "./122.jpg",
    "oneLine": "二战期间,一个犹太裔小丑被迫在纳粹军官面前表演,他用笑声传递密码,拯救了集中营里的同胞。",
    "year": "2024",
    "type": "电影",
    "region": "意大利/法国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "小丑艺术",
      "二战",
      "身份认同",
      "舞台与人生",
      "悲喜剧"
    ],
    "genre": "剧情,历史,传记"
  },
  {
    "id": "1773",
    "title": "裸眼",
    "url": "./movie-1773.html",
    "cover": "./123.jpg",
    "oneLine": "士兵自愿参与隐形实验,手术成功后却发现无法再“显形”,而军方决定将他当作死人处理。",
    "year": "2017",
    "type": "电影",
    "region": "西班牙",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "隐形人",
      "军方实验",
      "视网膜",
      "背叛",
      "生存"
    ],
    "genre": "科幻/惊悚"
  },
  {
    "id": "1774",
    "title": "画家与贼",
    "url": "./movie-1774.html",
    "cover": "./124.jpg",
    "oneLine": "著名画家的两幅画被盗,她与盗贼成为朋友,并开始为他绘制肖像。",
    "year": "2020",
    "type": "电影",
    "region": "挪威",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "艺术",
      "救赎",
      "友谊",
      "真实事件改编"
    ],
    "genre": "剧情,纪录式虚构,文艺"
  },
  {
    "id": "1775",
    "title": "绝世战魂",
    "url": "./movie-1775.html",
    "cover": "./125.jpg",
    "oneLine": "全族最废柴的少年意外觉醒了上古“噬魂战魂”,却被告知这种战魂会在三年内反噬宿主的灵魂。",
    "year": "2026",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "修仙",
      "武魂",
      "废柴逆袭",
      "学院"
    ],
    "genre": "古装/玄幻/动作"
  },
  {
    "id": "1776",
    "title": "未来的未来",
    "url": "./movie-1776.html",
    "cover": "./126.jpg",
    "oneLine": "四岁小男孩因妹妹出生而失宠,家里的庭院竟成了连接家族过去与未来的时空车站。",
    "year": "2018",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "细田守",
      "家族",
      "奇幻",
      "成长"
    ],
    "genre": "动画"
  },
  {
    "id": "1777",
    "title": "欲中罪",
    "url": "./movie-1777.html",
    "cover": "./127.jpg",
    "oneLine": "波士顿一位老神父在告解室听到一名连环杀手的忏悔,但受制于“封印”,他只能在凶手行动前用隐喻阻止悲剧。",
    "year": "2025",
    "type": "剧集/限定剧",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "连环杀手",
      "神父",
      "告解室",
      "信仰危机"
    ],
    "genre": "犯罪/心理惊悚"
  },
  {
    "id": "1778",
    "title": "空手道美少女",
    "url": "./movie-1778.html",
    "cover": "./128.jpg",
    "oneLine": "曾经的空手道天才少女隐退后成了柔弱的校花,直到有人对她最好的朋友挥起了拳头。",
    "year": "2025",
    "type": "剧集",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "武道",
      "成长",
      "友情"
    ],
    "genre": "动作/校园"
  },
  {
    "id": "1779",
    "title": "冒牌死党",
    "url": "./movie-1779.html",
    "cover": "./129.jpg",
    "oneLine": "落魄演员被黑帮雇去假扮富豪的替身,结果富豪真死了,他只能继续演下去,还要骗过所有人。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "替身",
      "黑帮",
      "假扮",
      "乌龙",
      "兄弟情"
    ],
    "genre": "喜剧悬疑"
  },
  {
    "id": "1780",
    "title": "他们/她们",
    "url": "./movie-1780.html",
    "cover": "./130.jpg",
    "oneLine": "一对同性情侣搬进保守小镇,发现前房主留下的日记里,所有“他们”都指向一个不存在的孩子。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "性别议题",
      "小镇秘密",
      "心理惊悚",
      "反转",
      "群体压力"
    ],
    "genre": "悬疑,惊悚"
  },
  {
    "id": "1781",
    "title": "辣手保姆 2",
    "url": "./movie-1781.html",
    "cover": "./131.jpg",
    "oneLine": "上一部幸存的女主角如今考上了大学,却发现她的新室友们,全是邪教派来杀她的新一代杀手。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "反杀续集",
      "暴力萝莉",
      "血腥恶搞",
      "少女杀手"
    ],
    "genre": "喜剧/恐怖"
  },
  {
    "id": "1782",
    "title": "比悲伤更悲伤的故事",
    "url": "./movie-1782.html",
    "cover": "./132.jpg",
    "oneLine": "一个男人得知自己将不久于人世,于是亲手为挚爱安排了一段新的婚姻,却在婚礼上发现新娘也有一张死亡通知单。",
    "year": "2024",
    "type": "电影",
    "region": "中国台湾",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "绝症",
      "催泪",
      "反转",
      "牺牲",
      "深情"
    ],
    "genre": "爱情,剧情"
  },
  {
    "id": "1783",
    "title": "戈巴契夫,幸会",
    "url": "./movie-1783.html",
    "cover": "./133.jpg",
    "oneLine": "1997年,已经退休的戈尔巴乔夫正在拍必胜客广告,一个自称“列宁”的流浪汉找上了他。",
    "year": "2021",
    "type": "电影",
    "region": "俄罗斯/德国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "政治",
      "黑色幽默",
      "虚实结合",
      "老人"
    ],
    "genre": "剧情/历史/喜剧"
  },
  {
    "id": "1784",
    "title": "撒马利亚人",
    "url": "./movie-1784.html",
    "cover": "./134.jpg",
    "oneLine": "一个废弃城市里的13岁男孩相信他那沉默寡言的清洁工邻居,就是二十年前失踪的超级英雄“撒马利亚人”。",
    "year": "2022",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "退休英雄",
      "暴力制裁",
      "邻里守护"
    ],
    "genre": "动作,犯罪,超级英雄"
  },
  {
    "id": "1785",
    "title": "坏蛋联盟",
    "url": "./movie-1785.html",
    "cover": "./135.jpg",
    "oneLine": "五个臭名昭著的动物坏蛋,为躲避牢狱之灾假装成立公益组织,却意外爱上了做好事。",
    "year": "2022",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "盗贼",
      "改邪归正",
      "动物拟人"
    ],
    "genre": "喜剧,动画,冒险"
  },
  {
    "id": "1786",
    "title": "九老阿里郎",
    "url": "./movie-1786.html",
    "cover": "./136.jpg",
    "oneLine": "首尔最穷的九老区,一群被时代抛弃的老人们用阿里郎唱出半生血泪。",
    "year": "2019",
    "type": "电影",
    "region": "韩国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "底层",
      "移民",
      "合唱团",
      "治愈",
      "真实事件改编"
    ],
    "genre": "剧情/历史/音乐"
  },
  {
    "id": "1787",
    "title": "彩叶草之梦",
    "url": "./movie-1787.html",
    "cover": "./137.jpg",
    "oneLine": "一个无法做梦的女孩,在自家阳台的彩叶草叶片上,看见了别人的梦境投影。",
    "year": "2025",
    "type": "动画/剧集",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "植物",
      "梦境",
      "慢节奏",
      "手绘"
    ],
    "genre": "奇幻/治愈"
  },
  {
    "id": "1788",
    "title": "红尘",
    "url": "./movie-1788.html",
    "cover": "./138.jpg",
    "oneLine": "1997年,三个四川女孩在深圳一家舞厅做陪舞小姐,她们想赚钱回老家盖房子,却把青春永远留在了红尘里。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "90年代深圳",
      "打工妹",
      "舞厅",
      "时代变迁"
    ],
    "genre": "剧情,爱情,年代"
  },
  {
    "id": "1789",
    "title": "羞答答的铁男",
    "url": "./movie-1789.html",
    "cover": "./139.jpg",
    "oneLine": "一个钢铁直男为了追女神,被迫报名女子防身术班,却成了班里的“金牌陪练”。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "钢铁直男",
      "女子防身术",
      "反差萌"
    ],
    "genre": "喜剧/动作/运动"
  },
  {
    "id": "1790",
    "title": "凯瑟琳夫人在哪",
    "url": "./movie-1790.html",
    "cover": "./140.jpg",
    "oneLine": "贵族庄园里,年迈的老伯爵夫人失踪了,全家人都在找,但每个人似乎都希望她永远不要被找到。",
    "year": "2019",
    "type": "电影",
    "region": "英国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "贵族",
      "失踪",
      "庄园"
    ],
    "genre": "剧情/悬疑/黑色幽默"
  },
  {
    "id": "1791",
    "title": "大卫·福斯特:金曲之路",
    "url": "./movie-1791.html",
    "cover": "./141.jpg",
    "oneLine": "从普通乐手到16次格莱美奖得主,纪录片揭秘金牌制作人如何用“强迫症级”的完美主义改写了流行音乐史。",
    "year": "2026",
    "type": "纪录片",
    "region": "加拿大,美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "音乐人",
      "幕后",
      "励志",
      "格莱美"
    ],
    "genre": "音乐,传记"
  },
  {
    "id": "1792",
    "title": "黄铜茶壶",
    "url": "./movie-1792.html",
    "cover": "./142.jpg",
    "oneLine": "一对穷困夫妻得到一个能生钱的魔壶,但它每吐一次钱,就必须有人在他们面前受伤或痛苦。",
    "year": "2012",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "寓言",
      "金钱",
      "诅咒",
      "黑色幽默"
    ],
    "genre": "喜剧,奇幻,惊悚"
  },
  {
    "id": "1793",
    "title": "狂龙猛汉",
    "url": "./movie-1793.html",
    "cover": "./143.jpg",
    "oneLine": "一个被打落悬崖的锦衣卫,在深山里与猛兽搏斗十年,练就了一身野性功夫,只为回京城讨一个说法。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "硬派功夫",
      "复仇",
      "荒野求生",
      "侠义精神"
    ],
    "genre": "动作,武侠,冒险"
  },
  {
    "id": "1794",
    "title": "侠岚第四季",
    "url": "./movie-1794.html",
    "cover": "./144.jpg",
    "oneLine": "为了拯救被零力侵蚀的同伴,辗迟必须闯入九重天最深处,直面自己的心魔。",
    "year": "2013",
    "type": "剧集",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "玄幻",
      "热血",
      "五行",
      "侠义",
      "国产动漫"
    ],
    "genre": "动画、奇幻、战斗"
  },
  {
    "id": "1795",
    "title": "最佳损友国语",
    "url": "./movie-1795.html",
    "cover": "./145.jpg",
    "oneLine": "三个死党为了帮兄弟追女神,使出浑身解数疯狂整蛊,却每次都把自己搞得灰头土脸。",
    "year": "1988",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "友情",
      "整蛊",
      "港风",
      "无厘头"
    ],
    "genre": "喜剧"
  },
  {
    "id": "1796",
    "title": "加州梦,未完成",
    "url": "./movie-1796.html",
    "cover": "./146.jpg",
    "oneLine": "一盘失踪三十年的传奇摇滚乐队的母带重现,但修复它时,乐队成员接二连三离奇死亡。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "摇滚",
      "失踪",
      "磁带"
    ],
    "genre": "剧情,音乐,历史"
  },
  {
    "id": "1797",
    "title": "危机边缘第三季",
    "url": "./movie-1797.html",
    "cover": "./147.jpg",
    "oneLine": "两个宇宙的边界彻底崩塌,奥莉维亚发现自己怀孕的孩子,体内流淌着能终结战争的“上帝粒子”。",
    "year": "2025",
    "type": "剧集",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "平行宇宙",
      "边缘科学",
      "变种人",
      "道德困境"
    ],
    "genre": "科幻、悬疑、惊悚"
  },
  {
    "id": "1798",
    "title": "生活像阳光一样灿烂",
    "url": "./movie-1798.html",
    "cover": "./148.jpg",
    "oneLine": "白领剩女嫁给了带着青春期女儿的离异高管,她以为生活要灿烂了,结果天天上演“修罗场”。",
    "year": "2020",
    "type": "剧集",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "都市轻喜剧",
      "大龄剩女",
      "再婚家庭",
      "阳光正能量",
      "宋佳"
    ],
    "genre": "喜剧,都市,爱情"
  },
  {
    "id": "1799",
    "title": "布朗克斯历险记",
    "url": "./movie-1799.html",
    "cover": "./149.jpg",
    "oneLine": "三个布朗克斯少年捡到一张据说通往地下宝藏的地图,却发现那是当地毒贩的运毒路线图,而他们已经被盯上。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "街头少年",
      "滑板",
      "黑帮",
      "友谊",
      "成长"
    ],
    "genre": "冒险剧情"
  },
  {
    "id": "1800",
    "title": "不死僵尸—恐栗交响曲",
    "url": "./movie-1800.html",
    "cover": "./150.jpg",
    "oneLine": "天才钢琴家死后化作僵尸,每弹一首曲子,就会令听众变成活尸。",
    "year": "2025",
    "type": "动画电影",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "僵尸",
      "古典音乐",
      "悲剧美学",
      "视觉系",
      "爱情"
    ],
    "genre": "奇幻恐怖"
  },
  {
    "id": "1801",
    "title": "街景一九七〇",
    "url": "./movie-1801.html",
    "cover": "./1.jpg",
    "oneLine": "1970年台北西门町,一个街头摄影师用胶片记录即将拆迁的中华商场,却意外拍下了一场白色恐怖秘密逮捕的现场。",
    "year": "2024",
    "type": "电影",
    "region": "中国台湾",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "1970年代",
      "台北",
      "青春",
      "时代变迁"
    ],
    "genre": "剧情,历史"
  },
  {
    "id": "1802",
    "title": "少年猎手:贝文顿的野兽",
    "url": "./movie-1802.html",
    "cover": "./2.jpg",
    "oneLine": "小镇少年为赏金独自猎杀传说中的野兽,却发现猎物背后藏着更血腥的秘密。",
    "year": "2024",
    "type": "电影",
    "region": "英国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "狩猎",
      "都市传说",
      "少年成长",
      "真相"
    ],
    "genre": "悬疑,冒险,剧情"
  },
  {
    "id": "1803",
    "title": "末日之战",
    "url": "./movie-1803.html",
    "cover": "./3.jpg",
    "oneLine": "丧尸病毒席卷全球,联合国调查员必须在12小时内找到病毒源头。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "丧尸",
      "僵尸世界大战",
      "全球沦陷",
      "病毒爆发"
    ],
    "genre": "动作,科幻,灾难"
  },
  {
    "id": "1804",
    "title": "死后事",
    "url": "./movie-1804.html",
    "cover": "./4.jpg",
    "oneLine": "父亲头七回魂夜,附身在女儿身上,说出了二十年前的惊人秘密。",
    "year": "2022",
    "type": "电影",
    "region": "泰国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "因果报应",
      "灵媒",
      "仪式",
      "民俗",
      "催泪"
    ],
    "genre": "恐怖/剧情/家庭"
  },
  {
    "id": "1805",
    "title": "我是一个贼",
    "url": "./movie-1805.html",
    "cover": "./5.jpg",
    "oneLine": "为了救病重女儿,老实人抢了银行,却被全城黑道奉为“现代罗宾汉”。",
    "year": "1995",
    "type": "电影",
    "region": "香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "侠盗",
      "义贼",
      "枪战",
      "义气"
    ],
    "genre": "动作,犯罪"
  },
  {
    "id": "1806",
    "title": "属鼠的夫人",
    "url": "./movie-1806.html",
    "cover": "./6.jpg",
    "oneLine": "坚信自己属鼠克夫的女孩被迫嫁给豪门“猫命”少爷,却意外发现两人前世竟是天敌情人。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "生肖命理",
      "欢喜冤家",
      "都市奇缘",
      "阴差阳错"
    ],
    "genre": "奇幻爱情喜剧"
  },
  {
    "id": "1807",
    "title": "寂静杀机",
    "url": "./movie-1807.html",
    "cover": "./7.jpg",
    "oneLine": "一名精通唇语的聋哑黑客,在被绑架后利用读唇术偷听绑匪计划,展开绝地反杀。",
    "year": "2024",
    "type": "电影",
    "region": "西班牙",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "聋哑主角",
      "密室逃生",
      "高智商反转",
      "无声恐惧"
    ],
    "genre": "惊悚,犯罪"
  },
  {
    "id": "1808",
    "title": "结发夫妻",
    "url": "./movie-1808.html",
    "cover": "./8.jpg",
    "oneLine": "结婚二十周年,妻子递来离婚协议,丈夫却查出了早期癌症。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "婚姻危机",
      "中年",
      "修复",
      "生活流"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "1809",
    "title": "超生游击队",
    "url": "./movie-1809.html",
    "cover": "./9.jpg",
    "oneLine": "超生游击队队长老马带着妻儿四处躲藏,却在边境小镇遇到一个专门“收购”孩子的神秘买家。",
    "year": "1992",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "计划生育",
      "黑色幽默",
      "底层生存",
      "家庭"
    ],
    "genre": "剧情/喜剧"
  },
  {
    "id": "1810",
    "title": "17号音乐仓库第三季",
    "url": "./movie-1810.html",
    "cover": "./10.jpg",
    "oneLine": "三位过气歌手和两位素人音乐人,共同经营一家废弃仓库,每期邀请一位路人共同完成一首原创歌曲。",
    "year": "2025",
    "type": "综艺",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "仓库改造",
      "独立音乐人",
      "街头演出",
      "素人合作"
    ],
    "genre": "音乐/真人秀/治愈"
  },
  {
    "id": "1811",
    "title": "失恋日",
    "url": "./movie-1811.html",
    "cover": "./11.jpg",
    "oneLine": "四个闺蜜约定在情人节这天集体失恋,却意外发现了爱情的真谛。",
    "year": "2016",
    "type": "电影",
    "region": "香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "失恋",
      "女性",
      "成长",
      "都市",
      "情人节"
    ],
    "genre": "爱情,剧情,喜剧"
  },
  {
    "id": "1812",
    "title": "二龙湖往事之黄金劫",
    "url": "./movie-1812.html",
    "cover": "./12.jpg",
    "oneLine": "二龙湖发现金矿,全村决定自己开采,而唯一的懂行人是城里来的骗子。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "东北",
      "幽默",
      "劫案",
      "小人物",
      "荒诞"
    ],
    "genre": "喜剧/犯罪"
  },
  {
    "id": "1813",
    "title": "巫术",
    "url": "./movie-1813.html",
    "cover": "./13.jpg",
    "oneLine": "一支纪录片团队进入英国偏远村庄,发现村民们仍在用中世纪的方法猎杀女巫。",
    "year": "2015",
    "type": "电影",
    "region": "英国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "伪纪录片",
      "中世纪猎巫",
      "心理恐惧"
    ],
    "genre": "恐怖,剧情"
  },
  {
    "id": "1814",
    "title": "恶魔化身",
    "url": "./movie-1814.html",
    "cover": "./14.jpg",
    "oneLine": "一个神父在驱魔时,发现恶魔说的不是拉丁语,而是未来半小时的新闻联播。",
    "year": "2027",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "灵异",
      "连环杀手",
      "反转",
      "心理恐怖"
    ],
    "genre": "恐怖/悬疑"
  },
  {
    "id": "1815",
    "title": "七剑降魔传",
    "url": "./movie-1815.html",
    "cover": "./15.jpg",
    "oneLine": "上古封印破损,七把神剑散落人间,降魔师发现第六把剑的宿主是个凡人厨子。",
    "year": "2023",
    "type": "网络电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "仙侠",
      "捉妖",
      "特效"
    ],
    "genre": "奇幻,古装,动作"
  },
  {
    "id": "1816",
    "title": "南太平洋之恋",
    "url": "./movie-1816.html",
    "cover": "./16.jpg",
    "oneLine": "一场空难把华尔街女精英和斐济渔民困在同一座无人岛,语言不通却爱上了彼此。",
    "year": "2024",
    "type": "电影",
    "region": "澳大利亚/新西兰",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "荒岛",
      "求生",
      "异国",
      "治愈"
    ],
    "genre": "爱情/冒险"
  },
  {
    "id": "1817",
    "title": "卢蒙巴",
    "url": "./movie-1817.html",
    "cover": "./17.jpg",
    "oneLine": "刚果首任总理卢蒙巴,在独立后仅十周就被政变推翻,最终被敌人杀害并毁尸灭迹。",
    "year": "2000",
    "type": "电影",
    "region": "法国/刚果",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "非洲独立运动",
      "政治斗争",
      "悲情英雄",
      "殖民历史"
    ],
    "genre": "历史,传记,剧情"
  },
  {
    "id": "1818",
    "title": "玉碎",
    "url": "./movie-1818.html",
    "cover": "./18.jpg",
    "oneLine": "天津沦陷,一家玉器古玩店老板用“玉碎”的方式保护国宝不落敌手。",
    "year": "2011",
    "type": "电视剧",
    "region": "中国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "抗战",
      "文物",
      "家族",
      "天津"
    ],
    "genre": "历史/战争"
  },
  {
    "id": "1819",
    "title": "评论",
    "url": "./movie-1819.html",
    "cover": "./19.jpg",
    "oneLine": "一个职业“黑粉”头子,在接到一笔抹杀一名网红的大单后,发现自己正被自己的评论追杀。",
    "year": "2023",
    "type": "电影",
    "region": "韩国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "网络暴力",
      "水军",
      "键盘侠",
      "反噬",
      "密室"
    ],
    "genre": "悬疑/惊悚/社会"
  },
  {
    "id": "1820",
    "title": "钢铁巨人",
    "url": "./movie-1820.html",
    "cover": "./20.jpg",
    "oneLine": "冷战时期,一个美国小男孩在森林里发现了一具来自苏联的巨型机器人,他们成了彼此唯一的秘密。",
    "year": "2024",
    "type": "动画电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "机甲",
      "冷战",
      "友谊"
    ],
    "genre": "科幻"
  },
  {
    "id": "1821",
    "title": "踏破铁鞋回家路",
    "url": "./movie-1821.html",
    "cover": "./21.jpg",
    "oneLine": "被拐三十年的儿子根据儿时模糊记忆,徒步三千公里寻找亲生父母,却接近一个更大的秘密。",
    "year": "2021",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "徒步",
      "寻亲",
      "拐卖",
      "人性"
    ],
    "genre": "公路/剧情"
  },
  {
    "id": "1822",
    "title": "燃翼天使",
    "url": "./movie-1822.html",
    "cover": "./22.jpg",
    "oneLine": "天生无翼的废柴少年,在绝境中点燃了传说中能焚尽天空的火焰之翼。",
    "year": "2025",
    "type": "动漫",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "翼人族",
      "阶级逆袭",
      "空战",
      "觉醒"
    ],
    "genre": "热血,奇幻,战斗"
  },
  {
    "id": "1823",
    "title": "爱德华·李的乡村料理",
    "url": "./movie-1823.html",
    "cover": "./23.jpg",
    "oneLine": "韩裔美籍主厨爱德华·李开着餐车穿越美国南方,寻找被遗忘的移民料理。",
    "year": "2024",
    "type": "剧集",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "料理",
      "主厨",
      "美国南方",
      "文化融合"
    ],
    "genre": "纪录片/美食"
  },
  {
    "id": "1824",
    "title": "山间巴尔南波",
    "url": "./movie-1824.html",
    "cover": "./24.jpg",
    "oneLine": "云南深山小村里,“巴尔南波”意思是“笨蛋”,全村最笨的人被毒贩选成了运毒工具。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "西南边境",
      "方言电影",
      "黑色幽默"
    ],
    "genre": "剧情/犯罪"
  },
  {
    "id": "1825",
    "title": "沉默的教室",
    "url": "./movie-1825.html",
    "cover": "./25.jpg",
    "oneLine": "1956年,东德一所高中全班为匈牙利起义者默哀一分钟,这一分钟让他们失去了上大学的机会,却赢得了自由。",
    "year": "2025",
    "type": "电影",
    "region": "德国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "冷战反思",
      "群体沉默",
      "勇气与代价"
    ],
    "genre": "历史,剧情"
  },
  {
    "id": "1826",
    "title": "我是杀手女仆",
    "url": "./movie-1826.html",
    "cover": "./26.jpg",
    "oneLine": "顶级女杀手为躲避追杀,伪装成白领家的小女仆,却沦陷于雇主做的蛋包饭。",
    "year": "2021",
    "type": "网络剧",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "女仆",
      "反差萌",
      "甜宠"
    ],
    "genre": "喜剧/动作/爱情"
  },
  {
    "id": "1827",
    "title": "济公",
    "url": "./movie-1827.html",
    "cover": "./27.jpg",
    "oneLine": "这个疯和尚不念经不拜佛,专管人间不平事,但他每帮一个人,自己就要失去一种神通。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "民间传说",
      "降妖",
      "疯癫和尚",
      "单元剧"
    ],
    "genre": "古装,神话,喜剧"
  },
  {
    "id": "1828",
    "title": "谎人手记",
    "url": "./movie-1828.html",
    "cover": "./28.jpg",
    "oneLine": "一个习惯性说谎的上班族被卷入同事失踪案,他的每一句假话都成了警方眼中的证据。",
    "year": "2022",
    "type": "电影",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "谎言",
      "记忆",
      "社会派",
      "反转",
      "人性"
    ],
    "genre": "剧情/悬疑"
  },
  {
    "id": "1829",
    "title": "反诈风暴之陌生号码",
    "url": "./movie-1829.html",
    "cover": "./29.jpg",
    "oneLine": "反诈民警伪装成待宰“肥羊”,潜入跨国诈骗集团,却发现自己被骗的亲人也在其中。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "反诈",
      "真实案件",
      "卧底"
    ],
    "genre": "犯罪,剧情"
  },
  {
    "id": "1830",
    "title": "谣言的女人",
    "url": "./movie-1830.html",
    "cover": "./30.jpg",
    "oneLine": "被谣言毁掉人生的女人整容后潜入造谣者公司,却发现所有谣言都指向一个不存在的“她”。",
    "year": "2018",
    "type": "剧集",
    "region": "韩国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "舆论杀人",
      "替身",
      "校园暴力"
    ],
    "genre": "悬疑,剧情,社会"
  },
  {
    "id": "1831",
    "title": "寄生兽:完结篇",
    "url": "./movie-1831.html",
    "cover": "./31.jpg",
    "oneLine": "新一与寄生兽小右迎来最终决战,人类的敌人不是寄生兽,而是人类自己。",
    "year": "2015",
    "type": "电影",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "寄生兽",
      "环保",
      "人性",
      "大决战",
      "漫画改编"
    ],
    "genre": "科幻/恐怖"
  },
  {
    "id": "1832",
    "title": "轻蔑",
    "url": "./movie-1832.html",
    "cover": "./32.jpg",
    "oneLine": "当剧作家保罗发现妻子卡米尔的眼中充满了对他的轻蔑,他们的婚姻走向了不可逆转的瓦解。",
    "year": "1963",
    "type": "电影",
    "region": "法国,意大利",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "婚姻",
      "艺术",
      "背叛",
      "哲学",
      "经典"
    ],
    "genre": "剧情,爱情"
  },
  {
    "id": "1833",
    "title": "神鬼任务",
    "url": "./movie-1833.html",
    "cover": "./33.jpg",
    "oneLine": "代号“鬼神”的中情局超级士兵叛逃,却发现自己的记忆和身体都不属于自己。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "中情局",
      "超级士兵",
      "实验体逃亡",
      "高速追逃"
    ],
    "genre": "动作,惊悚,间谍"
  },
  {
    "id": "1834",
    "title": "直播游戏",
    "url": "./movie-1834.html",
    "cover": "./34.jpg",
    "oneLine": "落魄女主播被诱骗进入一场“百万奖金”的直播真人秀,却发现每一关淘汰的不是选手,而是观看直播的观众。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "直播",
      "密室逃脱",
      "网络暴力",
      "高智商犯罪"
    ],
    "genre": "悬疑,犯罪,惊悚"
  },
  {
    "id": "1835",
    "title": "鬼讯号",
    "url": "./movie-1835.html",
    "cover": "./35.jpg",
    "oneLine": "东京深夜电台有个灵异节目,但主持人不知道:打进热线的鬼,都是真的。",
    "year": "2016",
    "type": "电影",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "收音机",
      "灵异",
      "都市传说",
      "闭环"
    ],
    "genre": "恐怖,悬疑"
  },
  {
    "id": "1836",
    "title": "鲁邦三世 不死身的血族",
    "url": "./movie-1836.html",
    "cover": "./36.jpg",
    "oneLine": "鲁邦盯上了一颗据说能让人永生的“吸血鬼钻石”,但追踪他的不止钱形警部,还有真正的吸血鬼。",
    "year": "2024",
    "type": "动画特别篇",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "鲁邦三世",
      "吸血鬼传说",
      "欧洲古堡"
    ],
    "genre": "动作、冒险、怪盗"
  },
  {
    "id": "1837",
    "title": "头号冤家",
    "url": "./movie-1837.html",
    "cover": "./37.jpg",
    "oneLine": "一名FBI探员和一个职业骗子被拷在一起,被迫联手躲避追杀,同时互相算计如何甩掉对方。 FBI探员麦克斯在抓捕职业骗子杰西时遭遇第三方灭口,两人被迫拷在一起,开始了互坑互助的逃亡之旅。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "欢喜冤家",
      "特工",
      "逃亡",
      "嘴炮"
    ],
    "genre": "喜剧,动作,爱情"
  },
  {
    "id": "1838",
    "title": "崔第国王",
    "url": "./movie-1838.html",
    "cover": "./38.jpg",
    "oneLine": "一个10岁男孩被推上王位,他废除了一切法律,只留下一条:每天必须玩够六小时。",
    "year": "2024",
    "type": "剧集",
    "region": "法国/比利时",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "虚构王国",
      "儿童",
      "反套路",
      "权力游戏"
    ],
    "genre": "奇幻/冒险"
  },
  {
    "id": "1839",
    "title": "吓破胆",
    "url": "./movie-1839.html",
    "cover": "./39.jpg",
    "oneLine": "六个年轻人参加一个号称“能把你吓死”的沉浸式恐怖体验馆,却发现游戏里的死亡陷阱都是真的。",
    "year": "2025",
    "type": "电影",
    "region": "美国/加拿大",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "游乐场",
      "生存游戏",
      "血腥",
      "密室逃脱",
      "诅咒"
    ],
    "genre": "恐怖,冒险,悬疑"
  },
  {
    "id": "1840",
    "title": "珍珍的发屋",
    "url": "./movie-1840.html",
    "cover": "./40.jpg",
    "oneLine": "小镇理发师珍珍盘下废弃发廊,却发现店里半夜总会传出陌生女人的洗头声。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "女性",
      "创业",
      "市井"
    ],
    "genre": "剧情/喜剧"
  },
  {
    "id": "1841",
    "title": "通职者",
    "url": "./movie-1841.html",
    "cover": "./41.jpg",
    "oneLine": "一个能完美胜任任何职业的神秘人,受雇于受害者,潜入各行各业挖掘被隐藏的真相。",
    "year": "2026",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "职业多样性",
      "单元探案",
      "社会派推理",
      "暗网"
    ],
    "genre": "悬疑/犯罪"
  },
  {
    "id": "1842",
    "title": "乱斗夫妻",
    "url": "./movie-1842.html",
    "cover": "./42.jpg",
    "oneLine": "一对打算离婚的夫妻误闯入黑帮交易现场,为了活命不得不假装恩爱夫妻大杀四方。",
    "year": "2011",
    "type": "电影",
    "region": "中国香港",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "夫妻",
      "武打",
      "乌龙",
      "欢乐"
    ],
    "genre": "喜剧/动作"
  },
  {
    "id": "1843",
    "title": "昨日的美食",
    "url": "./movie-1843.html",
    "cover": "./43.jpg",
    "oneLine": "律师与理发师同居生活,每一顿饭都是他们对抗世界的小小胜利。",
    "year": "2025",
    "type": "剧集",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "同性伴侣",
      "日常",
      "料理",
      "治愈"
    ],
    "genre": "生活美食"
  },
  {
    "id": "1844",
    "title": "曼谷复仇",
    "url": "./movie-1844.html",
    "cover": "./44.jpg",
    "oneLine": "为了救出被拐卖的女儿,一名哑巴清洁工重拾泰拳,打穿曼谷地下的人口贩卖网络。",
    "year": "2026",
    "type": "电影",
    "region": "泰国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "泰拳",
      "复仇",
      "暗网"
    ],
    "genre": "动作/犯罪/惊悚"
  },
  {
    "id": "1845",
    "title": "深郁黑暗",
    "url": "./movie-1845.html",
    "cover": "./45.jpg",
    "oneLine": "六个陌生人醒来时被困在完全黑暗的地堡里,每过一小时灯亮一次,亮灯时必定少一个人。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "密室",
      "心理",
      "推理"
    ],
    "genre": "悬疑"
  },
  {
    "id": "1846",
    "title": "我爱你姜九",
    "url": "./movie-1846.html",
    "cover": "./46.jpg",
    "oneLine": "内向的图书管理员发现,只要在纸上写“我爱你姜九”,那天就会重复过。",
    "year": "2027",
    "type": "剧集",
    "region": "韩国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "时间循环",
      "暗恋成真",
      "救赎"
    ],
    "genre": "爱情/奇幻"
  },
  {
    "id": "1847",
    "title": "西域大都护",
    "url": "./movie-1847.html",
    "cover": "./47.jpg",
    "oneLine": "西域大都护意外发现一座古城壁画上,竟预言了他将死于最信任之人手中。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "丝绸之路",
      "考古",
      "权力斗争"
    ],
    "genre": "历史、动作、悬疑"
  },
  {
    "id": "1848",
    "title": "六号门",
    "url": "./movie-1848.html",
    "cover": "./48.jpg",
    "oneLine": "一座见证北京百年沧桑的四合院“六号门”,几户人家六十年的悲欢离合与柴米油盐。",
    "year": "2024",
    "type": "电视剧",
    "region": "中国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "老北京",
      "四合院",
      "时代变迁",
      "邻里关系"
    ],
    "genre": "剧情/年代/生活"
  },
  {
    "id": "1849",
    "title": "家有超能迪翁第二季",
    "url": "./movie-1849.html",
    "cover": "./49.jpg",
    "oneLine": "上一季迪翁拯救了世界,但这一季他要面对的是更可怕的敌人:青春期、校园霸凌和失控的超能力。",
    "year": "2024",
    "type": "剧集",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "超英儿童",
      "单亲育儿",
      "成长伤痛",
      "视觉特效"
    ],
    "genre": "科幻,家庭,冒险"
  },
  {
    "id": "1850",
    "title": "遗忘",
    "url": "./movie-1850.html",
    "cover": "./50.jpg",
    "oneLine": "留守末世的记忆修复员,在坠机点发现了一个和自己长得一模一样的人,才意识到自己才是被遗忘的入侵者。",
    "year": "2013",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "克隆人",
      "记忆植入",
      "末世废墟",
      "无人机",
      "真相挖掘"
    ],
    "genre": "科幻/动作/悬疑"
  },
  {
    "id": "1851",
    "title": "索非亚",
    "url": "./movie-1851.html",
    "cover": "./51.jpg",
    "oneLine": "1956 年摩洛哥独立前夕,一位名叫索菲亚的法国殖民者之女,发现自己体内流淌着被掩盖的柏柏尔人血液。",
    "year": "2023",
    "type": "电影",
    "region": "法国/比利时",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "女性觉醒",
      "殖民创伤",
      "北非风情"
    ],
    "genre": "剧情历史"
  },
  {
    "id": "1852",
    "title": "大清王爷爱上我",
    "url": "./movie-1852.html",
    "cover": "./52.jpg",
    "oneLine": "现代 HR 总监穿越成王府粗使丫鬟,用 KPI 考核制整顿九子夺嫡。",
    "year": "2023",
    "type": "剧集",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "甜宠",
      "清穿",
      "职场女性",
      "宫斗"
    ],
    "genre": "爱情/古装/穿越"
  },
  {
    "id": "1853",
    "title": "幽灵与秘密隧道",
    "url": "./movie-1853.html",
    "cover": "./53.jpg",
    "oneLine": "叛逆少年在老宅密道里撞见游荡的“幽灵”,却意外揭开家族尘封七十年的守护秘密。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "小镇传说",
      "地下探险",
      "祖孙情",
      "灵异事件"
    ],
    "genre": "奇幻悬疑"
  },
  {
    "id": "1854",
    "title": "五虎将粤语",
    "url": "./movie-1854.html",
    "cover": "./54.jpg",
    "oneLine": "五个失散多年的警校同窗,再聚首时却发现彼此分属黑白两道,信任一触即碎。",
    "year": "2024",
    "type": "剧集",
    "region": "中国香港",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "卧底",
      "兄弟情",
      "黑帮",
      "港风",
      "原声"
    ],
    "genre": "动作、警匪、悬疑"
  },
  {
    "id": "1855",
    "title": "神偷大盗",
    "url": "./movie-1855.html",
    "cover": "./55.jpg",
    "oneLine": "天下第一神偷因一块失窃的破手表,竟与想抢他饭碗的笨贼联盟组队,目标竟是同一家银行。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "盗贼联盟",
      "黑吃黑",
      "反转再反转"
    ],
    "genre": "喜剧/动作/犯罪"
  },
  {
    "id": "1856",
    "title": "霍比特人:史矛革之战",
    "url": "./movie-1856.html",
    "cover": "./56.jpg",
    "oneLine": "比尔博与矮人小队潜入幽暗密林,在恶龙史矛革的怒火中,试图夺回孤山和阿肯宝石。",
    "year": "2013",
    "type": "电影",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "巨龙",
      "矮人",
      "远征",
      "密林",
      "史诗"
    ],
    "genre": "奇幻,冒险,动作"
  },
  {
    "id": "1857",
    "title": "家政夫三田园4",
    "url": "./movie-1857.html",
    "cover": "./57.jpg",
    "oneLine": "三田园再次化身家政夫潜入名流家族,这次他要面对的是一个利用高科技监控家人的偏执狂父亲。",
    "year": "2028",
    "type": "电视剧",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "家政夫",
      "瓦解家庭",
      "秘密"
    ],
    "genre": "剧情,悬疑,家庭"
  },
  {
    "id": "1858",
    "title": "彩券",
    "url": "./movie-1858.html",
    "cover": "./58.jpg",
    "oneLine": "一张中了十亿的头奖彩券被遗落在台风夜的便利店,四个陌生人几乎同时发现了它。",
    "year": "2025",
    "type": "电影",
    "region": "中国台湾",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "横财",
      "便利店",
      "人性",
      "黑色电影"
    ],
    "genre": "剧情/犯罪"
  },
  {
    "id": "1859",
    "title": "登入火星",
    "url": "./movie-1859.html",
    "cover": "./59.jpg",
    "oneLine": "人类首批火星登陆舱着陆前,宇航员发现AI导航系统已被篡改,目的地根本不是火星。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "火星任务",
      "AI叛变",
      "孤独",
      "绝境求生",
      "硬科幻"
    ],
    "genre": "科幻/冒险/灾难"
  },
  {
    "id": "1860",
    "title": "在上帝赐予的土地上游玩",
    "url": "./movie-1860.html",
    "cover": "./60.jpg",
    "oneLine": "一个犹太父亲带巴勒斯坦养子穿越隔离墙,用徒步方式抗议土地被切割成碎片。",
    "year": "2025",
    "type": "电影",
    "region": "以色列",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "约旦河西岸",
      "父子",
      "隔离墙",
      "徒步"
    ],
    "genre": "剧情/家庭/冒险"
  },
  {
    "id": "1861",
    "title": "枕边细语",
    "url": "./movie-1861.html",
    "cover": "./61.jpg",
    "oneLine": "妻子用APP记录丈夫的梦话,竟拼凑出了一起完美的谋杀案,而被害人还躺在他们床上。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "梦话",
      "夫妻",
      "秘密",
      "心理恐怖"
    ],
    "genre": "惊悚/悬疑/恐怖"
  },
  {
    "id": "1862",
    "title": "罗莎娜",
    "url": "./movie-1862.html",
    "cover": "./62.jpg",
    "oneLine": "二十世纪西西里岛,一个不会说话的女孩用剪刀剪断了家族百年的包办婚姻锁链。",
    "year": "1987",
    "type": "电影",
    "region": "意大利",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "女性",
      "西西里",
      "封建",
      "反抗",
      "母女"
    ],
    "genre": "剧情"
  },
  {
    "id": "1863",
    "title": "山里红",
    "url": "./movie-1863.html",
    "cover": "./63.jpg",
    "oneLine": "太行山深处的哑女翠花用祖传方子酿山楂酒,等一个当年说“喝了你的酒就回来”的男人,等了整整三十年。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "太行山",
      "留守儿童",
      "山楂酒",
      "非职业演员",
      "四季轮回"
    ],
    "genre": "文艺/乡土/女性"
  },
  {
    "id": "1864",
    "title": "魔诫奇兵2",
    "url": "./movie-1864.html",
    "cover": "./64.jpg",
    "oneLine": "上一集活下来的女兵,这次要带着一把会说话的魔刀,闯进吃人的活体丛林。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "丛林冒险",
      "远古诅咒",
      "女性主角",
      "冷兵器对战",
      "续作升级"
    ],
    "genre": "动作/奇幻"
  },
  {
    "id": "1865",
    "title": "拳击少女和爆疯大叔",
    "url": "./movie-1865.html",
    "cover": "./65.jpg",
    "oneLine": "叛逆少女为救濒临倒闭的拳馆,与暴躁大叔组成最不靠谱的师徒搭档,冲击金腰带。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "热血",
      "逆袭",
      "忘年交",
      "励志",
      "格斗"
    ],
    "genre": "剧情/运动/喜剧"
  },
  {
    "id": "1866",
    "title": "宇宙护卫队:风暴力量",
    "url": "./movie-1866.html",
    "cover": "./66.jpg",
    "oneLine": "为了拯救被黑洞吞噬的母星,五位性格迥异的菜鸟机甲战士必须学会合体与信任。",
    "year": "2025",
    "type": "电影(动画)",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "机甲",
      "环保",
      "团队合作"
    ],
    "genre": "科幻,冒险"
  },
  {
    "id": "1867",
    "title": "塬上",
    "url": "./movie-1867.html",
    "cover": "./67.jpg",
    "oneLine": "塬上最后一个留守老人去世了,全村搬迁前夜,一具白骨被挖出。",
    "year": "2022",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "黄土高原",
      "环保搬迁",
      "乡愁",
      "空村"
    ],
    "genre": "文艺剧情"
  },
  {
    "id": "1868",
    "title": "隐藏的画家",
    "url": "./movie-1868.html",
    "cover": "./68.jpg",
    "oneLine": "一个做了四十年教堂看守人的老人去世后,人们在他床底发现三百幅惊人画作,彻底改写了艺术史。",
    "year": "2023",
    "type": "电影",
    "region": "意大利",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "艺术",
      "孤独",
      "素人画家",
      "20世纪",
      "修复"
    ],
    "genre": "传记、剧情"
  },
  {
    "id": "1869",
    "title": "反恐怖大行动",
    "url": "./movie-1869.html",
    "cover": "./69.jpg",
    "oneLine": "恐怖分子挟持了一栋大楼,韩国顶级反恐部队突入后才发现,人质是假的,大楼是炸弹,而他们只是政治棋局中的弃子。",
    "year": "2026",
    "type": "电影",
    "region": "韩国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "人质解救",
      "巷战",
      "以暴制暴",
      "政治阴谋"
    ],
    "genre": "动作、惊悚、犯罪"
  },
  {
    "id": "1870",
    "title": "恶灵婴弑",
    "url": "./movie-1870.html",
    "cover": "./70.jpg",
    "oneLine": "单亲妈妈为救重病女儿求助黑魔法,却召来一个以胎儿形态存在的上古恶灵。",
    "year": "2019",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "降灵会",
      "邪婴",
      "巫术",
      "公寓"
    ],
    "genre": "恐怖/超自然"
  },
  {
    "id": "1871",
    "title": "工作细胞 国语版",
    "url": "./movie-1871.html",
    "cover": "./71.jpg",
    "oneLine": "当流感病毒入侵一个长期熬夜加班的程序员身体,所有细胞都跟着他一起崩溃。",
    "year": "2026",
    "type": "剧集/动画",
    "region": "日本",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "细胞拟人",
      "国语配音",
      "本土化改编",
      "免疫疾病"
    ],
    "genre": "喜剧/科普/奇幻"
  },
  {
    "id": "1872",
    "title": "黑色灰姑娘",
    "url": "./movie-1872.html",
    "cover": "./72.jpg",
    "oneLine": "深肤色的女高中生参加校园选美,她的对手是全校最白的混血女孩。",
    "year": "2024",
    "type": "剧集",
    "region": "日本",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "肤色歧视",
      "选美",
      "逆袭",
      "多元审美"
    ],
    "genre": "爱情/剧情/校园"
  },
  {
    "id": "1873",
    "title": "叶罗丽梦奇境真人版",
    "url": "./movie-1873.html",
    "cover": "./73.jpg",
    "oneLine": "普通女孩王默发现,全城孩子的噩梦正在实体化,而她是唯一能进入梦境的人。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "魔法少女",
      "梦境",
      "真人化",
      "成长",
      "特效大片"
    ],
    "genre": "奇幻,冒险,儿童"
  },
  {
    "id": "1874",
    "title": "月光花谋杀案",
    "url": "./movie-1874.html",
    "cover": "./74.jpg",
    "oneLine": "畅销书作家兼职侦探苏珊,在一座闹鬼庄园里追查一桩与“月光花”有关的密室杀人。",
    "year": "2024",
    "type": "TV剧集",
    "region": "英国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "英式推理",
      "庄园",
      "植物毒",
      "女侦探"
    ],
    "genre": "悬疑,犯罪"
  },
  {
    "id": "1875",
    "title": "大明奇才",
    "url": "./movie-1875.html",
    "cover": "./75.jpg",
    "oneLine": "永乐年间,一位擅长“打脸”的落榜书生卷入连环命案,连朱棣都成了他的辩护律师。",
    "year": "2025",
    "type": "剧集",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "探案",
      "君臣",
      "科举黑幕",
      "机智"
    ],
    "genre": "古装/悬疑/喜剧"
  },
  {
    "id": "1876",
    "title": "海边的屋子",
    "url": "./movie-1876.html",
    "cover": "./76.jpg",
    "oneLine": "一位失忆的老作家回到海边的老屋,发现屋里的每一件物品都会在他触碰时“播放”一段关于自己家人的秘密。",
    "year": "2022",
    "type": "电影",
    "region": "法国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "孤独",
      "记忆碎片",
      "海边",
      "文艺",
      "心理"
    ],
    "genre": "剧情/悬疑/文艺"
  },
  {
    "id": "1877",
    "title": "虎口余生",
    "url": "./movie-1877.html",
    "cover": "./77.jpg",
    "oneLine": "摄影师林恩在西伯利亚丛林遭东北虎袭击,她必须在断粮断联的绝境中,与这只受伤的猛兽周旋七天。",
    "year": "2003",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "荒野求生",
      "人虎对抗",
      "女性主角",
      "真实事件改编"
    ],
    "genre": "冒险/惊悚/生存"
  },
  {
    "id": "1878",
    "title": "战地巨蟒",
    "url": "./movie-1878.html",
    "cover": "./78.jpg",
    "oneLine": "越战期间,美军秘密运输的生化巨蟒在雨林逃脱,北越游击队与美军特种兵被迫联手逃生。",
    "year": "2026",
    "type": "电影",
    "region": "美国/菲律宾",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "战争怪兽",
      "丛林绞杀",
      "基因实验"
    ],
    "genre": "动作/恐怖"
  },
  {
    "id": "1879",
    "title": "女皇之刃 叛乱",
    "url": "./movie-1879.html",
    "cover": "./79.jpg",
    "oneLine": "女皇突然变成暴君,她最强的十二骑士中有一半揭竿而起,却发现自己才是叛乱的理由。",
    "year": "2021",
    "type": "动画剧集",
    "region": "日本",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "女战士",
      "剑斗",
      "叛乱",
      "权谋",
      "热血"
    ],
    "genre": "动作/奇幻/战斗"
  },
  {
    "id": "1880",
    "title": "消失的坚果",
    "url": "./movie-1880.html",
    "cover": "./80.jpg",
    "oneLine": "冰川时期的倒霉松鼠斯卡特的宝贝橡果失窃了,他化身硬汉侦探,一路追到外太空。",
    "year": "2016",
    "type": "短片/电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "松鼠",
      "橡果",
      "盗窃案",
      "侦探",
      "搞笑"
    ],
    "genre": "动画,喜剧,悬疑"
  },
  {
    "id": "1881",
    "title": "真爱找麻烦!",
    "url": "./movie-1881.html",
    "cover": "./81.jpg",
    "oneLine": "新娘在婚礼当天失忆,坚称自己是来旅游的,而“新郎”是被她随手抓来冒充的倒霉民宿老板。",
    "year": "2026",
    "type": "电视剧",
    "region": "中国台湾",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "乌龙婚礼",
      "失忆",
      "冒牌未婚夫",
      "民宿",
      "海岛"
    ],
    "genre": "爱情、喜剧、悬疑"
  },
  {
    "id": "1882",
    "title": "一去不回的海兵",
    "url": "./movie-1882.html",
    "cover": "./82.jpg",
    "oneLine": "挖掘队在非军事区挖出一具骸骨,身边铁盒里的信写着:“哥,等我回来替你娶她。",
    "year": "2023",
    "type": "电视剧",
    "region": "韩国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "韩战",
      "兄弟连",
      "遗骸挖掘"
    ],
    "genre": "战争,剧情"
  },
  {
    "id": "1883",
    "title": "警戒之眼",
    "url": "./movie-1883.html",
    "cover": "./83.jpg",
    "oneLine": "一名女警发现自己每天佩戴的执法记录仪里,存着她已经忘记的“做了某件事”的视频。",
    "year": "2025",
    "type": "剧集",
    "region": "德国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "监控",
      "隐私",
      "网络安全",
      "反乌托邦"
    ],
    "genre": "犯罪/惊悚/政治"
  },
  {
    "id": "1884",
    "title": "友趣的日子",
    "url": "./movie-1884.html",
    "cover": "./84.jpg",
    "oneLine": "六个从高中就混在一起的废柴,三十岁后为了省钱又住回了同一间漏水的老公寓。",
    "year": "2026",
    "type": "剧集",
    "region": "中国台湾",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "合租",
      "青梅竹马",
      "社畜",
      "轻喜剧"
    ],
    "genre": "青春爱情"
  },
  {
    "id": "1885",
    "title": "咸鱼哥第二季",
    "url": "./movie-1885.html",
    "cover": "./85.jpg",
    "oneLine": "咸鱼哥决定不再躺平,却发现周围的人都开始卷了起来。",
    "year": "2025",
    "type": "动画",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "搞笑",
      "职场",
      "躺平",
      "治愈"
    ],
    "genre": "喜剧,日常"
  },
  {
    "id": "1886",
    "title": "春日浓情",
    "url": "./movie-1886.html",
    "cover": "./86.jpg",
    "oneLine": "1997年,少女和穷小子私奔失败,二十五年后,他成了财阀会长,她是他的保洁阿姨。",
    "year": "2024",
    "type": "剧集",
    "region": "韩国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "90年代",
      "初恋",
      "误会",
      "重逢"
    ],
    "genre": "爱情/年代/家庭"
  },
  {
    "id": "1887",
    "title": "魔发奇缘:幸福前奏",
    "url": "./movie-1887.html",
    "cover": "./87.jpg",
    "oneLine": "乐佩和尤金的新婚之夜,她那被剪短的金发突然再次发光,而且这次长在了尤金头上。",
    "year": "2025",
    "type": "动画短片",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "乐佩",
      "婚后日常",
      "长发回归",
      "温馨搞笑"
    ],
    "genre": "动画,喜剧,家庭"
  },
  {
    "id": "1888",
    "title": "特混舰队在行动",
    "url": "./movie-1888.html",
    "cover": "./88.jpg",
    "oneLine": "中国海军特混舰队在亚丁湾执行护航任务时,遭遇不明势力的电子战攻击,全舰队陷入瘫痪。",
    "year": "2026",
    "type": "剧集",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "海军",
      "亚丁湾护航",
      "高科技战争",
      "热血军旅"
    ],
    "genre": "军事/动作/剧情"
  },
  {
    "id": "1889",
    "title": "美国最恐怖的宠物",
    "url": "./movie-1889.html",
    "cover": "./89.jpg",
    "oneLine": "女孩网购了一只迷你章猫宠物,但它每晚都会长大一圈,且开始猎杀活物。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "基因改造",
      "宠物",
      "怪物"
    ],
    "genre": "恐怖,惊悚"
  },
  {
    "id": "1890",
    "title": "澳门奇妙游·街头篇",
    "url": "./movie-1890.html",
    "cover": "./90.jpg",
    "oneLine": "五组明星搭档手持一本古书,走遍澳门街头巷尾,破解七道与美食相关的古老谜题。",
    "year": "2024",
    "type": "综艺",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "澳门",
      "美食",
      "探秘",
      "文化",
      "明星"
    ],
    "genre": "真人秀,旅行,美食"
  },
  {
    "id": "1891",
    "title": "逆青春 第二季",
    "url": "./movie-1891.html",
    "cover": "./91.jpg",
    "oneLine": "大学街舞社濒临解散,最后一届社员决定用全国大赛的奖金赎回社团活动室。",
    "year": "2023",
    "type": "剧集",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "街舞",
      "社团",
      "热血",
      "成长"
    ],
    "genre": "青春,运动"
  },
  {
    "id": "1892",
    "title": "白宫隐秘",
    "url": "./movie-1892.html",
    "cover": "./92.jpg",
    "oneLine": "白宫实习生无意中发现,历任总统都死于同一个百年秘密社团的暗杀。",
    "year": "2023",
    "type": "剧集",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "阴谋论",
      "秘密社团",
      "女总统",
      "刺杀"
    ],
    "genre": "政治/惊悚/悬疑"
  },
  {
    "id": "1893",
    "title": "爸爸很漂亮",
    "url": "./movie-1893.html",
    "cover": "./93.jpg",
    "oneLine": "被裁员的中年大叔男扮女装应聘妻子公司,只为守护女儿不被恶霸欺负。",
    "year": "2021",
    "type": "电影",
    "region": "韩国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "变装",
      "父女",
      "职场",
      "温情"
    ],
    "genre": "喜剧,家庭"
  },
  {
    "id": "1894",
    "title": "长白山下我的家",
    "url": "./movie-1894.html",
    "cover": "./94.jpg",
    "oneLine": "长白山脚下三代参农的家族史诗,从采野山参到人工种植,再到参田被征用。",
    "year": "2025",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "吉林",
      "参农",
      "改革开放",
      "三代人"
    ],
    "genre": "剧情、家庭、年代"
  },
  {
    "id": "1895",
    "title": "比基尼勇士",
    "url": "./movie-1895.html",
    "cover": "./95.jpg",
    "oneLine": "四位身穿比基尼铠甲的勇士受女王之命,踏上讨伐魔王之路,但她们最大的敌人似乎是自己的钱包。",
    "year": "2015",
    "type": "动画/短片",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "日漫",
      "奇幻冒险",
      "铠甲比基尼",
      "泡面番",
      "勇者斗魔王"
    ],
    "genre": "奇幻/冒险/喜剧"
  },
  {
    "id": "1896",
    "title": "比赛日",
    "url": "./movie-1896.html",
    "cover": "./96.jpg",
    "oneLine": "超级碗决赛日,一名前拆弹专家的女儿被绑架,他必须在比赛结束前找到藏在球场里的炸弹。",
    "year": "2022",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "橄榄球",
      "炸弹",
      "密室",
      "倒计时"
    ],
    "genre": "惊悚,悬疑,运动"
  },
  {
    "id": "1897",
    "title": "兄弟连",
    "url": "./movie-1897.html",
    "cover": "./97.jpg",
    "oneLine": "从诺曼底登陆到希特勒的鹰巢,一支美军空降连队用血肉写下的二战欧洲战场亲历记。",
    "year": "2001",
    "type": "剧集",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "二战",
      "美军",
      "写实主义",
      "群像剧"
    ],
    "genre": "战争,历史"
  },
  {
    "id": "1898",
    "title": "一磅肉",
    "url": "./movie-1898.html",
    "cover": "./98.jpg",
    "oneLine": "欠下巨债的父亲被要求在一周内割下一磅自己的肉还债,女儿却主动提出要替他割。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "高利贷",
      "器官买卖",
      "父女情",
      "黑色幽默"
    ],
    "genre": "剧情/犯罪"
  },
  {
    "id": "1899",
    "title": "执爱",
    "url": "./movie-1899.html",
    "cover": "./99.jpg",
    "oneLine": "妻子意外失忆后,丈夫每天为她重新编造一段爱情故事,直到她发现真相。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "偏执",
      "记忆删除",
      "心理战",
      "虐恋"
    ],
    "genre": "爱情,悬疑"
  },
  {
    "id": "1900",
    "title": "巴结我",
    "url": "./movie-1900.html",
    "cover": "./100.jpg",
    "oneLine": "公司小职员意外发现“被巴结”的快感后,开始精心设计让所有同事都来讨好自己。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "职场",
      "权力游戏",
      "人性"
    ],
    "genre": "剧情/黑色喜剧"
  },
  {
    "id": "1901",
    "title": "火遮眼",
    "url": "./movie-1901.html",
    "cover": "./101.jpg",
    "oneLine": "丈夫被黑警打死,绝望母亲不惜向“火鬼”借眼,以肉身化为复仇火焰。",
    "year": "2026",
    "type": "电影",
    "region": "马来西亚",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "马来民俗",
      "降头",
      "复仇"
    ],
    "genre": "惊悚,犯罪"
  },
  {
    "id": "1902",
    "title": "浪漫三人行",
    "url": "./movie-1902.html",
    "cover": "./102.jpg",
    "oneLine": "一对结婚十年的夫妻决定尝试开放式婚姻,当丈夫的情人搬进主卧后,三人竟然都过得比以前更好了。",
    "year": "2024",
    "type": "电影",
    "region": "法国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "开放式关系",
      "巴黎爱情",
      "三角恋",
      "哲学对白",
      "法式浪漫"
    ],
    "genre": "爱情/剧情/伦理"
  },
  {
    "id": "1903",
    "title": "插翅难飞2025",
    "url": "./movie-1903.html",
    "cover": "./103.jpg",
    "oneLine": "一架飞往纽约的客机上,空警发现乘客里混入了多名杀手,而他们的目标竟是无辜的邻座女孩。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "劫机",
      "密闭空间",
      "特工",
      "反转"
    ],
    "genre": "动作,惊悚,犯罪"
  },
  {
    "id": "1904",
    "title": "长江七号",
    "url": "./movie-1904.html",
    "cover": "./104.jpg",
    "oneLine": "穷爸爸在垃圾堆捡到一个外星玩具球,竟变出一只神通广大的太空狗“七仔”。",
    "year": "2008",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "周星驰",
      "外星狗",
      "温情",
      "父子",
      "奇幻"
    ],
    "genre": "喜剧,科幻,家庭"
  },
  {
    "id": "1905",
    "title": "小年兽与捉妖师",
    "url": "./movie-1905.html",
    "cover": "./105.jpg",
    "oneLine": "最后一个年兽幼崽被菜鸟捉妖师收养,他俩必须赶在除夕前凑齐“年味七宝”才能让年兽变回神兽。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "年兽",
      "修仙",
      "另类师徒"
    ],
    "genre": "动画,奇幻,冒险"
  },
  {
    "id": "1906",
    "title": "割礼龙凤斗",
    "url": "./movie-1906.html",
    "cover": "./106.jpg",
    "oneLine": "为了逃割礼,两姐妹在婚礼前夜上演了一出非洲草原版“雌雄大盗”。",
    "year": "2019",
    "type": "电影",
    "region": "尼日利亚/美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "女性",
      "传统陋习",
      "非洲",
      "反抗",
      "黑色幽默"
    ],
    "genre": "剧情,喜剧"
  },
  {
    "id": "1907",
    "title": "空房间里的妻子",
    "url": "./movie-1907.html",
    "cover": "./107.jpg",
    "oneLine": "妻子车祸失忆后醒来,丈夫告诉她这是他们的家,但衣柜里却传出另一个男人的呼吸声。",
    "year": "2024",
    "type": "电影",
    "region": "西班牙",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "密室",
      "精神控制",
      "反转"
    ],
    "genre": "恐怖/悬疑"
  },
  {
    "id": "1908",
    "title": "三个鲁伯特",
    "url": "./movie-1908.html",
    "cover": "./108.jpg",
    "oneLine": "为了延续天才基因,科学家克隆了三个“自己”当儿子,最终四个一模一样的鲁伯特开始了互相猎杀。",
    "year": "2010",
    "type": "电影",
    "region": "英国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "克隆人",
      "伦理困境",
      "独角戏",
      "心理惊悚",
      "存在主义"
    ],
    "genre": "悬疑、科幻"
  },
  {
    "id": "1909",
    "title": "医学大联盟",
    "url": "./movie-1909.html",
    "cover": "./109.jpg",
    "oneLine": "五位来自不同科室的年轻医生组成“医学大联盟”,用最疯狂也最温暖的方式,挑战医院固化的潜规则。",
    "year": "2026",
    "type": "剧集",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "职场",
      "理想主义",
      "群像",
      "医患关系",
      "现实主义"
    ],
    "genre": "剧情,医疗"
  },
  {
    "id": "1910",
    "title": "风味人间第三季",
    "url": "./movie-1910.html",
    "cover": "./110.jpg",
    "oneLine": "镜头扫过中国18000公里海岸线,记录那些即将消失在潮汐中的“最后一捕”。",
    "year": "2025",
    "type": "纪录片",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "海洋",
      "烟火气",
      "渔民",
      "失传菜"
    ],
    "genre": "美食、人文"
  },
  {
    "id": "1911",
    "title": "小世界",
    "url": "./movie-1911.html",
    "cover": "./111.jpg",
    "oneLine": "被缩小到蚂蚁大小的男孩,必须在自家后院的“丛林”中,找到回家的路。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "微观世界",
      "冒险",
      "成长",
      "治愈"
    ],
    "genre": "动画,奇幻,冒险"
  },
  {
    "id": "1912",
    "title": "我恨爱情故事",
    "url": "./movie-1912.html",
    "cover": "./112.jpg",
    "oneLine": "两个坚信爱情是骗局的人决定合作写一本拆穿爱情的书,结果自己先陷进去了。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "反套路",
      "毒舌男女",
      "假戏真做",
      "真香定律"
    ],
    "genre": "爱情/喜剧"
  },
  {
    "id": "1913",
    "title": "切换人生",
    "url": "./movie-1913.html",
    "cover": "./113.jpg",
    "oneLine": "996程序员与退休广场舞大妈意外灵魂互换,两个年龄段的“自己”开始替对方收拾烂摊子。",
    "year": "2023",
    "type": "电影",
    "region": "中国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "身份互换",
      "都市职场",
      "人生感悟"
    ],
    "genre": "奇幻喜剧"
  },
  {
    "id": "1914",
    "title": "黑钱胜地第二季",
    "url": "./movie-1914.html",
    "cover": "./114.jpg",
    "oneLine": "伯德家族成功掌控奥扎克赌场,但联邦调查局和新对手同时盯上了他们。",
    "year": "2026",
    "type": "TV 剧集",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "洗钱",
      "家族企业",
      "权力斗争",
      "暗黑",
      "高智商犯罪"
    ],
    "genre": "犯罪/剧情/惊悚"
  },
  {
    "id": "1915",
    "title": "谍影雄风",
    "url": "./movie-1915.html",
    "cover": "./115.jpg",
    "oneLine": "1941年的上海,中共地下党员伪装成汪伪特工,却意外发现自己的亲弟弟是军统王牌杀手。",
    "year": "2026",
    "type": "剧集",
    "region": "中国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "双面间谍",
      "民国",
      "智斗",
      "兄弟反目"
    ],
    "genre": "悬疑/谍战"
  },
  {
    "id": "1916",
    "title": "哈里如何变成一棵树",
    "url": "./movie-1916.html",
    "cover": "./116.jpg",
    "oneLine": "固执的老农民与儿子打赌,如果他能证明自己是一棵树,儿子就必须留在农场继承家业。",
    "year": "2024",
    "type": "电影",
    "region": "爱尔兰/英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "寓言",
      "亲情",
      "魔幻现实主义"
    ],
    "genre": "剧情,奇幻"
  },
  {
    "id": "1917",
    "title": "奇科·泽维尔",
    "url": "./movie-1917.html",
    "cover": "./117.jpg",
    "oneLine": "巴西贫民窟走出的说唱歌手,用音乐对抗暴力与偏见。",
    "year": "2024",
    "type": "电影",
    "region": "巴西",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "音乐人",
      "抗争",
      "真实改编"
    ],
    "genre": "传记,剧情"
  },
  {
    "id": "1918",
    "title": "阿拉丁国语",
    "url": "./movie-1918.html",
    "cover": "./118.jpg",
    "oneLine": "油管工阿拉丁捡到旧油灯,擦出的不是精灵,而是一名来自唐朝的迷糊官员。",
    "year": "2024",
    "type": "动画电影",
    "region": "中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "经典改编",
      "神灯",
      "喜剧",
      "奇幻冒险"
    ],
    "genre": "奇幻,冒险"
  },
  {
    "id": "1919",
    "title": "工作中",
    "url": "./movie-1919.html",
    "cover": "./119.jpg",
    "oneLine": "大型超市的非正式员工们决定反击,办法是:每一个人都在自己离职当天,完美地“按照规范流程”搞砸一件事。",
    "year": "2020",
    "type": "电影",
    "region": "韩国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "996",
      "派遣工",
      "反抗",
      "黑色幽默"
    ],
    "genre": "剧情,职场"
  },
  {
    "id": "1920",
    "title": "一见不钟情",
    "url": "./movie-1920.html",
    "cover": "./120.jpg",
    "oneLine": "女嘉宾能听到男人内心真实想法,参加恋综想找真爱,却发现所有男嘉宾的内心弹幕都在吐槽她。",
    "year": "2024",
    "type": "短剧",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "恋综",
      "读心术",
      "打脸",
      "欢喜冤家",
      "反套路"
    ],
    "genre": "爱情/喜剧/奇幻"
  },
  {
    "id": "1921",
    "title": "迷失太空第一季",
    "url": "./movie-1921.html",
    "cover": "./121.jpg",
    "oneLine": "罗宾逊一家在前往外星殖民地的途中飞船坠毁,他们发现这个看似宜居的星球会吞噬记忆。",
    "year": "2018",
    "type": "剧集",
    "region": "美国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "太空移民",
      "家庭",
      "外星",
      "生存",
      "重置经典"
    ],
    "genre": "科幻、冒险、剧情"
  },
  {
    "id": "1922",
    "title": "大墙无言",
    "url": "./movie-1922.html",
    "cover": "./122.jpg",
    "oneLine": "新来的狱警李明面对一个从不说话的死刑犯,决定在行刑前找出他沉默的真相。",
    "year": "2017",
    "type": "电影",
    "region": "中国大陆",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "监狱",
      "救赎",
      "人性",
      "法律"
    ],
    "genre": "剧情/监狱"
  },
  {
    "id": "1923",
    "title": "情欲色香味",
    "url": "./movie-1923.html",
    "cover": "./123.jpg",
    "oneLine": "一位失明的米其林大厨,用舌头感知世界,却尝出了妻子身上的陌生人味道。",
    "year": "2024",
    "type": "电影",
    "region": "意大利/法国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "感官盛宴",
      "美食与欲望",
      "艺术实验",
      "禁恋",
      "视觉冲击"
    ],
    "genre": "剧情/情色"
  },
  {
    "id": "1924",
    "title": "全面锁定",
    "url": "./movie-1924.html",
    "cover": "./124.jpg",
    "oneLine": "全球顶级智能社区突然全境封锁,居民发现每个人都被一个“完美”的AI判定为潜在罪犯。",
    "year": "2023",
    "type": "电视剧",
    "region": "英国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "密室",
      "人工智能",
      "反乌托邦",
      "生存"
    ],
    "genre": "科幻,悬疑,惊悚"
  },
  {
    "id": "1925",
    "title": "他和她的圣诞节",
    "url": "./movie-1925.html",
    "cover": "./125.jpg",
    "oneLine": "每年圣诞交换礼物都是他们唯一说话的机会,今年他送的围巾里缝进了一张表白纸条,但她没发现。",
    "year": "2024",
    "type": "电影",
    "region": "英国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "圣诞",
      "交换礼物",
      "暗恋",
      "误会",
      "温馨治愈"
    ],
    "genre": "爱情、喜剧、节日"
  },
  {
    "id": "1926",
    "title": "叔比狗与吸血鬼传奇",
    "url": "./movie-1926.html",
    "cover": "./126.jpg",
    "oneLine": "应一个真正吸血鬼的邀请,神秘公司前往特兰西瓦尼亚,调查一桩针对吸血鬼的谋杀案。",
    "year": "2023",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "狗狗",
      "吸血鬼",
      "特兰西瓦尼亚",
      "解谜",
      "音乐剧"
    ],
    "genre": "动画,喜剧,奇幻"
  },
  {
    "id": "1927",
    "title": "解释鸿沟",
    "url": "./movie-1927.html",
    "cover": "./127.jpg",
    "oneLine": "一名神经科学家发明了能“翻译”意识的装置,却在解读一个植物人的内心时,发现了毁灭性的宇宙真相。",
    "year": "2026",
    "type": "剧集",
    "region": "中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "意识科学",
      "哲学思辨",
      "认知边界"
    ],
    "genre": "科幻/悬疑/哲学"
  },
  {
    "id": "1928",
    "title": "新丁驾到",
    "url": "./movie-1928.html",
    "cover": "./128.jpg",
    "oneLine": "一名笨手笨脚的亚裔书呆子意外加入高中橄榄球队,却成了球队“秘密战术”的核心。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "橄榄球",
      "菜鸟",
      "逆袭",
      "高校",
      "励志喜剧"
    ],
    "genre": "喜剧,运动"
  },
  {
    "id": "1929",
    "title": "禁锢之地",
    "url": "./movie-1929.html",
    "cover": "./129.jpg",
    "oneLine": "一位调查记者被关进陌生地下室,与另一个被困十年的女人联手寻找逃脱的真相。",
    "year": "2024",
    "type": "电影",
    "region": "美国/德国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "地下室",
      "囚禁",
      "反转",
      "心理战",
      "密室"
    ],
    "genre": "惊悚/悬疑"
  },
  {
    "id": "1930",
    "title": "逃出立法院",
    "url": "./movie-1930.html",
    "cover": "./130.jpg",
    "oneLine": "立法院突发僵尸病毒,一群对立委和助理必须一边打架一边逃命,而病毒源头是议场中央的麦克风。",
    "year": "2020",
    "type": "电影",
    "region": "中国台湾",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "僵尸立委",
      "政治讽刺",
      "密室逃生",
      "血浆恶搞"
    ],
    "genre": "喜剧/恐怖"
  },
  {
    "id": "1931",
    "title": "烈血暹士",
    "url": "./movie-1931.html",
    "cover": "./131.jpg",
    "oneLine": "1767年缅甸大军压境,一个泰国村庄的农民们用泰拳和原始武器誓死守卫家园。",
    "year": "2000",
    "type": "电影",
    "region": "泰国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "泰拳",
      "缅甸入侵",
      "村庄",
      "复仇",
      "民族英雄"
    ],
    "genre": "动作/历史/战争"
  },
  {
    "id": "1932",
    "title": "走佬奔芬乐",
    "url": "./movie-1932.html",
    "cover": "./132.jpg",
    "oneLine": "一个倒霉的古惑仔被黑帮追杀,阴差阳错上了去芬兰的货船,结果在冰天雪地里又惹上了当地的华人黑帮。",
    "year": "1998",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "黑帮",
      "乌龙",
      "逃亡",
      "兄弟情",
      "无厘头"
    ],
    "genre": "动作喜剧"
  },
  {
    "id": "1933",
    "title": "十二生笑又笑一打亲",
    "url": "./movie-1933.html",
    "cover": "./133.jpg",
    "oneLine": "肖家十二个堂兄妹分别被生肖诅咒附身,每年过年的大乱斗,赢了才能给全家人换来好运。",
    "year": "2026",
    "type": "剧集",
    "region": "中国台湾",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "生肖拟人",
      "家族诅咒",
      "爆笑乱斗",
      "亲情和解"
    ],
    "genre": "喜剧/家庭/奇幻"
  },
  {
    "id": "1934",
    "title": "人头豆腐汤",
    "url": "./movie-1934.html",
    "cover": "./134.jpg",
    "oneLine": "深水埗一家老字号豆腐店生意火爆,因为老板的秘方是——用新鲜“人头”熬汤底。",
    "year": "2024",
    "type": "电影",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "奇案改编",
      "香港",
      "食人"
    ],
    "genre": "恐怖/犯罪"
  },
  {
    "id": "1935",
    "title": "月光旅程",
    "url": "./movie-1935.html",
    "cover": "./135.jpg",
    "oneLine": "一个活了三百年的社恐吸血鬼,为了逃避家族联姻,躲进人类便利店上夜班,结果被夜班同事治愈了“永生”的孤独。",
    "year": "2024",
    "type": "电视剧",
    "region": "英国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "吸血鬼",
      "治愈",
      "打工",
      "日常",
      "轻喜剧"
    ],
    "genre": "奇幻"
  },
  {
    "id": "1936",
    "title": "如果历史是一群喵 第二季",
    "url": "./movie-1936.html",
    "cover": "./136.jpg",
    "oneLine": "十二只猫用最萌的方式,重新演绎秦汉交替的血腥权谋。",
    "year": "2023",
    "type": "动画",
    "region": "中国大陆",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "喵星人",
      "历史科普",
      "搞笑"
    ],
    "genre": "历史/喜剧/萌系"
  },
  {
    "id": "1937",
    "title": "拜拜",
    "url": "./movie-1937.html",
    "cover": "./137.jpg",
    "oneLine": "一个失败的网络脱口秀演员,被迫载着父亲的骨灰坛完成一场荒诞的环岛告别之旅。",
    "year": "2022",
    "type": "电影",
    "region": "中国台湾",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "告别",
      "家庭和解",
      "公路电影",
      "黑色幽默"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "1938",
    "title": "死亡行军",
    "url": "./movie-1938.html",
    "cover": "./138.jpg",
    "oneLine": "1945年寒冬,数千名盟军战俘在日军刺刀下进行“死亡行军”,每一步都是对生存极限的挑战。",
    "year": "2018",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "二战",
      "战俘营",
      "生存",
      "人性",
      "残酷美学"
    ],
    "genre": "战争,剧情,历史"
  },
  {
    "id": "1939",
    "title": "印宫秘史",
    "url": "./movie-1939.html",
    "cover": "./139.jpg",
    "oneLine": "莫卧儿帝国后宫深处,四个女人——皇后、宠妃、间谍、奴隶——用香氛、情报和匕首,争夺着谁的儿子能坐上王座。",
    "year": "2023",
    "type": "剧集/迷你剧",
    "region": "印度",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "莫卧儿帝国",
      "后宫",
      "权力斗争",
      "女性群像",
      "真实改编"
    ],
    "genre": "剧情/历史/宫廷"
  },
  {
    "id": "1940",
    "title": "开门吧",
    "url": "./movie-1940.html",
    "cover": "./140.jpg",
    "oneLine": "公寓里的每一扇门都通往不同时空,唯独他自己的那扇门里,锁着三个被杀死的自己。",
    "year": "2023",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "房间编号",
      "循环走廊",
      "记忆碎片",
      "认知污染"
    ],
    "genre": "恐怖、悬疑、密室"
  },
  {
    "id": "1941",
    "title": "老师的恩惠",
    "url": "./movie-1941.html",
    "cover": "./141.jpg",
    "oneLine": "为病危的老师举行家庭派对的学生们,在讲述“最感谢老师的瞬间”时,一个个离奇惨死。",
    "year": "2006",
    "type": "电影",
    "region": "韩国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "师生复仇",
      "密闭空间",
      "反转",
      "血腥",
      "心理压迫"
    ],
    "genre": "恐怖惊悚"
  },
  {
    "id": "1942",
    "title": "阳光小美女",
    "url": "./movie-1942.html",
    "cover": "./142.jpg",
    "oneLine": "一个戴着大框眼镜、有小肚腩的女孩非要参加“阳光小美女”选美,全家开着破巴士陪她闹出一路笑话。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "选美",
      "公路",
      "失败者",
      "治愈"
    ],
    "genre": "喜剧,剧情,家庭"
  },
  {
    "id": "1943",
    "title": "致命礼物",
    "url": "./movie-1943.html",
    "cover": "./143.jpg",
    "oneLine": "女主生日收到匿名娃娃,从此她身边每一个人都在按娃娃身上的死亡预言顺序死去。",
    "year": "2025",
    "type": "电影",
    "region": "韩国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "生日礼物",
      "暗网",
      "诅咒",
      "心理战",
      "复仇"
    ],
    "genre": "惊悚,悬疑"
  },
  {
    "id": "1944",
    "title": "玄奘大师",
    "url": "./movie-1944.html",
    "cover": "./144.jpg",
    "oneLine": "不演西游降魔,只讲他穿越沙漠时差点渴死、被徒弟背叛却依然东归的真实孤独。",
    "year": "2026",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "史诗",
      "佛法",
      "丝绸之路",
      "信念"
    ],
    "genre": "传记,历史,剧情"
  },
  {
    "id": "1945",
    "title": "红袖添香",
    "url": "./movie-1945.html",
    "cover": "./145.jpg",
    "oneLine": "穷书生夜半苦读时,总有一双红袖为他添香磨墨,但每当他试图回头,那女子便如烟雾般消散。",
    "year": "2025",
    "type": "电影",
    "region": "中国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "书生长情",
      "狐妖报恩",
      "水墨画风",
      "人妖殊途",
      "科举"
    ],
    "genre": "古装/爱情/奇幻"
  },
  {
    "id": "1946",
    "title": "传送",
    "url": "./movie-1946.html",
    "cover": "./146.jpg",
    "oneLine": "全球首个人体传送装置测试成功,但走出传送门的“他”坚称自己才是本体,传送舱里的那个是冒牌货。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "量子传送",
      "复制人",
      "身份危机",
      "密室逃生"
    ],
    "genre": "科幻/惊悚"
  },
  {
    "id": "1947",
    "title": "偶像选拔",
    "url": "./movie-1947.html",
    "cover": "./147.jpg",
    "oneLine": "一档选秀节目被曝全程造假,愤怒的观众要求重赛,没想到已经淘汰的选手们竟然真的回来了。",
    "year": "2024",
    "type": "电视剧 剧情/青春",
    "region": "韩国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "选秀",
      "练习生",
      "黑幕",
      "梦想"
    ],
    "genre": "励志"
  },
  {
    "id": "1948",
    "title": "孤星泪",
    "url": "./movie-1948.html",
    "cover": "./148.jpg",
    "oneLine": "一名卧底警察在最后一次任务中,发现自己要抓捕的毒枭是失散多年的亲哥哥。",
    "year": "1995",
    "type": "电影",
    "region": "中国香港",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "英雄主义",
      "牺牲",
      "兄弟情",
      "港片黄金时代"
    ],
    "genre": "动作,犯罪,剧情"
  },
  {
    "id": "1949",
    "title": "白领公寓",
    "url": "./movie-1949.html",
    "cover": "./149.jpg",
    "oneLine": "六个来自不同部门的互联网打工人被迫合住公司提供的“白领公寓”,上演合租屋版“甄嬛传”。",
    "year": "2025",
    "type": "电视剧",
    "region": "中国大陆",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "合租",
      "互联网公司",
      "社畜",
      "轻喜"
    ],
    "genre": "都市/职场/爱情"
  },
  {
    "id": "1950",
    "title": "渡过黑暗",
    "url": "./movie-1950.html",
    "cover": "./150.jpg",
    "oneLine": "七名陌生人因暴雨被困在一座古堡,醒来后发现每人身上都有一条他们曾犯下的、未被惩罚的罪行的记录。",
    "year": "2023",
    "type": "电影",
    "region": "英国",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "密室",
      "心理",
      "审判",
      "道德",
      "暴雨"
    ],
    "genre": "悬疑"
  },
  {
    "id": "1951",
    "title": "一件幸福的事",
    "url": "./movie-1951.html",
    "cover": "./1.jpg",
    "oneLine": "一个女博士从怀孕到为人母,她以为这是幸福,却差点被“幸福”吞噬。",
    "year": "2011",
    "type": "电影",
    "region": "法国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "生育",
      "女性",
      "成长",
      "现实",
      "温情"
    ],
    "genre": "剧情,家庭,爱情"
  },
  {
    "id": "1952",
    "title": "私恶公善",
    "url": "./movie-1952.html",
    "cover": "./2.jpg",
    "oneLine": "一个专门帮坏人脱罪的律师,一个专门揭人隐私的记者,他们要一起证明一桩“完美犯罪”。",
    "year": "2024",
    "type": "剧集",
    "region": "法国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "法律剧",
      "道德困境",
      "双主角",
      "反转"
    ],
    "genre": "剧情,悬疑,律政"
  },
  {
    "id": "1953",
    "title": "快乐天使",
    "url": "./movie-1953.html",
    "cover": "./3.jpg",
    "oneLine": "一个事业失败的中年男人,为了混口饭吃扮成小丑去儿童医院逗笑,却成了孩子们最后的“天使”。",
    "year": "2024",
    "type": "剧集",
    "region": "中国香港",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "儿科",
      "临终关怀",
      "小丑医生",
      "温情",
      "生死"
    ],
    "genre": "剧情/喜剧/医疗"
  },
  {
    "id": "1954",
    "title": "阿卡普高第二季",
    "url": "./movie-1954.html",
    "cover": "./4.jpg",
    "oneLine": "1986年的阿卡普高,年轻的酒店行李员卷入了美国黑帮与墨西哥毒枭的抢地之战,却用音乐化解冲突。",
    "year": "2024",
    "type": "剧集",
    "region": "墨西哥",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "度假村",
      "1980年代",
      "拉丁音乐",
      "成长",
      "黑帮喜剧",
      "音乐对决",
      "复古风"
    ],
    "genre": "喜剧,剧情,音乐"
  },
  {
    "id": "1955",
    "title": "路的远方",
    "url": "./movie-1955.html",
    "cover": "./5.jpg",
    "oneLine": "一个叛逆少年为寻找失踪的父亲踏上横穿中国的骑行之旅,却发现父亲一直就在身边。",
    "year": "2021",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "公路",
      "成长",
      "亲情"
    ],
    "genre": "剧情"
  },
  {
    "id": "1956",
    "title": "为丑女献上花束",
    "url": "./movie-1956.html",
    "cover": "./6.jpg",
    "oneLine": "一个因外貌自卑的“社畜”女孩,收到匿名同事每周一束的鲜花,从而开始自我救赎。",
    "year": "2025",
    "type": "剧集",
    "region": "日本",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "外貌",
      "自信",
      "逆袭",
      "纯爱",
      "职场"
    ],
    "genre": "爱情,剧情"
  },
  {
    "id": "1957",
    "title": "残破的娃娃",
    "url": "./movie-1957.html",
    "cover": "./7.jpg",
    "oneLine": "一个收纳了百具残破人偶的山村老宅里,每修好一个人偶,现实中就会有一名村民以人偶被破坏的同样方式死去。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "人偶",
      "诅咒",
      "民俗",
      "山村",
      "家族秘密"
    ],
    "genre": "恐怖/悬疑"
  },
  {
    "id": "1958",
    "title": "移动迷宫2:焦土试炼",
    "url": "./movie-1958.html",
    "cover": "./8.jpg",
    "oneLine": "逃出迷宫只是噩梦开始,焦土之上有更恐怖的试炼等着他们。",
    "year": "2015",
    "type": "电影",
    "region": "美国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "末世狂奔",
      "感染变异",
      "背叛谜团",
      "废土美学"
    ],
    "genre": "科幻,动作,惊悚"
  },
  {
    "id": "1959",
    "title": "超高频",
    "url": "./movie-1959.html",
    "cover": "./9.jpg",
    "oneLine": "一种能激发人体潜能的“超高频”声波武器,让一群退伍老兵成为超人,却也让他们的大脑在倒计时融化。",
    "year": "2025",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "人体改造",
      "超级士兵",
      "反叛",
      "阴谋",
      "极限"
    ],
    "genre": "科幻/惊悚/动作"
  },
  {
    "id": "1960",
    "title": "小绅士",
    "url": "./movie-1960.html",
    "cover": "./10.jpg",
    "oneLine": "被宠坏的富二代被送去最严苛的礼仪学院,却发现院长竟是前黑帮教父。",
    "year": "2022",
    "type": "电影",
    "region": "英国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "礼仪",
      "成长",
      "治愈"
    ],
    "genre": "剧情、儿童"
  },
  {
    "id": "1961",
    "title": "塞马湖现象",
    "url": "./movie-1961.html",
    "cover": "./11.jpg",
    "oneLine": "芬兰塞马湖底惊现巨型不明物体,当地人认为是湖怪,而科学家发现的真相远比童话可怕。",
    "year": "2021",
    "type": "电影",
    "region": "芬兰",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "北欧",
      "神秘",
      "湖怪",
      "小众"
    ],
    "genre": "悬疑/科幻"
  },
  {
    "id": "1962",
    "title": "可爱的露易丝",
    "url": "./movie-1962.html",
    "cover": "./12.jpg",
    "oneLine": "七旬独居老妇的布娃娃突然开口说话,声称是她五十年前失踪的妹妹。",
    "year": "2025",
    "type": "电影",
    "region": "法国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "玩偶",
      "活过来",
      "孤独"
    ],
    "genre": "奇幻/家庭"
  },
  {
    "id": "1963",
    "title": "原谅的勇气",
    "url": "./movie-1963.html",
    "cover": "./13.jpg",
    "oneLine": "女儿被杀害十五年后,母亲意外收到了凶手在狱中寄来的道歉信,信上只有三个字:对不起。",
    "year": "2025",
    "type": "电影",
    "region": "中国台湾",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "死刑",
      "被害者家属",
      "和解",
      "创伤疗愈",
      "现实主义"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "1964",
    "title": "百万煮夫大作战",
    "url": "./movie-1964.html",
    "cover": "./14.jpg",
    "oneLine": "被裁员的高管瞒着家人假装上班,却在菜市场靠帮大妈挑菜,意外开启了社区餐饮帝国。",
    "year": "2025",
    "type": "剧集",
    "region": "中国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "家庭",
      "全职爸爸",
      "逆袭",
      "美食",
      "创业"
    ],
    "genre": "喜剧"
  },
  {
    "id": "1965",
    "title": "北京时间",
    "url": "./movie-1965.html",
    "cover": "./15.jpg",
    "oneLine": "一对恋人分手后约定各自调整时区,当两人的时钟再次同步时,就是重逢之日。",
    "year": "2020",
    "type": "电影",
    "region": "中国大陆",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "时区",
      "异地恋",
      "时钟",
      "等待"
    ],
    "genre": "剧情/爱情"
  },
  {
    "id": "1966",
    "title": "托斯塔纳天堂",
    "url": "./movie-1966.html",
    "cover": "./16.jpg",
    "oneLine": "失去母亲的都市女孩被送往托斯卡纳乡下过暑假,在阳光、美酒和邻里的包围下,她重新学会了笑。",
    "year": "2024",
    "type": "电影",
    "region": "意大利",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "疗愈",
      "田园",
      "丧亲",
      "重生"
    ],
    "genre": "剧情,家庭"
  },
  {
    "id": "1967",
    "title": "午夜惊情",
    "url": "./movie-1967.html",
    "cover": "./17.jpg",
    "oneLine": "女主搬进老宅后,每晚凌晨3点都会接到已故前房主打来的求救电话。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "灵异",
      "电话",
      "老宅",
      "诅咒"
    ],
    "genre": "恐怖,惊悚"
  },
  {
    "id": "1968",
    "title": "人生绕圈圈",
    "url": "./movie-1968.html",
    "cover": "./18.jpg",
    "oneLine": "一个厌倦生活的中年男人发现自己被困在同一天,但他唯一想做的,是教会邻居家的狗捡飞盘。",
    "year": "2024",
    "type": "电影",
    "region": "英国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "时间循环",
      "中年危机",
      "黑色幽默"
    ],
    "genre": "喜剧,剧情,奇幻"
  },
  {
    "id": "1969",
    "title": "共犯效应",
    "url": "./movie-1969.html",
    "cover": "./19.jpg",
    "oneLine": "一名高中生坠楼身亡,全班28人都是目击者,但每个人的证词里,凶手都指向不同的人。",
    "year": "2026",
    "type": "电影",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "校园",
      "霸凌",
      "反转",
      "全员恶人",
      "罗生门"
    ],
    "genre": "悬疑/犯罪"
  },
  {
    "id": "1970",
    "title": "格桑花开的时候",
    "url": "./movie-1970.html",
    "cover": "./20.jpg",
    "oneLine": "藏族盲童少女在支教老师帮助下,用声音“看见”了格桑花海的颜色。",
    "year": "2024",
    "type": "电影",
    "region": "中国大陆",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "援藏教师",
      "留守儿童",
      "双语教育"
    ],
    "genre": "剧情/家庭"
  },
  {
    "id": "1971",
    "title": "豪门情仇",
    "url": "./movie-1971.html",
    "cover": "./21.jpg",
    "oneLine": "被抱错的真千金重回豪门,却发现深爱的男人竟是仇人之子,一场血雨腥风的情仇大戏拉开序幕。",
    "year": "2018",
    "type": "电视剧",
    "region": "中国香港/中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "家族恩怨",
      "替身",
      "虐恋",
      "商海沉浮"
    ],
    "genre": "剧情/爱情/商战"
  },
  {
    "id": "1972",
    "title": "蓝色长袍",
    "url": "./movie-1972.html",
    "cover": "./22.jpg",
    "oneLine": "卡萨布兰卡的裁缝店里,一对夫妇与年轻的男学徒之间,维系着一段不能言说的禁忌之恋。",
    "year": "2022",
    "type": "电影",
    "region": "摩洛哥",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "同性",
      "婚姻",
      "传统",
      "手工艺",
      "卡萨布兰卡"
    ],
    "genre": "剧情,爱情"
  },
  {
    "id": "1973",
    "title": "乌鲁米",
    "url": "./movie-1973.html",
    "cover": "./23.jpg",
    "oneLine": "一名部落铸剑师之女手持祖传弯刀“乌鲁米”,对殖民者展开一场无声的血腥报复。",
    "year": "2024",
    "type": "电影",
    "region": "印度",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "冷兵器",
      "复仇",
      "史诗",
      "女战士",
      "殖民反抗"
    ],
    "genre": "历史动作"
  },
  {
    "id": "1974",
    "title": "超人梅比斯外传:光明始动",
    "url": "./movie-1974.html",
    "cover": "./24.jpg",
    "oneLine": "在成为超人之前,梅比斯只是一个被光之国驱逐的吊车尾学员,他在废弃星球上收留了一个孤儿怪兽。",
    "year": "2026",
    "type": "电影",
    "region": "日本",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "奥特曼",
      "前传",
      "成长",
      "友情"
    ],
    "genre": "特摄,科幻,超级英雄"
  },
  {
    "id": "1975",
    "title": "我生病的原因",
    "url": "./movie-1975.html",
    "cover": "./25.jpg",
    "oneLine": "一个家族三代女性都患上同一种怪病,当孙女即将手术时,家族里最健康的男人却突然病倒了。",
    "year": "2024",
    "type": "电视剧",
    "region": "韩国",
    "category": "欧美热播",
    "categoryUrl": "./category-europe-hot.html",
    "tags": [
      "体质",
      "家族诅咒",
      "环境"
    ],
    "genre": "悬疑,家庭,医疗"
  },
  {
    "id": "1976",
    "title": "就算是爸爸,也想做",
    "url": "./movie-1976.html",
    "cover": "./26.jpg",
    "oneLine": "一个被裁员的中年单亲爸爸,在求职屡屡碰壁后,决定去做一名......男公关。",
    "year": "2024",
    "type": "动画/剧集",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "单亲爸爸",
      "育儿焦虑",
      "职场妈妈",
      "社会现实"
    ],
    "genre": "剧情/家庭/生活"
  },
  {
    "id": "1977",
    "title": "大堡礁之恋",
    "url": "./movie-1977.html",
    "cover": "./27.jpg",
    "oneLine": "一个患有深海恐惧症的都市女强人为了继承遗产,不得不与一名幽默的海洋生物学家在大堡礁寻找传说中的“心形珊瑚”。",
    "year": "2023",
    "type": "电影",
    "region": "澳大利亚",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "海洋",
      "治愈",
      "欢喜冤家",
      "环保"
    ],
    "genre": "爱情/喜剧"
  },
  {
    "id": "1978",
    "title": "耶稣受难记",
    "url": "./movie-1978.html",
    "cover": "./28.jpg",
    "oneLine": "聚焦耶稣在人间最后12小时的极致苦难,一场肉体与精神的双重凌迟,以及最终的复活。",
    "year": "2004",
    "type": "电影",
    "region": "美国",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "基督",
      "信仰",
      "牺牲",
      "震撼"
    ],
    "genre": "剧情/历史/宗教"
  },
  {
    "id": "1979",
    "title": "陌生的恋人",
    "url": "./movie-1979.html",
    "cover": "./29.jpg",
    "oneLine": "一个失忆的女人被丈夫告知她是他的初恋替身,但她逐渐发现自己才是原版,而丈夫才是“陌生的恋人”。",
    "year": "2023",
    "type": "剧集",
    "region": "韩国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "替身",
      "失忆",
      "豪门阴谋",
      "双面女主"
    ],
    "genre": "悬疑爱情"
  },
  {
    "id": "1980",
    "title": "跨越8年的新娘",
    "url": "./movie-1980.html",
    "cover": "./30.jpg",
    "oneLine": "婚礼前三个月,新娘突发罕见病陷入昏迷,新郎守了整整八年,直到她醒来叫出他的名字。",
    "year": "2022",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "真实故事",
      "昏迷",
      "不离不弃",
      "催泪"
    ],
    "genre": "剧情,爱情,真实事件"
  },
  {
    "id": "1981",
    "title": "幽灵冬至",
    "url": "./movie-1981.html",
    "cover": "./31.jpg",
    "oneLine": "每年冬至,村里的老人都会在门前挂红布,直到那对失踪多年的双胞胎女孩回来了。",
    "year": "2025",
    "type": "电影",
    "region": "中国台湾",
    "category": "喜剧爱情",
    "categoryUrl": "./category-comedy-romance.html",
    "tags": [
      "民俗恐怖",
      "冬至",
      "轮回",
      "家族诅咒"
    ],
    "genre": "恐怖/民俗"
  },
  {
    "id": "1982",
    "title": "灵镜传奇",
    "url": "./movie-1982.html",
    "cover": "./32.jpg",
    "oneLine": "一面能照出人心未来的古镜,让一位捕快看到自己未来会杀死挚爱,于是他决定提前毁掉这面镜子,也毁掉自己的命运。",
    "year": "2025",
    "type": "剧集",
    "region": "中国香港",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "玄幻",
      "平行时空",
      "神器",
      "宿命",
      "港风"
    ],
    "genre": "奇幻,古装,悬疑"
  },
  {
    "id": "1983",
    "title": "风流女赌徒",
    "url": "./movie-1983.html",
    "cover": "./33.jpg",
    "oneLine": "一个被赌鬼父亲卖掉的女孩,十年后成为纵横赌场的神秘女赌神,只为让每一个烂赌鬼家破人亡。",
    "year": "1994",
    "type": "电影",
    "region": "中国香港",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "赌片",
      "女性",
      "复仇",
      "情色"
    ],
    "genre": "剧情,犯罪"
  },
  {
    "id": "1984",
    "title": "恐惧的绿洲",
    "url": "./movie-1984.html",
    "cover": "./34.jpg",
    "oneLine": "五名背包客在澳大利亚沙漠中发现一片地图上没有的绿洲,当地人警告他们“不要在那里喝水”,因为水里有记忆。",
    "year": "2024",
    "type": "电影",
    "region": "澳大利亚",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "沙漠恐怖",
      "心理惊悚",
      "民俗传说",
      "孤独美学"
    ],
    "genre": "恐怖/悬疑"
  },
  {
    "id": "1985",
    "title": "炸弹来了",
    "url": "./movie-1985.html",
    "cover": "./35.jpg",
    "oneLine": "一枚嵌在市中心地铁站承重柱里的炸弹,引爆条件竟是拆弹专家踏上楼梯的步数。",
    "year": "2022",
    "type": "电影",
    "region": "美国",
    "category": "悬疑惊悚",
    "categoryUrl": "./category-suspense-thriller.html",
    "tags": [
      "限时拆弹",
      "政治阴谋",
      "地铁危机"
    ],
    "genre": "动作/惊悚"
  },
  {
    "id": "1986",
    "title": "冰上迪斯科",
    "url": "./movie-1986.html",
    "cover": "./36.jpg",
    "oneLine": "五个油腻大叔为拯救即将倒闭的溜冰场,决定重组80年代冰上迪斯科队。",
    "year": "2021",
    "type": "电影",
    "region": "俄罗斯",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "复古",
      "滑冰",
      "中年危机",
      "苏联怀旧"
    ],
    "genre": "喜剧,音乐,运动"
  },
  {
    "id": "1987",
    "title": "真宠",
    "url": "./movie-1987.html",
    "cover": "./37.jpg",
    "oneLine": "维多利亚时代,一位落魄贵族小姐为求翻身,故意让自己成为女王最厌弃的“宠臣”。",
    "year": "2024",
    "type": "电影",
    "region": "美国",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "宫斗",
      "权力游戏",
      "不伦之恋",
      "维多利亚时代"
    ],
    "genre": "剧情,历史,同性"
  },
  {
    "id": "1988",
    "title": "斯莱思狩猎传奇",
    "url": "./movie-1988.html",
    "cover": "./38.jpg",
    "oneLine": "每年狩猎季,斯莱思庄园都会死一个人,而今年受邀的猎人们发现,自己既是猎人也是猎物。",
    "year": "2025",
    "type": "剧集",
    "region": "英国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "贵族",
      "狩猎",
      "连环案",
      "黑色幽默"
    ],
    "genre": "悬疑,犯罪,喜剧"
  },
  {
    "id": "1989",
    "title": "布基乌基",
    "url": "./movie-1989.html",
    "cover": "./39.jpg",
    "oneLine": "二战后的东京,一个只会跳布基乌基的女孩用舞鞋敲开了被男人统治的爵士殿堂。",
    "year": "2023",
    "type": "电视剧",
    "region": "日本",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "舞蹈",
      "昭和",
      "励志",
      "女性"
    ],
    "genre": "剧情,音乐,传记"
  },
  {
    "id": "1990",
    "title": "萧邦音乐时光",
    "url": "./movie-1990.html",
    "cover": "./40.jpg",
    "oneLine": "用最顶级的录音技术,在萧邦当年真正演奏过的23个空间里,重录他的每一首作品。",
    "year": "2025",
    "type": "纪录片/音乐会电影",
    "region": "波兰",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "萧邦",
      "钢琴",
      "历史场景",
      "沉浸式",
      "古典乐迷"
    ],
    "genre": "音乐传记"
  },
  {
    "id": "1991",
    "title": "美狄亚的奇迹",
    "url": "./movie-1991.html",
    "cover": "./41.jpg",
    "oneLine": "被背叛的女巫在现代都市重获新生,她用古希腊黑科技向出轨的前夫和冷漠的社会复仇。",
    "year": "2025",
    "type": "电视剧",
    "region": "英国/美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "希腊神话改编",
      "女巫复仇",
      "现代设定",
      "暗黑女性主义"
    ],
    "genre": "奇幻、剧情、女性"
  },
  {
    "id": "1992",
    "title": "烈女雪沉冤",
    "url": "./movie-1992.html",
    "cover": "./42.jpg",
    "oneLine": "清朝岭南,绣坊女工为救被诬杀人的养母,女扮男装三上公堂,却被新来的知县一眼识破。",
    "year": "2025",
    "type": "电影",
    "region": "中国香港",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "粤剧改编",
      "女版窦娥冤",
      "公堂斗智",
      "岭南风情"
    ],
    "genre": "古装/悬疑/戏曲"
  },
  {
    "id": "1993",
    "title": "沙漠孤心",
    "url": "./movie-1993.html",
    "cover": "./43.jpg",
    "oneLine": "最后一名人类幸存者在沙漠中醒来,身边只有一台逐渐故障的生存机器人和一个记忆里不存在的女儿影像。",
    "year": "2026",
    "type": "电影",
    "region": "美国",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "末世",
      "独角戏",
      "生存",
      "AI",
      "绿洲"
    ],
    "genre": "剧情,冒险,心理"
  },
  {
    "id": "1994",
    "title": "一门忠烈",
    "url": "./movie-1994.html",
    "cover": "./44.jpg",
    "oneLine": "北宋末年,杨家最后一个男丁带着十二名老弱妇孺,死守破败的雁门关。",
    "year": "2026",
    "type": "电影",
    "region": "中国香港,中国大陆",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "杨家将",
      "冷兵器",
      "守城战",
      "父子兵"
    ],
    "genre": "动作,古装,战争"
  },
  {
    "id": "1995",
    "title": "黄色杀手",
    "url": "./movie-1995.html",
    "cover": "./45.jpg",
    "oneLine": "穿着黄色雨衣的神秘杀手专门猎杀黑帮头目,警方追踪发现,这名杀手竟是五年前被黑帮灭门的法医,他用解剖刀作为复仇武器。",
    "year": "2025",
    "type": "电影",
    "region": "日本",
    "category": "奇幻科幻",
    "categoryUrl": "./category-fantasy-sci-fi.html",
    "tags": [
      "杀手",
      "黄衣",
      "邪典",
      "宿敌"
    ],
    "genre": "动作,犯罪,惊悚"
  },
  {
    "id": "1996",
    "title": "极乐天使",
    "url": "./movie-1996.html",
    "cover": "./46.jpg",
    "oneLine": "一个能看见幽灵的医药代表,专门帮未竟心愿的亡魂完成最后一次“采购”。",
    "year": "2016",
    "type": "剧集",
    "region": "日本",
    "category": "动作冒险",
    "categoryUrl": "./category-action-adventure.html",
    "tags": [
      "灵媒",
      "渡边",
      "医药代表",
      "单元剧",
      "治愈系"
    ],
    "genre": "奇幻,喜剧,剧情"
  },
  {
    "id": "1997",
    "title": "大象菩提",
    "url": "./movie-1997.html",
    "cover": "./47.jpg",
    "oneLine": "一只白象在缅甸寺庙踩死了一个男人,然后走到他的家里,在他儿子的作业本上用鼻子写下了“菩提”二字。",
    "year": "2025",
    "type": "电影",
    "region": "泰国/中国大陆",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "大象",
      "佛教",
      "转世",
      "森林",
      "守护灵"
    ],
    "genre": "剧情/奇幻"
  },
  {
    "id": "1998",
    "title": "奇幻森林",
    "url": "./movie-1998.html",
    "cover": "./48.jpg",
    "oneLine": "被狼群养大的人类男孩毛克利,在老虎谢利·可汗的追杀下被迫踏上穿越丛林的冒险。",
    "year": "2016",
    "type": "电影",
    "region": "美国",
    "category": "剧集推荐",
    "categoryUrl": "./category-series-picks.html",
    "tags": [
      "CGI",
      "丛林",
      "狼孩",
      "成长"
    ],
    "genre": "奇幻/冒险/家庭"
  },
  {
    "id": "1999",
    "title": "被出卖的台湾",
    "url": "./movie-1999.html",
    "cover": "./49.jpg",
    "oneLine": "1895年,台湾被割让给日本,一个汉文先生决定用教书写字,来对抗一场无声的“文化出卖”。",
    "year": "2025",
    "type": "电影",
    "region": "台湾",
    "category": "高清电影",
    "categoryUrl": "./category-hd-movies.html",
    "tags": [
      "殖民",
      "抗争",
      "身份"
    ],
    "genre": "剧情,历史,政治惊悚"
  },
  {
    "id": "2000",
    "title": "好好的时光",
    "url": "./movie-2000.html",
    "cover": "./50.jpg",
    "oneLine": "患上阿尔茨海默症的奶奶忘记了所有人,却记得每年暑假要带孙女去河边捉萤火虫。",
    "year": "2025",
    "type": "电影",
    "region": "中国大陆",
    "category": "口碑佳作",
    "categoryUrl": "./category-top-rated.html",
    "tags": [
      "阿尔茨海默症",
      "祖孙情",
      "治愈",
      "童年回忆",
      "故乡"
    ],
    "genre": "剧情/家庭"
  }
];

  function bySelector(selector, context) {
    return Array.prototype.slice.call((context || document).querySelectorAll(selector));
  }

  function normalize(value) {
    return String(value || '').toLowerCase().replace(/\s+/g, '');
  }

  function cardTemplate(movie) {
    var tags = (movie.tags || []).slice(0, 3).map(function(tag) {
      return '<span>' + escapeHtml(tag) + '</span>';
    }).join('');

    return [
      '<article class="movie-card">',
      '<a class="movie-card-cover" href="' + movie.url + '">',
      '<img src="' + movie.cover + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">',
      '<span class="movie-card-shade"></span>',
      '<span class="play-mark">▶</span>',
      '<span class="year-mark">' + escapeHtml(movie.year) + '</span>',
      '</a>',
      '<div class="movie-card-body">',
      '<div class="movie-card-meta">',
      '<a href="' + movie.categoryUrl + '">' + escapeHtml(movie.category) + '</a>',
      '<span>' + escapeHtml(movie.type) + ' · ' + escapeHtml(movie.region) + '</span>',
      '</div>',
      '<h3><a href="' + movie.url + '">' + escapeHtml(movie.title) + '</a></h3>',
      '<p>' + escapeHtml(movie.oneLine) + '</p>',
      '<div class="movie-card-tags">' + tags + '</div>',
      '</div>',
      '</article>'
    ].join('');
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function installNav() {
    var button = document.querySelector('[data-nav-toggle]');
    var nav = document.querySelector('[data-site-nav]');

    if (!button || !nav) {
      return;
    }

    button.addEventListener('click', function() {
      nav.classList.toggle('is-open');
    });
  }

  function installHero() {
    var hero = document.querySelector('[data-hero]');

    if (!hero) {
      return;
    }

    var slides = bySelector('[data-hero-slide]', hero);
    var dots = bySelector('[data-hero-dot]', hero);
    var previous = hero.querySelector('[data-hero-prev]');
    var next = hero.querySelector('[data-hero-next]');
    var current = 0;
    var timer = null;

    function show(index) {
      current = (index + slides.length) % slides.length;

      slides.forEach(function(slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === current);
      });

      dots.forEach(function(dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === current);
      });
    }

    function play() {
      timer = window.setInterval(function() {
        show(current + 1);
      }, 5200);
    }

    function restart() {
      if (timer) {
        window.clearInterval(timer);
      }
      play();
    }

    if (previous) {
      previous.addEventListener('click', function() {
        show(current - 1);
        restart();
      });
    }

    if (next) {
      next.addEventListener('click', function() {
        show(current + 1);
        restart();
      });
    }

    dots.forEach(function(dot, index) {
      dot.addEventListener('click', function() {
        show(index);
        restart();
      });
    });

    if (slides.length > 1) {
      play();
    }
  }

  function installFilters() {
    var page = document.querySelector('[data-filter-page]');

    if (!page) {
      return;
    }

    var state = {
      type: 'all',
      year: 'all'
    };

    bySelector('[data-filter-group]', page).forEach(function(group) {
      var name = group.getAttribute('data-filter-group');

      bySelector('[data-filter-value]', group).forEach(function(button) {
        button.addEventListener('click', function() {
          state[name] = button.getAttribute('data-filter-value');
          bySelector('[data-filter-value]', group).forEach(function(item) {
            item.classList.toggle('is-active', item === button);
          });
          applyFilters();
        });
      });
    });

    function applyFilters() {
      bySelector('.movie-card', page).forEach(function(item) {
        var typeMatch = state.type === 'all' || item.getAttribute('data-type') === state.type;
        var yearMatch = state.year === 'all' || item.getAttribute('data-year') === state.year;
        item.style.display = typeMatch && yearMatch ? '' : 'none';
      });
    }
  }

  function installSearch() {
    var results = document.querySelector('[data-search-results]');
    var input = document.querySelector('[data-search-input]');

    if (!results) {
      return;
    }

    var params = new URLSearchParams(window.location.search);
    var query = params.get('q') || '';

    if (input) {
      input.value = query;
    }

    if (!query.trim()) {
      return;
    }

    var normalizedQuery = normalize(query);
    var matches = siteMovies.filter(function(movie) {
      var source = [
        movie.title,
        movie.oneLine,
        movie.year,
        movie.type,
        movie.region,
        movie.category,
        movie.genre,
        (movie.tags || []).join(' ')
      ].join(' ');

      return normalize(source).indexOf(normalizedQuery) !== -1;
    }).slice(0, 120);

    if (!matches.length) {
      results.innerHTML = '<div class="empty-state"><h2>没有找到相关作品</h2><p>可以更换关键词继续搜索。</p></div>';
      return;
    }

    results.innerHTML = matches.map(cardTemplate).join('');
  }

  document.addEventListener('DOMContentLoaded', function() {
    installNav();
    installHero();
    installFilters();
    installSearch();
  });
}());
