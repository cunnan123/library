//Grunt配置
grunt.initConfig({
    concat: {
        // 这里是concat任务的配置信息。
    },
    uglify: {
        // 这里是uglify任务的配置信息
    },
    // 任意数据。
    my_property: 'whatever',
    my_src_files: ['foo/*.js', 'bar/*.js'],
});
//任务配置和目标
grunt.initConfig({
    concat: {
        foo: {
            // concat task "foo" target options and files go here.
        },
        bar: {
            // concat task "bar" target options and files go here.
        },
    },
    uglify: {
        bar: {
            // uglify task "bar" target options and files go here.
        },
    },
});
//options属性
grunt.initConfig({
    concat: {
        options: {
            // 这里是任务级的Options，覆盖默认值 
        },
        foo: {
            options: {
                // "foo" target options may go here, overriding task-level options.
            },
        },
        bar: {
            // No options specified; this target will use task-level options.
        },
    },
});

//文件
grunt.initConfig({
    jshint: {
        ignore_warning: {
            options: {
                '-W015': true,
            },
            src: 'js/**',
            filter: 'isFile'
        }
    }
});
grunt.initConfig({
    jshint: {
        foo: {
            src: ['src/aa.js', 'src/aaa.js']
        },
    },
    concat: {
        bar: {
            src: ['src/bb.js', 'src/bbb.js'],
            dest: 'dest/b.js',
        },
    },
});
grunt.initConfig({
    concat: {
        foo: {
            files: {
                'dest/a.js': ['src/aa.js', 'src/aaa.js'],
                'dest/a1.js': ['src/aa1.js', 'src/aaa1.js'],
            },
        },
        bar: {
            files: {
                'dest/b.js': ['src/bb.js', 'src/bbb.js'],
                'dest/b1.js': ['src/bb1.js', 'src/bbb1.js'],
            },
        },
    },
});
grunt.initConfig({
    concat: {
        foo: {
            files: [{
                    src: ['src/aa.js', 'src/aaa.js'],
                    dest: 'dest/a.js'
                },
                {
                    src: ['src/aa1.js', 'src/aaa1.js'],
                    dest: 'dest/a1.js'
                },
            ],
        },
        bar: {
            files: [{
                    src: ['src/bb.js', 'src/bbb.js'],
                    dest: 'dest/b/',
                    nonull: true
                },
                {
                    src: ['src/bb1.js', 'src/bbb1.js'],
                    dest: 'dest/b1/',
                    filter: 'isFile'
                },
            ],
        },
    },
});
//   自定义过滤函数
grunt.initConfig({
    clean: {
        foo: {
            src: ['tmp/**/*'],
            filter: 'isFile',
        },
    },
});
grunt.initConfig({
    clean: {
        foo: {
            src: ['tmp/**/*'],
            filter: function (filepath) {
                return (grunt.file.isDir(filepath) && require('fs').readdirSync(filepath).length === 0);
            },
        },
    },
});
grunt.initConfig({
    copy: {
        templates: {
            files: [{
                expand: true,
                cwd: ['templates/css/'], // Parent folder of original CSS templates
                src: '**/*.css', // Collects all `*.css` files within the parent folder (and its subfolders)
                dest: 'src/css/', // Stores the collected `*.css` files in your `src/css/` folder
                filter: function (dest) { // `dest`, in this instance, is the filepath of each matched `src`
                    var cwd = this.cwd, // Configures variables (these are documented for your convenience only)
                        src = dest.replace(new RegExp('^' + cwd), '');
                    dest = grunt.task.current.data.files[0].dest;
                    return (!grunt.file.exists(dest + src)); // Copies `src` files ONLY if their destinations are unoccupied
                }
            }]
        }
    }
});
//   通配符模式
// // 指定单个文件：
// {src: 'foo/this.js', dest: ...}
// // 指定一个文件数组：
// {src: ['foo/this.js', 'foo/that.js', 'foo/the-other.js'], dest: ...}
// // 使用一个匹配模式：
// {src: 'foo/th*.js', dest: ...}

