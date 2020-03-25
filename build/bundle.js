/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_Partie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var partie = new _services_Partie_service__WEBPACK_IMPORTED_MODULE_0__["PartieService"]();
partie.addPlayers().then(partie.startGame);
while (partie.getGentilsLengh() > 0 && partie.getMechantsLengh() > 0) {
    console.log('toto');
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartieService", function() { return PartieService; });
/* harmony import */ var _models_Arme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Tour_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _models_Personnage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(readline__WEBPACK_IMPORTED_MODULE_3__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PartieService = /** @class */ (function () {
    function PartieService(equipeMechants, equipeGentils) {
        var _this = this;
        if (equipeMechants === void 0) { equipeMechants = []; }
        if (equipeGentils === void 0) { equipeGentils = []; }
        this.readLine = function (question) { return __awaiter(_this, void 0, void 0, function () {
            var response, rl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rl = readline__WEBPACK_IMPORTED_MODULE_3___default.a.createInterface({
                            input: process.stdin,
                            output: process.stdout
                        });
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                rl.question(question, function (answer) {
                                    resolve(answer);
                                });
                            }).then(function (onfull) {
                                response = onfull;
                                rl.close();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        this.startGame = function () {
            if (_this._equipeGentils.length > 0) {
                console.log("Equipe des Gentils :");
                for (var _i = 0, _a = _this._equipeGentils; _i < _a.length; _i++) {
                    var gentil = _a[_i];
                    console.log(gentil.getNom());
                }
                console.log("Equipe des M\u00E9chants :");
                for (var _b = 0, _c = _this._equipeMechants; _b < _c.length; _b++) {
                    var mechant = _c[_b];
                    console.log(mechant.getNom());
                }
                _this.initTour();
            }
            else
                console.log("Pas de personnage\nFin de partie");
        };
        this.selectArme = function () { return __awaiter(_this, void 0, void 0, function () {
            var nb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readLine('Quel arme lui attribuer [1 => Hache /2 => Epee]? ')];
                    case 1:
                        nb = _a.sent();
                        if (nb === 1) {
                            return [2 /*return*/, new _models_Arme__WEBPACK_IMPORTED_MODULE_0__["Hache"]()];
                        }
                        else if (nb === 2) {
                            return [2 /*return*/, new _models_Arme__WEBPACK_IMPORTED_MODULE_0__["Epee"]()];
                        }
                        else
                            this.selectArme();
                        return [2 /*return*/];
                }
            });
        }); };
        this.addPlayers = function () { return __awaiter(_this, void 0, void 0, function () {
            var q1, q2, q3, name_1, arme, player;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q1 = 'Ajouter un personnage [y/n]? ';
                        q2 = 'Quel nom lui donner? ';
                        q3 = 'Quel arme lui attribuer [1 => Hache /2 => Epee]? ';
                        _a.label = 1;
                    case 1: return [4 /*yield*/, this.readLine(q1)];
                    case 2:
                        if (!((_a.sent()) === 'y')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.readLine(q2)];
                    case 3:
                        name_1 = _a.sent();
                        return [4 /*yield*/, this.selectArme()];
                    case 4:
                        arme = _a.sent();
                        player = new _models_Personnage__WEBPACK_IMPORTED_MODULE_2__["Gentil"](name_1, arme);
                        this.addToEquipeGentils(player);
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.addToEquipeGentils = function (player) {
            _this._equipeGentils.push(player);
            _this._equipeMechants.push(new _models_Personnage__WEBPACK_IMPORTED_MODULE_2__["Mechant"](new _models_Arme__WEBPACK_IMPORTED_MODULE_0__["Arme"](3, 6, 5)));
        };
        this.getGentilsLengh = function () {
            return _this._equipeGentils.length;
        };
        this.getMechantsLengh = function () {
            return _this._equipeMechants.length;
        };
        this.initTour = function () {
            var tour = new _Tour_service__WEBPACK_IMPORTED_MODULE_1__["TourService"](_this);
        };
        this._equipeGentils = equipeGentils;
        this._equipeMechants = equipeMechants;
    }
    return PartieService;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arme", function() { return Arme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hache", function() { return Hache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Epee", function() { return Epee; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Arme = /** @class */ (function () {
    function Arme(minDmg, maxDmg, criticChance) {
        var _this = this;
        /**
        * Get Damage by egenrating random number between interval
        *
        * @return number
        */
        this.getDmg = function () {
            //Random number generation between minDmg and maxDmg
            if (_this.isCriticalHit()) {
                return (_this._maxDmg + 1);
            }
            else
                return (Math.floor(Math.random() * (_this._maxDmg - (_this._minDmg - 1))) + _this._minDmg);
        };
        this.isCriticalHit = function () {
            //Random number generation between 0 and 100 
            var nb = Math.floor(Math.random() * 100) - 1;
            //If number generated is lower or equal to criticChance, return true
            if (nb <= _this._criticChance) {
                console.log('Critical Hit!');
                return true;
            }
            //If not, return false
            else
                return false;
        };
        this._minDmg = minDmg;
        this._maxDmg = maxDmg;
        this._criticChance = criticChance;
    }
    return Arme;
}());

var Hache = /** @class */ (function (_super) {
    __extends(Hache, _super);
    function Hache(minDmg, maxDmg, criticChance) {
        if (minDmg === void 0) { minDmg = 4; }
        if (maxDmg === void 0) { maxDmg = 8; }
        if (criticChance === void 0) { criticChance = 10; }
        return _super.call(this, minDmg, maxDmg, criticChance) || this;
    }
    return Hache;
}(Arme));

var Epee = /** @class */ (function (_super) {
    __extends(Epee, _super);
    function Epee(minDmg, maxDmg, criticChance) {
        if (minDmg === void 0) { minDmg = 4; }
        if (maxDmg === void 0) { maxDmg = 10; }
        if (criticChance === void 0) { criticChance = 5; }
        return _super.call(this, minDmg, maxDmg, criticChance) || this;
    }
    return Epee;
}(Arme));



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourService", function() { return TourService; });
var TourService = /** @class */ (function () {
    function TourService(partie) {
        this._partie = partie;
    }
    return TourService;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personnage", function() { return Personnage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gentil", function() { return Gentil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mechant", function() { return Mechant; });
/* harmony import */ var _Arme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _lib_nameGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Personnage = /** @class */ (function () {
    function Personnage(nom, pv, pvMax, defense, arme) {
        var _this = this;
        if (defense === void 0) { defense = 0; }
        this.attack = function (cible) {
            var dmg = _this._arme.getDmg();
            if (_this._arme.constructor === _Arme__WEBPACK_IMPORTED_MODULE_0__["Arme"]) {
                console.log(_this._nom + " attaque " + cible.getNom() + "\nMontant des d\u00E9gats : " + dmg);
            }
            else
                console.log(_this._nom + " attaque " + cible.getNom() + " avec " + _this._arme.constructor.name + "\nMontant des d\u00E9gats : " + dmg);
            cible.getAttacked(cible, dmg);
        };
        this.getAttacked = function (cible, dmg) {
            cible._pv -= dmg;
            console.log("Point de vie de " + cible.getNom() + " : " + cible.getPv() + "\n");
        };
        this.isKilled = function () {
            if (_this._pv <= 0) {
                console.log(_this._nom + " a \u00E9t\u00E9 tu\u00E9");
                return true;
            }
            else
                return false;
        };
        //Getters
        /**
        * Get Name
        *
        * @return string
        */
        this.getNom = function () {
            return _this._nom;
        };
        /**
        * Get actual health point
        *
        * @return number
        */
        this.getPv = function () {
            if (_this._pv < 0)
                return 0;
            else
                return _this._pv;
        };
        /**
        * Get max health point
        *
        * @return number
        */
        this.getPvMax = function () {
            return _this._pvMax;
        };
        /**
       * Get defense point
       *
       * @return number
       */
        this.getDefense = function () {
            return _this._defense;
        };
        /**
        *  get arme
        *
        * @return Arme
        */
        this.getArme = function () {
            return _this._arme;
        };
        //Setters
        /**
         * set name
         *
         * @return void
         */
        this.setNom = function (nom) {
            _this._nom = nom;
        };
        /**
         * set actual health point
         *
         * @return void
         */
        this.setPv = function (pv) {
            _this._pvMax = pv;
        };
        /**
        * set max health point
        *
        * @return void
        */
        this.setPvMax = function (pvMax) {
            _this._pvMax = pvMax;
        };
        /**
        * set defense point
        *
        * @return void
        */
        this.setDefense = function (defense) {
            _this._defense = defense;
        };
        /**
        *  Set arme
        *
        * @return void
        */
        this.setArme = function (arme) {
            _this._arme = arme;
        };
        this._nom = nom;
        this._pv = pv;
        this._pvMax = pvMax;
        this._defense = defense;
        this._arme = arme;
    }
    return Personnage;
}());

var Gentil = /** @class */ (function (_super) {
    __extends(Gentil, _super);
    function Gentil(nom, arme) {
        return _super.call(this, nom, 30, 30, 0, arme) || this;
    }
    return Gentil;
}(Personnage));

var Mechant = /** @class */ (function (_super) {
    __extends(Mechant, _super);
    function Mechant(arme) {
        var _this = this;
        var nom = Object(_lib_nameGenerator__WEBPACK_IMPORTED_MODULE_1__["generateName"])();
        _this = _super.call(this, nom, 40, 40, 0, arme) || this;
        return _this;
    }
    return Mechant;
}(Personnage));



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateName", function() { return generateName; });
function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function getRandomInt(min, max) {
    console.log(min, max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function generateName() {
    var name1 = ["Billy", "Bobby", "Kenny", "Helmut", "Chris", "Peter", "Carl"];
    var name2 = ["La Terreur", "Le Guetteur", "La Fouine", "Les Doigts Crochus", "Bottleneck", "Dinguo", "Martinez"];
    var name = capFirst(name1[getRandomInt(0, name1.length - 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length - 1)]);
    return name;
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9QYXJ0aWUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0FybWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL1RvdXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1BlcnNvbm5hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9uYW1lR2VuZXJhdG9yLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWRsaW5lXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUF5RDtBQUd6RCxJQUFJLE1BQU0sR0FBRyxJQUFJLHNFQUFhLEVBQUUsQ0FBQztBQUVqQyxNQUFN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Q0FBQyxDQUFDO0lBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDekQsQ0FBQztBQUVNLFNBQVMsWUFBWTtJQUN4QixJQUFJLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRTVFLElBQUksS0FBSyxHQUFHLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUVqSCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6SCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDOzs7Ozs7O0FDaEJELHFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IFBhcnRpZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL1BhcnRpZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgVG91clNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL1RvdXIuc2VydmljZSc7XG5cbmxldCBwYXJ0aWUgPSBuZXcgUGFydGllU2VydmljZSgpO1xuXG5wYXJ0aWUuYWRkUGxheWVycygpLnRoZW4ocGFydGllLnN0YXJ0R2FtZSk7XG5cbndoaWxlIChwYXJ0aWUuZ2V0R2VudGlsc0xlbmdoKCkgPiAwICYmIHBhcnRpZS5nZXRNZWNoYW50c0xlbmdoKCkgPiAwKSB7XG4gICAgY29uc29sZS5sb2coJ3RvdG8nKTtcbn1cblxuXG4iLCJpbXBvcnQgeyBBcm1lLCBIYWNoZSwgRXBlZSB9IGZyb20gXCIuLi9tb2RlbHMvQXJtZVwiO1xuaW1wb3J0IHsgVG91clNlcnZpY2UgfSBmcm9tICcuL1RvdXIuc2VydmljZSc7XG5pbXBvcnQgeyBQZXJzb25uYWdlLCBHZW50aWwsIE1lY2hhbnQgfSBmcm9tIFwiLi4vbW9kZWxzL1BlcnNvbm5hZ2VcIjtcbmltcG9ydCByZWFkbGluZSBmcm9tICdyZWFkbGluZSdcbmV4cG9ydCBjbGFzcyBQYXJ0aWVTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgX2VxdWlwZUdlbnRpbHM6IFBlcnNvbm5hZ2VbXTtcbiAgICBwcml2YXRlIF9lcXVpcGVNZWNoYW50czogUGVyc29ubmFnZVtdO1xuXG4gICAgY29uc3RydWN0b3IoZXF1aXBlTWVjaGFudHMgPSBbXSwgZXF1aXBlR2VudGlscyA9IFtdKSB7XG4gICAgICAgIHRoaXMuX2VxdWlwZUdlbnRpbHMgPSBlcXVpcGVHZW50aWxzO1xuICAgICAgICB0aGlzLl9lcXVpcGVNZWNoYW50cyA9IGVxdWlwZU1lY2hhbnRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVhZExpbmUgPSBhc3luYyAocXVlc3Rpb246IHN0cmluZykgPT4ge1xuICAgICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICAgIGNvbnN0IHJsID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHtcbiAgICAgICAgICAgIGlucHV0OiBwcm9jZXNzLnN0ZGluLFxuICAgICAgICAgICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dFxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBybC5xdWVzdGlvbihxdWVzdGlvbiwgKGFuc3dlcjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhbnN3ZXIpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS50aGVuKG9uZnVsbCA9PiB7XG4gICAgICAgICAgICByZXNwb25zZSA9IG9uZnVsbDtcbiAgICAgICAgICAgIHJsLmNsb3NlKClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2VxdWlwZUdlbnRpbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEVxdWlwZSBkZXMgR2VudGlscyA6YCk7XG4gICAgICAgICAgICBmb3IgKGxldCBnZW50aWwgb2YgdGhpcy5fZXF1aXBlR2VudGlscykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdlbnRpbC5nZXROb20oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXF1aXBlIGRlcyBNw6ljaGFudHMgOmApO1xuICAgICAgICAgICAgZm9yIChsZXQgbWVjaGFudCBvZiB0aGlzLl9lcXVpcGVNZWNoYW50cykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lY2hhbnQuZ2V0Tm9tKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbml0VG91cigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFzIGRlIHBlcnNvbm5hZ2VcXG5GaW4gZGUgcGFydGllXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RBcm1lID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgbmI6IGFueSA9IGF3YWl0IHRoaXMucmVhZExpbmUoJ1F1ZWwgYXJtZSBsdWkgYXR0cmlidWVyIFsxID0+IEhhY2hlIC8yID0+IEVwZWVdPyAnKTtcbiAgICAgICAgaWYgKG5iID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEhhY2hlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmIgPT09IDIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXBlZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgdGhpcy5zZWxlY3RBcm1lKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFBsYXllcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBxMTogc3RyaW5nID0gJ0Fqb3V0ZXIgdW4gcGVyc29ubmFnZSBbeS9uXT8gJztcbiAgICAgICAgbGV0IHEyOiBzdHJpbmcgPSAnUXVlbCBub20gbHVpIGRvbm5lcj8gJztcbiAgICAgICAgbGV0IHEzOiBzdHJpbmcgPSAnUXVlbCBhcm1lIGx1aSBhdHRyaWJ1ZXIgWzEgPT4gSGFjaGUgLzIgPT4gRXBlZV0/ICc7XG4gICAgICAgIHdoaWxlIChhd2FpdCB0aGlzLnJlYWRMaW5lKHExKSA9PT0gJ3knKSB7XG4gICAgICAgICAgICBsZXQgbmFtZTogYW55ID0gYXdhaXQgdGhpcy5yZWFkTGluZShxMik7XG4gICAgICAgICAgICBsZXQgYXJtZTogYW55ID0gYXdhaXQgdGhpcy5zZWxlY3RBcm1lKCk7XG4gICAgICAgICAgICBsZXQgcGxheWVyOiBHZW50aWwgPSBuZXcgR2VudGlsKG5hbWUsIGFybWUpO1xuICAgICAgICAgICAgdGhpcy5hZGRUb0VxdWlwZUdlbnRpbHMocGxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkVG9FcXVpcGVHZW50aWxzID0gKHBsYXllcjogUGVyc29ubmFnZSkgPT4ge1xuICAgICAgICB0aGlzLl9lcXVpcGVHZW50aWxzLnB1c2gocGxheWVyKTtcbiAgICAgICAgdGhpcy5fZXF1aXBlTWVjaGFudHMucHVzaChuZXcgTWVjaGFudChuZXcgQXJtZSgzLCA2LCA1KSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRHZW50aWxzTGVuZ2ggPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lcXVpcGVHZW50aWxzLmxlbmd0aFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRNZWNoYW50c0xlbmdoID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXF1aXBlTWVjaGFudHMubGVuZ3RoXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0VG91ciA9ICgpID0+IHtcbiAgICAgICAgbGV0IHRvdXIgPSBuZXcgVG91clNlcnZpY2UodGhpcyk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBBcm1lIHtcbiAgICBwcml2YXRlIF9taW5EbWc6IG51bWJlcjtcbiAgICBwcml2YXRlIF9tYXhEbWc6IG51bWJlcjtcbiAgICBwcml2YXRlIF9jcml0aWNDaGFuY2U6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG1pbkRtZzogbnVtYmVyLCBtYXhEbWc6IG51bWJlciwgY3JpdGljQ2hhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWluRG1nID0gbWluRG1nO1xuICAgICAgICB0aGlzLl9tYXhEbWcgPSBtYXhEbWc7XG4gICAgICAgIHRoaXMuX2NyaXRpY0NoYW5jZSA9IGNyaXRpY0NoYW5jZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEdldCBEYW1hZ2UgYnkgZWdlbnJhdGluZyByYW5kb20gbnVtYmVyIGJldHdlZW4gaW50ZXJ2YWxcbiAgICAqIFxuICAgICogQHJldHVybiBudW1iZXJcbiAgICAqL1xuICAgIHB1YmxpYyBnZXREbWcgPSAoKSA9PiB7XG4gICAgICAgIC8vUmFuZG9tIG51bWJlciBnZW5lcmF0aW9uIGJldHdlZW4gbWluRG1nIGFuZCBtYXhEbWdcbiAgICAgICAgaWYgKHRoaXMuaXNDcml0aWNhbEhpdCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX21heERtZyArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuX21heERtZyAtICh0aGlzLl9taW5EbWcgLSAxKSkpICsgdGhpcy5fbWluRG1nKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzQ3JpdGljYWxIaXQgPSAoKSA9PiB7XG4gICAgICAgIC8vUmFuZG9tIG51bWJlciBnZW5lcmF0aW9uIGJldHdlZW4gMCBhbmQgMTAwIFxuICAgICAgICBsZXQgbmI6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgLSAxO1xuICAgICAgICAvL0lmIG51bWJlciBnZW5lcmF0ZWQgaXMgbG93ZXIgb3IgZXF1YWwgdG8gY3JpdGljQ2hhbmNlLCByZXR1cm4gdHJ1ZVxuICAgICAgICBpZiAobmIgPD0gdGhpcy5fY3JpdGljQ2hhbmNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ3JpdGljYWwgSGl0IScpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy9JZiBub3QsIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBIYWNoZSBleHRlbmRzIEFybWUge1xuICAgIGNvbnN0cnVjdG9yKG1pbkRtZyA9IDQsIG1heERtZyA9IDgsIGNyaXRpY0NoYW5jZSA9IDEwKSB7XG4gICAgICAgIHN1cGVyKG1pbkRtZywgbWF4RG1nLCBjcml0aWNDaGFuY2UpXG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEVwZWUgZXh0ZW5kcyBBcm1lIHtcbiAgICBjb25zdHJ1Y3RvcihtaW5EbWcgPSA0LCBtYXhEbWcgPSAxMCwgY3JpdGljQ2hhbmNlID0gNSkge1xuICAgICAgICBzdXBlcihtaW5EbWcsIG1heERtZywgY3JpdGljQ2hhbmNlKVxuICAgIH1cbn0iLCJpbXBvcnQgeyBQYXJ0aWVTZXJ2aWNlIH0gZnJvbSBcIi4vUGFydGllLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFRvdXJTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgX3BhcnRpZTogUGFydGllU2VydmljZTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihwYXJ0aWU6IFBhcnRpZVNlcnZpY2UpIFxuICAgIHtcbiAgICAgICAgdGhpcy5fcGFydGllID0gcGFydGllO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgQXJtZSwgSGFjaGUsIEVwZWUgfSBmcm9tIFwiLi9Bcm1lXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU5hbWUgfSBmcm9tICcuLi9saWIvbmFtZUdlbmVyYXRvcidcbmV4cG9ydCBjbGFzcyBQZXJzb25uYWdlIHtcblxuICAgIHByaXZhdGUgX25vbTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3B2OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfcHZNYXg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9kZWZlbnNlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfYXJtZTogQXJtZTtcblxuICAgIGNvbnN0cnVjdG9yKG5vbTogYW55LCBwdjogbnVtYmVyLCBwdk1heDogbnVtYmVyLCBkZWZlbnNlID0gMCwgYXJtZTogQXJtZSkge1xuICAgICAgICB0aGlzLl9ub20gPSBub207XG4gICAgICAgIHRoaXMuX3B2ID0gcHY7XG4gICAgICAgIHRoaXMuX3B2TWF4ID0gcHZNYXg7XG4gICAgICAgIHRoaXMuX2RlZmVuc2UgPSBkZWZlbnNlO1xuICAgICAgICB0aGlzLl9hcm1lID0gYXJtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXR0YWNrID0gKGNpYmxlOiBQZXJzb25uYWdlKSA9PiB7XG4gICAgICAgIGxldCBkbWcgPSB0aGlzLl9hcm1lLmdldERtZygpO1xuICAgICAgICBpZiAodGhpcy5fYXJtZS5jb25zdHJ1Y3RvciA9PT0gQXJtZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5fbm9tfSBhdHRhcXVlICR7Y2libGUuZ2V0Tm9tKCl9XFxuTW9udGFudCBkZXMgZMOpZ2F0cyA6ICR7ZG1nfWApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuX25vbX0gYXR0YXF1ZSAke2NpYmxlLmdldE5vbSgpfSBhdmVjICR7dGhpcy5fYXJtZS5jb25zdHJ1Y3Rvci5uYW1lfVxcbk1vbnRhbnQgZGVzIGTDqWdhdHMgOiAke2RtZ31gKTtcblxuICAgICAgICBjaWJsZS5nZXRBdHRhY2tlZChjaWJsZSwgZG1nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QXR0YWNrZWQgPSAoY2libGU6IFBlcnNvbm5hZ2UsIGRtZzogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNpYmxlLl9wdiAtPSBkbWc7XG4gICAgICAgIGNvbnNvbGUubG9nKGBQb2ludCBkZSB2aWUgZGUgJHtjaWJsZS5nZXROb20oKX0gOiAke2NpYmxlLmdldFB2KCl9XFxuYCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzS2lsbGVkID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fcHYgPD0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5fbm9tfSBhIMOpdMOpIHR1w6lgKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvL0dldHRlcnNcblxuICAgIC8qKlxuICAgICogR2V0IE5hbWVcbiAgICAqIFxuICAgICogQHJldHVybiBzdHJpbmdcbiAgICAqL1xuICAgIHB1YmxpYyBnZXROb20gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBHZXQgYWN0dWFsIGhlYWx0aCBwb2ludFxuICAgICogXG4gICAgKiBAcmV0dXJuIG51bWJlclxuICAgICovXG4gICAgcHVibGljIGdldFB2ID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fcHYgPCAwKVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wdjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEdldCBtYXggaGVhbHRoIHBvaW50XG4gICAgKiBcbiAgICAqIEByZXR1cm4gbnVtYmVyXG4gICAgKi9cbiAgICBwdWJsaWMgZ2V0UHZNYXggPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wdk1heDtcbiAgICB9XG5cbiAgICAvKipcbiAgICogR2V0IGRlZmVuc2UgcG9pbnRcbiAgICogXG4gICAqIEByZXR1cm4gbnVtYmVyXG4gICAqL1xuICAgIHB1YmxpYyBnZXREZWZlbnNlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmZW5zZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqICBnZXQgYXJtZVxuICAgICogXG4gICAgKiBAcmV0dXJuIEFybWVcbiAgICAqL1xuICAgIHB1YmxpYyBnZXRBcm1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXJtZTtcbiAgICB9XG5cbiAgICAvL1NldHRlcnNcblxuICAgIC8qKlxuICAgICAqIHNldCBuYW1lXG4gICAgICogXG4gICAgICogQHJldHVybiB2b2lkXG4gICAgICovXG4gICAgcHVibGljIHNldE5vbSA9IChub206IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLl9ub20gPSBub207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2V0IGFjdHVhbCBoZWFsdGggcG9pbnRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0UHYgPSAocHY6IG51bWJlcikgPT4ge1xuICAgICAgICB0aGlzLl9wdk1heCA9IHB2O1xuICAgIH1cblxuICAgIC8qKlxuICAgICogc2V0IG1heCBoZWFsdGggcG9pbnRcbiAgICAqIFxuICAgICogQHJldHVybiB2b2lkXG4gICAgKi9cbiAgICBwdWJsaWMgc2V0UHZNYXggPSAocHZNYXg6IG51bWJlcikgPT4ge1xuICAgICAgICB0aGlzLl9wdk1heCA9IHB2TWF4O1xuICAgIH1cblxuICAgIC8qKlxuICAgICogc2V0IGRlZmVuc2UgcG9pbnRcbiAgICAqIFxuICAgICogQHJldHVybiB2b2lkXG4gICAgKi9cbiAgICBwdWJsaWMgc2V0RGVmZW5zZSA9IChkZWZlbnNlOiBudW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy5fZGVmZW5zZSA9IGRlZmVuc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiAgU2V0IGFybWVcbiAgICAqIFxuICAgICogQHJldHVybiB2b2lkXG4gICAgKi9cbiAgICBwdWJsaWMgc2V0QXJtZSA9IChhcm1lOiBBcm1lKSA9PiB7XG4gICAgICAgIHRoaXMuX2FybWUgPSBhcm1lO1xuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgR2VudGlsIGV4dGVuZHMgUGVyc29ubmFnZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihub206IHN0cmluZywgYXJtZTogQXJtZSkge1xuICAgICAgICBzdXBlcihub20sIDMwLCAzMCwgMCwgYXJtZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWVjaGFudCBleHRlbmRzIFBlcnNvbm5hZ2Uge1xuXG4gICAgY29uc3RydWN0b3IoYXJtZTogQXJtZSlcbiAgICB7XG4gICAgICAgIGxldCBub20gPSBnZW5lcmF0ZU5hbWUoKTtcbiAgICAgICAgc3VwZXIobm9tLCA0MCwgNDAsIDAsIGFybWUpO1xuICAgIH1cbn0iLCJmdW5jdGlvbiBjYXBGaXJzdChzdHJpbmc6IHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZyhtaW4sIG1heCk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTmFtZSgpIHtcbiAgICB2YXIgbmFtZTEgPSBbXCJCaWxseVwiLCBcIkJvYmJ5XCIsIFwiS2VubnlcIiwgXCJIZWxtdXRcIiwgXCJDaHJpc1wiLCBcIlBldGVyXCIsIFwiQ2FybFwiXTtcblxuICAgIHZhciBuYW1lMiA9IFtcIkxhIFRlcnJldXJcIiwgXCJMZSBHdWV0dGV1clwiLCBcIkxhIEZvdWluZVwiLCBcIkxlcyBEb2lndHMgQ3JvY2h1c1wiLCBcIkJvdHRsZW5lY2tcIiwgXCJEaW5ndW9cIiwgXCJNYXJ0aW5lelwiXTtcblxuICAgIHZhciBuYW1lID0gY2FwRmlyc3QobmFtZTFbZ2V0UmFuZG9tSW50KDAsIG5hbWUxLmxlbmd0aCAtIDEpXSkgKyAnICcgKyBjYXBGaXJzdChuYW1lMltnZXRSYW5kb21JbnQoMCwgbmFtZTIubGVuZ3RoIC0gMSldKTtcbiAgICByZXR1cm4gbmFtZTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFkbGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9