(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{277:function(e,t,a){"use strict";a.r(t);a(34),a(13),a(10),a(11),a(6),a(17);var i=a(0),n=a.n(i),r=a(285),u=a(286),o=a(290),M=a.n(o),s=a(269),l=a.n(s),c=a(289),g=function(e){var t=e.articleCategory,a=e.articleHeading,i=e.articleSubheading,r=e.articleAuthor,u=e.articleDate,o=e.articleCoverImage,s=e.articleCoverImage_alt,g=e.articleContent;return n.a.createElement("article",{className:l.a.Article},n.a.createElement("div",{className:l.a.Article_category},t),n.a.createElement("h1",{className:l.a.Article_heading},a),n.a.createElement("h2",{className:l.a.Article_subheading},i),n.a.createElement("address",{className:l.a.Article_author},n.a.createElement("span",{className:l.a.Article_author_by},"By")," ",n.a.createElement("span",{className:l.a.Article_author_name},r)),n.a.createElement("time",{className:l.a.Article_date},u),n.a.createElement("div",{className:l.a.Article_content},n.a.createElement(M.a,{className:l.a.Article_coverImage,fluid:o,backgroundColor:"#f9f9f9",alt:s}),n.a.createElement(c.a,null,g)))},N=a(287);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach(function(t){d(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"query",function(){return I}),a.d(t,"default",function(){return D});var I="1311446270",D=function(e){var t,a;function i(){for(var t,a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))||this).state={showMobileMenu:!1},t.toggleMobileMenu=function(e){t.setState({showMobileMenu:!t.state.showMobileMenu}),e.preventDefault()},t}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement(r.a,{handler:this.toggleMobileMenu,state:L({},this.state)}),n.a.createElement(u.b,{layoutVariant:u.a.ARTICLE},n.a.createElement(g,{articleCategory:e.page.meta.category,articleHeading:e.page.meta.heading,articleSubheading:e.page.meta.subheading,articleAuthor:e.page.meta.author,articleDate:e.page.meta.date,articleCoverImage:e.page.meta.coverImage.childImageSharp.fluid,articleCoverImage_alt:e.page.meta.coverImage_alt,articleContent:e.page.content})),n.a.createElement(N.a,null))},i}(i.Component)},278:function(e,t,a){"use strict";a.d(t,"f",function(){return l}),a.d(t,"b",function(){return c}),a.d(t,"g",function(){return g}),a.d(t,"c",function(){return N}),a.d(t,"h",function(){return j}),a.d(t,"d",function(){return L}),a.d(t,"e",function(){return I}),a.d(t,"a",function(){return D});a(163);var i=a(0),n=a.n(i),r=a(280),u=a.n(r),o=a(61),M=a(261),s=a.n(M),l={TRANSPARENT:"mobile___transparentBackground",PRIMARY:"mobile___PrimaryBackground",SECONDARY:"mobile___SecondaryBackground",WHITE:"mobile___WhiteBackground"},c={TRANSPARENT:"desktop___transparentBackground",PRIMARY:"desktop___PrimaryBackground",SECONDARY:"desktop___SecondaryBackground",WHITE:"desktop___WhiteBackground"},g={PRIMARY:"mobile___PrimaryBorder",SECONDARY:"mobile___SecondaryBorder",WHITE:"mobile___WhiteBorder"},N={PRIMARY:"desktop___PrimaryBorder",SECONDARY:"desktop___SecondaryBorder",WHITE:"desktop___WhiteBorder"},j={PRIMARY:"mobile___PrimaryColour",SECONDARY:"mobile___SecondaryColour",WHITE:"mobile___WhiteColour"},L={PRIMARY:"desktop___PrimaryColour",SECONDARY:"desktop___SecondaryColour",WHITE:"desktop___WhiteColour"},d="mobile___Small",I={SMALL:"desktop___Small",MEDIUM:"desktop___Medium",LARGE:"desktop___Large"},D=function(e){var t=e.clickHandler,a=e.children,i=e.className,r=e.link,M=e.mobileBackground,l=e.mobileBorder,c=e.mobileColour,g=e.mobileSize,N=e.tabletBackground,j=e.tabletBorder,L=e.tabletColour,D=e.tabletSize,m=e.desktopBackground,y=e.desktopBorder,A=e.desktopColour,S=e.desktopSize,p=u()(s.a.Button,s.a[M],s.a[l],s.a[c],s.a[g||d],s.a[N],s.a[j],s.a[L],s.a[D],s.a[m],s.a[y],s.a[A],s.a[S||I.MEDIUM]);return t?n.a.createElement("div",{className:i+" "+p,onClick:t},a):n.a.createElement(o.a,{className:i+" "+p,to:r},a)}},279:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI4IiBoZWlnaHQ9IjQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTI4LjQ3NiAxNS4xODRjLjg0OC00LjI0Ljg1Ny03LjU5NS44NTctNy43MzZhLjc4Ljc4IDAgMCAwLS43OC0uNzgxYy0uMTQyIDAtMy40OTcuMDEtNy43MzcuODU3LTEuNTEuMzAyLTIuOTQxLjY3NC00LjI4IDEuMTFsLS4wMjguMDFhMjkuODEgMjkuODEgMCAwIDAtMi40ODEuOTMgMjMuNzk0IDIzLjc5NCAwIDAgMC0yLjc2NSAxLjM5N2MtMS4zMzUuNzkzLTIuNTAxIDEuNjgzLTMuNDgyIDIuNjY0YTEwLjI0NSAxMC4yNDUgMCAwIDAtMy4wMjEgNy4yOTNjMCAyLjQ5My44NzggNC44NSAyLjQ4OSA2LjcyTDIuODk2IDMyQS43ODEuNzgxIDAgMSAwIDQgMzMuMTA0bDQuMzUyLTQuMzUyYTEwLjIzNyAxMC4yMzcgMCAwIDAgNi43MiAyLjQ4OSAxMC4yNSAxMC4yNSAwIDAgMCA3LjI5My0zLjAyYy45OC0uOTgyIDEuODcxLTIuMTQ4IDIuNjY0LTMuNDgzYTIzLjc5IDIzLjc5IDAgMCAwIDEuMzk3LTIuNzY0IDI5LjgwNiAyOS44MDYgMCAwIDAgLjkzOS0yLjUwNyAzNy43NiAzNy43NiAwIDAgMCAxLjExLTQuMjgzem0tNy4zODMtNi4xMjFhNDQuNTg1IDQ0LjU4NSAwIDAgMSA2LjY1NS0uODExIDQ0LjU4IDQ0LjU4IDAgMCAxLS44MSA2LjY1NSAzNi41NDYgMzYuNTQ2IDAgMCAxLS44OTcgMy41NTVoLTcuMzk4bDQuNTQ0LTQuNTQ1YS43ODIuNzgyIDAgMCAwLTEuMTA0LTEuMTA0bC00LjU0NSA0LjU0NFY5Ljk1OWEzNi41NDYgMzYuNTQ2IDAgMCAxIDMuNTU1LS44OTZ6bTIuODMzIDE0LjQ1NEgxMy41ODhsMy40OTItMy40OTNoOC40MzRhMjQuNDc4IDI0LjQ3OCAwIDAgMS0xLjU4OCAzLjQ5M3ptLTcuOTUtMTMuMDMxdjguNDMzbC0zLjQ5MyAzLjQ5M1YxMi4wNzRhMjQuNDggMjQuNDggMCAwIDEgMy40OTMtMS41ODh6TTYuMzIgMjAuOTI4YzAtMi4zMzcuOTEtNC41MzUgMi41NjMtNi4xODhhMTUuMDAzIDE1LjAwMyAwIDAgMSAyLjAzNi0xLjY5MXYxMC45MjVMOC4zNTggMjYuNTRhOC42ODQgOC42ODQgMCAwIDEtMi4wMzYtNS42MTF6bTE0LjkzOSA2LjE4OGE4LjY5NCA4LjY5NCAwIDAgMS02LjE4OCAyLjU2MyA4LjY4NSA4LjY4NSAwIDAgMS01LjYxLTIuMDM2bDIuNTYzLTIuNTY0SDIyLjk1YTE1LjAwNyAxNS4wMDcgMCAwIDEtMS42OTEgMi4wMzd6Ii8+PHBhdGggZD0iTTYzLjQ1MiAyMC4wOTZjMS4yOC4zMiAyLjMyNS45NiAzLjEzNiAxLjkyLjgxLjk2IDEuMjE2IDIuMjA4IDEuMjE2IDMuNzQ0IDAgMi4wOS0uNjQ1IDMuNjUzLTEuOTM2IDQuNjg4QzY0LjU3OCAzMS40ODMgNjIuOTcyIDMyIDYxLjA1MiAzMmgtOC42MDhhLjkzMi45MzIgMCAwIDEtLjY4OC0uMjcyLjkzMi45MzIgMCAwIDEtLjI3Mi0uNjg4VjEwLjU2YS45My45MyAwIDAgMSAuMjcyLS42ODguOTMyLjkzMiAwIDAgMSAuNjg4LS4yNzJoOC40OGMxLjc5MiAwIDMuMTk1LjQ5IDQuMjA4IDEuNDcyIDEuMDEzLjk4MSAxLjUyIDIuMzI1IDEuNTIgNC4wMzIgMCAxLjEzLS4yNzcgMi4xNDQtLjgzMiAzLjA0LS41NTUuODk2LTEuMzQ0IDEuNTQ3LTIuMzY4IDEuOTUyem0xLjE1Mi00LjgzMmMwLTEuMTczLS4zNDctMi4wOTYtMS4wNC0yLjc2OC0uNjkzLS42NzItMS42NTktMS4wMDgtMi44OTYtMS4wMDhoLTcuMTM2djhoNy4xMzZjMS4xNTItLjAyMSAyLjA5Ni0uMzk1IDIuODMyLTEuMTIuNzM2LS43MjUgMS4xMDQtMS43NiAxLjEwNC0zLjEwNHptLTMuNjQ4IDE0Ljg0OGMxLjQzIDAgMi41ODctLjM2MyAzLjQ3Mi0xLjA4OC44ODUtLjcyNSAxLjMyOC0xLjgxMyAxLjMyOC0zLjI2NCAwLTEuNDkzLS40NTMtMi41OTItMS4zNi0zLjI5Ni0uOTA3LS43MDQtMi4wNzUtMS4wNTYtMy41MDQtMS4wNTZoLTcuMzZ2OC43MDRoNy40MjR6bTI0LjA2NCAwYy4yNzcgMCAuNTA3LjA5Ni42ODguMjg4YS45NDguOTQ4IDAgMCAxIC4yNzIuNjcyLjg4Ljg4IDAgMCAxLS4yNzIuNjcyLjk2NC45NjQgMCAwIDEtLjY4OC4yNTZINzMuMjc2YS45MzIuOTMyIDAgMCAxLS42ODgtLjI3Mi45MzIuOTMyIDAgMCAxLS4yNzItLjY4OFYxMC41NmEuOTMuOTMgMCAwIDEgLjI3Mi0uNjg4LjkzMi45MzIgMCAwIDEgLjY4OC0uMjcySDg1LjAyYS45My45MyAwIDAgMSAuOTYuOTYuODguODggMCAwIDEtLjI3Mi42NzIuOTY0Ljk2NCAwIDAgMS0uNjg4LjI1Nkg3NC4zMzJ2OC4wMzJoOS4yNDhhLjkzLjkzIDAgMCAxIC45Ni45Ni44OC44OCAwIDAgMS0uMjcyLjY3Mi45NjQuOTY0IDAgMCAxLS42ODguMjU2aC05LjI0OHY4LjcwNEg4NS4wMnptMjIuMTc2LjYwOGMuMDQzLjE3LjA2NC4yOTkuMDY0LjM4NGEuODU2Ljg1NiAwIDAgMS0uMjg4LjY3Mi45OC45OCAwIDAgMS0uNjcyLjI1Ni45MjEuOTIxIDAgMCAxLS41Ni0uMTc2IDEuMTM0IDEuMTM0IDAgMCAxLS4zNjgtLjQ2NGwtMi40LTUuODU2aC0xMC40bC0yLjM2OCA1Ljg1NmMtLjE3LjQyNy0uNDU5LjY0LS44NjQuNjQtLjI5OSAwLS41MjMtLjA3NS0uNjcyLS4yMjQtLjE1LS4xNS0uMjM1LS4zNTItLjI1Ni0uNjA4di0uMDk2YS45Ny45NyAwIDAgMSAuMDMyLS4yODhsOC40NDgtMjAuNjcyYy4xNy0uNDI3LjQ5LS42NC45Ni0uNjQuMjEzIDAgLjQuMDU5LjU2LjE3Ni4xNi4xMTcuMjgzLjI3Mi4zNjguNDY0bDguNDE2IDIwLjU3NnptLTEzLjg4OC03LjA3Mmg4Ljg5NmwtNC40OC0xMC45NDQtNC40MTYgMTAuOTQ0ek0xMjcuNTggOS42Yy4yNzcgMCAuNDk2LjA4NS42NTYuMjU2YS45LjkgMCAwIDEgLjI0LjY0djIwLjQ4YzAgLjMyLS4wOTYuNTctLjI4OC43NTJhLjk4Ny45ODcgMCAwIDEtLjcwNC4yNzIgMS4wMiAxLjAyIDAgMCAxLS40MzItLjA5NiAxLjE1MyAxLjE1MyAwIDAgMS0uMzM2LS4yMjRsLTEzLjcyOC0xOC40OTZ2MTcuOTUyYzAgLjIzNS0uMDkuNDM3LS4yNzIuNjA4YS44ODQuODg0IDAgMCAxLS42MjQuMjU2Ljg2OC44NjggMCAwIDEtLjY0LS4yNTYuODMuODMgMCAwIDEtLjI1Ni0uNjA4VjEwLjU2YzAtLjI5OS4wOS0uNTMzLjI3Mi0uNzA0LjE4MS0uMTcuNC0uMjU2LjY1Ni0uMjU2LjM0MSAwIC41OTcuMTE3Ljc2OC4zNTJsMTMuNzkyIDE4LjU5MlYxMC40OTZjMC0uMjU2LjA4NS0uNDcuMjU2LS42NGEuODY4Ljg2OCAwIDAgMSAuNjQtLjI1NnptMTIuOTYgMjIuNzJjLTEuNTM2IDAtMi44OTYtLjI1Ni00LjA4LS43NjgtMS4xODQtLjUxMi0yLjMzLTEuMzEyLTMuNDQtMi40LS4yNTYtLjIxMy0uMzg0LS40Ny0uMzg0LS43NjggMC0uMjU2LjEwMS0uNDkuMzA0LS43MDQuMjAzLS4yMTMuNDMyLS4zMi42ODgtLjMyLjI1NiAwIC40OS4xMDcuNzA0LjMyIDEuNjY0IDEuODM1IDMuNzQ0IDIuNzUyIDYuMjQgMi43NTIgMS41MzYgMCAyLjgxLS4zNjMgMy44MjQtMS4wODggMS4wMTMtLjcyNSAxLjUyLTEuNjc1IDEuNTItMi44NDggMC0uOTE3LS4yNS0xLjY4LS43NTItMi4yODgtLjUwMS0uNjA4LTEuMTU3LTEuMTA0LTEuOTY4LTEuNDg4LS44MS0uMzg0LTEuODQ1LS43NzktMy4xMDQtMS4xODQtMS4zNjUtLjQwNS0yLjUxMi0uODUzLTMuNDQtMS4zNDRhNi4zMDYgNi4zMDYgMCAwIDEtMi4yNTYtMS45NjhjLS41NzYtLjgyMS0uODY0LTEuODYxLS44NjQtMy4xMiAwLTEuMTMuMzA0LTIuMTMzLjkxMi0zLjAwOC42MDgtLjg3NSAxLjQ2MS0xLjU2MyAyLjU2LTIuMDY0IDEuMDk5LS41MDEgMi4zNjMtLjc1MiAzLjc5Mi0uNzUyIDEuMzAxIDAgMi41MjMuMjE5IDMuNjY0LjY1NiAxLjE0MS40MzcgMi4wNTMgMS4wNjEgMi43MzYgMS44NzIuMzIuMzYzLjQ4LjY3Mi40OC45MjggMCAuMjM1LS4xMDcuNDUzLS4zMi42NTYtLjIxMy4yMDMtLjQ0OC4zMDQtLjcwNC4zMDRhLjc0Ljc0IDAgMCAxLS41NDQtLjIyNGMtLjU3Ni0uNjgzLTEuMzQ0LTEuMjM3LTIuMzA0LTEuNjY0YTcuMzI3IDcuMzI3IDAgMCAwLTMuMDA4LS42NGMtMS41NTcgMC0yLjgyNy4zNDctMy44MDggMS4wNC0uOTgxLjY5My0xLjQ3MiAxLjYzNy0xLjQ3MiAyLjgzMiAwIDEuMjM3LjQ3IDIuMTg3IDEuNDA4IDIuODQ4LjkzOS42NjEgMi4yODMgMS4yNyA0LjAzMiAxLjgyNCAxLjUxNS40NDggMi43NTIuOTA3IDMuNzEyIDEuMzc2YTYuMTA5IDYuMTA5IDAgMCAxIDIuMzUyIDJjLjYwOC44NjQuOTEyIDIgLjkxMiAzLjQwOGE0Ljk5IDQuOTkgMCAwIDEtLjk0NCAyLjk2Yy0uNjMuODg1LTEuNTA0IDEuNTg0LTIuNjI0IDIuMDk2cy0yLjM5NS43NjgtMy44MjQuNzY4ek0xNjYuNzQ4IDkuNmMuMjc3IDAgLjUwNy4wODUuNjg4LjI1NmEuODguODggMCAwIDEgLjI3Mi42NzJjMCAuMjc3LS4wOS40OTYtLjI3Mi42NTZhMSAxIDAgMCAxLS42ODguMjRoLTYuNjI0VjMxLjA0YS45MDYuOTA2IDAgMCAxLS4yODguNjg4Ljk4Ny45ODcgMCAwIDEtLjcwNC4yNzJjLS4yOTkgMC0uNTM5LS4wOS0uNzItLjI3MmEuOTMyLjkzMiAwIDAgMS0uMjcyLS42ODhWMTEuNDI0aC02LjYyNGEuOTY0Ljk2NCAwIDAgMS0uNjg4LS4yNTYuODguODggMCAwIDEtLjI3Mi0uNjcyYzAtLjI1Ni4wOS0uNDcuMjcyLS42NGEuOTY0Ljk2NCAwIDAgMSAuNjg4LS4yNTZoMTUuMjMyem0yMC4xNiAyMS4xMmMuMDQzLjE3LjA2NC4yOTkuMDY0LjM4NGEuODU2Ljg1NiAwIDAgMS0uMjg4LjY3Mi45OC45OCAwIDAgMS0uNjcyLjI1Ni45MjEuOTIxIDAgMCAxLS41Ni0uMTc2IDEuMTM0IDEuMTM0IDAgMCAxLS4zNjgtLjQ2NGwtMi40LTUuODU2aC0xMC40bC0yLjM2OCA1Ljg1NmMtLjE3LjQyNy0uNDU5LjY0LS44NjQuNjQtLjI5OSAwLS41MjMtLjA3NS0uNjcyLS4yMjQtLjE1LS4xNS0uMjM1LS4zNTItLjI1Ni0uNjA4di0uMDk2YS45Ny45NyAwIDAgMSAuMDMyLS4yODhsOC40NDgtMjAuNjcyYy4xNy0uNDI3LjQ5LS42NC45Ni0uNjQuMjEzIDAgLjQuMDU5LjU2LjE3Ni4xNi4xMTcuMjgzLjI3Mi4zNjguNDY0bDguNDE2IDIwLjU3NnptLTEzLjg4OC03LjA3Mmg4Ljg5NmwtNC40OC0xMC45NDQtNC40MTYgMTAuOTQ0em0zMC4yNzIgNi40NjRjLjI3NyAwIC41MDcuMDg1LjY4OC4yNTZhLjg4Ljg4IDAgMCAxIC4yNzIuNjcyLjkzLjkzIDAgMCAxLS4yNzIuNjg4LjkzMi45MzIgMCAwIDEtLjY4OC4yNzJoLTExLjQyNGEuOTMyLjkzMiAwIDAgMS0uNjg4LS4yNzIuOTMyLjkzMiAwIDAgMS0uMjcyLS42ODhWMTAuNTZjMC0uMjc3LjA5Ni0uNTA3LjI4OC0uNjg4LjE5Mi0uMTgxLjQzNy0uMjcyLjczNi0uMjcyLjI3NyAwIC41MTIuMDkuNzA0LjI3Mi4xOTIuMTgxLjI4OC40MS4yODguNjg4djE5LjU1MmgxMC4zNjh6bTIxLjUwNC4zMmMuMTUuMjEzLjIyNC40MzcuMjI0LjY3MiAwIC4zMi0uMTEyLjU3LS4zMzYuNzUyYTEuMTY1IDEuMTY1IDAgMCAxLS43NTIuMjcyYy0uMjc3IDAtLjUxMi0uMTE3LS43MDQtLjM1MkwyMTQuMyAyMC41NDRsLTQuMzUyIDQuMDk2djYuMzY4Yy0uMDIxLjI5OS0uMTI4LjUzOS0uMzIuNzJhLjk4Ny45ODcgMCAwIDEtLjcwNC4yNzJjLS4yOTkgMC0uNTM5LS4wOS0uNzItLjI3Mi0uMTgxLS4xODEtLjI3Mi0uNDIxLS4yNzItLjcyVjEwLjU5MmMwLS4yOTkuMDk2LS41MzkuMjg4LS43Mi4xOTItLjE4MS40MzctLjI3Mi43MzYtLjI3MnMuNTM5LjA5LjcyLjI3MmMuMTgxLjE4MS4yNzIuNDIxLjI3Mi43MnYxMS42MTZsMTIuOTI4LTEyLjIyNGEuOTExLjkxMSAwIDAgMSAuNzA0LS4zMi44Ny44NyAwIDAgMSAuNjU2LjI4OC45MTIuOTEyIDAgMCAxIC4yNzIuNjRjMCAuMjU2LS4wOTYuNDgtLjI4OC42NzJsLTguMzg0IDcuODQgOC45NiAxMS4zMjh6IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+"},280:function(e,t,a){var i;a(80),function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)&&i.length){var u=n.apply(null,i);u&&e.push(u)}else if("object"===r)for(var o in i)a.call(i,o)&&i[o]&&e.push(o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(i=function(){return n}.apply(t,[]))||(e.exports=i)}()},281:function(e,t,a){"use strict";a(163),a(33);var i=a(282),n=a(0),r=a.n(n),u=a(61),o=a(278),M=a(262),s=a.n(M),l=a(279),c=a.n(l);t.a=function(e){var t=e.className,a=e.layoutVariant,n=i.data,M=!0===a.homepage,l=function(e,t,a){return n.site.siteMetadata.menuLinks.slice(e,t).map(function(e){return M?r.a.createElement("li",{className:""+s.a.DesktopNavigation_item,key:e.name},e.isButton?r.a.createElement(o.a,{link:e.link,desktopColour:o.d.WHITE,desktopSize:o.e.MEDIUM,desktopBorder:o.c.WHITE},e.name):r.a.createElement(u.a,{className:s.a.DesktopNavigation_link,to:e.link},e.name)):r.a.createElement("li",{className:""+(a?s.a.DesktopNavigation_item___start:s.a.DesktopNavigation_item___end),key:e.name},e.isButton?r.a.createElement(o.a,{link:e.link,desktopColour:o.d.WHITE,desktopSize:o.e.MEDIUM,desktopBorder:o.c.WHITE},e.name):r.a.createElement(u.a,{className:s.a.DesktopNavigation_link,to:e.link},e.name))})};return r.a.createElement(r.a.Fragment,null,M?r.a.createElement("nav",{className:t+" "+s.a.DesktopNavigation},r.a.createElement(u.a,{to:"/"},r.a.createElement("img",{className:s.a.DesktopNavigation_logo,src:c.a,alt:"Beanstalk logo",width:"228",height:"40"})),r.a.createElement("div",{className:s.a.DesktopNavigation_section},r.a.createElement("ul",{className:s.a.DesktopNavigation_items},l()))):r.a.createElement("nav",{className:s.a.DesktopNavigation},r.a.createElement("div",{className:""+s.a.DesktopNavigation_section},r.a.createElement("ul",{className:s.a.DesktopNavigation_items+" "+s.a.DesktopNavigation_items___page},l(0,2,!0))),r.a.createElement("div",{className:s.a.DesktopNavigation_section+" "+s.a.DesktopNavigation_section___middle},r.a.createElement(u.a,{to:"/"},r.a.createElement("img",{className:s.a.DesktopNavigation_logo,src:c.a,alt:"Beanstalk logo",width:"228",height:"40"}))),r.a.createElement("div",{className:s.a.DesktopNavigation_section+" "+s.a.DesktopNavigation_section___end},r.a.createElement("ul",{className:s.a.DesktopNavigation_items+" "+s.a.DesktopNavigation_items___page},l(2,4)))))}},282:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Join waiting list",link:"/waiting-list",isButton:!0},{name:"About Beanstalk",link:"/about-beanstalk",isButton:null},{name:"Support",link:"/support",isButton:null},{name:"Articles",link:"/articles",isButton:null},{name:"T&Cs",link:"/terms-and-conditions",isButton:null}]}}}}},283:function(e,t,a){"use strict";a(163),a(33);var i=a(284),n=a(0),r=a.n(n),u=a(61),o=a(278),M=a(263),s=a.n(M),l=a(279),c=a.n(l);t.a=function(e){var t,a,M=e.className,l=i.data,g=Object(n.useState)(!1),N=g[0],j=g[1],L=N?"isActive":"isNotActive";return r.a.createElement("nav",{className:M+" "+s.a.MobileNavigation+" "+s.a[L]},r.a.createElement(o.a,{className:s.a.MobileNavigation_waitingListButton,link:"/waiting-list",desktopBorder:o.c.WHITE,desktopColour:o.d.WHITE},"Join waiting list"),r.a.createElement("div",{className:s.a.MobileNavigation_slideMenu},r.a.createElement("ul",{className:s.a.MobileNavigation_items},(t=1,a=4,l.site.siteMetadata.menuLinks.slice(t,a).map(function(e){return r.a.createElement("li",{className:s.a.MobileNavigation_item,key:e.name},r.a.createElement(u.a,{className:s.a.MobileNavigation_link,to:e.link},e.name))}))),r.a.createElement(o.a,{desktopBackground:o.b.WHITE,desktopColour:o.d.SECONDARY,mobileBorder:o.g.WHITE,mobileBackground:o.f.TRANSPARENT,mobileColour:o.h.WHITE,clickHandler:function(e){e.preventDefault(),j(!N)}},"Menu")),r.a.createElement("div",{className:s.a.MobileNavigation_logo_underlay},r.a.createElement(u.a,{to:"/"},r.a.createElement("img",{className:s.a.MobileNavigation_logo,src:c.a,alt:"Beanstalk logo",height:"32"}))))}},284:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Join waiting list",link:"/waiting-list"},{name:"About Beanstalk",link:"/about-beanstalk"},{name:"Support",link:"/support"},{name:"Articles",link:"/articles"},{name:"T&Cs",link:"/terms-and-conditions"}]}}}}},285:function(e,t,a){"use strict";a(20);var i=a(0),n=a.n(i),r=a(281),u=a(283),o=a(264),M=a.n(o);t.a=function(e){var t=e.heading,a=e.subheading;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{className:M.a.Header},n.a.createElement(r.a,{layoutVariant:{page:!0}}),n.a.createElement(u.a,null),t?n.a.createElement("h1",{className:M.a.Header_heading},t):null,a?n.a.createElement("p",{className:M.a.Header_subheading,dangerouslySetInnerHTML:{__html:a.replace(/(\.(\s+))/g,"$1 <br>")}}):null))}},286:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return l});var i=a(0),n=a.n(i),r=a(280),u=a.n(r),o=a(265),M=a.n(o),s={ARTICLE:"Main___article",PAGE:"Main___page"},l=function(e){var t=e.children,a=e.layoutVariant,i=u()(M.a.Main,M.a[a]);return n.a.createElement("div",{className:M.a.Main_wrapper},n.a.createElement("main",{className:i},t))}},287:function(e,t,a){"use strict";a(163),a(33);var i=a(288),n=a(0),r=a.n(n),u=a(61),o=a(278),M=a(267),s=a.n(M);t.a=function(){var e=i.data;return r.a.createElement("footer",{className:s.a.Footer},r.a.createElement("ul",{className:s.a.Footer_navigation},e.site.siteMetadata.menuLinks.map(function(e){return r.a.createElement("li",{className:s.a.Footer_navigation_item,key:e.name},e.isButton?r.a.createElement(o.a,{className:s.a.Footer_navigation_button,link:e.link,mobileSize:o.e.MEDIUM,desktopColour:o.d.WHITE,desktopSize:o.e.MEDIUM,desktopBorder:o.c.WHITE},e.name):r.a.createElement(u.a,{className:s.a.Footer_navigation_link,to:e.link},e.name))})),r.a.createElement("div",{className:s.a.Footer_detailedLegals},r.a.createElement("p",{className:s.a.Footer_companyRegistration},e.site.siteMetadata.footer.companyRegistration),r.a.createElement("p",{className:s.a.Footer_companyAuthorised},e.site.siteMetadata.footer.companyAuthorised)),r.a.createElement("p",{className:s.a.Footer_companyCopyright},e.site.siteMetadata.footer.companyCopyright))}},288:function(e){e.exports={data:{site:{siteMetadata:{menuLinks:[{name:"Join waiting list",link:"/waiting-list",isButton:!0},{name:"About Beanstalk",link:"/about-beanstalk",isButton:null},{name:"Support",link:"/support",isButton:null},{name:"Articles",link:"/articles",isButton:null},{name:"T&Cs",link:"/terms-and-conditions",isButton:null}],footer:{companyRegistration:"© Copyright Beanstalk Ltd 2019, all rights reserved. Company registration number 7652431.",companyAuthorised:"Authorised and regulated by the Financial Conduct Authority - Authorisation no. 473606.",companyCopyright:"© 2019 Beanstalk Limited"}}}}}},289:function(e,t,a){"use strict";var i=a(0),n=a.n(i),r=a(110),u=a(77),o=a(266),M=a.n(o),s={p:function(e){var t=e.children;return n.a.createElement("p",{className:M.a.P},t)},h2:a(111).a};t.a=function(e){var t=e.children;return n.a.createElement(u.MDXProvider,{components:s},n.a.createElement(r.MDXRenderer,null,t))}},290:function(e,t,a){"use strict";a(10),a(11),a(6),a(49),a(167),a(291);var i=a(21);t.__esModule=!0,t.default=void 0;var n,r=i(a(81)),u=i(a(82)),o=i(a(165)),M=i(a(166)),s=i(a(0)),l=i(a(62)),c=function(e){var t=(0,M.default)({},e),a=t.resolutions,i=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},g=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},N=Object.create({}),j=function(e){var t=c(e),a=g(t);return N[a]||!1},L="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,d="undefined"!=typeof window,I=d&&window.IntersectionObserver,D=new WeakMap;function m(e){return e.map(function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},i&&s.default.createElement("source",{type:"image/webp",media:n,srcSet:i,sizes:r}),s.default.createElement("source",{media:n,srcSet:a,sizes:r}))})}function y(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function A(e){return e.map(function(e){var t=e.src,a=e.media,i=e.tracedSVG;return s.default.createElement("source",{key:t,media:a,srcSet:i})})}function S(e){return e.map(function(e){var t=e.src,a=e.media,i=e.base64;return s.default.createElement("source",{key:t,media:a,srcSet:i})})}function p(e,t){var a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?i:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var E=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(D.has(e.target)){var t=D.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),D.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),D.set(e,t)),function(){a.unobserve(e),D.delete(e)}},f=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',u=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",M=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?p(e,!0):"")+p(e)}).join("")+"<img "+s+u+o+a+i+t+r+n+M+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},T=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,n=e.spreadProps,r=s.default.createElement(z,(0,M.default)({src:t},n));return a.length>1?s.default.createElement("picture",null,i(a),r):r},z=s.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,n=e.src,r=e.style,u=e.onLoad,l=e.onError,c=e.loading,g=e.draggable,N=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return s.default.createElement("img",(0,M.default)({sizes:a,srcSet:i,src:n},N,{onLoad:u,onError:l,ref:t,loading:c,draggable:g,style:(0,M.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});z.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=d&&j(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!L&&I&&!t.critical&&!a.seenBefore;var i=t.critical||"eager"==t.loading||d&&(L||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=s.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,u.default)((0,u.default)(a))),a.handleRef=a.handleRef.bind((0,u.default)((0,u.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:j(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,function(){var e=j(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=g(t),N[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,u=e.imgStyle,o=void 0===u?{}:u,l=e.placeholderStyle,g=void 0===l?{}:l,N=e.placeholderClassName,j=e.fluid,L=e.fixed,d=e.backgroundColor,I=e.durationFadeIn,D=e.Tag,y=e.itemProp,p=e.loading,E=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,h=(0,M.default)({opacity:O?1:0,transition:C?"opacity "+I+"ms":"none"},o),k="boolean"==typeof d?"lightgray":d,w={transitionDelay:I+"ms"},b=(0,M.default)({opacity:this.state.imgLoaded?0:1},C&&w,o,g),_={title:t,alt:this.state.isVisible?"":a,style:b,className:N};if(j){var x=j,Y=x[0];return s.default.createElement(D,{className:(i||"")+" gatsby-image-wrapper",style:(0,M.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(Y.srcSet)},s.default.createElement(D,{style:{width:"100%",paddingBottom:100/Y.aspectRatio+"%"}}),k&&s.default.createElement(D,{title:t,style:(0,M.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&w)}),Y.base64&&s.default.createElement(T,{src:Y.base64,spreadProps:_,imageVariants:x,generateSources:S}),Y.tracedSVG&&s.default.createElement(T,{src:Y.tracedSVG,spreadProps:_,imageVariants:x,generateSources:A}),this.state.isVisible&&s.default.createElement("picture",null,m(x),s.default.createElement(z,{alt:a,title:t,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:h,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:p,draggable:E})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:f((0,M.default)({alt:a,title:t,loading:p},Y,{imageVariants:x}))}}))}if(L){var v=L,Q=v[0],U=(0,M.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Q.width,height:Q.height},r);return"inherit"===r.display&&delete U.display,s.default.createElement(D,{className:(i||"")+" gatsby-image-wrapper",style:U,ref:this.handleRef,key:"fixed-"+JSON.stringify(Q.srcSet)},k&&s.default.createElement(D,{title:t,style:(0,M.default)({backgroundColor:k,width:Q.width,opacity:this.state.imgLoaded?0:1,height:Q.height},C&&w)}),Q.base64&&s.default.createElement(T,{src:Q.base64,spreadProps:_,imageVariants:v,generateSources:S}),Q.tracedSVG&&s.default.createElement(T,{src:Q.tracedSVG,spreadProps:_,imageVariants:v,generateSources:A}),this.state.isVisible&&s.default.createElement("picture",null,m(v),s.default.createElement(z,{alt:a,title:t,width:Q.width,height:Q.height,sizes:Q.sizes,src:Q.src,crossOrigin:this.props.crossOrigin,srcSet:Q.srcSet,style:h,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:p,draggable:E})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:f((0,M.default)({alt:a,title:t,loading:p},Q,{imageVariants:v}))}}))}return null},t}(s.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),h=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});O.propTypes={resolutions:C,sizes:h,fixed:l.default.oneOfType([C,l.default.arrayOf(C)]),fluid:l.default.oneOfType([h,l.default.arrayOf(h)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var k=O;t.default=k},291:function(e,t,a){"use strict";a(164)("fixed",function(e){return function(){return e(this,"tt","","")}})}}]);
//# sourceMappingURL=component---src-templates-article-js-d1a7fb043998e80a8ccf.js.map