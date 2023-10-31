(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-geometry'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-ui-geometry'.");
    }
    root['compose-multiplatform-core-ui-geometry'] = factory(typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined' ? {} : this['compose-multiplatform-core-ui-geometry'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.g2;
  var floatFromBits = kotlin_kotlin.$_$.l6;
  var Long = kotlin_kotlin.$_$.h9;
  var protoOf = kotlin_kotlin.$_$.f7;
  var objectMeta = kotlin_kotlin.$_$.e7;
  var VOID = kotlin_kotlin.$_$.na;
  var setMetadataFor = kotlin_kotlin.$_$.g7;
  var THROW_CCE = kotlin_kotlin.$_$.m9;
  var classMeta = kotlin_kotlin.$_$.g6;
  var toBits = kotlin_kotlin.$_$.ga;
  var toLong = kotlin_kotlin.$_$.h7;
  var numberToInt = kotlin_kotlin.$_$.b7;
  var toString = kotlin_kotlin.$_$.j7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var isFinite = kotlin_kotlin.$_$.u9;
  var getNumberHashCode = kotlin_kotlin.$_$.n6;
  var equals = kotlin_kotlin.$_$.j6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(CornerRadius, 'CornerRadius', classMeta);
  setMetadataFor(MutableRect, 'MutableRect', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Offset, 'Offset', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Rect, 'Rect', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(RoundRect, 'RoundRect', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Size, 'Size', classMeta);
  //endregion
  function _CornerRadius___init__impl__ojmabe(packedValue) {
    return packedValue;
  }
  function _CornerRadius___get_packedValue__impl__okv4jq($this) {
    return $this;
  }
  function _CornerRadius___get_x__impl__1594cn($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp0_unpackFloat1 = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_unpackFloat1.y5(32).z5();
    return floatFromBits(tmp1_fromBits);
  }
  function _CornerRadius___get_y__impl__tyvleu($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp0_unpackFloat2 = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_unpackFloat2.m6(new Long(-1, 0)).z5();
    return floatFromBits(tmp1_fromBits);
  }
  function Companion() {
    Companion_instance = this;
    this.b21_1 = CornerRadius_0(0.0);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CornerRadius__toString_impl_m3k4zq($this) {
    var tmp;
    if (_CornerRadius___get_x__impl__1594cn($this) === _CornerRadius___get_y__impl__tyvleu($this)) {
      tmp = 'CornerRadius.circular(' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn($this), 1) + ')';
    } else {
      tmp = 'CornerRadius.elliptical(' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn($this), 1) + ', ' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu($this), 1) + ')';
    }
    return tmp;
  }
  function CornerRadius__hashCode_impl_r6e06j($this) {
    return $this.hashCode();
  }
  function CornerRadius__equals_impl_776hdl($this, other) {
    if (!(other instanceof CornerRadius))
      return false;
    var tmp0_other_with_cast = other instanceof CornerRadius ? other.c21_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function CornerRadius(packedValue) {
    Companion_getInstance();
    this.c21_1 = packedValue;
  }
  protoOf(CornerRadius).toString = function () {
    return CornerRadius__toString_impl_m3k4zq(this.c21_1);
  };
  protoOf(CornerRadius).hashCode = function () {
    return CornerRadius__hashCode_impl_r6e06j(this.c21_1);
  };
  protoOf(CornerRadius).equals = function (other) {
    return CornerRadius__equals_impl_776hdl(this.c21_1, other);
  };
  function CornerRadius_0(x, y) {
    y = y === VOID ? x : y;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(x));
    var v2 = toLong(toBits(y));
    tmp$ret$0 = v1.a6(32).sd(v2.m6(new Long(-1, 0)));
    return _CornerRadius___init__impl__ojmabe(tmp$ret$0);
  }
  function toStringAsFixed(_this__u8e3s4, digits) {
    // Inline function 'kotlin.math.max' call
    var clampedDigits = Math.max(digits, 0);
    // Inline function 'kotlin.math.pow' call
    var pow = Math.pow(10.0, clampedDigits);
    var shifted = _this__u8e3s4 * pow;
    var decimal = shifted - numberToInt(shifted);
    var tmp;
    if (decimal >= 0.5) {
      tmp = numberToInt(shifted) + 1 | 0;
    } else {
      tmp = numberToInt(shifted);
    }
    var roundedShifted = tmp;
    var rounded = roundedShifted / pow;
    var tmp_0;
    if (clampedDigits > 0) {
      tmp_0 = rounded.toString();
    } else {
      tmp_0 = numberToInt(rounded).toString();
    }
    return tmp_0;
  }
  function MutableRect(left, top, right, bottom) {
    this.d21_1 = left;
    this.e21_1 = top;
    this.f21_1 = right;
    this.g21_1 = bottom;
    this.h21_1 = 8;
  }
  protoOf(MutableRect).rk = function () {
    return this.d21_1 >= this.f21_1 ? true : this.e21_1 >= this.g21_1;
  };
  protoOf(MutableRect).i21 = function (left, top, right, bottom) {
    var tmp = this;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = this.d21_1;
    tmp.d21_1 = Math.max(left, tmp0_max);
    var tmp_0 = this;
    // Inline function 'kotlin.math.max' call
    var tmp1_max = this.e21_1;
    tmp_0.e21_1 = Math.max(top, tmp1_max);
    var tmp_1 = this;
    // Inline function 'kotlin.math.min' call
    var tmp2_min = this.f21_1;
    tmp_1.f21_1 = Math.min(right, tmp2_min);
    var tmp_2 = this;
    // Inline function 'kotlin.math.min' call
    var tmp3_min = this.g21_1;
    tmp_2.g21_1 = Math.min(bottom, tmp3_min);
  };
  protoOf(MutableRect).toString = function () {
    return 'MutableRect(' + (toStringAsFixed(this.d21_1, 1) + ', ') + (toStringAsFixed(this.e21_1, 1) + ', ') + (toStringAsFixed(this.f21_1, 1) + ', ') + (toStringAsFixed(this.g21_1, 1) + ')');
  };
  function toRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.d21_1, _this__u8e3s4.e21_1, _this__u8e3s4.f21_1, _this__u8e3s4.g21_1);
  }
  function _Offset___init__impl__c168vi(packedValue) {
    return packedValue;
  }
  function _Offset___get_packedValue__impl__xh2k8q($this) {
    return $this;
  }
  function _Offset___get_x__impl__xvi35n($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_Offset___get_packedValue__impl__xh2k8q($this).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().l21_1))) {
      // Inline function 'androidx.compose.ui.geometry.Offset.<get-x>.<anonymous>' call
      var message = 'Offset is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp1_unpackFloat1 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat1.y5(32).z5();
    return floatFromBits(tmp1_fromBits);
  }
  function _Offset___get_y__impl__8bzhra($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_Offset___get_packedValue__impl__xh2k8q($this).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().l21_1))) {
      // Inline function 'androidx.compose.ui.geometry.Offset.<get-y>.<anonymous>' call
      var message = 'Offset is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp1_unpackFloat2 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat2.m6(new Long(-1, 0)).z5();
    return floatFromBits(tmp1_fromBits);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.j21_1 = Offset_0(0.0, 0.0);
    var tmp = this;
    FloatCompanionObject_getInstance();
    FloatCompanionObject_getInstance();
    tmp.k21_1 = Offset_0(Infinity, Infinity);
    var tmp_0 = this;
    FloatCompanionObject_getInstance();
    FloatCompanionObject_getInstance();
    tmp_0.l21_1 = Offset_0(NaN, NaN);
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Offset__getDistance_impl_pclvxn($this) {
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = _Offset___get_x__impl__xvi35n($this) * _Offset___get_x__impl__xvi35n($this) + _Offset___get_y__impl__8bzhra($this) * _Offset___get_y__impl__8bzhra($this);
    return Math.sqrt(tmp0_sqrt);
  }
  function Offset__getDistanceSquared_impl_97mhi6($this) {
    return _Offset___get_x__impl__xvi35n($this) * _Offset___get_x__impl__xvi35n($this) + _Offset___get_y__impl__8bzhra($this) * _Offset___get_y__impl__8bzhra($this);
  }
  function Offset__unaryMinus_impl_ssu2iv($this) {
    return Offset_0(-_Offset___get_x__impl__xvi35n($this), -_Offset___get_y__impl__8bzhra($this));
  }
  function Offset__minus_impl_hoj2c0($this, other) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) - _Offset___get_x__impl__xvi35n(other), _Offset___get_y__impl__8bzhra($this) - _Offset___get_y__impl__8bzhra(other));
  }
  function Offset__plus_impl_c78cg0($this, other) {
    return Offset_0(_Offset___get_x__impl__xvi35n($this) + _Offset___get_x__impl__xvi35n(other), _Offset___get_y__impl__8bzhra($this) + _Offset___get_y__impl__8bzhra(other));
  }
  function Offset__toString_impl_4ffbou($this) {
    var tmp;
    if (get_isSpecified($this)) {
      tmp = 'Offset(' + toStringAsFixed(_Offset___get_x__impl__xvi35n($this), 1) + ', ' + toStringAsFixed(_Offset___get_y__impl__8bzhra($this), 1) + ')';
    } else {
      tmp = 'Offset.Unspecified';
    }
    return tmp;
  }
  function Offset__hashCode_impl_hbql41($this) {
    return $this.hashCode();
  }
  function Offset__equals_impl_exf2yj($this, other) {
    if (!(other instanceof Offset))
      return false;
    var tmp0_other_with_cast = other instanceof Offset ? other.m21_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Offset(packedValue) {
    Companion_getInstance_0();
    this.m21_1 = packedValue;
  }
  protoOf(Offset).toString = function () {
    return Offset__toString_impl_4ffbou(this.m21_1);
  };
  protoOf(Offset).hashCode = function () {
    return Offset__hashCode_impl_hbql41(this.m21_1);
  };
  protoOf(Offset).equals = function (other) {
    return Offset__equals_impl_exf2yj(this.m21_1, other);
  };
  function Offset_0(x, y) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(x));
    var v2 = toLong(toBits(y));
    tmp$ret$0 = v1.a6(32).sd(v2.m6(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  function get_isFinite(_this__u8e3s4) {
    return isFinite(_Offset___get_x__impl__xvi35n(_this__u8e3s4)) ? isFinite(_Offset___get_y__impl__8bzhra(_this__u8e3s4)) : false;
  }
  function get_isSpecified(_this__u8e3s4) {
    return !_Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).equals(_Offset___get_packedValue__impl__xh2k8q(Companion_getInstance_0().l21_1));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.n21_1 = new Rect(0.0, 0.0, 0.0, 0.0);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_1();
    this.o21_1 = left;
    this.p21_1 = top;
    this.q21_1 = right;
    this.r21_1 = bottom;
    this.s21_1 = 0;
  }
  protoOf(Rect).t21 = function () {
    return this.q21_1 - this.o21_1;
  };
  protoOf(Rect).u21 = function () {
    return this.r21_1 - this.p21_1;
  };
  protoOf(Rect).v21 = function (offset) {
    return new Rect(this.o21_1 + _Offset___get_x__impl__xvi35n(offset), this.p21_1 + _Offset___get_y__impl__8bzhra(offset), this.q21_1 + _Offset___get_x__impl__xvi35n(offset), this.r21_1 + _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(Rect).w21 = function (translateX, translateY) {
    return new Rect(this.o21_1 + translateX, this.p21_1 + translateY, this.q21_1 + translateX, this.r21_1 + translateY);
  };
  protoOf(Rect).toString = function () {
    return 'Rect.fromLTRB(' + (toStringAsFixed(this.o21_1, 1) + ', ') + (toStringAsFixed(this.p21_1, 1) + ', ') + (toStringAsFixed(this.q21_1, 1) + ', ') + (toStringAsFixed(this.r21_1, 1) + ')');
  };
  protoOf(Rect).hashCode = function () {
    var result = getNumberHashCode(this.o21_1);
    result = imul(result, 31) + getNumberHashCode(this.p21_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q21_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r21_1) | 0;
    return result;
  };
  protoOf(Rect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rect))
      return false;
    var tmp0_other_with_cast = other instanceof Rect ? other : THROW_CCE();
    if (!equals(this.o21_1, tmp0_other_with_cast.o21_1))
      return false;
    if (!equals(this.p21_1, tmp0_other_with_cast.p21_1))
      return false;
    if (!equals(this.q21_1, tmp0_other_with_cast.q21_1))
      return false;
    if (!equals(this.r21_1, tmp0_other_with_cast.r21_1))
      return false;
    return true;
  };
  function Rect_0(offset, size) {
    return new Rect(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset), _Offset___get_x__impl__xvi35n(offset) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(offset) + _Size___get_height__impl__a04p02(size));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.x21_1 = RoundRect_1(0.0, 0.0, 0.0, 0.0, Companion_getInstance().b21_1);
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RoundRect(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) {
    Companion_getInstance_2();
    topLeftCornerRadius = topLeftCornerRadius === VOID ? Companion_getInstance().b21_1 : topLeftCornerRadius;
    topRightCornerRadius = topRightCornerRadius === VOID ? Companion_getInstance().b21_1 : topRightCornerRadius;
    bottomRightCornerRadius = bottomRightCornerRadius === VOID ? Companion_getInstance().b21_1 : bottomRightCornerRadius;
    bottomLeftCornerRadius = bottomLeftCornerRadius === VOID ? Companion_getInstance().b21_1 : bottomLeftCornerRadius;
    this.y21_1 = left;
    this.z21_1 = top;
    this.a22_1 = right;
    this.b22_1 = bottom;
    this.c22_1 = topLeftCornerRadius;
    this.d22_1 = topRightCornerRadius;
    this.e22_1 = bottomRightCornerRadius;
    this.f22_1 = bottomLeftCornerRadius;
    this.g22_1 = null;
    this.h22_1 = 0;
  }
  protoOf(RoundRect).t21 = function () {
    return this.a22_1 - this.y21_1;
  };
  protoOf(RoundRect).u21 = function () {
    return this.b22_1 - this.z21_1;
  };
  protoOf(RoundRect).toString = function () {
    var tlRadius = this.c22_1;
    var trRadius = this.d22_1;
    var brRadius = this.e22_1;
    var blRadius = this.f22_1;
    var rect = toStringAsFixed(this.y21_1, 1) + ', ' + (toStringAsFixed(this.z21_1, 1) + ', ') + (toStringAsFixed(this.a22_1, 1) + ', ') + toStringAsFixed(this.b22_1, 1);
    if ((equals(tlRadius, trRadius) ? equals(trRadius, brRadius) : false) ? equals(brRadius, blRadius) : false) {
      if (_CornerRadius___get_x__impl__1594cn(tlRadius) === _CornerRadius___get_y__impl__tyvleu(tlRadius)) {
        return 'RoundRect(rect=' + rect + ', radius=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ')';
      }
      return 'RoundRect(rect=' + rect + ', x=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ', ' + ('y=' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu(tlRadius), 1) + ')');
    }
    return 'RoundRect(' + ('rect=' + rect + ', ') + ('topLeft=' + new CornerRadius(tlRadius) + ', ') + ('topRight=' + new CornerRadius(trRadius) + ', ') + ('bottomRight=' + new CornerRadius(brRadius) + ', ') + ('bottomLeft=' + new CornerRadius(blRadius) + ')');
  };
  protoOf(RoundRect).hashCode = function () {
    var result = getNumberHashCode(this.y21_1);
    result = imul(result, 31) + getNumberHashCode(this.z21_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.a22_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b22_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.c22_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.d22_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.e22_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.f22_1) | 0;
    return result;
  };
  protoOf(RoundRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundRect))
      return false;
    var tmp0_other_with_cast = other instanceof RoundRect ? other : THROW_CCE();
    if (!equals(this.y21_1, tmp0_other_with_cast.y21_1))
      return false;
    if (!equals(this.z21_1, tmp0_other_with_cast.z21_1))
      return false;
    if (!equals(this.a22_1, tmp0_other_with_cast.a22_1))
      return false;
    if (!equals(this.b22_1, tmp0_other_with_cast.b22_1))
      return false;
    if (!equals(this.c22_1, tmp0_other_with_cast.c22_1))
      return false;
    if (!equals(this.d22_1, tmp0_other_with_cast.d22_1))
      return false;
    if (!equals(this.e22_1, tmp0_other_with_cast.e22_1))
      return false;
    if (!equals(this.f22_1, tmp0_other_with_cast.f22_1))
      return false;
    return true;
  };
  function RoundRect_0(rect, topLeft, topRight, bottomRight, bottomLeft) {
    topLeft = topLeft === VOID ? Companion_getInstance().b21_1 : topLeft;
    topRight = topRight === VOID ? Companion_getInstance().b21_1 : topRight;
    bottomRight = bottomRight === VOID ? Companion_getInstance().b21_1 : bottomRight;
    bottomLeft = bottomLeft === VOID ? Companion_getInstance().b21_1 : bottomLeft;
    return new RoundRect(rect.o21_1, rect.p21_1, rect.q21_1, rect.r21_1, topLeft, topRight, bottomRight, bottomLeft);
  }
  function RoundRect_1(left, top, right, bottom, cornerRadius) {
    return RoundRect_2(left, top, right, bottom, _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius));
  }
  function RoundRect_2(left, top, right, bottom, radiusX, radiusY) {
    var radius = CornerRadius_0(radiusX, radiusY);
    return new RoundRect(left, top, right, bottom, radius, radius, radius, radius);
  }
  function get_isSimple(_this__u8e3s4) {
    return (((((_CornerRadius___get_x__impl__1594cn(_this__u8e3s4.c22_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.c22_1) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.c22_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.d22_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.c22_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.d22_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.c22_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.e22_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.c22_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.e22_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.c22_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.f22_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.c22_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.f22_1) : false;
  }
  function _Size___init__impl__aywn0g(packedValue) {
    return packedValue;
  }
  function _Size___get_packedValue__impl__7rlt1o($this) {
    return $this;
  }
  function _Size___get_width__impl__58y75t($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().j22_1))) {
      // Inline function 'androidx.compose.ui.geometry.Size.<get-width>.<anonymous>' call
      var message = 'Size is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp1_unpackFloat1 = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat1.y5(32).z5();
    return floatFromBits(tmp1_fromBits);
  }
  function _Size___get_height__impl__a04p02($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().j22_1))) {
      // Inline function 'androidx.compose.ui.geometry.Size.<get-height>.<anonymous>' call
      var message = 'Size is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp1_unpackFloat2 = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat2.m6(new Long(-1, 0)).z5();
    return floatFromBits(tmp1_fromBits);
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.i22_1 = Size_0(0.0, 0.0);
    var tmp = this;
    FloatCompanionObject_getInstance();
    FloatCompanionObject_getInstance();
    tmp.j22_1 = Size_0(NaN, NaN);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function _Size___get_minDimension__impl__4iso0r($this) {
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp0_get_absoluteValue_aog79f = _Size___get_width__impl__58y75t($this);
    var tmp2_min = Math.abs(tmp0_get_absoluteValue_aog79f);
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp1_get_absoluteValue_on85xe = _Size___get_height__impl__a04p02($this);
    var tmp3_min = Math.abs(tmp1_get_absoluteValue_on85xe);
    return Math.min(tmp2_min, tmp3_min);
  }
  function Size__toString_impl_o87ni8($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    if (!_Size___get_packedValue__impl__7rlt1o($this).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_3().j22_1))) {
      tmp = 'Size(' + toStringAsFixed(_Size___get_width__impl__58y75t($this), 1) + ', ' + toStringAsFixed(_Size___get_height__impl__a04p02($this), 1) + ')';
    } else {
      tmp = 'Size.Unspecified';
    }
    return tmp;
  }
  function Size__hashCode_impl_2h1qpd($this) {
    return $this.hashCode();
  }
  function Size__equals_impl_gzcc1f($this, other) {
    if (!(other instanceof Size))
      return false;
    var tmp0_other_with_cast = other instanceof Size ? other.k22_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Size(packedValue) {
    Companion_getInstance_3();
    this.k22_1 = packedValue;
  }
  protoOf(Size).toString = function () {
    return Size__toString_impl_o87ni8(this.k22_1);
  };
  protoOf(Size).hashCode = function () {
    return Size__hashCode_impl_2h1qpd(this.k22_1);
  };
  protoOf(Size).equals = function (other) {
    return Size__equals_impl_gzcc1f(this.k22_1, other);
  };
  function toRect_0(_this__u8e3s4) {
    return Rect_0(Companion_getInstance_0().j21_1, _this__u8e3s4);
  }
  function Size_0(width, height) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(width));
    var v2 = toLong(toBits(height));
    tmp$ret$0 = v1.a6(32).sd(v2.m6(new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$0);
  }
  function get_center(_this__u8e3s4) {
    return Offset_0(_Size___get_width__impl__58y75t(_this__u8e3s4) / 2.0, _Size___get_height__impl__a04p02(_this__u8e3s4) / 2.0);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CornerRadius_0;
  _.$_$.b = CornerRadius;
  _.$_$.c = MutableRect;
  _.$_$.d = Offset_0;
  _.$_$.e = Offset;
  _.$_$.f = Rect_0;
  _.$_$.g = Rect;
  _.$_$.h = RoundRect_0;
  _.$_$.i = RoundRect;
  _.$_$.j = Size_0;
  _.$_$.k = Size;
  _.$_$.l = get_center;
  _.$_$.m = get_isFinite;
  _.$_$.n = get_isSimple;
  _.$_$.o = toRect;
  _.$_$.p = toRect_0;
  _.$_$.q = _CornerRadius___get_x__impl__1594cn;
  _.$_$.r = _CornerRadius___get_y__impl__tyvleu;
  _.$_$.s = Offset__getDistanceSquared_impl_97mhi6;
  _.$_$.t = Offset__getDistance_impl_pclvxn;
  _.$_$.u = Offset__hashCode_impl_hbql41;
  _.$_$.v = Offset__minus_impl_hoj2c0;
  _.$_$.w = Offset__plus_impl_c78cg0;
  _.$_$.x = Offset__unaryMinus_impl_ssu2iv;
  _.$_$.y = _Offset___get_x__impl__xvi35n;
  _.$_$.z = _Offset___get_y__impl__8bzhra;
  _.$_$.a1 = Size__hashCode_impl_2h1qpd;
  _.$_$.b1 = _Size___get_height__impl__a04p02;
  _.$_$.c1 = _Size___get_minDimension__impl__4iso0r;
  _.$_$.d1 = _Size___get_packedValue__impl__7rlt1o;
  _.$_$.e1 = _Size___get_width__impl__58y75t;
  _.$_$.f1 = Companion_getInstance;
  _.$_$.g1 = Companion_getInstance_0;
  _.$_$.h1 = Companion_getInstance_1;
  _.$_$.i1 = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-ui-geometry.js.map
