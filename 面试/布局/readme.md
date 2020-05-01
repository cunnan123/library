animation简介：
    CSS3的animation属性可以像Flash制作动画一样，通过控制关键帧来控制动画的每一步，实现更为复杂的动画效果。ainimation实现动画效果主要由两部分组成： 
        1）通过类似Flash动画中的帧来声明一个动画； 
        2）在animation属性中调用关键帧声明的动画。
animation属性值：
    animation 属性是一个简写属性 
        语法：animation: name duration timing-function delay iteration-count direction; 
    animation设置的六个动画属性：
        animation-name：规定需要绑定到选择器的 keyframe 名称。取值： 
            none：（默认）规定无动画效果（可用于覆盖来自级联的动画）。 
            keyframename：规定需要绑定到选择器的 keyframe 的名称。
        animation-duration：规定完成动画所花费的时间，以秒或毫秒计。取值： 
            time：规定完成动画所花费的时间。默认值是 0，意味着没有动画效果。
        animation-timing-function：规定动画的速度曲线。取值： 
            ease：默认。动画以低速开始，然后加快，在结束前变慢。 
            linear：动画从头到尾的速度是相同的。 
            ease-in：动画以低速开始。 
            ease-out：动画以低速结束。 
            ease-in-out：动画以低速开始和结束。 
            cubic-bezier(n,n,n,n)：在 cubic-bezier 函数中定义自己的值。可能的值是从 0 到 1 的数值。
        animation-delay：规定在动画开始之前的延迟。取值： 
            time：（可选）定义动画开始前等待的时间，以秒或毫秒计。默认值是 0。
        animation-iteration-count： 规定动画应该播放的次数。取值： 
            n：定义动画播放次数的数值。 
            infinite：规定动画应该无限次播放。
        animation-direction：规定是否应该轮流反向播放动画。取值： 
            normal：默认值。动画应该正常播放。 
            alternate：动画应该轮流反向播放。
