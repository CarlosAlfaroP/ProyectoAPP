(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui-geometry.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui-geometry.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-unit'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-ui-unit'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-unit'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'compose-multiplatform-core-ui-unit'.");
    }
    root['compose-multiplatform-core-ui-unit'] = factory(typeof this['compose-multiplatform-core-ui-unit'] === 'undefined' ? {} : this['compose-multiplatform-core-ui-unit'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui-geometry']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_geometry) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var Long = kotlin_kotlin.$_$.h9;
  var toString = kotlin_kotlin.$_$.j7;
  var VOID = kotlin_kotlin.$_$.na;
  var protoOf = kotlin_kotlin.$_$.f7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var toLong = kotlin_kotlin.$_$.h7;
  var objectMeta = kotlin_kotlin.$_$.e7;
  var setMetadataFor = kotlin_kotlin.$_$.g7;
  var THROW_CCE = kotlin_kotlin.$_$.m9;
  var classMeta = kotlin_kotlin.$_$.g6;
  var coerceIn = kotlin_kotlin.$_$.u7;
  var equals = kotlin_kotlin.$_$.j6;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var interfaceMeta = kotlin_kotlin.$_$.t6;
  var getNumberHashCode = kotlin_kotlin.$_$.n6;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.g2;
  var floatFromBits = kotlin_kotlin.$_$.l6;
  var compareTo = kotlin_kotlin.$_$.h6;
  var isNaN_0 = kotlin_kotlin.$_$.v9;
  var Comparable = kotlin_kotlin.$_$.c9;
  var toBits = kotlin_kotlin.$_$.ga;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Unit_getInstance = kotlin_kotlin.$_$.m2;
  var Enum = kotlin_kotlin.$_$.d9;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Constraints, 'Constraints', classMeta);
  function toPx(_this__u8e3s4) {
    return _Dp___get_value__impl__geb1vb(_this__u8e3s4) * this.g23();
  }
  function toPx_0(_this__u8e3s4) {
    // Inline function 'kotlin.check' call
    var tmp0_check = equals(_TextUnit___get_type__impl__uc2olt(_this__u8e3s4), Companion_getInstance_7().l23_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.Density.toPx.<anonymous>' call
      tmp$ret$0 = 'Only Sp can convert to Px';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4) * this.h23() * this.g23();
  }
  function toSize(_this__u8e3s4) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    tmp$ret$0 = !_DpSize___get_packedValue__impl__jx4au8(_this__u8e3s4).equals(_DpSize___get_packedValue__impl__jx4au8(Companion_getInstance_1().p23_1));
    if (tmp$ret$0) {
      tmp = Size(this.i23(_DpSize___get_width__impl__o3d5gt(_this__u8e3s4)), this.i23(_DpSize___get_height__impl__5xueo2(_this__u8e3s4)));
    } else {
      tmp = Companion_getInstance().j22_1;
    }
    return tmp;
  }
  setMetadataFor(Density, 'Density', interfaceMeta);
  setMetadataFor(DensityImpl, 'DensityImpl', classMeta, VOID, [Density]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Dp, 'Dp', classMeta, VOID, [Comparable]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(IntOffset, 'IntOffset', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(IntRect, 'IntRect', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(IntSize, 'IntSize', classMeta);
  setMetadataFor(LayoutDirection, 'LayoutDirection', classMeta, Enum);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(TextUnit, 'TextUnit', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(TextUnitType, 'TextUnitType', classMeta);
  //endregion
  function bitsNeedForSize($this, size) {
    var tmp;
    if (size < 8191) {
      tmp = 13;
    } else if (size < 32767) {
      tmp = 15;
    } else if (size < 65535) {
      tmp = 16;
    } else if (size < 262143) {
      tmp = 18;
    } else {
      throw IllegalArgumentException_init_$Create$("Can't represent a size of " + size + ' in ' + 'Constraints');
    }
    return tmp;
  }
  function _Constraints___init__impl__v8ud31(value) {
    return value;
  }
  function _Constraints___get_value__impl__3ah2ax($this) {
    return $this;
  }
  function _get_focusIndex__7g9rf3($this) {
    var tmp = _Constraints___get_value__impl__3ah2ax($this);
    Companion_getInstance_0();
    return tmp.m6(new Long(3, 0)).z5();
  }
  function _Constraints___get_minWidth__impl__hi9lfi($this) {
    var mask = Companion_getInstance_0().a23_1[_get_focusIndex__7g9rf3($this)];
    return _Constraints___get_value__impl__3ah2ax($this).y5(2).z5() & mask;
  }
  function _Constraints___get_maxWidth__impl__uuyqc($this) {
    var mask = Companion_getInstance_0().a23_1[_get_focusIndex__7g9rf3($this)];
    var width = _Constraints___get_value__impl__3ah2ax($this).y5(33).z5() & mask;
    var tmp;
    if (width === 0) {
      Companion_getInstance_0();
      tmp = 2147483647;
    } else {
      tmp = width - 1 | 0;
    }
    return tmp;
  }
  function _Constraints___get_minHeight__impl__ev4bgx($this) {
    var focus = _get_focusIndex__7g9rf3($this);
    var mask = Companion_getInstance_0().b23_1[focus];
    var offset = Companion_getInstance_0().z22_1[focus];
    return _Constraints___get_value__impl__3ah2ax($this).y5(offset).z5() & mask;
  }
  function _Constraints___get_maxHeight__impl__dt3e8z($this) {
    var focus = _get_focusIndex__7g9rf3($this);
    var mask = Companion_getInstance_0().b23_1[focus];
    var offset = Companion_getInstance_0().z22_1[focus] + 31 | 0;
    var height = _Constraints___get_value__impl__3ah2ax($this).y5(offset).z5() & mask;
    var tmp;
    if (height === 0) {
      Companion_getInstance_0();
      tmp = 2147483647;
    } else {
      tmp = height - 1 | 0;
    }
    return tmp;
  }
  function _Constraints___get_hasBoundedWidth__impl__7hd0wr($this) {
    var mask = Companion_getInstance_0().a23_1[_get_focusIndex__7g9rf3($this)];
    return !((_Constraints___get_value__impl__3ah2ax($this).y5(33).z5() & mask) === 0);
  }
  function _Constraints___get_hasBoundedHeight__impl__bsh4rw($this) {
    var focus = _get_focusIndex__7g9rf3($this);
    var mask = Companion_getInstance_0().b23_1[focus];
    var offset = Companion_getInstance_0().z22_1[focus] + 31 | 0;
    return !((_Constraints___get_value__impl__3ah2ax($this).y5(offset).z5() & mask) === 0);
  }
  function Constraints__copy_impl_ivfv3y($this, minWidth, maxWidth, minHeight, maxHeight) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(minHeight >= 0 ? minWidth >= 0 : false)) {
      // Inline function 'androidx.compose.ui.unit.Constraints.copy.<anonymous>' call
      var message = 'minHeight(' + minHeight + ') and minWidth(' + minWidth + ') must be >= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp;
    if (maxWidth >= minWidth) {
      tmp = true;
    } else {
      Companion_getInstance_0();
      tmp = maxWidth === 2147483647;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.ui.unit.Constraints.copy.<anonymous>' call
      var message_0 = 'maxWidth(' + maxWidth + ') must be >= minWidth(' + minWidth + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp_0;
    if (maxHeight >= minHeight) {
      tmp_0 = true;
    } else {
      Companion_getInstance_0();
      tmp_0 = maxHeight === 2147483647;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp_0) {
      // Inline function 'androidx.compose.ui.unit.Constraints.copy.<anonymous>' call
      var message_1 = 'maxHeight(' + maxHeight + ') must be >= minHeight(' + minHeight + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    return Companion_getInstance_0().c23(minWidth, maxWidth, minHeight, maxHeight);
  }
  function Constraints__copy$default_impl_f452rp($this, minWidth, maxWidth, minHeight, maxHeight, $super) {
    minWidth = minWidth === VOID ? _Constraints___get_minWidth__impl__hi9lfi($this) : minWidth;
    maxWidth = maxWidth === VOID ? _Constraints___get_maxWidth__impl__uuyqc($this) : maxWidth;
    minHeight = minHeight === VOID ? _Constraints___get_minHeight__impl__ev4bgx($this) : minHeight;
    maxHeight = maxHeight === VOID ? _Constraints___get_maxHeight__impl__dt3e8z($this) : maxHeight;
    var tmp;
    if ($super === VOID) {
      tmp = Constraints__copy_impl_ivfv3y($this, minWidth, maxWidth, minHeight, maxHeight);
    } else {
      var tmp_0 = new Constraints($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Constraints(tmp_1)).e23.call(tmp_0, minWidth, maxWidth, minHeight, maxHeight).d23_1;
    }
    return tmp;
  }
  function Constraints__toString_impl_37yskr($this) {
    var maxWidth = _Constraints___get_maxWidth__impl__uuyqc($this);
    var tmp;
    Companion_getInstance_0();
    if (maxWidth === 2147483647) {
      tmp = 'Infinity';
    } else {
      tmp = maxWidth.toString();
    }
    var maxWidthStr = tmp;
    var maxHeight = _Constraints___get_maxHeight__impl__dt3e8z($this);
    var tmp_0;
    Companion_getInstance_0();
    if (maxHeight === 2147483647) {
      tmp_0 = 'Infinity';
    } else {
      tmp_0 = maxHeight.toString();
    }
    var maxHeightStr = tmp_0;
    return 'Constraints(minWidth = ' + _Constraints___get_minWidth__impl__hi9lfi($this) + ', maxWidth = ' + maxWidthStr + ', ' + ('minHeight = ' + _Constraints___get_minHeight__impl__ev4bgx($this) + ', maxHeight = ' + maxHeightStr + ')');
  }
  function Companion() {
    Companion_instance = this;
    this.l22_1 = 2147483647;
    this.m22_1 = new Long(0, 0);
    this.n22_1 = new Long(1, 0);
    this.o22_1 = new Long(2, 0);
    this.p22_1 = new Long(3, 0);
    this.q22_1 = new Long(3, 0);
    this.r22_1 = 16;
    this.s22_1 = 65535;
    this.t22_1 = 15;
    this.u22_1 = 32767;
    this.v22_1 = 18;
    this.w22_1 = 262143;
    this.x22_1 = 13;
    this.y22_1 = 8191;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.z22_1 = new Int32Array([18, 20, 17, 15]);
    var tmp_0 = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp_0.a23_1 = new Int32Array([65535, 262143, 32767, 8191]);
    var tmp_1 = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp_1.b23_1 = new Int32Array([32767, 8191, 65535, 262143]);
  }
  protoOf(Companion).f23 = function (width, height) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(width >= 0 ? height >= 0 : false)) {
      // Inline function 'androidx.compose.ui.unit.Companion.fixed.<anonymous>' call
      var message = 'width(' + width + ') and height(' + height + ') must be >= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.c23(width, width, height, height);
  };
  protoOf(Companion).c23 = function (minWidth, maxWidth, minHeight, maxHeight) {
    var heightVal = maxHeight === 2147483647 ? minHeight : maxHeight;
    var heightBits = bitsNeedForSize(this, heightVal);
    var widthVal = maxWidth === 2147483647 ? minWidth : maxWidth;
    var widthBits = bitsNeedForSize(this, widthVal);
    if ((widthBits + heightBits | 0) > 31) {
      throw IllegalArgumentException_init_$Create$("Can't represent a width of " + widthVal + ' and height ' + ('of ' + heightVal + ' in Constraints'));
    }
    var tmp;
    switch (widthBits) {
      case 15:
        tmp = new Long(2, 0);
        break;
      case 16:
        tmp = new Long(0, 0);
        break;
      case 13:
        tmp = new Long(3, 0);
        break;
      case 18:
        tmp = new Long(1, 0);
        break;
      default:
        throw IllegalStateException_init_$Create$('Should only have the provided constants.');
    }
    var focus = tmp;
    var maxWidthValue = maxWidth === 2147483647 ? 0 : maxWidth + 1 | 0;
    var maxHeightValue = maxHeight === 2147483647 ? 0 : maxHeight + 1 | 0;
    var minHeightOffset = this.z22_1[focus.z5()];
    var maxHeightOffset = minHeightOffset + 31 | 0;
    var value = focus.sd(toLong(minWidth).a6(2)).sd(toLong(maxWidthValue).a6(33)).sd(toLong(minHeight).a6(minHeightOffset)).sd(toLong(maxHeightValue).a6(maxHeightOffset));
    return _Constraints___init__impl__v8ud31(value);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Constraints__hashCode_impl_ij7484($this) {
    return $this.hashCode();
  }
  function Constraints__equals_impl_33vs20($this, other) {
    if (!(other instanceof Constraints))
      return false;
    var tmp0_other_with_cast = other instanceof Constraints ? other.d23_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Constraints(value) {
    Companion_getInstance_0();
    this.d23_1 = value;
  }
  protoOf(Constraints).toString = function () {
    return Constraints__toString_impl_37yskr(this.d23_1);
  };
  protoOf(Constraints).hashCode = function () {
    return Constraints__hashCode_impl_ij7484(this.d23_1);
  };
  protoOf(Constraints).equals = function (other) {
    return Constraints__equals_impl_33vs20(this.d23_1, other);
  };
  function Constraints_0(minWidth, maxWidth, minHeight, maxHeight) {
    minWidth = minWidth === VOID ? 0 : minWidth;
    var tmp;
    if (maxWidth === VOID) {
      Companion_getInstance_0();
      tmp = 2147483647;
    } else {
      tmp = maxWidth;
    }
    maxWidth = tmp;
    minHeight = minHeight === VOID ? 0 : minHeight;
    var tmp_0;
    if (maxHeight === VOID) {
      Companion_getInstance_0();
      tmp_0 = 2147483647;
    } else {
      tmp_0 = maxHeight;
    }
    maxHeight = tmp_0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(maxWidth >= minWidth)) {
      // Inline function 'androidx.compose.ui.unit.Constraints.<anonymous>' call
      var message = 'maxWidth(' + maxWidth + ') must be >= than minWidth(' + minWidth + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(maxHeight >= minHeight)) {
      // Inline function 'androidx.compose.ui.unit.Constraints.<anonymous>' call
      var message_0 = 'maxHeight(' + maxHeight + ') must be >= than minHeight(' + minHeight + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(minWidth >= 0 ? minHeight >= 0 : false)) {
      // Inline function 'androidx.compose.ui.unit.Constraints.<anonymous>' call
      var message_1 = 'minWidth(' + minWidth + ') and minHeight(' + minHeight + ') must be >= 0';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    return Companion_getInstance_0().c23(minWidth, maxWidth, minHeight, maxHeight);
  }
  function constrain(_this__u8e3s4, size) {
    return IntSize_0(coerceIn(_IntSize___get_width__impl__d9yl4o(size), _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4), _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4)), coerceIn(_IntSize___get_height__impl__prv63b(size), _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4), _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4)));
  }
  function Density() {
  }
  function Density_0(density, fontScale) {
    fontScale = fontScale === VOID ? 1.0 : fontScale;
    return new DensityImpl(density, fontScale);
  }
  function DensityImpl(density, fontScale) {
    this.q23_1 = density;
    this.r23_1 = fontScale;
  }
  protoOf(DensityImpl).g23 = function () {
    return this.q23_1;
  };
  protoOf(DensityImpl).h23 = function () {
    return this.r23_1;
  };
  protoOf(DensityImpl).toString = function () {
    return 'DensityImpl(density=' + this.q23_1 + ', fontScale=' + this.r23_1 + ')';
  };
  protoOf(DensityImpl).hashCode = function () {
    var result = getNumberHashCode(this.q23_1);
    result = imul(result, 31) + getNumberHashCode(this.r23_1) | 0;
    return result;
  };
  protoOf(DensityImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DensityImpl))
      return false;
    var tmp0_other_with_cast = other instanceof DensityImpl ? other : THROW_CCE();
    if (!equals(this.q23_1, tmp0_other_with_cast.q23_1))
      return false;
    if (!equals(this.r23_1, tmp0_other_with_cast.r23_1))
      return false;
    return true;
  };
  function _DpSize___init__impl__t4mur0(packedValue) {
    return packedValue;
  }
  function _DpSize___get_packedValue__impl__jx4au8($this) {
    return $this;
  }
  function _DpSize___get_width__impl__o3d5gt($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_DpSize___get_packedValue__impl__jx4au8($this).equals(_DpSize___get_packedValue__impl__jx4au8(Companion_getInstance_1().p23_1))) {
      // Inline function 'androidx.compose.ui.unit.DpSize.<get-width>.<anonymous>' call
      var message = 'DpSize is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.unit.dp' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp1_unpackFloat1 = _DpSize___get_packedValue__impl__jx4au8($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat1.y5(32).z5();
    var tmp2_get_dp_1q2bx5 = floatFromBits(tmp1_fromBits);
    return _Dp___init__impl__ms3zkb(tmp2_get_dp_1q2bx5);
  }
  function _DpSize___get_height__impl__5xueo2($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!_DpSize___get_packedValue__impl__jx4au8($this).equals(_DpSize___get_packedValue__impl__jx4au8(Companion_getInstance_1().p23_1))) {
      // Inline function 'androidx.compose.ui.unit.DpSize.<get-height>.<anonymous>' call
      var message = 'DpSize is unspecified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'androidx.compose.ui.unit.dp' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp1_unpackFloat2 = _DpSize___get_packedValue__impl__jx4au8($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp1_unpackFloat2.m6(new Long(-1, 0)).z5();
    var tmp2_get_dp_1q2bx5 = floatFromBits(tmp1_fromBits);
    return _Dp___init__impl__ms3zkb(tmp2_get_dp_1q2bx5);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_0 = _Dp___init__impl__ms3zkb(0);
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
    tmp.o23_1 = DpSize(tmp_0, tmp$ret$1);
    this.p23_1 = DpSize(Companion_getInstance_2().u23_1, Companion_getInstance_2().u23_1);
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function _Dp___init__impl__ms3zkb(value) {
    return value;
  }
  function _Dp___get_value__impl__geb1vb($this) {
    return $this;
  }
  function Dp__compareTo_impl_tlg3dl($this, other) {
    return compareTo(_Dp___get_value__impl__geb1vb($this), _Dp___get_value__impl__geb1vb(other));
  }
  function Dp__compareTo_impl_tlg3dl_0($this, other) {
    var tmp = $this.v23_1;
    return Dp__compareTo_impl_tlg3dl(tmp, other instanceof Dp ? other.v23_1 : THROW_CCE());
  }
  function Dp__toString_impl_kcddez($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (isNaN_0(_Dp___get_value__impl__geb1vb($this))) {
      tmp = 'Dp.Unspecified';
    } else {
      tmp = '' + _Dp___get_value__impl__geb1vb($this) + '.dp';
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.s23_1 = _Dp___init__impl__ms3zkb(0.0);
    var tmp = this;
    FloatCompanionObject_getInstance();
    tmp.t23_1 = _Dp___init__impl__ms3zkb(Infinity);
    var tmp_0 = this;
    FloatCompanionObject_getInstance();
    tmp_0.u23_1 = _Dp___init__impl__ms3zkb(NaN);
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Dp__hashCode_impl_sxkrra($this) {
    return getNumberHashCode($this);
  }
  function Dp__equals_impl_bc4gpq($this, other) {
    if (!(other instanceof Dp))
      return false;
    var tmp0_other_with_cast = other instanceof Dp ? other.v23_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Dp(value) {
    Companion_getInstance_2();
    this.v23_1 = value;
  }
  protoOf(Dp).w23 = function (other) {
    return Dp__compareTo_impl_tlg3dl(this.v23_1, other);
  };
  protoOf(Dp).o6 = function (other) {
    return Dp__compareTo_impl_tlg3dl_0(this, other);
  };
  protoOf(Dp).toString = function () {
    return Dp__toString_impl_kcddez(this.v23_1);
  };
  protoOf(Dp).hashCode = function () {
    return Dp__hashCode_impl_sxkrra(this.v23_1);
  };
  protoOf(Dp).equals = function (other) {
    return Dp__equals_impl_bc4gpq(this.v23_1, other);
  };
  function DpSize(width, height) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = _Dp___get_value__impl__geb1vb(width);
    var tmp1_packFloats = _Dp___get_value__impl__geb1vb(height);
    var v1 = toLong(toBits(tmp0_packFloats));
    var v2 = toLong(toBits(tmp1_packFloats));
    tmp$ret$0 = v1.a6(32).sd(v2.m6(new Long(-1, 0)));
    return _DpSize___init__impl__t4mur0(tmp$ret$0);
  }
  function _IntOffset___init__impl__rq8h7b(packedValue) {
    return packedValue;
  }
  function _IntOffset___get_packedValue__impl__982pbx($this) {
    return $this;
  }
  function _IntOffset___get_x__impl__qiqr5o($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _IntOffset___get_packedValue__impl__982pbx($this).y5(32).z5();
  }
  function _IntOffset___get_y__impl__2avpwj($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    return _IntOffset___get_packedValue__impl__982pbx($this).m6(new Long(-1, 0)).z5();
  }
  function IntOffset__toString_impl_h46d8h($this) {
    return '(' + _IntOffset___get_x__impl__qiqr5o($this) + ', ' + _IntOffset___get_y__impl__2avpwj($this) + ')';
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.x23_1 = IntOffset_0(0, 0);
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function IntOffset__hashCode_impl_w5rrxs($this) {
    return $this.hashCode();
  }
  function IntOffset__equals_impl_45wak4($this, other) {
    if (!(other instanceof IntOffset))
      return false;
    var tmp0_other_with_cast = other instanceof IntOffset ? other.y23_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function IntOffset(packedValue) {
    Companion_getInstance_3();
    this.y23_1 = packedValue;
  }
  protoOf(IntOffset).toString = function () {
    return IntOffset__toString_impl_h46d8h(this.y23_1);
  };
  protoOf(IntOffset).hashCode = function () {
    return IntOffset__hashCode_impl_w5rrxs(this.y23_1);
  };
  protoOf(IntOffset).equals = function (other) {
    return IntOffset__equals_impl_45wak4(this.y23_1, other);
  };
  function plus(_this__u8e3s4, offset) {
    return Offset(_Offset___get_x__impl__xvi35n(_this__u8e3s4) + _IntOffset___get_x__impl__qiqr5o(offset), _Offset___get_y__impl__8bzhra(_this__u8e3s4) + _IntOffset___get_y__impl__2avpwj(offset));
  }
  function minus(_this__u8e3s4, offset) {
    return Offset(_Offset___get_x__impl__xvi35n(_this__u8e3s4) - _IntOffset___get_x__impl__qiqr5o(offset), _Offset___get_y__impl__8bzhra(_this__u8e3s4) - _IntOffset___get_y__impl__2avpwj(offset));
  }
  function IntOffset_0(x, y) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$0 = toLong(x).a6(32).sd(toLong(y).m6(new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$0);
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.z23_1 = new IntRect(0, 0, 0, 0);
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function IntRect(left, top, right, bottom) {
    Companion_getInstance_4();
    this.a24_1 = left;
    this.b24_1 = top;
    this.c24_1 = right;
    this.d24_1 = bottom;
    this.e24_1 = 0;
  }
  protoOf(IntRect).f24 = function (offset) {
    return ((_IntOffset___get_x__impl__qiqr5o(offset) >= this.a24_1 ? _IntOffset___get_x__impl__qiqr5o(offset) < this.c24_1 : false) ? _IntOffset___get_y__impl__2avpwj(offset) >= this.b24_1 : false) ? _IntOffset___get_y__impl__2avpwj(offset) < this.d24_1 : false;
  };
  protoOf(IntRect).toString = function () {
    return 'IntRect.fromLTRB(' + ('' + this.a24_1 + ', ') + ('' + this.b24_1 + ', ') + ('' + this.c24_1 + ', ') + ('' + this.d24_1 + ')');
  };
  protoOf(IntRect).hashCode = function () {
    var result = this.a24_1;
    result = imul(result, 31) + this.b24_1 | 0;
    result = imul(result, 31) + this.c24_1 | 0;
    result = imul(result, 31) + this.d24_1 | 0;
    return result;
  };
  protoOf(IntRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IntRect))
      return false;
    var tmp0_other_with_cast = other instanceof IntRect ? other : THROW_CCE();
    if (!(this.a24_1 === tmp0_other_with_cast.a24_1))
      return false;
    if (!(this.b24_1 === tmp0_other_with_cast.b24_1))
      return false;
    if (!(this.c24_1 === tmp0_other_with_cast.c24_1))
      return false;
    if (!(this.d24_1 === tmp0_other_with_cast.d24_1))
      return false;
    return true;
  };
  function IntRect_0(offset, size) {
    return new IntRect(_IntOffset___get_x__impl__qiqr5o(offset), _IntOffset___get_y__impl__2avpwj(offset), _IntOffset___get_x__impl__qiqr5o(offset) + _IntSize___get_width__impl__d9yl4o(size) | 0, _IntOffset___get_y__impl__2avpwj(offset) + _IntSize___get_height__impl__prv63b(size) | 0);
  }
  function toSize_0(_this__u8e3s4) {
    return Size(_IntSize___get_width__impl__d9yl4o(_this__u8e3s4), _IntSize___get_height__impl__prv63b(_this__u8e3s4));
  }
  function _IntSize___init__impl__emcjft(packedValue) {
    return packedValue;
  }
  function _IntSize___get_packedValue__impl__uho7jf($this) {
    return $this;
  }
  function _IntSize___get_width__impl__d9yl4o($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _IntSize___get_packedValue__impl__uho7jf($this).y5(32).z5();
  }
  function _IntSize___get_height__impl__prv63b($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    return _IntSize___get_packedValue__impl__uho7jf($this).m6(new Long(-1, 0)).z5();
  }
  function IntSize__toString_impl_54w9zl($this) {
    return '' + _IntSize___get_width__impl__d9yl4o($this) + ' x ' + _IntSize___get_height__impl__prv63b($this);
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.g24_1 = _IntSize___init__impl__emcjft(new Long(0, 0));
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function IntSize__hashCode_impl_gm9mta($this) {
    return $this.hashCode();
  }
  function IntSize__equals_impl_i3v38e($this, other) {
    if (!(other instanceof IntSize))
      return false;
    var tmp0_other_with_cast = other instanceof IntSize ? other.h24_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function IntSize(packedValue) {
    Companion_getInstance_5();
    this.h24_1 = packedValue;
  }
  protoOf(IntSize).toString = function () {
    return IntSize__toString_impl_54w9zl(this.h24_1);
  };
  protoOf(IntSize).hashCode = function () {
    return IntSize__hashCode_impl_gm9mta(this.h24_1);
  };
  protoOf(IntSize).equals = function (other) {
    return IntSize__equals_impl_i3v38e(this.h24_1, other);
  };
  function IntSize_0(width, height) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$0 = toLong(width).a6(32).sd(toLong(height).m6(new Long(-1, 0)));
    return _IntSize___init__impl__emcjft(tmp$ret$0);
  }
  function toIntRect(_this__u8e3s4) {
    return IntRect_0(Companion_getInstance_3().x23_1, _this__u8e3s4);
  }
  var LayoutDirection_Ltr_instance;
  var LayoutDirection_Rtl_instance;
  var LayoutDirection_entriesInitialized;
  function LayoutDirection_initEntries() {
    if (LayoutDirection_entriesInitialized)
      return Unit_getInstance();
    LayoutDirection_entriesInitialized = true;
    LayoutDirection_Ltr_instance = new LayoutDirection('Ltr', 0);
    LayoutDirection_Rtl_instance = new LayoutDirection('Rtl', 1);
  }
  function LayoutDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LayoutDirection_Ltr_getInstance() {
    LayoutDirection_initEntries();
    return LayoutDirection_Ltr_instance;
  }
  function _TextUnit___init__impl__r5fj1s(packedValue) {
    return packedValue;
  }
  function _TextUnit___get_packedValue__impl__it60w4($this) {
    return $this;
  }
  function TextUnit__toString_impl_51ghw0($this) {
    var tmp0_subject = _TextUnit___get_type__impl__uc2olt($this);
    return equals(tmp0_subject, Companion_getInstance_7().k23_1) ? 'Unspecified' : equals(tmp0_subject, Companion_getInstance_7().l23_1) ? '' + _TextUnit___get_value__impl__hpbx0k($this) + '.sp' : equals(tmp0_subject, Companion_getInstance_7().m23_1) ? '' + _TextUnit___get_value__impl__hpbx0k($this) + '.em' : 'Invalid';
  }
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.i24_1 = [new TextUnitType(Companion_getInstance_7().k23_1), new TextUnitType(Companion_getInstance_7().l23_1), new TextUnitType(Companion_getInstance_7().m23_1)];
    var tmp_0 = this;
    var tmp_1 = new Long(0, 0);
    FloatCompanionObject_getInstance();
    tmp_0.j24_1 = pack(tmp_1, NaN);
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function _TextUnit___get_rawType__impl__tu8yq5($this) {
    return _TextUnit___get_packedValue__impl__it60w4($this).m6(new Long(0, 255));
  }
  function _TextUnit___get_type__impl__uc2olt($this) {
    return Companion_getInstance_6().i24_1[_TextUnit___get_rawType__impl__tu8yq5($this).p6(32).z5()].k24_1;
  }
  function _TextUnit___get_isSp__impl__8c3r6q($this) {
    return _TextUnit___get_rawType__impl__tu8yq5($this).equals(new Long(0, 1));
  }
  function _TextUnit___get_isEm__impl__esrmtl($this) {
    return _TextUnit___get_rawType__impl__tu8yq5($this).equals(new Long(0, 2));
  }
  function _TextUnit___get_value__impl__hpbx0k($this) {
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = _TextUnit___get_packedValue__impl__it60w4($this).m6(new Long(-1, 0)).z5();
    return floatFromBits(tmp1_fromBits);
  }
  function TextUnit__hashCode_impl_qsmeov($this) {
    return $this.hashCode();
  }
  function TextUnit__equals_impl_49w9tp($this, other) {
    if (!(other instanceof TextUnit))
      return false;
    var tmp0_other_with_cast = other instanceof TextUnit ? other.l24_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextUnit(packedValue) {
    Companion_getInstance_6();
    this.l24_1 = packedValue;
  }
  protoOf(TextUnit).toString = function () {
    return TextUnit__toString_impl_51ghw0(this.l24_1);
  };
  protoOf(TextUnit).hashCode = function () {
    return TextUnit__hashCode_impl_qsmeov(this.l24_1);
  };
  protoOf(TextUnit).equals = function (other) {
    return TextUnit__equals_impl_49w9tp(this.l24_1, other);
  };
  function get_isUnspecified(_this__u8e3s4) {
    return _TextUnit___get_rawType__impl__tu8yq5(_this__u8e3s4).equals(new Long(0, 0));
  }
  function _TextUnitType___init__impl__br87qi(type) {
    return type;
  }
  function TextUnitType__toString_impl_x93gyy($this) {
    return equals($this, Companion_getInstance_7().k23_1) ? 'Unspecified' : equals($this, Companion_getInstance_7().l23_1) ? 'Sp' : equals($this, Companion_getInstance_7().m23_1) ? 'Em' : 'Invalid';
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.k23_1 = _TextUnitType___init__impl__br87qi(new Long(0, 0));
    this.l23_1 = _TextUnitType___init__impl__br87qi(new Long(0, 1));
    this.m23_1 = _TextUnitType___init__impl__br87qi(new Long(0, 2));
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function TextUnitType__hashCode_impl_g0uo7b($this) {
    return $this.hashCode();
  }
  function TextUnitType__equals_impl_nrbaqr($this, other) {
    if (!(other instanceof TextUnitType))
      return false;
    var tmp0_other_with_cast = other instanceof TextUnitType ? other.k24_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextUnitType(type) {
    Companion_getInstance_7();
    this.k24_1 = type;
  }
  protoOf(TextUnitType).toString = function () {
    return TextUnitType__toString_impl_x93gyy(this.k24_1);
  };
  protoOf(TextUnitType).hashCode = function () {
    return TextUnitType__hashCode_impl_g0uo7b(this.k24_1);
  };
  protoOf(TextUnitType).equals = function (other) {
    return TextUnitType__equals_impl_nrbaqr(this.k24_1, other);
  };
  function get_sp(_this__u8e3s4) {
    return pack(new Long(0, 1), _this__u8e3s4);
  }
  function get_sp_0(_this__u8e3s4) {
    return pack(new Long(0, 1), _this__u8e3s4);
  }
  function checkArithmetic(a) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!get_isUnspecified(a)) {
      // Inline function 'androidx.compose.ui.unit.checkArithmetic.<anonymous>' call
      var message = 'Cannot perform operation for Unspecified type.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function pack(unitType, v) {
    return _TextUnit___init__impl__r5fj1s(unitType.sd(toLong(toBits(v)).m6(new Long(-1, 0))));
  }
  //region block: post-declaration
  protoOf(DensityImpl).i23 = toPx;
  protoOf(DensityImpl).j23 = toPx_0;
  protoOf(DensityImpl).n23 = toSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Constraints_0;
  _.$_$.b = Constraints;
  _.$_$.c = toPx;
  _.$_$.d = toPx_0;
  _.$_$.e = toSize;
  _.$_$.f = Density_0;
  _.$_$.g = Density;
  _.$_$.h = DpSize;
  _.$_$.i = Dp;
  _.$_$.j = IntOffset_0;
  _.$_$.k = IntOffset;
  _.$_$.l = IntSize_0;
  _.$_$.m = IntSize;
  _.$_$.n = TextUnit;
  _.$_$.o = checkArithmetic;
  _.$_$.p = constrain;
  _.$_$.q = get_isUnspecified;
  _.$_$.r = minus;
  _.$_$.s = pack;
  _.$_$.t = plus;
  _.$_$.u = get_sp_0;
  _.$_$.v = get_sp;
  _.$_$.w = toIntRect;
  _.$_$.x = toSize_0;
  _.$_$.y = LayoutDirection_Ltr_getInstance;
  _.$_$.z = _Constraints___get_hasBoundedHeight__impl__bsh4rw;
  _.$_$.a1 = _Constraints___get_hasBoundedWidth__impl__7hd0wr;
  _.$_$.b1 = Constraints__hashCode_impl_ij7484;
  _.$_$.c1 = _Constraints___get_maxHeight__impl__dt3e8z;
  _.$_$.d1 = _Constraints___get_maxWidth__impl__uuyqc;
  _.$_$.e1 = _Constraints___get_minHeight__impl__ev4bgx;
  _.$_$.f1 = _Constraints___get_minWidth__impl__hi9lfi;
  _.$_$.g1 = _Dp___init__impl__ms3zkb;
  _.$_$.h1 = Dp__compareTo_impl_tlg3dl;
  _.$_$.i1 = Dp__hashCode_impl_sxkrra;
  _.$_$.j1 = _Dp___get_value__impl__geb1vb;
  _.$_$.k1 = _IntOffset___get_x__impl__qiqr5o;
  _.$_$.l1 = _IntOffset___get_y__impl__2avpwj;
  _.$_$.m1 = IntSize__hashCode_impl_gm9mta;
  _.$_$.n1 = _IntSize___get_height__impl__prv63b;
  _.$_$.o1 = _IntSize___get_width__impl__d9yl4o;
  _.$_$.p1 = _TextUnit___init__impl__r5fj1s;
  _.$_$.q1 = TextUnit__hashCode_impl_qsmeov;
  _.$_$.r1 = _TextUnit___get_isEm__impl__esrmtl;
  _.$_$.s1 = _TextUnit___get_isSp__impl__8c3r6q;
  _.$_$.t1 = _TextUnit___get_packedValue__impl__it60w4;
  _.$_$.u1 = _TextUnit___get_rawType__impl__tu8yq5;
  _.$_$.v1 = _TextUnit___get_value__impl__hpbx0k;
  _.$_$.w1 = Constraints__copy$default_impl_f452rp;
  _.$_$.x1 = Companion_getInstance_0;
  _.$_$.y1 = Companion_getInstance_2;
  _.$_$.z1 = Companion_getInstance_1;
  _.$_$.a2 = Companion_getInstance_3;
  _.$_$.b2 = Companion_getInstance_4;
  _.$_$.c2 = Companion_getInstance_5;
  _.$_$.d2 = Companion_getInstance_6;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-ui-unit.js.map
