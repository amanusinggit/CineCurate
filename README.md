#CineCurate

Setting Up Redux Store

1. missed provider
2. missed react-redux
3. learned gradient
4. problem: div(flex)>div(flex-child)>h2(contains long text and need ellipsis): solution: flex-child(min-w-0)>h2(truncate) : A flex child wants to have alteast width as its content which is enforced by min-w-0, we need to remove it explicitly.
5. change page based on the button clicked location: using state which navigate(useLocation), dynamic routing
6. fetching data based on the button clicked
7. how can you conditionally render a hook and still get away with it? creating a new hook which calls both the hooks, but pass in a variable which says does the logic need to be executed or not. and based on the variable the logic is conditional not the hooks. (See useFetchMovies useFetchNowPlayingMovies, useFetchTopRatedMovies)
8. how to create a tab
9. fixing a youtube video without its logo
10. creating comment section, comment with either content height or min-height, seeMore or seeLess button toggle, showing seeMore only if required.[use of window.innerHeight, useRef.current.offsetHeight]
11. links vs navlinks:
