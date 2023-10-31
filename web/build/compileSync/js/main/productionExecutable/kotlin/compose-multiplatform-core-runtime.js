(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-runtime'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-runtime'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-runtime'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-runtime'.");
    }
    root['compose-multiplatform-core-runtime'] = factory(typeof this['compose-multiplatform-core-runtime'] === 'undefined' ? {} : this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.f7;
  var interfaceMeta = kotlin_kotlin.$_$.t6;
  var VOID = kotlin_kotlin.$_$.na;
  var setMetadataFor = kotlin_kotlin.$_$.g7;
  var toString = kotlin_kotlin.$_$.j7;
  var classMeta = kotlin_kotlin.$_$.g6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var THROW_CCE = kotlin_kotlin.$_$.m9;
  var isObject = kotlin_kotlin.$_$.x6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var Companion_getInstance = kotlin_kotlin.$_$.k2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.v1;
  var createFailure = kotlin_kotlin.$_$.s9;
  var Unit_getInstance = kotlin_kotlin.$_$.m2;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.fa;
  var intercepted = kotlin_kotlin.$_$.j5;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var get = kotlin_kotlin.$_$.r5;
  var fold = kotlin_kotlin.$_$.q5;
  var minusKey = kotlin_kotlin.$_$.s5;
  var plus = kotlin_kotlin.$_$.u5;
  var isInterface = kotlin_kotlin.$_$.w6;
  var objectMeta = kotlin_kotlin.$_$.e7;
  var Enum = kotlin_kotlin.$_$.d9;
  var IllegalStateException = kotlin_kotlin.$_$.g9;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.d1;
  var captureStack = kotlin_kotlin.$_$.b6;
  var defineProp = kotlin_kotlin.$_$.i6;
  var equals = kotlin_kotlin.$_$.j6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  var fill = kotlin_kotlin.$_$.u3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.i;
  var rotateLeft = kotlin_kotlin.$_$.ca;
  var hashCode = kotlin_kotlin.$_$.r6;
  var emptyList = kotlin_kotlin.$_$.s3;
  var toMutableList = kotlin_kotlin.$_$.e5;
  var rotateRight = kotlin_kotlin.$_$.da;
  var sortWith = kotlin_kotlin.$_$.y4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.f;
  var to = kotlin_kotlin.$_$.ka;
  var plus_0 = kotlin_kotlin.$_$.u4;
  var compareValues = kotlin_kotlin.$_$.f5;
  var Long = kotlin_kotlin.$_$.h9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var lazy = kotlin_kotlin.$_$.y9;
  var firstOrNull = kotlin_kotlin.$_$.w3;
  var compareTo = kotlin_kotlin.$_$.h6;
  var KProperty1 = kotlin_kotlin.$_$.a8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.p6;
  var isArray = kotlin_kotlin.$_$.u6;
  var Set = kotlin_kotlin.$_$.b3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.l;
  var ensureNotNull = kotlin_kotlin.$_$.t9;
  var plus_1 = kotlin_kotlin.$_$.s4;
  var Exception = kotlin_kotlin.$_$.f9;
  var copyToArray = kotlin_kotlin.$_$.r3;
  var Map = kotlin_kotlin.$_$.x2;
  var fillArrayVal = kotlin_kotlin.$_$.k6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var toString_0 = kotlin_kotlin.$_$.ja;
  var Element = kotlin_kotlin.$_$.t5;
  var getStringHashCode = kotlin_kotlin.$_$.q6;
  var Collection = kotlin_kotlin.$_$.u2;
  var addAll = kotlin_kotlin.$_$.c3;
  var CoroutineImpl = kotlin_kotlin.$_$.v5;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h5;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var toList = kotlin_kotlin.$_$.c5;
  var flatten = kotlin_kotlin.$_$.b4;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.s;
  var CancellationException = kotlin_kotlin.$_$.g5;
  var addSuppressed = kotlin_kotlin.$_$.q9;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var returnIfSuspended = kotlin_kotlin.$_$.e;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var removeFirst = kotlin_kotlin.$_$.v4;
  var arrayCopy = kotlin_kotlin.$_$.d3;
  var fill_0 = kotlin_kotlin.$_$.v3;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.h2;
  var first = kotlin_kotlin.$_$.y3;
  var last = kotlin_kotlin.$_$.l4;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.x;
  var copyOf = kotlin_kotlin.$_$.q3;
  var joinToString = kotlin_kotlin.$_$.i4;
  var copyOf_0 = kotlin_kotlin.$_$.p3;
  var List = kotlin_kotlin.$_$.v2;
  var MutableCollection = kotlin_kotlin.$_$.y2;
  var checkIndexOverflow = kotlin_kotlin.$_$.h3;
  var sortWith_0 = kotlin_kotlin.$_$.z4;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var AbstractMap = kotlin_kotlin.$_$.o2;
  var AbstractMutableMap = kotlin_kotlin.$_$.q2;
  var MutableMap = kotlin_kotlin.$_$.a3;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var MutableEntry = kotlin_kotlin.$_$.z2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var AbstractMutableSet = kotlin_kotlin.$_$.r2;
  var AbstractMutableCollection = kotlin_kotlin.$_$.p2;
  var Entry = kotlin_kotlin.$_$.w2;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var AbstractSet = kotlin_kotlin.$_$.s2;
  var AbstractCollection = kotlin_kotlin.$_$.n2;
  var objectCreate = kotlin_kotlin.$_$.d7;
  var until = kotlin_kotlin.$_$.x7;
  var step = kotlin_kotlin.$_$.w7;
  var countOneBits = kotlin_kotlin.$_$.r9;
  var takeLowestOneBit = kotlin_kotlin.$_$.ea;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.y;
  var longArray = kotlin_kotlin.$_$.y6;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.w;
  var Char = kotlin_kotlin.$_$.a9;
  var isCharSequence = kotlin_kotlin.$_$.v6;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var singleOrNull = kotlin_kotlin.$_$.x4;
  var contains = kotlin_kotlin.$_$.j3;
  var plus_2 = kotlin_kotlin.$_$.t4;
  var primitiveArrayConcat = kotlin_kotlin.$_$.b;
  var SequenceScope = kotlin_kotlin.$_$.b8;
  var intArrayIterator = kotlin_kotlin.$_$.s6;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.j2;
  var toIntArray = kotlin_kotlin.$_$.b5;
  var sequence = kotlin_kotlin.$_$.h8;
  var anyToString = kotlin_kotlin.$_$.z5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.i3;
  var listOf = kotlin_kotlin.$_$.n4;
  var listOf_0 = kotlin_kotlin.$_$.o4;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.c;
  var toDuration = kotlin_kotlin.$_$.y8;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.r1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.t;
  var println = kotlin_kotlin.$_$.y5;
  var printStackTrace = kotlin_kotlin.$_$.ba;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.p;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  setMetadataFor(Applier, 'Applier', interfaceMeta);
  setMetadataFor(OffsetApplier, 'OffsetApplier', classMeta, VOID, [Applier]);
  setMetadataFor(AbstractApplier, 'AbstractApplier', classMeta, VOID, [Applier]);
  setMetadataFor(FrameAwaiter, 'FrameAwaiter', classMeta);
  function get_key() {
    return Key_getInstance_0();
  }
  setMetadataFor(MonotonicFrameClock, 'MonotonicFrameClock', interfaceMeta, VOID, [Element], VOID, VOID, [1]);
  setMetadataFor(BroadcastFrameClock, 'BroadcastFrameClock', classMeta, VOID, [MonotonicFrameClock], VOID, VOID, [1]);
  setMetadataFor(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback', interfaceMeta);
  setMetadataFor(Composer$Companion$Empty$1, VOID, classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  function changed(value) {
    return this.qz(value);
  }
  function changed_0(value) {
    return this.rz(value);
  }
  function changed_1(value) {
    return this.sz(value);
  }
  function changedInstance(value) {
    return this.pz(value);
  }
  setMetadataFor(Composer, 'Composer', interfaceMeta);
  setMetadataFor(InvalidationResult, 'InvalidationResult', classMeta, Enum);
  setMetadataFor(ProvidedValue, 'ProvidedValue', classMeta);
  setMetadataFor(MovableContent, 'MovableContent', classMeta);
  setMetadataFor(MovableContentStateReference, 'MovableContentStateReference', classMeta);
  setMetadataFor(ComposeRuntimeError, 'ComposeRuntimeError', classMeta, IllegalStateException);
  setMetadataFor(RememberObserver, 'RememberObserver', interfaceMeta);
  setMetadataFor(CompositionContextHolder, 'CompositionContextHolder', classMeta, VOID, [RememberObserver]);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta);
  setMetadataFor(ComposerImpl$derivedStateObserver$1, VOID, classMeta);
  setMetadataFor(RecomposeScopeOwner, 'RecomposeScopeOwner', interfaceMeta);
  setMetadataFor(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1, VOID, classMeta, VOID, [RecomposeScopeOwner]);
  setMetadataFor(ComposerImpl, 'ComposerImpl', classMeta, VOID, [Composer]);
  setMetadataFor(MovableContentState, 'MovableContentState', classMeta);
  setMetadataFor(Pending, 'Pending', classMeta);
  setMetadataFor(Invalidation, 'Invalidation', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(GroupInfo, 'GroupInfo', classMeta);
  setMetadataFor(SkippableUpdater, 'SkippableUpdater', classMeta);
  setMetadataFor(RememberEventDispatcher, 'RememberEventDispatcher', classMeta);
  setMetadataFor(CompositionImpl, 'CompositionImpl', classMeta, VOID, [RecomposeScopeOwner]);
  setMetadataFor(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt', objectMeta);
  setMetadataFor(CompositionContext, 'CompositionContext', classMeta);
  setMetadataFor(CompositionLocal, 'CompositionLocal', classMeta);
  setMetadataFor(ProvidableCompositionLocal, 'ProvidableCompositionLocal', classMeta, CompositionLocal);
  setMetadataFor(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(DynamicProvidableCompositionLocal, 'DynamicProvidableCompositionLocal', classMeta, ProvidableCompositionLocal);
  setMetadataFor(PersistentCompositionLocalMap, 'PersistentCompositionLocalMap', interfaceMeta, VOID, [Map]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(DerivedState, 'DerivedState', interfaceMeta);
  setMetadataFor(DisposableEffectScope, 'DisposableEffectScope', classMeta);
  setMetadataFor(LaunchedEffectImpl, 'LaunchedEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', classMeta, CancellationException);
  setMetadataFor(LeftCompositionCancellationException, 'LeftCompositionCancellationException', classMeta, PlatformOptimizedCancellationException);
  setMetadataFor(DisposableEffectImpl, 'DisposableEffectImpl', classMeta, VOID, [RememberObserver]);
  setMetadataFor(JoinedKey, 'JoinedKey', classMeta);
  setMetadataFor(Key, 'Key', objectMeta);
  setMetadataFor(OpaqueKey, 'OpaqueKey', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(RecomposeScopeImpl, 'RecomposeScopeImpl', classMeta);
  setMetadataFor(Recomposer$recompositionRunner$slambda$slambda, 'Recomposer$recompositionRunner$slambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(State, 'State', classMeta, Enum);
  setMetadataFor(RecomposerInfoImpl, 'RecomposerInfoImpl', classMeta);
  setMetadataFor(RecomposerErrorState, 'RecomposerErrorState', classMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Recomposer$runRecomposeAndApplyChanges$slambda, 'Recomposer$runRecomposeAndApplyChanges$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor(Recomposer$recompositionRunner$slambda, 'Recomposer$recompositionRunner$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitWorkAvailableCOROUTINE$1, '$awaitWorkAvailableCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(Recomposer, 'Recomposer', classMeta, CompositionContext, VOID, VOID, VOID, [0, 1, 2]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(SlotWriter$groupSlots$1, VOID, classMeta);
  setMetadataFor(SlotWriter, 'SlotWriter', classMeta);
  setMetadataFor(Anchor, 'Anchor', classMeta);
  setMetadataFor(SlotTable, 'SlotTable', classMeta);
  setMetadataFor(PrioritySet, 'PrioritySet', classMeta);
  setMetadataFor(SlotReader, 'SlotReader', classMeta);
  setMetadataFor(GroupIterator, 'GroupIterator', classMeta);
  setMetadataFor(SlotTableGroup, 'SlotTableGroup', classMeta);
  setMetadataFor(KeyInfo, 'KeyInfo', classMeta);
  function merge(previous, current, applied) {
    return null;
  }
  setMetadataFor(SnapshotMutationPolicy, 'SnapshotMutationPolicy', interfaceMeta);
  setMetadataFor(StructuralEqualityPolicy, 'StructuralEqualityPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(NeverEqualPolicy, 'NeverEqualPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(ReferentialEqualityPolicy, 'ReferentialEqualityPolicy', objectMeta, VOID, [SnapshotMutationPolicy]);
  setMetadataFor(StateRecord, 'StateRecord', classMeta);
  setMetadataFor(StateStateRecord, 'StateStateRecord', classMeta, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  setMetadataFor(StateObject, 'StateObject', interfaceMeta);
  setMetadataFor(SnapshotMutableState, 'SnapshotMutableState', interfaceMeta);
  setMetadataFor(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', classMeta, VOID, [StateObject, SnapshotMutableState]);
  setMetadataFor(SnapshotThreadLocal, 'SnapshotThreadLocal', classMeta);
  setMetadataFor(IntStack, 'IntStack', classMeta);
  setMetadataFor(Stack, 'Stack', classMeta);
  setMetadataFor(SynchronizedObject, 'SynchronizedObject', classMeta);
  setMetadataFor(LazyValueHolder, 'LazyValueHolder', classMeta);
  setMetadataFor(StaticValueHolder, 'StaticValueHolder', classMeta);
  setMetadataFor(IdentityArrayIntMap, 'IdentityArrayIntMap', classMeta);
  setMetadataFor(IdentityArrayMap, 'IdentityArrayMap', classMeta);
  setMetadataFor(IdentityArraySet$iterator$1, VOID, classMeta);
  setMetadataFor(IdentityArraySet, 'IdentityArraySet', classMeta, VOID, [Set]);
  setMetadataFor(IdentityScopeMap, 'IdentityScopeMap', classMeta);
  setMetadataFor(VectorListIterator, 'VectorListIterator', classMeta);
  setMetadataFor(MutableVectorList, 'MutableVectorList', classMeta, VOID, [List, MutableCollection]);
  setMetadataFor(SubList, 'SubList', classMeta, VOID, [List, MutableCollection]);
  setMetadataFor(MutableVector, 'MutableVector', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(PersistentHashMap, 'PersistentHashMap', classMeta, AbstractMap, [AbstractMap, Map]);
  setMetadataFor(PersistentHashMapBuilder, 'PersistentHashMapBuilder', classMeta, AbstractMutableMap, [MutableMap, AbstractMutableMap]);
  setMetadataFor(PersistentHashMapBuilderEntriesIterator, 'PersistentHashMapBuilderEntriesIterator', classMeta);
  setMetadataFor(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator', classMeta);
  setMetadataFor(PersistentHashMapBuilderBaseIterator, 'PersistentHashMapBuilderBaseIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapBuilderKeysIterator, 'PersistentHashMapBuilderKeysIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(PersistentHashMapBuilderValuesIterator, 'PersistentHashMapBuilderValuesIterator', classMeta, PersistentHashMapBuilderBaseIterator);
  setMetadataFor(TrieNodeBaseIterator, 'TrieNodeBaseIterator', classMeta);
  setMetadataFor(TrieNodeMutableEntriesIterator, 'TrieNodeMutableEntriesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(MutableMapEntry, 'MutableMapEntry', classMeta, MapEntry, [MapEntry, MutableEntry]);
  setMetadataFor(AbstractMapBuilderEntries, 'AbstractMapBuilderEntries', classMeta, AbstractMutableSet);
  setMetadataFor(PersistentHashMapBuilderEntries, 'PersistentHashMapBuilderEntries', classMeta, AbstractMapBuilderEntries);
  setMetadataFor(PersistentHashMapBuilderKeys, 'PersistentHashMapBuilderKeys', classMeta, AbstractMutableSet, [Set, MutableCollection, AbstractMutableSet]);
  setMetadataFor(PersistentHashMapBuilderValues, 'PersistentHashMapBuilderValues', classMeta, AbstractMutableCollection, [MutableCollection, AbstractMutableCollection]);
  setMetadataFor(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapValuesIterator, 'PersistentHashMapValuesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', classMeta, PersistentHashMapBaseIterator);
  setMetadataFor(TrieNodeKeysIterator, 'TrieNodeKeysIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(TrieNodeValuesIterator, 'TrieNodeValuesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', classMeta, TrieNodeBaseIterator);
  setMetadataFor(PersistentHashMapKeys, 'PersistentHashMapKeys', classMeta, AbstractSet, [Collection, Set, AbstractSet]);
  setMetadataFor(PersistentHashMapValues, 'PersistentHashMapValues', classMeta, AbstractCollection, [Collection, AbstractCollection]);
  setMetadataFor(PersistentHashMapEntries, 'PersistentHashMapEntries', classMeta, AbstractSet, [Collection, Set, AbstractSet]);
  setMetadataFor(ModificationResult, 'ModificationResult', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(TrieNode, 'TrieNode', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(PersistentOrderedSet, 'PersistentOrderedSet', classMeta, AbstractSet, [AbstractSet, Collection, Set]);
  setMetadataFor(Links, 'Links', classMeta);
  setMetadataFor(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator', classMeta);
  setMetadataFor(EndOfChain, 'EndOfChain', objectMeta);
  setMetadataFor(MutabilityOwnership, 'MutabilityOwnership', classMeta);
  setMetadataFor(DeltaCounter, 'DeltaCounter', classMeta);
  setMetadataFor(Builder, 'Builder', classMeta, PersistentHashMapBuilder, [PersistentHashMapBuilder, MutableMap]);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(PersistentCompositionLocalHashMap, 'PersistentCompositionLocalHashMap', classMeta, PersistentHashMap, [PersistentHashMap, PersistentCompositionLocalMap]);
  setMetadataFor(ThreadMap, 'ThreadMap', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor(Snapshot, 'Snapshot', classMeta);
  setMetadataFor(MutableSnapshot, 'MutableSnapshot', classMeta, Snapshot);
  setMetadataFor(GlobalSnapshot, 'GlobalSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor(SnapshotApplyResult, 'SnapshotApplyResult', classMeta);
  setMetadataFor(Success, 'Success', objectMeta, SnapshotApplyResult);
  setMetadataFor(Failure, 'Failure', classMeta, SnapshotApplyResult);
  setMetadataFor(TransparentObserverMutableSnapshot, 'TransparentObserverMutableSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(ReadonlySnapshot, 'ReadonlySnapshot', classMeta, Snapshot);
  setMetadataFor(NestedMutableSnapshot, 'NestedMutableSnapshot', classMeta, MutableSnapshot);
  setMetadataFor(NestedReadonlySnapshot, 'NestedReadonlySnapshot', classMeta, Snapshot);
  setMetadataFor(TransparentObserverSnapshot, 'TransparentObserverSnapshot', classMeta, Snapshot);
  setMetadataFor(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', classMeta);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor(SnapshotIdSet$iterator$slambda, 'SnapshotIdSet$iterator$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(SnapshotIdSet, 'SnapshotIdSet', classMeta);
  setMetadataFor(StateMapStateRecord, 'StateMapStateRecord', classMeta, StateRecord);
  setMetadataFor(SnapshotStateMap, 'SnapshotStateMap', classMeta, VOID, [MutableMap, StateObject]);
  setMetadataFor(SnapshotMapSet, 'SnapshotMapSet', classMeta, VOID, [Set, MutableCollection]);
  setMetadataFor(SnapshotMapEntrySet, 'SnapshotMapEntrySet', classMeta, SnapshotMapSet);
  setMetadataFor(SnapshotMapKeySet, 'SnapshotMapKeySet', classMeta, SnapshotMapSet);
  setMetadataFor(SnapshotMapValueSet, 'SnapshotMapValueSet', classMeta, SnapshotMapSet);
  setMetadataFor(StateMapMutableEntriesIterator$next$1, VOID, classMeta, VOID, [MutableEntry]);
  setMetadataFor(StateMapMutableIterator, 'StateMapMutableIterator', classMeta);
  setMetadataFor(StateMapMutableEntriesIterator, 'StateMapMutableEntriesIterator', classMeta, StateMapMutableIterator);
  setMetadataFor(StateMapMutableKeysIterator, 'StateMapMutableKeysIterator', classMeta, StateMapMutableIterator);
  setMetadataFor(StateMapMutableValuesIterator, 'StateMapMutableValuesIterator', classMeta, StateMapMutableIterator);
  setMetadataFor(SnapshotStateObserver$ObservedScopeMap$derivedStateObserver$1, VOID, classMeta);
  setMetadataFor(ObservedScopeMap, 'ObservedScopeMap', classMeta);
  setMetadataFor(SnapshotStateObserver, 'SnapshotStateObserver', classMeta);
  setMetadataFor(SnapshotWeakSet, 'SnapshotWeakSet', classMeta);
  setMetadataFor(AtomicReference, 'AtomicReference', classMeta);
  setMetadataFor(AtomicInt, 'AtomicInt', classMeta);
  setMetadataFor($withFrameNanosCOROUTINE$4, '$withFrameNanosCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(MonotonicClockImpl, 'MonotonicClockImpl', classMeta, VOID, [MonotonicFrameClock], VOID, VOID, [1]);
  setMetadataFor(Trace, 'Trace', objectMeta);
  setMetadataFor(ComposableLambdaImpl, 'ComposableLambdaImpl', classMeta);
  setMetadataFor(IntMap, 'IntMap', classMeta);
  setMetadataFor(WeakReference, 'WeakReference', classMeta);
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.mw_1 = applier;
    this.nw_1 = offset;
    this.ow_1 = 0;
  }
  protoOf(OffsetApplier).dw = function () {
    return this.mw_1.dw();
  };
  protoOf(OffsetApplier).gw = function (node) {
    this.ow_1 = this.ow_1 + 1 | 0;
    this.mw_1.gw(node);
  };
  protoOf(OffsetApplier).hw = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.ow_1 > 0)) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      var message = 'OffsetApplier up called with no corresponding down';
      composeRuntimeError(toString(message));
    }
    this.ow_1 = this.ow_1 - 1 | 0;
    this.mw_1.hw();
  };
  protoOf(OffsetApplier).iw = function (index, instance) {
    this.mw_1.iw(index + (this.ow_1 === 0 ? this.nw_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).jw = function (index, instance) {
    this.mw_1.jw(index + (this.ow_1 === 0 ? this.nw_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).kw = function (index, count) {
    this.mw_1.kw(index + (this.ow_1 === 0 ? this.nw_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).lw = function (from, to, count) {
    var effectiveOffset = this.ow_1 === 0 ? this.nw_1 : 0;
    this.mw_1.lw(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  protoOf(OffsetApplier).f7 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'androidx.compose.runtime.OffsetApplier.clear.<anonymous>' call
    var message = 'Clear is not valid on OffsetApplier';
    composeRuntimeError(toString(message));
  };
  function AbstractApplier(root) {
    this.pw_1 = root;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.qw_1 = ArrayList_init_$Create$();
    this.rw_1 = this.pw_1;
    this.sw_1 = 8;
  }
  protoOf(AbstractApplier).tw = function (_set____db54di) {
    this.rw_1 = _set____db54di;
  };
  protoOf(AbstractApplier).dw = function () {
    return this.rw_1;
  };
  protoOf(AbstractApplier).uw = function (node) {
    this.qw_1.a(this.dw());
    this.tw(node);
  };
  protoOf(AbstractApplier).gw = function (node) {
    return this.uw((node == null ? true : isObject(node)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).hw = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.qw_1.k()) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.tw(this.qw_1.h3(this.qw_1.f() - 1 | 0));
  };
  protoOf(AbstractApplier).f7 = function () {
    this.qw_1.f7();
    this.tw(this.pw_1);
    this.vw();
  };
  function FrameAwaiter(onFrame, continuation) {
    this.ww_1 = onFrame;
    this.xw_1 = continuation;
  }
  protoOf(FrameAwaiter).yw = function (timeNanos) {
    var tmp$ret$3;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      var tmp1_success = this.ww_1(timeNanos);
      tmp = _Result___init__impl__xyqfz8(tmp1_success);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$3 = tmp;
    this.xw_1.r3(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.ax_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    if (!($this.bx_1 == null))
      return Unit_getInstance();
    $this.bx_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var tmp0_fastForEach = $this.cx_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.l(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp0_resumeWithException = item.xw_1;
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        tmp0_resumeWithException.r3(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.cx_1.f7();
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.ax_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp = this$0.cx_1;
      var tmp_0;
      if ($awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = $awaiter._v;
      }
      tmp.c7(tmp_0);
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.zw_1 = onNewAwaiters;
    this.ax_1 = createSynchronizedObject();
    this.bx_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.cx_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.dx_1 = ArrayList_init_$Create$();
    this.ex_1 = 8;
  }
  protoOf(BroadcastFrameClock).fx = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.ax_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.<get-hasAwaiters>.<anonymous>' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.cx_1.k();
  };
  protoOf(BroadcastFrameClock).gx = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.ax_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var toResume = this.cx_1;
    this.cx_1 = this.dx_1;
    this.dx_1 = toResume;
    var inductionVariable = 0;
    var last = toResume.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.l(i).yw(timeNanos);
      }
       while (inductionVariable < last);
    toResume.f7();
  };
  protoOf(BroadcastFrameClock).hx = function (onFrame, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.cj();
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = {_v: null};
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.ax_1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.bx_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.r3(tmp$ret$0);
        break $l$block;
      }
      awaiter._v = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.cx_1.k();
      var tmp = this.cx_1;
      var tmp_0;
      if (awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = awaiter._v;
      }
      tmp.a(tmp_0);
      var hasNewAwaiters = !hadAwaiters;
      cancellable.vh(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters ? !(this.zw_1 == null) : false) {
        try {
          this.zw_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    return cancellable.ch();
  };
  function $get_currentCompositeKeyHash$$composable_u3vbzj($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1422486212, $changed, -1, 'androidx.compose.runtime.$get-currentCompositeKeyHash$$composable (Composables.kt:224)');
    }
    var tmp0 = $composer_0.ix();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0;
  }
  function invalidApplier() {
    throw IllegalStateException_init_$Create$('Invalid applier');
  }
  function ComposeNodeLifecycleCallback() {
  }
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_removeCurrentGroupInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return removeCurrentGroupInstance;
  }
  var removeCurrentGroupInstance;
  function get_skipToGroupEndInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return skipToGroupEndInstance;
  }
  var skipToGroupEndInstance;
  function get_endGroupInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return endGroupInstance;
  }
  var endGroupInstance;
  function get_startRootGroup() {
    _init_properties_Composer_kt__bmp4g0();
    return startRootGroup;
  }
  var startRootGroup;
  function get_resetSlotsInstance() {
    _init_properties_Composer_kt__bmp4g0();
    return resetSlotsInstance;
  }
  var resetSlotsInstance;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  function get_provider() {
    _init_properties_Composer_kt__bmp4g0();
    return provider;
  }
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  function get_providerValues() {
    _init_properties_Composer_kt__bmp4g0();
    return providerValues;
  }
  var providerValues;
  function get_providerMaps() {
    _init_properties_Composer_kt__bmp4g0();
    return providerMaps;
  }
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.hy();
    while (tmp0_iterator.d()) {
      var slot = tmp0_iterator.e();
      if (!(slot == null) ? isInterface(slot, ComposeNodeLifecycleCallback) : false) {
        rememberManager.iy(slot);
      }
      if (!(slot == null) ? isInterface(slot, RememberObserver) : false) {
        rememberManager.jy(slot);
      }
      if (slot instanceof RecomposeScopeImpl) {
        slot.ak();
      }
    }
    _this__u8e3s4.ry();
  }
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.sy_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_getInstance();
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function runtimeCheck(value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp;
    if (!value) {
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      var message = 'Check failed';
      composeRuntimeError(toString(message));
    }
    return tmp;
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.fz(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.gz();
  }
  function ProvidedValue(compositionLocal, value, canOverride) {
    this.b10_1 = compositionLocal;
    this.c10_1 = value;
    this.d10_1 = canOverride;
    this.e10_1 = 0;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.ez(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    var tmp0_let = get_compositionTracer();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    return !(tmp0_let == null) ? tmp0_let.f10() : false;
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g10(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.h10();
    }
  }
  function MovableContent() {
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.i10_1 = content;
    this.j10_1 = parameter;
    this.k10_1 = composition;
    this.l10_1 = slotTable;
    this.m10_1 = anchor;
    this.n10_1 = invalidations;
    this.o10_1 = locals;
    this.p10_1 = 8;
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.q10_1 = message;
  }
  protoOf(ComposeRuntimeError).f6 = function () {
    return this.q10_1;
  };
  function startRoot($this) {
    $this.y11_1 = $this.t10_1.b13();
    startGroup($this, 100);
    $this.s10_1.d13();
    $this.l11_1 = $this.s10_1.e13();
    $this.o11_1.h13(asInt($this.n11_1));
    $this.n11_1 = $this.pz($this.l11_1);
    $this.c12_1 = null;
    if (!$this.g11_1) {
      $this.g11_1 = $this.s10_1.i13();
    }
    var tmp0_safe_receiver = read($this.l11_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.a($this.t10_1);
      $this.s10_1.j13(tmp0_safe_receiver);
    }
    startGroup($this, $this.s10_1.k13());
  }
  function endRoot($this) {
    endGroup($this);
    $this.s10_1.l13();
    endGroup($this);
    recordEndRoot($this);
    finalizeCompose($this);
    $this.y11_1.y13();
    $this.h11_1 = false;
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.y10_1.f7();
    $this.b11_1.f7();
    $this.d11_1.f7();
    $this.k11_1.f7();
    $this.o11_1.f7();
    $this.m11_1.f7();
    if (!$this.y11_1.r13_1) {
      $this.y11_1.y13();
    }
    if (!$this.a12_1.fy_1) {
      $this.a12_1.y13();
    }
    $this.f12_1.f7();
    createFreshInsertTable($this);
    $this.h12_1 = 0;
    $this.r11_1 = 0;
    $this.i11_1 = false;
    $this.g12_1 = false;
    $this.p11_1 = false;
    $this.w11_1 = false;
    $this.h11_1 = false;
    $this.q11_1 = -1;
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_2().b14_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_2().b14_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.c11_1 = $this.c11_1 + $this.y11_1.e14() | 0;
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.c12_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.y11_1.u13_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.g12_1 ? $this.b12_1 : false) {
      var current = $this.a12_1.ey_1;
      while (current > 0) {
        if ($this.a12_1.h14(current) === 202 ? equals($this.a12_1.g14(current), get_compositionLocalMap()) : false) {
          var tmp = $this.a12_1.f14(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.c12_1 = providers;
          return providers;
        }
        current = $this.a12_1.i14(current);
      }
    }
    if ($this.y11_1.f() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.y11_1.h14(current_0) === 202 ? equals($this.y11_1.g14(current_0), get_compositionLocalMap()) : false) {
          var tmp0_elvis_lhs = $this.m11_1.l(current_0);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            var tmp_1 = $this.y11_1.f14(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.c12_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.y11_1.i14(current_0);
      }
    }
    $this.c12_1 = $this.l11_1;
    return $this.l11_1;
  }
  function updateProviderMapGroup($this, parentScope, currentProviders) {
    // Inline function 'androidx.compose.runtime.mutate' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = parentScope.j14();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateProviderMapGroup.<anonymous>' call
    tmp0_apply.m8(currentProviders);
    var providerScope = tmp0_apply.ia();
    startGroup_0($this, 204, get_providerMaps());
    $this.pz(providerScope);
    $this.pz(currentProviders);
    endGroup($this);
    return providerScope;
  }
  function ensureWriter($this) {
    if ($this.a12_1.fy_1) {
      $this.a12_1 = $this.z11_1.k14();
      $this.a12_1.hz();
      $this.b12_1 = false;
      $this.c12_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.a12_1.fy_1);
    $this.z11_1 = new SlotTable();
    var tmp = $this;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.z11_1.k14();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.createFreshInsertTable.<anonymous>' call
    tmp0_also.y13();
    tmp.a12_1 = tmp0_also;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.y11_1.n14();
    } else {
      if (!(data == null) ? !($this.y11_1.l14() === data) : false) {
        recordSlotTableOperation$default($this, VOID, ComposerImpl$startReaderGroup$lambda(data));
      }
      $this.y11_1.m14();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    updateCompoundKeyWhenWeEnterGroup($this, key, objectKey, data);
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_2().b14_1));
    if ($this.g12_1) {
      $this.y11_1.o14();
      var startIndex = $this.a12_1.dy_1;
      if (isNode) {
        $this.a12_1.r14(key, Companion_getInstance_1().sy_1);
      } else if (!(data == null)) {
        var tmp = $this.a12_1;
        tmp.q14(key, objectKey == null ? Companion_getInstance_1().sy_1 : objectKey, data);
      } else {
        var tmp_0 = $this.a12_1;
        tmp_0.p14(key, objectKey == null ? Companion_getInstance_1().sy_1 : objectKey);
      }
      var tmp2_safe_receiver = $this.z10_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp2_safe_receiver.y14(insertKeyInfo, $this.a11_1 - tmp2_safe_receiver.t14_1 | 0);
        tmp2_safe_receiver.z14(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_getInstance();
    }
    var tmp_1;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_2().c14_1))) {
      tmp_1 = $this.p11_1;
    } else {
      tmp_1 = false;
    }
    var forceReplace = tmp_1;
    if ($this.z10_1 == null) {
      var slotKey = $this.y11_1.a15();
      if ((!forceReplace ? slotKey === key : false) ? equals(objectKey, $this.y11_1.c15()) : false) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.z10_1 = new Pending($this.y11_1.b15(), $this.a11_1);
      }
    }
    var pending = $this.z10_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.d15(key, objectKey);
      if (!forceReplace ? !(keyInfo == null) : false) {
        pending.z14(keyInfo);
        var location = keyInfo.i15_1;
        $this.a11_1 = pending.l15(keyInfo) + pending.t14_1 | 0;
        var relativePosition = pending.m15(keyInfo);
        var currentRelativePosition = relativePosition - pending.u14_1 | 0;
        pending.n15(relativePosition, pending.u14_1);
        recordReaderMoving($this, location);
        $this.y11_1.o15(location);
        if (currentRelativePosition > 0) {
          recordSlotEditingOperation($this, ComposerImpl$start$lambda(currentRelativePosition));
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.y11_1.o14();
        $this.g12_1 = true;
        $this.c12_1 = null;
        ensureWriter($this);
        $this.a12_1.e15();
        var startIndex_0 = $this.a12_1.dy_1;
        if (isNode) {
          $this.a12_1.r14(key, Companion_getInstance_1().sy_1);
        } else if (!(data == null)) {
          var tmp_2 = $this.a12_1;
          tmp_2.q14(key, objectKey == null ? Companion_getInstance_1().sy_1 : objectKey, data);
        } else {
          var tmp_3 = $this.a12_1;
          tmp_3.p14(key, objectKey == null ? Companion_getInstance_1().sy_1 : objectKey);
        }
        $this.e12_1 = $this.a12_1.f15(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.y14(insertKeyInfo_0, $this.a11_1 - pending.t14_1 | 0);
        pending.z14(insertKeyInfo_0);
        var tmp$ret$4;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp$ret$4 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$4, isNode ? 0 : $this.a11_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.y10_1.p15($this.z10_1);
    $this.z10_1 = newPending;
    $this.b11_1.h13($this.a11_1);
    if (isNode)
      $this.a11_1 = 0;
    $this.d11_1.h13($this.c11_1);
    $this.c11_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.y10_1.q15();
    if (!(previousPending == null) ? !inserting : false) {
      previousPending.u14_1 = previousPending.u14_1 + 1 | 0;
    }
    $this.z10_1 = previousPending;
    $this.a11_1 = $this.b11_1.q15() + expectedNodeCount | 0;
    $this.c11_1 = $this.d11_1.q15() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    if ($this.g12_1) {
      var parent = $this.a12_1.ey_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.a12_1.h14(parent), $this.a12_1.g14(parent), $this.a12_1.f14(parent));
    } else {
      var parent_0 = $this.y11_1.u13_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.y11_1.h14(parent_0), $this.y11_1.g14(parent_0), $this.y11_1.f14(parent_0));
    }
    var expectedNodeCount = $this.c11_1;
    var pending = $this.z10_1;
    if (!(pending == null) ? pending.s14_1.f() > 0 : false) {
      var previous = pending.s14_1;
      var current = pending.r15();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.f();
      var previousIndex = 0;
      var previousEnd = previous.f();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.l(previousIndex);
        if (!usedKeys.m(previousInfo)) {
          var deleteOffset = pending.l15(previousInfo);
          recordRemoveNode($this, deleteOffset + pending.t14_1 | 0, previousInfo.j15_1);
          pending.s15(previousInfo.i15_1, 0);
          recordReaderMoving($this, previousInfo.i15_1);
          $this.y11_1.o15(previousInfo.i15_1);
          recordDelete($this);
          $this.y11_1.e14();
          removeRange($this.j11_1, previousInfo.i15_1, previousInfo.i15_1 + $this.y11_1.t15(previousInfo.i15_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.m(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.l(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.l15(currentInfo);
            placedKeys.a(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.u15(currentInfo);
              recordMoveNode($this, nodePosition + pending.t14_1 | 0, nodeOffset + pending.t14_1 | 0, updatedCount);
              pending.v15(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.u15(currentInfo) | 0;
        }
      }
      realizeMovement($this);
      if (previous.f() > 0) {
        recordReaderMoving($this, $this.y11_1.w15());
        $this.y11_1.hz();
      }
    }
    var removeIndex = $this.a11_1;
    while (!$this.y11_1.x15()) {
      var startSlot = $this.y11_1.s13_1;
      recordDelete($this);
      var nodesToRemove = $this.y11_1.e14();
      recordRemoveNode($this, removeIndex, nodesToRemove);
      removeRange($this.j11_1, startSlot, $this.y11_1.s13_1);
    }
    var inserting = $this.g12_1;
    if (inserting) {
      if (isNode) {
        registerInsertUpFixup($this);
        expectedNodeCount = 1;
      }
      $this.y11_1.z15();
      var parentGroup = $this.a12_1.ey_1;
      $this.a12_1.a16();
      if (!$this.y11_1.c16()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.a12_1.b16();
        $this.a12_1.y13();
        recordInsert($this, $this.e12_1);
        $this.g12_1 = false;
        if (!$this.t10_1.rk()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        recordUp($this);
      }
      recordEndGroup($this);
      var parentGroup_0 = $this.y11_1.u13_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.y11_1.y15();
      realizeMovement($this);
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.w11_1;
    $this.w11_1 = true;
    var recomposed = false;
    var parent = $this.y11_1.u13_1;
    var end = parent + $this.y11_1.t15(parent) | 0;
    var recomposeIndex = $this.a11_1;
    var recomposeCompoundKey = $this.h12_1;
    var oldGroupNodeCount = $this.c11_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.j11_1, $this.y11_1.s13_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.e16_1;
      removeLocation($this.j11_1, location);
      if (firstInRange_0.j16()) {
        recomposed = true;
        $this.y11_1.o15(location);
        var newGroup = $this.y11_1.s13_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.a11_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.h12_1 = compoundKeyOf($this, $this.y11_1.i14(newGroup), parent, recomposeCompoundKey);
        $this.c12_1 = null;
        firstInRange_0.d16_1.h16($this);
        $this.c12_1 = null;
        $this.y11_1.i16(parent);
      } else {
        $this.v11_1.p15(firstInRange_0.d16_1);
        firstInRange_0.d16_1.g16();
        $this.v11_1.q15();
      }
      firstInRange_0 = firstInRange($this.j11_1, $this.y11_1.s13_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.y11_1.hz();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.a11_1 = recomposeIndex + parentGroupNodes | 0;
      $this.c11_1 = oldGroupNodeCount + parentGroupNodes | 0;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.h12_1 = recomposeCompoundKey;
    $this.w11_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.y10_1.f() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.y10_1.k16(pendingIndex);
            if (!(pending == null) ? pending.s15(current, newCurrentNodes) : false) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.y11_1.u13_1;
        } else {
          if ($this.y11_1.l16(current))
            break $l$loop_0;
          current = $this.y11_1.i14(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.y11_1.i14(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.y11_1.l16(anchorGroup)) {
      anchorGroup = $this.y11_1.i14(anchorGroup);
    }
    var index = $this.y11_1.l16(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.y11_1.m16(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.y11_1.t15(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + updatedNodeCount($this, current) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.f11_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp = tmp0_safe_receiver.l2(group);
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.e11_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.y11_1.m16(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.f11_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = HashMap_init_$Create$();
          $this.f11_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        // Inline function 'kotlin.collections.set' call
        virtualCounts.g3(group, count);
      } else {
        var tmp1_elvis_lhs = $this.e11_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.y11_1.f());
          fill(newCounts_0, -1);
          $this.e11_1 = newCounts_0;
          tmp_0 = newCounts_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.e11_1 = null;
    $this.f11_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.y11_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 ? !(current === nearestCommonRoot) : false) {
      if (reader.l16(current)) {
        recordUp($this);
      }
      current = reader.i14(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 ? !(group === nearestCommonRoot) : false) {
      doRecordDownsFor($this, $this.y11_1.i14(group), nearestCommonRoot);
      if ($this.y11_1.l16(group)) {
        recordDown($this, nodeAt($this.y11_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.y11_1, $this, group);
      var tmp_0;
      if (groupKey === get_movableContentKey()) {
        tmp_0 = groupKey;
      } else {
        // Inline function 'androidx.compose.runtime.rol' call
        var tmp0_rol = compoundKeyOf($this, $this.y11_1.i14(group), recomposeGroup, recomposeKey);
        tmp_0 = rotateLeft(tmp0_rol, 3) ^ groupKey;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.n16(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.g14(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.w4_1;
        } else {
          if (tmp0_safe_receiver instanceof MovableContent) {
            tmp_1 = get_movableContentKey();
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp_0 = tmp_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_let = _this__u8e3s4.h14(group);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var tmp_2;
      if (tmp0_let === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.f14(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance_1().sy_1) ? tmp0_let : hashCode(tmp0_safe_receiver_0);
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? tmp0_let : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = tmp0_let;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.c11_1 = $this.y11_1.o16();
    $this.y11_1.hz();
  }
  function addRecomposeScope($this) {
    if ($this.g12_1) {
      var tmp = $this.x10_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.v11_1.p15(scope);
      $this.p16(scope);
      scope.r16($this.s11_1);
    } else {
      var invalidation = removeLocation($this.j11_1, $this.y11_1.u13_1);
      var slot = $this.y11_1.e();
      var tmp_0;
      if (equals(slot, Companion_getInstance_1().sy_1)) {
        var tmp_1 = $this.x10_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.p16(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      scope_0.q16(!(invalidation == null));
      $this.v11_1.p15(scope_0);
      scope_0.r16($this.s11_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.s16(get_movableContentKey(), content);
    $this.pz(parameter);
    var savedCompoundKeyHash = $this.h12_1;
    try {
      $this.h12_1 = get_movableContentKey();
      if ($this.g12_1) {
        $this.a12_1.t16();
      }
      var providersChanged = $this.g12_1 ? false : !equals($this.y11_1.l14(), locals);
      if (providersChanged) {
        $this.m11_1.u16($this.y11_1.s13_1, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_2().b14_1, locals);
      if ($this.g12_1 ? !force : false) {
        $this.b12_1 = true;
        $this.c12_1 = null;
        var anchor = $this.a12_1.f15($this.a12_1.i14($this.a12_1.ey_1));
        var reference = new MovableContentStateReference(content, parameter, $this.x10_1, $this.z11_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.s10_1.v16(reference);
      } else {
        var savedProvidersInvalid = $this.n11_1;
        $this.n11_1 = providersChanged;
        invokeComposable$composable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.n11_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.h12_1 = savedCompoundKeyHash;
      $this.w16();
    }
  }
  function insertMovableContentGuarded($this, references) {
    $l$block_1: {
      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
      var tmp0_withChanges = $this.w10_1;
      var savedChanges = $this.v10_1;
      try {
        $this.v10_1 = tmp0_withChanges;
        record($this, get_resetSlotsInstance());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = references.f() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = references.l(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
            var to = item.e3();
            var from = item.f3();
            var anchor = to.m10_1;
            var location = to.l10_1.x16(anchor);
            var effectiveNodeIndex = {_v: 0};
            realizeUps($this);
            record($this, ComposerImpl$insertMovableContentGuarded$lambda(effectiveNodeIndex, anchor));
            if (from == null) {
              var toSlotTable = to.l10_1;
              if (equals(toSlotTable, $this.z11_1)) {
                createFreshInsertTable($this);
              }
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              // Inline function 'kotlin.let' call
              var tmp0_let = to.l10_1.b13();
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var tmp;
              try {
                tmp0_let.o15(location);
                $this.k12_1 = location;
                // Inline function 'kotlin.collections.mutableListOf' call
                var offsetChanges = ArrayList_init_$Create$();
                recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda_0($this, offsetChanges, tmp0_let, to));
                var tmp_0;
                // Inline function 'kotlin.collections.isNotEmpty' call
                if (!offsetChanges.k()) {
                  record($this, ComposerImpl$insertMovableContentGuarded$lambda_1(effectiveNodeIndex, offsetChanges));
                  tmp_0 = Unit_getInstance();
                }
                tmp = tmp_0;
              }finally {
                tmp0_let.y13();
              }
            } else {
              var resolvedState = $this.s10_1.y16(from);
              var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.z16_1;
              var fromTable = tmp1_elvis_lhs == null ? from.l10_1 : tmp1_elvis_lhs;
              var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.z16_1;
              var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.f15(0);
              var fromAnchor = tmp4_elvis_lhs == null ? from.m10_1 : tmp4_elvis_lhs;
              var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
              // Inline function 'kotlin.collections.isNotEmpty' call
              if (!nodesToInsert.k()) {
                record($this, ComposerImpl$insertMovableContentGuarded$lambda_2(effectiveNodeIndex, nodesToInsert));
                if (equals(to.l10_1, $this.t10_1)) {
                  var group = $this.t10_1.x16(anchor);
                  updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.f() | 0);
                }
              }
              record($this, ComposerImpl$insertMovableContentGuarded$lambda_3(resolvedState, $this, from, to));
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              // Inline function 'kotlin.let' call
              var tmp0_let_0 = fromTable.b13();
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var tmp_1;
              try {
                var tmp$ret$9;
                $l$block_0: {
                  // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                  var savedReader = $this.y11_1;
                  var savedCountOverrides = $this.e11_1;
                  $this.e11_1 = null;
                  try {
                    $this.y11_1 = tmp0_let_0;
                    var newLocation = fromTable.x16(fromAnchor);
                    tmp0_let_0.o15(newLocation);
                    $this.k12_1 = newLocation;
                    // Inline function 'kotlin.collections.mutableListOf' call
                    var offsetChanges_0 = ArrayList_init_$Create$();
                    $l$block: {
                      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
                      var savedChanges_0 = $this.v10_1;
                      try {
                        $this.v10_1 = offsetChanges_0;
                        var tmp_2 = tmp0_let_0.s13_1;
                        var tmp_3 = from.n10_1;
                        recomposeMovableContent($this, from.k10_1, to.k10_1, tmp_2, tmp_3, ComposerImpl$insertMovableContentGuarded$lambda_4($this, to));
                        break $l$block;
                      }finally {
                        $this.v10_1 = savedChanges_0;
                      }
                    }
                    var tmp_4;
                    // Inline function 'kotlin.collections.isNotEmpty' call
                    if (!offsetChanges_0.k()) {
                      record($this, ComposerImpl$insertMovableContentGuarded$lambda_5(effectiveNodeIndex, offsetChanges_0));
                      tmp_4 = Unit_getInstance();
                    }
                    tmp$ret$9 = tmp_4;
                    break $l$block_0;
                  }finally {
                    $this.y11_1 = savedReader;
                    $this.e11_1 = savedCountOverrides;
                  }
                }
                tmp_1 = tmp$ret$9;
              }finally {
                tmp0_let_0.y13();
              }
            }
            record($this, get_skipToGroupEndInstance());
          }
           while (inductionVariable <= last);
        record($this, ComposerImpl$insertMovableContentGuarded$lambda_6);
        $this.k12_1 = 0;
        break $l$block_1;
      }finally {
        $this.v10_1 = savedChanges;
      }
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedImplicitRootStart = $this.m12_1;
    var savedIsComposing = $this.w11_1;
    var savedNodeIndex = $this.a11_1;
    try {
      $this.m12_1 = false;
      $this.w11_1 = true;
      $this.a11_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.l(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.e3();
          var instances = item.f3();
          if (!(instances == null)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var values = instances.d17_1;
            var inductionVariable_0 = 0;
            var last_0 = instances.c17_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>.<anonymous>' call
                var tmp = values[i];
                var tmp0_anonymous = isObject(tmp) ? tmp : THROW_CCE();
                $this.b17(scope, tmp0_anonymous);
              }
               while (inductionVariable_0 < last_0);
          } else {
            $this.b17(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp_0;
      if (from == null) {
        tmp_0 = null;
      } else {
        tmp_0 = from.e17(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp_0;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.m12_1 = savedImplicitRootStart;
      $this.w11_1 = savedIsComposing;
      $this.a11_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.f17(_this__u8e3s4.u13_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.f17(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.i11_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeRuntimeError(toString(message));
    }
    $this.i11_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.i11_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      var message = 'A call to createNode(), emitNode() or useNode() expected';
      composeRuntimeError(toString(message));
    }
  }
  function record($this, change) {
    $this.v10_1.a(change);
  }
  function recordApplierOperation($this, change) {
    realizeUps($this);
    realizeDowns_0($this);
    record($this, change);
  }
  function recordSlotEditingOperation($this, change) {
    realizeOperationLocation$default($this);
    recordSlotEditing($this);
    record($this, change);
  }
  function recordSlotTableOperation($this, forParent, change) {
    realizeOperationLocation($this, forParent);
    record($this, change);
  }
  function recordSlotTableOperation$default($this, forParent, change, $super) {
    forParent = forParent === VOID ? false : forParent;
    return recordSlotTableOperation($this, forParent, change);
  }
  function realizeUps($this) {
    var count = $this.i12_1;
    if (count > 0) {
      $this.i12_1 = 0;
      record($this, ComposerImpl$realizeUps$lambda(count));
    }
  }
  function realizeDowns($this, nodes) {
    record($this, ComposerImpl$realizeDowns$lambda(nodes));
  }
  function realizeDowns_0($this) {
    if ($this.j12_1.g17()) {
      realizeDowns($this, $this.j12_1.o8());
      $this.j12_1.f7();
    }
  }
  function recordDown($this, node) {
    $this.j12_1.p15(node);
  }
  function recordUp($this) {
    if ($this.j12_1.g17()) {
      $this.j12_1.q15();
    } else {
      $this.i12_1 = $this.i12_1 + 1 | 0;
    }
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? $this.y11_1.u13_1 : $this.y11_1.s13_1;
    var distance = location - $this.k12_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(distance >= 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.realizeOperationLocation.<anonymous>' call
      var message = 'Tried to seek backward';
      composeRuntimeError(toString(message));
    }
    if (distance > 0) {
      record($this, ComposerImpl$realizeOperationLocation$lambda(distance));
      $this.k12_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function recordInsert($this, anchor) {
    if ($this.f12_1.k()) {
      var insertTable = $this.z11_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda(insertTable, anchor));
    } else {
      var fixups = toMutableList($this.f12_1);
      $this.f12_1.f7();
      realizeUps($this);
      realizeDowns_0($this);
      var insertTable_0 = $this.z11_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda_0(insertTable_0, fixups, anchor));
    }
  }
  function recordFixup($this, change) {
    $this.f12_1.a(change);
  }
  function recordInsertUpFixup($this, change) {
    $this.o12_1.p15(change);
  }
  function registerInsertUpFixup($this) {
    $this.f12_1.a($this.o12_1.q15());
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.y11_1.s13_1);
    recordSlotEditingOperation($this, get_removeCurrentGroupInstance());
    $this.k12_1 = $this.k12_1 + $this.y11_1.h17() | 0;
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    realizeMovement($this);
  }
  function releaseMovableGroupAtCurrent($this, reference, slots) {
    var slotTable = new SlotTable();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    var tmp0_let = slotTable.k14();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.releaseMovableGroupAtCurrent.<anonymous>' call
      tmp0_let.e15();
      tmp0_let.p14(get_movableContentKey(), reference.i10_1);
      tmp0_let.t16();
      tmp0_let.i17(reference.j10_1);
      var anchors = slots.j17(reference.m10_1, 1, tmp0_let);
      tmp0_let.e14();
      tmp0_let.a16();
      tmp0_let.b16();
      tmp = anchors;
    }finally {
      tmp0_let.y13();
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_getInstance_4().l17(slotTable, anchors_0)) {
      var composition = $this.x10_1;
      var movableContentRecomposeScopeOwner = new ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = slotTable.k14();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var tmp_0;
      try {
        Companion_getInstance_4().k17(tmp0_let_0, anchors_0, movableContentRecomposeScopeOwner);
        tmp_0 = Unit_getInstance();
      }finally {
        tmp0_let_0.y13();
      }
    }
    $this.s10_1.m17(reference, state);
  }
  function reportAllMovableContent($this) {
    if ($this.t10_1.n17()) {
      // Inline function 'kotlin.collections.mutableListOf' call
      var changes = ArrayList_init_$Create$();
      $this.d12_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $this.t10_1.b13();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var tmp;
      try {
        $this.y11_1 = tmp0_let;
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
          var savedChanges = $this.v10_1;
          try {
            $this.v10_1 = changes;
            reportFreeMovableContent($this, 0);
            realizeUps($this);
            var tmp_0;
            if ($this.l12_1) {
              record($this, get_skipToGroupEndInstance());
              recordEndRoot($this);
              tmp_0 = Unit_getInstance();
            }
            tmp$ret$1 = tmp_0;
            break $l$block;
          }finally {
            $this.v10_1 = savedChanges;
          }
        }
        tmp = tmp$ret$1;
      }finally {
        tmp0_let.y13();
      }
    }
  }
  function recordReaderMoving($this, location) {
    var distance = $this.y11_1.s13_1 - $this.k12_1 | 0;
    $this.k12_1 = location - distance | 0;
  }
  function recordSlotEditing($this) {
    if ($this.y11_1.f() > 0) {
      var reader = $this.y11_1;
      var location = reader.u13_1;
      if (!($this.n12_1.o17(-2) === location)) {
        if (!$this.l12_1 ? $this.m12_1 : false) {
          recordSlotTableOperation$default($this, VOID, get_startRootGroup());
          $this.l12_1 = true;
        }
        if (location > 0) {
          var anchor = reader.f15(location);
          $this.n12_1.h13(location);
          recordSlotTableOperation$default($this, VOID, ComposerImpl$recordSlotEditing$lambda(anchor));
        }
      }
    }
  }
  function recordEndGroup($this) {
    var location = $this.y11_1.u13_1;
    var currentStartedGroup = $this.n12_1.o17(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(currentStartedGroup <= location)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordEndGroup.<anonymous>' call
      var message = 'Missed recording an endGroup';
      composeRuntimeError(toString(message));
    }
    if ($this.n12_1.o17(-1) === location) {
      $this.n12_1.q15();
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
    }
  }
  function recordEndRoot($this) {
    if ($this.l12_1) {
      recordSlotTableOperation$default($this, VOID, get_endGroupInstance());
      $this.l12_1 = false;
    }
  }
  function finalizeCompose($this) {
    realizeUps($this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.y10_1.k()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message = 'Start/end imbalance';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!$this.n12_1.k()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var message_0 = 'Missed recording an endGroup()';
      composeRuntimeError(toString(message_0));
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.z10_1 = null;
    $this.a11_1 = 0;
    $this.c11_1 = 0;
    $this.k12_1 = 0;
    $this.h12_1 = 0;
    $this.i11_1 = false;
    $this.l12_1 = false;
    $this.n12_1.f7();
    $this.v11_1.f7();
    clearUpdatedNodeCounts($this);
  }
  function recordRemoveNode($this, nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(nodeIndex >= 0)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.recordRemoveNode.<anonymous>' call
        var message = 'Invalid remove index ' + nodeIndex;
        composeRuntimeError(toString(message));
      }
      if ($this.p12_1 === nodeIndex) {
        $this.s12_1 = $this.s12_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.p12_1 = nodeIndex;
        $this.s12_1 = count;
      }
    }
  }
  function recordMoveNode($this, from, to, count) {
    if (count > 0) {
      if (($this.s12_1 > 0 ? $this.q12_1 === (from - $this.s12_1 | 0) : false) ? $this.r12_1 === (to - $this.s12_1 | 0) : false) {
        $this.s12_1 = $this.s12_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.q12_1 = from;
        $this.r12_1 = to;
        $this.s12_1 = count;
      }
    }
  }
  function realizeMovement($this) {
    var count = $this.s12_1;
    $this.s12_1 = 0;
    if (count > 0) {
      if ($this.p12_1 >= 0) {
        var removeIndex = $this.p12_1;
        $this.p12_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda(removeIndex, count));
      } else {
        var from = $this.q12_1;
        $this.q12_1 = -1;
        var to = $this.r12_1;
        $this.r12_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda_0(from, to, count));
      }
    }
  }
  function CompositionContextHolder() {
  }
  function updateCompoundKeyWhenWeEnterGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_1().sy_1) : false) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, dataKey.w4_1);
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeEnterGroupKeyHash($this, keyHash) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.rol' call
    var tmp0_rol = $this.h12_1;
    tmp.h12_1 = rotateLeft(tmp0_rol, 3) ^ keyHash;
  }
  function updateCompoundKeyWhenWeExitGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_1().sy_1) : false) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, dataKey.w4_1);
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey) {
    var tmp = $this;
    // Inline function 'androidx.compose.runtime.ror' call
    var tmp0_ror = $this.h12_1 ^ groupKey;
    tmp.h12_1 = rotateRight(tmp0_ror, 3);
  }
  function doCompose$composable($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!$this.w11_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>' call
      var message = 'Reentrant composition is not supported';
      composeRuntimeError(toString(message));
    }
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var token = Trace_getInstance().p17('Compose:recompose');
      try {
        $this.s11_1 = currentSnapshot().v17();
        $this.m11_1.f7();
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
        var inductionVariable = 0;
        var last = invalidationsRequested.y17_1;
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            var tmp = invalidationsRequested.w17_1[index];
            var tmp0_anonymous = isObject(tmp) ? tmp : THROW_CCE();
            var tmp_0 = invalidationsRequested.x17_1[index];
            var tmp1_anonymous = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
            var tmp0_safe_receiver = tmp0_anonymous.my_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z17_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }
            var location = tmp_1;
            $this.j11_1.a(new Invalidation(tmp0_anonymous, location, tmp1_anonymous));
          }
           while (inductionVariable < last);
        // Inline function 'kotlin.collections.sortBy' call
        var tmp2_sortBy = $this.j11_1;
        if (tmp2_sortBy.f() > 1) {
          var tmp$ret$1;
          // Inline function 'kotlin.comparisons.compareBy' call
          var tmp_2 = ComposerImpl$doCompose$composable$lambda;
          tmp$ret$1 = new sam$kotlin_Comparator$0(tmp_2);
          sortWith(tmp2_sortBy, tmp$ret$1);
        }
        $this.a11_1 = 0;
        var complete = false;
        $this.w11_1 = true;
        var tmp_3;
        try {
          startRoot($this);
          var savedContent = $this.a18();
          if (!(savedContent === content) ? !(content == null) : false) {
            $this.p16((content == null ? true : isObject(content)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var tmp3_observeDerivedStateRecalculations = $this.u11_1;
          var observers = derivedStateObservers_0();
          try {
            observers.f18(tmp3_observeDerivedStateRecalculations);
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable$composable($this, content);
              endGroup($this);
            } else if ((($this.h11_1 ? true : $this.n11_1) ? !(savedContent == null) : false) ? !equals(savedContent, Companion_getInstance_1().sy_1) : false) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable$composable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.g18();
            }
          }finally {
            var tmp$ret$2;
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            tmp$ret$2 = observers.d18_1 - 1 | 0;
            observers.h3(tmp$ret$2);
          }
          endRoot($this);
          complete = true;
          tmp_3 = Unit_getInstance();
        }finally {
          $this.w11_1 = false;
          $this.j11_1.f7();
          if (!complete) {
            abortRoot($this);
          }
        }
        break $l$block;
      }finally {
        Trace_getInstance().h18(token);
      }
    }
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.i18_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).oc = function (a, b) {
    return this.i18_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.oc(a, b);
  };
  function insertMovableContentGuarded$positionToParentOf(slots, applier, index) {
    while (!slots.j18(index)) {
      slots.hz();
      if (slots.l16(slots.ey_1)) {
        applier.hw();
      }
      slots.a16();
    }
  }
  function insertMovableContentGuarded$currentNodeIndex(slots) {
    var original = slots.dy_1;
    var current = slots.ey_1;
    while (current >= 0 ? !slots.l16(current) : false) {
      current = slots.i14(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.k18(original, current)) {
        if (slots.l16(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.l16(current) ? 1 : slots.m16(current)) | 0;
        current = current + slots.t15(current) | 0;
      }
    }
    return index;
  }
  function insertMovableContentGuarded$positionToInsert(slots, anchor, applier) {
    var destination = slots.x16(anchor);
    runtimeCheck(slots.dy_1 < destination);
    insertMovableContentGuarded$positionToParentOf(slots, applier, destination);
    var nodeIndex = insertMovableContentGuarded$currentNodeIndex(slots);
    while (slots.dy_1 < destination) {
      if (slots.m18(destination)) {
        if (slots.l18()) {
          applier.gw(slots.f17(slots.dy_1));
          nodeIndex = 0;
        }
        slots.m14();
      } else
        nodeIndex = nodeIndex + slots.e14() | 0;
    }
    runtimeCheck(slots.dy_1 === destination);
    return nodeIndex;
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var tmp;
    if (this$0.y11_1.z18(group)) {
      var key = this$0.y11_1.h14(group);
      var objectKey = this$0.y11_1.g14(group);
      var tmp_0;
      var tmp_1;
      if (key === get_movableContentKey()) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = this$0.y11_1.o18(group, 0);
        var anchor = this$0.y11_1.f15(group);
        var end = group + this$0.y11_1.t15(group) | 0;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var tmp0_fastMap = filterToRange(this$0.j11_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(tmp0_fastMap.f());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_fastMap.f() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_fastMap.l(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            var tmp0_plusAssign = to(item.d16_1, item.f16_1);
            target.a(tmp0_plusAssign);
          }
           while (inductionVariable <= last);
        var invalidations = target;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.x10_1, this$0.t10_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.s10_1.y18(reference);
        recordSlotEditing(this$0);
        record(this$0, ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, reference));
        var tmp_2;
        if (needsNodeDelete) {
          realizeMovement(this$0);
          realizeUps(this$0);
          realizeDowns_0(this$0);
          var nodeCount = this$0.y11_1.l16(group) ? 1 : this$0.y11_1.m16(group);
          if (nodeCount > 0) {
            recordRemoveNode(this$0, nodeIndex, nodeCount);
          }
          tmp_2 = 0;
        } else {
          tmp_2 = this$0.y11_1.m16(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 ? equals(objectKey, get_reference()) : false) {
          var tmp_3 = this$0.y11_1.o18(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.p18_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator = compositionContext.u18_1.c();
            while (tmp0_iterator.d()) {
              var element = tmp0_iterator.e();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element);
              this$0.s10_1.x18(element.x10_1);
            }
          }
          tmp_0 = this$0.y11_1.m16(group);
        } else {
          tmp_0 = this$0.y11_1.m16(group);
        }
      }
      tmp = tmp_0;
    } else if (this$0.y11_1.n18(group)) {
      var size = this$0.y11_1.t15(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = this$0.y11_1.l16(current);
        if (isNode) {
          realizeMovement(this$0);
          recordDown(this$0, this$0.y11_1.f17(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode ? true : needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          realizeMovement(this$0);
          recordUp(this$0);
        }
        current = current + this$0.y11_1.t15(current) | 0;
      }
      tmp = runningNodeCount;
    } else {
      tmp = this$0.y11_1.m16(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.a19_1 = this$0;
  }
  function ComposerImpl$createNode$lambda($factory, $groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var node = $factory();
      slots.b19($groupAnchor, node);
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.iw($insertIndex, node);
      applier.gw(node);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$createNode$lambda_0($groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var nodeToInsert = slots.c19($groupAnchor);
      applier.hw();
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.jw($insertIndex, nodeToInsert);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$useNode$lambda(applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    var tmp = applier.dw();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).jx();
    return Unit_getInstance();
  }
  function ComposerImpl$apply$lambda($block, $value) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var tmp = applier.dw();
      $block((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE(), $value);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$updateValue$lambda($value) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.d19($value);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$updateValue$lambda_0($value, $groupSlotIndex) {
    return function (_anonymous_parameter_0__qggqh8, slots, rememberManager) {
      var tmp;
      if (!($value == null) ? isInterface($value, RememberObserver) : false) {
        rememberManager.d19($value);
        tmp = Unit_getInstance();
      }
      var previous = slots.e19($groupSlotIndex, $value);
      var tmp_0;
      if (!(previous == null) ? isInterface(previous, RememberObserver) : false) {
        rememberManager.jy(previous);
        tmp_0 = Unit_getInstance();
      } else {
        if (previous instanceof RecomposeScopeImpl) {
          previous.ak();
          tmp_0 = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordSideEffect$lambda($effect) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.f19($effect);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$startProviders$lambda($values, $parentScope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.yy(-948105361);
      sourceInformation($composer_0, 'C1996@73844L42:Composer.kt#9igjgp');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-948105361, $changed, -1, 'androidx.compose.runtime.ComposerImpl.startProviders.<anonymous> (Composer.kt:1995)');
        tmp = Unit_getInstance();
      }
      var tmp0 = compositionLocalMapOf$composable($values, $parentScope, $composer_0, 0);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.zy();
      return tmp0;
    };
  }
  function ComposerImpl$startReaderGroup$lambda($data) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.g19($data);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$start$lambda($currentRelativePosition) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.h19($currentRelativePosition);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$endRestartGroup$lambda($tmp2_safe_receiver, this$0) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      $tmp2_safe_receiver(this$0.x10_1);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.i19(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C2947@112623L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.vy()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:2947)');
        }
        $content.j19_1($parameter, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.hz();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda($effectiveNodeIndex, $anchor) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      if (isInterface(applier, Applier))
        applier;
      else
        THROW_CCE();
      $effectiveNodeIndex._v = insertMovableContentGuarded$positionToInsert(slots, $anchor, applier);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $offsetChanges, $tmp0_let, $to) {
    return function () {
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
        var savedChanges = this$0.v10_1;
        try {
          this$0.v10_1 = $offsetChanges;
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
            var savedReader = this$0.y11_1;
            var savedCountOverrides = this$0.e11_1;
            this$0.e11_1 = null;
            try {
              this$0.y11_1 = $tmp0_let;
              invokeMovableContentLambda(this$0, $to.i10_1, $to.o10_1, $to.j10_1, true);
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }finally {
              this$0.y11_1 = savedReader;
              this$0.e11_1 = savedCountOverrides;
            }
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }finally {
          this$0.v10_1 = savedChanges;
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_1($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $offsetChanges.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $offsetChanges.l(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_2($effectiveNodeIndex, $nodesToInsert) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var base = $effectiveNodeIndex._v;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $nodesToInsert.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $nodesToInsert.l(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (isInterface(applier, Applier))
            applier;
          else
            THROW_CCE();
          applier.jw(base + index | 0, item);
          applier.iw(base + index | 0, item);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_3($resolvedState, this$0, $from, $to) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      var tmp0_elvis_lhs = $resolvedState;
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.s10_1.y16($from) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        composeRuntimeError('Could not resolve state for movable content');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var state = tmp;
      var anchors = slots.k19(1, state.z16_1, 2);
      var tmp_0 = Companion_getInstance_4();
      var tmp_1 = $to.k10_1;
      tmp_0.k17(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_4(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.i10_1, $to.o10_1, $to.j10_1, true);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_5($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $offsetChanges.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $offsetChanges.l(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_6(applier, slots, _anonymous_parameter_2__qggqfi) {
    if (!isInterface(applier, Applier))
      THROW_CCE();
    insertMovableContentGuarded$positionToParentOf(slots, applier, 0);
    slots.a16();
    return Unit_getInstance();
  }
  function ComposerImpl$realizeUps$lambda($count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < $count) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.ComposerImpl.realizeUps.<anonymous>.<anonymous>' call
          applier.hw();
        }
         while (inductionVariable < $count);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeDowns$lambda($nodes) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var inductionVariable = 0;
      var last = $nodes.length - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
          nodeApplier.gw($nodes[index]);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeOperationLocation$lambda($distance) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.l19($distance);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordInsert$lambda($insertTable, $anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.e15();
      slots.n19($insertTable, $anchor.m19($insertTable), false);
      slots.b16();
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordInsert$lambda_0($insertTable, $fixups, $anchor) {
    return function (applier, slots, rememberManager) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = $insertTable.k14();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var tmp;
      try {
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = $fixups.f() - 1 | 0;
        var tmp_0;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = $fixups.l(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.recordInsert.<anonymous>.<anonymous>.<anonymous>' call
            item(applier, tmp0_let, rememberManager);
          }
           while (inductionVariable <= last);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }finally {
        tmp0_let.y13();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      slots.e15();
      slots.n19($insertTable, $anchor.m19($insertTable), false);
      slots.b16();
      return Unit_getInstance();
    };
  }
  function ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.o19_1 = $composition;
    this.p19_1 = $reference;
  }
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).q19 = function (scope, instance) {
    var tmp = this.o19_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q19(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var tmp2_this = this.p19_1;
      var tmp_0 = tmp2_this;
      var tmp_1 = tmp2_this.n10_1;
      var tmp_2;
      if (instance == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.<no name provided>.invalidate.<anonymous>' call
        // Inline function 'kotlin.also' call
        var tmp0_also = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.<no name provided>.invalidate.<anonymous>.<anonymous>' call
        tmp0_also.f18(tmp0_also);
        tmp_2 = tmp0_also;
      }
      tmp_0.n10_1 = plus_0(tmp_1, to(scope, tmp_2));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).r19 = function (scope) {
  };
  protoOf(ComposerImpl$releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).s19 = function (value) {
  };
  function ComposerImpl$recordSlotEditing$lambda($anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.t19($anchor);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeMovement$lambda($removeIndex, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.kw($removeIndex, $count);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeMovement$lambda_0($from, $to, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.lw($from, $to, $count);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$doCompose$composable$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    var tmp = a.e16_1;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    tmp$ret$1 = b.e16_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, $reference) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      releaseMovableGroupAtCurrent(this$0, $reference, slots);
      return Unit_getInstance();
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.r10_1 = applier;
    this.s10_1 = parentContext;
    this.t10_1 = slotTable;
    this.u10_1 = abandonSet;
    this.v10_1 = changes;
    this.w10_1 = lateChanges;
    this.x10_1 = composition;
    this.y10_1 = new Stack();
    this.z10_1 = null;
    this.a11_1 = 0;
    this.b11_1 = new IntStack();
    this.c11_1 = 0;
    this.d11_1 = new IntStack();
    this.e11_1 = null;
    this.f11_1 = null;
    this.g11_1 = false;
    this.h11_1 = false;
    this.i11_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.j11_1 = ArrayList_init_$Create$();
    this.k11_1 = new IntStack();
    this.l11_1 = persistentCompositionLocalHashMapOf();
    this.m11_1 = new IntMap();
    this.n11_1 = false;
    this.o11_1 = new IntStack();
    this.p11_1 = false;
    this.q11_1 = -1;
    this.r11_1 = 0;
    this.s11_1 = 0;
    this.t11_1 = true;
    var tmp_0 = this;
    tmp_0.u11_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.v11_1 = new Stack();
    this.w11_1 = false;
    this.x11_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.t10_1.b13();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    tmp0_also.y13();
    tmp_1.y11_1 = tmp0_also;
    this.z11_1 = new SlotTable();
    var tmp_2 = this;
    // Inline function 'kotlin.also' call
    var tmp0_also_0 = this.z11_1.k14();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    tmp0_also_0.y13();
    tmp_2.a12_1 = tmp0_also_0;
    this.b12_1 = false;
    this.c12_1 = null;
    this.d12_1 = null;
    var tmp_3 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    var tmp0_let = this.z11_1.b13();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var tmp_4;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp_4 = tmp0_let.f15(0);
    }finally {
      tmp0_let.y13();
    }
    tmp_3.e12_1 = tmp_4;
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_5.f12_1 = ArrayList_init_$Create$();
    this.g12_1 = false;
    this.h12_1 = 0;
    this.i12_1 = 0;
    this.j12_1 = new Stack();
    this.k12_1 = 0;
    this.l12_1 = false;
    this.m12_1 = true;
    this.n12_1 = new IntStack();
    this.o12_1 = new Stack();
    this.p12_1 = -1;
    this.q12_1 = -1;
    this.r12_1 = -1;
    this.s12_1 = 0;
  }
  protoOf(ComposerImpl).ty = function () {
    return this.r10_1;
  };
  protoOf(ComposerImpl).u19 = function () {
    return this.r11_1 > 0;
  };
  protoOf(ComposerImpl).a10 = function () {
    return this.s10_1.v19();
  };
  protoOf(ComposerImpl).yy = function (key) {
    return start(this, key, null, Companion_getInstance_2().b14_1, null);
  };
  protoOf(ComposerImpl).zy = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).az = function () {
    return start(this, -127, null, Companion_getInstance_2().b14_1, null);
  };
  protoOf(ComposerImpl).bz = function () {
    endGroup(this);
    var scope = this.w19();
    if (!(scope == null) ? scope.r15() : false) {
      scope.x19(true);
    }
  };
  protoOf(ComposerImpl).wy = function () {
    var tmp;
    if (this.n11_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.w19();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wy()) === true;
    }
    return tmp;
  };
  protoOf(ComposerImpl).s16 = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_2().b14_1, null);
  };
  protoOf(ComposerImpl).w16 = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).y19 = function () {
    createFreshInsertTable(this);
    this.m11_1.f7();
  };
  protoOf(ComposerImpl).uy = function () {
    return this.g12_1;
  };
  protoOf(ComposerImpl).vy = function () {
    var tmp;
    var tmp_0;
    if ((!this.g12_1 ? !this.p11_1 : false) ? !this.n11_1 : false) {
      var tmp0_safe_receiver = this.w19();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z19()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.h11_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).ix = function () {
    return this.h12_1;
  };
  protoOf(ComposerImpl).dj = function () {
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var token = Trace_getInstance().p17('Compose:Composer.dispose');
      try {
        this.s10_1.a1a(this);
        this.v11_1.f7();
        this.j11_1.f7();
        this.v10_1.f7();
        this.m11_1.f7();
        this.r10_1.f7();
        this.x11_1 = true;
        break $l$block;
      }finally {
        Trace_getInstance().h18(token);
      }
    }
  };
  protoOf(ComposerImpl).iz = function () {
    start(this, 125, null, Companion_getInstance_2().d14_1, null);
    this.i11_1 = true;
  };
  protoOf(ComposerImpl).jz = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.g12_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      var message = 'createNode() can only be called when inserting';
      composeRuntimeError(toString(message));
    }
    var insertIndex = this.b11_1.b1a();
    var groupAnchor = this.a12_1.f15(this.a12_1.ey_1);
    this.c11_1 = this.c11_1 + 1 | 0;
    recordFixup(this, ComposerImpl$createNode$lambda(factory, groupAnchor, insertIndex));
    recordInsertUpFixup(this, ComposerImpl$createNode$lambda_0(groupAnchor, insertIndex));
  };
  protoOf(ComposerImpl).kz = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.g12_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      var message = 'useNode() called while inserting';
      composeRuntimeError(toString(message));
    }
    var node = _get_node__db0vwp(this.y11_1, this);
    recordDown(this, node);
    var tmp;
    if (this.p11_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      recordApplierOperation(this, ComposerImpl$useNode$lambda);
    }
  };
  protoOf(ComposerImpl).lz = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).mz = function (value, block) {
    var operation = ComposerImpl$apply$lambda(block, value);
    if (this.g12_1) {
      recordFixup(this, operation);
    } else {
      recordApplierOperation(this, operation);
    }
  };
  protoOf(ComposerImpl).a18 = function () {
    var tmp;
    if (this.g12_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_1().sy_1;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_let = this.y11_1.e();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      tmp = this.p11_1 ? Companion_getInstance_1().sy_1 : tmp0_let;
    }
    return tmp;
  };
  protoOf(ComposerImpl).pz = function (value) {
    var tmp;
    if (!equals(this.a18(), value)) {
      this.p16(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).tz = function (value) {
    var tmp;
    if (!(this.a18() === value)) {
      this.p16(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).qz = function (value) {
    var next = this.a18();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.p16(value);
    return true;
  };
  protoOf(ComposerImpl).sz = function (value) {
    var next = this.a18();
    if (next instanceof Long) {
      var nextPrimitive = next;
      if (value.equals(nextPrimitive))
        return false;
    }
    this.p16(value);
    return true;
  };
  protoOf(ComposerImpl).rz = function (value) {
    var next = this.a18();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.p16(value);
    return true;
  };
  protoOf(ComposerImpl).p16 = function (value) {
    if (this.g12_1) {
      this.a12_1.i17(value);
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        record(this, ComposerImpl$updateValue$lambda(value));
        this.u10_1.a(value);
      }
    } else {
      var groupSlotIndex = this.y11_1.c1a() - 1 | 0;
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        this.u10_1.a(value);
      }
      recordSlotTableOperation(this, true, ComposerImpl$updateValue$lambda_0(value, groupSlotIndex));
    }
  };
  protoOf(ComposerImpl).vz = function (effect) {
    record(this, ComposerImpl$recordSideEffect$lambda(effect));
  };
  protoOf(ComposerImpl).wz = function () {
    return currentCompositionLocalScope(this);
  };
  protoOf(ComposerImpl).yz = function (values) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    startGroup_0(this, 203, get_providerValues());
    var currentProviders = invokeComposableForResult$composable(this, ComposerImpl$startProviders$lambda(values, parentScope));
    endGroup(this);
    var providers;
    var invalid;
    if (this.g12_1) {
      providers = updateProviderMapGroup(this, parentScope, currentProviders);
      invalid = false;
      this.b12_1 = true;
    } else {
      var tmp = this.y11_1.d1a(0);
      var oldScope = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
      var tmp_0 = this.y11_1.d1a(1);
      var oldValues = (!(tmp_0 == null) ? isInterface(tmp_0, PersistentCompositionLocalMap) : false) ? tmp_0 : THROW_CCE();
      if (!this.vy() ? true : !equals(oldValues, currentProviders)) {
        providers = updateProviderMapGroup(this, parentScope, currentProviders);
        invalid = !equals(providers, oldScope);
      } else {
        skipGroup(this);
        providers = oldScope;
        invalid = false;
      }
    }
    if (invalid ? !this.g12_1 : false) {
      this.m11_1.u16(this.y11_1.s13_1, providers);
    }
    this.o11_1.h13(asInt(this.n11_1));
    this.n11_1 = invalid;
    this.c12_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_2().b14_1, providers);
  };
  protoOf(ComposerImpl).zz = function () {
    endGroup(this);
    endGroup(this);
    this.n11_1 = asBool(this.o11_1.q15());
    this.c12_1 = null;
  };
  protoOf(ComposerImpl).xz = function (key) {
    return read(currentCompositionLocalScope(this), key);
  };
  protoOf(ComposerImpl).w19 = function () {
    // Inline function 'kotlin.let' call
    var tmp0_let = this.v11_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    return (this.r11_1 === 0 ? tmp0_let.g17() : false) ? tmp0_let.b1a() : null;
  };
  protoOf(ComposerImpl).b17 = function (scope, instance) {
    var tmp0_elvis_lhs = scope.my_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.y11_1.m13_1;
    var location = anchor.m19(slotTable);
    if (this.w11_1 ? location >= this.y11_1.s13_1 : false) {
      insertIfMissing(this.j11_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).g18 = function () {
    if (this.j11_1.k()) {
      skipGroup(this);
    } else {
      var reader = this.y11_1;
      var key = reader.a15();
      var dataKey = reader.c15();
      var aux = reader.l14();
      updateCompoundKeyWhenWeEnterGroup(this, key, dataKey, aux);
      startReaderGroup(this, reader.l18(), null);
      recomposeToGroupEnd(this);
      reader.y15();
      updateCompoundKeyWhenWeExitGroup(this, key, dataKey, aux);
    }
  };
  protoOf(ComposerImpl).hz = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.c11_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      var message = 'No nodes can be emitted before calling skipAndEndGroup';
      composeRuntimeError(toString(message));
    }
    var tmp0_safe_receiver = this.w19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e1a();
    }
    if (this.j11_1.k()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).cz = function (key) {
    start(this, key, null, Companion_getInstance_2().b14_1, null);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).dz = function () {
    var scope = this.v11_1.g17() ? this.v11_1.q15() : null;
    if (scope != null) {
      scope.q16(false);
    }
    var tmp2_safe_receiver = scope == null ? null : scope.f1a(this.s11_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      record(this, ComposerImpl$endRestartGroup$lambda(tmp2_safe_receiver, this));
    }
    var tmp;
    if ((!(scope == null) ? !scope.h1a() : false) ? scope.r15() ? true : this.g11_1 : false) {
      if (scope.my_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.g12_1) {
          tmp_1 = this.a12_1.f15(this.a12_1.ey_1);
        } else {
          tmp_1 = this.y11_1.f15(this.y11_1.u13_1);
        }
        tmp_0.my_1 = tmp_1;
      }
      scope.g1a(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).i1a = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).ez = function (sourceInformation) {
    if (this.g12_1 ? this.t11_1 : false) {
      this.a12_1.j1a(sourceInformation);
    }
  };
  protoOf(ComposerImpl).fz = function (key, sourceInformation) {
    if (this.t11_1) {
      start(this, key, null, Companion_getInstance_2().b14_1, sourceInformation);
    }
  };
  protoOf(ComposerImpl).gz = function () {
    if (this.t11_1) {
      end(this, false);
    }
  };
  protoOf(ComposerImpl).k1a = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.w11_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      var message = 'Preparing a composition while composing is not supported';
      composeRuntimeError(toString(message));
    }
    this.w11_1 = true;
    try {
      block();
    }finally {
      this.w11_1 = false;
    }
  };
  protoOf(ComposerImpl).l1a = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.v10_1.k()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.g17()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.j11_1.k();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.h11_1;
    }
    if (tmp) {
      doCompose$composable(this, invalidationsRequested, null);
      // Inline function 'kotlin.collections.isNotEmpty' call
      return !this.v10_1.k();
    }
    return false;
  };
  protoOf(ComposerImpl).xy = function () {
    return this.w19();
  };
  protoOf(ComposerImpl).nz = function () {
    return this.a18();
  };
  protoOf(ComposerImpl).oz = function (value) {
    return this.p16(value);
  };
  protoOf(ComposerImpl).uz = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.m1a(true);
    }
  };
  protoOf(ComposerImpl).n1a = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!this.v10_1.k()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent$composable.<anonymous>' call
      var message = 'Expected applyChanges() to have been called';
      composeRuntimeError(toString(message));
    }
    doCompose$composable(this, invalidationsRequested, content);
  };
  function MovableContentState(slotTable) {
    this.z16_1 = slotTable;
    this.a17_1 = 8;
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = multiMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var inductionVariable = 0;
      var last = this$0.s14_1.f();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.s14_1.l(index);
          put(tmp0_also, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      tmp$ret$0 = tmp0_also;
      return tmp$ret$0;
    };
  }
  function Pending(keyInfos, startIndex) {
    this.s14_1 = keyInfos;
    this.t14_1 = startIndex;
    this.u14_1 = 0;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.t14_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      var message = 'Invalid start index';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.v14_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = this.s14_1.f();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.s14_1.l(index);
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = keyInfo.i15_1;
        var tmp1_set = new GroupInfo(index, runningNodeIndex, keyInfo.j15_1);
        result.g3(tmp0_set, tmp1_set);
        runningNodeIndex = runningNodeIndex + keyInfo.j15_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.w14_1 = result;
    var tmp_1 = this;
    tmp_1.x14_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).o1a = function () {
    // Inline function 'kotlin.getValue' call
    keyMap$factory();
    return this.x14_1.w1();
  };
  protoOf(Pending).d15 = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return pop(this.o1a(), joinedKey);
  };
  protoOf(Pending).z14 = function (keyInfo) {
    return this.v14_1.a(keyInfo);
  };
  protoOf(Pending).r15 = function () {
    return this.v14_1;
  };
  protoOf(Pending).n15 = function (from, to) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.w14_1.n2().c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position = element.p1a_1;
        if (position === from)
          element.p1a_1 = to;
        else if (to <= position ? position < from : false)
          element.p1a_1 = position + 1 | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.w14_1.n2().c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position_0 = element_0.p1a_1;
        if (position_0 === from)
          element_0.p1a_1 = to;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.p1a_1 = position_0 - 1 | 0;
      }
    }
  };
  protoOf(Pending).v15 = function (from, to, count) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = this.w14_1.n2().c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position = element.q1a_1;
        if (from <= position ? position < (from + count | 0) : false)
          element.q1a_1 = to + (position - from | 0) | 0;
        else if (to <= position ? position < from : false)
          element.q1a_1 = position + count | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = this.w14_1.n2().c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position_0 = element_0.q1a_1;
        if (from <= position_0 ? position_0 < (from + count | 0) : false)
          element_0.q1a_1 = to + (position_0 - from | 0) | 0;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.q1a_1 = position_0 - count | 0;
      }
    }
  };
  protoOf(Pending).y14 = function (keyInfo, insertIndex) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.w14_1;
    var tmp1_set = keyInfo.i15_1;
    var tmp2_set = new GroupInfo(-1, insertIndex, 0);
    tmp0_set.g3(tmp1_set, tmp2_set);
  };
  protoOf(Pending).s15 = function (group, newCount) {
    var groupInfo = this.w14_1.l2(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.q1a_1;
      var difference = newCount - groupInfo.r1a_1 | 0;
      groupInfo.r1a_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = this.w14_1.n2().c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
          if (element.q1a_1 >= index ? !equals(element, groupInfo) : false) {
            var newIndex = element.q1a_1 + difference | 0;
            if (newIndex >= 0)
              element.q1a_1 = newIndex;
          }
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).m15 = function (keyInfo) {
    var tmp0_safe_receiver = this.w14_1.l2(keyInfo.i15_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p1a_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).l15 = function (keyInfo) {
    var tmp0_safe_receiver = this.w14_1.l2(keyInfo.i15_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q1a_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).u15 = function (keyInfo) {
    var tmp0_safe_receiver = this.w14_1.l2(keyInfo.i15_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r1a_1;
    return tmp1_elvis_lhs == null ? keyInfo.j15_1 : tmp1_elvis_lhs;
  };
  function Invalidation(scope, location, instances) {
    this.d16_1 = scope;
    this.e16_1 = location;
    this.f16_1 = instances;
  }
  protoOf(Invalidation).j16 = function () {
    return this.d16_1.s1a(this.f16_1);
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.b14_1 = _GroupKind___init__impl__iwqg06(0);
    this.c14_1 = _GroupKind___init__impl__iwqg06(1);
    this.d14_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.f()) {
      var validation = _this__u8e3s4.l(index);
      if (validation.e16_1 < end) {
        _this__u8e3s4.h3(index);
      } else
        break $l$loop;
    }
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.f()) {
      var firstInvalidation = _this__u8e3s4.l(index);
      if (firstInvalidation.e16_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.h3(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common ? true : b === common)
      return common;
    if (_this__u8e3s4.i14(a) === b)
      return b;
    if (_this__u8e3s4.i14(b) === a)
      return a;
    if (_this__u8e3s4.i14(a) === _this__u8e3s4.i14(b))
      return _this__u8e3s4.i14(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = aDistance - bDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.i14(currentA);
      }
       while (inductionVariable < tmp0_repeat);
    // Inline function 'kotlin.repeat' call
    var tmp1_repeat = bDistance - aDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < tmp1_repeat)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.i14(currentB);
      }
       while (inductionVariable_0 < tmp1_repeat);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.i14(currentA);
      currentB = _this__u8e3s4.i14(currentB);
    }
    return currentA;
  }
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      var tmp_0;
      if (instance == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
        // Inline function 'kotlin.also' call
        var tmp0_also = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>.<anonymous>' call
        tmp0_also.f18(instance);
        tmp_0 = tmp0_also;
      }
      _this__u8e3s4.s7(tmp, new Invalidation(scope, location, tmp_0));
    } else {
      if (instance == null) {
        _this__u8e3s4.l(index).f16_1 = null;
      } else {
        var tmp1_safe_receiver = _this__u8e3s4.l(index).f16_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.f18(instance);
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    var tmp0_let = _this__u8e3s4.b13();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var tmp;
    try {
      var index = _this__u8e3s4.x16(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(tmp0_let, result, index);
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.y13();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.f()) {
      var invalidation = _this__u8e3s4.l(index);
      if (invalidation.e16_1 < end) {
        result.a(invalidation);
      } else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.p1a_1 = slotIndex;
    this.q1a_1 = nodeIndex;
    this.r1a_1 = nodeCount;
  }
  function put(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.l2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.put.<anonymous>' call
      var answer = LinkedHashSet_init_$Create$();
      _this__u8e3s4.g3(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.a(value);
  }
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.h15_1 == null) ? new JoinedKey(_this__u8e3s4.g15_1, _this__u8e3s4.h15_1) : _this__u8e3s4.g15_1;
  }
  function multiMap() {
    _init_properties_Composer_kt__bmp4g0();
    return HashMap_init_$Create$();
  }
  function pop(_this__u8e3s4, key) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.l2(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.pop.<anonymous>' call
      remove(_this__u8e3s4, key, tmp1_safe_receiver);
      tmp = tmp1_safe_receiver;
    }
    return tmp;
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    var tmp0_let = findLocation(_this__u8e3s4, location);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    return tmp0_let < 0 ? -(tmp0_let + 1 | 0) | 0 : tmp0_let;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.f() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.l(mid);
      var cmp = compareTo(midVal.e16_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 ? !(current === root) : false) {
      current = _this__u8e3s4.i14(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function remove(_this__u8e3s4, key, value) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = _this__u8e3s4.l2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.c7(value);
      var tmp_0;
      if (tmp0_safe_receiver.k()) {
        _this__u8e3s4.j8(key);
        tmp_0 = Unit_getInstance();
      }
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    // Inline function 'kotlin.with' call
    var tmp0_with = _Updater___get_composer__impl__9ty7av($this);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (tmp0_with.uy() ? true : !equals(tmp0_with.nz(), value)) {
      tmp0_with.oz(value);
      _Updater___get_composer__impl__9ty7av($this).mz(value, block);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function SkippableUpdater__toString_impl_9wisn1($this) {
    return 'SkippableUpdater(composer=' + $this + ')';
  }
  function SkippableUpdater__hashCode_impl_vnopfw($this) {
    return hashCode($this);
  }
  function SkippableUpdater__equals_impl_vm8qds($this, other) {
    if (!(other instanceof SkippableUpdater))
      return false;
    var tmp0_other_with_cast = other instanceof SkippableUpdater ? other.t1a_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SkippableUpdater(composer) {
    this.t1a_1 = composer;
  }
  protoOf(SkippableUpdater).toString = function () {
    return SkippableUpdater__toString_impl_9wisn1(this.t1a_1);
  };
  protoOf(SkippableUpdater).hashCode = function () {
    return SkippableUpdater__hashCode_impl_vnopfw(this.t1a_1);
  };
  protoOf(SkippableUpdater).equals = function (other) {
    return SkippableUpdater__equals_impl_vm8qds(this.t1a_1, other);
  };
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.l16(group)) {
      result.a($reader.f17(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.t15(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.t15(current) | 0;
      }
    }
  }
  function removeCurrentGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    removeCurrentGroup(slots, rememberManager);
    return Unit_getInstance();
  }
  function skipToGroupEndInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.hz();
    return Unit_getInstance();
  }
  function endGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.a16();
    return Unit_getInstance();
  }
  function startRootGroup$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.u1a(0);
    return Unit_getInstance();
  }
  function resetSlotsInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    _init_properties_Composer_kt__bmp4g0();
    slots.v1a();
    return Unit_getInstance();
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return receiver.o1a();
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (!properties_initialized_Composer_kt_89qzc2) {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      removeCurrentGroupInstance = removeCurrentGroupInstance$lambda;
      skipToGroupEndInstance = skipToGroupEndInstance$lambda;
      endGroupInstance = endGroupInstance$lambda;
      startRootGroup = startRootGroup$lambda;
      resetSlotsInstance = resetSlotsInstance$lambda;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.m1b_1.u19();
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.y1a_1.t1b(get_PendingApplyNoModifications());
    if (toRecord != null) {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
          addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked_0($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.y1a_1);
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.y1a_1.t1b(null);
    if (!equals(toRecord, get_PendingApplyNoModifications())) {
      if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
        addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked_0($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.y1a_1);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked(_this__u8e3s4, $this, value, forgetConditionalScopes) {
    var set = _this__u8e3s4;
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var tmp0_forEachScopeOf = $this.c1b_1;
    var index = find_2(tmp0_forEachScopeOf, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(tmp0_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_fastForEach.d17_1;
      var inductionVariable = 0;
      var last = tmp0_fastForEach.c17_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values[i];
          var tmp1_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          if (!$this.h1b_1.a1c(value, tmp1_anonymous) ? !tmp1_anonymous.v1b(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
            if (tmp1_anonymous.u1b() ? !forgetConditionalScopes : false) {
              $this.d1b_1.a(tmp1_anonymous);
            } else {
              if (set == null)
                set = HashSet_init_$Create$();
              var tmp0_safe_receiver = set;
              if (tmp0_safe_receiver == null)
                null;
              else
                tmp0_safe_receiver.a(tmp1_anonymous);
            }
          }
        }
         while (inductionVariable < last);
    }
    return set;
  }
  function addPendingInvalidationsLocked_0($this, values, forgetConditionalScopes) {
    var invalidated = null;
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    if (values instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = values.d17_1;
      var inductionVariable = 0;
      var last = values.c17_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
          var tmp = values_0[i];
          var tmp0_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          if (tmp0_anonymous instanceof RecomposeScopeImpl) {
            tmp0_anonymous.v1b(null);
          } else {
            invalidated = addPendingInvalidationsLocked(invalidated, $this, tmp0_anonymous, forgetConditionalScopes);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
            var tmp0_forEachScopeOf = $this.e1b_1;
            var index = find_2(tmp0_forEachScopeOf, tmp0_anonymous);
            if (index >= 0) {
              // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
              var tmp0_fastForEach = scopeSetAt(tmp0_forEachScopeOf, index);
              // Inline function 'kotlin.contracts.contract' call
              var values_1 = tmp0_fastForEach.d17_1;
              var inductionVariable_0 = 0;
              var last_0 = tmp0_fastForEach.c17_1;
              if (inductionVariable_0 < last_0)
                do {
                  var i_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                  var tmp_0 = values_1[i_0];
                  var tmp1_anonymous = isObject(tmp_0) ? tmp_0 : THROW_CCE();
                  invalidated = addPendingInvalidationsLocked(invalidated, $this, tmp1_anonymous, forgetConditionalScopes);
                }
                 while (inductionVariable_0 < last_0);
            }
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = values.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        if (element instanceof RecomposeScopeImpl) {
          element.v1b(null);
        } else {
          invalidated = addPendingInvalidationsLocked(invalidated, $this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
          var tmp0_forEachScopeOf_0 = $this.e1b_1;
          var index_0 = find_2(tmp0_forEachScopeOf_0, element);
          if (index_0 >= 0) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            var tmp0_fastForEach_0 = scopeSetAt(tmp0_forEachScopeOf_0, index_0);
            // Inline function 'kotlin.contracts.contract' call
            var values_2 = tmp0_fastForEach_0.d17_1;
            var inductionVariable_1 = 0;
            var last_1 = tmp0_fastForEach_0.c17_1;
            if (inductionVariable_1 < last_1)
              do {
                var i_1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                var tmp_1 = values_2[i_1];
                var tmp1_anonymous_0 = isObject(tmp_1) ? tmp_1 : THROW_CCE();
                invalidated = addPendingInvalidationsLocked(invalidated, $this, tmp1_anonymous_0, forgetConditionalScopes);
              }
               while (inductionVariable_1 < last_1);
          }
        }
      }
    }
    var tmp_2;
    if (forgetConditionalScopes) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_2 = !$this.d1b_1.k();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
      var tmp2_removeValueIf = $this.c1b_1;
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
      var valueOrder = tmp2_removeValueIf.w1b_1;
      var scopeSets = tmp2_removeValueIf.y1b_1;
      var values_3 = tmp2_removeValueIf.x1b_1;
      var destinationIndex = 0;
      var inductionVariable_2 = 0;
      var last_2 = tmp2_removeValueIf.z1b_1;
      if (inductionVariable_2 < last_2)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var valueIndex = valueOrder[i_2];
          var set = ensureNotNull(scopeSets[valueIndex]);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
          var values_4 = set.d17_1;
          var size = set.c17_1;
          var destinationIndex_0 = 0;
          var inductionVariable_3 = 0;
          if (inductionVariable_3 < size)
            do {
              var i_3 = inductionVariable_3;
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              var tmp_3 = values_4[i_3];
              var item = isObject(tmp_3) ? tmp_3 : THROW_CCE();
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
              var tmp_4;
              if ($this.d1b_1.m(item)) {
                tmp_4 = true;
              } else {
                var tmp0_safe_receiver = invalidated;
                var tmp_5;
                if (tmp0_safe_receiver == null) {
                  tmp_5 = null;
                } else {
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                  tmp_5 = tmp0_safe_receiver.m(item);
                }
                tmp_4 = tmp_5 === true;
              }
              if (!tmp_4) {
                if (!(destinationIndex_0 === i_3)) {
                  values_4[destinationIndex_0] = item;
                }
                destinationIndex_0 = destinationIndex_0 + 1 | 0;
              }
            }
             while (inductionVariable_3 < size);
          var inductionVariable_4 = destinationIndex_0;
          if (inductionVariable_4 < size)
            do {
              var i_4 = inductionVariable_4;
              inductionVariable_4 = inductionVariable_4 + 1 | 0;
              values_4[i_4] = null;
            }
             while (inductionVariable_4 < size);
          set.c17_1 = destinationIndex_0;
          if (set.c17_1 > 0) {
            if (!(destinationIndex === i_2)) {
              var destinationKeyOrder = valueOrder[destinationIndex];
              valueOrder[destinationIndex] = valueIndex;
              valueOrder[i_2] = destinationKeyOrder;
            }
            destinationIndex = destinationIndex + 1 | 0;
          }
        }
         while (inductionVariable_2 < last_2);
      var inductionVariable_5 = destinationIndex;
      var last_3 = tmp2_removeValueIf.z1b_1;
      if (inductionVariable_5 < last_3)
        do {
          var i_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          values_3[valueOrder[i_5]] = null;
        }
         while (inductionVariable_5 < last_3);
      tmp2_removeValueIf.z1b_1 = destinationIndex;
      $this.d1b_1.f7();
      cleanUpDerivedStateObservations($this);
    } else {
      var tmp0_safe_receiver_0 = invalidated;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
        var tmp0_removeValueIf = $this.c1b_1;
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
        var valueOrder_0 = tmp0_removeValueIf.w1b_1;
        var scopeSets_0 = tmp0_removeValueIf.y1b_1;
        var values_5 = tmp0_removeValueIf.x1b_1;
        var destinationIndex_1 = 0;
        var inductionVariable_6 = 0;
        var last_4 = tmp0_removeValueIf.z1b_1;
        if (inductionVariable_6 < last_4)
          do {
            var i_6 = inductionVariable_6;
            inductionVariable_6 = inductionVariable_6 + 1 | 0;
            var valueIndex_0 = valueOrder_0[i_6];
            var set_0 = ensureNotNull(scopeSets_0[valueIndex_0]);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
            var values_6 = set_0.d17_1;
            var size_0 = set_0.c17_1;
            var destinationIndex_2 = 0;
            var inductionVariable_7 = 0;
            if (inductionVariable_7 < size_0)
              do {
                var i_7 = inductionVariable_7;
                inductionVariable_7 = inductionVariable_7 + 1 | 0;
                var tmp_6 = values_6[i_7];
                var item_0 = isObject(tmp_6) ? tmp_6 : THROW_CCE();
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                if (!tmp0_safe_receiver_0.m(item_0)) {
                  if (!(destinationIndex_2 === i_7)) {
                    values_6[destinationIndex_2] = item_0;
                  }
                  destinationIndex_2 = destinationIndex_2 + 1 | 0;
                }
              }
               while (inductionVariable_7 < size_0);
            var inductionVariable_8 = destinationIndex_2;
            if (inductionVariable_8 < size_0)
              do {
                var i_8 = inductionVariable_8;
                inductionVariable_8 = inductionVariable_8 + 1 | 0;
                values_6[i_8] = null;
              }
               while (inductionVariable_8 < size_0);
            set_0.c17_1 = destinationIndex_2;
            if (set_0.c17_1 > 0) {
              if (!(destinationIndex_1 === i_6)) {
                var destinationKeyOrder_0 = valueOrder_0[destinationIndex_1];
                valueOrder_0[destinationIndex_1] = valueIndex_0;
                valueOrder_0[i_6] = destinationKeyOrder_0;
              }
              destinationIndex_1 = destinationIndex_1 + 1 | 0;
            }
          }
           while (inductionVariable_6 < last_4);
        var inductionVariable_9 = destinationIndex_1;
        var last_5 = tmp0_removeValueIf.z1b_1;
        if (inductionVariable_9 < last_5)
          do {
            var i_9 = inductionVariable_9;
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            values_5[valueOrder_0[i_9]] = null;
          }
           while (inductionVariable_9 < last_5);
        tmp0_removeValueIf.z1b_1 = destinationIndex_1;
        cleanUpDerivedStateObservations($this);
      }
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
    var tmp0_removeValueIf = $this.e1b_1;
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var valueOrder = tmp0_removeValueIf.w1b_1;
    var scopeSets = tmp0_removeValueIf.y1b_1;
    var values = tmp0_removeValueIf.x1b_1;
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = tmp0_removeValueIf.z1b_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = valueOrder[i];
        var set = ensureNotNull(scopeSets[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
        var values_0 = set.d17_1;
        var size = set.c17_1;
        var destinationIndex_0 = 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < size)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = values_0[i_0];
            var item = isObject(tmp) ? tmp : THROW_CCE();
            // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
            if (!!$this.c1b_1.b1c(item)) {
              if (!(destinationIndex_0 === i_0)) {
                values_0[destinationIndex_0] = item;
              }
              destinationIndex_0 = destinationIndex_0 + 1 | 0;
            }
          }
           while (inductionVariable_0 < size);
        var inductionVariable_1 = destinationIndex_0;
        if (inductionVariable_1 < size)
          do {
            var i_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            values_0[i_1] = null;
          }
           while (inductionVariable_1 < size);
        set.c17_1 = destinationIndex_0;
        if (set.c17_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = valueOrder[destinationIndex];
            valueOrder[destinationIndex] = valueIndex;
            valueOrder[i] = destinationKeyOrder;
          }
          destinationIndex = destinationIndex + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_2 = destinationIndex;
    var last_0 = tmp0_removeValueIf.z1b_1;
    if (inductionVariable_2 < last_0)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        values[valueOrder[i_2]] = null;
      }
       while (inductionVariable_2 < last_0);
    tmp0_removeValueIf.z1b_1 = destinationIndex;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.d1b_1.k()) {
      // Inline function 'androidx.compose.runtime.removeValueIf' call
      var iter = $this.d1b_1.c();
      while (iter.d()) {
        // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
        if (!iter.e().u1b()) {
          iter.e7();
        }
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var tmp0_forEachScopeOf = $this.c1b_1;
    var index = find_2(tmp0_forEachScopeOf, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(tmp0_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_fastForEach.d17_1;
      var inductionVariable = 0;
      var last = tmp0_fastForEach.c17_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
          var tmp = values[i];
          var tmp1_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          if (tmp1_anonymous.v1b(value).equals(InvalidationResult_IMMINENT_getInstance())) {
            $this.h1b_1.c1c(value, tmp1_anonymous);
          }
        }
         while (inductionVariable < last);
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.a1b_1);
    try {
      if (changes.k())
        return Unit_getInstance();
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().p17('Compose:applyChanges');
        try {
          $this.x1a_1.ew();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          var tmp0_let = $this.b1b_1.k14();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var tmp;
          try {
            var applier = $this.x1a_1;
            // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable = 0;
            var last = changes.f() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = changes.l(index);
                // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>.<anonymous>' call
                item(applier, tmp0_let, manager);
              }
               while (inductionVariable <= last);
            changes.f7();
            tmp = Unit_getInstance();
          }finally {
            tmp0_let.y13();
          }
          $this.x1a_1.fw();
          break $l$block;
        }finally {
          Trace_getInstance().h18(token);
        }
      }
      manager.j1c();
      manager.k1c();
      if ($this.j1b_1) {
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token_0 = Trace_getInstance().p17('Compose:unobserve');
          try {
            $this.j1b_1 = false;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
            var tmp0_removeValueIf = $this.c1b_1;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
            var valueOrder = tmp0_removeValueIf.w1b_1;
            var scopeSets = tmp0_removeValueIf.y1b_1;
            var values = tmp0_removeValueIf.x1b_1;
            var destinationIndex = 0;
            var inductionVariable_0 = 0;
            var last_0 = tmp0_removeValueIf.z1b_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var valueIndex = valueOrder[i];
                var set = ensureNotNull(scopeSets[valueIndex]);
                // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
                // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
                var values_0 = set.d17_1;
                var size = set.c17_1;
                var destinationIndex_0 = 0;
                var inductionVariable_1 = 0;
                if (inductionVariable_1 < size)
                  do {
                    var i_0 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var tmp_0 = values_0[i_0];
                    var item_0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
                    // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                    if (!!item_0.l1c()) {
                      if (!(destinationIndex_0 === i_0)) {
                        values_0[destinationIndex_0] = item_0;
                      }
                      destinationIndex_0 = destinationIndex_0 + 1 | 0;
                    }
                  }
                   while (inductionVariable_1 < size);
                var inductionVariable_2 = destinationIndex_0;
                if (inductionVariable_2 < size)
                  do {
                    var i_1 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    values_0[i_1] = null;
                  }
                   while (inductionVariable_2 < size);
                set.c17_1 = destinationIndex_0;
                if (set.c17_1 > 0) {
                  if (!(destinationIndex === i)) {
                    var destinationKeyOrder = valueOrder[destinationIndex];
                    valueOrder[destinationIndex] = valueIndex;
                    valueOrder[i] = destinationKeyOrder;
                  }
                  destinationIndex = destinationIndex + 1 | 0;
                }
              }
               while (inductionVariable_0 < last_0);
            var inductionVariable_3 = destinationIndex;
            var last_1 = tmp0_removeValueIf.z1b_1;
            if (inductionVariable_3 < last_1)
              do {
                var i_2 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                values[valueOrder[i_2]] = null;
              }
               while (inductionVariable_3 < last_1);
            tmp0_removeValueIf.z1b_1 = destinationIndex;
            cleanUpDerivedStateObservations($this);
            break $l$block_0;
          }finally {
            Trace_getInstance().h18(token_0);
          }
        }
      }
    }finally {
      if ($this.g1b_1.k()) {
        manager.m1c();
      }
    }
  }
  function abandonChanges($this) {
    $this.y1a_1.n1c(null);
    $this.f1b_1.f7();
    $this.g1b_1.f7();
    $this.a1b_1.f7();
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.o1c() ? $this.m1b_1.b17(scope, instance) : false;
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.z1a_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.k1b_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.b1b_1.p1c($this.l1b_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var delegate = tmp;
    if (delegate == null) {
      if (tryImminentInvalidation($this, scope, instance)) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      if (instance == null) {
        $this.i1b_1.q1c(scope, null);
      } else {
        addValue($this.i1b_1, scope, instance);
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.w1a_1.r1c($this);
    return $this.o1c() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.i1b_1;
    $this.i1b_1 = new IdentityArrayMap();
    return invalidations;
  }
  function RememberEventDispatcher(abandoning) {
    this.d1c_1 = abandoning;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.e1c_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.f1c_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.g1c_1 = ArrayList_init_$Create$();
    this.h1c_1 = null;
    this.i1c_1 = null;
  }
  protoOf(RememberEventDispatcher).d19 = function (instance) {
    // Inline function 'kotlin.let' call
    var tmp0_let = this.f1c_1.u7(instance);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.remembering.<anonymous>' call
    var tmp;
    if (tmp0_let >= 0) {
      this.f1c_1.h3(tmp0_let);
      tmp = this.d1c_1.c7(instance);
    } else {
      tmp = this.e1c_1.a(instance);
    }
  };
  protoOf(RememberEventDispatcher).jy = function (instance) {
    // Inline function 'kotlin.let' call
    var tmp0_let = this.e1c_1.u7(instance);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.forgetting.<anonymous>' call
    var tmp;
    if (tmp0_let >= 0) {
      this.e1c_1.h3(tmp0_let);
      tmp = this.d1c_1.c7(instance);
    } else {
      tmp = this.f1c_1.a(instance);
    }
  };
  protoOf(RememberEventDispatcher).f19 = function (effect) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.g1c_1.a(effect);
  };
  protoOf(RememberEventDispatcher).iy = function (instance) {
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_elvis_lhs = this.i1c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var tmp0_also = ArrayList_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.i1c_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.a(instance);
  };
  protoOf(RememberEventDispatcher).j1c = function () {
    var deactivating = this.h1c_1;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(deactivating == null ? true : deactivating.k())) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().p17('Compose:deactivations');
        try {
          var inductionVariable = deactivating.f() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = deactivating.l(i);
              instance.kx();
            }
             while (0 <= inductionVariable);
            tmp = Unit_getInstance();
          }
          break $l$block;
        }finally {
          Trace_getInstance().h18(token);
        }
      }
      deactivating.f7();
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.f1c_1.k()) {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().p17('Compose:onForgotten');
        try {
          var inductionVariable_0 = this.f1c_1.f() - 1 | 0;
          var tmp_0;
          if (0 <= inductionVariable_0) {
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var instance_0 = this.f1c_1.l(i_0);
              if (!this.d1c_1.m(instance_0)) {
                instance_0.s1c();
              }
            }
             while (0 <= inductionVariable_0);
            tmp_0 = Unit_getInstance();
          }
          break $l$block_0;
        }finally {
          Trace_getInstance().h18(token_0);
        }
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.e1c_1.k()) {
      $l$block_1: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_1 = Trace_getInstance().p17('Compose:onRemembered');
        try {
          var tmp0_fastForEach = this.e1c_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_1 = 0;
          var last = tmp0_fastForEach.f() - 1 | 0;
          var tmp_1;
          if (inductionVariable_1 <= last) {
            do {
              var index = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              var item = tmp0_fastForEach.l(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.d1c_1.c7(item);
              item.t1c();
            }
             while (inductionVariable_1 <= last);
            tmp_1 = Unit_getInstance();
          }
          break $l$block_1;
        }finally {
          Trace_getInstance().h18(token_1);
        }
      }
    }
    var releasing = this.i1c_1;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(releasing == null ? true : releasing.k())) {
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_2 = Trace_getInstance().p17('Compose:releases');
        try {
          var inductionVariable_2 = releasing.f() - 1 | 0;
          var tmp_2;
          if (0 <= inductionVariable_2) {
            do {
              var i_1 = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + -1 | 0;
              var instance_1 = releasing.l(i_1);
              instance_1.lx();
            }
             while (0 <= inductionVariable_2);
            tmp_2 = Unit_getInstance();
          }
          break $l$block_2;
        }finally {
          Trace_getInstance().h18(token_2);
        }
      }
      releasing.f7();
    }
  };
  protoOf(RememberEventDispatcher).k1c = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.g1c_1.k()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().p17('Compose:sideeffects');
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var tmp0_fastForEach = this.g1c_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.f() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0_fastForEach.l(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.g1c_1.f7();
          break $l$block;
        }finally {
          Trace_getInstance().h18(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).m1c = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.d1c_1.k()) {
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().p17('Compose:abandons');
        try {
          var iterator = this.d1c_1.c();
          while (iterator.d()) {
            var instance = iterator.e();
            iterator.e7();
            instance.u1c();
          }
          break $l$block;
        }finally {
          Trace_getInstance().h18(token);
        }
      }
    }
  };
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.w1a_1 = parent;
    this.x1a_1 = applier;
    this.y1a_1 = new AtomicReference(null);
    this.z1a_1 = createSynchronizedObject();
    this.a1b_1 = HashSet_init_$Create$();
    this.b1b_1 = new SlotTable();
    this.c1b_1 = new IdentityScopeMap();
    this.d1b_1 = HashSet_init_$Create$();
    this.e1b_1 = new IdentityScopeMap();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.f1b_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.g1b_1 = ArrayList_init_$Create$();
    this.h1b_1 = new IdentityScopeMap();
    this.i1b_1 = new IdentityArrayMap();
    this.j1b_1 = false;
    this.k1b_1 = null;
    this.l1b_1 = 0;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var tmp0_also = new ComposerImpl(this.x1a_1, this.w1a_1, this.b1b_1, this.a1b_1, this.f1b_1, this.g1b_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.w1a_1.v1c(tmp0_also);
    tmp_1.m1b_1 = tmp0_also;
    this.n1b_1 = recomposeContext;
    var tmp_2 = this;
    var tmp_3 = this.w1a_1;
    tmp_2.o1b_1 = tmp_3 instanceof Recomposer;
    this.p1b_1 = false;
    this.q1b_1 = ComposableSingletons$CompositionKt_getInstance().w1c_1;
  }
  protoOf(CompositionImpl).o1c = function () {
    return this.m1b_1.w11_1;
  };
  protoOf(CompositionImpl).y1c = function () {
    return this.p1b_1;
  };
  protoOf(CompositionImpl).dj = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.z1a_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    if (!this.p1b_1) {
      this.p1b_1 = true;
      this.z1c(ComposableSingletons$CompositionKt_getInstance().x1c_1);
      var deferredChanges = this.m1b_1.d12_1;
      if (!(deferredChanges == null)) {
        applyChangesInLocked(this, deferredChanges);
      }
      var nonEmptySlotTable = this.b1b_1.u12_1 > 0;
      var tmp_0;
      if (nonEmptySlotTable) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_0 = !this.a1b_1.k();
      }
      if (tmp_0) {
        var manager = new RememberEventDispatcher(this.a1b_1);
        if (nonEmptySlotTable) {
          this.x1a_1.ew();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          var tmp0_let = this.b1b_1.k14();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var tmp_1;
          try {
            removeCurrentGroup(tmp0_let, manager);
            tmp_1 = Unit_getInstance();
          }finally {
            tmp0_let.y13();
          }
          this.x1a_1.f7();
          this.x1a_1.fw();
          manager.j1c();
        }
        manager.m1c();
      }
      this.m1b_1.dj();
      tmp = Unit_getInstance();
    }
    this.w1a_1.a1d(this);
  };
  protoOf(CompositionImpl).b1d = function (values) {
    $l$loop: while (true) {
      var old = this.y1a_1.yk();
      var tmp;
      if (old == null ? true : equals(old, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(old == null) ? isInterface(old, Set) : false) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = [old, values];
        } else {
          if (!(old == null) ? isArray(old) : false) {
            tmp = plus_1((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var tmp1_error = 'corrupt pendingModifications: ' + this.y1a_1;
            throw IllegalStateException_init_$Create$(toString(tmp1_error));
          }
        }
      }
      var new_0 = tmp;
      if (this.y1a_1.c1d(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.synchronized' call
          this.z1a_1;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).d1d = function (values) {
    var tmp0_iterator = values.c();
    while (tmp0_iterator.d()) {
      var value = tmp0_iterator.e();
      if (this.c1b_1.b1c(value) ? true : this.e1b_1.b1c(value))
        return true;
    }
    return false;
  };
  protoOf(CompositionImpl).k1a = function (block) {
    return this.m1b_1.k1a(block);
  };
  protoOf(CompositionImpl).s19 = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.m1b_1.w19();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.m1a(true);
        var alreadyRead = tmp0_safe_receiver.e1d(value);
        var tmp;
        if (!alreadyRead) {
          this.c1b_1.c1c(value, tmp0_safe_receiver);
          var tmp_0;
          if (isInterface(value, DerivedState)) {
            this.e1b_1.f1d(value);
            var indexedObject = value.g1d().h1d();
            var inductionVariable = 0;
            var last = indexedObject.length;
            $l$loop: while (inductionVariable < last) {
              var dependency = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              if (dependency == null)
                break $l$loop;
              this.e1b_1.c1c(dependency, value);
            }
            tmp_0 = Unit_getInstance();
          }
          tmp = tmp_0;
        }
      }
    }
  };
  protoOf(CompositionImpl).i1d = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.z1a_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    invalidateScopeOfLocked(this, value);
    var tmp0_forEachScopeOf = this.e1b_1;
    var index = find_2(tmp0_forEachScopeOf, value);
    var tmp;
    if (index >= 0) {
      var tmp0_fastForEach = scopeSetAt(tmp0_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_fastForEach.d17_1;
      var inductionVariable = 0;
      var last = tmp0_fastForEach.c17_1;
      var tmp_0;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
          var tmp_1 = values[i];
          var tmp1_anonymous = isObject(tmp_1) ? tmp_1 : THROW_CCE();
          invalidateScopeOfLocked(this, tmp1_anonymous);
        }
         while (inductionVariable < last);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CompositionImpl).j1d = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.z1a_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.also' call
          var tmp0_also = this.m1b_1.l1a(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!tmp0_also) {
            drainPendingModificationsLocked(this);
          }
          tmp_1 = tmp0_also;
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.i1b_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_3;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !this.a1b_1.k();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.a1b_1)).m1c();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).k1d = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.l(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          if (!equals(item.c3_1.k10_1, this)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.m1b_1.i1a(references);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_getInstance();
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.a1b_1.k();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.a1b_1)).m1c();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).l1d = function (state) {
    var manager = new RememberEventDispatcher(this.a1b_1);
    var slotTable = state.z16_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    var tmp0_let = slotTable.k14();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      removeCurrentGroup(tmp0_let, manager);
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.y13();
    }
    manager.j1c();
  };
  protoOf(CompositionImpl).m1d = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.z1a_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.f1b_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = Unit_getInstance();
      }finally {
        var tmp_1;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_1 = !this.a1b_1.k();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.a1b_1)).m1c();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).n1d = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.z1a_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        var tmp_1;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.g1b_1.k()) {
          applyChangesInLocked(this, this.g1b_1);
          tmp_1 = Unit_getInstance();
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_2;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !this.a1b_1.k();
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          (new RememberEventDispatcher(this.a1b_1)).m1c();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).y19 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.z1a_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        this.m1b_1.y19();
        var tmp_1;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.a1b_1.k()) {
          (new RememberEventDispatcher(this.a1b_1)).m1c();
          tmp_1 = Unit_getInstance();
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_2;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !this.a1b_1.k();
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          (new RememberEventDispatcher(this.a1b_1)).m1c();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Exception) {
        var e = $p;
        abandonChanges(this);
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).o1d = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.z1a_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var indexedObject = this.b1b_1.v12_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.p1d();
      }
    }
  };
  protoOf(CompositionImpl).e17 = function (to, groupIndex, block) {
    var tmp;
    if ((!(to == null) ? !equals(to, this) : false) ? groupIndex >= 0 : false) {
      var tmp_0 = this;
      tmp_0.k1b_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.l1b_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.k1b_1 = null;
        this.l1b_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).q19 = function (scope, instance) {
    if (scope.q1d()) {
      scope.g1a(true);
    }
    var anchor = scope.my_1;
    if (anchor == null ? true : !anchor.l1c())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.b1b_1.r1d(anchor)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.z1a_1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidate.<anonymous>' call
      var delegate = this.k1b_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.s1d())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).r19 = function (scope) {
    this.j1b_1 = true;
  };
  protoOf(CompositionImpl).t1d = function (instance, scope) {
    this.c1b_1.a1c(instance, scope);
  };
  protoOf(CompositionImpl).u1d = function (state) {
    if (!this.c1b_1.b1c(state)) {
      this.e1b_1.f1d(state);
    }
  };
  protoOf(CompositionImpl).z1c = function (set__$_ezb9bk) {
    this.q1b_1 = set__$_ezb9bk;
  };
  protoOf(CompositionImpl).v1d = function (content) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.p1b_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.setContent$composable.<anonymous>' call
      var message = 'The composition is disposed';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.z1c(content);
    this.w1a_1.w1d(this, this.q1b_1);
  };
  protoOf(CompositionImpl).x1d = function (content) {
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        this.z1a_1;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        drainPendingModificationsForCompositionLocked(this);
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          this.m1b_1.n1a(invalidations, content);
          tmp_1 = Unit_getInstance();
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            this.i1b_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_3;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !this.a1b_1.k();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.a1b_1)).m1c();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        var e_0 = $p;
        abandonChanges(this);
        throw e_0;
      } else {
        throw $p;
      }
    }
  };
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.i19(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.vy()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:506)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.hz();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.i19(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.vy()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:597)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.hz();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.w1c_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.x1c_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function addValue(_this__u8e3s4, key, value) {
    _init_properties_Composition_kt__t5pjw8();
    if (_this__u8e3s4.z1d(key)) {
      var tmp0_safe_receiver = _this__u8e3s4.y1d(key);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.f18(value);
    } else {
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.addValue.<anonymous>' call
      tmp0_also.f18(value);
      _this__u8e3s4.q1c(key, tmp0_also);
    }
  }
  function Composition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (!properties_initialized_Composition_kt_u7hvq2) {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
    }
  }
  function get_EmptyPersistentCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyPersistentCompositionLocalMap;
  }
  var EmptyPersistentCompositionLocalMap;
  function CompositionContext() {
    this.c13_1 = 0;
  }
  protoOf(CompositionContext).j13 = function (table) {
  };
  protoOf(CompositionContext).v1c = function (composer) {
  };
  protoOf(CompositionContext).a1a = function (composer) {
  };
  protoOf(CompositionContext).e13 = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).d13 = function () {
  };
  protoOf(CompositionContext).l13 = function () {
  };
  protoOf(CompositionContext).y16 = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (!properties_initialized_CompositionContext_kt_mk393b) {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyPersistentCompositionLocalMap = persistentCompositionLocalHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.a1e_1 = new LazyValueHolder(defaultFactory);
    this.b1e_1 = 0;
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
    this.f1e_1 = 0;
  }
  protoOf(ProvidableCompositionLocal).g1e = function (value) {
    return new ProvidedValue(this, value, true);
  };
  protoOf(ProvidableCompositionLocal).h1e = function (value) {
    return new ProvidedValue(this, value, false);
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).c1e = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.yy(571516549);
    sourceInformation($composer_0, 'C(provided$composable):CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(571516549, $changed, -1, 'androidx.compose.runtime.StaticProvidableCompositionLocal.provided$composable (CompositionLocal.kt:139)');
    }
    var tmp0 = new StaticValueHolder(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.zy();
    return tmp0;
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider$composable(values, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.cz(-266554972);
    sourceInformation($composer_0, 'C(CompositionLocalProvider$composable)P(1)227@10002L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-266554972, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider$composable (CompositionLocal.kt:225)');
    }
    $composer_0.yz(values);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.zz();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.dz();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.l1e(CompositionLocalProvider$composable$lambda(values, content, $changed));
    }
  }
  function CompositionLocalProvider$composable_0(context, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.cz(-221175223);
    sourceInformation($composer_0, 'C(CompositionLocalProvider$composable)P(1)247@10707L209:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.pz(context) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.tz(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.vy()) {
      if (isTraceInProgress()) {
        traceEventStart(-221175223, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider$composable (CompositionLocal.kt:246)');
      }
      var tmp$ret$4;
      // Inline function 'kotlin.collections.toTypedArray' call
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = context.m1e_1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$_0(tmp0_map.f());
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = tmp0_map.x1().c();
      while (tmp0_iterator.d()) {
        var item = tmp0_iterator.e();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.CompositionLocalProvider$composable.<anonymous>' call
        var tmp = item.u1();
        tmp$ret$1 = (tmp instanceof ProvidableCompositionLocal ? tmp : THROW_CCE()).g1e(item.w1().w1());
        tmp0_mapTo.a(tmp$ret$1);
      }
      tmp$ret$4 = copyToArray(tmp0_mapTo);
      CompositionLocalProvider$composable(tmp$ret$4.slice(), content, $composer_0, 112 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.hz();
    }
    var tmp0_safe_receiver = $composer_0.dz();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.l1e(CompositionLocalProvider$composable$lambda_0(context, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.r1e_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).c1e = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.yy(-1327537144);
    sourceInformation($composer_0, 'C(provided$composable)*125@5325L42:CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1327537144, $changed, -1, 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable (CompositionLocal.kt:125)');
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.yy(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.nz();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance_1().sy_1) {
      // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
      var value_0 = mutableStateOf(value, this.r1e_1);
      $composer_1.oz(value_0);
      tmp = value_0;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.zy();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
    tmp0.bu(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.zy();
    return tmp0;
  };
  function CompositionLocalProvider$composable$lambda($values, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider$composable($values.slice(), $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function CompositionLocalProvider$composable$lambda_0($context, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider$composable_0($context, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PersistentCompositionLocalMap() {
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.s1e_1 = persistentCompositionLocalHashMapOf();
  }
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function read(_this__u8e3s4, key) {
    var tmp;
    if (contains_0(_this__u8e3s4, key)) {
      tmp = getValueOf(_this__u8e3s4, key);
    } else {
      tmp = key.a1e_1.w1();
    }
    return tmp;
  }
  function contains_0(_this__u8e3s4, key) {
    return _this__u8e3s4.f2(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  function getValueOf(_this__u8e3s4, key) {
    var tmp0_safe_receiver = _this__u8e3s4.l2(key instanceof CompositionLocal ? key : THROW_CCE());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w1();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function compositionLocalMapOf$composable(values, parentScope, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.yy(-2040419351);
    sourceInformation($composer_0, 'C(compositionLocalMapOf$composable)P(1):CompositionLocalMap.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-2040419351, $changed, -1, 'androidx.compose.runtime.compositionLocalMapOf$composable (CompositionLocalMap.kt:91)');
    }
    var result = persistentCompositionLocalHashMapOf();
    // Inline function 'androidx.compose.runtime.mutate' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = result.j14();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.compositionLocalMapOf$composable.<anonymous>' call
    var inductionVariable = 0;
    var last = values.length;
    while (inductionVariable < last) {
      var provided = values[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      $composer_0.yy(1391435594);
      sourceInformation($composer_0, '*101@4372L24');
      if (provided.d10_1 ? true : !contains_0(parentScope, provided.b10_1)) {
        // Inline function 'kotlin.collections.set' call
        var tmp = provided.b10_1;
        var tmp0_set = tmp instanceof CompositionLocal ? tmp : THROW_CCE();
        var tmp1_set = provided.b10_1.c1e(provided.c10_1, $composer_0, 0);
        tmp0_apply.g3(tmp0_set, tmp1_set);
      }
      $composer_0.zy();
    }
    var tmp0 = tmp0_apply.ia();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.zy();
    return tmp0;
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  function derivedStateObservers_0() {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = get_derivedStateObservers().yk();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(0), null);
      var tmp0_also = new MutableVector(tmp$ret$0, 0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.derivedStateObservers.<anonymous>' call
      get_derivedStateObservers().x1e(tmp0_also);
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (!properties_initialized_DerivedState_kt_scch8q) {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
    this.y1e_1 = 0;
  }
  function LaunchedEffect$composable(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.yy(1556009691);
    sourceInformation($composer_0, 'C(LaunchedEffect$composable)P(1)337@14241L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1556009691, $changed, -1, 'androidx.compose.runtime.LaunchedEffect$composable (Effects.kt:332)');
    }
    var applyContext = $composer_0.a10();
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.yy(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1.pz(key1);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.nz();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().sy_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect$composable.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_1.oz(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : isObject(tmp_0)) || THROW_CCE();
    $composer_1.zy();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.zy();
  }
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.z1e_1 = task;
    this.a1f_1 = CoroutineScope(parentCoroutineContext);
    this.b1f_1 = null;
  }
  protoOf(LaunchedEffectImpl).t1c = function () {
    var tmp0_safe_receiver = this.b1f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.b1f_1 = launch(this.a1f_1, VOID, VOID, this.z1e_1);
  };
  protoOf(LaunchedEffectImpl).s1c = function () {
    var tmp0_safe_receiver = this.b1f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.jg(new LeftCompositionCancellationException());
    }
    this.b1f_1 = null;
  };
  protoOf(LaunchedEffectImpl).u1c = function () {
    var tmp0_safe_receiver = this.b1f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.jg(new LeftCompositionCancellationException());
    }
    this.b1f_1 = null;
  };
  function LeftCompositionCancellationException() {
    PlatformOptimizedCancellationException.call(this, 'The coroutine scope left the composition');
    captureStack(this, LeftCompositionCancellationException);
  }
  function DisposableEffect$composable(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.yy(927399050);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1)154@6171L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(927399050, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:150)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.yy(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1.pz(key1);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.nz();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().sy_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.oz(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : isObject(tmp_0)) || THROW_CCE();
    $composer_1.zy();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.zy();
  }
  function SideEffect$composable(effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.yy(-706403066);
    sourceInformation($composer_0, 'C(SideEffect$composable):Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-706403066, $changed, -1, 'androidx.compose.runtime.SideEffect$composable (Effects.kt:44)');
    }
    $composer_0.vz(effect);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.zy();
  }
  function DisposableEffectImpl(effect) {
    this.c1f_1 = effect;
    this.d1f_1 = null;
  }
  protoOf(DisposableEffectImpl).t1c = function () {
    this.d1f_1 = this.c1f_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).s1c = function () {
    var tmp0_safe_receiver = this.d1f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dj();
    }
    this.d1f_1 = null;
  };
  protoOf(DisposableEffectImpl).u1c = function () {
  };
  function DisposableEffect$composable_0(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    $composer_0.yy(235732070);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1,2)194@8057L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(235732070, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:189)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.yy(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = !!($composer_1.pz(key1) | $composer_1.pz(key2));
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.nz();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().sy_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.oz(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : isObject(tmp_0)) || THROW_CCE();
    $composer_1.zy();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.zy();
  }
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (!properties_initialized_Effects_kt_cj8kem) {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.w4_1;
    } else {
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.e1f_1 = left;
    this.f1f_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.e1f_1), 31) + hashCodeOf(this, this.f1f_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.e1f_1) + ', right=' + toString_0(this.f1f_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.e1f_1, tmp0_other_with_cast.e1f_1))
      return false;
    if (!equals(this.f1f_1, tmp0_other_with_cast.f1f_1))
      return false;
    return true;
  };
  function Key() {
    Key_instance = this;
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.j4(Key_getInstance_0());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_movableContentKey() {
    return movableContentKey;
  }
  var movableContentKey;
  function OpaqueKey(key) {
    this.g1f_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.g1f_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.g1f_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.g1f_1 === tmp0_other_with_cast.g1f_1))
      return false;
    return true;
  };
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.ky_1 = $this.ky_1 | 32;
    } else {
      $this.ky_1 = $this.ky_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.ky_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.ky_1 = $this.ky_1 | 16;
    } else {
      $this.ky_1 = $this.ky_1 & -17;
    }
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).k17 = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.k()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = anchors.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.l(index);
          // Inline function 'androidx.compose.runtime.Companion.adoptAnchoredScopes.<anonymous>' call
          var tmp = slots.h1f(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.i1f(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_2).l17 = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.k()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.f() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.l(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.Companion.hasAnchoredRecomposeScopes.<anonymous>' call
            var tmp_0;
            if (slots.r1d(item)) {
              var tmp_1 = slots.j1f(slots.x16(item), 0);
              tmp_0 = tmp_1 instanceof RecomposeScopeImpl;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$2 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $tmp0_safe_receiver) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.oy_1 === $token ? equals($tmp0_safe_receiver, this$0.py_1) : false) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.removeValueIf' call
        var keys = $tmp0_safe_receiver.l1f_1;
        var values = $tmp0_safe_receiver.m1f_1;
        var size = $tmp0_safe_receiver.k1f_1;
        var destinationIndex = 0;
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp_1 = keys[i];
            var key = isObject(tmp_1) ? tmp_1 : THROW_CCE();
            var value = values[i];
            var tmp$ret$4;
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
            var tmp$ret$3;
            // Inline function 'kotlin.also' call
            var tmp0_also = !(value === $token);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            if (tmp0_also) {
              composition.t1d(key, this$0);
              var tmp0_safe_receiver = isInterface(key, DerivedState) ? key : null;
              if (tmp0_safe_receiver == null)
                null;
              else {
                var tmp$ret$2;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$1;
                // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                composition.u1d(tmp0_safe_receiver);
                var tmp0_safe_receiver_0 = this$0.qy_1;
                var tmp_2;
                if (tmp0_safe_receiver_0 == null) {
                  tmp_2 = null;
                } else {
                  var tmp$ret$0;
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  tmp0_safe_receiver_0.n1f(tmp0_safe_receiver);
                  var tmp_3;
                  if (tmp0_safe_receiver_0.y17_1 === 0) {
                    this$0.qy_1 = null;
                    tmp_3 = Unit_getInstance();
                  }
                  tmp$ret$0 = tmp_3;
                  tmp_2 = Unit_getInstance();
                }
                tmp$ret$1 = tmp_2;
                tmp$ret$2 = tmp$ret$1;
              }
            }
            tmp$ret$3 = tmp0_also;
            tmp$ret$4 = tmp$ret$3;
            if (!tmp$ret$4) {
              if (!(destinationIndex === i)) {
                keys[destinationIndex] = key;
                values[destinationIndex] = value;
              }
              var tmp1 = destinationIndex;
              destinationIndex = tmp1 + 1 | 0;
            }
          }
           while (inductionVariable < size);
        var inductionVariable_0 = destinationIndex;
        if (inductionVariable_0 < size)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            keys[i_0] = null;
          }
           while (inductionVariable_0 < size);
        $tmp0_safe_receiver.k1f_1 = destinationIndex;
        var tmp_4;
        if ($tmp0_safe_receiver.k1f_1 === 0) {
          this$0.py_1 = null;
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      }
      return Unit_getInstance();
    };
  }
  function RecomposeScopeImpl(owner) {
    Companion_getInstance_4();
    this.ky_1 = 0;
    this.ly_1 = owner;
    this.my_1 = null;
    this.ny_1 = null;
    this.oy_1 = 0;
    this.py_1 = null;
    this.qy_1 = null;
  }
  protoOf(RecomposeScopeImpl).l1c = function () {
    var tmp;
    if (!(this.ly_1 == null)) {
      var tmp0_safe_receiver = this.my_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1c();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).s1d = function () {
    return !(this.ny_1 == null);
  };
  protoOf(RecomposeScopeImpl).m1a = function (value) {
    if (value) {
      this.ky_1 = this.ky_1 | 1;
    } else {
      this.ky_1 = this.ky_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).r15 = function () {
    return !((this.ky_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).x19 = function (value) {
    if (value) {
      this.ky_1 = this.ky_1 | 2;
    } else {
      this.ky_1 = this.ky_1 & -3;
    }
  };
  protoOf(RecomposeScopeImpl).q1d = function () {
    return !((this.ky_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).g1a = function (value) {
    if (value) {
      this.ky_1 = this.ky_1 | 4;
    } else {
      this.ky_1 = this.ky_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).wy = function () {
    return !((this.ky_1 & 4) === 0);
  };
  protoOf(RecomposeScopeImpl).q16 = function (value) {
    if (value) {
      this.ky_1 = this.ky_1 | 8;
    } else {
      this.ky_1 = this.ky_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).z19 = function () {
    return !((this.ky_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).h16 = function (composer) {
    var tmp0_safe_receiver = this.ny_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Invalid restart scope');
    }
  };
  protoOf(RecomposeScopeImpl).v1b = function (value) {
    var tmp0_safe_receiver = this.ly_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q19(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).ak = function () {
    var tmp0_safe_receiver = this.ly_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.r19(this);
    }
    this.ly_1 = null;
    this.py_1 = null;
    this.qy_1 = null;
  };
  protoOf(RecomposeScopeImpl).i1f = function (owner) {
    this.ly_1 = owner;
  };
  protoOf(RecomposeScopeImpl).p1d = function () {
    var tmp0_safe_receiver = this.ly_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.q19(this, null);
  };
  protoOf(RecomposeScopeImpl).l1e = function (block) {
    this.ny_1 = block;
  };
  protoOf(RecomposeScopeImpl).h1a = function () {
    return !((this.ky_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).r16 = function (token) {
    this.oy_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).e1a = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).e1d = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.py_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArrayIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.py_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp.o1f(instance, this.oy_1);
    if (token === this.oy_1) {
      return true;
    }
    if (isInterface(instance, DerivedState)) {
      var tmp1_elvis_lhs = this.qy_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var tmp1_also = new IdentityArrayMap();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
        this.qy_1 = tmp1_also;
        tmp_0 = tmp1_also;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var tracked = tmp_0;
      tracked.q1c(instance, instance.g1d().p1f());
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).u1b = function () {
    return !(this.qy_1 == null);
  };
  protoOf(RecomposeScopeImpl).s1a = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.qy_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (instances.g17()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_1;
        if (!(instances == null) ? isInterface(instances, Collection) : false) {
          tmp_1 = instances.k();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = instances.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
          var tmp_2;
          if (isInterface(element, DerivedState)) {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>.<anonymous>' call
            if (!isInterface(element, DerivedState))
              THROW_CCE();
            var tmp0_elvis_lhs_0 = element.u1e();
            var policy = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
            tmp_2 = policy.q1f(element.g1d().p1f(), trackedDependencies.y1d(element));
          } else {
            tmp_2 = false;
          }
          if (!tmp_2) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return false;
    return true;
  };
  protoOf(RecomposeScopeImpl).g16 = function () {
    var tmp0_safe_receiver = this.ly_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.py_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        var tmp_0;
        try {
          var keys = tmp0_safe_receiver_0.l1f_1;
          var values = tmp0_safe_receiver_0.m1f_1;
          var size = tmp0_safe_receiver_0.k1f_1;
          var inductionVariable = 0;
          var tmp_1;
          if (inductionVariable < size) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_2 = keys[i];
              var tmp0_anonymous = isObject(tmp_2) ? tmp_2 : THROW_CCE();
              values[i];
              tmp0_safe_receiver.s19(tmp0_anonymous);
            }
             while (inductionVariable < size);
            tmp_1 = Unit_getInstance();
          }
          tmp_0 = tmp_1;
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp = Unit_getInstance();
      }
    }
  };
  protoOf(RecomposeScopeImpl).f1a = function (token) {
    var tmp0_safe_receiver = this.py_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.h1a()) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.any' call
          var keys = tmp0_safe_receiver.l1f_1;
          var values = tmp0_safe_receiver.m1f_1;
          var size = tmp0_safe_receiver.k1f_1;
          var inductionVariable = 0;
          if (inductionVariable < size)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
              var tmp_2 = keys[i];
              isObject(tmp_2) || THROW_CCE();
              if (!(values[i] === token)) {
                tmp$ret$1 = true;
                break $l$block;
              }
            }
             while (inductionVariable < size);
          tmp$ret$1 = false;
        }
        tmp_1 = tmp$ret$1;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function RecomposeScopeOwner() {
  }
  function updateChangedFlags(flags) {
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_getInstance();
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.r1f_1.w1();
      var new_0 = old.a(info);
      if (old === new_0 ? true : $this.r1f_1.cu(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.r1f_1.w1();
      var new_0 = old.c7(info);
      if (old === new_0 ? true : $this.r1f_1.cu(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(toRecompose, toInsert, toApply, toLateApply, toComplete) {
    toRecompose.f7();
    toInsert.f7();
    toApply.f7();
    toLateApply.f7();
    toComplete.f7();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.f7();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var tmp0_fastForEach = this$0.d1g_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.l(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.a(item);
      }
       while (inductionVariable <= last);
    this$0.d1g_1.f7();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token = Trace_getInstance().p17('Recomposer:animation');
          try {
            this$0.v1f_1.gx(frameTime);
            Companion_getInstance_11().s1g();
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }finally {
            Trace_getInstance().h18(token);
          }
        }
        tmp = tmp$ret$0;
      }
      var tmp$ret$15;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().p17('Recomposer:recompose');
        try {
          recordComposerModifications(this$0);
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp0_synchronized = this$0.w1f_1;
          var tmp$ret$1;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var tmp0_fastForEach = this$0.b1g_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.f() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0_fastForEach.l(index);
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.a(item);
            }
             while (inductionVariable <= last);
          this$0.b1g_1.f7();
          tmp$ret$1 = Unit_getInstance();
          tmp$ret$2 = tmp$ret$1;
          var modifiedValues = new IdentityArraySet();
          var alreadyComposed = new IdentityArraySet();
          $l$loop: while (true) {
            var tmp_0;
            var tmp$ret$3;
            // Inline function 'kotlin.collections.isNotEmpty' call
            tmp$ret$3 = !$toRecompose.k();
            if (tmp$ret$3) {
              tmp_0 = true;
            } else {
              var tmp$ret$4;
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp$ret$4 = !$toInsert.k();
              tmp_0 = tmp$ret$4;
            }
            if (!tmp_0) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = $toRecompose.f() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = $toRecompose.l(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  alreadyComposed.f18(item_0);
                  var tmp0_safe_receiver = performRecompose(this$0, item_0, modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    var tmp$ret$5;
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.a(tmp0_safe_receiver);
                    tmp$ret$5 = Unit_getInstance();
                  }
                }
                 while (inductionVariable_0 <= last_0);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.f7();
            }
            if (modifiedValues.g17()) {
              var tmp$ret$7;
              // Inline function 'androidx.compose.runtime.synchronized' call
              var tmp1_synchronized = this$0.w1f_1;
              var tmp$ret$6;
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              var tmp0_fastForEach_0 = this$0.z1f_1;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_1 = 0;
              var last_1 = tmp0_fastForEach_0.f() - 1 | 0;
              var tmp_1;
              if (inductionVariable_1 <= last_1) {
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = tmp0_fastForEach_0.l(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!alreadyComposed.w2(item_1) ? item_1.d1d(modifiedValues) : false) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.a(item_1);
                  }
                }
                 while (inductionVariable_1 <= last_1);
                tmp_1 = Unit_getInstance();
              }
              tmp$ret$6 = tmp_1;
              tmp$ret$7 = tmp$ret$6;
            }
            if ($toRecompose.k()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_0: while (true) {
                  var tmp$ret$8;
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  tmp$ret$8 = !$toInsert.k();
                  if (!tmp$ret$8) {
                    break $l$loop_0;
                  }
                  // Inline function 'kotlin.collections.plusAssign' call
                  var tmp2_plusAssign = performInsertValues(this$0, $toInsert, modifiedValues);
                  addAll($toLateApply, tmp2_plusAssign);
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                  return Unit_getInstance();
                } else {
                  throw $p;
                }
              }
            }
          }
          var tmp$ret$9;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$9 = !$toApply.k();
          if (tmp$ret$9) {
            var tmp0_this = this$0;
            var tmp1 = tmp0_this.u1f_1;
            tmp0_this.u1f_1 = tmp1.qd();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_2 = $toApply.f() - 1 | 0;
              if (inductionVariable_2 <= last_2)
                do {
                  var index_2 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_2 = $toApply.l(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $toComplete.a(item_2);
                }
                 while (inductionVariable_2 <= last_2);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_3 = 0;
              var last_3 = $toApply.f() - 1 | 0;
              if (inductionVariable_3 <= last_3)
                do {
                  var index_3 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_3 = $toApply.l(index_3);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_3.m1d();
                }
                 while (inductionVariable_3 <= last_3);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.f7();
            }
          }
          var tmp$ret$10;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$10 = !$toLateApply.k();
          if (tmp$ret$10) {
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              addAll($toComplete, $toLateApply);
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator = $toLateApply.c();
              while (tmp0_iterator.d()) {
                var element = tmp0_iterator.e();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element.n1d();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.f7();
            }
          }
          var tmp$ret$11;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$11 = !$toComplete.k();
          if (tmp$ret$11) {
            try {
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator_0 = $toComplete.c();
              while (tmp0_iterator_0.d()) {
                var element_0 = tmp0_iterator_0.e();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element_0.y19();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.f7();
            }
          }
          var tmp$ret$14;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp3_synchronized = this$0.w1f_1;
          var tmp$ret$13;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          var tmp$ret$12;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$12 = deriveStateLocked(this$0);
          tmp$ret$13 = tmp$ret$12;
          tmp$ret$14 = tmp$ret$13;
          Companion_getInstance_11().t1g();
          this$0.h1g_1 = null;
          tmp$ret$15 = Unit_getInstance();
          break $l$block_0;
        }finally {
          Trace_getInstance().h18(token_0);
        }
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.w1f_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.n1g_1.w1().x4(State_Idle_getInstance()) >= 0) {
        this$0.a1g_1.u1g(changed);
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp0_safe_receiver = tmp$ret$2;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.r3(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.d1h_1 = $block;
    this.e1h_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).g1h = function ($this$coroutineScope, $completion) {
    var tmp = this.h1h($this$coroutineScope, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).se = function (p1, $completion) {
    return this.g1h((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 2;
            this.xd_1 = 1;
            suspendResult = this.d1h_1(this.f1h_1, this.e1h_1, this);
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
  protoOf(Recomposer$recompositionRunner$slambda$slambda).h1h = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.d1h_1, this.e1h_1, completion);
    i.f1h_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.g1h($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.m1g_1 ? $this.v1f_1.fx() : false;
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasBroadcastFrameClockAwaiters>.<anonymous>' call
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.n1g_1.w1().x4(State_ShuttingDown_getInstance()) <= 0) {
      $this.z1f_1.f7();
      $this.a1g_1 = new IdentityArraySet();
      $this.b1g_1.f7();
      $this.c1g_1.f7();
      $this.d1g_1.f7();
      $this.g1g_1 = null;
      var tmp0_safe_receiver = $this.i1g_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.uh();
      $this.i1g_1 = null;
      $this.l1g_1 = null;
      return null;
    }
    var tmp;
    if (!($this.l1g_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.x1f_1 == null) {
        $this.a1g_1 = new IdentityArraySet();
        $this.b1g_1.f7();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!$this.b1g_1.k()) {
          tmp_4 = true;
        } else {
          tmp_4 = $this.a1g_1.g17();
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.c1g_1.k();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.d1g_1.k();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.j1g_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.n1g_1.bu(newState);
    var tmp_5;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var tmp3_also = $this.i1g_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.i1g_1 = null;
      tmp_5 = tmp3_also;
    } else {
      tmp_5 = null;
    }
    return tmp_5;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    if (!$this.k1g_1) {
      tmp = true;
    } else {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp0_iterator = $this.o1g_1.pn().c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          if (element.ef()) {
            tmp$ret$4 = true;
            break $l$block;
          }
        }
        tmp$ret$4 = false;
      }
      tmp = tmp$ret$4;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.i1h_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.j1h_1 = recoverable;
    this.k1h_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if ($this.a1g_1.k())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.a1g_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
    $this.a1g_1 = new IdentityArraySet();
    var changes = tmp0_also;
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    var compositions = toMutableList($this.z1f_1);
    var complete = false;
    try {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      $l$block: {
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = compositions.f() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.l(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
            item.b1d(changes);
            if ($this.n1g_1.w1().x4(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      $this.a1g_1 = new IdentityArraySet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        $this.w1f_1;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        $this.a1g_1.u1g(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if (!(deriveStateLocked($this) == null)) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('called outside of runRecomposeAndApplyChanges');
    }
    return _get_hasFrameWorkLocked__1gtyf7($this);
  }
  function registerRunnerJob($this, callingJob) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.y1f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.n1g_1.w1().x4(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Recomposer shut down');
    }
    if (!($this.x1f_1 == null)) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Recomposer already running');
    }
    $this.x1f_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_5().s1f_1.yk()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.w1f_1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.c1g_1.f7();
      $this.b1g_1.f7();
      $this.a1g_1 = new IdentityArraySet();
      $this.d1g_1.f7();
      $this.e1g_1.f7();
      $this.f1g_1.f7();
      $this.l1g_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        var tmp0_elvis_lhs = $this.g1g_1;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          // Inline function 'kotlin.collections.mutableListOf' call
          var tmp0_also = ArrayList_init_$Create$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>.<anonymous>' call
          $this.g1g_1 = tmp0_also;
          tmp_0 = tmp0_also;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var failedCompositions = tmp_0;
        if (!failedCompositions.m(failedInitialComposition)) {
          // Inline function 'kotlin.collections.plusAssign' call
          failedCompositions.a(failedInitialComposition);
        }
        // Inline function 'kotlin.collections.minusAssign' call
        $this.z1f_1.c7(failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    var tmp;
    var tmp_0;
    if ($this.a1g_1.g17()) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !$this.b1g_1.k();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$1($this, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  }
  function recompositionRunner($this, block, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $completion.t3();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.v1f_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      var tmp0_fastAny = $this.d1g_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAny.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAny.l(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          if (equals(item.k10_1, composition)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1) {
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var toInsert = ArrayList_init_$Create$();
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!toInsert.k()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.o1c() ? true : composition.y1c()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.h1g_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_getInstance_11().u1h(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.v1h();
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            if ((modifiedValues == null ? null : modifiedValues.g17()) === true) {
              composition.k1a(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.j1d();
            break $l$block;
          }finally {
            snapshot.w1h(previous);
          }
        }
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$1) {
      tmp_0 = composition;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function performInsertValues($this, references, modifiedValues) {
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$_0(references.f());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.l(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        var key = item.k10_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.l2(key);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          var answer = ArrayList_init_$Create$();
          destination.g3(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.a(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tasks.x1().c();
    while (tmp0_iterator.d()) {
      var tmp1_loop_parameter = tmp0_iterator.e();
      // Inline function 'kotlin.collections.component1' call
      var composition = tmp1_loop_parameter.u1();
      // Inline function 'kotlin.collections.component2' call
      var refs = tmp1_loop_parameter.w1();
      runtimeCheck(!composition.o1c());
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_getInstance_11().u1h(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.v1h();
            try {
              // Inline function 'androidx.compose.runtime.synchronized' call
              $this.w1f_1;
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.f());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.f() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.l(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  var tmp0_plusAssign = to(item_0, removeLastMultiValue($this.e1g_1, item_0.i10_1));
                  target.a(tmp0_plusAssign);
                }
                 while (inductionVariable_0 <= last_0);
              var pairs = target;
              composition.k1d(pairs);
              break $l$block;
            }finally {
              snapshot.w1h(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.m2());
  }
  function discardUnusedValues($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.e1g_1.k()) {
      var references = flatten($this.e1g_1.n2());
      $this.e1g_1.f7();
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.f());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.l(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          var tmp0_plusAssign = to(item, $this.f1g_1.l2(item));
          target.a(tmp0_plusAssign);
        }
         while (inductionVariable <= last);
      var unusedValues = target;
      $this.f1g_1.f7();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.f() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.l(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.e3();
        var state = item_0.f3();
        if (!(state == null)) {
          reference.k10_1.l1d(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.m1i();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var tmp0_error = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }finally {
      snapshot.dj();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.b1g_1.k()) {
      tmp = true;
    } else {
      tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
    }
    return tmp;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.r1f_1 = MutableStateFlow(persistentSetOf());
    this.s1f_1 = new AtomicReference(false);
  }
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.f7();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var iterator = this$0.d1g_1.c();
    while (iterator.d()) {
      var value = iterator.e();
      if (equals(value.k10_1, $composition)) {
        toInsert.a(value);
        iterator.e7();
      }
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.w1f_1;
      var tmp$ret$2;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.n1g_1.w1().x4(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.y1f_1);
      tmp$ret$0 = tmp0_also;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp0_safe_receiver = tmp$ret$3;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$5;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$4;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.r3(tmp$ret$4);
        tmp$ret$5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.w1f_1;
      var tmp$ret$4;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver_0 = runnerJobCause;
        var tmp_1;
        if (tmp0_safe_receiver_0 == null) {
          tmp_1 = null;
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2;
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = !(tmp0_safe_receiver_0 instanceof CancellationException);
          if (tmp$ret$0) {
            tmp_2 = tmp0_safe_receiver_0;
          } else {
            tmp_2 = null;
          }
          tmp$ret$1 = tmp_2;
          tmp_1 = tmp$ret$1;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
          tmp$ret$2 = Unit_getInstance();
        }
        tmp$ret$3 = tmp0_safe_receiver;
        tmp_0 = tmp$ret$3;
      }
      tmp.y1f_1 = tmp_0;
      this$0.n1g_1.bu(State_ShutDown_getInstance());
      tmp$ret$4 = Unit_getInstance();
      tmp$ret$5 = tmp$ret$4;
      return Unit_getInstance();
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.w1f_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.x1f_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.n1g_1.bu(State_ShuttingDown_getInstance());
        if (!this$0.k1g_1) {
          runnerJob.jg(cancellation);
        } else if (!(this$0.i1g_1 == null)) {
          continuationToResume = this$0.i1g_1;
        }
        this$0.i1g_1 = null;
        tmp = runnerJob.eg(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.y1f_1 = cancellation;
        this$0.n1g_1.bu(State_ShutDown_getInstance());
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.r3(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.v1i_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).d1j = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.e1j($this$recompositionRunner, parentFrameClock, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).f1j = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.d1j(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 6;
            var tmp_0 = this;
            tmp_0.y1i_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.z1i_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.a1j_1 = ArrayList_init_$Create$();
            var tmp_3 = this;
            tmp_3.b1j_1 = LinkedHashSet_init_$Create$();
            var tmp_4 = this;
            tmp_4.c1j_1 = LinkedHashSet_init_$Create$();
            this.xd_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.v1i_1)) {
              this.xd_1 = 5;
              continue $sm;
            }

            this.xd_1 = 2;
            suspendResult = awaitWorkAvailable(this.v1i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.v1i_1)) {
              this.xd_1 = 1;
              continue $sm;
            } else {
              this.xd_1 = 3;
              continue $sm;
            }

          case 3:
            this.xd_1 = 4;
            suspendResult = this.x1i_1.hx(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.v1i_1, this.y1i_1, this.z1i_1, this.a1j_1, this.b1j_1, this.c1j_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.v1i_1);
            this.xd_1 = 1;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.ae_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 6) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).e1j = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.v1i_1, completion);
    i.w1i_1 = $this$recompositionRunner;
    i.x1i_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.d1j($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.o1j_1 = this$0;
    this.p1j_1 = $block;
    this.q1j_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).g1h = function ($this$withContext, $completion) {
    var tmp = this.h1h($this$withContext, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(Recomposer$recompositionRunner$slambda).se = function (p1, $completion) {
    return this.g1h((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 5;
            this.s1j_1 = get_job(this.r1j_1.df());
            registerRunnerJob(this.o1j_1, this.s1j_1);
            var tmp_0 = this;
            var tmp_1 = Companion_getInstance_11();
            tmp_0.t1j_1 = tmp_1.v1j(Recomposer$recompositionRunner$slambda$lambda(this.o1j_1));
            addRunning(Companion_getInstance_5(), this.o1j_1.q1g_1);
            this.xd_1 = 1;
            continue $sm;
          case 1:
            this.yd_1 = 4;
            this.o1j_1.w1f_1;
            var tmp1_fastForEach = toMutableList(this.o1j_1.z1f_1);
            var inductionVariable = 0;
            var last = tmp1_fastForEach.f() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = tmp1_fastForEach.l(index);
                item.o1d();
              }
               while (inductionVariable <= last);
            this.xd_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.p1j_1, this.q1j_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.u1j_1 = suspendResult;
            this.yd_1 = 5;
            this.xd_1 = 3;
            continue $sm;
          case 3:
            this.t1j_1.dj();
            this.o1j_1.w1f_1;
            if (this.o1j_1.x1f_1 === this.s1j_1) {
              this.o1j_1.x1f_1 = null;
            }

            deriveStateLocked(this.o1j_1);
            removeRunning(Companion_getInstance_5(), this.o1j_1.q1g_1);
            return Unit_getInstance();
          case 4:
            this.yd_1 = 5;
            var t = this.ae_1;
            this.t1j_1.dj();
            this.o1j_1.w1f_1;
            if (this.o1j_1.x1f_1 === this.s1j_1) {
              this.o1j_1.x1f_1 = null;
            }

            deriveStateLocked(this.o1j_1);
            removeRunning(Companion_getInstance_5(), this.o1j_1.q1g_1);
            throw t;
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
  protoOf(Recomposer$recompositionRunner$slambda).h1h = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.o1j_1, this.p1j_1, this.q1j_1, completion);
    i.r1j_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.g1h($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      // Inline function 'kotlin.contracts.contract' call
      var values = $modifiedValues.d17_1;
      var inductionVariable = 0;
      var last = $modifiedValues.c17_1;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_0 = values[i];
          var tmp0_anonymous = isObject(tmp_0) ? tmp_0 : THROW_CCE();
          $composition.i1d(tmp0_anonymous);
        }
         while (inductionVariable < last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.s19(value);
      return Unit_getInstance();
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.i1d(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.f18(value);
      return Unit_getInstance();
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1h_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$1).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.t1h_1)) {
              this.xd_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), get_MODE_CANCELLABLE());
              cancellable.cj();
              this.t1h_1.w1f_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.t1h_1)) {
                tmp_0 = cancellable;
              } else {
                this.t1h_1.i1g_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                Companion_getInstance();
                tmp0_safe_receiver.r3(_Result___init__impl__xyqfz8(Unit_getInstance()));
              }
              suspendResult = returnIfSuspended(cancellable.ch(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.xd_1 = 2;
              continue $sm;
            }

          case 1:
            this.xd_1 = 2;
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.ae_1;
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
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_5();
    CompositionContext.call(this);
    this.u1f_1 = new Long(0, 0);
    var tmp = this;
    tmp.v1f_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.w1f_1 = createSynchronizedObject();
    this.x1f_1 = null;
    this.y1f_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.z1f_1 = ArrayList_init_$Create$();
    this.a1g_1 = new IdentityArraySet();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.b1g_1 = ArrayList_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.c1g_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.d1g_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.e1g_1 = LinkedHashMap_init_$Create$();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.f1g_1 = LinkedHashMap_init_$Create$();
    this.g1g_1 = null;
    this.h1g_1 = null;
    this.i1g_1 = null;
    this.j1g_1 = 0;
    this.k1g_1 = false;
    this.l1g_1 = null;
    this.m1g_1 = false;
    this.n1g_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = Job(effectCoroutineContext.j4(Key_getInstance()));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    tmp0_apply.eg(Recomposer$effectJob$lambda(this));
    tmp_6.o1g_1 = tmp0_apply;
    this.p1g_1 = effectCoroutineContext.q4(this.v1f_1).q4(this.o1g_1);
    this.q1g_1 = new RecomposerInfoImpl(this);
    this.r1g_1 = 8;
  }
  protoOf(Recomposer).v19 = function () {
    return this.p1g_1;
  };
  protoOf(Recomposer).w1j = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).k13 = function () {
    return 1000;
  };
  protoOf(Recomposer).i13 = function () {
    return false;
  };
  protoOf(Recomposer).j13 = function (table) {
  };
  protoOf(Recomposer).a1d = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'kotlin.collections.minusAssign' call
    this.z1f_1.c7(composition);
    // Inline function 'kotlin.collections.minusAssign' call
    this.b1g_1.c7(composition);
    this.c1g_1.c7(composition);
  };
  protoOf(Recomposer).r1c = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.b1g_1.m(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      this.b1g_1.a(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp0_safe_receiver.r3(tmp$ret$3);
    }
  };
  protoOf(Recomposer).v16 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.d1g_1.a(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp0_safe_receiver.r3(tmp$ret$3);
    }
  };
  protoOf(Recomposer).y18 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    addMultiValue(this.e1g_1, reference.i10_1, reference);
  };
  protoOf(Recomposer).m17 = function (reference, data) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.f1g_1.g3(reference, data);
  };
  protoOf(Recomposer).x18 = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>' call
    var tmp0_elvis_lhs = this.h1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableSetOf' call
      var tmp0_also = LinkedHashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>.<anonymous>' call
      this.h1g_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.a(composition);
  };
  protoOf(Recomposer).y16 = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    return this.f1g_1.j8(reference);
  };
  protoOf(Recomposer).w1d = function (composition, content) {
    var composerWasComposing = composition.o1c();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_getInstance_11().u1h(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.v1h();
            try {
              composition.x1d(content);
              break $l$block;
            }finally {
              snapshot.w1h(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_getInstance_11().t1g();
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.w1f_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    if (this.n1g_1.w1().x4(State_ShuttingDown_getInstance()) > 0) {
      var tmp_0;
      if (!this.z1f_1.m(composition)) {
        this.z1f_1.a(composition);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    try {
      composition.m1d();
      composition.n1d();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_getInstance_11().t1g();
    }
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.l2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      // Inline function 'kotlin.also' call
      var tmp0_also = removeFirst(tmp0_safe_receiver);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.k()) {
        _this__u8e3s4.j8(key);
      }
      tmp = tmp0_also;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.l2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      _this__u8e3s4.g3(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.a(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function _init_properties_Recomposer_kt__nj7w3x() {
    if (!properties_initialized_Recomposer_kt_k8q2ph) {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.t15(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.dy_1);
    if (fromWriter.qx_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.vx_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.nx_1;
    var currentGroup = toWriter.dy_1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = fromWriter.nx_1;
    var tmp1_copyInto = imul(currentGroup, 5);
    var tmp2_copyInto = imul(fromIndex, 5);
    var tmp3_copyInto = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_copyInto;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, tmp1_copyInto, tmp2_copyInto, tmp3_copyInto);
    var slots = toWriter.ox_1;
    var currentSlot = toWriter.tx_1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp4_copyInto = fromWriter.ox_1;
    arrayCopy(tmp4_copyInto, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.ey_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    var dataIndexDelta = currentSlot - dataIndex_0(groups, toWriter, currentGroup) | 0;
    var slotsGapOwner = toWriter.xx_1;
    var slotsGapLen = toWriter.wx_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataIndex = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.vx_1, slotsGapLen, slotsCapacity);
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.xx_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.px_1, fromIndex, fromWriter.f());
    var endAnchors = locationOf(fromWriter.px_1, sourceGroupsEnd, fromWriter.f());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.px_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.l(anchorIndex);
          sourceAnchor.z17_1 = sourceAnchor.z17_1 + anchorDelta | 0;
          anchors.a(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.px_1, toWriter.dy_1, toWriter.f());
      toWriter.px_1.t7(insertLocation, anchors);
      sourceAnchors.i1(startAnchors, endAnchors).f7();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    var parentGroup = fromWriter.i14(fromIndex);
    var tmp_1;
    if (!removeSourceGroup) {
      tmp_1 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.m14();
        fromWriter.l19(parentGroup - fromWriter.dy_1 | 0);
        fromWriter.m14();
      }
      fromWriter.l19(fromIndex - fromWriter.dy_1 | 0);
      var anchorsRemoved = fromWriter.ry();
      if (needsStartGroups) {
        fromWriter.hz();
        fromWriter.a16();
        fromWriter.hz();
        fromWriter.a16();
      }
      tmp_1 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_1 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved_1) {
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var message = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message));
    }
    toWriter.zx_1 = toWriter.zx_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.dy_1 = currentGroup + groupsToMove | 0;
      toWriter.tx_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function moveGroup$default($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup, $super) {
    removeSourceGroup = removeSourceGroup === VOID ? true : removeSourceGroup;
    return moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup);
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var inserting = $this.yx_1 > 0;
    $this.cy_1.h13($this.zx_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      insertGroups($this, 1);
      var current = $this.dy_1;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance_1().sy_1);
      var hasAux = !isNode ? !(aux === Companion_getInstance_1().sy_1) : false;
      initGroup($this.nx_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.ey_1, $this.tx_1);
      $this.ux_1 = $this.tx_1;
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.ox_1;
        var currentSlot = $this.tx_1;
        if (isNode) {
          var tmp0 = currentSlot;
          currentSlot = tmp0 + 1 | 0;
          slots[tmp0] = aux;
        }
        if (hasObjectKey) {
          var tmp1 = currentSlot;
          currentSlot = tmp1 + 1 | 0;
          slots[tmp1] = objectKey;
        }
        if (hasAux) {
          var tmp2 = currentSlot;
          currentSlot = tmp2 + 1 | 0;
          slots[tmp2] = aux;
        }
        $this.tx_1 = currentSlot;
      }
      $this.zx_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.ey_1 = current;
      $this.dy_1 = newCurrent;
      tmp_0 = newCurrent;
    } else {
      var previousParent = $this.ey_1;
      $this.ay_1.h13(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.dy_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance_1().sy_1)) {
        if (isNode) {
          $this.x1j(aux);
        } else {
          $this.g19(aux);
        }
      }
      $this.tx_1 = slotIndex($this.nx_1, $this, currentGroupAddress);
      $this.ux_1 = dataIndex_0($this.nx_1, $this, groupIndexToAddress($this, $this.dy_1 + 1 | 0));
      $this.zx_1 = nodeCount($this.nx_1, currentGroupAddress);
      $this.ey_1 = currentGroup;
      $this.dy_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.nx_1, currentGroupAddress) | 0;
    }
    tmp.sx_1 = tmp_0;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function containsGroupMark($this, group) {
    return group >= 0 ? containsMark($this.nx_1, groupIndexToAddress($this, group)) : false;
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 ? containsAnyMark($this.nx_1, groupIndexToAddress($this, group)) : false;
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.gy_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.g17()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.z1j(), tmp0_safe_receiver);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.gy_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var tmp0_also = new PrioritySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.gy_1 = tmp0_also;
        tmp = tmp0_also;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.a1k(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.nx_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.nx_1, groupAddress, containsAnyMarks);
      var parent = $this.i14(group);
      if (parent >= 0) {
        set.a1k(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.t15(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.nx_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.t15(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.by_1.h13((_get_capacity__a9k9f3($this) - $this.rx_1 | 0) - $this.sx_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.rx_1 | 0) - $this.by_1.q15() | 0;
    $this.sx_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.qx_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.nx_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.nx_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.rx_1;
    var gapStart = $this.qx_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.px_1.k()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.nx_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          // Inline function 'kotlin.collections.copyInto' call
          var tmp1_copyInto = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, groups, tmp1_copyInto, groupPhysicalAddress, groupPhysicalGapStart);
        } else {
          // Inline function 'kotlin.collections.copyInto' call
          var tmp2_copyInto = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          var tmp3_copyInto = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, groups, groupPhysicalGapStart, tmp2_copyInto, tmp3_copyInto);
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.nx_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.nx_1, groupAddress, newAnchor);
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.qx_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.wx_1;
    var gapStart = $this.vx_1;
    var slotsGapOwner = $this.xx_1;
    if (!(gapStart === index)) {
      var slots = $this.ox_1;
      if (index < gapStart) {
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = index + gapLen | 0;
        arrayCopy(slots, slots, tmp0_copyInto, index, gapStart);
      } else {
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = gapStart + gapLen | 0;
        var tmp2_copyInto = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, tmp1_copyInto, tmp2_copyInto);
      }
    }
    // Inline function 'kotlin.math.min' call
    var tmp3_min = group + 1 | 0;
    var tmp4_min = $this.f();
    var newSlotsGapOwner = Math.min(tmp3_min, tmp4_min);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.ox_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.qx_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.nx_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor >= 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message = 'Unexpected anchor value, expected a positive anchor';
            composeRuntimeError(toString(message));
          }
          updateDataAnchor($this.nx_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.rx_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.nx_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          if (!(anchor_0 < 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var message_0 = 'Unexpected anchor value, expected a negative anchor';
            composeRuntimeError(toString(message_0));
          }
          updateDataAnchor($this.nx_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.qx_1)
            updateAddress_0 = updateAddress_0 + $this.rx_1 | 0;
        }
      }
      $this.xx_1 = newSlotsGapOwner;
    }
    $this.vx_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.vx_1;
    var slotsGapEnd = slotsGapStart + $this.wx_1 | 0;
    fill_0($this.ox_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.dy_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.qx_1;
      var gapLen = $this.rx_1;
      var oldCapacity = $this.nx_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.nx_1;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var tmp0_max = imul(oldCapacity, 2);
        var tmp1_max = oldSize + size | 0;
        var tmp2_max = Math.max(tmp0_max, tmp1_max);
        var newCapacity = Math.max(tmp2_max, 32);
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp4_copyInto = imul(gapStart, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, newGroups, 0, 0, tmp4_copyInto);
        // Inline function 'kotlin.collections.copyInto' call
        var tmp5_copyInto = imul(newGapEndAddress, 5);
        var tmp6_copyInto = imul(oldGapEndAddress, 5);
        var tmp7_copyInto = imul(oldCapacity, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, newGroups, tmp5_copyInto, tmp6_copyInto, tmp7_copyInto);
        $this.nx_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.sx_1;
      if (currentEnd >= gapStart)
        $this.sx_1 = currentEnd + size | 0;
      $this.qx_1 = gapStart + size | 0;
      $this.rx_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.xx_1 < gapStart ? 0 : $this.vx_1, $this.wx_1, $this.ox_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.nx_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.xx_1;
      if (slotsGapOwner >= gapStart) {
        $this.xx_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.tx_1, group);
      var gapStart = $this.vx_1;
      var gapLen = $this.wx_1;
      if (gapLen < size) {
        var slots = $this.ox_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        // Inline function 'kotlin.math.max' call
        // Inline function 'kotlin.math.max' call
        var tmp0_max = imul(oldCapacity, 2);
        var tmp1_max = oldSize + size | 0;
        var tmp2_max = Math.max(tmp0_max, tmp1_max);
        var newCapacity = Math.max(tmp2_max, 32);
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = fillArrayVal(Array(newCapacity), null);
        while (tmp < newCapacity) {
          tmp_0[tmp] = null;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_0;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        $this.ox_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.ux_1;
      if (currentDataEnd >= gapStart)
        $this.ux_1 = currentDataEnd + size | 0;
      $this.vx_1 = gapStart + size | 0;
      $this.wx_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.px_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.k())
        anchorsRemoved = removeAnchors($this, start, len);
      $this.qx_1 = start;
      var previousGapLen = $this.rx_1;
      var newGapLen = previousGapLen + len | 0;
      $this.rx_1 = newGapLen;
      var slotsGapOwner = $this.xx_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = slotsGapOwner - len | 0;
        tmp_0.xx_1 = Math.max(start, tmp0_max);
      }
      if ($this.sx_1 >= $this.qx_1) {
        $this.sx_1 = $this.sx_1 - len | 0;
      }
      if (containsGroupMark($this, $this.ey_1)) {
        updateContainsMark($this, $this.ey_1);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.wx_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.vx_1 = start;
      $this.wx_1 = gapLen + len | 0;
      fill_0($this.ox_1, null, start, start + len | 0);
      var currentDataEnd = $this.ux_1;
      if (currentDataEnd >= start)
        $this.ux_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(address < $this.nx_1.length ? isNode($this.nx_1, address) : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      var message = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeRuntimeError(toString(message));
    }
    $this.ox_1[dataIndexToDataAddress($this, nodeIndex($this.nx_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.rx_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.px_1, previousGapStart, size);
      $l$loop_0: while (index < $this.px_1.f()) {
        var anchor = $this.px_1.l(index);
        var location = anchor.z17_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.z17_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.px_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.px_1.f()) {
        var anchor_0 = $this.px_1.l(index_0);
        var location_0 = anchor_0.z17_1;
        if (location_0 >= 0) {
          anchor_0.z17_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size) {
    var gapLen = $this.rx_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    var tmp0_let = locationOf($this.px_1, gapStart + size | 0, groupsSize);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    var index = tmp0_let >= $this.px_1.f() ? tmp0_let - 1 | 0 : tmp0_let;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.px_1.l(index);
      var location = $this.x16(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.z17_1 = IntCompanionObject_getInstance().MIN_VALUE;
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        index = index - 1 | 0;
      } else
        break $l$loop;
    }
    // Inline function 'kotlin.also' call
    var tmp1_also = removeAnchorStart < removeAnchorEnd;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (tmp1_also) {
      $this.px_1.i1(removeAnchorStart, removeAnchorEnd).f7();
    }
    return tmp1_also;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.f();
    var index = locationOf($this.px_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.px_1.f()) {
        var anchor = $this.px_1.l(index);
        var location = $this.x16(anchor);
        if (location >= originalLocation ? location < end : false) {
          removedAnchors.a(anchor);
          $this.px_1.h3(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.l(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.x16(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.qx_1) {
          item.z17_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.z17_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.px_1, newAnchorIndex, groupsSize);
        $this.px_1.s7(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.nx_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.qx_1 ? index : index + $this.rx_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.vx_1 ? dataIndex : dataIndex + $this.wx_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.nx_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.ox_1.length - $this.wx_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.wx_1, $this.ox_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.ox_1.length - $this.wx_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.wx_1, $this.ox_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.vx_1, $this.wx_1, $this.ox_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.f() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.f() + index | 0) - -2 | 0;
  }
  function SlotWriter$groupSlots$1($start, $end, this$0) {
    this.c1k_1 = $end;
    this.d1k_1 = this$0;
    this.b1k_1 = $start;
  }
  protoOf(SlotWriter$groupSlots$1).d = function () {
    return this.b1k_1 < this.c1k_1;
  };
  protoOf(SlotWriter$groupSlots$1).e = function () {
    var tmp;
    if (this.d()) {
      var tmp_0 = this.d1k_1.ox_1;
      var tmp1 = this.b1k_1;
      this.b1k_1 = tmp1 + 1 | 0;
      tmp = tmp_0[dataIndexToDataAddress(this.d1k_1, tmp1)];
    } else {
      tmp = null;
    }
    return tmp;
  };
  function SlotWriter(table) {
    Companion_getInstance_6();
    this.mx_1 = table;
    this.nx_1 = this.mx_1.t12_1;
    this.ox_1 = this.mx_1.v12_1;
    this.px_1 = this.mx_1.a13_1;
    this.qx_1 = this.mx_1.u12_1;
    this.rx_1 = (this.nx_1.length / 5 | 0) - this.mx_1.u12_1 | 0;
    this.sx_1 = this.mx_1.u12_1;
    this.tx_1 = 0;
    this.ux_1 = 0;
    this.vx_1 = this.mx_1.w12_1;
    this.wx_1 = this.ox_1.length - this.mx_1.w12_1 | 0;
    this.xx_1 = this.mx_1.u12_1;
    this.yx_1 = 0;
    this.zx_1 = 0;
    this.ay_1 = new IntStack();
    this.by_1 = new IntStack();
    this.cy_1 = new IntStack();
    this.dy_1 = 0;
    this.ey_1 = -1;
    this.fy_1 = false;
    this.gy_1 = null;
  }
  protoOf(SlotWriter).l18 = function () {
    return this.dy_1 < this.sx_1 ? isNode(this.nx_1, groupIndexToAddress(this, this.dy_1)) : false;
  };
  protoOf(SlotWriter).l16 = function (index) {
    return isNode(this.nx_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).m16 = function (index) {
    return nodeCount(this.nx_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).h14 = function (index) {
    return key(this.nx_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).g14 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.nx_1, address) ? this.ox_1[objectKeyIndex(this.nx_1, address)] : null;
  };
  protoOf(SlotWriter).t15 = function (index) {
    return groupSize(this.nx_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).f14 = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.nx_1, address) ? this.ox_1[auxIndex(this.nx_1, this, address)] : Companion_getInstance_1().sy_1;
  };
  protoOf(SlotWriter).j18 = function (index) {
    return (index > this.ey_1 ? index < this.sx_1 : false) ? true : this.ey_1 === 0 ? index === 0 : false;
  };
  protoOf(SlotWriter).m18 = function (index) {
    return this.k18(index, this.dy_1);
  };
  protoOf(SlotWriter).k18 = function (index, group) {
    var tmp;
    if (group === this.ey_1) {
      tmp = this.sx_1;
    } else if (group > this.ay_1.o17(0)) {
      tmp = group + this.t15(group) | 0;
    } else {
      var openIndex = this.ay_1.e1k(group);
      tmp = openIndex < 0 ? group + this.t15(group) | 0 : (_get_capacity__a9k9f3(this) - this.rx_1 | 0) - this.by_1.k16(openIndex) | 0;
    }
    var end = tmp;
    return index > group ? index < end : false;
  };
  protoOf(SlotWriter).f17 = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.nx_1, address) ? this.ox_1[dataIndexToDataAddress(this, nodeIndex(this.nx_1, this, address))] : null;
  };
  protoOf(SlotWriter).c19 = function (anchor) {
    return this.f17(anchor.f1k(this));
  };
  protoOf(SlotWriter).i14 = function (index) {
    return parent(this.nx_1, this, index);
  };
  protoOf(SlotWriter).y13 = function () {
    this.fy_1 = true;
    if (this.ay_1.k()) {
      moveGroupGapTo(this, this.f());
      moveSlotGapTo(this, this.ox_1.length - this.wx_1 | 0, this.qx_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.mx_1.g1k(this, this.nx_1, this.qx_1, this.ox_1, this.vx_1, this.px_1);
  };
  protoOf(SlotWriter).v1a = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.yx_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      var message = 'Cannot reset when inserting';
      composeRuntimeError(toString(message));
    }
    recalculateMarks(this);
    this.dy_1 = 0;
    this.sx_1 = _get_capacity__a9k9f3(this) - this.rx_1 | 0;
    this.tx_1 = 0;
    this.ux_1 = 0;
    this.zx_1 = 0;
  };
  protoOf(SlotWriter).i17 = function (value) {
    var result = this.h1k();
    this.i1k(value);
    return result;
  };
  protoOf(SlotWriter).g19 = function (value) {
    var address = groupIndexToAddress(this, this.dy_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!hasAux(this.nx_1, address)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      var message = 'Updating the data of a group that was not created with a data slot';
      composeRuntimeError(toString(message));
    }
    this.ox_1[dataIndexToDataAddress(this, auxIndex(this.nx_1, this, address))] = value;
  };
  protoOf(SlotWriter).j1a = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.yx_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      var message = 'Cannot insert auxiliary data when not inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.ey_1;
    var parentGroupAddress = groupIndexToAddress(this, parent);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!hasAux(this.nx_1, parentGroupAddress)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      var message_0 = 'Group already has auxiliary data';
      composeRuntimeError(toString(message_0));
    }
    insertSlots(this, 1, parent);
    var auxIndex_0 = auxIndex(this.nx_1, this, parentGroupAddress);
    var auxAddress = dataIndexToDataAddress(this, auxIndex_0);
    if (this.tx_1 > auxIndex_0) {
      var slotsToMove = this.tx_1 - auxIndex_0 | 0;
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(slotsToMove < 3)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
        var message_1 = 'Moving more than two slot not supported';
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
      if (slotsToMove > 1) {
        this.ox_1[auxAddress + 2 | 0] = this.ox_1[auxAddress + 1 | 0];
      }
      this.ox_1[auxAddress + 1 | 0] = this.ox_1[auxAddress];
    }
    addAux(this.nx_1, parentGroupAddress);
    this.ox_1[auxAddress] = value;
    this.tx_1 = this.tx_1 + 1 | 0;
  };
  protoOf(SlotWriter).x1j = function (value) {
    return updateNodeOfGroup(this, this.dy_1, value);
  };
  protoOf(SlotWriter).b19 = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.f1k(this), value);
  };
  protoOf(SlotWriter).i1k = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.tx_1 <= this.ux_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Writing to an invalid slot';
      composeRuntimeError(toString(message));
    }
    this.ox_1[dataIndexToDataAddress(this, this.tx_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).e19 = function (index, value) {
    var address = groupIndexToAddress(this, this.dy_1);
    var slotsStart = slotIndex(this.nx_1, this, address);
    var slotsEnd = dataIndex_0(this.nx_1, this, groupIndexToAddress(this, this.dy_1 + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(slotsIndex >= slotsStart ? slotsIndex < slotsEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var message = 'Write to an invalid slot index ' + index + ' for group ' + this.dy_1;
      composeRuntimeError(toString(message));
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.ox_1[slotAddress];
    this.ox_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).h1k = function () {
    if (this.yx_1 > 0) {
      insertSlots(this, 1, this.ey_1);
    }
    var tmp = this.ox_1;
    var tmp1 = this.tx_1;
    this.tx_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).h1f = function (anchor, index) {
    return this.j1f(this.x16(anchor), index);
  };
  protoOf(SlotWriter).j1f = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.nx_1, this, address);
    var slotsEnd = dataIndex_0(this.nx_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance_1().sy_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.ox_1[slotAddress];
  };
  protoOf(SlotWriter).l19 = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(amount >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message = 'Cannot seek backwards';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.yx_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_0 = 'Cannot call seek() while inserting';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (amount === 0)
      return Unit_getInstance();
    var index = this.dy_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(index >= this.ey_1 ? index <= this.sx_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var message_1 = 'Cannot seek outside the current group (' + this.ey_1 + '-' + this.sx_1 + ')';
      composeRuntimeError(toString(message_1));
    }
    this.dy_1 = index;
    var newSlot = dataIndex_0(this.nx_1, this, groupIndexToAddress(this, index));
    this.tx_1 = newSlot;
    this.ux_1 = newSlot;
  };
  protoOf(SlotWriter).hz = function () {
    var newGroup = this.sx_1;
    this.dy_1 = newGroup;
    this.tx_1 = dataIndex_0(this.nx_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).e15 = function () {
    var tmp1 = this.yx_1;
    this.yx_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).b16 = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.yx_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      var message = 'Unbalanced begin/end insert';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.yx_1 = this.yx_1 - 1 | 0;
    if (this.yx_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.cy_1.f() === this.ay_1.f())) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        var message_0 = 'startGroup/endGroup mismatch while inserting';
        composeRuntimeError(toString(message_0));
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).m14 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.yx_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var message = 'Key must be supplied when inserting';
      composeRuntimeError(toString(message));
    }
    startGroup_1(this, 0, Companion_getInstance_1().sy_1, false, Companion_getInstance_1().sy_1);
  };
  protoOf(SlotWriter).p14 = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance_1().sy_1);
  };
  protoOf(SlotWriter).r14 = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance_1().sy_1);
  };
  protoOf(SlotWriter).q14 = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).a16 = function () {
    var inserting = this.yx_1 > 0;
    var currentGroup = this.dy_1;
    var currentGroupEnd = this.sx_1;
    var groupIndex = this.ey_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.zx_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.nx_1, groupAddress);
    if (inserting) {
      updateGroupSize(this.nx_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.nx_1, groupAddress, newNodes);
      this.zx_1 = this.cy_1.q15() + (isNode_0 ? 1 : newNodes) | 0;
      this.ey_1 = parent(this.nx_1, this, groupIndex);
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(currentGroup === currentGroupEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        var message = 'Expected to be at the end of a group';
        composeRuntimeError(toString(message));
      }
      var oldGroupSize = groupSize(this.nx_1, groupAddress);
      var oldNodes = nodeCount(this.nx_1, groupAddress);
      updateGroupSize(this.nx_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.nx_1, groupAddress, newNodes);
      var newParent = this.ay_1.q15();
      restoreCurrentGroupEnd(this);
      this.ey_1 = newParent;
      var groupParent = parent(this.nx_1, this, groupIndex);
      this.zx_1 = this.cy_1.q15();
      if (groupParent === newParent) {
        this.zx_1 = this.zx_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) ? true : !(nodesDelta === 0)) {
          var current = groupParent;
          while ((!(current === 0) ? !(current === newParent) : false) ? !(nodesDelta === 0) ? true : !(groupSizeDelta === 0) : false) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.nx_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.nx_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.nx_1, currentAddress, nodeCount(this.nx_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.nx_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.nx_1, this, current);
          }
        }
        this.zx_1 = this.zx_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).u1a = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.yx_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      var message = 'Cannot call ensureStarted() while inserting';
      composeRuntimeError(toString(message));
    }
    var parent = this.ey_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(index >= parent ? index < this.sx_1 : false)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        var message_0 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeRuntimeError(toString(message_0));
      }
      var oldCurrent = this.dy_1;
      var oldCurrentSlot = this.tx_1;
      var oldCurrentSlotEnd = this.ux_1;
      this.dy_1 = index;
      this.m14();
      this.dy_1 = oldCurrent;
      this.tx_1 = oldCurrentSlot;
      this.ux_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).t19 = function (anchor) {
    return this.u1a(anchor.f1k(this));
  };
  protoOf(SlotWriter).e14 = function () {
    var groupAddress = groupIndexToAddress(this, this.dy_1);
    var newGroup = this.dy_1 + groupSize(this.nx_1, groupAddress) | 0;
    this.dy_1 = newGroup;
    this.tx_1 = dataIndex_0(this.nx_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.nx_1, groupAddress) ? 1 : nodeCount(this.nx_1, groupAddress);
  };
  protoOf(SlotWriter).ry = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.yx_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var message = 'Cannot remove group while inserting';
      composeRuntimeError(toString(message));
    }
    var oldGroup = this.dy_1;
    var oldSlot = this.tx_1;
    var count = this.e14();
    var tmp0_safe_receiver = this.gy_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.g17() ? tmp0_safe_receiver.b1a() >= oldGroup : false) {
        tmp0_safe_receiver.z1j();
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.dy_1 - oldGroup | 0);
    removeSlots(this, oldSlot, this.tx_1 - oldSlot | 0, oldGroup - 1 | 0);
    this.dy_1 = oldGroup;
    this.tx_1 = oldSlot;
    this.zx_1 = this.zx_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).hy = function () {
    var start = dataIndex_0(this.nx_1, this, groupIndexToAddress(this, this.dy_1));
    var end = dataIndex_0(this.nx_1, this, groupIndexToAddress(this, this.dy_1 + this.t15(this.dy_1) | 0));
    return new SlotWriter$groupSlots$1(start, end, this);
  };
  protoOf(SlotWriter).h19 = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.yx_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message = 'Cannot move a group while inserting';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(offset >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_0 = 'Parameter offset is out of bounds';
      composeRuntimeError(toString(message_0));
    }
    if (offset === 0)
      return Unit_getInstance();
    var current = this.dy_1;
    var parent = this.ey_1;
    var parentEnd = this.sx_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.nx_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(groupToMove <= parentEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        var message_1 = 'Parameter offset is out of bounds';
        composeRuntimeError(toString(message_1));
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.nx_1, groupIndexToAddress(this, groupToMove));
    var currentSlot = this.tx_1;
    var dataStart = dataIndex_0(this.nx_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.nx_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    var tmp$ret$3;
    // Inline function 'kotlin.math.max' call
    var tmp3_max = this.dy_1 - 1 | 0;
    tmp$ret$3 = Math.max(tmp3_max, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.nx_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp4_copyInto = imul(currentAddress, 5);
    var tmp5_copyInto = moveLocationOffset + imul(moveLen, 5) | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = groups;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, tmp4_copyInto, moveLocationOffset, tmp5_copyInto);
    if (moveDataLen > 0) {
      var slots = this.ox_1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp6_copyInto = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var tmp7_copyInto = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, currentSlot, tmp6_copyInto, tmp7_copyInto);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - currentSlot | 0;
    var slotsGapStart = this.vx_1;
    var slotsGapLen = this.wx_1;
    var slotsCapacity = this.ox_1.length;
    var slotsGapOwner = this.xx_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!anchorsRemoved) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var message_2 = 'Unexpectedly removed anchors';
      composeRuntimeError(toString(message_2));
    }
    fixParentAnchorsFor(this, parent, this.sx_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).j17 = function (anchor, offset, writer) {
    runtimeCheck(writer.yx_1 > 0);
    runtimeCheck(this.yx_1 === 0);
    runtimeCheck(anchor.l1c());
    var location = this.x16(anchor) + offset | 0;
    var currentGroup = this.dy_1;
    runtimeCheck(currentGroup <= location ? location < this.sx_1 : false);
    var parent = this.i14(location);
    var size = this.t15(location);
    var nodes = this.l16(location) ? 1 : this.m16(location);
    var result = moveGroup$default(Companion_getInstance_6(), this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.nx_1, currentAddress, groupSize(this.nx_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.nx_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.nx_1, currentAddress, nodeCount(this.nx_1, currentAddress) - nodes | 0);
        }
      }
      current = this.i14(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.zx_1 >= nodes);
      this.zx_1 = this.zx_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).n19 = function (table, index, removeSourceGroup) {
    runtimeCheck(this.yx_1 > 0);
    if (((index === 0 ? this.dy_1 === 0 : false) ? this.mx_1.u12_1 === 0 : false) ? groupSize(table.t12_1, index) === table.u12_1 : false) {
      var myGroups = this.nx_1;
      var mySlots = this.ox_1;
      var myAnchors = this.px_1;
      var groups = table.t12_1;
      var groupsSize = table.u12_1;
      var slots = table.v12_1;
      var slotsSize = table.w12_1;
      this.nx_1 = groups;
      this.ox_1 = slots;
      this.px_1 = table.a13_1;
      this.qx_1 = groupsSize;
      this.rx_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.vx_1 = slotsSize;
      this.wx_1 = slots.length - slotsSize | 0;
      this.xx_1 = groupsSize;
      table.j1k(myGroups, 0, mySlots, 0, myAnchors);
      return this.px_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    var tmp0_let = table.k14();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      tmp = moveGroup(Companion_getInstance_6(), tmp0_let, index, this, true, true, removeSourceGroup);
    }finally {
      tmp0_let.y13();
    }
    return tmp;
  };
  protoOf(SlotWriter).k19 = function (offset, table, index) {
    runtimeCheck(this.yx_1 <= 0 ? this.t15(this.dy_1 + offset | 0) === 1 : false);
    var previousCurrentGroup = this.dy_1;
    var previousCurrentSlot = this.tx_1;
    var previousCurrentSlotEnd = this.ux_1;
    this.l19(offset);
    this.m14();
    this.e15();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    var tmp0_let = table.k14();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      tmp = moveGroup$default(Companion_getInstance_6(), tmp0_let, index, this, false, true);
    }finally {
      tmp0_let.y13();
    }
    var anchors = tmp;
    this.b16();
    this.a16();
    this.dy_1 = previousCurrentGroup;
    this.tx_1 = previousCurrentSlot;
    this.ux_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).f15 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp0_getOrAdd = this.px_1;
    var tmp1_getOrAdd = this.f();
    var location = search$accessor$mbvawc(tmp0_getOrAdd, index, tmp1_getOrAdd);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      var anchor = new Anchor(index <= this.qx_1 ? index : -(this.f() - index | 0) | 0);
      tmp0_getOrAdd.s7(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0_getOrAdd.l(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).k1k = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.nx_1, groupAddress)) {
      updateMark(this.nx_1, groupAddress, true);
      if (!containsMark(this.nx_1, groupAddress)) {
        updateContainsMark(this, this.i14(group));
      }
    }
  };
  protoOf(SlotWriter).t16 = function (group, $super) {
    group = group === VOID ? this.ey_1 : group;
    var tmp;
    if ($super === VOID) {
      this.k1k(group);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.k1k.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).x16 = function (anchor) {
    // Inline function 'kotlin.let' call
    var tmp0_let = anchor.z17_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    return tmp0_let < 0 ? this.f() + tmp0_let | 0 : tmp0_let;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.dy_1 + ' end=' + this.sx_1 + ' size = ' + this.f() + ' ' + ('gap=' + this.qx_1 + '-' + (this.qx_1 + this.rx_1 | 0) + ')');
  };
  protoOf(SlotWriter).f = function () {
    return _get_capacity__a9k9f3(this) - this.rx_1 | 0;
  };
  function Anchor(loc) {
    this.z17_1 = loc;
  }
  protoOf(Anchor).l1c = function () {
    return !(this.z17_1 === IntCompanionObject_getInstance().MIN_VALUE);
  };
  protoOf(Anchor).m19 = function (slots) {
    return slots.x16(this);
  };
  protoOf(Anchor).f1k = function (writer) {
    return writer.x16(this);
  };
  function SlotTable() {
    this.t12_1 = new Int32Array(0);
    this.u12_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(0), null);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.v12_1 = tmp_1;
    this.w12_1 = 0;
    this.x12_1 = 0;
    this.y12_1 = false;
    this.z12_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_2.a13_1 = ArrayList_init_$Create$();
  }
  protoOf(SlotTable).rk = function () {
    return this.u12_1 === 0;
  };
  protoOf(SlotTable).b13 = function () {
    if (this.y12_1) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Cannot read while a writer is pending');
    }
    this.x12_1 = this.x12_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).k14 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.y12_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message = 'Cannot start a writer when another writer is pending';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.x12_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var message_0 = 'Cannot start a writer when a reader is pending';
      composeRuntimeError(toString(message_0));
    }
    this.y12_1 = true;
    this.z12_1 = this.z12_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).f15 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.y12_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message = 'use active SlotWriter to create an anchor location instead ';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.u12_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var message_0 = 'Parameter index is out of range';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp2_getOrAdd = this.a13_1;
    var tmp3_getOrAdd = this.u12_1;
    var location = search$accessor$mbvawc(tmp2_getOrAdd, index, tmp3_getOrAdd);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      tmp2_getOrAdd.s7(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp2_getOrAdd.l(location);
    }
    return tmp;
  };
  protoOf(SlotTable).x16 = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.y12_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message = 'Use active SlotWriter to determine anchor location instead';
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!anchor.l1c()) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var message_0 = 'Anchor refers to a group that was removed';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return anchor.z17_1;
  };
  protoOf(SlotTable).r1d = function (anchor) {
    var tmp;
    if (anchor.l1c()) {
      // Inline function 'kotlin.let' call
      var tmp0_let = search$accessor$mbvawc(this.a13_1, anchor.z17_1, this.u12_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      tmp = tmp0_let >= 0 ? equals(this.a13_1.l(tmp0_let), anchor) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).p1c = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!!this.y12_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message = 'Writer is active';
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(0 <= groupIndex ? groupIndex < this.u12_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var message_0 = 'Invalid group index';
      composeRuntimeError(toString(message_0));
    }
    var tmp;
    if (this.r1d(anchor)) {
      var containsUpper = groupIndex + groupSize(this.t12_1, groupIndex) | 0;
      var containsArg = anchor.z17_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).l1k = function (reader) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(reader.m13_1 === this ? this.x12_1 > 0 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected reader close()';
      composeRuntimeError(toString(message));
    }
    this.x12_1 = this.x12_1 - 1 | 0;
  };
  protoOf(SlotTable).g1k = function (writer, groups, groupsSize, slots, slotsSize, anchors) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer.mx_1 === this ? this.y12_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var message = 'Unexpected writer close()';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.y12_1 = false;
    this.j1k(groups, groupsSize, slots, slotsSize, anchors);
  };
  protoOf(SlotTable).j1k = function (groups, groupsSize, slots, slotsSize, anchors) {
    this.t12_1 = groups;
    this.u12_1 = groupsSize;
    this.v12_1 = slots;
    this.w12_1 = slotsSize;
    this.a13_1 = anchors;
  };
  protoOf(SlotTable).n17 = function () {
    return this.u12_1 > 0 ? containsMark(this.t12_1, 0) : false;
  };
  protoOf(SlotTable).j1f = function (group, slotIndex) {
    var start = slotAnchor(this.t12_1, group);
    var end = (group + 1 | 0) < this.u12_1 ? dataAnchor(this.t12_1, group + 1 | 0) : this.v12_1.length;
    var len = end - start | 0;
    var tmp;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.v12_1[start + slotIndex | 0];
    } else {
      tmp = Companion_getInstance_1().sy_1;
    }
    return tmp;
  };
  protoOf(SlotTable).c = function () {
    return new GroupIterator(this, 0, this.u12_1);
  };
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    return _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 30) | 0;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function addAux(_this__u8e3s4, address) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 268435456;
  }
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 ? value < 67108863 : false);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet(list) {
    var tmp;
    if (list === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = list;
    }
    list = tmp;
    this.y1j_1 = list;
  }
  protoOf(PrioritySet).a1k = function (value) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.y1j_1.k()) {
      tmp = this.y1j_1.l(0) === value ? true : this.y1j_1.l(this.y1j_1.f() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_getInstance();
    var index = this.y1j_1.f();
    this.y1j_1.a(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.y1j_1.l(parent);
      if (value > parentValue) {
        this.y1j_1.b7(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.y1j_1.b7(index, value);
  };
  protoOf(PrioritySet).g17 = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.y1j_1.k();
  };
  protoOf(PrioritySet).b1a = function () {
    return first(this.y1j_1);
  };
  protoOf(PrioritySet).z1j = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.y1j_1.f() > 0)) {
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      var message = 'Set is empty';
      composeRuntimeError(toString(message));
    }
    var value = this.y1j_1.l(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.y1j_1.k()) {
        tmp = this.y1j_1.l(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.y1j_1.b7(0, last(this.y1j_1));
      this.y1j_1.h3(this.y1j_1.f() - 1 | 0);
      var index = 0;
      var size = this.y1j_1.f();
      var max = this.y1j_1.f() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.y1j_1.l(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.y1j_1.l(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.y1j_1.l(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.y1j_1.b7(index, rightValue);
              this.y1j_1.b7(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.y1j_1.b7(index, leftValue);
          this.y1j_1.b7(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    // Inline function 'kotlin.let' call
    var tmp0_let = search$accessor$mbvawc(_this__u8e3s4, index, effectiveSize);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    return tmp0_let >= 0 ? tmp0_let : -(tmp0_let + 1 | 0) | 0;
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function slotAnchor(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    return _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 28) | 0;
  }
  function countOneBits_0(value) {
    switch (value) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.p13_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_1().sy_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.p13_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_1().sy_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.p13_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.m13_1 = table;
    this.n13_1 = this.m13_1.t12_1;
    this.o13_1 = this.m13_1.u12_1;
    this.p13_1 = this.m13_1.v12_1;
    this.q13_1 = this.m13_1.w12_1;
    this.r13_1 = false;
    this.s13_1 = 0;
    this.t13_1 = this.o13_1;
    this.u13_1 = -1;
    this.v13_1 = 0;
    this.w13_1 = 0;
    this.x13_1 = 0;
  }
  protoOf(SlotReader).f = function () {
    return this.o13_1;
  };
  protoOf(SlotReader).i14 = function (index) {
    return parentAnchor(this.n13_1, index);
  };
  protoOf(SlotReader).l18 = function () {
    return isNode(this.n13_1, this.s13_1);
  };
  protoOf(SlotReader).l16 = function (index) {
    return isNode(this.n13_1, index);
  };
  protoOf(SlotReader).m16 = function (index) {
    return nodeCount(this.n13_1, index);
  };
  protoOf(SlotReader).f17 = function (index) {
    return isNode(this.n13_1, index) ? node(this.n13_1, this, index) : null;
  };
  protoOf(SlotReader).x15 = function () {
    return this.c16() ? true : this.s13_1 === this.t13_1;
  };
  protoOf(SlotReader).c16 = function () {
    return this.v13_1 > 0;
  };
  protoOf(SlotReader).h17 = function () {
    return groupSize(this.n13_1, this.s13_1);
  };
  protoOf(SlotReader).t15 = function (index) {
    return groupSize(this.n13_1, index);
  };
  protoOf(SlotReader).w15 = function () {
    return this.t13_1;
  };
  protoOf(SlotReader).a15 = function () {
    var tmp;
    if (this.s13_1 < this.t13_1) {
      tmp = key(this.n13_1, this.s13_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).h14 = function (index) {
    return key(this.n13_1, index);
  };
  protoOf(SlotReader).c1a = function () {
    return this.w13_1 - slotAnchor(this.n13_1, this.u13_1) | 0;
  };
  protoOf(SlotReader).n16 = function (index) {
    return hasObjectKey(this.n13_1, index);
  };
  protoOf(SlotReader).c15 = function () {
    return this.s13_1 < this.t13_1 ? objectKey(this.n13_1, this, this.s13_1) : null;
  };
  protoOf(SlotReader).g14 = function (index) {
    return objectKey(this.n13_1, this, index);
  };
  protoOf(SlotReader).l14 = function () {
    return this.s13_1 < this.t13_1 ? aux(this.n13_1, this, this.s13_1) : 0;
  };
  protoOf(SlotReader).f14 = function (index) {
    return aux(this.n13_1, this, index);
  };
  protoOf(SlotReader).z18 = function (index) {
    return hasMark(this.n13_1, index);
  };
  protoOf(SlotReader).n18 = function (index) {
    return containsMark(this.n13_1, index);
  };
  protoOf(SlotReader).o16 = function () {
    return this.u13_1 >= 0 ? nodeCount(this.n13_1, this.u13_1) : 0;
  };
  protoOf(SlotReader).d1a = function (index) {
    return this.o18(this.s13_1, index);
  };
  protoOf(SlotReader).o18 = function (group, index) {
    var start = slotAnchor(this.n13_1, group);
    var next = group + 1 | 0;
    var end = next < this.o13_1 ? dataAnchor(this.n13_1, next) : this.q13_1;
    var address = start + index | 0;
    return address < end ? this.p13_1[address] : Companion_getInstance_1().sy_1;
  };
  protoOf(SlotReader).e = function () {
    if (this.v13_1 > 0 ? true : this.w13_1 >= this.x13_1)
      return Companion_getInstance_1().sy_1;
    var tmp1 = this.w13_1;
    this.w13_1 = tmp1 + 1 | 0;
    return this.p13_1[tmp1];
  };
  protoOf(SlotReader).o14 = function () {
    this.v13_1 = this.v13_1 + 1 | 0;
  };
  protoOf(SlotReader).z15 = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.v13_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      var message = 'Unbalanced begin/end empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.v13_1 = this.v13_1 - 1 | 0;
  };
  protoOf(SlotReader).y13 = function () {
    this.r13_1 = true;
    this.m13_1.l1k(this);
  };
  protoOf(SlotReader).m14 = function () {
    if (this.v13_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(parentAnchor(this.n13_1, this.s13_1) === this.u13_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        var message = 'Invalid slot table detected';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.u13_1 = this.s13_1;
      this.t13_1 = this.s13_1 + groupSize(this.n13_1, this.s13_1) | 0;
      var tmp1 = this.s13_1;
      this.s13_1 = tmp1 + 1 | 0;
      var current = tmp1;
      this.w13_1 = slotAnchor(this.n13_1, current);
      this.x13_1 = current >= (this.o13_1 - 1 | 0) ? this.q13_1 : dataAnchor(this.n13_1, current + 1 | 0);
    }
  };
  protoOf(SlotReader).n14 = function () {
    if (this.v13_1 <= 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isNode(this.n13_1, this.s13_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        var message = 'Expected a node group';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.m14();
    }
  };
  protoOf(SlotReader).e14 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.v13_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      var message = 'Cannot skip while in an empty region';
      composeRuntimeError(toString(message));
    }
    var count = isNode(this.n13_1, this.s13_1) ? 1 : nodeCount(this.n13_1, this.s13_1);
    this.s13_1 = this.s13_1 + groupSize(this.n13_1, this.s13_1) | 0;
    return count;
  };
  protoOf(SlotReader).hz = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.v13_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      var message = 'Cannot skip the enclosing group while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.s13_1 = this.t13_1;
  };
  protoOf(SlotReader).o15 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(this.v13_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      var message = 'Cannot reposition while in an empty region';
      composeRuntimeError(toString(message));
    }
    this.s13_1 = index;
    var parent = index < this.o13_1 ? parentAnchor(this.n13_1, index) : -1;
    this.u13_1 = parent;
    if (parent < 0)
      this.t13_1 = this.o13_1;
    else
      this.t13_1 = parent + groupSize(this.n13_1, parent) | 0;
    this.w13_1 = 0;
    this.x13_1 = 0;
  };
  protoOf(SlotReader).i16 = function (index) {
    var newCurrentEnd = index + groupSize(this.n13_1, index) | 0;
    var current = this.s13_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    if (!(current >= index ? current <= newCurrentEnd : false)) {
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      var message = 'Index ' + index + ' is not a parent of ' + current;
      composeRuntimeError(toString(message));
    }
    this.u13_1 = index;
    this.t13_1 = newCurrentEnd;
    this.w13_1 = 0;
    this.x13_1 = 0;
  };
  protoOf(SlotReader).y15 = function () {
    if (this.v13_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      if (!(this.s13_1 === this.t13_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        var message = 'endGroup() not called at the end of a group';
        composeRuntimeError(toString(message));
      }
      var parent = parentAnchor(this.n13_1, this.u13_1);
      this.u13_1 = parent;
      this.t13_1 = parent < 0 ? this.o13_1 : parent + groupSize(this.n13_1, parent) | 0;
    }
  };
  protoOf(SlotReader).b15 = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.v13_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.s13_1;
    while (childIndex < this.t13_1) {
      var tmp = key(this.n13_1, childIndex);
      var tmp_0 = objectKey(this.n13_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.n13_1, childIndex) ? 1 : nodeCount(this.n13_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.a(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.n13_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.s13_1 + ', key=' + this.a15() + ', ' + ('parent=' + this.u13_1 + ', end=' + this.t13_1 + ')');
  };
  protoOf(SlotReader).f15 = function (index) {
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp0_getOrAdd = this.m13_1.a13_1;
    var tmp1_getOrAdd = this.o13_1;
    var location = search$accessor$mbvawc(tmp0_getOrAdd, index, tmp1_getOrAdd);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      tmp0_getOrAdd.s7(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0_getOrAdd.l(location);
    }
    return tmp;
  };
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.f() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      var tmp0_let = _this__u8e3s4.l(mid).z17_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      var midVal = tmp0_let < 0 ? effectiveSize + tmp0_let | 0 : tmp0_let;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function auxIndex_0(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    return tmp0_let >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 29) | 0;
  }
  function validateRead($this) {
    if (!($this.m1k_1.z12_1 === $this.p1k_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.m1k_1 = table;
    this.n1k_1 = end;
    this.o1k_1 = start;
    this.p1k_1 = this.m1k_1.z12_1;
    if (this.m1k_1.y12_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).d = function () {
    return this.o1k_1 < this.n1k_1;
  };
  protoOf(GroupIterator).e = function () {
    validateRead(this);
    var group = this.o1k_1;
    this.o1k_1 = this.o1k_1 + groupSize(this.m1k_1.t12_1, group) | 0;
    return new SlotTableGroup(this.m1k_1, group, this.p1k_1);
  };
  function validateRead_0($this) {
    if (!($this.q1k_1.z12_1 === $this.s1k_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.z12_1 : version;
    this.q1k_1 = table;
    this.r1k_1 = group;
    this.s1k_1 = version;
  }
  protoOf(SlotTableGroup).c = function () {
    validateRead_0(this);
    return new GroupIterator(this.q1k_1, this.r1k_1 + 1 | 0, this.r1k_1 + groupSize(this.q1k_1.t12_1, this.r1k_1) | 0);
  };
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.g15_1 = key;
    this.h15_1 = objectKey;
    this.i15_1 = location;
    this.j15_1 = nodes;
    this.k15_1 = index;
  }
  function search$accessor$mbvawc(_this__u8e3s4, location, effectiveSize) {
    return search(_this__u8e3s4, location, effectiveSize);
  }
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_getInstance();
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
    StructuralEqualityPolicy_instance = this;
  }
  protoOf(StructuralEqualityPolicy).u1k = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).q1f = function (a, b) {
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    return this.u1k(tmp, (b == null ? true : isObject(b)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    if (StructuralEqualityPolicy_instance == null)
      new StructuralEqualityPolicy();
    return StructuralEqualityPolicy_instance;
  }
  function neverEqualPolicy() {
    var tmp = NeverEqualPolicy_getInstance();
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function referentialEqualityPolicy() {
    var tmp = ReferentialEqualityPolicy_getInstance();
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function NeverEqualPolicy() {
    NeverEqualPolicy_instance = this;
  }
  protoOf(NeverEqualPolicy).u1k = function (a, b) {
    return false;
  };
  protoOf(NeverEqualPolicy).q1f = function (a, b) {
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    return this.u1k(tmp, (b == null ? true : isObject(b)) ? b : THROW_CCE());
  };
  protoOf(NeverEqualPolicy).toString = function () {
    return 'NeverEqualPolicy';
  };
  var NeverEqualPolicy_instance;
  function NeverEqualPolicy_getInstance() {
    if (NeverEqualPolicy_instance == null)
      new NeverEqualPolicy();
    return NeverEqualPolicy_instance;
  }
  function ReferentialEqualityPolicy() {
    ReferentialEqualityPolicy_instance = this;
  }
  protoOf(ReferentialEqualityPolicy).u1k = function (a, b) {
    return a === b;
  };
  protoOf(ReferentialEqualityPolicy).q1f = function (a, b) {
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    return this.u1k(tmp, (b == null ? true : isObject(b)) ? b : THROW_CCE());
  };
  protoOf(ReferentialEqualityPolicy).toString = function () {
    return 'ReferentialEqualityPolicy';
  };
  var ReferentialEqualityPolicy_instance;
  function ReferentialEqualityPolicy_getInstance() {
    if (ReferentialEqualityPolicy_instance == null)
      new ReferentialEqualityPolicy();
    return ReferentialEqualityPolicy_instance;
  }
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.y1k_1 = myValue;
  }
  protoOf(StateStateRecord).z1k = function (value) {
    var tmp = this;
    tmp.y1k_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).y1k_1;
  };
  protoOf(StateStateRecord).a1l = function () {
    return new StateStateRecord(this.y1k_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    this.b1l_1 = policy;
    this.c1l_1 = new StateStateRecord(value);
  }
  protoOf(SnapshotMutableStateImpl).u1e = function () {
    return this.b1l_1;
  };
  protoOf(SnapshotMutableStateImpl).bu = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.c1l_1;
    var tmp1_anonymous = current(tmp0_withCurrent);
    var tmp;
    if (!this.u1e().q1f(tmp1_anonymous.y1k_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var tmp0_overwritable = this.c1l_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_getInstance_11().dw();
      overwritableRecord(tmp0_overwritable, this, snapshot, tmp1_anonymous).y1k_1 = value;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).w1 = function () {
    return readable_0(this.c1l_1, this).y1k_1;
  };
  protoOf(SnapshotMutableStateImpl).d1l = function () {
    return this.c1l_1;
  };
  protoOf(SnapshotMutableStateImpl).e1l = function (value) {
    var tmp = this;
    tmp.c1l_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).f1l = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.u1e().q1f(currentRecord.y1k_1, appliedRecord.y1k_1)) {
      tmp = current;
    } else {
      var merged = this.u1e().t1k(previousRecord.y1k_1, currentRecord.y1k_1, appliedRecord.y1k_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var tmp0_also = appliedRecord.a1l();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (tmp0_also instanceof StateStateRecord ? tmp0_also : THROW_CCE()).y1k_1 = merged;
        tmp_0 = tmp0_also;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.c1l_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    return 'MutableState(value=' + current(tmp0_withCurrent).y1k_1 + ')@' + hashCode(this);
  };
  function rememberUpdatedState$composable(newValue, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.yy(735465400);
    sourceInformation($composer_0, 'C(rememberUpdatedState$composable)*303@10198L41:SnapshotState.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(735465400, $changed, -1, 'androidx.compose.runtime.rememberUpdatedState$composable (SnapshotState.kt:303)');
    }
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.yy(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.nz();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance_1().sy_1) {
      // Inline function 'androidx.compose.runtime.rememberUpdatedState$composable.<anonymous>' call
      var value = mutableStateOf(newValue);
      $composer_1.oz(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.zy();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.rememberUpdatedState$composable.<anonymous>' call
    tmp0.bu(newValue);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.zy();
    return tmp0;
  }
  function mutableStateMapOf() {
    return new SnapshotStateMap();
  }
  function SnapshotThreadLocal() {
    this.v1e_1 = new AtomicReference(get_emptyThreadMap());
    this.w1e_1 = new SynchronizedObject();
  }
  protoOf(SnapshotThreadLocal).yk = function () {
    var tmp = this.v1e_1.yk().j1l(getCurrentThreadId());
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).x1e = function (value) {
    var key = getCurrentThreadId();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.w1e_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var current = this.v1e_1.yk();
    if (current.k1l(key, value))
      return Unit_getInstance();
    this.v1e_1.n1c(current.l1l(key, value));
  };
  function IntStack() {
    this.f13_1 = new Int32Array(10);
    this.g13_1 = 0;
  }
  protoOf(IntStack).f = function () {
    return this.g13_1;
  };
  protoOf(IntStack).h13 = function (value) {
    if (this.g13_1 >= this.f13_1.length) {
      this.f13_1 = copyOf(this.f13_1, imul(this.f13_1.length, 2));
    }
    var tmp = this.f13_1;
    var tmp1 = this.g13_1;
    this.g13_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).q15 = function () {
    var tmp = this.f13_1;
    this.g13_1 = this.g13_1 - 1 | 0;
    return tmp[this.g13_1];
  };
  protoOf(IntStack).o17 = function (default_0) {
    return this.g13_1 > 0 ? this.b1a() : default_0;
  };
  protoOf(IntStack).b1a = function () {
    return this.f13_1[this.g13_1 - 1 | 0];
  };
  protoOf(IntStack).k16 = function (index) {
    return this.f13_1[index];
  };
  protoOf(IntStack).k = function () {
    return this.g13_1 === 0;
  };
  protoOf(IntStack).f7 = function () {
    this.g13_1 = 0;
  };
  protoOf(IntStack).e1k = function (value) {
    var inductionVariable = 0;
    var last = this.g13_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.f13_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.z13_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).f = function () {
    return this.z13_1.f();
  };
  protoOf(Stack).p15 = function (value) {
    return this.z13_1.a(value);
  };
  protoOf(Stack).q15 = function () {
    return this.z13_1.h3(this.f() - 1 | 0);
  };
  protoOf(Stack).b1a = function () {
    return this.z13_1.l(this.f() - 1 | 0);
  };
  protoOf(Stack).k16 = function (index) {
    return this.z13_1.l(index);
  };
  protoOf(Stack).k = function () {
    return this.z13_1.k();
  };
  protoOf(Stack).g17 = function () {
    return !this.k();
  };
  protoOf(Stack).f7 = function () {
    return this.z13_1.f7();
  };
  protoOf(Stack).o8 = function () {
    var tmp = 0;
    var tmp_0 = this.z13_1.f();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = this.z13_1.l(tmp_2);
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function _get_current__qcrdxk($this) {
    // Inline function 'kotlin.getValue' call
    current$factory();
    return $this.t1e_1.w1();
  }
  function LazyValueHolder(valueProducer) {
    this.t1e_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).w1 = function () {
    return _get_current__qcrdxk(this);
  };
  function StaticValueHolder(value) {
    this.m1l_1 = value;
  }
  protoOf(StaticValueHolder).w1 = function () {
    return this.m1l_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + this.m1l_1 + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.m1l_1 == null ? 0 : hashCode(this.m1l_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.m1l_1, tmp0_other_with_cast.m1l_1))
      return false;
    return true;
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function find($this, key) {
    var low = 0;
    var high = $this.k1f_1 - 1 | 0;
    var valueIdentity = identityHashCode(key);
    var keys = $this.l1f_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = keys[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === key)
        return mid;
      else
        return findExactIndex($this, mid, key, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, value, valueHash) {
    var keys = $this.l1f_1;
    var size = $this.k1f_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = keys[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = keys[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArrayIntMap() {
    this.k1f_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.l1f_1 = fillArrayVal(Array(4), null);
    this.m1f_1 = new Int32Array(4);
  }
  protoOf(IdentityArrayIntMap).o1f = function (key, value) {
    var values = this.m1f_1;
    var index;
    if (this.k1f_1 > 0) {
      index = find(this, key);
      if (index >= 0) {
        var previousValue = values[index];
        values[index] = value;
        return previousValue;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var keys = this.l1f_1;
    var size = this.k1f_1;
    if (size === keys.length) {
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = imul(keys.length, 2);
      var newKeys = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var newValues = new Int32Array(imul(keys.length, 2));
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = insertIndex + 1 | 0;
      arrayCopy(keys, newKeys, tmp1_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newValues, tmp2_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      arrayCopy(keys, newKeys, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newValues, 0, 0, insertIndex);
      this.l1f_1 = newKeys;
      this.m1f_1 = newValues;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp3_copyInto = insertIndex + 1 | 0;
      arrayCopy(keys, keys, tmp3_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = values;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, values, tmp4_copyInto, insertIndex, size);
    }
    this.l1f_1[insertIndex] = key;
    this.m1f_1[insertIndex] = value;
    this.k1f_1 = this.k1f_1 + 1 | 0;
    return -1;
  };
  function find_0($this, key) {
    var keyIdentity = identityHashCode(key);
    var low = 0;
    var high = $this.y17_1 - 1 | 0;
    var keys = $this.w17_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midKey = keys[mid];
      var midKeyHash = identityHashCode(midKey);
      if (midKeyHash < keyIdentity)
        low = mid + 1 | 0;
      else if (midKeyHash > keyIdentity)
        high = mid - 1 | 0;
      else if (key === midKey)
        return mid;
      else
        return findExactIndex_0($this, mid, key, keyIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_0($this, midIndex, key, keyHash) {
    var keys = $this.w17_1;
    var size = $this.y17_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var k = keys[i];
        if (k === key) {
          return i;
        }
        if (!(identityHashCode(k) === keyHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var k_0 = keys[i_0];
        if (k_0 === key) {
          return i_0;
        }
        if (!(identityHashCode(k_0) === keyHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArrayMap(capacity) {
    capacity = capacity === VOID ? 16 : capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.w17_1 = fillArrayVal(Array(capacity), null);
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.x17_1 = fillArrayVal(Array(capacity), null);
    this.y17_1 = 0;
  }
  protoOf(IdentityArrayMap).g17 = function () {
    return this.y17_1 > 0;
  };
  protoOf(IdentityArrayMap).z1d = function (key) {
    return find_0(this, key) >= 0;
  };
  protoOf(IdentityArrayMap).y1d = function (key) {
    var index = find_0(this, key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.x17_1[index];
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(IdentityArrayMap).q1c = function (key, value) {
    var keys = this.w17_1;
    var values = this.x17_1;
    var size = this.y17_1;
    var index = find_0(this, key);
    if (index >= 0) {
      values[index] = value;
    } else {
      var insertIndex = -(index + 1 | 0) | 0;
      var resize = size === keys.length;
      var tmp;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = imul(size, 2);
        tmp = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      } else {
        tmp = keys;
      }
      var destKeys = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = insertIndex + 1 | 0;
      arrayCopy(keys, destKeys, tmp1_copyInto, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(keys, destKeys, 0, 0, insertIndex);
      }
      destKeys[insertIndex] = key;
      this.w17_1 = destKeys;
      var tmp_0;
      if (resize) {
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp2_arrayOfNulls = imul(size, 2);
        tmp_0 = fillArrayVal(Array(tmp2_arrayOfNulls), null);
      } else {
        tmp_0 = values;
      }
      var destValues = tmp_0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp3_copyInto = insertIndex + 1 | 0;
      arrayCopy(values, destValues, tmp3_copyInto, insertIndex, size);
      if (resize) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(values, destValues, 0, 0, insertIndex);
      }
      destValues[insertIndex] = value;
      this.x17_1 = destValues;
      this.y17_1 = this.y17_1 + 1 | 0;
    }
  };
  protoOf(IdentityArrayMap).n1f = function (key) {
    var index = find_0(this, key);
    if (index >= 0) {
      var value = this.x17_1[index];
      var size = this.y17_1;
      var keys = this.w17_1;
      var values = this.x17_1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      arrayCopy(keys, keys, index, tmp0_copyInto, size);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(values, values, index, tmp1_copyInto, size);
      var newSize = size - 1 | 0;
      keys[newSize] = null;
      values[newSize] = null;
      this.y17_1 = newSize;
      return (value == null ? true : isObject(value)) ? value : THROW_CCE();
    }
    return null;
  };
  protoOf(IdentityArrayMap).f7 = function () {
    this.y17_1 = 0;
    fill_0(this.w17_1, null);
    fill_0(this.x17_1, null);
  };
  function find_1($this, value) {
    var low = 0;
    var high = $this.c17_1 - 1 | 0;
    var valueIdentity = identityHashCode(value);
    var values = $this.d17_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = values[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === value)
        return mid;
      else
        return findExactIndex_1($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_1($this, midIndex, value, valueHash) {
    var values = $this.d17_1;
    var size = $this.c17_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = values[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = values[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < size);
    return -(size + 1 | 0) | 0;
  }
  function IdentityArraySet$iterator$1(this$0) {
    this.o1l_1 = this$0;
    this.n1l_1 = 0;
  }
  protoOf(IdentityArraySet$iterator$1).d = function () {
    return this.n1l_1 < this.o1l_1.c17_1;
  };
  protoOf(IdentityArraySet$iterator$1).e = function () {
    var tmp = this.o1l_1.d17_1;
    var tmp1 = this.n1l_1;
    this.n1l_1 = tmp1 + 1 | 0;
    var tmp_0 = tmp[tmp1];
    return isObject(tmp_0) ? tmp_0 : THROW_CCE();
  };
  function IdentityArraySet$toString$lambda(it) {
    return toString(it);
  }
  function IdentityArraySet() {
    this.c17_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.d17_1 = fillArrayVal(Array(16), null);
  }
  protoOf(IdentityArraySet).f = function () {
    return this.c17_1;
  };
  protoOf(IdentityArraySet).w2 = function (element) {
    return find_1(this, element) >= 0;
  };
  protoOf(IdentityArraySet).m = function (element) {
    if (!isObject(element))
      return false;
    return this.w2(isObject(element) ? element : THROW_CCE());
  };
  protoOf(IdentityArraySet).f18 = function (value) {
    var index;
    var size = this.c17_1;
    var values = this.d17_1;
    if (size > 0) {
      index = find_1(this, value);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (size === values.length) {
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = imul(values.length, 2);
      var newSorted = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = insertIndex + 1 | 0;
      arrayCopy(values, newSorted, tmp1_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      arrayCopy(values, newSorted, 0, 0, insertIndex);
      this.d17_1 = newSorted;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = insertIndex + 1 | 0;
      arrayCopy(values, values, tmp2_copyInto, insertIndex, size);
    }
    this.d17_1[insertIndex] = value;
    this.c17_1 = this.c17_1 + 1 | 0;
    return true;
  };
  protoOf(IdentityArraySet).f7 = function () {
    fill_0(this.d17_1, null);
    this.c17_1 = 0;
  };
  protoOf(IdentityArraySet).u1g = function (collection) {
    if (collection.k())
      return Unit_getInstance();
    if (!(collection instanceof IdentityArraySet)) {
      var tmp0_iterator = collection.c();
      while (tmp0_iterator.d()) {
        var value = tmp0_iterator.e();
        this.f18(value);
      }
    } else {
      var thisValues = this.d17_1;
      var otherValues = collection.d17_1;
      var thisSize = this.c17_1;
      var otherSize = collection.c17_1;
      var combinedSize = thisSize + otherSize | 0;
      var needsResize = this.d17_1.length < combinedSize;
      var elementsInOrder = thisSize === 0 ? true : identityHashCode(thisValues[thisSize - 1 | 0]) < identityHashCode(otherValues[0]);
      if (!needsResize ? elementsInOrder : false) {
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(otherValues, thisValues, thisSize, 0, otherSize);
        this.c17_1 = this.c17_1 + otherSize | 0;
      } else {
        var tmp;
        if (needsResize) {
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp0_arrayOfNulls = thisSize > otherSize ? imul(thisSize, 2) : imul(otherSize, 2);
          tmp = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        } else {
          tmp = thisValues;
        }
        var newArray = tmp;
        var thisIndex = thisSize - 1 | 0;
        var otherIndex = otherSize - 1 | 0;
        var nextInsertIndex = combinedSize - 1 | 0;
        $l$loop_1: while (thisIndex >= 0 ? true : otherIndex >= 0) {
          var tmp_0;
          if (thisIndex < 0) {
            var tmp2 = otherIndex;
            otherIndex = tmp2 - 1 | 0;
            tmp_0 = otherValues[tmp2];
          } else if (otherIndex < 0) {
            var tmp3 = thisIndex;
            thisIndex = tmp3 - 1 | 0;
            tmp_0 = thisValues[tmp3];
          } else {
            var thisValue = thisValues[thisIndex];
            var otherValue = otherValues[otherIndex];
            var thisHash = identityHashCode(thisValue);
            var otherHash = identityHashCode(otherValue);
            var tmp_1;
            if (thisHash > otherHash) {
              thisIndex = thisIndex - 1 | 0;
              tmp_1 = thisValue;
            } else if (thisHash < otherHash) {
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = otherValue;
            } else if (thisValue === otherValue) {
              thisIndex = thisIndex - 1 | 0;
              otherIndex = otherIndex - 1 | 0;
              tmp_1 = thisValue;
            } else {
              var i = thisIndex - 1 | 0;
              var foundDuplicate = false;
              $l$loop_0: while (i >= 0) {
                var tmp8 = i;
                i = tmp8 - 1 | 0;
                var value_0 = thisValues[tmp8];
                if (!(identityHashCode(value_0) === otherHash))
                  break $l$loop_0;
                if (otherValue === value_0) {
                  foundDuplicate = true;
                  break $l$loop_0;
                }
              }
              var tmp_2;
              if (foundDuplicate) {
                otherIndex = otherIndex - 1 | 0;
                continue $l$loop_1;
              } else {
                otherIndex = otherIndex - 1 | 0;
                tmp_2 = otherValue;
              }
              tmp_1 = tmp_2;
            }
            tmp_0 = tmp_1;
          }
          var nextValue = tmp_0;
          var tmp11 = nextInsertIndex;
          nextInsertIndex = tmp11 - 1 | 0;
          newArray[tmp11] = nextValue;
        }
        if (nextInsertIndex >= 0) {
          // Inline function 'kotlin.collections.copyInto' call
          var tmp1_copyInto = nextInsertIndex + 1 | 0;
          arrayCopy(newArray, newArray, 0, tmp1_copyInto, combinedSize);
        }
        var newSize = combinedSize - (nextInsertIndex + 1 | 0) | 0;
        fill_0(newArray, null, newSize, combinedSize);
        this.d17_1 = newArray;
        this.c17_1 = newSize;
      }
    }
  };
  protoOf(IdentityArraySet).k = function () {
    return this.c17_1 === 0;
  };
  protoOf(IdentityArraySet).g17 = function () {
    return this.c17_1 > 0;
  };
  protoOf(IdentityArraySet).p1l = function (value) {
    var index = find_1(this, value);
    var values = this.d17_1;
    var size = this.c17_1;
    if (index >= 0) {
      if (index < (size - 1 | 0)) {
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = index + 1 | 0;
        arrayCopy(values, values, index, tmp0_copyInto, size);
      }
      values[size - 1 | 0] = null;
      this.c17_1 = this.c17_1 - 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(IdentityArraySet).x2 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.k();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.containsAll.<anonymous>' call
        if (!this.w2(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(IdentityArraySet).b1 = function (elements) {
    return this.x2(elements);
  };
  protoOf(IdentityArraySet).c = function () {
    return new IdentityArraySet$iterator$1(this);
  };
  protoOf(IdentityArraySet).toString = function () {
    return joinToString(this, VOID, '[', ']', VOID, VOID, IdentityArraySet$toString$lambda);
  };
  function scopeSetAt($this, index) {
    return ensureNotNull($this.y1b_1[$this.w1b_1[index]]);
  }
  function getOrCreateIdentitySet($this, value) {
    var size = $this.z1b_1;
    var valueOrder = $this.w1b_1;
    var values = $this.x1b_1;
    var scopeSets = $this.y1b_1;
    var index;
    if (size > 0) {
      index = find_2($this, value);
      if (index >= 0) {
        return scopeSetAt($this, index);
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (size < valueOrder.length) {
      var valueIndex = valueOrder[size];
      values[valueIndex] = value;
      var tmp0_elvis_lhs = scopeSets[valueIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var tmp0_also = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.getOrCreateIdentitySet.<anonymous>' call
        scopeSets[valueIndex] = tmp0_also;
        tmp = tmp0_also;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var scopeSet = tmp;
      if (insertIndex < size) {
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = insertIndex + 1 | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = valueOrder;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, valueOrder, tmp1_copyInto, insertIndex, size);
      }
      valueOrder[insertIndex] = valueIndex;
      $this.z1b_1 = $this.z1b_1 + 1 | 0;
      return scopeSet;
    }
    var newSize = imul(valueOrder.length, 2);
    var valueIndex_0 = size;
    var newScopeSets = copyOf_0(scopeSets, newSize);
    var scopeSet_0 = new IdentityArraySet();
    newScopeSets[valueIndex_0] = scopeSet_0;
    var newValues = copyOf_0(values, newSize);
    newValues[valueIndex_0] = value;
    var newKeyOrder = new Int32Array(newSize);
    var inductionVariable = size + 1 | 0;
    if (inductionVariable < newSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newKeyOrder[i] = i;
      }
       while (inductionVariable < newSize);
    if (insertIndex < size) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = valueOrder;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, newKeyOrder, tmp2_copyInto, insertIndex, size);
    }
    newKeyOrder[insertIndex] = valueIndex_0;
    if (insertIndex > 0) {
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = valueOrder;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_2, newKeyOrder, 0, 0, insertIndex);
    }
    $this.y1b_1 = newScopeSets;
    $this.x1b_1 = newValues;
    $this.w1b_1 = newKeyOrder;
    $this.z1b_1 = $this.z1b_1 + 1 | 0;
    return scopeSet_0;
  }
  function find_2($this, value) {
    var valueIdentity = identityHashCode(value);
    var low = 0;
    var high = $this.z1b_1 - 1 | 0;
    var values = $this.x1b_1;
    var valueOrder = $this.w1b_1;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midValue = values[valueOrder[mid]];
      var midValHash = identityHashCode(midValue);
      if (midValHash < valueIdentity)
        low = mid + 1 | 0;
      else if (midValHash > valueIdentity)
        high = mid - 1 | 0;
      else if (value === midValue)
        return mid;
      else
        return findExactIndex_2($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_2($this, midIndex, value, valueHash) {
    var values = $this.x1b_1;
    var valueOrder = $this.w1b_1;
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = values[valueOrder[i]];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.z1b_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = values[valueOrder[i_0]];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.z1b_1 + 1 | 0) | 0;
  }
  function IdentityScopeMap() {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(50);
    while (tmp_0 < 50) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.w1b_1 = tmp_1;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_3.x1b_1 = fillArrayVal(Array(50), null);
    var tmp_4 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_4.y1b_1 = fillArrayVal(Array(50), null);
    this.z1b_1 = 0;
  }
  protoOf(IdentityScopeMap).c1c = function (value, scope) {
    var valueSet = getOrCreateIdentitySet(this, value);
    return valueSet.f18(scope);
  };
  protoOf(IdentityScopeMap).b1c = function (element) {
    return find_2(this, element) >= 0;
  };
  protoOf(IdentityScopeMap).f7 = function () {
    var scopeSets = this.y1b_1;
    var valueOrder = this.w1b_1;
    var values = this.x1b_1;
    var inductionVariable = 0;
    var last = scopeSets.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_safe_receiver = scopeSets[i];
        if (tmp1_safe_receiver == null)
          null;
        else {
          tmp1_safe_receiver.f7();
        }
        valueOrder[i] = i;
        values[i] = null;
      }
       while (inductionVariable <= last);
    this.z1b_1 = 0;
  };
  protoOf(IdentityScopeMap).a1c = function (value, scope) {
    var index = find_2(this, value);
    var valueOrder = this.w1b_1;
    var scopeSets = this.y1b_1;
    var values = this.x1b_1;
    var size = this.z1b_1;
    if (index >= 0) {
      var valueOrderIndex = valueOrder[index];
      var tmp0_elvis_lhs = scopeSets[valueOrderIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var set = tmp;
      var removed = set.p1l(scope);
      if (set.c17_1 === 0) {
        var startIndex = index + 1 | 0;
        var endIndex = size;
        if (startIndex < endIndex) {
          // Inline function 'kotlin.collections.copyInto' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = valueOrder;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, valueOrder, index, startIndex, endIndex);
        }
        var newSize = size - 1 | 0;
        valueOrder[newSize] = valueOrderIndex;
        values[valueOrderIndex] = null;
        this.z1b_1 = newSize;
      }
      return removed;
    }
    return false;
  };
  protoOf(IdentityScopeMap).f1d = function (scope) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var valueOrder = this.w1b_1;
    var scopeSets = this.y1b_1;
    var values = this.x1b_1;
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this.z1b_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = valueOrder[i];
        var set = ensureNotNull(scopeSets[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeScope.<anonymous>' call
        set.p1l(scope);
        if (set.c17_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = valueOrder[destinationIndex];
            valueOrder[destinationIndex] = valueIndex;
            valueOrder[i] = destinationKeyOrder;
          }
          destinationIndex = destinationIndex + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = destinationIndex;
    var last_0 = this.z1b_1;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        values[valueOrder[i_0]] = null;
      }
       while (inductionVariable_0 < last_0);
    this.z1b_1 = destinationIndex;
  };
  function VectorListIterator(list, index) {
    this.q1l_1 = list;
    this.r1l_1 = index;
  }
  protoOf(VectorListIterator).d = function () {
    return this.r1l_1 < this.q1l_1.f();
  };
  protoOf(VectorListIterator).e = function () {
    var tmp1 = this.r1l_1;
    this.r1l_1 = tmp1 + 1 | 0;
    return this.q1l_1.l(tmp1);
  };
  protoOf(VectorListIterator).e7 = function () {
    this.r1l_1 = this.r1l_1 - 1 | 0;
    this.q1l_1.h3(this.r1l_1);
  };
  protoOf(VectorListIterator).p1 = function () {
    return this.r1l_1 > 0;
  };
  protoOf(VectorListIterator).q1 = function () {
    this.r1l_1 = this.r1l_1 - 1 | 0;
    return this.q1l_1.l(this.r1l_1);
  };
  function MutableVectorList(vector) {
    this.s1l_1 = vector;
  }
  protoOf(MutableVectorList).f = function () {
    return this.s1l_1.d18_1;
  };
  protoOf(MutableVectorList).w2 = function (element) {
    return this.s1l_1.w2(element);
  };
  protoOf(MutableVectorList).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.w2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).x2 = function (elements) {
    return this.s1l_1.x2(elements);
  };
  protoOf(MutableVectorList).b1 = function (elements) {
    return this.x2(elements);
  };
  protoOf(MutableVectorList).l = function (index) {
    checkIndex(this, index);
    // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
    var tmp = this.s1l_1.b18_1[index];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(MutableVectorList).t1l = function (element) {
    return this.s1l_1.t1l(element);
  };
  protoOf(MutableVectorList).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.t1l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).k = function () {
    return this.s1l_1.k();
  };
  protoOf(MutableVectorList).c = function () {
    return new VectorListIterator(this, 0);
  };
  protoOf(MutableVectorList).u1l = function (element) {
    return this.s1l_1.u1l(element);
  };
  protoOf(MutableVectorList).u7 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.u1l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).f18 = function (element) {
    return this.s1l_1.f18(element);
  };
  protoOf(MutableVectorList).a = function (element) {
    return this.f18((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).v1l = function (index, element) {
    return this.s1l_1.v1l(index, element);
  };
  protoOf(MutableVectorList).s7 = function (index, element) {
    return this.v1l(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).w1l = function (index, elements) {
    return this.s1l_1.w1l(index, elements);
  };
  protoOf(MutableVectorList).t7 = function (index, elements) {
    return this.w1l(index, elements);
  };
  protoOf(MutableVectorList).x1l = function (elements) {
    return this.s1l_1.x1l(elements);
  };
  protoOf(MutableVectorList).j = function (elements) {
    return this.x1l(elements);
  };
  protoOf(MutableVectorList).f7 = function () {
    return this.s1l_1.f7();
  };
  protoOf(MutableVectorList).h1 = function (index) {
    return new VectorListIterator(this, index);
  };
  protoOf(MutableVectorList).p1l = function (element) {
    return this.s1l_1.p1l(element);
  };
  protoOf(MutableVectorList).c7 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.p1l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).h3 = function (index) {
    checkIndex(this, index);
    return this.s1l_1.h3(index);
  };
  protoOf(MutableVectorList).y1l = function (index, element) {
    checkIndex(this, index);
    return this.s1l_1.y1l(index, element);
  };
  protoOf(MutableVectorList).b7 = function (index, element) {
    return this.y1l(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(MutableVectorList).i1 = function (fromIndex, toIndex) {
    checkSubIndex(this, fromIndex, toIndex);
    return new SubList(this, fromIndex, toIndex);
  };
  function SubList(list, start, end) {
    this.z1l_1 = list;
    this.a1m_1 = start;
    this.b1m_1 = end;
  }
  protoOf(SubList).f = function () {
    return this.b1m_1 - this.a1m_1 | 0;
  };
  protoOf(SubList).w2 = function (element) {
    var inductionVariable = this.a1m_1;
    var last = this.b1m_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.z1l_1.l(i), element)) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(SubList).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.w2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).x2 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'androidx.compose.runtime.collection.SubList.containsAll.<anonymous>' call
      if (!this.w2(element)) {
        return false;
      }
    }
    return true;
  };
  protoOf(SubList).b1 = function (elements) {
    return this.x2(elements);
  };
  protoOf(SubList).l = function (index) {
    checkIndex(this, index);
    return this.z1l_1.l(index + this.a1m_1 | 0);
  };
  protoOf(SubList).t1l = function (element) {
    var inductionVariable = this.a1m_1;
    var last = this.b1m_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.z1l_1.l(i), element)) {
          return i - this.a1m_1 | 0;
        }
      }
       while (inductionVariable < last);
    return -1;
  };
  protoOf(SubList).n = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.t1l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).k = function () {
    return this.b1m_1 === this.a1m_1;
  };
  protoOf(SubList).c = function () {
    return new VectorListIterator(this, 0);
  };
  protoOf(SubList).u1l = function (element) {
    var inductionVariable = this.b1m_1 - 1 | 0;
    var last = this.a1m_1;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (equals(this.z1l_1.l(i), element)) {
          return i - this.a1m_1 | 0;
        }
      }
       while (!(i === last));
    return -1;
  };
  protoOf(SubList).u7 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.u1l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).f18 = function (element) {
    var tmp1 = this.b1m_1;
    this.b1m_1 = tmp1 + 1 | 0;
    this.z1l_1.s7(tmp1, element);
    return true;
  };
  protoOf(SubList).a = function (element) {
    return this.f18((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).v1l = function (index, element) {
    this.z1l_1.s7(index + this.a1m_1 | 0, element);
    this.b1m_1 = this.b1m_1 + 1 | 0;
  };
  protoOf(SubList).s7 = function (index, element) {
    return this.v1l(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).w1l = function (index, elements) {
    this.z1l_1.t7(index + this.a1m_1 | 0, elements);
    this.b1m_1 = this.b1m_1 + elements.f() | 0;
    return elements.f() > 0;
  };
  protoOf(SubList).t7 = function (index, elements) {
    return this.w1l(index, elements);
  };
  protoOf(SubList).x1l = function (elements) {
    this.z1l_1.t7(this.b1m_1, elements);
    this.b1m_1 = this.b1m_1 + elements.f() | 0;
    return elements.f() > 0;
  };
  protoOf(SubList).j = function (elements) {
    return this.x1l(elements);
  };
  protoOf(SubList).f7 = function () {
    var inductionVariable = this.b1m_1 - 1 | 0;
    var last = this.a1m_1;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        this.z1l_1.h3(i);
      }
       while (!(i === last));
    this.b1m_1 = this.a1m_1;
  };
  protoOf(SubList).h1 = function (index) {
    return new VectorListIterator(this, index);
  };
  protoOf(SubList).p1l = function (element) {
    var inductionVariable = this.a1m_1;
    var last = this.b1m_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.z1l_1.l(i), element)) {
          this.z1l_1.h3(i);
          this.b1m_1 = this.b1m_1 - 1 | 0;
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(SubList).c7 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.p1l((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).h3 = function (index) {
    checkIndex(this, index);
    var item = this.z1l_1.h3(index + this.a1m_1 | 0);
    this.b1m_1 = this.b1m_1 - 1 | 0;
    return item;
  };
  protoOf(SubList).y1l = function (index, element) {
    checkIndex(this, index);
    return this.z1l_1.b7(index + this.a1m_1 | 0, element);
  };
  protoOf(SubList).b7 = function (index, element) {
    return this.y1l(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SubList).i1 = function (fromIndex, toIndex) {
    checkSubIndex(this, fromIndex, toIndex);
    return new SubList(this, fromIndex, toIndex);
  };
  function MutableVector(content, size) {
    this.b18_1 = content;
    this.c18_1 = null;
    this.d18_1 = size;
    this.e18_1 = 8;
  }
  protoOf(MutableVector).f18 = function (element) {
    this.c1m(this.d18_1 + 1 | 0);
    this.b18_1[this.d18_1] = element;
    this.d18_1 = this.d18_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).v1l = function (index, element) {
    this.c1m(this.d18_1 + 1 | 0);
    var content = this.b18_1;
    if (!(index === this.d18_1)) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      var tmp1_copyInto = this.d18_1;
      arrayCopy(content, content, tmp0_copyInto, index, tmp1_copyInto);
    }
    content[index] = element;
    this.d18_1 = this.d18_1 + 1 | 0;
  };
  protoOf(MutableVector).d1m = function (index, elements) {
    if (elements.k())
      return false;
    this.c1m(this.d18_1 + elements.d18_1 | 0);
    var content = this.b18_1;
    if (!(index === this.d18_1)) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + elements.d18_1 | 0;
      var tmp1_copyInto = this.d18_1;
      arrayCopy(content, content, tmp0_copyInto, index, tmp1_copyInto);
    }
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = elements.b18_1;
    var tmp3_copyInto = elements.d18_1;
    arrayCopy(tmp2_copyInto, content, index, 0, tmp3_copyInto);
    this.d18_1 = this.d18_1 + elements.d18_1 | 0;
    return true;
  };
  protoOf(MutableVector).w1l = function (index, elements) {
    if (elements.k())
      return false;
    this.c1m(this.d18_1 + elements.f() | 0);
    var content = this.b18_1;
    if (!(index === this.d18_1)) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + elements.f() | 0;
      var tmp1_copyInto = this.d18_1;
      arrayCopy(content, content, tmp0_copyInto, index, tmp1_copyInto);
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index_0 = 0;
    var tmp0_iterator = elements.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      // Inline function 'androidx.compose.runtime.collection.MutableVector.addAll.<anonymous>' call
      var tmp1 = index_0;
      index_0 = tmp1 + 1 | 0;
      content[index + checkIndexOverflow(tmp1) | 0] = item;
    }
    this.d18_1 = this.d18_1 + elements.f() | 0;
    return true;
  };
  protoOf(MutableVector).x1l = function (elements) {
    return this.w1l(this.d18_1, elements);
  };
  protoOf(MutableVector).e1m = function () {
    var tmp0_elvis_lhs = this.c18_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new MutableVectorList(this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.collection.MutableVector.asMutableList.<anonymous>' call
      this.c18_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MutableVector).f7 = function () {
    var content = this.b18_1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var inductionVariable = this.d18_1 - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        content[i] = null;
      }
       while (0 <= inductionVariable);
    this.d18_1 = 0;
  };
  protoOf(MutableVector).w2 = function (element) {
    var inductionVariable = 0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var last = this.d18_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
        var tmp = this.b18_1[i];
        tmp$ret$1 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
        if (equals(tmp$ret$1, element))
          return true;
      }
       while (!(i === last));
    return false;
  };
  protoOf(MutableVector).x2 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = elements.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'androidx.compose.runtime.collection.MutableVector.containsAll.<anonymous>' call
      if (!this.w2(element))
        return false;
    }
    return true;
  };
  protoOf(MutableVector).c1m = function (capacity) {
    var oldContent = this.b18_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.math.max' call
      var tmp0_max = imul(oldContent.length, 2);
      var newSize = Math.max(capacity, tmp0_max);
      this.b18_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).t1l = function (element) {
    var size = this.d18_1;
    if (size > 0) {
      var i = 0;
      var tmp = this.b18_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        if (equals(element, content[i]))
          return i;
        i = i + 1 | 0;
      }
       while (i < size);
    }
    return -1;
  };
  protoOf(MutableVector).k = function () {
    return this.d18_1 === 0;
  };
  protoOf(MutableVector).g17 = function () {
    return !(this.d18_1 === 0);
  };
  protoOf(MutableVector).u1l = function (element) {
    var size = this.d18_1;
    if (size > 0) {
      var i = size - 1 | 0;
      var tmp = this.b18_1;
      var content = isArray(tmp) ? tmp : THROW_CCE();
      do {
        if (equals(element, content[i]))
          return i;
        i = i - 1 | 0;
      }
       while (i >= 0);
    }
    return -1;
  };
  protoOf(MutableVector).p1l = function (element) {
    var index = this.t1l(element);
    if (index >= 0) {
      this.h3(index);
      return true;
    }
    return false;
  };
  protoOf(MutableVector).h3 = function (index) {
    var content = this.b18_1;
    var tmp = content[index];
    var item = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.d18_1 - 1 | 0))) {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      var tmp1_copyInto = this.d18_1;
      arrayCopy(content, content, index, tmp0_copyInto, tmp1_copyInto);
    }
    this.d18_1 = this.d18_1 - 1 | 0;
    content[this.d18_1] = null;
    return item;
  };
  protoOf(MutableVector).v7 = function (start, end) {
    if (end > start) {
      if (end < this.d18_1) {
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = this.b18_1;
        var tmp1_copyInto = this.b18_1;
        var tmp2_copyInto = this.d18_1;
        arrayCopy(tmp0_copyInto, tmp1_copyInto, start, end, tmp2_copyInto);
      }
      var newSize = this.d18_1 - (end - start | 0) | 0;
      var inductionVariable = newSize;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
      var last = this.d18_1 - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.b18_1[i] = null;
        }
         while (!(i === last));
      this.d18_1 = newSize;
    }
  };
  protoOf(MutableVector).y1l = function (index, element) {
    var content = this.b18_1;
    var tmp = content[index];
    var old = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    content[index] = element;
    return old;
  };
  protoOf(MutableVector).f1m = function (comparator) {
    var tmp = this.b18_1;
    sortWith_0(isArray(tmp) ? tmp : THROW_CCE(), comparator, 0, this.d18_1);
  };
  function checkIndex(_this__u8e3s4, index) {
    var size = _this__u8e3s4.f();
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' is out of bounds. ' + ('The list has ' + size + ' elements.'));
    }
  }
  function checkSubIndex(_this__u8e3s4, fromIndex, toIndex) {
    var size = _this__u8e3s4.f();
    if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$('Indices are out of order. fromIndex (' + fromIndex + ') is ' + ('greater than toIndex (' + toIndex + ').'));
    }
    if (fromIndex < 0) {
      throw IndexOutOfBoundsException_init_$Create$('fromIndex (' + fromIndex + ') is less than 0.');
    }
    if (toIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$('toIndex (' + toIndex + ') is more than than the list size (' + size + ')');
    }
  }
  function persistentSetOf() {
    return Companion_getInstance_9().h1m();
  }
  function persistentHashMapOf() {
    return Companion_getInstance_7().j1m();
  }
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.i1m_1 = new PersistentHashMap(Companion_getInstance_8().k1m_1, 0);
  }
  protoOf(Companion_5).j1m = function () {
    var tmp = this.i1m_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_7();
    AbstractMap.call(this);
    this.n1m_1 = node;
    this.o1m_1 = size;
  }
  protoOf(PersistentHashMap).f = function () {
    return this.o1m_1;
  };
  protoOf(PersistentHashMap).m2 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).n2 = function () {
    return new PersistentHashMapValues(this);
  };
  protoOf(PersistentHashMap).x1 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).f2 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.n1m_1.t1m(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).l2 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.n1m_1.u1m(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).g3 = function (key, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.n1m_1.v1m(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.w1m_1, this.f() + newNodeResult.x1m_1 | 0);
  };
  protoOf(PersistentHashMap).j8 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.n1m_1.y1m(tmp$ret$0, key, 0);
    if (this.n1m_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_7().j1m();
    }
    return new PersistentHashMap(newNode, this.f() - 1 | 0);
  };
  protoOf(PersistentHashMap).j14 = function () {
    return new PersistentHashMapBuilder(this);
  };
  function PersistentHashMapBuilder(map) {
    AbstractMutableMap.call(this);
    this.d1n_1 = map;
    this.e1n_1 = new MutabilityOwnership();
    this.f1n_1 = this.d1n_1.n1m_1;
    this.g1n_1 = null;
    this.h1n_1 = 0;
    this.i1n_1 = this.d1n_1.f();
  }
  protoOf(PersistentHashMapBuilder).j1n = function (value) {
    this.i1n_1 = value;
    this.h1n_1 = this.h1n_1 + 1 | 0;
  };
  protoOf(PersistentHashMapBuilder).f = function () {
    return this.i1n_1;
  };
  protoOf(PersistentHashMapBuilder).ia = function () {
    var tmp = this;
    var tmp_0;
    if (this.f1n_1 === this.d1n_1.n1m_1) {
      tmp_0 = this.d1n_1;
    } else {
      this.e1n_1 = new MutabilityOwnership();
      tmp_0 = new PersistentHashMap(this.f1n_1, this.f());
    }
    tmp.d1n_1 = tmp_0;
    return this.d1n_1;
  };
  protoOf(PersistentHashMapBuilder).x1 = function () {
    return new PersistentHashMapBuilderEntries(this);
  };
  protoOf(PersistentHashMapBuilder).m2 = function () {
    return new PersistentHashMapBuilderKeys(this);
  };
  protoOf(PersistentHashMapBuilder).n2 = function () {
    return new PersistentHashMapBuilderValues(this);
  };
  protoOf(PersistentHashMapBuilder).f2 = function (key) {
    var tmp = this.f1n_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.t1m(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).l2 = function (key) {
    var tmp = this.f1n_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.u1m(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMapBuilder).g3 = function (key, value) {
    this.g1n_1 = null;
    var tmp = this;
    var tmp_0 = this.f1n_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    tmp.f1n_1 = tmp_0.k1n(tmp$ret$0, key, value, 0, this);
    return this.g1n_1;
  };
  protoOf(PersistentHashMapBuilder).m8 = function (from) {
    var tmp1_elvis_lhs = from instanceof PersistentHashMap ? from : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = from instanceof PersistentHashMapBuilder ? from : null;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ia();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var map = tmp;
    if (!(map == null)) {
      var intersectionCounter = new DeltaCounter();
      var oldSize = this.f();
      var tmp_0 = this;
      var tmp_1 = this.f1n_1;
      var tmp_2 = map.n1m_1;
      tmp_0.f1n_1 = tmp_1.l1n(tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE(), 0, intersectionCounter, this);
      var newSize = (oldSize + map.f() | 0) - intersectionCounter.m1n_1 | 0;
      if (!(oldSize === newSize)) {
        this.j1n(newSize);
      }
    } else {
      protoOf(AbstractMutableMap).m8.call(this, from);
    }
  };
  protoOf(PersistentHashMapBuilder).j8 = function (key) {
    this.g1n_1 = null;
    var tmp = this;
    var tmp_0 = this.f1n_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.n1n(tmp$ret$0, key, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_8().k1m_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.f1n_1 = tmp_1;
    return this.g1n_1;
  };
  protoOf(PersistentHashMapBuilder).o1n = function (key, value) {
    var oldSize = this.f();
    var tmp = this;
    var tmp_0 = this.f1n_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.p1n(tmp$ret$0, key, value, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_8().k1m_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.f1n_1 = tmp_1;
    return !(oldSize === this.f());
  };
  protoOf(PersistentHashMapBuilder).f7 = function () {
    var tmp = this;
    var tmp_0 = Companion_getInstance_8().k1m_1;
    tmp.f1n_1 = tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE();
    this.j1n(0);
  };
  function PersistentHashMapBuilderEntriesIterator(builder) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = new TrieNodeMutableEntriesIterator(this);
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.q1n_1 = new PersistentHashMapBuilderBaseIterator(builder, tmp_2);
  }
  protoOf(PersistentHashMapBuilderEntriesIterator).d = function () {
    return this.q1n_1.d();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).e = function () {
    return this.q1n_1.e();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).e7 = function () {
    return this.q1n_1.e7();
  };
  protoOf(PersistentHashMapBuilderEntriesIterator).b1o = function (key, newValue) {
    return this.q1n_1.b1o(key, newValue);
  };
  function PersistentHashMapBuilderKeysIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      tmp_1[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function PersistentHashMapBuilderValuesIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      tmp_1[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  function resetPath($this, keyHash, node, key, pathIndex) {
    var shift = imul(pathIndex, get_LOG_MAX_BRANCHING_FACTOR());
    if (shift > get_MAX_SHIFT()) {
      $this.r1n_1[pathIndex].g1o(node.s1m_1, node.s1m_1.length, 0);
      while (!equals($this.r1n_1[pathIndex].c1o(), key)) {
        $this.r1n_1[pathIndex].h1o();
      }
      $this.s1n_1 = pathIndex;
      return Unit_getInstance();
    }
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (node.k1o(keyPositionMask)) {
      var keyIndex = node.i1o(keyPositionMask);
      $this.r1n_1[pathIndex].g1o(node.s1m_1, imul(get_ENTRY_SIZE(), node.j1o()), keyIndex);
      $this.s1n_1 = pathIndex;
      return Unit_getInstance();
    }
    var nodeIndex = node.l1o(keyPositionMask);
    var targetNode = node.m1o(nodeIndex);
    $this.r1n_1[pathIndex].g1o(node.s1m_1, imul(get_ENTRY_SIZE(), node.j1o()), nodeIndex);
    resetPath($this, keyHash, targetNode, key, pathIndex + 1 | 0);
  }
  function checkNextWasInvoked($this) {
    if (!$this.z1n_1)
      throw IllegalStateException_init_$Create$_0();
  }
  function checkForComodification($this) {
    if (!($this.x1n_1.h1n_1 === $this.a1o_1))
      throw ConcurrentModificationException_init_$Create$();
  }
  function PersistentHashMapBuilderBaseIterator(builder, path) {
    PersistentHashMapBaseIterator.call(this, builder.f1n_1, path);
    this.x1n_1 = builder;
    this.y1n_1 = null;
    this.z1n_1 = false;
    this.a1o_1 = this.x1n_1.h1n_1;
  }
  protoOf(PersistentHashMapBuilderBaseIterator).e = function () {
    checkForComodification(this);
    this.y1n_1 = this.c1o();
    this.z1n_1 = true;
    return protoOf(PersistentHashMapBaseIterator).e.call(this);
  };
  protoOf(PersistentHashMapBuilderBaseIterator).e7 = function () {
    checkNextWasInvoked(this);
    if (this.d()) {
      var currentKey = this.c1o();
      // Inline function 'kotlin.collections.remove' call
      var tmp0_remove = this.x1n_1;
      var tmp1_remove = this.y1n_1;
      (isInterface(tmp0_remove, MutableMap) ? tmp0_remove : THROW_CCE()).j8(tmp1_remove);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = currentKey == null ? null : hashCode(currentKey);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$1, this.x1n_1.f1n_1, currentKey, 0);
    } else {
      // Inline function 'kotlin.collections.remove' call
      var tmp2_remove = this.x1n_1;
      var tmp3_remove = this.y1n_1;
      (isInterface(tmp2_remove, MutableMap) ? tmp2_remove : THROW_CCE()).j8(tmp3_remove);
    }
    this.y1n_1 = null;
    this.z1n_1 = false;
    this.a1o_1 = this.x1n_1.h1n_1;
  };
  protoOf(PersistentHashMapBuilderBaseIterator).b1o = function (key, newValue) {
    if (!this.x1n_1.f2(key))
      return Unit_getInstance();
    if (this.d()) {
      var currentKey = this.c1o();
      // Inline function 'kotlin.collections.set' call
      this.x1n_1.g3(key, newValue);
      var tmp$ret$0;
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = currentKey == null ? null : hashCode(currentKey);
      tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$0, this.x1n_1.f1n_1, currentKey, 0);
    } else {
      // Inline function 'kotlin.collections.set' call
      this.x1n_1.g3(key, newValue);
    }
    this.a1o_1 = this.x1n_1.h1n_1;
  };
  function TrieNodeMutableEntriesIterator(parentIterator) {
    TrieNodeBaseIterator.call(this);
    this.q1o_1 = parentIterator;
  }
  protoOf(TrieNodeMutableEntriesIterator).e = function () {
    assert(this.r1o());
    this.f1o_1 = this.f1o_1 + 2 | 0;
    var tmp = this.d1o_1[this.f1o_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp_1 = this.d1o_1[this.f1o_1 - 1 | 0];
    return new MutableMapEntry(this.q1o_1, tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
  };
  function MutableMapEntry(parentIterator, key, value) {
    MapEntry.call(this, key, value);
    this.y1o_1 = parentIterator;
    this.z1o_1 = value;
  }
  protoOf(MutableMapEntry).w1 = function () {
    return this.z1o_1;
  };
  protoOf(MutableMapEntry).a8 = function (newValue) {
    var result = this.z1o_1;
    this.z1o_1 = newValue;
    this.y1o_1.b1o(this.u1(), newValue);
    return result;
  };
  function PersistentHashMapBuilderEntries(builder) {
    AbstractMapBuilderEntries.call(this);
    this.c1p_1 = builder;
  }
  protoOf(PersistentHashMapBuilderEntries).s8 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderEntries).a = function (element) {
    return this.s8((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderEntries).f7 = function () {
    this.c1p_1.f7();
  };
  protoOf(PersistentHashMapBuilderEntries).c = function () {
    return new PersistentHashMapBuilderEntriesIterator(this.c1p_1);
  };
  protoOf(PersistentHashMapBuilderEntries).c8 = function (element) {
    return this.c1p_1.o1n(element.u1(), element.w1());
  };
  protoOf(PersistentHashMapBuilderEntries).f = function () {
    return this.c1p_1.f();
  };
  protoOf(PersistentHashMapBuilderEntries).b8 = function (element) {
    var tmp0_safe_receiver = this.c1p_1.l2(element.u1());
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderEntries.containsEntry.<anonymous>' call
      tmp = equals(tmp0_safe_receiver, element.w1());
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? element.w1() == null ? this.c1p_1.f2(element.u1()) : false : tmp1_elvis_lhs;
  };
  function PersistentHashMapBuilderKeys(builder) {
    AbstractMutableSet.call(this);
    this.d1p_1 = builder;
  }
  protoOf(PersistentHashMapBuilderKeys).e8 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderKeys).a = function (element) {
    return this.e8((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).f7 = function () {
    this.d1p_1.f7();
  };
  protoOf(PersistentHashMapBuilderKeys).c = function () {
    return new PersistentHashMapBuilderKeysIterator(this.d1p_1);
  };
  protoOf(PersistentHashMapBuilderKeys).j8 = function (element) {
    if (this.d1p_1.f2(element)) {
      this.d1p_1.j8(element);
      return true;
    }
    return false;
  };
  protoOf(PersistentHashMapBuilderKeys).c7 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.j8((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderKeys).f = function () {
    return this.d1p_1.f();
  };
  protoOf(PersistentHashMapBuilderKeys).c2 = function (element) {
    return this.d1p_1.f2(element);
  };
  protoOf(PersistentHashMapBuilderKeys).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.c2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function PersistentHashMapBuilderValues(builder) {
    AbstractMutableCollection.call(this);
    this.e1p_1 = builder;
  }
  protoOf(PersistentHashMapBuilderValues).f = function () {
    return this.e1p_1.f();
  };
  protoOf(PersistentHashMapBuilderValues).i2 = function (element) {
    return this.e1p_1.j2(element);
  };
  protoOf(PersistentHashMapBuilderValues).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.i2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).l8 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(PersistentHashMapBuilderValues).a = function (element) {
    return this.l8((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapBuilderValues).c = function () {
    return new PersistentHashMapBuilderValuesIterator(this.e1p_1);
  };
  function AbstractMapBuilderEntries() {
    AbstractMutableSet.call(this);
  }
  protoOf(AbstractMapBuilderEntries).m = function (element) {
    var tmp = isObject(element) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.b8(element);
  };
  protoOf(AbstractMapBuilderEntries).c7 = function (element) {
    var tmp = isObject(element) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.c8(element);
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapValuesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(8), null);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeEntriesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.r1n_1[pathIndex].r1o()) {
      return pathIndex;
    }
    if ($this.r1n_1[pathIndex].t1o()) {
      var node = $this.r1n_1[pathIndex].u1o();
      if (pathIndex === 6) {
        $this.r1n_1[pathIndex + 1 | 0].s1o(node.s1m_1, node.s1m_1.length);
      } else {
        $this.r1n_1[pathIndex + 1 | 0].s1o(node.s1m_1, imul(get_ENTRY_SIZE(), node.j1o()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.r1n_1[$this.s1n_1].r1o()) {
      return Unit_getInstance();
    }
    var inductionVariable = $this.s1n_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 ? $this.r1n_1[i].t1o() : false) {
          $this.r1n_1[i].v1o();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.s1n_1 = result;
          return Unit_getInstance();
        }
        if (i > 0) {
          $this.r1n_1[i - 1 | 0].v1o();
        }
        $this.r1n_1[i].s1o(Companion_getInstance_8().k1m_1.s1m_1, 0);
      }
       while (0 <= inductionVariable);
    $this.t1n_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.d())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.r1n_1 = path;
    this.s1n_1 = 0;
    this.t1n_1 = true;
    this.r1n_1[0].s1o(node.s1m_1, imul(get_ENTRY_SIZE(), node.j1o()));
    this.s1n_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).c1o = function () {
    checkHasNext(this);
    return this.r1n_1[this.s1n_1].c1o();
  };
  protoOf(PersistentHashMapBaseIterator).d = function () {
    return this.t1n_1;
  };
  protoOf(PersistentHashMapBaseIterator).e = function () {
    checkHasNext(this);
    var result = this.r1n_1[this.s1n_1].e();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.d1o_1 = Companion_getInstance_8().k1m_1.s1m_1;
    this.e1o_1 = 0;
    this.f1o_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).g1o = function (buffer, dataSize, index) {
    this.d1o_1 = buffer;
    this.e1o_1 = dataSize;
    this.f1o_1 = index;
  };
  protoOf(TrieNodeBaseIterator).s1o = function (buffer, dataSize) {
    this.g1o(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).r1o = function () {
    return this.f1o_1 < this.e1o_1;
  };
  protoOf(TrieNodeBaseIterator).c1o = function () {
    assert(this.r1o());
    var tmp = this.d1o_1[this.f1o_1];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).h1o = function () {
    assert(this.r1o());
    this.f1o_1 = this.f1o_1 + 2 | 0;
  };
  protoOf(TrieNodeBaseIterator).t1o = function () {
    assert(this.f1o_1 >= this.e1o_1);
    return this.f1o_1 < this.d1o_1.length;
  };
  protoOf(TrieNodeBaseIterator).u1o = function () {
    assert(this.t1o());
    var tmp = this.d1o_1[this.f1o_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).v1o = function () {
    assert(this.t1o());
    this.f1o_1 = this.f1o_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).d = function () {
    return this.r1o();
  };
  function get_TRIE_MAX_HEIGHT() {
    return TRIE_MAX_HEIGHT;
  }
  var TRIE_MAX_HEIGHT;
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).e = function () {
    assert(this.r1o());
    this.f1o_1 = this.f1o_1 + 2 | 0;
    var tmp = this.d1o_1[this.f1o_1 - 2 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).e = function () {
    assert(this.r1o());
    this.f1o_1 = this.f1o_1 + 2 | 0;
    var tmp = this.d1o_1[this.f1o_1 - 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).e = function () {
    assert(this.r1o());
    this.f1o_1 = this.f1o_1 + 2 | 0;
    var tmp = this.d1o_1[this.f1o_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp_1 = this.d1o_1[this.f1o_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.a1p_1 = key;
    this.b1p_1 = value;
  }
  protoOf(MapEntry).u1 = function () {
    return this.a1p_1;
  };
  protoOf(MapEntry).w1 = function () {
    return this.b1p_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.u1();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.w1();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp = equals(tmp0_safe_receiver.u1(), this.u1()) ? equals(tmp0_safe_receiver.w1(), this.w1()) : false;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.u1()) + '=' + toString_0(this.w1());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.o1p_1 = map;
  }
  protoOf(PersistentHashMapKeys).f = function () {
    return this.o1p_1.f();
  };
  protoOf(PersistentHashMapKeys).c2 = function (element) {
    return this.o1p_1.f2(element);
  };
  protoOf(PersistentHashMapKeys).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.c2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).c = function () {
    return new PersistentHashMapKeysIterator(this.o1p_1.n1m_1);
  };
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.p1p_1 = map;
  }
  protoOf(PersistentHashMapValues).f = function () {
    return this.p1p_1.f();
  };
  protoOf(PersistentHashMapValues).i2 = function (element) {
    return this.p1p_1.j2(element);
  };
  protoOf(PersistentHashMapValues).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.i2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapValues).c = function () {
    return new PersistentHashMapValuesIterator(this.p1p_1.n1m_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.q1p_1 = map;
  }
  protoOf(PersistentHashMapEntries).f = function () {
    return this.q1p_1.f();
  };
  protoOf(PersistentHashMapEntries).r1p = function (element) {
    var tmp = isObject(element) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.q1p_1.l2(element.u1());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp_0 = equals(tmp0_safe_receiver, element.w1());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.w1() == null ? this.q1p_1.f2(element.u1()) : false : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).m = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.r1p((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).c = function () {
    return new PersistentHashMapEntriesIterator(this.q1p_1.n1m_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.w1m_1 = node;
    this.x1m_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.q1m_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.s1m_1[keyIndex];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.s1m_1[keyIndex + 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.i1o(positionMask);
    var newBuffer = insertEntryAtIndex($this.s1m_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.p1m_1 | positionMask, $this.q1m_1, newBuffer);
  }
  function mutableInsertEntryAt($this, positionMask, key, value, owner) {
    var keyIndex = $this.i1o(positionMask);
    if ($this.r1m_1 === owner) {
      $this.s1m_1 = insertEntryAtIndex($this.s1m_1, keyIndex, key, value);
      $this.p1m_1 = $this.p1m_1 | positionMask;
      return $this;
    }
    var newBuffer = insertEntryAtIndex($this.s1m_1, keyIndex, key, value);
    return new TrieNode($this.p1m_1 | positionMask, $this.q1m_1, newBuffer, owner);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.s1m_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.p1m_1, $this.q1m_1, newBuffer);
  }
  function mutableUpdateValueAtIndex($this, keyIndex, value, mutator) {
    if ($this.r1m_1 === mutator.e1n_1) {
      $this.s1m_1[keyIndex + 1 | 0] = value;
      return $this;
    }
    mutator.h1n_1 = mutator.h1n_1 + 1 | 0;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.s1m_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return new TrieNode($this.p1m_1, $this.q1m_1, newBuffer, mutator.e1n_1);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.s1m_1;
    if (newNodeBuffer.length === 2 ? newNode.q1m_1 === 0 : false) {
      if ($this.s1m_1.length === 1) {
        newNode.p1m_1 = $this.q1m_1;
        return newNode;
      }
      var keyIndex = $this.i1o(positionMask);
      var newBuffer = replaceNodeWithEntry($this.s1m_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.p1m_1 ^ positionMask, $this.q1m_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.s1m_1, $this.s1m_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.p1m_1, $this.q1m_1, newBuffer_0);
  }
  function mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) {
    if (($this.s1m_1.length === 1 ? newNode.s1m_1.length === 2 : false) ? newNode.q1m_1 === 0 : false) {
      newNode.p1m_1 = $this.q1m_1;
      return newNode;
    }
    if ($this.r1m_1 === owner) {
      $this.s1m_1[nodeIndex] = newNode;
      return $this;
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.s1m_1.slice();
    newBuffer[nodeIndex] = newNode;
    return new TrieNode($this.p1m_1, $this.q1m_1, newBuffer, owner);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.s1m_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.s1m_1, nodeIndex);
    return TrieNode_init_$Create$($this.p1m_1, $this.q1m_1 ^ positionMask, newBuffer);
  }
  function mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) {
    if ($this.s1m_1.length === 1)
      return null;
    if ($this.r1m_1 === owner) {
      $this.s1m_1 = removeNodeAtIndex_0($this.s1m_1, nodeIndex);
      $this.q1m_1 = $this.q1m_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeNodeAtIndex_0($this.s1m_1, nodeIndex);
    return new TrieNode($this.p1m_1, $this.q1m_1 ^ positionMask, newBuffer, owner);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.l1o(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.s1m_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.p1m_1 ^ positionMask, $this.q1m_1 | positionMask, newBuffer);
  }
  function mutableMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    if ($this.r1m_1 === owner) {
      $this.s1m_1 = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
      $this.p1m_1 = $this.p1m_1 ^ positionMask;
      $this.q1m_1 = $this.q1m_1 | positionMask;
      return $this;
    }
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
    return new TrieNode($this.p1m_1 ^ positionMask, $this.q1m_1 | positionMask, newBuffer, owner);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment(keyHash1, shift);
    var setBit2 = indexSegment(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key1, value1, key2, value2];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    var tmp$ret$11;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$11 = [node];
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.s1m_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.s1m_1, keyIndex);
    return TrieNode_init_$Create$($this.p1m_1 ^ positionMask, $this.q1m_1, newBuffer);
  }
  function mutableRemoveEntryAtIndex($this, keyIndex, positionMask, mutator) {
    var tmp1 = mutator.f();
    mutator.j1n(tmp1 - 1 | 0);
    mutator.g1n_1 = valueAtKeyIndex($this, keyIndex);
    if ($this.s1m_1.length === 2)
      return null;
    if ($this.r1m_1 === mutator.e1n_1) {
      $this.s1m_1 = removeEntryAtIndex_0($this.s1m_1, keyIndex);
      $this.p1m_1 = $this.p1m_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.s1m_1, keyIndex);
    return new TrieNode($this.p1m_1 ^ positionMask, $this.q1m_1, newBuffer, mutator.e1n_1);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.s1m_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.s1m_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function mutableCollisionRemoveEntryAtIndex($this, i, mutator) {
    var tmp1 = mutator.f();
    mutator.j1n(tmp1 - 1 | 0);
    mutator.g1n_1 = valueAtKeyIndex($this, i);
    if ($this.s1m_1.length === 2)
      return null;
    if ($this.r1m_1 === mutator.e1n_1) {
      $this.s1m_1 = removeEntryAtIndex_0($this.s1m_1, i);
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.s1m_1, i);
    return new TrieNode(0, 0, newBuffer, mutator.e1n_1);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.s1m_1.length), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.s1m_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.s1m_1.length), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.s1m_1.length), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.s1m_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.s1m_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function mutableCollisionPut($this, key, value, mutator) {
    var progression = step(until(0, $this.s1m_1.length), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          mutator.g1n_1 = valueAtKeyIndex($this, i);
          if ($this.r1m_1 === mutator.e1n_1) {
            $this.s1m_1[i + 1 | 0] = value;
            return $this;
          }
          mutator.h1n_1 = mutator.h1n_1 + 1 | 0;
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.s1m_1.slice();
          newBuffer[i + 1 | 0] = value;
          return new TrieNode(0, 0, newBuffer, mutator.e1n_1);
        }
      }
       while (!(i === last));
    var tmp4 = mutator.f();
    mutator.j1n(tmp4 + 1 | 0);
    var newBuffer_0 = insertEntryAtIndex($this.s1m_1, 0, key, value);
    return new TrieNode(0, 0, newBuffer_0, mutator.e1n_1);
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.s1m_1.length), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove($this, key, mutator) {
    var progression = step(until(0, $this.s1m_1.length), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove_0($this, key, value, mutator) {
    var progression = step(until(0, $this.s1m_1.length), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i)) ? equals(value, valueAtKeyIndex($this, i)) : false) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionPutAll($this, otherNode, intersectionCounter, owner) {
    assert($this.q1m_1 === 0);
    assert($this.p1m_1 === 0);
    assert(otherNode.q1m_1 === 0);
    assert(otherNode.p1m_1 === 0);
    var tempBuffer = copyOf_0($this.s1m_1, $this.s1m_1.length + otherNode.s1m_1.length | 0);
    var i = $this.s1m_1.length;
    var progression = step(until(0, otherNode.s1m_1.length), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        var tmp = otherNode.s1m_1[j];
        if (!collisionContainsKey($this, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE())) {
          tempBuffer[i] = otherNode.s1m_1[j];
          tempBuffer[i + 1 | 0] = otherNode.s1m_1[j + 1 | 0];
          i = i + 2 | 0;
        } else {
          intersectionCounter.m1n_1 = intersectionCounter.m1n_1 + 1 | 0;
        }
      }
       while (!(j === last));
    var newSize = i;
    return newSize === $this.s1m_1.length ? $this : newSize === otherNode.s1m_1.length ? otherNode : newSize === tempBuffer.length ? new TrieNode(0, 0, tempBuffer, owner) : new TrieNode(0, 0, copyOf_0(tempBuffer, newSize), owner);
  }
  function mutablePutAllFromOtherNodeCell($this, otherNode, positionMask, shift, intersectionCounter, mutator) {
    var tmp;
    if (hasNodeAt($this, positionMask)) {
      var targetNode = $this.m1o($this.l1o(positionMask));
      var tmp_0;
      if (hasNodeAt(otherNode, positionMask)) {
        var otherTargetNode = otherNode.m1o(otherNode.l1o(positionMask));
        tmp_0 = targetNode.l1n(otherTargetNode, shift + 5 | 0, intersectionCounter, mutator);
      } else if (otherNode.k1o(positionMask)) {
        var keyIndex = otherNode.i1o(positionMask);
        var key = keyAtIndex(otherNode, keyIndex);
        var value = valueAtKeyIndex(otherNode, keyIndex);
        var oldSize = mutator.f();
        // Inline function 'kotlin.also' call
        var tmp$ret$0;
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs = key == null ? null : hashCode(key);
        tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var tmp0_also = targetNode.k1n(tmp$ret$0, key, value, shift + 5 | 0, mutator);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAllFromOtherNodeCell.<anonymous>' call
        if (mutator.f() === oldSize) {
          intersectionCounter.m1n_1 = intersectionCounter.m1n_1 + 1 | 0;
        }
        tmp_0 = tmp0_also;
      } else {
        tmp_0 = targetNode;
      }
      tmp = tmp_0;
    } else if (hasNodeAt(otherNode, positionMask)) {
      var otherTargetNode_0 = otherNode.m1o(otherNode.l1o(positionMask));
      var tmp_1;
      if ($this.k1o(positionMask)) {
        var keyIndex_0 = $this.i1o(positionMask);
        var key_0 = keyAtIndex($this, keyIndex_0);
        var tmp_2;
        var tmp$ret$2;
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs_0 = key_0 == null ? null : hashCode(key_0);
        tmp$ret$2 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
        if (otherTargetNode_0.t1m(tmp$ret$2, key_0, shift + 5 | 0)) {
          intersectionCounter.m1n_1 = intersectionCounter.m1n_1 + 1 | 0;
          tmp_2 = otherTargetNode_0;
        } else {
          var value_0 = valueAtKeyIndex($this, keyIndex_0);
          var tmp$ret$3;
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs_1 = key_0 == null ? null : hashCode(key_0);
          tmp$ret$3 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
          tmp_2 = otherTargetNode_0.k1n(tmp$ret$3, key_0, value_0, shift + 5 | 0, mutator);
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = otherTargetNode_0;
      }
      tmp = tmp_1;
    } else {
      var thisKeyIndex = $this.i1o(positionMask);
      var thisKey = keyAtIndex($this, thisKeyIndex);
      var thisValue = valueAtKeyIndex($this, thisKeyIndex);
      var otherKeyIndex = otherNode.i1o(positionMask);
      var otherKey = keyAtIndex(otherNode, otherKeyIndex);
      var otherValue = valueAtKeyIndex(otherNode, otherKeyIndex);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs_2 = thisKey == null ? null : hashCode(thisKey);
      var tmp_3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
      var tmp$ret$5;
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs_3 = otherKey == null ? null : hashCode(otherKey);
      tmp$ret$5 = tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3;
      tmp = makeNode($this, tmp_3, thisKey, thisValue, tmp$ret$5, otherKey, otherValue, shift + 5 | 0, mutator.e1n_1);
    }
    return tmp;
  }
  function calculateSize($this) {
    if ($this.q1m_1 === 0)
      return $this.s1m_1.length / 2 | 0;
    var numValues = countOneBits($this.p1m_1);
    var result = numValues;
    var inductionVariable = imul(numValues, 2);
    var last = $this.s1m_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + calculateSize($this.m1o(i)) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function elementsIdentityEquals($this, otherNode) {
    if ($this === otherNode)
      return true;
    if (!($this.q1m_1 === otherNode.q1m_1))
      return false;
    if (!($this.p1m_1 === otherNode.p1m_1))
      return false;
    var inductionVariable = 0;
    var last = $this.s1m_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!($this.s1m_1[i] === otherNode.s1m_1[i]))
          return false;
      }
       while (inductionVariable < last);
    return true;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function mutableReplaceNode($this, targetNode, newNode, nodeIndex, positionMask, owner) {
    return newNode == null ? mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) : ($this.r1m_1 === owner ? true : !(targetNode === newNode)) ? mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) : $this;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    tmp.k1m_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_6;
  function Companion_getInstance_8() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_8();
    this.p1m_1 = dataMap;
    this.q1m_1 = nodeMap;
    this.r1m_1 = ownedBy;
    this.s1m_1 = buffer;
  }
  protoOf(TrieNode).j1o = function () {
    return countOneBits(this.p1m_1);
  };
  protoOf(TrieNode).k1o = function (positionMask) {
    return !((this.p1m_1 & positionMask) === 0);
  };
  protoOf(TrieNode).i1o = function (positionMask) {
    return imul(2, countOneBits(this.p1m_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).l1o = function (positionMask) {
    return (this.s1m_1.length - 1 | 0) - countOneBits(this.q1m_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).m1o = function (nodeIndex) {
    var tmp = this.s1m_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).t1m = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.k1o(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.i1o(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.m1o(this.l1o(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.t1m(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).u1m = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.k1o(keyPositionMask)) {
      var keyIndex = this.i1o(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.m1o(this.l1o(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.u1m(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).l1n = function (otherNode, shift, intersectionCounter, mutator) {
    if (this === otherNode) {
      intersectionCounter.s1p(calculateSize(this));
      return this;
    }
    if (shift > 30) {
      return mutableCollisionPutAll(this, otherNode, intersectionCounter, mutator.e1n_1);
    }
    var newNodeMap = this.q1m_1 | otherNode.q1m_1;
    var newDataMap = (this.p1m_1 ^ otherNode.p1m_1) & ~newNodeMap;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask = this.p1m_1 & otherNode.p1m_1;
    var index = 0;
    while (!(mask === 0)) {
      var bit = takeLowestOneBit(mask);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var leftKey = keyAtIndex(this, this.i1o(bit));
      var rightKey = keyAtIndex(otherNode, otherNode.i1o(bit));
      if (equals(leftKey, rightKey))
        newDataMap = newDataMap | bit;
      else
        newNodeMap = newNodeMap | bit;
      index = index + 1 | 0;
      mask = mask ^ bit;
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((newNodeMap & newDataMap) === 0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if ((equals(this.r1m_1, mutator.e1n_1) ? this.p1m_1 === newDataMap : false) ? this.q1m_1 === newNodeMap : false) {
      tmp = this;
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp3_arrayOfNulls = imul(countOneBits(newDataMap), 2) + countOneBits(newNodeMap) | 0;
      var newBuffer = fillArrayVal(Array(tmp3_arrayOfNulls), null);
      tmp = TrieNode_init_$Create$(newDataMap, newNodeMap, newBuffer);
    }
    var mutableNode = tmp;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask_0 = newNodeMap;
    var index_0 = 0;
    while (!(mask_0 === 0)) {
      var bit_0 = takeLowestOneBit(mask_0);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp5_anonymous = index_0;
      var newNodeIndex = (mutableNode.s1m_1.length - 1 | 0) - tmp5_anonymous | 0;
      mutableNode.s1m_1[newNodeIndex] = mutablePutAllFromOtherNodeCell(this, otherNode, bit_0, shift, intersectionCounter, mutator);
      index_0 = index_0 + 1 | 0;
      mask_0 = mask_0 ^ bit_0;
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var mask_1 = newDataMap;
    var index_1 = 0;
    while (!(mask_1 === 0)) {
      var bit_1 = takeLowestOneBit(mask_1);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp7_anonymous = index_1;
      var newKeyIndex = imul(tmp7_anonymous, 2);
      if (!otherNode.k1o(bit_1)) {
        var oldKeyIndex = this.i1o(bit_1);
        mutableNode.s1m_1[newKeyIndex] = keyAtIndex(this, oldKeyIndex);
        mutableNode.s1m_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(this, oldKeyIndex);
      } else {
        var oldKeyIndex_0 = otherNode.i1o(bit_1);
        mutableNode.s1m_1[newKeyIndex] = keyAtIndex(otherNode, oldKeyIndex_0);
        mutableNode.s1m_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(otherNode, oldKeyIndex_0);
        if (this.k1o(bit_1)) {
          intersectionCounter.m1n_1 = intersectionCounter.m1n_1 + 1 | 0;
        }
      }
      index_1 = index_1 + 1 | 0;
      mask_1 = mask_1 ^ bit_1;
    }
    return elementsIdentityEquals(this, mutableNode) ? this : elementsIdentityEquals(otherNode, mutableNode) ? otherNode : mutableNode;
  };
  protoOf(TrieNode).v1m = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.k1o(keyPositionMask)) {
      var keyIndex = this.i1o(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.l1o(keyPositionMask);
      var targetNode = this.m1o(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.v1m(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var tmp0_anonymous = putResult.w1m_1;
      tmp_2.w1m_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, tmp0_anonymous);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).k1n = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.k1o(keyPositionMask)) {
      var keyIndex = this.i1o(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        mutator.g1n_1 = valueAtKeyIndex(this, keyIndex);
        if (valueAtKeyIndex(this, keyIndex) === value) {
          return this;
        }
        return mutableUpdateValueAtIndex(this, keyIndex, value, mutator);
      }
      var tmp1 = mutator.f();
      mutator.j1n(tmp1 + 1 | 0);
      return mutableMoveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift, mutator.e1n_1);
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.l1o(keyPositionMask);
      var targetNode = this.m1o(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionPut(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.k1n(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      if (targetNode === newNode) {
        return this;
      }
      return mutableUpdateNodeAtIndex(this, nodeIndex, newNode, mutator.e1n_1);
    }
    var tmp3 = mutator.f();
    mutator.j1n(tmp3 + 1 | 0);
    return mutableInsertEntryAt(this, keyPositionMask, key, value, mutator.e1n_1);
  };
  protoOf(TrieNode).y1m = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.k1o(keyPositionMask)) {
      var keyIndex = this.i1o(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.l1o(keyPositionMask);
      var targetNode = this.m1o(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.y1m(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  protoOf(TrieNode).n1n = function (keyHash, key, shift, mutator) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.k1o(keyPositionMask)) {
      var keyIndex = this.i1o(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.l1o(keyPositionMask);
      var targetNode = this.m1o(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove(targetNode, key, mutator);
      } else {
        tmp = targetNode.n1n(keyHash, key, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.e1n_1);
    }
    return this;
  };
  protoOf(TrieNode).p1n = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment(keyHash, shift);
    if (this.k1o(keyPositionMask)) {
      var keyIndex = this.i1o(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex)) ? equals(value, valueAtKeyIndex(this, keyIndex)) : false) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.l1o(keyPositionMask);
      var targetNode = this.m1o(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove_0(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.p1n(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.e1n_1);
    }
    return this;
  };
  function get_ENTRY_SIZE() {
    return ENTRY_SIZE;
  }
  var ENTRY_SIZE;
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length + 2 | 0;
    var newBuffer = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp1_copyInto, keyIndex, tmp2_copyInto);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = nodeIndex + 2 | 0;
    var tmp1_copyInto = nodeIndex + 1 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, tmp0_copyInto, tmp1_copyInto, tmp2_copyInto);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, tmp3_copyInto, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length - 1 | 0;
    var newBuffer = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = nodeIndex + 1 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, tmp1_copyInto, tmp2_copyInto);
    return newBuffer;
  }
  function get_LOG_MAX_BRANCHING_FACTOR() {
    return LOG_MAX_BRANCHING_FACTOR;
  }
  var LOG_MAX_BRANCHING_FACTOR;
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    var newBuffer = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp1_copyInto, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = newNodeIndex + 1 | 0;
    var tmp3_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp2_copyInto, nodeIndex, tmp3_copyInto);
    return newBuffer;
  }
  function get_MAX_SHIFT() {
    return MAX_SHIFT;
  }
  var MAX_SHIFT;
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length - 2 | 0;
    var newBuffer = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp1_copyInto, tmp2_copyInto);
    return newBuffer;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.g1m_1 = new PersistentOrderedSet(EndOfChain_getInstance(), EndOfChain_getInstance(), Companion_getInstance_7().j1m());
  }
  protoOf(Companion_7).h1m = function () {
    return this.g1m_1;
  };
  var Companion_instance_7;
  function Companion_getInstance_9() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_9();
    AbstractSet.call(this);
    this.t1p_1 = firstElement;
    this.u1p_1 = lastElement;
    this.v1p_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).f = function () {
    return this.v1p_1.f();
  };
  protoOf(PersistentOrderedSet).m = function (element) {
    return this.v1p_1.f2(element);
  };
  protoOf(PersistentOrderedSet).a = function (element) {
    if (this.v1p_1.f2(element)) {
      return this;
    }
    if (this.k()) {
      var newMap = this.v1p_1.g3(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.u1p_1;
    var lastElement = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.v1p_1.l2(lastElement));
    var newMap_0 = this.v1p_1.g3(lastElement, lastLinks.y1p(element)).g3(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.t1p_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).c7 = function (element) {
    var tmp0_elvis_lhs = this.v1p_1.l2(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.v1p_1.j8(element);
    if (links.z1p()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.get' call
      var tmp0_get = newMap;
      var tmp1_get = links.w1p_1;
      tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).l2(tmp1_get);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.w1p_1;
      newMap = tmp_0.g3((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), previousLinks.y1p(links.x1p_1));
    }
    if (links.b1q()) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.get' call
      var tmp2_get = newMap;
      var tmp3_get = links.x1p_1;
      tmp$ret$1 = (isInterface(tmp2_get, Map) ? tmp2_get : THROW_CCE()).l2(tmp3_get);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.x1p_1;
      newMap = tmp_2.g3((tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE(), nextLinks.a1q(links.w1p_1));
    }
    var newFirstElement = !links.z1p() ? links.x1p_1 : this.t1p_1;
    var newLastElement = !links.b1q() ? links.w1p_1 : this.u1p_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).c = function () {
    return new PersistentOrderedSetIterator(this.t1p_1, this.v1p_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_getInstance(), EndOfChain_getInstance());
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_getInstance());
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.w1p_1 = previous;
    this.x1p_1 = next;
  }
  protoOf(Links).y1p = function (newNext) {
    return new Links(this.w1p_1, newNext);
  };
  protoOf(Links).a1q = function (newPrevious) {
    return new Links(newPrevious, this.x1p_1);
  };
  protoOf(Links).b1q = function () {
    return !(this.x1p_1 === EndOfChain_getInstance());
  };
  protoOf(Links).z1p = function () {
    return !(this.w1p_1 === EndOfChain_getInstance());
  };
  function checkHasNext_0($this) {
    if (!$this.d())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.c1q_1 = nextElement;
    this.d1q_1 = map;
    this.e1q_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).d = function () {
    return this.e1q_1 < this.d1q_1.f();
  };
  protoOf(PersistentOrderedSetIterator).e = function () {
    checkHasNext_0(this);
    var tmp = this.c1q_1;
    var result = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    this.e1q_1 = this.e1q_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_elvis_lhs = this.d1q_1.l2(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + result + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.c1q_1 = tmp_1.x1p_1;
    return result;
  };
  function EndOfChain() {
    EndOfChain_instance = this;
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    if (EndOfChain_instance == null)
      new EndOfChain();
    return EndOfChain_instance;
  }
  function MutabilityOwnership() {
  }
  function DeltaCounter(count) {
    count = count === VOID ? 0 : count;
    this.m1n_1 = count;
  }
  protoOf(DeltaCounter).s1p = function (that) {
    this.m1n_1 = this.m1n_1 + that | 0;
  };
  protoOf(DeltaCounter).toString = function () {
    return 'DeltaCounter(count=' + this.m1n_1 + ')';
  };
  protoOf(DeltaCounter).hashCode = function () {
    return this.m1n_1;
  };
  protoOf(DeltaCounter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeltaCounter))
      return false;
    var tmp0_other_with_cast = other instanceof DeltaCounter ? other : THROW_CCE();
    if (!(this.m1n_1 === tmp0_other_with_cast.m1n_1))
      return false;
    return true;
  };
  function assert(condition) {
  }
  function composableLambdaInstance(key, tracked, block) {
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new ComposableLambdaImpl(key, tracked);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.internal.composableLambdaInstance.<anonymous>' call
    tmp0_apply.k1q(block);
    return tmp0_apply;
  }
  function replacableWith(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = (!_this__u8e3s4.l1c() ? true : equals(_this__u8e3s4, other)) ? true : equals(_this__u8e3s4.my_1, other.my_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function composableLambda(composer, key, tracked, block) {
    composer.yy(key);
    var slot = composer.nz();
    var tmp;
    if (slot === Companion_getInstance_1().sy_1) {
      var value = new ComposableLambdaImpl(key, tracked);
      composer.oz(value);
      tmp = value;
    } else {
      tmp = slot instanceof ComposableLambdaImpl ? slot : THROW_CCE();
    }
    var result = tmp;
    result.k1q(block);
    composer.zy();
    return result;
  }
  function Builder(map) {
    PersistentHashMapBuilder.call(this, map);
    this.v1q_1 = map;
    this.w1q_1 = 8;
  }
  protoOf(Builder).ia = function () {
    var tmp = this;
    var tmp_0;
    if (this.f1n_1 === this.v1q_1.n1m_1) {
      tmp_0 = this.v1q_1;
    } else {
      this.e1n_1 = new MutabilityOwnership();
      tmp_0 = new PersistentCompositionLocalHashMap(this.f1n_1, this.f());
    }
    tmp.v1q_1 = tmp_0;
    return this.v1q_1;
  };
  function Companion_8() {
    Companion_instance_8 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_8().k1m_1;
    tmp.x1q_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
  }
  var Companion_instance_8;
  function Companion_getInstance_10() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function PersistentCompositionLocalHashMap(node, size) {
    Companion_getInstance_10();
    PersistentHashMap.call(this, node, size);
  }
  protoOf(PersistentCompositionLocalHashMap).x1 = function () {
    return protoOf(PersistentHashMap).x1.call(this);
  };
  protoOf(PersistentCompositionLocalHashMap).c1r = function (key) {
    return read(this, key);
  };
  protoOf(PersistentCompositionLocalHashMap).j14 = function () {
    return new Builder(this);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_10().x1q_1;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_kt__klyo00();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_3($this, key) {
    var high = $this.g1l_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.h1l_1[0].equals(key) ? 0 : $this.h1l_1[0].s(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.h1l_1[mid];
      var comparison = midVal.n5(key);
      if (comparison.s(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.s(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.g1l_1 = size;
    this.h1l_1 = keys;
    this.i1l_1 = values;
  }
  protoOf(ThreadMap).j1l = function (key) {
    var index = find_3(this, key);
    return index >= 0 ? this.i1l_1[index] : null;
  };
  protoOf(ThreadMap).k1l = function (key, value) {
    var index = find_3(this, key);
    if (index < 0)
      return false;
    this.i1l_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).l1l = function (key, value) {
    var size = this.g1l_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.i1l_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.internal.ThreadMap.newWith.<anonymous>' call
      if (!(element == null)) {
        count = count + 1 | 0;
      }
    }
    var newSize = count + 1 | 0;
    var newKeys = longArray(newSize);
    // Inline function 'kotlin.arrayOfNulls' call
    var newValues = fillArrayVal(Array(newSize), null);
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize ? source < size : false) {
        var oldKey = this.h1l_1[source];
        var oldValue = this.i1l_1[source];
        if (oldKey.s(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          dest = dest + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          dest = dest + 1 | 0;
        }
        source = source + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.h1l_1[source];
          var oldValue_0 = this.i1l_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            dest = dest + 1 | 0;
          }
          source = source + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_ThreadMap_kt_kd2vq6;
  function _init_properties_ThreadMap_kt__klyo00() {
    if (!properties_initialized_ThreadMap_kt_kd2vq6) {
      properties_initialized_ThreadMap_kt_kd2vq6 = true;
      var tmp = longArray(0);
      var tmp$ret$0;
      // Inline function 'kotlin.emptyArray' call
      tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
    }
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
  function fastToSet(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var tmp0_also = HashSet_init_$Create$_0(_this__u8e3s4.f());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.l(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        tmp0_also.a(item);
      }
       while (inductionVariable <= last);
    return tmp0_also;
  }
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_extraStateObjects() {
    _init_properties_Snapshot_kt__l6n1ng();
    return extraStateObjects;
  }
  var extraStateObjects;
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    _init_properties_Snapshot_kt__l6n1ng();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function get_pendingApplyObserverCount() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pendingApplyObserverCount;
  }
  var pendingApplyObserverCount;
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.d1r_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).dj = function () {
    return this.d1r_1();
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.e1r_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).dj = function () {
    return this.e1r_1();
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_applyObservers().c7($observer);
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return Unit_getInstance();
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>.<anonymous>' call
      tmp$ret$0 = get_globalWriteObservers().c7($observer);
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      advanceGlobalSnapshot_0();
      return Unit_getInstance();
    };
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  protoOf(Companion_9).dw = function () {
    return currentSnapshot();
  };
  protoOf(Companion_9).u1h = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f1r(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot create a mutable snapshot of an read-only snapshot');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_9).g1r = function (readObserver, writeObserver, block) {
    if (!(readObserver == null) ? true : !(writeObserver == null)) {
      var currentSnapshot = get_threadSnapshot().yk();
      var tmp;
      var tmp_0;
      if (currentSnapshot == null) {
        tmp_0 = true;
      } else {
        tmp_0 = currentSnapshot instanceof MutableSnapshot;
      }
      if (tmp_0) {
        tmp = new TransparentObserverMutableSnapshot(currentSnapshot instanceof MutableSnapshot ? currentSnapshot : null, readObserver, writeObserver, true, false);
      } else {
        if (readObserver == null) {
          return block();
        } else {
          tmp = currentSnapshot.h1r(readObserver);
        }
      }
      var snapshot = tmp;
      try {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.v1h();
          try {
            tmp$ret$0 = block();
            break $l$block;
          }finally {
            snapshot.w1h(previous);
          }
        }
        return tmp$ret$0;
      }finally {
        snapshot.dj();
      }
    } else
      return block();
  };
  protoOf(Companion_9).i1r = function () {
    return createTransparentSnapshotWithNoParentReadObserver(get_threadSnapshot().yk());
  };
  protoOf(Companion_9).v1j = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerApplyObserver.<anonymous>' call
    get_applyObservers().a(observer);
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_9).j1r = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>' call
    get_globalWriteObservers().a(observer);
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_9).t1g = function () {
    return currentSnapshot().t1g();
  };
  protoOf(Companion_9).s1g = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().yk().k1r();
    var changes = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g17()) === true;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_9;
  function Companion_getInstance_11() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Snapshot(id, invalid) {
    Companion_getInstance_11();
    this.q17_1 = invalid;
    this.r17_1 = id;
    this.s17_1 = false;
    this.t17_1 = !(id === 0) ? trackPinning(id, this.l1r()) : -1;
    this.u17_1 = 8;
  }
  protoOf(Snapshot).m1r = function (_set____db54di) {
    this.q17_1 = _set____db54di;
  };
  protoOf(Snapshot).l1r = function () {
    return this.q17_1;
  };
  protoOf(Snapshot).n1r = function (_set____db54di) {
    this.r17_1 = _set____db54di;
  };
  protoOf(Snapshot).v17 = function () {
    return this.r17_1;
  };
  protoOf(Snapshot).o1r = function (value) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('Updating write count is not supported for this snapshot');
  };
  protoOf(Snapshot).p1r = function () {
    return 0;
  };
  protoOf(Snapshot).dj = function () {
    this.s17_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.r1r();
  };
  protoOf(Snapshot).v1h = function () {
    var previous = get_threadSnapshot().yk();
    get_threadSnapshot().x1e(this);
    return previous;
  };
  protoOf(Snapshot).w1h = function (snapshot) {
    get_threadSnapshot().x1e(snapshot);
  };
  protoOf(Snapshot).x1r = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.y1r();
    this.z1r();
  };
  protoOf(Snapshot).y1r = function () {
    set_openSnapshots(get_openSnapshots().e1s(this.v17()));
  };
  protoOf(Snapshot).z1r = function () {
    this.r1r();
  };
  protoOf(Snapshot).f1s = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.s17_1) {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      var message = 'Cannot use a disposed snapshot';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(Snapshot).r1r = function () {
    if (this.t17_1 >= 0) {
      releasePinningLocked(this.t17_1);
      this.t17_1 = -1;
    }
  };
  protoOf(Snapshot).g1s = function () {
    // Inline function 'kotlin.also' call
    var tmp0_also = this.t17_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.t17_1 = -1;
    return tmp0_also;
  };
  function StateObject() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($tmp0_safe_receiver) {
    return function (state) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $tmp0_safe_receiver.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $tmp0_safe_receiver.l(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function GlobalSnapshot$takeNestedSnapshot$lambda($readObserver) {
    return function (invalid) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      tmp$ret$0 = tmp0;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      return new ReadonlySnapshot(tmp$ret$3, invalid, $readObserver);
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      tmp$ret$0 = tmp0;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      return new MutableSnapshot(tmp$ret$3, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!get_globalWriteObservers().k()) {
      tmp = toMutableList(get_globalWriteObservers());
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
      var tmp0_elvis_lhs = singleOrNull(tmp0_safe_receiver);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp_1 = GlobalSnapshot$_init_$lambda_36kgl8(tmp0_safe_receiver);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp_0 = tmp_1;
    }
    tmp$ret$6 = tmp_0;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$6);
  }
  protoOf(GlobalSnapshot).h1r = function (readObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedSnapshot$lambda(readObserver));
  };
  protoOf(GlobalSnapshot).f1r = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).t1g = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).w1s = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).v1r = function (snapshot) {
    return this.w1s(snapshot);
  };
  protoOf(GlobalSnapshot).x1s = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).u1r = function (snapshot) {
    return this.x1s(snapshot);
  };
  protoOf(GlobalSnapshot).m1i = function () {
    throw IllegalStateException_init_$Create$('Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot');
  };
  protoOf(GlobalSnapshot).dj = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.r1r();
  };
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.f1t(id);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    return get_pinningTable().l1t(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().m1t(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().yk();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().yk() : tmp0_elvis_lhs;
  }
  function validateNotApplied($this) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.k1i_1) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      var message = 'Unsupported operation on a snapshot that has been applied';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function validateNotAppliedOrPinned($this) {
    // Inline function 'kotlin.check' call
    var tmp;
    if (!$this.k1i_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = $this.t17_1 >= 0;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      var message = 'Unsupported operation on a disposed or applied snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function abandon($this) {
    var modified = $this.k1r();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.e1t(null);
      var id = $this.v17();
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = modified.d17_1;
      var inductionVariable = 0;
      var last = modified.c17_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.abandon.<anonymous>' call
          var tmp = values[i];
          var current = (isObject(tmp) ? tmp : THROW_CCE()).d1l();
          while (!(current == null)) {
            if (current.n1t_1 === id ? true : contains($this.h1i_1, current.n1t_1)) {
              current.n1t_1 = 0;
            }
            current = current.o1t_1;
          }
        }
         while (inductionVariable < last);
    }
    $this.x1r();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.i1i_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.i1i_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.q1t_1 = new Int32Array(0);
  }
  var Companion_instance_10;
  function Companion_getInstance_12() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Companion_getInstance_12();
    Snapshot.call(this, id, invalid);
    this.c1i_1 = readObserver;
    this.d1i_1 = writeObserver;
    this.e1i_1 = 0;
    this.f1i_1 = null;
    this.g1i_1 = null;
    this.h1i_1 = Companion_getInstance_13().r1t_1;
    this.i1i_1 = Companion_getInstance_12().q1t_1;
    this.j1i_1 = 1;
    this.k1i_1 = false;
    this.l1i_1 = 8;
  }
  protoOf(MutableSnapshot).s1r = function () {
    return this.c1i_1;
  };
  protoOf(MutableSnapshot).t1r = function () {
    return this.d1i_1;
  };
  protoOf(MutableSnapshot).f1r = function (readObserver, writeObserver) {
    this.f1s();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.a1t(this.v17());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().s1t(newId));
    var currentInvalid = this.l1r();
    this.m1r(currentInvalid.s1t(newId));
    var tmp0_also = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.v17() + 1 | 0, newId), mergedReadObserver(readObserver, this.s1r()), mergedWriteObserver(writeObserver, this.t1r()), this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.k1i_1 ? !this.s17_1 : false) {
      var previousId = this.v17();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.n1r(tmp0_0);
      set_openSnapshots(get_openSnapshots().s1t(this.v17()));
      this.m1r(addRange(this.l1r(), previousId + 1 | 0, this.v17()));
    }
    return tmp0_also;
  };
  protoOf(MutableSnapshot).m1i = function () {
    var modified = this.k1r();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().yk(), this, get_openSnapshots().e1s(get_currentGlobalSnapshot().yk().v17())) : null;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    validateOpen(this);
    var tmp;
    if (modified == null ? true : modified.c17_1 === 0) {
      this.y1r();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().yk();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var previousModified = previousGlobalSnapshot.k1r();
      var tmp_0;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(previousModified == null ? true : previousModified.k())) {
        observers = toMutableList(get_applyObservers());
        globalModified = previousModified;
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().yk();
      var result = this.y1s(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().e1s(previousGlobalSnapshot_0.v17()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.y1r();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var previousModified_0 = previousGlobalSnapshot_0.k1r();
      this.e1t(null);
      previousGlobalSnapshot_0.e1t(null);
      observers = toMutableList(get_applyObservers());
      globalModified = previousModified_0;
      tmp = Unit_getInstance();
    }
    this.k1i_1 = true;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var tmp0_isNullOrEmpty = globalModified;
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp0_isNullOrEmpty == null ? true : tmp0_isNullOrEmpty.k())) {
      var nonNullGlobalModified = ensureNotNull(globalModified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var tmp1_fastForEach = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp1_fastForEach.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp1_fastForEach.l(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item(nonNullGlobalModified, this);
        }
         while (inductionVariable <= last);
    }
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(modified == null ? true : modified.k())) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var tmp2_fastForEach = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp2_fastForEach.f() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = tmp2_fastForEach.l(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modified, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z1r();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver.d17_1;
      var inductionVariable_1 = 0;
      var last_1 = tmp0_safe_receiver.c17_1;
      if (inductionVariable_1 < last_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_1 = values[i];
          var tmp0_anonymous = isObject(tmp_1) ? tmp_1 : THROW_CCE();
          processForUnusedRecordsLocked(tmp0_anonymous);
        }
         while (inductionVariable_1 < last_1);
    }
    if (modified == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values_0 = modified.d17_1;
      var inductionVariable_2 = 0;
      var last_2 = modified.c17_1;
      if (inductionVariable_2 < last_2)
        do {
          var i_0 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          var tmp_2 = values_0[i_0];
          var tmp1_anonymous = isObject(tmp_2) ? tmp_2 : THROW_CCE();
          processForUnusedRecordsLocked(tmp1_anonymous);
        }
         while (inductionVariable_2 < last_2);
    }
    var tmp2_safe_receiver = this.g1i_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_3 = 0;
      var last_3 = tmp2_safe_receiver.f() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        do {
          var index_1 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var item_1 = tmp2_safe_receiver.l(index_1);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_3 <= last_3);
    }
    this.g1i_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).q1r = function () {
    return false;
  };
  protoOf(MutableSnapshot).dj = function () {
    if (!this.s17_1) {
      protoOf(Snapshot).dj.call(this);
      this.v1r(this);
    }
  };
  protoOf(MutableSnapshot).h1r = function (readObserver) {
    this.f1s();
    validateNotAppliedOrPinned(this);
    var previousId = this.v17();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.a1t(this.v17());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var readonlyId = tmp0;
    set_openSnapshots(get_openSnapshots().s1t(readonlyId));
    var tmp0_also = new NestedReadonlySnapshot(readonlyId, addRange(this.l1r(), previousId + 1 | 0, readonlyId), readObserver, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.k1i_1 ? !this.s17_1 : false) {
      var previousId_0 = this.v17();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.n1r(tmp0_0);
      set_openSnapshots(get_openSnapshots().s1t(this.v17()));
      this.m1r(addRange(this.l1r(), previousId_0 + 1 | 0, this.v17()));
    }
    return tmp0_also;
  };
  protoOf(MutableSnapshot).u1r = function (snapshot) {
    this.j1i_1 = this.j1i_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).v1r = function (snapshot) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j1i_1 > 0)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.j1i_1 = this.j1i_1 - 1 | 0;
    if (this.j1i_1 === 0) {
      if (!this.k1i_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).t1g = function () {
    if (this.k1i_1 ? true : this.s17_1)
      return Unit_getInstance();
    this.z1s();
  };
  protoOf(MutableSnapshot).y1r = function () {
    set_openSnapshots(get_openSnapshots().e1s(this.v17()).t1t(this.h1i_1));
  };
  protoOf(MutableSnapshot).z1r = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).z1r.call(this);
  };
  protoOf(MutableSnapshot).y1s = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.l1r().s1t(this.v17()).u1t(this.h1i_1);
    var modified = ensureNotNull(this.k1r());
    var statesToRemove = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.d17_1;
    var inductionVariable = 0;
    var last = modified.c17_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
          var tmp = values[i];
          var tmp0_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          var first = tmp0_anonymous.d1l();
          var tmp0_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, this.v17(), start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, this.v17(), this.l1r());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.l2(current);
            var tmp_3;
            if (tmp4_elvis_lhs == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
              tmp_3 = tmp0_anonymous.f1l(previous, current, applied);
            } else {
              tmp_3 = tmp4_elvis_lhs;
            }
            var merged = tmp_3;
            if (merged == null)
              return new Failure(this);
            else if (!equals(merged, applied))
              if (equals(merged, current)) {
                var tmp6_elvis_lhs = mergedRecords;
                var tmp_4;
                if (tmp6_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var tmp0_also = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = tmp0_also;
                  tmp_4 = tmp0_also;
                } else {
                  tmp_4 = tmp6_elvis_lhs;
                }
                tmp_4.a(to(tmp0_anonymous, current.a1l()));
                var tmp7_elvis_lhs = statesToRemove;
                var tmp_5;
                if (tmp7_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var tmp1_also = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  statesToRemove = tmp1_also;
                  tmp_5 = tmp1_also;
                } else {
                  tmp_5 = tmp7_elvis_lhs;
                }
                tmp_5.a(tmp0_anonymous);
              } else {
                var tmp8_elvis_lhs = mergedRecords;
                var tmp_6;
                if (tmp8_elvis_lhs == null) {
                  // Inline function 'kotlin.also' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var tmp2_also = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                  mergedRecords = tmp2_also;
                  tmp_6 = tmp2_also;
                } else {
                  tmp_6 = tmp8_elvis_lhs;
                }
                tmp_6.a(!equals(merged, previous) ? to(tmp0_anonymous, merged) : to(tmp0_anonymous, previous.a1l()));
              }
          }
        }
      }
       while (inductionVariable < last);
    var tmp0_safe_receiver = mergedRecords;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.z1s();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver.f() - 1 | 0;
      var tmp_7;
      if (inductionVariable_0 <= last_0) {
        do {
          var index = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item = tmp0_safe_receiver.l(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var state = item.e3();
          var stateRecord = item.f3();
          stateRecord.n1t_1 = this.v17();
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.synchronized' call
          get_lock();
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          stateRecord.o1t_1 = state.d1l();
          state.e1l(stateRecord);
        }
         while (inductionVariable_0 <= last_0);
        tmp_7 = Unit_getInstance();
      }
    }
    var tmp1_safe_receiver = statesToRemove;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last_1 = tmp1_safe_receiver.f() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_0 = tmp1_safe_receiver.l(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          modified.p1l(item_0);
        }
         while (inductionVariable_1 <= last_1);
      var mergedList = this.g1i_1;
      this.g1i_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).z1s = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.a1t(this.v17());
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.k1i_1 ? !this.s17_1 : false) {
      var previousId = this.v17();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.n1r(tmp0);
      set_openSnapshots(get_openSnapshots().s1t(this.v17()));
      this.m1r(addRange(this.l1r(), previousId + 1 | 0, this.v17()));
    }
    return Unit_getInstance();
  };
  protoOf(MutableSnapshot).a1t = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.h1i_1 = this.h1i_1.s1t(id);
  };
  protoOf(MutableSnapshot).b1t = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      var tmp0_plus = this.i1i_1;
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.intArrayOf' call
      var tmp0_plus_0 = new Int32Array([id]);
      tmp.i1i_1 = primitiveArrayConcat([tmp0_plus, tmp0_plus_0]);
    }
  };
  protoOf(MutableSnapshot).c1t = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_getInstance();
    var pinned = this.i1i_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.i1i_1 = tmp_0;
  };
  protoOf(MutableSnapshot).d1t = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.h1i_1 = this.h1i_1.u1t(snapshots);
  };
  protoOf(MutableSnapshot).w1r = function (state) {
    var tmp0_elvis_lhs = this.k1r();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.e1t(tmp0_also);
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.f18(state);
  };
  protoOf(MutableSnapshot).o1r = function (_set____db54di) {
    this.e1i_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).p1r = function () {
    return this.e1i_1;
  };
  protoOf(MutableSnapshot).e1t = function (_set____db54di) {
    this.f1i_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).k1r = function () {
    return this.f1i_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
    this.w1t_1 = 0;
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.y1t_1 = snapshot;
    this.z1t_1 = 8;
  }
  function SnapshotApplyResult() {
    this.a1u_1 = 0;
  }
  function _get_currentSnapshot__9vker0($this) {
    var tmp0_elvis_lhs = $this.q1u_1;
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().yk() : tmp0_elvis_lhs;
  }
  function TransparentObserverMutableSnapshot(parentSnapshot, specifiedReadObserver, specifiedWriteObserver, mergeParentObservers, ownsParentSnapshot) {
    var tmp = Companion_getInstance_13().r1t_1;
    var tmp1_elvis_lhs = parentSnapshot == null ? null : parentSnapshot.s1r();
    var tmp_0 = mergedReadObserver(specifiedReadObserver, tmp1_elvis_lhs == null ? get_currentGlobalSnapshot().yk().s1r() : tmp1_elvis_lhs, mergeParentObservers);
    var tmp3_elvis_lhs = parentSnapshot == null ? null : parentSnapshot.t1r();
    MutableSnapshot.call(this, 0, tmp, tmp_0, mergedWriteObserver(specifiedWriteObserver, tmp3_elvis_lhs == null ? get_currentGlobalSnapshot().yk().t1r() : tmp3_elvis_lhs));
    this.q1u_1 = parentSnapshot;
    this.r1u_1 = mergeParentObservers;
    this.s1u_1 = ownsParentSnapshot;
  }
  protoOf(TransparentObserverMutableSnapshot).dj = function () {
    this.s17_1 = true;
    if (this.s1u_1) {
      var tmp0_safe_receiver = this.q1u_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.dj();
      }
    }
  };
  protoOf(TransparentObserverMutableSnapshot).n1r = function (value) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).v17 = function () {
    return _get_currentSnapshot__9vker0(this).v17();
  };
  protoOf(TransparentObserverMutableSnapshot).m1r = function (value) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).l1r = function () {
    return _get_currentSnapshot__9vker0(this).l1r();
  };
  protoOf(TransparentObserverMutableSnapshot).e1t = function (value) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).k1r = function () {
    return _get_currentSnapshot__9vker0(this).k1r();
  };
  protoOf(TransparentObserverMutableSnapshot).o1r = function (value) {
    _get_currentSnapshot__9vker0(this).o1r(value);
  };
  protoOf(TransparentObserverMutableSnapshot).p1r = function () {
    return _get_currentSnapshot__9vker0(this).p1r();
  };
  protoOf(TransparentObserverMutableSnapshot).q1r = function () {
    return _get_currentSnapshot__9vker0(this).q1r();
  };
  protoOf(TransparentObserverMutableSnapshot).m1i = function () {
    return _get_currentSnapshot__9vker0(this).m1i();
  };
  protoOf(TransparentObserverMutableSnapshot).w1r = function (state) {
    return _get_currentSnapshot__9vker0(this).w1r(state);
  };
  protoOf(TransparentObserverMutableSnapshot).h1r = function (readObserver) {
    var mergedReadObserver_0 = mergedReadObserver(readObserver, this.s1r());
    var tmp;
    if (!this.r1u_1) {
      tmp = createTransparentSnapshotWithNoParentReadObserver(_get_currentSnapshot__9vker0(this).h1r(null), mergedReadObserver_0, true);
    } else {
      tmp = _get_currentSnapshot__9vker0(this).h1r(mergedReadObserver_0);
    }
    return tmp;
  };
  protoOf(TransparentObserverMutableSnapshot).f1r = function (readObserver, writeObserver) {
    var mergedReadObserver_0 = mergedReadObserver(readObserver, this.s1r());
    var mergedWriteObserver_0 = mergedWriteObserver(writeObserver, this.t1r());
    var tmp;
    if (!this.r1u_1) {
      var nestedSnapshot = _get_currentSnapshot__9vker0(this).f1r(null, mergedWriteObserver_0);
      tmp = new TransparentObserverMutableSnapshot(nestedSnapshot, mergedReadObserver_0, mergedWriteObserver_0, false, true);
    } else {
      tmp = _get_currentSnapshot__9vker0(this).f1r(mergedReadObserver_0, mergedWriteObserver_0);
    }
    return tmp;
  };
  protoOf(TransparentObserverMutableSnapshot).t1g = function () {
    return _get_currentSnapshot__9vker0(this).t1g();
  };
  protoOf(TransparentObserverMutableSnapshot).x1s = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).u1r = function (snapshot) {
    return this.x1s(snapshot);
  };
  protoOf(TransparentObserverMutableSnapshot).w1s = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverMutableSnapshot).v1r = function (snapshot) {
    return this.w1s(snapshot);
  };
  function createTransparentSnapshotWithNoParentReadObserver(previousSnapshot, readObserver, ownsPreviousSnapshot) {
    readObserver = readObserver === VOID ? null : readObserver;
    ownsPreviousSnapshot = ownsPreviousSnapshot === VOID ? false : ownsPreviousSnapshot;
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    var tmp_0;
    if (previousSnapshot instanceof MutableSnapshot) {
      tmp_0 = true;
    } else {
      tmp_0 = previousSnapshot == null;
    }
    if (tmp_0) {
      tmp = new TransparentObserverMutableSnapshot(previousSnapshot instanceof MutableSnapshot ? previousSnapshot : null, readObserver, null, false, ownsPreviousSnapshot);
    } else {
      tmp = new TransparentObserverSnapshot(previousSnapshot, readObserver, false, ownsPreviousSnapshot);
    }
    return tmp;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var modified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().yk();
    modified = previousGlobalSnapshot.k1r();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().l1t(1);
    }
    var result = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    var tmp0_safe_receiver = modified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      try {
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        get_lock();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
        var observers = toMutableList(get_applyObservers());
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = observers.f() - 1 | 0;
        var tmp_1;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.l(index);
            // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
            item(tmp0_safe_receiver, previousGlobalSnapshot);
          }
           while (inductionVariable <= last);
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      }finally {
        get_pendingApplyObserverCount().l1t(-1);
      }
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver_0 = modified;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_safe_receiver_0.d17_1;
      var inductionVariable_0 = 0;
      var last_0 = tmp0_safe_receiver_0.c17_1;
      if (inductionVariable_0 < last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
          var tmp_3 = values[i];
          var tmp0_anonymous = isObject(tmp_3) ? tmp_3 : THROW_CCE();
          processForUnusedRecordsLocked(tmp0_anonymous);
        }
         while (inductionVariable_0 < last_0);
      tmp_2 = Unit_getInstance();
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function StateRecord() {
    this.n1t_1 = currentSnapshot().v17();
    this.o1t_1 = null;
    this.p1t_1 = 8;
  }
  function ReadonlySnapshot(id, invalid, readObserver) {
    Snapshot.call(this, id, invalid);
    this.z1u_1 = readObserver;
    this.a1v_1 = 1;
  }
  protoOf(ReadonlySnapshot).s1r = function () {
    return this.z1u_1;
  };
  protoOf(ReadonlySnapshot).q1r = function () {
    return true;
  };
  protoOf(ReadonlySnapshot).t1r = function () {
    return null;
  };
  protoOf(ReadonlySnapshot).h1r = function (readObserver) {
    validateOpen(this);
    return new NestedReadonlySnapshot(this.v17(), this.l1r(), readObserver, this);
  };
  protoOf(ReadonlySnapshot).t1g = function () {
  };
  protoOf(ReadonlySnapshot).dj = function () {
    if (!this.s17_1) {
      this.v1r(this);
      protoOf(Snapshot).dj.call(this);
    }
  };
  protoOf(ReadonlySnapshot).u1r = function (snapshot) {
    this.a1v_1 = this.a1v_1 + 1 | 0;
  };
  protoOf(ReadonlySnapshot).v1r = function (snapshot) {
    this.a1v_1 = this.a1v_1 - 1 | 0;
    if (this.a1v_1 === 0) {
      this.x1r();
    }
  };
  protoOf(ReadonlySnapshot).w1r = function (state) {
    reportReadonlySnapshotWrite();
  };
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function deactivate($this) {
    if (!$this.r1v_1) {
      $this.r1v_1 = true;
      $this.q1v_1.v1r($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.q1v_1 = parent;
    this.r1v_1 = false;
    this.q1v_1.u1r(this);
  }
  protoOf(NestedMutableSnapshot).dj = function () {
    if (!this.s17_1) {
      protoOf(MutableSnapshot).dj.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).m1i = function () {
    if (this.q1v_1.k1i_1 ? true : this.q1v_1.s17_1)
      return new Failure(this);
    var modified = this.k1r();
    var id = this.v17();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.q1v_1, this, this.q1v_1.l1r()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    validateOpen(this);
    if (modified == null ? true : modified.c17_1 === 0) {
      this.x1r();
    } else {
      var result = this.y1s(this.q1v_1.v17(), optimisticMerges_0, this.q1v_1.l1r());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.q1v_1.k1r();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.u1g(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.q1v_1.e1t(modified);
        this.e1t(null);
      }
    }
    if (this.q1v_1.v17() < id) {
      this.q1v_1.z1s();
    }
    this.q1v_1.m1r(this.q1v_1.l1r().e1s(id).t1t(this.h1i_1));
    this.q1v_1.a1t(id);
    this.q1v_1.b1t(this.g1s());
    this.q1v_1.d1t(this.h1i_1);
    this.q1v_1.c1t(this.i1i_1);
    this.k1i_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.s1t(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if ((!(readObserver == null) ? !(parentObserver_0 == null) : false) ? !equals(readObserver, parentObserver_0) : false) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      tmp = readObserver == null ? parentObserver_0 : readObserver;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if ((!(writeObserver == null) ? !(parentObserver == null) : false) ? !equals(writeObserver, parentObserver) : false) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      tmp = writeObserver == null ? parentObserver : writeObserver;
    }
    return tmp;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.k1r();
    var id = currentSnapshot.v17();
    if (modified == null)
      return null;
    var start = applyingSnapshot.l1r().s1t(applyingSnapshot.v17()).u1t(applyingSnapshot.h1i_1);
    var result = null;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var values = modified.d17_1;
    var inductionVariable = 0;
    var last = modified.c17_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
          var tmp = values[i];
          var tmp0_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          var first = tmp0_anonymous.d1l();
          var tmp0_elvis_lhs = readable(first, id, invalidSnapshots);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var current = tmp_0;
          var tmp1_elvis_lhs = readable(first, id, start);
          var tmp_1;
          if (tmp1_elvis_lhs == null) {
            break $l$block_0;
          } else {
            tmp_1 = tmp1_elvis_lhs;
          }
          var previous = tmp_1;
          if (!equals(current, previous)) {
            var tmp2_elvis_lhs = readable(first, applyingSnapshot.v17(), applyingSnapshot.l1r());
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              readError();
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }
            var applied = tmp_2;
            var merged = tmp0_anonymous.f1l(previous, current, applied);
            if (!(merged == null)) {
              // Inline function 'kotlin.collections.set' call
              var tmp3_elvis_lhs = result;
              var tmp_3;
              if (tmp3_elvis_lhs == null) {
                // Inline function 'kotlin.also' call
                // Inline function 'kotlin.collections.hashMapOf' call
                var tmp0_also = HashMap_init_$Create$();
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>.<anonymous>' call
                result = tmp0_also;
                tmp_3 = tmp0_also;
              } else {
                tmp_3 = tmp3_elvis_lhs;
              }
              tmp_3.g3(current, merged);
            } else {
              return null;
            }
          }
        }
      }
       while (inductionVariable < last);
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (!get_openSnapshots().l(snapshot.v17())) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Snapshot is not open');
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().e1s(previousGlobalSnapshot.v17()));
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().e1s(previousGlobalSnapshot.v17()));
    get_currentGlobalSnapshot().n1c(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.dj();
    set_openSnapshots(get_openSnapshots().s1t(globalId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var tmp0_removeIf = get_extraStateObjects();
    var size = tmp0_removeIf.s1v_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = tmp0_removeIf.u1v_1[i];
        var value = entry == null ? null : entry.yk();
        var tmp;
        if (!(value == null)) {
          // Inline function 'androidx.compose.runtime.snapshots.checkAndOverwriteUnusedRecordsLocked.<anonymous>' call
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            tmp0_removeIf.u1v_1[currentUsed] = entry;
            tmp0_removeIf.t1v_1[currentUsed] = tmp0_removeIf.t1v_1[i];
          }
          currentUsed = currentUsed + 1 | 0;
        }
      }
       while (inductionVariable < size);
    var inductionVariable_0 = currentUsed;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        tmp0_removeIf.u1v_1[i_0] = null;
        tmp0_removeIf.t1v_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      tmp0_removeIf.s1v_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().f18(state);
    }
  }
  function NestedReadonlySnapshot$readObserver$lambda($readObserver, $tmp0_safe_receiver) {
    return function (state) {
      $readObserver(state);
      $tmp0_safe_receiver(state);
      return Unit_getInstance();
    };
  }
  function NestedReadonlySnapshot(id, invalid, readObserver, parent) {
    Snapshot.call(this, id, invalid);
    this.b1w_1 = parent;
    this.b1w_1.u1r(this);
    var tmp = this;
    var tmp_0;
    if (readObserver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.NestedReadonlySnapshot.readObserver.<anonymous>' call
      var tmp0_safe_receiver = this.b1w_1.s1r();
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedReadonlySnapshot.readObserver.<anonymous>.<anonymous>' call
        tmp_1 = NestedReadonlySnapshot$readObserver$lambda(readObserver, tmp0_safe_receiver);
      }
      var tmp1_elvis_lhs = tmp_1;
      tmp_0 = tmp1_elvis_lhs == null ? readObserver : tmp1_elvis_lhs;
    }
    var tmp1_elvis_lhs_0 = tmp_0;
    tmp.c1w_1 = tmp1_elvis_lhs_0 == null ? this.b1w_1.s1r() : tmp1_elvis_lhs_0;
  }
  protoOf(NestedReadonlySnapshot).q1r = function () {
    return true;
  };
  protoOf(NestedReadonlySnapshot).h1r = function (readObserver) {
    return new NestedReadonlySnapshot(this.v17(), this.l1r(), readObserver, this.b1w_1);
  };
  protoOf(NestedReadonlySnapshot).t1g = function () {
  };
  protoOf(NestedReadonlySnapshot).s1r = function () {
    return this.c1w_1;
  };
  protoOf(NestedReadonlySnapshot).dj = function () {
    if (!this.s17_1) {
      if (!(this.v17() === this.b1w_1.v17())) {
        this.x1r();
      }
      this.b1w_1.v1r(this);
      protoOf(Snapshot).dj.call(this);
    }
  };
  protoOf(NestedReadonlySnapshot).t1r = function () {
    return null;
  };
  protoOf(NestedReadonlySnapshot).d1w = function (state) {
    reportReadonlySnapshotWrite();
  };
  protoOf(NestedReadonlySnapshot).w1r = function (state) {
    return this.d1w(state);
  };
  protoOf(NestedReadonlySnapshot).w1s = function (snapshot) {
    unsupported();
  };
  protoOf(NestedReadonlySnapshot).v1r = function (snapshot) {
    return this.w1s(snapshot);
  };
  protoOf(NestedReadonlySnapshot).x1s = function (snapshot) {
    unsupported();
  };
  protoOf(NestedReadonlySnapshot).u1r = function (snapshot) {
    return this.x1s(snapshot);
  };
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.n1t_1 < current.n1t_1 ? current : candidate;
      }
      current = current.o1t_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(tmp0_error));
  }
  function _get_currentSnapshot__9vker0_0($this) {
    var tmp0_elvis_lhs = $this.j1w_1;
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().yk() : tmp0_elvis_lhs;
  }
  function TransparentObserverSnapshot(previousSnapshot, specifiedReadObserver, mergeParentObservers, ownsPreviousSnapshot) {
    Snapshot.call(this, 0, Companion_getInstance_13().r1t_1);
    this.j1w_1 = previousSnapshot;
    this.k1w_1 = mergeParentObservers;
    this.l1w_1 = ownsPreviousSnapshot;
    var tmp = this;
    var tmp0_safe_receiver = this.j1w_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1r();
    tmp.m1w_1 = mergedReadObserver(specifiedReadObserver, tmp1_elvis_lhs == null ? get_currentGlobalSnapshot().yk().s1r() : tmp1_elvis_lhs, this.k1w_1);
    this.n1w_1 = null;
    this.o1w_1 = this;
  }
  protoOf(TransparentObserverSnapshot).s1r = function () {
    return this.m1w_1;
  };
  protoOf(TransparentObserverSnapshot).t1r = function () {
    return this.n1w_1;
  };
  protoOf(TransparentObserverSnapshot).dj = function () {
    this.s17_1 = true;
    if (this.l1w_1) {
      var tmp0_safe_receiver = this.j1w_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.dj();
      }
    }
  };
  protoOf(TransparentObserverSnapshot).v17 = function () {
    return _get_currentSnapshot__9vker0_0(this).v17();
  };
  protoOf(TransparentObserverSnapshot).l1r = function () {
    return _get_currentSnapshot__9vker0_0(this).l1r();
  };
  protoOf(TransparentObserverSnapshot).q1r = function () {
    return _get_currentSnapshot__9vker0_0(this).q1r();
  };
  protoOf(TransparentObserverSnapshot).w1r = function (state) {
    return _get_currentSnapshot__9vker0_0(this).w1r(state);
  };
  protoOf(TransparentObserverSnapshot).h1r = function (readObserver) {
    var mergedReadObserver_0 = mergedReadObserver(readObserver, this.m1w_1);
    var tmp;
    if (!this.k1w_1) {
      tmp = createTransparentSnapshotWithNoParentReadObserver(_get_currentSnapshot__9vker0_0(this).h1r(null), mergedReadObserver_0, true);
    } else {
      tmp = _get_currentSnapshot__9vker0_0(this).h1r(mergedReadObserver_0);
    }
    return tmp;
  };
  protoOf(TransparentObserverSnapshot).t1g = function () {
    return _get_currentSnapshot__9vker0_0(this).t1g();
  };
  protoOf(TransparentObserverSnapshot).x1s = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverSnapshot).u1r = function (snapshot) {
    return this.x1s(snapshot);
  };
  protoOf(TransparentObserverSnapshot).w1s = function (snapshot) {
    unsupported();
  };
  protoOf(TransparentObserverSnapshot).v1r = function (snapshot) {
    return this.w1s(snapshot);
  };
  function reportReadonlySnapshotWrite() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('Cannot modify a state object in a read-only snapshot');
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.d1l();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().p1w(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.n1t_1;
      if (!(currentId === 0)) {
        if (currentId < reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            if (current.n1t_1 < validRecord.n1t_1) {
              tmp = current;
            } else {
              var result = validRecord;
              validRecord = current;
              tmp = result;
            }
            var recordToOverwrite = tmp;
            if (overwriteRecord == null) {
              var tmp$ret$1;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.findYoungestOr' call
                var tmp0_findYoungestOr = state.d1l();
                var current_0 = tmp0_findYoungestOr;
                var youngest = tmp0_findYoungestOr;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
                  if (current_0.n1t_1 >= reuseLimit) {
                    tmp$ret$1 = current_0;
                    break $l$block;
                  }
                  if (youngest.n1t_1 < current_0.n1t_1)
                    youngest = current_0;
                  current_0 = current_0.o1t_1;
                }
                tmp$ret$1 = youngest;
              }
              overwriteRecord = tmp$ret$1;
            }
            recordToOverwrite.n1t_1 = 0;
            recordToOverwrite.z1k(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.o1t_1;
    }
    return retainedRecords > 1;
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.n1t_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return (!(candidateSnapshot === 0) ? candidateSnapshot <= currentSnapshot : false) ? !invalid.l(candidateSnapshot) : false;
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_getInstance_11().dw();
    var tmp0_safe_receiver = snapshot.s1r();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.v17(), snapshot.l1r());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_getInstance_11().dw();
      var tmp_0 = state.d1l();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.v17(), syncSnapshot.l1r());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.let' call
    var tmp0_let = Companion_getInstance_11().dw();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var tmp0_elvis_lhs = readable(r, tmp0_let.v17(), tmp0_let.l1r());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = Companion_getInstance_11().dw();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      tmp = readable(r, tmp0_let_0.v17(), tmp0_let_0.l1r());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    snapshot.o1r(snapshot.p1r() + 1 | 0);
    var tmp1_safe_receiver = snapshot.t1r();
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.q1r()) {
      snapshot.w1r(state);
    }
    var id = snapshot.v17();
    if (candidate.n1t_1 === id)
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.n1t_1 = id;
    snapshot.w1r(state);
    return newData;
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_safe_receiver.n1t_1 = IntCompanionObject_getInstance().MAX_VALUE;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var tmp0_apply = _this__u8e3s4.a1l();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_apply.n1t_1 = IntCompanionObject_getInstance().MAX_VALUE;
      tmp0_apply.o1t_1 = state.d1l();
      state.e1l(tmp0_apply instanceof StateRecord ? tmp0_apply : THROW_CCE());
      var tmp_2 = tmp0_apply;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.d1l();
    var validRecord = null;
    var reuseLimit = get_pinningTable().p1w(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_13().r1t_1;
    while (!(current == null)) {
      var currentId = current.n1t_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.n1t_1 < validRecord.n1t_1 ? current : validRecord;
        }
      }
      current = current.o1t_1;
    }
    return null;
  }
  function newWritableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.newWritableRecord.<anonymous>' call
    return newWritableRecordLocked(_this__u8e3s4, state, snapshot);
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.q1r()) {
      snapshot.w1r(state);
    }
    var id = snapshot.v17();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.l1r());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.n1t_1 === snapshot.v17())
      return readData;
    var newData = newWritableRecord(readData, state, snapshot);
    snapshot.w1r(state);
    return newData;
  }
  function newWritableRecordLocked(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.z1k(_this__u8e3s4);
    newData.n1t_1 = snapshot.v17();
    return newData;
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_getInstance();
  }
  function advanceGlobalSnapshot$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_getInstance();
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      set_openSnapshots(get_openSnapshots().s1t(result.v17()));
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return result;
    };
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_getInstance();
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (!properties_initialized_Snapshot_kt_2vlcoq) {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = createSynchronizedObject();
      openSnapshots = Companion_getInstance_13().r1t_1;
      nextSnapshotId = 1;
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      // Inline function 'kotlin.collections.mutableListOf' call
      applyObservers = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.mutableListOf' call
      globalWriteObservers = ArrayList_init_$Create$();
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var tmp0_also = new GlobalSnapshot(tmp0, Companion_getInstance_13().r1t_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().s1t(tmp0_also.v17()));
      currentGlobalSnapshot = new AtomicReference(tmp0_also);
      snapshotInitializer = get_currentGlobalSnapshot().yk();
      pendingApplyObserverCount = new AtomicInt(0);
    }
  }
  function shiftUp($this, index) {
    var values = $this.h1t_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.h1t_1;
    var half = $this.g1t_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.g1t_1 ? values[right] < values[left] : false) {
        if (values[right] < values[current]) {
          swap($this, right, current);
          current = right;
        } else
          return Unit_getInstance();
      } else if (values[left] < values[current]) {
        swap($this, left, current);
        current = left;
      } else
        return Unit_getInstance();
    }
  }
  function swap($this, a, b) {
    var values = $this.h1t_1;
    var index = $this.i1t_1;
    var handles = $this.j1t_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.h1t_1.length;
    if (atLeast <= capacity)
      return Unit_getInstance();
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.h1t_1;
    var tmp1_copyInto = tmp0_copyInto.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_copyInto;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, tmp1_copyInto);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = $this.i1t_1;
    var tmp3_copyInto = tmp2_copyInto.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp2_copyInto;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, tmp3_copyInto);
    $this.h1t_1 = newValues;
    $this.i1t_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.j1t_1.length;
    if ($this.k1t_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = tmp_2 + 1 | 0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.j1t_1;
      var tmp1_copyInto = tmp0_copyInto.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = tmp0_copyInto;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, tmp1_copyInto);
      $this.j1t_1 = newHandles;
    }
    var handle = $this.k1t_1;
    $this.k1t_1 = $this.j1t_1[$this.k1t_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.j1t_1[handle] = $this.k1t_1;
    $this.k1t_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.g1t_1 = 0;
    this.h1t_1 = new Int32Array(16);
    this.i1t_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.j1t_1 = tmp_1;
    this.k1t_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).p1w = function (default_0) {
    return this.g1t_1 > 0 ? this.h1t_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).l1t = function (value) {
    ensure(this, this.g1t_1 + 1 | 0);
    var tmp1 = this.g1t_1;
    this.g1t_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.h1t_1[i] = value;
    this.i1t_1[i] = handle;
    this.j1t_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).m1t = function (handle) {
    var i = this.j1t_1[handle];
    swap(this, i, this.g1t_1 - 1 | 0);
    this.g1t_1 = this.g1t_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_11() {
    Companion_instance_11 = this;
    this.r1t_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_11;
  function Companion_getInstance_13() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.y1w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).h1x = function ($this$sequence, $completion) {
    var tmp = this.i1x($this$sequence, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(SnapshotIdSet$iterator$slambda).se = function (p1, $completion) {
    return this.h1x(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 15;
            this.a1x_1 = this.y1w_1.d1s_1;
            if (!(this.a1x_1 == null)) {
              this.b1x_1 = intArrayIterator(this.a1x_1);
              this.xd_1 = 1;
              continue $sm;
            } else {
              this.xd_1 = 4;
              continue $sm;
            }

          case 1:
            if (!this.b1x_1.d()) {
              this.xd_1 = 3;
              continue $sm;
            }

            this.c1x_1 = this.b1x_1.e();
            this.xd_1 = 2;
            suspendResult = this.z1w_1.m3(this.c1x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.xd_1 = 1;
            continue $sm;
          case 3:
            this.xd_1 = 4;
            continue $sm;
          case 4:
            if (!this.y1w_1.b1s_1.equals(new Long(0, 0))) {
              var tmp_0 = this;
              Companion_getInstance_0();
              tmp_0.d1x_1 = until(0, 64).c();
              this.xd_1 = 5;
              continue $sm;
            } else {
              this.xd_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.d1x_1.d()) {
              this.xd_1 = 8;
              continue $sm;
            }

            this.e1x_1 = this.d1x_1.e();
            if (!this.y1w_1.b1s_1.m6((new Long(1, 0)).a6(this.e1x_1)).equals(new Long(0, 0))) {
              this.xd_1 = 6;
              suspendResult = this.z1w_1.m3(this.e1x_1 + this.y1w_1.c1s_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.xd_1 = 7;
              continue $sm;
            }

          case 6:
            this.xd_1 = 7;
            continue $sm;
          case 7:
            this.xd_1 = 5;
            continue $sm;
          case 8:
            this.xd_1 = 9;
            continue $sm;
          case 9:
            if (!this.y1w_1.a1s_1.equals(new Long(0, 0))) {
              var tmp_1 = this;
              Companion_getInstance_0();
              tmp_1.f1x_1 = until(0, 64).c();
              this.xd_1 = 10;
              continue $sm;
            } else {
              this.xd_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.f1x_1.d()) {
              this.xd_1 = 13;
              continue $sm;
            }

            this.g1x_1 = this.f1x_1.e();
            if (!this.y1w_1.a1s_1.m6((new Long(1, 0)).a6(this.g1x_1)).equals(new Long(0, 0))) {
              this.xd_1 = 11;
              Companion_getInstance_0();
              suspendResult = this.z1w_1.m3((this.g1x_1 + 64 | 0) + this.y1w_1.c1s_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.xd_1 = 12;
              continue $sm;
            }

          case 11:
            this.xd_1 = 12;
            continue $sm;
          case 12:
            this.xd_1 = 10;
            continue $sm;
          case 13:
            this.xd_1 = 14;
            continue $sm;
          case 14:
            return Unit_getInstance();
          case 15:
            throw this.ae_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 15) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).i1x = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.y1w_1, completion);
    i.z1w_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.h1x($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_13();
    this.a1s_1 = upperSet;
    this.b1s_1 = lowerSet;
    this.c1s_1 = lowerBound;
    this.d1s_1 = belowBound;
  }
  protoOf(SnapshotIdSet).l = function (bit) {
    var offset = bit - this.c1s_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      return !(new Long(1, 0)).a6(offset).m6(this.b1s_1).equals(new Long(0, 0));
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        return !tmp_1.a6(offset - 64 | 0).m6(this.a1s_1).equals(new Long(0, 0));
      } else {
        if (offset > 0) {
          return false;
        } else {
          var tmp0_safe_receiver = this.d1s_1;
          var tmp_2;
          if (tmp0_safe_receiver == null) {
            tmp_2 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
            tmp_2 = binarySearch(tmp0_safe_receiver, bit) >= 0;
          }
          var tmp1_elvis_lhs = tmp_2;
          return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
        }
      }
    }
  };
  protoOf(SnapshotIdSet).s1t = function (bit) {
    var offset = bit - this.c1s_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).a6(offset);
      if (this.b1s_1.m6(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.a1s_1, this.b1s_1.sd(mask), this.c1s_1, this.d1s_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        var mask_0 = tmp_1.a6(offset - 64 | 0);
        if (this.a1s_1.m6(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.a1s_1.sd(mask_0), this.b1s_1, this.c1s_1, this.d1s_1);
        }
      } else {
        Companion_getInstance_0();
        if (offset >= imul(64, 2)) {
          if (!this.l(bit)) {
            var newUpperSet = this.a1s_1;
            var newLowerSet = this.b1s_1;
            var newLowerBound = this.c1s_1;
            var newBelowBound = null;
            var tmp_2 = bit + 1 | 0;
            Companion_getInstance_0();
            var tmp_3 = tmp_2 / 64 | 0;
            Companion_getInstance_0();
            var targetLowerBound = imul(tmp_3, 64);
            $l$loop: while (newLowerBound < targetLowerBound) {
              if (!newLowerSet.equals(new Long(0, 0))) {
                if (newBelowBound == null) {
                  // Inline function 'kotlin.apply' call
                  // Inline function 'kotlin.collections.mutableListOf' call
                  var tmp0_apply = ArrayList_init_$Create$();
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                  var tmp0_safe_receiver = this.d1s_1;
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    var inductionVariable = 0;
                    var last = tmp0_safe_receiver.length;
                    while (inductionVariable < last) {
                      var element = tmp0_safe_receiver[inductionVariable];
                      inductionVariable = inductionVariable + 1 | 0;
                      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                      tmp0_apply.a(element);
                    }
                  }
                  newBelowBound = tmp0_apply;
                }
                // Inline function 'kotlin.repeat' call
                Companion_getInstance_0();
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < 64)
                  do {
                    var index = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                    if (!newLowerSet.m6((new Long(1, 0)).a6(index)).equals(new Long(0, 0))) {
                      newBelowBound.a(index + newLowerBound | 0);
                    }
                  }
                   while (inductionVariable_0 < 64);
              }
              if (newUpperSet.equals(new Long(0, 0))) {
                newLowerBound = targetLowerBound;
                newLowerSet = new Long(0, 0);
                break $l$loop;
              }
              newLowerSet = newUpperSet;
              newUpperSet = new Long(0, 0);
              var tmp_4 = newLowerBound;
              Companion_getInstance_0();
              newLowerBound = tmp_4 + 64 | 0;
            }
            var tmp_5 = newUpperSet;
            var tmp_6 = newLowerSet;
            var tmp_7 = newLowerBound;
            var tmp0_safe_receiver_0 = newBelowBound;
            var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
            return (new SnapshotIdSet(tmp_5, tmp_6, tmp_7, tmp1_elvis_lhs == null ? this.d1s_1 : tmp1_elvis_lhs)).s1t(bit);
          }
        } else {
          var tmp2_elvis_lhs = this.d1s_1;
          var tmp_8;
          if (tmp2_elvis_lhs == null) {
            var tmp$ret$3;
            // Inline function 'kotlin.intArrayOf' call
            tmp$ret$3 = new Int32Array([bit]);
            return new SnapshotIdSet(this.a1s_1, this.b1s_1, this.c1s_1, tmp$ret$3);
          } else {
            tmp_8 = tmp2_elvis_lhs;
          }
          var array = tmp_8;
          var location = binarySearch(array, bit);
          if (location < 0) {
            var insertLocation = -(location + 1 | 0) | 0;
            var newSize = array.length + 1 | 0;
            var newBelowBound_0 = new Int32Array(newSize);
            // Inline function 'kotlin.collections.copyInto' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_9 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_9, newBelowBound_0, 0, 0, insertLocation);
            // Inline function 'kotlin.collections.copyInto' call
            var tmp2_copyInto = insertLocation + 1 | 0;
            var tmp3_copyInto = newSize - 1 | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_10 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_10, newBelowBound_0, tmp2_copyInto, insertLocation, tmp3_copyInto);
            newBelowBound_0[insertLocation] = bit;
            return new SnapshotIdSet(this.a1s_1, this.b1s_1, this.c1s_1, newBelowBound_0);
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).e1s = function (bit) {
    var offset = bit - this.c1s_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).a6(offset);
      if (!this.b1s_1.m6(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.a1s_1, this.b1s_1.m6(mask.rd()), this.c1s_1, this.d1s_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        var mask_0 = tmp_1.a6(offset - 64 | 0);
        if (!this.a1s_1.m6(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.a1s_1.m6(mask_0.rd()), this.b1s_1, this.c1s_1, this.d1s_1);
        }
      } else {
        if (offset < 0) {
          var array = this.d1s_1;
          if (!(array == null)) {
            var location = binarySearch(array, bit);
            if (location >= 0) {
              var newSize = array.length - 1 | 0;
              if (newSize === 0) {
                return new SnapshotIdSet(this.a1s_1, this.b1s_1, this.c1s_1, null);
              }
              var newBelowBound = new Int32Array(newSize);
              if (location > 0) {
                // Inline function 'kotlin.collections.copyInto' call
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_2 = array;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_2, newBelowBound, 0, 0, location);
              }
              if (location < newSize) {
                // Inline function 'kotlin.collections.copyInto' call
                var tmp0_copyInto = location + 1 | 0;
                var tmp1_copyInto = newSize + 1 | 0;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_3 = array;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_3, newBelowBound, location, tmp0_copyInto, tmp1_copyInto);
              }
              return new SnapshotIdSet(this.a1s_1, this.b1s_1, this.c1s_1, newBelowBound);
            }
          }
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).t1t = function (bits) {
    if (bits === Companion_getInstance_13().r1t_1)
      return this;
    if (this === Companion_getInstance_13().r1t_1)
      return Companion_getInstance_13().r1t_1;
    var tmp;
    if (bits.c1s_1 === this.c1s_1 ? bits.d1s_1 === this.d1s_1 : false) {
      tmp = new SnapshotIdSet(this.a1s_1.m6(bits.a1s_1.rd()), this.b1s_1.m6(bits.b1s_1.rd()), this.c1s_1, this.d1s_1);
    } else {
      // Inline function 'kotlin.collections.fold' call
      var accumulator = this;
      var tmp0_iterator = bits.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
        accumulator = accumulator.e1s(element);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).u1t = function (bits) {
    if (bits === Companion_getInstance_13().r1t_1)
      return this;
    if (this === Companion_getInstance_13().r1t_1)
      return bits;
    var tmp;
    if (bits.c1s_1 === this.c1s_1 ? bits.d1s_1 === this.d1s_1 : false) {
      tmp = new SnapshotIdSet(this.a1s_1.sd(bits.a1s_1), this.b1s_1.sd(bits.b1s_1), this.c1s_1, this.d1s_1);
    } else {
      var tmp_0;
      if (this.d1s_1 == null) {
        // Inline function 'kotlin.collections.fold' call
        var accumulator = bits;
        var tmp0_iterator = this.c();
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator = accumulator.s1t(element);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'kotlin.collections.fold' call
        var accumulator_0 = this;
        var tmp0_iterator_0 = bits.c();
        while (tmp0_iterator_0.d()) {
          var element_0 = tmp0_iterator_0.e();
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          accumulator_0 = accumulator_0.s1t(element_0);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).c = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).c();
  };
  protoOf(SnapshotIdSet).f1t = function (default_0) {
    var belowBound = this.d1s_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.b1s_1.equals(new Long(0, 0)))
      return this.c1s_1 + lowestBitOf(this.b1s_1) | 0;
    if (!this.a1s_1.equals(new Long(0, 0))) {
      Companion_getInstance_0();
      return (this.c1s_1 + 64 | 0) + lowestBitOf(this.a1s_1) | 0;
    }
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.c();
    while (tmp0_iterator.d()) {
      var item = tmp0_iterator.e();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      tmp$ret$0 = item.toString();
      tmp0_mapTo.a(tmp$ret$0);
    }
    return tmp + ' [' + fastJoinToString(tmp0_mapTo) + ']';
  };
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function lowestBitOf(bits) {
    var b = bits;
    var base = 0;
    if (b.m6(new Long(-1, 0)).equals(new Long(0, 0))) {
      base = base + 32 | 0;
      b = b.y5(32);
    }
    if (b.m6(new Long(65535, 0)).equals(new Long(0, 0))) {
      base = base + 16 | 0;
      b = b.y5(16);
    }
    if (b.m6(new Long(255, 0)).equals(new Long(0, 0))) {
      base = base + 8 | 0;
      b = b.y5(8);
    }
    if (b.m6(new Long(15, 0)).equals(new Long(0, 0))) {
      base = base + 4 | 0;
      b = b.y5(4);
    }
    if (!b.m6(new Long(1, 0)).equals(new Long(0, 0)))
      return base;
    if (!b.m6(new Long(2, 0)).equals(new Long(0, 0)))
      return base + 1 | 0;
    if (!b.m6(new Long(4, 0)).equals(new Long(0, 0)))
      return base + 2 | 0;
    if (!b.m6(new Long(8, 0)).equals(new Long(0, 0)))
      return base + 3 | 0;
    return -1;
  }
  function SnapshotMutableState() {
  }
  function get_sync() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    return sync;
  }
  var sync;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  function StateMapStateRecord(map) {
    StateRecord.call(this);
    this.m1x_1 = map;
    this.n1x_1 = 0;
  }
  protoOf(StateMapStateRecord).z1k = function (value) {
    var other = value instanceof StateMapStateRecord ? value : THROW_CCE();
    // Inline function 'androidx.compose.runtime.synchronized' call
    _get_sync_$accessor$1hruseb_q3n4dp();
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.m1x_1 = other.m1x_1;
    this.n1x_1 = other.n1x_1;
  };
  protoOf(StateMapStateRecord).a1l = function () {
    return new StateMapStateRecord(this.m1x_1);
  };
  function SnapshotStateMap() {
    this.o1x_1 = new StateMapStateRecord(persistentHashMapOf());
    this.p1x_1 = new SnapshotMapEntrySet(this);
    this.q1x_1 = new SnapshotMapKeySet(this);
    this.r1x_1 = new SnapshotMapValueSet(this);
    this.s1x_1 = 0;
  }
  protoOf(SnapshotStateMap).d1l = function () {
    return this.o1x_1;
  };
  protoOf(SnapshotStateMap).e1l = function (value) {
    var tmp = this;
    tmp.o1x_1 = value instanceof StateMapStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateMap).f = function () {
    return this.t1x().m1x_1.f();
  };
  protoOf(SnapshotStateMap).f2 = function (key) {
    return this.t1x().m1x_1.f2(key);
  };
  protoOf(SnapshotStateMap).j2 = function (value) {
    return this.t1x().m1x_1.j2(value);
  };
  protoOf(SnapshotStateMap).l2 = function (key) {
    return this.t1x().m1x_1.l2(key);
  };
  protoOf(SnapshotStateMap).k = function () {
    return this.t1x().m1x_1.k();
  };
  protoOf(SnapshotStateMap).x1 = function () {
    return this.p1x_1;
  };
  protoOf(SnapshotStateMap).m2 = function () {
    return this.q1x_1;
  };
  protoOf(SnapshotStateMap).n2 = function () {
    return this.r1x_1;
  };
  protoOf(SnapshotStateMap).f7 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.o1x_1;
    var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
    var tmp0_anonymous = current(tmp0_withCurrent);
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.clear.<anonymous>' call
    tmp0_anonymous.m1x_1;
    var newMap = persistentHashMapOf();
    var tmp_0;
    if (!(newMap === tmp0_anonymous.m1x_1)) {
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_1 = this.o1x_1;
      var tmp0_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_11().dw();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update.<anonymous>.<anonymous>' call
      var tmp0_anonymous_0 = writableRecord(tmp0_writable, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$1hruseb_q3n4dp();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.update.<anonymous>.<anonymous>.<anonymous>' call
      tmp0_anonymous_0.m1x_1 = newMap;
      tmp0_anonymous_0.n1x_1 = tmp0_anonymous_0.n1x_1 + 1 | 0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp_0 = Unit_getInstance();
    }
    return tmp_0;
  };
  protoOf(SnapshotStateMap).g3 = function (key, value) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$1hruseb_q3n4dp();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.o1x_1;
      var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      oldMap = current_0.m1x_1;
      currentModification = current_0.n1x_1;
      var builder = ensureNotNull(oldMap).j14();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.put.<anonymous>' call
      result = builder.g3(key, value);
      var newMap = builder.ia();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.o1x_1;
        var tmp0_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        get_lock();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_11().dw();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        _get_sync_$accessor$1hruseb_q3n4dp();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if (tmp1_anonymous.n1x_1 === currentModification) {
          tmp1_anonymous.m1x_1 = newMap;
          tmp1_anonymous.n1x_1 = tmp1_anonymous.n1x_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var tmp0_also = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp_0 = tmp0_also;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  };
  protoOf(SnapshotStateMap).m8 = function (from) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$1hruseb_q3n4dp();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.o1x_1;
      var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      oldMap = current_0.m1x_1;
      currentModification = current_0.n1x_1;
      var builder = ensureNotNull(oldMap).j14();
      builder.m8(from);
      result = Unit_getInstance();
      var newMap = builder.ia();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.o1x_1;
        var tmp0_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        get_lock();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_11().dw();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        _get_sync_$accessor$1hruseb_q3n4dp();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if (tmp1_anonymous.n1x_1 === currentModification) {
          tmp1_anonymous.m1x_1 = newMap;
          tmp1_anonymous.n1x_1 = tmp1_anonymous.n1x_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var tmp0_also = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp_0 = tmp0_also;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  };
  protoOf(SnapshotStateMap).j8 = function (key) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate' call
    var result;
    $l$loop: while (true) {
      var oldMap = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      _get_sync_$accessor$1hruseb_q3n4dp();
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.withCurrent' call
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.o1x_1;
      var tmp0_withCurrent = tmp instanceof StateMapStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(tmp0_withCurrent);
      oldMap = current_0.m1x_1;
      currentModification = current_0.n1x_1;
      var builder = ensureNotNull(oldMap).j14();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.remove.<anonymous>' call
      result = builder.j8(key);
      var newMap = builder.ia();
      var tmp_0;
      if (equals(newMap, oldMap)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.writable' call
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.o1x_1;
        var tmp0_writable = tmp_1 instanceof StateMapStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        get_lock();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_11().dw();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>' call
        var tmp1_anonymous = writableRecord(tmp0_writable, this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        _get_sync_$accessor$1hruseb_q3n4dp();
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if (tmp1_anonymous.n1x_1 === currentModification) {
          tmp1_anonymous.m1x_1 = newMap;
          tmp1_anonymous.n1x_1 = tmp1_anonymous.n1x_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        var tmp0_also = tmp_2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp_0 = tmp0_also;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  };
  protoOf(SnapshotStateMap).u1x = function () {
    return this.t1x().n1x_1;
  };
  protoOf(SnapshotStateMap).v1x = function (value) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.p1x_1.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.removeValue.<anonymous>' call
        if (equals(element.w1(), value)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateMap.removeValue.<anonymous>' call
      this.j8(tmp0_safe_receiver.u1());
      tmp = true;
    }
    return tmp === true;
  };
  protoOf(SnapshotStateMap).t1x = function () {
    var tmp = this.o1x_1;
    return readable_0(tmp instanceof StateMapStateRecord ? tmp : THROW_CCE(), this);
  };
  function SnapshotMapEntrySet(map) {
    SnapshotMapSet.call(this, map);
  }
  protoOf(SnapshotMapEntrySet).s8 = function (element) {
    unsupported();
  };
  protoOf(SnapshotMapEntrySet).a = function (element) {
    return this.s8((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapEntrySet).x1x = function (elements) {
    unsupported();
  };
  protoOf(SnapshotMapEntrySet).j = function (elements) {
    return this.x1x(elements);
  };
  protoOf(SnapshotMapEntrySet).c = function () {
    return new StateMapMutableEntriesIterator(this.y1x_1, this.y1x_1.t1x().m1x_1.x1().c());
  };
  protoOf(SnapshotMapEntrySet).z1x = function (element) {
    return !(this.y1x_1.j8(element.u1()) == null);
  };
  protoOf(SnapshotMapEntrySet).c7 = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    return this.z1x((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapEntrySet).a1y = function (element) {
    return equals(this.y1x_1.l2(element.u1()), element.w1());
  };
  protoOf(SnapshotMapEntrySet).m = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    return this.a1y((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapEntrySet).b1y = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.k();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapEntrySet.containsAll.<anonymous>' call
        if (!this.a1y(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SnapshotMapEntrySet).b1 = function (elements) {
    return this.b1y(elements);
  };
  function SnapshotMapKeySet(map) {
    SnapshotMapSet.call(this, map);
  }
  protoOf(SnapshotMapKeySet).e8 = function (element) {
    unsupported();
  };
  protoOf(SnapshotMapKeySet).a = function (element) {
    return this.e8((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapKeySet).d1y = function (elements) {
    unsupported();
  };
  protoOf(SnapshotMapKeySet).j = function (elements) {
    return this.d1y(elements);
  };
  protoOf(SnapshotMapKeySet).c = function () {
    return new StateMapMutableKeysIterator(this.y1x_1, this.y1x_1.t1x().m1x_1.x1().c());
  };
  protoOf(SnapshotMapKeySet).j8 = function (element) {
    return !(this.y1x_1.j8(element) == null);
  };
  protoOf(SnapshotMapKeySet).c7 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.j8((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapKeySet).c2 = function (element) {
    // Inline function 'kotlin.collections.contains' call
    var tmp0_contains = this.y1x_1;
    // Inline function 'kotlin.collections.containsKey' call
    return (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).f2(element);
  };
  protoOf(SnapshotMapKeySet).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.c2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapKeySet).e1y = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.k();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapKeySet.containsAll.<anonymous>' call
        // Inline function 'kotlin.collections.contains' call
        var tmp0_contains = this.y1x_1;
        // Inline function 'kotlin.collections.containsKey' call
        if (!(isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).f2(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SnapshotMapKeySet).b1 = function (elements) {
    return this.e1y(elements);
  };
  function SnapshotMapValueSet(map) {
    SnapshotMapSet.call(this, map);
  }
  protoOf(SnapshotMapValueSet).l8 = function (element) {
    unsupported();
  };
  protoOf(SnapshotMapValueSet).a = function (element) {
    return this.l8((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapValueSet).g1y = function (elements) {
    unsupported();
  };
  protoOf(SnapshotMapValueSet).j = function (elements) {
    return this.g1y(elements);
  };
  protoOf(SnapshotMapValueSet).c = function () {
    return new StateMapMutableValuesIterator(this.y1x_1, this.y1x_1.t1x().m1x_1.x1().c());
  };
  protoOf(SnapshotMapValueSet).h1y = function (element) {
    return this.y1x_1.v1x(element);
  };
  protoOf(SnapshotMapValueSet).c7 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.h1y((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapValueSet).i2 = function (element) {
    return this.y1x_1.j2(element);
  };
  protoOf(SnapshotMapValueSet).m = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.i2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(SnapshotMapValueSet).i1y = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.k();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotMapValueSet.containsAll.<anonymous>' call
        if (!this.y1x_1.j2(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SnapshotMapValueSet).b1 = function (elements) {
    return this.i1y(elements);
  };
  function SnapshotMapSet(map) {
    this.y1x_1 = map;
  }
  protoOf(SnapshotMapSet).f = function () {
    return this.y1x_1.f();
  };
  protoOf(SnapshotMapSet).f7 = function () {
    return this.y1x_1.f7();
  };
  protoOf(SnapshotMapSet).k = function () {
    return this.y1x_1.k();
  };
  function StateMapMutableEntriesIterator$next$1(this$0) {
    this.l1y_1 = this$0;
    this.j1y_1 = ensureNotNull(this$0.p1y_1).u1();
    this.k1y_1 = ensureNotNull(this$0.p1y_1).w1();
  }
  protoOf(StateMapMutableEntriesIterator$next$1).u1 = function () {
    return this.j1y_1;
  };
  protoOf(StateMapMutableEntriesIterator$next$1).w1 = function () {
    return this.k1y_1;
  };
  protoOf(StateMapMutableEntriesIterator$next$1).a8 = function (newValue) {
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.modify' call
    if (!(this.l1y_1.m1y_1.u1x() === this.l1y_1.o1y_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
    // Inline function 'kotlin.also' call
    var result = this.k1y_1;
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.l1y_1.m1y_1;
    var tmp1_set = this.j1y_1;
    tmp0_set.g3(tmp1_set, newValue);
    this.k1y_1 = newValue;
    return result;
  };
  function StateMapMutableEntriesIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  protoOf(StateMapMutableEntriesIterator).e = function () {
    this.z1s();
    if (!(this.p1y_1 == null)) {
      return new StateMapMutableEntriesIterator$next$1(this);
    } else {
      throw IllegalStateException_init_$Create$_0();
    }
  };
  function StateMapMutableKeysIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  protoOf(StateMapMutableKeysIterator).e = function () {
    var tmp0_elvis_lhs = this.q1y_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$_0();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    this.z1s();
    return result.u1();
  };
  function StateMapMutableValuesIterator(map, iterator) {
    StateMapMutableIterator.call(this, map, iterator);
  }
  protoOf(StateMapMutableValuesIterator).e = function () {
    var tmp0_elvis_lhs = this.q1y_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$_0();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    this.z1s();
    return result.w1();
  };
  function StateMapMutableIterator(map, iterator) {
    this.m1y_1 = map;
    this.n1y_1 = iterator;
    this.o1y_1 = this.m1y_1.u1x();
    this.p1y_1 = null;
    this.q1y_1 = null;
    this.z1s();
  }
  protoOf(StateMapMutableIterator).e7 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.modify' call
    if (!(this.m1y_1.u1x() === this.o1y_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
    // Inline function 'kotlin.also' call
    var value = this.p1y_1;
    var tmp;
    if (!(value == null)) {
      this.m1y_1.j8(value.u1());
      this.p1y_1 = null;
      tmp = Unit_getInstance();
    } else {
      throw IllegalStateException_init_$Create$_0();
    }
    var tmp0_also = tmp;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateMapMutableIterator.modify.<anonymous>' call
    this.o1y_1 = this.m1y_1.u1x();
    return tmp0_also;
  };
  protoOf(StateMapMutableIterator).d = function () {
    return !(this.q1y_1 == null);
  };
  protoOf(StateMapMutableIterator).z1s = function () {
    this.p1y_1 = this.q1y_1;
    this.q1y_1 = this.n1y_1.d() ? this.n1y_1.e() : null;
  };
  function _get_sync_$accessor$1hruseb_q3n4dp() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    return get_sync();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (!properties_initialized_SnapshotStateMap_kt_9i73ip) {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync = createSynchronizedObject();
    }
  }
  function recordRead($this, value, currentToken, currentScope, recordedValues) {
    if ($this.p1z_1 > 0) {
      return Unit_getInstance();
    }
    var previousToken = recordedValues.o1f(value, currentToken);
    var tmp;
    if (isInterface(value, DerivedState)) {
      tmp = !(previousToken === currentToken);
    } else {
      tmp = false;
    }
    if (tmp) {
      var record = value.g1d();
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = $this.r1z_1;
      var tmp2_set = record.p1f();
      tmp0_set.g3(value, tmp2_set);
      var dependencies = record.h1d();
      var dependencyToDerivedStates = $this.q1z_1;
      dependencyToDerivedStates.f1d(value);
      var inductionVariable = 0;
      var last = dependencies.length;
      $l$loop: while (inductionVariable < last) {
        var dependency = dependencies[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (dependency == null)
          break $l$loop;
        dependencyToDerivedStates.c1c(dependency, value);
      }
    }
    if (previousToken === -1) {
      $this.k1z_1.c1c(value, currentScope);
    }
  }
  function clearObsoleteStateReads($this, scope) {
    var currentToken = $this.j1z_1;
    var tmp0_safe_receiver = $this.i1z_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.removeValueIf' call
      var keys = tmp0_safe_receiver.l1f_1;
      var values = tmp0_safe_receiver.m1f_1;
      var size = tmp0_safe_receiver.k1f_1;
      var destinationIndex = 0;
      var inductionVariable = 0;
      if (inductionVariable < size)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = keys[i];
          var key = isObject(tmp) ? tmp : THROW_CCE();
          var value = values[i];
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.clearObsoleteStateReads.<anonymous>' call
          // Inline function 'kotlin.also' call
          var tmp0_also = !(value === currentToken);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.clearObsoleteStateReads.<anonymous>.<anonymous>' call
          if (tmp0_also) {
            removeObservation($this, scope, key);
          }
          if (!tmp0_also) {
            if (!(destinationIndex === i)) {
              keys[destinationIndex] = key;
              values[destinationIndex] = value;
            }
            destinationIndex = destinationIndex + 1 | 0;
          }
        }
         while (inductionVariable < size);
      var inductionVariable_0 = destinationIndex;
      if (inductionVariable_0 < size)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          keys[i_0] = null;
        }
         while (inductionVariable_0 < size);
      tmp0_safe_receiver.k1f_1 = destinationIndex;
    }
  }
  function removeObservation($this, scope, value) {
    $this.k1z_1.a1c(value, scope);
    var tmp;
    if (isInterface(value, DerivedState)) {
      tmp = !$this.k1z_1.b1c(value);
    } else {
      tmp = false;
    }
    if (tmp) {
      $this.q1z_1.f1d(value);
      $this.r1z_1.j8(value);
    }
  }
  function SnapshotStateObserver$ObservedScopeMap$derivedStateObserver$1(this$0) {
    this.s1z_1 = this$0;
  }
  function drainChanges($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.z1z_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.drainChanges.<anonymous>' call
    if ($this.v1z_1)
      return false;
    var hasValues = false;
    while (true) {
      var tmp0_elvis_lhs = removeChanges($this);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return hasValues;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var notifications = tmp;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.z1z_1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0_forEach = $this.y1z_1;
      // Inline function 'kotlin.contracts.contract' call
      var size = tmp0_forEach.d18_1;
      var tmp_0;
      if (size > 0) {
        var i = 0;
        var tmp_1 = tmp0_forEach.b18_1;
        var content = isArray(tmp_1) ? tmp_1 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.drainChanges.<anonymous>' call
          hasValues = content[i].e20(notifications) ? true : hasValues;
          i = i + 1 | 0;
        }
         while (i < size);
        tmp_0 = Unit_getInstance();
      }
    }
  }
  function sendNotifications($this) {
    $this.t1z_1(SnapshotStateObserver$sendNotifications$lambda($this));
  }
  function addChanges($this, set) {
    $l$loop: while (true) {
      var old = $this.u1z_1.yk();
      var tmp;
      if (old == null) {
        tmp = set;
      } else {
        if (!(old == null) ? isInterface(old, Set) : false) {
          tmp = listOf_0([old, set]);
        } else {
          if (!(old == null) ? isInterface(old, List) : false) {
            tmp = plus_2(old, listOf(set));
          } else {
            report($this);
          }
        }
      }
      var new_0 = tmp;
      if ($this.u1z_1.c1d(old, new_0))
        break $l$loop;
    }
  }
  function removeChanges($this) {
    while (true) {
      var old = $this.u1z_1.yk();
      var result;
      var new_0;
      if (old == null)
        return null;
      else {
        if (!(old == null) ? isInterface(old, Set) : false) {
          result = (old == null ? true : isInterface(old, Set)) ? old : THROW_CCE();
          new_0 = null;
        } else {
          if (!(old == null) ? isInterface(old, List) : false) {
            var tmp = old.l(0);
            result = (tmp == null ? true : isInterface(tmp, Set)) ? tmp : THROW_CCE();
            new_0 = old.f() === 2 ? old.l(1) : old.f() > 2 ? old.i1(1, old.f()) : null;
          } else {
            report($this);
          }
        }
      }
      if ($this.u1z_1.c1d(old, new_0)) {
        return result;
      }
    }
  }
  function report($this) {
    composeRuntimeError('Unexpected notification');
  }
  function ensureMap($this, onChanged) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.firstOrNull' call
      var tmp0_firstOrNull = $this.y1z_1;
      // Inline function 'kotlin.contracts.contract' call
      var size = tmp0_firstOrNull.d18_1;
      if (size > 0) {
        var i = 0;
        var tmp = tmp0_firstOrNull.b18_1;
        var content = isArray(tmp) ? tmp : THROW_CCE();
        do {
          var item = content[i];
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.ensureMap.<anonymous>' call
          if (item.g1z_1 === onChanged) {
            tmp$ret$1 = item;
            break $l$block;
          }
          i = i + 1 | 0;
        }
         while (i < size);
      }
      tmp$ret$1 = null;
    }
    var scopeMap = tmp$ret$1;
    if (scopeMap == null) {
      var map = new ObservedScopeMap(typeof onChanged === 'function' ? onChanged : THROW_CCE());
      // Inline function 'androidx.compose.runtime.collection.MutableVector.plusAssign' call
      $this.y1z_1.f18(map);
      return map;
    }
    return scopeMap;
  }
  function ObservedScopeMap(onChanged) {
    this.g1z_1 = onChanged;
    this.h1z_1 = null;
    this.i1z_1 = null;
    this.j1z_1 = -1;
    this.k1z_1 = new IdentityScopeMap();
    this.l1z_1 = new IdentityArrayMap();
    this.m1z_1 = new IdentityArraySet();
    var tmp = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.n1z_1 = new MutableVector(tmp$ret$0, 0);
    var tmp_0 = this;
    tmp_0.o1z_1 = new SnapshotStateObserver$ObservedScopeMap$derivedStateObserver$1(this);
    this.p1z_1 = 0;
    this.q1z_1 = new IdentityScopeMap();
    this.r1z_1 = HashMap_init_$Create$();
  }
  protoOf(ObservedScopeMap).f20 = function (value) {
    var scope = ensureNotNull(this.h1z_1);
    var tmp = this.j1z_1;
    var tmp0_elvis_lhs = this.i1z_1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArrayIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordRead.<anonymous>' call
      this.i1z_1 = tmp0_also;
      this.l1z_1.q1c(scope, tmp0_also);
      tmp_0 = tmp0_also;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    recordRead(this, value, tmp, scope, tmp_0);
  };
  protoOf(ObservedScopeMap).g20 = function (scope, readObserver, block) {
    var previousScope = this.h1z_1;
    var previousReads = this.i1z_1;
    var previousToken = this.j1z_1;
    this.h1z_1 = scope;
    this.i1z_1 = this.l1z_1.y1d(scope);
    if (this.j1z_1 === -1) {
      this.j1z_1 = currentSnapshot().v17();
    }
    // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
    var tmp0_observeDerivedStateRecalculations = this.o1z_1;
    var observers = derivedStateObservers_0();
    try {
      observers.f18(tmp0_observeDerivedStateRecalculations);
      // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.observe.<anonymous>' call
      Companion_getInstance_11().g1r(readObserver, null, block);
    }finally {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
      tmp$ret$0 = observers.d18_1 - 1 | 0;
      observers.h3(tmp$ret$0);
    }
    clearObsoleteStateReads(this, ensureNotNull(this.h1z_1));
    this.h1z_1 = previousScope;
    this.i1z_1 = previousReads;
    this.j1z_1 = previousToken;
  };
  protoOf(ObservedScopeMap).h20 = function (scope) {
    var tmp0_elvis_lhs = this.l1z_1.n1f(scope);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var recordedValues = tmp;
    // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.forEach' call
    var keys = recordedValues.l1f_1;
    var values = recordedValues.m1f_1;
    var size = recordedValues.k1f_1;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.clearScopeObservations.<anonymous>' call
        var tmp_0 = keys[i];
        var tmp0_anonymous = isObject(tmp_0) ? tmp_0 : THROW_CCE();
        values[i];
        removeObservation(this, scope, tmp0_anonymous);
      }
       while (inductionVariable < size);
  };
  protoOf(ObservedScopeMap).i20 = function (predicate) {
    // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.removeIf' call
    var tmp0_removeIf = this.l1z_1;
    var current = 0;
    var inductionVariable = 0;
    var last = tmp0_removeIf.y17_1;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = tmp0_removeIf.w17_1[index];
        var key = isObject(tmp) ? tmp : THROW_CCE();
        var tmp_0 = tmp0_removeIf.x17_1[index];
        var value = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.removeScopeIf.<anonymous>' call
        // Inline function 'kotlin.also' call
        var tmp0_also = predicate(key);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.removeScopeIf.<anonymous>.<anonymous>' call
        if (tmp0_also) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.forEach' call
          var keys = value.l1f_1;
          var values = value.m1f_1;
          var size = value.k1f_1;
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < size)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.removeScopeIf.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_1 = keys[i];
              var tmp0_anonymous = isObject(tmp_1) ? tmp_1 : THROW_CCE();
              values[i];
              removeObservation(this, key, tmp0_anonymous);
            }
             while (inductionVariable_0 < size);
        }
        if (!tmp0_also) {
          if (!(current === index)) {
            tmp0_removeIf.w17_1[current] = key;
            tmp0_removeIf.x17_1[current] = tmp0_removeIf.x17_1[index];
          }
          current = current + 1 | 0;
        }
      }
       while (inductionVariable < last);
    if (tmp0_removeIf.y17_1 > current) {
      var inductionVariable_1 = current;
      var last_0 = tmp0_removeIf.y17_1;
      if (inductionVariable_1 < last_0)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          tmp0_removeIf.w17_1[index_0] = null;
          tmp0_removeIf.x17_1[index_0] = null;
        }
         while (inductionVariable_1 < last_0);
      tmp0_removeIf.y17_1 = current;
    }
  };
  protoOf(ObservedScopeMap).f7 = function () {
    this.k1z_1.f7();
    this.l1z_1.f7();
    this.q1z_1.f7();
    this.r1z_1.f7();
  };
  protoOf(ObservedScopeMap).e20 = function (changes) {
    var hasValues = false;
    var dependencyToDerivedStates = this.q1z_1;
    var recordedDerivedStateValues = this.r1z_1;
    var valueToScopes = this.k1z_1;
    var invalidated = this.m1z_1;
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    if (changes instanceof IdentityArraySet) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var values = changes.d17_1;
      var inductionVariable = 0;
      var last = changes.c17_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>' call
          var tmp = values[i];
          var tmp0_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          if (dependencyToDerivedStates.b1c(tmp0_anonymous)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
            var index = find_2(dependencyToDerivedStates, tmp0_anonymous);
            if (index >= 0) {
              // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
              var tmp0_fastForEach = scopeSetAt(dependencyToDerivedStates, index);
              // Inline function 'kotlin.contracts.contract' call
              var values_0 = tmp0_fastForEach.d17_1;
              var inductionVariable_0 = 0;
              var last_0 = tmp0_fastForEach.c17_1;
              if (inductionVariable_0 < last_0)
                do {
                  var i_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
                  var tmp_0 = values_0[i_0];
                  var tmp0_anonymous_0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
                  if (!isInterface(tmp0_anonymous_0, DerivedState))
                    THROW_CCE();
                  var previousValue = recordedDerivedStateValues.l2(tmp0_anonymous_0);
                  var tmp0_elvis_lhs = tmp0_anonymous_0.u1e();
                  var policy = tmp0_elvis_lhs == null ? structuralEqualityPolicy() : tmp0_elvis_lhs;
                  if (!policy.q1f(tmp0_anonymous_0.g1d().p1f(), previousValue)) {
                    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
                    var index_0 = find_2(valueToScopes, tmp0_anonymous_0);
                    if (index_0 >= 0) {
                      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
                      var tmp0_fastForEach_0 = scopeSetAt(valueToScopes, index_0);
                      // Inline function 'kotlin.contracts.contract' call
                      var values_1 = tmp0_fastForEach_0.d17_1;
                      var inductionVariable_1 = 0;
                      var last_1 = tmp0_fastForEach_0.c17_1;
                      if (inductionVariable_1 < last_1)
                        do {
                          var i_1 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>.<anonymous>' call
                          var tmp_1 = values_1[i_1];
                          var tmp0_anonymous_1 = isObject(tmp_1) ? tmp_1 : THROW_CCE();
                          invalidated.f18(tmp0_anonymous_1);
                          hasValues = true;
                        }
                         while (inductionVariable_1 < last_1);
                    }
                  } else {
                    this.n1z_1.f18(tmp0_anonymous_0);
                  }
                }
                 while (inductionVariable_0 < last_0);
            }
          }
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
          var index_1 = find_2(valueToScopes, tmp0_anonymous);
          if (index_1 >= 0) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            var tmp0_fastForEach_1 = scopeSetAt(valueToScopes, index_1);
            // Inline function 'kotlin.contracts.contract' call
            var values_2 = tmp0_fastForEach_1.d17_1;
            var inductionVariable_2 = 0;
            var last_2 = tmp0_fastForEach_1.c17_1;
            if (inductionVariable_2 < last_2)
              do {
                var i_2 = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
                var tmp_2 = values_2[i_2];
                var tmp1_anonymous = isObject(tmp_2) ? tmp_2 : THROW_CCE();
                invalidated.f18(tmp1_anonymous);
                hasValues = true;
              }
               while (inductionVariable_2 < last_2);
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = changes.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>' call
        if (dependencyToDerivedStates.b1c(element)) {
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
          var index_2 = find_2(dependencyToDerivedStates, element);
          if (index_2 >= 0) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            var tmp0_fastForEach_2 = scopeSetAt(dependencyToDerivedStates, index_2);
            // Inline function 'kotlin.contracts.contract' call
            var values_3 = tmp0_fastForEach_2.d17_1;
            var inductionVariable_3 = 0;
            var last_3 = tmp0_fastForEach_2.c17_1;
            if (inductionVariable_3 < last_3)
              do {
                var i_3 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
                var tmp_3 = values_3[i_3];
                var tmp0_anonymous_2 = isObject(tmp_3) ? tmp_3 : THROW_CCE();
                if (!isInterface(tmp0_anonymous_2, DerivedState))
                  THROW_CCE();
                var previousValue_0 = recordedDerivedStateValues.l2(tmp0_anonymous_2);
                var tmp0_elvis_lhs_0 = tmp0_anonymous_2.u1e();
                var policy_0 = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
                if (!policy_0.q1f(tmp0_anonymous_2.g1d().p1f(), previousValue_0)) {
                  // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
                  var index_3 = find_2(valueToScopes, tmp0_anonymous_2);
                  if (index_3 >= 0) {
                    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
                    var tmp0_fastForEach_3 = scopeSetAt(valueToScopes, index_3);
                    // Inline function 'kotlin.contracts.contract' call
                    var values_4 = tmp0_fastForEach_3.d17_1;
                    var inductionVariable_4 = 0;
                    var last_4 = tmp0_fastForEach_3.c17_1;
                    if (inductionVariable_4 < last_4)
                      do {
                        var i_4 = inductionVariable_4;
                        inductionVariable_4 = inductionVariable_4 + 1 | 0;
                        // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>.<anonymous>' call
                        var tmp_4 = values_4[i_4];
                        var tmp0_anonymous_3 = isObject(tmp_4) ? tmp_4 : THROW_CCE();
                        invalidated.f18(tmp0_anonymous_3);
                        hasValues = true;
                      }
                       while (inductionVariable_4 < last_4);
                  }
                } else {
                  this.n1z_1.f18(tmp0_anonymous_2);
                }
              }
               while (inductionVariable_3 < last_3);
          }
        }
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
        var index_4 = find_2(valueToScopes, element);
        if (index_4 >= 0) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
          var tmp0_fastForEach_4 = scopeSetAt(valueToScopes, index_4);
          // Inline function 'kotlin.contracts.contract' call
          var values_5 = tmp0_fastForEach_4.d17_1;
          var inductionVariable_5 = 0;
          var last_5 = tmp0_fastForEach_4.c17_1;
          if (inductionVariable_5 < last_5)
            do {
              var i_5 = inductionVariable_5;
              inductionVariable_5 = inductionVariable_5 + 1 | 0;
              // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>.<anonymous>' call
              var tmp_5 = values_5[i_5];
              var tmp1_anonymous_0 = isObject(tmp_5) ? tmp_5 : THROW_CCE();
              invalidated.f18(tmp1_anonymous_0);
              hasValues = true;
            }
             while (inductionVariable_5 < last_5);
        }
      }
    }
    if (this.n1z_1.g17()) {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
      var tmp1_forEach = this.n1z_1;
      // Inline function 'kotlin.contracts.contract' call
      var size = tmp1_forEach.d18_1;
      if (size > 0) {
        var i_6 = 0;
        var tmp_6 = tmp1_forEach.b18_1;
        var content = isArray(tmp_6) ? tmp_6 : THROW_CCE();
        do {
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.recordInvalidation.<anonymous>' call
          var tmp2_anonymous = content[i_6];
          this.j20(tmp2_anonymous);
          i_6 = i_6 + 1 | 0;
        }
         while (i_6 < size);
      }
      this.n1z_1.f7();
    }
    return hasValues;
  };
  protoOf(ObservedScopeMap).j20 = function (derivedState) {
    var scopeToValues = this.l1z_1;
    var token = currentSnapshot().v17();
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var tmp0_forEachScopeOf = this.k1z_1;
    var index = find_2(tmp0_forEachScopeOf, derivedState);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(tmp0_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var values = tmp0_fastForEach.d17_1;
      var inductionVariable = 0;
      var last = tmp0_fastForEach.c17_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.rereadDerivedState.<anonymous>' call
          var tmp = values[i];
          var tmp1_anonymous = isObject(tmp) ? tmp : THROW_CCE();
          var tmp0_elvis_lhs = scopeToValues.y1d(tmp1_anonymous);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            // Inline function 'kotlin.also' call
            var tmp0_also = new IdentityArrayIntMap();
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.ObservedScopeMap.rereadDerivedState.<anonymous>.<anonymous>' call
            scopeToValues.q1c(tmp1_anonymous, tmp0_also);
            tmp_0 = tmp0_also;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          recordRead(this, derivedState, token, tmp1_anonymous, tmp_0);
        }
         while (inductionVariable < last);
    }
  };
  protoOf(ObservedScopeMap).k20 = function () {
    var invalidated = this.m1z_1;
    // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
    var tmp0_fastForEach = this.g1z_1;
    // Inline function 'kotlin.contracts.contract' call
    var values = invalidated.d17_1;
    var inductionVariable = 0;
    var last = invalidated.c17_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = values[i];
        tmp0_fastForEach(isObject(tmp) ? tmp : THROW_CCE());
      }
       while (inductionVariable < last);
    invalidated.f7();
  };
  function SnapshotStateObserver$applyObserver$lambda(this$0) {
    return function (applied, _anonymous_parameter_1__qggqgd) {
      addChanges(this$0, applied);
      var tmp;
      if (drainChanges(this$0)) {
        sendNotifications(this$0);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SnapshotStateObserver$sendNotifications$lambda(this$0) {
    return function () {
      $l$loop: while (true) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized = this$0.z1z_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp;
        if (!this$0.v1z_1) {
          this$0.v1z_1 = true;
          var tmp_0;
          try {
            var tmp0_forEach = this$0.y1z_1;
            // Inline function 'kotlin.contracts.contract' call
            var size = tmp0_forEach.d18_1;
            var tmp_1;
            if (size > 0) {
              var i = 0;
              var tmp_2 = tmp0_forEach.b18_1;
              var content = isArray(tmp_2) ? tmp_2 : THROW_CCE();
              do {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.sendNotifications.<anonymous>.<anonymous>.<anonymous>' call
                var tmp1_anonymous = content[i];
                tmp1_anonymous.k20();
                var tmp0 = i;
                i = tmp0 + 1 | 0;
              }
               while (i < size);
              tmp_1 = Unit_getInstance();
            }
            tmp_0 = tmp_1;
          }finally {
            this$0.v1z_1 = false;
          }
          tmp = tmp_0;
        }
        tmp$ret$0 = tmp;
        tmp$ret$1 = tmp$ret$0;
        if (!drainChanges(this$0))
          break $l$loop;
      }
      return Unit_getInstance();
    };
  }
  function SnapshotStateObserver$readObserver$lambda(this$0) {
    return function (state) {
      var tmp;
      if (!this$0.b20_1) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized = this$0.z1z_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        ensureNotNull(this$0.c20_1).f20(state);
        tmp$ret$0 = Unit_getInstance();
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      return Unit_getInstance();
    };
  }
  function SnapshotStateObserver(onChangedExecutor) {
    this.t1z_1 = onChangedExecutor;
    this.u1z_1 = new AtomicReference(null);
    this.v1z_1 = false;
    var tmp = this;
    tmp.w1z_1 = SnapshotStateObserver$applyObserver$lambda(this);
    var tmp_0 = this;
    tmp_0.x1z_1 = SnapshotStateObserver$readObserver$lambda(this);
    var tmp_1 = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp_1.y1z_1 = new MutableVector(tmp$ret$0, 0);
    this.z1z_1 = createSynchronizedObject();
    this.a20_1 = null;
    this.b20_1 = false;
    this.c20_1 = null;
    this.d20_1 = 8;
  }
  protoOf(SnapshotStateObserver).l20 = function (scope, onValueChangedForScope, block) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.z1z_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.observeReads.<anonymous>' call
    var scopeMap = ensureMap(this, onValueChangedForScope);
    var oldPaused = this.b20_1;
    var oldMap = this.c20_1;
    try {
      this.b20_1 = false;
      this.c20_1 = scopeMap;
      scopeMap.g20(scope, this.x1z_1, block);
    }finally {
      this.c20_1 = oldMap;
      this.b20_1 = oldPaused;
    }
  };
  protoOf(SnapshotStateObserver).m20 = function (scope) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.z1z_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_forEach = this.y1z_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = tmp0_forEach.d18_1;
    var tmp;
    if (size > 0) {
      var i = 0;
      var tmp_0 = tmp0_forEach.b18_1;
      var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.clear.<anonymous>' call
        content[i].h20(scope);
        i = i + 1 | 0;
      }
       while (i < size);
      tmp = Unit_getInstance();
    }
  };
  protoOf(SnapshotStateObserver).n20 = function (predicate) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.z1z_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_forEach = this.y1z_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = tmp0_forEach.d18_1;
    var tmp;
    if (size > 0) {
      var i = 0;
      var tmp_0 = tmp0_forEach.b18_1;
      var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.clearIf.<anonymous>' call
        content[i].i20(predicate);
        i = i + 1 | 0;
      }
       while (i < size);
      tmp = Unit_getInstance();
    }
  };
  protoOf(SnapshotStateObserver).o20 = function () {
    this.a20_1 = Companion_getInstance_11().v1j(this.w1z_1);
  };
  protoOf(SnapshotStateObserver).p20 = function () {
    var tmp0_safe_receiver = this.a20_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dj();
    }
  };
  protoOf(SnapshotStateObserver).f7 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.forEachScopeMap' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.z1z_1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_forEach = this.y1z_1;
    // Inline function 'kotlin.contracts.contract' call
    var size = tmp0_forEach.d18_1;
    var tmp;
    if (size > 0) {
      var i = 0;
      var tmp_0 = tmp0_forEach.b18_1;
      var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
      do {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateObserver.clear.<anonymous>' call
        content[i].f7();
        i = i + 1 | 0;
      }
       while (i < size);
      tmp = Unit_getInstance();
    }
  };
  function find_4($this, value, hash) {
    var low = 0;
    var high = $this.s1v_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.t1v_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.u1v_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yk();
        if (value === midVal)
          return mid;
        return findExactIndex_3($this, mid, value, hash);
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_3($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!($this.t1v_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp1_safe_receiver = $this.u1v_1[i];
        var v = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.yk();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.s1v_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.t1v_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp3_safe_receiver = $this.u1v_1[i_0];
        var v_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.yk();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.s1v_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.s1v_1 = 0;
    this.t1v_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.u1v_1 = fillArrayVal(Array(16), null);
  }
  protoOf(SnapshotWeakSet).f18 = function (value) {
    var index;
    var size = this.s1v_1;
    var hash = identityHashCode(value);
    if (size > 0) {
      index = find_4(this, value, hash);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var capacity = this.u1v_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = fillArrayVal(Array(newCapacity), null);
      var newHashes = new Int32Array(newCapacity);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.u1v_1;
      var tmp1_copyInto = insertIndex + 1 | 0;
      arrayCopy(tmp0_copyInto, newValues, tmp1_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = this.u1v_1;
      arrayCopy(tmp2_copyInto, newValues, 0, 0, insertIndex);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp3_copyInto = this.t1v_1;
      var tmp4_copyInto = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp3_copyInto;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newHashes, tmp4_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this.t1v_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.u1v_1 = newValues;
      this.t1v_1 = newHashes;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      var tmp6_copyInto = this.u1v_1;
      var tmp7_copyInto = this.u1v_1;
      var tmp8_copyInto = insertIndex + 1 | 0;
      arrayCopy(tmp6_copyInto, tmp7_copyInto, tmp8_copyInto, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var tmp9_copyInto = this.t1v_1;
      var tmp10_copyInto = this.t1v_1;
      var tmp11_copyInto = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = tmp9_copyInto;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, tmp10_copyInto, tmp11_copyInto, insertIndex, size);
    }
    this.u1v_1[insertIndex] = new WeakReference(value);
    this.t1v_1[insertIndex] = hash;
    this.s1v_1 = this.s1v_1 + 1 | 0;
    return true;
  };
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (!properties_initialized_InspectionTables_kt_tgdbmt) {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function set_nextHash(_set____db54di) {
    _init_properties_ActualJs_js_kt__rh77u6();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return nextHash;
  }
  var nextHash;
  var DefaultMonotonicFrameClock;
  function AtomicReference(value) {
    this.r1b_1 = value;
    this.s1b_1 = 8;
  }
  protoOf(AtomicReference).yk = function () {
    return this.r1b_1;
  };
  protoOf(AtomicReference).n1c = function (value) {
    this.r1b_1 = value;
  };
  protoOf(AtomicReference).t1b = function (value) {
    var oldValue = this.r1b_1;
    this.r1b_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).c1d = function (expect, newValue) {
    var tmp;
    if (equals(expect, this.r1b_1)) {
      this.r1b_1 = newValue;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function getCurrentThreadId() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new Long(0, 0);
  }
  function identityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    if (instance == null) {
      return 0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var hashCode = instance['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp;
    switch (typeof instance) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function AtomicInt(value) {
    this.t1u_1 = value;
  }
  protoOf(AtomicInt).l1t = function (amount) {
    this.t1u_1 = this.t1u_1 + amount | 0;
    return this.t1u_1;
  };
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $safe) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      $safe.r3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function $withFrameNanosCOROUTINE$4(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y20_1 = _this__u8e3s4;
    this.z20_1 = onFrame;
  }
  protoOf($withFrameNanosCOROUTINE$4).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 2;
            this.xd_1 = 1;
            var safe = SafeContinuation_init_$Create$(intercepted(this));
            var tmp_0 = window;
            tmp_0.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.z20_1, safe));
            suspendResult = returnIfSuspended(safe.ua(), this);
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
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).hx = function (onFrame, $completion) {
    var tmp = new $withFrameNanosCOROUTINE$4(this, onFrame, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  function memoizeIdentityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  function logError(message, e) {
    _init_properties_ActualJs_js_kt__rh77u6();
    println(message);
    printStackTrace(e);
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function _init_properties_ActualJs_js_kt__rh77u6() {
    if (!properties_initialized_ActualJs_js_kt_azbr3k) {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
    Trace_instance = this;
  }
  protoOf(Trace).p17 = function (name) {
    return null;
  };
  protoOf(Trace).h18 = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    if (Trace_instance == null)
      new Trace();
    return Trace_instance;
  }
  function invokeComposableForResult$composable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    return composable(composer, 1);
  }
  function invokeComposable$composable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    composable(composer, 1);
  }
  function trackWrite($this) {
    if ($this.g1q_1) {
      var scope = $this.i1q_1;
      if (!(scope == null)) {
        scope.p1d();
        $this.i1q_1 = null;
      }
      var scopes = $this.j1q_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.f();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.l(index);
            item.p1d();
          }
           while (inductionVariable < last);
        scopes.f7();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.g1q_1) {
      var scope = composer.xy();
      if (!(scope == null)) {
        composer.uz(scope);
        var lastScope = $this.i1q_1;
        if (replacableWith(lastScope, scope)) {
          $this.i1q_1 = scope;
        } else {
          var lastScopes = $this.j1q_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.j1q_1 = newScopes;
            newScopes.a(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.f();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.l(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.b7(index, scope);
                  return Unit_getInstance();
                }
              }
               while (inductionVariable < last);
            lastScopes.a(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.i19(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.a21($p1, nc, $changed | 1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl(key, tracked) {
    this.f1q_1 = key;
    this.g1q_1 = tracked;
    this.h1q_1 = null;
    this.i1q_1 = null;
    this.j1q_1 = null;
  }
  protoOf(ComposableLambdaImpl).k1q = function (block) {
    if (!equals(this.h1q_1, block)) {
      var oldBlockNull = this.h1q_1 == null;
      this.h1q_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).i19 = function (c, changed) {
    var c_0 = c.cz(this.f1q_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.pz(this) ? differentBits(0) : sameBits(0));
    var tmp = this.h1q_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.dz();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1e(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).a21 = function (p1, c, changed) {
    var c_0 = c.cz(this.f1q_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.pz(this) ? differentBits(1) : sameBits(1));
    var tmp = this.h1q_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.dz();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l1e(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  function createSnapshotMutableState(value, policy) {
    return new SnapshotMutableStateImpl(value, policy);
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  function IntMap() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.a14_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IntMap).l = function (key) {
    return this.a14_1.l2(key);
  };
  protoOf(IntMap).u16 = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.a14_1.g3(key, value);
  };
  protoOf(IntMap).f7 = function () {
    this.a14_1.f7();
  };
  function WeakReference(reference) {
    this.v1v_1 = reference;
  }
  protoOf(WeakReference).yk = function () {
    return this.v1v_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).ew = onBeginChanges;
  protoOf(OffsetApplier).fw = onEndChanges;
  protoOf(AbstractApplier).ew = onBeginChanges;
  protoOf(AbstractApplier).fw = onEndChanges;
  protoOf(BroadcastFrameClock).u1 = get_key;
  protoOf(BroadcastFrameClock).j4 = get;
  protoOf(BroadcastFrameClock).p4 = fold;
  protoOf(BroadcastFrameClock).o4 = minusKey;
  protoOf(BroadcastFrameClock).q4 = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.f6();
  }, VOID);
  protoOf(StructuralEqualityPolicy).t1k = merge;
  protoOf(NeverEqualPolicy).t1k = merge;
  protoOf(ReferentialEqualityPolicy).t1k = merge;
  protoOf(SnapshotStateMap).f1l = mergeRecords;
  protoOf(MonotonicClockImpl).u1 = get_key;
  protoOf(MonotonicClockImpl).j4 = get;
  protoOf(MonotonicClockImpl).p4 = fold;
  protoOf(MonotonicClockImpl).o4 = minusKey;
  protoOf(MonotonicClockImpl).q4 = plus;
  //endregion
  //region block: init
  movableContentKey = 126665345;
  TRIE_MAX_HEIGHT = 7;
  ENTRY_SIZE = 2;
  LOG_MAX_BRANCHING_FACTOR = 5;
  MAX_SHIFT = 30;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MutableVector;
  _.$_$.b = composableLambdaInstance;
  _.$_$.c = composableLambda;
  _.$_$.d = SnapshotMutableState;
  _.$_$.e = SnapshotStateObserver;
  _.$_$.f = $get_currentCompositeKeyHash$$composable_u3vbzj;
  _.$_$.g = AbstractApplier;
  _.$_$.h = onBeginChanges;
  _.$_$.i = Applier;
  _.$_$.j = AtomicReference;
  _.$_$.k = BroadcastFrameClock;
  _.$_$.l = ComposeNodeLifecycleCallback;
  _.$_$.m = CompositionLocalProvider$composable;
  _.$_$.n = CompositionLocalProvider$composable_0;
  _.$_$.o = Composition;
  _.$_$.p = DisposableEffect$composable_0;
  _.$_$.q = DisposableEffect$composable;
  _.$_$.r = LaunchedEffect$composable;
  _.$_$.s = Recomposer;
  _.$_$.t = RememberObserver;
  _.$_$.u = SideEffect$composable;
  _.$_$.v = SkippableUpdater;
  _.$_$.w = compositionLocalOf;
  _.$_$.x = identityHashCode;
  _.$_$.y = invalidApplier;
  _.$_$.z = isTraceInProgress;
  _.$_$.a1 = mutableStateMapOf;
  _.$_$.b1 = mutableStateOf;
  _.$_$.c1 = neverEqualPolicy;
  _.$_$.d1 = referentialEqualityPolicy;
  _.$_$.e1 = rememberUpdatedState$composable;
  _.$_$.f1 = sourceInformationMarkerEnd;
  _.$_$.g1 = sourceInformationMarkerStart;
  _.$_$.h1 = sourceInformation;
  _.$_$.i1 = staticCompositionLocalOf;
  _.$_$.j1 = structuralEqualityPolicy;
  _.$_$.k1 = traceEventEnd;
  _.$_$.l1 = traceEventStart;
  _.$_$.m1 = updateChangedFlags;
  _.$_$.n1 = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.o1 = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.p1 = _Updater___init__impl__rbfxm8;
  _.$_$.q1 = _Updater___get_composer__impl__9ty7av;
  _.$_$.r1 = Updater__set_impl_v7kwss;
  _.$_$.s1 = Companion_getInstance_11;
  _.$_$.t1 = Companion_getInstance_1;
  _.$_$.u1 = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-runtime.js.map
