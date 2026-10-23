import React from 'react';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 bg-neutral-50 text-neutral-900 dark:bg-[#0a0a0c] dark:text-neutral-100 transition-colors duration-300 selection:bg-neutral-200 dark:selection:bg-neutral-800">
            {/* 顶部微小状态标签（右上角平衡画面） */}
            <header className="w-full flex justify-end">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-light bg-neutral-200/50 text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400 border border-neutral-300/50 dark:border-neutral-800 tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80 animate-pulse" />
          正在开发中
        </span>
            </header>

            {/* 核心文案区：居左排版，与屏幕左侧保留适宜的黄金留白 */}
            <main className="my-auto w-full pl-2 sm:pl-6 md:pl-12 lg:pl-16">
                {/* 主标题：超大字号、紧凑字距 */}
                <h1 className="text-7xl sm:text-9xl md:text-[10rem] font-demibold tracking-tighter text-neutral-900 dark:text-neutral-100 leading-none select-none">
                    Flight
                </h1>

                {/* 副标题：显著拉开间距 (mt-8 sm:mt-12)，延续极细轻盈感 */}
                <p className="mt-8 sm:mt-12 text-base sm:text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 font-demibold tracking-[0.25em] pl-1 leading-relaxed">
                    全球航线网络此刻为你所用
                </p>
            </main>

            {/* 底部版权：与主标题保持相同的左侧垂直基准线 */}
            <footer className="w-full pl-2 sm:pl-6 md:pl-12 lg:pl-16 text-xs text-neutral-400/80 dark:text-neutral-600 font-demibold tracking-widest">
                © {new Date().getFullYear()} Flight
            </footer>
        </div>
    );
}