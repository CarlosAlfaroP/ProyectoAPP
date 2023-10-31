(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-ui.js', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-ui.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-runtime.js'));
  else {
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation-layout'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-foundation-layout'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation-layout'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'compose-multiplatform-core-foundation-layout'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation-layout'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-foundation-layout'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation-layout'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-foundation-layout'.");
    }
    root['compose-multiplatform-core-foundation-layout'] = factory(typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined' ? {} : this['compose-multiplatform-core-foundation-layout'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-ui'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-runtime']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.v1;
  var ParentDataModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.c1;
  var classMeta = kotlin_kotlin.$_$.g6;
  var VOID = kotlin_kotlin.$_$.na;
  var setMetadataFor = kotlin_kotlin.$_$.g7;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var THROW_CCE = kotlin_kotlin.$_$.m9;
  var isObject = kotlin_kotlin.$_$.x6;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.f2;
  var equals = kotlin_kotlin.$_$.j6;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var protoOf = kotlin_kotlin.$_$.f7;
  var objectMeta = kotlin_kotlin.$_$.e7;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f1;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e1;
  var Unit_getInstance = kotlin_kotlin.$_$.m2;
  var Placeable = kotlin_org_jetbrains_compose_ui_ui.$_$.u;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var fillArrayVal = kotlin_kotlin.$_$.k6;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.b1;
  var getNumberHashCode = kotlin_kotlin.$_$.n6;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.u1;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.t1;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.w1;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var hashCode = kotlin_kotlin.$_$.r6;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var roundToInt = kotlin_kotlin.$_$.o7;
  var coerceIn = kotlin_kotlin.$_$.u7;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c1;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.a1;
  var Enum = kotlin_kotlin.$_$.d9;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m;
  //endregion
  //region block: pre-declaration
  setMetadataFor(BoxChildDataNode, 'BoxChildDataNode', classMeta, Node, [ParentDataModifierNode, Node]);
  setMetadataFor(BoxScopeInstance, 'BoxScopeInstance', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta);
  setMetadataFor(sam$androidx_compose_ui_layout_MeasurePolicy$0_0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(FillElement, 'FillElement', classMeta, ModifierNodeElement);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(WrapContentElement, 'WrapContentElement', classMeta, ModifierNodeElement);
  setMetadataFor(FillNode, 'FillNode', classMeta, Node, [LayoutModifierNode, Node]);
  setMetadataFor(Direction, 'Direction', classMeta, Enum);
  setMetadataFor(WrapContentNode, 'WrapContentNode', classMeta, Node, [LayoutModifierNode, Node]);
  //endregion
  function get_DefaultBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return DefaultBoxMeasurePolicy;
  }
  var DefaultBoxMeasurePolicy;
  var EmptyBoxMeasurePolicy;
  function boxMeasurePolicy(alignment, propagateMinConstraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = boxMeasurePolicy$lambda(propagateMinConstraints, alignment);
    return new sam$androidx_compose_ui_layout_MeasurePolicy$0_0(tmp);
  }
  function get_matchesParentSize(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m64_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__u8e3s4, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l64_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var position = childAlignment.f3t(IntSize(placeable.b47_1, placeable.c47_1), IntSize(boxWidth, boxHeight), layoutDirection);
    _this__u8e3s4.a4o(placeable, position);
  }
  function BoxChildDataNode() {
  }
  function get_boxChildDataNode(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _this__u8e3s4.m4l();
    return tmp instanceof BoxChildDataNode ? tmp : null;
  }
  function rememberBoxMeasurePolicy$composable(alignment, propagateMinConstraints, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0.yy(-1048091512);
    sourceInformation($composer_0, 'C(rememberBoxMeasurePolicy$composable)85@3660L113:Box.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-1048091512, $changed, -1, 'androidx.compose.foundation.layout.rememberBoxMeasurePolicy$composable (Box.kt:79)');
    }
    var tmp;
    if (equals(alignment, Companion_getInstance_0().h3s_1) ? !propagateMinConstraints : false) {
      tmp = get_DefaultBoxMeasurePolicy();
    } else {
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.yy(-1124426577);
      sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = !!($composer_1.pz(alignment) | $composer_1.pz(propagateMinConstraints));
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.nz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance().sy_1) {
        // Inline function 'androidx.compose.foundation.layout.rememberBoxMeasurePolicy$composable.<anonymous>' call
        var value = boxMeasurePolicy(alignment, propagateMinConstraints);
        $composer_1.oz(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      $composer_1.zy();
      tmp = tmp0;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.zy();
    return tmp0_0;
  }
  function BoxScopeInstance() {
    BoxScopeInstance_instance = this;
  }
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    if (BoxScopeInstance_instance == null)
      new BoxScopeInstance();
    return BoxScopeInstance_instance;
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.n64_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).i4o = function (_this__u8e3s4, measurables, constraints) {
    return this.n64_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  function sam$androidx_compose_ui_layout_MeasurePolicy$0_0(function_0) {
    this.o64_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0_0).i4o = function (_this__u8e3s4, measurables, constraints) {
    return this.o64_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  function EmptyBoxMeasurePolicy$lambda($this$MeasurePolicy, _anonymous_parameter_0__qggqh8, constraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.d23_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.d23_1);
    return $this$MeasurePolicy.h47(tmp, tmp_0, VOID, EmptyBoxMeasurePolicy$lambda$lambda);
  }
  function EmptyBoxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_getInstance();
  }
  function boxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_getInstance();
  }
  function boxMeasurePolicy$lambda$lambda_0($placeable, $measurable, $this_MeasurePolicy, $boxWidth, $boxHeight, $alignment) {
    return function ($this$layout) {
      placeInBox($this$layout, $placeable, $measurable, $this_MeasurePolicy.s32(), $boxWidth, $boxHeight, $alignment);
      return Unit_getInstance();
    };
  }
  function boxMeasurePolicy$lambda$lambda_1($placeables, $measurables, $this_MeasurePolicy, $boxWidth, $boxHeight, $alignment) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp0_anonymous = tmp1;
        if (item instanceof Placeable)
          item;
        else
          THROW_CCE();
        var measurable = $measurables.l(tmp0_anonymous);
        placeInBox($this$layout, item, measurable, $this_MeasurePolicy.s32(), $boxWidth._v, $boxHeight._v, $alignment);
      }
      return Unit_getInstance();
    };
  }
  function boxMeasurePolicy$lambda($propagateMinConstraints, $alignment) {
    return function ($this$MeasurePolicy, measurables, constraints) {
      var tmp;
      if (measurables.k()) {
        var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints.d23_1);
        var tmp_1 = _Constraints___get_minHeight__impl__ev4bgx(constraints.d23_1);
        return $this$MeasurePolicy.h47(tmp_0, tmp_1, VOID, boxMeasurePolicy$lambda$lambda);
      }
      var tmp_2;
      if ($propagateMinConstraints) {
        tmp_2 = constraints.d23_1;
      } else {
        tmp_2 = Constraints__copy$default_impl_f452rp(constraints.d23_1, 0, VOID, 0);
      }
      var contentConstraints = tmp_2;
      var tmp_3;
      if (measurables.f() === 1) {
        var measurable = measurables.l(0);
        var boxWidth;
        var boxHeight;
        var placeable;
        if (!get_matchesParentSize(measurable)) {
          placeable = measurable.a47(contentConstraints);
          var tmp$ret$0;
          // Inline function 'kotlin.math.max' call
          var tmp0_max = _Constraints___get_minWidth__impl__hi9lfi(constraints.d23_1);
          var tmp1_max = placeable.b47_1;
          tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
          boxWidth = tmp$ret$0;
          var tmp$ret$1;
          // Inline function 'kotlin.math.max' call
          var tmp2_max = _Constraints___get_minHeight__impl__ev4bgx(constraints.d23_1);
          var tmp3_max = placeable.c47_1;
          tmp$ret$1 = Math.max(tmp2_max, tmp3_max);
          boxHeight = tmp$ret$1;
        } else {
          boxWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints.d23_1);
          boxHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints.d23_1);
          placeable = measurable.a47(Companion_getInstance_1().f23(_Constraints___get_minWidth__impl__hi9lfi(constraints.d23_1), _Constraints___get_minHeight__impl__ev4bgx(constraints.d23_1)));
        }
        return $this$MeasurePolicy.h47(boxWidth, boxHeight, VOID, boxMeasurePolicy$lambda$lambda_0(placeable, measurable, $this$MeasurePolicy, boxWidth, boxHeight, $alignment));
      }
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp4_arrayOfNulls = measurables.f();
      tmp$ret$2 = fillArrayVal(Array(tmp4_arrayOfNulls), null);
      var placeables = tmp$ret$2;
      var hasMatchParentSizeChildren = false;
      var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__hi9lfi(constraints.d23_1)};
      var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__ev4bgx(constraints.d23_1)};
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = measurables.f() - 1 | 0;
      var tmp_4;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.l(index);
          // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>' call
          if (!get_matchesParentSize(item)) {
            var placeable_0 = item.a47(contentConstraints);
            placeables[index] = placeable_0;
            var tmp$ret$3;
            // Inline function 'kotlin.math.max' call
            var tmp0_max_0 = boxWidth_0._v;
            var tmp1_max_0 = placeable_0.b47_1;
            tmp$ret$3 = Math.max(tmp0_max_0, tmp1_max_0);
            boxWidth_0._v = tmp$ret$3;
            var tmp$ret$4;
            // Inline function 'kotlin.math.max' call
            var tmp2_max_0 = boxHeight_0._v;
            var tmp3_max_0 = placeable_0.c47_1;
            tmp$ret$4 = Math.max(tmp2_max_0, tmp3_max_0);
            boxHeight_0._v = tmp$ret$4;
          } else {
            hasMatchParentSizeChildren = true;
          }
        }
         while (inductionVariable <= last);
        tmp_4 = Unit_getInstance();
      }
      var tmp_5;
      if (hasMatchParentSizeChildren) {
        var tmp_6;
        var tmp_7 = boxWidth_0._v;
        Companion_getInstance_1();
        if (!(tmp_7 === 2147483647)) {
          tmp_6 = boxWidth_0._v;
        } else {
          tmp_6 = 0;
        }
        var tmp0_minWidth = tmp_6;
        var tmp_8;
        var tmp_9 = boxHeight_0._v;
        Companion_getInstance_1();
        if (!(tmp_9 === 2147483647)) {
          tmp_8 = boxHeight_0._v;
        } else {
          tmp_8 = 0;
        }
        var tmp1_minHeight = tmp_8;
        var tmp2_maxWidth = boxWidth_0._v;
        var tmp3_maxHeight = boxHeight_0._v;
        var matchParentSizeConstraints = Constraints_0(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_0 = 0;
        var last_0 = measurables.f() - 1 | 0;
        var tmp_10;
        if (inductionVariable_0 <= last_0) {
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_0 = measurables.l(index_0);
            // Inline function 'androidx.compose.foundation.layout.boxMeasurePolicy.<anonymous>.<anonymous>' call
            if (get_matchesParentSize(item_0)) {
              placeables[index_0] = item_0.a47(matchParentSizeConstraints);
            }
          }
           while (inductionVariable_0 <= last_0);
          tmp_10 = Unit_getInstance();
        }
        tmp_5 = tmp_10;
      }
      var tmp_11 = boxWidth_0._v;
      var tmp_12 = boxHeight_0._v;
      return $this$MeasurePolicy.h47(tmp_11, tmp_12, VOID, boxMeasurePolicy$lambda$lambda_1(placeables, measurables, $this$MeasurePolicy, boxWidth_0, boxHeight_0, $alignment));
    };
  }
  var properties_initialized_Box_kt_kr8cbp;
  function _init_properties_Box_kt__tvzvdl() {
    if (!properties_initialized_Box_kt_kr8cbp) {
      properties_initialized_Box_kt_kr8cbp = true;
      DefaultBoxMeasurePolicy = boxMeasurePolicy(Companion_getInstance_0().h3s_1, false);
      var tmp = EmptyBoxMeasurePolicy$lambda;
      EmptyBoxMeasurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp);
    }
  }
  var FillWholeMaxWidth;
  var FillWholeMaxHeight;
  function get_FillWholeMaxSize() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxSize;
  }
  var FillWholeMaxSize;
  var WrapContentWidthCenter;
  var WrapContentWidthStart;
  var WrapContentHeightCenter;
  var WrapContentHeightTop;
  var WrapContentSizeCenter;
  var WrapContentSizeTopStart;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).p64 = function (fraction) {
    return new FillElement(Direction_Horizontal_getInstance(), fraction, 'fillMaxWidth');
  };
  protoOf(Companion).q64 = function (fraction) {
    return new FillElement(Direction_Vertical_getInstance(), fraction, 'fillMaxHeight');
  };
  protoOf(Companion).r64 = function (fraction) {
    return new FillElement(Direction_Both_getInstance(), fraction, 'fillMaxSize');
  };
  var Companion_instance;
  function Companion_getInstance_3() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function FillElement(direction, fraction, inspectorName) {
    Companion_getInstance_3();
    ModifierNodeElement.call(this);
    this.u64_1 = direction;
    this.v64_1 = fraction;
    this.w64_1 = inspectorName;
  }
  protoOf(FillElement).a1l = function () {
    return new FillNode(this.u64_1, this.v64_1);
  };
  protoOf(FillElement).x64 = function (node) {
    node.m65_1 = this.u64_1;
    node.n65_1 = this.v64_1;
  };
  protoOf(FillElement).k42 = function (node) {
    return this.x64(node instanceof FillNode ? node : THROW_CCE());
  };
  protoOf(FillElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FillElement))
      return false;
    if (!this.u64_1.equals(other.u64_1))
      return false;
    if (!(this.v64_1 === other.v64_1))
      return false;
    return true;
  };
  protoOf(FillElement).hashCode = function () {
    var result = this.u64_1.hashCode();
    result = imul(31, result) + getNumberHashCode(this.v64_1) | 0;
    return result;
  };
  function WrapContentElement$Companion$width$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0(IntOffset($align.y3s(0, _IntSize___get_width__impl__d9yl4o(size.h24_1), layoutDirection), 0));
    };
  }
  function WrapContentElement$Companion$height$lambda($align) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return new IntOffset_0(IntOffset(0, $align.b3t(0, _IntSize___get_height__impl__prv63b(size.h24_1))));
    };
  }
  function WrapContentElement$Companion$size$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0($align.f3t(Companion_getInstance_2().g24_1, size.h24_1, layoutDirection));
    };
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).o65 = function (align, unbounded) {
    var tmp = Direction_Horizontal_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$width$lambda(align), align, 'wrapContentWidth');
  };
  protoOf(Companion_0).p65 = function (align, unbounded) {
    var tmp = Direction_Vertical_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$height$lambda(align), align, 'wrapContentHeight');
  };
  protoOf(Companion_0).q65 = function (align, unbounded) {
    var tmp = Direction_Both_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$size$lambda(align), align, 'wrapContentSize');
  };
  var Companion_instance_0;
  function Companion_getInstance_4() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function WrapContentElement(direction, unbounded, alignmentCallback, align, inspectorName) {
    Companion_getInstance_4();
    ModifierNodeElement.call(this);
    this.t65_1 = direction;
    this.u65_1 = unbounded;
    this.v65_1 = alignmentCallback;
    this.w65_1 = align;
    this.x65_1 = inspectorName;
  }
  protoOf(WrapContentElement).a1l = function () {
    return new WrapContentNode(this.t65_1, this.u65_1, this.v65_1);
  };
  protoOf(WrapContentElement).y65 = function (node) {
    node.n66_1 = this.t65_1;
    node.o66_1 = this.u65_1;
    node.p66_1 = this.v65_1;
  };
  protoOf(WrapContentElement).k42 = function (node) {
    return this.y65(node instanceof WrapContentNode ? node : THROW_CCE());
  };
  protoOf(WrapContentElement).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof WrapContentElement))
      THROW_CCE();
    if (!this.t65_1.equals(other.t65_1))
      return false;
    if (!(this.u65_1 === other.u65_1))
      return false;
    if (!equals(this.w65_1, other.w65_1))
      return false;
    return true;
  };
  protoOf(WrapContentElement).hashCode = function () {
    var result = this.t65_1.hashCode();
    result = imul(31, result) + (this.u65_1 | 0) | 0;
    result = imul(31, result) + hashCode(this.w65_1) | 0;
    return result;
  };
  function FillNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.x4n($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function FillNode(direction, fraction) {
    Node.call(this);
    this.m65_1 = direction;
    this.n65_1 = fraction;
  }
  protoOf(FillNode).z46 = function (_this__u8e3s4, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) ? !this.m65_1.equals(Direction_Vertical_getInstance()) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = _Constraints___get_maxWidth__impl__uuyqc(constraints) * this.n65_1;
      tmp$ret$0 = roundToInt(tmp0_roundToInt);
      var width = coerceIn(tmp$ret$0, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
      minWidth = width;
      maxWidth = width;
    } else {
      minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      maxWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var minHeight;
    var maxHeight;
    if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints) ? !this.m65_1.equals(Direction_Horizontal_getInstance()) : false) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = _Constraints___get_maxHeight__impl__dt3e8z(constraints) * this.n65_1;
      tmp$ret$1 = roundToInt(tmp1_roundToInt);
      var height = coerceIn(tmp$ret$1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var placeable = measurable.a47(Constraints_0(minWidth, maxWidth, minHeight, maxHeight));
    var tmp = placeable.b47_1;
    var tmp_0 = placeable.c47_1;
    return _this__u8e3s4.h47(tmp, tmp_0, VOID, FillNode$measure$lambda(placeable));
  };
  var Direction_Vertical_instance;
  var Direction_Horizontal_instance;
  var Direction_Both_instance;
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_Vertical_instance = new Direction('Vertical', 0);
    Direction_Horizontal_instance = new Direction('Horizontal', 1);
    Direction_Both_instance = new Direction('Both', 2);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function WrapContentNode$measure$lambda(this$0, $wrapperWidth, $placeable, $wrapperHeight, $this_measure) {
    return function ($this$layout) {
      var position = this$0.p66_1(new IntSize_0(IntSize($wrapperWidth - $placeable.b47_1 | 0, $wrapperHeight - $placeable.c47_1 | 0)), $this_measure.s32()).y23_1;
      $this$layout.a4o($placeable, position);
      return Unit_getInstance();
    };
  }
  function WrapContentNode(direction, unbounded, alignmentCallback) {
    Node.call(this);
    this.n66_1 = direction;
    this.o66_1 = unbounded;
    this.p66_1 = alignmentCallback;
  }
  protoOf(WrapContentNode).z46 = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_minWidth = !this.n66_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp1_minHeight = !this.n66_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp;
    if (!this.n66_1.equals(Direction_Vertical_getInstance()) ? this.o66_1 : false) {
      Companion_getInstance_1();
      tmp = 2147483647;
    } else {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.n66_1.equals(Direction_Horizontal_getInstance()) ? this.o66_1 : false) {
      Companion_getInstance_1();
      tmp_0 = 2147483647;
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints_0(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.a47(wrappedConstraints);
    var wrapperWidth = coerceIn(placeable.b47_1, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
    var wrapperHeight = coerceIn(placeable.c47_1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return _this__u8e3s4.h47(wrapperWidth, wrapperHeight, VOID, WrapContentNode$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__u8e3s4));
  };
  function fillMaxSize(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.g3t(fraction === 1.0 ? get_FillWholeMaxSize() : Companion_getInstance_3().r64(fraction));
  }
  function Direction_Vertical_getInstance() {
    Direction_initEntries();
    return Direction_Vertical_instance;
  }
  function Direction_Horizontal_getInstance() {
    Direction_initEntries();
    return Direction_Horizontal_instance;
  }
  function Direction_Both_getInstance() {
    Direction_initEntries();
    return Direction_Both_instance;
  }
  var properties_initialized_Size_kt_x7rk2r;
  function _init_properties_Size_kt__jcru8v() {
    if (!properties_initialized_Size_kt_x7rk2r) {
      properties_initialized_Size_kt_x7rk2r = true;
      FillWholeMaxWidth = Companion_getInstance_3().p64(1.0);
      FillWholeMaxHeight = Companion_getInstance_3().q64(1.0);
      FillWholeMaxSize = Companion_getInstance_3().r64(1.0);
      WrapContentWidthCenter = Companion_getInstance_4().o65(Companion_getInstance_0().u3s_1, false);
      WrapContentWidthStart = Companion_getInstance_4().o65(Companion_getInstance_0().t3s_1, false);
      WrapContentHeightCenter = Companion_getInstance_4().p65(Companion_getInstance_0().r3s_1, false);
      WrapContentHeightTop = Companion_getInstance_4().p65(Companion_getInstance_0().q3s_1, false);
      WrapContentSizeCenter = Companion_getInstance_4().q65(Companion_getInstance_0().l3s_1, false);
      WrapContentSizeTopStart = Companion_getInstance_4().q65(Companion_getInstance_0().h3s_1, false);
    }
  }
  //region block: post-declaration
  protoOf(FillElement).l3t = foldIn;
  protoOf(FillElement).m3t = all;
  protoOf(FillElement).g3t = then;
  protoOf(WrapContentElement).l3t = foldIn;
  protoOf(WrapContentElement).m3t = all;
  protoOf(WrapContentElement).g3t = then;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = fillMaxSize;
  _.$_$.b = rememberBoxMeasurePolicy$composable;
  _.$_$.c = BoxScopeInstance_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-foundation-layout.js.map
