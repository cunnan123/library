// 任务别名
grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
grunt.registerTask('dist', ['concat:dist', 'uglify:dist']);
// 多任务
grunt.initConfig({
  log: {
    foo: [1, 2, 3],
    bar: 'hello world',
    baz: false
  }
});

grunt.registerMultiTask('log', 'Log stuff.', function() {
  grunt.log.writeln(this.target + ': ' + this.data);
});
// "基本" 任务
grunt.registerTask('foo', 'A sample task that logs stuff.', function(arg1, arg2) {
  if (arguments.length === 0) {
    grunt.log.writeln(this.name + ", no args");
  } else {
    grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
  }
});
// 自定义任务
grunt.registerTask('default', 'My "default" task description.', function() {
  grunt.log.writeln('Currently running the "default" task.');
});
grunt.registerTask('foo', 'My "foo" task.', function() {
  // Enqueue "bar" and "baz" tasks, to run after "foo" finishes, in-order.
  grunt.task.run('bar', 'baz');
  // Or:
  grunt.task.run(['bar', 'baz']);
});
grunt.registerTask('asyncfoo', 'My "asyncfoo" task.', function() {
  // Force task into async mode and grab a handle to the "done" function.
  var done = this.async();
  // Run some sync stuff.
  grunt.log.writeln('Processing task...');
  // And some async stuff.
  setTimeout(function() {
    grunt.log.writeln('All done!');
    done();
  }, 1000);
});
grunt.registerTask('foo', 'My "foo" task.', function(a, b) {
  grunt.log.writeln(this.name, a, b);
});
grunt.registerTask('foo', 'My "foo" task.', function() {
  if (failureOfSomeKind) {
    grunt.log.error('This is an error message.');
  }

  // 如果这个任务出现错误则返回false
  if (ifErrors) { return false; }

  grunt.log.writeln('This is the success message');
});
grunt.registerTask('foo', 'My "foo" task.', function() {
  // Fail synchronously.
  return false;
});

grunt.registerTask('bar', 'My "bar" task.', function() {
  var done = this.async();
  setTimeout(function() {
    // Fail asynchronously.
    done(false);
  }, 1000);
});
grunt.registerTask('foo', 'My "foo" task.', function() {
  return false;
});

grunt.registerTask('bar', 'My "bar" task.', function() {
  // 如果"foo"任务运行失败或者没有运行则任务失败。
  grunt.task.requires('foo');
  // 如果"foo"任务运行成功则执行这里的代码。
  grunt.log.writeln('Hello, world.');
});

// 用法：
// grunt foo bar


grunt.registerTask('foo', 'My "foo" task.', function() {
  // Fail task if "meta.name" config prop is missing
  // Format 1: String
  grunt.config.requires('meta.name');
  // or Format 2: Array
  grunt.config.requires(['meta', 'name']);
  // Log... conditionally.
  grunt.log.writeln('This will only log if meta.name is defined in the config.');
});
grunt.registerTask('foo', 'My "foo" task.', function() {
  // 记录属性值，如果属性未定义（undefined）则返回null。
  grunt.log.writeln('The meta.name property is: ' + grunt.config('meta.name'));
  // 同样的记录属性值，如果属性未定义（undefined）则返回null。
  grunt.log.writeln('The meta.name property is: ' + grunt.config(['meta', 'name']));
});
grunt.registerTask('asyncme', 'My asynchronous task.', function() {
  var done = this.async();
  doSomethingAsync(done);
});
