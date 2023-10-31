(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-animation-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-animation-core'.");
    }
    root['compose-multiplatform-core-animation-core'] = factory(typeof this['compose-multiplatform-core-animation-core'] === 'undefined' ? {} : this['compose-multiplatform-core-animation-core'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.na;
  var equals = kotlin_kotlin.$_$.j6;
  var protoOf = kotlin_kotlin.$_$.f7;
  var hashCode = kotlin_kotlin.$_$.r6;
  var classMeta = kotlin_kotlin.$_$.g6;
  var setMetadataFor = kotlin_kotlin.$_$.g7;
  var Long = kotlin_kotlin.$_$.h9;
  var objectMeta = kotlin_kotlin.$_$.e7;
  var isNaN_0 = kotlin_kotlin.$_$.v9;
  var toString = kotlin_kotlin.$_$.j7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var getNumberHashCode = kotlin_kotlin.$_$.n6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(TweenSpec, 'TweenSpec', classMeta);
  setMetadataFor(AnimationConstants, 'AnimationConstants', objectMeta);
  setMetadataFor(CubicBezierEasing, 'CubicBezierEasing', classMeta);
  setMetadataFor(sam$androidx_compose_animation_core_Easing$0, 'sam$androidx_compose_animation_core_Easing$0', classMeta);
  //endregion
  function TweenSpec(durationMillis, delay, easing) {
    var tmp;
    if (durationMillis === VOID) {
      AnimationConstants_getInstance();
      tmp = 300;
    } else {
      tmp = durationMillis;
    }
    durationMillis = tmp;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.k63_1 = durationMillis;
    this.l63_1 = delay;
    this.m63_1 = easing;
    this.n63_1 = 0;
  }
  protoOf(TweenSpec).equals = function (other) {
    var tmp;
    if (other instanceof TweenSpec) {
      tmp = (other.k63_1 === this.k63_1 ? other.l63_1 === this.l63_1 : false) ? equals(other.m63_1, this.m63_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TweenSpec).hashCode = function () {
    return imul(imul(this.k63_1, 31) + hashCode(this.m63_1) | 0, 31) + this.l63_1 | 0;
  };
  function AnimationConstants() {
    AnimationConstants_instance = this;
    this.o63_1 = 300;
    this.p63_1 = new Long(0, -2147483648);
    this.q63_1 = 0;
  }
  var AnimationConstants_instance;
  function AnimationConstants_getInstance() {
    if (AnimationConstants_instance == null)
      new AnimationConstants();
    return AnimationConstants_instance;
  }
  function get_FastOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutSlowInEasing;
  }
  var FastOutSlowInEasing;
  var LinearOutSlowInEasing;
  var FastOutLinearInEasing;
  function get_LinearEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearEasing;
  }
  var LinearEasing;
  function CubicBezierEasing(a, b, c, d) {
    this.r63_1 = a;
    this.s63_1 = b;
    this.t63_1 = c;
    this.u63_1 = d;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(((!isNaN_0(this.r63_1) ? !isNaN_0(this.s63_1) : false) ? !isNaN_0(this.t63_1) : false) ? !isNaN_0(this.u63_1) : false)) {
      // Inline function 'androidx.compose.animation.core.CubicBezierEasing.<anonymous>' call
      var message = 'Parameters to CubicBezierEasing cannot be NaN. Actual parameters are: ' + this.r63_1 + ', ' + this.s63_1 + ', ' + this.t63_1 + ', ' + this.u63_1 + '.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.v63_1 = 0;
  }
  protoOf(CubicBezierEasing).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof CubicBezierEasing) {
      tmp_2 = this.r63_1 === other.r63_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.s63_1 === other.s63_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.t63_1 === other.t63_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.u63_1 === other.u63_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.r63_1), 31) + getNumberHashCode(this.s63_1) | 0, 31) + getNumberHashCode(this.t63_1) | 0, 31) + getNumberHashCode(this.u63_1) | 0;
  };
  function sam$androidx_compose_animation_core_Easing$0(function_0) {
    this.w63_1 = function_0;
  }
  function LinearEasing$lambda(fraction) {
    _init_properties_Easing_kt__v6fq45();
    return fraction;
  }
  var properties_initialized_Easing_kt_af4f4d;
  function _init_properties_Easing_kt__v6fq45() {
    if (!properties_initialized_Easing_kt_af4f4d) {
      properties_initialized_Easing_kt_af4f4d = true;
      FastOutSlowInEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
      LinearOutSlowInEasing = new CubicBezierEasing(0.0, 0.0, 0.2, 1.0);
      FastOutLinearInEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      var tmp = LinearEasing$lambda;
      LinearEasing = new sam$androidx_compose_animation_core_Easing$0(tmp);
    }
  }
  var UNSET;
  //region block: init
  UNSET = 3.4028235E38;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LinearEasing;
  _.$_$.b = TweenSpec;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-animation-core.js.map
