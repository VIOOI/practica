let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
let EasyMotion_hl_move = "EasyMotionMoveHL"
let AutoPairsMapCh =  1 
let EasyMotion_off_screen_search =  1 
let EasyMotion_startofline =  1 
let AutoPairsMapBS =  1 
let EasyMotion_ignore_exception =  0 
let EasyMotion_move_highlight =  1 
let AutoPairsSmartQuotes =  1 
let AutoPairsShortcutBackInsert = "<M-b>"
let EasyMotion_verbose =  1 
let EasyMotion_re_line_anywhere = "\\v(<.|^$)|(.>|^$)|(\\l)\\zs(\\u)|(_\\zs.)|(#\\zs.)"
let EasyMotion_hl_group_shade = "EasyMotionShade"
let AutoPairsLoaded =  1 
let EasyMotion_use_regexp =  1 
let EasyMotion_use_migemo =  0 
let EasyMotion_re_anywhere = "\\v(<.|^$)|(.>|^$)|(\\l)\\zs(\\u)|(_\\zs.)|(#\\zs.)"
let EasyMotion_space_jump_first =  0 
let AutoPairsShortcutToggle = "<M-p>"
let EasyMotion_add_search_history =  1 
let AutoPairsShortcutFastWrap = "<M-e>"
let AutoPairsMultilineClose =  1 
let EasyMotion_smartcase =  0 
let EasyMotion_force_csapprox =  0 
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
let EasyMotion_use_upper =  0 
let AutoPairsMoveCharacter = "()[]{}\"'"
let EasyMotion_skipfoldedline =  1 
let EasyMotion_do_mapping =  1 
let AutoPairsWildClosedPair = ""
let EasyMotion_grouping =  1 
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
badd +1 ~/Documents/code/ReactJs/practica/src/pages/gallery/index.js
badd +19 ~/Documents/code/ReactJs/practica/src/index.js
badd +31 ~/Documents/code/ReactJs/practica/src/pages/gallery/image.js
argglobal
%argdel
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit ~/Documents/code/ReactJs/practica/src/pages/gallery/index.js
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
let s:l = 23 - ((22 * winheight(0) + 25) / 50)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 23
normal! 03|
tabnext
edit ~/Documents/code/ReactJs/practica/src/index.js
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
let s:l = 19 - ((18 * winheight(0) + 25) / 50)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 19
normal! 030|
tabnext
edit ~/Documents/code/ReactJs/practica/src/pages/gallery/image.js
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
let s:l = 30 - ((29 * winheight(0) + 25) / 50)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 30
normal! 052|
tabnext 3
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
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
