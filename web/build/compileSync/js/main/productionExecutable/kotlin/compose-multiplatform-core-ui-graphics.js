(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-ui-unit.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-graphics'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-ui-graphics'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-graphics'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'compose-multiplatform-core-ui-graphics'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-graphics'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-ui-graphics'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-graphics'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-ui-graphics'.");
    }
    root['compose-multiplatform-core-ui-graphics'] = factory(typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined' ? {} : this['compose-multiplatform-core-ui-graphics'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-ui-unit'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var protoOf = kotlin_kotlin.$_$.f7;
  var objectMeta = kotlin_kotlin.$_$.e7;
  var VOID = kotlin_kotlin.$_$.na;
  var setMetadataFor = kotlin_kotlin.$_$.g7;
  var THROW_CCE = kotlin_kotlin.$_$.m9;
  var classMeta = kotlin_kotlin.$_$.g6;
  var Unit_getInstance = kotlin_kotlin.$_$.m2;
  var interfaceMeta = kotlin_kotlin.$_$.t6;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.c2;
  var Long = kotlin_kotlin.$_$.h9;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.b2;
  var ulongToDouble = kotlin_kotlin.$_$.ma;
  var equals = kotlin_kotlin.$_$.j6;
  var ULong__hashCode_impl_6hv2lb = kotlin_kotlin.$_$.d2;
  var toString = kotlin_kotlin.$_$.j7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var numberToInt = kotlin_kotlin.$_$.b7;
  var toLong = kotlin_kotlin.$_$.h7;
  var toRawBits = kotlin_kotlin.$_$.ia;
  var toShort = kotlin_kotlin.$_$.i7;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.g2;
  var floatFromBits = kotlin_kotlin.$_$.l6;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var isFinite = kotlin_kotlin.$_$.u9;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var trimIndent = kotlin_kotlin.$_$.w8;
  var get_PI = kotlin_kotlin.$_$.k7;
  var hashCode = kotlin_kotlin.$_$.r6;
  var _CornerRadius___get_x__impl__1594cn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.z9;
  var CornerRadius = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var Offset__hashCode_impl_hbql41 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u;
  var getNumberHashCode = kotlin_kotlin.$_$.n6;
  var charSequenceLength = kotlin_kotlin.$_$.e6;
  var toBits = kotlin_kotlin.$_$.ga;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var getStringHashCode = kotlin_kotlin.$_$.q6;
  var withSign = kotlin_kotlin.$_$.p7;
  var compareTo = kotlin_kotlin.$_$.h6;
  var objectCreate = kotlin_kotlin.$_$.d7;
  var coerceIn = kotlin_kotlin.$_$.t7;
  var arrayCopy = kotlin_kotlin.$_$.d3;
  var coerceIn_0 = kotlin_kotlin.$_$.s7;
  var contentEquals = kotlin_kotlin.$_$.l3;
  var contentHashCode = kotlin_kotlin.$_$.n3;
  var isNaN_0 = kotlin_kotlin.$_$.w9;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var toPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c;
  var toPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f;
  var get_center = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var CornerRadius_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b;
  var Density_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var BlendMode_SRC_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r1;
  var BlendMode_LUMINOSITY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g1;
  var BlendMode_COLOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u;
  var BlendMode_SATURATION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l1;
  var BlendMode_HUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e1;
  var BlendMode_MULTIPLY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i1;
  var BlendMode_EXCLUSION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c1;
  var BlendMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w;
  var BlendMode_SOFT_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n1;
  var BlendMode_HARD_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d1;
  var BlendMode_COLOR_BURN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s;
  var BlendMode_COLOR_DODGE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t;
  var BlendMode_LIGHTEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f1;
  var BlendMode_DARKEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v;
  var BlendMode_OVERLAY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j1;
  var BlendMode_SCREEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m1;
  var BlendMode_MODULATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h1;
  var BlendMode_PLUS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k1;
  var BlendMode_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t1;
  var BlendMode_DST_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x;
  var BlendMode_SRC_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o1;
  var BlendMode_DST_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z;
  var BlendMode_SRC_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q1;
  var BlendMode_DST_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y;
  var BlendMode_SRC_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p1;
  var BlendMode_DST_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a1;
  var BlendMode_DST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b1;
  var BlendMode_SRC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s1;
  var BlendMode_CLEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r;
  var Companion_getInstance_3 = kotlin_org_jetbrains_skiko_skiko.$_$.p7;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.o7;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.l7;
  var ClipMode_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v1;
  var ClipMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u1;
  var Matrix44 = kotlin_org_jetbrains_skiko_skiko.$_$.g8;
  var FilterMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c2;
  var MipmapMode_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e2;
  var FilterMipmap = kotlin_org_jetbrains_skiko_skiko.$_$.e8;
  var CubicResampler = kotlin_org_jetbrains_skiko_skiko.$_$.d8;
  var FilterMode_LINEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b2;
  var MipmapMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d2;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k1;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l1;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var Canvas_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.x6;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f2;
  var PaintMode_STROKE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g2;
  var PaintStrokeCap_BUTT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h2;
  var PaintStrokeCap_SQUARE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j2;
  var PaintStrokeCap_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i2;
  var PaintStrokeJoin_MITER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l2;
  var PaintStrokeJoin_BEVEL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k2;
  var PaintStrokeJoin_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m2;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.z6;
  var PathOp_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u2;
  var PathOp_REVERSE_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s2;
  var PathOp_UNION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t2;
  var PathOp_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r2;
  var PathOp_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q2;
  var Path_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.a7;
  var PathFillMode_WINDING_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p2;
  var PathFillMode_EVEN_ODD_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o2;
  var PathDirection_COUNTER_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n2;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.m7;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.n7;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.q1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.e7;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.f7;
  var ColorType_RGBA_F16_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z1;
  var ColorType_RGB_565_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a2;
  var ColorType_ALPHA_8_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y1;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.g7;
  var ColorAlphaType_OPAQUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w1;
  var ColorAlphaType_PREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x1;
  var ColorInfo = kotlin_org_jetbrains_skiko_skiko.$_$.c8;
  var ImageInfo = kotlin_org_jetbrains_skiko_skiko.$_$.f8;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.w6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(BlendMode, 'BlendMode', classMeta);
  setMetadataFor(Brush, 'Brush', classMeta);
  setMetadataFor(ShaderBrush, 'ShaderBrush', classMeta, Brush);
  setMetadataFor(SolidColor, 'SolidColor', classMeta, Brush);
  function clipRect(rect, clipOp) {
    return this.y2q(rect.o21_1, rect.p21_1, rect.q21_1, rect.r21_1, clipOp);
  }
  function clipRect$default(rect, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_12().b2r_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.x2q(rect, clipOp);
      tmp = Unit_getInstance();
    } else {
      clipRect(rect, clipOp);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function clipPath$default(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_12().b2r_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.c2r(path, clipOp);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.c2r.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  function drawRect(rect, paint) {
    return this.f2r(rect.o21_1, rect.p21_1, rect.q21_1, rect.r21_1, paint);
  }
  setMetadataFor(Canvas, 'Canvas', interfaceMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ClipOp, 'ClipOp', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Color, 'Color', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(ColorFilter, 'ColorFilter', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(ImageBitmapConfig, 'ImageBitmapConfig', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(Matrix, 'Matrix', classMeta);
  setMetadataFor(Outline, 'Outline', classMeta);
  setMetadataFor(Rectangle, 'Rectangle', classMeta, Outline);
  setMetadataFor(Rounded, 'Rounded', classMeta, Outline);
  setMetadataFor(Generic, 'Generic', classMeta, Outline);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  function addPath$default(path, offset, $super) {
    offset = offset === VOID ? Companion_getInstance().j21_1 : offset;
    var tmp;
    if ($super === VOID) {
      this.g2w(path, offset);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.g2w.call(this, path, new Offset_0(offset));
    }
    return tmp;
  }
  setMetadataFor(Path, 'Path', interfaceMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(RectangleShape$1, VOID, classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(Shadow, 'Shadow', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(StrokeCap, 'StrokeCap', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(StrokeJoin, 'StrokeJoin', classMeta);
  setMetadataFor(Adaptation, 'Adaptation', classMeta);
  setMetadataFor(Adaptation$Companion$Bradford$1, VOID, classMeta, Adaptation);
  setMetadataFor(Adaptation$Companion$VonKries$1, VOID, classMeta, Adaptation);
  setMetadataFor(Adaptation$Companion$Ciecat02$1, VOID, classMeta, Adaptation);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(ColorModel, 'ColorModel', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(ColorSpace, 'ColorSpace', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(ColorSpaces, 'ColorSpaces', objectMeta);
  setMetadataFor(Connector, 'Connector', classMeta);
  setMetadataFor(Connector$Companion$identity$1, VOID, classMeta, Connector);
  setMetadataFor(RgbConnector, 'RgbConnector', classMeta, Connector);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(Illuminant, 'Illuminant', objectMeta);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(Lab, 'Lab', classMeta, ColorSpace);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(Oklab, 'Oklab', classMeta, ColorSpace);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', classMeta);
  setMetadataFor(Rgb, 'Rgb', classMeta, ColorSpace);
  setMetadataFor(TransferParameters, 'TransferParameters', classMeta);
  setMetadataFor(WhitePoint, 'WhitePoint', classMeta);
  setMetadataFor(Xyz, 'Xyz', classMeta, ColorSpace);
  setMetadataFor(DrawParams, 'DrawParams', classMeta);
  setMetadataFor(CanvasDrawScope$drawContext$1, VOID, classMeta);
  function get_center_0() {
    return get_center(this.t32().y31());
  }
  function get_size() {
    return this.t32().y31();
  }
  function drawRect$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().j21_1 : topLeft;
    size = size === VOID ? offsetSize(this.y31(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_33().u2v_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.c2w(brush, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.c2w.call(this, brush, new Offset_0(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRect$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().j21_1 : topLeft;
    size = size === VOID ? offsetSize(this.y31(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_33().u2v_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.z2v(color, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.z2v.call(this, new Color(color), new Offset_0(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    this.x32(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode);
  }
  function drawImage$default(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality, $super) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().x23_1 : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.t21(), image.u21()) : srcSize;
    dstOffset = dstOffset === VOID ? Companion_getInstance_1().x23_1 : dstOffset;
    dstSize = dstSize === VOID ? srcSize : dstSize;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_33().u2v_1 : blendMode;
    filterQuality = filterQuality === VOID ? Companion_getInstance_33().v2v_1 : filterQuality;
    var tmp;
    if ($super === VOID) {
      this.w32(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_getInstance();
    } else {
      drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function drawRoundRect$default(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().j21_1 : topLeft;
    size = size === VOID ? offsetSize(this.y31(), this, topLeft) : size;
    cornerRadius = cornerRadius === VOID ? Companion_getInstance_2().b21_1 : cornerRadius;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_33().u2v_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.b2w(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.b2w.call(this, brush, new Offset_0(topLeft), new Size_0(size), new CornerRadius_0(cornerRadius), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default(path, color, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_33().u2v_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.x2v(path, color, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.x2v.call(this, path, new Color(color), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default_0(path, brush, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_33().u2v_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.a2w(path, brush, alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.a2w.call(this, path, brush, alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  setMetadataFor(DrawScope, 'DrawScope', interfaceMeta, VOID, [Density_0]);
  setMetadataFor(CanvasDrawScope, 'CanvasDrawScope', classMeta, VOID, [DrawScope]);
  setMetadataFor(asDrawTransform$1, VOID, classMeta);
  setMetadataFor(DrawStyle, 'DrawStyle', classMeta);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(Fill, 'Fill', objectMeta, DrawStyle);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(Stroke, 'Stroke', classMeta, DrawStyle);
  setMetadataFor(EmptyCanvas, 'EmptyCanvas', classMeta, VOID, [Canvas]);
  setMetadataFor(SkiaBackedCanvas, 'SkiaBackedCanvas', classMeta, VOID, [Canvas]);
  setMetadataFor(SkiaBackedPaint, 'SkiaBackedPaint', classMeta);
  setMetadataFor(SkiaBackedPath, 'SkiaBackedPath', classMeta, VOID, [Path]);
  setMetadataFor(SkiaBackedPathEffect, 'SkiaBackedPathEffect', classMeta);
  setMetadataFor(SkiaBackedImageBitmap, 'SkiaBackedImageBitmap', classMeta);
  //endregion
  function _BlendMode___init__impl__q6jalh(value) {
    return value;
  }
  function Companion() {
    Companion_instance = this;
    this.m2p_1 = _BlendMode___init__impl__q6jalh(0);
    this.n2p_1 = _BlendMode___init__impl__q6jalh(1);
    this.o2p_1 = _BlendMode___init__impl__q6jalh(2);
    this.p2p_1 = _BlendMode___init__impl__q6jalh(3);
    this.q2p_1 = _BlendMode___init__impl__q6jalh(4);
    this.r2p_1 = _BlendMode___init__impl__q6jalh(5);
    this.s2p_1 = _BlendMode___init__impl__q6jalh(6);
    this.t2p_1 = _BlendMode___init__impl__q6jalh(7);
    this.u2p_1 = _BlendMode___init__impl__q6jalh(8);
    this.v2p_1 = _BlendMode___init__impl__q6jalh(9);
    this.w2p_1 = _BlendMode___init__impl__q6jalh(10);
    this.x2p_1 = _BlendMode___init__impl__q6jalh(11);
    this.y2p_1 = _BlendMode___init__impl__q6jalh(12);
    this.z2p_1 = _BlendMode___init__impl__q6jalh(13);
    this.a2q_1 = _BlendMode___init__impl__q6jalh(14);
    this.b2q_1 = _BlendMode___init__impl__q6jalh(15);
    this.c2q_1 = _BlendMode___init__impl__q6jalh(16);
    this.d2q_1 = _BlendMode___init__impl__q6jalh(17);
    this.e2q_1 = _BlendMode___init__impl__q6jalh(18);
    this.f2q_1 = _BlendMode___init__impl__q6jalh(19);
    this.g2q_1 = _BlendMode___init__impl__q6jalh(20);
    this.h2q_1 = _BlendMode___init__impl__q6jalh(21);
    this.i2q_1 = _BlendMode___init__impl__q6jalh(22);
    this.j2q_1 = _BlendMode___init__impl__q6jalh(23);
    this.k2q_1 = _BlendMode___init__impl__q6jalh(24);
    this.l2q_1 = _BlendMode___init__impl__q6jalh(25);
    this.m2q_1 = _BlendMode___init__impl__q6jalh(26);
    this.n2q_1 = _BlendMode___init__impl__q6jalh(27);
    this.o2q_1 = _BlendMode___init__impl__q6jalh(28);
  }
  var Companion_instance;
  function Companion_getInstance_11() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function BlendMode__toString_impl_uuibkd($this) {
    return $this === Companion_getInstance_11().m2p_1 ? 'Clear' : $this === Companion_getInstance_11().n2p_1 ? 'Src' : $this === Companion_getInstance_11().o2p_1 ? 'Dst' : $this === Companion_getInstance_11().p2p_1 ? 'SrcOver' : $this === Companion_getInstance_11().q2p_1 ? 'DstOver' : $this === Companion_getInstance_11().r2p_1 ? 'SrcIn' : $this === Companion_getInstance_11().s2p_1 ? 'DstIn' : $this === Companion_getInstance_11().t2p_1 ? 'SrcOut' : $this === Companion_getInstance_11().u2p_1 ? 'DstOut' : $this === Companion_getInstance_11().v2p_1 ? 'SrcAtop' : $this === Companion_getInstance_11().w2p_1 ? 'DstAtop' : $this === Companion_getInstance_11().x2p_1 ? 'Xor' : $this === Companion_getInstance_11().y2p_1 ? 'Plus' : $this === Companion_getInstance_11().z2p_1 ? 'Modulate' : $this === Companion_getInstance_11().a2q_1 ? 'Screen' : $this === Companion_getInstance_11().b2q_1 ? 'Overlay' : $this === Companion_getInstance_11().c2q_1 ? 'Darken' : $this === Companion_getInstance_11().d2q_1 ? 'Lighten' : $this === Companion_getInstance_11().e2q_1 ? 'ColorDodge' : $this === Companion_getInstance_11().f2q_1 ? 'ColorBurn' : $this === Companion_getInstance_11().g2q_1 ? 'HardLight' : $this === Companion_getInstance_11().h2q_1 ? 'Softlight' : $this === Companion_getInstance_11().i2q_1 ? 'Difference' : $this === Companion_getInstance_11().j2q_1 ? 'Exclusion' : $this === Companion_getInstance_11().k2q_1 ? 'Multiply' : $this === Companion_getInstance_11().l2q_1 ? 'Hue' : $this === Companion_getInstance_11().m2q_1 ? 'Saturation' : $this === Companion_getInstance_11().n2q_1 ? 'Color' : $this === Companion_getInstance_11().o2q_1 ? 'Luminosity' : 'Unknown';
  }
  function BlendMode__hashCode_impl_93ceri($this) {
    return $this;
  }
  function BlendMode__equals_impl_1tm25i($this, other) {
    if (!(other instanceof BlendMode))
      return false;
    if (!($this === (other instanceof BlendMode ? other.p2q_1 : THROW_CCE())))
      return false;
    return true;
  }
  function BlendMode(value) {
    Companion_getInstance_11();
    this.p2q_1 = value;
  }
  protoOf(BlendMode).toString = function () {
    return BlendMode__toString_impl_uuibkd(this.p2q_1);
  };
  protoOf(BlendMode).hashCode = function () {
    return BlendMode__hashCode_impl_93ceri(this.p2q_1);
  };
  protoOf(BlendMode).equals = function (other) {
    return BlendMode__equals_impl_1tm25i(this.p2q_1, other);
  };
  function Brush() {
  }
  function ShaderBrush() {
  }
  function SolidColor() {
  }
  function Canvas() {
  }
  function Canvas_0(image) {
    return ActualCanvas(image);
  }
  function _ClipOp___init__impl__pqwwy8(value) {
    return value;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.a2r_1 = _ClipOp___init__impl__pqwwy8(0);
    this.b2r_1 = _ClipOp___init__impl__pqwwy8(1);
  }
  var Companion_instance_0;
  function Companion_getInstance_12() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ClipOp__toString_impl_vwrlao($this) {
    return $this === Companion_getInstance_12().a2r_1 ? 'Difference' : $this === Companion_getInstance_12().b2r_1 ? 'Intersect' : 'Unknown';
  }
  function ClipOp__hashCode_impl_hd6jvl($this) {
    return $this;
  }
  function ClipOp__equals_impl_g5ajel($this, other) {
    if (!(other instanceof ClipOp))
      return false;
    if (!($this === (other instanceof ClipOp ? other.j2r_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ClipOp(value) {
    Companion_getInstance_12();
    this.j2r_1 = value;
  }
  protoOf(ClipOp).toString = function () {
    return ClipOp__toString_impl_vwrlao(this.j2r_1);
  };
  protoOf(ClipOp).hashCode = function () {
    return ClipOp__hashCode_impl_hd6jvl(this.j2r_1);
  };
  protoOf(ClipOp).equals = function (other) {
    return ClipOp__equals_impl_g5ajel(this.j2r_1, other);
  };
  function _Color___init__impl__r6cqi2(value) {
    return value;
  }
  function _Color___get_value__impl__1pls5m($this) {
    return $this;
  }
  function _Color___get_colorSpace__impl__jqqozk($this) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.ColorSpaces.getColorSpace' call
    var tmp2_getColorSpace = ColorSpaces_getInstance();
    // Inline function 'kotlin.ULong.toInt' call
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    var tmp1_toInt = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    var tmp3_getColorSpace = _ULong___get_data__impl__fggpzb(tmp1_toInt).z5();
    return tmp2_getColorSpace.g2s_1[tmp3_getColorSpace];
  }
  function Color__convert_impl_so5m8t($this, colorSpace) {
    var thisColorSpace = _Color___get_colorSpace__impl__jqqozk($this);
    if (colorSpace.equals(thisColorSpace)) {
      return $this;
    }
    var connector = connect(thisColorSpace, colorSpace);
    return connector.n2s(_Color___get_red__impl__cwrsk6($this), _Color___get_green__impl__bta9rs($this), _Color___get_blue__impl__xwez13($this), _Color___get_alpha__impl__wcfyv1($this));
  }
  function _Color___get_red__impl__cwrsk6($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      var tmp2_and = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).p6(48));
      var tmp3_toFloat = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      // Inline function 'kotlin.ULong.toDouble' call
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat)) / 255.0;
    } else {
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toShort' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      var tmp5_and = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).p6(48));
      var tmp6_toShort = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp6_toShort).ud();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_green__impl__bta9rs($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      var tmp2_and = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).p6(40));
      var tmp3_toFloat = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      // Inline function 'kotlin.ULong.toDouble' call
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat)) / 255.0;
    } else {
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toShort' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      var tmp5_and = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).p6(32));
      var tmp6_toShort = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp6_toShort).ud();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_blue__impl__xwez13($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      var tmp2_and = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).p6(32));
      var tmp3_toFloat = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      // Inline function 'kotlin.ULong.toDouble' call
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat)) / 255.0;
    } else {
      var tmp$ret$7;
      // Inline function 'kotlin.ULong.toShort' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      var tmp5_and = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).p6(16));
      var tmp6_toShort = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
      tmp$ret$7 = _ULong___get_data__impl__fggpzb(tmp6_toShort).ud();
      tmp = Float16__toFloat_impl_6i8dal(_Float16___init__impl__fckrew(tmp$ret$7));
    }
    return tmp;
  }
  function _Color___get_alpha__impl__wcfyv1($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.and' call
    var tmp0_and = _Color___get_value__impl__1pls5m($this);
    tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var tmp1_shr = _Color___get_value__impl__1pls5m($this);
      var tmp2_and = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shr).p6(56));
      var tmp3_toFloat = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(255, 0)))));
      // Inline function 'kotlin.ULong.toDouble' call
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp3_toFloat)) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.toFloat' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var tmp4_shr = _Color___get_value__impl__1pls5m($this);
      var tmp5_and = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4_shr).p6(6));
      var tmp6_toFloat = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp5_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1023, 0)))));
      // Inline function 'kotlin.ULong.toDouble' call
      tmp = ulongToDouble(_ULong___get_data__impl__fggpzb(tmp6_toFloat)) / 1023.0;
    }
    return tmp;
  }
  function Color__copy_impl_qlvcl1($this, alpha, red, green, blue) {
    return Color_0(red, green, blue, alpha, _Color___get_colorSpace__impl__jqqozk($this));
  }
  function Color__copy$default_impl_ectz3s($this, alpha, red, green, blue, $super) {
    alpha = alpha === VOID ? _Color___get_alpha__impl__wcfyv1($this) : alpha;
    red = red === VOID ? _Color___get_red__impl__cwrsk6($this) : red;
    green = green === VOID ? _Color___get_green__impl__bta9rs($this) : green;
    blue = blue === VOID ? _Color___get_blue__impl__xwez13($this) : blue;
    var tmp;
    if ($super === VOID) {
      tmp = Color__copy_impl_qlvcl1($this, alpha, red, green, blue);
    } else {
      var tmp_0 = new Color($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Color(tmp_1)).p2s.call(tmp_0, alpha, red, green, blue).o2s_1;
    }
    return tmp;
  }
  function Color__toString_impl_hpzmaq($this) {
    return 'Color(' + _Color___get_red__impl__cwrsk6($this) + ', ' + _Color___get_green__impl__bta9rs($this) + ', ' + _Color___get_blue__impl__xwez13($this) + ', ' + _Color___get_alpha__impl__wcfyv1($this) + ', ' + _Color___get_colorSpace__impl__jqqozk($this).q2s_1 + ')';
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.t2s_1 = Color_1(new Long(-16777216, 0));
    this.u2s_1 = Color_1(new Long(-12303292, 0));
    this.v2s_1 = Color_1(new Long(-7829368, 0));
    this.w2s_1 = Color_1(new Long(-3355444, 0));
    this.x2s_1 = Color_1(new Long(-1, 0));
    this.y2s_1 = Color_1(new Long(-65536, 0));
    this.z2s_1 = Color_1(new Long(-16711936, 0));
    this.a2t_1 = Color_1(new Long(-16776961, 0));
    this.b2t_1 = Color_1(new Long(-256, 0));
    this.c2t_1 = Color_1(new Long(-16711681, 0));
    this.d2t_1 = Color_1(new Long(-65281, 0));
    this.e2t_1 = Color_3(0);
    this.f2t_1 = Color_0(0.0, 0.0, 0.0, 0.0, ColorSpaces_getInstance().e2s_1);
  }
  var Companion_instance_1;
  function Companion_getInstance_13() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Color__hashCode_impl_vjyivj($this) {
    return ULong__hashCode_impl_6hv2lb($this);
  }
  function Color__equals_impl_k06uqz($this, other) {
    if (!(other instanceof Color))
      return false;
    var tmp0_other_with_cast = other instanceof Color ? other.o2s_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Color(value) {
    Companion_getInstance_13();
    this.o2s_1 = value;
  }
  protoOf(Color).toString = function () {
    return Color__toString_impl_hpzmaq(this.o2s_1);
  };
  protoOf(Color).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.o2s_1);
  };
  protoOf(Color).equals = function (other) {
    return Color__equals_impl_k06uqz(this.o2s_1, other);
  };
  function toArgb(_this__u8e3s4) {
    // Inline function 'kotlin.ULong.toInt' call
    // Inline function 'kotlin.ULong.shr' call
    var tmp0_shr = _Color___get_value__impl__1pls5m(Color__convert_impl_so5m8t(_this__u8e3s4, ColorSpaces_getInstance().o2r_1));
    var tmp1_toInt = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shr).p6(32));
    return _ULong___get_data__impl__fggpzb(tmp1_toInt).z5();
  }
  function Color_0(red, green, blue, alpha, colorSpace) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().o2r_1 : colorSpace;
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0;
    var tmp_1;
    var containsLower = colorSpace.g2t(0);
    if (red <= colorSpace.h2t(0) ? containsLower <= red : false) {
      var containsLower_0 = colorSpace.g2t(1);
      tmp_1 = green <= colorSpace.h2t(1) ? containsLower_0 <= green : false;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var containsLower_1 = colorSpace.g2t(2);
      tmp_0 = blue <= colorSpace.h2t(2) ? containsLower_1 <= blue : false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = 0.0 <= alpha ? alpha <= 1.0 : false;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var message = 'red = ' + red + ', green = ' + green + ', blue = ' + blue + ', alpha = ' + alpha + ' outside the range for ' + colorSpace;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (colorSpace.i2t()) {
      var argb = numberToInt(alpha * 255.0 + 0.5) << 24 | numberToInt(red * 255.0 + 0.5) << 16 | numberToInt(green * 255.0 + 0.5) << 8 | numberToInt(blue * 255.0 + 0.5);
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.shl' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.toULong' call
      var tmp1_and = _ULong___init__impl__c78o9k(toLong(argb));
      var tmp2_shl = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(-1, 0)))));
      tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp2_shl).a6(32));
      return _Color___init__impl__r6cqi2(tmp$ret$3);
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(colorSpace.j2t() === 3)) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var message_0 = 'Color only works with ColorSpaces with 3 components';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var id = colorSpace.s2s_1;
    // Inline function 'kotlin.require' call
    Companion_getInstance_27();
    // Inline function 'kotlin.contracts.contract' call
    if (!!(id === -1)) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var message_1 = 'Unknown color space, please use a color space in ColorSpaces';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var r = _Float16___init__impl__fckrew_0(red);
    var g = _Float16___init__impl__fckrew_0(green);
    var b = _Float16___init__impl__fckrew_0(blue);
    var tmp$ret$7;
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.min' call
    var tmp5_max = Math.min(alpha, 1.0);
    tmp$ret$7 = Math.max(0.0, tmp5_max);
    var a = numberToInt(tmp$ret$7 * 1023.0 + 0.5);
    var tmp$ret$25;
    // Inline function 'kotlin.ULong.or' call
    // Inline function 'kotlin.ULong.or' call
    // Inline function 'kotlin.ULong.or' call
    // Inline function 'kotlin.ULong.or' call
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var tmp6_toULong = _Float16___get_halfValue__impl__89tmwx(r);
    var tmp7_and = _ULong___init__impl__c78o9k(toLong(tmp6_toULong));
    var tmp8_shl = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp7_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
    var tmp12_or = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp8_shl).a6(48));
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var tmp9_toULong = _Float16___get_halfValue__impl__89tmwx(g);
    var tmp10_and = _ULong___init__impl__c78o9k(toLong(tmp9_toULong));
    var tmp11_shl = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp10_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
    var tmp13_or = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp11_shl).a6(32));
    var tmp17_or = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp12_or).sd(_ULong___get_data__impl__fggpzb(tmp13_or)));
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var tmp14_toULong = _Float16___get_halfValue__impl__89tmwx(b);
    var tmp15_and = _ULong___init__impl__c78o9k(toLong(tmp14_toULong));
    var tmp16_shl = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp15_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(65535, 0)))));
    var tmp18_or = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp16_shl).a6(16));
    var tmp21_or = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp17_or).sd(_ULong___get_data__impl__fggpzb(tmp18_or)));
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var tmp19_and = _ULong___init__impl__c78o9k(toLong(a));
    var tmp20_shl = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp19_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(1023, 0)))));
    var tmp22_or = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp20_shl).a6(6));
    var tmp24_or = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp21_or).sd(_ULong___get_data__impl__fggpzb(tmp22_or)));
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var tmp23_and = _ULong___init__impl__c78o9k(toLong(id));
    var tmp25_or = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp23_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(63, 0)))));
    tmp$ret$25 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp24_or).sd(_ULong___get_data__impl__fggpzb(tmp25_or)));
    return _Color___init__impl__r6cqi2(tmp$ret$25);
  }
  function Color_1(color) {
    var tmp$ret$2;
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var tmp0_and = _ULong___init__impl__c78o9k(color);
    var tmp1_shl = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_and).m6(_ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(-1, 0)))));
    tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1_shl).a6(32));
    return _Color___init__impl__r6cqi2(tmp$ret$2);
  }
  function compositeOver(_this__u8e3s4, background) {
    var fg = Color__convert_impl_so5m8t(_this__u8e3s4, _Color___get_colorSpace__impl__jqqozk(background));
    var bgA = _Color___get_alpha__impl__wcfyv1(background);
    var fgA = _Color___get_alpha__impl__wcfyv1(fg);
    var a = fgA + bgA * (1.0 - fgA);
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var tmp0_compositeComponent = _Color___get_red__impl__cwrsk6(fg);
    var tmp1_compositeComponent = _Color___get_red__impl__cwrsk6(background);
    var r = a === 0.0 ? 0.0 : (tmp0_compositeComponent * fgA + tmp1_compositeComponent * bgA * (1.0 - fgA)) / a;
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var tmp2_compositeComponent = _Color___get_green__impl__bta9rs(fg);
    var tmp3_compositeComponent = _Color___get_green__impl__bta9rs(background);
    var g = a === 0.0 ? 0.0 : (tmp2_compositeComponent * fgA + tmp3_compositeComponent * bgA * (1.0 - fgA)) / a;
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var tmp4_compositeComponent = _Color___get_blue__impl__xwez13(fg);
    var tmp5_compositeComponent = _Color___get_blue__impl__xwez13(background);
    var b = a === 0.0 ? 0.0 : (tmp4_compositeComponent * fgA + tmp5_compositeComponent * bgA * (1.0 - fgA)) / a;
    return Color_0(r, g, b, a, _Color___get_colorSpace__impl__jqqozk(background));
  }
  function Color_2(red, green, blue, alpha) {
    alpha = alpha === VOID ? 255 : alpha;
    var color = (alpha & 255) << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255;
    return Color_3(color);
  }
  function Color_3(color) {
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.toULong' call
    var tmp0_shl = _ULong___init__impl__c78o9k(toLong(color));
    tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0_shl).a6(32));
    return _Color___init__impl__r6cqi2(tmp$ret$1);
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).k2t = function (color, blendMode) {
    return actualTintColorFilter(color, blendMode);
  };
  protoOf(Companion_2).l2t = function (color, blendMode, $super) {
    blendMode = blendMode === VOID ? Companion_getInstance_11().r2p_1 : blendMode;
    return $super === VOID ? this.k2t(color, blendMode) : $super.k2t.call(this, new Color(color), new BlendMode(blendMode));
  };
  var Companion_instance_2;
  function Companion_getInstance_14() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ColorFilter(nativeColorFilter) {
    Companion_getInstance_14();
    this.m2t_1 = nativeColorFilter;
  }
  function _FilterQuality___init__impl__nv51aq(value) {
    return value;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.n2t_1 = _FilterQuality___init__impl__nv51aq(0);
    this.o2t_1 = _FilterQuality___init__impl__nv51aq(1);
    this.p2t_1 = _FilterQuality___init__impl__nv51aq(2);
    this.q2t_1 = _FilterQuality___init__impl__nv51aq(3);
  }
  var Companion_instance_3;
  function Companion_getInstance_15() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function floatToHalf($this, f) {
    var bits = toRawBits(f);
    var s = bits >>> 31 | 0;
    var e = (bits >>> 23 | 0) & 255;
    var m = bits & 8388607;
    var outE = 0;
    var outM = 0;
    if (e === 255) {
      outE = 31;
      outM = !(m === 0) ? 512 : 0;
    } else {
      e = (e - 127 | 0) + 15 | 0;
      if (e >= 31) {
        outE = 49;
      } else if (e <= 0) {
        if (e >= -10) {
          m = (m | 8388608) >> (1 - e | 0);
          if (!((m & 4096) === 0))
            m = m + 8192 | 0;
          outM = m >> 13;
        }
      } else {
        outE = e;
        outM = m >> 13;
        if (!((m & 4096) === 0)) {
          var out = outE << 10 | outM;
          out = out + 1 | 0;
          return toShort(out | s << 15);
        }
      }
    }
    return toShort(s << 15 | outE << 10 | outM);
  }
  function _Float16___init__impl__fckrew(halfValue) {
    return halfValue;
  }
  function _Float16___get_halfValue__impl__89tmwx($this) {
    return $this;
  }
  function _Float16___init__impl__fckrew_0(value) {
    return _Float16___init__impl__fckrew(floatToHalf(Companion_getInstance_16(), value));
  }
  function Float16__toFloat_impl_6i8dal($this) {
    var bits = _Float16___get_halfValue__impl__89tmwx($this) & 65535;
    Companion_getInstance_16();
    var s = bits & 32768;
    Companion_getInstance_16();
    var tmp = bits >>> 10 | 0;
    Companion_getInstance_16();
    var e = tmp & 31;
    Companion_getInstance_16();
    var m = bits & 1023;
    var outE = 0;
    var outM = 0;
    if (e === 0) {
      if (!(m === 0)) {
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        Companion_getInstance_16();
        var tmp1_fromBits = 1056964608 + m | 0;
        var o = floatFromBits(tmp1_fromBits);
        o = o - Companion_getInstance_16().v2u_1;
        return s === 0 ? o : -o;
      }
    } else {
      outM = m << 13;
      if (e === 31) {
        outE = 255;
        if (!(outM === 0)) {
          var tmp_0 = outM;
          Companion_getInstance_16();
          outM = tmp_0 | 4194304;
        }
      } else {
        Companion_getInstance_16();
        var tmp_1 = e - 15 | 0;
        Companion_getInstance_16();
        outE = tmp_1 + 127 | 0;
      }
    }
    var tmp_2 = s << 16;
    var tmp_3 = outE;
    Companion_getInstance_16();
    var out = tmp_2 | tmp_3 << 23 | outM;
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(out);
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.r2t_1 = 16;
    this.s2t_1 = _Float16___init__impl__fckrew(5120);
    this.t2t_1 = 15;
    this.u2t_1 = -14;
    this.v2t_1 = _Float16___init__impl__fckrew(-1025);
    this.w2t_1 = _Float16___init__impl__fckrew(31743);
    this.x2t_1 = _Float16___init__impl__fckrew(1024);
    this.y2t_1 = _Float16___init__impl__fckrew(1);
    this.z2t_1 = _Float16___init__impl__fckrew(32256);
    this.a2u_1 = _Float16___init__impl__fckrew(-1024);
    this.b2u_1 = _Float16___init__impl__fckrew(-32768);
    this.c2u_1 = _Float16___init__impl__fckrew(31744);
    this.d2u_1 = _Float16___init__impl__fckrew(0);
    this.e2u_1 = _Float16___init__impl__fckrew_0(1.0);
    this.f2u_1 = _Float16___init__impl__fckrew_0(-1.0);
    this.g2u_1 = 15;
    this.h2u_1 = 32768;
    this.i2u_1 = 10;
    this.j2u_1 = 31;
    this.k2u_1 = 1023;
    this.l2u_1 = 15;
    this.m2u_1 = 32767;
    this.n2u_1 = 31744;
    this.o2u_1 = 31;
    this.p2u_1 = 23;
    this.q2u_1 = 255;
    this.r2u_1 = 8388607;
    this.s2u_1 = 127;
    this.t2u_1 = 4194304;
    this.u2u_1 = 1056964608;
    var tmp = this;
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = 1056964608;
    tmp.v2u_1 = floatFromBits(tmp1_fromBits);
  }
  var Companion_instance_4;
  function Companion_getInstance_16() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function _ImageBitmapConfig___init__impl__wfx9yl(value) {
    return value;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.w2u_1 = _ImageBitmapConfig___init__impl__wfx9yl(0);
    this.x2u_1 = _ImageBitmapConfig___init__impl__wfx9yl(1);
    this.y2u_1 = _ImageBitmapConfig___init__impl__wfx9yl(2);
    this.z2u_1 = _ImageBitmapConfig___init__impl__wfx9yl(3);
    this.a2v_1 = _ImageBitmapConfig___init__impl__wfx9yl(4);
  }
  var Companion_instance_5;
  function Companion_getInstance_17() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function ImageBitmapConfig__toString_impl_dfv42d($this) {
    return $this === Companion_getInstance_17().w2u_1 ? 'Argb8888' : $this === Companion_getInstance_17().x2u_1 ? 'Alpha8' : $this === Companion_getInstance_17().y2u_1 ? 'Rgb565' : $this === Companion_getInstance_17().z2u_1 ? 'F16' : $this === Companion_getInstance_17().a2v_1 ? 'Gpu' : 'Unknown';
  }
  function ImageBitmapConfig__hashCode_impl_8basqi($this) {
    return $this;
  }
  function ImageBitmapConfig__equals_impl_hqcsv2($this, other) {
    if (!(other instanceof ImageBitmapConfig))
      return false;
    if (!($this === (other instanceof ImageBitmapConfig ? other.b2v_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ImageBitmapConfig(value) {
    Companion_getInstance_17();
    this.b2v_1 = value;
  }
  protoOf(ImageBitmapConfig).toString = function () {
    return ImageBitmapConfig__toString_impl_dfv42d(this.b2v_1);
  };
  protoOf(ImageBitmapConfig).hashCode = function () {
    return ImageBitmapConfig__hashCode_impl_8basqi(this.b2v_1);
  };
  protoOf(ImageBitmapConfig).equals = function (other) {
    return ImageBitmapConfig__equals_impl_hqcsv2(this.b2v_1, other);
  };
  function ImageBitmap(width, height, config, hasAlpha, colorSpace) {
    config = config === VOID ? Companion_getInstance_17().w2u_1 : config;
    hasAlpha = hasAlpha === VOID ? true : hasAlpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().o2r_1 : colorSpace;
    return ActualImageBitmap(width, height, config, hasAlpha, colorSpace);
  }
  function _Matrix___init__impl__q3kp4w(values) {
    var tmp;
    if (values === VOID) {
      // Inline function 'kotlin.floatArrayOf' call
      tmp = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    } else {
      tmp = values;
    }
    values = tmp;
    return values;
  }
  function _Matrix___get_values__impl__fblr7b($this) {
    return $this;
  }
  function Matrix__map_impl_7meu7m($this, point) {
    var x = _Offset___get_x__impl__xvi35n(point);
    var y = _Offset___get_y__impl__8bzhra(point);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[3] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp + _Matrix___get_values__impl__fblr7b($this)[7] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var z = tmp_0 + _Matrix___get_values__impl__fblr7b($this)[15];
    var inverseZ = 1 / z;
    var pZ = isFinite(inverseZ) ? inverseZ : 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($this)[0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = tmp_1 + _Matrix___get_values__impl__fblr7b($this)[4] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = pZ * (tmp_2 + _Matrix___get_values__impl__fblr7b($this)[12]);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b($this)[1] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = tmp_4 + _Matrix___get_values__impl__fblr7b($this)[5] * y;
    var tmp$ret$8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[13];
    return Offset(tmp_3, pZ * (tmp_5 + tmp$ret$8));
  }
  function Matrix__map_impl_7meu7m_0($this, rect) {
    var p0 = Matrix__map_impl_7meu7m($this, Offset(rect.d21_1, rect.e21_1));
    var p1 = Matrix__map_impl_7meu7m($this, Offset(rect.d21_1, rect.g21_1));
    var p3 = Matrix__map_impl_7meu7m($this, Offset(rect.f21_1, rect.e21_1));
    var p4 = Matrix__map_impl_7meu7m($this, Offset(rect.f21_1, rect.g21_1));
    var tmp = rect;
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.min' call
    var tmp0_min = _Offset___get_x__impl__xvi35n(p0);
    var tmp1_min = _Offset___get_x__impl__xvi35n(p1);
    var tmp4_min = Math.min(tmp0_min, tmp1_min);
    // Inline function 'kotlin.math.min' call
    var tmp2_min = _Offset___get_x__impl__xvi35n(p3);
    var tmp3_min = _Offset___get_x__impl__xvi35n(p4);
    var tmp5_min = Math.min(tmp2_min, tmp3_min);
    tmp.d21_1 = Math.min(tmp4_min, tmp5_min);
    var tmp_0 = rect;
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.min' call
    var tmp6_min = _Offset___get_y__impl__8bzhra(p0);
    var tmp7_min = _Offset___get_y__impl__8bzhra(p1);
    var tmp10_min = Math.min(tmp6_min, tmp7_min);
    // Inline function 'kotlin.math.min' call
    var tmp8_min = _Offset___get_y__impl__8bzhra(p3);
    var tmp9_min = _Offset___get_y__impl__8bzhra(p4);
    var tmp11_min = Math.min(tmp8_min, tmp9_min);
    tmp_0.e21_1 = Math.min(tmp10_min, tmp11_min);
    var tmp_1 = rect;
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.max' call
    var tmp12_max = _Offset___get_x__impl__xvi35n(p0);
    var tmp13_max = _Offset___get_x__impl__xvi35n(p1);
    var tmp16_max = Math.max(tmp12_max, tmp13_max);
    // Inline function 'kotlin.math.max' call
    var tmp14_max = _Offset___get_x__impl__xvi35n(p3);
    var tmp15_max = _Offset___get_x__impl__xvi35n(p4);
    var tmp17_max = Math.max(tmp14_max, tmp15_max);
    tmp_1.f21_1 = Math.max(tmp16_max, tmp17_max);
    var tmp_2 = rect;
    // Inline function 'kotlin.math.max' call
    // Inline function 'kotlin.math.max' call
    var tmp18_max = _Offset___get_y__impl__8bzhra(p0);
    var tmp19_max = _Offset___get_y__impl__8bzhra(p1);
    var tmp22_max = Math.max(tmp18_max, tmp19_max);
    // Inline function 'kotlin.math.max' call
    var tmp20_max = _Offset___get_y__impl__8bzhra(p3);
    var tmp21_max = _Offset___get_y__impl__8bzhra(p4);
    var tmp23_max = Math.max(tmp20_max, tmp21_max);
    tmp_2.g21_1 = Math.max(tmp22_max, tmp23_max);
  }
  function Matrix__timesAssign_impl_oas521($this, m) {
    var v00 = dot($this, 0, m, 0);
    var v01 = dot($this, 0, m, 1);
    var v02 = dot($this, 0, m, 2);
    var v03 = dot($this, 0, m, 3);
    var v10 = dot($this, 1, m, 0);
    var v11 = dot($this, 1, m, 1);
    var v12 = dot($this, 1, m, 2);
    var v13 = dot($this, 1, m, 3);
    var v20 = dot($this, 2, m, 0);
    var v21 = dot($this, 2, m, 1);
    var v22 = dot($this, 2, m, 2);
    var v23 = dot($this, 2, m, 3);
    var v30 = dot($this, 3, m, 0);
    var v31 = dot($this, 3, m, 1);
    var v32 = dot($this, 3, m, 2);
    var v33 = dot($this, 3, m, 3);
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[1] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[3] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[4] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[5] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[7] = v13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[8] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[9] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[10] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[11] = v23;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[12] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[13] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = v32;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[15] = v33;
  }
  function Matrix__toString_impl_l0abk0($this) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = _Matrix___get_values__impl__fblr7b($this)[1];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($this)[2];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($this)[3];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b($this)[4];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b($this)[5];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[6];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b($this)[7];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = _Matrix___get_values__impl__fblr7b($this)[8];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[9];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = _Matrix___get_values__impl__fblr7b($this)[10];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b($this)[11];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = _Matrix___get_values__impl__fblr7b($this)[12];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b($this)[13];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b($this)[14];
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$15 = _Matrix___get_values__impl__fblr7b($this)[15];
    return trimIndent('\n            |' + tmp + ' ' + tmp_0 + ' ' + tmp_1 + ' ' + tmp_2 + '|\n            |' + tmp_3 + ' ' + tmp_4 + ' ' + tmp_5 + ' ' + tmp_6 + '|\n            |' + tmp_7 + ' ' + tmp_8 + ' ' + tmp_9 + ' ' + tmp_10 + '|\n            |' + tmp_11 + ' ' + tmp_12 + ' ' + tmp_13 + ' ' + tmp$ret$15 + '|\n        ');
  }
  function Matrix__reset_impl_4l49i7($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var r = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
            var tmp0_set = c === r ? 1.0 : 0.0;
            _Matrix___get_values__impl__fblr7b($this)[imul(r, 4) + c | 0] = tmp0_set;
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
  }
  function Matrix__rotateX_impl_3e5y7j($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = degrees * get_PI() / 180.0;
    var c = Math.cos(tmp0_cos);
    // Inline function 'kotlin.math.sin' call
    var tmp1_sin = degrees * get_PI() / 180.0;
    var s = Math.sin(tmp1_sin);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[1];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[2];
    var v01 = a01 * c - a02 * s;
    var v02 = a01 * s + a02 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[5];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[6];
    var v11 = a11 * c - a12 * s;
    var v12 = a11 * s + a12 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a21 = _Matrix___get_values__impl__fblr7b($this)[9];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[10];
    var v21 = a21 * c - a22 * s;
    var v22 = a21 * s + a22 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a31 = _Matrix___get_values__impl__fblr7b($this)[13];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[14];
    var v31 = a31 * c - a32 * s;
    var v32 = a31 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[1] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[5] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[9] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[10] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[13] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = v32;
  }
  function Matrix__rotateY_impl_2x4btc($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = degrees * get_PI() / 180.0;
    var c = Math.cos(tmp0_cos);
    // Inline function 'kotlin.math.sin' call
    var tmp1_sin = degrees * get_PI() / 180.0;
    var s = Math.sin(tmp1_sin);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[2];
    var v00 = a00 * c + a02 * s;
    var v02 = -a00 * s + a02 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[4];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[6];
    var v10 = a10 * c + a12 * s;
    var v12 = -a10 * s + a12 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a20 = _Matrix___get_values__impl__fblr7b($this)[8];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[10];
    var v20 = a20 * c + a22 * s;
    var v22 = -a20 * s + a22 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a30 = _Matrix___get_values__impl__fblr7b($this)[12];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[14];
    var v30 = a30 * c + a32 * s;
    var v32 = -a30 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[4] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[8] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[10] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[12] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = v32;
  }
  function Matrix__rotateZ_impl_2g2pf5($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = degrees * get_PI() / 180.0;
    var c = Math.cos(tmp0_cos);
    // Inline function 'kotlin.math.sin' call
    var tmp1_sin = degrees * get_PI() / 180.0;
    var s = Math.sin(tmp1_sin);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[4];
    var v00 = c * a00 + s * a10;
    var v10 = -s * a00 + c * a10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[1];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[5];
    var v01 = c * a01 + s * a11;
    var v11 = -s * a01 + c * a11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[2];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[6];
    var v02 = c * a02 + s * a12;
    var v12 = -s * a02 + c * a12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a03 = _Matrix___get_values__impl__fblr7b($this)[3];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a13 = _Matrix___get_values__impl__fblr7b($this)[7];
    var v03 = c * a03 + s * a13;
    var v13 = -s * a03 + c * a13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[1] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[2] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[3] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[4] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[5] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[6] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[7] = v13;
  }
  function Matrix__scale_impl_6w89a4($this, x, y, z) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp0_set = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = tmp0_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp1_set = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = tmp1_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp2_set = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = tmp2_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp3_set = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = tmp3_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp4_set = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = tmp4_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp5_set = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = tmp5_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp6_set = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = tmp6_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp7_set = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = tmp7_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp8_set = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = tmp8_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp9_set = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = tmp9_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp10_set = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = tmp10_set;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp11_set = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] = tmp11_set;
  }
  function Matrix__scale$default_impl_snaws9($this, x, y, z, $super) {
    x = x === VOID ? 1.0 : x;
    y = y === VOID ? 1.0 : y;
    z = z === VOID ? 1.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__scale_impl_6w89a4($this, x, y, z);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = new Matrix($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Matrix(tmp_1)).d2v.call(tmp_0, x, y, z);
    }
    return tmp;
  }
  function Matrix__translate_impl_1hftog($this, x, y, z) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp + _Matrix___get_values__impl__fblr7b($this)[4] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = tmp_0 + _Matrix___get_values__impl__fblr7b($this)[8] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t1 = tmp_1 + _Matrix___get_values__impl__fblr7b($this)[12];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($this)[1] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = tmp_2 + _Matrix___get_values__impl__fblr7b($this)[5] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_3 + _Matrix___get_values__impl__fblr7b($this)[9] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t2 = tmp_4 + _Matrix___get_values__impl__fblr7b($this)[13];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[2] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = tmp_5 + _Matrix___get_values__impl__fblr7b($this)[6] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = tmp_6 + _Matrix___get_values__impl__fblr7b($this)[10] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t3 = tmp_7 + _Matrix___get_values__impl__fblr7b($this)[14];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[3] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = tmp_8 + _Matrix___get_values__impl__fblr7b($this)[7] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = tmp_9 + _Matrix___get_values__impl__fblr7b($this)[11] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t4 = tmp_10 + _Matrix___get_values__impl__fblr7b($this)[15];
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[12] = t1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[13] = t2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[14] = t3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[15] = t4;
  }
  function Matrix__translate$default_impl_10t8ql($this, x, y, z, $super) {
    x = x === VOID ? 0.0 : x;
    y = y === VOID ? 0.0 : y;
    z = z === VOID ? 0.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__translate_impl_1hftog($this, x, y, z);
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = new Matrix($this);
      var tmp_1 = $super;
      tmp = (tmp_1 == null ? null : new Matrix(tmp_1)).e2v.call(tmp_0, x, y, z);
    }
    return tmp;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.f2v_1 = 0;
    this.g2v_1 = 1;
    this.h2v_1 = 3;
    this.i2v_1 = 4;
    this.j2v_1 = 5;
    this.k2v_1 = 7;
    this.l2v_1 = 10;
    this.m2v_1 = 12;
    this.n2v_1 = 13;
    this.o2v_1 = 14;
    this.p2v_1 = 15;
  }
  var Companion_instance_6;
  function Companion_getInstance_18() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Matrix__hashCode_impl_s9ntm9($this) {
    return hashCode($this);
  }
  function Matrix__equals_impl_g5p8p9($this, other) {
    if (!(other instanceof Matrix))
      return false;
    var tmp0_other_with_cast = other instanceof Matrix ? other.c2v_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Matrix(values) {
    Companion_getInstance_18();
    this.c2v_1 = values;
  }
  protoOf(Matrix).toString = function () {
    return Matrix__toString_impl_l0abk0(this.c2v_1);
  };
  protoOf(Matrix).hashCode = function () {
    return Matrix__hashCode_impl_s9ntm9(this.c2v_1);
  };
  protoOf(Matrix).equals = function (other) {
    return Matrix__equals_impl_g5p8p9(this.c2v_1, other);
  };
  function dot(m1, row, m2, column) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp * _Matrix___get_values__impl__fblr7b(m2)[0 + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = tmp_0 + tmp_1 * _Matrix___get_values__impl__fblr7b(m2)[4 + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_2 + tmp_3 * _Matrix___get_values__impl__fblr7b(m2)[8 + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    return tmp_4 + tmp_5 * _Matrix___get_values__impl__fblr7b(m2)[12 + column | 0];
  }
  function isIdentity(_this__u8e3s4) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var row = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var column = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var expected = row === column ? 1.0 : 0.0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
            if (!(_Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(row, 4) + column | 0] === expected)) {
              return false;
            }
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
    return true;
  }
  function Rectangle(rect) {
    Outline.call(this);
    this.q2v_1 = rect;
  }
  protoOf(Rectangle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rectangle))
      return false;
    if (!this.q2v_1.equals(other.q2v_1))
      return false;
    return true;
  };
  protoOf(Rectangle).hashCode = function () {
    return this.q2v_1.hashCode();
  };
  function Rounded(roundRect) {
    Outline.call(this);
    this.r2v_1 = roundRect;
    var tmp = this;
    var tmp_0;
    if (!hasSameCornerRadius(this.r2v_1)) {
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Path_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.Rounded.<anonymous>' call
      tmp0_apply.t2v(this.r2v_1);
      tmp_0 = tmp0_apply;
    } else {
      tmp_0 = null;
    }
    tmp.s2v_1 = tmp_0;
  }
  protoOf(Rounded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rounded))
      return false;
    if (!this.r2v_1.equals(other.r2v_1))
      return false;
    return true;
  };
  protoOf(Rounded).hashCode = function () {
    return this.r2v_1.hashCode();
  };
  function Generic() {
  }
  function Outline() {
  }
  function hasSameCornerRadius(_this__u8e3s4) {
    var sameRadiusX = (_CornerRadius___get_x__impl__1594cn(_this__u8e3s4.f22_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.e22_1) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.e22_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.d22_1) : false) ? _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.d22_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.c22_1) : false;
    var sameRadiusY = (_CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.f22_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.e22_1) ? _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.e22_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.d22_1) : false) ? _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.d22_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.c22_1) : false;
    return sameRadiusX ? sameRadiusY : false;
  }
  function drawOutline(_this__u8e3s4, outline, color, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_33().u2v_1 : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var tmp0_anonymous = outline.q2v_1;
      _this__u8e3s4.z2v(color, topLeft(tmp0_anonymous), size(tmp0_anonymous), alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      if (outline instanceof Rounded) {
        var path = outline.s2v_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.x2v(path, color, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        } else {
          var tmp1_anonymous = outline.r2v_1;
          var radius = _CornerRadius___get_x__impl__1594cn(tmp1_anonymous.f22_1);
          var tmp0_topLeft = topLeft_0(tmp1_anonymous);
          var tmp1_size = size_0(tmp1_anonymous);
          var tmp2_cornerRadius = CornerRadius(radius);
          _this__u8e3s4.y2v(color, tmp0_topLeft, tmp1_size, tmp2_cornerRadius, style, alpha, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var tmp2_anonymous = outline.w2v_1;
          _this__u8e3s4.x2v(tmp2_anonymous, color, alpha, style, colorFilter, blendMode);
          tmp = Unit_getInstance();
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function drawOutline_0(_this__u8e3s4, outline, brush, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_33().u2v_1 : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var tmp0_anonymous = outline.q2v_1;
      _this__u8e3s4.c2w(brush, topLeft(tmp0_anonymous), size(tmp0_anonymous), alpha, style, colorFilter, blendMode);
      tmp = Unit_getInstance();
    } else {
      if (outline instanceof Rounded) {
        var path = outline.s2v_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.a2w(path, brush, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        } else {
          var tmp1_anonymous = outline.r2v_1;
          var radius = _CornerRadius___get_x__impl__1594cn(tmp1_anonymous.f22_1);
          _this__u8e3s4.b2w(brush, topLeft_0(tmp1_anonymous), size_0(tmp1_anonymous), CornerRadius(radius), alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var tmp2_anonymous = outline.w2v_1;
          _this__u8e3s4.a2w(tmp2_anonymous, brush, alpha, style, colorFilter, blendMode);
          tmp = Unit_getInstance();
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function topLeft(_this__u8e3s4) {
    return Offset(_this__u8e3s4.o21_1, _this__u8e3s4.p21_1);
  }
  function size(_this__u8e3s4) {
    return Size(_this__u8e3s4.t21(), _this__u8e3s4.u21());
  }
  function topLeft_0(_this__u8e3s4) {
    return Offset(_this__u8e3s4.y21_1, _this__u8e3s4.z21_1);
  }
  function size_0(_this__u8e3s4) {
    return Size(_this__u8e3s4.t21(), _this__u8e3s4.u21());
  }
  function _PaintingStyle___init__impl__pwxppo(value) {
    return value;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.d2w_1 = _PaintingStyle___init__impl__pwxppo(0);
    this.e2w_1 = _PaintingStyle___init__impl__pwxppo(1);
  }
  var Companion_instance_7;
  function Companion_getInstance_19() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Path() {
  }
  function _PathFillType___init__impl__d59lzz(value) {
    return value;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.l2w_1 = _PathFillType___init__impl__d59lzz(0);
    this.m2w_1 = _PathFillType___init__impl__d59lzz(1);
  }
  var Companion_instance_8;
  function Companion_getInstance_20() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function _PathOperation___init__impl__8ddeif(value) {
    return value;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.n2w_1 = _PathOperation___init__impl__8ddeif(0);
    this.o2w_1 = _PathOperation___init__impl__8ddeif(1);
    this.p2w_1 = _PathOperation___init__impl__8ddeif(2);
    this.q2w_1 = _PathOperation___init__impl__8ddeif(3);
    this.r2w_1 = _PathOperation___init__impl__8ddeif(4);
  }
  var Companion_instance_9;
  function Companion_getInstance_21() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function get_RectangleShape() {
    _init_properties_RectangleShape_kt__k3dd0u();
    return RectangleShape;
  }
  var RectangleShape;
  function RectangleShape$1() {
  }
  protoOf(RectangleShape$1).s2w = function (size, layoutDirection, density) {
    return new Rectangle(toRect(size));
  };
  protoOf(RectangleShape$1).toString = function () {
    return 'RectangleShape';
  };
  var properties_initialized_RectangleShape_kt_h73j90;
  function _init_properties_RectangleShape_kt__k3dd0u() {
    if (!properties_initialized_RectangleShape_kt_h73j90) {
      properties_initialized_RectangleShape_kt_h73j90 = true;
      RectangleShape = new RectangleShape$1();
    }
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.t2w_1 = new Shadow();
  }
  var Companion_instance_10;
  function Companion_getInstance_22() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function Shadow(color, offset, blurRadius) {
    Companion_getInstance_22();
    color = color === VOID ? Color_1(new Long(-16777216, 0)) : color;
    offset = offset === VOID ? Companion_getInstance().j21_1 : offset;
    blurRadius = blurRadius === VOID ? 0.0 : blurRadius;
    this.u2w_1 = color;
    this.v2w_1 = offset;
    this.w2w_1 = blurRadius;
  }
  protoOf(Shadow).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!equals(this.u2w_1, other.u2w_1))
      return false;
    if (!equals(this.v2w_1, other.v2w_1))
      return false;
    if (!(this.w2w_1 === other.w2w_1))
      return false;
    return true;
  };
  protoOf(Shadow).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.u2w_1);
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.v2w_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.w2w_1) | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(color=' + new Color(this.u2w_1) + ', offset=' + new Offset_0(this.v2w_1) + ', blurRadius=' + this.w2w_1 + ')';
  };
  function _StrokeCap___init__impl__kfgr27(value) {
    return value;
  }
  function Companion_11() {
    Companion_instance_11 = this;
    this.x2w_1 = _StrokeCap___init__impl__kfgr27(0);
    this.y2w_1 = _StrokeCap___init__impl__kfgr27(1);
    this.z2w_1 = _StrokeCap___init__impl__kfgr27(2);
  }
  var Companion_instance_11;
  function Companion_getInstance_23() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function StrokeCap__toString_impl_3xn0rd($this) {
    return $this === Companion_getInstance_23().x2w_1 ? 'Butt' : $this === Companion_getInstance_23().y2w_1 ? 'Round' : $this === Companion_getInstance_23().z2w_1 ? 'Square' : 'Unknown';
  }
  function StrokeCap__hashCode_impl_posxk8($this) {
    return $this;
  }
  function StrokeCap__equals_impl_m9bjik($this, other) {
    if (!(other instanceof StrokeCap))
      return false;
    if (!($this === (other instanceof StrokeCap ? other.a2x_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StrokeCap(value) {
    Companion_getInstance_23();
    this.a2x_1 = value;
  }
  protoOf(StrokeCap).toString = function () {
    return StrokeCap__toString_impl_3xn0rd(this.a2x_1);
  };
  protoOf(StrokeCap).hashCode = function () {
    return StrokeCap__hashCode_impl_posxk8(this.a2x_1);
  };
  protoOf(StrokeCap).equals = function (other) {
    return StrokeCap__equals_impl_m9bjik(this.a2x_1, other);
  };
  function _StrokeJoin___init__impl__ig23zz(value) {
    return value;
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.b2x_1 = _StrokeJoin___init__impl__ig23zz(0);
    this.c2x_1 = _StrokeJoin___init__impl__ig23zz(1);
    this.d2x_1 = _StrokeJoin___init__impl__ig23zz(2);
  }
  var Companion_instance_12;
  function Companion_getInstance_24() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function StrokeJoin__toString_impl_ph4e1r($this) {
    return $this === Companion_getInstance_24().b2x_1 ? 'Miter' : $this === Companion_getInstance_24().c2x_1 ? 'Round' : $this === Companion_getInstance_24().d2x_1 ? 'Bevel' : 'Unknown';
  }
  function StrokeJoin__hashCode_impl_3pyh8w($this) {
    return $this;
  }
  function StrokeJoin__equals_impl_hf9ej8($this, other) {
    if (!(other instanceof StrokeJoin))
      return false;
    if (!($this === (other instanceof StrokeJoin ? other.e2x_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StrokeJoin(value) {
    Companion_getInstance_24();
    this.e2x_1 = value;
  }
  protoOf(StrokeJoin).toString = function () {
    return StrokeJoin__toString_impl_ph4e1r(this.e2x_1);
  };
  protoOf(StrokeJoin).hashCode = function () {
    return StrokeJoin__hashCode_impl_3pyh8w(this.e2x_1);
  };
  protoOf(StrokeJoin).equals = function (other) {
    return StrokeJoin__equals_impl_hf9ej8(this.e2x_1, other);
  };
  function Adaptation$Companion$Bradford$1() {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.8951, -0.7502, 0.0389, 0.2664, 1.7135, -0.0685, -0.1614, 0.0367, 1.0296]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Bradford$1).toString = function () {
    return 'Bradford';
  };
  function Adaptation$Companion$VonKries$1() {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.40024, -0.2263, 0.0, 0.7076, 1.16532, 0.0, -0.08081, 0.0457, 0.91822]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$VonKries$1).toString = function () {
    return 'VonKries';
  };
  function Adaptation$Companion$Ciecat02$1() {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.7328, -0.7036, 0.003, 0.4296, 1.6975, 0.0136, -0.1624, 0.0061, 0.9834]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Ciecat02$1).toString = function () {
    return 'Ciecat02';
  };
  function Companion_13() {
    Companion_instance_13 = this;
    var tmp = this;
    tmp.f2x_1 = new Adaptation$Companion$Bradford$1();
    var tmp_0 = this;
    tmp_0.g2x_1 = new Adaptation$Companion$VonKries$1();
    var tmp_1 = this;
    tmp_1.h2x_1 = new Adaptation$Companion$Ciecat02$1();
  }
  var Companion_instance_13;
  function Companion_getInstance_25() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function Adaptation(transform) {
    Companion_getInstance_25();
    this.i2x_1 = transform;
  }
  function _ColorModel___init__impl__b968n9(packedValue) {
    return packedValue;
  }
  function _ColorModel___get_packedValue__impl__uvxrhj($this) {
    return $this;
  }
  function _ColorModel___get_componentCount__impl__au0uoc($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _ColorModel___get_packedValue__impl__uvxrhj($this).y5(32).z5();
  }
  function Companion_14() {
    Companion_instance_14 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$0 = new Long(0, 3);
    tmp.j2x_1 = _ColorModel___init__impl__b968n9(tmp$ret$0);
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$1 = new Long(1, 3);
    tmp_0.k2x_1 = _ColorModel___init__impl__b968n9(tmp$ret$1);
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$2 = new Long(2, 3);
    tmp_1.l2x_1 = _ColorModel___init__impl__b968n9(tmp$ret$2);
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'androidx.compose.ui.util.packInts' call
    tmp$ret$3 = new Long(3, 4);
    tmp_2.m2x_1 = _ColorModel___init__impl__b968n9(tmp$ret$3);
  }
  var Companion_instance_14;
  function Companion_getInstance_26() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function ColorModel__toString_impl_msukd7($this) {
    return equals($this, Companion_getInstance_26().j2x_1) ? 'Rgb' : equals($this, Companion_getInstance_26().k2x_1) ? 'Xyz' : equals($this, Companion_getInstance_26().l2x_1) ? 'Lab' : equals($this, Companion_getInstance_26().m2x_1) ? 'Cmyk' : 'Unknown';
  }
  function ColorModel__hashCode_impl_11onkc($this) {
    return $this.hashCode();
  }
  function ColorModel__equals_impl_dbkfqg($this, other) {
    if (!(other instanceof ColorModel))
      return false;
    var tmp0_other_with_cast = other instanceof ColorModel ? other.n2x_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function ColorModel(packedValue) {
    Companion_getInstance_26();
    this.n2x_1 = packedValue;
  }
  protoOf(ColorModel).toString = function () {
    return ColorModel__toString_impl_msukd7(this.n2x_1);
  };
  protoOf(ColorModel).hashCode = function () {
    return ColorModel__hashCode_impl_11onkc(this.n2x_1);
  };
  protoOf(ColorModel).equals = function (other) {
    return ColorModel__equals_impl_dbkfqg(this.n2x_1, other);
  };
  function Companion_15() {
    Companion_instance_15 = this;
    this.o2x_1 = -1;
    this.p2x_1 = 63;
  }
  var Companion_instance_15;
  function Companion_getInstance_27() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function ColorSpace(name, model, id) {
    Companion_getInstance_27();
    this.q2s_1 = name;
    this.r2s_1 = model;
    this.s2s_1 = id;
    // Inline function 'kotlin.text.isEmpty' call
    var tmp0_isEmpty = this.q2s_1;
    if (charSequenceLength(tmp0_isEmpty) === 0) {
      throw IllegalArgumentException_init_$Create$('The name of a color space cannot be null and must contain at least 1 character');
    }
    var tmp;
    Companion_getInstance_27();
    if (this.s2s_1 < -1) {
      tmp = true;
    } else {
      Companion_getInstance_27();
      tmp = this.s2s_1 > 63;
    }
    if (tmp) {
      Companion_getInstance_27();
      Companion_getInstance_27();
      throw IllegalArgumentException_init_$Create$('The id must be between ' + -1 + ' and ' + 63);
    }
  }
  protoOf(ColorSpace).j2t = function () {
    return _ColorModel___get_componentCount__impl__au0uoc(this.r2s_1);
  };
  protoOf(ColorSpace).i2t = function () {
    return false;
  };
  protoOf(ColorSpace).q2x = function (r, g, b) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([r, g, b]);
    return this.r2x(tmp$ret$0);
  };
  protoOf(ColorSpace).s2x = function (v0, v1, v2) {
    var xyz = this.q2x(v0, v1, v2);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = xyz[0];
    var tmp1_packFloats = xyz[1];
    var v1_0 = toLong(toBits(tmp0_packFloats));
    var v2_0 = toLong(toBits(tmp1_packFloats));
    return v1_0.a6(32).sd(v2_0.m6(new Long(-1, 0)));
  };
  protoOf(ColorSpace).t2x = function (v0, v1, v2) {
    var xyz = this.q2x(v0, v1, v2);
    return xyz[2];
  };
  protoOf(ColorSpace).u2x = function (x, y, z, a, colorSpace) {
    var colors = this.v2x(x, y, z);
    return Color_0(colors[0], colors[1], colors[2], a, colorSpace);
  };
  protoOf(ColorSpace).v2x = function (x, y, z) {
    var xyz = new Float32Array(_ColorModel___get_componentCount__impl__au0uoc(this.r2s_1));
    xyz[0] = x;
    xyz[1] = y;
    xyz[2] = z;
    return this.w2x(xyz);
  };
  protoOf(ColorSpace).toString = function () {
    return this.q2s_1 + ' (id=' + this.s2s_1 + ', model=' + new ColorModel(this.r2s_1) + ')';
  };
  protoOf(ColorSpace).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other))) {
      return false;
    }
    var that = other instanceof ColorSpace ? other : THROW_CCE();
    if (!(this.s2s_1 === that.s2s_1))
      return false;
    return !(this.q2s_1 === that.q2s_1) ? false : equals(this.r2s_1, that.r2s_1);
  };
  protoOf(ColorSpace).hashCode = function () {
    var result = getStringHashCode(this.q2s_1);
    result = imul(31, result) + ColorModel__hashCode_impl_11onkc(this.r2s_1) | 0;
    result = imul(31, result) + this.s2s_1 | 0;
    return result;
  };
  function connect(_this__u8e3s4, destination, intent) {
    destination = destination === VOID ? ColorSpaces_getInstance().o2r_1 : destination;
    intent = intent === VOID ? Companion_getInstance_31().x2x_1 : intent;
    if (_this__u8e3s4 === ColorSpaces_getInstance().o2r_1) {
      if (destination === ColorSpaces_getInstance().o2r_1) {
        return Companion_getInstance_28().b2y_1;
      }
      if (destination === ColorSpaces_getInstance().f2s_1 ? intent === Companion_getInstance_31().x2x_1 : false) {
        return Companion_getInstance_28().c2y_1;
      }
    } else if ((_this__u8e3s4 === ColorSpaces_getInstance().f2s_1 ? destination === ColorSpaces_getInstance().o2r_1 : false) ? intent === Companion_getInstance_31().x2x_1 : false) {
      return Companion_getInstance_28().d2y_1;
    }
    if (_this__u8e3s4 === destination) {
      return Companion_getInstance_28().e2y(_this__u8e3s4);
    }
    var tmp;
    if (equals(_this__u8e3s4.r2s_1, Companion_getInstance_26().j2x_1) ? equals(destination.r2s_1, Companion_getInstance_26().j2x_1) : false) {
      var tmp_0 = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      tmp = new RgbConnector(tmp_0, destination instanceof Rgb ? destination : THROW_CCE(), intent);
    } else {
      tmp = Connector_init_$Create$(_this__u8e3s4, destination, intent);
    }
    return tmp;
  }
  function absRcpResponse(x, a, b, c, d, g) {
    return withSign(rcpResponse(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function absResponse(x, a, b, c, d, g) {
    return withSign(response(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function adapt(_this__u8e3s4, whitePoint, adaptation) {
    adaptation = adaptation === VOID ? Companion_getInstance_25().f2x_1 : adaptation;
    if (equals(_this__u8e3s4.r2s_1, Companion_getInstance_26().j2x_1)) {
      var rgb = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      if (compare_0(rgb.i2y_1, whitePoint)) {
        return _this__u8e3s4;
      }
      var xyz = whitePoint.z2y();
      var adaptationTransform = chromaticAdaptation(adaptation.i2x_1, rgb.i2y_1.z2y(), xyz);
      var transform = mul3x3(adaptationTransform, rgb.n2y_1);
      return Rgb_init_$Create$_1(rgb, transform, whitePoint);
    }
    return _this__u8e3s4;
  }
  function compare(a, b) {
    if (a === b)
      return true;
    var inductionVariable = 0;
    var last = a.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (!(compareTo(a[i], b[i]) === 0)) {
          // Inline function 'kotlin.math.abs' call
          var tmp0_abs = a[i] - b[i];
          tmp = Math.abs(tmp0_abs) > 0.001;
        } else {
          tmp = false;
        }
        if (tmp)
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function mul3x3Float3(lhs, rhs) {
    var r0 = rhs[0];
    var r1 = rhs[1];
    var r2 = rhs[2];
    rhs[0] = lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
    rhs[1] = lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
    rhs[2] = lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
    return rhs;
  }
  function mul3x3Float3_0(lhs, r0, r1, r2) {
    return lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
  }
  function mul3x3Float3_1(lhs, r0, r1, r2) {
    return lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
  }
  function mul3x3Float3_2(lhs, r0, r1, r2) {
    return lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
  }
  function compare_0(a, b) {
    if (a === b)
      return true;
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = a.x2y_1 - b.x2y_1;
    if (Math.abs(tmp0_abs) < 0.001) {
      // Inline function 'kotlin.math.abs' call
      var tmp1_abs = a.y2y_1 - b.y2y_1;
      tmp = Math.abs(tmp1_abs) < 0.001;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function mul3x3(lhs, rhs) {
    var r = new Float32Array(9);
    r[0] = lhs[0] * rhs[0] + lhs[3] * rhs[1] + lhs[6] * rhs[2];
    r[1] = lhs[1] * rhs[0] + lhs[4] * rhs[1] + lhs[7] * rhs[2];
    r[2] = lhs[2] * rhs[0] + lhs[5] * rhs[1] + lhs[8] * rhs[2];
    r[3] = lhs[0] * rhs[3] + lhs[3] * rhs[4] + lhs[6] * rhs[5];
    r[4] = lhs[1] * rhs[3] + lhs[4] * rhs[4] + lhs[7] * rhs[5];
    r[5] = lhs[2] * rhs[3] + lhs[5] * rhs[4] + lhs[8] * rhs[5];
    r[6] = lhs[0] * rhs[6] + lhs[3] * rhs[7] + lhs[6] * rhs[8];
    r[7] = lhs[1] * rhs[6] + lhs[4] * rhs[7] + lhs[7] * rhs[8];
    r[8] = lhs[2] * rhs[6] + lhs[5] * rhs[7] + lhs[8] * rhs[8];
    return r;
  }
  function chromaticAdaptation(matrix, srcWhitePoint, dstWhitePoint) {
    var srcLMS = mul3x3Float3(matrix, srcWhitePoint);
    var dstLMS = mul3x3Float3(matrix, dstWhitePoint);
    // Inline function 'kotlin.floatArrayOf' call
    var LMS = new Float32Array([dstLMS[0] / srcLMS[0], dstLMS[1] / srcLMS[1], dstLMS[2] / srcLMS[2]]);
    return mul3x3(inverse3x3(matrix), mul3x3Diag(LMS, matrix));
  }
  function inverse3x3(m) {
    var a = m[0];
    var b = m[3];
    var c = m[6];
    var d = m[1];
    var e = m[4];
    var f = m[7];
    var g = m[2];
    var h = m[5];
    var i = m[8];
    var xA = e * i - f * h;
    var xB = f * g - d * i;
    var xC = d * h - e * g;
    var det = a * xA + b * xB + c * xC;
    var inverted = new Float32Array(m.length);
    inverted[0] = xA / det;
    inverted[1] = xB / det;
    inverted[2] = xC / det;
    inverted[3] = (c * h - b * i) / det;
    inverted[4] = (a * i - c * g) / det;
    inverted[5] = (b * g - a * h) / det;
    inverted[6] = (b * f - c * e) / det;
    inverted[7] = (c * d - a * f) / det;
    inverted[8] = (a * e - b * d) / det;
    return inverted;
  }
  function mul3x3Diag(lhs, rhs) {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([lhs[0] * rhs[0], lhs[1] * rhs[1], lhs[2] * rhs[2], lhs[0] * rhs[3], lhs[1] * rhs[4], lhs[2] * rhs[5], lhs[0] * rhs[6], lhs[1] * rhs[7], lhs[2] * rhs[8]]);
  }
  function rcpResponse(x, a, b, c, d, g) {
    var tmp;
    if (x >= d * c) {
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = 1.0 / g;
      tmp = (Math.pow(x, tmp0_pow) - b) / a;
    } else {
      tmp = x / c;
    }
    return tmp;
  }
  function rcpResponse_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d * c) {
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = x - e;
      var tmp1_pow = 1.0 / g;
      tmp = (Math.pow(tmp0_pow, tmp1_pow) - b) / a;
    } else {
      tmp = (x - f) / c;
    }
    return tmp;
  }
  function response(x, a, b, c, d, g) {
    var tmp;
    if (x >= d) {
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = a * x + b;
      tmp = Math.pow(tmp0_pow, g);
    } else {
      tmp = c * x;
    }
    return tmp;
  }
  function response_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d) {
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = a * x + b;
      tmp = Math.pow(tmp0_pow, g) + e;
    } else {
      tmp = c * x + f;
    }
    return tmp;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(function_0) {
    this.a2z_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).b2z = function (double) {
    return this.a2z_1(double);
  };
  function ColorSpaces$ExtendedSrgb$lambda(x) {
    return absRcpResponse(x, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 2.4);
  }
  function ColorSpaces$ExtendedSrgb$lambda_0(x) {
    return absResponse(x, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045, 2.4);
  }
  function ColorSpaces() {
    ColorSpaces_instance = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.k2r_1 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.l2r_1 = new Float32Array([0.67, 0.33, 0.21, 0.71, 0.14, 0.08]);
    this.m2r_1 = new TransferParameters(2.4, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045);
    this.n2r_1 = new TransferParameters(2.2, 0.9478672985781991, 0.05213270142180095, 0.07739938080495357, 0.04045);
    this.o2r_1 = Rgb_init_$Create$('sRGB IEC61966-2.1', this.k2r_1, Illuminant_getInstance().i2z_1, this.m2r_1, 0);
    this.p2r_1 = Rgb_init_$Create$_0('sRGB IEC61966-2.1 (Linear)', this.k2r_1, Illuminant_getInstance().i2z_1, 1.0, 0.0, 1.0, 1);
    var tmp_1 = this;
    var tmp_2 = Illuminant_getInstance().i2z_1;
    var tmp_3 = ColorSpaces$ExtendedSrgb$lambda;
    var tmp_4 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_3);
    var tmp_5 = ColorSpaces$ExtendedSrgb$lambda_0;
    tmp_1.q2r_1 = new Rgb('scRGB-nl IEC 61966-2-2:2003', this.k2r_1, tmp_2, null, tmp_4, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_5), -0.799, 2.399, this.m2r_1, 2);
    this.r2r_1 = Rgb_init_$Create$_0('scRGB IEC 61966-2-2:2003', this.k2r_1, Illuminant_getInstance().i2z_1, 1.0, -0.5, 7.499, 3);
    var tmp_6 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$2 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    tmp_6.s2r_1 = Rgb_init_$Create$('Rec. ITU-R BT.709-5', tmp$ret$2, Illuminant_getInstance().i2z_1, new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 4);
    var tmp_7 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$3 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
    tmp_7.t2r_1 = Rgb_init_$Create$('Rec. ITU-R BT.2020-1', tmp$ret$3, Illuminant_getInstance().i2z_1, new TransferParameters(2.2222222222222223, 0.9096697898662786, 0.09033021013372146, 0.2222222222222222, 0.08145), 5);
    var tmp_8 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$4 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_8.u2r_1 = Rgb_init_$Create$_0('SMPTE RP 431-2-2007 DCI (P3)', tmp$ret$4, new WhitePoint(0.314, 0.351), 2.6, 0.0, 1.0, 6);
    var tmp_9 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$5 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_9.v2r_1 = Rgb_init_$Create$('Display P3', tmp$ret$5, Illuminant_getInstance().i2z_1, this.m2r_1, 7);
    this.w2r_1 = Rgb_init_$Create$('NTSC (1953)', this.l2r_1, Illuminant_getInstance().e2z_1, new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 8);
    var tmp_10 = this;
    var tmp$ret$6;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$6 = new Float32Array([0.63, 0.34, 0.31, 0.595, 0.155, 0.07]);
    tmp_10.x2r_1 = Rgb_init_$Create$('SMPTE-C RGB', tmp$ret$6, Illuminant_getInstance().i2z_1, new TransferParameters(2.2222222222222223, 0.9099181073703367, 0.09008189262966333, 0.2222222222222222, 0.081), 9);
    var tmp_11 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$7 = new Float32Array([0.64, 0.33, 0.21, 0.71, 0.15, 0.06]);
    tmp_11.y2r_1 = Rgb_init_$Create$_0('Adobe RGB (1998)', tmp$ret$7, Illuminant_getInstance().i2z_1, 2.2, 0.0, 1.0, 10);
    var tmp_12 = this;
    var tmp$ret$8;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$8 = new Float32Array([0.7347, 0.2653, 0.1596, 0.8404, 0.0366, 1.0E-4]);
    tmp_12.z2r_1 = Rgb_init_$Create$('ROMM RGB ISO 22028-2:2013', tmp$ret$8, Illuminant_getInstance().f2z_1, new TransferParameters(1.8, 1.0, 0.0, 0.0625, 0.031248), 11);
    var tmp_13 = this;
    var tmp$ret$9;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$9 = new Float32Array([0.7347, 0.2653, 0.0, 1.0, 1.0E-4, -0.077]);
    tmp_13.a2s_1 = Rgb_init_$Create$_0('SMPTE ST 2065-1:2012 ACES', tmp$ret$9, Illuminant_getInstance().h2z_1, 1.0, -65504.0, 65504.0, 12);
    var tmp_14 = this;
    var tmp$ret$10;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$10 = new Float32Array([0.713, 0.293, 0.165, 0.83, 0.128, 0.044]);
    tmp_14.b2s_1 = Rgb_init_$Create$_0('Academy S-2014-004 ACEScg', tmp$ret$10, Illuminant_getInstance().h2z_1, 1.0, -65504.0, 65504.0, 13);
    this.c2s_1 = new Xyz('Generic XYZ', 14);
    this.d2s_1 = new Lab('Generic L*a*b*', 15);
    this.e2s_1 = Rgb_init_$Create$('None', this.k2r_1, Illuminant_getInstance().i2z_1, this.n2r_1, 16);
    this.f2s_1 = new Oklab('Oklab', 17);
    var tmp_15 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_15.g2s_1 = [this.o2r_1, this.p2r_1, this.q2r_1, this.r2r_1, this.s2r_1, this.t2r_1, this.u2r_1, this.v2r_1, this.w2r_1, this.x2r_1, this.y2r_1, this.z2r_1, this.a2s_1, this.b2s_1, this.c2s_1, this.d2s_1, this.e2s_1, this.f2s_1];
  }
  var ColorSpaces_instance;
  function ColorSpaces_getInstance() {
    if (ColorSpaces_instance == null)
      new ColorSpaces();
    return ColorSpaces_instance;
  }
  function computeTransform($this, source, destination, intent) {
    if (compare_0(source.i2y_1, destination.i2y_1)) {
      return mul3x3(destination.o2y_1, source.n2y_1);
    } else {
      var transform = source.n2y_1;
      var inverseTransform = destination.o2y_1;
      var srcXYZ = source.i2y_1.z2y();
      var dstXYZ = destination.i2y_1.z2y();
      if (!compare_0(source.i2y_1, Illuminant_getInstance().f2z_1)) {
        var tmp = Companion_getInstance_25().f2x_1.i2x_1;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.copyOf' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = Illuminant_getInstance().l2z_1.slice();
        var srcAdaptation = chromaticAdaptation(tmp, srcXYZ, tmp$ret$1);
        transform = mul3x3(srcAdaptation, source.n2y_1);
      }
      if (!compare_0(destination.i2y_1, Illuminant_getInstance().f2z_1)) {
        var tmp_0 = Companion_getInstance_25().f2x_1.i2x_1;
        var tmp$ret$3;
        // Inline function 'kotlin.collections.copyOf' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = Illuminant_getInstance().l2z_1.slice();
        var dstAdaptation = chromaticAdaptation(tmp_0, dstXYZ, tmp$ret$3);
        inverseTransform = inverse3x3(mul3x3(dstAdaptation, destination.n2y_1));
      }
      if (intent === Companion_getInstance_31().a2y_1) {
        var tmp$ret$4;
        // Inline function 'kotlin.floatArrayOf' call
        tmp$ret$4 = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
        transform = mul3x3Diag(tmp$ret$4, transform);
      }
      return mul3x3(inverseTransform, transform);
    }
  }
  function computeTransform_0($this, source, destination, intent) {
    if (!(intent === Companion_getInstance_31().a2y_1))
      return null;
    var srcRGB = equals(source.r2s_1, Companion_getInstance_26().j2x_1);
    var dstRGB = equals(destination.r2s_1, Companion_getInstance_26().j2x_1);
    if (srcRGB ? dstRGB : false)
      return null;
    if (srcRGB ? true : dstRGB) {
      var tmp = srcRGB ? source : destination;
      var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
      var srcXYZ = srcRGB ? rgb.i2y_1.z2y() : Illuminant_getInstance().l2z_1;
      var dstXYZ = dstRGB ? rgb.i2y_1.z2y() : Illuminant_getInstance().l2z_1;
      // Inline function 'kotlin.floatArrayOf' call
      return new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
    }
    return null;
  }
  function Connector$Companion$identity$1($source) {
    Connector_init_$Init$($source, $source, Companion_getInstance_31().y2x_1, this);
  }
  protoOf(Connector$Companion$identity$1).n2s = function (r, g, b, a) {
    return Color_0(r, g, b, a, this.i2s_1);
  };
  function Connector_init_$Init$(source, destination, intent, $this) {
    var tmp = equals(source.r2s_1, Companion_getInstance_26().j2x_1) ? adapt(source, Illuminant_getInstance().f2z_1) : source;
    var tmp_0;
    if (equals(destination.r2s_1, Companion_getInstance_26().j2x_1)) {
      tmp_0 = adapt(destination, Illuminant_getInstance().f2z_1);
    } else {
      tmp_0 = destination;
    }
    Connector.call($this, source, destination, tmp, tmp_0, intent, computeTransform_0(Companion_getInstance_28(), source, destination, intent));
    return $this;
  }
  function Connector_init_$Create$(source, destination, intent) {
    return Connector_init_$Init$(source, destination, intent, objectCreate(protoOf(Connector)));
  }
  function RgbConnector(mSource, mDestination, intent) {
    Connector.call(this, mSource, mDestination, mSource, mDestination, intent, null);
    this.y2z_1 = mSource;
    this.z2z_1 = mDestination;
    this.a30_1 = computeTransform(this, this.y2z_1, this.z2z_1, intent);
  }
  protoOf(RgbConnector).n2s = function (r, g, b, a) {
    var v0 = this.y2z_1.u2y_1.b2z(r);
    var v1 = this.y2z_1.u2y_1.b2z(g);
    var v2 = this.y2z_1.u2y_1.b2z(b);
    var v01 = mul3x3Float3_0(this.a30_1, v0, v1, v2);
    var v11 = mul3x3Float3_1(this.a30_1, v0, v1, v2);
    var v21 = mul3x3Float3_2(this.a30_1, v0, v1, v2);
    var v02 = this.z2z_1.r2y_1.b2z(v01);
    var v12 = this.z2z_1.r2y_1.b2z(v11);
    var v22 = this.z2z_1.r2y_1.b2z(v21);
    return Color_0(v02, v12, v22, a, this.z2z_1);
  };
  function Companion_16() {
    Companion_instance_16 = this;
    this.b2y_1 = this.e2y(ColorSpaces_getInstance().o2r_1);
    this.c2y_1 = Connector_init_$Create$(ColorSpaces_getInstance().o2r_1, ColorSpaces_getInstance().f2s_1, Companion_getInstance_31().x2x_1);
    this.d2y_1 = Connector_init_$Create$(ColorSpaces_getInstance().f2s_1, ColorSpaces_getInstance().o2r_1, Companion_getInstance_31().x2x_1);
  }
  protoOf(Companion_16).e2y = function (source) {
    return new Connector$Companion$identity$1(source);
  };
  var Companion_instance_16;
  function Companion_getInstance_28() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function Connector(source, destination, transformSource, transformDestination, renderIntent, transform) {
    Companion_getInstance_28();
    this.h2s_1 = source;
    this.i2s_1 = destination;
    this.j2s_1 = transformSource;
    this.k2s_1 = transformDestination;
    this.l2s_1 = renderIntent;
    this.m2s_1 = transform;
  }
  protoOf(Connector).n2s = function (r, g, b, a) {
    var packed = this.j2s_1.s2x(r, g, b);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = packed.y5(32).z5();
    var x = floatFromBits(tmp1_fromBits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits_0 = packed.m6(new Long(-1, 0)).z5();
    var y = floatFromBits(tmp1_fromBits_0);
    var z = this.j2s_1.t2x(r, g, b);
    if (!(this.m2s_1 == null)) {
      x = x * this.m2s_1[0];
      y = y * this.m2s_1[1];
      z = z * this.m2s_1[2];
    }
    return this.k2s_1.u2x(x, y, z, a, this.i2s_1);
  };
  function Illuminant() {
    Illuminant_instance = this;
    this.c2z_1 = new WhitePoint(0.44757, 0.40745);
    this.d2z_1 = new WhitePoint(0.34842, 0.35161);
    this.e2z_1 = new WhitePoint(0.31006, 0.31616);
    this.f2z_1 = new WhitePoint(0.34567, 0.3585);
    this.g2z_1 = new WhitePoint(0.33242, 0.34743);
    this.h2z_1 = new WhitePoint(0.32168, 0.33767);
    this.i2z_1 = new WhitePoint(0.31271, 0.32902);
    this.j2z_1 = new WhitePoint(0.29902, 0.31485);
    this.k2z_1 = new WhitePoint(0.33333, 0.33333);
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.l2z_1 = new Float32Array([0.964212, 1.0, 0.825188]);
  }
  var Illuminant_instance;
  function Illuminant_getInstance() {
    if (Illuminant_instance == null)
      new Illuminant();
    return Illuminant_instance;
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.b30_1 = 0.008856452;
    this.c30_1 = 7.787037;
    this.d30_1 = 0.13793103;
    this.e30_1 = 0.20689656;
  }
  var Companion_instance_17;
  function Companion_getInstance_29() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function Lab(name, id) {
    Companion_getInstance_29();
    ColorSpace.call(this, name, Companion_getInstance_26().l2x_1, id);
  }
  protoOf(Lab).g2t = function (component) {
    return component === 0 ? 0.0 : -128.0;
  };
  protoOf(Lab).h2t = function (component) {
    return component === 0 ? 100.0 : 128.0;
  };
  protoOf(Lab).r2x = function (v) {
    v[0] = coerceIn(v[0], 0.0, 100.0);
    v[1] = coerceIn(v[1], -128.0, 128.0);
    v[2] = coerceIn(v[2], -128.0, 128.0);
    var fy = (v[0] + 16.0) / 116.0;
    var fx = fy + v[1] * 0.002;
    var fz = fy - v[2] * 0.005;
    var tmp;
    Companion_getInstance_29();
    if (fx > 0.20689656) {
      tmp = fx * fx * fx;
    } else {
      Companion_getInstance_29();
      var tmp_0 = 1.0 / 7.787037;
      Companion_getInstance_29();
      tmp = tmp_0 * (fx - 0.13793103);
    }
    var x = tmp;
    var tmp_1;
    Companion_getInstance_29();
    if (fy > 0.20689656) {
      tmp_1 = fy * fy * fy;
    } else {
      Companion_getInstance_29();
      var tmp_2 = 1.0 / 7.787037;
      Companion_getInstance_29();
      tmp_1 = tmp_2 * (fy - 0.13793103);
    }
    var y = tmp_1;
    var tmp_3;
    Companion_getInstance_29();
    if (fz > 0.20689656) {
      tmp_3 = fz * fz * fz;
    } else {
      Companion_getInstance_29();
      var tmp_4 = 1.0 / 7.787037;
      Companion_getInstance_29();
      tmp_3 = tmp_4 * (fz - 0.13793103);
    }
    var z = tmp_3;
    v[0] = x * Illuminant_getInstance().l2z_1[0];
    v[1] = y * Illuminant_getInstance().l2z_1[1];
    v[2] = z * Illuminant_getInstance().l2z_1[2];
    return v;
  };
  protoOf(Lab).s2x = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 100.0);
    var v10 = coerceIn(v0, -128.0, 128.0);
    var fy = (v00 + 16.0) / 116.0;
    var fx = fy + v10 * 0.002;
    var tmp;
    Companion_getInstance_29();
    if (fx > 0.20689656) {
      tmp = fx * fx * fx;
    } else {
      Companion_getInstance_29();
      var tmp_0 = 1.0 / 7.787037;
      Companion_getInstance_29();
      tmp = tmp_0 * (fx - 0.13793103);
    }
    var x = tmp;
    var tmp_1;
    Companion_getInstance_29();
    if (fy > 0.20689656) {
      tmp_1 = fy * fy * fy;
    } else {
      Companion_getInstance_29();
      var tmp_2 = 1.0 / 7.787037;
      Companion_getInstance_29();
      tmp_1 = tmp_2 * (fy - 0.13793103);
    }
    var y = tmp_1;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = x * Illuminant_getInstance().l2z_1[0];
    var tmp1_packFloats = y * Illuminant_getInstance().l2z_1[1];
    var v1_0 = toLong(toBits(tmp0_packFloats));
    var v2_0 = toLong(toBits(tmp1_packFloats));
    return v1_0.a6(32).sd(v2_0.m6(new Long(-1, 0)));
  };
  protoOf(Lab).t2x = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 100.0);
    var v20 = coerceIn(v2, -128.0, 128.0);
    var fy = (v00 + 16.0) / 116.0;
    var fz = fy - v20 * 0.005;
    var tmp;
    Companion_getInstance_29();
    if (fz > 0.20689656) {
      tmp = fz * fz * fz;
    } else {
      Companion_getInstance_29();
      var tmp_0 = 1.0 / 7.787037;
      Companion_getInstance_29();
      tmp = tmp_0 * (fz - 0.13793103);
    }
    var z = tmp;
    return z * Illuminant_getInstance().l2z_1[2];
  };
  protoOf(Lab).u2x = function (x, y, z, a, colorSpace) {
    var x1 = x / Illuminant_getInstance().l2z_1[0];
    var y1 = y / Illuminant_getInstance().l2z_1[1];
    var z1 = z / Illuminant_getInstance().l2z_1[2];
    var tmp;
    Companion_getInstance_29();
    if (x1 > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = 1.0 / 3.0;
      tmp = Math.pow(x1, tmp0_pow);
    } else {
      Companion_getInstance_29();
      var tmp_0 = 7.787037 * x1;
      Companion_getInstance_29();
      tmp = tmp_0 + 0.13793103;
    }
    var fx = tmp;
    var tmp_1;
    Companion_getInstance_29();
    if (y1 > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var tmp1_pow = 1.0 / 3.0;
      tmp_1 = Math.pow(y1, tmp1_pow);
    } else {
      Companion_getInstance_29();
      var tmp_2 = 7.787037 * y1;
      Companion_getInstance_29();
      tmp_1 = tmp_2 + 0.13793103;
    }
    var fy = tmp_1;
    var tmp_3;
    Companion_getInstance_29();
    if (z1 > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var tmp2_pow = 1.0 / 3.0;
      tmp_3 = Math.pow(z1, tmp2_pow);
    } else {
      Companion_getInstance_29();
      var tmp_4 = 7.787037 * z1;
      Companion_getInstance_29();
      tmp_3 = tmp_4 + 0.13793103;
    }
    var fz = tmp_3;
    var l = 116.0 * fy - 16.0;
    var a1 = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    return Color_0(coerceIn(l, 0.0, 100.0), coerceIn(a1, -128.0, 128.0), coerceIn(b, -128.0, 128.0), a, colorSpace);
  };
  protoOf(Lab).w2x = function (v) {
    var x = v[0] / Illuminant_getInstance().l2z_1[0];
    var y = v[1] / Illuminant_getInstance().l2z_1[1];
    var z = v[2] / Illuminant_getInstance().l2z_1[2];
    var tmp;
    Companion_getInstance_29();
    if (x > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = 1.0 / 3.0;
      tmp = Math.pow(x, tmp0_pow);
    } else {
      Companion_getInstance_29();
      var tmp_0 = 7.787037 * x;
      Companion_getInstance_29();
      tmp = tmp_0 + 0.13793103;
    }
    var fx = tmp;
    var tmp_1;
    Companion_getInstance_29();
    if (y > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var tmp1_pow = 1.0 / 3.0;
      tmp_1 = Math.pow(y, tmp1_pow);
    } else {
      Companion_getInstance_29();
      var tmp_2 = 7.787037 * y;
      Companion_getInstance_29();
      tmp_1 = tmp_2 + 0.13793103;
    }
    var fy = tmp_1;
    var tmp_3;
    Companion_getInstance_29();
    if (z > 0.008856452) {
      // Inline function 'kotlin.math.pow' call
      var tmp2_pow = 1.0 / 3.0;
      tmp_3 = Math.pow(z, tmp2_pow);
    } else {
      Companion_getInstance_29();
      var tmp_4 = 7.787037 * z;
      Companion_getInstance_29();
      tmp_3 = tmp_4 + 0.13793103;
    }
    var fz = tmp_3;
    var l = 116.0 * fy - 16.0;
    var a = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    v[0] = coerceIn(l, 0.0, 100.0);
    v[1] = coerceIn(a, -128.0, 128.0);
    v[2] = coerceIn(b, -128.0, 128.0);
    return v;
  };
  function Companion_18() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([0.818933, 0.032984544, 0.0482003, 0.36186674, 0.9293119, 0.26436627, -0.12885971, 0.03614564, 0.6338517]);
    tmp.i30_1 = mul3x3(tmp$ret$0, chromaticAdaptation(Companion_getInstance_25().f2x_1.i2x_1, Illuminant_getInstance().f2z_1.z2y(), Illuminant_getInstance().i2z_1.z2y()));
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.j30_1 = new Float32Array([0.21045426, 1.9779985, 0.025904037, 0.7936178, -2.4285922, 0.78277177, -0.004072047, 0.4505937, -0.80867577]);
    this.k30_1 = inverse3x3(this.i30_1);
    this.l30_1 = inverse3x3(this.j30_1);
  }
  var Companion_instance_18;
  function Companion_getInstance_30() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function Oklab(name, id) {
    Companion_getInstance_30();
    ColorSpace.call(this, name, Companion_getInstance_26().l2x_1, id);
  }
  protoOf(Oklab).g2t = function (component) {
    return component === 0 ? 0.0 : -0.5;
  };
  protoOf(Oklab).h2t = function (component) {
    return component === 0 ? 1.0 : 0.5;
  };
  protoOf(Oklab).r2x = function (v) {
    v[0] = coerceIn(v[0], 0.0, 1.0);
    v[1] = coerceIn(v[1], -0.5, 0.5);
    v[2] = coerceIn(v[2], -0.5, 0.5);
    mul3x3Float3(Companion_getInstance_30().l30_1, v);
    v[0] = v[0] * v[0] * v[0];
    v[1] = v[1] * v[1] * v[1];
    v[2] = v[2] * v[2] * v[2];
    mul3x3Float3(Companion_getInstance_30().k30_1, v);
    return v;
  };
  protoOf(Oklab).s2x = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 1.0);
    var v10 = coerceIn(v1, -0.5, 0.5);
    var v20 = coerceIn(v2, -0.5, 0.5);
    var v01 = mul3x3Float3_0(Companion_getInstance_30().l30_1, v00, v10, v20);
    var v11 = mul3x3Float3_1(Companion_getInstance_30().l30_1, v00, v10, v20);
    var v21 = mul3x3Float3_2(Companion_getInstance_30().l30_1, v00, v10, v20);
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    var v03 = mul3x3Float3_0(Companion_getInstance_30().k30_1, v02, v12, v22);
    var v13 = mul3x3Float3_1(Companion_getInstance_30().k30_1, v02, v12, v22);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toBits(v03));
    var v2_0 = toLong(toBits(v13));
    return v1_0.a6(32).sd(v2_0.m6(new Long(-1, 0)));
  };
  protoOf(Oklab).t2x = function (v0, v1, v2) {
    var v00 = coerceIn(v0, 0.0, 1.0);
    var v10 = coerceIn(v1, -0.5, 0.5);
    var v20 = coerceIn(v2, -0.5, 0.5);
    var v01 = mul3x3Float3_0(Companion_getInstance_30().l30_1, v00, v10, v20);
    var v11 = mul3x3Float3_1(Companion_getInstance_30().l30_1, v00, v10, v20);
    var v21 = mul3x3Float3_2(Companion_getInstance_30().l30_1, v00, v10, v20);
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    var v23 = mul3x3Float3_2(Companion_getInstance_30().k30_1, v02, v12, v22);
    return v23;
  };
  protoOf(Oklab).u2x = function (x, y, z, a, colorSpace) {
    var v0 = mul3x3Float3_0(Companion_getInstance_30().i30_1, x, y, z);
    var v1 = mul3x3Float3_1(Companion_getInstance_30().i30_1, x, y, z);
    var v2 = mul3x3Float3_2(Companion_getInstance_30().i30_1, x, y, z);
    // Inline function 'kotlin.math.sign' call
    var tmp0_sign = v0;
    var tmp = sign(tmp0_sign);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var tmp1_abs = v0;
    var tmp2_pow = Math.abs(tmp1_abs);
    var tmp3_pow = 1.0 / 3.0;
    v0 = tmp * Math.pow(tmp2_pow, tmp3_pow);
    // Inline function 'kotlin.math.sign' call
    var tmp4_sign = v1;
    var tmp_0 = sign(tmp4_sign);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var tmp5_abs = v1;
    var tmp6_pow = Math.abs(tmp5_abs);
    var tmp7_pow = 1.0 / 3.0;
    v1 = tmp_0 * Math.pow(tmp6_pow, tmp7_pow);
    // Inline function 'kotlin.math.sign' call
    var tmp8_sign = v2;
    var tmp_1 = sign(tmp8_sign);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var tmp9_abs = v2;
    var tmp10_pow = Math.abs(tmp9_abs);
    var tmp11_pow = 1.0 / 3.0;
    v2 = tmp_1 * Math.pow(tmp10_pow, tmp11_pow);
    var v01 = mul3x3Float3_0(Companion_getInstance_30().j30_1, v0, v1, v2);
    var v11 = mul3x3Float3_1(Companion_getInstance_30().j30_1, v0, v1, v2);
    var v21 = mul3x3Float3_2(Companion_getInstance_30().j30_1, v0, v1, v2);
    return Color_0(v01, v11, v21, a, colorSpace);
  };
  protoOf(Oklab).w2x = function (v) {
    mul3x3Float3(Companion_getInstance_30().i30_1, v);
    // Inline function 'kotlin.math.sign' call
    var tmp0_sign = v[0];
    var tmp = sign(tmp0_sign);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var tmp1_abs = v[0];
    var tmp2_pow = Math.abs(tmp1_abs);
    var tmp3_pow = 1.0 / 3.0;
    v[0] = tmp * Math.pow(tmp2_pow, tmp3_pow);
    // Inline function 'kotlin.math.sign' call
    var tmp4_sign = v[1];
    var tmp_0 = sign(tmp4_sign);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var tmp5_abs = v[1];
    var tmp6_pow = Math.abs(tmp5_abs);
    var tmp7_pow = 1.0 / 3.0;
    v[1] = tmp_0 * Math.pow(tmp6_pow, tmp7_pow);
    // Inline function 'kotlin.math.sign' call
    var tmp8_sign = v[2];
    var tmp_1 = sign(tmp8_sign);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.abs' call
    var tmp9_abs = v[2];
    var tmp10_pow = Math.abs(tmp9_abs);
    var tmp11_pow = 1.0 / 3.0;
    v[2] = tmp_1 * Math.pow(tmp10_pow, tmp11_pow);
    mul3x3Float3(Companion_getInstance_30().j30_1, v);
    return v;
  };
  function _RenderIntent___init__impl__jceahd(value) {
    return value;
  }
  function Companion_19() {
    Companion_instance_19 = this;
    this.x2x_1 = _RenderIntent___init__impl__jceahd(0);
    this.y2x_1 = _RenderIntent___init__impl__jceahd(1);
    this.z2x_1 = _RenderIntent___init__impl__jceahd(2);
    this.a2y_1 = _RenderIntent___init__impl__jceahd(3);
  }
  var Companion_instance_19;
  function Companion_getInstance_31() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function isSrgb($this, primaries, whitePoint, OETF, EOTF, min, max, id) {
    if (id === 0)
      return true;
    if (!compare(primaries, ColorSpaces_getInstance().k2r_1)) {
      return false;
    }
    if (!compare_0(whitePoint, Illuminant_getInstance().i2z_1)) {
      return false;
    }
    if (!(min === 0.0))
      return false;
    if (!(max === 1.0))
      return false;
    var srgb = ColorSpaces_getInstance().o2r_1;
    var x = 0.0;
    while (x <= 1.0) {
      if (!compare_1($this, x, OETF, srgb.p2y_1))
        return false;
      if (!compare_1($this, x, EOTF, srgb.s2y_1))
        return false;
      x = x + 0.00392156862745098;
    }
    return true;
  }
  function compare_1($this, point, a, b) {
    var rA = a.b2z(point);
    var rB = b.b2z(point);
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = rA - rB;
    return Math.abs(tmp0_abs) <= 0.001;
  }
  function isWideGamut($this, primaries, min, max) {
    return (area($this, primaries) / area($this, ColorSpaces_getInstance().l2r_1) > 0.9 ? contains($this, primaries, ColorSpaces_getInstance().k2r_1) : false) ? true : min < 0.0 ? max > 1.0 : false;
  }
  function area($this, primaries) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var det = rx * gy + ry * bx + gx * by - gy * bx - ry * gx - rx * by;
    var r = 0.5 * det;
    return r < 0.0 ? -r : r;
  }
  function cross($this, ax, ay, bx, by) {
    return ax * by - ay * bx;
  }
  function contains($this, p1, p2) {
    // Inline function 'kotlin.floatArrayOf' call
    var p0 = new Float32Array([p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2], p1[3] - p2[3], p1[4] - p2[4], p1[5] - p2[5]]);
    if (cross($this, p0[0], p0[1], p2[0] - p2[4], p2[1] - p2[5]) < 0 ? true : cross($this, p2[0] - p2[2], p2[1] - p2[3], p0[0], p0[1]) < 0) {
      return false;
    }
    if (cross($this, p0[2], p0[3], p2[2] - p2[0], p2[3] - p2[1]) < 0 ? true : cross($this, p2[2] - p2[4], p2[3] - p2[5], p0[2], p0[3]) < 0) {
      return false;
    }
    return !(cross($this, p0[4], p0[5], p2[4] - p2[2], p2[5] - p2[3]) < 0 ? true : cross($this, p2[4] - p2[0], p2[5] - p2[1], p0[4], p0[5]) < 0);
  }
  function xyPrimaries($this, primaries) {
    var xyPrimaries = new Float32Array(6);
    if (primaries.length === 9) {
      var sum = primaries[0] + primaries[1] + primaries[2];
      xyPrimaries[0] = primaries[0] / sum;
      xyPrimaries[1] = primaries[1] / sum;
      sum = primaries[3] + primaries[4] + primaries[5];
      xyPrimaries[2] = primaries[3] / sum;
      xyPrimaries[3] = primaries[4] / sum;
      sum = primaries[6] + primaries[7] + primaries[8];
      xyPrimaries[4] = primaries[6] / sum;
      xyPrimaries[5] = primaries[7] / sum;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = primaries;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, xyPrimaries, 0, 0, 6);
    }
    return xyPrimaries;
  }
  function computeXYZMatrix($this, primaries, whitePoint) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var wx = whitePoint.x2y_1;
    var wy = whitePoint.y2y_1;
    var oneRxRy = (1 - rx) / ry;
    var oneGxGy = (1 - gx) / gy;
    var oneBxBy = (1 - bx) / by;
    var oneWxWy = (1 - wx) / wy;
    var rxRy = rx / ry;
    var gxGy = gx / gy;
    var bxBy = bx / by;
    var wxWy = wx / wy;
    var byNumerator = (oneWxWy - oneRxRy) * (gxGy - rxRy) - (wxWy - rxRy) * (oneGxGy - oneRxRy);
    var byDenominator = (oneBxBy - oneRxRy) * (gxGy - rxRy) - (bxBy - rxRy) * (oneGxGy - oneRxRy);
    var bY = byNumerator / byDenominator;
    var gY = (wxWy - rxRy - bY * (bxBy - rxRy)) / (gxGy - rxRy);
    var rY = 1.0 - gY - bY;
    var rYRy = rY / ry;
    var gYGy = gY / gy;
    var bYBy = bY / by;
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([rYRy * rx, rY, rYRy * (1.0 - rx - ry), gYGy * gx, gY, gYGy * (1.0 - gx - gy), bYBy * bx, bY, bYBy * (1.0 - bx - by)]);
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(function_0) {
    this.p30_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).b2z = function (double) {
    return this.p30_1(double);
  };
  function Rgb$Companion$DoubleIdentity$lambda(d) {
    return d;
  }
  function Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, $this) {
    var tmp;
    if (function_0.v30_1 === 0.0 ? function_0.w30_1 === 0.0 : false) {
      var tmp_0 = Rgb$_init_$lambda_yyl4se(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_0);
    } else {
      var tmp_1 = Rgb$_init_$lambda_yyl4se_0(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_1);
    }
    var tmp_2 = tmp;
    var tmp_3;
    if (function_0.v30_1 === 0.0 ? function_0.w30_1 === 0.0 : false) {
      var tmp_4 = Rgb$_init_$lambda_yyl4se_1(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_4);
    } else {
      var tmp_5 = Rgb$_init_$lambda_yyl4se_2(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_5);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_2, tmp_3, 0.0, 1.0, function_0, id);
    return $this;
  }
  function Rgb_init_$Create$(name, primaries, whitePoint, function_0, id) {
    return Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, $this) {
    var tmp;
    if (gamma === 1.0) {
      tmp = Companion_getInstance_32().x30_1;
    } else {
      var tmp_0 = Rgb$_init_$lambda_yyl4se_3(gamma);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_0);
    }
    var tmp_1 = tmp;
    var tmp_2;
    if (gamma === 1.0) {
      tmp_2 = Companion_getInstance_32().x30_1;
    } else {
      var tmp_3 = Rgb$_init_$lambda_yyl4se_4(gamma);
      tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_3);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_1, tmp_2, min, max, new TransferParameters(gamma, 1.0, 0.0, 0.0, 0.0), id);
    return $this;
  }
  function Rgb_init_$Create$_0(name, primaries, whitePoint, gamma, min, max, id) {
    return Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_1(colorSpace, transform, whitePoint, $this) {
    Companion_getInstance_27();
    Rgb.call($this, colorSpace.q2s_1, colorSpace.m2y_1, whitePoint, transform, colorSpace.p2y_1, colorSpace.s2y_1, colorSpace.j2y_1, colorSpace.k2y_1, colorSpace.l2y_1, -1);
    return $this;
  }
  function Rgb_init_$Create$_1(colorSpace, transform, whitePoint) {
    return Rgb_init_$Init$_1(colorSpace, transform, whitePoint, objectCreate(protoOf(Rgb)));
  }
  function Companion_20() {
    Companion_instance_20 = this;
    var tmp = this;
    var tmp_0 = Rgb$Companion$DoubleIdentity$lambda;
    tmp.x30_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(tmp_0);
  }
  var Companion_instance_20;
  function Companion_getInstance_32() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(function_0) {
    this.y30_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).b2z = function (double) {
    return this.y30_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(function_0) {
    this.z30_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).b2z = function (double) {
    return this.z30_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(function_0) {
    this.a31_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).b2z = function (double) {
    return this.a31_1(double);
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(function_0) {
    this.b31_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).b2z = function (double) {
    return this.b31_1(double);
  };
  function Rgb$oetf$lambda(this$0) {
    return function (x) {
      return coerceIn_0(this$0.p2y_1.b2z(x), this$0.j2y_1, this$0.k2y_1);
    };
  }
  function Rgb$oetfFunc$lambda(this$0) {
    return function (x) {
      return coerceIn_0(this$0.p2y_1.b2z(x), this$0.j2y_1, this$0.k2y_1);
    };
  }
  function Rgb$eotf$lambda(this$0) {
    return function (x) {
      return this$0.s2y_1.b2z(coerceIn_0(x, this$0.j2y_1, this$0.k2y_1));
    };
  }
  function Rgb$eotfFunc$lambda(this$0) {
    return function (x) {
      return this$0.s2y_1.b2z(coerceIn_0(x, this$0.j2y_1, this$0.k2y_1));
    };
  }
  function Rgb$_init_$lambda_yyl4se($function) {
    return function (x) {
      return rcpResponse(x, $function.r30_1, $function.s30_1, $function.t30_1, $function.u30_1, $function.q30_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_0($function) {
    return function (x) {
      return rcpResponse_0(x, $function.r30_1, $function.s30_1, $function.t30_1, $function.u30_1, $function.v30_1, $function.w30_1, $function.q30_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_1($function) {
    return function (x) {
      return response(x, $function.r30_1, $function.s30_1, $function.t30_1, $function.u30_1, $function.q30_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_2($function) {
    return function (x) {
      return response_0(x, $function.r30_1, $function.s30_1, $function.t30_1, $function.u30_1, $function.v30_1, $function.w30_1, $function.q30_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_3($gamma) {
    return function (x) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = x < 0.0 ? 0.0 : x;
      var tmp1_pow = 1.0 / $gamma;
      tmp$ret$0 = Math.pow(tmp0_pow, tmp1_pow);
      return tmp$ret$0;
    };
  }
  function Rgb$_init_$lambda_yyl4se_4($gamma) {
    return function (x) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = x < 0.0 ? 0.0 : x;
      tmp$ret$0 = Math.pow(tmp0_pow, $gamma);
      return tmp$ret$0;
    };
  }
  function Rgb(name, primaries, whitePoint, transform, oetf, eotf, min, max, transferParameters, id) {
    Companion_getInstance_32();
    ColorSpace.call(this, name, Companion_getInstance_26().j2x_1, id);
    this.i2y_1 = whitePoint;
    this.j2y_1 = min;
    this.k2y_1 = max;
    this.l2y_1 = transferParameters;
    this.p2y_1 = oetf;
    var tmp = this;
    tmp.q2y_1 = Rgb$oetf$lambda(this);
    var tmp_0 = this;
    var tmp_1 = Rgb$oetfFunc$lambda(this);
    tmp_0.r2y_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(tmp_1);
    this.s2y_1 = eotf;
    var tmp_2 = this;
    tmp_2.t2y_1 = Rgb$eotf$lambda(this);
    var tmp_3 = this;
    var tmp_4 = Rgb$eotfFunc$lambda(this);
    tmp_3.u2y_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(tmp_4);
    if (!(primaries.length === 6) ? !(primaries.length === 9) : false) {
      throw IllegalArgumentException_init_$Create$("The color space's primaries must be defined as an array of 6 floats in xyY or 9 floats in XYZ");
    }
    if (this.j2y_1 >= this.k2y_1) {
      throw IllegalArgumentException_init_$Create$('Invalid range: min=' + this.j2y_1 + ', max=' + this.k2y_1 + '; min must ' + 'be strictly < max');
    }
    this.m2y_1 = xyPrimaries(Companion_getInstance_32(), primaries);
    if (transform == null) {
      this.n2y_1 = computeXYZMatrix(Companion_getInstance_32(), this.m2y_1, this.i2y_1);
    } else {
      if (!(transform.length === 9)) {
        throw IllegalArgumentException_init_$Create$('Transform must have 9 entries! Has ' + ('' + transform.length));
      }
      this.n2y_1 = transform;
    }
    this.o2y_1 = inverse3x3(this.n2y_1);
    this.v2y_1 = isWideGamut(Companion_getInstance_32(), this.m2y_1, this.j2y_1, this.k2y_1);
    this.w2y_1 = isSrgb(Companion_getInstance_32(), this.m2y_1, this.i2y_1, oetf, eotf, this.j2y_1, this.k2y_1, id);
  }
  protoOf(Rgb).i2t = function () {
    return this.w2y_1;
  };
  protoOf(Rgb).g2t = function (component) {
    return this.j2y_1;
  };
  protoOf(Rgb).h2t = function (component) {
    return this.k2y_1;
  };
  protoOf(Rgb).r2x = function (v) {
    v[0] = this.u2y_1.b2z(v[0]);
    v[1] = this.u2y_1.b2z(v[1]);
    v[2] = this.u2y_1.b2z(v[2]);
    return mul3x3Float3(this.n2y_1, v);
  };
  protoOf(Rgb).s2x = function (v0, v1, v2) {
    var v00 = this.u2y_1.b2z(v0);
    var v10 = this.u2y_1.b2z(v1);
    var v20 = this.u2y_1.b2z(v2);
    var x = mul3x3Float3_0(this.n2y_1, v00, v10, v20);
    var y = mul3x3Float3_1(this.n2y_1, v00, v10, v20);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toBits(x));
    var v2_0 = toLong(toBits(y));
    return v1_0.a6(32).sd(v2_0.m6(new Long(-1, 0)));
  };
  protoOf(Rgb).t2x = function (v0, v1, v2) {
    var v00 = this.u2y_1.b2z(v0);
    var v10 = this.u2y_1.b2z(v1);
    var v20 = this.u2y_1.b2z(v2);
    var z = mul3x3Float3_2(this.n2y_1, v00, v10, v20);
    return z;
  };
  protoOf(Rgb).u2x = function (x, y, z, a, colorSpace) {
    var v0 = mul3x3Float3_0(this.o2y_1, x, y, z);
    var v1 = mul3x3Float3_1(this.o2y_1, x, y, z);
    var v2 = mul3x3Float3_2(this.o2y_1, x, y, z);
    v0 = this.r2y_1.b2z(v0);
    v1 = this.r2y_1.b2z(v1);
    v2 = this.r2y_1.b2z(v2);
    return Color_0(v0, v1, v2, a, colorSpace);
  };
  protoOf(Rgb).w2x = function (v) {
    mul3x3Float3(this.o2y_1, v);
    v[0] = this.r2y_1.b2z(v[0]);
    v[1] = this.r2y_1.b2z(v[1]);
    v[2] = this.r2y_1.b2z(v[2]);
    return v;
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(ColorSpace).equals.call(this, other))
      return false;
    var rgb = other instanceof Rgb ? other : THROW_CCE();
    if (!(compareTo(rgb.j2y_1, this.j2y_1) === 0))
      return false;
    if (!(compareTo(rgb.k2y_1, this.k2y_1) === 0))
      return false;
    if (!this.i2y_1.equals(rgb.i2y_1))
      return false;
    if (!contentEquals(this.m2y_1, rgb.m2y_1))
      return false;
    if (!(this.l2y_1 == null)) {
      return equals(this.l2y_1, rgb.l2y_1);
    } else if (rgb.l2y_1 == null) {
      return true;
    }
    return !equals(this.p2y_1, rgb.p2y_1) ? false : equals(this.s2y_1, rgb.s2y_1);
  };
  protoOf(Rgb).hashCode = function () {
    var result = protoOf(ColorSpace).hashCode.call(this);
    result = imul(31, result) + this.i2y_1.hashCode() | 0;
    result = imul(31, result) + contentHashCode(this.m2y_1) | 0;
    result = imul(31, result) + (!(this.j2y_1 === 0.0) ? toBits(this.j2y_1) : 0) | 0;
    result = imul(31, result) + (!(this.k2y_1 === 0.0) ? toBits(this.k2y_1) : 0) | 0;
    result = imul(31, result) + (!(this.l2y_1 == null) ? this.l2y_1.hashCode() : 0) | 0;
    if (this.l2y_1 == null) {
      result = imul(31, result) + hashCode(this.p2y_1) | 0;
      result = imul(31, result) + hashCode(this.s2y_1) | 0;
    }
    return result;
  };
  function TransferParameters(gamma, a, b, c, d, e, f) {
    e = e === VOID ? 0.0 : e;
    f = f === VOID ? 0.0 : f;
    this.q30_1 = gamma;
    this.r30_1 = a;
    this.s30_1 = b;
    this.t30_1 = c;
    this.u30_1 = d;
    this.v30_1 = e;
    this.w30_1 = f;
    if ((((((isNaN_0(this.r30_1) ? true : isNaN_0(this.s30_1)) ? true : isNaN_0(this.t30_1)) ? true : isNaN_0(this.u30_1)) ? true : isNaN_0(this.v30_1)) ? true : isNaN_0(this.w30_1)) ? true : isNaN_0(this.q30_1)) {
      throw IllegalArgumentException_init_$Create$('Parameters cannot be NaN');
    }
    if (!(this.u30_1 >= 0.0 ? this.u30_1 <= 1.0 : false)) {
      throw IllegalArgumentException_init_$Create$('Parameter d must be in the range [0..1], was ' + ('' + this.u30_1));
    }
    if (this.u30_1 === 0.0 ? this.r30_1 === 0.0 ? true : this.q30_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, the transfer function is constant');
    }
    if (this.u30_1 >= 1.0 ? this.t30_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter c is zero, the transfer function is constant');
    }
    if ((this.r30_1 === 0.0 ? true : this.q30_1 === 0.0) ? this.t30_1 === 0.0 : false) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, and c is zero, the transfer function is constant');
    }
    if (this.t30_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be increasing');
    }
    if (this.r30_1 < 0.0 ? true : this.q30_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be positive or increasing');
    }
  }
  protoOf(TransferParameters).toString = function () {
    return 'TransferParameters(gamma=' + this.q30_1 + ', a=' + this.r30_1 + ', b=' + this.s30_1 + ', c=' + this.t30_1 + ', d=' + this.u30_1 + ', e=' + this.v30_1 + ', f=' + this.w30_1 + ')';
  };
  protoOf(TransferParameters).hashCode = function () {
    var result = getNumberHashCode(this.q30_1);
    result = imul(result, 31) + getNumberHashCode(this.r30_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s30_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.t30_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u30_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v30_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.w30_1) | 0;
    return result;
  };
  protoOf(TransferParameters).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransferParameters))
      return false;
    var tmp0_other_with_cast = other instanceof TransferParameters ? other : THROW_CCE();
    if (!equals(this.q30_1, tmp0_other_with_cast.q30_1))
      return false;
    if (!equals(this.r30_1, tmp0_other_with_cast.r30_1))
      return false;
    if (!equals(this.s30_1, tmp0_other_with_cast.s30_1))
      return false;
    if (!equals(this.t30_1, tmp0_other_with_cast.t30_1))
      return false;
    if (!equals(this.u30_1, tmp0_other_with_cast.u30_1))
      return false;
    if (!equals(this.v30_1, tmp0_other_with_cast.v30_1))
      return false;
    if (!equals(this.w30_1, tmp0_other_with_cast.w30_1))
      return false;
    return true;
  };
  function WhitePoint(x, y) {
    this.x2y_1 = x;
    this.y2y_1 = y;
  }
  protoOf(WhitePoint).z2y = function () {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([this.x2y_1 / this.y2y_1, 1.0, (1.0 - this.x2y_1 - this.y2y_1) / this.y2y_1]);
  };
  protoOf(WhitePoint).toString = function () {
    return 'WhitePoint(x=' + this.x2y_1 + ', y=' + this.y2y_1 + ')';
  };
  protoOf(WhitePoint).hashCode = function () {
    var result = getNumberHashCode(this.x2y_1);
    result = imul(result, 31) + getNumberHashCode(this.y2y_1) | 0;
    return result;
  };
  protoOf(WhitePoint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhitePoint))
      return false;
    var tmp0_other_with_cast = other instanceof WhitePoint ? other : THROW_CCE();
    if (!equals(this.x2y_1, tmp0_other_with_cast.x2y_1))
      return false;
    if (!equals(this.y2y_1, tmp0_other_with_cast.y2y_1))
      return false;
    return true;
  };
  function clamp($this, x) {
    return coerceIn(x, -2.0, 2.0);
  }
  function Xyz(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_26().k2x_1, id);
  }
  protoOf(Xyz).g2t = function (component) {
    return -2.0;
  };
  protoOf(Xyz).h2t = function (component) {
    return 2.0;
  };
  protoOf(Xyz).r2x = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  protoOf(Xyz).s2x = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var tmp0_packFloats = clamp(this, v0);
    var tmp1_packFloats = clamp(this, v1);
    var v1_0 = toLong(toBits(tmp0_packFloats));
    var v2_0 = toLong(toBits(tmp1_packFloats));
    return v1_0.a6(32).sd(v2_0.m6(new Long(-1, 0)));
  };
  protoOf(Xyz).t2x = function (v0, v1, v2) {
    return clamp(this, v2);
  };
  protoOf(Xyz).u2x = function (x, y, z, a, colorSpace) {
    return Color_0(clamp(this, x), clamp(this, y), clamp(this, z), a, colorSpace);
  };
  protoOf(Xyz).w2x = function (v) {
    v[0] = clamp(this, v[0]);
    v[1] = clamp(this, v[1]);
    v[2] = clamp(this, v[2]);
    return v;
  };
  function get_DefaultDensity() {
    _init_properties_CanvasDrawScope_kt__90zepm();
    return DefaultDensity;
  }
  var DefaultDensity;
  function obtainFillPaint($this) {
    var tmp0_elvis_lhs = $this.h31_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Paint();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      tmp0_apply.j31(Companion_getInstance_19().d2w_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      $this.h31_1 = tmp0_apply;
      tmp = tmp0_apply;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function obtainStrokePaint($this) {
    var tmp0_elvis_lhs = $this.i31_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Paint();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      tmp0_apply.j31(Companion_getInstance_19().e2w_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      $this.i31_1 = tmp0_apply;
      tmp = tmp0_apply;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function selectPaint($this, drawStyle) {
    var tmp;
    if (equals(drawStyle, Fill_getInstance())) {
      tmp = obtainFillPaint($this);
    } else {
      if (drawStyle instanceof Stroke) {
        // Inline function 'kotlin.apply' call
        var tmp0_apply = obtainStrokePaint($this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.selectPaint.<anonymous>' call
        if (!(tmp0_apply.e2c() === drawStyle.k31_1)) {
          tmp0_apply.d2c(drawStyle.k31_1);
        }
        if (!(tmp0_apply.q31() === drawStyle.m31_1)) {
          tmp0_apply.p31(drawStyle.m31_1);
        }
        if (!(tmp0_apply.s31() === drawStyle.l31_1)) {
          tmp0_apply.r31(drawStyle.l31_1);
        }
        if (!(tmp0_apply.u31() === drawStyle.n31_1)) {
          tmp0_apply.t31(drawStyle.n31_1);
        }
        if (!equals(tmp0_apply.w31(), drawStyle.o31_1)) {
          tmp0_apply.v31(drawStyle.o31_1);
        }
        tmp = tmp0_apply;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = selectPaint($this, style);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    if (!(brush == null)) {
      brush.q2q($this.y31(), tmp0_apply, alpha);
    } else if (!(tmp0_apply.a2p() === alpha)) {
      tmp0_apply.x31(alpha);
    }
    if (!equals(tmp0_apply.a32(), colorFilter)) {
      tmp0_apply.z31(colorFilter);
    }
    if (!(tmp0_apply.c32() === blendMode)) {
      tmp0_apply.b32(blendMode);
    }
    if (!(tmp0_apply.e32() === filterQuality)) {
      tmp0_apply.d32(filterQuality);
    }
    return tmp0_apply;
  }
  function configurePaint$default($this, brush, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_33().v2v_1 : filterQuality;
    return configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = selectPaint($this, style);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    var targetColor = modulate(color, $this, alpha);
    if (!equals(tmp0_apply.g32(), targetColor)) {
      tmp0_apply.f32(targetColor);
    }
    if (!(tmp0_apply.h32() == null)) {
      tmp0_apply.i2c(null);
    }
    if (!equals(tmp0_apply.a32(), colorFilter)) {
      tmp0_apply.z31(colorFilter);
    }
    if (!(tmp0_apply.c32() === blendMode)) {
      tmp0_apply.b32(blendMode);
    }
    if (!(tmp0_apply.e32() === filterQuality)) {
      tmp0_apply.d32(filterQuality);
    }
    return tmp0_apply;
  }
  function configurePaint$default_0($this, color, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_33().v2v_1 : filterQuality;
    return configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function modulate(_this__u8e3s4, $this, alpha) {
    var tmp;
    if (!(alpha === 1.0)) {
      tmp = Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function DrawParams(density, layoutDirection, canvas, size) {
    density = density === VOID ? get_DefaultDensity() : density;
    layoutDirection = layoutDirection === VOID ? LayoutDirection_Ltr_getInstance() : layoutDirection;
    canvas = canvas === VOID ? new EmptyCanvas() : canvas;
    size = size === VOID ? Companion_getInstance_0().i22_1 : size;
    this.i32_1 = density;
    this.j32_1 = layoutDirection;
    this.k32_1 = canvas;
    this.l32_1 = size;
  }
  protoOf(DrawParams).e3 = function () {
    return this.i32_1;
  };
  protoOf(DrawParams).f3 = function () {
    return this.j32_1;
  };
  protoOf(DrawParams).m32 = function () {
    return this.k32_1;
  };
  protoOf(DrawParams).n32 = function () {
    return this.l32_1;
  };
  protoOf(DrawParams).toString = function () {
    return 'DrawParams(density=' + this.i32_1 + ', layoutDirection=' + this.j32_1 + ', canvas=' + this.k32_1 + ', size=' + new Size_0(this.l32_1) + ')';
  };
  protoOf(DrawParams).hashCode = function () {
    var result = hashCode(this.i32_1);
    result = imul(result, 31) + this.j32_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.k32_1) | 0;
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.l32_1) | 0;
    return result;
  };
  protoOf(DrawParams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DrawParams))
      return false;
    var tmp0_other_with_cast = other instanceof DrawParams ? other : THROW_CCE();
    if (!equals(this.i32_1, tmp0_other_with_cast.i32_1))
      return false;
    if (!this.j32_1.equals(tmp0_other_with_cast.j32_1))
      return false;
    if (!equals(this.k32_1, tmp0_other_with_cast.k32_1))
      return false;
    if (!equals(this.l32_1, tmp0_other_with_cast.l32_1))
      return false;
    return true;
  };
  function CanvasDrawScope$drawContext$1(this$0) {
    this.p32_1 = this$0;
    this.o32_1 = asDrawTransform(this);
  }
  protoOf(CanvasDrawScope$drawContext$1).u2e = function () {
    return this.p32_1.f31_1.k32_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).q32 = function (value) {
    this.p32_1.f31_1.l32_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).y31 = function () {
    return this.p32_1.f31_1.l32_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).r32 = function () {
    return this.o32_1;
  };
  function CanvasDrawScope() {
    this.f31_1 = new DrawParams();
    var tmp = this;
    tmp.g31_1 = new CanvasDrawScope$drawContext$1(this);
    this.h31_1 = null;
    this.i31_1 = null;
  }
  protoOf(CanvasDrawScope).s32 = function () {
    return this.f31_1.j32_1;
  };
  protoOf(CanvasDrawScope).g23 = function () {
    return this.f31_1.i32_1.g23();
  };
  protoOf(CanvasDrawScope).h23 = function () {
    return this.f31_1.i32_1.h23();
  };
  protoOf(CanvasDrawScope).t32 = function () {
    return this.g31_1;
  };
  protoOf(CanvasDrawScope).c2w = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.f31_1.k32_1.f2r(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).z2v = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.f31_1.k32_1.f2r(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).w32 = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    return this.f31_1.k32_1.i2r(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint(this, null, style, alpha, colorFilter, blendMode, filterQuality));
  };
  protoOf(CanvasDrawScope).b2w = function (brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode) {
    return this.f31_1.k32_1.g2r(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).y2v = function (color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode) {
    return this.f31_1.k32_1.g2r(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).x2v = function (path, color, alpha, style, colorFilter, blendMode) {
    return this.f31_1.k32_1.h2r(path, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).a2w = function (path, brush, alpha, style, colorFilter, blendMode) {
    return this.f31_1.k32_1.h2r(path, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  function asDrawTransform(_this__u8e3s4) {
    _init_properties_CanvasDrawScope_kt__90zepm();
    return new asDrawTransform$1(_this__u8e3s4);
  }
  function asDrawTransform$1($this_asDrawTransform) {
    this.c33_1 = $this_asDrawTransform;
  }
  protoOf(asDrawTransform$1).y2q = function (left, top, right, bottom, clipOp) {
    this.c33_1.u2e().y2q(left, top, right, bottom, clipOp);
  };
  protoOf(asDrawTransform$1).u2q = function (left, top) {
    this.c33_1.u2e().u2q(left, top);
  };
  protoOf(asDrawTransform$1).d33 = function (scaleX, scaleY, pivot) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.c33_1.u2e();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.scale.<anonymous>' call
    tmp0_apply.u2q(_Offset___get_x__impl__xvi35n(pivot), _Offset___get_y__impl__8bzhra(pivot));
    tmp0_apply.v2q(scaleX, scaleY);
    tmp0_apply.u2q(-_Offset___get_x__impl__xvi35n(pivot), -_Offset___get_y__impl__8bzhra(pivot));
  };
  var properties_initialized_CanvasDrawScope_kt_93ztlk;
  function _init_properties_CanvasDrawScope_kt__90zepm() {
    if (!properties_initialized_CanvasDrawScope_kt_93ztlk) {
      properties_initialized_CanvasDrawScope_kt_93ztlk = true;
      DefaultDensity = Density(1.0, 1.0);
    }
  }
  function DrawStyle() {
  }
  function offsetSize(_this__u8e3s4, $this, offset) {
    return Size(_Size___get_width__impl__58y75t(_this__u8e3s4) - _Offset___get_x__impl__xvi35n(offset), _Size___get_height__impl__a04p02(_this__u8e3s4) - _Offset___get_y__impl__8bzhra(offset));
  }
  function Companion_21() {
    Companion_instance_21 = this;
    this.u2v_1 = Companion_getInstance_11().p2p_1;
    this.v2v_1 = Companion_getInstance_15().o2t_1;
  }
  var Companion_instance_21;
  function Companion_getInstance_33() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function DrawScope() {
  }
  function Fill() {
    Fill_instance = this;
    DrawStyle.call(this);
  }
  var Fill_instance;
  function Fill_getInstance() {
    if (Fill_instance == null)
      new Fill();
    return Fill_instance;
  }
  function Companion_22() {
    Companion_instance_22 = this;
    this.e33_1 = 0.0;
    this.f33_1 = 4.0;
    this.g33_1 = Companion_getInstance_23().x2w_1;
    this.h33_1 = Companion_getInstance_24().b2x_1;
  }
  var Companion_instance_22;
  function Companion_getInstance_34() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function Stroke(width, miter, cap, join, pathEffect) {
    Companion_getInstance_34();
    width = width === VOID ? 0.0 : width;
    var tmp;
    if (miter === VOID) {
      Companion_getInstance_34();
      tmp = 4.0;
    } else {
      tmp = miter;
    }
    miter = tmp;
    cap = cap === VOID ? Companion_getInstance_34().g33_1 : cap;
    join = join === VOID ? Companion_getInstance_34().h33_1 : join;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    DrawStyle.call(this);
    this.k31_1 = width;
    this.l31_1 = miter;
    this.m31_1 = cap;
    this.n31_1 = join;
    this.o31_1 = pathEffect;
  }
  protoOf(Stroke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stroke))
      return false;
    if (!(this.k31_1 === other.k31_1))
      return false;
    if (!(this.l31_1 === other.l31_1))
      return false;
    if (!(this.m31_1 === other.m31_1))
      return false;
    if (!(this.n31_1 === other.n31_1))
      return false;
    if (!equals(this.o31_1, other.o31_1))
      return false;
    return true;
  };
  protoOf(Stroke).hashCode = function () {
    var result = getNumberHashCode(this.k31_1);
    result = imul(31, result) + getNumberHashCode(this.l31_1) | 0;
    result = imul(31, result) + StrokeCap__hashCode_impl_posxk8(this.m31_1) | 0;
    result = imul(31, result) + StrokeJoin__hashCode_impl_3pyh8w(this.n31_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.o31_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(Stroke).toString = function () {
    return 'Stroke(width=' + this.k31_1 + ', miter=' + this.l31_1 + ', cap=' + new StrokeCap(this.m31_1) + ', join=' + new StrokeJoin(this.n31_1) + ', pathEffect=' + this.o31_1 + ')';
  };
  function EmptyCanvas() {
  }
  protoOf(EmptyCanvas).r2q = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).s2q = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).t2q = function (bounds, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).u2q = function (dx, dy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).v2q = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).w2q = function (matrix) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).y2q = function (left, top, right, bottom, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).c2r = function (path, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).f2r = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).g2r = function (left, top, right, bottom, radiusX, radiusY, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).h2r = function (path, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).i2r = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  function toSkia(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_11().m2p_1 ? BlendMode_CLEAR_getInstance() : _this__u8e3s4 === Companion_getInstance_11().n2p_1 ? BlendMode_SRC_getInstance() : _this__u8e3s4 === Companion_getInstance_11().o2p_1 ? BlendMode_DST_getInstance() : _this__u8e3s4 === Companion_getInstance_11().p2p_1 ? BlendMode_SRC_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_11().q2p_1 ? BlendMode_DST_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_11().r2p_1 ? BlendMode_SRC_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_11().s2p_1 ? BlendMode_DST_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_11().t2p_1 ? BlendMode_SRC_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_11().u2p_1 ? BlendMode_DST_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_11().v2p_1 ? BlendMode_SRC_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_11().w2p_1 ? BlendMode_DST_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_11().x2p_1 ? BlendMode_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_11().y2p_1 ? BlendMode_PLUS_getInstance() : _this__u8e3s4 === Companion_getInstance_11().z2p_1 ? BlendMode_MODULATE_getInstance() : _this__u8e3s4 === Companion_getInstance_11().a2q_1 ? BlendMode_SCREEN_getInstance() : _this__u8e3s4 === Companion_getInstance_11().b2q_1 ? BlendMode_OVERLAY_getInstance() : _this__u8e3s4 === Companion_getInstance_11().c2q_1 ? BlendMode_DARKEN_getInstance() : _this__u8e3s4 === Companion_getInstance_11().d2q_1 ? BlendMode_LIGHTEN_getInstance() : _this__u8e3s4 === Companion_getInstance_11().e2q_1 ? BlendMode_COLOR_DODGE_getInstance() : _this__u8e3s4 === Companion_getInstance_11().f2q_1 ? BlendMode_COLOR_BURN_getInstance() : _this__u8e3s4 === Companion_getInstance_11().g2q_1 ? BlendMode_HARD_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_11().h2q_1 ? BlendMode_SOFT_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_11().i2q_1 ? BlendMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_11().j2q_1 ? BlendMode_EXCLUSION_getInstance() : _this__u8e3s4 === Companion_getInstance_11().k2q_1 ? BlendMode_MULTIPLY_getInstance() : _this__u8e3s4 === Companion_getInstance_11().l2q_1 ? BlendMode_HUE_getInstance() : _this__u8e3s4 === Companion_getInstance_11().m2q_1 ? BlendMode_SATURATION_getInstance() : _this__u8e3s4 === Companion_getInstance_11().n2q_1 ? BlendMode_COLOR_getInstance() : _this__u8e3s4 === Companion_getInstance_11().o2q_1 ? BlendMode_LUMINOSITY_getInstance() : BlendMode_SRC_OVER_getInstance();
  }
  function toSkiaRect(_this__u8e3s4) {
    return Companion_getInstance_3().h2e(_this__u8e3s4.o21_1, _this__u8e3s4.p21_1, _this__u8e3s4.q21_1, _this__u8e3s4.r21_1);
  }
  function toSkiaRRect(_this__u8e3s4) {
    var radii = new Float32Array(8);
    radii[0] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.c22_1);
    radii[1] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.c22_1);
    radii[2] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.d22_1);
    radii[3] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.d22_1);
    radii[4] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.e22_1);
    radii[5] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.e22_1);
    radii[6] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.f22_1);
    radii[7] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.f22_1);
    return Companion_getInstance_4().g2e(_this__u8e3s4.y21_1, _this__u8e3s4.z21_1, _this__u8e3s4.a22_1, _this__u8e3s4.b22_1, radii);
  }
  function toComposeRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.w25_1, _this__u8e3s4.x25_1, _this__u8e3s4.y25_1, _this__u8e3s4.z25_1);
  }
  function asComposeCanvas(_this__u8e3s4) {
    return new SkiaBackedCanvas(_this__u8e3s4);
  }
  function get_nativeCanvas(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).i33_1;
  }
  function set_alphaMultiplier(_this__u8e3s4, value) {
    (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).j33_1 = value;
  }
  function _get_skia__ddpejf(_this__u8e3s4, $this) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = _this__u8e3s4 instanceof SkiaBackedPaint ? _this__u8e3s4 : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.<get-skia>.<anonymous>' call
    tmp0_apply.v33($this.j33_1);
    return tmp0_apply.k33_1;
  }
  function drawImageRect($this, image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    var bitmap = asSkiaBitmap(image);
    // Inline function 'org.jetbrains.skia.impl.use' call
    var tmp0_use = Companion_getInstance_5().d2b(bitmap);
    var tmp;
    try {
      // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.drawImageRect.<anonymous>' call
      tmp = $this.i33_1.k26(tmp0_use, Companion_getInstance_3().i2e(_Offset___get_x__impl__xvi35n(srcOffset), _Offset___get_y__impl__8bzhra(srcOffset), _Size___get_width__impl__58y75t(srcSize), _Size___get_height__impl__a04p02(srcSize)), Companion_getInstance_3().i2e(_Offset___get_x__impl__xvi35n(dstOffset), _Offset___get_y__impl__8bzhra(dstOffset), _Size___get_width__impl__58y75t(dstSize), _Size___get_height__impl__a04p02(dstSize)), toSkia_2(paint.e32(), $this), _get_skia__ddpejf(paint, $this), true);
    }finally {
      tmp0_use.y13();
    }
  }
  function toSkia_0(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_12().a2r_1 ? ClipMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_12().b2r_1 ? ClipMode_INTERSECT_getInstance() : ClipMode_INTERSECT_getInstance();
  }
  function toSkia_1(_this__u8e3s4, $this) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[4];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[8];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[12];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[1];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[5];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[9];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[13];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[2];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[6];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[10];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[14];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[3];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[7];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[11];
    var tmp$ret$15;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    tmp$ret$15 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[15];
    return new Matrix44(new Float32Array([tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp$ret$15]));
  }
  function toSkia_2(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_15().o2t_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance()) : _this__u8e3s4 === Companion_getInstance_15().p2t_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NEAREST_getInstance()) : _this__u8e3s4 === Companion_getInstance_15().q2t_1 ? new CubicResampler(1 / 3.0, 1 / 3.0) : new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
  }
  function SkiaBackedCanvas(skia) {
    this.i33_1 = skia;
    this.j33_1 = 1.0;
  }
  protoOf(SkiaBackedCanvas).r2q = function () {
    this.i33_1.w26();
  };
  protoOf(SkiaBackedCanvas).s2q = function () {
    this.i33_1.y26();
  };
  protoOf(SkiaBackedCanvas).t2q = function (bounds, paint) {
    this.i33_1.x26(bounds.o21_1, bounds.p21_1, bounds.q21_1, bounds.r21_1, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).u2q = function (dx, dy) {
    this.i33_1.w21(dx, dy);
  };
  protoOf(SkiaBackedCanvas).v2q = function (sx, sy) {
    this.i33_1.t26(sx, sy);
  };
  protoOf(SkiaBackedCanvas).w2q = function (matrix) {
    if (!isIdentity(matrix)) {
      this.i33_1.u26(toSkia_1(matrix, this));
    }
  };
  protoOf(SkiaBackedCanvas).y2q = function (left, top, right, bottom, clipOp) {
    var antiAlias = true;
    this.i33_1.q26(Companion_getInstance_3().h2e(left, top, right, bottom), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).c2r = function (path, clipOp) {
    var antiAlias = true;
    this.i33_1.s26(asSkiaPath(path), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).f2r = function (left, top, right, bottom, paint) {
    this.i33_1.v25(Companion_getInstance_3().h2e(left, top, right, bottom), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).g2r = function (left, top, right, bottom, radiusX, radiusY, paint) {
    this.i33_1.a26(Companion_getInstance_4().f2e(left, top, right, bottom, radiusX, radiusY), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).h2r = function (path, paint) {
    this.i33_1.j26(asSkiaPath(path), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).i2r = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    drawImageRect(this, image, Offset(_IntOffset___get_x__impl__qiqr5o(srcOffset), _IntOffset___get_y__impl__2avpwj(srcOffset)), Size(_IntSize___get_width__impl__d9yl4o(srcSize), _IntSize___get_height__impl__prv63b(srcSize)), Offset(_IntOffset___get_x__impl__qiqr5o(dstOffset), _IntOffset___get_y__impl__2avpwj(dstOffset)), Size(_IntSize___get_width__impl__d9yl4o(dstSize), _IntSize___get_height__impl__prv63b(dstSize)), paint);
  };
  function ActualCanvas(image) {
    var skiaBitmap = asSkiaBitmap(image);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!skiaBitmap.b25()) {
      // Inline function 'androidx.compose.ui.graphics.ActualCanvas.<anonymous>' call
      var message = 'Cannot draw on immutable ImageBitmap';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new SkiaBackedCanvas(Canvas_init_$Create$(skiaBitmap));
  }
  function asComposePaint(_this__u8e3s4) {
    return new SkiaBackedPaint(_this__u8e3s4);
  }
  function Paint() {
    return new SkiaBackedPaint();
  }
  function updateAlpha($this, alpha, multiplier) {
    $this.k33_1.b2c(toArgb(Color__copy$default_impl_ectz3s(Color_3($this.k33_1.c2c()), alpha * multiplier)));
  }
  function updateAlpha$default($this, alpha, multiplier, $super) {
    alpha = alpha === VOID ? $this.a2p() : alpha;
    multiplier = multiplier === VOID ? $this.l33_1 : multiplier;
    return updateAlpha($this, alpha, multiplier);
  }
  function toSkia_3(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_19().d2w_1 ? PaintMode_FILL_getInstance() : _this__u8e3s4 === Companion_getInstance_19().e2w_1 ? PaintMode_STROKE_getInstance() : PaintMode_FILL_getInstance();
  }
  function toSkia_4(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_23().x2w_1 ? PaintStrokeCap_BUTT_getInstance() : _this__u8e3s4 === Companion_getInstance_23().y2w_1 ? PaintStrokeCap_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_23().z2w_1 ? PaintStrokeCap_SQUARE_getInstance() : PaintStrokeCap_BUTT_getInstance();
  }
  function toSkia_5(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_24().b2x_1 ? PaintStrokeJoin_MITER_getInstance() : _this__u8e3s4 === Companion_getInstance_24().c2x_1 ? PaintStrokeJoin_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_24().d2x_1 ? PaintStrokeJoin_BEVEL_getInstance() : PaintStrokeJoin_MITER_getInstance();
  }
  function SkiaBackedPaint(skia) {
    skia = skia === VOID ? Paint_init_$Create$() : skia;
    this.k33_1 = skia;
    this.l33_1 = 1.0;
    this.m33_1 = Companion_getInstance_11().p2p_1;
    this.n33_1 = Companion_getInstance_19().d2w_1;
    this.o33_1 = Companion_getInstance_23().x2w_1;
    this.p33_1 = Companion_getInstance_24().c2x_1;
    this.q33_1 = 0.0;
    this.r33_1 = Companion_getInstance_15().p2t_1;
    this.s33_1 = null;
    this.t33_1 = null;
    this.u33_1 = null;
  }
  protoOf(SkiaBackedPaint).w33 = function () {
    return this.k33_1;
  };
  protoOf(SkiaBackedPaint).v33 = function (value) {
    var multiplier = coerceIn(value, 0.0, 1.0);
    updateAlpha$default(this, VOID, multiplier);
    this.l33_1 = multiplier;
  };
  protoOf(SkiaBackedPaint).x31 = function (value) {
    updateAlpha$default(this, value);
  };
  protoOf(SkiaBackedPaint).a2p = function () {
    return _Color___get_alpha__impl__wcfyv1(Color_3(this.k33_1.c2c()));
  };
  protoOf(SkiaBackedPaint).f32 = function (color) {
    this.k33_1.b2c(toArgb(color));
  };
  protoOf(SkiaBackedPaint).g32 = function () {
    return Color_3(this.k33_1.c2c());
  };
  protoOf(SkiaBackedPaint).b32 = function (value) {
    this.k33_1.k2c(toSkia(value));
    this.m33_1 = value;
  };
  protoOf(SkiaBackedPaint).c32 = function () {
    return this.m33_1;
  };
  protoOf(SkiaBackedPaint).j31 = function (value) {
    this.k33_1.a2c(toSkia_3(value, this));
    this.n33_1 = value;
  };
  protoOf(SkiaBackedPaint).x33 = function () {
    return this.n33_1;
  };
  protoOf(SkiaBackedPaint).d2c = function (value) {
    this.k33_1.d2c(value);
  };
  protoOf(SkiaBackedPaint).e2c = function () {
    return this.k33_1.e2c();
  };
  protoOf(SkiaBackedPaint).p31 = function (value) {
    this.k33_1.g2c(toSkia_4(value, this));
    this.o33_1 = value;
  };
  protoOf(SkiaBackedPaint).q31 = function () {
    return this.o33_1;
  };
  protoOf(SkiaBackedPaint).t31 = function (value) {
    this.k33_1.h2c(toSkia_5(value, this));
    this.p33_1 = value;
  };
  protoOf(SkiaBackedPaint).u31 = function () {
    return this.p33_1;
  };
  protoOf(SkiaBackedPaint).r31 = function (value) {
    this.k33_1.f2c(value);
    this.q33_1 = value;
  };
  protoOf(SkiaBackedPaint).s31 = function () {
    return this.q33_1;
  };
  protoOf(SkiaBackedPaint).d32 = function (_set____db54di) {
    this.r33_1 = _set____db54di;
  };
  protoOf(SkiaBackedPaint).e32 = function () {
    return this.r33_1;
  };
  protoOf(SkiaBackedPaint).i2c = function (value) {
    this.k33_1.i2c(value);
    this.s33_1 = value;
  };
  protoOf(SkiaBackedPaint).h32 = function () {
    return this.s33_1;
  };
  protoOf(SkiaBackedPaint).z31 = function (value) {
    this.k33_1.j2c(value == null ? null : asSkiaColorFilter(value));
    this.t33_1 = value;
  };
  protoOf(SkiaBackedPaint).a32 = function () {
    return this.t33_1;
  };
  protoOf(SkiaBackedPaint).v31 = function (value) {
    var tmp0_safe_receiver = (value == null ? true : value instanceof SkiaBackedPathEffect) ? value : THROW_CCE();
    this.k33_1.n2c(tmp0_safe_receiver == null ? null : asSkiaPathEffect(tmp0_safe_receiver));
    this.u33_1 = value;
  };
  protoOf(SkiaBackedPaint).w31 = function () {
    return this.u33_1;
  };
  function Path_0() {
    return new SkiaBackedPath();
  }
  function toSkiaOperation(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_21().n2w_1 ? PathOp_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_21().o2w_1 ? PathOp_INTERSECT_getInstance() : _this__u8e3s4 === Companion_getInstance_21().p2w_1 ? PathOp_UNION_getInstance() : _this__u8e3s4 === Companion_getInstance_21().q2w_1 ? PathOp_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_21().r2w_1 ? PathOp_REVERSE_DIFFERENCE_getInstance() : PathOp_XOR_getInstance();
  }
  function SkiaBackedPath(internalPath) {
    internalPath = internalPath === VOID ? Path_init_$Create$() : internalPath;
    this.y33_1 = internalPath;
  }
  protoOf(SkiaBackedPath).z33 = function (value) {
    var tmp = this.y33_1;
    var tmp_0;
    if (value === Companion_getInstance_20().m2w_1) {
      tmp_0 = PathFillMode_EVEN_ODD_getInstance();
    } else {
      tmp_0 = PathFillMode_WINDING_getInstance();
    }
    tmp.t2c(tmp_0);
  };
  protoOf(SkiaBackedPath).a34 = function () {
    if (this.y33_1.u2c().equals(PathFillMode_EVEN_ODD_getInstance())) {
      return Companion_getInstance_20().m2w_1;
    } else {
      return Companion_getInstance_20().l2w_1;
    }
  };
  protoOf(SkiaBackedPath).f2w = function (rect) {
    this.y33_1.z2c(toSkiaRect(rect), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).t2v = function (roundRect) {
    this.y33_1.b2d(toSkiaRRect(roundRect), PathDirection_COUNTER_CLOCKWISE_getInstance());
  };
  protoOf(SkiaBackedPath).g2w = function (path, offset) {
    this.y33_1.d2d(asSkiaPath(path), _Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(SkiaBackedPath).v1a = function () {
    var fillType = this.a34();
    this.y33_1.v2c();
    this.z33(fillType);
  };
  protoOf(SkiaBackedPath).i2w = function (offset) {
    this.y33_1.f2d(Companion_getInstance_6().v2b(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset)));
  };
  protoOf(SkiaBackedPath).j2w = function () {
    var bounds = this.y33_1.w2c();
    return new Rect(bounds.w25_1, bounds.x25_1, bounds.y25_1, bounds.z25_1);
  };
  protoOf(SkiaBackedPath).k2w = function (path1, path2, operation) {
    var path = Companion_getInstance_7().p2c(asSkiaPath(path1), asSkiaPath(path2), toSkiaOperation(operation, this));
    var tmp = this;
    tmp.y33_1 = path == null ? this.y33_1 : path;
    return !(path == null);
  };
  protoOf(SkiaBackedPath).rk = function () {
    return this.y33_1.rk();
  };
  function asSkiaPath(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedPath) {
      tmp = _this__u8e3s4.y33_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Path');
    }
    return tmp;
  }
  function SkiaBackedPathEffect() {
  }
  function asSkiaPathEffect(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedPathEffect ? _this__u8e3s4 : THROW_CCE()).b34_1;
  }
  function asSkiaColorFilter(_this__u8e3s4) {
    return _this__u8e3s4.m2t_1;
  }
  function actualTintColorFilter(color, blendMode) {
    return new ColorFilter(Companion_getInstance_8().k27(toArgb(color), toSkia(blendMode)));
  }
  function asSkiaBitmap(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedImageBitmap) {
      tmp = _this__u8e3s4.c34_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Image');
    }
    return tmp;
  }
  function SkiaBackedImageBitmap(bitmap) {
    this.c34_1 = bitmap;
    this.d34_1 = toComposeColorSpace(this.c34_1.m25());
    this.e34_1 = toComposeConfig(this.c34_1.l25());
    this.f34_1 = !this.c34_1.n25();
  }
  protoOf(SkiaBackedImageBitmap).g34 = function () {
    return this.e34_1;
  };
  protoOf(SkiaBackedImageBitmap).u21 = function () {
    return this.c34_1.u21();
  };
  protoOf(SkiaBackedImageBitmap).t21 = function () {
    return this.c34_1.t21();
  };
  protoOf(SkiaBackedImageBitmap).h34 = function () {
    return Unit_getInstance();
  };
  function toComposeColorSpace(_this__u8e3s4) {
    return equals(_this__u8e3s4, Companion_getInstance_9().t27_1) ? ColorSpaces_getInstance().o2r_1 : equals(_this__u8e3s4, Companion_getInstance_9().u27_1) ? ColorSpaces_getInstance().p2r_1 : equals(_this__u8e3s4, Companion_getInstance_9().v27_1) ? ColorSpaces_getInstance().v2r_1 : ColorSpaces_getInstance().o2r_1;
  }
  function toComposeConfig(_this__u8e3s4) {
    return _this__u8e3s4.equals(Companion_getInstance_10().x27_1) ? Companion_getInstance_17().w2u_1 : _this__u8e3s4.equals(ColorType_ALPHA_8_getInstance()) ? Companion_getInstance_17().x2u_1 : _this__u8e3s4.equals(ColorType_RGB_565_getInstance()) ? Companion_getInstance_17().y2u_1 : _this__u8e3s4.equals(ColorType_RGBA_F16_getInstance()) ? Companion_getInstance_17().z2u_1 : Companion_getInstance_17().w2u_1;
  }
  function ActualImageBitmap(width, height, config, hasAlpha, colorSpace) {
    var colorType = toSkiaColorType(config);
    var alphaType = hasAlpha ? ColorAlphaType_PREMUL_getInstance() : ColorAlphaType_OPAQUE_getInstance();
    var skiaColorSpace = toSkiaColorSpace(colorSpace);
    var colorInfo = new ColorInfo(colorType, alphaType, skiaColorSpace);
    var imageInfo = new ImageInfo(colorInfo, width, height);
    var bitmap = Bitmap_init_$Create$();
    bitmap.j25(imageInfo);
    return new SkiaBackedImageBitmap(bitmap);
  }
  function toSkiaColorType(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_17().w2u_1 ? Companion_getInstance_10().x27_1 : _this__u8e3s4 === Companion_getInstance_17().x2u_1 ? ColorType_ALPHA_8_getInstance() : _this__u8e3s4 === Companion_getInstance_17().y2u_1 ? ColorType_RGB_565_getInstance() : _this__u8e3s4 === Companion_getInstance_17().z2u_1 ? ColorType_RGBA_F16_getInstance() : Companion_getInstance_10().x27_1;
  }
  function toSkiaColorSpace(_this__u8e3s4) {
    return _this__u8e3s4.equals(ColorSpaces_getInstance().o2r_1) ? Companion_getInstance_9().t27_1 : _this__u8e3s4.equals(ColorSpaces_getInstance().p2r_1) ? Companion_getInstance_9().u27_1 : _this__u8e3s4.equals(ColorSpaces_getInstance().v2r_1) ? Companion_getInstance_9().v27_1 : Companion_getInstance_9().t27_1;
  }
  //region block: post-declaration
  protoOf(CanvasDrawScope).u32 = drawRect$default;
  protoOf(CanvasDrawScope).v32 = drawRect$default_0;
  protoOf(CanvasDrawScope).x32 = drawImage$default;
  protoOf(CanvasDrawScope).y32 = drawRoundRect$default;
  protoOf(CanvasDrawScope).z32 = drawPath$default;
  protoOf(CanvasDrawScope).a33 = drawPath$default_0;
  protoOf(CanvasDrawScope).b33 = get_center_0;
  protoOf(CanvasDrawScope).y31 = get_size;
  protoOf(CanvasDrawScope).i23 = toPx;
  protoOf(CanvasDrawScope).j23 = toPx_0;
  protoOf(CanvasDrawScope).n23 = toSize;
  protoOf(EmptyCanvas).d2r = clipPath$default;
  protoOf(EmptyCanvas).x2q = clipRect;
  protoOf(EmptyCanvas).z2q = clipRect$default;
  protoOf(EmptyCanvas).e2r = drawRect;
  protoOf(SkiaBackedCanvas).d2r = clipPath$default;
  protoOf(SkiaBackedCanvas).x2q = clipRect;
  protoOf(SkiaBackedCanvas).z2q = clipRect$default;
  protoOf(SkiaBackedCanvas).e2r = drawRect;
  protoOf(SkiaBackedPath).h2w = addPath$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CanvasDrawScope;
  _.$_$.b = DrawScope;
  _.$_$.c = Stroke;
  _.$_$.d = BlendMode;
  _.$_$.e = Canvas_0;
  _.$_$.f = Color_2;
  _.$_$.g = Color_1;
  _.$_$.h = Color;
  _.$_$.i = ImageBitmapConfig;
  _.$_$.j = ImageBitmap;
  _.$_$.k = Generic;
  _.$_$.l = Rectangle;
  _.$_$.m = Rounded;
  _.$_$.n = Paint;
  _.$_$.o = Path_0;
  _.$_$.p = get_RectangleShape;
  _.$_$.q = ShaderBrush;
  _.$_$.r = SolidColor;
  _.$_$.s = set_alphaMultiplier;
  _.$_$.t = asComposeCanvas;
  _.$_$.u = asComposePaint;
  _.$_$.v = asSkiaPath;
  _.$_$.w = compositeOver;
  _.$_$.x = drawOutline;
  _.$_$.y = drawOutline_0;
  _.$_$.z = get_nativeCanvas;
  _.$_$.a1 = toArgb;
  _.$_$.b1 = toComposeRect;
  _.$_$.c1 = toSkiaRRect;
  _.$_$.d1 = toSkiaRect;
  _.$_$.e1 = drawImage$default;
  _.$_$.f1 = drawPath$default_0;
  _.$_$.g1 = drawPath$default;
  _.$_$.h1 = drawRect$default;
  _.$_$.i1 = drawRect$default_0;
  _.$_$.j1 = drawRoundRect$default;
  _.$_$.k1 = BlendMode__hashCode_impl_93ceri;
  _.$_$.l1 = _Color___init__impl__r6cqi2;
  _.$_$.m1 = _Color___get_alpha__impl__wcfyv1;
  _.$_$.n1 = Color__hashCode_impl_vjyivj;
  _.$_$.o1 = _Color___get_value__impl__1pls5m;
  _.$_$.p1 = _Matrix___init__impl__q3kp4w;
  _.$_$.q1 = Matrix__map_impl_7meu7m;
  _.$_$.r1 = Matrix__map_impl_7meu7m_0;
  _.$_$.s1 = Matrix__reset_impl_4l49i7;
  _.$_$.t1 = Matrix__rotateX_impl_3e5y7j;
  _.$_$.u1 = Matrix__rotateY_impl_2x4btc;
  _.$_$.v1 = Matrix__rotateZ_impl_2g2pf5;
  _.$_$.w1 = Matrix__timesAssign_impl_oas521;
  _.$_$.x1 = _Matrix___get_values__impl__fblr7b;
  _.$_$.y1 = Color__copy$default_impl_ectz3s;
  _.$_$.z1 = Matrix__scale$default_impl_snaws9;
  _.$_$.a2 = Matrix__translate$default_impl_10t8ql;
  _.$_$.b2 = Companion_getInstance_33;
  _.$_$.c2 = Fill_getInstance;
  _.$_$.d2 = Companion_getInstance_11;
  _.$_$.e2 = Companion_getInstance_12;
  _.$_$.f2 = Companion_getInstance_13;
  _.$_$.g2 = Companion_getInstance_14;
  _.$_$.h2 = Companion_getInstance_17;
  _.$_$.i2 = Companion_getInstance_19;
  _.$_$.j2 = Companion_getInstance_21;
  _.$_$.k2 = Companion_getInstance_22;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-ui-graphics.js.map
