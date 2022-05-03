nmap j gj
nmap k gk
" I like using H and L for beginning/end of line
nmap H 0
nmap L $
nmap K 15k
nmap J 15j
vmap H 0
vmap L $
vmap K 15k
" 本来のJを使いたいのでコメントアウト
"
vmap J 15j
" Quickly remove search highlights
nmap <F9> :nohl
nmap <C-z> u
nmap <Esc> :nohl
" nmap <C-c> <C-c>:nohl
map <C-`> <C-[>
nmap <C-[> :nohl
imap jk <C-[>
" imap <C-@> <C-[>

nmap <C-a> y
" nmap O o<Esc>D 
nmap <C-0> o<Esc>D 
vmap <C-a> y
" Yank to system clipboard
set clipboard=unnamed

""nmap <C-v> p
"" "" nmap s <C-s>
nmap <C-Left> b
nmap <C-Right> w
nmap ^ T-
" nmap <Home> 00
" nmap <End> $j
"行の削除

exmap jumpanywhere obcommand mrj-jump-to-link:activate-jump-to-anywhere
nmap s :jumpanywhere

exmap splitvertical obcommand workspace:split-vertical
nmap <C-w>s :splitvertical

exmap splithorizontal obcommand workspace:split-horizontal
nmap <C-w>v :splithorizontal

exmap addlinkfromquickswitcher obcommand mrj-crosslink-between-notes:add-link-from-quick-switcher
nmap <C-w>j :addlinkfromquickswitcher

exmap addlinktocurrent obcommand mrj-crosslink-between-notes:add-link-to-current
nmap <C-w>J :addlinktocurrent

exmap  templaterfortemplate obcommand obsidian-hotkeys-for-templates:templater:TemplateForTemplater.md

nmap <C-w>i :templaterfortemplate

" Leader Hotkeyのためにキーを解放
iunmap <C-w>