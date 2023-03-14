echo ""> ../app/static//all.js
cat js/jquery-3.6.4.min.js js/jquery.mousewheel-min.js js/jquery.terminal-2.35.3.min.js js/keyboard.js js/unix_formatting.js js/wcwidth.js >> ../app/static/all.js

echo "" > ../app/static//all.css
cat ./css/*.css >> ../app/static/all.css
