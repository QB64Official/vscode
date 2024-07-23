<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [SFML Library](SFML_Library.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SFML%20Library)
---
<blockquote>

### SFML is a sound library that allows users to record and play sounds.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
//SFML_Wrapper02.h for QB64 version.02 - By John Onyon a.k.a Unseen Machine

#include <SFML/Graphics.hpp>
#include <SFML/Window.hpp>
#include <SFML/Audio.hpp>
#include <SFML/System.hpp>

sf::RenderWindow App;
sf::Color BackgroundColor = sf::Color(0,0,0,255);
sf::Color PaintColor = sf::Color(255,255,255,255);
sf::SoundBufferRecorder Recorder;
sf::SoundBuffer SndBuffer;
sf::Sound Snd;
sf::Font MyFont;
sf::String Txt;
sf::Shape Pixel;
sf::Image Image;

// SCREEN

void SF_Screen_New(int width, int height, const char* title)
{
App.Create(sf::VideoMode(width, height, 32), title);
App.PreserveOpenGLStates(true);
}

void SF_Screen_Set_XY(int x, int y)
{
App.SetPosition(x,y);
}


int SF_Screen_Exit()
{
sf::Event Event;
while (App.GetEvent(Event))
{
if (Event.Type == sf::Event::Closed)
return(-1);
}
}

void SF_Screen_Set_Size(int32 Width, int32 Height)
{
App.SetSize(Width,Height);
}


void SF_Screen_Hide()
{
App.Show(0);
}


void SF_Screen_Show()
{
App.Show(-1);
}


void SF_Screen_Set_Active()
{
App.SetActive();
}


void SF_Screen_CLS()
{
App.Clear(BackgroundColor);
}


void SF_Screen_Set_MAXFPS(int32 fps)
{
App.SetFramerateLimit(fps);
}


void SF_Screen_Close()
{
App.Close();
}


void SF_Screen_Set_Width(int Width)
{
int x = App.GetHeight();
App.SetSize(Width,x);
}


int SF_Screen_Get_Width()
{
return(App.GetWidth());
}


void SF_Screen_Set_Height(int Height)
{
int x = App.GetWidth();
App.SetSize(x,Height);
}


int SF_Screen_Get_Height()
{
return(App.GetHeight());
}


void SF_Screen_Display()
{
App.Display();
}


void SF_Screen_Set_Color(int r, int g, int b, int a)
{
sf::Color col = sf::Color(r,g,b,a);
BackgroundColor = col;
}


// MOUSE

unsigned int SF_Mouse_Get_X()
{
const sf::Input& Input = App.GetInput();
return(Input.GetMouseX());
}

unsigned int SF_Mouse_Get_Y()
{
const sf::Input& Input = App.GetInput();
return(Input.GetMouseY());
}

unsigned int SF_Mouse_Get_LB()
{
const sf::Input& Input = App.GetInput();
return(-Input.IsMouseButtonDown(sf::Mouse::Left));
}

unsigned int SF_Mouse_Get_RB()
{
const sf::Input& Input = App.GetInput();
return(-Input.IsMouseButtonDown(sf::Mouse::Right));
}

void SF_Mouse_Set_XY(int x, int y)
{
App.SetCursorPosition(x,y);
}

void SF_Mouse_Hide()
{
App.ShowMouseCursor(0);
}


void SF_Mouse_Show()
{
App.ShowMouseCursor(1);
}


//Font and Text

void SF_Font_Load(const char* Filename, int res)
{
MyFont.LoadFromFile(Filename, res);
}

void SF_Text_Print (int x, int y, const char* Text, int size)
{
Txt.SetText(Text);
Txt.SetFont(MyFont);
Txt.SetSize(size);
Txt.SetX(x);
Txt.SetY(y);
App.Draw(Txt);
}

void SF_Text_Set_Color (int r, int g, int b, int a)
{
sf::Color col = sf::Color(r,g,b,a);
Txt.SetColor(col);
}

void SF_Text_Set_Rotation(float Rot)
{
Txt.SetRotation(Rot);
}

void SF_Text_Set_Center(float x, float y)
{
Txt.SetCenter(x,y);
}

//Sound

void SF_Mic_Get_Input(int SampleRate)
{
Recorder.Start(SampleRate);
}

void SF_Mic_Stop_Input()
{
Recorder.Stop();
}

