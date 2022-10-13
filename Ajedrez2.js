const WIDTH = 800;
const HEIGHT = 800;

const ROWS = 8;
const COLUMNS = 8;

const CELL_WIDTH = WIDTH / ROWS;
const CELL_HEIGHT = HEIGHT / COLUMNS;

const PIECE_OFFSET = CELL_HEIGHT * 0.1;

const theme = {
    light: #eeeed2;
    dark: #000000;
}

const pieces = {
    king: &#9812;,
    queen: &#9813;,
    rook: &#9814;,
    bishop: &#9815;,
    knight: &#9816;,
    pawn: &#9817;
}

$canvas = document.createElement('canvas');
const ctx = $canvas.getContext('2d');
$canvas.width = WIDTH;
$canvas.height = HEIGHT;
