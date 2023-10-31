(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'skiko-kjs'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'skiko-kjs'.");
    }
    root['skiko-kjs'] = factory(typeof this['skiko-kjs'] === 'undefined' ? {} : this['skiko-kjs'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.f7;
  var objectMeta = kotlin_kotlin.$_$.e7;
  var VOID = kotlin_kotlin.$_$.na;
  var setMetadataFor = kotlin_kotlin.$_$.g7;
  var classMeta = kotlin_kotlin.$_$.g6;
  var objectCreate = kotlin_kotlin.$_$.d7;
  var Unit_getInstance = kotlin_kotlin.$_$.m2;
  var ensureNotNull = kotlin_kotlin.$_$.t9;
  var Enum = kotlin_kotlin.$_$.d9;
  var equals = kotlin_kotlin.$_$.j6;
  var hashCode = kotlin_kotlin.$_$.r6;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.z9;
  var toBits = kotlin_kotlin.$_$.ga;
  var compareTo = kotlin_kotlin.$_$.h6;
  var THROW_CCE = kotlin_kotlin.$_$.m9;
  var isCharSequence = kotlin_kotlin.$_$.v6;
  var trim = kotlin_kotlin.$_$.x8;
  var toString = kotlin_kotlin.$_$.j7;
  var split = kotlin_kotlin.$_$.s8;
  var getOrNull = kotlin_kotlin.$_$.d4;
  var toIntOrNull = kotlin_kotlin.$_$.t8;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z1;
  var fillArrayVal = kotlin_kotlin.$_$.k6;
  var splitToSequence = kotlin_kotlin.$_$.r8;
  var mapNotNull = kotlin_kotlin.$_$.e8;
  var toList = kotlin_kotlin.$_$.i8;
  var copyToArray = kotlin_kotlin.$_$.r3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.a2;
  var uintCompare = kotlin_kotlin.$_$.la;
  var Companion_getInstance = kotlin_kotlin.$_$.l2;
  var UInt = kotlin_kotlin.$_$.o9;
  var isNaN_0 = kotlin_kotlin.$_$.v9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var charSequenceGet = kotlin_kotlin.$_$.d6;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.u1;
  var numberToChar = kotlin_kotlin.$_$.a7;
  var charArrayOf = kotlin_kotlin.$_$.c6;
  var concatToString = kotlin_kotlin.$_$.k8;
  var interfaceMeta = kotlin_kotlin.$_$.t6;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var decodeToString = kotlin_kotlin.$_$.m8;
  var contentEquals = kotlin_kotlin.$_$.l3;
  var contentHashCode = kotlin_kotlin.$_$.n3;
  var contentHashCode_0 = kotlin_kotlin.$_$.m3;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var NotImplementedError = kotlin_kotlin.$_$.j9;
  var last = kotlin_kotlin.$_$.m4;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.g2;
  var floatFromBits = kotlin_kotlin.$_$.l6;
  var joinToString = kotlin_kotlin.$_$.h4;
  var Error_init_$Create$ = kotlin_kotlin.$_$.z;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var until = kotlin_kotlin.$_$.x7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.i3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var toBits_0 = kotlin_kotlin.$_$.ha;
  var getNumberHashCode = kotlin_kotlin.$_$.n6;
  var Long = kotlin_kotlin.$_$.h9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var getStringHashCode = kotlin_kotlin.$_$.q6;
  var listOf = kotlin_kotlin.$_$.n4;
  var RuntimeException = kotlin_kotlin.$_$.l9;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.n1;
  var captureStack = kotlin_kotlin.$_$.b6;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.u;
  var charSequenceLength = kotlin_kotlin.$_$.e6;
  var lazy = kotlin_kotlin.$_$.y9;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var arrayIterator = kotlin_kotlin.$_$.a6;
  var toIntArray = kotlin_kotlin.$_$.b5;
  var plus = kotlin_kotlin.$_$.aa;
  var toString_0 = kotlin_kotlin.$_$.v8;
  var numberToLong = kotlin_kotlin.$_$.c7;
  var numberToInt = kotlin_kotlin.$_$.b7;
  var setOf = kotlin_kotlin.$_$.w4;
  var contains = kotlin_kotlin.$_$.l8;
  var defineProp = kotlin_kotlin.$_$.i6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder, '_FinalizerHolder', objectMeta);
  setMetadataFor(Native, 'Native', classMeta);
  setMetadataFor(Managed, 'Managed', classMeta, Native);
  setMetadataFor(BackendRenderTarget, 'BackendRenderTarget', classMeta, Managed);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_0, '_FinalizerHolder', objectMeta);
  function get_width() {
    return this.y24().e25_1;
  }
  function get_height() {
    return this.y24().f25_1;
  }
  function get_colorType() {
    return this.y24().d25_1.g25_1;
  }
  function get_colorSpace() {
    return this.y24().d25_1.i25_1;
  }
  function get_isOpaque() {
    return this.y24().d25_1.n25();
  }
  setMetadataFor(IHasImageInfo, 'IHasImageInfo', interfaceMeta);
  setMetadataFor(Bitmap, 'Bitmap', classMeta, Managed, [Managed, IHasImageInfo]);
  setMetadataFor(BlendMode, 'BlendMode', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_1, '_FinalizerHolder', objectMeta);
  setMetadataFor(Canvas, 'Canvas', classMeta, Managed);
  setMetadataFor(ClipMode, 'ClipMode', classMeta, Enum);
  setMetadataFor(Color, 'Color', objectMeta);
  setMetadataFor(ColorAlphaType, 'ColorAlphaType', classMeta, Enum);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(RefCnt, 'RefCnt', classMeta, Managed);
  setMetadataFor(ColorFilter, 'ColorFilter', classMeta, RefCnt);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(ColorInfo, 'ColorInfo', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_2, '_FinalizerHolder', objectMeta);
  setMetadataFor(ColorSpace, 'ColorSpace', classMeta, Managed);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(ColorType, 'ColorType', classMeta, Enum);
  setMetadataFor(CubicResampler, 'CubicResampler', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_3, '_FinalizerHolder', objectMeta);
  setMetadataFor(Data, 'Data', classMeta, Managed);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(DirectContext, 'DirectContext', classMeta, RefCnt);
  setMetadataFor(FilterMipmap, 'FilterMipmap', classMeta);
  setMetadataFor(FilterMode, 'FilterMode', classMeta, Enum);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_4, '_FinalizerHolder', objectMeta);
  setMetadataFor(Font, 'Font', classMeta, Managed);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(FontFeature, 'FontFeature', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(FontMetrics, 'FontMetrics', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(FontMgr, 'FontMgr', classMeta, RefCnt);
  setMetadataFor(FontSlant, 'FontSlant', classMeta, Enum);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(FontStyle, 'FontStyle', classMeta);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(Image, 'Image', classMeta, RefCnt, [RefCnt, IHasImageInfo]);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(ImageInfo, 'ImageInfo', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_5, '_FinalizerHolder', objectMeta);
  setMetadataFor(ManagedString, 'ManagedString', classMeta, Managed);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(Matrix33, 'Matrix33', classMeta);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(Matrix44, 'Matrix44', classMeta);
  setMetadataFor(MipmapMode, 'MipmapMode', classMeta, Enum);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_6, '_FinalizerHolder', objectMeta);
  setMetadataFor(Paint, 'Paint', classMeta, Managed);
  setMetadataFor(PaintMode, 'PaintMode', classMeta, Enum);
  setMetadataFor(PaintStrokeCap, 'PaintStrokeCap', classMeta, Enum);
  setMetadataFor(PaintStrokeJoin, 'PaintStrokeJoin', classMeta, Enum);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_7, '_FinalizerHolder', objectMeta);
  setMetadataFor(Path, 'Path', classMeta, Managed);
  setMetadataFor(PathDirection, 'PathDirection', classMeta, Enum);
  setMetadataFor(PathFillMode, 'PathFillMode', classMeta, Enum);
  setMetadataFor(PathOp, 'PathOp', classMeta, Enum);
  setMetadataFor(PathSegment, 'PathSegment', classMeta);
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor(PathSegmentIterator, 'PathSegmentIterator', classMeta, Managed);
  setMetadataFor(PathVerb, 'PathVerb', classMeta, Enum);
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor(Picture, 'Picture', classMeta, RefCnt);
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_8, '_FinalizerHolder', objectMeta);
  setMetadataFor(PictureRecorder, 'PictureRecorder', classMeta, Managed);
  setMetadataFor(PixelGeometry, 'PixelGeometry', classMeta, Enum);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor(Point, 'Point', classMeta);
  setMetadataFor(Point3, 'Point3', classMeta);
  setMetadataFor(Companion_27, 'Companion', objectMeta);
  setMetadataFor(Rect, 'Rect', classMeta);
  setMetadataFor(RRect, 'RRect', classMeta, Rect);
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor(ShadowUtils, 'ShadowUtils', objectMeta);
  setMetadataFor(ArrayDecoder, 'ArrayDecoder', classMeta);
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor(Surface, 'Surface', classMeta, RefCnt);
  setMetadataFor(SurfaceColorFormat, 'SurfaceColorFormat', classMeta, Enum);
  setMetadataFor(SurfaceOrigin, 'SurfaceOrigin', classMeta, Enum);
  setMetadataFor(SurfaceProps, 'SurfaceProps', classMeta);
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor(Typeface, 'Typeface', classMeta, RefCnt);
  setMetadataFor(CharDirection, 'CharDirection', objectMeta);
  setMetadataFor(Affinity, 'Affinity', classMeta, Enum);
  setMetadataFor(Alignment, 'Alignment', classMeta, Enum);
  setMetadataFor(BaselineMode, 'BaselineMode', classMeta, Enum);
  setMetadataFor(DecorationLineStyle, 'DecorationLineStyle', classMeta, Enum);
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor(DecorationStyle, 'DecorationStyle', classMeta);
  setMetadataFor(Direction, 'Direction', classMeta, Enum);
  setMetadataFor(Companion_32, 'Companion', objectMeta);
  setMetadataFor(FontCollection, 'FontCollection', classMeta, RefCnt);
  setMetadataFor(Companion_33, 'Companion', objectMeta);
  setMetadataFor(LineMetrics, 'LineMetrics', classMeta);
  setMetadataFor(Companion_34, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_9, '_FinalizerHolder', objectMeta);
  setMetadataFor(Paragraph, 'Paragraph', classMeta, Managed);
  setMetadataFor(Companion_35, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_10, '_FinalizerHolder', objectMeta);
  setMetadataFor(ParagraphBuilder, 'ParagraphBuilder', classMeta, Managed);
  setMetadataFor(Companion_36, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_11, '_FinalizerHolder', objectMeta);
  setMetadataFor(ParagraphStyle, 'ParagraphStyle', classMeta, Managed);
  setMetadataFor(PlaceholderAlignment, 'PlaceholderAlignment', classMeta, Enum);
  setMetadataFor(PlaceholderStyle, 'PlaceholderStyle', classMeta);
  setMetadataFor(PositionWithAffinity, 'PositionWithAffinity', classMeta);
  setMetadataFor(RectHeightMode, 'RectHeightMode', classMeta, Enum);
  setMetadataFor(RectWidthMode, 'RectWidthMode', classMeta, Enum);
  setMetadataFor(Companion_37, 'Companion', objectMeta);
  setMetadataFor(Shadow, 'Shadow', classMeta);
  setMetadataFor(Companion_38, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_12, '_FinalizerHolder', objectMeta);
  setMetadataFor(StrutStyle, 'StrutStyle', classMeta, Managed);
  setMetadataFor(Companion_39, 'Companion', objectMeta);
  setMetadataFor(TextBox, 'TextBox', classMeta);
  setMetadataFor(TextIndent, 'TextIndent', classMeta);
  setMetadataFor(Companion_40, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_13, '_FinalizerHolder', objectMeta);
  setMetadataFor(TextStyle, 'TextStyle', classMeta, Managed);
  setMetadataFor(Companion_41, 'Companion', objectMeta);
  setMetadataFor(TypefaceFontProvider, 'TypefaceFontProvider', classMeta, FontMgr);
  setMetadataFor(SkikoKeyboardEvent, 'SkikoKeyboardEvent', classMeta);
  setMetadataFor(Companion_42, 'Companion', objectMeta);
  setMetadataFor(SkikoInputModifiers, 'SkikoInputModifiers', classMeta);
  setMetadataFor(SkikoKeyboardEventKind, 'SkikoKeyboardEventKind', classMeta, Enum);
  setMetadataFor(SkikoInputEvent, 'SkikoInputEvent', classMeta);
  setMetadataFor(SkikoPointerEvent, 'SkikoPointerEvent', classMeta);
  setMetadataFor(SkikoPointerEventKind, 'SkikoPointerEventKind', classMeta, Enum);
  setMetadataFor(SkikoPointer, 'SkikoPointer', classMeta);
  setMetadataFor(SkikoPointerDevice, 'SkikoPointerDevice', classMeta, Enum);
  setMetadataFor(Companion_43, 'Companion', objectMeta);
  setMetadataFor(SkikoMouseButtons, 'SkikoMouseButtons', classMeta);
  setMetadataFor(GraphicsApi, 'GraphicsApi', classMeta, Enum);
  setMetadataFor(OS, 'OS', classMeta, Enum);
  setMetadataFor(Arch, 'Arch', classMeta, Enum);
  setMetadataFor(ClipboardManager, 'ClipboardManager', classMeta);
  setMetadataFor(URIManager, 'URIManager', classMeta);
  setMetadataFor(RenderException, 'RenderException', classMeta, RuntimeException);
  function onKeyboardEvent(event) {
    return Unit_getInstance();
  }
  function onPointerEvent(event) {
    return Unit_getInstance();
  }
  function get_input() {
    return Empty_getInstance();
  }
  setMetadataFor(SkikoView, 'SkikoView', interfaceMeta);
  setMetadataFor(SystemTheme, 'SystemTheme', classMeta, Enum);
  setMetadataFor(Pattern, 'Pattern', classMeta);
  setMetadataFor(Companion_44, 'Companion', objectMeta);
  setMetadataFor(FinalizationThunk, 'FinalizationThunk', classMeta);
  setMetadataFor(InteropScope, 'InteropScope', classMeta);
  setMetadataFor(Companion_45, 'Companion', objectMeta);
  setMetadataFor(NativePointerArray, 'NativePointerArray', classMeta);
  setMetadataFor(Companion_46, 'Companion', objectMeta);
  setMetadataFor(_FinalizerHolder_14, '_FinalizerHolder', objectMeta);
  setMetadataFor(Stats, 'Stats', objectMeta);
  setMetadataFor(CanvasRenderer, 'CanvasRenderer', classMeta);
  setMetadataFor(SkiaLayer$attachTo$1, VOID, classMeta, CanvasRenderer);
  setMetadataFor(SkiaLayer, 'SkiaLayer', classMeta);
  setMetadataFor(Empty, 'Empty', objectMeta);
  setMetadataFor(Companion_47, 'Companion', objectMeta);
  setMetadataFor(SkikoKey, 'SkikoKey', classMeta, Enum);
  setMetadataFor(createWebGLContext$contextAttributes$1, VOID, classMeta);
  //endregion
  function Companion() {
    Companion_instance = this;
    Companion_getInstance_45().m24();
  }
  protoOf(Companion).n24 = function (width, height, sampleCnt, stencilBits, fbId, fbFormat) {
    Stats_getInstance().o24();
    return new BackendRenderTarget(org_jetbrains_skia_BackendRenderTarget__1nMakeGL(width, height, sampleCnt, stencilBits, fbId, fbFormat));
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _FinalizerHolder() {
    _FinalizerHolder_instance = this;
    this.p24_1 = org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer();
  }
  var _FinalizerHolder_instance;
  function _FinalizerHolder_getInstance() {
    if (_FinalizerHolder_instance == null)
      new _FinalizerHolder();
    return _FinalizerHolder_instance;
  }
  function BackendRenderTarget(ptr) {
    Companion_getInstance_0();
    Managed.call(this, ptr, _FinalizerHolder_getInstance().p24_1);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    Companion_getInstance_45().m24();
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Bitmap_init_$Init$($this) {
    Bitmap.call($this, org_jetbrains_skia_Bitmap__1nMake());
    Stats_getInstance().o24();
    return $this;
  }
  function Bitmap_init_$Create$() {
    return Bitmap_init_$Init$(objectCreate(protoOf(Bitmap)));
  }
  function _FinalizerHolder_0() {
    _FinalizerHolder_instance_0 = this;
    this.u24_1 = org_jetbrains_skia_Bitmap__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_0;
  function _FinalizerHolder_getInstance_0() {
    if (_FinalizerHolder_instance_0 == null)
      new _FinalizerHolder_0();
    return _FinalizerHolder_instance_0;
  }
  function _nGetImageInfo$ref() {
    var l = function (p0, p1, p2) {
      org_jetbrains_skia_Bitmap__1nGetImageInfo(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = '_nGetImageInfo';
    return l;
  }
  function Bitmap(ptr) {
    Companion_getInstance_1();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_0().u24_1);
    this.x24_1 = null;
  }
  protoOf(Bitmap).y24 = function () {
    var tmp;
    try {
      if (this.x24_1 == null) {
        var tmp_0 = this;
        var tmp_1 = Companion_getInstance_18();
        var tmp_2 = this.s24_1;
        tmp_0.x24_1 = tmp_1.a25(tmp_2, _nGetImageInfo$ref());
      }
      tmp = ensureNotNull(this.x24_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Bitmap).b25 = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_Bitmap__1nIsImmutable(this.s24_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Bitmap).c25 = function (info, rowBytes) {
    var tmp;
    try {
      this.x24_1 = null;
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_Bitmap__1nAllocPixelsRowBytes(this.s24_1, info.e25_1, info.f25_1, info.d25_1.g25_1.w4_1, info.d25_1.h25_1.w4_1, getPtr(info.d25_1.i25_1), rowBytes);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(info.d25_1.i25_1);
    }
    return tmp;
  };
  protoOf(Bitmap).j25 = function (imageInfo) {
    return this.c25(imageInfo, imageInfo.k25());
  };
  var BlendMode_CLEAR_instance;
  var BlendMode_SRC_instance;
  var BlendMode_DST_instance;
  var BlendMode_SRC_OVER_instance;
  var BlendMode_DST_OVER_instance;
  var BlendMode_SRC_IN_instance;
  var BlendMode_DST_IN_instance;
  var BlendMode_SRC_OUT_instance;
  var BlendMode_DST_OUT_instance;
  var BlendMode_SRC_ATOP_instance;
  var BlendMode_DST_ATOP_instance;
  var BlendMode_XOR_instance;
  var BlendMode_PLUS_instance;
  var BlendMode_MODULATE_instance;
  var BlendMode_SCREEN_instance;
  var BlendMode_OVERLAY_instance;
  var BlendMode_DARKEN_instance;
  var BlendMode_LIGHTEN_instance;
  var BlendMode_COLOR_DODGE_instance;
  var BlendMode_COLOR_BURN_instance;
  var BlendMode_HARD_LIGHT_instance;
  var BlendMode_SOFT_LIGHT_instance;
  var BlendMode_DIFFERENCE_instance;
  var BlendMode_EXCLUSION_instance;
  var BlendMode_MULTIPLY_instance;
  var BlendMode_HUE_instance;
  var BlendMode_SATURATION_instance;
  var BlendMode_COLOR_instance;
  var BlendMode_LUMINOSITY_instance;
  function values() {
    return [BlendMode_CLEAR_getInstance(), BlendMode_SRC_getInstance(), BlendMode_DST_getInstance(), BlendMode_SRC_OVER_getInstance(), BlendMode_DST_OVER_getInstance(), BlendMode_SRC_IN_getInstance(), BlendMode_DST_IN_getInstance(), BlendMode_SRC_OUT_getInstance(), BlendMode_DST_OUT_getInstance(), BlendMode_SRC_ATOP_getInstance(), BlendMode_DST_ATOP_getInstance(), BlendMode_XOR_getInstance(), BlendMode_PLUS_getInstance(), BlendMode_MODULATE_getInstance(), BlendMode_SCREEN_getInstance(), BlendMode_OVERLAY_getInstance(), BlendMode_DARKEN_getInstance(), BlendMode_LIGHTEN_getInstance(), BlendMode_COLOR_DODGE_getInstance(), BlendMode_COLOR_BURN_getInstance(), BlendMode_HARD_LIGHT_getInstance(), BlendMode_SOFT_LIGHT_getInstance(), BlendMode_DIFFERENCE_getInstance(), BlendMode_EXCLUSION_getInstance(), BlendMode_MULTIPLY_getInstance(), BlendMode_HUE_getInstance(), BlendMode_SATURATION_getInstance(), BlendMode_COLOR_getInstance(), BlendMode_LUMINOSITY_getInstance()];
  }
  var BlendMode_entriesInitialized;
  function BlendMode_initEntries() {
    if (BlendMode_entriesInitialized)
      return Unit_getInstance();
    BlendMode_entriesInitialized = true;
    BlendMode_CLEAR_instance = new BlendMode('CLEAR', 0);
    BlendMode_SRC_instance = new BlendMode('SRC', 1);
    BlendMode_DST_instance = new BlendMode('DST', 2);
    BlendMode_SRC_OVER_instance = new BlendMode('SRC_OVER', 3);
    BlendMode_DST_OVER_instance = new BlendMode('DST_OVER', 4);
    BlendMode_SRC_IN_instance = new BlendMode('SRC_IN', 5);
    BlendMode_DST_IN_instance = new BlendMode('DST_IN', 6);
    BlendMode_SRC_OUT_instance = new BlendMode('SRC_OUT', 7);
    BlendMode_DST_OUT_instance = new BlendMode('DST_OUT', 8);
    BlendMode_SRC_ATOP_instance = new BlendMode('SRC_ATOP', 9);
    BlendMode_DST_ATOP_instance = new BlendMode('DST_ATOP', 10);
    BlendMode_XOR_instance = new BlendMode('XOR', 11);
    BlendMode_PLUS_instance = new BlendMode('PLUS', 12);
    BlendMode_MODULATE_instance = new BlendMode('MODULATE', 13);
    BlendMode_SCREEN_instance = new BlendMode('SCREEN', 14);
    BlendMode_OVERLAY_instance = new BlendMode('OVERLAY', 15);
    BlendMode_DARKEN_instance = new BlendMode('DARKEN', 16);
    BlendMode_LIGHTEN_instance = new BlendMode('LIGHTEN', 17);
    BlendMode_COLOR_DODGE_instance = new BlendMode('COLOR_DODGE', 18);
    BlendMode_COLOR_BURN_instance = new BlendMode('COLOR_BURN', 19);
    BlendMode_HARD_LIGHT_instance = new BlendMode('HARD_LIGHT', 20);
    BlendMode_SOFT_LIGHT_instance = new BlendMode('SOFT_LIGHT', 21);
    BlendMode_DIFFERENCE_instance = new BlendMode('DIFFERENCE', 22);
    BlendMode_EXCLUSION_instance = new BlendMode('EXCLUSION', 23);
    BlendMode_MULTIPLY_instance = new BlendMode('MULTIPLY', 24);
    BlendMode_HUE_instance = new BlendMode('HUE', 25);
    BlendMode_SATURATION_instance = new BlendMode('SATURATION', 26);
    BlendMode_COLOR_instance = new BlendMode('COLOR', 27);
    BlendMode_LUMINOSITY_instance = new BlendMode('LUMINOSITY', 28);
  }
  function BlendMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BlendMode_CLEAR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_CLEAR_instance;
  }
  function BlendMode_SRC_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_instance;
  }
  function BlendMode_DST_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_instance;
  }
  function BlendMode_SRC_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OVER_instance;
  }
  function BlendMode_DST_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OVER_instance;
  }
  function BlendMode_SRC_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_IN_instance;
  }
  function BlendMode_DST_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_IN_instance;
  }
  function BlendMode_SRC_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OUT_instance;
  }
  function BlendMode_DST_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OUT_instance;
  }
  function BlendMode_SRC_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_ATOP_instance;
  }
  function BlendMode_DST_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_ATOP_instance;
  }
  function BlendMode_XOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_XOR_instance;
  }
  function BlendMode_PLUS_getInstance() {
    BlendMode_initEntries();
    return BlendMode_PLUS_instance;
  }
  function BlendMode_MODULATE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MODULATE_instance;
  }
  function BlendMode_SCREEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SCREEN_instance;
  }
  function BlendMode_OVERLAY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_OVERLAY_instance;
  }
  function BlendMode_DARKEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DARKEN_instance;
  }
  function BlendMode_LIGHTEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LIGHTEN_instance;
  }
  function BlendMode_COLOR_DODGE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_DODGE_instance;
  }
  function BlendMode_COLOR_BURN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_BURN_instance;
  }
  function BlendMode_HARD_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HARD_LIGHT_instance;
  }
  function BlendMode_SOFT_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SOFT_LIGHT_instance;
  }
  function BlendMode_DIFFERENCE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DIFFERENCE_instance;
  }
  function BlendMode_EXCLUSION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_EXCLUSION_instance;
  }
  function BlendMode_MULTIPLY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MULTIPLY_instance;
  }
  function BlendMode_HUE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HUE_instance;
  }
  function BlendMode_SATURATION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SATURATION_instance;
  }
  function BlendMode_COLOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_instance;
  }
  function BlendMode_LUMINOSITY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LUMINOSITY_instance;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    Companion_getInstance_45().m24();
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Canvas_init_$Init$(bitmap, surfaceProps, $this) {
    surfaceProps = surfaceProps === VOID ? new SurfaceProps() : surfaceProps;
    Canvas.call($this, org_jetbrains_skia_Canvas__1nMakeFromBitmap(bitmap.s24_1, surfaceProps.q25(), surfaceProps.p25_1.w4_1), true, bitmap);
    Stats_getInstance().o24();
    reachabilityBarrier(bitmap);
    return $this;
  }
  function Canvas_init_$Create$(bitmap, surfaceProps) {
    return Canvas_init_$Init$(bitmap, surfaceProps, objectCreate(protoOf(Canvas)));
  }
  function _FinalizerHolder_1() {
    _FinalizerHolder_instance_1 = this;
    this.r25_1 = org_jetbrains_skia_Canvas__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_1;
  function _FinalizerHolder_getInstance_1() {
    if (_FinalizerHolder_instance_1 == null)
      new _FinalizerHolder_1();
    return _FinalizerHolder_instance_1;
  }
  function Canvas(ptr, managed, _owner) {
    Companion_getInstance_2();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_1().r25_1, managed);
    this.u25_1 = _owner;
  }
  protoOf(Canvas).v25 = function (r, paint) {
    Stats_getInstance().o24();
    try {
      org_jetbrains_skia_Canvas__1nDrawRect(this.s24_1, r.w25_1, r.x25_1, r.y25_1, r.z25_1, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).a26 = function (r, paint) {
    Stats_getInstance().o24();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_Canvas__1nDrawRRect(this.s24_1, r.w25_1, r.x25_1, r.y25_1, r.z25_1, tmp0_anonymous.i26(r.f26_1), r.f26_1.length, getPtr(paint));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
          }
        }
      }
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).j26 = function (path, paint) {
    Stats_getInstance().o24();
    try {
      org_jetbrains_skia_Canvas__1nDrawPath(this.s24_1, getPtr(path), getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(path);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).k26 = function (image, src, dst, samplingMode, paint, strict) {
    Stats_getInstance().o24();
    try {
      org_jetbrains_skia_Canvas__1nDrawImageRect(this.s24_1, getPtr(image), src.w25_1, src.x25_1, src.y25_1, src.z25_1, dst.w25_1, dst.x25_1, dst.y25_1, dst.z25_1, samplingMode.l26(), samplingMode.m26(), getPtr(paint), strict);
    }finally {
      reachabilityBarrier(image);
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).n26 = function (picture, matrix, paint) {
    Stats_getInstance().o24();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var tmp = this.s24_1;
          var tmp_0 = getPtr(picture);
          org_jetbrains_skia_Canvas__1nDrawPicture(tmp, tmp_0, tmp0_anonymous.i26(matrix == null ? null : matrix.o26_1), getPtr(paint));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(picture);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).e1s = function (color) {
    Stats_getInstance().o24();
    try {
      org_jetbrains_skia_Canvas__1nClear(this.s24_1, color);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).p26 = function () {
    Stats_getInstance().o24();
    org_jetbrains_skia_Canvas__1nResetMatrix(this.s24_1);
    return this;
  };
  protoOf(Canvas).q26 = function (r, mode, antiAlias) {
    Stats_getInstance().o24();
    org_jetbrains_skia_Canvas__1nClipRect(this.s24_1, r.w25_1, r.x25_1, r.y25_1, r.z25_1, mode.w4_1, antiAlias);
    return this;
  };
  protoOf(Canvas).r26 = function (r, mode, antiAlias) {
    Stats_getInstance().o24();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_Canvas__1nClipRRect(this.s24_1, r.w25_1, r.x25_1, r.y25_1, r.z25_1, tmp0_anonymous.i26(r.f26_1), r.f26_1.length, mode.w4_1, antiAlias);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).s26 = function (p, mode, antiAlias) {
    Stats_getInstance().o24();
    try {
      org_jetbrains_skia_Canvas__1nClipPath(this.s24_1, getPtr(p), mode.w4_1, antiAlias);
    }finally {
      reachabilityBarrier(p);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).w21 = function (dx, dy) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        Stats_getInstance().o24();
        org_jetbrains_skia_Canvas__1nTranslate(this.s24_1, dx, dy);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).t26 = function (sx, sy) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        Stats_getInstance().o24();
        org_jetbrains_skia_Canvas__1nScale(this.s24_1, sx, sy);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).u26 = function (matrix) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        Stats_getInstance().o24();
        org_jetbrains_skia_Canvas__1nConcat44(this.s24_1, tmp0_anonymous.i26(matrix.v26_1));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).w26 = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_Canvas__1nSave(this.s24_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Canvas).x26 = function (left, top, right, bottom, paint) {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_Canvas__1nSaveLayerRect(this.s24_1, left, top, right, bottom, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(Canvas).y26 = function () {
    Stats_getInstance().o24();
    org_jetbrains_skia_Canvas__1nRestore(this.s24_1);
    return this;
  };
  var ClipMode_DIFFERENCE_instance;
  var ClipMode_INTERSECT_instance;
  var ClipMode_entriesInitialized;
  function ClipMode_initEntries() {
    if (ClipMode_entriesInitialized)
      return Unit_getInstance();
    ClipMode_entriesInitialized = true;
    ClipMode_DIFFERENCE_instance = new ClipMode('DIFFERENCE', 0);
    ClipMode_INTERSECT_instance = new ClipMode('INTERSECT', 1);
  }
  function ClipMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClipMode_DIFFERENCE_getInstance() {
    ClipMode_initEntries();
    return ClipMode_DIFFERENCE_instance;
  }
  function ClipMode_INTERSECT_getInstance() {
    ClipMode_initEntries();
    return ClipMode_INTERSECT_instance;
  }
  function Color() {
    Color_instance = this;
    this.z26_1 = 0;
    this.a27_1 = -16777216;
    this.b27_1 = -1;
    this.c27_1 = -65536;
    this.d27_1 = -16711936;
    this.e27_1 = -16776961;
    this.f27_1 = -256;
    this.g27_1 = -16711681;
    this.h27_1 = -65281;
  }
  var Color_instance;
  function Color_getInstance() {
    if (Color_instance == null)
      new Color();
    return Color_instance;
  }
  var ColorAlphaType_UNKNOWN_instance;
  var ColorAlphaType_OPAQUE_instance;
  var ColorAlphaType_PREMUL_instance;
  var ColorAlphaType_UNPREMUL_instance;
  function values_0() {
    return [ColorAlphaType_UNKNOWN_getInstance(), ColorAlphaType_OPAQUE_getInstance(), ColorAlphaType_PREMUL_getInstance(), ColorAlphaType_UNPREMUL_getInstance()];
  }
  var ColorAlphaType_entriesInitialized;
  function ColorAlphaType_initEntries() {
    if (ColorAlphaType_entriesInitialized)
      return Unit_getInstance();
    ColorAlphaType_entriesInitialized = true;
    ColorAlphaType_UNKNOWN_instance = new ColorAlphaType('UNKNOWN', 0);
    ColorAlphaType_OPAQUE_instance = new ColorAlphaType('OPAQUE', 1);
    ColorAlphaType_PREMUL_instance = new ColorAlphaType('PREMUL', 2);
    ColorAlphaType_UNPREMUL_instance = new ColorAlphaType('UNPREMUL', 3);
  }
  function ColorAlphaType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ColorAlphaType_UNKNOWN_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNKNOWN_instance;
  }
  function ColorAlphaType_OPAQUE_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_OPAQUE_instance;
  }
  function ColorAlphaType_PREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_PREMUL_instance;
  }
  function ColorAlphaType_UNPREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNPREMUL_instance;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    Companion_getInstance_45().m24();
    this.i27_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetSRGBToLinearGamma(), false);
    this.j27_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetLuma(), false);
  }
  protoOf(Companion_2).k27 = function (color, mode) {
    Stats_getInstance().o24();
    return ColorFilter_init_$Create$(org_jetbrains_skia_ColorFilter__1nMakeBlend(color, mode.w4_1));
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ColorFilter_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$(ptr) {
    return ColorFilter_init_$Init$(ptr, objectCreate(protoOf(ColorFilter)));
  }
  function ColorFilter_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$_0(ptr, allowClose) {
    return ColorFilter_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(ColorFilter)));
  }
  function ColorFilter() {
    Companion_getInstance_3();
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.o27_1 = new ColorInfo(ColorType_UNKNOWN_getInstance(), ColorAlphaType_UNKNOWN_getInstance(), null);
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ColorInfo(colorType, alphaType, colorSpace) {
    Companion_getInstance_4();
    this.g25_1 = colorType;
    this.h25_1 = alphaType;
    this.i25_1 = colorSpace;
  }
  protoOf(ColorInfo).n25 = function () {
    return this.h25_1.equals(ColorAlphaType_OPAQUE_getInstance()) ? true : this.g25_1.r27();
  };
  protoOf(ColorInfo).s27 = function () {
    return this.g25_1.s27();
  };
  protoOf(ColorInfo).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ColorInfo))
      return false;
    if (!this.g25_1.equals(other.g25_1))
      return false;
    if (!this.h25_1.equals(other.h25_1))
      return false;
    return equals(this.i25_1, other.i25_1);
  };
  protoOf(ColorInfo).hashCode = function () {
    var prime = 59;
    var result = 1;
    result = imul(result, prime) + this.g25_1.hashCode() | 0;
    result = imul(result, prime) + this.h25_1.hashCode() | 0;
    var tmp = imul(result, prime);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.i25_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(ColorInfo).toString = function () {
    return 'ColorInfo(_colorType=' + this.g25_1 + ', _alphaType=' + this.h25_1 + ', _colorSpace=' + this.i25_1 + ')';
  };
  function Companion_4() {
    Companion_instance_4 = this;
    Companion_getInstance_45().m24();
    this.t27_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGB(), false);
    this.u27_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear(), false);
    this.v27_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeDisplayP3(), false);
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function ColorSpace_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_2().w27_1, true);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$(ptr) {
    return ColorSpace_init_$Init$(ptr, objectCreate(protoOf(ColorSpace)));
  }
  function ColorSpace_init_$Init$_0(ptr, managed, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_2().w27_1, managed);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$_0(ptr, managed) {
    return ColorSpace_init_$Init$_0(ptr, managed, objectCreate(protoOf(ColorSpace)));
  }
  function _FinalizerHolder_2() {
    _FinalizerHolder_instance_2 = this;
    this.w27_1 = org_jetbrains_skia_ColorSpace__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_2;
  function _FinalizerHolder_getInstance_2() {
    if (_FinalizerHolder_instance_2 == null)
      new _FinalizerHolder_2();
    return _FinalizerHolder_instance_2;
  }
  function ColorSpace() {
    Companion_getInstance_5();
  }
  var ColorType_UNKNOWN_instance;
  var ColorType_ALPHA_8_instance;
  var ColorType_RGB_565_instance;
  var ColorType_ARGB_4444_instance;
  var ColorType_RGBA_8888_instance;
  var ColorType_RGB_888X_instance;
  var ColorType_BGRA_8888_instance;
  var ColorType_RGBA_1010102_instance;
  var ColorType_BGRA_1010102_instance;
  var ColorType_RGB_101010X_instance;
  var ColorType_BGR_101010X_instance;
  var ColorType_GRAY_8_instance;
  var ColorType_RGBA_F16NORM_instance;
  var ColorType_RGBA_F16_instance;
  var ColorType_RGBA_F32_instance;
  var ColorType_R8G8_UNORM_instance;
  var ColorType_A16_FLOAT_instance;
  var ColorType_R16G16_FLOAT_instance;
  var ColorType_A16_UNORM_instance;
  var ColorType_R16G16_UNORM_instance;
  var ColorType_R16G16B16A16_UNORM_instance;
  function Companion_5() {
    Companion_instance_5 = this;
    this.x27_1 = ColorType_BGRA_8888_getInstance();
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    ColorType_initEntries();
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function values_1() {
    return [ColorType_UNKNOWN_getInstance(), ColorType_ALPHA_8_getInstance(), ColorType_RGB_565_getInstance(), ColorType_ARGB_4444_getInstance(), ColorType_RGBA_8888_getInstance(), ColorType_RGB_888X_getInstance(), ColorType_BGRA_8888_getInstance(), ColorType_RGBA_1010102_getInstance(), ColorType_BGRA_1010102_getInstance(), ColorType_RGB_101010X_getInstance(), ColorType_BGR_101010X_getInstance(), ColorType_GRAY_8_getInstance(), ColorType_RGBA_F16NORM_getInstance(), ColorType_RGBA_F16_getInstance(), ColorType_RGBA_F32_getInstance(), ColorType_R8G8_UNORM_getInstance(), ColorType_A16_FLOAT_getInstance(), ColorType_R16G16_FLOAT_getInstance(), ColorType_A16_UNORM_getInstance(), ColorType_R16G16_UNORM_getInstance(), ColorType_R16G16B16A16_UNORM_getInstance()];
  }
  var ColorType_entriesInitialized;
  function ColorType_initEntries() {
    if (ColorType_entriesInitialized)
      return Unit_getInstance();
    ColorType_entriesInitialized = true;
    ColorType_UNKNOWN_instance = new ColorType('UNKNOWN', 0);
    ColorType_ALPHA_8_instance = new ColorType('ALPHA_8', 1);
    ColorType_RGB_565_instance = new ColorType('RGB_565', 2);
    ColorType_ARGB_4444_instance = new ColorType('ARGB_4444', 3);
    ColorType_RGBA_8888_instance = new ColorType('RGBA_8888', 4);
    ColorType_RGB_888X_instance = new ColorType('RGB_888X', 5);
    ColorType_BGRA_8888_instance = new ColorType('BGRA_8888', 6);
    ColorType_RGBA_1010102_instance = new ColorType('RGBA_1010102', 7);
    ColorType_BGRA_1010102_instance = new ColorType('BGRA_1010102', 8);
    ColorType_RGB_101010X_instance = new ColorType('RGB_101010X', 9);
    ColorType_BGR_101010X_instance = new ColorType('BGR_101010X', 10);
    ColorType_GRAY_8_instance = new ColorType('GRAY_8', 11);
    ColorType_RGBA_F16NORM_instance = new ColorType('RGBA_F16NORM', 12);
    ColorType_RGBA_F16_instance = new ColorType('RGBA_F16', 13);
    ColorType_RGBA_F32_instance = new ColorType('RGBA_F32', 14);
    ColorType_R8G8_UNORM_instance = new ColorType('R8G8_UNORM', 15);
    ColorType_A16_FLOAT_instance = new ColorType('A16_FLOAT', 16);
    ColorType_R16G16_FLOAT_instance = new ColorType('R16G16_FLOAT', 17);
    ColorType_A16_UNORM_instance = new ColorType('A16_UNORM', 18);
    ColorType_R16G16_UNORM_instance = new ColorType('R16G16_UNORM', 19);
    ColorType_R16G16B16A16_UNORM_instance = new ColorType('R16G16B16A16_UNORM', 20);
    Companion_getInstance_6();
  }
  function ColorType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorType).s27 = function () {
    var tmp;
    switch (this.w4_1) {
      case 0:
        tmp = 0;
        break;
      case 1:
        tmp = 1;
        break;
      case 2:
        tmp = 2;
        break;
      case 3:
        tmp = 2;
        break;
      case 4:
        tmp = 4;
        break;
      case 6:
        tmp = 4;
        break;
      case 5:
        tmp = 4;
        break;
      case 7:
        tmp = 4;
        break;
      case 9:
        tmp = 4;
        break;
      case 8:
        tmp = 4;
        break;
      case 10:
        tmp = 4;
        break;
      case 11:
        tmp = 1;
        break;
      case 12:
        tmp = 8;
        break;
      case 13:
        tmp = 8;
        break;
      case 14:
        tmp = 16;
        break;
      case 15:
        tmp = 2;
        break;
      case 18:
        tmp = 2;
        break;
      case 19:
        tmp = 4;
        break;
      case 16:
        tmp = 2;
        break;
      case 17:
        tmp = 4;
        break;
      case 20:
        tmp = 8;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorType).r27 = function () {
    return org_jetbrains_skia_ColorType__1nIsAlwaysOpaque(this.w4_1);
  };
  function ColorType_UNKNOWN_getInstance() {
    ColorType_initEntries();
    return ColorType_UNKNOWN_instance;
  }
  function ColorType_ALPHA_8_getInstance() {
    ColorType_initEntries();
    return ColorType_ALPHA_8_instance;
  }
  function ColorType_RGB_565_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_565_instance;
  }
  function ColorType_ARGB_4444_getInstance() {
    ColorType_initEntries();
    return ColorType_ARGB_4444_instance;
  }
  function ColorType_RGBA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_8888_instance;
  }
  function ColorType_RGB_888X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_888X_instance;
  }
  function ColorType_BGRA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_8888_instance;
  }
  function ColorType_RGBA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_1010102_instance;
  }
  function ColorType_BGRA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_1010102_instance;
  }
  function ColorType_RGB_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_101010X_instance;
  }
  function ColorType_BGR_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_BGR_101010X_instance;
  }
  function ColorType_GRAY_8_getInstance() {
    ColorType_initEntries();
    return ColorType_GRAY_8_instance;
  }
  function ColorType_RGBA_F16NORM_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16NORM_instance;
  }
  function ColorType_RGBA_F16_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16_instance;
  }
  function ColorType_RGBA_F32_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F32_instance;
  }
  function ColorType_R8G8_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R8G8_UNORM_instance;
  }
  function ColorType_A16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_FLOAT_instance;
  }
  function ColorType_R16G16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_FLOAT_instance;
  }
  function ColorType_A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_UNORM_instance;
  }
  function ColorType_R16G16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_UNORM_instance;
  }
  function ColorType_R16G16B16A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16B16A16_UNORM_instance;
  }
  function CubicResampler(b, c) {
    this.y27_1 = b;
    this.z27_1 = c;
  }
  protoOf(CubicResampler).l26 = function () {
    return toBits(this.y27_1) | -2147483648;
  };
  protoOf(CubicResampler).m26 = function () {
    return toBits(this.z27_1);
  };
  protoOf(CubicResampler).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof CubicResampler))
      return false;
    if (!(compareTo(this.y27_1, other.y27_1) === 0))
      return false;
    return compareTo(this.z27_1, other.z27_1) === 0;
  };
  protoOf(CubicResampler).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.y27_1) | 0;
    result = imul(result, PRIME) + toBits(this.z27_1) | 0;
    return result;
  };
  protoOf(CubicResampler).toString = function () {
    return 'CubicResampler(_B=' + this.y27_1 + ', _C=' + this.z27_1 + ')';
  };
  function Companion_6() {
    Companion_instance_6 = this;
    Companion_getInstance_45().m24();
  }
  protoOf(Companion_6).a28 = function (bytes, offset, length) {
    Stats_getInstance().o24();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeFromBytes.<anonymous>' call
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$1 = org_jetbrains_skia_Data__1nMakeFromBytes(tmp0_anonymous.b28(bytes), offset, length);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
        }
      }
    }
    return new Data(tmp$ret$1);
  };
  protoOf(Companion_6).c28 = function (bytes, offset, length, $super) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? bytes.length : length;
    return $super === VOID ? this.a28(bytes, offset, length) : $super.a28.call(this, bytes, offset, length);
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function _FinalizerHolder_3() {
    _FinalizerHolder_instance_3 = this;
    this.d28_1 = org_jetbrains_skia_Data__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_3;
  function _FinalizerHolder_getInstance_3() {
    if (_FinalizerHolder_instance_3 == null)
      new _FinalizerHolder_3();
    return _FinalizerHolder_instance_3;
  }
  function Data(ptr) {
    Companion_getInstance_7();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_3().d28_1);
    this.g28_1 = null;
  }
  protoOf(Data).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof Data ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherData = tmp;
    return this.t24(otherData);
  };
  protoOf(Data).t24 = function (other) {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_Data__1nEquals(this.s24_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  function Companion_7() {
    Companion_instance_7 = this;
    Companion_getInstance_45().m24();
  }
  protoOf(Companion_7).h28 = function () {
    Stats_getInstance().o24();
    return new DirectContext(org_jetbrains_skia_DirectContext__1nMakeGL());
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function DirectContext(ptr) {
    Companion_getInstance_8();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(DirectContext).k28 = function () {
    Stats_getInstance().o24();
    org_jetbrains_skia_DirectContext__1nFlush(this.s24_1);
    return this;
  };
  function FilterMipmap(filterMode, mipmapMode) {
    mipmapMode = mipmapMode === VOID ? MipmapMode_NONE_getInstance() : mipmapMode;
    this.l28_1 = filterMode;
    this.m28_1 = mipmapMode;
  }
  protoOf(FilterMipmap).l26 = function () {
    return this.l28_1.w4_1;
  };
  protoOf(FilterMipmap).m26 = function () {
    return this.m28_1.w4_1;
  };
  protoOf(FilterMipmap).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FilterMipmap))
      return false;
    if (!this.l28_1.equals(other.l28_1))
      return false;
    return this.m28_1.equals(other.m28_1);
  };
  protoOf(FilterMipmap).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.l28_1.hashCode() | 0;
    result = imul(result, PRIME) + this.m28_1.hashCode() | 0;
    return result;
  };
  protoOf(FilterMipmap).toString = function () {
    return 'FilterMipmap(_filterMode=' + this.l28_1 + ', _mipmapMode=' + this.m28_1 + ')';
  };
  var FilterMode_NEAREST_instance;
  var FilterMode_LINEAR_instance;
  var FilterMode_entriesInitialized;
  function FilterMode_initEntries() {
    if (FilterMode_entriesInitialized)
      return Unit_getInstance();
    FilterMode_entriesInitialized = true;
    FilterMode_NEAREST_instance = new FilterMode('NEAREST', 0);
    FilterMode_LINEAR_instance = new FilterMode('LINEAR', 1);
  }
  function FilterMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FilterMode_NEAREST_getInstance() {
    FilterMode_initEntries();
    return FilterMode_NEAREST_instance;
  }
  function FilterMode_LINEAR_getInstance() {
    FilterMode_initEntries();
    return FilterMode_LINEAR_instance;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    Companion_getInstance_45().m24();
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Font_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_4().n28_1);
    Font.call($this);
    return $this;
  }
  function Font_init_$Init$_0(typeface, size, $this) {
    Font_init_$Init$(org_jetbrains_skia_Font__1nMakeTypefaceSize(getPtr(typeface), size), $this);
    Stats_getInstance().o24();
    reachabilityBarrier(typeface);
    return $this;
  }
  function Font_init_$Create$(typeface, size) {
    return Font_init_$Init$_0(typeface, size, objectCreate(protoOf(Font)));
  }
  function _FinalizerHolder_4() {
    _FinalizerHolder_instance_4 = this;
    this.n28_1 = org_jetbrains_skia_Font__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_4;
  function _FinalizerHolder_getInstance_4() {
    if (_FinalizerHolder_instance_4 == null)
      new _FinalizerHolder_4();
    return _FinalizerHolder_instance_4;
  }
  function Font$_get_metrics_$lambda_bxy7iq(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Font__1nGetMetrics(this$0.s24_1, it);
      return Unit_getInstance();
    };
  }
  protoOf(Font).t24 = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Font__1nEquals(this.s24_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Font).q28 = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      var tmp_0 = Companion_getInstance_11();
      tmp = fromInteropPointer(tmp_0, Font$_get_metrics_$lambda_bxy7iq(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Font() {
    Companion_getInstance_9();
  }
  function FontFeature$Companion$parseW3$lambda(it) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.trim' call
    tmp$ret$0 = toString(trim(isCharSequence(it) ? it : THROW_CCE()));
    var parts = split(tmp$ret$0, [' ']);
    var name = parts.l(0);
    var value = getOrNull(parts, 1);
    var tmp;
    switch (value) {
      case 'on':
      case null:
        tmp = 1;
        break;
      case 'off':
        tmp = 0;
        break;
      default:
        var tmp0_elvis_lhs = toIntOrNull(value);
        tmp = tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs;
        break;
    }
    var value_0 = tmp;
    return name.length === 4 ? FontFeature_init_$Create$(name, value_0) : null;
  }
  function FontFeature_init_$Init$(feature, value, $this) {
    var tmp = Companion_getInstance_16().r28(feature);
    Companion_getInstance_10();
    var tmp_0 = _UInt___init__impl__l7qpdl(0);
    Companion_getInstance_10();
    FontFeature.call($this, tmp, value, tmp_0, _UInt___init__impl__l7qpdl(-1));
    return $this;
  }
  function FontFeature_init_$Create$(feature, value) {
    return FontFeature_init_$Init$(feature, value, objectCreate(protoOf(FontFeature)));
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.s28_1 = _UInt___init__impl__l7qpdl(0);
    this.t28_1 = _UInt___init__impl__l7qpdl(-1);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.u28_1 = fillArrayVal(Array(0), null);
    this.v28_1 = compilePattern('\\s+');
    this.w28_1 = compilePattern('([-+])?([a-z0-9]{4})(?:\\[(\\d+)?:(\\d+)?\\])?(?:=(\\d+))?');
    this.x28_1 = 1;
    this.y28_1 = 2;
    this.z28_1 = 3;
    this.a29_1 = 4;
    this.b29_1 = 5;
  }
  protoOf(Companion_9).c29 = function (str) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp = splitToSequence(str, [',']);
    var tmp0_toTypedArray = toList(mapNotNull(tmp, FontFeature$Companion$parseW3$lambda));
    return copyToArray(tmp0_toTypedArray);
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function FontFeature(_tag, value, start, end) {
    Companion_getInstance_10();
    this.d29_1 = _tag;
    this.e29_1 = value;
    this.f29_1 = start;
    this.g29_1 = end;
  }
  protoOf(FontFeature).h29 = function () {
    return Companion_getInstance_16().i29(this.d29_1);
  };
  protoOf(FontFeature).toString = function () {
    var range = '';
    var tmp;
    // Inline function 'kotlin.UInt.compareTo' call
    var tmp0_compareTo = this.f29_1;
    if (uintCompare(_UInt___get_data__impl__f0vqqw(tmp0_compareTo), _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(0))) > 0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.UInt.compareTo' call
      var tmp1_compareTo = this.g29_1;
      Companion_getInstance();
      var tmp2_compareTo = _UInt___init__impl__l7qpdl(-1);
      tmp = uintCompare(_UInt___get_data__impl__f0vqqw(tmp1_compareTo), _UInt___get_data__impl__f0vqqw(tmp2_compareTo)) < 0;
    }
    if (tmp) {
      var tmp_0;
      // Inline function 'kotlin.UInt.compareTo' call
      var tmp3_compareTo = this.f29_1;
      if (uintCompare(_UInt___get_data__impl__f0vqqw(tmp3_compareTo), _UInt___get_data__impl__f0vqqw(_UInt___init__impl__l7qpdl(0))) > 0) {
        tmp_0 = new UInt(this.f29_1);
      } else {
        tmp_0 = '';
      }
      var tmp_1 = '[' + tmp_0 + ':';
      var tmp_2;
      // Inline function 'kotlin.UInt.compareTo' call
      var tmp4_compareTo = this.g29_1;
      Companion_getInstance();
      var tmp5_compareTo = _UInt___init__impl__l7qpdl(-1);
      if (uintCompare(_UInt___get_data__impl__f0vqqw(tmp4_compareTo), _UInt___get_data__impl__f0vqqw(tmp5_compareTo)) < 0) {
        tmp_2 = new UInt(this.g29_1);
      } else {
        tmp_2 = '';
      }
      range = tmp_1 + toString(tmp_2) + ']';
    }
    var valuePrefix = '';
    var valueSuffix = '';
    if (this.e29_1 === 0)
      valuePrefix = '-';
    else if (this.e29_1 === 1)
      valuePrefix = '+';
    else
      valueSuffix = '=' + this.e29_1;
    return 'FontFeature(' + valuePrefix + this.d29_1 + range + valueSuffix + ')';
  };
  protoOf(FontFeature).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontFeature))
      return false;
    if (!(this.h29() === other.h29()))
      return false;
    if (!(this.e29_1 === other.e29_1))
      return false;
    if (!(this.f29_1 === other.f29_1))
      return false;
    return this.g29_1 === other.g29_1;
  };
  protoOf(FontFeature).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.d29_1 | 0;
    result = imul(result, PRIME) + this.e29_1 | 0;
    var tmp = imul(result, PRIME);
    // Inline function 'kotlin.UInt.toInt' call
    // Inline function 'kotlin.UInt.xor' call
    // Inline function 'kotlin.UInt.shr' call
    var tmp0_shr = this.f29_1;
    var tmp1_xor = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_shr) >>> 16 | 0);
    var tmp2_xor = this.f29_1;
    var tmp3_toInt = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1_xor) ^ _UInt___get_data__impl__f0vqqw(tmp2_xor));
    result = tmp + _UInt___get_data__impl__f0vqqw(tmp3_toInt) | 0;
    var tmp_0 = imul(result, PRIME);
    // Inline function 'kotlin.UInt.toInt' call
    // Inline function 'kotlin.UInt.xor' call
    // Inline function 'kotlin.UInt.shr' call
    var tmp4_shr = this.g29_1;
    var tmp5_xor = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp4_shr) >>> 16 | 0);
    var tmp6_xor = this.g29_1;
    var tmp7_toInt = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp5_xor) ^ _UInt___get_data__impl__f0vqqw(tmp6_xor));
    result = tmp_0 + _UInt___get_data__impl__f0vqqw(tmp7_toInt) | 0;
    return result;
  };
  function Companion_10() {
    Companion_instance_10 = this;
  }
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function FontMetrics(top, ascent, descent, bottom, leading, avgCharWidth, maxCharWidth, xMin, xMax, xHeight, capHeight, underlineThickness, underlinePosition, strikeoutThickness, strikeoutPosition) {
    Companion_getInstance_11();
    this.j29_1 = top;
    this.k29_1 = ascent;
    this.l29_1 = descent;
    this.m29_1 = bottom;
    this.n29_1 = leading;
    this.o29_1 = avgCharWidth;
    this.p29_1 = maxCharWidth;
    this.q29_1 = xMin;
    this.r29_1 = xMax;
    this.s29_1 = xHeight;
    this.t29_1 = capHeight;
    this.u29_1 = underlineThickness;
    this.v29_1 = underlinePosition;
    this.w29_1 = strikeoutThickness;
    this.x29_1 = strikeoutPosition;
  }
  protoOf(FontMetrics).u21 = function () {
    return this.l29_1 - this.k29_1;
  };
  protoOf(FontMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontMetrics))
      return false;
    if (!(compareTo(this.j29_1, other.j29_1) === 0))
      return false;
    if (!(compareTo(this.k29_1, other.k29_1) === 0))
      return false;
    if (!(compareTo(this.l29_1, other.l29_1) === 0))
      return false;
    if (!(compareTo(this.m29_1, other.m29_1) === 0))
      return false;
    if (!(compareTo(this.n29_1, other.n29_1) === 0))
      return false;
    if (!(compareTo(this.o29_1, other.o29_1) === 0))
      return false;
    if (!(compareTo(this.p29_1, other.p29_1) === 0))
      return false;
    if (!(compareTo(this.q29_1, other.q29_1) === 0))
      return false;
    if (!(compareTo(this.r29_1, other.r29_1) === 0))
      return false;
    if (!(compareTo(this.s29_1, other.s29_1) === 0))
      return false;
    if (!(compareTo(this.t29_1, other.t29_1) === 0))
      return false;
    if (this.u29_1 == null ? !(other.u29_1 == null) : !(this.u29_1 == other.u29_1))
      return false;
    if (this.v29_1 == null ? !(other.v29_1 == null) : !(this.v29_1 == other.v29_1))
      return false;
    if (this.w29_1 == null ? !(other.w29_1 == null) : !(this.w29_1 == other.w29_1))
      return false;
    return !(this.x29_1 == null ? !(other.x29_1 == null) : !(this.x29_1 == other.x29_1));
  };
  protoOf(FontMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.j29_1) | 0;
    result = imul(result, PRIME) + toBits(this.k29_1) | 0;
    result = imul(result, PRIME) + toBits(this.l29_1) | 0;
    result = imul(result, PRIME) + toBits(this.m29_1) | 0;
    result = imul(result, PRIME) + toBits(this.n29_1) | 0;
    result = imul(result, PRIME) + toBits(this.o29_1) | 0;
    result = imul(result, PRIME) + toBits(this.p29_1) | 0;
    result = imul(result, PRIME) + toBits(this.q29_1) | 0;
    result = imul(result, PRIME) + toBits(this.r29_1) | 0;
    result = imul(result, PRIME) + toBits(this.s29_1) | 0;
    result = imul(result, PRIME) + toBits(this.t29_1) | 0;
    var tmp = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.u29_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.v29_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.w29_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    var tmp_2 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.x29_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    result = tmp_2 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
    return result;
  };
  protoOf(FontMetrics).toString = function () {
    return 'FontMetrics(_top=' + this.j29_1 + ', _ascent=' + this.k29_1 + ', _descent=' + this.l29_1 + ', _bottom=' + this.m29_1 + ', _leading=' + this.n29_1 + ', _avgCharWidth=' + this.o29_1 + ', _maxCharWidth=' + this.p29_1 + ', _xMin=' + this.q29_1 + ', _xMax=' + this.r29_1 + ', _xHeight=' + this.s29_1 + ', _capHeight=' + this.t29_1 + ', _underlineThickness=' + this.u29_1 + ', _underlinePosition=' + this.v29_1 + ', _strikeoutThickness=' + this.w29_1 + ', _strikeoutPosition=' + this.x29_1 + ')';
  };
  function fromInteropPointer(_this__u8e3s4, block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var tmp0_withResult = new Float32Array(15);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0_anonymous.y29(tmp0_withResult);
        block(tmp0_anonymous, handle);
        tmp0_anonymous.z29(handle, tmp0_withResult);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
        }
      }
    }
    return fromRawData(_this__u8e3s4, tmp0_withResult);
  }
  function fromRawData(_this__u8e3s4, rawData) {
    var tmp = rawData[0];
    var tmp_0 = rawData[1];
    var tmp_1 = rawData[2];
    var tmp_2 = rawData[3];
    var tmp_3 = rawData[4];
    var tmp_4 = rawData[5];
    var tmp_5 = rawData[6];
    var tmp_6 = rawData[7];
    var tmp_7 = rawData[8];
    var tmp_8 = rawData[9];
    var tmp_9 = rawData[10];
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var tmp0_asNumberOrNull = rawData[11];
    var tmp_10 = isNaN_0(tmp0_asNumberOrNull) ? null : tmp0_asNumberOrNull;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var tmp1_asNumberOrNull = rawData[12];
    var tmp_11 = isNaN_0(tmp1_asNumberOrNull) ? null : tmp1_asNumberOrNull;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var tmp2_asNumberOrNull = rawData[13];
    var tmp_12 = isNaN_0(tmp2_asNumberOrNull) ? null : tmp2_asNumberOrNull;
    var tmp$ret$3;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var tmp3_asNumberOrNull = rawData[14];
    tmp$ret$3 = isNaN_0(tmp3_asNumberOrNull) ? null : tmp3_asNumberOrNull;
    return new FontMetrics(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp$ret$3);
  }
  function Companion_11() {
    Companion_instance_11 = this;
    Companion_getInstance_45().m24();
    this.a2a_1 = FontMgr_init_$Create$(org_jetbrains_skia_FontMgr__1nDefault(), false);
  }
  var Companion_instance_11;
  function Companion_getInstance_12() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function FontMgr_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Create$(ptr, allowClose) {
    return FontMgr_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(FontMgr)));
  }
  function FontMgr() {
    Companion_getInstance_12();
  }
  var FontSlant_UPRIGHT_instance;
  var FontSlant_ITALIC_instance;
  var FontSlant_OBLIQUE_instance;
  function values_2() {
    return [FontSlant_UPRIGHT_getInstance(), FontSlant_ITALIC_getInstance(), FontSlant_OBLIQUE_getInstance()];
  }
  var FontSlant_entriesInitialized;
  function FontSlant_initEntries() {
    if (FontSlant_entriesInitialized)
      return Unit_getInstance();
    FontSlant_entriesInitialized = true;
    FontSlant_UPRIGHT_instance = new FontSlant('UPRIGHT', 0);
    FontSlant_ITALIC_instance = new FontSlant('ITALIC', 1);
    FontSlant_OBLIQUE_instance = new FontSlant('OBLIQUE', 2);
  }
  function FontSlant(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontSlant_UPRIGHT_getInstance() {
    FontSlant_initEntries();
    return FontSlant_UPRIGHT_instance;
  }
  function FontSlant_ITALIC_getInstance() {
    FontSlant_initEntries();
    return FontSlant_ITALIC_instance;
  }
  function FontSlant_OBLIQUE_getInstance() {
    FontSlant_initEntries();
    return FontSlant_OBLIQUE_instance;
  }
  function FontStyle_init_$Init$(weight, width, slant, $this) {
    FontStyle.call($this);
    $this.b2a_1 = weight & 65535 | (width & 255) << 16 | slant.w4_1 << 24;
    return $this;
  }
  function FontStyle_init_$Create$(weight, width, slant) {
    return FontStyle_init_$Init$(weight, width, slant, objectCreate(protoOf(FontStyle)));
  }
  function FontStyle_init_$Init$_0(value, $this) {
    FontStyle.call($this);
    $this.b2a_1 = value;
    return $this;
  }
  function FontStyle_init_$Create$_0(value) {
    return FontStyle_init_$Init$_0(value, objectCreate(protoOf(FontStyle)));
  }
  function Companion_12() {
    Companion_instance_12 = this;
    var tmp = this;
    Companion_getInstance_14();
    Companion_getInstance_15();
    tmp.c2a_1 = FontStyle_init_$Create$(400, 5, FontSlant_UPRIGHT_getInstance());
    var tmp_0 = this;
    Companion_getInstance_14();
    Companion_getInstance_15();
    tmp_0.d2a_1 = FontStyle_init_$Create$(700, 5, FontSlant_UPRIGHT_getInstance());
    var tmp_1 = this;
    Companion_getInstance_14();
    Companion_getInstance_15();
    tmp_1.e2a_1 = FontStyle_init_$Create$(400, 5, FontSlant_ITALIC_getInstance());
    var tmp_2 = this;
    Companion_getInstance_14();
    Companion_getInstance_15();
    tmp_2.f2a_1 = FontStyle_init_$Create$(700, 5, FontSlant_ITALIC_getInstance());
  }
  var Companion_instance_12;
  function Companion_getInstance_13() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  protoOf(FontStyle).g2a = function () {
    return this.b2a_1 & 65535;
  };
  protoOf(FontStyle).h2a = function (weight) {
    return FontStyle_init_$Create$(weight, this.t21(), this.i2a());
  };
  protoOf(FontStyle).t21 = function () {
    return this.b2a_1 >> 16 & 255;
  };
  protoOf(FontStyle).i2a = function () {
    return values_2()[this.b2a_1 >> 24 & 255];
  };
  protoOf(FontStyle).toString = function () {
    return 'FontStyle(weight=' + this.g2a() + ', width=' + this.t21() + ', slant=' + this.i2a() + ')';
  };
  protoOf(FontStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontStyle))
      return false;
    return this.b2a_1 === other.b2a_1;
  };
  protoOf(FontStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.b2a_1 | 0;
    return result;
  };
  function FontStyle() {
    Companion_getInstance_13();
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.j2a_1 = 0;
    this.k2a_1 = 100;
    this.l2a_1 = 200;
    this.m2a_1 = 300;
    this.n2a_1 = 400;
    this.o2a_1 = 500;
    this.p2a_1 = 600;
    this.q2a_1 = 700;
    this.r2a_1 = 800;
    this.s2a_1 = 900;
    this.t2a_1 = 1000;
  }
  var Companion_instance_13;
  function Companion_getInstance_14() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.u2a_1 = 1;
    this.v2a_1 = 2;
    this.w2a_1 = 3;
    this.x2a_1 = 4;
    this.y2a_1 = 5;
    this.z2a_1 = 6;
    this.a2b_1 = 7;
    this.b2b_1 = 8;
    this.c2b_1 = 9;
  }
  var Companion_instance_14;
  function Companion_getInstance_15() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function Companion_15() {
    Companion_instance_15 = this;
  }
  protoOf(Companion_15).r28 = function (name) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(name.length === 4)) {
      // Inline function 'org.jetbrains.skia.Companion.fromString.<anonymous>' call
      var message = "Name must be exactly 4 symbols, got: '" + name + "'";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.code' call
    var tmp1_get_code_jtnknr = charSequenceGet(name, 0);
    var tmp = (Char__toInt_impl_vasixd(tmp1_get_code_jtnknr) & 255) << 24;
    // Inline function 'kotlin.code' call
    var tmp2_get_code_n2njg8 = charSequenceGet(name, 1);
    var tmp_0 = tmp | (Char__toInt_impl_vasixd(tmp2_get_code_n2njg8) & 255) << 16;
    // Inline function 'kotlin.code' call
    var tmp3_get_code_qbni8p = charSequenceGet(name, 2);
    var tmp_1 = tmp_0 | (Char__toInt_impl_vasixd(tmp3_get_code_qbni8p) & 255) << 8;
    // Inline function 'kotlin.code' call
    var tmp4_get_code_tknh16 = charSequenceGet(name, 3);
    return tmp_1 | Char__toInt_impl_vasixd(tmp4_get_code_tknh16) & 255;
  };
  protoOf(Companion_15).i29 = function (tag) {
    var tmp$ret$0;
    // Inline function 'kotlin.charArrayOf' call
    tmp$ret$0 = charArrayOf([numberToChar(tag >> 24 & 255), numberToChar(tag >> 16 & 255), numberToChar(tag >> 8 & 255), numberToChar(tag & 255)]);
    return concatToString(tmp$ret$0);
  };
  var Companion_instance_15;
  function Companion_getInstance_16() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function IHasImageInfo() {
  }
  function Companion_16() {
    Companion_instance_16 = this;
    Companion_getInstance_45().m24();
  }
  protoOf(Companion_16).d2b = function (bitmap) {
    var tmp;
    try {
      Stats_getInstance().o24();
      var ptr = org_jetbrains_skia_Image__1nMakeFromBitmap(getPtr(bitmap));
      if (ptr === Companion_getInstance_47().e2b())
        throw RuntimeException_init_$Create$('Failed to Image::makeFromBitmap ' + bitmap);
      tmp = new Image(ptr);
    }finally {
      reachabilityBarrier(bitmap);
    }
    return tmp;
  };
  var Companion_instance_16;
  function Companion_getInstance_17() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function Image_nGetImageInfo$ref() {
    var l = function (p0, p1, p2) {
      org_jetbrains_skia_Image__1nGetImageInfo(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'Image_nGetImageInfo';
    return l;
  }
  function Image$_get_imageInfo_$lambda_c2a05w(this$0) {
    return function () {
      var tmp;
      if (this$0.h2b_1 == null) {
        var tmp_0 = this$0;
        var tmp_1 = Companion_getInstance_18();
        var tmp_2 = this$0.s24_1;
        tmp_0.h2b_1 = tmp_1.a25(tmp_2, Image_nGetImageInfo$ref());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Image(ptr) {
    Companion_getInstance_17();
    RefCnt_init_$Init$(ptr, this);
    this.h2b_1 = null;
  }
  protoOf(Image).y24 = function () {
    var tmp;
    try {
      if (this.h2b_1 == null) {
        commonSynchronized(this, Image$_get_imageInfo_$lambda_c2a05w(this));
      }
      tmp = ensureNotNull(this.h2b_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function ImageInfo_init_$Init$(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo.call($this, new ColorInfo(colorType, alphaType, colorSpace), width, height);
    return $this;
  }
  function ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo_init_$Init$(width, height, values_1()[colorType], values_0()[alphaType], colorSpace === Companion_getInstance_47().e2b() ? null : ColorSpace_init_$Create$(colorSpace), $this);
    return $this;
  }
  function ImageInfo_init_$Create$(width, height, colorType, alphaType, colorSpace) {
    return ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, objectCreate(protoOf(ImageInfo)));
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.z24_1 = new ImageInfo(Companion_getInstance_4().o27_1, 0, 0);
  }
  protoOf(Companion_17).a25 = function (_ptr, _nGetImageInfo) {
    Stats_getInstance().o24();
    var colorSpacePtr = null;
    // Inline function 'kotlin.let' call
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var tmp0_withResult = new Int32Array(4);
    $l$block_0: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0_anonymous.i2b(tmp0_withResult);
        // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>' call
        // Inline function 'org.jetbrains.skia.impl.withResult' call
        var tmp0_withResult_0 = new NativePointerArray(1);
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0_0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0_0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
            var tmp0_anonymous_0 = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
            var handle_0 = tmp0_anonymous_0.j2b(tmp0_withResult_0);
            // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>.<anonymous>' call
            _nGetImageInfo(_ptr, handle, handle_0);
            tmp0_anonymous_0.k2b(handle_0, tmp0_withResult_0);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
              _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
            }
          }
        }
        colorSpacePtr = tmp0_withResult_0.l(0);
        tmp0_anonymous.m2b(handle, tmp0_withResult);
        break $l$block_0;
      }finally {
        var tmp1_0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1_0 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
        }
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>' call
    return ImageInfo_init_$Create$(tmp0_withResult[0], tmp0_withResult[1], tmp0_withResult[2], tmp0_withResult[3], ensureNotNull(colorSpacePtr));
  };
  var Companion_instance_17;
  function Companion_getInstance_18() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function ImageInfo(colorInfo, width, height) {
    Companion_getInstance_18();
    this.d25_1 = colorInfo;
    this.e25_1 = width;
    this.f25_1 = height;
  }
  protoOf(ImageInfo).k25 = function () {
    return imul(this.e25_1, this.s27());
  };
  protoOf(ImageInfo).s27 = function () {
    return this.d25_1.s27();
  };
  protoOf(ImageInfo).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ImageInfo))
      return false;
    if (!(this.e25_1 === other.e25_1))
      return false;
    if (!(this.f25_1 === other.f25_1))
      return false;
    return this.d25_1.equals(other.d25_1);
  };
  protoOf(ImageInfo).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.e25_1 | 0;
    result = imul(result, PRIME) + this.f25_1 | 0;
    result = imul(result, PRIME) + this.d25_1.hashCode() | 0;
    return result;
  };
  protoOf(ImageInfo).toString = function () {
    return 'ImageInfo(_colorInfo=' + this.d25_1 + ', _width=' + this.e25_1 + ', _height=' + this.f25_1 + ')';
  };
  function Companion_18() {
    Companion_instance_18 = this;
    Companion_getInstance_45().m24();
  }
  var Companion_instance_18;
  function Companion_getInstance_19() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function ManagedString_init_$Init$(s, $this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.ManagedString.<init>.<anonymous>' call
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        tmp$ret$1 = org_jetbrains_skia_ManagedString__1nMake(tmp0_anonymous.n2b(s));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
        }
      }
    }
    ManagedString.call($this, tmp$ret$1);
    Stats_getInstance().o24();
    return $this;
  }
  function ManagedString_init_$Create$(s) {
    return ManagedString_init_$Init$(s, objectCreate(protoOf(ManagedString)));
  }
  function _FinalizerHolder_5() {
    _FinalizerHolder_instance_5 = this;
    this.o2b_1 = org_jetbrains_skia_ManagedString__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_5;
  function _FinalizerHolder_getInstance_5() {
    if (_FinalizerHolder_instance_5 == null)
      new _FinalizerHolder_5();
    return _FinalizerHolder_instance_5;
  }
  function ManagedString(ptr, managed) {
    Companion_getInstance_19();
    managed = managed === VOID ? true : managed;
    Managed.call(this, ptr, _FinalizerHolder_getInstance_5().o2b_1, managed);
  }
  protoOf(ManagedString).toString = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      var size = org_jetbrains_skia_ManagedString__nStringSize(this.s24_1);
      // Inline function 'org.jetbrains.skia.impl.withResult' call
      var tmp0_withResult = new Int8Array(size);
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
          var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var handle = tmp0_anonymous.p2b(tmp0_withResult);
          // Inline function 'org.jetbrains.skia.ManagedString.toString.<anonymous>' call
          org_jetbrains_skia_ManagedString__nStringData(this.s24_1, handle, size);
          tmp0_anonymous.q2b(handle, tmp0_withResult);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
          }
        }
      }
      tmp = decodeToString(tmp0_withResult);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ManagedString).t2b = function (s) {
    Stats_getInstance().o24();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_ManagedString__1nAppend(this.s24_1, tmp0_anonymous.n2b(s));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
        }
      }
    }
    return this;
  };
  function Companion_19() {
    Companion_instance_19 = this;
    this.u2b_1 = this.v2b(0.0, 0.0);
  }
  protoOf(Companion_19).v2b = function (dx, dy) {
    return new Matrix33(new Float32Array([1.0, 0.0, dx, 0.0, 1.0, dy, 0.0, 0.0, 1.0]));
  };
  var Companion_instance_19;
  function Companion_getInstance_20() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function Matrix33(mat) {
    Companion_getInstance_20();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(mat.length === 9)) {
      // Inline function 'org.jetbrains.skia.Matrix33.<anonymous>' call
      var message = 'Expected 9 elements, got ' + mat.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.o26_1 = mat;
  }
  protoOf(Matrix33).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix33))
      return false;
    return contentEquals(this.o26_1, other.o26_1);
  };
  protoOf(Matrix33).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.o26_1) | 0;
    return result;
  };
  protoOf(Matrix33).toString = function () {
    return 'Matrix33(_mat=' + this.o26_1 + ')';
  };
  function Companion_20() {
    Companion_instance_20 = this;
    this.w2b_1 = new Matrix44(new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]));
  }
  var Companion_instance_20;
  function Companion_getInstance_21() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function Matrix44(mat) {
    Companion_getInstance_21();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(mat.length === 16)) {
      // Inline function 'org.jetbrains.skia.Matrix44.<anonymous>' call
      var message = 'Expected 16 elements, got ' + mat.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.v26_1 = mat;
  }
  protoOf(Matrix44).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix44))
      return false;
    return contentEquals(this.v26_1, other.v26_1);
  };
  protoOf(Matrix44).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.v26_1) | 0;
    return result;
  };
  protoOf(Matrix44).toString = function () {
    return 'Matrix44(_mat=' + this.v26_1 + ')';
  };
  var MipmapMode_NONE_instance;
  var MipmapMode_NEAREST_instance;
  var MipmapMode_LINEAR_instance;
  var MipmapMode_entriesInitialized;
  function MipmapMode_initEntries() {
    if (MipmapMode_entriesInitialized)
      return Unit_getInstance();
    MipmapMode_entriesInitialized = true;
    MipmapMode_NONE_instance = new MipmapMode('NONE', 0);
    MipmapMode_NEAREST_instance = new MipmapMode('NEAREST', 1);
    MipmapMode_LINEAR_instance = new MipmapMode('LINEAR', 2);
  }
  function MipmapMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MipmapMode_NONE_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NONE_instance;
  }
  function MipmapMode_NEAREST_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NEAREST_instance;
  }
  function Companion_21() {
    Companion_instance_21 = this;
    Companion_getInstance_45().m24();
  }
  var Companion_instance_21;
  function Companion_getInstance_22() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function _FinalizerHolder_6() {
    _FinalizerHolder_instance_6 = this;
    this.x2b_1 = org_jetbrains_skia_Paint__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_6;
  function _FinalizerHolder_getInstance_6() {
    if (_FinalizerHolder_instance_6 == null)
      new _FinalizerHolder_6();
    return _FinalizerHolder_instance_6;
  }
  function Paint_init_$Init$($this) {
    Managed.call($this, org_jetbrains_skia_Paint__1nMake(), _FinalizerHolder_getInstance_6().x2b_1);
    Paint.call($this);
    Stats_getInstance().o24();
    return $this;
  }
  function Paint_init_$Create$() {
    return Paint_init_$Init$(objectCreate(protoOf(Paint)));
  }
  protoOf(Paint).t24 = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Paint__1nEquals(this.s24_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Paint).a2c = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_Paint__1nSetMode(this.s24_1, value.w4_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).b2c = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_Paint__1nSetColor(this.s24_1, value);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).c2c = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_Paint__1nGetColor(this.s24_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).d2c = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_Paint__1nSetStrokeWidth(this.s24_1, value);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).e2c = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_Paint__1nGetStrokeWidth(this.s24_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).f2c = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_Paint__1nSetStrokeMiter(this.s24_1, value);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).g2c = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_Paint__1nSetStrokeCap(this.s24_1, value.w4_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).h2c = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_Paint__1nSetStrokeJoin(this.s24_1, value.w4_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).i2c = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_Paint__1nSetShader(this.s24_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).j2c = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_Paint__1nSetColorFilter(this.s24_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).k2c = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_Paint__1nSetBlendMode(this.s24_1, value.w4_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).l2c = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = values()[org_jetbrains_skia_Paint__1nGetBlendMode(this.s24_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).m2c = function () {
    return this.l2c().equals(BlendMode_SRC_OVER_getInstance());
  };
  protoOf(Paint).n2c = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_Paint__1nSetPathEffect(this.s24_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).o2c = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_Paint__1nSetImageFilter(this.s24_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  function Paint() {
    Companion_getInstance_22();
  }
  var PaintMode_FILL_instance;
  var PaintMode_STROKE_instance;
  var PaintMode_STROKE_AND_FILL_instance;
  var PaintMode_entriesInitialized;
  function PaintMode_initEntries() {
    if (PaintMode_entriesInitialized)
      return Unit_getInstance();
    PaintMode_entriesInitialized = true;
    PaintMode_FILL_instance = new PaintMode('FILL', 0);
    PaintMode_STROKE_instance = new PaintMode('STROKE', 1);
    PaintMode_STROKE_AND_FILL_instance = new PaintMode('STROKE_AND_FILL', 2);
  }
  function PaintMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintMode_FILL_getInstance() {
    PaintMode_initEntries();
    return PaintMode_FILL_instance;
  }
  function PaintMode_STROKE_getInstance() {
    PaintMode_initEntries();
    return PaintMode_STROKE_instance;
  }
  var PaintStrokeCap_BUTT_instance;
  var PaintStrokeCap_ROUND_instance;
  var PaintStrokeCap_SQUARE_instance;
  var PaintStrokeCap_entriesInitialized;
  function PaintStrokeCap_initEntries() {
    if (PaintStrokeCap_entriesInitialized)
      return Unit_getInstance();
    PaintStrokeCap_entriesInitialized = true;
    PaintStrokeCap_BUTT_instance = new PaintStrokeCap('BUTT', 0);
    PaintStrokeCap_ROUND_instance = new PaintStrokeCap('ROUND', 1);
    PaintStrokeCap_SQUARE_instance = new PaintStrokeCap('SQUARE', 2);
  }
  function PaintStrokeCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeCap_BUTT_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_BUTT_instance;
  }
  function PaintStrokeCap_ROUND_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_ROUND_instance;
  }
  function PaintStrokeCap_SQUARE_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_SQUARE_instance;
  }
  var PaintStrokeJoin_MITER_instance;
  var PaintStrokeJoin_ROUND_instance;
  var PaintStrokeJoin_BEVEL_instance;
  var PaintStrokeJoin_entriesInitialized;
  function PaintStrokeJoin_initEntries() {
    if (PaintStrokeJoin_entriesInitialized)
      return Unit_getInstance();
    PaintStrokeJoin_entriesInitialized = true;
    PaintStrokeJoin_MITER_instance = new PaintStrokeJoin('MITER', 0);
    PaintStrokeJoin_ROUND_instance = new PaintStrokeJoin('ROUND', 1);
    PaintStrokeJoin_BEVEL_instance = new PaintStrokeJoin('BEVEL', 2);
  }
  function PaintStrokeJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeJoin_MITER_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_MITER_instance;
  }
  function PaintStrokeJoin_ROUND_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_ROUND_instance;
  }
  function PaintStrokeJoin_BEVEL_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_BEVEL_instance;
  }
  function Companion_22() {
    Companion_instance_22 = this;
    Companion_getInstance_45().m24();
  }
  protoOf(Companion_22).p2c = function (one, two, op) {
    var tmp;
    try {
      Stats_getInstance().o24();
      var ptr = org_jetbrains_skia_Path__1nMakeCombining(getPtr(one), getPtr(two), op.w4_1);
      tmp = ptr === Companion_getInstance_47().e2b() ? null : new Path(ptr);
    }finally {
      reachabilityBarrier(one);
      reachabilityBarrier(two);
    }
    return tmp;
  };
  var Companion_instance_22;
  function Companion_getInstance_23() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function _FinalizerHolder_7() {
    _FinalizerHolder_instance_7 = this;
    this.q2c_1 = org_jetbrains_skia_Path__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_7;
  function _FinalizerHolder_getInstance_7() {
    if (_FinalizerHolder_instance_7 == null)
      new _FinalizerHolder_7();
    return _FinalizerHolder_instance_7;
  }
  function Path_init_$Init$($this) {
    Path.call($this, org_jetbrains_skia_Path__1nMake());
    Stats_getInstance().o24();
    return $this;
  }
  function Path_init_$Create$() {
    return Path_init_$Init$(objectCreate(protoOf(Path)));
  }
  function Path$_get_bounds_$lambda_qr8ora(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Path__1nGetBounds(this$0.s24_1, it);
      return Unit_getInstance();
    };
  }
  function Path(ptr) {
    Companion_getInstance_23();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_7().q2c_1);
  }
  protoOf(Path).t24 = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Path__1nEquals(this.s24_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Path).t2c = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_Path__1nSetFillMode(this.s24_1, value.w4_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).u2c = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = values_3()[org_jetbrains_skia_Path__1nGetFillMode(this.s24_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).v2c = function () {
    Stats_getInstance().o24();
    org_jetbrains_skia_Path__1nReset(this.s24_1);
    return this;
  };
  protoOf(Path).rk = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_Path__1nIsEmpty(this.s24_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).w2c = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      var tmp_0 = Companion_getInstance_29();
      tmp = tmp_0.x2c(Path$_get_bounds_$lambda_qr8ora(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).y2c = function (rect, dir, start) {
    Stats_getInstance().o24();
    org_jetbrains_skia_Path__1nAddRect(this.s24_1, rect.w25_1, rect.x25_1, rect.y25_1, rect.z25_1, dir.w4_1, start);
    return this;
  };
  protoOf(Path).z2c = function (rect, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 0 : start;
    return $super === VOID ? this.y2c(rect, dir, start) : $super.y2c.call(this, rect, dir, start);
  };
  protoOf(Path).a2d = function (rrect, dir, start) {
    Stats_getInstance().o24();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_Path__1nAddRRect(this.s24_1, rrect.w25_1, rrect.x25_1, rrect.y25_1, rrect.z25_1, tmp0_anonymous.i26(rrect.f26_1), rrect.f26_1.length, dir.w4_1, start);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
        }
      }
    }
    return this;
  };
  protoOf(Path).b2d = function (rrect, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 6 : start;
    return $super === VOID ? this.a2d(rrect, dir, start) : $super.a2d.call(this, rrect, dir, start);
  };
  protoOf(Path).c2d = function (src, dx, dy, extend) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_Path__1nAddPathOffset(this.s24_1, getPtr(src), dx, dy, extend);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(src);
    }
    return tmp;
  };
  protoOf(Path).d2d = function (src, dx, dy, extend, $super) {
    extend = extend === VOID ? false : extend;
    return $super === VOID ? this.c2d(src, dx, dy, extend) : $super.c2d.call(this, src, dx, dy, extend);
  };
  protoOf(Path).e2d = function (matrix, dst, applyPerspectiveClip) {
    var tmp;
    try {
      Stats_getInstance().o24();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_Path__1nTransform(this.s24_1, tmp0_anonymous.i26(matrix.o26_1), getPtr(dst), applyPerspectiveClip);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  protoOf(Path).f2d = function (matrix, dst, applyPerspectiveClip, $super) {
    dst = dst === VOID ? null : dst;
    applyPerspectiveClip = applyPerspectiveClip === VOID ? true : applyPerspectiveClip;
    return $super === VOID ? this.e2d(matrix, dst, applyPerspectiveClip) : $super.e2d.call(this, matrix, dst, applyPerspectiveClip);
  };
  protoOf(Path).c = function () {
    return this.g2d(false);
  };
  protoOf(Path).g2d = function (forceClose) {
    return Companion_getInstance_24().h2d(this, forceClose);
  };
  var PathDirection_CLOCKWISE_instance;
  var PathDirection_COUNTER_CLOCKWISE_instance;
  var PathDirection_entriesInitialized;
  function PathDirection_initEntries() {
    if (PathDirection_entriesInitialized)
      return Unit_getInstance();
    PathDirection_entriesInitialized = true;
    PathDirection_CLOCKWISE_instance = new PathDirection('CLOCKWISE', 0);
    PathDirection_COUNTER_CLOCKWISE_instance = new PathDirection('COUNTER_CLOCKWISE', 1);
  }
  function PathDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathDirection_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_CLOCKWISE_instance;
  }
  function PathDirection_COUNTER_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_COUNTER_CLOCKWISE_instance;
  }
  var PathFillMode_WINDING_instance;
  var PathFillMode_EVEN_ODD_instance;
  var PathFillMode_INVERSE_WINDING_instance;
  var PathFillMode_INVERSE_EVEN_ODD_instance;
  function values_3() {
    return [PathFillMode_WINDING_getInstance(), PathFillMode_EVEN_ODD_getInstance(), PathFillMode_INVERSE_WINDING_getInstance(), PathFillMode_INVERSE_EVEN_ODD_getInstance()];
  }
  var PathFillMode_entriesInitialized;
  function PathFillMode_initEntries() {
    if (PathFillMode_entriesInitialized)
      return Unit_getInstance();
    PathFillMode_entriesInitialized = true;
    PathFillMode_WINDING_instance = new PathFillMode('WINDING', 0);
    PathFillMode_EVEN_ODD_instance = new PathFillMode('EVEN_ODD', 1);
    PathFillMode_INVERSE_WINDING_instance = new PathFillMode('INVERSE_WINDING', 2);
    PathFillMode_INVERSE_EVEN_ODD_instance = new PathFillMode('INVERSE_EVEN_ODD', 3);
  }
  function PathFillMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathFillMode_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_WINDING_instance;
  }
  function PathFillMode_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_EVEN_ODD_instance;
  }
  function PathFillMode_INVERSE_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_WINDING_instance;
  }
  function PathFillMode_INVERSE_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_EVEN_ODD_instance;
  }
  var PathOp_DIFFERENCE_instance;
  var PathOp_INTERSECT_instance;
  var PathOp_UNION_instance;
  var PathOp_XOR_instance;
  var PathOp_REVERSE_DIFFERENCE_instance;
  var PathOp_entriesInitialized;
  function PathOp_initEntries() {
    if (PathOp_entriesInitialized)
      return Unit_getInstance();
    PathOp_entriesInitialized = true;
    PathOp_DIFFERENCE_instance = new PathOp('DIFFERENCE', 0);
    PathOp_INTERSECT_instance = new PathOp('INTERSECT', 1);
    PathOp_UNION_instance = new PathOp('UNION', 2);
    PathOp_XOR_instance = new PathOp('XOR', 3);
    PathOp_REVERSE_DIFFERENCE_instance = new PathOp('REVERSE_DIFFERENCE', 4);
  }
  function PathOp(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathOp_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_DIFFERENCE_instance;
  }
  function PathOp_INTERSECT_getInstance() {
    PathOp_initEntries();
    return PathOp_INTERSECT_instance;
  }
  function PathOp_UNION_getInstance() {
    PathOp_initEntries();
    return PathOp_UNION_instance;
  }
  function PathOp_XOR_getInstance() {
    PathOp_initEntries();
    return PathOp_XOR_instance;
  }
  function PathOp_REVERSE_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_REVERSE_DIFFERENCE_instance;
  }
  function PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, $this) {
    PathSegment.call($this, values_4()[verbOrdinal], new Point(x0, y0), null, null, null, 0.0, false, isClosedContour);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(verbOrdinal === PathVerb_MOVE_getInstance().w4_1 ? true : verbOrdinal === PathVerb_CLOSE_getInstance().w4_1)) {
      // Inline function 'org.jetbrains.skia.PathSegment.<init>.<anonymous>' call
      var message = 'Expected MOVE or CLOSE, got ' + values_4()[verbOrdinal];
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PathSegment_init_$Create$(verbOrdinal, x0, y0, isClosedContour) {
    return PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_LINE_getInstance(), new Point(x0, y0), new Point(x1, y1), null, null, 0.0, isCloseLine, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_0(x0, y0, x1, y1, isCloseLine, isClosedContour) {
    return PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_QUAD_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_1(x0, y0, x1, y1, x2, y2, isClosedContour) {
    return PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CONIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, conicWeight, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour) {
    return PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CUBIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), new Point(x3, y3), 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour) {
    return PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment(verb, p0, p1, p2, p3, conicWeight, isCloseLine, isClosedContour) {
    verb = verb === VOID ? PathVerb_DONE_getInstance() : verb;
    p0 = p0 === VOID ? null : p0;
    p1 = p1 === VOID ? null : p1;
    p2 = p2 === VOID ? null : p2;
    p3 = p3 === VOID ? null : p3;
    conicWeight = conicWeight === VOID ? 0.0 : conicWeight;
    isCloseLine = isCloseLine === VOID ? false : isCloseLine;
    isClosedContour = isClosedContour === VOID ? false : isClosedContour;
    this.i2d_1 = verb;
    this.j2d_1 = p0;
    this.k2d_1 = p1;
    this.l2d_1 = p2;
    this.m2d_1 = p3;
    this.n2d_1 = conicWeight;
    this.o2d_1 = isCloseLine;
    this.p2d_1 = isClosedContour;
  }
  protoOf(PathSegment).toString = function () {
    return 'Segment(verb=' + this.i2d_1 + (!this.i2d_1.equals(PathVerb_DONE_getInstance()) ? ', p0=' + this.j2d_1 : '') + ((((this.i2d_1.equals(PathVerb_LINE_getInstance()) ? true : this.i2d_1.equals(PathVerb_QUAD_getInstance())) ? true : this.i2d_1.equals(PathVerb_CONIC_getInstance())) ? true : this.i2d_1.equals(PathVerb_CUBIC_getInstance())) ? ', p1=' + this.k2d_1 : '') + (((this.i2d_1.equals(PathVerb_QUAD_getInstance()) ? true : this.i2d_1.equals(PathVerb_CONIC_getInstance())) ? true : this.i2d_1.equals(PathVerb_CUBIC_getInstance())) ? ', p2=' + this.l2d_1 : '') + (this.i2d_1.equals(PathVerb_CUBIC_getInstance()) ? ', p3=' + this.m2d_1 : '') + (this.i2d_1.equals(PathVerb_CONIC_getInstance()) ? ', conicWeight=' + this.n2d_1 : '') + (this.i2d_1.equals(PathVerb_LINE_getInstance()) ? ', closeLine=' + this.o2d_1 : '') + (!this.i2d_1.equals(PathVerb_DONE_getInstance()) ? ', closedContour=' + this.p2d_1 : '') + ')';
  };
  protoOf(PathSegment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PathSegment))
      return false;
    return ((((((this.i2d_1.equals(other.i2d_1) ? !this.i2d_1.equals(PathVerb_DONE_getInstance()) ? equals(this.j2d_1, other.j2d_1) : true : false) ? (((this.i2d_1.equals(PathVerb_LINE_getInstance()) ? true : this.i2d_1.equals(PathVerb_QUAD_getInstance())) ? true : this.i2d_1.equals(PathVerb_CONIC_getInstance())) ? true : this.i2d_1.equals(PathVerb_CUBIC_getInstance())) ? equals(this.k2d_1, other.k2d_1) : true : false) ? ((this.i2d_1.equals(PathVerb_QUAD_getInstance()) ? true : this.i2d_1.equals(PathVerb_CONIC_getInstance())) ? true : this.i2d_1.equals(PathVerb_CUBIC_getInstance())) ? equals(this.l2d_1, other.l2d_1) : true : false) ? this.i2d_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.m2d_1, other.m2d_1) : true : false) ? this.i2d_1.equals(PathVerb_CONIC_getInstance()) ? compareTo(other.n2d_1, this.n2d_1) === 0 : true : false) ? this.i2d_1.equals(PathVerb_LINE_getInstance()) ? this.o2d_1 === other.o2d_1 : true : false) ? !this.i2d_1.equals(PathVerb_DONE_getInstance()) ? this.p2d_1 === other.p2d_1 : true : false;
  };
  protoOf(PathSegment).hashCode = function () {
    var tmp;
    switch (this.i2d_1.w4_1) {
      case 6:
        tmp = objectHashes([this.i2d_1]);
        break;
      case 0:
        tmp = objectHashes([this.i2d_1, this.j2d_1, this.p2d_1]);
        break;
      case 1:
        tmp = objectHashes([this.i2d_1, this.j2d_1, this.k2d_1, this.o2d_1, this.p2d_1]);
        break;
      case 2:
        tmp = objectHashes([this.i2d_1, this.j2d_1, this.k2d_1, this.l2d_1, this.p2d_1]);
        break;
      case 3:
        tmp = objectHashes([this.i2d_1, this.j2d_1, this.k2d_1, this.l2d_1, this.n2d_1, this.p2d_1]);
        break;
      case 4:
        tmp = objectHashes([this.i2d_1, this.j2d_1, this.k2d_1, this.l2d_1, this.m2d_1, this.p2d_1]);
        break;
      default:
        throw RuntimeException_init_$Create$('Unreachable');
    }
    return tmp;
  };
  function objectHashes(args) {
    return contentHashCode_0(args);
  }
  function Companion_23() {
    Companion_instance_23 = this;
    Companion_getInstance_45().m24();
  }
  protoOf(Companion_23).h2d = function (path, forceClose) {
    var tmp;
    try {
      var i = new PathSegmentIterator(path, org_jetbrains_skia_PathSegmentIterator__1nMake(getPtr(path), forceClose));
      i.t2d_1 = nextSegment(i);
      tmp = i;
    }finally {
      reachabilityBarrier(path);
    }
    return tmp;
  };
  var Companion_instance_23;
  function Companion_getInstance_24() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function nextSegment($this) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var tmp0_withResult = new Int32Array(10);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0_anonymous.i2b(tmp0_withResult);
        // Inline function 'org.jetbrains.skia.PathSegmentIterator.nextSegment.<anonymous>' call
        org_jetbrains_skia_PathSegmentIterator__1nNext($this.s24_1, handle);
        tmp0_anonymous.m2b(handle, tmp0_withResult);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
        }
      }
    }
    return pathSegmentFromIntArray(tmp0_withResult);
  }
  function PathSegmentIterator(_path, ptr) {
    Companion_getInstance_24();
    Managed.call(this, ptr, org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer());
    this.s2d_1 = _path;
    this.t2d_1 = null;
    Stats_getInstance().o24();
  }
  protoOf(PathSegmentIterator).e = function () {
    var tmp;
    try {
      var tmp0_safe_receiver = this.t2d_1;
      if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2d_1, PathVerb_DONE_getInstance()))
        throw NoSuchElementException_init_$Create$();
      var res = this.t2d_1;
      this.t2d_1 = nextSegment(this);
      tmp = res;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathSegmentIterator).d = function () {
    var tmp0_safe_receiver = this.t2d_1;
    return !equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2d_1, PathVerb_DONE_getInstance());
  };
  protoOf(PathSegmentIterator).e7 = function () {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: Not yet implemented');
  };
  function pathSegmentFromIntArray(points) {
    var context = last(points);
    var verb = context & 7;
    var isClosedBit = context >> 7 & 1;
    var isClosedLineBit = context >> 6 & 1;
    var isClosed = !(isClosedBit === 0);
    var tmp;
    switch (values_4()[verb].w4_1) {
      case 0:
      case 5:
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp1_fromBits = points[0];
        var tmp_0 = floatFromBits(tmp1_fromBits);
        var tmp$ret$1;
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp3_fromBits = points[1];
        tmp$ret$1 = floatFromBits(tmp3_fromBits);
        tmp = PathSegment_init_$Create$(verb, tmp_0, tmp$ret$1, isClosed);
        break;
      case 1:
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp5_fromBits = points[0];
        var tmp_1 = floatFromBits(tmp5_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp7_fromBits = points[1];
        var tmp_2 = floatFromBits(tmp7_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp9_fromBits = points[2];
        var tmp_3 = floatFromBits(tmp9_fromBits);
        var tmp$ret$5;
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp11_fromBits = points[3];
        tmp$ret$5 = floatFromBits(tmp11_fromBits);
        tmp = PathSegment_init_$Create$_0(tmp_1, tmp_2, tmp_3, tmp$ret$5, !(isClosedLineBit === 0), isClosed);
        break;
      case 2:
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp13_fromBits = points[0];
        var tmp_4 = floatFromBits(tmp13_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp15_fromBits = points[1];
        var tmp_5 = floatFromBits(tmp15_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp17_fromBits = points[2];
        var tmp_6 = floatFromBits(tmp17_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp19_fromBits = points[3];
        var tmp_7 = floatFromBits(tmp19_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp21_fromBits = points[4];
        var tmp_8 = floatFromBits(tmp21_fromBits);
        var tmp$ret$11;
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp23_fromBits = points[5];
        tmp$ret$11 = floatFromBits(tmp23_fromBits);
        tmp = PathSegment_init_$Create$_1(tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp$ret$11, isClosed);
        break;
      case 3:
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp25_fromBits = points[0];
        var tmp_9 = floatFromBits(tmp25_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp27_fromBits = points[1];
        var tmp_10 = floatFromBits(tmp27_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp29_fromBits = points[2];
        var tmp_11 = floatFromBits(tmp29_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp31_fromBits = points[3];
        var tmp_12 = floatFromBits(tmp31_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp33_fromBits = points[4];
        var tmp_13 = floatFromBits(tmp33_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp35_fromBits = points[5];
        var tmp_14 = floatFromBits(tmp35_fromBits);
        var tmp$ret$18;
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp37_fromBits = points[8];
        tmp$ret$18 = floatFromBits(tmp37_fromBits);
        tmp = PathSegment_init_$Create$_2(tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp$ret$18, isClosed);
        break;
      case 4:
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp39_fromBits = points[0];
        var tmp_15 = floatFromBits(tmp39_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp41_fromBits = points[1];
        var tmp_16 = floatFromBits(tmp41_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp43_fromBits = points[2];
        var tmp_17 = floatFromBits(tmp43_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp45_fromBits = points[3];
        var tmp_18 = floatFromBits(tmp45_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp47_fromBits = points[4];
        var tmp_19 = floatFromBits(tmp47_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp49_fromBits = points[5];
        var tmp_20 = floatFromBits(tmp49_fromBits);
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp51_fromBits = points[6];
        var tmp_21 = floatFromBits(tmp51_fromBits);
        var tmp$ret$26;
        // Inline function 'kotlin.fromBits' call

        FloatCompanionObject_getInstance();
        var tmp53_fromBits = points[7];
        tmp$ret$26 = floatFromBits(tmp53_fromBits);
        tmp = PathSegment_init_$Create$_3(tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp$ret$26, isClosed);
        break;
      case 6:
        tmp = new PathSegment();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  var PathVerb_MOVE_instance;
  var PathVerb_LINE_instance;
  var PathVerb_QUAD_instance;
  var PathVerb_CONIC_instance;
  var PathVerb_CUBIC_instance;
  var PathVerb_CLOSE_instance;
  var PathVerb_DONE_instance;
  function values_4() {
    return [PathVerb_MOVE_getInstance(), PathVerb_LINE_getInstance(), PathVerb_QUAD_getInstance(), PathVerb_CONIC_getInstance(), PathVerb_CUBIC_getInstance(), PathVerb_CLOSE_getInstance(), PathVerb_DONE_getInstance()];
  }
  var PathVerb_entriesInitialized;
  function PathVerb_initEntries() {
    if (PathVerb_entriesInitialized)
      return Unit_getInstance();
    PathVerb_entriesInitialized = true;
    PathVerb_MOVE_instance = new PathVerb('MOVE', 0);
    PathVerb_LINE_instance = new PathVerb('LINE', 1);
    PathVerb_QUAD_instance = new PathVerb('QUAD', 2);
    PathVerb_CONIC_instance = new PathVerb('CONIC', 3);
    PathVerb_CUBIC_instance = new PathVerb('CUBIC', 4);
    PathVerb_CLOSE_instance = new PathVerb('CLOSE', 5);
    PathVerb_DONE_instance = new PathVerb('DONE', 6);
  }
  function PathVerb(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathVerb_MOVE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_MOVE_instance;
  }
  function PathVerb_LINE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_LINE_instance;
  }
  function PathVerb_QUAD_getInstance() {
    PathVerb_initEntries();
    return PathVerb_QUAD_instance;
  }
  function PathVerb_CONIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CONIC_instance;
  }
  function PathVerb_CUBIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CUBIC_instance;
  }
  function PathVerb_CLOSE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CLOSE_instance;
  }
  function PathVerb_DONE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_DONE_instance;
  }
  function Companion_24() {
    Companion_instance_24 = this;
    Companion_getInstance_45().m24();
  }
  var Companion_instance_24;
  function Companion_getInstance_25() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function Picture(ptr) {
    Companion_getInstance_25();
    RefCnt_init_$Init$(ptr, this);
  }
  function Companion_25() {
    Companion_instance_25 = this;
    Companion_getInstance_45().m24();
  }
  var Companion_instance_25;
  function Companion_getInstance_26() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function PictureRecorder_init_$Init$($this) {
    PictureRecorder.call($this, org_jetbrains_skia_PictureRecorder__1nMake());
    Stats_getInstance().o24();
    return $this;
  }
  function PictureRecorder_init_$Create$() {
    return PictureRecorder_init_$Init$(objectCreate(protoOf(PictureRecorder)));
  }
  function _FinalizerHolder_8() {
    _FinalizerHolder_instance_8 = this;
    this.u2d_1 = org_jetbrains_skia_PictureRecorder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_8;
  function _FinalizerHolder_getInstance_8() {
    if (_FinalizerHolder_instance_8 == null)
      new _FinalizerHolder_8();
    return _FinalizerHolder_instance_8;
  }
  function PictureRecorder(ptr) {
    Companion_getInstance_26();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_8().u2d_1);
  }
  protoOf(PictureRecorder).x2d = function (bounds) {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = new Canvas(org_jetbrains_skia_PictureRecorder__1nBeginRecording(this.s24_1, bounds.w25_1, bounds.x25_1, bounds.y25_1, bounds.z25_1), false, this);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PictureRecorder).y2d = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = new Picture(org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture(this.s24_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PixelGeometry_UNKNOWN_instance;
  var PixelGeometry_RGB_H_instance;
  var PixelGeometry_BGR_H_instance;
  var PixelGeometry_RGB_V_instance;
  var PixelGeometry_BGR_V_instance;
  var PixelGeometry_entriesInitialized;
  function PixelGeometry_initEntries() {
    if (PixelGeometry_entriesInitialized)
      return Unit_getInstance();
    PixelGeometry_entriesInitialized = true;
    PixelGeometry_UNKNOWN_instance = new PixelGeometry('UNKNOWN', 0);
    PixelGeometry_RGB_H_instance = new PixelGeometry('RGB_H', 1);
    PixelGeometry_BGR_H_instance = new PixelGeometry('BGR_H', 2);
    PixelGeometry_RGB_V_instance = new PixelGeometry('RGB_V', 3);
    PixelGeometry_BGR_V_instance = new PixelGeometry('BGR_V', 4);
  }
  function PixelGeometry(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PixelGeometry_UNKNOWN_getInstance() {
    PixelGeometry_initEntries();
    return PixelGeometry_UNKNOWN_instance;
  }
  function Companion_26() {
    Companion_instance_26 = this;
    this.z2d_1 = new Point(0.0, 0.0);
  }
  var Companion_instance_26;
  function Companion_getInstance_27() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function Point(x, y) {
    Companion_getInstance_27();
    this.a2e_1 = x;
    this.b2e_1 = y;
  }
  protoOf(Point).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point))
      return false;
    if (!(compareTo(this.a2e_1, other.a2e_1) === 0))
      return false;
    return compareTo(this.b2e_1, other.b2e_1) === 0;
  };
  protoOf(Point).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.a2e_1) | 0;
    result = imul(result, PRIME) + toBits(this.b2e_1) | 0;
    return result;
  };
  protoOf(Point).toString = function () {
    return 'Point(_x=' + this.a2e_1 + ', _y=' + this.b2e_1 + ')';
  };
  function Point3(x, y, z) {
    this.c2e_1 = x;
    this.d2e_1 = y;
    this.e2e_1 = z;
  }
  protoOf(Point3).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point3))
      return false;
    if (!(compareTo(this.c2e_1, other.c2e_1) === 0))
      return false;
    if (!(compareTo(this.d2e_1, other.d2e_1) === 0))
      return false;
    return compareTo(this.e2e_1, other.e2e_1) === 0;
  };
  protoOf(Point3).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.c2e_1) | 0;
    result = imul(result, PRIME) + toBits(this.d2e_1) | 0;
    result = imul(result, PRIME) + toBits(this.e2e_1) | 0;
    return result;
  };
  protoOf(Point3).toString = function () {
    return 'Point3(_x=' + this.c2e_1 + ', _y=' + this.d2e_1 + ', _z=' + this.e2e_1 + ')';
  };
  function Companion_27() {
    Companion_instance_27 = this;
  }
  protoOf(Companion_27).f2e = function (l, t, r, b, xRad, yRad) {
    var tmp$ret$0;
    // Inline function 'kotlin.floatArrayOf' call
    tmp$ret$0 = new Float32Array([xRad, yRad]);
    return new RRect(l, t, r, b, tmp$ret$0);
  };
  protoOf(Companion_27).g2e = function (l, t, r, b, radii) {
    return new RRect(l, t, r, b, radii);
  };
  var Companion_instance_27;
  function Companion_getInstance_28() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function RRect(l, t, r, b, radii) {
    Companion_getInstance_28();
    Rect.call(this, l, t, r, b);
    this.f26_1 = radii;
  }
  protoOf(RRect).toString = function () {
    return 'RRect(_left=' + this.w25_1 + ', _top=' + this.x25_1 + ', _right=' + this.y25_1 + ', _bottom=' + this.z25_1 + ', _radii=' + joinToString(this.f26_1) + ')';
  };
  protoOf(RRect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof RRect))
      return false;
    if (!protoOf(Rect).equals.call(this, other))
      return false;
    var tmp;
    if (this.f26_1.length === other.f26_1.length) {
      tmp = contentEquals(this.f26_1, other.f26_1);
    } else {
      tmp = contentEquals(normalizeRadii(this.f26_1), normalizeRadii(other.f26_1));
    }
    return tmp;
  };
  protoOf(RRect).hashCode = function () {
    var PRIME = 59;
    var result = protoOf(Rect).hashCode.call(this);
    result = imul(result, PRIME) + contentHashCode(this.f26_1) | 0;
    return result;
  };
  function normalizeRadii(radii) {
    var tmp;
    switch (radii.length) {
      case 0:
        var tmp_0 = 0;
        var tmp_1 = new Float32Array(8);
        while (tmp_0 < 8) {
          tmp_1[tmp_0] = 0.0;
          tmp_0 = tmp_0 + 1 | 0;
        }

        tmp = tmp_1;
        break;
      case 1:
        var tmp_2 = 0;
        var tmp_3 = new Float32Array(8);
        while (tmp_2 < 8) {
          tmp_3[tmp_2] = radii[0];
          tmp_2 = tmp_2 + 1 | 0;
        }

        tmp = tmp_3;
        break;
      case 2:
        var tmp_4 = 0;
        var tmp_5 = new Float32Array(8);
        while (tmp_4 < 8) {
          var tmp_6 = tmp_4;
          tmp_5[tmp_6] = radii[tmp_6 % 2 | 0];
          tmp_4 = tmp_4 + 1 | 0;
        }

        tmp = tmp_5;
        break;
      case 4:
        var tmp_7 = 0;
        var tmp_8 = new Float32Array(8);
        while (tmp_7 < 8) {
          var tmp_9 = tmp_7;
          tmp_8[tmp_9] = radii[tmp_9 / 2 | 0];
          tmp_7 = tmp_7 + 1 | 0;
        }

        tmp = tmp_8;
        break;
      case 8:
        tmp = radii;
        break;
      default:
        throw Error_init_$Create$('illegal radii array');
    }
    return tmp;
  }
  function Companion_28() {
    Companion_instance_28 = this;
  }
  protoOf(Companion_28).h2e = function (l, t, r, b) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(l <= r)) {
      // Inline function 'org.jetbrains.skia.Companion.makeLTRB.<anonymous>' call
      var message = 'Rect::makeLTRB expected l <= r, got ' + l + ' > ' + r;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(t <= b)) {
      // Inline function 'org.jetbrains.skia.Companion.makeLTRB.<anonymous>' call
      var message_0 = 'Rect::makeLTRB expected t <= b, got ' + t + ' > ' + b;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return new Rect(l, t, r, b);
  };
  protoOf(Companion_28).i2e = function (l, t, w, h) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(w >= 0)) {
      // Inline function 'org.jetbrains.skia.Companion.makeXYWH.<anonymous>' call
      var message = 'Rect::makeXYWH expected w >= 0, got: ' + w;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(h >= 0)) {
      // Inline function 'org.jetbrains.skia.Companion.makeXYWH.<anonymous>' call
      var message_0 = 'Rect::makeXYWH expected h >= 0, got: ' + h;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return new Rect(l, t, l + w, t + h);
  };
  protoOf(Companion_28).x2c = function (block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var tmp0_withResult = new Float32Array(4);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var handle = tmp0_anonymous.y29(tmp0_withResult);
        block(tmp0_anonymous, handle);
        tmp0_anonymous.z29(handle, tmp0_withResult);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
        }
      }
    }
    var result = tmp0_withResult;
    return new Rect(result[0], result[1], result[2], result[3]);
  };
  var Companion_instance_28;
  function Companion_getInstance_29() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_29();
    this.w25_1 = left;
    this.x25_1 = top;
    this.y25_1 = right;
    this.z25_1 = bottom;
  }
  protoOf(Rect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Rect))
      return false;
    if (!(compareTo(this.w25_1, other.w25_1) === 0))
      return false;
    if (!(compareTo(this.x25_1, other.x25_1) === 0))
      return false;
    if (!(compareTo(this.y25_1, other.y25_1) === 0))
      return false;
    return compareTo(this.z25_1, other.z25_1) === 0;
  };
  protoOf(Rect).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.w25_1) | 0;
    result = imul(result, PRIME) + toBits(this.x25_1) | 0;
    result = imul(result, PRIME) + toBits(this.y25_1) | 0;
    result = imul(result, PRIME) + toBits(this.z25_1) | 0;
    return result;
  };
  protoOf(Rect).toString = function () {
    return 'Rect(_left=' + this.w25_1 + ', _top=' + this.x25_1 + ', _right=' + this.y25_1 + ', _bottom=' + this.z25_1 + ')';
  };
  function ShadowUtils() {
    ShadowUtils_instance = this;
    Companion_getInstance_45().m24();
  }
  protoOf(ShadowUtils).j2e = function (canvas, path, zPlaneParams, lightPos, lightRadius, ambientColor, spotColor, transparentOccluder, geometricOnly) {
    Stats_getInstance().o24();
    var flags = 0;
    if (transparentOccluder)
      flags = flags | 1;
    if (geometricOnly)
      flags = flags | 2;
    try {
      org_jetbrains_skia_ShadowUtils__1nDrawShadow(getPtr(canvas), getPtr(path), zPlaneParams.c2e_1, zPlaneParams.d2e_1, zPlaneParams.e2e_1, lightPos.c2e_1, lightPos.d2e_1, lightPos.e2e_1, lightRadius, ambientColor, spotColor, flags);
    }finally {
      reachabilityBarrier(canvas);
      reachabilityBarrier(path);
    }
  };
  var ShadowUtils_instance;
  function ShadowUtils_getInstance() {
    if (ShadowUtils_instance == null)
      new ShadowUtils();
    return ShadowUtils_instance;
  }
  function ArrayDecoder(ptr, disposePtr) {
    this.k2e_1 = ptr;
    this.l2e_1 = disposePtr;
  }
  protoOf(ArrayDecoder).dj = function () {
    org_jetbrains_skia_StdVectorDecoder__1nDisposeArray(this.k2e_1, this.l2e_1);
  };
  protoOf(ArrayDecoder).m2e = function (index) {
    return org_jetbrains_skia_StdVectorDecoder__1nReleaseElement(this.k2e_1, index);
  };
  protoOf(ArrayDecoder).f = function () {
    return org_jetbrains_skia_StdVectorDecoder__1nGetArraySize(this.k2e_1);
  };
  function Companion_29() {
    Companion_instance_29 = this;
    Companion_getInstance_45().m24();
  }
  protoOf(Companion_29).n2e = function (context, rt, origin, colorFormat, colorSpace, surfaceProps) {
    var tmp;
    try {
      Stats_getInstance().o24();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.Companion.makeFromBackendRenderTarget.<anonymous>' call
          var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          var tmp_0 = getPtr(context);
          var tmp_1 = getPtr(rt);
          var tmp_2 = getPtr(colorSpace);
          tmp$ret$1 = org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget(tmp_0, tmp_1, origin.w4_1, colorFormat.w4_1, tmp_2, tmp0_anonymous.p2e(surfaceProps == null ? null : surfaceProps.o2e()));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
          }
        }
      }
      var ptr = tmp$ret$1;
      tmp = ptr === Companion_getInstance_47().e2b() ? null : Surface_init_$Create$(ptr, context, rt);
    }finally {
      reachabilityBarrier(context);
      reachabilityBarrier(rt);
      reachabilityBarrier(colorSpace);
    }
    return tmp;
  };
  var Companion_instance_29;
  function Companion_getInstance_30() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function Surface_init_$Init$(ptr, context, renderTarget, $this) {
    RefCnt_init_$Init$(ptr, $this);
    Surface.call($this);
    $this.s2e_1 = context;
    $this.t2e_1 = renderTarget;
    return $this;
  }
  function Surface_init_$Create$(ptr, context, renderTarget) {
    return Surface_init_$Init$(ptr, context, renderTarget, objectCreate(protoOf(Surface)));
  }
  protoOf(Surface).u2e = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      var ptr = org_jetbrains_skia_Surface__1nGetCanvas(this.s24_1);
      var tmp_0;
      if (ptr === Companion_getInstance_47().e2b()) {
        throw IllegalArgumentException_init_$Create$_0();
      } else {
        tmp_0 = new Canvas(ptr, false, this);
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Surface).v2e = function () {
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_Surface__1nFlushAndSubmit(this.s24_1, false);
    }finally {
      reachabilityBarrier(this);
    }
  };
  function Surface() {
    Companion_getInstance_30();
  }
  var SurfaceColorFormat_UNKNOWN_instance;
  var SurfaceColorFormat_ALPHA_8_instance;
  var SurfaceColorFormat_RGB_565_instance;
  var SurfaceColorFormat_ARGB_4444_instance;
  var SurfaceColorFormat_RGBA_8888_instance;
  var SurfaceColorFormat_RGB_888x_instance;
  var SurfaceColorFormat_BGRA_8888_instance;
  var SurfaceColorFormat_RGBA_1010102_instance;
  var SurfaceColorFormat_RGB_101010x_instance;
  var SurfaceColorFormat_GRAY_8_instance;
  var SurfaceColorFormat_RGBA_F16_NORM_instance;
  var SurfaceColorFormat_RGBA_F16_instance;
  var SurfaceColorFormat_RGBA_F32_instance;
  var SurfaceColorFormat_R8G8_UNORM_instance;
  var SurfaceColorFormat_A16_FLOAT_instance;
  var SurfaceColorFormat_R16G16_FLOAT_instance;
  var SurfaceColorFormat_A16_UNORM_instance;
  var SurfaceColorFormat_R16G16_UNORM_instance;
  var SurfaceColorFormat_R16G16B16A16_UNORM_instance;
  var SurfaceColorFormat_entriesInitialized;
  function SurfaceColorFormat_initEntries() {
    if (SurfaceColorFormat_entriesInitialized)
      return Unit_getInstance();
    SurfaceColorFormat_entriesInitialized = true;
    SurfaceColorFormat_UNKNOWN_instance = new SurfaceColorFormat('UNKNOWN', 0);
    SurfaceColorFormat_ALPHA_8_instance = new SurfaceColorFormat('ALPHA_8', 1);
    SurfaceColorFormat_RGB_565_instance = new SurfaceColorFormat('RGB_565', 2);
    SurfaceColorFormat_ARGB_4444_instance = new SurfaceColorFormat('ARGB_4444', 3);
    SurfaceColorFormat_RGBA_8888_instance = new SurfaceColorFormat('RGBA_8888', 4);
    SurfaceColorFormat_RGB_888x_instance = new SurfaceColorFormat('RGB_888x', 5);
    SurfaceColorFormat_BGRA_8888_instance = new SurfaceColorFormat('BGRA_8888', 6);
    SurfaceColorFormat_RGBA_1010102_instance = new SurfaceColorFormat('RGBA_1010102', 7);
    SurfaceColorFormat_RGB_101010x_instance = new SurfaceColorFormat('RGB_101010x', 8);
    SurfaceColorFormat_GRAY_8_instance = new SurfaceColorFormat('GRAY_8', 9);
    SurfaceColorFormat_RGBA_F16_NORM_instance = new SurfaceColorFormat('RGBA_F16_NORM', 10);
    SurfaceColorFormat_RGBA_F16_instance = new SurfaceColorFormat('RGBA_F16', 11);
    SurfaceColorFormat_RGBA_F32_instance = new SurfaceColorFormat('RGBA_F32', 12);
    SurfaceColorFormat_R8G8_UNORM_instance = new SurfaceColorFormat('R8G8_UNORM', 13);
    SurfaceColorFormat_A16_FLOAT_instance = new SurfaceColorFormat('A16_FLOAT', 14);
    SurfaceColorFormat_R16G16_FLOAT_instance = new SurfaceColorFormat('R16G16_FLOAT', 15);
    SurfaceColorFormat_A16_UNORM_instance = new SurfaceColorFormat('A16_UNORM', 16);
    SurfaceColorFormat_R16G16_UNORM_instance = new SurfaceColorFormat('R16G16_UNORM', 17);
    SurfaceColorFormat_R16G16B16A16_UNORM_instance = new SurfaceColorFormat('R16G16B16A16_UNORM', 18);
  }
  function SurfaceColorFormat(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceColorFormat_RGBA_8888_getInstance() {
    SurfaceColorFormat_initEntries();
    return SurfaceColorFormat_RGBA_8888_instance;
  }
  var SurfaceOrigin_TOP_LEFT_instance;
  var SurfaceOrigin_BOTTOM_LEFT_instance;
  var SurfaceOrigin_entriesInitialized;
  function SurfaceOrigin_initEntries() {
    if (SurfaceOrigin_entriesInitialized)
      return Unit_getInstance();
    SurfaceOrigin_entriesInitialized = true;
    SurfaceOrigin_TOP_LEFT_instance = new SurfaceOrigin('TOP_LEFT', 0);
    SurfaceOrigin_BOTTOM_LEFT_instance = new SurfaceOrigin('BOTTOM_LEFT', 1);
  }
  function SurfaceOrigin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceOrigin_BOTTOM_LEFT_getInstance() {
    SurfaceOrigin_initEntries();
    return SurfaceOrigin_BOTTOM_LEFT_instance;
  }
  function _getPixelGeometryOrdinal($this) {
    return $this.p25_1.w4_1;
  }
  function SurfaceProps(isDeviceIndependentFonts, pixelGeometry) {
    isDeviceIndependentFonts = isDeviceIndependentFonts === VOID ? false : isDeviceIndependentFonts;
    pixelGeometry = pixelGeometry === VOID ? PixelGeometry_UNKNOWN_getInstance() : pixelGeometry;
    this.o25_1 = isDeviceIndependentFonts;
    this.p25_1 = pixelGeometry;
  }
  protoOf(SurfaceProps).q25 = function () {
    return 0 | (this.o25_1 ? 1 : 0);
  };
  protoOf(SurfaceProps).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SurfaceProps))
      return false;
    if (!(this.o25_1 === other.o25_1))
      return false;
    return this.p25_1.equals(other.p25_1);
  };
  protoOf(SurfaceProps).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.o25_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.p25_1.hashCode() | 0;
    return result;
  };
  protoOf(SurfaceProps).toString = function () {
    return 'SurfaceProps(_deviceIndependentFonts=' + this.o25_1 + ', _pixelGeometry=' + this.p25_1 + ')';
  };
  protoOf(SurfaceProps).o2e = function () {
    // Inline function 'kotlin.intArrayOf' call
    return new Int32Array([this.q25(), _getPixelGeometryOrdinal(this)]);
  };
  function Companion_30() {
    Companion_instance_30 = this;
    Companion_getInstance_45().m24();
  }
  protoOf(Companion_30).w2e = function (data, index) {
    var tmp;
    try {
      Stats_getInstance().o24();
      var ptr = org_jetbrains_skia_Typeface__1nMakeFromData(getPtr(data), index);
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(ptr === Companion_getInstance_47().e2b())) {
        // Inline function 'org.jetbrains.skia.Companion.makeFromData.<anonymous>' call
        var message = 'Failed to create Typeface from data ' + data;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = new Typeface(ptr);
    }finally {
      reachabilityBarrier(data);
    }
    return tmp;
  };
  protoOf(Companion_30).x2e = function (data, index, $super) {
    index = index === VOID ? 0 : index;
    return $super === VOID ? this.w2e(data, index) : $super.w2e.call(this, data, index);
  };
  var Companion_instance_30;
  function Companion_getInstance_31() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function Typeface(ptr) {
    Companion_getInstance_31();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(Typeface).a2f = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_Typeface__1nGetFontStyle(this.s24_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).b2f = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_Typeface__1nGetUniqueId(this.s24_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).t24 = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Typeface__1nEquals(this.s24_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Typeface).c2f = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      // Inline function 'org.jetbrains.skia.impl.withStringResult' call
      // Inline function 'org.jetbrains.skia.impl.use' call
      var tmp$ret$0;
      // Inline function 'org.jetbrains.skia.Typeface.<get-familyName>.<anonymous>' call
      tmp$ret$0 = org_jetbrains_skia_Typeface__1nGetFamilyName(this.s24_1);
      var tmp0_use = new ManagedString(tmp$ret$0);
      var tmp_0;
      try {
        // Inline function 'org.jetbrains.skia.impl.withStringResult.<anonymous>' call
        tmp_0 = tmp0_use.toString();
      }finally {
        tmp0_use.y13();
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).toString = function () {
    return "Typeface(familyName='" + this.c2f() + "', fontStyle=" + this.a2f() + ', uniqueId=' + this.b2f() + ')';
  };
  function CharDirection() {
    CharDirection_instance = this;
    Companion_getInstance_45().m24();
    this.d2f_1 = 0;
    this.e2f_1 = 1;
    this.f2f_1 = 2;
    this.g2f_1 = 3;
    this.h2f_1 = 4;
    this.i2f_1 = 5;
    this.j2f_1 = 6;
    this.k2f_1 = 7;
    this.l2f_1 = 8;
    this.m2f_1 = 9;
    this.n2f_1 = 10;
    this.o2f_1 = 11;
    this.p2f_1 = 12;
    this.q2f_1 = 13;
    this.r2f_1 = 14;
    this.s2f_1 = 15;
    this.t2f_1 = 16;
    this.u2f_1 = 17;
    this.v2f_1 = 18;
    this.w2f_1 = 19;
    this.x2f_1 = 20;
    this.y2f_1 = 21;
    this.z2f_1 = 22;
  }
  protoOf(CharDirection).a2g = function (codePoint) {
    return org_jetbrains_skia_icu_Unicode_charDirection(codePoint);
  };
  var CharDirection_instance;
  function CharDirection_getInstance() {
    if (CharDirection_instance == null)
      new CharDirection();
    return CharDirection_instance;
  }
  function getPtr(n) {
    var tmp1_elvis_lhs = n == null ? null : n.s24_1;
    return tmp1_elvis_lhs == null ? Companion_getInstance_47().e2b() : tmp1_elvis_lhs;
  }
  var Affinity_UPSTREAM_instance;
  var Affinity_DOWNSTREAM_instance;
  var Affinity_entriesInitialized;
  function Affinity_initEntries() {
    if (Affinity_entriesInitialized)
      return Unit_getInstance();
    Affinity_entriesInitialized = true;
    Affinity_UPSTREAM_instance = new Affinity('UPSTREAM', 0);
    Affinity_DOWNSTREAM_instance = new Affinity('DOWNSTREAM', 1);
  }
  function Affinity(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Affinity_UPSTREAM_getInstance() {
    Affinity_initEntries();
    return Affinity_UPSTREAM_instance;
  }
  function Affinity_DOWNSTREAM_getInstance() {
    Affinity_initEntries();
    return Affinity_DOWNSTREAM_instance;
  }
  var Alignment_LEFT_instance;
  var Alignment_RIGHT_instance;
  var Alignment_CENTER_instance;
  var Alignment_JUSTIFY_instance;
  var Alignment_START_instance;
  var Alignment_END_instance;
  var Alignment_entriesInitialized;
  function Alignment_initEntries() {
    if (Alignment_entriesInitialized)
      return Unit_getInstance();
    Alignment_entriesInitialized = true;
    Alignment_LEFT_instance = new Alignment('LEFT', 0);
    Alignment_RIGHT_instance = new Alignment('RIGHT', 1);
    Alignment_CENTER_instance = new Alignment('CENTER', 2);
    Alignment_JUSTIFY_instance = new Alignment('JUSTIFY', 3);
    Alignment_START_instance = new Alignment('START', 4);
    Alignment_END_instance = new Alignment('END', 5);
  }
  function Alignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Alignment_LEFT_getInstance() {
    Alignment_initEntries();
    return Alignment_LEFT_instance;
  }
  function Alignment_RIGHT_getInstance() {
    Alignment_initEntries();
    return Alignment_RIGHT_instance;
  }
  function Alignment_CENTER_getInstance() {
    Alignment_initEntries();
    return Alignment_CENTER_instance;
  }
  function Alignment_JUSTIFY_getInstance() {
    Alignment_initEntries();
    return Alignment_JUSTIFY_instance;
  }
  function Alignment_START_getInstance() {
    Alignment_initEntries();
    return Alignment_START_instance;
  }
  function Alignment_END_getInstance() {
    Alignment_initEntries();
    return Alignment_END_instance;
  }
  var BaselineMode_ALPHABETIC_instance;
  var BaselineMode_IDEOGRAPHIC_instance;
  var BaselineMode_entriesInitialized;
  function BaselineMode_initEntries() {
    if (BaselineMode_entriesInitialized)
      return Unit_getInstance();
    BaselineMode_entriesInitialized = true;
    BaselineMode_ALPHABETIC_instance = new BaselineMode('ALPHABETIC', 0);
    BaselineMode_IDEOGRAPHIC_instance = new BaselineMode('IDEOGRAPHIC', 1);
  }
  function BaselineMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BaselineMode_ALPHABETIC_getInstance() {
    BaselineMode_initEntries();
    return BaselineMode_ALPHABETIC_instance;
  }
  var DecorationLineStyle_SOLID_instance;
  var DecorationLineStyle_DOUBLE_instance;
  var DecorationLineStyle_DOTTED_instance;
  var DecorationLineStyle_DASHED_instance;
  var DecorationLineStyle_WAVY_instance;
  var DecorationLineStyle_entriesInitialized;
  function DecorationLineStyle_initEntries() {
    if (DecorationLineStyle_entriesInitialized)
      return Unit_getInstance();
    DecorationLineStyle_entriesInitialized = true;
    DecorationLineStyle_SOLID_instance = new DecorationLineStyle('SOLID', 0);
    DecorationLineStyle_DOUBLE_instance = new DecorationLineStyle('DOUBLE', 1);
    DecorationLineStyle_DOTTED_instance = new DecorationLineStyle('DOTTED', 2);
    DecorationLineStyle_DASHED_instance = new DecorationLineStyle('DASHED', 3);
    DecorationLineStyle_WAVY_instance = new DecorationLineStyle('WAVY', 4);
  }
  function DecorationLineStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DecorationLineStyle_SOLID_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_SOLID_instance;
  }
  function Companion_31() {
    Companion_instance_31 = this;
    this.b2g_1 = new DecorationStyle(false, false, false, true, -16777216, DecorationLineStyle_SOLID_getInstance(), 1.0);
  }
  var Companion_instance_31;
  function Companion_getInstance_32() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function DecorationStyle(_underline, _overline, _lineThrough, _gaps, color, lineStyle, thicknessMultiplier) {
    Companion_getInstance_32();
    this.c2g_1 = _underline;
    this.d2g_1 = _overline;
    this.e2g_1 = _lineThrough;
    this.f2g_1 = _gaps;
    this.g2g_1 = color;
    this.h2g_1 = lineStyle;
    this.i2g_1 = thicknessMultiplier;
  }
  protoOf(DecorationStyle).j2g = function () {
    return this.h2g_1;
  };
  protoOf(DecorationStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof DecorationStyle))
      return false;
    if (!(this.c2g_1 === other.c2g_1))
      return false;
    if (!(this.d2g_1 === other.d2g_1))
      return false;
    if (!(this.e2g_1 === other.e2g_1))
      return false;
    if (!(this.f2g_1 === other.f2g_1))
      return false;
    if (!(this.g2g_1 === other.g2g_1))
      return false;
    if (!(compareTo(this.i2g_1, other.i2g_1) === 0))
      return false;
    return this.j2g().equals(other.j2g());
  };
  protoOf(DecorationStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.c2g_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.d2g_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.e2g_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.f2g_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.g2g_1 | 0;
    result = imul(result, PRIME) + toBits(this.i2g_1) | 0;
    result = imul(result, PRIME) + this.j2g().hashCode() | 0;
    return result;
  };
  protoOf(DecorationStyle).toString = function () {
    return 'DecorationStyle(_underline=' + this.c2g_1 + ', _overline=' + this.d2g_1 + ', _lineThrough=' + this.e2g_1 + ', _gaps=' + this.f2g_1 + ', _color=' + this.g2g_1 + ', _lineStyle=' + this.j2g() + ', _thicknessMultiplier=' + this.i2g_1 + ')';
  };
  var Direction_RTL_instance;
  var Direction_LTR_instance;
  function values_5() {
    return [Direction_RTL_getInstance(), Direction_LTR_getInstance()];
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_RTL_instance = new Direction('RTL', 0);
    Direction_LTR_instance = new Direction('LTR', 1);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Direction_RTL_getInstance() {
    Direction_initEntries();
    return Direction_RTL_instance;
  }
  function Direction_LTR_getInstance() {
    Direction_initEntries();
    return Direction_LTR_instance;
  }
  function Companion_32() {
    Companion_instance_32 = this;
    Companion_getInstance_45().m24();
  }
  var Companion_instance_32;
  function Companion_getInstance_33() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function FontCollection_init_$Init$($this) {
    FontCollection.call($this, org_jetbrains_skia_paragraph_FontCollection__1nMake());
    Stats_getInstance().o24();
    return $this;
  }
  function FontCollection_init_$Create$() {
    return FontCollection_init_$Init$(objectCreate(protoOf(FontCollection)));
  }
  function FontCollection(ptr) {
    Companion_getInstance_33();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(FontCollection).m2g = function (fontMgr) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager(this.s24_1, getPtr(fontMgr), Companion_getInstance_47().e2b());
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).n2g = function (fontMgr) {
    return this.o2g(fontMgr, null);
  };
  protoOf(FontCollection).o2g = function (fontMgr, defaultFamilyName) {
    var tmp;
    try {
      Stats_getInstance().o24();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager(this.s24_1, getPtr(fontMgr), tmp0_anonymous.n2b(defaultFamilyName));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).p2g = function (familyNames, style) {
    var tmp;
    try {
      Stats_getInstance().o24();
      // Inline function 'org.jetbrains.skia.arrayDecoderScope' call
      var arrayDecoder = null;
      var tmp_0;
      try {
        // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>' call
        var tmp$ret$1;
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>.<anonymous>' call
            var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
            var tmp_1 = this.s24_1;
            var tmp_2 = tmp0_anonymous.q2g(familyNames);
            var tmp1_elvis_lhs = familyNames == null ? null : familyNames.length;
            tmp$ret$1 = org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces(tmp_1, tmp_2, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, style.b2a_1);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
              _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
            }
          }
        }
        arrayDecoder = new ArrayDecoder(tmp$ret$1, org_jetbrains_skia_impl_RefCnt__getFinalizer());
        // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>' call
        var tmp0_anonymous_0 = arrayDecoder;
        // Inline function 'kotlin.collections.toTypedArray' call
        // Inline function 'kotlin.collections.map' call
        var tmp0_map = until(0, tmp0_anonymous_0.f());
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var inductionVariable = tmp0_map.t_1;
        var last = tmp0_map.u_1;
        if (inductionVariable <= last)
          do {
            var item = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$3;
            // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>.<anonymous>' call
            tmp$ret$3 = new Typeface(tmp0_anonymous_0.m2e(item));
            tmp0_mapTo.a(tmp$ret$3);
          }
           while (!(item === last));
        tmp_0 = copyToArray(tmp0_mapTo);
      }finally {
        var tmp0_safe_receiver = arrayDecoder;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.dj();
        }
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Companion_33() {
    Companion_instance_33 = this;
  }
  protoOf(Companion_33).r2g = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize(array);
  };
  protoOf(Companion_33).s2g = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray(array);
  };
  protoOf(Companion_33).t2g = function (array, index) {
    var intArray = new Int32Array(6);
    var doubleArray = new Float64Array(7);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement(array, index, tmp0_anonymous.p2e(intArray), tmp0_anonymous.u2g(doubleArray));
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
        }
      }
    }
    return new LineMetrics(intArray[0], intArray[1], intArray[2], intArray[3], !(intArray[4] === 0), doubleArray[0], doubleArray[1], doubleArray[2], doubleArray[3], doubleArray[4], doubleArray[5], doubleArray[6], intArray[5]);
  };
  var Companion_instance_33;
  function Companion_getInstance_34() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    Companion_getInstance_34();
    this.v2g_1 = startIndex;
    this.w2g_1 = endIndex;
    this.x2g_1 = endExcludingWhitespaces;
    this.y2g_1 = endIncludingNewline;
    this.z2g_1 = isHardBreak;
    this.a2h_1 = ascent;
    this.b2h_1 = descent;
    this.c2h_1 = unscaledAscent;
    this.d2h_1 = height;
    this.e2h_1 = width;
    this.f2h_1 = left;
    this.g2h_1 = baseline;
    this.h2h_1 = lineNumber;
  }
  protoOf(LineMetrics).i2h = function () {
    return this.f2h_1 + this.e2h_1;
  };
  protoOf(LineMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof LineMetrics))
      return false;
    if (!(this.v2g_1 === other.v2g_1))
      return false;
    if (!(this.w2g_1 === other.w2g_1))
      return false;
    if (!(this.x2g_1 === other.x2g_1))
      return false;
    if (!(this.y2g_1 === other.y2g_1))
      return false;
    if (!(this.z2g_1 === other.z2g_1))
      return false;
    if (!(compareTo(this.a2h_1, other.a2h_1) === 0))
      return false;
    if (!(compareTo(this.b2h_1, other.b2h_1) === 0))
      return false;
    if (!(compareTo(this.c2h_1, other.c2h_1) === 0))
      return false;
    if (!(compareTo(this.d2h_1, other.d2h_1) === 0))
      return false;
    if (!(compareTo(this.e2h_1, other.e2h_1) === 0))
      return false;
    if (!(compareTo(this.f2h_1, other.f2h_1) === 0))
      return false;
    if (!(compareTo(this.g2h_1, other.g2h_1) === 0))
      return false;
    return this.h2h_1 === other.h2h_1;
  };
  protoOf(LineMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.v2g_1 | 0;
    result = imul(result, PRIME) + this.w2g_1 | 0;
    result = imul(result, PRIME) + this.x2g_1 | 0;
    result = imul(result, PRIME) + this.y2g_1 | 0;
    result = imul(result, PRIME) + (this.z2g_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + toBits_0(this.a2h_1).z5() | 0;
    result = imul(result, PRIME) + toBits_0(this.b2h_1).z5() | 0;
    result = imul(result, PRIME) + toBits_0(this.c2h_1).z5() | 0;
    result = imul(result, PRIME) + toBits_0(this.d2h_1).z5() | 0;
    result = imul(result, PRIME) + toBits_0(this.e2h_1).z5() | 0;
    result = imul(result, PRIME) + toBits_0(this.f2h_1).z5() | 0;
    result = imul(result, PRIME) + toBits_0(this.g2h_1).z5() | 0;
    result = imul(result, PRIME) + this.h2h_1 | 0;
    return result;
  };
  protoOf(LineMetrics).toString = function () {
    return 'LineMetrics(_startIndex=' + this.v2g_1 + ', _endIndex=' + this.w2g_1 + ', _endExcludingWhitespaces=' + this.x2g_1 + ', _endIncludingNewline=' + this.y2g_1 + ', _hardBreak=' + this.z2g_1 + ', _ascent=' + this.a2h_1 + ', _descent=' + this.b2h_1 + ', _unscaledAscent=' + this.c2h_1 + ', _height=' + this.d2h_1 + ', _width=' + this.e2h_1 + ', _left=' + this.f2h_1 + ', _baseline=' + this.g2h_1 + ', _lineNumber=' + this.h2h_1 + ')';
  };
  function Companion_34() {
    Companion_instance_34 = this;
    Companion_getInstance_45().m24();
  }
  var Companion_instance_34;
  function Companion_getInstance_35() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function _FinalizerHolder_9() {
    _FinalizerHolder_instance_9 = this;
    this.j2h_1 = org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_9;
  function _FinalizerHolder_getInstance_9() {
    if (_FinalizerHolder_instance_9 == null)
      new _FinalizerHolder_9();
    return _FinalizerHolder_instance_9;
  }
  function Paragraph(ptr, text) {
    Companion_getInstance_35();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_9().j2h_1);
    Stats_getInstance().o24();
    this.m2h_1 = text;
  }
  protoOf(Paragraph).y13 = function () {
    if (!(this.m2h_1 == null)) {
      ensureNotNull(this.m2h_1).y13();
      this.m2h_1 = null;
    }
    protoOf(Managed).y13.call(this);
  };
  protoOf(Paragraph).u21 = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetHeight(this.s24_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).n2h = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth(this.s24_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).o2h = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth(this.s24_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).p2h = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline(this.s24_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).q2h = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines(this.s24_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).r2h = function (width) {
    Stats_getInstance().o24();
    org_jetbrains_skia_paragraph_Paragraph__1nLayout(this.s24_1, width);
    return this;
  };
  protoOf(Paragraph).s2h = function (canvas, x, y) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_paragraph_Paragraph__1nPaint(this.s24_1, getPtr(canvas), x, y);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(canvas);
    }
    return tmp;
  };
  protoOf(Paragraph).t2h = function (start, end, rectHeightMode, rectWidthMode) {
    var tmp;
    try {
      Stats_getInstance().o24();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.Paragraph.getRectsForRange.<anonymous>' call
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          var tmp0_fromInterop = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange(this.s24_1, start, end, rectHeightMode.w4_1, rectWidthMode.w4_1);
          var tmp1_fromInterop = Companion_getInstance_40();
          var size = tmp1_fromInterop.r2g(tmp0_fromInterop);
          var tmp_0 = 0;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_1 = fillArrayVal(Array(size), null);
          while (tmp_0 < size) {
            var tmp_2 = tmp_0;
            tmp_1[tmp_2] = tmp1_fromInterop.t2g(tmp0_fromInterop, tmp_2);
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_1;
          tmp1_fromInterop.s2g(tmp0_fromInterop);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
          }
        }
      }
      tmp = result;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).u2h = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.Paragraph.<get-rectsForPlaceholders>.<anonymous>' call
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          var tmp0_fromInterop = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders(this.s24_1);
          var tmp1_fromInterop = Companion_getInstance_40();
          var size = tmp1_fromInterop.r2g(tmp0_fromInterop);
          var tmp_0 = 0;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_1 = fillArrayVal(Array(size), null);
          while (tmp_0 < size) {
            var tmp_2 = tmp_0;
            tmp_1[tmp_2] = tmp1_fromInterop.t2g(tmp0_fromInterop, tmp_2);
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_1;
          tmp1_fromInterop.s2g(tmp0_fromInterop);
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
          }
        }
      }
      tmp = result;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).v2h = function (dx, dy) {
    var tmp;
    try {
      Stats_getInstance().o24();
      var res = org_jetbrains_skia_paragraph_Paragraph__1nGetGlyphPositionAtCoordinate(this.s24_1, dx, dy);
      tmp = res >= 0 ? new PositionWithAffinity(res, Affinity_DOWNSTREAM_getInstance()) : new PositionWithAffinity((-res | 0) - 1 | 0, Affinity_UPSTREAM_getInstance());
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).w2h = function () {
    var tmp;
    try {
      var tmp_0;
      if (this.m2h_1 == null) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = [];
      } else {
        Stats_getInstance().o24();
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.paragraph.Paragraph.<get-lineMetrics>.<anonymous>' call
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
            // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
            var tmp0_fromInterop = org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics(this.s24_1, getPtr(this.m2h_1));
            var tmp1_fromInterop = Companion_getInstance_34();
            var size = tmp1_fromInterop.r2g(tmp0_fromInterop);
            var tmp_1 = 0;
            // Inline function 'kotlin.arrayOfNulls' call
            var tmp_2 = fillArrayVal(Array(size), null);
            while (tmp_1 < size) {
              var tmp_3 = tmp_1;
              tmp_2[tmp_3] = tmp1_fromInterop.t2g(tmp0_fromInterop, tmp_3);
              tmp_1 = tmp_1 + 1 | 0;
            }
            var result = tmp_2;
            tmp1_fromInterop.s2g(tmp0_fromInterop);
            break $l$block;
          }finally {
            var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
            _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
            if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
              _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
            }
          }
        }
        tmp_0 = result;
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.m2h_1);
    }
    return tmp;
  };
  protoOf(Paragraph).x2h = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber(this.s24_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Companion_35() {
    Companion_instance_35 = this;
    Companion_getInstance_45().m24();
  }
  var Companion_instance_35;
  function Companion_getInstance_36() {
    if (Companion_instance_35 == null)
      new Companion_35();
    return Companion_instance_35;
  }
  function _FinalizerHolder_10() {
    _FinalizerHolder_instance_10 = this;
    this.y2h_1 = org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_10;
  function _FinalizerHolder_getInstance_10() {
    if (_FinalizerHolder_instance_10 == null)
      new _FinalizerHolder_10();
    return _FinalizerHolder_instance_10;
  }
  function ParagraphBuilder(style, fc) {
    Companion_getInstance_36();
    Managed.call(this, makeParagraphBuilder(style, fc), _FinalizerHolder_getInstance_10().y2h_1);
    this.b2i_1 = null;
  }
  protoOf(ParagraphBuilder).c2i = function (style) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle(this.s24_1, getPtr(style));
      tmp = this;
    }finally {
      reachabilityBarrier(style);
    }
    return tmp;
  };
  protoOf(ParagraphBuilder).d2i = function (text) {
    Stats_getInstance().o24();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText(this.s24_1, tmp0_anonymous.n2b(text));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
    }
    if (this.b2i_1 == null)
      this.b2i_1 = ManagedString_init_$Create$(text);
    else {
      ensureNotNull(this.b2i_1).t2b(text);
    }
    return this;
  };
  protoOf(ParagraphBuilder).e2i = function (style) {
    Stats_getInstance().o24();
    org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder(this.s24_1, style.f2i_1, style.g2i_1, style.k2i().w4_1, style.l2i().w4_1, style.j2i_1);
    return this;
  };
  protoOf(ParagraphBuilder).ia = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      var paragraph = new Paragraph(org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild(this.s24_1), this.b2i_1);
      this.b2i_1 = null;
      tmp = paragraph;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function makeParagraphBuilder(style, fc) {
    Stats_getInstance().o24();
    var tmp;
    try {
      tmp = org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake(getPtr(style), getPtr(fc));
    }finally {
      reachabilityBarrier(style);
      reachabilityBarrier(fc);
    }
    return tmp;
  }
  function Companion_36() {
    Companion_instance_36 = this;
    Companion_getInstance_45().m24();
  }
  var Companion_instance_36;
  function Companion_getInstance_37() {
    if (Companion_instance_36 == null)
      new Companion_36();
    return Companion_instance_36;
  }
  function _FinalizerHolder_11() {
    _FinalizerHolder_instance_11 = this;
    this.m2i_1 = org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_11;
  function _FinalizerHolder_getInstance_11() {
    if (_FinalizerHolder_instance_11 == null)
      new _FinalizerHolder_11();
    return _FinalizerHolder_instance_11;
  }
  function ParagraphStyle() {
    Companion_getInstance_37();
    Managed.call(this, org_jetbrains_skia_paragraph_ParagraphStyle__1nMake(), _FinalizerHolder_getInstance_11().m2i_1);
    Stats_getInstance().o24();
  }
  protoOf(ParagraphStyle).t24 = function (other) {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals(this.s24_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).p2i = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetStrutStyle(this.s24_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).q2i = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = new StrutStyle(org_jetbrains_skia_paragraph_ParagraphStyle__1nGetStrutStyle(this.s24_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).r2i = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle(this.s24_1, getPtr(value));
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).s2i = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection(this.s24_1, value.w4_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).t2i = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment(this.s24_1, value.w4_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).u2i = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount(this.s24_1, value);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).v2i = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis(this.s24_1, tmp0_anonymous.n2b(value));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
          }
        }
      }
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).w2i = function (value) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent(this.s24_1, value.x2i_1, value.y2i_1);
      tmp = Unit_getInstance();
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PlaceholderAlignment_BASELINE_instance;
  var PlaceholderAlignment_ABOVE_BASELINE_instance;
  var PlaceholderAlignment_BELOW_BASELINE_instance;
  var PlaceholderAlignment_TOP_instance;
  var PlaceholderAlignment_BOTTOM_instance;
  var PlaceholderAlignment_MIDDLE_instance;
  var PlaceholderAlignment_entriesInitialized;
  function PlaceholderAlignment_initEntries() {
    if (PlaceholderAlignment_entriesInitialized)
      return Unit_getInstance();
    PlaceholderAlignment_entriesInitialized = true;
    PlaceholderAlignment_BASELINE_instance = new PlaceholderAlignment('BASELINE', 0);
    PlaceholderAlignment_ABOVE_BASELINE_instance = new PlaceholderAlignment('ABOVE_BASELINE', 1);
    PlaceholderAlignment_BELOW_BASELINE_instance = new PlaceholderAlignment('BELOW_BASELINE', 2);
    PlaceholderAlignment_TOP_instance = new PlaceholderAlignment('TOP', 3);
    PlaceholderAlignment_BOTTOM_instance = new PlaceholderAlignment('BOTTOM', 4);
    PlaceholderAlignment_MIDDLE_instance = new PlaceholderAlignment('MIDDLE', 5);
  }
  function PlaceholderAlignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PlaceholderAlignment_ABOVE_BASELINE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_ABOVE_BASELINE_instance;
  }
  function PlaceholderAlignment_TOP_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_TOP_instance;
  }
  function PlaceholderAlignment_BOTTOM_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_BOTTOM_instance;
  }
  function PlaceholderAlignment_MIDDLE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_MIDDLE_instance;
  }
  function PlaceholderStyle(width, height, alignment, baselineMode, baseline) {
    this.f2i_1 = width;
    this.g2i_1 = height;
    this.h2i_1 = alignment;
    this.i2i_1 = baselineMode;
    this.j2i_1 = baseline;
  }
  protoOf(PlaceholderStyle).k2i = function () {
    return this.h2i_1;
  };
  protoOf(PlaceholderStyle).l2i = function () {
    return this.i2i_1;
  };
  protoOf(PlaceholderStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof PlaceholderStyle))
      return false;
    if (!(compareTo(this.f2i_1, other.f2i_1) === 0))
      return false;
    if (!(compareTo(this.g2i_1, other.g2i_1) === 0))
      return false;
    if (!(compareTo(this.j2i_1, other.j2i_1) === 0))
      return false;
    if (!this.k2i().equals(other.k2i()))
      return false;
    return this.l2i().equals(other.l2i());
  };
  protoOf(PlaceholderStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.f2i_1) | 0;
    result = imul(result, PRIME) + toBits(this.g2i_1) | 0;
    result = imul(result, PRIME) + toBits(this.j2i_1) | 0;
    result = imul(result, PRIME) + this.k2i().hashCode() | 0;
    result = imul(result, PRIME) + this.l2i().hashCode() | 0;
    return result;
  };
  protoOf(PlaceholderStyle).toString = function () {
    return 'PlaceholderStyle(_width=' + this.f2i_1 + ', _height=' + this.g2i_1 + ', _alignment=' + this.k2i() + ', _baselineMode=' + this.l2i() + ', _baseline=' + this.j2i_1 + ')';
  };
  function PositionWithAffinity(position, affinity) {
    this.z2i_1 = position;
    this.a2j_1 = affinity;
  }
  protoOf(PositionWithAffinity).b2j = function () {
    return this.a2j_1;
  };
  protoOf(PositionWithAffinity).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof PositionWithAffinity))
      return false;
    if (!(this.z2i_1 === other.z2i_1))
      return false;
    return this.b2j().equals(other.b2j());
  };
  protoOf(PositionWithAffinity).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.z2i_1 | 0;
    result = imul(result, PRIME) + this.b2j().hashCode() | 0;
    return result;
  };
  protoOf(PositionWithAffinity).toString = function () {
    return 'PositionWithAffinity(_position=' + this.z2i_1 + ', _affinity=' + this.b2j() + ')';
  };
  var RectHeightMode_TIGHT_instance;
  var RectHeightMode_MAX_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance;
  var RectHeightMode_STRUT_instance;
  var RectHeightMode_entriesInitialized;
  function RectHeightMode_initEntries() {
    if (RectHeightMode_entriesInitialized)
      return Unit_getInstance();
    RectHeightMode_entriesInitialized = true;
    RectHeightMode_TIGHT_instance = new RectHeightMode('TIGHT', 0);
    RectHeightMode_MAX_instance = new RectHeightMode('MAX', 1);
    RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance = new RectHeightMode('INCLUDE_LINE_SPACING_MIDDLE', 2);
    RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance = new RectHeightMode('INCLUDE_LINE_SPACING_TOP', 3);
    RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance = new RectHeightMode('INCLUDE_LINE_SPACING_BOTTOM', 4);
    RectHeightMode_STRUT_instance = new RectHeightMode('STRUT', 5);
  }
  function RectHeightMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectHeightMode_MAX_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_MAX_instance;
  }
  function RectHeightMode_STRUT_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_STRUT_instance;
  }
  var RectWidthMode_TIGHT_instance;
  var RectWidthMode_MAX_instance;
  var RectWidthMode_entriesInitialized;
  function RectWidthMode_initEntries() {
    if (RectWidthMode_entriesInitialized)
      return Unit_getInstance();
    RectWidthMode_entriesInitialized = true;
    RectWidthMode_TIGHT_instance = new RectWidthMode('TIGHT', 0);
    RectWidthMode_MAX_instance = new RectWidthMode('MAX', 1);
  }
  function RectWidthMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectWidthMode_TIGHT_getInstance() {
    RectWidthMode_initEntries();
    return RectWidthMode_TIGHT_instance;
  }
  function Companion_37() {
    Companion_instance_37 = this;
  }
  var Companion_instance_37;
  function Companion_getInstance_38() {
    if (Companion_instance_37 == null)
      new Companion_37();
    return Companion_instance_37;
  }
  function Shadow(color, offsetX, offsetY, blurSigma) {
    Companion_getInstance_38();
    this.c2j_1 = color;
    this.d2j_1 = offsetX;
    this.e2j_1 = offsetY;
    this.f2j_1 = blurSigma;
  }
  protoOf(Shadow).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!(this.c2j_1 === other.c2j_1))
      return false;
    if (!(compareTo(this.d2j_1, other.d2j_1) === 0))
      return false;
    if (!(compareTo(this.e2j_1, other.e2j_1) === 0))
      return false;
    return compareTo(this.f2j_1, other.f2j_1) === 0;
  };
  protoOf(Shadow).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.c2j_1 | 0;
    result = imul(result, PRIME) + toBits(this.d2j_1) | 0;
    result = imul(result, PRIME) + toBits(this.e2j_1) | 0;
    var blurSigma = toBits_0(this.f2j_1);
    result = imul(result, PRIME) + blurSigma.p6(32).td(blurSigma).z5() | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(_color=' + this.c2j_1 + ', _offsetX=' + this.d2j_1 + ', _offsetY=' + this.e2j_1 + ', _blurSigma=' + this.f2j_1 + ')';
  };
  function Companion_38() {
    Companion_instance_38 = this;
    Companion_getInstance_45().m24();
  }
  var Companion_instance_38;
  function Companion_getInstance_39() {
    if (Companion_instance_38 == null)
      new Companion_38();
    return Companion_instance_38;
  }
  function StrutStyle_init_$Init$($this) {
    StrutStyle.call($this, org_jetbrains_skia_paragraph_StrutStyle__1nMake());
    Stats_getInstance().o24();
    return $this;
  }
  function StrutStyle_init_$Create$() {
    return StrutStyle_init_$Init$(objectCreate(protoOf(StrutStyle)));
  }
  function _FinalizerHolder_12() {
    _FinalizerHolder_instance_12 = this;
    this.g2j_1 = org_jetbrains_skia_paragraph_StrutStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_12;
  function _FinalizerHolder_getInstance_12() {
    if (_FinalizerHolder_instance_12 == null)
      new _FinalizerHolder_12();
    return _FinalizerHolder_instance_12;
  }
  function StrutStyle(ptr) {
    Companion_getInstance_39();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_12().g2j_1);
  }
  protoOf(StrutStyle).t24 = function (other) {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nEquals(this.s24_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(StrutStyle).j2j = function (value) {
    this.k2j(value);
  };
  protoOf(StrutStyle).l2j = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nGetFontSize(this.s24_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).k2j = function (value) {
    Stats_getInstance().o24();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetFontSize(this.s24_1, value);
    return this;
  };
  protoOf(StrutStyle).m2j = function (value) {
    this.n2j(value);
  };
  protoOf(StrutStyle).u21 = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nGetHeight(this.s24_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).n2j = function (value) {
    Stats_getInstance().o24();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetHeight(this.s24_1, value);
    return this;
  };
  protoOf(StrutStyle).o2j = function (value) {
    this.p2j(value);
  };
  protoOf(StrutStyle).q2j = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nIsEnabled(this.s24_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).p2j = function (value) {
    Stats_getInstance().o24();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetEnabled(this.s24_1, value);
    return this;
  };
  protoOf(StrutStyle).r2j = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightForced(this.s24_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).s2j = function (value) {
    this.t2j(value);
  };
  protoOf(StrutStyle).u2j = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_paragraph_StrutStyle__1nIsHeightOverridden(this.s24_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(StrutStyle).t2j = function (value) {
    Stats_getInstance().o24();
    org_jetbrains_skia_paragraph_StrutStyle__1nSetHeightOverridden(this.s24_1, value);
    return this;
  };
  function TextBox_init_$Init$(l, t, r, b, direction, $this) {
    TextBox.call($this, Companion_getInstance_29().h2e(l, t, r, b), values_5()[direction]);
    return $this;
  }
  function TextBox_init_$Create$(l, t, r, b, direction) {
    return TextBox_init_$Init$(l, t, r, b, direction, objectCreate(protoOf(TextBox)));
  }
  function Companion_39() {
    Companion_instance_39 = this;
  }
  protoOf(Companion_39).t2g = function (array, index) {
    var rect = new Float32Array(4);
    var direction = new Int32Array(1);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var rectPtr = tmp0_anonymous.i26(rect);
        var directionPtr = tmp0_anonymous.p2e(direction);
        org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement(array, index, rectPtr, directionPtr);
        tmp0_anonymous.z29(rectPtr, rect);
        tmp0_anonymous.m2b(directionPtr, direction);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
        }
      }
    }
    return TextBox_init_$Create$(rect[0], rect[1], rect[2], rect[3], direction[0]);
  };
  protoOf(Companion_39).r2g = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nGetArraySize(array);
  };
  protoOf(Companion_39).s2g = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nDisposeArray(array);
  };
  var Companion_instance_39;
  function Companion_getInstance_40() {
    if (Companion_instance_39 == null)
      new Companion_39();
    return Companion_instance_39;
  }
  function TextBox(rect, direction) {
    Companion_getInstance_40();
    this.v2j_1 = rect;
    this.w2j_1 = direction;
  }
  protoOf(TextBox).x2j = function () {
    return this.w2j_1;
  };
  protoOf(TextBox).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof TextBox))
      return false;
    if (!this.v2j_1.equals(other.v2j_1))
      return false;
    return this.x2j().equals(other.x2j());
  };
  protoOf(TextBox).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.v2j_1.hashCode() | 0;
    result = imul(result, PRIME) + this.x2j().hashCode() | 0;
    return result;
  };
  protoOf(TextBox).toString = function () {
    return 'TextBox(_rect=' + this.v2j_1 + ', _direction=' + this.x2j() + ')';
  };
  function TextIndent(firstLine, restLine) {
    firstLine = firstLine === VOID ? 0.0 : firstLine;
    restLine = restLine === VOID ? 0.0 : restLine;
    this.x2i_1 = firstLine;
    this.y2i_1 = restLine;
  }
  protoOf(TextIndent).toString = function () {
    return 'TextIndent(firstLine=' + this.x2i_1 + ', restLine=' + this.y2i_1 + ')';
  };
  protoOf(TextIndent).hashCode = function () {
    var result = getNumberHashCode(this.x2i_1);
    result = imul(result, 31) + getNumberHashCode(this.y2i_1) | 0;
    return result;
  };
  protoOf(TextIndent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent))
      return false;
    var tmp0_other_with_cast = other instanceof TextIndent ? other : THROW_CCE();
    if (!equals(this.x2i_1, tmp0_other_with_cast.x2i_1))
      return false;
    if (!equals(this.y2i_1, tmp0_other_with_cast.y2i_1))
      return false;
    return true;
  };
  function Companion_40() {
    Companion_instance_40 = this;
    Companion_getInstance_45().m24();
  }
  var Companion_instance_40;
  function Companion_getInstance_41() {
    if (Companion_instance_40 == null)
      new Companion_40();
    return Companion_instance_40;
  }
  function TextStyle_init_$Init$($this) {
    TextStyle.call($this, org_jetbrains_skia_paragraph_TextStyle__1nMake());
    Stats_getInstance().o24();
    return $this;
  }
  function TextStyle_init_$Create$() {
    return TextStyle_init_$Init$(objectCreate(protoOf(TextStyle)));
  }
  function _FinalizerHolder_13() {
    _FinalizerHolder_instance_13 = this;
    this.y2j_1 = org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_13;
  function _FinalizerHolder_getInstance_13() {
    if (_FinalizerHolder_instance_13 == null)
      new _FinalizerHolder_13();
    return _FinalizerHolder_instance_13;
  }
  function TextStyle$_get_fontMetrics_$lambda_9osnwy(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics(this$0.s24_1, it);
      return Unit_getInstance();
    };
  }
  function TextStyle(ptr) {
    Companion_getInstance_41();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_13().y2j_1);
  }
  protoOf(TextStyle).t24 = function (other) {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = org_jetbrains_skia_paragraph_TextStyle__1nEquals(this.s24_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(TextStyle).b2c = function (value) {
    this.b2k(value);
  };
  protoOf(TextStyle).b2k = function (color) {
    Stats_getInstance().o24();
    org_jetbrains_skia_paragraph_TextStyle__1nSetColor(this.s24_1, color);
    return this;
  };
  protoOf(TextStyle).c2k = function (value) {
    this.d2k(value);
  };
  protoOf(TextStyle).d2k = function (paint) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_paragraph_TextStyle__1nSetForeground(this.s24_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).e2k = function (value) {
    this.f2k(value);
  };
  protoOf(TextStyle).f2k = function (paint) {
    var tmp;
    try {
      Stats_getInstance().o24();
      org_jetbrains_skia_paragraph_TextStyle__1nSetBackground(this.s24_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).g2k = function (value) {
    this.h2k(value);
  };
  protoOf(TextStyle).h2k = function (d) {
    Stats_getInstance().o24();
    org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle(this.s24_1, d.c2g_1, d.d2g_1, d.e2g_1, d.f2g_1, d.g2g_1, d.h2g_1.w4_1, d.i2g_1);
    return this;
  };
  protoOf(TextStyle).i2k = function (value) {
    this.j2k(value);
  };
  protoOf(TextStyle).a2f = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle(this.s24_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(TextStyle).j2k = function (s) {
    Stats_getInstance().o24();
    org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle(this.s24_1, s.b2a_1);
    return this;
  };
  protoOf(TextStyle).k2k = function (s) {
    Stats_getInstance().o24();
    org_jetbrains_skia_paragraph_TextStyle__1nAddShadow(this.s24_1, s.c2j_1, s.d2j_1, s.e2j_1, s.f2j_1);
    return this;
  };
  protoOf(TextStyle).l2k = function (f) {
    Stats_getInstance().o24();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature(this.s24_1, tmp0_anonymous.n2b(f.h29()), f.e29_1);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
        }
      }
    }
    return this;
  };
  protoOf(TextStyle).m2k = function (FontFeatures) {
    var inductionVariable = 0;
    var last = FontFeatures.length;
    while (inductionVariable < last) {
      var s = FontFeatures[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.l2k(s);
    }
    return this;
  };
  protoOf(TextStyle).j2j = function (value) {
    this.k2j(value);
  };
  protoOf(TextStyle).k2j = function (size) {
    Stats_getInstance().o24();
    org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize(this.s24_1, size);
    return this;
  };
  protoOf(TextStyle).n2k = function (value) {
    this.o2k(value);
  };
  protoOf(TextStyle).o2k = function (families) {
    Stats_getInstance().o24();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
        var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
        var tmp = this.s24_1;
        var tmp_0 = tmp0_anonymous.q2g(families);
        var tmp1_elvis_lhs = families == null ? null : families.length;
        org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies(tmp, tmp_0, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
        break $l$block;
      }finally {
        var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
        _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
        if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
          _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
        }
      }
    }
    return this;
  };
  protoOf(TextStyle).p2k = function (value) {
    this.q2k(value);
  };
  protoOf(TextStyle).q2k = function (letterSpacing) {
    Stats_getInstance().o24();
    org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing(this.s24_1, letterSpacing);
    return this;
  };
  protoOf(TextStyle).r2k = function (value) {
    this.s2k(value);
  };
  protoOf(TextStyle).s2k = function (baselineShift) {
    Stats_getInstance().o24();
    org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift(this.s24_1, baselineShift);
    return this;
  };
  protoOf(TextStyle).t2k = function () {
    var tmp;
    try {
      Stats_getInstance().o24();
      var tmp_0 = Companion_getInstance_11();
      tmp = fromInteropPointer(tmp_0, TextStyle$_get_fontMetrics_$lambda_9osnwy(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Companion_41() {
    Companion_instance_41 = this;
    Companion_getInstance_45().m24();
  }
  var Companion_instance_41;
  function Companion_getInstance_42() {
    if (Companion_instance_41 == null)
      new Companion_41();
    return Companion_instance_41;
  }
  function TypefaceFontProvider() {
    Companion_getInstance_42();
    FontMgr_init_$Init$(org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake(), this);
    Stats_getInstance().o24();
  }
  protoOf(TypefaceFontProvider).w2k = function (typeface, alias) {
    var tmp;
    try {
      Stats_getInstance().o24();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp0 + 1 | 0);
          var tmp0_anonymous = _get_INTEROP_SCOPE_$accessor$wmqves_peku9r();
          org_jetbrains_skia_paragraph_TypefaceFontProvider__1nRegisterTypeface(this.s24_1, getPtr(typeface), tmp0_anonymous.n2b(alias));
          break $l$block;
        }finally {
          var tmp1 = _get_interopScopeCounter_$accessor$wmqves_umgosu();
          _set_interopScopeCounter_$accessor$wmqves_ygusxq(tmp1 - 1 | 0);
          if (_get_interopScopeCounter_$accessor$wmqves_umgosu() === 0) {
            _get_INTEROP_SCOPE_$accessor$wmqves_peku9r().ak();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(typeface);
    }
    return tmp;
  };
  function SkikoKeyboardEvent(key, modifiers, kind, timestamp, platform) {
    modifiers = modifiers === VOID ? Companion_getInstance_43().x2k_1 : modifiers;
    timestamp = timestamp === VOID ? new Long(0, 0) : timestamp;
    this.c2l_1 = key;
    this.d2l_1 = modifiers;
    this.e2l_1 = kind;
    this.f2l_1 = timestamp;
    this.g2l_1 = platform;
  }
  protoOf(SkikoKeyboardEvent).toString = function () {
    return 'SkikoKeyboardEvent(key=' + this.c2l_1 + ', modifiers=' + new SkikoInputModifiers(this.d2l_1) + ', kind=' + this.e2l_1 + ', timestamp=' + toString(this.f2l_1) + ', platform=' + this.g2l_1 + ')';
  };
  protoOf(SkikoKeyboardEvent).hashCode = function () {
    var result = this.c2l_1.hashCode();
    result = imul(result, 31) + SkikoInputModifiers__hashCode_impl_dkoeid(this.d2l_1) | 0;
    result = imul(result, 31) + this.e2l_1.hashCode() | 0;
    result = imul(result, 31) + this.f2l_1.hashCode() | 0;
    result = imul(result, 31) + (this.g2l_1 == null ? 0 : hashCode(this.g2l_1)) | 0;
    return result;
  };
  protoOf(SkikoKeyboardEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoKeyboardEvent))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoKeyboardEvent ? other : THROW_CCE();
    if (!this.c2l_1.equals(tmp0_other_with_cast.c2l_1))
      return false;
    if (!(this.d2l_1 === tmp0_other_with_cast.d2l_1))
      return false;
    if (!this.e2l_1.equals(tmp0_other_with_cast.e2l_1))
      return false;
    if (!this.f2l_1.equals(tmp0_other_with_cast.f2l_1))
      return false;
    if (!equals(this.g2l_1, tmp0_other_with_cast.g2l_1))
      return false;
    return true;
  };
  function _SkikoInputModifiers___init__impl__z8g2zy(value) {
    return value;
  }
  function _SkikoInputModifiers___get_value__impl__13eq4a($this) {
    return $this;
  }
  function Companion_42() {
    Companion_instance_42 = this;
    this.x2k_1 = _SkikoInputModifiers___init__impl__z8g2zy(0);
    this.y2k_1 = _SkikoInputModifiers___init__impl__z8g2zy(1);
    this.z2k_1 = _SkikoInputModifiers___init__impl__z8g2zy(2);
    this.a2l_1 = _SkikoInputModifiers___init__impl__z8g2zy(4);
    this.b2l_1 = _SkikoInputModifiers___init__impl__z8g2zy(8);
  }
  var Companion_instance_42;
  function Companion_getInstance_43() {
    if (Companion_instance_42 == null)
      new Companion_42();
    return Companion_instance_42;
  }
  function SkikoInputModifiers__has_impl_qg30o6($this, value) {
    if (!((_SkikoInputModifiers___get_value__impl__13eq4a(value) & _SkikoInputModifiers___get_value__impl__13eq4a($this)) === 0)) {
      return true;
    }
    return false;
  }
  function SkikoInputModifiers__toString_impl_86hiai($this) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var tmp0_apply = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skiko.SkikoInputModifiers.toString.<anonymous>' call
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_43().y2k_1)) {
      tmp0_apply.a('META');
    }
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_43().z2k_1)) {
      tmp0_apply.a('CONTROL');
    }
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_43().a2l_1)) {
      tmp0_apply.a('ALT');
    }
    if (SkikoInputModifiers__has_impl_qg30o6($this, Companion_getInstance_43().b2l_1)) {
      tmp0_apply.a('SHIFT');
    }
    var result = tmp0_apply;
    return !result.k() ? toString(result) : '';
  }
  function SkikoInputModifiers__hashCode_impl_dkoeid($this) {
    return $this;
  }
  function SkikoInputModifiers__equals_impl_tcfkiv($this, other) {
    if (!(other instanceof SkikoInputModifiers))
      return false;
    if (!($this === (other instanceof SkikoInputModifiers ? other.h2l_1 : THROW_CCE())))
      return false;
    return true;
  }
  function SkikoInputModifiers(value) {
    Companion_getInstance_43();
    this.h2l_1 = value;
  }
  protoOf(SkikoInputModifiers).toString = function () {
    return SkikoInputModifiers__toString_impl_86hiai(this.h2l_1);
  };
  protoOf(SkikoInputModifiers).hashCode = function () {
    return SkikoInputModifiers__hashCode_impl_dkoeid(this.h2l_1);
  };
  protoOf(SkikoInputModifiers).equals = function (other) {
    return SkikoInputModifiers__equals_impl_tcfkiv(this.h2l_1, other);
  };
  var SkikoKeyboardEventKind_UNKNOWN_instance;
  var SkikoKeyboardEventKind_UP_instance;
  var SkikoKeyboardEventKind_DOWN_instance;
  var SkikoKeyboardEventKind_TYPE_instance;
  var SkikoKeyboardEventKind_entriesInitialized;
  function SkikoKeyboardEventKind_initEntries() {
    if (SkikoKeyboardEventKind_entriesInitialized)
      return Unit_getInstance();
    SkikoKeyboardEventKind_entriesInitialized = true;
    SkikoKeyboardEventKind_UNKNOWN_instance = new SkikoKeyboardEventKind('UNKNOWN', 0);
    SkikoKeyboardEventKind_UP_instance = new SkikoKeyboardEventKind('UP', 1);
    SkikoKeyboardEventKind_DOWN_instance = new SkikoKeyboardEventKind('DOWN', 2);
    SkikoKeyboardEventKind_TYPE_instance = new SkikoKeyboardEventKind('TYPE', 3);
  }
  function SkikoKeyboardEventKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SkikoInputEvent(input, key, modifiers, kind, platform) {
    modifiers = modifiers === VOID ? Companion_getInstance_43().x2k_1 : modifiers;
    this.i2l_1 = input;
    this.j2l_1 = key;
    this.k2l_1 = modifiers;
    this.l2l_1 = kind;
    this.m2l_1 = platform;
  }
  protoOf(SkikoInputEvent).toString = function () {
    return 'SkikoInputEvent(input=' + this.i2l_1 + ', key=' + this.j2l_1 + ', modifiers=' + new SkikoInputModifiers(this.k2l_1) + ', kind=' + this.l2l_1 + ', platform=' + this.m2l_1 + ')';
  };
  protoOf(SkikoInputEvent).hashCode = function () {
    var result = getStringHashCode(this.i2l_1);
    result = imul(result, 31) + this.j2l_1.hashCode() | 0;
    result = imul(result, 31) + SkikoInputModifiers__hashCode_impl_dkoeid(this.k2l_1) | 0;
    result = imul(result, 31) + this.l2l_1.hashCode() | 0;
    result = imul(result, 31) + (this.m2l_1 == null ? 0 : hashCode(this.m2l_1)) | 0;
    return result;
  };
  protoOf(SkikoInputEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoInputEvent))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoInputEvent ? other : THROW_CCE();
    if (!(this.i2l_1 === tmp0_other_with_cast.i2l_1))
      return false;
    if (!this.j2l_1.equals(tmp0_other_with_cast.j2l_1))
      return false;
    if (!(this.k2l_1 === tmp0_other_with_cast.k2l_1))
      return false;
    if (!this.l2l_1.equals(tmp0_other_with_cast.l2l_1))
      return false;
    if (!equals(this.m2l_1, tmp0_other_with_cast.m2l_1))
      return false;
    return true;
  };
  function SkikoPointerEvent(x, y, kind, deltaX, deltaY, pressedButtons, button, modifiers, timestamp, pointers, platform) {
    deltaX = deltaX === VOID ? 0.0 : deltaX;
    deltaY = deltaY === VOID ? 0.0 : deltaY;
    pressedButtons = pressedButtons === VOID ? Companion_getInstance_44().n2l_1 : pressedButtons;
    button = button === VOID ? Companion_getInstance_44().n2l_1 : button;
    modifiers = modifiers === VOID ? Companion_getInstance_43().x2k_1 : modifiers;
    timestamp = timestamp === VOID ? new Long(0, 0) : timestamp;
    pointers = pointers === VOID ? listOf(new SkikoPointer(new Long(0, 0), x, y, SkikoMouseButtons__has_impl_481exw(pressedButtons, Companion_getInstance_44().o2l_1))) : pointers;
    platform = platform === VOID ? null : platform;
    this.z2l_1 = x;
    this.a2m_1 = y;
    this.b2m_1 = kind;
    this.c2m_1 = deltaX;
    this.d2m_1 = deltaY;
    this.e2m_1 = pressedButtons;
    this.f2m_1 = button;
    this.g2m_1 = modifiers;
    this.h2m_1 = timestamp;
    this.i2m_1 = pointers;
    this.j2m_1 = platform;
  }
  protoOf(SkikoPointerEvent).toString = function () {
    return 'SkikoPointerEvent(x=' + this.z2l_1 + ', y=' + this.a2m_1 + ', kind=' + this.b2m_1 + ', deltaX=' + this.c2m_1 + ', deltaY=' + this.d2m_1 + ', pressedButtons=' + new SkikoMouseButtons(this.e2m_1) + ', button=' + new SkikoMouseButtons(this.f2m_1) + ', modifiers=' + new SkikoInputModifiers(this.g2m_1) + ', timestamp=' + toString(this.h2m_1) + ', pointers=' + this.i2m_1 + ', platform=' + this.j2m_1 + ')';
  };
  protoOf(SkikoPointerEvent).hashCode = function () {
    var result = getNumberHashCode(this.z2l_1);
    result = imul(result, 31) + getNumberHashCode(this.a2m_1) | 0;
    result = imul(result, 31) + this.b2m_1.hashCode() | 0;
    result = imul(result, 31) + getNumberHashCode(this.c2m_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.d2m_1) | 0;
    result = imul(result, 31) + SkikoMouseButtons__hashCode_impl_7jywqn(this.e2m_1) | 0;
    result = imul(result, 31) + SkikoMouseButtons__hashCode_impl_7jywqn(this.f2m_1) | 0;
    result = imul(result, 31) + SkikoInputModifiers__hashCode_impl_dkoeid(this.g2m_1) | 0;
    result = imul(result, 31) + this.h2m_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.i2m_1) | 0;
    result = imul(result, 31) + (this.j2m_1 == null ? 0 : hashCode(this.j2m_1)) | 0;
    return result;
  };
  protoOf(SkikoPointerEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoPointerEvent))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoPointerEvent ? other : THROW_CCE();
    if (!equals(this.z2l_1, tmp0_other_with_cast.z2l_1))
      return false;
    if (!equals(this.a2m_1, tmp0_other_with_cast.a2m_1))
      return false;
    if (!this.b2m_1.equals(tmp0_other_with_cast.b2m_1))
      return false;
    if (!equals(this.c2m_1, tmp0_other_with_cast.c2m_1))
      return false;
    if (!equals(this.d2m_1, tmp0_other_with_cast.d2m_1))
      return false;
    if (!(this.e2m_1 === tmp0_other_with_cast.e2m_1))
      return false;
    if (!(this.f2m_1 === tmp0_other_with_cast.f2m_1))
      return false;
    if (!(this.g2m_1 === tmp0_other_with_cast.g2m_1))
      return false;
    if (!this.h2m_1.equals(tmp0_other_with_cast.h2m_1))
      return false;
    if (!equals(this.i2m_1, tmp0_other_with_cast.i2m_1))
      return false;
    if (!equals(this.j2m_1, tmp0_other_with_cast.j2m_1))
      return false;
    return true;
  };
  var SkikoPointerEventKind_UNKNOWN_instance;
  var SkikoPointerEventKind_UP_instance;
  var SkikoPointerEventKind_DOWN_instance;
  var SkikoPointerEventKind_MOVE_instance;
  var SkikoPointerEventKind_DRAG_instance;
  var SkikoPointerEventKind_SCROLL_instance;
  var SkikoPointerEventKind_ENTER_instance;
  var SkikoPointerEventKind_EXIT_instance;
  var SkikoPointerEventKind_entriesInitialized;
  function SkikoPointerEventKind_initEntries() {
    if (SkikoPointerEventKind_entriesInitialized)
      return Unit_getInstance();
    SkikoPointerEventKind_entriesInitialized = true;
    SkikoPointerEventKind_UNKNOWN_instance = new SkikoPointerEventKind('UNKNOWN', 0);
    SkikoPointerEventKind_UP_instance = new SkikoPointerEventKind('UP', 1);
    SkikoPointerEventKind_DOWN_instance = new SkikoPointerEventKind('DOWN', 2);
    SkikoPointerEventKind_MOVE_instance = new SkikoPointerEventKind('MOVE', 3);
    SkikoPointerEventKind_DRAG_instance = new SkikoPointerEventKind('DRAG', 4);
    SkikoPointerEventKind_SCROLL_instance = new SkikoPointerEventKind('SCROLL', 5);
    SkikoPointerEventKind_ENTER_instance = new SkikoPointerEventKind('ENTER', 6);
    SkikoPointerEventKind_EXIT_instance = new SkikoPointerEventKind('EXIT', 7);
  }
  function SkikoPointerEventKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SkikoPointer(id, x, y, pressed, device, pressure) {
    device = device === VOID ? SkikoPointerDevice_MOUSE_getInstance() : device;
    pressure = pressure === VOID ? 1.0 : pressure;
    this.k2m_1 = id;
    this.l2m_1 = x;
    this.m2m_1 = y;
    this.n2m_1 = pressed;
    this.o2m_1 = device;
    this.p2m_1 = pressure;
  }
  protoOf(SkikoPointer).toString = function () {
    return 'SkikoPointer(id=' + toString(this.k2m_1) + ', x=' + this.l2m_1 + ', y=' + this.m2m_1 + ', pressed=' + this.n2m_1 + ', device=' + this.o2m_1 + ', pressure=' + this.p2m_1 + ')';
  };
  protoOf(SkikoPointer).hashCode = function () {
    var result = this.k2m_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.l2m_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m2m_1) | 0;
    result = imul(result, 31) + (this.n2m_1 | 0) | 0;
    result = imul(result, 31) + this.o2m_1.hashCode() | 0;
    result = imul(result, 31) + getNumberHashCode(this.p2m_1) | 0;
    return result;
  };
  protoOf(SkikoPointer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoPointer))
      return false;
    var tmp0_other_with_cast = other instanceof SkikoPointer ? other : THROW_CCE();
    if (!this.k2m_1.equals(tmp0_other_with_cast.k2m_1))
      return false;
    if (!equals(this.l2m_1, tmp0_other_with_cast.l2m_1))
      return false;
    if (!equals(this.m2m_1, tmp0_other_with_cast.m2m_1))
      return false;
    if (!(this.n2m_1 === tmp0_other_with_cast.n2m_1))
      return false;
    if (!this.o2m_1.equals(tmp0_other_with_cast.o2m_1))
      return false;
    if (!equals(this.p2m_1, tmp0_other_with_cast.p2m_1))
      return false;
    return true;
  };
  var SkikoPointerDevice_UNKNOWN_instance;
  var SkikoPointerDevice_MOUSE_instance;
  var SkikoPointerDevice_TOUCH_instance;
  var SkikoPointerDevice_entriesInitialized;
  function SkikoPointerDevice_initEntries() {
    if (SkikoPointerDevice_entriesInitialized)
      return Unit_getInstance();
    SkikoPointerDevice_entriesInitialized = true;
    SkikoPointerDevice_UNKNOWN_instance = new SkikoPointerDevice('UNKNOWN', 0);
    SkikoPointerDevice_MOUSE_instance = new SkikoPointerDevice('MOUSE', 1);
    SkikoPointerDevice_TOUCH_instance = new SkikoPointerDevice('TOUCH', 2);
  }
  function SkikoPointerDevice(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _SkikoMouseButtons___init__impl__kylsco(value) {
    return value;
  }
  function _SkikoMouseButtons___get_value__impl__ltkvwc($this) {
    return $this;
  }
  function Companion_43() {
    Companion_instance_43 = this;
    this.n2l_1 = _SkikoMouseButtons___init__impl__kylsco(0);
    this.o2l_1 = _SkikoMouseButtons___init__impl__kylsco(1);
    this.p2l_1 = _SkikoMouseButtons___init__impl__kylsco(2);
    this.q2l_1 = _SkikoMouseButtons___init__impl__kylsco(4);
    this.r2l_1 = _SkikoMouseButtons___init__impl__kylsco(1);
    this.s2l_1 = _SkikoMouseButtons___init__impl__kylsco(2);
    this.t2l_1 = _SkikoMouseButtons___init__impl__kylsco(4);
    this.u2l_1 = _SkikoMouseButtons___init__impl__kylsco(8);
    this.v2l_1 = _SkikoMouseButtons___init__impl__kylsco(16);
    this.w2l_1 = _SkikoMouseButtons___init__impl__kylsco(32);
    this.x2l_1 = _SkikoMouseButtons___init__impl__kylsco(64);
    this.y2l_1 = _SkikoMouseButtons___init__impl__kylsco(128);
  }
  var Companion_instance_43;
  function Companion_getInstance_44() {
    if (Companion_instance_43 == null)
      new Companion_43();
    return Companion_instance_43;
  }
  function SkikoMouseButtons__has_impl_481exw($this, value) {
    if (!((_SkikoMouseButtons___get_value__impl__ltkvwc(value) & _SkikoMouseButtons___get_value__impl__ltkvwc($this)) === 0)) {
      return true;
    }
    return false;
  }
  function SkikoMouseButtons__toString_impl_e77028($this) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.mutableListOf' call
    var tmp0_apply = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skiko.SkikoMouseButtons.toString.<anonymous>' call
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_44().o2l_1)) {
      tmp0_apply.a('LEFT');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_44().p2l_1)) {
      tmp0_apply.a('RIGHT');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_44().q2l_1)) {
      tmp0_apply.a('MIDDLE');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_44().u2l_1)) {
      tmp0_apply.a('BUTTON_4');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_44().v2l_1)) {
      tmp0_apply.a('BUTTON_5');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_44().w2l_1)) {
      tmp0_apply.a('BUTTON_6');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_44().x2l_1)) {
      tmp0_apply.a('BUTTON_7');
    }
    if (SkikoMouseButtons__has_impl_481exw($this, Companion_getInstance_44().y2l_1)) {
      tmp0_apply.a('BUTTON_8');
    }
    var result = tmp0_apply;
    return !result.k() ? toString(result) : '';
  }
  function SkikoMouseButtons__hashCode_impl_7jywqn($this) {
    return $this;
  }
  function SkikoMouseButtons__equals_impl_jnid9f($this, other) {
    if (!(other instanceof SkikoMouseButtons))
      return false;
    if (!($this === (other instanceof SkikoMouseButtons ? other.q2m_1 : THROW_CCE())))
      return false;
    return true;
  }
  function SkikoMouseButtons(value) {
    Companion_getInstance_44();
    this.q2m_1 = value;
  }
  protoOf(SkikoMouseButtons).toString = function () {
    return SkikoMouseButtons__toString_impl_e77028(this.q2m_1);
  };
  protoOf(SkikoMouseButtons).hashCode = function () {
    return SkikoMouseButtons__hashCode_impl_7jywqn(this.q2m_1);
  };
  protoOf(SkikoMouseButtons).equals = function (other) {
    return SkikoMouseButtons__equals_impl_jnid9f(this.q2m_1, other);
  };
  function SkikoKeyboardEventKind_UP_getInstance() {
    SkikoKeyboardEventKind_initEntries();
    return SkikoKeyboardEventKind_UP_instance;
  }
  function SkikoKeyboardEventKind_DOWN_getInstance() {
    SkikoKeyboardEventKind_initEntries();
    return SkikoKeyboardEventKind_DOWN_instance;
  }
  function SkikoKeyboardEventKind_TYPE_getInstance() {
    SkikoKeyboardEventKind_initEntries();
    return SkikoKeyboardEventKind_TYPE_instance;
  }
  function SkikoPointerEventKind_UP_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_UP_instance;
  }
  function SkikoPointerEventKind_DOWN_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_DOWN_instance;
  }
  function SkikoPointerEventKind_MOVE_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_MOVE_instance;
  }
  function SkikoPointerEventKind_DRAG_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_DRAG_instance;
  }
  function SkikoPointerEventKind_SCROLL_getInstance() {
    SkikoPointerEventKind_initEntries();
    return SkikoPointerEventKind_SCROLL_instance;
  }
  function SkikoPointerDevice_MOUSE_getInstance() {
    SkikoPointerDevice_initEntries();
    return SkikoPointerDevice_MOUSE_instance;
  }
  var GraphicsApi_UNKNOWN_instance;
  var GraphicsApi_SOFTWARE_FAST_instance;
  var GraphicsApi_SOFTWARE_COMPAT_instance;
  var GraphicsApi_OPENGL_instance;
  var GraphicsApi_DIRECT3D_instance;
  var GraphicsApi_VULKAN_instance;
  var GraphicsApi_METAL_instance;
  var GraphicsApi_WEBGL_instance;
  var GraphicsApi_entriesInitialized;
  function GraphicsApi_initEntries() {
    if (GraphicsApi_entriesInitialized)
      return Unit_getInstance();
    GraphicsApi_entriesInitialized = true;
    GraphicsApi_UNKNOWN_instance = new GraphicsApi('UNKNOWN', 0);
    GraphicsApi_SOFTWARE_FAST_instance = new GraphicsApi('SOFTWARE_FAST', 1);
    GraphicsApi_SOFTWARE_COMPAT_instance = new GraphicsApi('SOFTWARE_COMPAT', 2);
    GraphicsApi_OPENGL_instance = new GraphicsApi('OPENGL', 3);
    GraphicsApi_DIRECT3D_instance = new GraphicsApi('DIRECT3D', 4);
    GraphicsApi_VULKAN_instance = new GraphicsApi('VULKAN', 5);
    GraphicsApi_METAL_instance = new GraphicsApi('METAL', 6);
    GraphicsApi_WEBGL_instance = new GraphicsApi('WEBGL', 7);
  }
  function GraphicsApi(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function GraphicsApi_WEBGL_getInstance() {
    GraphicsApi_initEntries();
    return GraphicsApi_WEBGL_instance;
  }
  var OS_Android_instance;
  var OS_Linux_instance;
  var OS_Windows_instance;
  var OS_MacOS_instance;
  var OS_Ios_instance;
  var OS_JS_instance;
  var OS_Unknown_instance;
  var OS_entriesInitialized;
  function OS_initEntries() {
    if (OS_entriesInitialized)
      return Unit_getInstance();
    OS_entriesInitialized = true;
    OS_Android_instance = new OS('Android', 0, 'android');
    OS_Linux_instance = new OS('Linux', 1, 'linux');
    OS_Windows_instance = new OS('Windows', 2, 'windows');
    OS_MacOS_instance = new OS('MacOS', 3, 'macos');
    OS_Ios_instance = new OS('Ios', 4, 'ios');
    OS_JS_instance = new OS('JS', 5, 'js');
    OS_Unknown_instance = new OS('Unknown', 6, 'unknown');
  }
  function OS(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.t2m_1 = id;
  }
  var Arch_X64_instance;
  var Arch_Arm64_instance;
  var Arch_JS_instance;
  var Arch_WASM_instance;
  var Arch_Unknown_instance;
  var Arch_entriesInitialized;
  function Arch_initEntries() {
    if (Arch_entriesInitialized)
      return Unit_getInstance();
    Arch_entriesInitialized = true;
    Arch_X64_instance = new Arch('X64', 0, 'x64');
    Arch_Arm64_instance = new Arch('Arm64', 1, 'arm64');
    Arch_JS_instance = new Arch('JS', 2, 'js');
    Arch_WASM_instance = new Arch('WASM', 3, 'wasm');
    Arch_Unknown_instance = new Arch('Unknown', 4, 'unknown');
  }
  function Arch(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.w2m_1 = id;
  }
  function OS_Android_getInstance() {
    OS_initEntries();
    return OS_Android_instance;
  }
  function OS_Linux_getInstance() {
    OS_initEntries();
    return OS_Linux_instance;
  }
  function OS_Windows_getInstance() {
    OS_initEntries();
    return OS_Windows_instance;
  }
  function OS_MacOS_getInstance() {
    OS_initEntries();
    return OS_MacOS_instance;
  }
  function OS_Ios_getInstance() {
    OS_initEntries();
    return OS_Ios_instance;
  }
  function OS_Unknown_getInstance() {
    OS_initEntries();
    return OS_Unknown_instance;
  }
  function Arch_Unknown_getInstance() {
    Arch_initEntries();
    return Arch_Unknown_instance;
  }
  function ClipboardManager() {
  }
  function URIManager() {
  }
  function RenderException(message, cause) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, RenderException);
  }
  function SkikoView() {
  }
  var SystemTheme_DARK_instance;
  var SystemTheme_LIGHT_instance;
  var SystemTheme_UNKNOWN_instance;
  var SystemTheme_entriesInitialized;
  function SystemTheme_initEntries() {
    if (SystemTheme_entriesInitialized)
      return Unit_getInstance();
    SystemTheme_entriesInitialized = true;
    SystemTheme_DARK_instance = new SystemTheme('DARK', 0);
    SystemTheme_LIGHT_instance = new SystemTheme('LIGHT', 1);
    SystemTheme_UNKNOWN_instance = new SystemTheme('UNKNOWN', 2);
  }
  function SystemTheme(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SystemTheme_UNKNOWN_getInstance() {
    SystemTheme_initEntries();
    return SystemTheme_UNKNOWN_instance;
  }
  var LANG$delegate;
  function Pattern(regex) {
    this.b2n_1 = Regex_init_$Create$(regex);
  }
  function compilePattern(regex) {
    _init_properties_Actuals_js_kt__v403ki();
    return new Pattern(regex);
  }
  function commonSynchronized(lock, block) {
    _init_properties_Actuals_js_kt__v403ki();
    block();
  }
  function LANG$delegate$lambda() {
    _init_properties_Actuals_js_kt__v403ki();
    var lang = window.navigator.language;
    var tmp;
    var tmp_0;
    if (lang == null) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      tmp_0 = charSequenceLength(lang) === 0;
    }
    if (tmp_0) {
      tmp = 'en-US';
    } else {
      tmp = lang;
    }
    return tmp;
  }
  var properties_initialized_Actuals_js_kt_fw1oy4;
  function _init_properties_Actuals_js_kt__v403ki() {
    if (!properties_initialized_Actuals_js_kt_fw1oy4) {
      properties_initialized_Actuals_js_kt_fw1oy4 = true;
      LANG$delegate = lazy(LANG$delegate$lambda);
    }
  }
  function Companion_44() {
    Companion_instance_44 = this;
  }
  protoOf(Companion_44).m24 = function () {
  };
  var Companion_instance_44;
  function Companion_getInstance_45() {
    if (Companion_instance_44 == null)
      new Companion_44();
    return Companion_instance_44;
  }
  function get_registry() {
    _init_properties_Managed_js_kt__4ok5rc();
    return registry;
  }
  var registry;
  function FinalizationThunk(finalizer, obj) {
    this.c2n_1 = finalizer;
    this.d2n_1 = obj;
  }
  protoOf(FinalizationThunk).e2n = function () {
    if (!(this.d2n_1 === 0)) {
      org_jetbrains_skia_impl_Managed__invokeFinalizer(this.c2n_1, this.d2n_1);
    }
    this.d2n_1 = 0;
  };
  function Managed(ptr, finalizer, managed) {
    managed = managed === VOID ? true : managed;
    Native.call(this, ptr);
    this.r24_1 = null;
    if (managed) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(ptr === 0)) {
        // Inline function 'org.jetbrains.skia.impl.Managed.<anonymous>' call
        var message = 'Managed ptr is 0';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(finalizer === 0)) {
        // Inline function 'org.jetbrains.skia.impl.Managed.<anonymous>' call
        var message_0 = 'Managed finalizer is 0';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var thunk = new FinalizationThunk(finalizer, ptr);
      register(this, thunk);
      this.r24_1 = thunk;
    }
  }
  protoOf(Managed).y13 = function () {
    if (Companion_getInstance_47().e2b() === this.s24_1)
      throw RuntimeException_init_$Create$('Object already closed: ' + getKClassFromExpression(this).va() + ', _ptr=' + this.s24_1);
    else if (null == this.r24_1)
      throw RuntimeException_init_$Create$("Object is not managed, can't close(): " + getKClassFromExpression(this).va() + ', _ptr=' + this.s24_1);
    else {
      unregister(this);
      ensureNotNull(this.r24_1).e2n();
      this.r24_1 = null;
      this.s24_1 = 0;
    }
  };
  function unregister(managed) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().unregister(managed);
  }
  function register(managed, thunk) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().register(managed, thunk);
  }
  function registry$lambda(it) {
    _init_properties_Managed_js_kt__4ok5rc();
    var thunk = it instanceof FinalizationThunk ? it : THROW_CCE();
    thunk.e2n();
    return Unit_getInstance();
  }
  var properties_initialized_Managed_js_kt_llxy4m;
  function _init_properties_Managed_js_kt__4ok5rc() {
    if (!properties_initialized_Managed_js_kt_llxy4m) {
      properties_initialized_Managed_js_kt_llxy4m = true;
      registry = new FinalizationRegistry(registry$lambda);
    }
  }
  function get_INTEROP_SCOPE() {
    _init_properties_Native_js_kt__80argu();
    return INTEROP_SCOPE;
  }
  var INTEROP_SCOPE;
  function set_interopScopeCounter(_set____db54di) {
    _init_properties_Native_js_kt__80argu();
    interopScopeCounter = _set____db54di;
  }
  function get_interopScopeCounter() {
    _init_properties_Native_js_kt__80argu();
    return interopScopeCounter;
  }
  var interopScopeCounter;
  function toInterop($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(array.length);
      $this.g26_1.a(data);
      if (copyArrayToWasm) {
        toWasm(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_0($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 4));
      $this.g26_1.a(data);
      if (copyArrayToWasm) {
        toWasm_0(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_1($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 4));
      $this.g26_1.a(data);
      if (copyArrayToWasm) {
        toWasm_1(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_2($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 8));
      $this.g26_1.a(data);
      if (copyArrayToWasm) {
        toWasm_2(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_3($this, array, copyArrayToWasm) {
    var tmp;
    if (!(array == null) ? array.f() > 0 : false) {
      var data = _malloc(imul(array.f(), 4));
      $this.g26_1.a(data);
      if (copyArrayToWasm) {
        toWasm_0(data, array.l2b_1);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function InteropScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.g26_1 = ArrayList_init_$Create$_0();
    this.h26_1 = false;
  }
  protoOf(InteropScope).n2b = function (string) {
    var tmp;
    if (!(string == null)) {
      var data = _malloc(imul(string.length, 4));
      stringToUTF8(string, data, imul(string.length, 4));
      this.g26_1.a(data);
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).b28 = function (array) {
    return toInterop(this, array, true);
  };
  protoOf(InteropScope).p2b = function (array) {
    return toInterop(this, array, false);
  };
  protoOf(InteropScope).m2b = function (_this__u8e3s4, result) {
    fromWasm(_this__u8e3s4, result);
  };
  protoOf(InteropScope).p2e = function (array) {
    return toInterop_0(this, array, true);
  };
  protoOf(InteropScope).i2b = function (array) {
    return toInterop_0(this, array, false);
  };
  protoOf(InteropScope).z29 = function (_this__u8e3s4, result) {
    fromWasm_0(_this__u8e3s4, result);
  };
  protoOf(InteropScope).i26 = function (array) {
    return toInterop_1(this, array, true);
  };
  protoOf(InteropScope).y29 = function (array) {
    return toInterop_1(this, array, false);
  };
  protoOf(InteropScope).u2g = function (array) {
    return toInterop_2(this, array, true);
  };
  protoOf(InteropScope).q2b = function (_this__u8e3s4, result) {
    fromWasm_1(_this__u8e3s4, result);
  };
  protoOf(InteropScope).j2b = function (array) {
    return toInterop_3(this, array, false);
  };
  protoOf(InteropScope).k2b = function (_this__u8e3s4, result) {
    return fromWasm(_this__u8e3s4, result.l2b_1);
  };
  protoOf(InteropScope).q2g = function (stringArray) {
    var tmp;
    var tmp_0;
    if (!(stringArray == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(stringArray.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(stringArray.length);
      var tmp0_iterator = arrayIterator(stringArray);
      while (tmp0_iterator.d()) {
        var item = tmp0_iterator.e();
        var tmp$ret$2;
        // Inline function 'org.jetbrains.skia.impl.InteropScope.toInterop.<anonymous>' call
        tmp$ret$2 = this.n2b(item);
        tmp0_mapTo.a(tmp$ret$2);
      }
      var ptrs = toIntArray(tmp0_mapTo);
      tmp = this.p2e(ptrs);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).ak = function () {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.g26_1.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'org.jetbrains.skia.impl.InteropScope.release.<anonymous>' call
      _free(element);
    }
    this.g26_1.f7();
    // Inline function 'org.jetbrains.skia.impl.InteropScope.releaseCallbacks' call
    if (this.h26_1) {
      _releaseLocalCallbackScope$accessor$wmqves();
      this.h26_1 = false;
    }
  };
  function toWasm(dest, src) {
    _init_properties_Native_js_kt__80argu();
    return HEAPU8.set(src, dest);
  }
  function fromWasm(src, result) {
    _init_properties_Native_js_kt__80argu();
    var startIndex = src / 4 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPU32.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_0(dest, src) {
    _init_properties_Native_js_kt__80argu();
    return HEAPU32.set(src, dest / 4 | 0);
  }
  function fromWasm_0(src, result) {
    _init_properties_Native_js_kt__80argu();
    var startIndex = src / 4 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPF32.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_1(dest, src) {
    _init_properties_Native_js_kt__80argu();
    return HEAPF32.set(src, dest / 4 | 0);
  }
  function toWasm_2(dest, src) {
    _init_properties_Native_js_kt__80argu();
    return HEAPF64.set(src, dest / 8 | 0);
  }
  function fromWasm_1(src, result) {
    _init_properties_Native_js_kt__80argu();
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPU8.subarray(src, src + result.length | 0));
  }
  function Companion_45() {
    Companion_instance_45 = this;
  }
  var Companion_instance_45;
  function Companion_getInstance_46() {
    if (Companion_instance_45 == null)
      new Companion_45();
    return Companion_instance_45;
  }
  function NativePointerArray(size) {
    Companion_getInstance_46();
    this.l2b_1 = new Int32Array(size);
  }
  protoOf(NativePointerArray).l = function (index) {
    return this.l2b_1[index];
  };
  protoOf(NativePointerArray).f = function () {
    return this.l2b_1.length;
  };
  function Companion_46() {
    Companion_instance_46 = this;
  }
  protoOf(Companion_46).e2b = function () {
    return 0;
  };
  var Companion_instance_46;
  function Companion_getInstance_47() {
    if (Companion_instance_46 == null)
      new Companion_46();
    return Companion_instance_46;
  }
  function Native(ptr) {
    Companion_getInstance_47();
    if (ptr === Companion_getInstance_47().e2b())
      throw RuntimeException_init_$Create$("Can't wrap nullptr");
    this.s24_1 = ptr;
  }
  protoOf(Native).equals = function (other) {
    if (this === other)
      return true;
    if (null == other)
      return false;
    if (!(other instanceof Native))
      return false;
    return this.s24_1 === other.s24_1 ? true : this.t24(other);
  };
  protoOf(Native).hashCode = function () {
    return this.s24_1;
  };
  protoOf(Native).t24 = function (other) {
    return false;
  };
  protoOf(Native).toString = function () {
    return plus(getKClassFromExpression(this).va(), '(_ptr=0x') + toString_0(this.s24_1, 16) + ')';
  };
  function reachabilityBarrier(obj) {
    _init_properties_Native_js_kt__80argu();
  }
  function _createLocalCallbackScope$accessor$wmqves() {
    _init_properties_Native_js_kt__80argu();
    return _createLocalCallbackScope();
  }
  function _releaseLocalCallbackScope$accessor$wmqves() {
    _init_properties_Native_js_kt__80argu();
    return _releaseLocalCallbackScope();
  }
  function _set_interopScopeCounter_$accessor$wmqves_ygusxq(_set____db54di) {
    _init_properties_Native_js_kt__80argu();
    return set_interopScopeCounter(_set____db54di);
  }
  function _get_interopScopeCounter_$accessor$wmqves_umgosu() {
    _init_properties_Native_js_kt__80argu();
    return get_interopScopeCounter();
  }
  function _get_INTEROP_SCOPE_$accessor$wmqves_peku9r() {
    _init_properties_Native_js_kt__80argu();
    return get_INTEROP_SCOPE();
  }
  var properties_initialized_Native_js_kt_fdhhkg;
  function _init_properties_Native_js_kt__80argu() {
    if (!properties_initialized_Native_js_kt_fdhhkg) {
      properties_initialized_Native_js_kt_fdhhkg = true;
      INTEROP_SCOPE = new InteropScope();
      interopScopeCounter = 0;
    }
  }
  function RefCnt_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_14().f2n_1, true);
    RefCnt.call($this);
    return $this;
  }
  function RefCnt_init_$Init$_0(ptr, allowClose, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_14().f2n_1, allowClose);
    RefCnt.call($this);
    return $this;
  }
  protoOf(RefCnt).n27 = function () {
    Stats_getInstance().o24();
    return org_jetbrains_skia_impl_RefCnt__getRefCount(this.s24_1);
  };
  protoOf(RefCnt).toString = function () {
    var s = protoOf(Managed).toString.call(this);
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = s.length - 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    return s.substring(0, tmp0_substring) + ', refCount=' + this.n27() + ')';
  };
  function RefCnt() {
  }
  function _FinalizerHolder_14() {
    _FinalizerHolder_instance_14 = this;
    this.f2n_1 = org_jetbrains_skia_impl_RefCnt__getFinalizer();
  }
  var _FinalizerHolder_instance_14;
  function _FinalizerHolder_getInstance_14() {
    if (_FinalizerHolder_instance_14 == null)
      new _FinalizerHolder_14();
    return _FinalizerHolder_instance_14;
  }
  function Stats() {
    Stats_instance = this;
  }
  protoOf(Stats).o24 = function () {
  };
  var Stats_instance;
  function Stats_getInstance() {
    if (Stats_instance == null)
      new Stats();
    return Stats_instance;
  }
  function currentNanoTime() {
    return numberToLong(window.performance.now() * 1000000);
  }
  function disposeCanvas($this) {
    var tmp0_safe_receiver = $this.j2n_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y13();
    }
    $this.j2n_1 = null;
    var tmp1_safe_receiver = $this.k2n_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.y13();
    }
    $this.k2n_1 = null;
  }
  function CanvasRenderer$needRedraw$lambda(this$0) {
    return function (timestamp) {
      this$0.m2n_1 = false;
      GL.makeContextCurrent(this$0.h2n_1);
      var tmp0_safe_receiver = this$0.l2n_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        Color_getInstance();
        tmp0_safe_receiver.e1s(-1);
      }
      var tmp1_safe_receiver = this$0.l2n_1;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver.p26();
      this$0.n2n(timestamp);
      var tmp2_safe_receiver = this$0.j2n_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.v2e();
      }
      this$0.i2n_1.k28();
      return Unit_getInstance();
    };
  }
  function CanvasRenderer(htmlCanvas) {
    this.g2n_1 = htmlCanvas;
    this.h2n_1 = createWebGLContext(this.g2n_1);
    this.j2n_1 = null;
    this.k2n_1 = null;
    this.l2n_1 = null;
    GL.makeContextCurrent(this.h2n_1);
    this.i2n_1 = Companion_getInstance_8().h28();
    this.m2n_1 = false;
  }
  protoOf(CanvasRenderer).t21 = function () {
    return this.g2n_1.width;
  };
  protoOf(CanvasRenderer).u21 = function () {
    return this.g2n_1.height;
  };
  protoOf(CanvasRenderer).o2n = function (desiredWidth, desiredHeight, scale, pixelGeometry) {
    disposeCanvas(this);
    this.g2n_1.width = numberToInt(desiredWidth * scale);
    this.g2n_1.height = numberToInt(desiredHeight * scale);
    this.k2n_1 = Companion_getInstance_0().n24(this.t21(), this.u21(), 1, 8, 0, 32856);
    var tmp = this;
    var tmp0_elvis_lhs = Companion_getInstance_30().n2e(this.i2n_1, ensureNotNull(this.k2n_1), SurfaceOrigin_BOTTOM_LEFT_getInstance(), SurfaceColorFormat_RGBA_8888_getInstance(), Companion_getInstance_5().t27_1, new SurfaceProps(VOID, pixelGeometry));
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw new RenderException('Cannot create surface');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.j2n_1 = tmp_0;
    this.l2n_1 = ensureNotNull(this.j2n_1).u2e();
  };
  protoOf(CanvasRenderer).p2n = function () {
    if (this.m2n_1) {
      return Unit_getInstance();
    }
    this.m2n_1 = true;
    var tmp = window;
    tmp.requestAnimationFrame(CanvasRenderer$needRedraw$lambda(this));
  };
  function get_SPECIAL_KEYS() {
    _init_properties_Convertors_js_kt__upzh8o();
    return SPECIAL_KEYS;
  }
  var SPECIAL_KEYS;
  function set_buttonsFlags(_set____db54di) {
    _init_properties_Convertors_js_kt__upzh8o();
    buttonsFlags = _set____db54di;
  }
  function get_buttonsFlags() {
    _init_properties_Convertors_js_kt__upzh8o();
    return buttonsFlags;
  }
  var buttonsFlags;
  function toSkikoEvent(event, kind) {
    _init_properties_Convertors_js_kt__upzh8o();
    var tmp0_x = event.offsetX;
    var tmp1_y = event.offsetY;
    var tmp2_pressedButtons = toSkikoPressedMouseButtons(event, kind);
    var tmp3_button = toSkikoMouseButton(event);
    var tmp4_modifiers = toSkikoModifiers(event);
    var tmp5_timestamp = numberToLong(event.timeStamp);
    return new SkikoPointerEvent(tmp0_x, tmp1_y, kind, VOID, VOID, tmp2_pressedButtons, tmp3_button, tmp4_modifiers, tmp5_timestamp, VOID, event);
  }
  function toSkikoDragEvent(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var tmp0_x = event.offsetX;
    var tmp1_y = event.offsetY;
    var tmp2_pressedButtons = _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags());
    var tmp3_button = toSkikoMouseButton(event);
    var tmp4_modifiers = toSkikoModifiers(event);
    var tmp5_kind = SkikoPointerEventKind_DRAG_getInstance();
    var tmp6_timestamp = numberToLong(event.timeStamp);
    return new SkikoPointerEvent(tmp0_x, tmp1_y, tmp5_kind, VOID, VOID, tmp2_pressedButtons, tmp3_button, tmp4_modifiers, tmp6_timestamp, VOID, event);
  }
  function toSkikoScrollEvent(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var tmp0_x = event.offsetX;
    var tmp1_y = event.offsetY;
    var tmp2_deltaX = event.deltaX;
    var tmp3_deltaY = event.deltaY;
    var tmp4_pressedButtons = _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags());
    var tmp5_button = Companion_getInstance_44().n2l_1;
    var tmp6_modifiers = toSkikoModifiers(event);
    var tmp7_kind = SkikoPointerEventKind_SCROLL_getInstance();
    var tmp8_timestamp = numberToLong(event.timeStamp);
    return new SkikoPointerEvent(tmp0_x, tmp1_y, tmp7_kind, tmp2_deltaX, tmp3_deltaY, tmp4_pressedButtons, tmp5_button, tmp6_modifiers, tmp8_timestamp, VOID, event);
  }
  function toSkikoEvent_0(event, kind) {
    _init_properties_Convertors_js_kt__upzh8o();
    return new SkikoKeyboardEvent(Companion_getInstance_48().q2n(toSkikoKey(event)), toSkikoModifiers_0(event), kind, numberToLong(event.timeStamp), event);
  }
  function toSkikoTypeEvent(character, event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var tmp;
    if (get_SPECIAL_KEYS().m(character)) {
      tmp = null;
    } else {
      var input;
      switch (character) {
        case 'Enter':
          input = '\n';
          break;
        case 'Tab':
          input = '\t';
          break;
        default:
          input = character;
          break;
      }
      var key = !(event == null) ? Companion_getInstance_48().q2n(event.keyCode) : SkikoKey_KEY_UNKNOWN_getInstance();
      var modifiers = !(event == null) ? toSkikoModifiers_0(event) : Companion_getInstance_43().x2k_1;
      tmp = new SkikoInputEvent(input, key, modifiers, SkikoKeyboardEventKind_TYPE_getInstance(), event);
    }
    return tmp;
  }
  function toSkikoPressedMouseButtons(event, kind) {
    _init_properties_Convertors_js_kt__upzh8o();
    var button = event.button;
    if (kind.equals(SkikoPointerEventKind_DOWN_getInstance())) {
      set_buttonsFlags(get_buttonsFlags() | getSkikoButtonValue(button));
      return _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags());
    }
    set_buttonsFlags(get_buttonsFlags() ^ getSkikoButtonValue(button));
    return _SkikoMouseButtons___init__impl__kylsco(get_buttonsFlags());
  }
  function toSkikoMouseButton(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    return _SkikoMouseButtons___init__impl__kylsco(getSkikoButtonValue(event.button));
  }
  function toSkikoModifiers(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var result = 0;
    if (event.altKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_43().a2l_1);
    }
    if (event.shiftKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_43().b2l_1);
    }
    if (event.ctrlKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_43().z2k_1);
    }
    if (event.metaKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_43().y2k_1);
    }
    return _SkikoInputModifiers___init__impl__z8g2zy(result);
  }
  function toSkikoKey(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var key = event.keyCode;
    var side = event.location;
    if (side === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
      if ((key === SkikoKey_KEY_LEFT_CONTROL_getInstance().t2n_1 ? true : key === SkikoKey_KEY_LEFT_SHIFT_getInstance().t2n_1) ? true : key === SkikoKey_KEY_LEFT_META_getInstance().t2n_1)
        key = key | -2147483648;
    }
    return key;
  }
  function toSkikoModifiers_0(event) {
    _init_properties_Convertors_js_kt__upzh8o();
    var result = 0;
    if (event.altKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_43().a2l_1);
    }
    if (event.shiftKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_43().b2l_1);
    }
    if (event.ctrlKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_43().z2k_1);
    }
    if (event.metaKey) {
      result = result | _SkikoInputModifiers___get_value__impl__13eq4a(Companion_getInstance_43().y2k_1);
    }
    return _SkikoInputModifiers___init__impl__z8g2zy(result);
  }
  function getSkikoButtonValue(button) {
    _init_properties_Convertors_js_kt__upzh8o();
    switch (button) {
      case 0:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_44().o2l_1);
      case 1:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_44().q2l_1);
      case 2:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_44().p2l_1);
      case 3:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_44().u2l_1);
      case 4:
        return _SkikoMouseButtons___get_value__impl__ltkvwc(Companion_getInstance_44().v2l_1);
      default:
        return 0;
    }
  }
  var properties_initialized_Convertors_js_kt_vbq0oa;
  function _init_properties_Convertors_js_kt__upzh8o() {
    if (!properties_initialized_Convertors_js_kt_vbq0oa) {
      properties_initialized_Convertors_js_kt_vbq0oa = true;
      SPECIAL_KEYS = setOf(['Unidentified', 'Alt', 'AltGraph', 'Backspace', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Hyper', 'Meta', 'NumLock', 'ScrollLock', 'Shift', 'Super', 'Symbol', 'SymbolLock', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'Help', 'Home', 'Delete', 'End', 'PageUp', 'PageDown', 'Escape', 'Clear', 'Clear']);
      buttonsFlags = 0;
    }
  }
  function get_hostOs() {
    _init_properties_OsArch_js_kt__jkqwph();
    return hostOs;
  }
  var hostOs;
  function get_hostArch() {
    _init_properties_OsArch_js_kt__jkqwph();
    return hostArch;
  }
  var hostArch;
  var hostId$delegate;
  function detectHostOs() {
    _init_properties_OsArch_js_kt__jkqwph();
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = getNavigatorInfo();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'org.jetbrains.skiko.detectHostOs.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(tmp0_takeIf) > 0) {
      tmp = tmp0_takeIf;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var platformInfo = tmp0_elvis_lhs == null ? window.navigator.userAgent : tmp0_elvis_lhs;
    return contains(platformInfo, 'Android', true) ? OS_Android_getInstance() : contains(platformInfo, 'iPhone', true) ? OS_Ios_getInstance() : contains(platformInfo, 'iOS', true) ? OS_Ios_getInstance() : contains(platformInfo, 'iPad', true) ? OS_Ios_getInstance() : contains(platformInfo, 'Linux', true) ? OS_Linux_getInstance() : contains(platformInfo, 'Mac', true) ? OS_MacOS_getInstance() : contains(platformInfo, 'Win', true) ? OS_Windows_getInstance() : OS_Unknown_getInstance();
  }
  function getNavigatorInfo() {
    _init_properties_OsArch_js_kt__jkqwph();
    var tmp = navigator.userAgentData ? navigator.userAgentData.platform : navigator.platform;
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  }
  function hostId$delegate$lambda() {
    _init_properties_OsArch_js_kt__jkqwph();
    return get_hostOs().t2m_1 + '-' + get_hostArch().w2m_1;
  }
  var properties_initialized_OsArch_js_kt_ik094d;
  function _init_properties_OsArch_js_kt__jkqwph() {
    if (!properties_initialized_OsArch_js_kt_ik094d) {
      properties_initialized_OsArch_js_kt_ik094d = true;
      hostOs = detectHostOs();
      hostArch = Arch_Unknown_getInstance();
      hostId$delegate = lazy(hostId$delegate$lambda);
    }
  }
  var onContentScaleChanged;
  function setOnChangeScaleNotifier($this) {
    var tmp0_safe_receiver = $this.u2n_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.o2n($this.y2n_1, $this.z2n_1, $this.b2o(), $this.c2o());
    }
    var tmp = window.matchMedia('(resolution: ' + $this.b2o() + 'dppx)');
    tmp.addEventListener('change', SkiaLayer$setOnChangeScaleNotifier$lambda($this), true);
    var tmp1_safe_receiver = onContentScaleChanged;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver($this.b2o());
  }
  function SkiaLayer$attachTo$1($htmlCanvas, this$0) {
    this.k2o_1 = this$0;
    CanvasRenderer.call(this, $htmlCanvas);
  }
  protoOf(SkiaLayer$attachTo$1).n2n = function (currentTimestamp) {
    var currentNanos = currentTimestamp * 1000000;
    var tmp0_safe_receiver = this.k2o_1.w2n_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a2n(ensureNotNull(this.l2n_1), this.t21(), this.u21(), numberToLong(currentNanos));
    }
  };
  function SkiaLayer$attachTo$lambda(this$0) {
    return function (event) {
      if (event instanceof MouseEvent)
        event;
      else
        THROW_CCE();
      this$0.x2n_1 = true;
      var tmp0_safe_receiver = this$0.w2n_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.y2m(toSkikoEvent(event, SkikoPointerEventKind_DOWN_getInstance()));
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_0(this$0) {
    return function (event) {
      if (event instanceof MouseEvent)
        event;
      else
        THROW_CCE();
      this$0.x2n_1 = false;
      var tmp0_safe_receiver = this$0.w2n_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.y2m(toSkikoEvent(event, SkikoPointerEventKind_UP_getInstance()));
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_1(this$0) {
    return function (event) {
      if (event instanceof MouseEvent)
        event;
      else
        THROW_CCE();
      var tmp;
      if (this$0.x2n_1) {
        var tmp0_safe_receiver = this$0.w2n_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.y2m(toSkikoDragEvent(event));
        }
        tmp = Unit_getInstance();
      } else {
        var tmp1_safe_receiver = this$0.w2n_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.y2m(toSkikoEvent(event, SkikoPointerEventKind_MOVE_getInstance()));
        }
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_2(this$0) {
    return function (event) {
      if (event instanceof WheelEvent)
        event;
      else
        THROW_CCE();
      var tmp0_safe_receiver = this$0.w2n_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.y2m(toSkikoScrollEvent(event));
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_3(event) {
    event.preventDefault();
    return Unit_getInstance();
  }
  function SkiaLayer$attachTo$lambda_4(this$0) {
    return function (event) {
      if (event instanceof KeyboardEvent)
        event;
      else
        THROW_CCE();
      var tmp0_safe_receiver = this$0.w2n_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.x2m(toSkikoEvent_0(event, SkikoKeyboardEventKind_DOWN_getInstance()));
      }
      var tmp1_safe_receiver = toSkikoTypeEvent(event.key, event);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp0_safe_receiver_0 = this$0.w2n_1;
        var tmp1_safe_receiver_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.z2m();
        if (tmp1_safe_receiver_0 == null)
          null;
        else {
          tmp1_safe_receiver_0.l2o(tmp1_safe_receiver);
        }
        tmp$ret$0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$attachTo$lambda_5(this$0) {
    return function (event) {
      if (event instanceof KeyboardEvent)
        event;
      else
        THROW_CCE();
      var tmp0_safe_receiver = this$0.w2n_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.x2m(toSkikoEvent_0(event, SkikoKeyboardEventKind_UP_getInstance()));
      }
      return Unit_getInstance();
    };
  }
  function SkiaLayer$setOnChangeScaleNotifier$lambda(this$0) {
    return function (it) {
      setOnChangeScaleNotifier(this$0);
      return Unit_getInstance();
    };
  }
  function SkiaLayer() {
    this.u2n_1 = null;
    this.v2n_1 = GraphicsApi_WEBGL_getInstance();
    this.w2n_1 = null;
    this.x2n_1 = false;
    this.y2n_1 = 0;
    this.z2n_1 = 0;
    this.a2o_1 = null;
  }
  protoOf(SkiaLayer).b2o = function () {
    return window.devicePixelRatio;
  };
  protoOf(SkiaLayer).p2n = function () {
    var tmp0_safe_receiver = this.u2n_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p2n();
    }
  };
  protoOf(SkiaLayer).m2o = function (htmlCanvas, autoDetach) {
    this.a2o_1 = htmlCanvas;
    this.y2n_1 = htmlCanvas.width;
    this.z2n_1 = htmlCanvas.height;
    htmlCanvas.style.width = '' + this.y2n_1 + 'px';
    htmlCanvas.style.height = '' + this.z2n_1 + 'px';
    setOnChangeScaleNotifier(this);
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new SkiaLayer$attachTo$1(htmlCanvas, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.skiko.SkiaLayer.attachTo.<anonymous>' call
    tmp0_apply.o2n(this.y2n_1, this.z2n_1, this.b2o(), this.c2o());
    tmp.u2n_1 = tmp0_apply;
    htmlCanvas.addEventListener('mousedown', SkiaLayer$attachTo$lambda(this));
    htmlCanvas.addEventListener('mouseup', SkiaLayer$attachTo$lambda_0(this));
    htmlCanvas.addEventListener('mousemove', SkiaLayer$attachTo$lambda_1(this));
    htmlCanvas.addEventListener('wheel', SkiaLayer$attachTo$lambda_2(this));
    htmlCanvas.addEventListener('contextmenu', SkiaLayer$attachTo$lambda_3);
    htmlCanvas.addEventListener('keydown', SkiaLayer$attachTo$lambda_4(this));
    htmlCanvas.addEventListener('keyup', SkiaLayer$attachTo$lambda_5(this));
  };
  protoOf(SkiaLayer).n2o = function (htmlCanvas, autoDetach, $super) {
    autoDetach = autoDetach === VOID ? true : autoDetach;
    var tmp;
    if ($super === VOID) {
      this.m2o(htmlCanvas, autoDetach);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.m2o.call(this, htmlCanvas, autoDetach);
    }
    return tmp;
  };
  protoOf(SkiaLayer).c2o = function () {
    return PixelGeometry_UNKNOWN_getInstance();
  };
  function Empty() {
    Empty_instance = this;
  }
  protoOf(Empty).l2o = function (event) {
    return Unit_getInstance();
  };
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  var SkikoKey_KEY_UNKNOWN_instance;
  var SkikoKey_KEY_A_instance;
  var SkikoKey_KEY_S_instance;
  var SkikoKey_KEY_D_instance;
  var SkikoKey_KEY_F_instance;
  var SkikoKey_KEY_H_instance;
  var SkikoKey_KEY_G_instance;
  var SkikoKey_KEY_Z_instance;
  var SkikoKey_KEY_X_instance;
  var SkikoKey_KEY_C_instance;
  var SkikoKey_KEY_V_instance;
  var SkikoKey_KEY_B_instance;
  var SkikoKey_KEY_Q_instance;
  var SkikoKey_KEY_W_instance;
  var SkikoKey_KEY_E_instance;
  var SkikoKey_KEY_R_instance;
  var SkikoKey_KEY_Y_instance;
  var SkikoKey_KEY_T_instance;
  var SkikoKey_KEY_U_instance;
  var SkikoKey_KEY_I_instance;
  var SkikoKey_KEY_P_instance;
  var SkikoKey_KEY_L_instance;
  var SkikoKey_KEY_J_instance;
  var SkikoKey_KEY_K_instance;
  var SkikoKey_KEY_N_instance;
  var SkikoKey_KEY_M_instance;
  var SkikoKey_KEY_O_instance;
  var SkikoKey_KEY_1_instance;
  var SkikoKey_KEY_2_instance;
  var SkikoKey_KEY_3_instance;
  var SkikoKey_KEY_4_instance;
  var SkikoKey_KEY_5_instance;
  var SkikoKey_KEY_6_instance;
  var SkikoKey_KEY_7_instance;
  var SkikoKey_KEY_8_instance;
  var SkikoKey_KEY_9_instance;
  var SkikoKey_KEY_0_instance;
  var SkikoKey_KEY_CLOSE_BRACKET_instance;
  var SkikoKey_KEY_OPEN_BRACKET_instance;
  var SkikoKey_KEY_QUOTE_instance;
  var SkikoKey_KEY_SEMICOLON_instance;
  var SkikoKey_KEY_SLASH_instance;
  var SkikoKey_KEY_COMMA_instance;
  var SkikoKey_KEY_BACKSLASH_instance;
  var SkikoKey_KEY_PERIOD_instance;
  var SkikoKey_KEY_BACK_QUOTE_instance;
  var SkikoKey_KEY_EQUALS_instance;
  var SkikoKey_KEY_MINUS_instance;
  var SkikoKey_KEY_ENTER_instance;
  var SkikoKey_KEY_ESCAPE_instance;
  var SkikoKey_KEY_TAB_instance;
  var SkikoKey_KEY_BACKSPACE_instance;
  var SkikoKey_KEY_SPACE_instance;
  var SkikoKey_KEY_CAPSLOCK_instance;
  var SkikoKey_KEY_LEFT_META_instance;
  var SkikoKey_KEY_LEFT_SHIFT_instance;
  var SkikoKey_KEY_LEFT_ALT_instance;
  var SkikoKey_KEY_LEFT_CONTROL_instance;
  var SkikoKey_KEY_RIGHT_META_instance;
  var SkikoKey_KEY_RIGHT_SHIFT_instance;
  var SkikoKey_KEY_RIGHT_ALT_instance;
  var SkikoKey_KEY_RIGHT_CONTROL_instance;
  var SkikoKey_KEY_MENU_instance;
  var SkikoKey_KEY_UP_instance;
  var SkikoKey_KEY_DOWN_instance;
  var SkikoKey_KEY_LEFT_instance;
  var SkikoKey_KEY_RIGHT_instance;
  var SkikoKey_KEY_F1_instance;
  var SkikoKey_KEY_F2_instance;
  var SkikoKey_KEY_F3_instance;
  var SkikoKey_KEY_F4_instance;
  var SkikoKey_KEY_F5_instance;
  var SkikoKey_KEY_F6_instance;
  var SkikoKey_KEY_F7_instance;
  var SkikoKey_KEY_F8_instance;
  var SkikoKey_KEY_F9_instance;
  var SkikoKey_KEY_F10_instance;
  var SkikoKey_KEY_F11_instance;
  var SkikoKey_KEY_F12_instance;
  var SkikoKey_KEY_PRINTSCEEN_instance;
  var SkikoKey_KEY_SCROLL_LOCK_instance;
  var SkikoKey_KEY_PAUSE_instance;
  var SkikoKey_KEY_INSERT_instance;
  var SkikoKey_KEY_HOME_instance;
  var SkikoKey_KEY_PGUP_instance;
  var SkikoKey_KEY_DELETE_instance;
  var SkikoKey_KEY_END_instance;
  var SkikoKey_KEY_PGDOWN_instance;
  var SkikoKey_KEY_NUM_LOCK_instance;
  var SkikoKey_KEY_NUMPAD_0_instance;
  var SkikoKey_KEY_NUMPAD_1_instance;
  var SkikoKey_KEY_NUMPAD_2_instance;
  var SkikoKey_KEY_NUMPAD_3_instance;
  var SkikoKey_KEY_NUMPAD_4_instance;
  var SkikoKey_KEY_NUMPAD_5_instance;
  var SkikoKey_KEY_NUMPAD_6_instance;
  var SkikoKey_KEY_NUMPAD_7_instance;
  var SkikoKey_KEY_NUMPAD_8_instance;
  var SkikoKey_KEY_NUMPAD_9_instance;
  var SkikoKey_KEY_NUMPAD_ENTER_instance;
  var SkikoKey_KEY_NUMPAD_ADD_instance;
  var SkikoKey_KEY_NUMPAD_SUBTRACT_instance;
  var SkikoKey_KEY_NUMPAD_MULTIPLY_instance;
  var SkikoKey_KEY_NUMPAD_DIVIDE_instance;
  var SkikoKey_KEY_NUMPAD_DECIMAL_instance;
  function Companion_47() {
    Companion_instance_47 = this;
  }
  protoOf(Companion_47).q2n = function (platformKeyCode) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var indexedObject = values_6();
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.skiko.Companion.valueOf.<anonymous>' call
        if (element.t2n_1 === platformKeyCode) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    return tmp0_elvis_lhs == null ? SkikoKey_KEY_UNKNOWN_getInstance() : tmp0_elvis_lhs;
  };
  var Companion_instance_47;
  function Companion_getInstance_48() {
    SkikoKey_initEntries();
    if (Companion_instance_47 == null)
      new Companion_47();
    return Companion_instance_47;
  }
  function values_6() {
    return [SkikoKey_KEY_UNKNOWN_getInstance(), SkikoKey_KEY_A_getInstance(), SkikoKey_KEY_S_getInstance(), SkikoKey_KEY_D_getInstance(), SkikoKey_KEY_F_getInstance(), SkikoKey_KEY_H_getInstance(), SkikoKey_KEY_G_getInstance(), SkikoKey_KEY_Z_getInstance(), SkikoKey_KEY_X_getInstance(), SkikoKey_KEY_C_getInstance(), SkikoKey_KEY_V_getInstance(), SkikoKey_KEY_B_getInstance(), SkikoKey_KEY_Q_getInstance(), SkikoKey_KEY_W_getInstance(), SkikoKey_KEY_E_getInstance(), SkikoKey_KEY_R_getInstance(), SkikoKey_KEY_Y_getInstance(), SkikoKey_KEY_T_getInstance(), SkikoKey_KEY_U_getInstance(), SkikoKey_KEY_I_getInstance(), SkikoKey_KEY_P_getInstance(), SkikoKey_KEY_L_getInstance(), SkikoKey_KEY_J_getInstance(), SkikoKey_KEY_K_getInstance(), SkikoKey_KEY_N_getInstance(), SkikoKey_KEY_M_getInstance(), SkikoKey_KEY_O_getInstance(), SkikoKey_KEY_1_getInstance(), SkikoKey_KEY_2_getInstance(), SkikoKey_KEY_3_getInstance(), SkikoKey_KEY_4_getInstance(), SkikoKey_KEY_5_getInstance(), SkikoKey_KEY_6_getInstance(), SkikoKey_KEY_7_getInstance(), SkikoKey_KEY_8_getInstance(), SkikoKey_KEY_9_getInstance(), SkikoKey_KEY_0_getInstance(), SkikoKey_KEY_CLOSE_BRACKET_getInstance(), SkikoKey_KEY_OPEN_BRACKET_getInstance(), SkikoKey_KEY_QUOTE_getInstance(), SkikoKey_KEY_SEMICOLON_getInstance(), SkikoKey_KEY_SLASH_getInstance(), SkikoKey_KEY_COMMA_getInstance(), SkikoKey_KEY_BACKSLASH_getInstance(), SkikoKey_KEY_PERIOD_getInstance(), SkikoKey_KEY_BACK_QUOTE_getInstance(), SkikoKey_KEY_EQUALS_getInstance(), SkikoKey_KEY_MINUS_getInstance(), SkikoKey_KEY_ENTER_getInstance(), SkikoKey_KEY_ESCAPE_getInstance(), SkikoKey_KEY_TAB_getInstance(), SkikoKey_KEY_BACKSPACE_getInstance(), SkikoKey_KEY_SPACE_getInstance(), SkikoKey_KEY_CAPSLOCK_getInstance(), SkikoKey_KEY_LEFT_META_getInstance(), SkikoKey_KEY_LEFT_SHIFT_getInstance(), SkikoKey_KEY_LEFT_ALT_getInstance(), SkikoKey_KEY_LEFT_CONTROL_getInstance(), SkikoKey_KEY_RIGHT_META_getInstance(), SkikoKey_KEY_RIGHT_SHIFT_getInstance(), SkikoKey_KEY_RIGHT_ALT_getInstance(), SkikoKey_KEY_RIGHT_CONTROL_getInstance(), SkikoKey_KEY_MENU_getInstance(), SkikoKey_KEY_UP_getInstance(), SkikoKey_KEY_DOWN_getInstance(), SkikoKey_KEY_LEFT_getInstance(), SkikoKey_KEY_RIGHT_getInstance(), SkikoKey_KEY_F1_getInstance(), SkikoKey_KEY_F2_getInstance(), SkikoKey_KEY_F3_getInstance(), SkikoKey_KEY_F4_getInstance(), SkikoKey_KEY_F5_getInstance(), SkikoKey_KEY_F6_getInstance(), SkikoKey_KEY_F7_getInstance(), SkikoKey_KEY_F8_getInstance(), SkikoKey_KEY_F9_getInstance(), SkikoKey_KEY_F10_getInstance(), SkikoKey_KEY_F11_getInstance(), SkikoKey_KEY_F12_getInstance(), SkikoKey_KEY_PRINTSCEEN_getInstance(), SkikoKey_KEY_SCROLL_LOCK_getInstance(), SkikoKey_KEY_PAUSE_getInstance(), SkikoKey_KEY_INSERT_getInstance(), SkikoKey_KEY_HOME_getInstance(), SkikoKey_KEY_PGUP_getInstance(), SkikoKey_KEY_DELETE_getInstance(), SkikoKey_KEY_END_getInstance(), SkikoKey_KEY_PGDOWN_getInstance(), SkikoKey_KEY_NUM_LOCK_getInstance(), SkikoKey_KEY_NUMPAD_0_getInstance(), SkikoKey_KEY_NUMPAD_1_getInstance(), SkikoKey_KEY_NUMPAD_2_getInstance(), SkikoKey_KEY_NUMPAD_3_getInstance(), SkikoKey_KEY_NUMPAD_4_getInstance(), SkikoKey_KEY_NUMPAD_5_getInstance(), SkikoKey_KEY_NUMPAD_6_getInstance(), SkikoKey_KEY_NUMPAD_7_getInstance(), SkikoKey_KEY_NUMPAD_8_getInstance(), SkikoKey_KEY_NUMPAD_9_getInstance(), SkikoKey_KEY_NUMPAD_ENTER_getInstance(), SkikoKey_KEY_NUMPAD_ADD_getInstance(), SkikoKey_KEY_NUMPAD_SUBTRACT_getInstance(), SkikoKey_KEY_NUMPAD_MULTIPLY_getInstance(), SkikoKey_KEY_NUMPAD_DIVIDE_getInstance(), SkikoKey_KEY_NUMPAD_DECIMAL_getInstance()];
  }
  var SkikoKey_entriesInitialized;
  function SkikoKey_initEntries() {
    if (SkikoKey_entriesInitialized)
      return Unit_getInstance();
    SkikoKey_entriesInitialized = true;
    SkikoKey_KEY_UNKNOWN_instance = new SkikoKey('KEY_UNKNOWN', 0, -1);
    SkikoKey_KEY_A_instance = new SkikoKey('KEY_A', 1, 65);
    SkikoKey_KEY_S_instance = new SkikoKey('KEY_S', 2, 83);
    SkikoKey_KEY_D_instance = new SkikoKey('KEY_D', 3, 68);
    SkikoKey_KEY_F_instance = new SkikoKey('KEY_F', 4, 70);
    SkikoKey_KEY_H_instance = new SkikoKey('KEY_H', 5, 72);
    SkikoKey_KEY_G_instance = new SkikoKey('KEY_G', 6, 71);
    SkikoKey_KEY_Z_instance = new SkikoKey('KEY_Z', 7, 90);
    SkikoKey_KEY_X_instance = new SkikoKey('KEY_X', 8, 88);
    SkikoKey_KEY_C_instance = new SkikoKey('KEY_C', 9, 67);
    SkikoKey_KEY_V_instance = new SkikoKey('KEY_V', 10, 86);
    SkikoKey_KEY_B_instance = new SkikoKey('KEY_B', 11, 66);
    SkikoKey_KEY_Q_instance = new SkikoKey('KEY_Q', 12, 81);
    SkikoKey_KEY_W_instance = new SkikoKey('KEY_W', 13, 87);
    SkikoKey_KEY_E_instance = new SkikoKey('KEY_E', 14, 69);
    SkikoKey_KEY_R_instance = new SkikoKey('KEY_R', 15, 82);
    SkikoKey_KEY_Y_instance = new SkikoKey('KEY_Y', 16, 89);
    SkikoKey_KEY_T_instance = new SkikoKey('KEY_T', 17, 54);
    SkikoKey_KEY_U_instance = new SkikoKey('KEY_U', 18, 85);
    SkikoKey_KEY_I_instance = new SkikoKey('KEY_I', 19, 73);
    SkikoKey_KEY_P_instance = new SkikoKey('KEY_P', 20, 80);
    SkikoKey_KEY_L_instance = new SkikoKey('KEY_L', 21, 76);
    SkikoKey_KEY_J_instance = new SkikoKey('KEY_J', 22, 74);
    SkikoKey_KEY_K_instance = new SkikoKey('KEY_K', 23, 75);
    SkikoKey_KEY_N_instance = new SkikoKey('KEY_N', 24, 78);
    SkikoKey_KEY_M_instance = new SkikoKey('KEY_M', 25, 77);
    SkikoKey_KEY_O_instance = new SkikoKey('KEY_O', 26, 79);
    SkikoKey_KEY_1_instance = new SkikoKey('KEY_1', 27, 49);
    SkikoKey_KEY_2_instance = new SkikoKey('KEY_2', 28, 50);
    SkikoKey_KEY_3_instance = new SkikoKey('KEY_3', 29, 51);
    SkikoKey_KEY_4_instance = new SkikoKey('KEY_4', 30, 52);
    SkikoKey_KEY_5_instance = new SkikoKey('KEY_5', 31, 53);
    SkikoKey_KEY_6_instance = new SkikoKey('KEY_6', 32, 54);
    SkikoKey_KEY_7_instance = new SkikoKey('KEY_7', 33, 55);
    SkikoKey_KEY_8_instance = new SkikoKey('KEY_8', 34, 56);
    SkikoKey_KEY_9_instance = new SkikoKey('KEY_9', 35, 57);
    SkikoKey_KEY_0_instance = new SkikoKey('KEY_0', 36, 48);
    SkikoKey_KEY_CLOSE_BRACKET_instance = new SkikoKey('KEY_CLOSE_BRACKET', 37, 221);
    SkikoKey_KEY_OPEN_BRACKET_instance = new SkikoKey('KEY_OPEN_BRACKET', 38, 219);
    SkikoKey_KEY_QUOTE_instance = new SkikoKey('KEY_QUOTE', 39, 222);
    SkikoKey_KEY_SEMICOLON_instance = new SkikoKey('KEY_SEMICOLON', 40, 59);
    SkikoKey_KEY_SLASH_instance = new SkikoKey('KEY_SLASH', 41, 191);
    SkikoKey_KEY_COMMA_instance = new SkikoKey('KEY_COMMA', 42, 188);
    SkikoKey_KEY_BACKSLASH_instance = new SkikoKey('KEY_BACKSLASH', 43, 220);
    SkikoKey_KEY_PERIOD_instance = new SkikoKey('KEY_PERIOD', 44, 190);
    SkikoKey_KEY_BACK_QUOTE_instance = new SkikoKey('KEY_BACK_QUOTE', 45, 192);
    SkikoKey_KEY_EQUALS_instance = new SkikoKey('KEY_EQUALS', 46, 61);
    SkikoKey_KEY_MINUS_instance = new SkikoKey('KEY_MINUS', 47, 173);
    SkikoKey_KEY_ENTER_instance = new SkikoKey('KEY_ENTER', 48, 13);
    SkikoKey_KEY_ESCAPE_instance = new SkikoKey('KEY_ESCAPE', 49, 27);
    SkikoKey_KEY_TAB_instance = new SkikoKey('KEY_TAB', 50, 9);
    SkikoKey_KEY_BACKSPACE_instance = new SkikoKey('KEY_BACKSPACE', 51, 8);
    SkikoKey_KEY_SPACE_instance = new SkikoKey('KEY_SPACE', 52, 32);
    SkikoKey_KEY_CAPSLOCK_instance = new SkikoKey('KEY_CAPSLOCK', 53, 20);
    SkikoKey_KEY_LEFT_META_instance = new SkikoKey('KEY_LEFT_META', 54, 224);
    SkikoKey_KEY_LEFT_SHIFT_instance = new SkikoKey('KEY_LEFT_SHIFT', 55, 16);
    SkikoKey_KEY_LEFT_ALT_instance = new SkikoKey('KEY_LEFT_ALT', 56, 18);
    SkikoKey_KEY_LEFT_CONTROL_instance = new SkikoKey('KEY_LEFT_CONTROL', 57, 17);
    SkikoKey_KEY_RIGHT_META_instance = new SkikoKey('KEY_RIGHT_META', 58, -2147483424);
    SkikoKey_KEY_RIGHT_SHIFT_instance = new SkikoKey('KEY_RIGHT_SHIFT', 59, -2147483632);
    SkikoKey_KEY_RIGHT_ALT_instance = new SkikoKey('KEY_RIGHT_ALT', 60, 225);
    SkikoKey_KEY_RIGHT_CONTROL_instance = new SkikoKey('KEY_RIGHT_CONTROL', 61, -2147483631);
    SkikoKey_KEY_MENU_instance = new SkikoKey('KEY_MENU', 62, 93);
    SkikoKey_KEY_UP_instance = new SkikoKey('KEY_UP', 63, 38);
    SkikoKey_KEY_DOWN_instance = new SkikoKey('KEY_DOWN', 64, 40);
    SkikoKey_KEY_LEFT_instance = new SkikoKey('KEY_LEFT', 65, 37);
    SkikoKey_KEY_RIGHT_instance = new SkikoKey('KEY_RIGHT', 66, 39);
    SkikoKey_KEY_F1_instance = new SkikoKey('KEY_F1', 67, 112);
    SkikoKey_KEY_F2_instance = new SkikoKey('KEY_F2', 68, 113);
    SkikoKey_KEY_F3_instance = new SkikoKey('KEY_F3', 69, 114);
    SkikoKey_KEY_F4_instance = new SkikoKey('KEY_F4', 70, 115);
    SkikoKey_KEY_F5_instance = new SkikoKey('KEY_F5', 71, 116);
    SkikoKey_KEY_F6_instance = new SkikoKey('KEY_F6', 72, 117);
    SkikoKey_KEY_F7_instance = new SkikoKey('KEY_F7', 73, 118);
    SkikoKey_KEY_F8_instance = new SkikoKey('KEY_F8', 74, 119);
    SkikoKey_KEY_F9_instance = new SkikoKey('KEY_F9', 75, 120);
    SkikoKey_KEY_F10_instance = new SkikoKey('KEY_F10', 76, 121);
    SkikoKey_KEY_F11_instance = new SkikoKey('KEY_F11', 77, 122);
    SkikoKey_KEY_F12_instance = new SkikoKey('KEY_F12', 78, 123);
    SkikoKey_KEY_PRINTSCEEN_instance = new SkikoKey('KEY_PRINTSCEEN', 79, 44);
    SkikoKey_KEY_SCROLL_LOCK_instance = new SkikoKey('KEY_SCROLL_LOCK', 80, 145);
    SkikoKey_KEY_PAUSE_instance = new SkikoKey('KEY_PAUSE', 81, 19);
    SkikoKey_KEY_INSERT_instance = new SkikoKey('KEY_INSERT', 82, 45);
    SkikoKey_KEY_HOME_instance = new SkikoKey('KEY_HOME', 83, 36);
    SkikoKey_KEY_PGUP_instance = new SkikoKey('KEY_PGUP', 84, 33);
    SkikoKey_KEY_DELETE_instance = new SkikoKey('KEY_DELETE', 85, 46);
    SkikoKey_KEY_END_instance = new SkikoKey('KEY_END', 86, 35);
    SkikoKey_KEY_PGDOWN_instance = new SkikoKey('KEY_PGDOWN', 87, 34);
    SkikoKey_KEY_NUM_LOCK_instance = new SkikoKey('KEY_NUM_LOCK', 88, 144);
    SkikoKey_KEY_NUMPAD_0_instance = new SkikoKey('KEY_NUMPAD_0', 89, 96);
    SkikoKey_KEY_NUMPAD_1_instance = new SkikoKey('KEY_NUMPAD_1', 90, 97);
    SkikoKey_KEY_NUMPAD_2_instance = new SkikoKey('KEY_NUMPAD_2', 91, 98);
    SkikoKey_KEY_NUMPAD_3_instance = new SkikoKey('KEY_NUMPAD_3', 92, 99);
    SkikoKey_KEY_NUMPAD_4_instance = new SkikoKey('KEY_NUMPAD_4', 93, 100);
    SkikoKey_KEY_NUMPAD_5_instance = new SkikoKey('KEY_NUMPAD_5', 94, 101);
    SkikoKey_KEY_NUMPAD_6_instance = new SkikoKey('KEY_NUMPAD_6', 95, 102);
    SkikoKey_KEY_NUMPAD_7_instance = new SkikoKey('KEY_NUMPAD_7', 96, 103);
    SkikoKey_KEY_NUMPAD_8_instance = new SkikoKey('KEY_NUMPAD_8', 97, 104);
    SkikoKey_KEY_NUMPAD_9_instance = new SkikoKey('KEY_NUMPAD_9', 98, 105);
    SkikoKey_KEY_NUMPAD_ENTER_instance = new SkikoKey('KEY_NUMPAD_ENTER', 99, 14);
    SkikoKey_KEY_NUMPAD_ADD_instance = new SkikoKey('KEY_NUMPAD_ADD', 100, 107);
    SkikoKey_KEY_NUMPAD_SUBTRACT_instance = new SkikoKey('KEY_NUMPAD_SUBTRACT', 101, 109);
    SkikoKey_KEY_NUMPAD_MULTIPLY_instance = new SkikoKey('KEY_NUMPAD_MULTIPLY', 102, 106);
    SkikoKey_KEY_NUMPAD_DIVIDE_instance = new SkikoKey('KEY_NUMPAD_DIVIDE', 103, 111);
    SkikoKey_KEY_NUMPAD_DECIMAL_instance = new SkikoKey('KEY_NUMPAD_DECIMAL', 104, 110);
    Companion_getInstance_48();
  }
  function SkikoKey(name, ordinal, platformKeyCode) {
    Enum.call(this, name, ordinal);
    this.t2n_1 = platformKeyCode;
  }
  function SkikoKey_KEY_UNKNOWN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_UNKNOWN_instance;
  }
  function SkikoKey_KEY_A_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_A_instance;
  }
  function SkikoKey_KEY_S_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_S_instance;
  }
  function SkikoKey_KEY_D_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_D_instance;
  }
  function SkikoKey_KEY_F_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F_instance;
  }
  function SkikoKey_KEY_H_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_H_instance;
  }
  function SkikoKey_KEY_G_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_G_instance;
  }
  function SkikoKey_KEY_Z_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_Z_instance;
  }
  function SkikoKey_KEY_X_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_X_instance;
  }
  function SkikoKey_KEY_C_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_C_instance;
  }
  function SkikoKey_KEY_V_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_V_instance;
  }
  function SkikoKey_KEY_B_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_B_instance;
  }
  function SkikoKey_KEY_Q_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_Q_instance;
  }
  function SkikoKey_KEY_W_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_W_instance;
  }
  function SkikoKey_KEY_E_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_E_instance;
  }
  function SkikoKey_KEY_R_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_R_instance;
  }
  function SkikoKey_KEY_Y_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_Y_instance;
  }
  function SkikoKey_KEY_T_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_T_instance;
  }
  function SkikoKey_KEY_U_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_U_instance;
  }
  function SkikoKey_KEY_I_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_I_instance;
  }
  function SkikoKey_KEY_P_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_P_instance;
  }
  function SkikoKey_KEY_L_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_L_instance;
  }
  function SkikoKey_KEY_J_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_J_instance;
  }
  function SkikoKey_KEY_K_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_K_instance;
  }
  function SkikoKey_KEY_N_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_N_instance;
  }
  function SkikoKey_KEY_M_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_M_instance;
  }
  function SkikoKey_KEY_O_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_O_instance;
  }
  function SkikoKey_KEY_1_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_1_instance;
  }
  function SkikoKey_KEY_2_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_2_instance;
  }
  function SkikoKey_KEY_3_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_3_instance;
  }
  function SkikoKey_KEY_4_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_4_instance;
  }
  function SkikoKey_KEY_5_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_5_instance;
  }
  function SkikoKey_KEY_6_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_6_instance;
  }
  function SkikoKey_KEY_7_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_7_instance;
  }
  function SkikoKey_KEY_8_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_8_instance;
  }
  function SkikoKey_KEY_9_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_9_instance;
  }
  function SkikoKey_KEY_0_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_0_instance;
  }
  function SkikoKey_KEY_CLOSE_BRACKET_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_CLOSE_BRACKET_instance;
  }
  function SkikoKey_KEY_OPEN_BRACKET_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_OPEN_BRACKET_instance;
  }
  function SkikoKey_KEY_QUOTE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_QUOTE_instance;
  }
  function SkikoKey_KEY_SEMICOLON_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SEMICOLON_instance;
  }
  function SkikoKey_KEY_SLASH_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SLASH_instance;
  }
  function SkikoKey_KEY_COMMA_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_COMMA_instance;
  }
  function SkikoKey_KEY_BACKSLASH_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_BACKSLASH_instance;
  }
  function SkikoKey_KEY_PERIOD_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PERIOD_instance;
  }
  function SkikoKey_KEY_BACK_QUOTE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_BACK_QUOTE_instance;
  }
  function SkikoKey_KEY_EQUALS_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_EQUALS_instance;
  }
  function SkikoKey_KEY_MINUS_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_MINUS_instance;
  }
  function SkikoKey_KEY_ENTER_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_ENTER_instance;
  }
  function SkikoKey_KEY_ESCAPE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_ESCAPE_instance;
  }
  function SkikoKey_KEY_TAB_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_TAB_instance;
  }
  function SkikoKey_KEY_BACKSPACE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_BACKSPACE_instance;
  }
  function SkikoKey_KEY_SPACE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SPACE_instance;
  }
  function SkikoKey_KEY_CAPSLOCK_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_CAPSLOCK_instance;
  }
  function SkikoKey_KEY_LEFT_META_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_META_instance;
  }
  function SkikoKey_KEY_LEFT_SHIFT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_SHIFT_instance;
  }
  function SkikoKey_KEY_LEFT_ALT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_ALT_instance;
  }
  function SkikoKey_KEY_LEFT_CONTROL_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_CONTROL_instance;
  }
  function SkikoKey_KEY_RIGHT_META_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_META_instance;
  }
  function SkikoKey_KEY_RIGHT_SHIFT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_SHIFT_instance;
  }
  function SkikoKey_KEY_RIGHT_ALT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_ALT_instance;
  }
  function SkikoKey_KEY_RIGHT_CONTROL_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_CONTROL_instance;
  }
  function SkikoKey_KEY_MENU_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_MENU_instance;
  }
  function SkikoKey_KEY_UP_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_UP_instance;
  }
  function SkikoKey_KEY_DOWN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_DOWN_instance;
  }
  function SkikoKey_KEY_LEFT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_LEFT_instance;
  }
  function SkikoKey_KEY_RIGHT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_RIGHT_instance;
  }
  function SkikoKey_KEY_F1_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F1_instance;
  }
  function SkikoKey_KEY_F2_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F2_instance;
  }
  function SkikoKey_KEY_F3_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F3_instance;
  }
  function SkikoKey_KEY_F4_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F4_instance;
  }
  function SkikoKey_KEY_F5_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F5_instance;
  }
  function SkikoKey_KEY_F6_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F6_instance;
  }
  function SkikoKey_KEY_F7_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F7_instance;
  }
  function SkikoKey_KEY_F8_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F8_instance;
  }
  function SkikoKey_KEY_F9_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F9_instance;
  }
  function SkikoKey_KEY_F10_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F10_instance;
  }
  function SkikoKey_KEY_F11_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F11_instance;
  }
  function SkikoKey_KEY_F12_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_F12_instance;
  }
  function SkikoKey_KEY_PRINTSCEEN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PRINTSCEEN_instance;
  }
  function SkikoKey_KEY_SCROLL_LOCK_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_SCROLL_LOCK_instance;
  }
  function SkikoKey_KEY_PAUSE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PAUSE_instance;
  }
  function SkikoKey_KEY_INSERT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_INSERT_instance;
  }
  function SkikoKey_KEY_HOME_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_HOME_instance;
  }
  function SkikoKey_KEY_PGUP_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PGUP_instance;
  }
  function SkikoKey_KEY_DELETE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_DELETE_instance;
  }
  function SkikoKey_KEY_END_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_END_instance;
  }
  function SkikoKey_KEY_PGDOWN_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_PGDOWN_instance;
  }
  function SkikoKey_KEY_NUM_LOCK_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUM_LOCK_instance;
  }
  function SkikoKey_KEY_NUMPAD_0_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_0_instance;
  }
  function SkikoKey_KEY_NUMPAD_1_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_1_instance;
  }
  function SkikoKey_KEY_NUMPAD_2_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_2_instance;
  }
  function SkikoKey_KEY_NUMPAD_3_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_3_instance;
  }
  function SkikoKey_KEY_NUMPAD_4_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_4_instance;
  }
  function SkikoKey_KEY_NUMPAD_5_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_5_instance;
  }
  function SkikoKey_KEY_NUMPAD_6_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_6_instance;
  }
  function SkikoKey_KEY_NUMPAD_7_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_7_instance;
  }
  function SkikoKey_KEY_NUMPAD_8_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_8_instance;
  }
  function SkikoKey_KEY_NUMPAD_9_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_9_instance;
  }
  function SkikoKey_KEY_NUMPAD_ENTER_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_ENTER_instance;
  }
  function SkikoKey_KEY_NUMPAD_ADD_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_ADD_instance;
  }
  function SkikoKey_KEY_NUMPAD_SUBTRACT_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_SUBTRACT_instance;
  }
  function SkikoKey_KEY_NUMPAD_MULTIPLY_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_MULTIPLY_instance;
  }
  function SkikoKey_KEY_NUMPAD_DIVIDE_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_DIVIDE_instance;
  }
  function SkikoKey_KEY_NUMPAD_DECIMAL_getInstance() {
    SkikoKey_initEntries();
    return SkikoKey_KEY_NUMPAD_DECIMAL_instance;
  }
  function get_currentSystemTheme() {
    return SystemTheme_UNKNOWN_getInstance();
  }
  function createWebGLContext(canvas, attr) {
    attr = attr === VOID ? null : attr;
    var contextAttributes = new createWebGLContext$contextAttributes$1(attr);
    return GL.createContext(canvas, asJsObject(contextAttributes));
  }
  function asJsObject(_this__u8e3s4) {
    var jsObject = {};
    if (_this__u8e3s4.alpha == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.alpha = _this__u8e3s4.alpha;
    }
    if (_this__u8e3s4.depth == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.depth = _this__u8e3s4.depth;
    }
    if (_this__u8e3s4.stencil == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.stencil = _this__u8e3s4.stencil;
    }
    if (_this__u8e3s4.antialias == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.antialias = _this__u8e3s4.antialias;
    }
    if (_this__u8e3s4.premultipliedAlpha == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.premultipliedAlpha = _this__u8e3s4.premultipliedAlpha;
    }
    if (_this__u8e3s4.preserveDrawingBuffer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.preserveDrawingBuffer = _this__u8e3s4.preserveDrawingBuffer;
    }
    if (_this__u8e3s4.preferLowPowerToHighPerformance == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.preferLowPowerToHighPerformance = _this__u8e3s4.preferLowPowerToHighPerformance;
    }
    if (_this__u8e3s4.failIfMajorPerformanceCaveat == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.failIfMajorPerformanceCaveat = _this__u8e3s4.failIfMajorPerformanceCaveat;
    }
    if (_this__u8e3s4.enableExtensionsByDefault == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.enableExtensionsByDefault = _this__u8e3s4.enableExtensionsByDefault;
    }
    if (_this__u8e3s4.explicitSwapControl == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.explicitSwapControl = _this__u8e3s4.explicitSwapControl;
    }
    if (_this__u8e3s4.renderViaOffscreenBackBuffer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.renderViaOffscreenBackBuffer = _this__u8e3s4.renderViaOffscreenBackBuffer;
    }
    if (_this__u8e3s4.majorVersion == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      jsObject.majorVersion = _this__u8e3s4.majorVersion;
    }
    return jsObject;
  }
  function createWebGLContext$contextAttributes$1($attr) {
    var tmp = this;
    var tmp1_elvis_lhs = $attr == null ? null : $attr.alpha;
    tmp.o2o_1 = tmp1_elvis_lhs == null ? 1 : tmp1_elvis_lhs;
    var tmp_0 = this;
    var tmp1_elvis_lhs_0 = $attr == null ? null : $attr.depth;
    tmp_0.p2o_1 = tmp1_elvis_lhs_0 == null ? 1 : tmp1_elvis_lhs_0;
    var tmp_1 = this;
    var tmp1_elvis_lhs_1 = $attr == null ? null : $attr.stencil;
    tmp_1.q2o_1 = tmp1_elvis_lhs_1 == null ? 8 : tmp1_elvis_lhs_1;
    var tmp_2 = this;
    var tmp1_elvis_lhs_2 = $attr == null ? null : $attr.antialias;
    tmp_2.r2o_1 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    var tmp_3 = this;
    var tmp1_elvis_lhs_3 = $attr == null ? null : $attr.premultipliedAlpha;
    tmp_3.s2o_1 = tmp1_elvis_lhs_3 == null ? 1 : tmp1_elvis_lhs_3;
    var tmp_4 = this;
    var tmp1_elvis_lhs_4 = $attr == null ? null : $attr.preserveDrawingBuffer;
    tmp_4.t2o_1 = tmp1_elvis_lhs_4 == null ? 0 : tmp1_elvis_lhs_4;
    var tmp_5 = this;
    var tmp1_elvis_lhs_5 = $attr == null ? null : $attr.preferLowPowerToHighPerformance;
    tmp_5.u2o_1 = tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5;
    var tmp_6 = this;
    var tmp1_elvis_lhs_6 = $attr == null ? null : $attr.failIfMajorPerformanceCaveat;
    tmp_6.v2o_1 = tmp1_elvis_lhs_6 == null ? 0 : tmp1_elvis_lhs_6;
    var tmp_7 = this;
    var tmp1_elvis_lhs_7 = $attr == null ? null : $attr.enableExtensionsByDefault;
    tmp_7.w2o_1 = tmp1_elvis_lhs_7 == null ? 1 : tmp1_elvis_lhs_7;
    var tmp_8 = this;
    var tmp1_elvis_lhs_8 = $attr == null ? null : $attr.explicitSwapControl;
    tmp_8.x2o_1 = tmp1_elvis_lhs_8 == null ? 0 : tmp1_elvis_lhs_8;
    var tmp_9 = this;
    var tmp1_elvis_lhs_9 = $attr == null ? null : $attr.renderViaOffscreenBackBuffer;
    tmp_9.y2o_1 = tmp1_elvis_lhs_9 == null ? 0 : tmp1_elvis_lhs_9;
    var tmp_10 = this;
    var tmp1_elvis_lhs_10 = $attr == null ? null : $attr.majorVersion;
    tmp_10.z2o_1 = tmp1_elvis_lhs_10 == null ? 1 : tmp1_elvis_lhs_10;
  }
  protoOf(createWebGLContext$contextAttributes$1).a2p = function () {
    return this.o2o_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).b2p = function () {
    return this.p2o_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).c2p = function () {
    return this.q2o_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).d2p = function () {
    return this.r2o_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).e2p = function () {
    return this.s2o_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).f2p = function () {
    return this.t2o_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).g2p = function () {
    return this.u2o_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).h2p = function () {
    return this.v2o_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).i2p = function () {
    return this.w2o_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).j2p = function () {
    return this.x2o_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).k2p = function () {
    return this.y2o_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).l2p = function () {
    return this.z2o_1;
  };
  //region block: post-declaration
  protoOf(Bitmap).t21 = get_width;
  protoOf(Bitmap).u21 = get_height;
  protoOf(Bitmap).l25 = get_colorType;
  protoOf(Bitmap).m25 = get_colorSpace;
  protoOf(Bitmap).n25 = get_isOpaque;
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'alpha', function () {
    return this.a2p();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'depth', function () {
    return this.b2p();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'stencil', function () {
    return this.c2p();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'antialias', function () {
    return this.d2p();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'premultipliedAlpha', function () {
    return this.e2p();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preserveDrawingBuffer', function () {
    return this.f2p();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preferLowPowerToHighPerformance', function () {
    return this.g2p();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'failIfMajorPerformanceCaveat', function () {
    return this.h2p();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'enableExtensionsByDefault', function () {
    return this.i2p();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'explicitSwapControl', function () {
    return this.j2p();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'renderViaOffscreenBackBuffer', function () {
    return this.k2p();
  }, VOID);
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'majorVersion', function () {
    return this.l2p();
  }, VOID);
  //endregion
  //region block: init
  onContentScaleChanged = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Alignment_CENTER_getInstance;
  _.$_$.b = Alignment_END_getInstance;
  _.$_$.c = Alignment_JUSTIFY_getInstance;
  _.$_$.d = Alignment_LEFT_getInstance;
  _.$_$.e = Alignment_RIGHT_getInstance;
  _.$_$.f = Alignment_START_getInstance;
  _.$_$.g = BaselineMode_ALPHABETIC_getInstance;
  _.$_$.h = DecorationLineStyle_SOLID_getInstance;
  _.$_$.i = Direction_LTR_getInstance;
  _.$_$.j = Direction_RTL_getInstance;
  _.$_$.k = PlaceholderAlignment_ABOVE_BASELINE_getInstance;
  _.$_$.l = PlaceholderAlignment_BOTTOM_getInstance;
  _.$_$.m = PlaceholderAlignment_MIDDLE_getInstance;
  _.$_$.n = PlaceholderAlignment_TOP_getInstance;
  _.$_$.o = RectHeightMode_MAX_getInstance;
  _.$_$.p = RectHeightMode_STRUT_getInstance;
  _.$_$.q = RectWidthMode_TIGHT_getInstance;
  _.$_$.r = BlendMode_CLEAR_getInstance;
  _.$_$.s = BlendMode_COLOR_BURN_getInstance;
  _.$_$.t = BlendMode_COLOR_DODGE_getInstance;
  _.$_$.u = BlendMode_COLOR_getInstance;
  _.$_$.v = BlendMode_DARKEN_getInstance;
  _.$_$.w = BlendMode_DIFFERENCE_getInstance;
  _.$_$.x = BlendMode_DST_ATOP_getInstance;
  _.$_$.y = BlendMode_DST_IN_getInstance;
  _.$_$.z = BlendMode_DST_OUT_getInstance;
  _.$_$.a1 = BlendMode_DST_OVER_getInstance;
  _.$_$.b1 = BlendMode_DST_getInstance;
  _.$_$.c1 = BlendMode_EXCLUSION_getInstance;
  _.$_$.d1 = BlendMode_HARD_LIGHT_getInstance;
  _.$_$.e1 = BlendMode_HUE_getInstance;
  _.$_$.f1 = BlendMode_LIGHTEN_getInstance;
  _.$_$.g1 = BlendMode_LUMINOSITY_getInstance;
  _.$_$.h1 = BlendMode_MODULATE_getInstance;
  _.$_$.i1 = BlendMode_MULTIPLY_getInstance;
  _.$_$.j1 = BlendMode_OVERLAY_getInstance;
  _.$_$.k1 = BlendMode_PLUS_getInstance;
  _.$_$.l1 = BlendMode_SATURATION_getInstance;
  _.$_$.m1 = BlendMode_SCREEN_getInstance;
  _.$_$.n1 = BlendMode_SOFT_LIGHT_getInstance;
  _.$_$.o1 = BlendMode_SRC_ATOP_getInstance;
  _.$_$.p1 = BlendMode_SRC_IN_getInstance;
  _.$_$.q1 = BlendMode_SRC_OUT_getInstance;
  _.$_$.r1 = BlendMode_SRC_OVER_getInstance;
  _.$_$.s1 = BlendMode_SRC_getInstance;
  _.$_$.t1 = BlendMode_XOR_getInstance;
  _.$_$.u1 = ClipMode_DIFFERENCE_getInstance;
  _.$_$.v1 = ClipMode_INTERSECT_getInstance;
  _.$_$.w1 = ColorAlphaType_OPAQUE_getInstance;
  _.$_$.x1 = ColorAlphaType_PREMUL_getInstance;
  _.$_$.y1 = ColorType_ALPHA_8_getInstance;
  _.$_$.z1 = ColorType_RGBA_F16_getInstance;
  _.$_$.a2 = ColorType_RGB_565_getInstance;
  _.$_$.b2 = FilterMode_LINEAR_getInstance;
  _.$_$.c2 = FilterMode_NEAREST_getInstance;
  _.$_$.d2 = MipmapMode_NEAREST_getInstance;
  _.$_$.e2 = MipmapMode_NONE_getInstance;
  _.$_$.f2 = PaintMode_FILL_getInstance;
  _.$_$.g2 = PaintMode_STROKE_getInstance;
  _.$_$.h2 = PaintStrokeCap_BUTT_getInstance;
  _.$_$.i2 = PaintStrokeCap_ROUND_getInstance;
  _.$_$.j2 = PaintStrokeCap_SQUARE_getInstance;
  _.$_$.k2 = PaintStrokeJoin_BEVEL_getInstance;
  _.$_$.l2 = PaintStrokeJoin_MITER_getInstance;
  _.$_$.m2 = PaintStrokeJoin_ROUND_getInstance;
  _.$_$.n2 = PathDirection_COUNTER_CLOCKWISE_getInstance;
  _.$_$.o2 = PathFillMode_EVEN_ODD_getInstance;
  _.$_$.p2 = PathFillMode_WINDING_getInstance;
  _.$_$.q2 = PathOp_DIFFERENCE_getInstance;
  _.$_$.r2 = PathOp_INTERSECT_getInstance;
  _.$_$.s2 = PathOp_REVERSE_DIFFERENCE_getInstance;
  _.$_$.t2 = PathOp_UNION_getInstance;
  _.$_$.u2 = PathOp_XOR_getInstance;
  _.$_$.v2 = SkikoKey_KEY_0_getInstance;
  _.$_$.w2 = SkikoKey_KEY_1_getInstance;
  _.$_$.x2 = SkikoKey_KEY_2_getInstance;
  _.$_$.y2 = SkikoKey_KEY_3_getInstance;
  _.$_$.z2 = SkikoKey_KEY_4_getInstance;
  _.$_$.a3 = SkikoKey_KEY_5_getInstance;
  _.$_$.b3 = SkikoKey_KEY_6_getInstance;
  _.$_$.c3 = SkikoKey_KEY_7_getInstance;
  _.$_$.d3 = SkikoKey_KEY_8_getInstance;
  _.$_$.e3 = SkikoKey_KEY_9_getInstance;
  _.$_$.f3 = SkikoKey_KEY_A_getInstance;
  _.$_$.g3 = SkikoKey_KEY_BACKSLASH_getInstance;
  _.$_$.h3 = SkikoKey_KEY_BACKSPACE_getInstance;
  _.$_$.i3 = SkikoKey_KEY_BACK_QUOTE_getInstance;
  _.$_$.j3 = SkikoKey_KEY_B_getInstance;
  _.$_$.k3 = SkikoKey_KEY_CAPSLOCK_getInstance;
  _.$_$.l3 = SkikoKey_KEY_CLOSE_BRACKET_getInstance;
  _.$_$.m3 = SkikoKey_KEY_COMMA_getInstance;
  _.$_$.n3 = SkikoKey_KEY_C_getInstance;
  _.$_$.o3 = SkikoKey_KEY_DELETE_getInstance;
  _.$_$.p3 = SkikoKey_KEY_DOWN_getInstance;
  _.$_$.q3 = SkikoKey_KEY_D_getInstance;
  _.$_$.r3 = SkikoKey_KEY_END_getInstance;
  _.$_$.s3 = SkikoKey_KEY_ENTER_getInstance;
  _.$_$.t3 = SkikoKey_KEY_EQUALS_getInstance;
  _.$_$.u3 = SkikoKey_KEY_ESCAPE_getInstance;
  _.$_$.v3 = SkikoKey_KEY_E_getInstance;
  _.$_$.w3 = SkikoKey_KEY_F10_getInstance;
  _.$_$.x3 = SkikoKey_KEY_F11_getInstance;
  _.$_$.y3 = SkikoKey_KEY_F12_getInstance;
  _.$_$.z3 = SkikoKey_KEY_F1_getInstance;
  _.$_$.a4 = SkikoKey_KEY_F2_getInstance;
  _.$_$.b4 = SkikoKey_KEY_F3_getInstance;
  _.$_$.c4 = SkikoKey_KEY_F4_getInstance;
  _.$_$.d4 = SkikoKey_KEY_F5_getInstance;
  _.$_$.e4 = SkikoKey_KEY_F6_getInstance;
  _.$_$.f4 = SkikoKey_KEY_F7_getInstance;
  _.$_$.g4 = SkikoKey_KEY_F8_getInstance;
  _.$_$.h4 = SkikoKey_KEY_F9_getInstance;
  _.$_$.i4 = SkikoKey_KEY_F_getInstance;
  _.$_$.j4 = SkikoKey_KEY_G_getInstance;
  _.$_$.k4 = SkikoKey_KEY_HOME_getInstance;
  _.$_$.l4 = SkikoKey_KEY_H_getInstance;
  _.$_$.m4 = SkikoKey_KEY_INSERT_getInstance;
  _.$_$.n4 = SkikoKey_KEY_I_getInstance;
  _.$_$.o4 = SkikoKey_KEY_J_getInstance;
  _.$_$.p4 = SkikoKey_KEY_K_getInstance;
  _.$_$.q4 = SkikoKey_KEY_LEFT_ALT_getInstance;
  _.$_$.r4 = SkikoKey_KEY_LEFT_CONTROL_getInstance;
  _.$_$.s4 = SkikoKey_KEY_LEFT_META_getInstance;
  _.$_$.t4 = SkikoKey_KEY_LEFT_SHIFT_getInstance;
  _.$_$.u4 = SkikoKey_KEY_LEFT_getInstance;
  _.$_$.v4 = SkikoKey_KEY_L_getInstance;
  _.$_$.w4 = SkikoKey_KEY_MINUS_getInstance;
  _.$_$.x4 = SkikoKey_KEY_M_getInstance;
  _.$_$.y4 = SkikoKey_KEY_NUMPAD_0_getInstance;
  _.$_$.z4 = SkikoKey_KEY_NUMPAD_1_getInstance;
  _.$_$.a5 = SkikoKey_KEY_NUMPAD_2_getInstance;
  _.$_$.b5 = SkikoKey_KEY_NUMPAD_3_getInstance;
  _.$_$.c5 = SkikoKey_KEY_NUMPAD_4_getInstance;
  _.$_$.d5 = SkikoKey_KEY_NUMPAD_5_getInstance;
  _.$_$.e5 = SkikoKey_KEY_NUMPAD_6_getInstance;
  _.$_$.f5 = SkikoKey_KEY_NUMPAD_7_getInstance;
  _.$_$.g5 = SkikoKey_KEY_NUMPAD_8_getInstance;
  _.$_$.h5 = SkikoKey_KEY_NUMPAD_9_getInstance;
  _.$_$.i5 = SkikoKey_KEY_NUMPAD_ADD_getInstance;
  _.$_$.j5 = SkikoKey_KEY_NUMPAD_DIVIDE_getInstance;
  _.$_$.k5 = SkikoKey_KEY_NUMPAD_ENTER_getInstance;
  _.$_$.l5 = SkikoKey_KEY_NUMPAD_MULTIPLY_getInstance;
  _.$_$.m5 = SkikoKey_KEY_NUMPAD_SUBTRACT_getInstance;
  _.$_$.n5 = SkikoKey_KEY_NUM_LOCK_getInstance;
  _.$_$.o5 = SkikoKey_KEY_N_getInstance;
  _.$_$.p5 = SkikoKey_KEY_OPEN_BRACKET_getInstance;
  _.$_$.q5 = SkikoKey_KEY_O_getInstance;
  _.$_$.r5 = SkikoKey_KEY_PERIOD_getInstance;
  _.$_$.s5 = SkikoKey_KEY_PGDOWN_getInstance;
  _.$_$.t5 = SkikoKey_KEY_PGUP_getInstance;
  _.$_$.u5 = SkikoKey_KEY_PRINTSCEEN_getInstance;
  _.$_$.v5 = SkikoKey_KEY_P_getInstance;
  _.$_$.w5 = SkikoKey_KEY_Q_getInstance;
  _.$_$.x5 = SkikoKey_KEY_RIGHT_ALT_getInstance;
  _.$_$.y5 = SkikoKey_KEY_RIGHT_CONTROL_getInstance;
  _.$_$.z5 = SkikoKey_KEY_RIGHT_META_getInstance;
  _.$_$.a6 = SkikoKey_KEY_RIGHT_SHIFT_getInstance;
  _.$_$.b6 = SkikoKey_KEY_RIGHT_getInstance;
  _.$_$.c6 = SkikoKey_KEY_R_getInstance;
  _.$_$.d6 = SkikoKey_KEY_SCROLL_LOCK_getInstance;
  _.$_$.e6 = SkikoKey_KEY_SEMICOLON_getInstance;
  _.$_$.f6 = SkikoKey_KEY_SLASH_getInstance;
  _.$_$.g6 = SkikoKey_KEY_SPACE_getInstance;
  _.$_$.h6 = SkikoKey_KEY_S_getInstance;
  _.$_$.i6 = SkikoKey_KEY_TAB_getInstance;
  _.$_$.j6 = SkikoKey_KEY_T_getInstance;
  _.$_$.k6 = SkikoKey_KEY_UNKNOWN_getInstance;
  _.$_$.l6 = SkikoKey_KEY_UP_getInstance;
  _.$_$.m6 = SkikoKey_KEY_U_getInstance;
  _.$_$.n6 = SkikoKey_KEY_V_getInstance;
  _.$_$.o6 = SkikoKey_KEY_W_getInstance;
  _.$_$.p6 = SkikoKey_KEY_X_getInstance;
  _.$_$.q6 = SkikoKey_KEY_Y_getInstance;
  _.$_$.r6 = SkikoKey_KEY_Z_getInstance;
  _.$_$.s6 = SkikoPointerEventKind_SCROLL_getInstance;
  _.$_$.t6 = FontCollection_init_$Create$;
  _.$_$.u6 = StrutStyle_init_$Create$;
  _.$_$.v6 = TextStyle_init_$Create$;
  _.$_$.w6 = Bitmap_init_$Create$;
  _.$_$.x6 = Canvas_init_$Create$;
  _.$_$.y6 = Font_init_$Create$;
  _.$_$.z6 = Paint_init_$Create$;
  _.$_$.a7 = Path_init_$Create$;
  _.$_$.b7 = PictureRecorder_init_$Create$;
  _.$_$.c7 = SkikoInputModifiers__has_impl_qg30o6;
  _.$_$.d7 = CharDirection_getInstance;
  _.$_$.e7 = Companion_getInstance_3;
  _.$_$.f7 = Companion_getInstance_5;
  _.$_$.g7 = Companion_getInstance_6;
  _.$_$.h7 = Companion_getInstance_7;
  _.$_$.i7 = Companion_getInstance_10;
  _.$_$.j7 = Companion_getInstance_12;
  _.$_$.k7 = Companion_getInstance_13;
  _.$_$.l7 = Companion_getInstance_17;
  _.$_$.m7 = Companion_getInstance_20;
  _.$_$.n7 = Companion_getInstance_23;
  _.$_$.o7 = Companion_getInstance_28;
  _.$_$.p7 = Companion_getInstance_29;
  _.$_$.q7 = ShadowUtils_getInstance;
  _.$_$.r7 = Companion_getInstance_31;
  _.$_$.s7 = Companion_getInstance_43;
  _.$_$.t7 = DecorationStyle;
  _.$_$.u7 = LineMetrics;
  _.$_$.v7 = ParagraphBuilder;
  _.$_$.w7 = ParagraphStyle;
  _.$_$.x7 = PlaceholderStyle;
  _.$_$.y7 = Shadow;
  _.$_$.z7 = TextBox;
  _.$_$.a8 = TextIndent;
  _.$_$.b8 = TypefaceFontProvider;
  _.$_$.c8 = ColorInfo;
  _.$_$.d8 = CubicResampler;
  _.$_$.e8 = FilterMipmap;
  _.$_$.f8 = ImageInfo;
  _.$_$.g8 = Matrix44;
  _.$_$.h8 = Point3;
  _.$_$.i8 = Rect;
  _.$_$.j8 = ClipboardManager;
  _.$_$.k8 = SkiaLayer;
  _.$_$.l8 = SkikoView;
  _.$_$.m8 = URIManager;
  _.$_$.n8 = currentNanoTime;
  _.$_$.o8 = get_currentSystemTheme;
  _.$_$.p8 = get_hostOs;
  //endregion
  return _;
}));

//# sourceMappingURL=skiko-kjs.js.map