void SF_Mic_Play()
{
const sf::SoundBuffer& Buffer = Recorder.GetBuffer();
sf::Sound Sound(Buffer);
Sound.Play();
while (Sound.GetStatus() == sf::Sound::Playing){}
}

void SF_Mic_Save(const char* FileName)
{
const sf::SoundBuffer& Buffer = Recorder.GetBuffer();
sf::Sound Sound(Buffer);
Buffer.SaveToFile(FileName);
}

const sf::Int16 SF_Mic_Buffer_Load_SNDRAW(int SampleNum)
{
const sf::SoundBuffer& Buffer = Recorder.GetBuffer();
return(Buffer.GetSamples()[SampleNum]);
}

int SF_Mic_Buffer_Get_SampleRate()
{
return(Recorder.GetSampleRate());
}

int SF_Mic_Buffer_Get_SampleCount()
{
const sf::SoundBuffer& Buffer = Recorder.GetBuffer();
return(Buffer.GetSamplesCount());
}

int SF_Sound_Buffer_Load_FromFile(const char* FileName1)
{
if (SndBuffer.LoadFromFile(FileName1))
return(-1);
}


void SF_Sound_Buffer_Play()
{
Snd.SetBuffer(SndBuffer);
Snd.Play();
}


int SF_Sound_Buffer_Get_SampleCount()
{
return(SndBuffer.GetSamplesCount());
}


int SF_Sound_Buffer_Get_SampleRate()
{
return(SndBuffer.GetSampleRate());
}

bool SF_Sound_Buffer_Save(const char* FileName)
{
return(SndBuffer.SaveToFile(FileName));
}

const sf::Int16 SF_Sound_Buffer_Load_SNDRAW(int SampleNum)
{
return(SndBuffer.GetSamples()[SampleNum]);
}

void SF_SNDRAW_Save(const sf::Int16* RawSnd, int Samples, int SampleRate, const char* FileName)
{
sf::SoundBuffer Buffer;
Buffer.LoadFromSamples(RawSnd, Samples, 1, SampleRate);
Buffer.SaveToFile(FileName);
}

// 2d drawing functions
void SF_Paint_Set_Color(int r, int g, int b, int a)
{
PaintColor = sf::Color(r, g, b, a);
}

void SF_Pixel_Set(int x, int y)
{
Pixel = sf::Shape::Rectangle(x, y, x+1, y+1, PaintColor);
App.Draw(Pixel);
}

void SF_Circle(int x, int y, int Radius)
{
Pixel = sf::Shape::Circle(x, y, Radius, PaintColor);
Pixel.EnableFill(true);
App.Draw(Pixel);
}

void SF_Circle_NoFill(int x, int y, int Radius)
{
Pixel = sf::Shape::Circle(x, y, Radius, PaintColor, 1, PaintColor);
Pixel.EnableFill(false);
Pixel.EnableOutline(true);
App.Draw(Pixel);
}

void SF_Rectangle(int x, int y, int width, int height)
{
Pixel = sf::Shape::Rectangle(x, y, x + width, y + height, PaintColor);
Pixel.EnableFill(true);
App.Draw(Pixel);
}

void SF_Rectangle_NoFill(int x, int y, int width, int height)
{
Pixel = sf::Shape::Rectangle(x, y, x + width, y + height, PaintColor, 1, PaintColor);
Pixel.EnableFill(false);
Pixel.EnableOutline(true);
App.Draw(Pixel);
}

void SF_Line(int x, int y, int xx, int yy, int thick)
{
Pixel = sf::Shape::Line(x, y, xx, yy, thick, PaintColor);
Pixel.EnableFill(true);
App.Draw(Pixel);
}

//GamePad input

bool SF_GamePad_Button_Get_State(int GamePad, int Button)
{
const sf::Input& Input = App.GetInput();
return(Input.IsJoystickButtonDown(GamePad, Button));
}

int SF_GamePad_Axis_Get_X (int GamePad)
{
const sf::Input& Input = App.GetInput();
return(Input.GetJoystickAxis(GamePad, sf::Joy::AxisX));
}

int SF_GamePad_Axis_Get_Y (int GamePad)
{
const sf::Input& Input = App.GetInput();
return(Input.GetJoystickAxis(GamePad, sf::Joy::AxisY));
}

int SF_GamePad_Axis_Get_Z (int GamePad)
{
const sf::Input& Input = App.GetInput();
return(Input.GetJoystickAxis(GamePad, sf::Joy::AxisZ));
}

