(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-ui-geometry.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-runtime.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-runtime.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-ui-text'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-ui-text'.");
    }
    root['compose-multiplatform-core-ui-text'] = factory(typeof this['compose-multiplatform-core-ui-text'] === 'undefined' ? {} : this['compose-multiplatform-core-ui-text'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-ui-geometry'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-runtime'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.f7;
  var objectCreate = kotlin_kotlin.$_$.d7;
  var emptyList = kotlin_kotlin.$_$.s3;
  var Unit_getInstance = kotlin_kotlin.$_$.m2;
  var VOID = kotlin_kotlin.$_$.na;
  var toString = kotlin_kotlin.$_$.j7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var hashCode = kotlin_kotlin.$_$.r6;
  var getStringHashCode = kotlin_kotlin.$_$.q6;
  var THROW_CCE = kotlin_kotlin.$_$.m9;
  var equals = kotlin_kotlin.$_$.j6;
  var classMeta = kotlin_kotlin.$_$.g6;
  var setMetadataFor = kotlin_kotlin.$_$.g7;
  var compareValues = kotlin_kotlin.$_$.f5;
  var sortedWith = kotlin_kotlin.$_$.a5;
  var charSequenceGet = kotlin_kotlin.$_$.d6;
  var CharSequence = kotlin_kotlin.$_$.z8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var coerceIn = kotlin_kotlin.$_$.u7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e1;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f1;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c1;
  var coerceAtLeast = kotlin_kotlin.$_$.q7;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var get_lastIndex = kotlin_kotlin.$_$.j4;
  var addAll = kotlin_kotlin.$_$.c3;
  var plus = kotlin_kotlin.$_$.t4;
  var last = kotlin_kotlin.$_$.l4;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b2;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h;
  var BlendMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.g2;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var getNumberHashCode = kotlin_kotlin.$_$.n6;
  var compareTo = kotlin_kotlin.$_$.h6;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.x9;
  var KProperty1 = kotlin_kotlin.$_$.a8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.p6;
  var numberToInt = kotlin_kotlin.$_$.b7;
  var interfaceMeta = kotlin_kotlin.$_$.t6;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var TextUnit__hashCode_impl_qsmeov = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  var get_isUnspecified = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var objectMeta = kotlin_kotlin.$_$.e7;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k2;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c2;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.w;
  var toString_0 = kotlin_kotlin.$_$.ja;
  var Char = kotlin_kotlin.$_$.a9;
  var isCharSequence = kotlin_kotlin.$_$.v6;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b1;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.z9;
  var fillArrayVal = kotlin_kotlin.$_$.k6;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.j;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var ensureNotNull = kotlin_kotlin.$_$.t9;
  var first = kotlin_kotlin.$_$.z3;
  var Map = kotlin_kotlin.$_$.x2;
  var isInterface = kotlin_kotlin.$_$.w6;
  var MutableMap = kotlin_kotlin.$_$.a3;
  var MutableCollection = kotlin_kotlin.$_$.y2;
  var isObject = kotlin_kotlin.$_$.x6;
  var println = kotlin_kotlin.$_$.y5;
  var copyOf = kotlin_kotlin.$_$.q3;
  var copyOf_0 = kotlin_kotlin.$_$.p3;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.x;
  var arrayCopy = kotlin_kotlin.$_$.d3;
  var ClassCastException = kotlin_kotlin.$_$.b9;
  var NullPointerException = kotlin_kotlin.$_$.k9;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.s1;
  var Long = kotlin_kotlin.$_$.h9;
  var List = kotlin_kotlin.$_$.v2;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var Exception = kotlin_kotlin.$_$.f9;
  var CoroutineImpl = kotlin_kotlin.$_$.v5;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var get_indices = kotlin_kotlin.$_$.g4;
  var yield_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var CancellationException = kotlin_kotlin.$_$.g5;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.k5;
  var get = kotlin_kotlin.$_$.r5;
  var fold = kotlin_kotlin.$_$.q5;
  var minusKey = kotlin_kotlin.$_$.s5;
  var plus_0 = kotlin_kotlin.$_$.u5;
  var Element = kotlin_kotlin.$_$.t5;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.f2;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var to = kotlin_kotlin.$_$.ka;
  var mutableListOf = kotlin_kotlin.$_$.r4;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.k2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.v1;
  var createFailure = kotlin_kotlin.$_$.s9;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.y1;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.x1;
  var KMutableProperty1 = kotlin_kotlin.$_$.y7;
  var listOf = kotlin_kotlin.$_$.o4;
  var Comparable = kotlin_kotlin.$_$.c9;
  var mutableStateMapOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var AtomicReference = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var Collection = kotlin_kotlin.$_$.u2;
  var Enum = kotlin_kotlin.$_$.d9;
  var ShaderBrush = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var isNaN_0 = kotlin_kotlin.$_$.v9;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m1;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y1;
  var toList = kotlin_kotlin.$_$.d5;
  var CharDirection_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.i3;
  var setOf = kotlin_kotlin.$_$.w4;
  var get_hostOs = kotlin_org_jetbrains_skiko_skiko.$_$.p8;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.r7;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.h7;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var currentNanoTime = kotlin_org_jetbrains_skiko_skiko.$_$.n8;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.i2;
  var isLowSurrogate = kotlin_kotlin.$_$.o8;
  var isHighSurrogate = kotlin_kotlin.$_$.n8;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.u1;
  var sequence = kotlin_kotlin.$_$.h8;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.t1;
  var SequenceScope = kotlin_kotlin.$_$.b8;
  var numberRangeToNumber = kotlin_kotlin.$_$.z6;
  var getObjectHashCode = kotlin_kotlin.$_$.o6;
  var isArray = kotlin_kotlin.$_$.u6;
  var LineMetrics = kotlin_org_jetbrains_skiko_skiko.$_$.u7;
  var RectHeightMode_STRUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p;
  var RectWidthMode_TIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q;
  var firstOrNull = kotlin_kotlin.$_$.x3;
  var first_0 = kotlin_kotlin.$_$.a4;
  var Rect = kotlin_org_jetbrains_skiko_skiko.$_$.i8;
  var TextBox = kotlin_org_jetbrains_skiko_skiko.$_$.z7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.p8;
  var lastOrNull = kotlin_kotlin.$_$.k4;
  var toComposeRect = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b1;
  var RectHeightMode_MAX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o;
  var asSkiaPath = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v;
  var getOrNull = kotlin_kotlin.$_$.c4;
  var charSequenceLength = kotlin_kotlin.$_$.e6;
  var Direction_RTL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var listOf_0 = kotlin_kotlin.$_$.n4;
  var FontCollection_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.t6;
  var TypefaceFontProvider = kotlin_org_jetbrains_skiko_skiko.$_$.b8;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.l;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.j7;
  var copyToArray = kotlin_kotlin.$_$.r3;
  var mapOf = kotlin_kotlin.$_$.q4;
  var KProperty0 = kotlin_kotlin.$_$.z7;
  var lazy_0 = kotlin_kotlin.$_$.y9;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d2;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.z6;
  var asComposePaint = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i2;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.v6;
  var toArgb = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a1;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.i7;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.p1;
  var _TextUnit___get_isSp__impl__8c3r6q = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var _TextUnit___get_isEm__impl__esrmtl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var BlendMode__hashCode_impl_93ceri = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_skiko_skiko.$_$.k7;
  var DecorationLineStyle_SOLID_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h;
  var DecorationStyle = kotlin_org_jetbrains_skiko_skiko.$_$.t7;
  var Shadow = kotlin_org_jetbrains_skiko_skiko.$_$.y7;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.fa;
  var sortWith = kotlin_kotlin.$_$.y4;
  var asReversed = kotlin_kotlin.$_$.e3;
  var ParagraphStyle = kotlin_org_jetbrains_skiko_skiko.$_$.w7;
  var StrutStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.u6;
  var TextIndent = kotlin_org_jetbrains_skiko_skiko.$_$.a8;
  var Font_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.y6;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.h2;
  var ParagraphBuilder = kotlin_org_jetbrains_skiko_skiko.$_$.v7;
  var charSequenceSubSequence = kotlin_kotlin.$_$.f6;
  var BaselineMode_ALPHABETIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g;
  var PlaceholderStyle = kotlin_org_jetbrains_skiko_skiko.$_$.x7;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var PlaceholderAlignment_MIDDLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m;
  var PlaceholderAlignment_BOTTOM_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l;
  var PlaceholderAlignment_TOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n;
  var PlaceholderAlignment_ABOVE_BASELINE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k;
  var Alignment_END_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b;
  var Alignment_START_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f;
  var Alignment_JUSTIFY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c;
  var Alignment_CENTER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a;
  var Alignment_RIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e;
  var Alignment_LEFT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d;
  var Direction_LTR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i;
  var firstOrNull_0 = kotlin_kotlin.$_$.w3;
  var coerceIn_0 = kotlin_kotlin.$_$.t7;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Range, 'Range', classMeta);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(AnnotatedString, 'AnnotatedString', classMeta, VOID, [CharSequence]);
  setMetadataFor(MultiParagraph, 'MultiParagraph', classMeta);
  setMetadataFor(ParagraphInfo, 'ParagraphInfo', classMeta);
  function get_hasStaleResolvedFonts() {
    return false;
  }
  setMetadataFor(ParagraphIntrinsics, 'ParagraphIntrinsics', interfaceMeta);
  setMetadataFor(MultiParagraphIntrinsics, 'MultiParagraphIntrinsics', classMeta, VOID, [ParagraphIntrinsics]);
  setMetadataFor(ParagraphIntrinsicInfo, 'ParagraphIntrinsicInfo', classMeta);
  setMetadataFor(ParagraphStyle_0, 'ParagraphStyle', classMeta);
  setMetadataFor(Placeholder, 'Placeholder', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(SpanStyle, 'SpanStyle', classMeta);
  setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta);
  setMetadataFor(TextLayoutResult, 'TextLayoutResult', classMeta);
  setMetadataFor(TextLayoutInput, 'TextLayoutInput', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(TextStyle, 'TextStyle', classMeta);
  setMetadataFor(LruCache, 'LruCache', classMeta);
  setMetadataFor(SimpleArrayMap, 'SimpleArrayMap', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  function get_loadingStrategy() {
    return Companion_getInstance_19().t3e_1;
  }
  setMetadataFor(Font, 'Font', interfaceMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(FontFamily, 'FontFamily', classMeta);
  setMetadataFor(SystemFontFamily, 'SystemFontFamily', classMeta, FontFamily);
  setMetadataFor(DefaultFontFamily, 'DefaultFontFamily', classMeta, SystemFontFamily);
  setMetadataFor(GenericFontFamily, 'GenericFontFamily', classMeta, SystemFontFamily);
  setMetadataFor(FileBasedFontFamily, 'FileBasedFontFamily', classMeta, FontFamily);
  setMetadataFor(FontListFontFamily, 'FontListFontFamily', classMeta, FileBasedFontFamily, [FileBasedFontFamily, List]);
  setMetadataFor(LoadedFontFamily, 'LoadedFontFamily', classMeta, FontFamily);
  setMetadataFor(TypefaceRequestCache, 'TypefaceRequestCache', classMeta);
  setMetadataFor(TypefaceRequest, 'TypefaceRequest', classMeta);
  setMetadataFor(Immutable, 'Immutable', classMeta);
  setMetadataFor(Async, 'Async', classMeta);
  setMetadataFor(FontFamilyResolverImpl, 'FontFamilyResolverImpl', classMeta, VOID, VOID, VOID, VOID, [1]);
  function interceptFontFamily(fontFamily) {
    return fontFamily;
  }
  function interceptFontWeight(fontWeight) {
    return fontWeight;
  }
  function interceptFontStyle(fontStyle) {
    return fontStyle;
  }
  function interceptFontSynthesis(fontSynthesis) {
    return fontSynthesis;
  }
  setMetadataFor(PlatformResolveInterceptor, 'PlatformResolveInterceptor', interfaceMeta);
  setMetadataFor(PlatformResolveInterceptor$Companion$Default$1, VOID, classMeta, VOID, [PlatformResolveInterceptor]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(AsyncTypefaceResult, 'AsyncTypefaceResult', classMeta);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor($runCachedCOROUTINE$1, '$runCachedCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(AsyncTypefaceCache, 'AsyncTypefaceCache', classMeta, VOID, VOID, VOID, VOID, [4]);
  setMetadataFor(AsyncFontListLoader$load$slambda, 'AsyncFontListLoader$load$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [0]);
  setMetadataFor(AsyncFontListLoader$loadWithTimeoutOrNull$slambda, 'AsyncFontListLoader$loadWithTimeoutOrNull$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($loadCOROUTINE$2, '$loadCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor($loadWithTimeoutOrNullCOROUTINE$3, '$loadWithTimeoutOrNullCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(AsyncFontListLoader, 'AsyncFontListLoader', classMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Element]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(FontListFontFamilyTypefaceAdapter$resolve$slambda, 'FontListFontFamilyTypefaceAdapter$resolve$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(FontListFontFamilyTypefaceAdapter, 'FontListFontFamilyTypefaceAdapter', classMeta, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(FontLoadingStrategy, 'FontLoadingStrategy', classMeta);
  setMetadataFor(FontMatcher, 'FontMatcher', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(FontStyle, 'FontStyle', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(FontSynthesis, 'FontSynthesis', classMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(FontWeight, 'FontWeight', classMeta, VOID, [Comparable]);
  setMetadataFor(CommitTextCommand, 'CommitTextCommand', classMeta);
  setMetadataFor(PlatformTextInputPluginRegistryImpl, 'PlatformTextInputPluginRegistryImpl', classMeta);
  setMetadataFor(TextInputService, 'TextInputService', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(Locale, 'Locale', classMeta);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(LocaleList, 'LocaleList', classMeta, VOID, [Collection]);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(BaselineShift, 'BaselineShift', classMeta);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor(Hyphens, 'Hyphens', classMeta);
  setMetadataFor(ResolvedTextDirection, 'ResolvedTextDirection', classMeta, Enum);
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor(TextAlign, 'TextAlign', classMeta);
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor(TextDecoration, 'TextDecoration', classMeta);
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor(TextDirection, 'TextDirection', classMeta);
  function merge(other) {
    var tmp;
    var tmp_0;
    if (other instanceof BrushStyle) {
      tmp_0 = this instanceof BrushStyle;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_1 = other.a2p();
      tmp = new BrushStyle(other.x3l_1, takeOrElse_0(tmp_1, TextForegroundStyle$merge$lambda(this)));
    } else {
      var tmp_2;
      if (other instanceof BrushStyle) {
        tmp_2 = !(this instanceof BrushStyle);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp = other;
      } else {
        var tmp_3;
        if (!(other instanceof BrushStyle)) {
          tmp_3 = this instanceof BrushStyle;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp = this;
        } else {
          tmp = other.z39(TextForegroundStyle$merge$lambda_0(this));
        }
      }
    }
    return tmp;
  }
  function takeOrElse(other) {
    return !equals(this, Unspecified_getInstance()) ? this : other();
  }
  setMetadataFor(TextForegroundStyle, 'TextForegroundStyle', interfaceMeta);
  setMetadataFor(Unspecified, 'Unspecified', objectMeta, VOID, [TextForegroundStyle]);
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor(BrushStyle, 'BrushStyle', classMeta, VOID, [TextForegroundStyle]);
  setMetadataFor(ColorStyle, 'ColorStyle', classMeta, VOID, [TextForegroundStyle]);
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor(TextGeometricTransform, 'TextGeometricTransform', classMeta);
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor(TextIndent_0, 'TextIndent', classMeta);
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor(TextOverflow, 'TextOverflow', classMeta);
  setMetadataFor(NoCache, 'NoCache', classMeta);
  setMetadataFor(JsLocale, 'JsLocale', classMeta);
  setMetadataFor(createPlatformLocaleDelegate$1, VOID, classMeta);
  setMetadataFor(PlatformFont, 'PlatformFont', classMeta, VOID, [Font]);
  setMetadataFor(ExpireAfterAccessCache, 'ExpireAfterAccessCache', classMeta);
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj, '<get-codePointsOutsideDirectionalIsolate>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(_get_codePoints_$slambda_43x8dt, '<get-codePoints>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(PlatformTextStyle, 'PlatformTextStyle', classMeta);
  function paint$default(canvas, color, shadow, textDecoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().f2t_1 : color;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().u2v_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.y36(canvas, color, shadow, textDecoration, drawStyle, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.y36.call(this, canvas, new Color(color), shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  }
  function paint$default_0(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode, $super) {
    var tmp;
    if (alpha === VOID) {
      FloatCompanionObject_getInstance();
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().u2v_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.a37(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.a37.call(this, canvas, brush, alpha, shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp_0;
  }
  setMetadataFor(Paragraph_1, 'Paragraph', interfaceMeta);
  setMetadataFor(SkiaParagraph, 'SkiaParagraph', classMeta, VOID, [Paragraph_1]);
  setMetadataFor(PlatformFontFamilyTypefaceAdapter, 'PlatformFontFamilyTypefaceAdapter', classMeta);
  setMetadataFor(SkiaFontLoader, 'SkiaFontLoader', classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ParagraphLayouter, 'ParagraphLayouter', classMeta);
  setMetadataFor(Platform, 'Platform', classMeta, Enum);
  setMetadataFor(FontLoadResult, 'FontLoadResult', classMeta);
  setMetadataFor(FontLoader, 'FontLoader', classMeta);
  setMetadataFor(FontCache, 'FontCache', classMeta);
  setMetadataFor(SkiaBackedTypeface, 'SkiaBackedTypeface', classMeta);
  setMetadataFor(LoadedFont, 'LoadedFont', classMeta, PlatformFont);
  setMetadataFor(ComputedStyle, 'ComputedStyle', classMeta);
  setMetadataFor(Op, 'Op', classMeta);
  setMetadataFor(StyleAdd, 'StyleAdd', classMeta, Op);
  setMetadataFor(PutPlaceholder, 'PutPlaceholder', classMeta, Op);
  setMetadataFor(EndPlaceholder, 'EndPlaceholder', classMeta, Op);
  setMetadataFor(Cut, 'Cut', classMeta);
  setMetadataFor(StyleAdd_0, 'StyleAdd', classMeta, Cut);
  setMetadataFor(StyleRemove, 'StyleRemove', classMeta, Cut);
  setMetadataFor(PutPlaceholder_0, 'PutPlaceholder', classMeta, Cut);
  setMetadataFor(EndPlaceholder_0, 'EndPlaceholder', classMeta, Cut);
  setMetadataFor(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(ParagraphBuilder_0, 'ParagraphBuilder', classMeta);
  setMetadataFor(SkiaParagraphIntrinsics, 'SkiaParagraphIntrinsics', classMeta, VOID, [ParagraphIntrinsics]);
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor(LineBreak, 'LineBreak', classMeta);
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor(TextMotion, 'TextMotion', classMeta);
  //endregion
  var EmptyAnnotatedString;
  function Range_init_$Init$(item, start, end, $this) {
    Range.call($this, item, start, end, '');
    return $this;
  }
  function Range_init_$Create$(item, start, end) {
    return Range_init_$Init$(item, start, end, objectCreate(protoOf(Range)));
  }
  function AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, $this) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (paragraphStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = paragraphStyles;
    }
    paragraphStyles = tmp_0;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (spanStyles.k()) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.<init>.<anonymous>' call
      tmp_1 = null;
    } else {
      tmp_1 = spanStyles;
    }
    var tmp_2 = tmp_1;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_3;
    if (paragraphStyles.k()) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.<init>.<anonymous>' call
      tmp_3 = null;
    } else {
      tmp_3 = paragraphStyles;
    }
    tmp$ret$5 = tmp_3;
    AnnotatedString.call($this, text, tmp_2, tmp$ret$5, null);
    return $this;
  }
  function AnnotatedString_init_$Create$(text, spanStyles, paragraphStyles) {
    return AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, objectCreate(protoOf(AnnotatedString)));
  }
  function Range(item, start, end, tag) {
    this.s34_1 = item;
    this.t34_1 = start;
    this.u34_1 = end;
    this.v34_1 = tag;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.t34_1 <= this.u34_1)) {
      // Inline function 'androidx.compose.ui.text.Range.<anonymous>' call
      var message = 'Reversed range is not supported';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.w34_1 = 0;
  }
  protoOf(Range).e3 = function () {
    return this.s34_1;
  };
  protoOf(Range).f3 = function () {
    return this.t34_1;
  };
  protoOf(Range).m32 = function () {
    return this.u34_1;
  };
  protoOf(Range).toString = function () {
    return 'Range(item=' + this.s34_1 + ', start=' + this.t34_1 + ', end=' + this.u34_1 + ', tag=' + this.v34_1 + ')';
  };
  protoOf(Range).hashCode = function () {
    var result = this.s34_1 == null ? 0 : hashCode(this.s34_1);
    result = imul(result, 31) + this.t34_1 | 0;
    result = imul(result, 31) + this.u34_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.v34_1) | 0;
    return result;
  };
  protoOf(Range).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Range))
      return false;
    var tmp0_other_with_cast = other instanceof Range ? other : THROW_CCE();
    if (!equals(this.s34_1, tmp0_other_with_cast.s34_1))
      return false;
    if (!(this.t34_1 === tmp0_other_with_cast.t34_1))
      return false;
    if (!(this.u34_1 === tmp0_other_with_cast.u34_1))
      return false;
    if (!(this.v34_1 === tmp0_other_with_cast.v34_1))
      return false;
    return true;
  };
  function sam$kotlin_Comparator$0(function_0) {
    this.x34_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).oc = function (a, b) {
    return this.x34_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.oc(a, b);
  };
  function AnnotatedString$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    var tmp = a.t34_1;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    tmp$ret$1 = b.t34_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function AnnotatedString(text, spanStylesOrNull, paragraphStylesOrNull, annotations) {
    spanStylesOrNull = spanStylesOrNull === VOID ? null : spanStylesOrNull;
    paragraphStylesOrNull = paragraphStylesOrNull === VOID ? null : paragraphStylesOrNull;
    annotations = annotations === VOID ? null : annotations;
    this.y34_1 = text;
    this.z34_1 = spanStylesOrNull;
    this.a35_1 = paragraphStylesOrNull;
    this.b35_1 = annotations;
    var lastStyleEnd = -1;
    var tmp0_safe_receiver = this.a35_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.sortedBy' call
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_0 = AnnotatedString$lambda;
      tmp$ret$0 = new sam$kotlin_Comparator$0(tmp_0);
      tmp = sortedWith(tmp0_safe_receiver, tmp$ret$0);
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp1_safe_receiver.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp1_safe_receiver.l(index);
          // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(item.t34_1 >= lastStyleEnd)) {
            // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
            var message = 'ParagraphStyle should not overlap';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(item.u34_1 <= this.y34_1.length)) {
            // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
            var message_0 = 'ParagraphStyle range [' + item.t34_1 + ', ' + item.u34_1 + ')' + ' is out of boundary';
            throw IllegalArgumentException_init_$Create$(toString(message_0));
          }
          lastStyleEnd = item.u34_1;
        }
         while (inductionVariable <= last);
    }
    this.c35_1 = 0;
  }
  protoOf(AnnotatedString).d35 = function () {
    var tmp0_elvis_lhs = this.z34_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(AnnotatedString).r6 = function () {
    return this.y34_1.length;
  };
  protoOf(AnnotatedString).s6 = function (index) {
    return charSequenceGet(this.y34_1, index);
  };
  protoOf(AnnotatedString).t6 = function (startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(startIndex <= endIndex)) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.subSequence.<anonymous>' call
      var message = 'start (' + startIndex + ') should be less or equal to end (' + endIndex + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (startIndex === 0 ? endIndex === this.y34_1.length : false)
      return this;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var text = this.y34_1.substring(startIndex, endIndex);
    return new AnnotatedString(text, filterRanges(this.z34_1, startIndex, endIndex), filterRanges(this.a35_1, startIndex, endIndex), filterRanges(this.b35_1, startIndex, endIndex));
  };
  protoOf(AnnotatedString).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnnotatedString))
      return false;
    if (!(this.y34_1 === other.y34_1))
      return false;
    if (!equals(this.z34_1, other.z34_1))
      return false;
    if (!equals(this.a35_1, other.a35_1))
      return false;
    if (!equals(this.b35_1, other.b35_1))
      return false;
    return true;
  };
  protoOf(AnnotatedString).hashCode = function () {
    var result = getStringHashCode(this.y34_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.z34_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.a35_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.b35_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  protoOf(AnnotatedString).toString = function () {
    return this.y34_1;
  };
  function filterRanges(ranges, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(start <= end)) {
      // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
      var message = 'start (' + start + ') should be less than or equal to end (' + end + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    if (ranges == null) {
      return null;
    } else {
      tmp = ranges;
    }
    var nonNullRange = tmp;
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(nonNullRange.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nonNullRange.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nonNullRange.l(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        if (intersect(start, end, item.t34_1, item.u34_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(target.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.l(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp0_maxOf = item_0.t34_1;
        var tmp_0 = Math.max(start, tmp0_maxOf) - start | 0;
        var tmp$ret$4;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp1_minOf = item_0.u34_1;
        tmp$ret$4 = Math.min(end, tmp1_minOf);
        var tmp0_plusAssign = new Range(item_0.s34_1, tmp_0, tmp$ret$4 - start | 0, item_0.v34_1);
        target_0.a(tmp0_plusAssign);
      }
       while (inductionVariable_0 <= last_0);
    var tmp_1;
    if (target_0.k()) {
      // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
      tmp_1 = null;
    } else {
      tmp_1 = target_0;
    }
    return tmp_1;
  }
  function intersect(lStart, lEnd, rStart, rEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp_1 = Math.max(lStart, rStart);
    // Inline function 'kotlin.comparisons.minOf' call
    if (tmp_1 < Math.min(lEnd, rEnd)) {
      tmp_0 = true;
    } else {
      tmp_0 = contains(lStart, lEnd, rStart, rEnd);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = contains(rStart, rEnd, lStart, lEnd);
    }
    return tmp;
  }
  function getLocalSpanStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    if (start === end)
      return null;
    var tmp0_elvis_lhs = _this__u8e3s4.z34_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var spanStyles = tmp;
    if (start === 0 ? end >= _this__u8e3s4.y34_1.length : false) {
      return spanStyles;
    }
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(spanStyles.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = spanStyles.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = spanStyles.l(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalSpanStyles.<anonymous>' call
        if (intersect(start, end, item.t34_1, item.u34_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(target.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.l(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.getLocalSpanStyles.<anonymous>' call
        var tmp0_plusAssign = Range_init_$Create$(item_0.s34_1, coerceIn(item_0.t34_1, start, end) - start | 0, coerceIn(item_0.u34_1, start, end) - start | 0);
        target_0.a(tmp0_plusAssign);
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function contains(baseStart, baseEnd, targetStart, targetEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return (baseStart <= targetStart ? targetEnd <= baseEnd : false) ? !(baseEnd === targetEnd) ? true : targetStart === targetEnd === (baseStart === baseEnd) : false;
  }
  function substringWithoutParagraphStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp;
    if (!(start === end)) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = _this__u8e3s4.y34_1.substring(start, end);
    } else {
      tmp = '';
    }
    return new AnnotatedString(tmp, getLocalSpanStyles(_this__u8e3s4, start, end));
  }
  function normalizedParagraphStyles(_this__u8e3s4, defaultParagraphStyle) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var length = _this__u8e3s4.y34_1.length;
    var tmp0_elvis_lhs = _this__u8e3s4.a35_1;
    var paragraphStyles = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    var lastOffset = 0;
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$_0();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = paragraphStyles.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = paragraphStyles.l(index);
        // Inline function 'androidx.compose.ui.text.normalizedParagraphStyles.<anonymous>' call
        var style = item.e3();
        var start = item.f3();
        var end = item.m32();
        if (!(start === lastOffset)) {
          result.a(Range_init_$Create$(defaultParagraphStyle, lastOffset, start));
        }
        result.a(Range_init_$Create$(defaultParagraphStyle.r35(style), start, end));
        lastOffset = end;
      }
       while (inductionVariable <= last);
    if (!(lastOffset === length)) {
      result.a(Range_init_$Create$(defaultParagraphStyle, lastOffset, length));
    }
    if (result.k()) {
      result.a(Range_init_$Create$(defaultParagraphStyle, 0, 0));
    }
    return result;
  }
  var properties_initialized_AnnotatedString_kt_um06op;
  function _init_properties_AnnotatedString_kt__ww2pyh() {
    if (!properties_initialized_AnnotatedString_kt_um06op) {
      properties_initialized_AnnotatedString_kt_um06op = true;
      EmptyAnnotatedString = AnnotatedString_init_$Create$('');
    }
  }
  function _get_annotatedString__kqljtk($this) {
    return $this.y35_1.s35_1;
  }
  function requireLineIndexInRange($this, lineIndex) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= lineIndex ? lineIndex < $this.d36_1 : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireLineIndexInRange.<anonymous>' call
      var message = 'lineIndex(' + lineIndex + ') is out of bounds [0, ' + $this.d36_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function MultiParagraph(intrinsics, constraints, maxLines, ellipsis) {
    maxLines = maxLines === VOID ? get_DefaultMaxLines() : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    this.y35_1 = intrinsics;
    this.z35_1 = maxLines;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 ? _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0 : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
      var message = 'Setting Constraints.minWidth and Constraints.minHeight is not supported, these should be the default zero values instead.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var currentHeight = 0.0;
    var currentLineCount = 0;
    var didExceedMaxLines = false;
    // Inline function 'kotlin.collections.mutableListOf' call
    var paragraphInfoList = ArrayList_init_$Create$_0();
    var infoList = this.y35_1.w35_1;
    var inductionVariable = 0;
    var last = infoList.f() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraphInfo = infoList.l(index);
        var tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
        var tmp_0;
        if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints)) {
          tmp_0 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints) - ceilToInt(currentHeight) | 0, 0);
        } else {
          tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
        }
        var paragraph = Paragraph(paragraphInfo.h36_1, Constraints(VOID, tmp, VOID, tmp_0), this.z35_1 - currentLineCount | 0, ellipsis);
        var paragraphTop = currentHeight;
        var paragraphBottom = currentHeight + paragraph.u21();
        currentHeight = paragraphBottom;
        var startLineIndex = currentLineCount;
        var endLineIndex = startLineIndex + paragraph.k36() | 0;
        currentLineCount = endLineIndex;
        paragraphInfoList.a(new ParagraphInfo(paragraph, paragraphInfo.i36_1, paragraphInfo.j36_1, startLineIndex, endLineIndex, paragraphTop, paragraphBottom));
        if (paragraph.l36() ? true : endLineIndex === this.z35_1 ? !(index === get_lastIndex(this.y35_1.w35_1)) : false) {
          didExceedMaxLines = true;
          break $l$loop;
        }
      }
       while (inductionVariable <= last);
    this.c36_1 = currentHeight;
    this.d36_1 = currentLineCount;
    this.a36_1 = didExceedMaxLines;
    this.f36_1 = paragraphInfoList;
    this.b36_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_1 = this;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.ui.text.fastFlatMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(paragraphInfoList.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = paragraphInfoList.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = paragraphInfoList.l(index_0);
        // Inline function 'androidx.compose.ui.text.fastFlatMap.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastMap' call
        var tmp0_fastMap = item.m36_1.t36();
        // Inline function 'kotlin.contracts.contract' call
        var target_0 = ArrayList_init_$Create$(tmp0_fastMap.f());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last_1 = tmp0_fastMap.f() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_0 = tmp0_fastMap.l(index_1);
            // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>.<anonymous>' call
            var tmp0_plusAssign = item_0 == null ? null : item.u36(item_0);
            target_0.a(tmp0_plusAssign);
          }
           while (inductionVariable_1 <= last_1);
        var list = target_0;
        addAll(target, list);
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
    var tmp_2;
    if (target.f() < this.y35_1.t35_1.f()) {
      // Inline function 'kotlin.collections.List' call
      var tmp0_List = this.y35_1.t35_1.f() - target.f() | 0;
      // Inline function 'kotlin.collections.MutableList' call
      var list_0 = ArrayList_init_$Create$(tmp0_List);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < tmp0_List)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>' call
          list_0.a(null);
        }
         while (inductionVariable_2 < tmp0_List);
      tmp_2 = plus(target, list_0);
    } else {
      tmp_2 = target;
    }
    tmp_1.e36_1 = tmp_2;
    this.g36_1 = 0;
  }
  protoOf(MultiParagraph).v36 = function () {
    var tmp;
    if (this.f36_1.k()) {
      tmp = 0.0;
    } else {
      tmp = this.f36_1.l(0).m36_1.v36();
    }
    return tmp;
  };
  protoOf(MultiParagraph).w36 = function () {
    var tmp;
    if (this.f36_1.k()) {
      tmp = 0.0;
    } else {
      // Inline function 'kotlin.with' call
      var tmp0_with = last(this.f36_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<get-lastBaseline>.<anonymous>' call
      tmp = tmp0_with.x36(tmp0_with.m36_1.w36());
    }
    return tmp;
  };
  protoOf(MultiParagraph).y36 = function (canvas, color, shadow, decoration, drawStyle, blendMode) {
    canvas.r2q();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var tmp0_fastForEach = this.f36_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.l(index);
        // Inline function 'androidx.compose.ui.text.MultiParagraph.paint.<anonymous>' call
        item.m36_1.y36(canvas, color, shadow, decoration, drawStyle, blendMode);
        canvas.u2q(0.0, item.m36_1.u21());
      }
       while (inductionVariable <= last);
    canvas.s2q();
  };
  protoOf(MultiParagraph).z36 = function (canvas, color, shadow, decoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().f2t_1 : color;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().u2v_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.y36(canvas, color, shadow, decoration, drawStyle, blendMode);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.y36.call(this, canvas, new Color(color), shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(MultiParagraph).a37 = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    drawMultiParagraph(this, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
  };
  protoOf(MultiParagraph).b37 = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode, $super) {
    var tmp;
    if (alpha === VOID) {
      FloatCompanionObject_getInstance();
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().u2v_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.a37(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.a37.call(this, canvas, brush, alpha, shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp_0;
  };
  protoOf(MultiParagraph).c37 = function (start, end) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((0 <= start ? start <= end : false) ? end <= _get_annotatedString__kqljtk(this).y34_1.length : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.getPathForRange.<anonymous>' call
      var message = 'Start(' + start + ') or End(' + end + ') is out of range [0..' + _get_annotatedString__kqljtk(this).y34_1.length + '),' + ' or start > end!';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (start === end)
      return Path();
    var paragraphIndex = findParagraphByIndex(this.f36_1, start);
    var path = Path();
    var inductionVariable = paragraphIndex;
    var last = this.f36_1.f();
    if (inductionVariable < last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var p = this.f36_1.l(i);
        if (p.n36_1 >= end)
          break $l$loop_0;
        if (p.n36_1 === p.o36_1)
          continue $l$loop_0;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        path.h2w(p.e37(p.m36_1.c37(p.d37(start), p.d37(end))));
      }
       while (inductionVariable < last);
    return path;
  };
  protoOf(MultiParagraph).f37 = function (vertical) {
    var paragraphIndex = vertical <= 0.0 ? 0 : vertical >= this.c36_1 ? get_lastIndex(this.f36_1) : findParagraphByY(this.f36_1, vertical);
    // Inline function 'kotlin.with' call
    var tmp0_with = this.f36_1.l(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineForVerticalPosition.<anonymous>' call
    var tmp;
    if (tmp0_with.r6() === 0) {
      // Inline function 'kotlin.math.max' call
      var tmp0_max = tmp0_with.n36_1 - 1 | 0;
      tmp = Math.max(0, tmp0_max);
    } else {
      tmp = tmp0_with.h37(tmp0_with.m36_1.f37(tmp0_with.g37(vertical)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).i37 = function (position) {
    var paragraphIndex = _Offset___get_y__impl__8bzhra(position) <= 0.0 ? 0 : _Offset___get_y__impl__8bzhra(position) >= this.c36_1 ? get_lastIndex(this.f36_1) : findParagraphByY(this.f36_1, _Offset___get_y__impl__8bzhra(position));
    // Inline function 'kotlin.with' call
    var tmp0_with = this.f36_1.l(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getOffsetForPosition.<anonymous>' call
    var tmp;
    if (tmp0_with.r6() === 0) {
      // Inline function 'kotlin.math.max' call
      var tmp0_max = tmp0_with.n36_1 - 1 | 0;
      tmp = Math.max(0, tmp0_max);
    } else {
      tmp = tmp0_with.k37(tmp0_with.m36_1.i37(tmp0_with.j37(position)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).l37 = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.f36_1, lineIndex);
    // Inline function 'kotlin.with' call
    var tmp0_with = this.f36_1.l(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineTop.<anonymous>' call
    return tmp0_with.x36(tmp0_with.m36_1.l37(tmp0_with.m37(lineIndex)));
  };
  protoOf(MultiParagraph).n37 = function (lineIndex, visibleEnd) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.f36_1, lineIndex);
    // Inline function 'kotlin.with' call
    var tmp0_with = this.f36_1.l(paragraphIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineEnd.<anonymous>' call
    return tmp0_with.k37(tmp0_with.m36_1.n37(tmp0_with.m37(lineIndex), visibleEnd));
  };
  function ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    startLineIndex = startLineIndex === VOID ? -1 : startLineIndex;
    endLineIndex = endLineIndex === VOID ? -1 : endLineIndex;
    top = top === VOID ? -1.0 : top;
    bottom = bottom === VOID ? -1.0 : bottom;
    this.m36_1 = paragraph;
    this.n36_1 = startIndex;
    this.o36_1 = endIndex;
    this.p36_1 = startLineIndex;
    this.q36_1 = endLineIndex;
    this.r36_1 = top;
    this.s36_1 = bottom;
  }
  protoOf(ParagraphInfo).r6 = function () {
    return this.o36_1 - this.n36_1 | 0;
  };
  protoOf(ParagraphInfo).d37 = function (_this__u8e3s4) {
    return coerceIn(_this__u8e3s4, this.n36_1, this.o36_1) - this.n36_1 | 0;
  };
  protoOf(ParagraphInfo).k37 = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.n36_1 | 0;
  };
  protoOf(ParagraphInfo).m37 = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.p36_1 | 0;
  };
  protoOf(ParagraphInfo).h37 = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.p36_1 | 0;
  };
  protoOf(ParagraphInfo).x36 = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.r36_1;
  };
  protoOf(ParagraphInfo).g37 = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.r36_1;
  };
  protoOf(ParagraphInfo).j37 = function (_this__u8e3s4) {
    return Offset(_Offset___get_x__impl__xvi35n(_this__u8e3s4), _Offset___get_y__impl__8bzhra(_this__u8e3s4) - this.r36_1);
  };
  protoOf(ParagraphInfo).u36 = function (_this__u8e3s4) {
    return _this__u8e3s4.v21(Offset(0.0, this.r36_1));
  };
  protoOf(ParagraphInfo).e37 = function (_this__u8e3s4) {
    _this__u8e3s4.i2w(Offset(0.0, this.r36_1));
    return _this__u8e3s4;
  };
  protoOf(ParagraphInfo).toString = function () {
    return 'ParagraphInfo(paragraph=' + this.m36_1 + ', startIndex=' + this.n36_1 + ', endIndex=' + this.o36_1 + ', startLineIndex=' + this.p36_1 + ', endLineIndex=' + this.q36_1 + ', top=' + this.r36_1 + ', bottom=' + this.s36_1 + ')';
  };
  protoOf(ParagraphInfo).hashCode = function () {
    var result = hashCode(this.m36_1);
    result = imul(result, 31) + this.n36_1 | 0;
    result = imul(result, 31) + this.o36_1 | 0;
    result = imul(result, 31) + this.p36_1 | 0;
    result = imul(result, 31) + this.q36_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.r36_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s36_1) | 0;
    return result;
  };
  protoOf(ParagraphInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphInfo ? other : THROW_CCE();
    if (!equals(this.m36_1, tmp0_other_with_cast.m36_1))
      return false;
    if (!(this.n36_1 === tmp0_other_with_cast.n36_1))
      return false;
    if (!(this.o36_1 === tmp0_other_with_cast.o36_1))
      return false;
    if (!(this.p36_1 === tmp0_other_with_cast.p36_1))
      return false;
    if (!(this.q36_1 === tmp0_other_with_cast.q36_1))
      return false;
    if (!equals(this.r36_1, tmp0_other_with_cast.r36_1))
      return false;
    if (!equals(this.s36_1, tmp0_other_with_cast.s36_1))
      return false;
    return true;
  };
  function findParagraphByIndex(paragraphInfoList, index) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.f() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.l(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByIndex.<anonymous>' call
        var cmp = midVal.n36_1 > index ? 1 : midVal.o36_1 <= index ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function findParagraphByY(paragraphInfoList, y) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.f() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.l(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByY.<anonymous>' call
        var cmp = midVal.r36_1 > y ? 1 : midVal.s36_1 <= y ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function findParagraphByLineIndex(paragraphInfoList, lineIndex) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.f() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.l(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByLineIndex.<anonymous>' call
        var cmp = midVal.p36_1 > lineIndex ? 1 : midVal.q36_1 <= lineIndex ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function resolveTextDirection($this, style, defaultStyle) {
    var tmp;
    var tmp_0 = style.f35_1;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.resolveTextDirection.<anonymous>' call
      tmp = style;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? style.o37(VOID, defaultStyle.f35_1) : tmp1_elvis_lhs;
  }
  function MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var tmp0_fastMaxBy = this$0.w35_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_fastMaxBy.k()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0_fastMaxBy.l(0);
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var tmp1_anonymous = maxElem;
        tmp$ret$1 = tmp1_anonymous.h36_1.n2h();
        var maxValue = tmp$ret$1;
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0_fastMaxBy);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0_fastMaxBy.l(i);
            var tmp$ret$2;
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            tmp$ret$2 = e.h36_1.n2h();
            var v = tmp$ret$2;
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h36_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n2h();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        var tmp0_fastMaxBy = this$0.w35_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_fastMaxBy.k()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0_fastMaxBy.l(0);
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var tmp1_anonymous = maxElem;
        tmp$ret$1 = tmp1_anonymous.h36_1.o2h();
        var maxValue = tmp$ret$1;
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0_fastMaxBy);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0_fastMaxBy.l(i);
            var tmp$ret$2;
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            tmp$ret$2 = e.h36_1.o2h();
            var v = tmp$ret$2;
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h36_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.o2h();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver) {
    this.s35_1 = annotatedString;
    this.t35_1 = placeholders;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.u35_1 = lazy(tmp_0, MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.v35_1 = lazy(tmp_2, MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this));
    var paragraphStyle = style.t37();
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle' call
    var tmp0_mapEachParagraphStyle = this.s35_1;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var tmp0_fastMap = normalizedParagraphStyles(tmp0_mapEachParagraphStyle, paragraphStyle);
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(tmp0_fastMap.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastMap.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastMap.l(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle.<anonymous>' call
        var annotatedString_0 = substringWithoutParagraphStyles(tmp0_mapEachParagraphStyle, item.t34_1, item.u34_1);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<anonymous>' call
        var currentParagraphStyle = resolveTextDirection(this, item.s34_1, paragraphStyle);
        var tmp0_plusAssign = new ParagraphIntrinsicInfo(ParagraphIntrinsics_0(annotatedString_0.y34_1, style.u37(currentParagraphStyle), annotatedString_0.d35(), getLocalPlaceholders(this.t35_1, item.t34_1, item.u34_1), density, fontFamilyResolver), item.t34_1, item.u34_1);
        target.a(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    tmp_3.w35_1 = target;
    this.x35_1 = 0;
  }
  protoOf(MultiParagraphIntrinsics).n2h = function () {
    // Inline function 'kotlin.getValue' call
    minIntrinsicWidth$factory();
    return this.u35_1.w1();
  };
  protoOf(MultiParagraphIntrinsics).o2h = function () {
    // Inline function 'kotlin.getValue' call
    maxIntrinsicWidth$factory();
    return this.v35_1.w1();
  };
  protoOf(MultiParagraphIntrinsics).v37 = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      var tmp0_fastAny = this.w35_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAny.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAny.l(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<get-hasStaleResolvedFonts>.<anonymous>' call
          if (item.h36_1.v37()) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  };
  function ParagraphIntrinsicInfo(intrinsics, startIndex, endIndex) {
    this.h36_1 = intrinsics;
    this.i36_1 = startIndex;
    this.j36_1 = endIndex;
  }
  protoOf(ParagraphIntrinsicInfo).toString = function () {
    return 'ParagraphIntrinsicInfo(intrinsics=' + this.h36_1 + ', startIndex=' + this.i36_1 + ', endIndex=' + this.j36_1 + ')';
  };
  protoOf(ParagraphIntrinsicInfo).hashCode = function () {
    var result = hashCode(this.h36_1);
    result = imul(result, 31) + this.i36_1 | 0;
    result = imul(result, 31) + this.j36_1 | 0;
    return result;
  };
  protoOf(ParagraphIntrinsicInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphIntrinsicInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphIntrinsicInfo ? other : THROW_CCE();
    if (!equals(this.h36_1, tmp0_other_with_cast.h36_1))
      return false;
    if (!(this.i36_1 === tmp0_other_with_cast.i36_1))
      return false;
    if (!(this.j36_1 === tmp0_other_with_cast.j36_1))
      return false;
    return true;
  };
  function getLocalPlaceholders(_this__u8e3s4, start, end) {
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(_this__u8e3s4.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.l(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        if (intersect(start, end, item.t34_1, item.u34_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(target.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.l(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(start <= item_0.t34_1 ? item_0.u34_1 <= end : false)) {
          // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>.<anonymous>' call
          var message = 'placeholder can not overlap with paragraph.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        var tmp0_plusAssign = Range_init_$Create$(item_0.s34_1, item_0.t34_1 - start | 0, item_0.u34_1 - start | 0);
        target_0.a(tmp0_plusAssign);
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function minIntrinsicWidth$factory() {
    return getPropertyCallableRef('minIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.n2h();
    }, null);
  }
  function maxIntrinsicWidth$factory() {
    return getPropertyCallableRef('maxIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.o2h();
    }, null);
  }
  function get_DefaultMaxLines() {
    return DefaultMaxLines;
  }
  var DefaultMaxLines;
  function ceilToInt(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.ceil' call
    tmp$ret$0 = Math.ceil(_this__u8e3s4);
    return numberToInt(tmp$ret$0);
  }
  function Paragraph(paragraphIntrinsics, constraints, maxLines, ellipsis) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    return ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints);
  }
  function Paragraph_0(text, style, constraints, density, fontFamilyResolver, spanStyles, placeholders, maxLines, ellipsis) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = placeholders;
    }
    placeholders = tmp_0;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    return ActualParagraph_0(text, style, spanStyles, placeholders, maxLines, ellipsis, constraints, density, fontFamilyResolver);
  }
  function ParagraphIntrinsics() {
  }
  function ParagraphIntrinsics_0(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = placeholders;
    }
    placeholders = tmp_0;
    return ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function get_DefaultLineHeight() {
    _init_properties_ParagraphStyle_kt__lbx7er();
    return DefaultLineHeight;
  }
  var DefaultLineHeight;
  function ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().j24_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    this.e35_1 = textAlign;
    this.f35_1 = textDirection;
    this.g35_1 = lineHeight;
    this.h35_1 = textIndent;
    this.i35_1 = platformStyle;
    this.j35_1 = lineHeightStyle;
    this.k35_1 = lineBreak;
    this.l35_1 = hyphens;
    this.m35_1 = textMotion;
    var tmp = this;
    var tmp0_elvis_lhs = this.e35_1;
    var tmp_0;
    var tmp_1 = tmp0_elvis_lhs;
    if ((tmp_1 == null ? null : new TextAlign(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_27().a38_1;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.n35_1 = tmp_0;
    var tmp_2 = this;
    var tmp0_elvis_lhs_0 = this.k35_1;
    var tmp_3;
    var tmp_4 = tmp0_elvis_lhs_0;
    if ((tmp_4 == null ? null : new LineBreak(tmp_4)) == null) {
      tmp_3 = Companion_getInstance_35().c38_1;
    } else {
      tmp_3 = tmp0_elvis_lhs_0;
    }
    tmp_2.o35_1 = tmp_3;
    var tmp_5 = this;
    var tmp0_elvis_lhs_1 = this.l35_1;
    var tmp_6;
    var tmp_7 = tmp0_elvis_lhs_1;
    if ((tmp_7 == null ? null : new Hyphens(tmp_7)) == null) {
      tmp_6 = Companion_getInstance_26().f38_1;
    } else {
      tmp_6 = tmp0_elvis_lhs_1;
    }
    tmp_5.p35_1 = tmp_6;
    if (!equals(this.g35_1, Companion_getInstance_1().j24_1)) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(_TextUnit___get_value__impl__hpbx0k(this.g35_1) >= 0.0)) {
        // Inline function 'androidx.compose.ui.text.ParagraphStyle.<anonymous>' call
        var message = "lineHeight can't be negative (" + _TextUnit___get_value__impl__hpbx0k(this.g35_1) + ')';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    this.q35_1 = 0;
  }
  protoOf(ParagraphStyle_0).r35 = function (other) {
    if (other == null)
      return this;
    return fastMerge(this, other.e35_1, other.f35_1, other.g35_1, other.h35_1, other.i35_1, other.j35_1, other.k35_1, other.l35_1, other.m35_1);
  };
  protoOf(ParagraphStyle_0).h38 = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
  };
  protoOf(ParagraphStyle_0).o37 = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    textAlign = textAlign === VOID ? this.e35_1 : textAlign;
    textDirection = textDirection === VOID ? this.f35_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.g35_1 : lineHeight;
    textIndent = textIndent === VOID ? this.h35_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.i35_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.j35_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.k35_1 : lineBreak;
    hyphens = hyphens === VOID ? this.l35_1 : hyphens;
    textMotion = textMotion === VOID ? this.m35_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.h38(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.h38;
      var tmp_1 = textAlign;
      var tmp_2 = tmp_1 == null ? null : new TextAlign(tmp_1);
      var tmp_3 = textDirection;
      var tmp_4 = tmp_3 == null ? null : new TextDirection(tmp_3);
      var tmp_5 = new TextUnit(lineHeight);
      var tmp_6 = lineBreak;
      var tmp_7 = tmp_6 == null ? null : new LineBreak(tmp_6);
      var tmp_8 = hyphens;
      tmp = tmp_0.call(this, tmp_2, tmp_4, tmp_5, textIndent, platformStyle, lineHeightStyle, tmp_7, tmp_8 == null ? null : new Hyphens(tmp_8), textMotion);
    }
    return tmp;
  };
  protoOf(ParagraphStyle_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphStyle_0))
      return false;
    var tmp = this.e35_1;
    var tmp_0 = tmp == null ? null : new TextAlign(tmp);
    var tmp_1 = other.e35_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new TextAlign(tmp_1)))
      return false;
    var tmp_2 = this.f35_1;
    var tmp_3 = tmp_2 == null ? null : new TextDirection(tmp_2);
    var tmp_4 = other.f35_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new TextDirection(tmp_4)))
      return false;
    if (!equals(this.g35_1, other.g35_1))
      return false;
    if (!equals(this.h35_1, other.h35_1))
      return false;
    if (!equals(this.i35_1, other.i35_1))
      return false;
    if (!equals(this.j35_1, other.j35_1))
      return false;
    var tmp_5 = this.k35_1;
    var tmp_6 = tmp_5 == null ? null : new LineBreak(tmp_5);
    var tmp_7 = other.k35_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new LineBreak(tmp_7)))
      return false;
    var tmp_8 = this.l35_1;
    var tmp_9 = tmp_8 == null ? null : new Hyphens(tmp_8);
    var tmp_10 = other.l35_1;
    if (!equals(tmp_9, tmp_10 == null ? null : new Hyphens(tmp_10)))
      return false;
    if (!equals(this.m35_1, other.m35_1))
      return false;
    return true;
  };
  protoOf(ParagraphStyle_0).hashCode = function () {
    var tmp0_safe_receiver = this.e35_1;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new TextAlign(tmp_0)) == null) {
      tmp = null;
    } else {
      tmp = TextAlign__hashCode_impl_s8g35y(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.f35_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new TextDirection(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = TextDirection__hashCode_impl_g63nwg(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.g35_1) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.h35_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_5 = imul(31, result);
    var tmp6_safe_receiver = this.i35_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.hashCode();
    result = tmp_5 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_6 = imul(31, result);
    var tmp8_safe_receiver = this.j35_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.hashCode();
    result = tmp_6 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp10_safe_receiver = this.k35_1;
    var tmp_8;
    var tmp_9 = tmp10_safe_receiver;
    if ((tmp_9 == null ? null : new LineBreak(tmp_9)) == null) {
      tmp_8 = null;
    } else {
      tmp_8 = LineBreak__hashCode_impl_ybksn(tmp10_safe_receiver);
    }
    var tmp11_elvis_lhs = tmp_8;
    result = tmp_7 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_10 = imul(31, result);
    var tmp12_safe_receiver = this.l35_1;
    var tmp_11;
    var tmp_12 = tmp12_safe_receiver;
    if ((tmp_12 == null ? null : new Hyphens(tmp_12)) == null) {
      tmp_11 = null;
    } else {
      tmp_11 = Hyphens__hashCode_impl_yb7t8v(tmp12_safe_receiver);
    }
    var tmp13_elvis_lhs = tmp_11;
    result = tmp_10 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.m35_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : hashCode(tmp14_safe_receiver);
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    return result;
  };
  protoOf(ParagraphStyle_0).toString = function () {
    var tmp = this.e35_1;
    var tmp_0 = 'ParagraphStyle(' + ('textAlign=' + (tmp == null ? null : new TextAlign(tmp)) + ', ');
    var tmp_1 = this.f35_1;
    var tmp_2 = tmp_0 + ('textDirection=' + (tmp_1 == null ? null : new TextDirection(tmp_1)) + ', ') + ('lineHeight=' + new TextUnit(this.g35_1) + ', ') + ('textIndent=' + this.h35_1 + ', ') + ('platformStyle=' + this.i35_1 + ', ') + ('lineHeightStyle=' + this.j35_1 + ', ');
    var tmp_3 = this.k35_1;
    var tmp_4 = tmp_2 + ('lineBreak=' + (tmp_3 == null ? null : new LineBreak(tmp_3)) + ', ');
    var tmp_5 = this.l35_1;
    return tmp_4 + ('hyphens=' + (tmp_5 == null ? null : new Hyphens(tmp_5)) + ', ') + ('textMotion=' + this.m35_1) + ')';
  };
  function fastMerge(_this__u8e3s4, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    var tmp_8 = textAlign;
    if (!((tmp_8 == null ? null : new TextAlign(tmp_8)) == null)) {
      var tmp_9 = textAlign;
      var tmp_10 = tmp_9 == null ? null : new TextAlign(tmp_9);
      var tmp_11 = _this__u8e3s4.e35_1;
      tmp_7 = !equals(tmp_10, tmp_11 == null ? null : new TextAlign(tmp_11));
    } else {
      tmp_7 = false;
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      var tmp_12;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!get_isUnspecified(lineHeight)) {
        tmp_12 = !equals(lineHeight, _this__u8e3s4.g35_1);
      } else {
        tmp_12 = false;
      }
      tmp_6 = tmp_12;
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      tmp_5 = !(textIndent == null) ? !equals(textIndent, _this__u8e3s4.h35_1) : false;
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      var tmp_13;
      var tmp_14 = textDirection;
      if (!((tmp_14 == null ? null : new TextDirection(tmp_14)) == null)) {
        var tmp_15 = textDirection;
        var tmp_16 = tmp_15 == null ? null : new TextDirection(tmp_15);
        var tmp_17 = _this__u8e3s4.f35_1;
        tmp_13 = !equals(tmp_16, tmp_17 == null ? null : new TextDirection(tmp_17));
      } else {
        tmp_13 = false;
      }
      tmp_4 = tmp_13;
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = !(platformStyle == null) ? !equals(platformStyle, _this__u8e3s4.i35_1) : false;
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = !(lineHeightStyle == null) ? !equals(lineHeightStyle, _this__u8e3s4.j35_1) : false;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      var tmp_18;
      var tmp_19 = lineBreak;
      if (!((tmp_19 == null ? null : new LineBreak(tmp_19)) == null)) {
        var tmp_20 = lineBreak;
        var tmp_21 = tmp_20 == null ? null : new LineBreak(tmp_20);
        var tmp_22 = _this__u8e3s4.k35_1;
        tmp_18 = !equals(tmp_21, tmp_22 == null ? null : new LineBreak(tmp_22));
      } else {
        tmp_18 = false;
      }
      tmp_1 = tmp_18;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      var tmp_23;
      var tmp_24 = hyphens;
      if (!((tmp_24 == null ? null : new Hyphens(tmp_24)) == null)) {
        var tmp_25 = hyphens;
        var tmp_26 = tmp_25 == null ? null : new Hyphens(tmp_25);
        var tmp_27 = _this__u8e3s4.l35_1;
        tmp_23 = !equals(tmp_26, tmp_27 == null ? null : new Hyphens(tmp_27));
      } else {
        tmp_23 = false;
      }
      tmp_0 = tmp_23;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !(textMotion == null) ? !equals(textMotion, _this__u8e3s4.m35_1) : false;
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_28;
    if (get_isUnspecified(lineHeight)) {
      tmp_28 = _this__u8e3s4.g35_1;
    } else {
      tmp_28 = lineHeight;
    }
    var tmp7_lineHeight = tmp_28;
    var tmp8_textIndent = textIndent == null ? _this__u8e3s4.h35_1 : textIndent;
    var tmp_29;
    var tmp_30 = textAlign;
    if ((tmp_30 == null ? null : new TextAlign(tmp_30)) == null) {
      tmp_29 = _this__u8e3s4.e35_1;
    } else {
      tmp_29 = textAlign;
    }
    var tmp9_textAlign = tmp_29;
    var tmp_31;
    var tmp_32 = textDirection;
    if ((tmp_32 == null ? null : new TextDirection(tmp_32)) == null) {
      tmp_31 = _this__u8e3s4.f35_1;
    } else {
      tmp_31 = textDirection;
    }
    var tmp10_textDirection = tmp_31;
    var tmp11_platformStyle = mergePlatformStyle(_this__u8e3s4, platformStyle);
    var tmp12_lineHeightStyle = lineHeightStyle == null ? _this__u8e3s4.j35_1 : lineHeightStyle;
    var tmp_33;
    var tmp_34 = lineBreak;
    if ((tmp_34 == null ? null : new LineBreak(tmp_34)) == null) {
      tmp_33 = _this__u8e3s4.k35_1;
    } else {
      tmp_33 = lineBreak;
    }
    var tmp13_lineBreak = tmp_33;
    var tmp_35;
    var tmp_36 = hyphens;
    if ((tmp_36 == null ? null : new Hyphens(tmp_36)) == null) {
      tmp_35 = _this__u8e3s4.l35_1;
    } else {
      tmp_35 = hyphens;
    }
    var tmp14_hyphens = tmp_35;
    var tmp15_textMotion = textMotion == null ? _this__u8e3s4.m35_1 : textMotion;
    return new ParagraphStyle_0(tmp9_textAlign, tmp10_textDirection, tmp7_lineHeight, tmp8_textIndent, tmp11_platformStyle, tmp12_lineHeightStyle, tmp13_lineBreak, tmp14_hyphens, tmp15_textMotion);
  }
  function mergePlatformStyle(_this__u8e3s4, other) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    if (_this__u8e3s4.i35_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.i35_1;
    return _this__u8e3s4.i35_1.j38(other);
  }
  function resolveParagraphStyleDefaults(style, direction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = resolveTextDirection_0(direction, style.f35_1);
    var tmp_0 = get_isUnspecified(style.g35_1) ? get_DefaultLineHeight() : style.g35_1;
    var tmp0_elvis_lhs = style.h35_1;
    var tmp_1 = tmp0_elvis_lhs == null ? Companion_getInstance_32().k38_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.m35_1;
    return new ParagraphStyle_0(style.n35_1, tmp, tmp_0, tmp_1, style.i35_1, style.j35_1, style.o35_1, style.p35_1, tmp1_elvis_lhs == null ? Companion_getInstance_36().l38_1 : tmp1_elvis_lhs);
  }
  var properties_initialized_ParagraphStyle_kt_y6w405;
  function _init_properties_ParagraphStyle_kt__lbx7er() {
    if (!properties_initialized_ParagraphStyle_kt_y6w405) {
      properties_initialized_ParagraphStyle_kt_y6w405 = true;
      DefaultLineHeight = Companion_getInstance_1().j24_1;
    }
  }
  function Placeholder() {
  }
  protoOf(Placeholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Placeholder))
      return false;
    if (!equals(this.n38_1, other.n38_1))
      return false;
    if (!equals(this.o38_1, other.o38_1))
      return false;
    if (!(this.p38_1 === other.p38_1))
      return false;
    return true;
  };
  protoOf(Placeholder).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.n38_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.o38_1) | 0;
    result = imul(31, result) + PlaceholderVerticalAlign__hashCode_impl_1c0k16(this.p38_1) | 0;
    return result;
  };
  function _PlaceholderVerticalAlign___init__impl__mll0or(value) {
    return value;
  }
  function Companion() {
    Companion_instance = this;
    this.q38_1 = _PlaceholderVerticalAlign___init__impl__mll0or(1);
    this.r38_1 = _PlaceholderVerticalAlign___init__impl__mll0or(2);
    this.s38_1 = _PlaceholderVerticalAlign___init__impl__mll0or(3);
    this.t38_1 = _PlaceholderVerticalAlign___init__impl__mll0or(4);
    this.u38_1 = _PlaceholderVerticalAlign___init__impl__mll0or(5);
    this.v38_1 = _PlaceholderVerticalAlign___init__impl__mll0or(6);
    this.w38_1 = _PlaceholderVerticalAlign___init__impl__mll0or(7);
  }
  var Companion_instance;
  function Companion_getInstance_13() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function PlaceholderVerticalAlign__hashCode_impl_1c0k16($this) {
    return $this;
  }
  function get_DefaultFontSize() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultFontSize;
  }
  var DefaultFontSize;
  function get_DefaultLetterSpacing() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultLetterSpacing;
  }
  var DefaultLetterSpacing;
  function get_DefaultBackgroundColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultBackgroundColor;
  }
  var DefaultBackgroundColor;
  function get_DefaultColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultColor;
  }
  var DefaultColor;
  function SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    color = color === VOID ? Companion_getInstance().f2t_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().j24_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().j24_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().f2t_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_getInstance_30().x38(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    var tmp;
    if (alpha === VOID) {
      FloatCompanionObject_getInstance();
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    fontSize = fontSize === VOID ? Companion_getInstance_1().j24_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().j24_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().f2t_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_getInstance_30().y38(brush, alpha), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle(textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    fontSize = fontSize === VOID ? Companion_getInstance_1().j24_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().j24_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().f2t_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    this.z38_1 = textForegroundStyle;
    this.a39_1 = fontSize;
    this.b39_1 = fontWeight;
    this.c39_1 = fontStyle;
    this.d39_1 = fontSynthesis;
    this.e39_1 = fontFamily;
    this.f39_1 = fontFeatureSettings;
    this.g39_1 = letterSpacing;
    this.h39_1 = baselineShift;
    this.i39_1 = textGeometricTransform;
    this.j39_1 = localeList;
    this.k39_1 = background;
    this.l39_1 = textDecoration;
    this.m39_1 = shadow;
    this.n39_1 = platformStyle;
    this.o39_1 = drawStyle;
    this.p39_1 = 0;
  }
  protoOf(SpanStyle).g32 = function () {
    return this.z38_1.g32();
  };
  protoOf(SpanStyle).q39 = function () {
    return this.z38_1.q39();
  };
  protoOf(SpanStyle).a2p = function () {
    return this.z38_1.a2p();
  };
  protoOf(SpanStyle).r39 = function (other) {
    if (other == null)
      return this;
    return fastMerge_0(this, other.z38_1.g32(), other.z38_1.q39(), other.z38_1.a2p(), other.a39_1, other.b39_1, other.c39_1, other.d39_1, other.e39_1, other.f39_1, other.g39_1, other.h39_1, other.i39_1, other.j39_1, other.k39_1, other.l39_1, other.m39_1, other.n39_1, other.o39_1);
  };
  protoOf(SpanStyle).s39 = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    var tmp;
    if (equals(color, this.g32())) {
      tmp = this.z38_1;
    } else {
      tmp = Companion_getInstance_30().x38(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
  };
  protoOf(SpanStyle).t39 = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $super) {
    color = color === VOID ? this.g32() : color;
    fontSize = fontSize === VOID ? this.a39_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.b39_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.c39_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.d39_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.e39_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.f39_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.g39_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.h39_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.i39_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.j39_1 : localeList;
    background = background === VOID ? this.k39_1 : background;
    textDecoration = textDecoration === VOID ? this.l39_1 : textDecoration;
    shadow = shadow === VOID ? this.m39_1 : shadow;
    platformStyle = platformStyle === VOID ? this.n39_1 : platformStyle;
    drawStyle = drawStyle === VOID ? this.o39_1 : drawStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.s39(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    } else {
      var tmp_0 = $super.s39;
      var tmp_1 = new Color(color);
      var tmp_2 = new TextUnit(fontSize);
      var tmp_3 = fontStyle;
      var tmp_4 = tmp_3 == null ? null : new FontStyle(tmp_3);
      var tmp_5 = fontSynthesis;
      var tmp_6 = tmp_5 == null ? null : new FontSynthesis(tmp_5);
      var tmp_7 = new TextUnit(letterSpacing);
      var tmp_8 = baselineShift;
      tmp = tmp_0.call(this, tmp_1, tmp_2, fontWeight, tmp_4, tmp_6, fontFamily, fontFeatureSettings, tmp_7, tmp_8 == null ? null : new BaselineShift(tmp_8), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, platformStyle, drawStyle);
    }
    return tmp;
  };
  protoOf(SpanStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpanStyle))
      return false;
    return this.v39(other) ? this.u39(other) : false;
  };
  protoOf(SpanStyle).v39 = function (other) {
    if (this === other)
      return true;
    if (!equals(this.a39_1, other.a39_1))
      return false;
    if (!equals(this.b39_1, other.b39_1))
      return false;
    var tmp = this.c39_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = other.c39_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.d39_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = other.d39_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.e39_1, other.e39_1))
      return false;
    if (!(this.f39_1 == other.f39_1))
      return false;
    if (!equals(this.g39_1, other.g39_1))
      return false;
    var tmp_5 = this.h39_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = other.h39_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.i39_1, other.i39_1))
      return false;
    if (!equals(this.j39_1, other.j39_1))
      return false;
    if (!equals(this.k39_1, other.k39_1))
      return false;
    if (!equals(this.n39_1, other.n39_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).u39 = function (other) {
    if (!equals(this.z38_1, other.z38_1))
      return false;
    if (!equals(this.l39_1, other.l39_1))
      return false;
    if (!equals(this.m39_1, other.m39_1))
      return false;
    if (!equals(this.o39_1, other.o39_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.g32());
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.q39();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.a2p()) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.a39_1) | 0;
    var tmp_0 = imul(31, result);
    var tmp0_safe_receiver_0 = this.b39_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.hashCode();
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.c39_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = FontStyle__hashCode_impl_7qhg4w(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.d39_1;
    var tmp_5;
    var tmp_6 = tmp4_safe_receiver;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = null;
    } else {
      tmp_5 = FontSynthesis__hashCode_impl_4wi11v(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp6_safe_receiver = this.e39_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_7 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_8 = imul(31, result);
    var tmp8_safe_receiver = this.f39_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_8 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.g39_1) | 0;
    var tmp_9 = imul(31, result);
    var tmp10_safe_receiver = this.h39_1;
    var tmp_10;
    var tmp_11 = tmp10_safe_receiver;
    if ((tmp_11 == null ? null : new BaselineShift(tmp_11)) == null) {
      tmp_10 = null;
    } else {
      tmp_10 = BaselineShift__hashCode_impl_g0potx(tmp10_safe_receiver);
    }
    var tmp11_elvis_lhs = tmp_10;
    result = tmp_9 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_12 = imul(31, result);
    var tmp12_safe_receiver = this.i39_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_12 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.j39_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.k39_1) | 0;
    var tmp_14 = imul(31, result);
    var tmp16_safe_receiver = this.l39_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_14 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    var tmp_15 = imul(31, result);
    var tmp18_safe_receiver = this.m39_1;
    var tmp19_elvis_lhs = tmp18_safe_receiver == null ? null : tmp18_safe_receiver.hashCode();
    result = tmp_15 + (tmp19_elvis_lhs == null ? 0 : tmp19_elvis_lhs) | 0;
    var tmp_16 = imul(31, result);
    var tmp20_safe_receiver = this.n39_1;
    var tmp21_elvis_lhs = tmp20_safe_receiver == null ? null : tmp20_safe_receiver.hashCode();
    result = tmp_16 + (tmp21_elvis_lhs == null ? 0 : tmp21_elvis_lhs) | 0;
    var tmp_17 = imul(31, result);
    var tmp22_safe_receiver = this.o39_1;
    var tmp23_elvis_lhs = tmp22_safe_receiver == null ? null : hashCode(tmp22_safe_receiver);
    result = tmp_17 + (tmp23_elvis_lhs == null ? 0 : tmp23_elvis_lhs) | 0;
    return result;
  };
  protoOf(SpanStyle).toString = function () {
    var tmp = 'SpanStyle(' + ('color=' + new Color(this.g32()) + ', ') + ('brush=' + this.q39() + ', ') + ('alpha=' + this.a2p() + ', ') + ('fontSize=' + new TextUnit(this.a39_1) + ', ') + ('fontWeight=' + this.b39_1 + ', ');
    var tmp_0 = this.c39_1;
    var tmp_1 = tmp + ('fontStyle=' + (tmp_0 == null ? null : new FontStyle(tmp_0)) + ', ');
    var tmp_2 = this.d39_1;
    var tmp_3 = tmp_1 + ('fontSynthesis=' + (tmp_2 == null ? null : new FontSynthesis(tmp_2)) + ', ') + ('fontFamily=' + this.e39_1 + ', ') + ('fontFeatureSettings=' + this.f39_1 + ', ') + ('letterSpacing=' + new TextUnit(this.g39_1) + ', ');
    var tmp_4 = this.h39_1;
    return tmp_3 + ('baselineShift=' + (tmp_4 == null ? null : new BaselineShift(tmp_4)) + ', ') + ('textGeometricTransform=' + this.i39_1 + ', ') + ('localeList=' + this.j39_1 + ', ') + ('background=' + new Color(this.k39_1) + ', ') + ('textDecoration=' + this.l39_1 + ', ') + ('shadow=' + this.m39_1 + ', ') + ('platformStyle=' + this.n39_1 + ', ') + ('drawStyle=' + this.o39_1) + ')';
  };
  function fastMerge_0(_this__u8e3s4, color, brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    var tmp_8;
    var tmp_9;
    var tmp_10;
    var tmp_11;
    var tmp_12;
    var tmp_13;
    var tmp_14;
    var tmp_15;
    var tmp_16;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!get_isUnspecified(fontSize)) {
      tmp_16 = !equals(fontSize, _this__u8e3s4.a39_1);
    } else {
      tmp_16 = false;
    }
    if (tmp_16) {
      tmp_15 = true;
    } else {
      var tmp_17;
      var tmp_18;
      if (brush == null) {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        tmp_18 = !equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().f2t_1));
      } else {
        tmp_18 = false;
      }
      if (tmp_18) {
        tmp_17 = !equals(color, _this__u8e3s4.z38_1.g32());
      } else {
        tmp_17 = false;
      }
      tmp_15 = tmp_17;
    }
    if (tmp_15) {
      tmp_14 = true;
    } else {
      var tmp_19;
      var tmp_20 = fontStyle;
      if (!((tmp_20 == null ? null : new FontStyle(tmp_20)) == null)) {
        var tmp_21 = fontStyle;
        var tmp_22 = tmp_21 == null ? null : new FontStyle(tmp_21);
        var tmp_23 = _this__u8e3s4.c39_1;
        tmp_19 = !equals(tmp_22, tmp_23 == null ? null : new FontStyle(tmp_23));
      } else {
        tmp_19 = false;
      }
      tmp_14 = tmp_19;
    }
    if (tmp_14) {
      tmp_13 = true;
    } else {
      tmp_13 = !(fontWeight == null) ? !equals(fontWeight, _this__u8e3s4.b39_1) : false;
    }
    if (tmp_13) {
      tmp_12 = true;
    } else {
      tmp_12 = !(fontFamily == null) ? !(fontFamily === _this__u8e3s4.e39_1) : false;
    }
    if (tmp_12) {
      tmp_11 = true;
    } else {
      var tmp_24;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!get_isUnspecified(letterSpacing)) {
        tmp_24 = !equals(letterSpacing, _this__u8e3s4.g39_1);
      } else {
        tmp_24 = false;
      }
      tmp_11 = tmp_24;
    }
    if (tmp_11) {
      tmp_10 = true;
    } else {
      tmp_10 = !(textDecoration == null) ? !equals(textDecoration, _this__u8e3s4.l39_1) : false;
    }
    if (tmp_10) {
      tmp_9 = true;
    } else {
      tmp_9 = !equals(brush, _this__u8e3s4.z38_1.q39());
    }
    if (tmp_9) {
      tmp_8 = true;
    } else {
      tmp_8 = !(brush == null) ? !(alpha === _this__u8e3s4.z38_1.a2p()) : false;
    }
    if (tmp_8) {
      tmp_7 = true;
    } else {
      var tmp_25;
      var tmp_26 = fontSynthesis;
      if (!((tmp_26 == null ? null : new FontSynthesis(tmp_26)) == null)) {
        var tmp_27 = fontSynthesis;
        var tmp_28 = tmp_27 == null ? null : new FontSynthesis(tmp_27);
        var tmp_29 = _this__u8e3s4.d39_1;
        tmp_25 = !equals(tmp_28, tmp_29 == null ? null : new FontSynthesis(tmp_29));
      } else {
        tmp_25 = false;
      }
      tmp_7 = tmp_25;
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      tmp_6 = !(fontFeatureSettings == null) ? !(fontFeatureSettings == _this__u8e3s4.f39_1) : false;
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      var tmp_30;
      var tmp_31 = baselineShift;
      if (!((tmp_31 == null ? null : new BaselineShift(tmp_31)) == null)) {
        var tmp_32 = baselineShift;
        var tmp_33 = tmp_32 == null ? null : new BaselineShift(tmp_32);
        var tmp_34 = _this__u8e3s4.h39_1;
        tmp_30 = !equals(tmp_33, tmp_34 == null ? null : new BaselineShift(tmp_34));
      } else {
        tmp_30 = false;
      }
      tmp_5 = tmp_30;
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = !(textGeometricTransform == null) ? !equals(textGeometricTransform, _this__u8e3s4.i39_1) : false;
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = !(localeList == null) ? !equals(localeList, _this__u8e3s4.j39_1) : false;
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      var tmp_35;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(background), _Color___get_value__impl__1pls5m(Companion_getInstance().f2t_1))) {
        tmp_35 = !equals(background, _this__u8e3s4.k39_1);
      } else {
        tmp_35 = false;
      }
      tmp_2 = tmp_35;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = !(shadow == null) ? !equals(shadow, _this__u8e3s4.m39_1) : false;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = !(platformStyle == null) ? !equals(platformStyle, _this__u8e3s4.n39_1) : false;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !(drawStyle == null) ? !equals(drawStyle, _this__u8e3s4.o39_1) : false;
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_36;
    if (!(brush == null)) {
      tmp_36 = Companion_getInstance_30().y38(brush, alpha);
    } else {
      tmp_36 = Companion_getInstance_30().x38(color);
    }
    var otherTextForegroundStyle = tmp_36;
    var tmp11_textForegroundStyle = _this__u8e3s4.z38_1.w39(otherTextForegroundStyle);
    var tmp12_fontFamily = fontFamily == null ? _this__u8e3s4.e39_1 : fontFamily;
    var tmp13_fontSize = !get_isUnspecified(fontSize) ? fontSize : _this__u8e3s4.a39_1;
    var tmp14_fontWeight = fontWeight == null ? _this__u8e3s4.b39_1 : fontWeight;
    var tmp_37;
    var tmp_38 = fontStyle;
    if ((tmp_38 == null ? null : new FontStyle(tmp_38)) == null) {
      tmp_37 = _this__u8e3s4.c39_1;
    } else {
      tmp_37 = fontStyle;
    }
    var tmp15_fontStyle = tmp_37;
    var tmp_39;
    var tmp_40 = fontSynthesis;
    if ((tmp_40 == null ? null : new FontSynthesis(tmp_40)) == null) {
      tmp_39 = _this__u8e3s4.d39_1;
    } else {
      tmp_39 = fontSynthesis;
    }
    var tmp16_fontSynthesis = tmp_39;
    var tmp17_fontFeatureSettings = fontFeatureSettings == null ? _this__u8e3s4.f39_1 : fontFeatureSettings;
    var tmp_41;
    if (!get_isUnspecified(letterSpacing)) {
      tmp_41 = letterSpacing;
    } else {
      tmp_41 = _this__u8e3s4.g39_1;
    }
    var tmp18_letterSpacing = tmp_41;
    var tmp_42;
    var tmp_43 = baselineShift;
    if ((tmp_43 == null ? null : new BaselineShift(tmp_43)) == null) {
      tmp_42 = _this__u8e3s4.h39_1;
    } else {
      tmp_42 = baselineShift;
    }
    var tmp19_baselineShift = tmp_42;
    var tmp20_textGeometricTransform = textGeometricTransform == null ? _this__u8e3s4.i39_1 : textGeometricTransform;
    var tmp21_localeList = localeList == null ? _this__u8e3s4.j39_1 : localeList;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_44;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(background), _Color___get_value__impl__1pls5m(Companion_getInstance().f2t_1))) {
      tmp_44 = background;
    } else {
      // Inline function 'androidx.compose.ui.text.fastMerge.<anonymous>' call
      tmp_44 = _this__u8e3s4.k39_1;
    }
    var tmp22_background = tmp_44;
    var tmp23_textDecoration = textDecoration == null ? _this__u8e3s4.l39_1 : textDecoration;
    var tmp24_shadow = shadow == null ? _this__u8e3s4.m39_1 : shadow;
    var tmp25_platformStyle = mergePlatformStyle_0(_this__u8e3s4, platformStyle);
    var tmp26_drawStyle = drawStyle == null ? _this__u8e3s4.o39_1 : drawStyle;
    return new SpanStyle(tmp11_textForegroundStyle, tmp13_fontSize, tmp14_fontWeight, tmp15_fontStyle, tmp16_fontSynthesis, tmp12_fontFamily, tmp17_fontFeatureSettings, tmp18_letterSpacing, tmp19_baselineShift, tmp20_textGeometricTransform, tmp21_localeList, tmp22_background, tmp23_textDecoration, tmp24_shadow, tmp25_platformStyle, tmp26_drawStyle);
  }
  function mergePlatformStyle_0(_this__u8e3s4, other) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (_this__u8e3s4.n39_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.n39_1;
    return _this__u8e3s4.n39_1.y39(other);
  }
  function resolveSpanStyleDefaults(style) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp = style.z38_1.z39(resolveSpanStyleDefaults$lambda);
    var tmp_0 = get_isUnspecified(style.a39_1) ? get_DefaultFontSize() : style.a39_1;
    var tmp0_elvis_lhs = style.b39_1;
    var tmp_1 = tmp0_elvis_lhs == null ? Companion_getInstance_22().m3a_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.c39_1;
    var tmp_2;
    var tmp_3 = tmp1_elvis_lhs;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_20().t3a_1;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp_4 = tmp_2;
    var tmp2_elvis_lhs = style.d39_1;
    var tmp_5;
    var tmp_6 = tmp2_elvis_lhs;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_21().w3a_1;
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    var tmp_7 = tmp_5;
    var tmp3_elvis_lhs = style.e39_1;
    var tmp_8 = tmp3_elvis_lhs == null ? Companion_getInstance_16().z3a_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = style.f39_1;
    var tmp_9 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_10;
    if (get_isUnspecified(style.g39_1)) {
      tmp_10 = get_DefaultLetterSpacing();
    } else {
      tmp_10 = style.g39_1;
    }
    var tmp_11 = tmp_10;
    var tmp5_elvis_lhs = style.h39_1;
    var tmp_12;
    var tmp_13 = tmp5_elvis_lhs;
    if ((tmp_13 == null ? null : new BaselineShift(tmp_13)) == null) {
      tmp_12 = Companion_getInstance_25().g3b_1;
    } else {
      tmp_12 = tmp5_elvis_lhs;
    }
    var tmp_14 = tmp_12;
    var tmp6_elvis_lhs = style.i39_1;
    var tmp_15 = tmp6_elvis_lhs == null ? Companion_getInstance_31().h3b_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = style.j39_1;
    var tmp_16 = tmp7_elvis_lhs == null ? Companion_getInstance_24().dw() : tmp7_elvis_lhs;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp0_takeOrElse = style.k39_1;
    var tmp_17;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance().f2t_1))) {
      tmp_17 = tmp0_takeOrElse;
    } else {
      // Inline function 'androidx.compose.ui.text.resolveSpanStyleDefaults.<anonymous>' call
      tmp_17 = get_DefaultBackgroundColor();
    }
    var tmp_18 = tmp_17;
    var tmp8_elvis_lhs = style.l39_1;
    var tmp_19 = tmp8_elvis_lhs == null ? Companion_getInstance_28().i3b_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = style.m39_1;
    var tmp_20 = tmp9_elvis_lhs == null ? Companion_getInstance_2().t2w_1 : tmp9_elvis_lhs;
    var tmp10_elvis_lhs = style.o39_1;
    return new SpanStyle(tmp, tmp_0, tmp_1, tmp_4, tmp_7, tmp_8, tmp_9, tmp_11, tmp_14, tmp_15, tmp_16, tmp_18, tmp_19, tmp_20, style.n39_1, tmp10_elvis_lhs == null ? Fill_getInstance() : tmp10_elvis_lhs);
  }
  function resolveSpanStyleDefaults$lambda() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return Companion_getInstance_30().x38(get_DefaultColor());
  }
  var properties_initialized_SpanStyle_kt_cqbdlj;
  function _init_properties_SpanStyle_kt__ixg4k5() {
    if (!properties_initialized_SpanStyle_kt_cqbdlj) {
      properties_initialized_SpanStyle_kt_cqbdlj = true;
      DefaultFontSize = get_sp(14);
      DefaultLetterSpacing = get_sp(0);
      DefaultBackgroundColor = Companion_getInstance().e2t_1;
      DefaultColor = Companion_getInstance().t2s_1;
    }
  }
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.b(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.l(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.b(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.b(truncated);
    }
    buffer.b(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.b(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.b(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.i5(element.h5_1);
        } else {
          _this__u8e3s4.b(toString_0(element));
        }
      }
    }
  }
  function TextLayoutResult(layoutInput, multiParagraph, size) {
    this.l3b_1 = layoutInput;
    this.m3b_1 = multiParagraph;
    this.n3b_1 = size;
    this.o3b_1 = this.m3b_1.v36();
    this.p3b_1 = this.m3b_1.w36();
    this.q3b_1 = this.m3b_1.e36_1;
    this.r3b_1 = 8;
  }
  protoOf(TextLayoutResult).s3b = function () {
    return this.m3b_1.a36_1 ? true : _IntSize___get_height__impl__prv63b(this.n3b_1) < this.m3b_1.c36_1;
  };
  protoOf(TextLayoutResult).t3b = function () {
    return _IntSize___get_width__impl__d9yl4o(this.n3b_1) < this.m3b_1.b36_1;
  };
  protoOf(TextLayoutResult).u3b = function () {
    return this.t3b() ? true : this.s3b();
  };
  protoOf(TextLayoutResult).k36 = function () {
    return this.m3b_1.d36_1;
  };
  protoOf(TextLayoutResult).n37 = function (lineIndex, visibleEnd) {
    return this.m3b_1.n37(lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).l37 = function (lineIndex) {
    return this.m3b_1.l37(lineIndex);
  };
  protoOf(TextLayoutResult).f37 = function (vertical) {
    return this.m3b_1.f37(vertical);
  };
  protoOf(TextLayoutResult).i37 = function (position) {
    return this.m3b_1.i37(position);
  };
  protoOf(TextLayoutResult).c37 = function (start, end) {
    return this.m3b_1.c37(start, end);
  };
  protoOf(TextLayoutResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutResult))
      return false;
    if (!this.l3b_1.equals(other.l3b_1))
      return false;
    if (!equals(this.m3b_1, other.m3b_1))
      return false;
    if (!equals(this.n3b_1, other.n3b_1))
      return false;
    if (!(this.o3b_1 === other.o3b_1))
      return false;
    if (!(this.p3b_1 === other.p3b_1))
      return false;
    if (!equals(this.q3b_1, other.q3b_1))
      return false;
    return true;
  };
  protoOf(TextLayoutResult).hashCode = function () {
    var result = this.l3b_1.hashCode();
    result = imul(31, result) + hashCode(this.m3b_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.n3b_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.o3b_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.p3b_1) | 0;
    result = imul(31, result) + hashCode(this.q3b_1) | 0;
    return result;
  };
  protoOf(TextLayoutResult).toString = function () {
    return 'TextLayoutResult(' + ('layoutInput=' + this.l3b_1 + ', ') + ('multiParagraph=' + this.m3b_1 + ', ') + ('size=' + new IntSize(this.n3b_1) + ', ') + ('firstBaseline=' + this.o3b_1 + ', ') + ('lastBaseline=' + this.p3b_1 + ', ') + ('placeholderRects=' + this.q3b_1) + ')';
  };
  function TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, null, fontFamilyResolver, constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    return TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, objectCreate(protoOf(TextLayoutInput)));
  }
  function TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, fontFamilyResolver, constraints) {
    this.v3b_1 = text;
    this.w3b_1 = style;
    this.x3b_1 = placeholders;
    this.y3b_1 = maxLines;
    this.z3b_1 = softWrap;
    this.a3c_1 = overflow;
    this.b3c_1 = density;
    this.c3c_1 = layoutDirection;
    this.d3c_1 = fontFamilyResolver;
    this.e3c_1 = constraints;
    this.f3c_1 = resourceLoader;
    this.g3c_1 = 8;
  }
  protoOf(TextLayoutInput).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutInput))
      return false;
    if (!this.v3b_1.equals(other.v3b_1))
      return false;
    if (!this.w3b_1.equals(other.w3b_1))
      return false;
    if (!equals(this.x3b_1, other.x3b_1))
      return false;
    if (!(this.y3b_1 === other.y3b_1))
      return false;
    if (!(this.z3b_1 === other.z3b_1))
      return false;
    if (!(this.a3c_1 === other.a3c_1))
      return false;
    if (!equals(this.b3c_1, other.b3c_1))
      return false;
    if (!this.c3c_1.equals(other.c3c_1))
      return false;
    if (!equals(this.d3c_1, other.d3c_1))
      return false;
    if (!equals(this.e3c_1, other.e3c_1))
      return false;
    return true;
  };
  protoOf(TextLayoutInput).hashCode = function () {
    var result = this.v3b_1.hashCode();
    result = imul(31, result) + this.w3b_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.x3b_1) | 0;
    result = imul(31, result) + this.y3b_1 | 0;
    result = imul(31, result) + (this.z3b_1 | 0) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.a3c_1) | 0;
    result = imul(31, result) + hashCode(this.b3c_1) | 0;
    result = imul(31, result) + this.c3c_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.d3c_1) | 0;
    result = imul(31, result) + Constraints__hashCode_impl_ij7484(this.e3c_1) | 0;
    return result;
  };
  protoOf(TextLayoutInput).toString = function () {
    return 'TextLayoutInput(' + ('text=' + this.v3b_1 + ', ') + ('style=' + this.w3b_1 + ', ') + ('placeholders=' + this.x3b_1 + ', ') + ('maxLines=' + this.y3b_1 + ', ') + ('softWrap=' + this.z3b_1 + ', ') + ('overflow=' + new TextOverflow(this.a3c_1) + ', ') + ('density=' + this.b3c_1 + ', ') + ('layoutDirection=' + this.c3c_1 + ', ') + ('fontFamilyResolver=' + this.d3c_1 + ', ') + ('constraints=' + new Constraints_0(this.e3c_1)) + ')';
  };
  var DefaultCacheSize;
  function TextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    TextStyle.call($this, spanStyle, paragraphStyle, createPlatformTextStyleInternal(spanStyle.n39_1, paragraphStyle.i35_1));
    return $this;
  }
  function TextStyle_init_$Create$_0(spanStyle, paragraphStyle) {
    return TextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $this) {
    color = color === VOID ? Companion_getInstance().f2t_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().j24_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().j24_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().f2t_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? null : textAlign;
    textDirection = textDirection === VOID ? null : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().j24_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? null : lineBreak;
    hyphens = hyphens === VOID ? null : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp = SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.h3c_1, drawStyle);
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.i3c_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, objectCreate(protoOf(TextStyle)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.k3c_1 = TextStyle_init_$Create$_1();
  }
  var Companion_instance_0;
  function Companion_getInstance_14() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function TextStyle(spanStyle, paragraphStyle, platformStyle) {
    Companion_getInstance_14();
    platformStyle = platformStyle === VOID ? null : platformStyle;
    this.p37_1 = spanStyle;
    this.q37_1 = paragraphStyle;
    this.r37_1 = platformStyle;
    this.s37_1 = 0;
  }
  protoOf(TextStyle).l3c = function () {
    return this.p37_1;
  };
  protoOf(TextStyle).t37 = function () {
    return this.q37_1;
  };
  protoOf(TextStyle).m3c = function (other) {
    if (other == null ? true : equals(other, Companion_getInstance_14().k3c_1))
      return this;
    return TextStyle_init_$Create$_0(this.l3c().r39(other.l3c()), this.t37().r35(other.t37()));
  };
  protoOf(TextStyle).u37 = function (other) {
    return TextStyle_init_$Create$_0(this.l3c(), this.t37().r35(other));
  };
  protoOf(TextStyle).n3c = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp;
    if (equals(color, this.p37_1.g32())) {
      tmp = this.p37_1.z38_1;
    } else {
      tmp = Companion_getInstance_30().x38(color);
    }
    var tmp_0 = tmp;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.h3c_1, drawStyle);
    return new TextStyle(tmp_1, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.i3c_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).o3c = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    color = color === VOID ? this.p37_1.g32() : color;
    fontSize = fontSize === VOID ? this.p37_1.a39_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.p37_1.b39_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.p37_1.c39_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.p37_1.d39_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.p37_1.e39_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.p37_1.f39_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.p37_1.g39_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.p37_1.h39_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.p37_1.i39_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.p37_1.j39_1 : localeList;
    background = background === VOID ? this.p37_1.k39_1 : background;
    textDecoration = textDecoration === VOID ? this.p37_1.l39_1 : textDecoration;
    shadow = shadow === VOID ? this.p37_1.m39_1 : shadow;
    drawStyle = drawStyle === VOID ? this.p37_1.o39_1 : drawStyle;
    textAlign = textAlign === VOID ? this.q37_1.e35_1 : textAlign;
    textDirection = textDirection === VOID ? this.q37_1.f35_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.q37_1.g35_1 : lineHeight;
    textIndent = textIndent === VOID ? this.q37_1.h35_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.r37_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.q37_1.j35_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.q37_1.k35_1 : lineBreak;
    hyphens = hyphens === VOID ? this.q37_1.l35_1 : hyphens;
    textMotion = textMotion === VOID ? this.q37_1.m35_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.n3c(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.n3c;
      var tmp_1 = new Color(color);
      var tmp_2 = new TextUnit(fontSize);
      var tmp_3 = fontStyle;
      var tmp_4 = tmp_3 == null ? null : new FontStyle(tmp_3);
      var tmp_5 = fontSynthesis;
      var tmp_6 = tmp_5 == null ? null : new FontSynthesis(tmp_5);
      var tmp_7 = new TextUnit(letterSpacing);
      var tmp_8 = baselineShift;
      var tmp_9 = tmp_8 == null ? null : new BaselineShift(tmp_8);
      var tmp_10 = new Color(background);
      var tmp_11 = textAlign;
      var tmp_12 = tmp_11 == null ? null : new TextAlign(tmp_11);
      var tmp_13 = textDirection;
      var tmp_14 = tmp_13 == null ? null : new TextDirection(tmp_13);
      var tmp_15 = new TextUnit(lineHeight);
      var tmp_16 = lineBreak;
      var tmp_17 = tmp_16 == null ? null : new LineBreak(tmp_16);
      var tmp_18 = hyphens;
      tmp = tmp_0.call(this, tmp_1, tmp_2, fontWeight, tmp_4, tmp_6, fontFamily, fontFeatureSettings, tmp_7, tmp_9, textGeometricTransform, localeList, tmp_10, textDecoration, shadow, drawStyle, tmp_12, tmp_14, tmp_15, textIndent, platformStyle, lineHeightStyle, tmp_17, tmp_18 == null ? null : new Hyphens(tmp_18), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).p3c = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp = SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.h3c_1, drawStyle);
    return new TextStyle(tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.i3c_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).q3c = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    alpha = alpha === VOID ? this.p37_1.a2p() : alpha;
    fontSize = fontSize === VOID ? this.p37_1.a39_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.p37_1.b39_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.p37_1.c39_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.p37_1.d39_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.p37_1.e39_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.p37_1.f39_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.p37_1.g39_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.p37_1.h39_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.p37_1.i39_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.p37_1.j39_1 : localeList;
    background = background === VOID ? this.p37_1.k39_1 : background;
    textDecoration = textDecoration === VOID ? this.p37_1.l39_1 : textDecoration;
    shadow = shadow === VOID ? this.p37_1.m39_1 : shadow;
    drawStyle = drawStyle === VOID ? this.p37_1.o39_1 : drawStyle;
    textAlign = textAlign === VOID ? this.q37_1.e35_1 : textAlign;
    textDirection = textDirection === VOID ? this.q37_1.f35_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.q37_1.g35_1 : lineHeight;
    textIndent = textIndent === VOID ? this.q37_1.h35_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.r37_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.q37_1.j35_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.q37_1.k35_1 : lineBreak;
    hyphens = hyphens === VOID ? this.q37_1.l35_1 : hyphens;
    textMotion = textMotion === VOID ? this.q37_1.m35_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.p3c(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.p3c;
      var tmp_1 = new TextUnit(fontSize);
      var tmp_2 = fontStyle;
      var tmp_3 = tmp_2 == null ? null : new FontStyle(tmp_2);
      var tmp_4 = fontSynthesis;
      var tmp_5 = tmp_4 == null ? null : new FontSynthesis(tmp_4);
      var tmp_6 = new TextUnit(letterSpacing);
      var tmp_7 = baselineShift;
      var tmp_8 = tmp_7 == null ? null : new BaselineShift(tmp_7);
      var tmp_9 = new Color(background);
      var tmp_10 = textAlign;
      var tmp_11 = tmp_10 == null ? null : new TextAlign(tmp_10);
      var tmp_12 = textDirection;
      var tmp_13 = tmp_12 == null ? null : new TextDirection(tmp_12);
      var tmp_14 = new TextUnit(lineHeight);
      var tmp_15 = lineBreak;
      var tmp_16 = tmp_15 == null ? null : new LineBreak(tmp_15);
      var tmp_17 = hyphens;
      tmp = tmp_0.call(this, brush, alpha, tmp_1, fontWeight, tmp_3, tmp_5, fontFamily, fontFeatureSettings, tmp_6, tmp_8, textGeometricTransform, localeList, tmp_9, textDecoration, shadow, drawStyle, tmp_11, tmp_13, tmp_14, textIndent, platformStyle, lineHeightStyle, tmp_16, tmp_17 == null ? null : new Hyphens(tmp_17), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).q39 = function () {
    return this.p37_1.q39();
  };
  protoOf(TextStyle).g32 = function () {
    return this.p37_1.g32();
  };
  protoOf(TextStyle).a2p = function () {
    return this.p37_1.a2p();
  };
  protoOf(TextStyle).r3c = function () {
    return this.p37_1.a39_1;
  };
  protoOf(TextStyle).s3c = function () {
    return this.p37_1.b39_1;
  };
  protoOf(TextStyle).t3c = function () {
    return this.p37_1.c39_1;
  };
  protoOf(TextStyle).u3c = function () {
    return this.p37_1.d39_1;
  };
  protoOf(TextStyle).v3c = function () {
    return this.p37_1.e39_1;
  };
  protoOf(TextStyle).w3c = function () {
    return this.p37_1.f39_1;
  };
  protoOf(TextStyle).x3c = function () {
    return this.p37_1.g39_1;
  };
  protoOf(TextStyle).y3c = function () {
    return this.p37_1.h39_1;
  };
  protoOf(TextStyle).z3c = function () {
    return this.p37_1.i39_1;
  };
  protoOf(TextStyle).a3d = function () {
    return this.p37_1.j39_1;
  };
  protoOf(TextStyle).b3d = function () {
    return this.p37_1.k39_1;
  };
  protoOf(TextStyle).c3d = function () {
    return this.p37_1.l39_1;
  };
  protoOf(TextStyle).d3d = function () {
    return this.p37_1.m39_1;
  };
  protoOf(TextStyle).e3d = function () {
    return this.p37_1.o39_1;
  };
  protoOf(TextStyle).f3d = function () {
    return this.q37_1.e35_1;
  };
  protoOf(TextStyle).g3d = function () {
    return this.q37_1.f35_1;
  };
  protoOf(TextStyle).h3d = function () {
    return this.q37_1.g35_1;
  };
  protoOf(TextStyle).i3d = function () {
    return this.q37_1.h35_1;
  };
  protoOf(TextStyle).j3d = function () {
    return this.q37_1.j35_1;
  };
  protoOf(TextStyle).k3d = function () {
    return this.q37_1.l35_1;
  };
  protoOf(TextStyle).l3d = function () {
    return this.q37_1.k35_1;
  };
  protoOf(TextStyle).m3d = function () {
    return this.q37_1.m35_1;
  };
  protoOf(TextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStyle))
      return false;
    if (!this.p37_1.equals(other.p37_1))
      return false;
    if (!this.q37_1.equals(other.q37_1))
      return false;
    if (!equals(this.r37_1, other.r37_1))
      return false;
    return true;
  };
  protoOf(TextStyle).n3d = function (other) {
    return this === other ? true : this.q37_1.equals(other.q37_1) ? this.p37_1.v39(other.p37_1) : false;
  };
  protoOf(TextStyle).o3d = function (other) {
    return this === other ? true : this.p37_1.u39(other.p37_1);
  };
  protoOf(TextStyle).hashCode = function () {
    var result = this.p37_1.hashCode();
    result = imul(31, result) + this.q37_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.r37_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextStyle).toString = function () {
    var tmp = 'TextStyle(' + ('color=' + new Color(this.g32()) + ', ') + ('brush=' + this.q39() + ', ') + ('alpha=' + this.a2p() + ', ') + ('fontSize=' + new TextUnit(this.r3c()) + ', ') + ('fontWeight=' + this.s3c() + ', ');
    var tmp_0 = this.t3c();
    var tmp_1 = tmp + ('fontStyle=' + (tmp_0 == null ? null : new FontStyle(tmp_0)) + ', ');
    var tmp_2 = this.u3c();
    var tmp_3 = tmp_1 + ('fontSynthesis=' + (tmp_2 == null ? null : new FontSynthesis(tmp_2)) + ', ') + ('fontFamily=' + this.v3c() + ', ') + ('fontFeatureSettings=' + this.w3c() + ', ') + ('letterSpacing=' + new TextUnit(this.x3c()) + ', ');
    var tmp_4 = this.y3c();
    var tmp_5 = tmp_3 + ('baselineShift=' + (tmp_4 == null ? null : new BaselineShift(tmp_4)) + ', ') + ('textGeometricTransform=' + this.z3c() + ', ') + ('localeList=' + this.a3d() + ', ') + ('background=' + new Color(this.b3d()) + ', ') + ('textDecoration=' + this.c3d() + ', ') + ('shadow=' + this.d3d() + ', ') + ('drawStyle=' + this.e3d() + ', ');
    var tmp_6 = this.f3d();
    var tmp_7 = tmp_5 + ('textAlign=' + (tmp_6 == null ? null : new TextAlign(tmp_6)) + ', ');
    var tmp_8 = this.g3d();
    var tmp_9 = tmp_7 + ('textDirection=' + (tmp_8 == null ? null : new TextDirection(tmp_8)) + ', ') + ('lineHeight=' + new TextUnit(this.h3d()) + ', ') + ('textIndent=' + this.i3d() + ', ') + ('platformStyle=' + this.r37_1 + ', ') + ('lineHeightStyle=' + this.j3d() + ', ');
    var tmp_10 = this.l3d();
    var tmp_11 = tmp_9 + ('lineBreak=' + (tmp_10 == null ? null : new LineBreak(tmp_10)) + ', ');
    var tmp_12 = this.k3d();
    return tmp_11 + ('hyphens=' + (tmp_12 == null ? null : new Hyphens(tmp_12)) + ', ') + ('textMotion=' + this.m3d()) + ')';
  };
  function createPlatformTextStyleInternal(platformSpanStyle, platformParagraphStyle) {
    var tmp;
    if (platformSpanStyle == null ? platformParagraphStyle == null : false) {
      tmp = null;
    } else {
      tmp = createPlatformTextStyle(platformSpanStyle, platformParagraphStyle);
    }
    return tmp;
  }
  function resolveDefaults(style, direction) {
    return new TextStyle(resolveSpanStyleDefaults(style.p37_1), resolveParagraphStyleDefaults(style.q37_1, direction), style.r37_1);
  }
  function resolveTextDirection_0(layoutDirection, textDirection) {
    var tmp;
    var tmp_0 = textDirection;
    if (equals(tmp_0 == null ? null : new TextDirection(tmp_0), new TextDirection(Companion_getInstance_29().r3d_1))) {
      var tmp_1;
      switch (layoutDirection.w4_1) {
        case 0:
          tmp_1 = Companion_getInstance_29().s3d_1;
          break;
        case 1:
          tmp_1 = Companion_getInstance_29().t3d_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_1;
    } else {
      var tmp_2 = textDirection;
      if ((tmp_2 == null ? null : new TextDirection(tmp_2)) == null) {
        var tmp_3;
        switch (layoutDirection.w4_1) {
          case 0:
            tmp_3 = Companion_getInstance_29().p3d_1;
            break;
          case 1:
            tmp_3 = Companion_getInstance_29().q3d_1;
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_3;
      } else {
        tmp = textDirection;
      }
    }
    return tmp;
  }
  function get_EMPTY_INTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_INTS;
  }
  var EMPTY_INTS;
  function get_EMPTY_OBJECTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  function binarySearchInternal(_this__u8e3s4, size, value) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var lo = 0;
    var hi = size - 1 | 0;
    while (lo <= hi) {
      var mid = (lo + hi | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (midVal < value) {
        lo = mid + 1 | 0;
      } else if (midVal > value) {
        hi = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return ~lo;
  }
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function _init_properties_ContainerHelpers_kt__6fon4s() {
    if (!properties_initialized_ContainerHelpers_kt_9fe6be) {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_OBJECTS = fillArrayVal(Array(0), null);
    }
  }
  function LruCache_init_$Init$(maxSize, $this) {
    LruCache.call($this);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(maxSize > 0)) {
      // Inline function 'androidx.compose.ui.text.caches.LruCache.<init>.<anonymous>' call
      var message = 'maxSize <= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.y3d_1 = maxSize;
    $this.v3d_1 = HashMap_init_$Create$(0, 0.75);
    $this.w3d_1 = LinkedHashSet_init_$Create$();
    return $this;
  }
  function LruCache_init_$Create$(maxSize) {
    return LruCache_init_$Init$(maxSize, objectCreate(protoOf(LruCache)));
  }
  function safeSizeOf($this, key, value) {
    var result = $this.e3e(key, value);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(result >= 0)) {
      // Inline function 'androidx.compose.ui.text.caches.LruCache.safeSizeOf.<anonymous>' call
      var message = 'Negative size: ' + key + '=' + value;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return result;
  }
  protoOf(LruCache).f = function () {
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.u3d_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    return this.x3d_1;
  };
  protoOf(LruCache).l2 = function (key) {
    var mapValue = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.u3d_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.ui.text.caches.LruCache.get.<anonymous>' call
    mapValue = this.v3d_1.l2(key);
    var tmp;
    if (!(mapValue == null)) {
      this.w3d_1.c7(key);
      this.w3d_1.a(key);
      this.c3e_1 = this.c3e_1 + 1 | 0;
      return mapValue;
    } else {
      var tmp3 = this.d3e_1;
      this.d3e_1 = tmp3 + 1 | 0;
      tmp = tmp3;
    }
    var createdValue = this.f3e(key);
    if (createdValue == null) {
      return null;
    }
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.u3d_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.a3e_1 = this.a3e_1 + 1 | 0;
    var previousValue = this.v3d_1.g3(key, createdValue);
    this.w3d_1.c7(key);
    this.w3d_1.a(key);
    var tmp_0;
    if (!(previousValue == null)) {
      this.v3d_1.g3(key, previousValue);
      mapValue = previousValue;
      tmp_0 = Unit_getInstance();
    } else {
      this.x3d_1 = this.f() + safeSizeOf(this, key, createdValue) | 0;
      tmp_0 = Unit_getInstance();
    }
    if (!(mapValue == null)) {
      this.h3e(false, key, createdValue, mapValue);
      return mapValue;
    } else {
      this.g3e(this.y3d_1);
      return createdValue;
    }
  };
  protoOf(LruCache).g3 = function (key, value) {
    if (key == null ? true : value == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.u3d_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.ui.text.caches.LruCache.put.<anonymous>' call
    this.z3d_1 = this.z3d_1 + 1 | 0;
    this.x3d_1 = this.f() + safeSizeOf(this, key, value) | 0;
    previous = this.v3d_1.g3(key, value);
    if (!(previous == null)) {
      this.x3d_1 = this.f() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
    }
    if (this.w3d_1.m(key)) {
      this.w3d_1.c7(key);
    }
    this.w3d_1.a(key);
    if (!(previous == null)) {
      this.h3e(false, key, ensureNotNull(previous), value);
    }
    this.g3e(this.y3d_1);
    return previous;
  };
  protoOf(LruCache).g3e = function (maxSize) {
    $l$loop: while (true) {
      var key = null;
      var value = null;
      // Inline function 'androidx.compose.ui.text.synchronized' call
      this.u3d_1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      if ((this.f() < 0 ? true : this.v3d_1.k() ? !(this.f() === 0) : false) ? true : !(this.v3d_1.k() === this.w3d_1.k())) {
        throw IllegalStateException_init_$Create$('map/keySet size inconsistency');
      }
      var tmp;
      if (this.f() > maxSize ? !this.v3d_1.k() : false) {
        key = first(this.w3d_1);
        // Inline function 'kotlin.collections.get' call
        var tmp0_get = this.v3d_1;
        var tmp1_get = key;
        var tmp0_elvis_lhs = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).l2(tmp1_get);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('inconsistent state');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        value = tmp_0;
        // Inline function 'kotlin.collections.remove' call
        var tmp2_remove = this.v3d_1;
        var tmp3_remove = key;
        (isInterface(tmp2_remove, MutableMap) ? tmp2_remove : THROW_CCE()).j8(tmp3_remove);
        // Inline function 'kotlin.collections.remove' call
        var tmp4_remove = this.w3d_1;
        var tmp5_remove = key;
        (isInterface(tmp4_remove, MutableCollection) ? tmp4_remove : THROW_CCE()).c7(tmp5_remove);
        this.x3d_1 = this.f() - safeSizeOf(this, ensureNotNull(key), ensureNotNull(value)) | 0;
        this.b3e_1 = this.b3e_1 + 1 | 0;
        tmp = Unit_getInstance();
      }
      if (key == null ? value == null : false) {
        break $l$loop;
      } else {
        this.h3e(true, ensureNotNull(key), ensureNotNull(value), null);
      }
    }
  };
  protoOf(LruCache).j8 = function (key) {
    if (key == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.u3d_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    previous = this.v3d_1.j8(key);
    this.w3d_1.c7(key);
    var tmp;
    if (!(previous == null)) {
      this.x3d_1 = this.f() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
      tmp = Unit_getInstance();
    }
    if (!(previous == null)) {
      this.h3e(false, key, ensureNotNull(previous), null);
    }
    return previous;
  };
  protoOf(LruCache).h3e = function (evicted, key, oldValue, newValue) {
  };
  protoOf(LruCache).f3e = function (key) {
    return null;
  };
  protoOf(LruCache).e3e = function (key, value) {
    return 1;
  };
  protoOf(LruCache).toString = function () {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.u3d_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var accesses = this.c3e_1 + this.d3e_1 | 0;
    var hitPercent = !(accesses === 0) ? imul(100, this.c3e_1) / accesses | 0 : 0;
    return 'LruCache[maxSize=' + this.y3d_1 + ',hits=' + this.c3e_1 + ',misses=' + this.d3e_1 + ',' + ('hitRate=' + hitPercent + '%]');
  };
  function LruCache() {
    this.u3d_1 = createSynchronizedObject();
    this.x3d_1 = 0;
    this.y3d_1 = 0;
    this.z3d_1 = 0;
    this.a3e_1 = 0;
    this.b3e_1 = 0;
    this.c3e_1 = 0;
    this.d3e_1 = 0;
  }
  function SimpleArrayMap_init_$Init$(capacity, $this) {
    capacity = capacity === VOID ? 0 : capacity;
    SimpleArrayMap.call($this);
    if (capacity === 0) {
      $this.i3e_1 = get_EMPTY_INTS();
      $this.j3e_1 = get_EMPTY_OBJECTS();
    } else {
      $this.i3e_1 = new Int32Array(capacity);
      var tmp = $this;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = capacity << 1;
      tmp.j3e_1 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    }
    $this.k3e_1 = 0;
    return $this;
  }
  function SimpleArrayMap_init_$Create$(capacity) {
    return SimpleArrayMap_init_$Init$(capacity, objectCreate(protoOf(SimpleArrayMap)));
  }
  protoOf(SimpleArrayMap).l3e = function (key, hash) {
    var N = this.k3e_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.i3e_1, N, hash);
    if (index < 0) {
      return index;
    }
    if (equals(key, this.j3e_1[index << 1])) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N ? this.i3e_1[end] === hash : false) {
      if (equals(key, this.j3e_1[end << 1]))
        return end;
      end = end + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 ? this.i3e_1[i] === hash : false) {
      if (equals(key, this.j3e_1[i << 1]))
        return i;
      i = i - 1 | 0;
    }
    return ~end;
  };
  protoOf(SimpleArrayMap).m3e = function () {
    var N = this.k3e_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.i3e_1, N, 0);
    if (index < 0) {
      return index;
    }
    if (null == this.j3e_1[index << 1]) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N ? this.i3e_1[end] === 0 : false) {
      if (null == this.j3e_1[end << 1])
        return end;
      end = end + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 ? this.i3e_1[i] === 0 : false) {
      if (null == this.j3e_1[i << 1])
        return i;
      i = i - 1 | 0;
    }
    return ~end;
  };
  protoOf(SimpleArrayMap).f2 = function (key) {
    return this.n3e(key) >= 0;
  };
  protoOf(SimpleArrayMap).n3e = function (key) {
    return key == null ? this.m3e() : this.l3e(key, hashCode(key));
  };
  protoOf(SimpleArrayMap).l2 = function (key) {
    var index = this.n3e(key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.j3e_1[(index << 1) + 1 | 0];
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SimpleArrayMap).o3e = function (index) {
    var tmp = this.j3e_1[index << 1];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(SimpleArrayMap).p3e = function (index) {
    var tmp = this.j3e_1[(index << 1) + 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(SimpleArrayMap).k = function () {
    return this.k3e_1 <= 0;
  };
  protoOf(SimpleArrayMap).g3 = function (key, value) {
    var osize = this.k3e_1;
    var hash;
    var index;
    if (key == null) {
      hash = 0;
      index = this.m3e();
    } else {
      hash = hashCode(key);
      index = this.l3e(key, hash);
    }
    if (index >= 0) {
      index = (index << 1) + 1 | 0;
      var tmp = this.j3e_1[index];
      var old = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      this.j3e_1[index] = value;
      return old;
    }
    index = ~index;
    if (osize >= this.i3e_1.length) {
      var n = osize >= 8 ? osize + (osize >> 1) | 0 : osize >= 4 ? 8 : 4;
      if (false) {
        println('SimpleArrayMap put: grow from ' + this.i3e_1.length + ' to ' + n);
      }
      this.i3e_1 = copyOf(this.i3e_1, n);
      this.j3e_1 = copyOf_0(this.j3e_1, n << 1);
      if (!(osize === this.k3e_1)) {
        throw ConcurrentModificationException_init_$Create$();
      }
    }
    if (index < osize) {
      if (false) {
        println('SimpleArrayMap put: move ' + index + '-' + (osize - index | 0) + ' to ' + (index + 1 | 0));
      }
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.i3e_1;
      var tmp1_copyInto = this.i3e_1;
      var tmp2_copyInto = index + 1 | 0;
      var tmp3_copyInto = index;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = tmp0_copyInto;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, tmp1_copyInto, tmp2_copyInto, tmp3_copyInto, osize);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = this.j3e_1;
      var tmp5_copyInto = this.j3e_1;
      var tmp6_copyInto = (index + 1 | 0) << 1;
      var tmp7_copyInto = index << 1;
      var tmp8_copyInto = this.k3e_1 << 1;
      arrayCopy(tmp4_copyInto, tmp5_copyInto, tmp6_copyInto, tmp7_copyInto, tmp8_copyInto);
    }
    if (!(osize === this.k3e_1) ? true : index >= this.i3e_1.length) {
      throw ConcurrentModificationException_init_$Create$();
    }
    this.i3e_1[index] = hash;
    this.j3e_1[index << 1] = key;
    this.j3e_1[(index << 1) + 1 | 0] = value;
    this.k3e_1 = this.k3e_1 + 1 | 0;
    return null;
  };
  protoOf(SimpleArrayMap).equals = function (other) {
    if (this === other) {
      return true;
    }
    try {
      if (other instanceof SimpleArrayMap) {
        var map = other instanceof SimpleArrayMap ? other : THROW_CCE();
        if (!(this.k3e_1 === map.k3e_1)) {
          return false;
        }
        var inductionVariable = 0;
        var last = this.k3e_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var key = this.o3e(i);
            var mine = this.p3e(i);
            var theirs = map.l2(key);
            if (mine == null) {
              if (!(theirs == null) ? true : !map.f2(key)) {
                return false;
              }
            } else if (!equals(mine, theirs)) {
              return false;
            }
          }
           while (inductionVariable < last);
        return true;
      } else {
        if (!(other == null) ? isInterface(other, Map) : false) {
          var map_0 = other;
          if (!(this.k3e_1 === map_0.f())) {
            return false;
          }
          var inductionVariable_0 = 0;
          var last_0 = this.k3e_1;
          if (inductionVariable_0 < last_0)
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var key_0 = this.o3e(i_0);
              var mine_0 = this.p3e(i_0);
              // Inline function 'kotlin.collections.get' call
              var theirs_0 = (isInterface(map_0, Map) ? map_0 : THROW_CCE()).l2(key_0);
              if (mine_0 == null) {
                var tmp;
                if (!(theirs_0 == null)) {
                  tmp = true;
                } else {
                  // Inline function 'kotlin.collections.containsKey' call
                  tmp = !(isInterface(map_0, Map) ? map_0 : THROW_CCE()).f2(key_0);
                }
                if (tmp) {
                  return false;
                }
              } else if (!equals(mine_0, theirs_0)) {
                return false;
              }
            }
             while (inductionVariable_0 < last_0);
          return true;
        }
      }
    } catch ($p) {
      if ($p instanceof NullPointerException) {
        var ignored = $p;
      } else {
        if ($p instanceof ClassCastException) {
          var ignored_0 = $p;
        } else {
          throw $p;
        }
      }
    }
    return false;
  };
  protoOf(SimpleArrayMap).hashCode = function () {
    var hashes = this.i3e_1;
    var array = this.j3e_1;
    var result = 0;
    var i = 0;
    var v = 1;
    var s = this.k3e_1;
    while (i < s) {
      var value = array[v];
      var tmp = result;
      var tmp_0 = hashes[i];
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      result = tmp + (tmp_0 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
      i = i + 1 | 0;
      v = v + 2 | 0;
    }
    return result;
  };
  protoOf(SimpleArrayMap).toString = function () {
    if (this.k()) {
      return '{}';
    }
    var buffer = StringBuilder_init_$Create$_0(imul(this.k3e_1, 28));
    buffer.i5(_Char___init__impl__6a9atx(123));
    var inductionVariable = 0;
    var last = this.k3e_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          buffer.bc(', ');
        }
        var key = this.o3e(i);
        if (!(key === this)) {
          buffer.ac(key);
        } else {
          buffer.bc('(this Map)');
        }
        buffer.i5(_Char___init__impl__6a9atx(61));
        var value = this.p3e(i);
        if (!(value === this)) {
          buffer.ac(value);
        } else {
          buffer.bc('(this Map)');
        }
      }
       while (inductionVariable < last);
    buffer.i5(_Char___init__impl__6a9atx(125));
    return buffer.toString();
  };
  function SimpleArrayMap() {
    this.k3e_1 = 0;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.q3e_1 = new Long(15000, 0);
  }
  var Companion_instance_1;
  function Companion_getInstance_15() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Font() {
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.z3a_1 = new DefaultFontFamily();
    this.a3b_1 = new GenericFontFamily('sans-serif', 'FontFamily.SansSerif');
    this.b3b_1 = new GenericFontFamily('serif', 'FontFamily.Serif');
    this.c3b_1 = new GenericFontFamily('monospace', 'FontFamily.Monospace');
    this.d3b_1 = new GenericFontFamily('cursive', 'FontFamily.Cursive');
  }
  var Companion_instance_2;
  function Companion_getInstance_16() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function FontFamily(canLoadSynchronously) {
    Companion_getInstance_16();
    this.w3e_1 = canLoadSynchronously;
    this.x3e_1 = 0;
  }
  function SystemFontFamily() {
    FontFamily.call(this, true);
    this.a3f_1 = 0;
  }
  function DefaultFontFamily() {
    SystemFontFamily.call(this);
  }
  protoOf(DefaultFontFamily).toString = function () {
    return 'FontFamily.Default';
  };
  function GenericFontFamily(name, fontFamilyName) {
    SystemFontFamily.call(this);
    this.e3f_1 = name;
    this.f3f_1 = fontFamilyName;
    this.g3f_1 = 0;
  }
  protoOf(GenericFontFamily).toString = function () {
    return this.f3f_1;
  };
  function FontListFontFamily() {
  }
  function LoadedFontFamily() {
  }
  function FileBasedFontFamily() {
  }
  function get_GlobalTypefaceRequestCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalTypefaceRequestCache;
  }
  var GlobalTypefaceRequestCache;
  function get_GlobalAsyncTypefaceCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalAsyncTypefaceCache;
  }
  var GlobalAsyncTypefaceCache;
  function TypefaceRequestCache$runCached$lambda(this$0, $typefaceRequest) {
    return function (finalResult) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.text.synchronized' call
      var tmp0_synchronized = this$0.h3f_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp;
      if (finalResult.j3f()) {
        this$0.i3f_1.g3($typefaceRequest, finalResult);
        tmp = Unit_getInstance();
      } else {
        this$0.i3f_1.j8($typefaceRequest);
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function TypefaceRequestCache() {
    this.h3f_1 = createSynchronizedObject();
    this.i3f_1 = LruCache_init_$Create$(16);
  }
  protoOf(TypefaceRequestCache).k3f = function (typefaceRequest, resolveTypeface) {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.h3f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>' call
    var tmp0_safe_receiver = this.i3f_1.l2(typefaceRequest);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>.<anonymous>' call
      var tmp_0;
      if (tmp0_safe_receiver.j3f()) {
        return tmp0_safe_receiver;
      } else {
        tmp_0 = this.i3f_1.j8(typefaceRequest);
      }
      tmp = tmp_0;
    }
    var tmp_1;
    try {
      tmp_1 = resolveTypeface(TypefaceRequestCache$runCached$lambda(this, typefaceRequest));
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var cause = $p;
        throw IllegalStateException_init_$Create$_0('Could not load font', cause);
      } else {
        throw $p;
      }
    }
    var currentTypefaceResult = tmp_1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.h3f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp_3;
    if (this.i3f_1.l2(typefaceRequest) == null ? currentTypefaceResult.j3f() : false) {
      this.i3f_1.g3(typefaceRequest, currentTypefaceResult);
      tmp_3 = Unit_getInstance();
    }
    return currentTypefaceResult;
  };
  function TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    this.l3f_1 = fontFamily;
    this.m3f_1 = fontWeight;
    this.n3f_1 = fontStyle;
    this.o3f_1 = fontSynthesis;
    this.p3f_1 = resourceLoaderCacheKey;
  }
  protoOf(TypefaceRequest).q3f = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    return new TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).r3f = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey, $super) {
    fontFamily = fontFamily === VOID ? this.l3f_1 : fontFamily;
    fontWeight = fontWeight === VOID ? this.m3f_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.n3f_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.o3f_1 : fontSynthesis;
    resourceLoaderCacheKey = resourceLoaderCacheKey === VOID ? this.p3f_1 : resourceLoaderCacheKey;
    return $super === VOID ? this.q3f(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) : $super.q3f.call(this, fontFamily, fontWeight, new FontStyle(fontStyle), new FontSynthesis(fontSynthesis), resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).toString = function () {
    return 'TypefaceRequest(fontFamily=' + this.l3f_1 + ', fontWeight=' + this.m3f_1 + ', fontStyle=' + new FontStyle(this.n3f_1) + ', fontSynthesis=' + new FontSynthesis(this.o3f_1) + ', resourceLoaderCacheKey=' + toString_0(this.p3f_1) + ')';
  };
  protoOf(TypefaceRequest).hashCode = function () {
    var result = this.l3f_1 == null ? 0 : hashCode(this.l3f_1);
    result = imul(result, 31) + this.m3f_1.hashCode() | 0;
    result = imul(result, 31) + FontStyle__hashCode_impl_7qhg4w(this.n3f_1) | 0;
    result = imul(result, 31) + FontSynthesis__hashCode_impl_4wi11v(this.o3f_1) | 0;
    result = imul(result, 31) + (this.p3f_1 == null ? 0 : hashCode(this.p3f_1)) | 0;
    return result;
  };
  protoOf(TypefaceRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypefaceRequest))
      return false;
    var tmp0_other_with_cast = other instanceof TypefaceRequest ? other : THROW_CCE();
    if (!equals(this.l3f_1, tmp0_other_with_cast.l3f_1))
      return false;
    if (!this.m3f_1.equals(tmp0_other_with_cast.m3f_1))
      return false;
    if (!(this.n3f_1 === tmp0_other_with_cast.n3f_1))
      return false;
    if (!(this.o3f_1 === tmp0_other_with_cast.o3f_1))
      return false;
    if (!equals(this.p3f_1, tmp0_other_with_cast.p3f_1))
      return false;
    return true;
  };
  function Immutable(value, cacheable) {
    cacheable = cacheable === VOID ? true : cacheable;
    this.s3f_1 = value;
    this.t3f_1 = cacheable;
    this.u3f_1 = 0;
  }
  protoOf(Immutable).w1 = function () {
    return this.s3f_1;
  };
  protoOf(Immutable).j3f = function () {
    return this.t3f_1;
  };
  function Async(current) {
    this.v3f_1 = current;
    this.w3f_1 = 0;
  }
  protoOf(Async).w1 = function () {
    return this.v3f_1.w1();
  };
  protoOf(Async).j3f = function () {
    return this.v3f_1.d3g_1;
  };
  function resolve($this, typefaceRequest) {
    var result = $this.g3g_1.k3f(typefaceRequest, FontFamilyResolverImpl$resolve$lambda($this, typefaceRequest));
    return result;
  }
  function FontFamilyResolverImpl$createDefaultTypeface$lambda(this$0) {
    return function (it) {
      return resolve(this$0, it.r3f(null)).w1();
    };
  }
  function FontFamilyResolverImpl$resolve$lambda(this$0, $typefaceRequest) {
    return function (onAsyncCompletion) {
      var tmp0_elvis_lhs = this$0.h3g_1.m3g($typefaceRequest, this$0.e3g_1, onAsyncCompletion, this$0.j3g_1);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.i3g_1.m3g($typefaceRequest, this$0.e3g_1, onAsyncCompletion, this$0.j3g_1) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('Could not load font');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function FontFamilyResolverImpl(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter) {
    platformResolveInterceptor = platformResolveInterceptor === VOID ? Companion_getInstance_17().n3g_1 : platformResolveInterceptor;
    typefaceRequestCache = typefaceRequestCache === VOID ? get_GlobalTypefaceRequestCache() : typefaceRequestCache;
    fontListFontFamilyTypefaceAdapter = fontListFontFamilyTypefaceAdapter === VOID ? new FontListFontFamilyTypefaceAdapter(get_GlobalAsyncTypefaceCache()) : fontListFontFamilyTypefaceAdapter;
    platformFamilyTypefaceAdapter = platformFamilyTypefaceAdapter === VOID ? new PlatformFontFamilyTypefaceAdapter() : platformFamilyTypefaceAdapter;
    this.e3g_1 = platformFontLoader;
    this.f3g_1 = platformResolveInterceptor;
    this.g3g_1 = typefaceRequestCache;
    this.h3g_1 = fontListFontFamilyTypefaceAdapter;
    this.i3g_1 = platformFamilyTypefaceAdapter;
    var tmp = this;
    tmp.j3g_1 = FontFamilyResolverImpl$createDefaultTypeface$lambda(this);
  }
  protoOf(FontFamilyResolverImpl).o3g = function (fontFamily, fontWeight, fontStyle, fontSynthesis) {
    return resolve(this, new TypefaceRequest(this.f3g_1.p3g(fontFamily), this.f3g_1.q3g(fontWeight), this.f3g_1.r3g(fontStyle), this.f3g_1.s3g(fontSynthesis), this.e3g_1.t3g()));
  };
  function PlatformResolveInterceptor$Companion$Default$1() {
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    tmp.n3g_1 = new PlatformResolveInterceptor$Companion$Default$1();
  }
  var Companion_instance_3;
  function Companion_getInstance_17() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function PlatformResolveInterceptor() {
  }
  var properties_initialized_FontFamilyResolver_kt_43uw85;
  function _init_properties_FontFamilyResolver_kt__lawdt3() {
    if (!properties_initialized_FontFamilyResolver_kt_43uw85) {
      properties_initialized_FontFamilyResolver_kt_43uw85 = true;
      GlobalTypefaceRequestCache = new TypefaceRequestCache();
      GlobalAsyncTypefaceCache = new AsyncTypefaceCache();
    }
  }
  function _AsyncTypefaceResult___init__impl__h4msax(result) {
    return result;
  }
  function _AsyncTypefaceResult___get_result__impl__kpcqqb($this) {
    return $this;
  }
  function _AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca($this) {
    return _AsyncTypefaceResult___get_result__impl__kpcqqb($this) == null;
  }
  function AsyncTypefaceResult__toString_impl_imltdd($this) {
    return 'AsyncTypefaceResult(result=' + toString_0($this) + ')';
  }
  function AsyncTypefaceResult__hashCode_impl_34k3fi($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function AsyncTypefaceResult__equals_impl_4qqxz2($this, other) {
    if (!(other instanceof AsyncTypefaceResult))
      return false;
    var tmp0_other_with_cast = other instanceof AsyncTypefaceResult ? other.u3g_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function AsyncTypefaceResult(result) {
    this.u3g_1 = result;
  }
  protoOf(AsyncTypefaceResult).toString = function () {
    return AsyncTypefaceResult__toString_impl_imltdd(this.u3g_1);
  };
  protoOf(AsyncTypefaceResult).hashCode = function () {
    return AsyncTypefaceResult__hashCode_impl_34k3fi(this.u3g_1);
  };
  protoOf(AsyncTypefaceResult).equals = function (other) {
    return AsyncTypefaceResult__equals_impl_4qqxz2(this.u3g_1, other);
  };
  function Key(font, loaderKey) {
    this.v3g_1 = font;
    this.w3g_1 = loaderKey;
  }
  protoOf(Key).toString = function () {
    return 'Key(font=' + this.v3g_1 + ', loaderKey=' + toString_0(this.w3g_1) + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = hashCode(this.v3g_1);
    result = imul(result, 31) + (this.w3g_1 == null ? 0 : hashCode(this.w3g_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!equals(this.v3g_1, tmp0_other_with_cast.v3g_1))
      return false;
    if (!equals(this.w3g_1, tmp0_other_with_cast.w3g_1))
      return false;
    return true;
  };
  function $runCachedCOROUTINE$1(_this__u8e3s4, font, platformFontLoader, forever, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f3h_1 = _this__u8e3s4;
    this.g3h_1 = font;
    this.h3h_1 = platformFontLoader;
    this.i3h_1 = forever;
    this.j3h_1 = block;
  }
  protoOf($runCachedCOROUTINE$1).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 2;
            this.k3h_1 = new Key(this.g3h_1, this.h3h_1.t3g());
            this.f3h_1.o3h_1;
            var tmp0_elvis_lhs = this.f3h_1.m3h_1.l2(this.k3h_1);
            var priorResult = tmp0_elvis_lhs == null ? this.f3h_1.n3h_1.l2(this.k3h_1) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              return _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.u3g_1);
            }

            this.xd_1 = 1;
            suspendResult = this.j3h_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1_also = suspendResult;
            this.f3h_1.o3h_1;
            if (tmp1_also == null) {
              this.f3h_1.n3h_1.g3(this.k3h_1, new AsyncTypefaceResult(this.f3h_1.l3h_1));
            } else if (this.i3h_1) {
              this.f3h_1.n3h_1.g3(this.k3h_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(tmp1_also)));
            } else {
              this.f3h_1.m3h_1.g3(this.k3h_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(tmp1_also)));
            }

            return tmp1_also;
          case 2:
            throw this.ae_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 2) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  function AsyncTypefaceCache() {
    this.l3h_1 = _AsyncTypefaceResult___init__impl__h4msax(null);
    this.m3h_1 = LruCache_init_$Create$(16);
    this.n3h_1 = SimpleArrayMap_init_$Create$();
    this.o3h_1 = createSynchronizedObject();
  }
  protoOf(AsyncTypefaceCache).p3h = function (font, platformFontLoader, result, forever) {
    var key = new Key(font, platformFontLoader.t3g());
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.o3h_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.put.<anonymous>' call
    var tmp;
    if (result == null) {
      tmp = this.n3h_1.g3(key, new AsyncTypefaceResult(this.l3h_1));
    } else if (forever) {
      tmp = this.n3h_1.g3(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    } else {
      tmp = this.m3h_1.g3(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    }
  };
  protoOf(AsyncTypefaceCache).q3h = function (font, platformFontLoader, result, forever, $super) {
    forever = forever === VOID ? false : forever;
    var tmp;
    if ($super === VOID) {
      this.p3h(font, platformFontLoader, result, forever);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.p3h.call(this, font, platformFontLoader, result, forever);
    }
    return tmp;
  };
  protoOf(AsyncTypefaceCache).r3h = function (font, platformFontLoader) {
    var key = new Key(font, platformFontLoader.t3g());
    // Inline function 'androidx.compose.ui.text.synchronized' call
    this.o3h_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.get.<anonymous>' call
    var tmp0_elvis_lhs = this.m3h_1.l2(key);
    return tmp0_elvis_lhs == null ? this.n3h_1.l2(key) : tmp0_elvis_lhs;
  };
  protoOf(AsyncTypefaceCache).s3h = function (font, platformFontLoader, forever, block, $completion) {
    var tmp = new $runCachedCOROUTINE$1(this, font, platformFontLoader, forever, block, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  function _set_value__lx0xdg($this, _set____db54di) {
    value$factory();
    return $this.c3g_1.bu(_set____db54di);
  }
  function AsyncFontListLoader$load$slambda(this$0, $item, resultContinuation) {
    this.b3i_1 = this$0;
    this.c3i_1 = $item;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$load$slambda).d3i = function ($completion) {
    var tmp = this.e3i($completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(AsyncFontListLoader$load$slambda).f3i = function ($completion) {
    return this.d3i($completion);
  };
  protoOf(AsyncFontListLoader$load$slambda).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 2;
            this.xd_1 = 1;
            suspendResult = this.b3i_1.g3i(this.c3i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.ae_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 2) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  protoOf(AsyncFontListLoader$load$slambda).e3i = function (completion) {
    return new AsyncFontListLoader$load$slambda(this.b3i_1, this.c3i_1, completion);
  };
  function AsyncFontListLoader$load$slambda_0(this$0, $item, resultContinuation) {
    var i = new AsyncFontListLoader$load$slambda(this$0, $item, resultContinuation);
    var l = function ($completion) {
      return i.d3i($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    this.p3i_1 = this$0;
    this.q3i_1 = $this_loadWithTimeoutOrNull;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).s3i = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.h1h($this$withTimeoutOrNull, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).se = function (p1, $completion) {
    return this.s3i((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 2;
            this.xd_1 = 1;
            suspendResult = this.p3i_1.b3g_1.t3i(this.q3i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.ae_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 2) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).h1h = function ($this$withTimeoutOrNull, completion) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this.p3i_1, this.q3i_1, completion);
    i.r3i_1 = $this$withTimeoutOrNull;
    return i;
  };
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.s3i($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $loadCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c3j_1 = _this__u8e3s4;
  }
  protoOf($loadCOROUTINE$2).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 12;
            this.xd_1 = 1;
            continue $sm;
          case 1:
            this.xd_1 = 2;
            continue $sm;
          case 2:
            this.yd_1 = 11;
            var tmp_0 = this;
            tmp_0.f3j_1 = this.c3j_1.x3f_1;
            this.g3j_1 = get_indices(this.f3j_1).c();
            this.xd_1 = 3;
            continue $sm;
          case 3:
            if (!this.g3j_1.d()) {
              this.xd_1 = 9;
              continue $sm;
            }

            this.h3j_1 = this.g3j_1.e();
            this.i3j_1 = this.f3j_1.l(this.h3j_1);
            if (this.i3j_1.s3e() === Companion_getInstance_19().v3e_1) {
              this.xd_1 = 4;
              suspendResult = this.c3j_1.z3f_1.s3h(this.i3j_1, this.c3j_1.b3g_1, false, AsyncFontListLoader$load$slambda_0(this.c3j_1, this.i3j_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.xd_1 = 7;
              continue $sm;
            }

          case 4:
            this.j3j_1 = suspendResult;
            if (!(this.j3j_1 == null)) {
              _set_value__lx0xdg(this.c3j_1, synthesizeTypeface(this.c3j_1.y3f_1.o3f_1, this.j3j_1, this.i3j_1, this.c3j_1.y3f_1.m3f_1, this.c3j_1.y3f_1.n3f_1));
              this.e3j_1 = Unit_getInstance();
              this.yd_1 = 12;
              this.xd_1 = 8;
              continue $sm;
            } else {
              this.xd_1 = 5;
              suspendResult = yield_0(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            this.xd_1 = 6;
            continue $sm;
          case 6:
            this.xd_1 = 7;
            continue $sm;
          case 7:
            this.xd_1 = 3;
            continue $sm;
          case 8:
            var shouldCache = get_isActive(this.t3());
            this.c3j_1.d3g_1 = false;
            this.c3j_1.a3g_1(new Immutable(this.c3j_1.w1(), shouldCache));
            return Unit_getInstance();
          case 9:
            this.d3j_1 = Unit_getInstance();
            this.yd_1 = 12;
            this.xd_1 = 10;
            continue $sm;
          case 10:
            var shouldCache_0 = get_isActive(this.t3());
            this.c3j_1.d3g_1 = false;
            this.c3j_1.a3g_1(new Immutable(this.c3j_1.w1(), shouldCache_0));
            return Unit_getInstance();
          case 11:
            this.yd_1 = 12;
            var t = this.ae_1;
            var shouldCache_1 = get_isActive(this.t3());
            this.c3j_1.d3g_1 = false;
            this.c3j_1.a3g_1(new Immutable(this.c3j_1.w1(), shouldCache_1));
            throw t;
          case 12:
            throw this.ae_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 12) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  function $loadWithTimeoutOrNullCOROUTINE$3(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s3j_1 = _this__u8e3s4;
    this.t3j_1 = _this__u8e3s4_0;
  }
  protoOf($loadWithTimeoutOrNullCOROUTINE$3).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 3;
            this.yd_1 = 2;
            this.xd_1 = 1;
            Companion_getInstance_15();
            var tmp_0 = new Long(15000, 0);
            suspendResult = withTimeoutOrNull(tmp_0, AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this.s3j_1, this.t3j_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u3j_1 = suspendResult;
            this.yd_1 = 3;
            this.xd_1 = 4;
            continue $sm;
          case 2:
            this.yd_1 = 3;
            var tmp_1 = this.ae_1;
            if (tmp_1 instanceof CancellationException) {
              var cancel = this.ae_1;
              var tmp_2 = this;
              var tmp_3;
              if (get_isActive(this.t3())) {
                tmp_3 = null;
              } else {
                throw cancel;
              }
              tmp_2.u3j_1 = tmp_3;
              this.xd_1 = 4;
              continue $sm;
            } else {
              var tmp_4 = this.ae_1;
              if (tmp_4 instanceof Exception) {
                var uncaughtFontLoadException = this.ae_1;
                var tmp_5 = this;
                var tmp0_safe_receiver = this.t3().j4(Key_getInstance());
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.bk(this.t3(), IllegalStateException_init_$Create$_0('Unable to load font ' + this.t3j_1, uncaughtFontLoadException));
                }
                tmp_5.u3j_1 = null;
                this.xd_1 = 4;
                continue $sm;
              } else {
                throw this.ae_1;
              }
            }

          case 3:
            throw this.ae_1;
          case 4:
            this.yd_1 = 3;
            return this.u3j_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 3) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  function AsyncFontListLoader(fontList, initialType, typefaceRequest, asyncTypefaceCache, onCompletion, platformFontLoader) {
    this.x3f_1 = fontList;
    this.y3f_1 = typefaceRequest;
    this.z3f_1 = asyncTypefaceCache;
    this.a3g_1 = onCompletion;
    this.b3g_1 = platformFontLoader;
    this.c3g_1 = mutableStateOf(initialType);
    this.d3g_1 = true;
  }
  protoOf(AsyncFontListLoader).w1 = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    value$factory_0();
    return this.c3g_1.w1();
  };
  protoOf(AsyncFontListLoader).v3j = function ($completion) {
    var tmp = new $loadCOROUTINE$2(this, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(AsyncFontListLoader).g3i = function (_this__u8e3s4, $completion) {
    var tmp = new $loadWithTimeoutOrNullCOROUTINE$3(this, _this__u8e3s4, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(_no_name_provided__qut3iv).bk = function (context, exception) {
    // Inline function 'androidx.compose.ui.text.font.Companion.DropExceptionHandler.<anonymous>' call
    return Unit_getInstance();
  };
  function Companion_4() {
    Companion_instance_4 = this;
    this.x3j_1 = new FontMatcher();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp.y3j_1 = new _no_name_provided__qut3iv();
  }
  var Companion_instance_4;
  function Companion_getInstance_18() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation) {
    this.h3k_1 = $asyncLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).g1h = function ($this$launch, $completion) {
    var tmp = this.h1h($this$launch, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).se = function (p1, $completion) {
    return this.g1h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 2;
            this.xd_1 = 1;
            suspendResult = this.h3k_1.v3j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.ae_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 2) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).h1h = function ($this$launch, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda(this.h3k_1, completion);
    i.i3k_1 = $this$launch;
    return i;
  };
  function FontListFontFamilyTypefaceAdapter$resolve$slambda_0($asyncLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.g1h($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter(asyncTypefaceCache, injectedContext) {
    Companion_getInstance_18();
    asyncTypefaceCache = asyncTypefaceCache === VOID ? new AsyncTypefaceCache() : asyncTypefaceCache;
    injectedContext = injectedContext === VOID ? EmptyCoroutineContext_getInstance() : injectedContext;
    this.k3g_1 = asyncTypefaceCache;
    this.l3g_1 = CoroutineScope_0(Companion_getInstance_18().y3j_1.q4(injectedContext).q4(SupervisorJob(injectedContext.j4(Key_getInstance_0()))));
  }
  protoOf(FontListFontFamilyTypefaceAdapter).m3g = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.l3f_1;
    if (!(tmp instanceof FontListFontFamily))
      return null;
    var matched = Companion_getInstance_18().x3j_1.m3k(typefaceRequest.l3f_1.l3k_1, typefaceRequest.m3f_1, typefaceRequest.n3f_1);
    var tmp0_container = firstImmediatelyAvailable(matched, typefaceRequest, this.k3g_1, platformFontLoader, createDefaultTypeface);
    var asyncFontsToLoad = tmp0_container.e3();
    var synthesizedTypeface = tmp0_container.f3();
    if (asyncFontsToLoad == null)
      return new Immutable(synthesizedTypeface);
    var asyncLoader = new AsyncFontListLoader(asyncFontsToLoad, synthesizedTypeface, typefaceRequest, this.k3g_1, onAsyncCompletion, platformFontLoader);
    var tmp_0 = this.l3g_1;
    var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp_0, VOID, tmp_1, FontListFontFamilyTypefaceAdapter$resolve$slambda_0(asyncLoader, null));
    return new Async(asyncLoader);
  };
  function firstImmediatelyAvailable(_this__u8e3s4, typefaceRequest, asyncTypefaceCache, platformFontLoader, createDefaultTypeface) {
    var asyncFontsToLoad = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.l(idx);
        var tmp1_subject = font.s3e();
        if (tmp1_subject === Companion_getInstance_19().t3e_1) {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.synchronized' call
            asyncTypefaceCache.o3h_1;
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            var key = new Key(font, platformFontLoader.t3g());
            var tmp0_elvis_lhs = asyncTypefaceCache.m3h_1.l2(key);
            var priorResult = tmp0_elvis_lhs == null ? asyncTypefaceCache.n3h_1.l2(key) : tmp0_elvis_lhs;
            var tmp;
            if (!(priorResult == null)) {
              tmp$ret$0 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.u3g_1);
              break $l$block;
            }
            // Inline function 'kotlin.also' call
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            var tmp_0;
            try {
              tmp_0 = platformFontLoader.n3k(font);
            } catch ($p) {
              var tmp_1;
              if ($p instanceof Exception) {
                var cause = $p;
                throw IllegalStateException_init_$Create$_0('Unable to load font ' + font, cause);
              } else {
                throw $p;
              }
            }
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
            asyncTypefaceCache.q3h(font, platformFontLoader, tmp_0);
            tmp$ret$0 = tmp_0;
          }
          var tmp2_elvis_lhs = tmp$ret$0;
          var tmp_2;
          if (tmp2_elvis_lhs == null) {
            throw IllegalStateException_init_$Create$('Unable to load font ' + font);
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }
          var result = tmp_2;
          return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.o3f_1, result, font, typefaceRequest.m3f_1, typefaceRequest.n3f_1));
        } else if (tmp1_subject === Companion_getInstance_19().u3e_1) {
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.synchronized' call
            asyncTypefaceCache.o3h_1;
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            var key_0 = new Key(font, platformFontLoader.t3g());
            var tmp0_elvis_lhs_0 = asyncTypefaceCache.m3h_1.l2(key_0);
            var priorResult_0 = tmp0_elvis_lhs_0 == null ? asyncTypefaceCache.n3h_1.l2(key_0) : tmp0_elvis_lhs_0;
            var tmp_3;
            if (!(priorResult_0 == null)) {
              tmp$ret$5 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult_0.u3g_1);
              break $l$block_0;
            }
            // Inline function 'kotlin.also' call
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            // Inline function 'kotlin.Result.getOrNull' call
            // Inline function 'kotlin.runCatching' call
            var tmp_4;
            try {
              // Inline function 'kotlin.Companion.success' call
              Companion_getInstance_3();
              // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>.<anonymous>' call
              var tmp1_success = platformFontLoader.n3k(font);
              tmp_4 = _Result___init__impl__xyqfz8(tmp1_success);
            } catch ($p) {
              var tmp_5;
              if ($p instanceof Error) {
                var e = $p;
                // Inline function 'kotlin.Companion.failure' call
                Companion_getInstance_3();
                tmp_5 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_4 = tmp_5;
            }
            var tmp0_getOrNull = tmp_4;
            var tmp_6;
            if (_Result___get_isFailure__impl__jpiriv(tmp0_getOrNull)) {
              tmp_6 = null;
            } else {
              var tmp_7 = _Result___get_value__impl__bjfvqg(tmp0_getOrNull);
              tmp_6 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
            }
            var tmp1_also = tmp_6;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
            asyncTypefaceCache.q3h(font, platformFontLoader, tmp1_also);
            tmp$ret$5 = tmp1_also;
          }
          var result_0 = tmp$ret$5;
          if (!(result_0 == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.o3f_1, result_0, font, typefaceRequest.m3f_1, typefaceRequest.n3f_1));
          }
        } else if (tmp1_subject === Companion_getInstance_19().v3e_1) {
          var cacheResult = asyncTypefaceCache.r3h(font, platformFontLoader);
          if (cacheResult == null) {
            if (asyncFontsToLoad == null) {
              asyncFontsToLoad = mutableListOf([font]);
            } else {
              asyncFontsToLoad.a(font);
            }
          } else if (_AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca(cacheResult.u3g_1)) {
            continue $l$loop;
          } else if (!(_AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.u3g_1) == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.o3f_1, _AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.u3g_1), font, typefaceRequest.m3f_1, typefaceRequest.n3f_1));
          }
        } else
          throw IllegalStateException_init_$Create$('Unknown font type ' + font);
      }
       while (inductionVariable <= last);
    var fallbackTypeface = createDefaultTypeface(typefaceRequest);
    return to(asyncFontsToLoad, fallbackTypeface);
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.w1();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.w1();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function _FontLoadingStrategy___init__impl__if1sp3(value) {
    return value;
  }
  function _FontLoadingStrategy___get_value__impl__ggsl83($this) {
    return $this;
  }
  function FontLoadingStrategy__toString_impl_fx0z8f($this) {
    return $this === Companion_getInstance_19().t3e_1 ? 'Blocking' : $this === Companion_getInstance_19().u3e_1 ? 'Optional' : $this === Companion_getInstance_19().v3e_1 ? 'Async' : 'Invalid(value=' + _FontLoadingStrategy___get_value__impl__ggsl83($this) + ')';
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.t3e_1 = _FontLoadingStrategy___init__impl__if1sp3(0);
    this.u3e_1 = _FontLoadingStrategy___init__impl__if1sp3(1);
    this.v3e_1 = _FontLoadingStrategy___init__impl__if1sp3(2);
  }
  var Companion_instance_5;
  function Companion_getInstance_19() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function FontLoadingStrategy__hashCode_impl_xcx5xu($this) {
    return $this;
  }
  function FontLoadingStrategy__equals_impl_5w10z2($this, other) {
    if (!(other instanceof FontLoadingStrategy))
      return false;
    if (!($this === (other instanceof FontLoadingStrategy ? other.o3k_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontLoadingStrategy(value) {
    Companion_getInstance_19();
    this.o3k_1 = value;
  }
  protoOf(FontLoadingStrategy).toString = function () {
    return FontLoadingStrategy__toString_impl_fx0z8f(this.o3k_1);
  };
  protoOf(FontLoadingStrategy).hashCode = function () {
    return FontLoadingStrategy__hashCode_impl_xcx5xu(this.o3k_1);
  };
  protoOf(FontLoadingStrategy).equals = function (other) {
    return FontLoadingStrategy__equals_impl_5w10z2(this.o3k_1, other);
  };
  function FontMatcher() {
  }
  protoOf(FontMatcher).m3k = function (fontList, fontWeight, fontStyle) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(fontList.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = fontList.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = fontList.l(index);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        if (item.g2a().equals(fontWeight) ? item.r3e() === fontStyle : false) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.a(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!target.k()) {
      return target;
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    // Inline function 'androidx.compose.ui.text.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(fontList.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = fontList.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = fontList.l(index_0);
        // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        if (item_0.r3e() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target_0.a(item_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    var tmp_0;
    if (target_0.k()) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
      tmp_0 = fontList;
    } else {
      tmp_0 = target_0;
    }
    var fontsToSearch = tmp_0;
    var tmp_1;
    if (fontWeight.r3k(Companion_getInstance_22().d3a_1) < 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove = null;
      var bestWeightBelow = null;
      var inductionVariable_1 = 0;
      var last_1 = fontsToSearch.f() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        $l$loop_1: do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var font = fontsToSearch.l(index_1);
          var possibleWeight = font.g2a();
          if (!(null == null) ? possibleWeight.r3k(null) < 0 : false) {
            continue $l$loop_1;
          }
          if (!(null == null) ? possibleWeight.r3k(null) > 0 : false) {
            continue $l$loop_1;
          }
          if (possibleWeight.r3k(fontWeight) < 0) {
            if (bestWeightBelow == null ? true : possibleWeight.r3k(bestWeightBelow) > 0) {
              bestWeightBelow = possibleWeight;
            }
          } else if (possibleWeight.r3k(fontWeight) > 0) {
            if (bestWeightAbove == null ? true : possibleWeight.r3k(bestWeightAbove) < 0) {
              bestWeightAbove = possibleWeight;
            }
          } else {
            bestWeightAbove = possibleWeight;
            bestWeightBelow = possibleWeight;
            break $l$loop_1;
          }
        }
         while (inductionVariable_1 <= last_1);
      var tmp_2;
      var tmp1_elvis_lhs = bestWeightBelow;
      tmp_2 = tmp1_elvis_lhs == null ? bestWeightAbove : tmp1_elvis_lhs;
      var bestWeight = tmp_2;
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_1 = ArrayList_init_$Create$(fontsToSearch.f());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_2 = fontsToSearch.f() - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_1 = fontsToSearch.l(index_2);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_1.g2a().equals(bestWeight)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_1.a(item_1);
          }
        }
         while (inductionVariable_2 <= last_2);
      tmp_1 = target_1;
    } else if (fontWeight.r3k(Companion_getInstance_22().e3a_1) > 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove_0 = null;
      var bestWeightBelow_0 = null;
      var inductionVariable_3 = 0;
      var last_3 = fontsToSearch.f() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        $l$loop_4: do {
          var index_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var font_0 = fontsToSearch.l(index_3);
          var possibleWeight_0 = font_0.g2a();
          if (!(null == null) ? possibleWeight_0.r3k(null) < 0 : false) {
            continue $l$loop_4;
          }
          if (!(null == null) ? possibleWeight_0.r3k(null) > 0 : false) {
            continue $l$loop_4;
          }
          if (possibleWeight_0.r3k(fontWeight) < 0) {
            if (bestWeightBelow_0 == null ? true : possibleWeight_0.r3k(bestWeightBelow_0) > 0) {
              bestWeightBelow_0 = possibleWeight_0;
            }
          } else if (possibleWeight_0.r3k(fontWeight) > 0) {
            if (bestWeightAbove_0 == null ? true : possibleWeight_0.r3k(bestWeightAbove_0) < 0) {
              bestWeightAbove_0 = possibleWeight_0;
            }
          } else {
            bestWeightAbove_0 = possibleWeight_0;
            bestWeightBelow_0 = possibleWeight_0;
            break $l$loop_4;
          }
        }
         while (inductionVariable_3 <= last_3);
      var tmp_3;
      if (false) {
        var tmp1_elvis_lhs_0 = bestWeightBelow_0;
        tmp_3 = tmp1_elvis_lhs_0 == null ? bestWeightAbove_0 : tmp1_elvis_lhs_0;
      } else {
        var tmp2_elvis_lhs = bestWeightAbove_0;
        tmp_3 = tmp2_elvis_lhs == null ? bestWeightBelow_0 : tmp2_elvis_lhs;
      }
      var bestWeight_0 = tmp_3;
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_2 = ArrayList_init_$Create$(fontsToSearch.f());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_4 = 0;
      var last_4 = fontsToSearch.f() - 1 | 0;
      if (inductionVariable_4 <= last_4)
        do {
          var index_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_2 = fontsToSearch.l(index_4);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_2.g2a().equals(bestWeight_0)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_2.a(item_2);
          }
        }
         while (inductionVariable_4 <= last_4);
      tmp_1 = target_2;
    } else {
      // Inline function 'kotlin.collections.ifEmpty' call
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var tmp2_filterByClosestWeight = Companion_getInstance_22().e3a_1;
      var bestWeightAbove_1 = null;
      var bestWeightBelow_1 = null;
      var inductionVariable_5 = 0;
      var last_5 = fontsToSearch.f() - 1 | 0;
      if (inductionVariable_5 <= last_5)
        $l$loop_7: do {
          var index_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var font_1 = fontsToSearch.l(index_5);
          var possibleWeight_1 = font_1.g2a();
          if (!(null == null) ? possibleWeight_1.r3k(null) < 0 : false) {
            continue $l$loop_7;
          }
          if (!(tmp2_filterByClosestWeight == null) ? possibleWeight_1.r3k(tmp2_filterByClosestWeight) > 0 : false) {
            continue $l$loop_7;
          }
          if (possibleWeight_1.r3k(fontWeight) < 0) {
            if (bestWeightBelow_1 == null ? true : possibleWeight_1.r3k(bestWeightBelow_1) > 0) {
              bestWeightBelow_1 = possibleWeight_1;
            }
          } else if (possibleWeight_1.r3k(fontWeight) > 0) {
            if (bestWeightAbove_1 == null ? true : possibleWeight_1.r3k(bestWeightAbove_1) < 0) {
              bestWeightAbove_1 = possibleWeight_1;
            }
          } else {
            bestWeightAbove_1 = possibleWeight_1;
            bestWeightBelow_1 = possibleWeight_1;
            break $l$loop_7;
          }
        }
         while (inductionVariable_5 <= last_5);
      var tmp_4;
      if (false) {
        var tmp1_elvis_lhs_1 = bestWeightBelow_1;
        tmp_4 = tmp1_elvis_lhs_1 == null ? bestWeightAbove_1 : tmp1_elvis_lhs_1;
      } else {
        var tmp2_elvis_lhs_0 = bestWeightAbove_1;
        tmp_4 = tmp2_elvis_lhs_0 == null ? bestWeightBelow_1 : tmp2_elvis_lhs_0;
      }
      var bestWeight_1 = tmp_4;
      // Inline function 'androidx.compose.ui.text.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_3 = ArrayList_init_$Create$(fontsToSearch.f());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_6 = 0;
      var last_6 = fontsToSearch.f() - 1 | 0;
      if (inductionVariable_6 <= last_6)
        do {
          var index_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var item_3 = fontsToSearch.l(index_6);
          // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_3.g2a().equals(bestWeight_1)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_3.a(item_3);
          }
        }
         while (inductionVariable_6 <= last_6);
      var tmp_5;
      if (target_3.k()) {
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
        var tmp0_filterByClosestWeight = Companion_getInstance_22().e3a_1;
        var bestWeightAbove_2 = null;
        var bestWeightBelow_2 = null;
        var inductionVariable_7 = 0;
        var last_7 = fontsToSearch.f() - 1 | 0;
        if (inductionVariable_7 <= last_7)
          $l$loop_10: do {
            var index_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var font_2 = fontsToSearch.l(index_7);
            var possibleWeight_2 = font_2.g2a();
            if (!(tmp0_filterByClosestWeight == null) ? possibleWeight_2.r3k(tmp0_filterByClosestWeight) < 0 : false) {
              continue $l$loop_10;
            }
            if (!(null == null) ? possibleWeight_2.r3k(null) > 0 : false) {
              continue $l$loop_10;
            }
            if (possibleWeight_2.r3k(fontWeight) < 0) {
              if (bestWeightBelow_2 == null ? true : possibleWeight_2.r3k(bestWeightBelow_2) > 0) {
                bestWeightBelow_2 = possibleWeight_2;
              }
            } else if (possibleWeight_2.r3k(fontWeight) > 0) {
              if (bestWeightAbove_2 == null ? true : possibleWeight_2.r3k(bestWeightAbove_2) < 0) {
                bestWeightAbove_2 = possibleWeight_2;
              }
            } else {
              bestWeightAbove_2 = possibleWeight_2;
              bestWeightBelow_2 = possibleWeight_2;
              break $l$loop_10;
            }
          }
           while (inductionVariable_7 <= last_7);
        var tmp_6;
        if (false) {
          var tmp1_elvis_lhs_2 = bestWeightBelow_2;
          tmp_6 = tmp1_elvis_lhs_2 == null ? bestWeightAbove_2 : tmp1_elvis_lhs_2;
        } else {
          var tmp2_elvis_lhs_1 = bestWeightAbove_2;
          tmp_6 = tmp2_elvis_lhs_1 == null ? bestWeightBelow_2 : tmp2_elvis_lhs_1;
        }
        var bestWeight_2 = tmp_6;
        // Inline function 'androidx.compose.ui.text.fastFilter' call
        // Inline function 'kotlin.contracts.contract' call
        var target_4 = ArrayList_init_$Create$(fontsToSearch.f());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_8 = 0;
        var last_8 = fontsToSearch.f() - 1 | 0;
        if (inductionVariable_8 <= last_8)
          do {
            var index_8 = inductionVariable_8;
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var item_4 = fontsToSearch.l(index_8);
            // Inline function 'androidx.compose.ui.text.fastFilter.<anonymous>' call
            // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
            if (item_4.g2a().equals(bestWeight_2)) {
              // Inline function 'kotlin.collections.plusAssign' call
              target_4.a(item_4);
            }
          }
           while (inductionVariable_8 <= last_8);
        tmp_5 = target_4;
      } else {
        tmp_5 = target_3;
      }
      tmp_1 = tmp_5;
    }
    var result = tmp_1;
    return result;
  };
  function _FontStyle___init__impl__jcnduf(value) {
    return value;
  }
  function FontStyle__toString_impl_thncxr($this) {
    return $this === Companion_getInstance_20().t3a_1 ? 'Normal' : $this === Companion_getInstance_20().u3a_1 ? 'Italic' : 'Invalid';
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.t3a_1 = _FontStyle___init__impl__jcnduf(0);
    this.u3a_1 = _FontStyle___init__impl__jcnduf(1);
  }
  var Companion_instance_6;
  function Companion_getInstance_20() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function FontStyle__hashCode_impl_7qhg4w($this) {
    return $this;
  }
  function FontStyle__equals_impl_2zal3g($this, other) {
    if (!(other instanceof FontStyle))
      return false;
    if (!($this === (other instanceof FontStyle ? other.s3k_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontStyle(value) {
    Companion_getInstance_20();
    this.s3k_1 = value;
  }
  protoOf(FontStyle).toString = function () {
    return FontStyle__toString_impl_thncxr(this.s3k_1);
  };
  protoOf(FontStyle).hashCode = function () {
    return FontStyle__hashCode_impl_7qhg4w(this.s3k_1);
  };
  protoOf(FontStyle).equals = function (other) {
    return FontStyle__equals_impl_2zal3g(this.s3k_1, other);
  };
  function _FontSynthesis___init__impl__n397bg(value) {
    return value;
  }
  function FontSynthesis__toString_impl_gunvr0($this) {
    return $this === Companion_getInstance_21().v3a_1 ? 'None' : $this === Companion_getInstance_21().w3a_1 ? 'All' : $this === Companion_getInstance_21().x3a_1 ? 'Weight' : $this === Companion_getInstance_21().y3a_1 ? 'Style' : 'Invalid';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.v3a_1 = _FontSynthesis___init__impl__n397bg(0);
    this.w3a_1 = _FontSynthesis___init__impl__n397bg(1);
    this.x3a_1 = _FontSynthesis___init__impl__n397bg(2);
    this.y3a_1 = _FontSynthesis___init__impl__n397bg(3);
  }
  var Companion_instance_7;
  function Companion_getInstance_21() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function FontSynthesis__hashCode_impl_4wi11v($this) {
    return $this;
  }
  function FontSynthesis__equals_impl_zgu9mf($this, other) {
    if (!(other instanceof FontSynthesis))
      return false;
    if (!($this === (other instanceof FontSynthesis ? other.t3k_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontSynthesis(value) {
    Companion_getInstance_21();
    this.t3k_1 = value;
  }
  protoOf(FontSynthesis).toString = function () {
    return FontSynthesis__toString_impl_gunvr0(this.t3k_1);
  };
  protoOf(FontSynthesis).hashCode = function () {
    return FontSynthesis__hashCode_impl_4wi11v(this.t3k_1);
  };
  protoOf(FontSynthesis).equals = function (other) {
    return FontSynthesis__equals_impl_zgu9mf(this.t3k_1, other);
  };
  function Companion_8() {
    Companion_instance_8 = this;
    this.a3a_1 = new FontWeight(100);
    this.b3a_1 = new FontWeight(200);
    this.c3a_1 = new FontWeight(300);
    this.d3a_1 = new FontWeight(400);
    this.e3a_1 = new FontWeight(500);
    this.f3a_1 = new FontWeight(600);
    this.g3a_1 = new FontWeight(700);
    this.h3a_1 = new FontWeight(800);
    this.i3a_1 = new FontWeight(900);
    this.j3a_1 = this.a3a_1;
    this.k3a_1 = this.b3a_1;
    this.l3a_1 = this.c3a_1;
    this.m3a_1 = this.d3a_1;
    this.n3a_1 = this.e3a_1;
    this.o3a_1 = this.f3a_1;
    this.p3a_1 = this.g3a_1;
    this.q3a_1 = this.h3a_1;
    this.r3a_1 = this.i3a_1;
    this.s3a_1 = listOf([this.a3a_1, this.b3a_1, this.c3a_1, this.d3a_1, this.e3a_1, this.f3a_1, this.g3a_1, this.h3a_1, this.i3a_1]);
  }
  var Companion_instance_8;
  function Companion_getInstance_22() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function FontWeight(weight) {
    Companion_getInstance_22();
    this.p3k_1 = weight;
    // Inline function 'kotlin.require' call
    var containsArg = this.p3k_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(1 <= containsArg ? containsArg <= 1000 : false)) {
      // Inline function 'androidx.compose.ui.text.font.FontWeight.<anonymous>' call
      var message = 'Font weight can be in range [1, 1000]. Current value: ' + this.p3k_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.q3k_1 = 0;
  }
  protoOf(FontWeight).r3k = function (other) {
    return compareTo(this.p3k_1, other.p3k_1);
  };
  protoOf(FontWeight).o6 = function (other) {
    return this.r3k(other instanceof FontWeight ? other : THROW_CCE());
  };
  protoOf(FontWeight).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontWeight))
      return false;
    if (!(this.p3k_1 === other.p3k_1))
      return false;
    return true;
  };
  protoOf(FontWeight).hashCode = function () {
    return this.p3k_1;
  };
  protoOf(FontWeight).toString = function () {
    return 'FontWeight(weight=' + this.p3k_1 + ')';
  };
  function CommitTextCommand_init_$Init$(text, newCursorPosition, $this) {
    CommitTextCommand.call($this, AnnotatedString_init_$Create$(text), newCursorPosition);
    return $this;
  }
  function CommitTextCommand_init_$Create$(text, newCursorPosition) {
    return CommitTextCommand_init_$Init$(text, newCursorPosition, objectCreate(protoOf(CommitTextCommand)));
  }
  function CommitTextCommand(annotatedString, newCursorPosition) {
    this.u3k_1 = annotatedString;
    this.v3k_1 = newCursorPosition;
    this.w3k_1 = 0;
  }
  protoOf(CommitTextCommand).x3k = function () {
    return this.u3k_1.y34_1;
  };
  protoOf(CommitTextCommand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CommitTextCommand))
      return false;
    if (!(this.x3k() === other.x3k()))
      return false;
    if (!(this.v3k_1 === other.v3k_1))
      return false;
    return true;
  };
  protoOf(CommitTextCommand).hashCode = function () {
    var result = getStringHashCode(this.x3k());
    result = imul(31, result) + this.v3k_1 | 0;
    return result;
  };
  protoOf(CommitTextCommand).toString = function () {
    return "CommitTextCommand(text='" + this.x3k() + "', newCursorPosition=" + this.v3k_1 + ')';
  };
  function PlatformTextInputPluginRegistryImpl(factory) {
    this.y3k_1 = factory;
    this.z3k_1 = mutableStateMapOf();
    this.a3l_1 = false;
    this.b3l_1 = null;
    this.c3l_1 = 0;
  }
  function TextInputService(platformTextInputService) {
    this.d3l_1 = platformTextInputService;
    this.e3l_1 = new AtomicReference(null);
    this.f3l_1 = 8;
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  protoOf(Companion_9).dw = function () {
    return get_platformLocaleDelegate().dw().l(0);
  };
  var Companion_instance_9;
  function Companion_getInstance_23() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Locale(platformLocale) {
    Companion_getInstance_23();
    this.j3l_1 = platformLocale;
    this.k3l_1 = 0;
  }
  protoOf(Locale).l3l = function () {
    return this.j3l_1.l3l();
  };
  protoOf(Locale).equals = function (other) {
    if (other == null)
      return false;
    if (!(other instanceof Locale))
      return false;
    if (this === other)
      return true;
    return this.l3l() === other.l3l();
  };
  protoOf(Locale).hashCode = function () {
    return getStringHashCode(this.l3l());
  };
  protoOf(Locale).toString = function () {
    return this.l3l();
  };
  function Companion_10() {
    Companion_instance_10 = this;
  }
  protoOf(Companion_10).dw = function () {
    return get_platformLocaleDelegate().dw();
  };
  var Companion_instance_10;
  function Companion_getInstance_24() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function LocaleList(localeList) {
    Companion_getInstance_24();
    this.g3l_1 = localeList;
    this.h3l_1 = this.g3l_1.f();
    this.i3l_1 = 0;
  }
  protoOf(LocaleList).l = function (i) {
    return this.g3l_1.l(i);
  };
  protoOf(LocaleList).f = function () {
    return this.h3l_1;
  };
  protoOf(LocaleList).m3l = function (element) {
    return this.g3l_1.m(element);
  };
  protoOf(LocaleList).m = function (element) {
    if (!(element instanceof Locale))
      return false;
    return this.m3l(element instanceof Locale ? element : THROW_CCE());
  };
  protoOf(LocaleList).n3l = function (elements) {
    return this.g3l_1.b1(elements);
  };
  protoOf(LocaleList).b1 = function (elements) {
    return this.n3l(elements);
  };
  protoOf(LocaleList).k = function () {
    return this.g3l_1.k();
  };
  protoOf(LocaleList).c = function () {
    return this.g3l_1.c();
  };
  protoOf(LocaleList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LocaleList))
      return false;
    if (!equals(this.g3l_1, other.g3l_1))
      return false;
    return true;
  };
  protoOf(LocaleList).hashCode = function () {
    return hashCode(this.g3l_1);
  };
  protoOf(LocaleList).toString = function () {
    return 'LocaleList(localeList=' + this.g3l_1 + ')';
  };
  function get_platformLocaleDelegate() {
    _init_properties_PlatformLocale_kt__d5ixzh();
    return platformLocaleDelegate;
  }
  var platformLocaleDelegate;
  var properties_initialized_PlatformLocale_kt_ya8ii9;
  function _init_properties_PlatformLocale_kt__d5ixzh() {
    if (!properties_initialized_PlatformLocale_kt_ya8ii9) {
      properties_initialized_PlatformLocale_kt_ya8ii9 = true;
      platformLocaleDelegate = createPlatformLocaleDelegate();
    }
  }
  function _BaselineShift___init__impl__scj05g(multiplier) {
    return multiplier;
  }
  function _BaselineShift___get_multiplier__impl__qhmjek($this) {
    return $this;
  }
  function Companion_11() {
    Companion_instance_11 = this;
    this.e3b_1 = _BaselineShift___init__impl__scj05g(0.5);
    this.f3b_1 = _BaselineShift___init__impl__scj05g(-0.5);
    this.g3b_1 = _BaselineShift___init__impl__scj05g(0.0);
  }
  var Companion_instance_11;
  function Companion_getInstance_25() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function BaselineShift__toString_impl_x98gcc($this) {
    return 'BaselineShift(multiplier=' + $this + ')';
  }
  function BaselineShift__hashCode_impl_g0potx($this) {
    return getNumberHashCode($this);
  }
  function BaselineShift__equals_impl_37wrjj($this, other) {
    if (!(other instanceof BaselineShift))
      return false;
    var tmp0_other_with_cast = other instanceof BaselineShift ? other.o3l_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaselineShift(multiplier) {
    Companion_getInstance_25();
    this.o3l_1 = multiplier;
  }
  protoOf(BaselineShift).toString = function () {
    return BaselineShift__toString_impl_x98gcc(this.o3l_1);
  };
  protoOf(BaselineShift).hashCode = function () {
    return BaselineShift__hashCode_impl_g0potx(this.o3l_1);
  };
  protoOf(BaselineShift).equals = function (other) {
    return BaselineShift__equals_impl_37wrjj(this.o3l_1, other);
  };
  function _Hyphens___init__impl__m2cvg8(value) {
    return value;
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.f38_1 = _Hyphens___init__impl__m2cvg8(1);
    this.g38_1 = _Hyphens___init__impl__m2cvg8(2);
  }
  var Companion_instance_12;
  function Companion_getInstance_26() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function Hyphens__toString_impl_ck1wg0($this) {
    return $this === Companion_getInstance_26().f38_1 ? 'Hyphens.None' : $this === Companion_getInstance_26().g38_1 ? 'Hyphens.Auto' : 'Invalid';
  }
  function Hyphens__hashCode_impl_yb7t8v($this) {
    return $this;
  }
  function Hyphens__equals_impl_oqoi4t($this, other) {
    if (!(other instanceof Hyphens))
      return false;
    if (!($this === (other instanceof Hyphens ? other.p3l_1 : THROW_CCE())))
      return false;
    return true;
  }
  function Hyphens(value) {
    Companion_getInstance_26();
    this.p3l_1 = value;
  }
  protoOf(Hyphens).toString = function () {
    return Hyphens__toString_impl_ck1wg0(this.p3l_1);
  };
  protoOf(Hyphens).hashCode = function () {
    return Hyphens__hashCode_impl_yb7t8v(this.p3l_1);
  };
  protoOf(Hyphens).equals = function (other) {
    return Hyphens__equals_impl_oqoi4t(this.p3l_1, other);
  };
  function Trim__hashCode_impl_vclj5c($this) {
    return $this;
  }
  function Alignment__hashCode_impl_omr6of($this) {
    return getNumberHashCode($this);
  }
  var ResolvedTextDirection_Ltr_instance;
  var ResolvedTextDirection_Rtl_instance;
  var ResolvedTextDirection_entriesInitialized;
  function ResolvedTextDirection_initEntries() {
    if (ResolvedTextDirection_entriesInitialized)
      return Unit_getInstance();
    ResolvedTextDirection_entriesInitialized = true;
    ResolvedTextDirection_Ltr_instance = new ResolvedTextDirection('Ltr', 0);
    ResolvedTextDirection_Rtl_instance = new ResolvedTextDirection('Rtl', 1);
  }
  function ResolvedTextDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ResolvedTextDirection_Ltr_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Ltr_instance;
  }
  function ResolvedTextDirection_Rtl_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Rtl_instance;
  }
  function _TextAlign___init__impl__99wz4v(value) {
    return value;
  }
  function TextAlign__toString_impl_6ha6d3($this) {
    return $this === Companion_getInstance_27().w37_1 ? 'Left' : $this === Companion_getInstance_27().x37_1 ? 'Right' : $this === Companion_getInstance_27().y37_1 ? 'Center' : $this === Companion_getInstance_27().z37_1 ? 'Justify' : $this === Companion_getInstance_27().a38_1 ? 'Start' : $this === Companion_getInstance_27().b38_1 ? 'End' : 'Invalid';
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.w37_1 = _TextAlign___init__impl__99wz4v(1);
    this.x37_1 = _TextAlign___init__impl__99wz4v(2);
    this.y37_1 = _TextAlign___init__impl__99wz4v(3);
    this.z37_1 = _TextAlign___init__impl__99wz4v(4);
    this.a38_1 = _TextAlign___init__impl__99wz4v(5);
    this.b38_1 = _TextAlign___init__impl__99wz4v(6);
  }
  var Companion_instance_13;
  function Companion_getInstance_27() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function TextAlign__hashCode_impl_s8g35y($this) {
    return $this;
  }
  function TextAlign__equals_impl_latoh6($this, other) {
    if (!(other instanceof TextAlign))
      return false;
    if (!($this === (other instanceof TextAlign ? other.q3l_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextAlign(value) {
    Companion_getInstance_27();
    this.q3l_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return TextAlign__toString_impl_6ha6d3(this.q3l_1);
  };
  protoOf(TextAlign).hashCode = function () {
    return TextAlign__hashCode_impl_s8g35y(this.q3l_1);
  };
  protoOf(TextAlign).equals = function (other) {
    return TextAlign__equals_impl_latoh6(this.q3l_1, other);
  };
  function Companion_14() {
    Companion_instance_14 = this;
    this.i3b_1 = new TextDecoration(0);
    this.j3b_1 = new TextDecoration(1);
    this.k3b_1 = new TextDecoration(2);
  }
  var Companion_instance_14;
  function Companion_getInstance_28() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function TextDecoration(mask) {
    Companion_getInstance_28();
    this.r3l_1 = mask;
    this.s3l_1 = 0;
  }
  protoOf(TextDecoration).t3l = function (other) {
    return (this.r3l_1 | other.r3l_1) === this.r3l_1;
  };
  protoOf(TextDecoration).toString = function () {
    if (this.r3l_1 === 0) {
      return 'TextDecoration.None';
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var values = ArrayList_init_$Create$_0();
    if (!((this.r3l_1 & Companion_getInstance_28().j3b_1.r3l_1) === 0)) {
      values.a('Underline');
    }
    if (!((this.r3l_1 & Companion_getInstance_28().k3b_1.r3l_1) === 0)) {
      values.a('LineThrough');
    }
    if (values.f() === 1) {
      return 'TextDecoration.' + values.l(0);
    }
    return 'TextDecoration[' + fastJoinToString(values, ', ') + ']';
  };
  protoOf(TextDecoration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextDecoration))
      return false;
    if (!(this.r3l_1 === other.r3l_1))
      return false;
    return true;
  };
  protoOf(TextDecoration).hashCode = function () {
    return this.r3l_1;
  };
  function _TextDirection___init__impl__lh8lzt(value) {
    return value;
  }
  function TextDirection__toString_impl_x3uh9t($this) {
    return $this === Companion_getInstance_29().p3d_1 ? 'Ltr' : $this === Companion_getInstance_29().q3d_1 ? 'Rtl' : $this === Companion_getInstance_29().r3d_1 ? 'Content' : $this === Companion_getInstance_29().s3d_1 ? 'ContentOrLtr' : $this === Companion_getInstance_29().t3d_1 ? 'ContentOrRtl' : 'Invalid';
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.p3d_1 = _TextDirection___init__impl__lh8lzt(1);
    this.q3d_1 = _TextDirection___init__impl__lh8lzt(2);
    this.r3d_1 = _TextDirection___init__impl__lh8lzt(3);
    this.s3d_1 = _TextDirection___init__impl__lh8lzt(4);
    this.t3d_1 = _TextDirection___init__impl__lh8lzt(5);
  }
  var Companion_instance_15;
  function Companion_getInstance_29() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function TextDirection__hashCode_impl_g63nwg($this) {
    return $this;
  }
  function TextDirection__equals_impl_3fvxt0($this, other) {
    if (!(other instanceof TextDirection))
      return false;
    if (!($this === (other instanceof TextDirection ? other.u3l_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextDirection(value) {
    Companion_getInstance_29();
    this.u3l_1 = value;
  }
  protoOf(TextDirection).toString = function () {
    return TextDirection__toString_impl_x3uh9t(this.u3l_1);
  };
  protoOf(TextDirection).hashCode = function () {
    return TextDirection__hashCode_impl_g63nwg(this.u3l_1);
  };
  protoOf(TextDirection).equals = function (other) {
    return TextDirection__equals_impl_3fvxt0(this.u3l_1, other);
  };
  function Unspecified() {
    Unspecified_instance = this;
    this.v3l_1 = 0;
  }
  protoOf(Unspecified).g32 = function () {
    return Companion_getInstance().f2t_1;
  };
  protoOf(Unspecified).q39 = function () {
    return null;
  };
  protoOf(Unspecified).a2p = function () {
    FloatCompanionObject_getInstance();
    return NaN;
  };
  var Unspecified_instance;
  function Unspecified_getInstance() {
    if (Unspecified_instance == null)
      new Unspecified();
    return Unspecified_instance;
  }
  function Companion_16() {
    Companion_instance_16 = this;
  }
  protoOf(Companion_16).x38 = function (color) {
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().f2t_1))) {
      tmp = new ColorStyle(color);
    } else {
      tmp = Unspecified_getInstance();
    }
    return tmp;
  };
  protoOf(Companion_16).y38 = function (brush, alpha) {
    var tmp;
    if (brush == null) {
      tmp = Unspecified_getInstance();
    } else {
      if (brush instanceof SolidColor) {
        tmp = this.x38(modulate(brush.w3l_1, alpha));
      } else {
        if (brush instanceof ShaderBrush) {
          tmp = new BrushStyle(brush, alpha);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  var Companion_instance_16;
  function Companion_getInstance_30() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function TextForegroundStyle$merge$lambda(this$0) {
    return function () {
      return this$0.a2p();
    };
  }
  function TextForegroundStyle$merge$lambda_0(this$0) {
    return function () {
      return this$0;
    };
  }
  function TextForegroundStyle() {
  }
  function BrushStyle(value, alpha) {
    this.x3l_1 = value;
    this.y3l_1 = alpha;
  }
  protoOf(BrushStyle).a2p = function () {
    return this.y3l_1;
  };
  protoOf(BrushStyle).g32 = function () {
    return Companion_getInstance().f2t_1;
  };
  protoOf(BrushStyle).q39 = function () {
    return this.x3l_1;
  };
  protoOf(BrushStyle).toString = function () {
    return 'BrushStyle(value=' + this.x3l_1 + ', alpha=' + this.y3l_1 + ')';
  };
  protoOf(BrushStyle).hashCode = function () {
    var result = hashCode(this.x3l_1);
    result = imul(result, 31) + getNumberHashCode(this.y3l_1) | 0;
    return result;
  };
  protoOf(BrushStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BrushStyle))
      return false;
    var tmp0_other_with_cast = other instanceof BrushStyle ? other : THROW_CCE();
    if (!equals(this.x3l_1, tmp0_other_with_cast.x3l_1))
      return false;
    if (!equals(this.y3l_1, tmp0_other_with_cast.y3l_1))
      return false;
    return true;
  };
  function takeOrElse_0(_this__u8e3s4, block) {
    return isNaN_0(_this__u8e3s4) ? block() : _this__u8e3s4;
  }
  function ColorStyle(value) {
    this.z3l_1 = value;
    // Inline function 'kotlin.require' call
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp0_get_isSpecified_4wup3r = this.z3l_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(_Color___get_value__impl__1pls5m(tmp0_get_isSpecified_4wup3r), _Color___get_value__impl__1pls5m(Companion_getInstance().f2t_1))) {
      // Inline function 'androidx.compose.ui.text.style.ColorStyle.<anonymous>' call
      var message = 'ColorStyle value must be specified, use TextForegroundStyle.Unspecified instead.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(ColorStyle).g32 = function () {
    return this.z3l_1;
  };
  protoOf(ColorStyle).q39 = function () {
    return null;
  };
  protoOf(ColorStyle).a2p = function () {
    return _Color___get_alpha__impl__wcfyv1(this.g32());
  };
  protoOf(ColorStyle).toString = function () {
    return 'ColorStyle(value=' + new Color(this.z3l_1) + ')';
  };
  protoOf(ColorStyle).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.z3l_1);
  };
  protoOf(ColorStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ColorStyle ? other : THROW_CCE();
    if (!equals(this.z3l_1, tmp0_other_with_cast.z3l_1))
      return false;
    return true;
  };
  function modulate(_this__u8e3s4, alpha) {
    return (isNaN_0(alpha) ? true : alpha >= 1.0) ? _this__u8e3s4 : Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.h3b_1 = new TextGeometricTransform(1.0, 0.0);
  }
  var Companion_instance_17;
  function Companion_getInstance_31() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function TextGeometricTransform(scaleX, skewX) {
    Companion_getInstance_31();
    scaleX = scaleX === VOID ? 1.0 : scaleX;
    skewX = skewX === VOID ? 0.0 : skewX;
    this.a3m_1 = scaleX;
    this.b3m_1 = skewX;
    this.c3m_1 = 0;
  }
  protoOf(TextGeometricTransform).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextGeometricTransform))
      return false;
    if (!(this.a3m_1 === other.a3m_1))
      return false;
    if (!(this.b3m_1 === other.b3m_1))
      return false;
    return true;
  };
  protoOf(TextGeometricTransform).hashCode = function () {
    var result = getNumberHashCode(this.a3m_1);
    result = imul(31, result) + getNumberHashCode(this.b3m_1) | 0;
    return result;
  };
  protoOf(TextGeometricTransform).toString = function () {
    return 'TextGeometricTransform(scaleX=' + this.a3m_1 + ', skewX=' + this.b3m_1 + ')';
  };
  function Companion_18() {
    Companion_instance_18 = this;
    this.k38_1 = new TextIndent_0();
  }
  var Companion_instance_18;
  function Companion_getInstance_32() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function TextIndent_0(firstLine, restLine) {
    Companion_getInstance_32();
    firstLine = firstLine === VOID ? get_sp(0) : firstLine;
    restLine = restLine === VOID ? get_sp(0) : restLine;
    this.d3m_1 = firstLine;
    this.e3m_1 = restLine;
    this.f3m_1 = 0;
  }
  protoOf(TextIndent_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent_0))
      return false;
    if (!equals(this.d3m_1, other.d3m_1))
      return false;
    if (!equals(this.e3m_1, other.e3m_1))
      return false;
    return true;
  };
  protoOf(TextIndent_0).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.d3m_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.e3m_1) | 0;
    return result;
  };
  protoOf(TextIndent_0).toString = function () {
    return 'TextIndent(firstLine=' + new TextUnit(this.d3m_1) + ', restLine=' + new TextUnit(this.e3m_1) + ')';
  };
  function _TextOverflow___init__impl__obguoe(value) {
    return value;
  }
  function _TextOverflow___get_value__impl__vugm5i($this) {
    return $this;
  }
  function TextOverflow__toString_impl_10s0c2($this) {
    return $this === Companion_getInstance_33().g3m_1 ? 'Clip' : $this === Companion_getInstance_33().h3m_1 ? 'Ellipsis' : $this === Companion_getInstance_33().i3m_1 ? 'Visible' : 'Invalid';
  }
  function Companion_19() {
    Companion_instance_19 = this;
    this.g3m_1 = _TextOverflow___init__impl__obguoe(1);
    this.h3m_1 = _TextOverflow___init__impl__obguoe(2);
    this.i3m_1 = _TextOverflow___init__impl__obguoe(3);
  }
  var Companion_instance_19;
  function Companion_getInstance_33() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function TextOverflow__hashCode_impl_kqdwgt($this) {
    return $this;
  }
  function TextOverflow__equals_impl_jkxdof($this, other) {
    if (!(other instanceof TextOverflow))
      return false;
    if (!($this === (other instanceof TextOverflow ? other.j3m_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextOverflow(value) {
    Companion_getInstance_33();
    this.j3m_1 = value;
  }
  protoOf(TextOverflow).toString = function () {
    return TextOverflow__toString_impl_10s0c2(this.j3m_1);
  };
  protoOf(TextOverflow).hashCode = function () {
    return TextOverflow__hashCode_impl_kqdwgt(this.j3m_1);
  };
  protoOf(TextOverflow).equals = function (other) {
    return TextOverflow__equals_impl_jkxdof(this.j3m_1, other);
  };
  function userPreferredLanguages() {
    return toList(getUserPreferredLanguagesAsArray());
  }
  function getUserPreferredLanguagesAsArray() {
    return window.navigator.languages;
  }
  function isNeutralDirection(_this__u8e3s4) {
    var tmp0_subject = CharDirection_getInstance().a2g(_this__u8e3s4);
    var tmp;
    var tmp_0;
    var tmp_1;
    CharDirection_getInstance();
    if (tmp0_subject === 10) {
      tmp_1 = true;
    } else {
      CharDirection_getInstance();
      tmp_1 = tmp0_subject === 9;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      CharDirection_getInstance();
      tmp_0 = tmp0_subject === 18;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function strongDirectionType(_this__u8e3s4) {
    var tmp0_subject = CharDirection_getInstance().a2g(_this__u8e3s4);
    var tmp;
    CharDirection_getInstance();
    if (tmp0_subject === 0) {
      tmp = Companion_getInstance_34().l3m_1;
    } else {
      var tmp_0;
      CharDirection_getInstance();
      if (tmp0_subject === 1) {
        tmp_0 = true;
      } else {
        CharDirection_getInstance();
        tmp_0 = tmp0_subject === 13;
      }
      if (tmp_0) {
        tmp = Companion_getInstance_34().m3m_1;
      } else {
        tmp = Companion_getInstance_34().k3m_1;
      }
    }
    return tmp;
  }
  function NoCache() {
  }
  protoOf(NoCache).n3m = function (key, loader) {
    return loader(key);
  };
  function synthesizeTypeface(_this__u8e3s4, typeface, font, requestedWeight, requestedStyle) {
    return typeface;
  }
  function get_rtlLanguagesSet() {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return rtlLanguagesSet;
  }
  var rtlLanguagesSet;
  function createPlatformLocaleDelegate() {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return new createPlatformLocaleDelegate$1();
  }
  function JsLocale_init_$Init$(languageTag, $this) {
    JsLocale.call($this, toIntlLocale(languageTag));
    return $this;
  }
  function JsLocale_init_$Create$(languageTag) {
    return JsLocale_init_$Init$(languageTag, objectCreate(protoOf(JsLocale)));
  }
  function JsLocale(locale) {
    this.o3m_1 = locale;
  }
  protoOf(JsLocale).p3m = function () {
    return this.o3m_1.language;
  };
  protoOf(JsLocale).l3l = function () {
    return this.o3m_1.baseName;
  };
  function toIntlLocale(_this__u8e3s4) {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return parseLanguageTagToIntlLocale(_this__u8e3s4);
  }
  function parseLanguageTagToIntlLocale(languageTag) {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return new Intl.Locale(languageTag);
  }
  function isRtl(_this__u8e3s4) {
    _init_properties_JsPlatformLocale_js_kt__92ki1d();
    return get_rtlLanguagesSet().m(_this__u8e3s4.p3m());
  }
  function createPlatformLocaleDelegate$1() {
  }
  protoOf(createPlatformLocaleDelegate$1).dw = function () {
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = userPreferredLanguages();
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.intl.<no name provided>.<get-current>.<anonymous>' call
      tmp$ret$0 = new Locale(JsLocale_init_$Create$(item));
      tmp0_mapTo.a(tmp$ret$0);
    }
    return new LocaleList(tmp0_mapTo);
  };
  var properties_initialized_JsPlatformLocale_js_kt_nild9t;
  function _init_properties_JsPlatformLocale_js_kt__92ki1d() {
    if (!properties_initialized_JsPlatformLocale_js_kt_nild9t) {
      properties_initialized_JsPlatformLocale_js_kt_nild9t = true;
      rtlLanguagesSet = setOf(['ar', 'fa', 'he', 'iw', 'ji', 'ur', 'yi']);
    }
  }
  function currentPlatform() {
    switch (get_hostOs().w4_1) {
      case 0:
        return Platform_Android_getInstance();
      case 4:
        return Platform_IOS_getInstance();
      case 3:
        return Platform_MacOS_getInstance();
      case 1:
        return Platform_Linux_getInstance();
      case 2:
        return Platform_Windows_getInstance();
      default:
        return Platform_Unknown_getInstance();
    }
  }
  function loadTypeface(font) {
    if (!(font instanceof PlatformFont)) {
      throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
    }
    var tmp;
    if (font instanceof LoadedFont) {
      tmp = Companion_getInstance_4().x2e(Companion_getInstance_5().c28(font.q3m_1));
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function PlatformFont() {
  }
  protoOf(PlatformFont).t3g = function () {
    return '' + getKClassFromExpression(this).va() + '|' + this.r3m();
  };
  function checkEvicted($this, now) {
    var expireTime = now.n5($this.s3m_1);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.takeWhile' call
    var tmp0_takeWhile = $this.v3m_1.m2();
    var list = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp0_takeWhile.c();
    $l$loop: while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.checkEvicted.<anonymous>' call
      if (!(ensureNotNull($this.v3m_1.l2(item)).s(expireTime) < 0))
        break $l$loop;
      list.a(item);
    }
    var tmp0_iterator_0 = list.c();
    while (tmp0_iterator_0.d()) {
      var element = tmp0_iterator_0.e();
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.checkEvicted.<anonymous>' call
      $this.u3m_1.j8(element);
      $this.v3m_1.j8(element);
    }
  }
  function currentNanoTime$ref() {
    var l = function () {
      return currentNanoTime();
    };
    l.callableName = 'currentNanoTime';
    return l;
  }
  function ExpireAfterAccessCache(expireAfterNanos, currentNanos) {
    var tmp;
    if (currentNanos === VOID) {
      tmp = currentNanoTime$ref();
    } else {
      tmp = currentNanos;
    }
    currentNanos = tmp;
    this.s3m_1 = expireAfterNanos;
    this.t3m_1 = currentNanos;
    this.u3m_1 = HashMap_init_$Create$_0();
    this.v3m_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ExpireAfterAccessCache).n3m = function (key, loader) {
    this.v3m_1.j8(key);
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.u3m_1;
    var value = tmp0_getOrPut.l2(key);
    var tmp;
    if (value == null) {
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.get.<anonymous>' call
      var answer = loader(key);
      tmp0_getOrPut.g3(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var tmp1_also = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.get.<anonymous>' call
    var now = this.t3m_1();
    // Inline function 'kotlin.collections.set' call
    this.v3m_1.g3(key, now);
    checkEvicted(this, now);
    return tmp1_also;
  };
  function get_PUSH_DIRECTIONAL_ISOLATE_RANGE() {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return PUSH_DIRECTIONAL_ISOLATE_RANGE;
  }
  var PUSH_DIRECTIONAL_ISOLATE_RANGE;
  function _StrongDirectionType___init__impl__59uet3(value) {
    return value;
  }
  function Companion_20() {
    Companion_instance_20 = this;
    this.k3m_1 = _StrongDirectionType___init__impl__59uet3(0);
    this.l3m_1 = _StrongDirectionType___init__impl__59uet3(1);
    this.m3m_1 = _StrongDirectionType___init__impl__59uet3(2);
  }
  var Companion_instance_20;
  function Companion_getInstance_34() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function firstStrongDirectionType(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var tmp0_iterator = get_codePointsOutsideDirectionalIsolate(_this__u8e3s4).c();
    $l$loop: while (tmp0_iterator.d()) {
      var codePoint = tmp0_iterator.e();
      var strongDirectionType_0 = strongDirectionType(codePoint);
      var tmp;
      if (strongDirectionType_0 === Companion_getInstance_34().k3m_1) {
        continue $l$loop;
      } else {
        tmp = strongDirectionType_0;
      }
      return tmp;
    }
    return Companion_getInstance_34().k3m_1;
  }
  function codePointAt(_this__u8e3s4, index) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var high = charSequenceGet(_this__u8e3s4, index);
    if (isHighSurrogate(high) ? (index + 1 | 0) < _this__u8e3s4.length : false) {
      var low = charSequenceGet(_this__u8e3s4, index + 1 | 0);
      if (isLowSurrogate(low)) {
        return toCodePoint(Companion_getInstance_6(), high, low);
      }
    }
    // Inline function 'kotlin.code' call
    return Char__toInt_impl_vasixd(high);
  }
  function get_codePointsOutsideDirectionalIsolate(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0(_this__u8e3s4, null));
  }
  function toCodePoint(_this__u8e3s4, high, low) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return (Char__minus_impl_a2frrh(high, _Char___init__impl__6a9atx(55296)) << 10 | Char__minus_impl_a2frrh(low, _Char___init__impl__6a9atx(56320))) + 65536 | 0;
  }
  function get_codePoints(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePoints_$slambda_43x8dt_0(_this__u8e3s4, null));
  }
  function charCount(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return _this__u8e3s4 >= 65536 ? 2 : 1;
  }
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    this.e3n_1 = $this_codePointsOutsideDirectionalIsolate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).h1x = function ($this$sequence, $completion) {
    var tmp = this.i1x($this$sequence, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).se = function (p1, $completion) {
    return this.h1x(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 5;
            this.g3n_1 = 0;
            this.h3n_1 = get_codePoints(this.e3n_1).c();
            this.xd_1 = 1;
            continue $sm;
          case 1:
            if (!this.h3n_1.d()) {
              this.xd_1 = 4;
              continue $sm;
            }

            this.i3n_1 = this.h3n_1.e();
            var progression = get_PUSH_DIRECTIONAL_ISOLATE_RANGE();
            var containsLower = progression.t_1;
            var containsUpper = progression.u_1;
            var containsArg = this.i3n_1;
            if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
              this.g3n_1 = this.g3n_1 + 1 | 0;
              this.xd_1 = 3;
              continue $sm;
            } else {
              if (this.i3n_1 === 8297) {
                if (this.g3n_1 > 0) {
                  this.g3n_1 = this.g3n_1 - 1 | 0;
                }
                this.xd_1 = 3;
                continue $sm;
              } else {
                if (this.g3n_1 === 0) {
                  this.xd_1 = 2;
                  suspendResult = this.f3n_1.m3(this.i3n_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.xd_1 = 3;
                  continue $sm;
                }
              }
            }

          case 2:
            this.xd_1 = 3;
            continue $sm;
          case 3:
            this.xd_1 = 1;
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.ae_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 5) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).i1x = function ($this$sequence, completion) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj(this.e3n_1, completion);
    i.f3n_1 = $this$sequence;
    return i;
  };
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.h1x($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation) {
    this.r3n_1 = $this_codePoints;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePoints_$slambda_43x8dt).h1x = function ($this$sequence, $completion) {
    var tmp = this.i1x($this$sequence, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(_get_codePoints_$slambda_43x8dt).se = function (p1, $completion) {
    return this.h1x(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePoints_$slambda_43x8dt).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 4;
            this.t3n_1 = 0;
            this.xd_1 = 1;
            continue $sm;
          case 1:
            if (!(this.t3n_1 < this.r3n_1.length)) {
              this.xd_1 = 3;
              continue $sm;
            }

            this.u3n_1 = codePointAt(this.r3n_1, this.t3n_1);
            this.xd_1 = 2;
            suspendResult = this.s3n_1.m3(this.u3n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.t3n_1 = this.t3n_1 + charCount(this.u3n_1) | 0;
            this.xd_1 = 1;
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.ae_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 4) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  protoOf(_get_codePoints_$slambda_43x8dt).i1x = function ($this$sequence, completion) {
    var i = new _get_codePoints_$slambda_43x8dt(this.r3n_1, completion);
    i.s3n_1 = $this$sequence;
    return i;
  };
  function _get_codePoints_$slambda_43x8dt_0($this_codePoints, resultContinuation) {
    var i = new _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.h1x($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_CharHelpers_skiko_kt_d762bq;
  function _init_properties_CharHelpers_skiko_kt__8ej40s() {
    if (!properties_initialized_CharHelpers_skiko_kt_d762bq) {
      properties_initialized_CharHelpers_skiko_kt_d762bq = true;
      PUSH_DIRECTIONAL_ISOLATE_RANGE = numberRangeToNumber(8294, 8296);
    }
  }
  function PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    PlatformTextStyle.call($this);
    $this.h3c_1 = spanStyle;
    $this.i3c_1 = paragraphStyle;
    return $this;
  }
  function PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(PlatformTextStyle)));
  }
  protoOf(PlatformTextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformTextStyle))
      return false;
    if (!equals(this.i3c_1, other.i3c_1))
      return false;
    if (!equals(this.h3c_1, other.h3c_1))
      return false;
    return true;
  };
  protoOf(PlatformTextStyle).hashCode = function () {
    return getObjectHashCode(this);
  };
  function PlatformTextStyle() {
    this.j3c_1 = 0;
  }
  function createPlatformTextStyle(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle);
  }
  function Paragraph_1() {
  }
  function _get_text__de5ose($this) {
    return $this.l3o_1.x3n_1;
  }
  function getLineMetricsForVerticalPosition($this, vertical) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var indexedObject = _get_lineMetrics__5iiuki($this);
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineMetricsForVerticalPosition.<anonymous>' call
        if (vertical < element.g2h_1 + element.b2h_1) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function _get_lineMetrics__5iiuki($this) {
    var tmp;
    if (_get_text__de5ose($this) === '') {
      var metrics = $this.m3o_1.s3o().q28();
      var ascent = -metrics.k29_1;
      var descent = metrics.l29_1;
      var baseline = $this.n3o_1.p2h();
      // Inline function 'kotlin.with' call
      var tmp0_with = $this.m3o_1.t3o().q2i();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lineMetrics>.<anonymous>' call
      var tmp_0;
      if (((tmp0_with.q2j() ? !tmp0_with.r2j() : false) ? tmp0_with.u2j() : false) ? tmp0_with.l2j() > 0.0 : false) {
        tmp_0 = tmp0_with.u21() * tmp0_with.l2j();
      } else {
        tmp_0 = ascent + descent;
      }
      var height = tmp_0;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = [new LineMetrics(0, 0, 0, 0, true, ascent, descent, ascent, height, 0.0, 0.0, baseline, 0)];
    } else {
      var tmp_1 = $this.n3o_1.w2h();
      tmp = isArray(tmp_1) ? tmp_1 : THROW_CCE();
    }
    return tmp;
  }
  function getBoxBackwardByOffset($this, offset, end) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= offset ? offset <= _get_text__de5ose($this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose($this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var from = offset - 1 | 0;
    var isRtl = $this.l3o_1.d3o_1.equals(ResolvedTextDirection_Rtl_getInstance());
    while (from >= 0) {
      var box = firstOrNull($this.n3o_1.t2h(from, end, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (box == null)
        from = from - 1 | 0;
      else if (charSequenceGet(_get_text__de5ose($this), from) === _Char___init__impl__6a9atx(10)) {
        var tmp;
        if (!isRtl) {
          var bottom = box.v2j_1.z25_1 + box.v2j_1.z25_1 - box.v2j_1.x25_1;
          var rect = new Rect(0.0, box.v2j_1.z25_1, 0.0, bottom);
          return new TextBox(rect, box.x2j());
        } else {
          var tmp_0;
          if (from === get_lastIndex_0(_get_text__de5ose($this))) {
            var bottom_0 = box.v2j_1.z25_1 + box.v2j_1.z25_1 - box.v2j_1.x25_1;
            var rect_0 = new Rect($this.t21(), box.v2j_1.z25_1, $this.t21(), bottom_0);
            tmp_0 = new TextBox(rect_0, box.x2j());
          } else {
            var nextBox = first_0($this.n3o_1.t2h(offset, offset + 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
            var rect_1 = new Rect(nextBox.v2j_1.w25_1, nextBox.v2j_1.x25_1, nextBox.v2j_1.w25_1, nextBox.v2j_1.z25_1);
            tmp_0 = new TextBox(rect_1, nextBox.x2j());
          }
          tmp = tmp_0;
        }
        return tmp;
      } else
        return box;
    }
    return null;
  }
  function getBoxBackwardByOffset$default($this, offset, end, $super) {
    end = end === VOID ? offset : end;
    return getBoxBackwardByOffset($this, offset, end);
  }
  function SkiaParagraph(intrinsics, maxLines, ellipsis, constraints) {
    this.h3o_1 = maxLines;
    this.i3o_1 = ellipsis;
    this.j3o_1 = constraints;
    this.k3o_1 = this.i3o_1 ? '\u2026' : '';
    var tmp = this;
    tmp.l3o_1 = intrinsics instanceof SkiaParagraphIntrinsics ? intrinsics : THROW_CCE();
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.l3o_1.u3o();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.layouter.<anonymous>' call
    tmp0_apply.v3o(this.h3o_1, this.k3o_1);
    tmp_0.m3o_1 = tmp0_apply;
    this.n3o_1 = this.m3o_1.w3o(this.t21());
    this.n3o_1.r2h(this.t21());
  }
  protoOf(SkiaParagraph).t21 = function () {
    return _Constraints___get_maxWidth__impl__uuyqc(this.j3o_1);
  };
  protoOf(SkiaParagraph).u21 = function () {
    return this.n3o_1.u21();
  };
  protoOf(SkiaParagraph).v36 = function () {
    var tmp0_safe_receiver = firstOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-firstBaseline>.<anonymous>' call
      tmp = tmp0_safe_receiver.g2h_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).w36 = function () {
    var tmp0_safe_receiver = lastOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lastBaseline>.<anonymous>' call
      tmp = tmp0_safe_receiver.g2h_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).l36 = function () {
    return this.n3o_1.q2h();
  };
  protoOf(SkiaParagraph).k36 = function () {
    var tmp;
    if (_get_text__de5ose(this) === '' ? true : this.n3o_1.x2h() < 1) {
      tmp = 1;
    } else {
      tmp = this.n3o_1.x2h();
    }
    return tmp;
  };
  protoOf(SkiaParagraph).t36 = function () {
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.n3o_1.u2h();
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(tmp0_map.length);
    var inductionVariable = 0;
    var last = tmp0_map.length;
    while (inductionVariable < last) {
      var item = tmp0_map[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-placeholderRects>.<anonymous>' call
      tmp$ret$0 = toComposeRect(item.v2j_1);
      tmp0_mapTo.a(tmp$ret$0);
    }
    return tmp0_mapTo;
  };
  protoOf(SkiaParagraph).c37 = function (start, end) {
    var boxes = this.n3o_1.t2h(start, end, RectHeightMode_MAX_getInstance(), RectWidthMode_TIGHT_getInstance());
    var path = Path();
    var inductionVariable = 0;
    var last = boxes.length;
    while (inductionVariable < last) {
      var b = boxes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      asSkiaPath(path).z2c(b.v2j_1);
    }
    return path;
  };
  protoOf(SkiaParagraph).l37 = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineTop.<anonymous>' call
      // Inline function 'kotlin.math.floor' call
      var tmp0_floor = tmp0_safe_receiver.g2h_1 - tmp0_safe_receiver.a2h_1;
      tmp = Math.floor(tmp0_floor);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).n37 = function (lineIndex, visibleEnd) {
    var tmp0_elvis_lhs = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var metrics = tmp;
    var tmp_0;
    if (visibleEnd) {
      var tmp_1;
      if (lineIndex > 0 ? metrics.v2g_1 < _get_lineMetrics__5iiuki(this)[lineIndex - 1 | 0].w2g_1 : false) {
        tmp_1 = metrics.w2g_1;
      } else if (metrics.v2g_1 < _get_text__de5ose(this).length ? charSequenceGet(_get_text__de5ose(this), metrics.v2g_1) === _Char___init__impl__6a9atx(10) : false) {
        tmp_1 = metrics.v2g_1;
      } else {
        tmp_1 = metrics.x2g_1;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = metrics.w2g_1;
    }
    return tmp_0;
  };
  protoOf(SkiaParagraph).f37 = function (vertical) {
    var tmp0_safe_receiver = getLineMetricsForVerticalPosition(this, vertical);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h2h_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).i37 = function (position) {
    var glyphPosition = this.n3o_1.v2h(_Offset___get_x__impl__xvi35n(position), _Offset___get_y__impl__8bzhra(position)).z2i_1;
    var tmp0_elvis_lhs = getLineMetricsForVerticalPosition(this, _Offset___get_y__impl__8bzhra(position));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return glyphPosition;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var expectedLine = tmp;
    var isNotEmptyLine = expectedLine.v2g_1 < expectedLine.w2g_1;
    if (_Offset___get_x__impl__xvi35n(position) > expectedLine.f2h_1 ? _Offset___get_x__impl__xvi35n(position) < expectedLine.i2h() : false) {
      return glyphPosition;
    }
    var tmp_0;
    if (isNotEmptyLine) {
      tmp_0 = this.n3o_1.t2h(expectedLine.v2g_1, expectedLine.z2g_1 ? expectedLine.w2g_1 : expectedLine.w2g_1 - 1 | 0, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance());
    } else {
      tmp_0 = null;
    }
    var rects = tmp_0;
    var tmp2_safe_receiver = rects == null ? null : firstOrNull(rects);
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.v2j_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.w25_1;
    var leftX = tmp4_elvis_lhs == null ? expectedLine.f2h_1 : tmp4_elvis_lhs;
    var tmp6_safe_receiver = rects == null ? null : lastOrNull(rects);
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.v2j_1;
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.y25_1;
    var rightX = tmp8_elvis_lhs == null ? expectedLine.i2h() : tmp8_elvis_lhs;
    if (leftX === rightX) {
      return glyphPosition;
    }
    var correctedGlyphPosition = glyphPosition;
    if (_Offset___get_x__impl__xvi35n(position) <= leftX) {
      correctedGlyphPosition = this.n3o_1.v2h(leftX + 1.0, _Offset___get_y__impl__8bzhra(position)).z2i_1;
    } else if (_Offset___get_x__impl__xvi35n(position) >= rightX) {
      correctedGlyphPosition = this.n3o_1.v2h(rightX - 1.0, _Offset___get_y__impl__8bzhra(position)).z2i_1;
      var tmp_1;
      if (0 <= correctedGlyphPosition ? correctedGlyphPosition <= (charSequenceLength(_get_text__de5ose(this)) - 1 | 0) : false) {
        tmp_1 = isNeutralDirection(codePointAt(_get_text__de5ose(this), correctedGlyphPosition));
      } else {
        tmp_1 = false;
      }
      var isNeutralChar = tmp_1;
      var tmp_2;
      if (!isNeutralChar) {
        var tmp9_safe_receiver = getBoxBackwardByOffset$default(this, correctedGlyphPosition);
        tmp_2 = equals(tmp9_safe_receiver == null ? null : tmp9_safe_receiver.x2j(), Direction_RTL_getInstance());
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        correctedGlyphPosition = correctedGlyphPosition - 1 | 0;
      }
    }
    return correctedGlyphPosition;
  };
  protoOf(SkiaParagraph).y36 = function (canvas, color, shadow, textDecoration, drawStyle, blendMode) {
    var tmp = this;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.m3o_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    tmp0_with.x3o(color, shadow, textDecoration);
    tmp0_with.y3o(drawStyle);
    tmp0_with.z3o(blendMode);
    tmp.n3o_1 = tmp0_with.w3o(this.t21());
    this.n3o_1.s2h(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  protoOf(SkiaParagraph).a37 = function (canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode) {
    var tmp = this;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.m3o_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    tmp0_with.a3p(brush, Size(this.t21(), this.u21()), alpha, shadow, textDecoration);
    tmp0_with.y3o(drawStyle);
    tmp0_with.z3o(blendMode);
    tmp.n3o_1 = tmp0_with.w3o(this.t21());
    this.n3o_1.s2h(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  function createFontFamilyResolver() {
    return new FontFamilyResolverImpl(new SkiaFontLoader());
  }
  function createFontFamilyResolver_0(fontCache) {
    return new FontFamilyResolverImpl(new SkiaFontLoader(fontCache));
  }
  function PlatformFontFamilyTypefaceAdapter() {
  }
  protoOf(PlatformFontFamilyTypefaceAdapter).m3g = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.l3f_1;
    if (tmp instanceof FontListFontFamily)
      return null;
    var skiaFontLoader = platformFontLoader instanceof SkiaFontLoader ? platformFontLoader : THROW_CCE();
    var tmp0_elvis_lhs = typefaceRequest.l3f_1;
    var result = skiaFontLoader.d3p(tmp0_elvis_lhs == null ? Companion_getInstance_16().z3a_1 : tmp0_elvis_lhs, typefaceRequest.m3f_1, typefaceRequest.n3f_1);
    return new Immutable(result);
  };
  function SkiaFontLoader(fontCache) {
    fontCache = fontCache === VOID ? new FontCache() : fontCache;
    this.b3p_1 = fontCache;
    this.c3p_1 = this.b3p_1;
  }
  protoOf(SkiaFontLoader).e3p = function () {
    return this.b3p_1.f3p_1;
  };
  protoOf(SkiaFontLoader).n3k = function (font) {
    if (!(font instanceof PlatformFont)) {
      if (!(font.s3e() === Companion_getInstance_19().u3e_1)) {
        throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + font);
      }
      return null;
    }
    var tmp0_subject = font.s3e();
    var tmp;
    if (tmp0_subject === Companion_getInstance_19().t3e_1) {
      tmp = this.b3p_1.j3p(font);
    } else if (tmp0_subject === Companion_getInstance_19().u3e_1) {
      // Inline function 'kotlin.Result.getOrNull' call
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance_3();
        // Inline function 'androidx.compose.ui.text.font.SkiaFontLoader.loadBlocking.<anonymous>' call
        var tmp1_success = this.b3p_1.j3p(font);
        tmp_0 = _Result___init__impl__xyqfz8(tmp1_success);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance_3();
          tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp0_getOrNull = tmp_0;
      var tmp_2;
      if (_Result___get_isFailure__impl__jpiriv(tmp0_getOrNull)) {
        tmp_2 = null;
      } else {
        var tmp_3 = _Result___get_value__impl__bjfvqg(tmp0_getOrNull);
        tmp_2 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      }
      tmp = tmp_2;
    } else if (tmp0_subject === Companion_getInstance_19().v3e_1) {
      throw UnsupportedOperationException_init_$Create$('Unsupported Async font load path');
    } else {
      throw IllegalArgumentException_init_$Create$('Unknown loading type ' + new FontLoadingStrategy(font.s3e()));
    }
    return tmp;
  };
  protoOf(SkiaFontLoader).d3p = function (fontFamily, fontWeight, fontStyle) {
    return this.b3p_1.d3p(fontFamily, fontWeight, fontStyle);
  };
  protoOf(SkiaFontLoader).k3p = function (font, $completion) {
    return this.n3k(font);
  };
  protoOf(SkiaFontLoader).t3i = function (font, $completion) {
    return this.k3p(font, $completion);
  };
  protoOf(SkiaFontLoader).t3g = function () {
    return this.c3p_1;
  };
  function ParagraphLayouter(text, textDirection, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.o3o_1 = text;
    this.p3o_1 = new ParagraphBuilder_0(fontFamilyResolver, this.o3o_1, style, VOID, VOID, VOID, spanStyles, placeholders, density, textDirection);
    this.q3o_1 = null;
    var tmp = this;
    FloatCompanionObject_getInstance();
    tmp.r3o_1 = NaN;
  }
  protoOf(ParagraphLayouter).s3o = function () {
    return this.p3o_1.s3o();
  };
  protoOf(ParagraphLayouter).t3o = function () {
    return this.p3o_1.t3o();
  };
  protoOf(ParagraphLayouter).v3o = function (maxLines, ellipsis) {
    if (!(this.p3o_1.q3p_1 === maxLines) ? true : !(this.p3o_1.p3p_1 === ellipsis)) {
      this.p3o_1.q3p_1 = maxLines;
      this.p3o_1.p3p_1 = ellipsis;
      this.q3o_1 = null;
    }
  };
  protoOf(ParagraphLayouter).x3o = function (color, shadow, textDecoration) {
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _Color___get_value__impl__1pls5m(Companion_getInstance().f2t_1))) {
      tmp = color;
    } else {
      // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.setTextStyle.<anonymous>' call
      tmp = this.p3o_1.n3p_1.g32();
    }
    var actualColor = tmp;
    if ((!equals(this.p3o_1.n3p_1.g32(), actualColor) ? true : !equals(this.p3o_1.n3p_1.d3d(), shadow)) ? true : !equals(this.p3o_1.n3p_1.c3d(), textDecoration)) {
      this.p3o_1.n3p_1 = this.p3o_1.n3p_1.o3c(actualColor, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow);
      this.q3o_1 = null;
    }
  };
  protoOf(ParagraphLayouter).a3p = function (brush, brushSize, alpha, shadow, textDecoration) {
    var actualSize = this.p3o_1.o3p_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    if (!equals(this.p3o_1.n3p_1.q39(), brush)) {
      tmp_4 = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
      tmp_4 = _Size___get_packedValue__impl__7rlt1o(actualSize).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_7().j22_1));
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = !sameValueAs(_Size___get_width__impl__58y75t(actualSize), _Size___get_width__impl__58y75t(brushSize));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = !sameValueAs(_Size___get_height__impl__a04p02(actualSize), _Size___get_height__impl__a04p02(brushSize));
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = !sameValueAs(this.p3o_1.n3p_1.a2p(), alpha);
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = !equals(this.p3o_1.n3p_1.d3d(), shadow);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !equals(this.p3o_1.n3p_1.c3d(), textDecoration);
    }
    if (tmp) {
      this.p3o_1.n3p_1 = this.p3o_1.n3p_1.q3c(brush, alpha, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow);
      this.p3o_1.o3p_1 = brushSize;
      this.q3o_1 = null;
    }
  };
  protoOf(ParagraphLayouter).y3o = function (drawStyle) {
    if (!equals(this.p3o_1.v3p_1, drawStyle)) {
      this.p3o_1.v3p_1 = drawStyle;
      this.q3o_1 = null;
    }
  };
  protoOf(ParagraphLayouter).z3o = function (blendMode) {
    if (!(this.p3o_1.w3p_1 === blendMode)) {
      this.p3o_1.w3p_1 = blendMode;
      this.q3o_1 = null;
    }
  };
  protoOf(ParagraphLayouter).w3o = function (width) {
    var paragraph = this.q3o_1;
    var tmp;
    if (!(paragraph == null)) {
      if (!sameValueAs(this.r3o_1, width)) {
        this.r3o_1 = width;
        paragraph.r2h(width);
      }
      tmp = paragraph;
    } else {
      // Inline function 'kotlin.apply' call
      var tmp0_apply = this.p3o_1.ia();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.layoutParagraph.<anonymous>' call
      this.q3o_1 = tmp0_apply;
      tmp0_apply.r2h(width);
      tmp = tmp0_apply;
    }
    return tmp;
  };
  function sameValueAs(_this__u8e3s4, other) {
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = _this__u8e3s4 - other;
    return Math.abs(tmp0_abs) < 1.0E-5;
  }
  function get_GenericFontFamiliesMapping() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    // Inline function 'kotlin.getValue' call
    GenericFontFamiliesMapping$factory();
    return GenericFontFamiliesMapping$delegate.w1();
  }
  var GenericFontFamiliesMapping$delegate;
  var Platform_Unknown_instance;
  var Platform_Linux_instance;
  var Platform_Windows_instance;
  var Platform_MacOS_instance;
  var Platform_IOS_instance;
  var Platform_TvOS_instance;
  var Platform_WatchOS_instance;
  var Platform_Android_instance;
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_getInstance();
    Platform_entriesInitialized = true;
    Platform_Unknown_instance = new Platform('Unknown', 0);
    Platform_Linux_instance = new Platform('Linux', 1);
    Platform_Windows_instance = new Platform('Windows', 2);
    Platform_MacOS_instance = new Platform('MacOS', 3);
    Platform_IOS_instance = new Platform('IOS', 4);
    Platform_TvOS_instance = new Platform('TvOS', 5);
    Platform_WatchOS_instance = new Platform('WatchOS', 6);
    Platform_Android_instance = new Platform('Android', 7);
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontLoadResult(typeface, aliases) {
    this.d3q_1 = typeface;
    this.e3q_1 = aliases;
    this.f3q_1 = 8;
  }
  function FontLoader() {
    this.g3q_1 = new FontCache();
    this.h3q_1 = createFontFamilyResolver_0(this.g3q_1);
    this.i3q_1 = 0;
  }
  function mapGenericFontFamily($this, generic) {
    var tmp0_elvis_lhs = get_GenericFontFamiliesMapping().l2(generic.e3f_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Unknown generic font family ' + generic.e3f_1;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function ensureRegistered($this, typeface, key) {
    if (!$this.h3p_1.m(key)) {
      $this.g3p_1.w2k(typeface, key);
      $this.h3p_1.a(key);
    }
  }
  function ensureRegistered_0($this, fontFamily) {
    var tmp;
    if (fontFamily instanceof FontListFontFamily) {
      throw IllegalArgumentException_init_$Create$("Don't load FontListFontFamily through ensureRegistered: " + fontFamily);
    } else {
      if (fontFamily instanceof LoadedFontFamily) {
        var tmp_0 = fontFamily.l3q_1;
        var typeface = tmp_0 instanceof SkiaBackedTypeface ? tmp_0 : THROW_CCE();
        var tmp1_elvis_lhs = typeface.m3q_1;
        var alias = tmp1_elvis_lhs == null ? typeface.n3q_1.c2f() : tmp1_elvis_lhs;
        ensureRegistered($this, typeface.n3q_1, alias);
        tmp = listOf_0(alias);
      } else {
        if (fontFamily instanceof GenericFontFamily) {
          tmp = mapGenericFontFamily($this, fontFamily);
        } else {
          if (equals(fontFamily, Companion_getInstance_16().z3a_1)) {
            tmp = mapGenericFontFamily($this, Companion_getInstance_16().a3b_1);
          } else {
            throw IllegalArgumentException_init_$Create$('Unknown font family type: ' + fontFamily);
          }
        }
      }
    }
    return tmp;
  }
  function FontCache$load$lambda($font) {
    return function (it) {
      return loadTypeface($font);
    };
  }
  function FontCache() {
    this.f3p_1 = FontCollection_init_$Create$();
    this.g3p_1 = new TypefaceFontProvider();
    this.h3p_1 = HashSet_init_$Create$();
    this.i3p_1 = new ExpireAfterAccessCache(new Long(-129542144, 13));
    this.f3p_1.n2g(Companion_getInstance_8().a2a_1);
    this.f3p_1.m2g(this.g3p_1);
  }
  protoOf(FontCache).j3p = function (font) {
    var tmp = font.t3g();
    var typeface = this.i3p_1.n3m(tmp, FontCache$load$lambda(font));
    ensureRegistered(this, typeface, font.t3g());
    return new FontLoadResult(typeface, listOf_0(font.t3g()));
  };
  protoOf(FontCache).d3p = function (fontFamily, fontWeight, fontStyle) {
    var aliases = ensureRegistered_0(this, fontFamily);
    var style = toSkFontStyle(fontStyle).h2a(fontWeight.p3k_1);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(aliases);
    return new FontLoadResult(first_0(this.f3p_1.p2g(tmp$ret$0, style)), aliases);
  };
  function SkiaBackedTypeface() {
  }
  function LoadedFont() {
  }
  function GenericFontFamiliesMapping$delegate$lambda() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp;
    switch (currentPlatform().w4_1) {
      case 1:
        tmp = mapOf([to(Companion_getInstance_16().a3b_1.e3f_1, listOf(['Noto Sans', 'DejaVu Sans'])), to(Companion_getInstance_16().b3b_1.e3f_1, listOf(['Noto Serif', 'DejaVu Serif', 'Times New Roman'])), to(Companion_getInstance_16().c3b_1.e3f_1, listOf(['Noto Sans Mono', 'DejaVu Sans Mono'])), to(Companion_getInstance_16().d3b_1.e3f_1, listOf_0('Comic Sans MS'))]);
        break;
      case 2:
        tmp = mapOf([to(Companion_getInstance_16().a3b_1.e3f_1, listOf(['Segoe UI', 'Arial'])), to(Companion_getInstance_16().b3b_1.e3f_1, listOf_0('Times New Roman')), to(Companion_getInstance_16().c3b_1.e3f_1, listOf_0('Consolas')), to(Companion_getInstance_16().d3b_1.e3f_1, listOf_0('Comic Sans MS'))]);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        tmp = mapOf([to(Companion_getInstance_16().a3b_1.e3f_1, listOf(['.AppleSystemUIFont', 'Helvetica Neue', 'Helvetica'])), to(Companion_getInstance_16().b3b_1.e3f_1, listOf(['.AppleSystemUIFontSerif', 'Times', 'Times New Roman'])), to(Companion_getInstance_16().c3b_1.e3f_1, listOf(['.AppleSystemUIFontMonospaced', 'Menlo', 'Courier'])), to(Companion_getInstance_16().d3b_1.e3f_1, listOf(['Apple Chancery', 'Snell Roundhand']))]);
        break;
      case 7:
        tmp = mapOf([to(Companion_getInstance_16().a3b_1.e3f_1, listOf(['Roboto', 'Noto Sans'])), to(Companion_getInstance_16().b3b_1.e3f_1, listOf(['Roboto Serif', 'Noto Serif'])), to(Companion_getInstance_16().c3b_1.e3f_1, listOf(['Roboto Mono', 'Noto Sans Mono'])), to(Companion_getInstance_16().d3b_1.e3f_1, listOf_0('Comic Sans MS'))]);
        break;
      case 0:
        tmp = mapOf([to(Companion_getInstance_16().a3b_1.e3f_1, listOf_0('Arial')), to(Companion_getInstance_16().b3b_1.e3f_1, listOf_0('Times New Roman')), to(Companion_getInstance_16().c3b_1.e3f_1, listOf_0('Consolas')), to(Companion_getInstance_16().d3b_1.e3f_1, listOf_0('Comic Sans MS'))]);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function Platform_Unknown_getInstance() {
    Platform_initEntries();
    return Platform_Unknown_instance;
  }
  function Platform_Linux_getInstance() {
    Platform_initEntries();
    return Platform_Linux_instance;
  }
  function Platform_Windows_getInstance() {
    Platform_initEntries();
    return Platform_Windows_instance;
  }
  function Platform_MacOS_getInstance() {
    Platform_initEntries();
    return Platform_MacOS_instance;
  }
  function Platform_IOS_getInstance() {
    Platform_initEntries();
    return Platform_IOS_instance;
  }
  function Platform_Android_getInstance() {
    Platform_initEntries();
    return Platform_Android_instance;
  }
  function GenericFontFamiliesMapping$factory() {
    return getPropertyCallableRef('GenericFontFamiliesMapping', 0, KProperty0, function () {
      return get_GenericFontFamiliesMapping();
    }, null);
  }
  var properties_initialized_PlatformFont_skiko_kt_pdb6wl;
  function _init_properties_PlatformFont_skiko_kt__1fvojb() {
    if (!properties_initialized_PlatformFont_skiko_kt_pdb6wl) {
      properties_initialized_PlatformFont_skiko_kt_pdb6wl = true;
      GenericFontFamiliesMapping$delegate = lazy_0(GenericFontFamiliesMapping$delegate$lambda);
    }
  }
  function drawMultiParagraph(_this__u8e3s4, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    var tmp;
    if (alpha === VOID) {
      FloatCompanionObject_getInstance();
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_9().p2p_1 : blendMode;
    canvas.r2q();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var tmp0_fastForEach = _this__u8e3s4.f36_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.l(index);
        // Inline function 'androidx.compose.ui.text.platform.drawMultiParagraph.<anonymous>' call
        item.m36_1.a37(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
        canvas.u2q(0.0, item.m36_1.u21());
      }
       while (inductionVariable <= last);
    canvas.s2q();
  }
  function get_DefaultFontSize_0() {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return DefaultFontSize_0;
  }
  var DefaultFontSize_0;
  function get_skTextStylesCache() {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return skTextStylesCache;
  }
  var skTextStylesCache;
  function ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, $this) {
    brushSize = brushSize === VOID ? Companion_getInstance_7().j22_1 : brushSize;
    blendMode = blendMode === VOID ? Companion_getInstance_0().u2v_1 : blendMode;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.<init>.<anonymous>' call
    var tmp = density.j23(spanStyle.a39_1);
    var tmp_0;
    if (get_isUnspecified(spanStyle.g39_1)) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.<init>.<anonymous>' call
      tmp_0 = density.j23(spanStyle.g39_1);
    }
    ComputedStyle.call($this, spanStyle.z38_1, brushSize, tmp, spanStyle.b39_1, spanStyle.c39_1, spanStyle.d39_1, spanStyle.e39_1, spanStyle.f39_1, tmp_0, spanStyle.h39_1, spanStyle.i39_1, spanStyle.j39_1, spanStyle.k39_1, spanStyle.l39_1, spanStyle.m39_1, spanStyle.o39_1, blendMode);
    return $this;
  }
  function ComputedStyle_init_$Create$(density, spanStyle, brushSize, blendMode) {
    return ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, objectCreate(protoOf(ComputedStyle)));
  }
  function toTextPaint($this) {
    // Inline function 'kotlin.let' call
    var tmp0_let = Paint_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toTextPaint.<anonymous>' call
      // Inline function 'kotlin.with' call
      var tmp0_with = asComposePaint(tmp0_let);
      // Inline function 'kotlin.contracts.contract' call
      tmp0_with.f32($this.o3q_1.g32());
      applyBrush(tmp0_with, $this.o3q_1.q39(), $this.p3q_1, $this.o3q_1.a2p());
      applyDrawStyle(tmp0_with, $this.d3r_1);
      tmp0_with.b32($this.e3r_1);
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toTextPaint.<anonymous>.<anonymous>.<anonymous>' call
      if ((!(tmp0_with.h32() == null) ? true : !(tmp0_with.x33() === Companion_getInstance_10().d2w_1)) ? true : !tmp0_let.m2c()) {
        tmp = tmp0_let;
      } else {
        tmp = null;
      }
      tmp$ret$2 = tmp;
      break $l$block;
    }
    return tmp$ret$2;
  }
  function ComputedStyle(textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, blendMode) {
    background = background === VOID ? Companion_getInstance().f2t_1 : background;
    this.o3q_1 = textForegroundStyle;
    this.p3q_1 = brushSize;
    this.q3q_1 = fontSize;
    this.r3q_1 = fontWeight;
    this.s3q_1 = fontStyle;
    this.t3q_1 = fontSynthesis;
    this.u3q_1 = fontFamily;
    this.v3q_1 = fontFeatureSettings;
    this.w3q_1 = letterSpacing;
    this.x3q_1 = baselineShift;
    this.y3q_1 = textGeometricTransform;
    this.z3q_1 = localeList;
    this.a3r_1 = background;
    this.b3r_1 = textDecoration;
    this.c3r_1 = shadow;
    this.d3r_1 = drawStyle;
    this.e3r_1 = blendMode;
  }
  protoOf(ComputedStyle).f3r = function (fontFamilyResolver) {
    var res = TextStyle_init_$Create$();
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp0_get_isSpecified_4wup3r = this.o3q_1.g32();
    if (!equals(_Color___get_value__impl__1pls5m(tmp0_get_isSpecified_4wup3r), _Color___get_value__impl__1pls5m(Companion_getInstance().f2t_1))) {
      res.b2c(toArgb(this.o3q_1.g32()));
    }
    var foreground = toTextPaint(this);
    if (!(foreground == null)) {
      res.c2k(foreground);
    }
    var tmp0_safe_receiver = this.s3q_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.i2k(toSkFontStyle(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.b3r_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.g2k(toSkDecorationStyle(tmp1_safe_receiver, this.o3q_1.g32()));
    }
    if (!equals(this.a3r_1, Companion_getInstance().f2t_1)) {
      // Inline function 'kotlin.also' call
      var tmp1_also = Paint_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      tmp1_also.b2c(toArgb(this.a3r_1));
      res.e2k(tmp1_also);
    }
    var tmp2_safe_receiver = this.r3q_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.i2k(res.a2f().h2a(tmp2_safe_receiver.p3k_1));
    }
    var tmp3_safe_receiver = this.c3r_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      res.k2k(toSkShadow(tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = this.w3q_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      res.p2k(tmp4_safe_receiver);
    }
    var tmp_0 = Companion_getInstance_11();
    var tmp$ret$8;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.v3q_1;
    tmp$ret$8 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    res.m2k(tmp_0.c29(tmp$ret$8));
    res.j2j(this.q3q_1);
    var tmp5_safe_receiver = this.u3q_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_elvis_lhs_0 = this.r3q_1;
      var tmp_1 = tmp0_elvis_lhs_0 == null ? Companion_getInstance_22().m3a_1 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs = this.s3q_1;
      var tmp_2;
      var tmp_3 = tmp1_elvis_lhs;
      if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
        tmp_2 = Companion_getInstance_20().t3a_1;
      } else {
        tmp_2 = tmp1_elvis_lhs;
      }
      var tmp_4 = tmp_2;
      var tmp2_elvis_lhs = this.t3q_1;
      var tmp_5;
      var tmp_6 = tmp2_elvis_lhs;
      if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
        tmp_5 = Companion_getInstance_21().v3a_1;
      } else {
        tmp_5 = tmp2_elvis_lhs;
      }
      var tmp_7 = fontFamilyResolver.o3g(tmp5_safe_receiver, tmp_1, tmp_4, tmp_5).w1();
      var resolved = tmp_7 instanceof FontLoadResult ? tmp_7 : THROW_CCE();
      var tmp$ret$9;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp0_toTypedArray = resolved.e3q_1;
      tmp$ret$9 = copyToArray(tmp0_toTypedArray);
      res.n2k(tmp$ret$9);
    }
    var tmp6_safe_receiver = this.x3q_1;
    var tmp_8 = tmp6_safe_receiver;
    if ((tmp_8 == null ? null : new BaselineShift(tmp_8)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var fontMetrics = res.t2k();
      res.r2k(_BaselineShift___get_multiplier__impl__qhmjek(tmp6_safe_receiver) * fontMetrics.k29_1);
    }
    return res;
  };
  protoOf(ComputedStyle).g3r = function (density, other) {
    var fontSize = fontSizeInHierarchy(density, this.q3q_1, other.a39_1);
    this.o3q_1 = this.o3q_1.w39(other.z38_1);
    var tmp0_safe_receiver = other.e39_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.u3q_1 = tmp0_safe_receiver;
    }
    this.q3q_1 = fontSize;
    var tmp1_safe_receiver = other.b39_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.r3q_1 = tmp1_safe_receiver;
    }
    var tmp2_safe_receiver = other.c39_1;
    var tmp = tmp2_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.s3q_1 = tmp2_safe_receiver;
    }
    var tmp3_safe_receiver = other.d39_1;
    var tmp_0 = tmp3_safe_receiver;
    if ((tmp_0 == null ? null : new FontSynthesis(tmp_0)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.t3q_1 = tmp3_safe_receiver;
    }
    var tmp4_safe_receiver = other.f39_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.v3q_1 = tmp4_safe_receiver;
    }
    if (!get_isUnspecified(other.g39_1)) {
      var tmp_1 = this;
      // Inline function 'kotlin.with' call
      var tmp0_with = other.g39_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      var tmp_2;
      if (_TextUnit___get_isEm__impl__esrmtl(tmp0_with)) {
        tmp_2 = fontSize * _TextUnit___get_value__impl__hpbx0k(tmp0_with);
      } else if (_TextUnit___get_isSp__impl__8c3r6q(tmp0_with)) {
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>.<anonymous>' call
        tmp_2 = density.j23(tmp0_with);
      } else {
        throw UnsupportedOperationException_init_$Create$_0();
      }
      tmp_1.w3q_1 = tmp_2;
    }
    var tmp5_safe_receiver = other.h39_1;
    var tmp_3 = tmp5_safe_receiver;
    if ((tmp_3 == null ? null : new BaselineShift(tmp_3)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.x3q_1 = tmp5_safe_receiver;
    }
    var tmp6_safe_receiver = other.i39_1;
    if (tmp6_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.y3q_1 = tmp6_safe_receiver;
    }
    var tmp7_safe_receiver = other.j39_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.z3q_1 = tmp7_safe_receiver;
    }
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp1_get_isSpecified_hgvfca = other.k39_1;
    if (!equals(_Color___get_value__impl__1pls5m(tmp1_get_isSpecified_hgvfca), _Color___get_value__impl__1pls5m(Companion_getInstance().f2t_1))) {
      this.a3r_1 = other.k39_1;
    }
    var tmp8_safe_receiver = other.l39_1;
    if (tmp8_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.b3r_1 = tmp8_safe_receiver;
    }
    var tmp9_safe_receiver = other.m39_1;
    if (tmp9_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.c3r_1 = tmp9_safe_receiver;
    }
    var tmp10_safe_receiver = other.o39_1;
    if (tmp10_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.d3r_1 = tmp10_safe_receiver;
    }
  };
  protoOf(ComputedStyle).toString = function () {
    var tmp = this.o3q_1;
    var tmp_0 = new Size_0(this.p3q_1);
    var tmp_1 = this.q3q_1;
    var tmp_2 = this.r3q_1;
    var tmp_3 = this.s3q_1;
    var tmp_4 = tmp_3 == null ? null : new FontStyle(tmp_3);
    var tmp_5 = this.t3q_1;
    var tmp_6 = tmp_5 == null ? null : new FontSynthesis(tmp_5);
    var tmp_7 = this.u3q_1;
    var tmp_8 = this.v3q_1;
    var tmp_9 = this.w3q_1;
    var tmp_10 = this.x3q_1;
    return 'ComputedStyle(textForegroundStyle=' + tmp + ', brushSize=' + tmp_0 + ', fontSize=' + tmp_1 + ', fontWeight=' + tmp_2 + ', fontStyle=' + tmp_4 + ', fontSynthesis=' + tmp_6 + ', fontFamily=' + tmp_7 + ', fontFeatureSettings=' + tmp_8 + ', letterSpacing=' + tmp_9 + ', baselineShift=' + (tmp_10 == null ? null : new BaselineShift(tmp_10)) + ', textGeometricTransform=' + this.y3q_1 + ', localeList=' + this.z3q_1 + ', background=' + new Color(this.a3r_1) + ', textDecoration=' + this.b3r_1 + ', shadow=' + this.c3r_1 + ', drawStyle=' + this.d3r_1 + ', blendMode=' + new BlendMode(this.e3r_1) + ')';
  };
  protoOf(ComputedStyle).hashCode = function () {
    var result = hashCode(this.o3q_1);
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.p3q_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q3q_1) | 0;
    result = imul(result, 31) + (this.r3q_1 == null ? 0 : this.r3q_1.hashCode()) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.s3q_1;
    if ((tmp_1 == null ? null : new FontStyle(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = FontStyle__hashCode_impl_7qhg4w(this.s3q_1);
    }
    result = tmp + tmp_0 | 0;
    var tmp_2 = imul(result, 31);
    var tmp_3;
    var tmp_4 = this.t3q_1;
    if ((tmp_4 == null ? null : new FontSynthesis(tmp_4)) == null) {
      tmp_3 = 0;
    } else {
      tmp_3 = FontSynthesis__hashCode_impl_4wi11v(this.t3q_1);
    }
    result = tmp_2 + tmp_3 | 0;
    result = imul(result, 31) + (this.u3q_1 == null ? 0 : hashCode(this.u3q_1)) | 0;
    result = imul(result, 31) + (this.v3q_1 == null ? 0 : getStringHashCode(this.v3q_1)) | 0;
    result = imul(result, 31) + (this.w3q_1 == null ? 0 : getNumberHashCode(this.w3q_1)) | 0;
    var tmp_5 = imul(result, 31);
    var tmp_6;
    var tmp_7 = this.x3q_1;
    if ((tmp_7 == null ? null : new BaselineShift(tmp_7)) == null) {
      tmp_6 = 0;
    } else {
      tmp_6 = BaselineShift__hashCode_impl_g0potx(this.x3q_1);
    }
    result = tmp_5 + tmp_6 | 0;
    result = imul(result, 31) + (this.y3q_1 == null ? 0 : this.y3q_1.hashCode()) | 0;
    result = imul(result, 31) + (this.z3q_1 == null ? 0 : this.z3q_1.hashCode()) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.a3r_1) | 0;
    result = imul(result, 31) + (this.b3r_1 == null ? 0 : this.b3r_1.hashCode()) | 0;
    result = imul(result, 31) + (this.c3r_1 == null ? 0 : this.c3r_1.hashCode()) | 0;
    result = imul(result, 31) + (this.d3r_1 == null ? 0 : hashCode(this.d3r_1)) | 0;
    result = imul(result, 31) + BlendMode__hashCode_impl_93ceri(this.e3r_1) | 0;
    return result;
  };
  protoOf(ComputedStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ComputedStyle ? other : THROW_CCE();
    if (!equals(this.o3q_1, tmp0_other_with_cast.o3q_1))
      return false;
    if (!equals(this.p3q_1, tmp0_other_with_cast.p3q_1))
      return false;
    if (!equals(this.q3q_1, tmp0_other_with_cast.q3q_1))
      return false;
    if (!equals(this.r3q_1, tmp0_other_with_cast.r3q_1))
      return false;
    var tmp = this.s3q_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = tmp0_other_with_cast.s3q_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.t3q_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = tmp0_other_with_cast.t3q_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.u3q_1, tmp0_other_with_cast.u3q_1))
      return false;
    if (!(this.v3q_1 == tmp0_other_with_cast.v3q_1))
      return false;
    if (!equals(this.w3q_1, tmp0_other_with_cast.w3q_1))
      return false;
    var tmp_5 = this.x3q_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = tmp0_other_with_cast.x3q_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.y3q_1, tmp0_other_with_cast.y3q_1))
      return false;
    if (!equals(this.z3q_1, tmp0_other_with_cast.z3q_1))
      return false;
    if (!equals(this.a3r_1, tmp0_other_with_cast.a3r_1))
      return false;
    if (!equals(this.b3r_1, tmp0_other_with_cast.b3r_1))
      return false;
    if (!equals(this.c3r_1, tmp0_other_with_cast.c3r_1))
      return false;
    if (!equals(this.d3r_1, tmp0_other_with_cast.d3r_1))
      return false;
    if (!(this.e3r_1 === tmp0_other_with_cast.e3r_1))
      return false;
    return true;
  };
  function toSkFontStyle(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return _this__u8e3s4 === Companion_getInstance_20().u3a_1 ? Companion_getInstance_12().e2a_1 : Companion_getInstance_12().c2a_1;
  }
  function toSkDecorationStyle(_this__u8e3s4, color) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var underline = _this__u8e3s4.t3l(Companion_getInstance_28().j3b_1);
    var overline = false;
    var lineThrough = _this__u8e3s4.t3l(Companion_getInstance_28().k3b_1);
    var gaps = false;
    var lineStyle = DecorationLineStyle_SOLID_getInstance();
    var thicknessMultiplier = 1.0;
    return new DecorationStyle(underline, overline, lineThrough, gaps, toArgb(color), lineStyle, thicknessMultiplier);
  }
  function toSkShadow(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return new Shadow(toArgb(_this__u8e3s4.u2w_1), _Offset___get_x__impl__xvi35n(_this__u8e3s4.v2w_1), _Offset___get_y__impl__8bzhra(_this__u8e3s4.v2w_1), _this__u8e3s4.w2w_1);
  }
  function fontSizeInHierarchy(density, base, other) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    if (get_isUnspecified(other)) {
      tmp = base;
    } else if (_TextUnit___get_isEm__impl__esrmtl(other)) {
      tmp = base * _TextUnit___get_value__impl__hpbx0k(other);
    } else if (_TextUnit___get_isSp__impl__8c3r6q(other)) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.fontSizeInHierarchy.<anonymous>' call
      tmp = density.j23(other);
    } else {
      throw IllegalStateException_init_$Create$('Unexpected size in fontSizeInHierarchy');
    }
    return tmp;
  }
  function ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return new SkiaParagraph(paragraphIntrinsics instanceof SkiaParagraphIntrinsics ? paragraphIntrinsics : THROW_CCE(), maxLines, ellipsis, constraints);
  }
  function StyleAdd(position, style) {
    Op.call(this);
    this.h3r_1 = position;
    this.i3r_1 = style;
    this.j3r_1 = 8;
  }
  protoOf(StyleAdd).k3r = function () {
    return this.h3r_1;
  };
  protoOf(StyleAdd).toString = function () {
    return 'StyleAdd(position=' + this.h3r_1 + ', style=' + this.i3r_1 + ')';
  };
  protoOf(StyleAdd).hashCode = function () {
    var result = this.h3r_1;
    result = imul(result, 31) + this.i3r_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd ? other : THROW_CCE();
    if (!(this.h3r_1 === tmp0_other_with_cast.h3r_1))
      return false;
    if (!this.i3r_1.equals(tmp0_other_with_cast.i3r_1))
      return false;
    return true;
  };
  function PutPlaceholder(cut, width, height) {
    Op.call(this);
    this.l3r_1 = cut;
    this.m3r_1 = width;
    this.n3r_1 = height;
    this.o3r_1 = position$factory(this.l3r_1);
    this.p3r_1 = 8;
  }
  protoOf(PutPlaceholder).k3r = function () {
    // Inline function 'kotlin.getValue' call
    position$factory_0();
    return this.o3r_1.get();
  };
  protoOf(PutPlaceholder).toString = function () {
    return 'PutPlaceholder(cut=' + this.l3r_1 + ', width=' + this.m3r_1 + ', height=' + this.n3r_1 + ')';
  };
  protoOf(PutPlaceholder).hashCode = function () {
    var result = this.l3r_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.m3r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.n3r_1) | 0;
    return result;
  };
  protoOf(PutPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder ? other : THROW_CCE();
    if (!this.l3r_1.equals(tmp0_other_with_cast.l3r_1))
      return false;
    if (!equals(this.m3r_1, tmp0_other_with_cast.m3r_1))
      return false;
    if (!equals(this.n3r_1, tmp0_other_with_cast.n3r_1))
      return false;
    return true;
  };
  function EndPlaceholder(cut) {
    Op.call(this);
    this.q3r_1 = cut;
    this.r3r_1 = position$factory_1(this.q3r_1);
    this.s3r_1 = 8;
  }
  protoOf(EndPlaceholder).k3r = function () {
    // Inline function 'kotlin.getValue' call
    position$factory_2();
    return this.r3r_1.get();
  };
  protoOf(EndPlaceholder).toString = function () {
    return 'EndPlaceholder(cut=' + this.q3r_1 + ')';
  };
  protoOf(EndPlaceholder).hashCode = function () {
    return this.q3r_1.hashCode();
  };
  protoOf(EndPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder ? other : THROW_CCE();
    if (!this.q3r_1.equals(tmp0_other_with_cast.q3r_1))
      return false;
    return true;
  };
  function StyleAdd_0(position, style) {
    Cut.call(this);
    this.t3r_1 = position;
    this.u3r_1 = style;
    this.v3r_1 = 0;
  }
  protoOf(StyleAdd_0).k3r = function () {
    return this.t3r_1;
  };
  protoOf(StyleAdd_0).toString = function () {
    return 'StyleAdd(position=' + this.t3r_1 + ', style=' + this.u3r_1 + ')';
  };
  protoOf(StyleAdd_0).hashCode = function () {
    var result = this.t3r_1;
    result = imul(result, 31) + this.u3r_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd_0))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd_0 ? other : THROW_CCE();
    if (!(this.t3r_1 === tmp0_other_with_cast.t3r_1))
      return false;
    if (!this.u3r_1.equals(tmp0_other_with_cast.u3r_1))
      return false;
    return true;
  };
  function StyleRemove(position, style) {
    Cut.call(this);
    this.w3r_1 = position;
    this.x3r_1 = style;
    this.y3r_1 = 0;
  }
  protoOf(StyleRemove).k3r = function () {
    return this.w3r_1;
  };
  protoOf(StyleRemove).toString = function () {
    return 'StyleRemove(position=' + this.w3r_1 + ', style=' + this.x3r_1 + ')';
  };
  protoOf(StyleRemove).hashCode = function () {
    var result = this.w3r_1;
    result = imul(result, 31) + this.x3r_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleRemove).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleRemove))
      return false;
    var tmp0_other_with_cast = other instanceof StyleRemove ? other : THROW_CCE();
    if (!(this.w3r_1 === tmp0_other_with_cast.w3r_1))
      return false;
    if (!this.x3r_1.equals(tmp0_other_with_cast.x3r_1))
      return false;
    return true;
  };
  function PutPlaceholder_0(position, placeholder) {
    Cut.call(this);
    this.z3r_1 = position;
    this.a3s_1 = placeholder;
    this.b3s_1 = 0;
  }
  protoOf(PutPlaceholder_0).k3r = function () {
    return this.z3r_1;
  };
  protoOf(PutPlaceholder_0).toString = function () {
    return 'PutPlaceholder(position=' + this.z3r_1 + ', placeholder=' + this.a3s_1 + ')';
  };
  protoOf(PutPlaceholder_0).hashCode = function () {
    var result = this.z3r_1;
    result = imul(result, 31) + this.a3s_1.hashCode() | 0;
    return result;
  };
  protoOf(PutPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder_0 ? other : THROW_CCE();
    if (!(this.z3r_1 === tmp0_other_with_cast.z3r_1))
      return false;
    if (!this.a3s_1.equals(tmp0_other_with_cast.a3s_1))
      return false;
    return true;
  };
  function EndPlaceholder_0(position) {
    Cut.call(this);
    this.c3s_1 = position;
    this.d3s_1 = 0;
  }
  protoOf(EndPlaceholder_0).k3r = function () {
    return this.c3s_1;
  };
  protoOf(EndPlaceholder_0).toString = function () {
    return 'EndPlaceholder(position=' + this.c3s_1 + ')';
  };
  protoOf(EndPlaceholder_0).hashCode = function () {
    return this.c3s_1;
  };
  protoOf(EndPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder_0 ? other : THROW_CCE();
    if (!(this.c3s_1 === tmp0_other_with_cast.c3s_1))
      return false;
    return true;
  };
  function _get_initialStyle__6to25e($this) {
    var tmp = $this.x3p_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('initialStyle');
    }
  }
  function _get_defaultStyle__bt02u3($this) {
    var tmp = $this.y3p_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('defaultStyle');
    }
  }
  function _get_ops__e6e97j($this) {
    var tmp = $this.a3q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('ops');
    }
  }
  function Op() {
  }
  function Cut() {
  }
  function makeOps($this, spans, placeholders) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var cuts = ArrayList_init_$Create$_0();
    var tmp0_iterator = spans.c();
    while (tmp0_iterator.d()) {
      var span = tmp0_iterator.e();
      cuts.a(new StyleAdd_0(span.t34_1, span.s34_1));
      cuts.a(new StyleRemove(span.u34_1, span.s34_1));
    }
    var tmp1_iterator = placeholders.c();
    while (tmp1_iterator.d()) {
      var placeholder = tmp1_iterator.e();
      cuts.a(new PutPlaceholder_0(placeholder.t34_1, placeholder.s34_1));
      cuts.a(new EndPlaceholder_0(placeholder.u34_1));
    }
    var ops = mutableListOf([new StyleAdd(0, _get_defaultStyle__bt02u3($this))]);
    // Inline function 'kotlin.collections.sortBy' call
    if (cuts.f() > 1) {
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = ParagraphBuilder$makeOps$lambda;
      tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
      sortWith(cuts, tmp$ret$1);
    }
    var activeStyles = mutableListOf([_get_initialStyle__6to25e($this)]);
    var tmp2_iterator = cuts.c();
    while (tmp2_iterator.d()) {
      var cut = tmp2_iterator.e();
      if (cut instanceof StyleAdd_0) {
        activeStyles.a(cut.u3r_1);
        var prev = previousStyleAddAtTheSamePosition($this, cut.k3r(), ops);
        if (prev == null) {
          var tmp_0 = cut.k3r();
          // Inline function 'kotlin.also' call
          var tmp0_also = mergeStyles($this, activeStyles);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
          tmp0_also.g3r($this.t3p_1, cut.u3r_1);
          ops.a(new StyleAdd(tmp_0, tmp0_also));
        } else {
          prev.i3r_1.g3r($this.t3p_1, cut.u3r_1);
        }
      } else {
        if (cut instanceof StyleRemove) {
          activeStyles.c7(cut.x3r_1);
          ops.a(new StyleAdd(cut.k3r(), mergeStyles($this, activeStyles)));
        } else {
          if (cut instanceof PutPlaceholder_0) {
            var currentStyle = mergeStyles($this, activeStyles);
            var op = new PutPlaceholder(cut, fontSizeInHierarchy($this.t3p_1, currentStyle.q3q_1, cut.a3s_1.n38_1), fontSizeInHierarchy($this.t3p_1, currentStyle.q3q_1, cut.a3s_1.o38_1));
            ops.a(op);
          } else {
            if (cut instanceof EndPlaceholder_0) {
              ops.a(new EndPlaceholder(cut));
            }
          }
        }
      }
    }
    return ops;
  }
  function mergeStyles($this, activeStyles) {
    var style = ComputedStyle_init_$Create$($this.t3p_1, activeStyles.l(0), $this.o3p_1, $this.w3p_1);
    var inductionVariable = 1;
    var last = activeStyles.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        style.g3r($this.t3p_1, activeStyles.l(i));
      }
       while (inductionVariable < last);
    return style;
  }
  function previousStyleAddAtTheSamePosition($this, position, ops) {
    var tmp0_iterator = asReversed(ops).c();
    while (tmp0_iterator.d()) {
      var prevOp = tmp0_iterator.e();
      if (prevOp.k3r() < position)
        return null;
      if (prevOp instanceof StyleAdd)
        return prevOp;
    }
    return null;
  }
  function textStyleToParagraphStyle($this, style, computedStyle) {
    var pStyle = new ParagraphStyle();
    pStyle.r2i(makeSkTextStyle($this, computedStyle));
    var tmp0_safe_receiver = style.f3d();
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new TextAlign(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      pStyle.t2i(toSkAlignment(tmp0_safe_receiver));
    }
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var tmp0_get_isSpecified_4wup3r = style.h3d();
    if (!get_isUnspecified(tmp0_get_isSpecified_4wup3r)) {
      var strutStyle = StrutStyle_init_$Create$();
      strutStyle.o2j(true);
      strutStyle.s2j(true);
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>' call
      var fontSize = $this.t3p_1.j23(orDefaultFontSize(style.r3c()));
      // Inline function 'kotlin.with' call
      var tmp2_with = style.h3d();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>' call
      var tmp_0;
      if (_TextUnit___get_isSp__impl__8c3r6q(tmp2_with)) {
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>.<anonymous>' call
        tmp_0 = $this.t3p_1.j23(tmp2_with);
      } else if (_TextUnit___get_isEm__impl__esrmtl(tmp2_with)) {
        tmp_0 = fontSize * _TextUnit___get_value__impl__hpbx0k(tmp2_with);
      } else {
        throw IllegalStateException_init_$Create$('Unexpected size in textStyleToParagraphStyle');
      }
      var lineHeight = tmp_0;
      strutStyle.m2j(lineHeight / fontSize);
      strutStyle.j2j(fontSize);
      pStyle.p2i(strutStyle);
    }
    pStyle.s2i(toSkDirection($this.u3p_1));
    var tmp1_safe_receiver = $this.n3p_1.i3d();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.with' call
      var tmp0_with = $this.t3p_1;
      // Inline function 'kotlin.contracts.contract' call
      pStyle.w2i(new TextIndent(tmp0_with.j23(tmp1_safe_receiver.d3m_1), tmp0_with.j23(tmp1_safe_receiver.e3m_1)));
    }
    return pStyle;
  }
  function makeSkTextStyle($this, style) {
    var tmp = get_skTextStylesCache();
    return tmp.n3m(style, ParagraphBuilder$makeSkTextStyle$lambda($this));
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.e3s_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).oc = function (a, b) {
    return this.e3s_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.oc(a, b);
  };
  function ParagraphBuilder$makeOps$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    var tmp = a.k3r();
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    tmp$ret$1 = b.k3r();
    return compareValues(tmp, tmp$ret$1);
  }
  function ParagraphBuilder$makeSkTextStyle$lambda(this$0) {
    return function (it) {
      return it.f3r(this$0.l3p_1);
    };
  }
  function ParagraphBuilder$defaultFont$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.n3p_1.v3c();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.defaultFont$delegate.<anonymous>.<anonymous>' call
        var tmp0_elvis_lhs = this$0.n3p_1.s3c();
        var tmp_0 = tmp0_elvis_lhs == null ? Companion_getInstance_22().m3a_1 : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = this$0.n3p_1.t3c();
        var tmp_1;
        var tmp_2 = tmp1_elvis_lhs;
        if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
          tmp_1 = Companion_getInstance_20().t3a_1;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        var tmp_3 = tmp_1;
        var tmp2_elvis_lhs = this$0.n3p_1.u3c();
        var tmp_4;
        var tmp_5 = tmp2_elvis_lhs;
        if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
          tmp_4 = Companion_getInstance_21().w3a_1;
        } else {
          tmp_4 = tmp2_elvis_lhs;
        }
        var tmp_6 = this$0.l3p_1.o3g(tmp0_safe_receiver, tmp_0, tmp_3, tmp_4).w1();
        tmp$ret$0 = tmp_6 instanceof FontLoadResult ? tmp_6 : THROW_CCE();
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      var loadResult = tmp;
      var tmp1_safe_receiver = loadResult;
      return Font_init_$Create$(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.d3q_1, _get_defaultStyle__bt02u3(this$0).q3q_1);
    };
  }
  function ParagraphBuilder$defaultHeight$delegate$lambda(this$0) {
    return function () {
      return this$0.s3o().q28().u21();
    };
  }
  function ParagraphBuilder_0(fontFamilyResolver, text, textStyle, brushSize, ellipsis, maxLines, spanStyles, placeholders, density, textDirection, drawStyle, blendMode) {
    brushSize = brushSize === VOID ? Companion_getInstance_7().j22_1 : brushSize;
    ellipsis = ellipsis === VOID ? '' : ellipsis;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().MAX_VALUE : maxLines;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().u2v_1 : blendMode;
    this.l3p_1 = fontFamilyResolver;
    this.m3p_1 = text;
    this.n3p_1 = textStyle;
    this.o3p_1 = brushSize;
    this.p3p_1 = ellipsis;
    this.q3p_1 = maxLines;
    this.r3p_1 = spanStyles;
    this.s3p_1 = placeholders;
    this.t3p_1 = density;
    this.u3p_1 = textDirection;
    this.v3p_1 = drawStyle;
    this.w3p_1 = blendMode;
    var tmp = this;
    tmp.b3q_1 = lazy_0(ParagraphBuilder$defaultFont$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.c3q_1 = lazy_0(ParagraphBuilder$defaultHeight$delegate$lambda(this));
  }
  protoOf(ParagraphBuilder_0).t3o = function () {
    var tmp = this.z3p_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('paragraphStyle');
    }
  };
  protoOf(ParagraphBuilder_0).ia = function () {
    this.x3p_1 = copyWithDefaultFontSize(this.n3p_1.l3c(), this.v3p_1);
    this.y3p_1 = ComputedStyle_init_$Create$(this.t3p_1, _get_initialStyle__6to25e(this), this.o3p_1, this.w3p_1);
    this.a3q_1 = makeOps(this, this.r3p_1, this.s3p_1);
    var pos = 0;
    var ps = textStyleToParagraphStyle(this, this.n3p_1, _get_defaultStyle__bt02u3(this));
    this.z3p_1 = ps;
    if (!(this.q3p_1 === IntCompanionObject_getInstance().MAX_VALUE)) {
      ps.u2i(this.q3p_1);
      ps.v2i(this.p3p_1);
    }
    var tmp = this.l3p_1;
    var platformFontLoader = (tmp instanceof FontFamilyResolverImpl ? tmp : THROW_CCE()).e3g_1;
    var tmp_0;
    if (platformFontLoader instanceof SkiaFontLoader) {
      tmp_0 = platformFontLoader.e3p();
    } else {
      throw IllegalStateException_init_$Create$('Unsupported font loader ' + platformFontLoader);
    }
    var fontCollection = tmp_0;
    var pb = new ParagraphBuilder(ps, fontCollection);
    var addText = true;
    var tmp1_iterator = _get_ops__e6e97j(this).c();
    while (tmp1_iterator.d()) {
      var op = tmp1_iterator.e();
      if (addText ? pos < op.k3r() : false) {
        pb.d2i(toString(charSequenceSubSequence(this.m3p_1, pos, op.k3r())));
      }
      if (op instanceof StyleAdd) {
        var tmp_1 = op.i3r_1.u3q_1;
        var tmp3_elvis_lhs = op.i3r_1.r3q_1;
        var tmp_2 = tmp3_elvis_lhs == null ? Companion_getInstance_22().m3a_1 : tmp3_elvis_lhs;
        var tmp4_elvis_lhs = op.i3r_1.s3q_1;
        var tmp_3;
        var tmp_4 = tmp4_elvis_lhs;
        if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
          tmp_3 = Companion_getInstance_20().t3a_1;
        } else {
          tmp_3 = tmp4_elvis_lhs;
        }
        var tmp_5 = tmp_3;
        var tmp5_elvis_lhs = op.i3r_1.t3q_1;
        var tmp_6;
        var tmp_7 = tmp5_elvis_lhs;
        if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
          tmp_6 = Companion_getInstance_21().w3a_1;
        } else {
          tmp_6 = tmp5_elvis_lhs;
        }
        this.l3p_1.o3g(tmp_1, tmp_2, tmp_5, tmp_6);
        pb.c2i(makeSkTextStyle(this, op.i3r_1));
      } else {
        if (op instanceof PutPlaceholder) {
          var placeholderStyle = new PlaceholderStyle(op.m3r_1, op.n3r_1, toSkPlaceholderAlignment(op.l3r_1.a3s_1.p38_1), BaselineMode_ALPHABETIC_getInstance(), 0.0);
          pb.e2i(placeholderStyle);
          addText = false;
        } else {
          if (op instanceof EndPlaceholder) {
            addText = true;
          }
        }
      }
      pos = op.k3r();
    }
    if (addText ? pos < this.m3p_1.length : false) {
      pb.d2i(toString(charSequenceSubSequence(this.m3p_1, pos, this.m3p_1.length)));
    }
    return pb.ia();
  };
  protoOf(ParagraphBuilder_0).s3o = function () {
    // Inline function 'kotlin.getValue' call
    defaultFont$factory();
    return this.b3q_1.w1();
  };
  function copyWithDefaultFontSize(_this__u8e3s4, drawStyle) {
    drawStyle = drawStyle === VOID ? null : drawStyle;
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var fontSize = orDefaultFontSize(_this__u8e3s4.a39_1);
    var tmp;
    if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4.g39_1)) {
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var tmp0_times = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4.g39_1);
      checkArithmetic(fontSize);
      tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(fontSize), _TextUnit___get_value__impl__hpbx0k(fontSize) * tmp0_times);
    } else {
      tmp = _this__u8e3s4.g39_1;
    }
    var letterSpacing = tmp;
    return _this__u8e3s4.t39(VOID, fontSize, VOID, VOID, VOID, VOID, VOID, letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, drawStyle);
  }
  function toSkPlaceholderAlignment(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    if (_this__u8e3s4 === Companion_getInstance_13().q38_1) {
      tmp = PlaceholderAlignment_ABOVE_BASELINE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().u38_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().v38_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().w38_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().r38_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().s38_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().t38_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('Invalid PlaceholderVerticalAlign.');
    }
    return tmp;
  }
  function toSkAlignment(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    if (_this__u8e3s4 === Companion_getInstance_27().w37_1) {
      tmp = Alignment_LEFT_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_27().x37_1) {
      tmp = Alignment_RIGHT_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_27().y37_1) {
      tmp = Alignment_CENTER_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_27().z37_1) {
      tmp = Alignment_JUSTIFY_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_27().a38_1) {
      tmp = Alignment_START_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_27().b38_1) {
      tmp = Alignment_END_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('Invalid TextAlign');
    }
    return tmp;
  }
  function orDefaultFontSize(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    if (get_isUnspecified(_this__u8e3s4)) {
      tmp = get_DefaultFontSize_0();
    } else if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var tmp0_times = get_DefaultFontSize_0();
      var tmp1_times = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4);
      checkArithmetic(tmp0_times);
      tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(tmp0_times), _TextUnit___get_value__impl__hpbx0k(tmp0_times) * tmp1_times);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function toSkDirection(_this__u8e3s4) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    var tmp;
    switch (_this__u8e3s4.w4_1) {
      case 0:
        tmp = Direction_LTR_getInstance();
        break;
      case 1:
        tmp = Direction_RTL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function ActualParagraph_0(text, style, spanStyles, placeholders, maxLines, ellipsis, constraints, density, fontFamilyResolver) {
    _init_properties_SkiaParagraph_skiko_kt__cbqn0t();
    return new SkiaParagraph(new SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver), maxLines, ellipsis, constraints);
  }
  function position$factory($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.z3r_1;
    }, null);
  }
  function position$factory_0() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.k3r();
    }, null);
  }
  function position$factory_1($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.c3s_1;
    }, null);
  }
  function position$factory_2() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.k3r();
    }, null);
  }
  function defaultFont$factory() {
    return getPropertyCallableRef('defaultFont', 1, KProperty1, function (receiver) {
      return receiver.s3o();
    }, null);
  }
  var properties_initialized_SkiaParagraph_skiko_kt_jww0jv;
  function _init_properties_SkiaParagraph_skiko_kt__cbqn0t() {
    if (!properties_initialized_SkiaParagraph_skiko_kt_jww0jv) {
      properties_initialized_SkiaParagraph_skiko_kt_jww0jv = true;
      DefaultFontSize_0 = get_sp(16);
      skTextStylesCache = new NoCache();
    }
  }
  function ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    return new SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function newLayouter($this) {
    return new ParagraphLayouter($this.x3n_1, $this.d3o_1, $this.y3n_1, $this.z3n_1, $this.a3o_1, $this.b3o_1, $this.c3o_1);
  }
  function SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.x3n_1 = text;
    this.y3n_1 = style;
    this.z3n_1 = spanStyles;
    this.a3o_1 = placeholders;
    this.b3o_1 = density;
    this.c3o_1 = fontFamilyResolver;
    this.d3o_1 = resolveTextDirection_1(this.x3n_1, this.y3n_1.g3d(), this.y3n_1.a3d());
    this.e3o_1 = newLayouter(this);
    this.f3o_1 = 0.0;
    this.g3o_1 = 0.0;
    var tmp = ensureNotNull(this.e3o_1);
    FloatCompanionObject_getInstance();
    var para = tmp.w3o(Infinity);
    var tmp_0 = this;
    // Inline function 'kotlin.math.ceil' call
    var tmp0_ceil = para.n2h();
    tmp_0.f3o_1 = Math.ceil(tmp0_ceil);
    var tmp_1 = this;
    // Inline function 'kotlin.math.ceil' call
    var tmp1_ceil = para.o2h();
    tmp_1.g3o_1 = Math.ceil(tmp1_ceil);
  }
  protoOf(SkiaParagraphIntrinsics).u3o = function () {
    var tmp0_elvis_lhs = this.e3o_1;
    var layouter = tmp0_elvis_lhs == null ? newLayouter(this) : tmp0_elvis_lhs;
    this.e3o_1 = null;
    return layouter;
  };
  protoOf(SkiaParagraphIntrinsics).n2h = function () {
    return this.f3o_1;
  };
  protoOf(SkiaParagraphIntrinsics).o2h = function () {
    return this.g3o_1;
  };
  function resolveTextDirection_1(text, textDirection, localeList) {
    textDirection = textDirection === VOID ? null : textDirection;
    localeList = localeList === VOID ? null : localeList;
    var tmp;
    var tmp_0 = textDirection;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = Companion_getInstance_29().r3d_1;
    } else {
      tmp = textDirection;
    }
    var tmp1_subject = tmp;
    var tmp_1;
    if (tmp1_subject === Companion_getInstance_29().p3d_1) {
      tmp_1 = ResolvedTextDirection_Ltr_getInstance();
    } else if (tmp1_subject === Companion_getInstance_29().q3d_1) {
      tmp_1 = ResolvedTextDirection_Rtl_getInstance();
    } else if (tmp1_subject === Companion_getInstance_29().r3d_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda(localeList));
    } else if (tmp1_subject === Companion_getInstance_29().s3d_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_0);
    } else if (tmp1_subject === Companion_getInstance_29().t3d_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_1);
    } else {
      throw IllegalStateException_init_$Create$('Invalid TextDirection.');
    }
    return tmp_1;
  }
  function contentBasedTextDirection(text, fallback) {
    var tmp0_subject = firstStrongDirectionType(text);
    return tmp0_subject === Companion_getInstance_34().l3m_1 ? ResolvedTextDirection_Ltr_getInstance() : tmp0_subject === Companion_getInstance_34().m3m_1 ? ResolvedTextDirection_Rtl_getInstance() : fallback();
  }
  function localeBasedTextDirection(locale) {
    var tmp;
    if (isRtl((locale == null ? Companion_getInstance_23().dw() : locale).j3l_1)) {
      tmp = ResolvedTextDirection_Rtl_getInstance();
    } else {
      tmp = ResolvedTextDirection_Ltr_getInstance();
    }
    return tmp;
  }
  function resolveTextDirection$lambda($localeList) {
    return function () {
      var tmp0_safe_receiver = $localeList;
      return localeBasedTextDirection(tmp0_safe_receiver == null ? null : firstOrNull_0(tmp0_safe_receiver));
    };
  }
  function resolveTextDirection$lambda_0() {
    return ResolvedTextDirection_Ltr_getInstance();
  }
  function resolveTextDirection$lambda_1() {
    return ResolvedTextDirection_Rtl_getInstance();
  }
  function applyBrush(_this__u8e3s4, brush, size, alpha) {
    var tmp;
    if (alpha === VOID) {
      FloatCompanionObject_getInstance();
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    var tmp_0;
    var tmp_1;
    if (brush instanceof SolidColor) {
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      var tmp0_get_isSpecified_4wup3r = brush.w3l_1;
      tmp_1 = !equals(_Color___get_value__impl__1pls5m(tmp0_get_isSpecified_4wup3r), _Color___get_value__impl__1pls5m(Companion_getInstance().f2t_1));
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      var tmp_2;
      if (brush instanceof ShaderBrush) {
        // Inline function 'androidx.compose.ui.geometry.isSpecified' call
        tmp_2 = !_Size___get_packedValue__impl__7rlt1o(size).equals(_Size___get_packedValue__impl__7rlt1o(Companion_getInstance_7().j22_1));
      } else {
        tmp_2 = false;
      }
      tmp_0 = tmp_2;
    }
    if (tmp_0) {
      brush.q2q(size, _this__u8e3s4, isNaN_0(alpha) ? 1.0 : coerceIn_0(alpha, 0.0, 1.0));
    } else {
      if (brush == null) {
        _this__u8e3s4.i2c(null);
      }
    }
  }
  function applyDrawStyle(_this__u8e3s4, drawStyle) {
    if (equals(drawStyle, Fill_getInstance()) ? true : drawStyle == null) {
      _this__u8e3s4.j31(Companion_getInstance_10().d2w_1);
    } else {
      if (drawStyle instanceof Stroke) {
        _this__u8e3s4.j31(Companion_getInstance_10().e2w_1);
        _this__u8e3s4.d2c(drawStyle.k31_1);
        _this__u8e3s4.r31(drawStyle.l31_1);
        _this__u8e3s4.t31(drawStyle.n31_1);
        _this__u8e3s4.p31(drawStyle.m31_1);
        _this__u8e3s4.v31(drawStyle.o31_1);
      }
    }
  }
  function _LineBreak___init__impl__o5i11q(mask) {
    return mask;
  }
  function Companion_21() {
    Companion_instance_21 = this;
    this.c38_1 = _LineBreak___init__impl__o5i11q(1);
    this.d38_1 = _LineBreak___init__impl__o5i11q(2);
    this.e38_1 = _LineBreak___init__impl__o5i11q(3);
  }
  var Companion_instance_21;
  function Companion_getInstance_35() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function LineBreak__toString_impl_mphhli($this) {
    return 'LineBreak(mask=' + $this + ')';
  }
  function LineBreak__hashCode_impl_ybksn($this) {
    return $this;
  }
  function LineBreak__equals_impl_1r98t9($this, other) {
    if (!(other instanceof LineBreak))
      return false;
    if (!($this === (other instanceof LineBreak ? other.f3s_1 : THROW_CCE())))
      return false;
    return true;
  }
  function LineBreak(mask) {
    Companion_getInstance_35();
    this.f3s_1 = mask;
  }
  protoOf(LineBreak).toString = function () {
    return LineBreak__toString_impl_mphhli(this.f3s_1);
  };
  protoOf(LineBreak).hashCode = function () {
    return LineBreak__hashCode_impl_ybksn(this.f3s_1);
  };
  protoOf(LineBreak).equals = function (other) {
    return LineBreak__equals_impl_1r98t9(this.f3s_1, other);
  };
  function Companion_22() {
    Companion_instance_22 = this;
    this.l38_1 = new TextMotion();
    this.m38_1 = new TextMotion();
  }
  var Companion_instance_22;
  function Companion_getInstance_36() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function TextMotion() {
    Companion_getInstance_36();
    this.g3s_1 = 0;
  }
  //region block: post-declaration
  protoOf(PlatformResolveInterceptor$Companion$Default$1).p3g = interceptFontFamily;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).q3g = interceptFontWeight;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).r3g = interceptFontStyle;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).s3g = interceptFontSynthesis;
  protoOf(_no_name_provided__qut3iv).j4 = get;
  protoOf(_no_name_provided__qut3iv).p4 = fold;
  protoOf(_no_name_provided__qut3iv).o4 = minusKey;
  protoOf(_no_name_provided__qut3iv).q4 = plus_0;
  protoOf(Unspecified).w39 = merge;
  protoOf(Unspecified).z39 = takeOrElse;
  protoOf(BrushStyle).w39 = merge;
  protoOf(BrushStyle).z39 = takeOrElse;
  protoOf(ColorStyle).w39 = merge;
  protoOf(ColorStyle).z39 = takeOrElse;
  protoOf(SkiaParagraph).v3n = paint$default;
  protoOf(SkiaParagraph).w3n = paint$default_0;
  protoOf(SkiaParagraphIntrinsics).v37 = get_hasStaleResolvedFonts;
  //endregion
  //region block: init
  DefaultMaxLines = 2147483647;
  DefaultCacheSize = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FontStyle;
  _.$_$.b = createFontFamilyResolver;
  _.$_$.c = PlatformTextInputPluginRegistryImpl;
  _.$_$.d = TextInputService;
  _.$_$.e = FontLoader;
  _.$_$.f = TextAlign;
  _.$_$.g = TextOverflow;
  _.$_$.h = MultiParagraphIntrinsics;
  _.$_$.i = MultiParagraph;
  _.$_$.j = ParagraphIntrinsics_0;
  _.$_$.k = Paragraph;
  _.$_$.l = Paragraph_0;
  _.$_$.m = TextLayoutResult;
  _.$_$.n = resolveDefaults;
  _.$_$.o = CommitTextCommand_init_$Create$;
  _.$_$.p = AnnotatedString_init_$Create$;
  _.$_$.q = TextLayoutInput_init_$Create$;
  _.$_$.r = TextStyle_init_$Create$_1;
  _.$_$.s = _TextOverflow___init__impl__obguoe;
  _.$_$.t = TextOverflow__hashCode_impl_kqdwgt;
  _.$_$.u = _TextOverflow___get_value__impl__vugm5i;
  _.$_$.v = Companion_getInstance_16;
  _.$_$.w = Companion_getInstance_22;
  _.$_$.x = Companion_getInstance_28;
  _.$_$.y = Companion_getInstance_33;
  _.$_$.z = Companion_getInstance_14;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-ui-text.js.map
