webpackJsonp([6],{

/***/ "./src/common.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/index2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__print_js__ = __webpack_require__("./src/print.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_js__ = __webpack_require__("./src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__members__ = __webpack_require__("./src/members.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__members___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__members__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_css__ = __webpack_require__("./src/common.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__common_css__);






function component() {
  var element = document.createElement('pre')
  element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + Object(__WEBPACK_IMPORTED_MODULE_3__math_js__["a" /* cube */])(5)].join(
    '\n\n'
  )

  return element
}

document.body.appendChild(component())
console.log('dddd')

console.log('dfasfsdfsd')

function test() {}


/***/ }),

/***/ "./src/math.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export square */
/* harmony export (immutable) */ __webpack_exports__["a"] = cube;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__("./src/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);

function square(x) {
  return x * x
}

function cube(x) {
  return x * x * x
}


/***/ }),

/***/ "./src/members.js":
/***/ (function(module, exports) {

const founders = [
  {
    name: '姚娜',
    icon: 'yaona',
    title: 'CEO/Founder',
    intro: '大鱼是做给自己40岁周游世界的产品',
  },

  {
    name: '黄勋章',
    icon: 'medal',
    title: 'CTO/Founder',
    intro: '做更多有价值的事',
  },
]

const members = [
  {
    name: '张于',
    icon: 'zhangyu',
    intro: '帮助中国用户提高出境游体验。',
  },
  {
    name: '聂世超',
    icon: 'nieshichao',
    intro: '肯定是来改变世界的啊!',
  },
  {
    name: '黄莉盈',
    icon: 'huangliying',
    intro: '因为热爱旅行，被大鱼各具特色，带有浓浓人情的民宿所吸引。',
  },
  {
    name: '杨胜禹',
    icon: 'yangshengyu',
    intro: '做事高效，氛围融洽。',
  },

  {
    name: '黄家翰',
    icon: 'huangjiahan',
    intro: '工作就是一个字－－干!!!',
  },

  {
    name: '张允恒',
    icon: 'zhangyunheng',
    intro: '我的一切选择都仅仅是因为喜欢。',
  },

  {
    name: '宋彦魁',
    icon: 'songyankui',
    intro: '被传奇的团队所吸引， 毅然选择加入了大鱼，愿与其他的鱼儿一起，完成旅行的远征梦。',
  },

  {
    name: '张湘云',
    icon: 'zhangxiangyun',
    intro: '一輩子是場修煉，短的是旅行，長的是人生！',
  },

  {
    name: '黄朝亮',
    icon: 'huangchaoliang',
    intro: '一念既出，万山无阻。见自己，见天地，见众生。',
  },

  {
    name: '马博涵',
    icon: 'mabohan',
    intro: '帮助更多的年轻人走出去，体验、感知、成长。',
  },

  {
    name: '丁然',
    icon: 'dingran',
    intro: '我的代码要走遍全球！',
  },

  {
    name: '及鹏',
    icon: 'jipeng',
    intro: '如今社会个人难以生存，只能来到公司抱团打天下。',
  },

  {
    name: '秦超',
    icon: 'qinchao',
    intro: '想在fiiish找寻月亮和六便士',
  },

  {
    name: '吴逍逸',
    icon: 'wuxiaoyi',
    intro: '能创造更大价值并获得更多成长。',
  },

  {
    name: '李菁',
    icon: 'lijing',
    intro: '寻找有趣的灵魂，遇见更好的自己。',
  },

  {
    name: '胡戈莹',
    icon: 'hugeying',
    intro: '因为喜欢到处走走又想挣钱呀。',
  },

  {
    name: '肖雨荷',
    icon: 'xiaoyuhe',
    intro: '呼儿将出换美酒，“鱼儿”同销万古愁。',
  },

  {
    name: '李智敏',
    icon: 'lizhimin',
    intro: '给自己的专业所长一片沃土，给年轻的自己一场不停息的折腾。',
  },

  {
    name: '王羽馨',
    icon: 'wangyuxin',
    intro: '加入fiiish，激发潜能，在变化世界里一起共生、共荣、共好旅行。',
  },

  {
    name: '王峥',
    icon: 'wangzheng',
    intro: 'fiiish，是我再次踏入旅游圈的小火苗。',
  },

  {
    name: '黄源',
    icon: 'huangyuan',
    intro: '旅行，为了一个环游世界的梦想。',
  },

  {
    name: '韦鹏杰',
    icon: 'weipengjie',
    intro: '初出茅庐，觉得fiiish挺好的！',
  },

  {
    name: '李晨',
    icon: 'lichen',
    intro: '爱旅行，不穷游。加入fiiish，给自己更好的目的地！',
  },

  {
    name: '姚春丽',
    icon: 'yaochunli',
    intro: '加入fiiish，在探索改变中与fiiish一起成长。',
  },

  {
    name: '孙慰旻',
    icon: 'sunweimin',
    intro: '因为《逍遥游》加入fiiish，在fiiish希望可以“逍遥游”',
  },

  {
    name: '董杰俊',
    icon: 'dongjiejun',
    intro: 'fiiish是为全球旅行爱好者提供住宿服务的公司。',
  },

  {
    name: '王安琪',
    icon: 'wanganqi',
    intro: 'fiiish－带我探索诗与远方。',
  },

  {
    name: '武文婧',
    icon: 'wuwenjing',
    intro: '加入fiiish———尝试发掘自己未知的某种潜在能力。',
  },

  {
    name: '朱辉',
    icon: 'zhuhui',
    intro: '有勇气去做自己喜欢的事情，发现更大的世界。',
  },

  {
    name: '孙凌竹',
    icon: 'sunlingzhu',
    intro: '希望在走心的公司上班吖',
  },

  {
    name: '唐亚杰',
    icon: 'tangyajie',
    intro: '创新的hunter模式是吸引我来这里的理由。',
  },

  {
    name: '黄轩宇',
    icon: 'huangxuanyu',
    intro: '小而美的技术型公司。',
  },

  {
    name: '姜霁琬',
    icon: 'jiangjiwan',
    intro: '加入fiiish，因为它相信年轻人的无限潜力和可能性。',
  },

  {
    name: '马嘉琪',
    icon: 'majiaqi',
    intro: '“生活在别处” 是fiiish给我的最好礼物。',
  },

  {
    name: '虞多静',
    icon: 'yuduojing',
    intro: '若为自由顾，两者皆可抛。',
  },

  {
    name: '崔艺莹',
    icon: 'cuiyiying',
    intro: '用fiiish不如来fiiish。',
  },

  {
    name: '邓亚楠',
    icon: 'dengyanan',
    intro: '凡心所向，素履以往；来fiiish为了探寻未知世界，遇见更好的自己。',
  },

  {
    name: '高美玲',
    icon: 'gaomeiling',
    intro: '想和fiiish一起看世界！',
  },

  {
    name: '赵梦莹',
    icon: 'zhaomengying',
    intro: '想要游历四方，想在互联网旅游业里游刃有余。',
  },

  {
    name: '刘欣',
    icon: 'liuxin',
    intro: '梦想并不奢侈，只要勇敢迈出第一步。',
  },

  {
    name: '熊倩',
    icon: 'xiongqian',
    intro: '因为“情怀”而来，因为“可能”而在。',
  },

  {
    name: '刘春吾',
    icon: 'liuchunwu',
    intro: '与有情人做快乐事，我选择了fiiish。',
  },

  {
    name: '胡衍生',
    icon: 'huyansheng',
    intro: '刚好fiiish和我喜欢的一部电影同名。',
  },

  {
    name: '张月',
    icon: 'zhangyue',
    intro: 'fiiish，是自己认识旅游行业的开始。',
  },

  {
    name: '胡玉枝',
    icon: 'huyuzhi',
    intro: '用旅行发现未知的自己。',
  },

  {
    name: '黄佳嫄',
    icon: 'huangjiayuan',
    intro: '对这个有趣又丰富的世界抱有好奇心。',
  },

  {
    name: '唐驰',
    icon: 'tangchi',
    intro: '吸引我的是fiiish办公室风格和这群靠谱的人。',
  },

  {
    name: '任冲冲',
    icon: 'renchongchong',
    intro: '咖啡厅、书架、谈吐、工作氛围，那一刻，发现这就是我要找的地方。',
  },

  {
    name: '杜婷婷',
    icon: 'dutingting',
    intro: '加入fiiish，是为了发现更精彩的世界。',
  },

  {
    name: '方思宁',
    icon: 'fangsining',
    intro: '体验互联网如何创造更多关于旅行的可能。',
  },

  {
    name: '倪骁汉',
    icon: 'nixiaohan',
    intro: '喜欢旅游，想要在旅游行业闯荡一番。',
  },

  {
    name: '陈鑫',
    icon: 'chenxin',
    intro: '加入fiiish，开启周游世界的一扇窗！',
  },

  {
    name: '梁景升',
    icon: 'liangjingsheng',
    intro: '环游世界，改变世界。',
  },

  {
    name: '张翔',
    icon: 'zhangxiang',
    intro: '和优秀的人，一起做有意思的事情。',
  },

  {
    name: '赵佳楠',
    icon: 'zhaojianan',
    intro: 'fiiish满足了我对创业公司的所有期待，朝着成为COO的道路上一路狂奔~',
  },

  {
    name: '徐欣然',
    icon: 'xuxinran',
    intro: 'fiiish拥有无限的可能',
  },

  {
    name: '龚晨',
    icon: 'gongchen',
    intro: '我这么有趣的灵魂，只有猎人这样有趣的产品才配得上。',
  },

  {
    name: '杜宏俊',
    icon: 'duhongjun',
    intro: '快乐地赚钱',
  },

  {
    name: '王闯',
    icon: 'wangchuang',
    intro: '遇见最棒的人，经营最cool的事。',
  },

  {
    name: '吕睿',
    icon: 'lvrui',
    intro: '想跟大佬们学技术，想跟fiiish游遍世界。',
  },

  {
    name: '李维珺',
    icon: 'liweijun',
    intro: '喜欢旅游，希望可以尝试和成熟OTA不一样的东西。',
  },

  {
    name: '李凯',
    icon: 'likai',
    intro: '在fiiish,遇见不一样的世界和更好的自己。',
  },

  {
    name: '李涛',
    icon: 'litao',
    intro: '爱旅行，爱创造。',
  },

  {
    name: '张睿',
    icon: 'zhangrui',
    intro: 'Dive like a mermaid, Travel like a Fiiish.',
  },

  {
    name: '黄祯迪',
    icon: 'huangzhendi',
    intro: '去感知意志的坚忍，本能的不可抑制，相逢的无法预计，景色的美。',
  },

  {
    name: '马宇轩',
    icon: 'mayuxuan',
    intro: '在fiiish的羽翼下，化而为鸟，尽情飞翔。',
  },
  {
    name: '金金',
    icon: 'jinjin',
    intro: '在fiiish，记录我24岁时的朝九晚五与浪迹天涯。',
  },

  {
    name: '刘子叶',
    icon: 'liuziye',
    intro: 'fiiish让你有最酷的旅行。',
  },

  {
    name: '蔡晓敏',
    icon: 'caixiaomin',
    intro: '想要面包，又想要诗和远方，因而“鱼”你相遇。',
  },

  {
    name: '刘国庆',
    icon: 'liuguoqing',
    intro: '优秀的同伴，和谐的氛围，远大的梦想...以及美味的午餐。',
  },

  {
    name: '陶伟',
    icon: 'taowei',
    intro: 'better work, better life！',
  },

  {
    name: '李芮',
    icon: 'lirui',
    intro: 'fiiish美味的午餐，和谐的氛围深深的吸引了我！',
  },

  {
    name: '刘高楠',
    icon: 'liugaonan',
    intro: '生活不止眼前的苟且，还有诗与远方。LOVE AND PEACE--fiiish道理',
  },

  {
    name: '武文思',
    icon: 'wuwensi',
    intro: 'fiiish对于目标的执着与坚持，让我愿意与它一直一路前行！',
  },

  {
    name: '杨纯',
    icon: 'yangchun',
    intro: '质量以用户需求为开始，以用户满意为结束；加入fiiish，不断学习，努力提升产品质量。',
  },

  {
    name: '郑丹',
    icon: 'zhengdan',
    intro: '和有趣的人一起做有趣的事，和聪明的人一起做有前景的事。',
  },

  {
    name: '王增绪',
    icon: 'wangzengxu',
    intro: '加入fiiish，一起在海洋里寻找到快乐。',
  },

  {
    name: '邓子君',
    icon: 'dengzijun',
    intro: '与fiiish一起探索更多未知世界。',
  },

  {
    name: '柯仲震',
    icon: 'kezhongzhen',
    intro: '在fiiish，成长为更好的自己。',
  },

  {
    name: '董亮',
    icon: 'dongliang',
    intro: 'fiiish是我给自己的选择：坚持、成长。',
  },

  {
    name: '杨晓宇',
    icon: 'yangxiaoyu',
    intro: 'fiiish的氛围和模式对于小鱼来说是致命诱惑。',
  },

  {
    name: '周奕龙',
    icon: 'zhouyilong',
    intro: '做出有趣的旅行众包平台。',
  },

  {
    name: '栾晓华',
    icon: 'luanxiaohua',
    intro: '改变人们的出行方式，哪怕只是一点点。',
  },

  {
    name: '李丹丹',
    icon: 'lidandan',
    intro: '和fiiish一起看世界，遇见更好的自己。',
  },

  {
    name: '张晶',
    icon: 'zhangjing',
    intro: '小一辈土产阶级游戏化翻译官！',
  },
  {
    name: '邹杨',
    icon: 'zouyang',
    intro: '让旅行既是兴趣又是工作。',
  },

  {
    name: '王爽',
    icon: 'wangshuang',
    intro: '与优秀的人一起工作，与公司一起成长。',
  },

  {
    name: '温晓佩',
    icon: 'wenxiaopei',
    intro: '行业仙儿，伙伴俏，工作起来呱呱叫；环境棒，效率高，伙食更是没得挑！',
  },

  {
    name: '国瑶',
    icon: 'guoyao',
    intro: '与一群好玩的人，一起做一件好玩儿的事。',
  },

  {
    name: '郎然',
    icon: 'langran',
    intro: '随时随地，与我相“鱼”，无处不在，“鱼”我相遇！',
  },

  {
    name: '那一博',
    icon: 'nayibo',
    intro: 'fiiish的创意强烈吸引了我，觉得前景特别好；另外，良好的环境以及团队氛围也是非常重要的原因。',
  },

  {
    name: '贾伟超',
    icon: 'jiaweichao',
    intro: '加入fiiish，因为相信fiiish能成长为具有全球竞争力的企业。',
  },

  {
    name: '苗江南',
    icon: 'miaojiangnan',
    intro: 'fiiish正在从0到1的创造一种自由的工作机会和开拓精神。',
  },

  {
    name: '刘兴宏',
    icon: 'liuxinghong',
    intro: '这是一个活力四射的团队，我们借助旅行来拥抱世界。',
  },

  {
    name: '龙一歌',
    icon: 'longyige',
    intro: '永远好奇，永远在路上。',
  },

  {
    name: '许晋',
    icon: 'xujin',
    intro: '大鱼让梦想起飞',
  },
  {
    name: '马辉',
    icon: 'mahui',
    intro: '大鱼小而美，愿和大鱼一同成长。',
  },
  {
    name: '兰先达',
    icon: 'lanxianda',
    intro: 'Fiiish brings the other side of the world to you',
  },
  {
    name: '曹帅',
    icon: 'caoshuai',
    intro: '世界是圆的，世界是平的，世界也将是折叠的。',
  },
  {
    name: '郭文飞',
    icon: 'guowenfei',
    intro: '我喜欢和有梦想的人为伍，让我的人生变得更加精彩。',
  },
  {
    name: '龙云',
    icon: 'longyun',
    intro: '让大鱼文化渲染世界',
  },
  {
    name: '王彬',
    icon: 'wangbin',
    intro: '大鱼是一家可以让自己去世界各地旅行都有认识的朋友的网站',
  },
  {
    name: '赵琴',
    icon: 'zhaoqin',
    intro: ' “志趣相投，义无反顾”',
  },
  {
    name: '刘肥',
    icon: 'liufei',
    intro: '海阔天空凭鱼跃，天高地远任我肥',
  },
  {
    name: '刘星阳',
    icon: 'liuxingyang',
    intro: '与大鱼走遍世界每个角落的健身房',
  },
  {
    name: '张美惠',
    icon: 'zhangmeihui',
    intro: '体验不一样的世界，发现不一样的自己',
  },
  {
    name: '句艳清',
    icon: 'juyanqing',
    intro: '选择大鱼，是想与快乐的人一起成长快乐',
  },
]

module.exports = {
  founders,
  members,
}


/***/ }),

/***/ "./src/print.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_css__ = __webpack_require__("./src/test.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__test_css__);


function printMe() {
  console.log('I get called from print.js!')
}


/***/ }),

/***/ "./src/style.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/test.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["./src/index2.js"]);
//# sourceMappingURL=index2.f398c20e.js.map