// // 一个独立的node-glob模式：
// {src: 'foo/{a,b}*.js', dest: ...}
// // 也可以这样编写：
// {src: ['foo/a*.js', 'foo/b*.js'], dest: ...}

// // foo目录中所有的.js文件，按字母顺序排序：
// {src: ['foo/*.js'], dest: ...}
// // 首先是bar.js，接着是剩下的.js文件，并按字母顺序排序：
// {src: ['foo/bar.js', 'foo/*.js'], dest: ...}

// // 除bar.js之外的所有的.js文件，按字母顺序排序：
// {src: ['foo/*.js', '!foo/bar.js'], dest: ...}
// // 按字母顺序排序的所有.js文件，但是bar.js在最后。
// {src: ['foo/*.js', '!foo/bar.js', 'foo/bar.js'], dest: ...}

// // 模板也可以用于文件路径或者匹配模式中：
// {src: ['src/<%= basename %>.js'], dest: 'build/<%= basename %>.min.js'}
// // 它们也可以引用在配置中定义的其他文件列表：
// {src: ['foo/*.js', '<%= jshint.all.src %>'], dest: ...}
// 动态构建文件对象
grunt.initConfig({
    uglify: {
        static_mappings: {
            // Because these src-dest file mappings are manually specified, every
            // time a new file is added or removed, the Gruntfile has to be updated.
            files: [{
                    src: 'lib/a.js',
                    dest: 'build/a.min.js'
                },
                {
                    src: 'lib/b.js',
                    dest: 'build/b.min.js'
                },
                {
                    src: 'lib/subdir/c.js',
                    dest: 'build/subdir/c.min.js'
                },
                {
                    src: 'lib/subdir/d.js',
                    dest: 'build/subdir/d.min.js'
                },
            ],
        },
        dynamic_mappings: {
            // Grunt will search for "**/*.js" under "lib/" when the "uglify" task
            // runs and build the appropriate src-dest file mappings then, so you
            // don't need to update the Gruntfile when files are added or removed.
            files: [{
                expand: true, // Enable dynamic expansion.
                cwd: 'lib/', // Src matches are relative to this path.
                src: ['**/*.js'], // Actual pattern(s) to match.
                dest: 'build/', // Destination path prefix.
                ext: '.min.js', // Dest filepaths will have this extension.
                extDot: 'first' // Extensions in filenames begin after the first dot
            }, ],
        },
    },
});
//   重命名属性
grunt.initConfig({
    copy: {
        backup: {
            files: [{
                expand: true,
                src: ['docs/README.md'], // The README.md file has been specified for backup
                rename: function () { // The value for rename must be a function
                    return 'docs/BACKUP.txt'; // The function must return a string with the complete destination
                }
            }]
        }
    }
});
grunt.initConfig({
    copy: {
        production: {
            files: [{
                expand: true,
                cwd: 'dev/',
                src: ['*'],
                dest: 'dist/',
                rename: function (dest, src) { // The `dest` and `src` values can be passed into the function
                    return dest + src.replace('beta', ''); // The `src` is being renamed; the `dest` remains the same
                }
            }]
        }
    }
});
//   模板
grunt.initConfig({
    concat: {
        sample: {
            options: {
                banner: '/* <%= baz %> */\n', // '/* abcde */\n'
            },
            src: ['<%= qux %>', 'baz/*.js'], // [['foo/*.js', 'bar/*.js'], 'baz/*.js']
            dest: 'build/<%= baz %>.js', // 'build/abcde.js'
        },
    },
    //用于任务配置模板的任意属性
    foo: 'c',
    bar: 'b<%= foo %>d', // 'bcd'
    baz: 'a<%= bar %>e', // 'abcde'
    qux: ['foo/*.js', 'bar/*.js'],
});
//   导入外部数据
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        dist: {
            src: 'src/<%= pkg.name %>.js',
            dest: 'dist/<%= pkg.name %>.min.js'
        }
    }
});