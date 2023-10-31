(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.f7;
  var THROW_CCE = kotlin_kotlin.$_$.m9;
  var isObject = kotlin_kotlin.$_$.x6;
  var Unit_getInstance = kotlin_kotlin.$_$.m2;
  var plus = kotlin_kotlin.$_$.u5;
  var get = kotlin_kotlin.$_$.r5;
  var fold = kotlin_kotlin.$_$.q5;
  var minusKey = kotlin_kotlin.$_$.s5;
  var Continuation = kotlin_kotlin.$_$.p5;
  var classMeta = kotlin_kotlin.$_$.g6;
  var VOID = kotlin_kotlin.$_$.na;
  var setMetadataFor = kotlin_kotlin.$_$.g7;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.f2;
  var Key_getInstance = kotlin_kotlin.$_$.e2;
  var equals = kotlin_kotlin.$_$.j6;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.i5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var intercepted = kotlin_kotlin.$_$.j5;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h5;
  var interfaceMeta = kotlin_kotlin.$_$.t6;
  var isInterface = kotlin_kotlin.$_$.w6;
  var toString = kotlin_kotlin.$_$.ja;
  var toString_0 = kotlin_kotlin.$_$.j7;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.e7;
  var hashCode = kotlin_kotlin.$_$.r6;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.q;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.w1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.y1;
  var Companion_getInstance = kotlin_kotlin.$_$.k2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.v1;
  var createFailure = kotlin_kotlin.$_$.s9;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.l5;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.k5;
  var get_0 = kotlin_kotlin.$_$.m5;
  var minusKey_0 = kotlin_kotlin.$_$.n5;
  var ContinuationInterceptor = kotlin_kotlin.$_$.o5;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Enum = kotlin_kotlin.$_$.d9;
  var startCoroutine = kotlin_kotlin.$_$.x5;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.z9;
  var Long = kotlin_kotlin.$_$.h9;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.j2;
  var RuntimeException = kotlin_kotlin.$_$.l9;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.n1;
  var captureStack = kotlin_kotlin.$_$.b6;
  var Error_0 = kotlin_kotlin.$_$.e9;
  var Error_init_$Init$ = kotlin_kotlin.$_$.a1;
  var Element = kotlin_kotlin.$_$.t5;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.w;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.fa;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var CancellationException = kotlin_kotlin.$_$.g5;
  var ArrayList = kotlin_kotlin.$_$.t2;
  var CoroutineImpl = kotlin_kotlin.$_$.v5;
  var SequenceScope = kotlin_kotlin.$_$.b8;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var sequence = kotlin_kotlin.$_$.h8;
  var anyToString = kotlin_kotlin.$_$.z5;
  var UnsupportedOperationException = kotlin_kotlin.$_$.p9;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.p;
  var returnIfSuspended = kotlin_kotlin.$_$.e;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var fillArrayVal = kotlin_kotlin.$_$.k6;
  var fill = kotlin_kotlin.$_$.v3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var ensureNotNull = kotlin_kotlin.$_$.t9;
  var NoSuchElementException = kotlin_kotlin.$_$.i9;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.k1;
  var IllegalStateException = kotlin_kotlin.$_$.g9;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.f1;
  var arrayIterator = kotlin_kotlin.$_$.a6;
  var arrayCopy = kotlin_kotlin.$_$.d3;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.h2;
  var toLong = kotlin_kotlin.$_$.h7;
  var toLongOrNull = kotlin_kotlin.$_$.u8;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.r;
  var getStringHashCode = kotlin_kotlin.$_$.q6;
  var coerceIn = kotlin_kotlin.$_$.v7;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.k;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.p1;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.jg(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.jg.call(this, cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.fg(onCancelling, invokeImmediately, handler) : $super.fg.call(this, onCancelling, invokeImmediately, handler);
  }
  setMetadataFor(Job, 'Job', interfaceMeta, VOID, [Element], VOID, VOID, [0]);
  setMetadataFor(ParentJob, 'ParentJob', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(JobSupport, 'JobSupport', classMeta, VOID, [Job, ParentJob], VOID, VOID, [0]);
  setMetadataFor(CoroutineScope, 'CoroutineScope', interfaceMeta);
  setMetadataFor(AbstractCoroutine, 'AbstractCoroutine', classMeta, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], VOID, VOID, [0]);
  setMetadataFor(StandaloneCoroutine, 'StandaloneCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', classMeta, StandaloneCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(ScopeCoroutine, 'ScopeCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(DispatchedCoroutine, 'DispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  function tryResume$default(value, idempotent, $super) {
    idempotent = idempotent === VOID ? null : idempotent;
    return $super === VOID ? this.oh(value, idempotent) : $super.oh.call(this, value, idempotent);
  }
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.th(cause) : $super.th.call(this, cause);
  }
  setMetadataFor(CancellableContinuation, 'CancellableContinuation', interfaceMeta, VOID, [Continuation]);
  setMetadataFor(SchedulerTask, 'SchedulerTask', classMeta);
  setMetadataFor(DispatchedTask, 'DispatchedTask', classMeta, SchedulerTask);
  setMetadataFor(CancellableContinuationImpl, 'CancellableContinuationImpl', classMeta, DispatchedTask, [DispatchedTask, CancellableContinuation]);
  setMetadataFor(CancelHandlerBase, 'CancelHandlerBase', classMeta);
  setMetadataFor(NotCompleted, 'NotCompleted', interfaceMeta);
  setMetadataFor(CancelHandler, 'CancelHandler', classMeta, CancelHandlerBase, [CancelHandlerBase, NotCompleted]);
  setMetadataFor(Active, 'Active', objectMeta, VOID, [NotCompleted]);
  setMetadataFor(CompletedContinuation, 'CompletedContinuation', classMeta);
  setMetadataFor(BeforeResumeCancelHandler, 'BeforeResumeCancelHandler', classMeta, CancelHandler);
  setMetadataFor(InvokeOnCancel, 'InvokeOnCancel', classMeta, CancelHandler);
  setMetadataFor(CompletedExceptionally, 'CompletedExceptionally', classMeta);
  setMetadataFor(CancelledContinuation, 'CancelledContinuation', classMeta, CompletedExceptionally);
  setMetadataFor(CompletedWithCancellation, 'CompletedWithCancellation', classMeta);
  setMetadataFor(Key, 'Key', objectMeta, AbstractCoroutineContextKey);
  setMetadataFor(CoroutineDispatcher, 'CoroutineDispatcher', classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  setMetadataFor(Key_0, 'Key', objectMeta);
  setMetadataFor(CoroutineStart, 'CoroutineStart', classMeta, Enum);
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().dk(timeMillis, block, context);
  }
  setMetadataFor(Delay, 'Delay', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(EventLoop, 'EventLoop', classMeta, CoroutineDispatcher);
  setMetadataFor(ThreadLocalEventLoop, 'ThreadLocalEventLoop', objectMeta);
  setMetadataFor(CompletionHandlerException, 'CompletionHandlerException', classMeta, RuntimeException);
  setMetadataFor(CoroutinesInternalError, 'CoroutinesInternalError', classMeta, Error_0);
  setMetadataFor(Key_1, 'Key', objectMeta);
  setMetadataFor(ChildHandle, 'ChildHandle', interfaceMeta);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, VOID, [ChildHandle]);
  setMetadataFor(Incomplete, 'Incomplete', interfaceMeta);
  setMetadataFor(Empty, 'Empty', classMeta, VOID, [Incomplete]);
  setMetadataFor(LinkedListNode, 'LinkedListNode', classMeta);
  setMetadataFor(LinkedListHead, 'LinkedListHead', classMeta, LinkedListNode);
  setMetadataFor(NodeList, 'NodeList', classMeta, LinkedListHead, [LinkedListHead, Incomplete]);
  setMetadataFor(CompletionHandlerBase, 'CompletionHandlerBase', classMeta, LinkedListNode);
  setMetadataFor(JobNode, 'JobNode', classMeta, CompletionHandlerBase, [CompletionHandlerBase, Incomplete]);
  setMetadataFor(Finishing, 'Finishing', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildCompletion, 'ChildCompletion', classMeta, JobNode);
  setMetadataFor(JobSupport$_get_children_$slambda_k839f8, 'JobSupport$<get-children>$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(JobCancellingNode, 'JobCancellingNode', classMeta, JobNode);
  setMetadataFor(InactiveNodeList, 'InactiveNodeList', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildHandleNode, 'ChildHandleNode', classMeta, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  setMetadataFor(InvokeOnCancelling, 'InvokeOnCancelling', classMeta, JobCancellingNode);
  setMetadataFor(InvokeOnCompletion, 'InvokeOnCompletion', classMeta, JobNode);
  setMetadataFor(IncompleteStateBox, 'IncompleteStateBox', classMeta);
  setMetadataFor(ChildContinuation, 'ChildContinuation', classMeta, JobCancellingNode);
  setMetadataFor(JobImpl, 'JobImpl', classMeta, JobSupport, [JobSupport, Job], VOID, VOID, [0]);
  setMetadataFor(DisposeOnCompletion, 'DisposeOnCompletion', classMeta, JobNode);
  setMetadataFor(MainCoroutineDispatcher, 'MainCoroutineDispatcher', classMeta, CoroutineDispatcher);
  setMetadataFor(SupervisorJobImpl, 'SupervisorJobImpl', classMeta, JobImpl, VOID, VOID, VOID, [0]);
  setMetadataFor(TimeoutCancellationException, 'TimeoutCancellationException', classMeta, CancellationException);
  setMetadataFor(TimeoutCoroutine, 'TimeoutCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor($withTimeoutOrNullCOROUTINE$3, '$withTimeoutOrNullCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(Unconfined, 'Unconfined', objectMeta, CoroutineDispatcher);
  setMetadataFor(Key_2, 'Key', objectMeta);
  setMetadataFor(YieldContext, 'YieldContext', classMeta, AbstractCoroutineContextElement);
  setMetadataFor(RemoveReceiveOnCancel, 'RemoveReceiveOnCancel', classMeta, BeforeResumeCancelHandler);
  setMetadataFor(Itr, 'Itr', classMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(ReceiveOrClosed, 'ReceiveOrClosed', interfaceMeta);
  setMetadataFor(Receive, 'Receive', classMeta, LinkedListNode, [LinkedListNode, ReceiveOrClosed]);
  setMetadataFor(ReceiveHasNext, 'ReceiveHasNext', classMeta, Receive);
  setMetadataFor(AbstractSendChannel, 'AbstractSendChannel', classMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(AbstractChannel, 'AbstractChannel', classMeta, AbstractSendChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(Send, 'Send', classMeta, LinkedListNode);
  setMetadataFor(SendBuffered, 'SendBuffered', classMeta, Send);
  setMetadataFor(Closed, 'Closed', classMeta, Send, [Send, ReceiveOrClosed]);
  setMetadataFor(ArrayChannel, 'ArrayChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(BufferOverflow, 'BufferOverflow', classMeta, Enum);
  setMetadataFor(Factory, 'Factory', objectMeta);
  setMetadataFor(Failed, 'Failed', classMeta);
  setMetadataFor(Closed_0, 'Closed', classMeta, Failed);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ClosedReceiveChannelException, 'ClosedReceiveChannelException', classMeta, NoSuchElementException);
  setMetadataFor(ClosedSendChannelException, 'ClosedSendChannelException', classMeta, IllegalStateException);
  setMetadataFor(ConflatedChannel, 'ConflatedChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(LinkedListChannel, 'LinkedListChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(RendezvousChannel, 'RendezvousChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(AbstractSharedFlow, 'AbstractSharedFlow', classMeta);
  setMetadataFor(StateFlowImpl, 'StateFlowImpl', classMeta, AbstractSharedFlow, VOID, VOID, VOID, [1]);
  setMetadataFor(ArrayQueue, 'ArrayQueue', classMeta);
  setMetadataFor(OpDescriptor, 'OpDescriptor', classMeta);
  setMetadataFor(DispatchedContinuation, 'DispatchedContinuation', classMeta, DispatchedTask, [DispatchedTask, Continuation]);
  setMetadataFor(UndeliveredElementException, 'UndeliveredElementException', classMeta, RuntimeException);
  setMetadataFor(ContextScope, 'ContextScope', classMeta, VOID, [CoroutineScope]);
  setMetadataFor(Symbol, 'Symbol', classMeta);
  setMetadataFor(UndispatchedCoroutine, 'UndispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(Dispatchers, 'Dispatchers', objectMeta);
  setMetadataFor(JsMainDispatcher, 'JsMainDispatcher', classMeta, MainCoroutineDispatcher);
  setMetadataFor(UnconfinedEventLoop, 'UnconfinedEventLoop', classMeta, EventLoop);
  setMetadataFor(JobCancellationException, 'JobCancellationException', classMeta, CancellationException);
  setMetadataFor(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, [1]);
  setMetadataFor(NodeDispatcher, 'NodeDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, [1]);
  setMetadataFor(SetTimeoutDispatcher, 'SetTimeoutDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, [1]);
  setMetadataFor(MessageQueue, 'MessageQueue', classMeta, ArrayQueue);
  setMetadataFor(ScheduledMessageQueue, 'ScheduledMessageQueue', classMeta, MessageQueue);
  setMetadataFor(ClearTimeout, 'ClearTimeout', classMeta, CancelHandler);
  setMetadataFor(WindowDispatcher$invokeOnTimeout$1, VOID, classMeta);
  setMetadataFor(WindowDispatcher, 'WindowDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, [1]);
  setMetadataFor(WindowMessageQueue, 'WindowMessageQueue', classMeta, MessageQueue);
  setMetadataFor(NoOpLock, 'NoOpLock', classMeta);
  setMetadataFor(CommonThreadLocal, 'CommonThreadLocal', classMeta);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.ze(parentContext.j4(Key_getInstance_2()));
    }
    this.cf_1 = parentContext.q4(this);
  }
  protoOf(AbstractCoroutine).t3 = function () {
    return this.cf_1;
  };
  protoOf(AbstractCoroutine).df = function () {
    return this.cf_1;
  };
  protoOf(AbstractCoroutine).ef = function () {
    return protoOf(JobSupport).ef.call(this);
  };
  protoOf(AbstractCoroutine).ff = function (value) {
  };
  protoOf(AbstractCoroutine).gf = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).hf = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).if = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.gf(state.jf_1, state.lf());
    } else {
      this.ff((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).r3 = function (result) {
    var state = this.mf(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.nf(state);
  };
  protoOf(AbstractCoroutine).nf = function (state) {
    return this.of(state);
  };
  protoOf(AbstractCoroutine).pf = function (exception) {
    handleCoroutineException(this.cf_1, exception);
  };
  protoOf(AbstractCoroutine).qf = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.cf_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).qf.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).qf.call(this);
  };
  protoOf(AbstractCoroutine).rf = function (start, receiver, block) {
    start.uf(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.wg() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.rf(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var oldContext = $completion.t3();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.j4(Key_getInstance()), oldContext.j4(Key_getInstance()))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.ch();
    }
    return tmp$ret$0;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).ug = function (exception) {
    handleCoroutineException(this.cf_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.jh_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).ag = function () {
    startCoroutineCancellable_0(this.jh_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.bh_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      switch (tmp0_loop.kotlinx$atomicfu$value) {
        case 0:
          if ($this.bh_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.bh_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      switch (tmp0_loop.kotlinx$atomicfu$value) {
        case 0:
          if ($this.bh_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.bh_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).of = function (state) {
    this.nf(state);
  };
  protoOf(DispatchedCoroutine).nf = function (state) {
    if (tryResume(this))
      return Unit_getInstance();
    resumeCancellableWith(intercepted(this.nh_1), recoverResult(state, this.nh_1));
  };
  protoOf(DispatchedCoroutine).ch = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.xf());
    if (state instanceof CompletedExceptionally)
      throw state.jf_1;
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  function CancellableContinuation() {
  }
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.ei();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      if (tmp0_safe_receiver.li()) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE_REUSABLE());
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.xf();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.ni_1)) {
      var tmp_0 = $this.gi_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).mi();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.gi_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.oi(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      invokeIt(handler, cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.t3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, ex));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.ii_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      switch (tmp0_loop.kotlinx$atomicfu$value) {
        case 0:
          if ($this.ii_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.ii_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      switch (tmp0_loop.kotlinx$atomicfu$value) {
        case 0:
          if ($this.ii_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.t3().j4(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new ChildContinuation($this);
    var handle = parent.gg(true, VOID, tmp$ret$1);
    $this.ki_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.gi_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pi($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.qi();
    $this.th(cancellationCause);
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var tmp0_error = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, state instanceof CancelHandler ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.ji_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
        if (!(tmp1_anonymous == null) ? isInterface(tmp1_anonymous, NotCompleted) : false) {
          var update = resumedState($this, tmp1_anonymous, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.ji_1.atomicfu$compareAndSet(tmp1_anonymous, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp1_anonymous instanceof CancelledContinuation) {
            if (tmp1_anonymous.vi()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.ri(onCancellation, tmp1_anonymous.jf_1);
              }
              return Unit_getInstance();
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.ji_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
        if (!(tmp1_anonymous == null) ? isInterface(tmp1_anonymous, NotCompleted) : false) {
          var update = resumedState($this, tmp1_anonymous, proposedUpdate, $this.ni_1, onCancellation, idempotent);
          if (!$this.ji_1.atomicfu$compareAndSet(tmp1_anonymous, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp1_anonymous instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) ? tmp1_anonymous.zi_1 === idempotent : false) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.qi();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.gi_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.hi_1 = this.gi_1.t3();
    this.ii_1 = atomic$int$1(0);
    this.ji_1 = atomic$ref$1(Active_getInstance());
    this.ki_1 = null;
  }
  protoOf(CancellableContinuationImpl).bj = function () {
    return this.gi_1;
  };
  protoOf(CancellableContinuationImpl).t3 = function () {
    return this.hi_1;
  };
  protoOf(CancellableContinuationImpl).xf = function () {
    return this.ji_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).yf = function () {
    var tmp = this.xf();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).cj = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.yf()) {
      handle.dj();
      this.ki_1 = NonDisposableHandle_getInstance();
    }
  };
  protoOf(CancellableContinuationImpl).li = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.ji_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.zi_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.qi();
      return false;
    }
    this.ii_1.kotlinx$atomicfu$value = 0;
    this.ji_1.kotlinx$atomicfu$value = Active_getInstance();
    return true;
  };
  protoOf(CancellableContinuationImpl).ej = function () {
    return this.xf();
  };
  protoOf(CancellableContinuationImpl).fj = function (takenState, cause) {
    var tmp0_loop = this.ji_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1_anonymous == null) ? isInterface(tmp1_anonymous, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('Not completed');
      } else {
        if (tmp1_anonymous instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (tmp1_anonymous instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!!tmp1_anonymous.gj()) {
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              var message = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString_0(message));
            }
            var update = tmp1_anonymous.hj(VOID, VOID, VOID, VOID, cause);
            if (this.ji_1.atomicfu$compareAndSet(tmp1_anonymous, update)) {
              tmp1_anonymous.ij(this, cause);
              return Unit_getInstance();
            }
          } else {
            if (this.ji_1.atomicfu$compareAndSet(tmp1_anonymous, new CompletedContinuation(tmp1_anonymous, VOID, VOID, VOID, cause))) {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  protoOf(CancellableContinuationImpl).th = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.ji_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
        if (!(!(tmp1_anonymous == null) ? isInterface(tmp1_anonymous, NotCompleted) : false))
          return false;
        var update = new CancelledContinuation(this, cause, tmp1_anonymous instanceof CancelHandler);
        if (!this.ji_1.atomicfu$compareAndSet(tmp1_anonymous, update)) {
          break $l$block;
        }
        var tmp0_safe_receiver = tmp1_anonymous instanceof CancelHandler ? tmp1_anonymous : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          this.jj(tmp0_safe_receiver, cause);
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.ni_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).kj = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.th(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).jj = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.t3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, ex));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).ri = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.t3(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).lj = function (parent) {
    return parent.bg();
  };
  protoOf(CancellableContinuationImpl).ch = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (this.ki_1 == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this.xf();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.jf_1, this);
    if (get_isCancellableMode(this.ni_1)) {
      var job = this.t3().j4(Key_getInstance_2());
      if (!(job == null) ? !job.ef() : false) {
        var cause = job.bg();
        this.fj(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.mj(state);
  };
  protoOf(CancellableContinuationImpl).r3 = function (result) {
    return resumeImpl$default(this, toState(result, this), this.ni_1);
  };
  protoOf(CancellableContinuationImpl).xh = function (value, onCancellation) {
    return resumeImpl(this, value, this.ni_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).vh = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.ji_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1_anonymous instanceof Active) {
        if (this.ji_1.atomicfu$compareAndSet(tmp1_anonymous, cancelHandler))
          return Unit_getInstance();
      } else {
        if (tmp1_anonymous instanceof CancelHandler) {
          multipleHandlersError(this, handler, tmp1_anonymous);
        } else {
          if (tmp1_anonymous instanceof CompletedExceptionally) {
            if (!tmp1_anonymous.nj()) {
              multipleHandlersError(this, handler, tmp1_anonymous);
            }
            if (tmp1_anonymous instanceof CancelledContinuation) {
              var tmp1_safe_receiver = tmp1_anonymous instanceof CompletedExceptionally ? tmp1_anonymous : null;
              callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.jf_1);
            }
            return Unit_getInstance();
          } else {
            if (tmp1_anonymous instanceof CompletedContinuation) {
              if (!(tmp1_anonymous.xi_1 == null)) {
                multipleHandlersError(this, handler, tmp1_anonymous);
              }
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              if (tmp1_anonymous.gj()) {
                callCancelHandler(this, handler, tmp1_anonymous.aj_1);
                return Unit_getInstance();
              }
              var update = tmp1_anonymous.hj(VOID, cancelHandler);
              if (this.ji_1.atomicfu$compareAndSet(tmp1_anonymous, update))
                return Unit_getInstance();
            } else {
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              var update_0 = new CompletedContinuation(tmp1_anonymous, cancelHandler);
              if (this.ji_1.atomicfu$compareAndSet(tmp1_anonymous, update_0))
                return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  protoOf(CancellableContinuationImpl).qi = function () {
    var tmp0_elvis_lhs = this.ki_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.dj();
    this.ki_1 = NonDisposableHandle_getInstance();
  };
  protoOf(CancellableContinuationImpl).oh = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  protoOf(CancellableContinuationImpl).qh = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).rh = function (exception) {
    return tryResumeImpl(this, new CompletedExceptionally(exception), null, null);
  };
  protoOf(CancellableContinuationImpl).sh = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.ni_1);
  };
  protoOf(CancellableContinuationImpl).wh = function (_this__u8e3s4, value) {
    var tmp = this.gi_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.zh_1) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.ni_1;
    }
    resumeImpl$default(this, value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).mj = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.wi_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).oj = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).oj.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.gi_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.qf() + '(' + toDebugString(this.gi_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).qf = function () {
    return 'CancellableContinuation';
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  function Active() {
    Active_instance = this;
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.wi_1 = result;
    this.xi_1 = cancelHandler;
    this.yi_1 = onCancellation;
    this.zi_1 = idempotentResume;
    this.aj_1 = cancelCause;
  }
  protoOf(CompletedContinuation).gj = function () {
    return !(this.aj_1 == null);
  };
  protoOf(CompletedContinuation).ij = function (cont, cause) {
    var tmp0_safe_receiver = this.xi_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.jj(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.yi_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.ri(tmp1_safe_receiver, cause);
    }
  };
  protoOf(CompletedContinuation).rj = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).hj = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.wi_1 : result;
    cancelHandler = cancelHandler === VOID ? this.xi_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.yi_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.zi_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.aj_1 : cancelCause;
    return $super === VOID ? this.rj(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.rj.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString(this.wi_1) + ', cancelHandler=' + this.xi_1 + ', onCancellation=' + this.yi_1 + ', idempotentResume=' + toString(this.zi_1) + ', cancelCause=' + this.aj_1 + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.wi_1 == null ? 0 : hashCode(this.wi_1);
    result = imul(result, 31) + (this.xi_1 == null ? 0 : hashCode(this.xi_1)) | 0;
    result = imul(result, 31) + (this.yi_1 == null ? 0 : hashCode(this.yi_1)) | 0;
    result = imul(result, 31) + (this.zi_1 == null ? 0 : hashCode(this.zi_1)) | 0;
    result = imul(result, 31) + (this.aj_1 == null ? 0 : hashCode(this.aj_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.wi_1, tmp0_other_with_cast.wi_1))
      return false;
    if (!equals(this.xi_1, tmp0_other_with_cast.xi_1))
      return false;
    if (!equals(this.yi_1, tmp0_other_with_cast.yi_1))
      return false;
    if (!equals(this.zi_1, tmp0_other_with_cast.zi_1))
      return false;
    if (!equals(this.aj_1, tmp0_other_with_cast.aj_1))
      return false;
    return true;
  };
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.sj_1 = handler;
  }
  protoOf(InvokeOnCancel).tj = function (cause) {
    this.sj_1(cause);
  };
  protoOf(InvokeOnCancel).invoke = function (cause) {
    return this.tj(cause);
  };
  protoOf(InvokeOnCancel).toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.sj_1) + '@' + get_hexAddress(this) + ']';
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.jf_1 = cause;
    this.kf_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).lf = function () {
    return this.kf_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).nj = function () {
    return this.kf_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.jf_1 + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : cause, handled);
    this.ui_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).vi = function () {
    return this.ui_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0_anonymous = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp = !(onCancellation == null) ? new CompletedWithCancellation(tmp0_anonymous, onCancellation) : tmp0_anonymous;
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.uj_1 = result;
    this.vj_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.uj_1) + ', onCancellation=' + this.vj_1 + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.uj_1 == null ? 0 : hashCode(this.uj_1);
    result = imul(result, 31) + hashCode(this.vj_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.uj_1, tmp0_other_with_cast.uj_1))
      return false;
    if (!equals(this.vj_1, tmp0_other_with_cast.vj_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      var tmp1_failure = recoverStackTrace(state.jf_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
    } else {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp3_success = (state == null ? true : isObject(state)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(tmp3_success);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(CoroutineDispatcher).xj = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).zj = function (context, block) {
    return this.yj(context, block);
  };
  protoOf(CoroutineDispatcher).h4 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).i4 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.ak();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.j4(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.bk(context, exception);
        return Unit_getInstance();
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleCoroutineExceptionImpl(context, handlerException(exception, t));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_0() {
    Key_instance_0 = this;
  }
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_0();
    return Key_instance_0;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    return RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
  }
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.j4(Key_getInstance_2()) == null) ? context : context.q4(Job_0()));
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var coroutine = new ScopeCoroutine($completion.t3(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function cancel(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.df().j4(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Scope cannot be cancelled because it does not have a job: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.jg(cause);
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).uf = function (block, receiver, completion) {
    var tmp;
    switch (this.w4_1) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).wg = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function Delay() {
  }
  function delay(timeMillis, $completion) {
    if (timeMillis.s(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.cj();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    Companion_getInstance_0();
    if (timeMillis.s(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.t3()).ck(timeMillis, cancellable);
    }
    return cancellable.ch();
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.j4(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.fk_1 = new Long(0, 0);
    this.gk_1 = false;
    this.hk_1 = null;
  }
  protoOf(EventLoop).ik = function () {
    var tmp0_elvis_lhs = this.hk_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.mk();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.pj();
    return true;
  };
  protoOf(EventLoop).nk = function (task) {
    var tmp0_elvis_lhs = this.hk_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new ArrayQueue();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.hk_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.ok(task);
  };
  protoOf(EventLoop).pk = function () {
    return this.fk_1.s(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).qk = function () {
    var tmp0_safe_receiver = this.hk_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.rk();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).sk = function (unconfined) {
    this.fk_1 = this.fk_1.m5(delta(this, unconfined));
    if (!unconfined)
      this.gk_1 = true;
  };
  protoOf(EventLoop).tk = function (unconfined) {
    this.fk_1 = this.fk_1.n5(delta(this, unconfined));
    if (this.fk_1.s(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.gk_1) {
      this.uk();
    }
  };
  protoOf(EventLoop).uk = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.vk_1 = new CommonThreadLocal();
  }
  protoOf(ThreadLocalEventLoop).wk = function () {
    var tmp0_elvis_lhs = this.vk_1.yk();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().vk_1.zk(tmp0_also);
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_1() {
    Key_instance_1 = this;
  }
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_1();
    return Key_instance_1;
  }
  function Job() {
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  protoOf(NonDisposableHandle).dj = function () {
  };
  protoOf(NonDisposableHandle).ng = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.j4(Key_getInstance_2());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.ef())
      throw _this__u8e3s4.bg();
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.j4(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_isActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.j4(Key_getInstance_2());
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ef()) === true;
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new DisposeOnCompletion(handle);
    return _this__u8e3s4.eg(tmp$ret$1);
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.jg(CancellationException_init_$Create$_0(message, cause));
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.al_1 = isActive;
  }
  protoOf(Empty).ef = function () {
    return this.al_1;
  };
  protoOf(Empty).bl = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.al_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).ef = function () {
    return true;
  };
  protoOf(NodeList).bl = function () {
    return this;
  };
  protoOf(NodeList).fl = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    tmp0_apply.bc('List{');
    tmp0_apply.bc(state);
    tmp0_apply.bc('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.gl_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var tmp0_anonymous = cur;
        if (first)
          first = false;
        else {
          tmp0_apply.bc(', ');
        }
        tmp0_apply.ac(tmp0_anonymous);
      }
      cur = cur.gl_1;
    }
    tmp0_apply.bc(']');
    return tmp0_apply.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.fl('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  protoOf(JobNode).ul = function () {
    var tmp = this.tl_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).ef = function () {
    return true;
  };
  protoOf(JobNode).bl = function () {
    return null;
  };
  protoOf(JobNode).dj = function () {
    return this.ul().hg(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.ul()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.zl_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.zl_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jf_1;
    var wasCancelling = false;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.am();
    var exceptions = state.bm(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.ug(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).nj();
      }
    }
    if (!wasCancelling) {
      $this.rg(finalException);
    }
    $this.if(finalState);
    var casSuccess = $this.xe_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.k()) {
      if (state.am()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.hf() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.l(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.c();
        while (tmp0_iterator_0.d()) {
          var element_0 = tmp0_iterator_0.e();
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.f() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.f());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.c();
    while (tmp0_iterator.d()) {
      var exception = tmp0_iterator.e();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.a(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.xe_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.rg(null);
    $this.if(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.wf();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.dj();
      $this.vf(NonDisposableHandle_getInstance());
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.jf_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.pf(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.bl();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.rg(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.gl_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0_anonymous = cur;
        try {
          tmp0_anonymous.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0_anonymous + ' for ' + $this, ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.gl_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.pf(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.sg())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.wf();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.ng(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.gl_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0_anonymous = cur;
        try {
          tmp0_anonymous.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp = tmp0_safe_receiver;
            }
            if (tmp == null) {
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0_anonymous + ' for ' + $this, ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.gl_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.pf(tmp0_safe_receiver_0);
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.al_1)
        return 0;
      if (!$this.xe_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.ag();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.xe_1.atomicfu$compareAndSet(state, state.cm_1))
          return -1;
        $this.ag();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_0 = tmp1_safe_receiver;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.tl_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      if (!($this.xf() === expect)) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.nl(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.al_1 ? list : new InactiveNodeList(list);
    $this.xe_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.vl(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var list = state.gl_1;
    $this.xe_1.atomicfu$compareAndSet(state, list);
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var tmp0_anonymous = $this.xf();
      var tmp;
      if (!(!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (tmp0_anonymous instanceof Finishing) {
          tmp_0 = tmp0_anonymous.dm();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, tmp0_anonymous, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.hf() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).pg();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var tmp0_anonymous = $this.xf();
        if (tmp0_anonymous instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp0_anonymous.em())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0_anonymous.am();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var tmp0_also = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also;
              tmp = tmp0_also;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0_anonymous.fm(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var tmp1_takeIf = tmp0_anonymous.gm();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          if (!wasCancelling) {
            tmp_0 = tmp1_takeIf;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, tmp0_anonymous.wl_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var tmp0_also_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also_0;
              tmp_1 = tmp0_also_0;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0_anonymous.ef()) {
              if (tryMakeCancelling($this, tmp0_anonymous, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0_anonymous, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var tmp1_error = 'Cannot happen in ' + toString(tmp0_anonymous);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.bl();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var tmp0_error = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.xe_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (finishing.dm())
      return get_COMPLETING_ALREADY();
    finishing.hm(true);
    if (!(finishing === state)) {
      if (!$this.xe_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.am();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.fm(tmp0_safe_receiver.jf_1);
    }
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = finishing.gm();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    if (!wasCancelling) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jf_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.bl();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.mm_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var handle = tmp.gg(VOID, false, tmp$ret$1);
        if (!(handle === NonDisposableHandle_getInstance()))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        $this_0 = $this_0;
        state_0 = state_0;
        child_0 = nextChild_0;
        proposedUpdate_0 = proposedUpdate_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.of(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (!cur.il_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      cur = cur.hl_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      cur = cur.gl_1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (cur.il_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.am() ? 'Cancelling' : state.dm() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.ef() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.wl_1 = list;
    this.xl_1 = atomic$boolean$1(isCompleting);
    this.yl_1 = atomic$ref$1(rootCause);
    this.zl_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).bl = function () {
    return this.wl_1;
  };
  protoOf(Finishing).hm = function (value) {
    this.xl_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).dm = function () {
    return this.xl_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).nm = function (value) {
    this.yl_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).gm = function () {
    return this.yl_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).em = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).am = function () {
    return !(this.gm() == null);
  };
  protoOf(Finishing).ef = function () {
    return this.gm() == null;
  };
  protoOf(Finishing).bm = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var tmp0_also = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        tmp0_also.a(eh);
        tmp = tmp0_also;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.gm();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.s7(0, rootCause);
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.a(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).fm = function (exception) {
    var rootCause = this.gm();
    if (rootCause == null) {
      this.nm(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        // Inline function 'kotlin.apply' call
        var tmp0_apply = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        tmp0_apply.a(eh);
        tmp0_apply.a(exception);
        _set_exceptionsHolder__tqm22h(this, tmp0_apply);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).a(exception);
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.am() + ', completing=' + this.dm() + ', rootCause=' + this.gm() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.wl_1 + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.sm_1 = parent;
    this.tm_1 = state;
    this.um_1 = child;
    this.vm_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).tj = function (cause) {
    continueCompleting(this.sm_1, this.tm_1, this.um_1, this.vm_1);
  };
  protoOf(ChildCompletion).invoke = function (cause) {
    return this.tj(cause);
  };
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.en_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).ln = function ($this$sequence, $completion) {
    var tmp = this.mn($this$sequence, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).se = function (p1, $completion) {
    return this.ln(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 8;
            this.gn_1 = this.en_1.xf();
            var tmp_0 = this.gn_1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.xd_1 = 6;
              suspendResult = this.fn_1.m3(this.gn_1.mm_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.gn_1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.hn_1 = this.gn_1.bl();
                if (this.hn_1 == null) {
                  this.in_1 = null;
                  this.xd_1 = 5;
                  continue $sm;
                } else {
                  this.jn_1 = this.hn_1.gl_1;
                  this.xd_1 = 1;
                  continue $sm;
                }
              } else {
                this.xd_1 = 7;
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.jn_1, this.hn_1)) {
              this.xd_1 = 4;
              continue $sm;
            }

            var tmp_2 = this.jn_1;
            if (tmp_2 instanceof ChildHandleNode) {
              var tmp_3 = this;
              tmp_3.kn_1 = this.jn_1;
              this.xd_1 = 2;
              suspendResult = this.fn_1.m3(this.kn_1.mm_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.xd_1 = 3;
              continue $sm;
            }

          case 2:
            this.xd_1 = 3;
            continue $sm;
          case 3:
            this.jn_1 = this.jn_1.gl_1;
            this.xd_1 = 1;
            continue $sm;
          case 4:
            this.in_1 = Unit_getInstance();
            this.xd_1 = 5;
            continue $sm;
          case 5:
            this.xd_1 = 7;
            continue $sm;
          case 6:
            this.xd_1 = 7;
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this.ae_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 8) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).mn = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.en_1, completion);
    i.fn_1 = $this$sequence;
    return i;
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.ln($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this.xe_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.ye_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).u1 = function () {
    return Key_getInstance_2();
  };
  protoOf(JobSupport).vf = function (value) {
    this.ye_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).wf = function () {
    return this.ye_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).ze = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.vf(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.zf();
    var handle = parent.qg(this);
    this.vf(handle);
    if (this.yf()) {
      handle.dj();
      this.vf(NonDisposableHandle_getInstance());
    }
  };
  protoOf(JobSupport).xf = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.xe_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1_anonymous instanceof OpDescriptor))
        return tmp1_anonymous;
      tmp1_anonymous.nn(this);
    }
  };
  protoOf(JobSupport).ef = function () {
    var state = this.xf();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.ef();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).yf = function () {
    var tmp = this.xf();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).zf = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var tmp0_anonymous = this.xf();
      var tmp0_subject = startInternal(this, tmp0_anonymous);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).ag = function () {
  };
  protoOf(JobSupport).bg = function () {
    var state = this.xf();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.gm();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.cg(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.dg(state.jf_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).cg = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.hf() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).dg = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.cg(_this__u8e3s4, message) : $super.cg.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).eg = function (handler) {
    return this.fg(false, true, handler);
  };
  protoOf(JobSupport).fg = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var tmp0_anonymous = this.xf();
        if (tmp0_anonymous instanceof Empty) {
          if (tmp0_anonymous.al_1) {
            if (this.xe_1.atomicfu$compareAndSet(tmp0_anonymous, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0_anonymous);
          }
        } else {
          if (!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false) {
            var list = tmp0_anonymous.bl();
            if (list == null) {
              promoteSingleToNodeList(this, tmp0_anonymous instanceof JobNode ? tmp0_anonymous : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_getInstance();
              var tmp;
              if (onCancelling) {
                tmp = tmp0_anonymous instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                rootCause = tmp0_anonymous.gm();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  if (handler instanceof ChildHandleNode) {
                    tmp_2 = !tmp0_anonymous.dm();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, tmp0_anonymous, list, node)) {
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_getInstance();
                }
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp0_anonymous, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp0_anonymous instanceof CompletedExceptionally ? tmp0_anonymous : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.jf_1);
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  protoOf(JobSupport).hg = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var tmp0_anonymous = this.xf();
      if (tmp0_anonymous instanceof JobNode) {
        if (!(tmp0_anonymous === node))
          return Unit_getInstance();
        if (this.xe_1.atomicfu$compareAndSet(tmp0_anonymous, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false) {
          if (!(tmp0_anonymous.bl() == null)) {
            node.ml();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  protoOf(JobSupport).ig = function () {
    return false;
  };
  protoOf(JobSupport).jg = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.hf() : null, null, this);
    } else {
      tmp = cause;
    }
    this.lg(tmp);
  };
  protoOf(JobSupport).hf = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).lg = function (cause) {
    this.og(cause);
  };
  protoOf(JobSupport).mg = function (parentJob) {
    this.og(parentJob);
  };
  protoOf(JobSupport).ng = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.og(cause) ? this.tg() : false;
  };
  protoOf(JobSupport).on = function (cause) {
    return this.og(cause);
  };
  protoOf(JobSupport).og = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.ig()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.of(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).pg = function () {
    var state = this.xf();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.gm();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.jf_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).mf = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var tmp0_anonymous = this.xf();
        var finalState = tryMakeCompleting(this, tmp0_anonymous, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).pn = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).qg = function (child) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new ChildHandleNode(child);
    var tmp = this.gg(true, VOID, tmp$ret$1);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).pf = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).rg = function (cause) {
  };
  protoOf(JobSupport).sg = function () {
    return false;
  };
  protoOf(JobSupport).tg = function () {
    return true;
  };
  protoOf(JobSupport).ug = function (exception) {
    return false;
  };
  protoOf(JobSupport).if = function (state) {
  };
  protoOf(JobSupport).of = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.vg() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).vg = function () {
    return this.qf() + '{' + stateString(this, this.xf()) + '}';
  };
  protoOf(JobSupport).qf = function () {
    return get_classSimpleName(this);
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function InactiveNodeList(list) {
    this.cm_1 = list;
  }
  protoOf(InactiveNodeList).bl = function () {
    return this.cm_1;
  };
  protoOf(InactiveNodeList).ef = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.cm_1.fl('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.mm_1 = childJob;
  }
  protoOf(ChildHandleNode).tj = function (cause) {
    return this.mm_1.mg(this.ul());
  };
  protoOf(ChildHandleNode).invoke = function (cause) {
    return this.tj(cause);
  };
  protoOf(ChildHandleNode).ng = function (cause) {
    return this.ul().ng(cause);
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.un_1 = handler;
    this.vn_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).tj = function (cause) {
    if (this.vn_1.atomicfu$compareAndSet(0, 1))
      this.un_1(cause);
  };
  protoOf(InvokeOnCancelling).invoke = function (cause) {
    return this.tj(cause);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.ao_1 = handler;
  }
  protoOf(InvokeOnCompletion).tj = function (cause) {
    return this.ao_1(cause);
  };
  protoOf(InvokeOnCompletion).invoke = function (cause) {
    return this.tj(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bo_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function IncompleteStateBox(state) {
    this.bo_1 = state;
  }
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.go_1 = child;
  }
  protoOf(ChildContinuation).tj = function (cause) {
    this.go_1.kj(this.go_1.lj(this.ul()));
  };
  protoOf(ChildContinuation).invoke = function (cause) {
    return this.tj(cause);
  };
  function handlesException($this) {
    var tmp = $this.wf();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ul();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.tg())
        return true;
      var tmp_1 = parentJob.wf();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.ul();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.ze(parent);
    this.jo_1 = handlesException(this);
  }
  protoOf(JobImpl).ig = function () {
    return true;
  };
  protoOf(JobImpl).tg = function () {
    return this.jo_1;
  };
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.oo_1 = handle;
  }
  protoOf(DisposeOnCompletion).tj = function (cause) {
    return this.oo_1.dj();
  };
  protoOf(DisposeOnCompletion).invoke = function (cause) {
    return this.tj(cause);
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.ro();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).ro = function () {
    var main = Dispatchers_getInstance().wo();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.qo();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).ng = function (cause) {
    return false;
  };
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.ap_1 = coroutine;
  }
  function withTimeoutOrNull(timeMillis, block, $completion) {
    var tmp = new $withTimeoutOrNullCOROUTINE$3(timeMillis, block, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.t3(), uCont);
    this.qp_1 = time;
  }
  protoOf(TimeoutCoroutine).pj = function () {
    this.on(TimeoutCancellationException_0(this.qp_1, this));
  };
  protoOf(TimeoutCoroutine).qf = function () {
    return protoOf(ScopeCoroutine).qf.call(this) + '(timeMillis=' + toString_0(this.qp_1) + ')';
  };
  function setupTimeout(coroutine, block) {
    var cont = coroutine.nh_1;
    var context = cont.t3();
    disposeOnCompletion(coroutine, get_delay(context).dk(coroutine.qp_1, coroutine, coroutine.cf_1));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCancellationException_0(time, coroutine) {
    return new TimeoutCancellationException('Timed out waiting for ' + toString_0(time) + ' ms', coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$3(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jp_1 = timeMillis;
    this.kp_1 = block;
  }
  protoOf($withTimeoutOrNullCOROUTINE$3).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 3;
            if (this.jp_1.s(new Long(0, 0)) <= 0)
              return null;
            this.lp_1 = {_v: null};
            this.yd_1 = 2;
            this.xd_1 = 1;
            var timeoutCoroutine = new TimeoutCoroutine(this.jp_1, this);
            this.lp_1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.kp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.yd_1 = 3;
            var tmp_0 = this.ae_1;
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.ae_1;
              if (e.ap_1 === this.lp_1._v) {
                return null;
              }
              throw e;
            } else {
              throw this.ae_1;
            }

          case 3:
            throw this.ae_1;
          case 4:
            this.yd_1 = 3;
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.yd_1 === 3) {
          throw e_0;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e_0;
        }
      }
     while (true);
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).xj = function (context) {
    return false;
  };
  protoOf(Unconfined).yj = function (context, block) {
    var yieldContext = context.j4(Key_getInstance_3());
    if (!(yieldContext == null)) {
      yieldContext.tp_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_2() {
    Key_instance_2 = this;
  }
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_2();
    return Key_instance_2;
  }
  function YieldContext() {
    Key_getInstance_3();
    AbstractCoroutineContextElement.call(this, Key_getInstance_3());
    this.tp_1 = false;
  }
  function yield_0($completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.yield.<anonymous>' call
      var context = $completion.t3();
      ensureActive(context);
      var tmp = intercepted($completion);
      var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var cont = tmp_0;
      if (cont.zh_1.xj(context)) {
        cont.up(context, Unit_getInstance());
      } else {
        var yieldContext = new YieldContext();
        cont.up(context.q4(yieldContext), Unit_getInstance());
        if (yieldContext.tp_1) {
          tmp$ret$0 = yieldUndispatched(cont) ? get_COROUTINE_SUSPENDED() : Unit_getInstance();
          break $l$block_0;
        }
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  }
  function get_EMPTY() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return EMPTY;
  }
  var EMPTY;
  function get_OFFER_SUCCESS() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return OFFER_SUCCESS;
  }
  var OFFER_SUCCESS;
  function get_OFFER_FAILED() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return OFFER_FAILED;
  }
  var OFFER_FAILED;
  function get_POLL_FAILED() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return POLL_FAILED;
  }
  var POLL_FAILED;
  var ENQUEUE_FAILED;
  function get_HANDLER_INVOKED() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return HANDLER_INVOKED;
  }
  var HANDLER_INVOKED;
  function hasNextResult($this, result) {
    if (result instanceof Closed) {
      if (!(result.yp_1 == null))
        throw recoverStackTrace_0(result.zp());
      return false;
    }
    return true;
  }
  function hasNextSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.Itr.hasNextSuspend.<anonymous>' call
      var receive = new ReceiveHasNext($this, cancellable);
      while (true) {
        if (enqueueReceive($this.aq_1, receive)) {
          removeReceiveOnCancel($this.aq_1, cancellable, receive);
          break $l$block_1;
        }
        var result = $this.aq_1.fq();
        $this.bq_1 = result;
        if (result instanceof Closed) {
          if (result.yp_1 == null) {
            // Inline function 'kotlin.coroutines.resume' call
            var tmp$ret$1;
            // Inline function 'kotlin.Companion.success' call
            Companion_getInstance();
            tmp$ret$1 = _Result___init__impl__xyqfz8(false);
            cancellable.r3(tmp$ret$1);
          } else {
            // Inline function 'kotlin.coroutines.resumeWithException' call
            var tmp0_resumeWithException = result.zp();
            var tmp$ret$3;
            // Inline function 'kotlin.Companion.failure' call
            Companion_getInstance();
            tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
            cancellable.r3(tmp$ret$3);
          }
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp0_safe_receiver = $this.aq_1.gq_1;
          var tmp;
          if (tmp0_safe_receiver == null) {
            tmp = null;
          } else {
            tmp = bindCancellationFun(tmp0_safe_receiver, (result == null ? true : isObject(result)) ? result : THROW_CCE(), cancellable.t3());
          }
          cancellable.xh(true, tmp);
          break $l$block_1;
        }
      }
    }
    return cancellable.ch();
  }
  function enqueueReceive($this, receive) {
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.jq(receive);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceive.<anonymous>' call
    if (tmp0_also) {
      $this.kq();
    }
    return tmp0_also;
  }
  function removeReceiveOnCancel($this, cont, receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new RemoveReceiveOnCancel($this, receive);
    return cont.vh(tmp$ret$1);
  }
  function RemoveReceiveOnCancel($outer, receive) {
    this.mq_1 = $outer;
    BeforeResumeCancelHandler.call(this);
    this.lq_1 = receive;
  }
  protoOf(RemoveReceiveOnCancel).tj = function (cause) {
    if (this.lq_1.ml()) {
      this.mq_1.nq();
    }
  };
  protoOf(RemoveReceiveOnCancel).invoke = function (cause) {
    return this.tj(cause);
  };
  protoOf(RemoveReceiveOnCancel).toString = function () {
    return 'RemoveReceiveOnCancel[' + this.lq_1 + ']';
  };
  function Itr(channel) {
    this.aq_1 = channel;
    this.bq_1 = get_POLL_FAILED();
  }
  protoOf(Itr).oq = function ($completion) {
    if (!(this.bq_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.bq_1);
    this.bq_1 = this.aq_1.fq();
    if (!(this.bq_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.bq_1);
    return hasNextSuspend(this, $completion);
  };
  protoOf(Itr).e = function () {
    var result = this.bq_1;
    if (result instanceof Closed)
      throw recoverStackTrace_0(result.zp());
    if (!(result === get_POLL_FAILED())) {
      this.bq_1 = get_POLL_FAILED();
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    throw IllegalStateException_init_$Create$("'hasNext' should be called prior to 'next' invocation");
  };
  function ReceiveHasNext(iterator, cont) {
    Receive.call(this);
    this.sq_1 = iterator;
    this.tq_1 = cont;
  }
  protoOf(ReceiveHasNext).uq = function (value, otherOp) {
    var tmp1_elvis_lhs = this.tq_1.qh(true, otherOp == null ? null : otherOp.wq_1, this.yq(value));
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    // Inline function 'kotlinx.coroutines.assert' call
    if (otherOp == null)
      null;
    else {
      otherOp.zq();
    }
    return get_RESUME_TOKEN();
  };
  protoOf(ReceiveHasNext).ar = function (value) {
    this.sq_1.bq_1 = value;
    this.tq_1.sh(get_RESUME_TOKEN());
  };
  protoOf(ReceiveHasNext).br = function (closed) {
    var tmp;
    if (closed.yp_1 == null) {
      tmp = this.tq_1.ph(false);
    } else {
      tmp = this.tq_1.rh(closed.zp());
    }
    var token = tmp;
    if (!(token == null)) {
      this.sq_1.bq_1 = closed;
      this.tq_1.sh(token);
    }
  };
  protoOf(ReceiveHasNext).yq = function (value) {
    var tmp0_safe_receiver = this.sq_1.aq_1.gq_1;
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.tq_1.t3());
  };
  protoOf(ReceiveHasNext).toString = function () {
    return 'ReceiveHasNext@' + get_hexAddress(this);
  };
  function AbstractChannel(onUndeliveredElement) {
    AbstractSendChannel.call(this, onUndeliveredElement);
  }
  protoOf(AbstractChannel).fq = function () {
    while (true) {
      var tmp0_elvis_lhs = this.ir();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_POLL_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var send = tmp;
      var token = send.mr(null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        send.nr();
        return send.or();
      }
      send.pr();
    }
  };
  protoOf(AbstractChannel).qr = function () {
    return !(this.rr() == null) ? this.hr() : false;
  };
  protoOf(AbstractChannel).jq = function (receive) {
    var tmp;
    if (this.gr()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var tmp0_addLastIfPrev = this.hq_1;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        if (!!(tmp0_addLastIfPrev.hl_1 instanceof Send)) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.nl(receive);
        tmp$ret$1 = true;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var tmp2_addLastIfPrevAndIf = this.hq_1;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        if (!!(tmp2_addLastIfPrevAndIf.hl_1 instanceof Send)) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        if (!this.hr()) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.nl(receive);
        tmp$ret$3 = true;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  protoOf(AbstractChannel).jg = function (cause) {
    if (this.qr())
      return Unit_getInstance();
    this.sr(cause == null ? CancellationException_init_$Create$(get_classSimpleName(this) + ' was cancelled') : cause);
  };
  protoOf(AbstractChannel).sr = function (cause) {
    // Inline function 'kotlin.also' call
    var tmp0_also = this.tr(cause);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.cancelInternal.<anonymous>' call
    this.ur(tmp0_also);
    return tmp0_also;
  };
  protoOf(AbstractChannel).ur = function (wasClosed) {
    var tmp0_elvis_lhs = this.vr();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot happen');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var closed = tmp;
    var list = _InlineList___init__impl__z8n56();
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var previous = closed.hl_1;
      if (previous instanceof LinkedListHead) {
        break $l$loop_0;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      if (!previous.ml()) {
        previous.pl();
        continue $l$loop_0;
      }
      var tmp_0 = list;
      list = InlineList__plus_impl_nuetvo(tmp_0, previous instanceof Send ? previous : THROW_CCE());
    }
    this.wr(list, closed);
  };
  protoOf(AbstractChannel).wr = function (list, closed) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          ((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE()).xr(closed);
        } else {
          var tmp_0 = _get_holder__f6h5pd(list);
          var list_0 = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable = list_0.f() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
              list_0.l(i).xr(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
  };
  protoOf(AbstractChannel).c = function () {
    return new Itr(this);
  };
  protoOf(AbstractChannel).yr = function () {
    // Inline function 'kotlin.also' call
    var tmp0_also = protoOf(AbstractSendChannel).yr.call(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
    var tmp;
    if (!(tmp0_also == null)) {
      tmp = !(tmp0_also instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.nq();
    }
    return tmp0_also;
  };
  protoOf(AbstractChannel).kq = function () {
  };
  protoOf(AbstractChannel).nq = function () {
  };
  function helpCloseAndGetSendException($this, closed) {
    helpClose($this, closed);
    return closed.ds();
  }
  function invokeOnCloseHandler($this, cause) {
    var handler = $this.iq_1.kotlinx$atomicfu$value;
    if ((!(handler === null) ? !(handler === get_HANDLER_INVOKED()) : false) ? $this.iq_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
      ((!(handler == null) ? typeof handler === 'function' : false) ? handler : THROW_CCE())(cause);
    }
  }
  function helpClose($this, closed) {
    var closedList = _InlineList___init__impl__z8n56();
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp = closed.hl_1;
      var tmp0_elvis_lhs = tmp instanceof Receive ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$loop_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var previous = tmp_0;
      if (!previous.ml()) {
        previous.pl();
        continue $l$loop_0;
      }
      closedList = InlineList__plus_impl_nuetvo(closedList, previous);
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_forEachReversed = closedList;
      var tmp0_subject = _get_holder__f6h5pd(tmp0_forEachReversed);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
          var tmp_1 = _get_holder__f6h5pd(tmp0_forEachReversed);
          ((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE()).br(closed);
        } else {
          var tmp_2 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var list = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list.f() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
              list.l(i).br(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
    $this.bs(closed);
  }
  function _get_queueDebugStateString__k7jj75($this) {
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var head = $this.hq_1.gl_1;
    if (head === $this.hq_1)
      return 'EmptyQueue';
    var tmp;
    if (head instanceof Closed) {
      tmp = toString_0(head);
    } else {
      if (head instanceof Receive) {
        tmp = 'ReceiveQueued';
      } else {
        if (head instanceof Send) {
          tmp = 'SendQueued';
        } else {
          tmp = 'UNEXPECTED:' + head;
        }
      }
    }
    var result = tmp;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tail = $this.hq_1.hl_1;
    if (!(tail === head)) {
      result = result + (',queueSize=' + countQueueSize($this));
      if (tail instanceof Closed)
        result = result + (',closedForSend=' + tail);
    }
    return result;
  }
  function countQueueSize($this) {
    var size = 0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var tmp0_forEach = $this.hq_1;
    var cur = tmp0_forEach.gl_1;
    while (!equals(cur, tmp0_forEach)) {
      if (cur instanceof LinkedListNode) {
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.countQueueSize.<anonymous>' call
        size = size + 1 | 0;
      }
      cur = cur.gl_1;
    }
    return size;
  }
  function SendBuffered(element) {
    Send.call(this);
    this.hs_1 = element;
  }
  protoOf(SendBuffered).or = function () {
    return this.hs_1;
  };
  protoOf(SendBuffered).mr = function (otherOp) {
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.SendBuffered.tryResumeSend.<anonymous>' call
    if (otherOp == null)
      null;
    else {
      otherOp.zq();
    }
    return tmp0_also;
  };
  protoOf(SendBuffered).nr = function () {
  };
  protoOf(SendBuffered).xr = function (closed) {
    // Inline function 'kotlinx.coroutines.assert' call
  };
  protoOf(SendBuffered).toString = function () {
    return 'SendBuffered@' + get_hexAddress(this) + '(' + this.hs_1 + ')';
  };
  function AbstractSendChannel(onUndeliveredElement) {
    this.gq_1 = onUndeliveredElement;
    this.hq_1 = new LinkedListHead();
    this.iq_1 = atomic$ref$1(null);
  }
  protoOf(AbstractSendChannel).zr = function (element) {
    while (true) {
      var tmp0_elvis_lhs = this.yr();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_OFFER_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var receive = tmp;
      var token = receive.uq(element, null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        receive.ar(element);
        return receive.fr();
      }
    }
  };
  protoOf(AbstractSendChannel).vr = function () {
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp = this.hq_1.hl_1;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForSend>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp_0 = tmp0_safe_receiver;
    }
    return tmp_0;
  };
  protoOf(AbstractSendChannel).rr = function () {
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp = this.hq_1.gl_1;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForReceive>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp_0 = tmp0_safe_receiver;
    }
    return tmp_0;
  };
  protoOf(AbstractSendChannel).ir = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp0_removeFirstIfIsInstanceOfOrPeekIf = this.hq_1;
      var next = tmp0_removeFirstIfIsInstanceOfOrPeekIf.gl_1;
      if (next === tmp0_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!(next instanceof Send)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstSendOrPeekClosed.<anonymous>' call
      if (next instanceof Closed) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!next.ol()) {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        var message = 'Should remove';
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractSendChannel).is = function (element) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.hq_1;
      var tmp1_addLastIfPrev = new SendBuffered(element);
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.sendBuffered.<anonymous>' call
      var tmp2_anonymous = tmp0_addLastIfPrev.hl_1;
      if (isInterface(tmp2_anonymous, ReceiveOrClosed))
        return tmp2_anonymous;
      if (!true) {
        break $l$block;
      }
      tmp0_addLastIfPrev.nl(tmp1_addLastIfPrev);
    }
    return null;
  };
  protoOf(AbstractSendChannel).as = function (element) {
    var result = this.zr(element);
    var tmp;
    if (result === get_OFFER_SUCCESS()) {
      tmp = Companion_getInstance_1().ms(Unit_getInstance());
    } else {
      if (result === get_OFFER_FAILED()) {
        var tmp0_elvis_lhs = this.vr();
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return Companion_getInstance_1().ls();
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var closedForSend = tmp_0;
        tmp = Companion_getInstance_1().ks(helpCloseAndGetSendException(this, closedForSend));
      } else {
        if (result instanceof Closed) {
          tmp = Companion_getInstance_1().ks(helpCloseAndGetSendException(this, result));
        } else {
          var tmp0_error = 'trySend returned ' + toString_0(result);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
    }
    return tmp;
  };
  protoOf(AbstractSendChannel).tr = function (cause) {
    var closed = new Closed(cause);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.hq_1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.close.<anonymous>' call
      if (!!(tmp0_addLastIfPrev.hl_1 instanceof Closed)) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.nl(closed);
      tmp$ret$1 = true;
    }
    var closeAdded = tmp$ret$1;
    var tmp;
    if (closeAdded) {
      tmp = closed;
    } else {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp_0 = this.hq_1.hl_1;
      tmp = tmp_0 instanceof Closed ? tmp_0 : THROW_CCE();
    }
    var actuallyClosed = tmp;
    helpClose(this, actuallyClosed);
    if (closeAdded) {
      invokeOnCloseHandler(this, cause);
    }
    return closeAdded;
  };
  protoOf(AbstractSendChannel).bs = function (closed) {
  };
  protoOf(AbstractSendChannel).yr = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp0_removeFirstIfIsInstanceOfOrPeekIf = this.hq_1;
      var next = tmp0_removeFirstIfIsInstanceOfOrPeekIf.gl_1;
      if (next === tmp0_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!isInterface(next, ReceiveOrClosed)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
      if (next instanceof Closed) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!next.ol()) {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        var message = 'Should remove';
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractSendChannel).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '{' + _get_queueDebugStateString__k7jj75(this) + '}' + this.cs();
  };
  protoOf(AbstractSendChannel).cs = function () {
    return '';
  };
  function Send() {
    LinkedListNode.call(this);
  }
  protoOf(Send).pr = function () {
  };
  function ReceiveOrClosed() {
  }
  function Closed(closeCause) {
    Send.call(this);
    this.yp_1 = closeCause;
  }
  protoOf(Closed).ds = function () {
    var tmp0_elvis_lhs = this.yp_1;
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  protoOf(Closed).zp = function () {
    var tmp0_elvis_lhs = this.yp_1;
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  protoOf(Closed).fr = function () {
    return this;
  };
  protoOf(Closed).or = function () {
    return this;
  };
  protoOf(Closed).mr = function (otherOp) {
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeSend.<anonymous>' call
    if (otherOp == null)
      null;
    else {
      otherOp.zq();
    }
    return tmp0_also;
  };
  protoOf(Closed).nr = function () {
  };
  protoOf(Closed).uq = function (value, otherOp) {
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeReceive.<anonymous>' call
    if (otherOp == null)
      null;
    else {
      otherOp.zq();
    }
    return tmp0_also;
  };
  protoOf(Closed).ar = function (value) {
  };
  protoOf(Closed).xr = function (closed) {
    return Unit_getInstance();
  };
  protoOf(Closed).toString = function () {
    return 'Closed@' + get_hexAddress(this) + '[' + this.yp_1 + ']';
  };
  function Receive() {
    LinkedListNode.call(this);
  }
  protoOf(Receive).fr = function () {
    return get_OFFER_SUCCESS();
  };
  var properties_initialized_AbstractChannel_kt_uwqnpt;
  function _init_properties_AbstractChannel_kt__sw8o27() {
    if (!properties_initialized_AbstractChannel_kt_uwqnpt) {
      properties_initialized_AbstractChannel_kt_uwqnpt = true;
      EMPTY = new Symbol('EMPTY');
      OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
      OFFER_FAILED = new Symbol('OFFER_FAILED');
      POLL_FAILED = new Symbol('POLL_FAILED');
      ENQUEUE_FAILED = new Symbol('ENQUEUE_FAILED');
      HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
    }
  }
  function updateBufferSize($this, currentSize) {
    if (currentSize < $this.qs_1) {
      $this.vs_1.kotlinx$atomicfu$value = currentSize + 1 | 0;
      return null;
    }
    var tmp;
    switch ($this.rs_1.w4_1) {
      case 0:
        tmp = get_OFFER_FAILED();
        break;
      case 2:
        tmp = get_OFFER_SUCCESS();
        break;
      case 1:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function enqueueElement($this, currentSize, element) {
    if (currentSize < $this.qs_1) {
      ensureCapacity($this, currentSize);
      $this.ts_1[($this.us_1 + currentSize | 0) % $this.ts_1.length | 0] = element;
    } else {
      // Inline function 'kotlinx.coroutines.assert' call
      $this.ts_1[$this.us_1 % $this.ts_1.length | 0] = null;
      $this.ts_1[($this.us_1 + currentSize | 0) % $this.ts_1.length | 0] = element;
      $this.us_1 = ($this.us_1 + 1 | 0) % $this.ts_1.length | 0;
    }
  }
  function ensureCapacity($this, currentSize) {
    if (currentSize >= $this.ts_1.length) {
      // Inline function 'kotlin.math.min' call
      var tmp0_min = imul($this.ts_1.length, 2);
      var tmp1_min = $this.qs_1;
      var newSize = Math.min(tmp0_min, tmp1_min);
      // Inline function 'kotlin.arrayOfNulls' call
      var newBuffer = fillArrayVal(Array(newSize), null);
      var inductionVariable = 0;
      if (inductionVariable < currentSize)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          newBuffer[i] = $this.ts_1[($this.us_1 + i | 0) % $this.ts_1.length | 0];
        }
         while (inductionVariable < currentSize);
      fill(newBuffer, get_EMPTY(), currentSize, newSize);
      $this.ts_1 = newBuffer;
      $this.us_1 = 0;
    }
  }
  function ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.qs_1 = capacity;
    this.rs_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.qs_1 >= 1)) {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<anonymous>' call
      var message = 'ArrayChannel capacity must be at least 1, but ' + this.qs_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.ss_1 = new NoOpLock();
    var tmp = this;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.math.min' call
    var tmp0_min = this.qs_1;
    var tmp1_arrayOfNulls = Math.min(tmp0_min, 8);
    var tmp2_apply = fillArrayVal(Array(tmp1_arrayOfNulls), null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.buffer.<anonymous>' call
    fill(tmp2_apply, get_EMPTY());
    tmp.ts_1 = tmp2_apply;
    this.us_1 = 0;
    this.vs_1 = atomic$int$1(0);
  }
  protoOf(ArrayChannel).gr = function () {
    return false;
  };
  protoOf(ArrayChannel).hr = function () {
    return this.vs_1.kotlinx$atomicfu$value === 0;
  };
  protoOf(ArrayChannel).qr = function () {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.ss_1;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<get-isClosedForReceive>.<anonymous>' call
    return protoOf(AbstractChannel).qr.call(this);
  };
  protoOf(ArrayChannel).zr = function (element) {
    var receive = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.ss_1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.offerInternal.<anonymous>' call
      var size = this.vs_1.kotlinx$atomicfu$value;
      var tmp0_safe_receiver = this.vr();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var tmp1_safe_receiver = updateBufferSize(this, size);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp1_safe_receiver;
      }
      if (size === 0) {
        loop: while (true) {
          var tmp2_elvis_lhs = this.yr();
          var tmp;
          if (tmp2_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp2_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            this.vs_1.kotlinx$atomicfu$value = size;
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).uq(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            this.vs_1.kotlinx$atomicfu$value = size;
            break $l$block;
          }
        }
      }
      enqueueElement(this, size, element);
      return get_OFFER_SUCCESS();
    }
    ensureNotNull(receive).ar(element);
    return ensureNotNull(receive).fr();
  };
  protoOf(ArrayChannel).fq = function () {
    var send = null;
    var resumed = false;
    var result = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.ss_1;
    var size = this.vs_1.kotlinx$atomicfu$value;
    if (size === 0) {
      var tmp0_elvis_lhs = this.vr();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.ts_1[this.us_1];
    this.ts_1[this.us_1] = null;
    this.vs_1.kotlinx$atomicfu$value = size - 1 | 0;
    var replacement = get_POLL_FAILED();
    if (size === this.qs_1) {
      loop: while (true) {
        var tmp1_elvis_lhs = this.ir();
        var tmp;
        if (tmp1_elvis_lhs == null) {
          break loop;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        send = tmp;
        var token = ensureNotNull(send).mr(null);
        if (!(token == null)) {
          // Inline function 'kotlinx.coroutines.assert' call
          resumed = true;
          replacement = ensureNotNull(send).or();
          break loop;
        }
        ensureNotNull(send).pr();
      }
    }
    var tmp_0;
    if (!(replacement === get_POLL_FAILED())) {
      tmp_0 = !(replacement instanceof Closed);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.vs_1.kotlinx$atomicfu$value = size;
      this.ts_1[(this.us_1 + size | 0) % this.ts_1.length | 0] = replacement;
    }
    this.us_1 = (this.us_1 + 1 | 0) % this.ts_1.length | 0;
    if (resumed) {
      ensureNotNull(send).nr();
    }
    return result;
  };
  protoOf(ArrayChannel).jq = function (receive) {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.ss_1;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueReceiveInternal.<anonymous>' call
    return protoOf(AbstractChannel).jq.call(this, receive);
  };
  protoOf(ArrayChannel).ur = function (wasClosed) {
    var onUndeliveredElement = this.gq_1;
    var undeliveredElementException = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.ss_1;
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.vs_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.ArrayChannel.onCancelIdempotent.<anonymous>.<anonymous>' call
        var value = this.ts_1[this.us_1];
        if (!(onUndeliveredElement == null) ? !(value === get_EMPTY()) : false) {
          undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, (value == null ? true : isObject(value)) ? value : THROW_CCE(), undeliveredElementException);
        }
        this.ts_1[this.us_1] = get_EMPTY();
        this.us_1 = (this.us_1 + 1 | 0) % this.ts_1.length | 0;
      }
       while (inductionVariable < tmp0_repeat);
    this.vs_1.kotlinx$atomicfu$value = 0;
    protoOf(AbstractChannel).ur.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  protoOf(ArrayChannel).cs = function () {
    return '(buffer:capacity=' + this.qs_1 + ',size=' + this.vs_1.kotlinx$atomicfu$value + ')';
  };
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function Factory() {
    Factory_instance = this;
    this.ws_1 = 2147483647;
    this.xs_1 = 0;
    this.ys_1 = -1;
    this.zs_1 = -2;
    this.at_1 = -3;
    this.bt_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.ct_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    var tmp;
    if (capacity === VOID) {
      Factory_getInstance();
      tmp = 0;
    } else {
      tmp = capacity;
    }
    capacity = tmp;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp_0;
    Factory_getInstance();
    if (capacity === 0) {
      tmp_0 = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new RendezvousChannel(onUndeliveredElement) : new ArrayChannel(1, onBufferOverflow, onUndeliveredElement);
    } else {
      Factory_getInstance();
      if (capacity === -1) {
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
          // Inline function 'kotlinx.coroutines.channels.Channel.<anonymous>' call
          var message = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        }
        tmp_0 = new ConflatedChannel(onUndeliveredElement);
      } else {
        Factory_getInstance();
        if (capacity === 2147483647) {
          tmp_0 = new LinkedListChannel(onUndeliveredElement);
        } else {
          Factory_getInstance();
          if (capacity === -2) {
            tmp_0 = new ArrayChannel(onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? Factory_getInstance().ct_1 : 1, onBufferOverflow, onUndeliveredElement);
          } else {
            tmp_0 = (capacity === 1 ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) ? new ConflatedChannel(onUndeliveredElement) : new ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement);
          }
        }
      }
    }
    return tmp_0;
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed_0(cause) {
    Failed.call(this);
    this.dt_1 = cause;
  }
  protoOf(Closed_0).equals = function (other) {
    var tmp;
    if (other instanceof Closed_0) {
      tmp = equals(this.dt_1, other.dt_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed_0).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.dt_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed_0).toString = function () {
    return 'Closed(' + this.dt_1 + ')';
  };
  function Companion() {
    Companion_instance = this;
    this.js_1 = new Failed();
  }
  protoOf(Companion).ms = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).ls = function () {
    return _ChannelResult___init__impl__siwsuf(this.js_1);
  };
  protoOf(Companion).ks = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed_0(cause));
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp;
    if (cause == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.cancelConsumed.<anonymous>' call
      var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
      tmp = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', cause) : tmp0_elvis_lhs;
    }
    _this__u8e3s4.jg(tmp);
  }
  function updateValueLocked($this, element) {
    var old = $this.it_1;
    var tmp;
    if (old === get_EMPTY()) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = $this.gq_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp_0 = callUndeliveredElementCatchingException(tmp0_safe_receiver, (old == null ? true : isObject(old)) ? old : THROW_CCE());
      }
      tmp = tmp_0;
    }
    var undeliveredElementException = tmp;
    $this.it_1 = element;
    return undeliveredElementException;
  }
  function ConflatedChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.ht_1 = new NoOpLock();
    this.it_1 = get_EMPTY();
  }
  protoOf(ConflatedChannel).gr = function () {
    return false;
  };
  protoOf(ConflatedChannel).hr = function () {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.ht_1;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-isBufferEmpty>.<anonymous>' call
    return this.it_1 === get_EMPTY();
  };
  protoOf(ConflatedChannel).zr = function (element) {
    var receive = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.ht_1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.offerInternal.<anonymous>' call
      var tmp0_safe_receiver = this.vr();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      if (this.it_1 === get_EMPTY()) {
        loop: while (true) {
          var tmp1_elvis_lhs = this.yr();
          var tmp;
          if (tmp1_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp1_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).uq(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            break $l$block;
          }
        }
      }
      var tmp2_safe_receiver = updateValueLocked(this, element);
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp2_safe_receiver;
      }
      return get_OFFER_SUCCESS();
    }
    ensureNotNull(receive).ar(element);
    return ensureNotNull(receive).fr();
  };
  protoOf(ConflatedChannel).fq = function () {
    var result = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.ht_1;
    if (this.it_1 === get_EMPTY()) {
      var tmp0_elvis_lhs = this.vr();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.it_1;
    this.it_1 = get_EMPTY();
    return result;
  };
  protoOf(ConflatedChannel).ur = function (wasClosed) {
    var undeliveredElementException = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.ht_1;
    undeliveredElementException = updateValueLocked(this, get_EMPTY());
    protoOf(AbstractChannel).ur.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  protoOf(ConflatedChannel).jq = function (receive) {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.ht_1;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.enqueueReceiveInternal.<anonymous>' call
    return protoOf(AbstractChannel).jq.call(this, receive);
  };
  protoOf(ConflatedChannel).cs = function () {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.ht_1;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-bufferDebugString>.<anonymous>' call
    return '(value=' + toString(this.it_1) + ')';
  };
  function LinkedListChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  protoOf(LinkedListChannel).gr = function () {
    return true;
  };
  protoOf(LinkedListChannel).hr = function () {
    return true;
  };
  protoOf(LinkedListChannel).zr = function (element) {
    while (true) {
      var result = protoOf(AbstractChannel).zr.call(this, element);
      if (result === get_OFFER_SUCCESS())
        return get_OFFER_SUCCESS();
      else {
        if (result === get_OFFER_FAILED()) {
          var sendResult = this.is(element);
          if (sendResult == null)
            return get_OFFER_SUCCESS();
          else {
            if (sendResult instanceof Closed)
              return sendResult;
          }
        } else {
          if (result instanceof Closed)
            return result;
          else {
            var tmp0_error = 'Invalid offerInternal result ' + toString_0(result);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  protoOf(LinkedListChannel).wr = function (list, closed) {
    var undeliveredElementException = null;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var tmp0_anonymous = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          if (tmp0_anonymous instanceof SendBuffered) {
            var tmp1_safe_receiver = this.gq_1;
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp_1 = tmp0_anonymous.hs_1;
              tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), undeliveredElementException);
            }
            undeliveredElementException = tmp_0;
          } else {
            tmp0_anonymous.xr(closed);
          }
        } else {
          var tmp_2 = _get_holder__f6h5pd(list);
          var list_0 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list_0.f() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1_anonymous = list_0.l(i);
              if (tmp1_anonymous instanceof SendBuffered) {
                var tmp1_safe_receiver_0 = this.gq_1;
                var tmp_3;
                if (tmp1_safe_receiver_0 == null) {
                  tmp_3 = null;
                } else {
                  var tmp_4 = tmp1_anonymous.hs_1;
                  tmp_3 = callUndeliveredElementCatchingException(tmp1_safe_receiver_0, (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE(), undeliveredElementException);
                }
                undeliveredElementException = tmp_3;
              } else {
                tmp1_anonymous.xr(closed);
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  function RendezvousChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  protoOf(RendezvousChannel).gr = function () {
    return true;
  };
  protoOf(RendezvousChannel).hr = function () {
    return true;
  };
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    return new StateFlowImpl(value == null ? get_NULL() : value);
  }
  function updateState($this, expectedState, newState) {
    var curSequence = 0;
    var curSlots = $this.pt_1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var oldState = $this.xt_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) ? !equals(oldState, expectedState) : false)
      return false;
    if (equals(oldState, newState))
      return true;
    $this.xt_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.yt_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.yt_1 = curSequence;
    } else {
      $this.yt_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.pt_1;
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.d()) {
          var element = tmp0_iterator.e();
          // Inline function 'kotlinx.coroutines.flow.StateFlowImpl.updateState.<anonymous>' call
          if (element == null)
            null;
          else {
            element.au();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      if ($this.yt_1 === curSequence) {
        $this.yt_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.yt_1;
      curSlots = $this.pt_1;
    }
  }
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.xt_1 = atomic$ref$1(initialState);
    this.yt_1 = 0;
  }
  protoOf(StateFlowImpl).bu = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).w1 = function () {
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var tmp0_unbox = get_NULL();
    var tmp1_unbox = this.xt_1.kotlinx$atomicfu$value;
    var tmp;
    if (tmp1_unbox === tmp0_unbox) {
      tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    } else {
      tmp = isObject(tmp1_unbox) ? tmp1_unbox : THROW_CCE();
    }
    return tmp;
  };
  protoOf(StateFlowImpl).cu = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (!properties_initialized_StateFlow_kt_nsqikx) {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function AbstractSharedFlow() {
    this.pt_1 = null;
    this.qt_1 = 0;
    this.rt_1 = 0;
    this.st_1 = null;
  }
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (!properties_initialized_NullSurrogate_kt_39v8bl) {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function ensureCapacity_0($this) {
    var currentSize = $this.jk_1.length;
    var newCapacity = currentSize << 1;
    // Inline function 'kotlin.arrayOfNulls' call
    var newElements = fillArrayVal(Array(newCapacity), null);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.jk_1;
    var tmp1_copyInto = $this.kk_1;
    var tmp2_copyInto = tmp0_copyInto.length;
    arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = $this.jk_1;
    var tmp4_copyInto = $this.jk_1.length - $this.kk_1 | 0;
    var tmp5_copyInto = $this.kk_1;
    arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
    $this.jk_1 = newElements;
    $this.kk_1 = 0;
    $this.lk_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.jk_1 = fillArrayVal(Array(16), null);
    this.kk_1 = 0;
    this.lk_1 = 0;
  }
  protoOf(ArrayQueue).rk = function () {
    return this.kk_1 === this.lk_1;
  };
  protoOf(ArrayQueue).ok = function (element) {
    this.jk_1[this.lk_1] = element;
    this.lk_1 = (this.lk_1 + 1 | 0) & (this.jk_1.length - 1 | 0);
    if (this.lk_1 === this.kk_1) {
      ensureCapacity_0(this);
    }
  };
  protoOf(ArrayQueue).mk = function () {
    if (this.kk_1 === this.lk_1)
      return null;
    var element = this.jk_1[this.kk_1];
    this.jk_1[this.kk_1] = null;
    this.kk_1 = (this.kk_1 + 1 | 0) & (this.jk_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  function OpDescriptor() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (_this__u8e3s4.zh_1.xj(_this__u8e3s4.t3())) {
        _this__u8e3s4.bi_1 = state;
        _this__u8e3s4.ni_1 = get_MODE_CANCELLABLE();
        _this__u8e3s4.zh_1.yj(_this__u8e3s4.t3(), _this__u8e3s4);
        tmp_0 = Unit_getInstance();
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().wk();
          if (false ? eventLoop.qk() : false) {
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.pk()) {
            _this__u8e3s4.bi_1 = state;
            _this__u8e3s4.ni_1 = tmp0_executeUnconfined;
            eventLoop.nk(_this__u8e3s4);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.sk(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.t3().j4(Key_getInstance_2());
                if (!(job == null) ? !job.ef() : false) {
                  var cause = job.bg();
                  _this__u8e3s4.fj(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  var tmp$ret$1;
                  // Inline function 'kotlin.Companion.failure' call
                  Companion_getInstance();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.r3(tmp$ret$1);
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.ai_1;
                _this__u8e3s4.ci_1;
                _this__u8e3s4.ai_1.r3(result);
              }
              $l$loop: while (eventLoop.ik()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.qj(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.tk(true);
            }
            tmp_1 = false;
          }
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.r3(result);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.di_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.zh_1 = dispatcher;
    this.ai_1 = continuation;
    this.bi_1 = get_UNDEFINED();
    this.ci_1 = threadContextElements(this.t3());
    this.di_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).t3 = function () {
    return this.ai_1.t3();
  };
  protoOf(DispatchedContinuation).mi = function () {
    return !(this.di_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).du = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.di_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      if (!(tmp0_loop.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  protoOf(DispatchedContinuation).ak = function () {
    this.du();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.qi();
    }
  };
  protoOf(DispatchedContinuation).ei = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.di_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1_anonymous === null) {
        this.di_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (tmp1_anonymous instanceof CancellableContinuationImpl) {
          if (this.di_1.atomicfu$compareAndSet(tmp1_anonymous, get_REUSABLE_CLAIMED())) {
            return tmp1_anonymous instanceof CancellableContinuationImpl ? tmp1_anonymous : THROW_CCE();
          }
        } else {
          if (tmp1_anonymous !== get_REUSABLE_CLAIMED()) {
            if (!(tmp1_anonymous instanceof Error)) {
              var tmp0_error = 'Inconsistent state ' + toString(tmp1_anonymous);
              throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).pi = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.di_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1_anonymous === get_REUSABLE_CLAIMED()) {
        if (this.di_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (tmp1_anonymous instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!this.di_1.atomicfu$compareAndSet(tmp1_anonymous, null)) {
            // Inline function 'kotlin.require.<anonymous>' call
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
          return tmp1_anonymous;
        } else {
          var tmp1_error = 'Inconsistent state ' + toString(tmp1_anonymous);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).oi = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.di_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.kotlinx$atomicfu$value;
      if (equals(tmp1_anonymous, get_REUSABLE_CLAIMED())) {
        if (this.di_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (tmp1_anonymous instanceof Error)
          return true;
        else {
          if (this.di_1.atomicfu$compareAndSet(tmp1_anonymous, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).ej = function () {
    var state = this.bi_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.bi_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).bj = function () {
    return this;
  };
  protoOf(DispatchedContinuation).r3 = function (result) {
    var context = this.ai_1.t3();
    var state = toState_0(result);
    if (this.zh_1.xj(context)) {
      this.bi_1 = state;
      this.ni_1 = get_MODE_ATOMIC();
      this.zh_1.yj(context, this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().wk();
        if (false ? eventLoop.qk() : false) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.pk()) {
          this.bi_1 = state;
          this.ni_1 = tmp0_executeUnconfined;
          eventLoop.nk(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.sk(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.t3();
            this.ci_1;
            this.ai_1.r3(result);
            $l$loop: while (eventLoop.ik()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.qj(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.tk(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).fj = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.vj_1(cause);
    }
  };
  protoOf(DispatchedContinuation).up = function (context, value) {
    this.bi_1 = value;
    this.ni_1 = get_MODE_CANCELLABLE();
    this.zh_1.zj(context, this);
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.zh_1 + ', ' + toDebugString(this.ai_1) + ']';
  };
  function yieldUndispatched(_this__u8e3s4) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
      var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
      // Inline function 'kotlinx.coroutines.assert' call
      var eventLoop = ThreadLocalEventLoop_getInstance().wk();
      if (eventLoop.qk()) {
        tmp$ret$0 = false;
        break $l$block;
      }
      var tmp;
      if (eventLoop.pk()) {
        _this__u8e3s4.bi_1 = Unit_getInstance();
        _this__u8e3s4.ni_1 = tmp0_executeUnconfined;
        eventLoop.nk(_this__u8e3s4);
        tmp = true;
      } else {
        // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
        eventLoop.sk(true);
        try {
          // Inline function 'kotlinx.coroutines.internal.yieldUndispatched.<anonymous>' call
          _this__u8e3s4.pj();
          $l$loop: while (eventLoop.ik()) {
          }
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            _this__u8e3s4.qj(e, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.tk(true);
        }
        tmp = false;
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.ni_1 = resumeMode;
  }
  protoOf(DispatchedTask).fj = function (takenState, cause) {
  };
  protoOf(DispatchedTask).mj = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).oj = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jf_1;
  };
  protoOf(DispatchedTask).pj = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_getInstance();
    var fatalException = null;
    try {
      var tmp = this.bj();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.ai_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.ci_1;
      var context = continuation.t3();
      var state = this.ej();
      var exception = this.oj(state);
      var job = (exception == null ? get_isCancellableMode(this.ni_1) : false) ? context.j4(Key_getInstance_2()) : null;
      var tmp_0;
      if (!(job == null) ? !job.ef() : false) {
        var cause = job.bg();
        this.fj(state, cause);
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        var tmp1_failure = recoverStackTrace(cause, continuation);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        continuation.r3(tmp$ret$0);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp_1;
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.r3(tmp$ret$1);
          tmp_1 = Unit_getInstance();
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          var tmp0_resume = this.mj(state);
          var tmp$ret$3;
          // Inline function 'kotlin.Companion.success' call
          Companion_getInstance();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp0_resume);
          continuation.r3(tmp$ret$3);
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp_2 = _Result___init__impl__xyqfz8(Unit_getInstance());
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var e_0 = $p;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          tmp_3 = _Result___init__impl__xyqfz8(createFailure(e_0));
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      var result = tmp_2;
      this.qj(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).qj = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var cause = exception == null ? finallyException : exception;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.bj().t3(), reason);
  };
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.bj();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.ni_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.zh_1;
      var context = delegate.t3();
      if (dispatcher.xj(context)) {
        dispatcher.yj(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_UNDISPATCHED() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().wk();
    if (eventLoop.pk()) {
      eventLoop.nk(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.sk(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.bj(), true);
        $l$loop: while (eventLoop.ik()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.qj(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.tk(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.ej();
    var exception = _this__u8e3s4.oj(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp2_success = _this__u8e3s4.mj(state);
      tmp = _Result___init__impl__xyqfz8(tmp2_success);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var tmp3_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      tmp3_resumeUndispatchedWith.ai_1;
      tmp3_resumeUndispatchedWith.ci_1;
      tmp3_resumeUndispatchedWith.ai_1.r3(result);
    } else {
      delegate.r3(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).a(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.a((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
        list.a(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === ex) : false) {
          // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      handleCoroutineException(context, tmp0_safe_receiver);
    }
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_getInstance();
    };
  }
  function ContextScope(context) {
    this.eu_1 = context;
  }
  protoOf(ContextScope).df = function () {
    return this.eu_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.eu_1 + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.nh_1 = uCont;
  }
  protoOf(ScopeCoroutine).sg = function () {
    return true;
  };
  protoOf(ScopeCoroutine).of = function (state) {
    resumeCancellableWith(intercepted(this.nh_1), recoverResult(state, this.nh_1));
  };
  protoOf(ScopeCoroutine).nf = function (state) {
    this.nh_1.r3(recoverResult(state, this.nh_1));
  };
  function Symbol(symbol) {
    this.fu_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.fu_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? IntCompanionObject_getInstance().MAX_VALUE : maxValue;
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).z5();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    var tmp;
    if (maxValue === VOID) {
      Companion_getInstance_0();
      tmp = new Long(-1, 2147483647);
    } else {
      tmp = maxValue;
    }
    maxValue = tmp;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var value = tmp_0;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var parsed = tmp_1;
    if (!(minValue.s(parsed) <= 0 ? parsed.s(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var tmp1_error = "System property '" + propertyName + "' should be in range " + toString_0(minValue) + '..' + toString_0(maxValue) + ", but is '" + toString_0(parsed) + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(completion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.r3(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(fatalCompletion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$paksz7(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = block;
        tmp = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.se(receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.mf(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        state.jf_1;
        if (true) {
          throw recoverStackTrace(state.jf_1, _this__u8e3s4.nh_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.jf_1, _this__u8e3s4.nh_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startUndispatchedOrReturnIgnoreTimeout(_this__u8e3s4, receiver, block) {
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = block;
        tmp = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.se(receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.mf(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var tmp0_anonymous = state.jf_1;
        var tmp_3;
        if (tmp0_anonymous instanceof TimeoutCancellationException) {
          tmp_3 = tmp0_anonymous.ap_1 === _this__u8e3s4;
        } else {
          tmp_3 = false;
        }
        if (!tmp_3) {
          throw recoverStackTrace(state.jf_1, _this__u8e3s4.nh_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.jf_1, _this__u8e3s4.nh_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$3 = tmp_1;
    }
    return tmp$ret$3;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        completion.t3();
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = _this__u8e3s4;
        tmp = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.se(receiver, actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$6;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.r3(tmp$ret$6);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.r3(tmp$ret$9);
      }
    }
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  function invokeIt(_this__u8e3s4, cause) {
    if (typeof _this__u8e3s4 === 'function')
      _this__u8e3s4(cause);
    else {
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  function toDebugString(_this__u8e3s4) {
    return toString_0(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().so_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.df().q4(context);
    return (!(combined === Dispatchers_getInstance().so_1) ? combined.j4(Key_getInstance()) == null : false) ? combined.q4(Dispatchers_getInstance().so_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.q4(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).nf = function (state) {
    return this.nh_1.r3(recoverResult(state, this.nh_1));
  };
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).va();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.so_1 = createDefaultDispatcher();
    this.to_1 = Unconfined_getInstance();
    this.uo_1 = new JsMainDispatcher(this.so_1, false);
    this.vo_1 = null;
  }
  protoOf(Dispatchers).wo = function () {
    var tmp0_elvis_lhs = this.vo_1;
    return tmp0_elvis_lhs == null ? this.uo_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.lu_1 = delegate;
    this.mu_1 = invokeImmediately;
    this.nu_1 = this.mu_1 ? this : new JsMainDispatcher(this.lu_1, true);
  }
  protoOf(JsMainDispatcher).qo = function () {
    return this.nu_1;
  };
  protoOf(JsMainDispatcher).xj = function (context) {
    return !this.mu_1;
  };
  protoOf(JsMainDispatcher).yj = function (context, block) {
    return this.lu_1.yj(context, block);
  };
  protoOf(JsMainDispatcher).zj = function (context, block) {
    return this.lu_1.zj(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.ro();
    return tmp0_elvis_lhs == null ? this.lu_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).yj = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.su_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + this.su_1;
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.su_1, this.su_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.su_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).vu = function () {
    process.nextTick(this.ev_1.bv_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).vu = function () {
    setTimeout(this.ev_1.bv_1, 0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.mv();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.cv_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.bv_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).nv = function () {
    this.cv_1.vu();
  };
  protoOf(ScheduledMessageQueue).ov = function () {
    setTimeout(this.bv_1, 0);
  };
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.pj();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.wh(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.ev_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).yj = function (context, block) {
    this.ev_1.pv(block);
  };
  protoOf(SetTimeoutBasedDispatcher).dk = function (timeMillis, block, context) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).ck = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new ClearTimeout(handle);
    continuation.vh(tmp$ret$1);
  };
  function MessageQueue() {
    ArrayQueue.call(this);
    this.kv_1 = 16;
    this.lv_1 = false;
  }
  protoOf(MessageQueue).pv = function (element) {
    this.ok(element);
    if (!this.lv_1) {
      this.lv_1 = true;
      this.nv();
    }
  };
  protoOf(MessageQueue).mv = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = this.kv_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = this.mk();
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.pj();
        }
         while (inductionVariable < tmp0_repeat);
    }finally {
      if (this.rk()) {
        this.lv_1 = false;
      } else {
        this.ov();
      }
    }
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).z5();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.qv_1 = handle;
  }
  protoOf(ClearTimeout).dj = function () {
    clearTimeout(this.qv_1);
  };
  protoOf(ClearTimeout).tj = function (cause) {
    this.dj();
  };
  protoOf(ClearTimeout).invoke = function (cause) {
    return this.tj(cause);
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.qv_1 + ']';
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.wh(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.pj();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$1(this$0, $handle) {
    this.rv_1 = this$0;
    this.sv_1 = $handle;
  }
  protoOf(WindowDispatcher$invokeOnTimeout$1).dj = function () {
    this.rv_1.uv_1.clearTimeout(this.sv_1);
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.uv_1 = window_0;
    this.vv_1 = new WindowMessageQueue(this.uv_1);
  }
  protoOf(WindowDispatcher).yj = function (context, block) {
    return this.vv_1.pv(block);
  };
  protoOf(WindowDispatcher).ck = function (timeMillis, continuation) {
    this.uv_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
  };
  protoOf(WindowDispatcher).dk = function (timeMillis, block, context) {
    var handle = this.uv_1.setTimeout(WindowDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new WindowDispatcher$invokeOnTimeout$1(this, handle);
  };
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.bw_1 ? event.data == this$0.cw_1 : false) {
        event.stopPropagation();
        this$0.mv();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.mv();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.bw_1 = window_0;
    this.cw_1 = 'dispatchCoroutine';
    this.bw_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).nv = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).ov = function () {
    this.bw_1.postMessage(this.cw_1, '*');
  };
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function NoOpLock() {
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  protoOf(LinkedListHead).ml = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function LinkedListNode() {
    this.gl_1 = this;
    this.hl_1 = this;
    this.il_1 = false;
  }
  protoOf(LinkedListNode).nl = function (node) {
    var prev = this.hl_1;
    node.gl_1 = this;
    node.hl_1 = prev;
    prev.gl_1 = node;
    this.hl_1 = node;
  };
  protoOf(LinkedListNode).ml = function () {
    return this.ol();
  };
  protoOf(LinkedListNode).ol = function () {
    if (this.il_1)
      return false;
    var prev = this.hl_1;
    var next = this.gl_1;
    prev.gl_1 = next;
    next.hl_1 = prev;
    this.il_1 = true;
    return true;
  };
  protoOf(LinkedListNode).vl = function (node) {
    if (!(this.gl_1 === this))
      return false;
    this.nl(node);
    return true;
  };
  protoOf(LinkedListNode).pl = function () {
  };
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.xk_1 = null;
  }
  protoOf(CommonThreadLocal).yk = function () {
    var tmp = this.xk_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).zk = function (value) {
    this.xk_1 = value;
  };
  //region block: post-declaration
  protoOf(JobSupport).gg = invokeOnCompletion$default;
  protoOf(JobSupport).kg = cancel$default;
  protoOf(JobSupport).q4 = plus;
  protoOf(JobSupport).j4 = get;
  protoOf(JobSupport).p4 = fold;
  protoOf(JobSupport).o4 = minusKey;
  protoOf(AbstractCoroutine).gg = invokeOnCompletion$default;
  protoOf(AbstractCoroutine).kg = cancel$default;
  protoOf(AbstractCoroutine).q4 = plus;
  protoOf(AbstractCoroutine).j4 = get;
  protoOf(AbstractCoroutine).p4 = fold;
  protoOf(AbstractCoroutine).o4 = minusKey;
  protoOf(StandaloneCoroutine).gg = invokeOnCompletion$default;
  protoOf(StandaloneCoroutine).kg = cancel$default;
  protoOf(StandaloneCoroutine).q4 = plus;
  protoOf(StandaloneCoroutine).j4 = get;
  protoOf(StandaloneCoroutine).p4 = fold;
  protoOf(StandaloneCoroutine).o4 = minusKey;
  protoOf(LazyStandaloneCoroutine).gg = invokeOnCompletion$default;
  protoOf(LazyStandaloneCoroutine).kg = cancel$default;
  protoOf(LazyStandaloneCoroutine).q4 = plus;
  protoOf(LazyStandaloneCoroutine).j4 = get;
  protoOf(LazyStandaloneCoroutine).p4 = fold;
  protoOf(LazyStandaloneCoroutine).o4 = minusKey;
  protoOf(ScopeCoroutine).gg = invokeOnCompletion$default;
  protoOf(ScopeCoroutine).kg = cancel$default;
  protoOf(ScopeCoroutine).q4 = plus;
  protoOf(ScopeCoroutine).j4 = get;
  protoOf(ScopeCoroutine).p4 = fold;
  protoOf(ScopeCoroutine).o4 = minusKey;
  protoOf(DispatchedCoroutine).gg = invokeOnCompletion$default;
  protoOf(DispatchedCoroutine).kg = cancel$default;
  protoOf(DispatchedCoroutine).q4 = plus;
  protoOf(DispatchedCoroutine).j4 = get;
  protoOf(DispatchedCoroutine).p4 = fold;
  protoOf(DispatchedCoroutine).o4 = minusKey;
  protoOf(CancellableContinuationImpl).uh = cancel$default_0;
  protoOf(CancellableContinuationImpl).ph = tryResume$default;
  protoOf(CoroutineDispatcher).j4 = get_0;
  protoOf(CoroutineDispatcher).p4 = fold;
  protoOf(CoroutineDispatcher).o4 = minusKey_0;
  protoOf(CoroutineDispatcher).q4 = plus;
  protoOf(EventLoop).q4 = plus;
  protoOf(EventLoop).j4 = get_0;
  protoOf(EventLoop).p4 = fold;
  protoOf(EventLoop).o4 = minusKey_0;
  protoOf(JobImpl).gg = invokeOnCompletion$default;
  protoOf(JobImpl).kg = cancel$default;
  protoOf(JobImpl).q4 = plus;
  protoOf(JobImpl).j4 = get;
  protoOf(JobImpl).p4 = fold;
  protoOf(JobImpl).o4 = minusKey;
  protoOf(MainCoroutineDispatcher).q4 = plus;
  protoOf(MainCoroutineDispatcher).j4 = get_0;
  protoOf(MainCoroutineDispatcher).p4 = fold;
  protoOf(MainCoroutineDispatcher).o4 = minusKey_0;
  protoOf(SupervisorJobImpl).gg = invokeOnCompletion$default;
  protoOf(SupervisorJobImpl).kg = cancel$default;
  protoOf(SupervisorJobImpl).q4 = plus;
  protoOf(SupervisorJobImpl).j4 = get;
  protoOf(SupervisorJobImpl).p4 = fold;
  protoOf(SupervisorJobImpl).o4 = minusKey;
  protoOf(TimeoutCoroutine).gg = invokeOnCompletion$default;
  protoOf(TimeoutCoroutine).kg = cancel$default;
  protoOf(TimeoutCoroutine).q4 = plus;
  protoOf(TimeoutCoroutine).j4 = get;
  protoOf(TimeoutCoroutine).p4 = fold;
  protoOf(TimeoutCoroutine).o4 = minusKey;
  protoOf(Unconfined).q4 = plus;
  protoOf(Unconfined).j4 = get_0;
  protoOf(Unconfined).p4 = fold;
  protoOf(Unconfined).o4 = minusKey_0;
  protoOf(YieldContext).j4 = get;
  protoOf(YieldContext).p4 = fold;
  protoOf(YieldContext).o4 = minusKey;
  protoOf(YieldContext).q4 = plus;
  protoOf(UndispatchedCoroutine).gg = invokeOnCompletion$default;
  protoOf(UndispatchedCoroutine).kg = cancel$default;
  protoOf(UndispatchedCoroutine).q4 = plus;
  protoOf(UndispatchedCoroutine).j4 = get;
  protoOf(UndispatchedCoroutine).p4 = fold;
  protoOf(UndispatchedCoroutine).o4 = minusKey;
  protoOf(JsMainDispatcher).q4 = plus;
  protoOf(JsMainDispatcher).j4 = get_0;
  protoOf(JsMainDispatcher).p4 = fold;
  protoOf(JsMainDispatcher).o4 = minusKey_0;
  protoOf(UnconfinedEventLoop).q4 = plus;
  protoOf(UnconfinedEventLoop).j4 = get_0;
  protoOf(UnconfinedEventLoop).p4 = fold;
  protoOf(UnconfinedEventLoop).o4 = minusKey_0;
  protoOf(SetTimeoutBasedDispatcher).q4 = plus;
  protoOf(SetTimeoutBasedDispatcher).j4 = get_0;
  protoOf(SetTimeoutBasedDispatcher).p4 = fold;
  protoOf(SetTimeoutBasedDispatcher).o4 = minusKey_0;
  protoOf(NodeDispatcher).q4 = plus;
  protoOf(NodeDispatcher).j4 = get_0;
  protoOf(NodeDispatcher).p4 = fold;
  protoOf(NodeDispatcher).o4 = minusKey_0;
  protoOf(SetTimeoutDispatcher).q4 = plus;
  protoOf(SetTimeoutDispatcher).j4 = get_0;
  protoOf(SetTimeoutDispatcher).p4 = fold;
  protoOf(SetTimeoutDispatcher).o4 = minusKey_0;
  protoOf(WindowDispatcher).q4 = plus;
  protoOf(WindowDispatcher).j4 = get_0;
  protoOf(WindowDispatcher).p4 = fold;
  protoOf(WindowDispatcher).o4 = minusKey_0;
  //endregion
  //region block: init
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.b = coroutineScope;
  _.$_$.c = delay;
  _.$_$.d = withContext;
  _.$_$.e = withTimeoutOrNull;
  _.$_$.f = yield_0;
  _.$_$.g = Key_getInstance_1;
  _.$_$.h = Dispatchers_getInstance;
  _.$_$.i = Key_getInstance_2;
  _.$_$.j = Channel;
  _.$_$.k = cancelConsumed;
  _.$_$.l = MutableStateFlow;
  _.$_$.m = CancellableContinuationImpl;
  _.$_$.n = CoroutineDispatcher;
  _.$_$.o = CoroutineScope_0;
  _.$_$.p = CoroutineScope;
  _.$_$.q = invokeOnTimeout;
  _.$_$.r = Delay;
  _.$_$.s = Job_0;
  _.$_$.t = get_MODE_CANCELLABLE;
  _.$_$.u = SupervisorJob;
  _.$_$.v = cancel;
  _.$_$.w = cancel_0;
  _.$_$.x = get_isActive;
  _.$_$.y = get_job;
  _.$_$.z = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map
