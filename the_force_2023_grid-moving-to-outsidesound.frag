void main () {
    // https://shawnlawson.github.io/The_Force/
    // Press 'shift + ctrl' to toggle code

    // PIXELS ON THE SCREEN
    // uv() - (x, y) with aspect ratio and centered coordinate system from -1.0 to 1.0
    vec2 uv = uv();
    vec2 uv2 = uv;
    vec2 uv3 = uv;
    

    // GROUP OF LINES
    // add sin(time) to have the lines move to outside noises when activating the mic
    // the mic is to be found as a little icon at the bottom left of the page 
    float lines = fract(uv.x * 2.0 + bands.w * (sin(time)));
    lines = step(lines, 0.5);
    
    // GROUP OF LINES2
    float lines2 = fract(uv.y * 3.0 - bands.w * (sin(time)));
    lines2 = step(lines2, 0.2);

    // COLORS
    vec3 color = vec3(0.0, 4.0, 4.0);
    vec3 red = vec3(1.0, 0.0, 0.0);
    vec3 blue = vec3(1.0, 0.0, 1.0);

    // ADD PAINT
    // "mix" the color defined above with another color and apply to lines or lines2
    color = mix(color, blue, lines);
    color = mix(color, red, lines2);

    // OUTPUT - RGBA
    gl_FragColor = vec4(color, 1.0);
}