int SF_GamePad_Axis_Get_R (int GamePad)
{
const sf::Input& Input = App.GetInput();
return(Input.GetJoystickAxis(GamePad, sf::Joy::AxisR));
}

int SF_GamePad_Axis_Get_U (int GamePad)
{
const sf::Input& Input = App.GetInput();
return(Input.GetJoystickAxis(GamePad, sf::Joy::AxisU));
}

int SF_GamePad_Axis_Get_V (int GamePad)
{
const sf::Input& Input = App.GetInput();
return(Input.GetJoystickAxis(GamePad, sf::Joy::AxisV));
}

int SF_GamePad_Axis_Get_POV (int GamePad)
{
const sf::Input& Input = App.GetInput();
return(Input.GetJoystickAxis(GamePad, sf::Joy::AxisPOV));
}


// Keyboard Input v0.1

int SF_Key_Left()
{
int kval =0;
const sf::Input& Input = App.GetInput();
if (Input.IsKeyDown(sf::Key::Left))
kval = -1;
else
kval = 0;
return(kval);
}

int SF_Key_Right()
{
int kval =0;
const sf::Input& Input = App.GetInput();
if (Input.IsKeyDown(sf::Key::Right))
kval = -1;
else
kval = 0;
return(kval);
}

int SF_Key_Up()
{
int kval =0;
const sf::Input& Input = App.GetInput();
if (Input.IsKeyDown(sf::Key::Up))
kval = -1;
else
kval = 0;
return(kval);
}

int SF_Key_Down()
{
int kval =0;
const sf::Input& Input = App.GetInput();
if (Input.IsKeyDown(sf::Key::Down))
kval = -1;
else
kval = 0;
return(kval);
}

int SF_Key_A()
{
int kval =0;
const sf::Input& Input = App.GetInput();
if (Input.IsKeyDown(sf::Key::A))
kval = -1;
else
kval = 0;
return(kval);
}

int SF_Key_B()
{
int kval =0;
const sf::Input& Input = App.GetInput();
if (Input.IsKeyDown(sf::Key::B))
kval = -1;
else
kval = 0;
return(kval);
}

int SF_Key_C()
{
int kval =0;
const sf::Input& Input = App.GetInput();
if (Input.IsKeyDown(sf::Key::C))
kval = -1;
else
kval = 0;
return(kval);
}

int SF_Key_D()
{
int kval =0;
const sf::Input& Input = App.GetInput();
if (Input.IsKeyDown(sf::Key::D))
kval = -1;
else
kval = 0;
return(kval);
}

int SF_Key_E()
{
int kval =0;
const sf::Input& Input = App.GetInput();
if (Input.IsKeyDown(sf::Key::E))
kval = -1;
else
kval = 0;
return(kval);
}

int SF_Key_F()
{
int kval =0;
const sf::Input& Input = App.GetInput();
if (Input.IsKeyDown(sf::Key::F))
kval = -1;
else
kval = 0;
return(kval);
}

int SF_Key_G()
{
int kval =0;
const sf::Input& Input = App.GetInput();
if (Input.IsKeyDown(sf::Key::G))
kval = -1;
else
kval = 0;
return(kval);
}

int SF_Key_H()
{
int kval =0;
const sf::Input& Input = App.GetInput();
if (Input.IsKeyDown(sf::Key::H))
kval = -1;
else
kval = 0;
return(kval);
}

int SF_Key_I()
{
int kval =0;
const sf::Input& Input = App.GetInput();
if (Input.IsKeyDown(sf::Key::J))
kval = -1;
else
kval = 0;
return(kval);
}


int SF_Key_J()
{
int kval =0;
const sf::Input& Input = App.GetInput();
if (Input.IsKeyDown(sf::Key::J))
kval = -1;
else
kval = 0;
return(kval);
}


int SF_Key_K()
{
int kval =0;
const sf::Input& Input = App.GetInput();
if (Input.IsKeyDown(sf::Key::K))
kval = -1;
else
kval = 0;
return(kval);
}


int SF_Key_L()
{
int kval =0;
const sf::Input& Input = App.GetInput();
if (Input.IsKeyDown(sf::Key::L))
kval = -1;
else
kval = 0;
return(kval);
}

// Other Stuff

void SF_Push_Events()
{
sf::Event Event;
while (App.GetEvent(Event))
{	}
}
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Libraries
</blockquote>
