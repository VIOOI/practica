let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
let EasyMotion_hl_move = "EasyMotionMoveHL"
let AutoPairsMapCh =  1 
let EasyMotion_off_screen_search =  1 
let EasyMotion_grouping =  1 
let EasyMotion_startofline =  1 
let AutoPairsMapBS =  1 
let EasyMotion_ignore_exception =  0 
let EasyMotion_move_highlight =  1 
let AutoPairsSmartQuotes =  1 
let AutoPairsShortcutBackInsert = "<M-b>"
let EasyMotion_verbose =  1 
let EasyMotion_re_line_anywhere = "\\v(<.|^$)|(.>|^$)|(\\l)\\zs(\\u)|(_\\zs.)|(#\\zs.)"
let EasyMotion_force_csapprox =  0 
let EasyMotion_hl_group_shade = "EasyMotionShade"
let AutoPairsLoaded =  1 
let EasyMotion_use_regexp =  1 
let EasyMotion_re_anywhere = "\\v(<.|^$)|(.>|^$)|(\\l)\\zs(\\u)|(_\\zs.)|(#\\zs.)"
let EasyMotion_use_migemo =  0 
let EasyMotion_space_jump_first =  0 
let AutoPairsShortcutToggle = "<M-p>"
let EasyMotion_add_search_history =  1 
let AutoPairsShortcutFastWrap = "<M-e>"
let AutoPairsMultilineClose =  1 
let EasyMotion_smartcase =  0 
let EasyMotion_loaded =  1 
let EasyMotion_hl_inc_cursor = "EasyMotionIncCursor"
let AutoPairsMapCR =  1 
let EasyMotion_hl2_first_group_target = "EasyMotionTarget2First"
let EasyMotion_disable_two_key_combo =  0 
let AutoPairsShortcutJump = "<M-n>"
let EasyMotion_show_prompt =  1 
let EasyMotion_hl2_second_group_target = "EasyMotionTarget2Second"
let EasyMotion_hl_inc_search = "EasyMotionIncSearch"
let AutoPairsMapSpace =  1 
let EasyMotion_hl_group_target = "EasyMotionTarget"
let EasyMotion_do_shade =  1 
let AutoPairsMoveCharacter = "()[]{}\"'"
let EasyMotion_skipfoldedline =  1 
let EasyMotion_do_mapping =  1 
let AutoPairsWildClosedPair = ""
let EasyMotion_use_upper =  0 
let AutoPairsCenterLine =  1 
let EasyMotion_landing_highlight =  0 
let EasyMotion_inc_highlight =  1 
let EasyMotion_cursor_highlight =  1 
let EasyMotion_keys = "asdghklqwertyuiopzxcvbnmfj;"
let EasyMotion_enter_jump_first =  0 
let AutoPairsFlyMode =  0 
let EasyMotion_prompt = "Search for {n} character(s): "
silent only
silent tabonly
cd ~/Documents/code/ReactJs/practica
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
set shortmess=aoO
badd +41 ~/Documents/code/ReactJs/practica/src/index.js
badd +50 ~/Documents/code/ReactJs/practica/src/pages/events/newEvents.js
badd +14 ~/Documents/code/ReactJs/practica/src/pages/gallery/index.js
badd +26 ~/Documents/code/ReactJs/practica/src/pages/events/index.js
badd +23 ~/Documents/code/ReactJs/practica/src/components/events/card.js
badd +28 ~/Documents/code/ReactJs/practica/src/pages/gallery/newImage.js
badd +21 ~/Documents/code/ReactJs/practica/src/components/events/addImage.js
argglobal
%argdel
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit ~/Documents/code/ReactJs/practica/src/index.js
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 40 - ((39 * winheight(0) + 25) / 50)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 40
normal! 054|
tabnext
edit ~/Documents/code/ReactJs/practica/src/pages/events/newEvents.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 103 + 103) / 207)
exe 'vert 2resize ' . ((&columns * 103 + 103) / 207)
argglobal
balt ~/Documents/code/ReactJs/practica/src/components/events/card.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
21,24fold
21,24fold
37,42fold
45,49fold
58,66fold
51,74fold
let &fdl = &fdl
21
normal! zo
51
normal! zo
let s:l = 50 - ((36 * winheight(0) + 25) / 50)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 50
normal! 049|
wincmd w
argglobal
if bufexists(fnamemodify("~/Documents/code/ReactJs/practica/src/components/events/addImage.js", ":p")) | buffer ~/Documents/code/ReactJs/practica/src/components/events/addImage.js | else | edit ~/Documents/code/ReactJs/practica/src/components/events/addImage.js | endif
if &buftype ==# 'terminal'
  silent file ~/Documents/code/ReactJs/practica/src/components/events/addImage.js
endif
balt ~/Documents/code/ReactJs/practica/src/pages/events/newEvents.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 19 - ((18 * winheight(0) + 25) / 50)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 19
normal! 015|
wincmd w
exe 'vert 1resize ' . ((&columns * 103 + 103) / 207)
exe 'vert 2resize ' . ((&columns * 103 + 103) / 207)
tabnext
edit ~/Documents/code/ReactJs/practica/src/pages/events/index.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 103 + 103) / 207)
exe 'vert 2resize ' . ((&columns * 103 + 103) / 207)
argglobal
balt ~/Documents/code/ReactJs/practica/src/pages/gallery/index.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 18 - ((17 * winheight(0) + 25) / 50)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 18
normal! 08|
wincmd w
argglobal
if bufexists(fnamemodify("~/Documents/code/ReactJs/practica/src/components/events/card.js", ":p")) | buffer ~/Documents/code/ReactJs/practica/src/components/events/card.js | else | edit ~/Documents/code/ReactJs/practica/src/components/events/card.js | endif
if &buftype ==# 'terminal'
  silent file ~/Documents/code/ReactJs/practica/src/components/events/card.js
endif
balt ~/Documents/code/ReactJs/practica/src/pages/gallery/index.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 28 - ((27 * winheight(0) + 25) / 50)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 28
normal! 0
wincmd w
exe 'vert 1resize ' . ((&columns * 103 + 103) / 207)
exe 'vert 2resize ' . ((&columns * 103 + 103) / 207)
tabnext
edit ~/Documents/code/ReactJs/practica/src/pages/gallery/newImage.js
argglobal
balt ~/Documents/code/ReactJs/practica/src/index.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 68 - ((37 * winheight(0) + 25) / 50)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 68
normal! 0
tabnext 2
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
