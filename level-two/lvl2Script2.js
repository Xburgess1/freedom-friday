var lightsOn2 = [];


function setUp()
{
    document.getElementById("impossText").hidden = true;
    lightsOn2.length = 72;
    for(var i = 0; i < lightsOn2.length; i++)
    {
        lightsOn2[i] = false;
    }
    
}

function setActive2(btn)
{
    if (btn.id == "inactive")
    {
        btn.id = "active";
    }
    else
    {
        btn.id = "inactive";
    }
    
    for (var i = 0; i < lightsOn2.length; i++) {
        lightsOn2[i] = false;
    }

    if (document.getElementsByClassName("lightButtons2")[0].id == "active")
    {
        lightsOn2[43] = !lightsOn2[43];
        lightsOn2[28] = !lightsOn2[28];
        lightsOn2[25] = !lightsOn2[25];
        lightsOn2[53] = !lightsOn2[53];
        lightsOn2[23] = !lightsOn2[23];
    }
    if (document.getElementsByClassName("lightButtons2")[1].id == "active") {
        lightsOn2[10] = !lightsOn2[10];
        lightsOn2[5] = !lightsOn2[5];
        lightsOn2[53] = !lightsOn2[53];
        lightsOn2[2] = !lightsOn2[2];
    }
    if (document.getElementsByClassName("lightButtons2")[2].id == "active") {
        lightsOn2[33] = !lightsOn2[33];
        lightsOn2[43] = !lightsOn2[43];
        lightsOn2[25] = !lightsOn2[25];
    }
    if (document.getElementsByClassName("lightButtons2")[3].id == "active") {
        lightsOn2[60] = !lightsOn2[60];
        lightsOn2[33] = !lightsOn2[33];
        lightsOn2[27] = !lightsOn2[27];
        lightsOn2[55] = !lightsOn2[55];
    }
    if (document.getElementsByClassName("lightButtons2")[4].id == "active") {
        lightsOn2[41] = !lightsOn2[41];
        lightsOn2[33] = !lightsOn2[33];
        lightsOn2[17] = !lightsOn2[17];
        lightsOn2[7] = !lightsOn2[7];
        lightsOn2[3] = !lightsOn2[3];
    }
    if (document.getElementsByClassName("lightButtons2")[5].id == "active") {
        lightsOn2[5] = !lightsOn2[5];
        lightsOn2[47] = !lightsOn2[47];
        lightsOn2[43] = !lightsOn2[43];
        lightsOn2[12] = !lightsOn2[12];
    }
    if (document.getElementsByClassName("lightButtons2")[6].id == "active") {
        lightsOn2[48] = !lightsOn2[48];
        lightsOn2[41] = !lightsOn2[41];
        lightsOn2[66] = !lightsOn2[66];
        lightsOn2[7] = !lightsOn2[7];
        lightsOn2[22] = !lightsOn2[22];
    }
    if (document.getElementsByClassName("lightButtons2")[7].id == "active") {
        lightsOn2[48] = !lightsOn2[48];
        lightsOn2[70] = !lightsOn2[70];
        lightsOn2[4] = !lightsOn2[4];
        lightsOn2[38] = !lightsOn2[38];
    }
    if (document.getElementsByClassName("lightButtons2")[8].id == "active") {
        lightsOn2[8] = !lightsOn2[8];
        lightsOn2[45] = !lightsOn2[45];
        lightsOn2[34] = !lightsOn2[34];
        lightsOn2[47] = !lightsOn2[47];
    }
    if (document.getElementsByClassName("lightButtons2")[9].id == "active") {
        lightsOn2[12] = !lightsOn2[12];
        lightsOn2[37] = !lightsOn2[37];
        lightsOn2[58] = !lightsOn2[58];
        lightsOn2[51] = !lightsOn2[51];
        lightsOn2[34] = !lightsOn2[34];
    }
    if (document.getElementsByClassName("lightButtons2")[10].id == "active") {
        lightsOn2[5] = !lightsOn2[5];
        lightsOn2[68] = !lightsOn2[68];
        lightsOn2[30] = !lightsOn2[30];
        lightsOn2[67] = !lightsOn2[67];
        lightsOn2[65] = !lightsOn2[65];
    }
    if (document.getElementsByClassName("lightButtons2")[11].id == "active") {
        lightsOn2[13] = !lightsOn2[13];
        lightsOn2[38] = !lightsOn2[38];
        lightsOn2[16] = !lightsOn2[16];
    }
    if (document.getElementsByClassName("lightButtons2")[12].id == "active") {
        lightsOn2[41] = !lightsOn2[41];
        lightsOn2[30] = !lightsOn2[30];
        lightsOn2[27] = !lightsOn2[27];
        lightsOn2[21] = !lightsOn2[21];
        lightsOn2[35] = !lightsOn2[35];
    }
    if (document.getElementsByClassName("lightButtons2")[13].id == "active") {
        lightsOn2[20] = !lightsOn2[20];
        lightsOn2[38] = !lightsOn2[38];
        lightsOn2[33] = !lightsOn2[33];
    }
    if (document.getElementsByClassName("lightButtons2")[14].id == "active") {
        lightsOn2[60] = !lightsOn2[60];
        lightsOn2[58] = !lightsOn2[58];
        lightsOn2[8] = !lightsOn2[8];
        lightsOn2[1] = !lightsOn2[1];
        lightsOn2[21] = !lightsOn2[21];
    }
    if (document.getElementsByClassName("lightButtons2")[15].id == "active") {
        lightsOn2[64] = !lightsOn2[64];
        lightsOn2[47] = !lightsOn2[47];
        lightsOn2[37] = !lightsOn2[37];
        lightsOn2[38] = !lightsOn2[38];
    }
    if (document.getElementsByClassName("lightButtons2")[16].id == "active") {
        lightsOn2[52] = !lightsOn2[52];
        lightsOn2[13] = !lightsOn2[13];
        lightsOn2[43] = !lightsOn2[43];
        lightsOn2[19] = !lightsOn2[19];
    }
    if (document.getElementsByClassName("lightButtons2")[17].id == "active") {
        lightsOn2[57] = !lightsOn2[57];
        lightsOn2[64] = !lightsOn2[64];
        lightsOn2[45] = !lightsOn2[45];
        lightsOn2[14] = !lightsOn2[14];
        lightsOn2[23] = !lightsOn2[23];
    }
    if (document.getElementsByClassName("lightButtons2")[18].id == "active") {
        lightsOn2[10] = !lightsOn2[10];
        lightsOn2[3] = !lightsOn2[3];
        lightsOn2[71] = !lightsOn2[71];
    }
    if (document.getElementsByClassName("lightButtons2")[19].id == "active") {
        lightsOn2[36] = !lightsOn2[36];
        lightsOn2[62] = !lightsOn2[62];
        lightsOn2[18] = !lightsOn2[18];
        lightsOn2[60] = !lightsOn2[60];
    }
    if (document.getElementsByClassName("lightButtons2")[20].id == "active") {
        lightsOn2[34] = !lightsOn2[34];
        lightsOn2[16] = !lightsOn2[16];
        lightsOn2[8] = !lightsOn2[8];
    }
    if (document.getElementsByClassName("lightButtons2")[21].id == "active") {
        lightsOn2[68] = !lightsOn2[68];
        lightsOn2[26] = !lightsOn2[26];
        lightsOn2[22] = !lightsOn2[22];
        lightsOn2[31] = !lightsOn2[31];
        lightsOn2[11] = !lightsOn2[11];
    }
    if (document.getElementsByClassName("lightButtons2")[22].id == "active") {
        lightsOn2[30] = !lightsOn2[30];
        lightsOn2[65] = !lightsOn2[65];
        lightsOn2[27] = !lightsOn2[27];
        lightsOn2[60] = !lightsOn2[60];
        lightsOn2[46] = !lightsOn2[46];
    }
    if (document.getElementsByClassName("lightButtons2")[23].id == "active") {
        lightsOn2[10] = !lightsOn2[10];
        lightsOn2[6] = !lightsOn2[6];
        lightsOn2[52] = !lightsOn2[52];
        lightsOn2[33] = !lightsOn2[33];
    }
    if (document.getElementsByClassName("lightButtons2")[24].id == "active") {
        lightsOn2[29] = !lightsOn2[29];
        lightsOn2[53] = !lightsOn2[53];
        lightsOn2[26] = !lightsOn2[26];
        lightsOn2[52] = !lightsOn2[52];
        lightsOn2[5] = !lightsOn2[5];
    }
    if (document.getElementsByClassName("lightButtons2")[25].id == "active") {
        lightsOn2[31] = !lightsOn2[31];
        lightsOn2[18] = !lightsOn2[18];
        lightsOn2[24] = !lightsOn2[24];
    }
    if (document.getElementsByClassName("lightButtons2")[26].id == "active") {
        lightsOn2[20] = !lightsOn2[20];
        lightsOn2[25] = !lightsOn2[25];
        lightsOn2[21] = !lightsOn2[21];
        lightsOn2[38] = !lightsOn2[38];
    }
    if (document.getElementsByClassName("lightButtons2")[27].id == "active") {
        lightsOn2[58] = !lightsOn2[58];
        lightsOn2[31] = !lightsOn2[31];
        lightsOn2[27] = !lightsOn2[27];
        lightsOn2[18] = !lightsOn2[18];
        lightsOn2[22] = !lightsOn2[22];
    }
    if (document.getElementsByClassName("lightButtons2")[28].id == "active") {
        lightsOn2[23] = !lightsOn2[23];
        lightsOn2[33] = !lightsOn2[33];
        lightsOn2[26] = !lightsOn2[26];
    }
    if (document.getElementsByClassName("lightButtons2")[29].id == "active") {
        lightsOn2[64] = !lightsOn2[64];
        lightsOn2[54] = !lightsOn2[54];
        lightsOn2[71] = !lightsOn2[71];
    }
    if (document.getElementsByClassName("lightButtons2")[30].id == "active") {
        lightsOn2[21] = !lightsOn2[21];
        lightsOn2[49] = !lightsOn2[49];
        lightsOn2[4] = !lightsOn2[4];
    }
    if (document.getElementsByClassName("lightButtons2")[31].id == "active") {
        lightsOn2[64] = !lightsOn2[64];
        lightsOn2[9] = !lightsOn2[9];
        lightsOn2[25] = !lightsOn2[25];
    }
    if (document.getElementsByClassName("lightButtons2")[32].id == "active") {
        lightsOn2[52] = !lightsOn2[52];
        lightsOn2[48] = !lightsOn2[48];
        lightsOn2[7] = !lightsOn2[7];
        lightsOn2[20] = !lightsOn2[20];
    }
    if (document.getElementsByClassName("lightButtons2")[33].id == "active") {
        lightsOn2[5] = !lightsOn2[5];
        lightsOn2[42] = !lightsOn2[42];
        lightsOn2[10] = !lightsOn2[10];
        lightsOn2[57] = !lightsOn2[57];
        lightsOn2[42] = !lightsOn2[42];
    }
    if (document.getElementsByClassName("lightButtons2")[34].id == "active") {
        lightsOn2[35] = !lightsOn2[35];
        lightsOn2[24] = !lightsOn2[24];
        lightsOn2[27] = !lightsOn2[27];
        lightsOn2[71] = !lightsOn2[71];
    }
    if (document.getElementsByClassName("lightButtons2")[35].id == "active") {
        lightsOn2[28] = !lightsOn2[28];
        lightsOn2[62] = !lightsOn2[62];
        lightsOn2[63] = !lightsOn2[63];
        lightsOn2[57] = !lightsOn2[57];
    }
    if (document.getElementsByClassName("lightButtons2")[36].id == "active") {
        lightsOn2[53] = !lightsOn2[53];
        lightsOn2[39] = !lightsOn2[39];
        lightsOn2[7] = !lightsOn2[7];
        lightsOn2[52] = !lightsOn2[52];
    }
    if (document.getElementsByClassName("lightButtons2")[37].id == "active") {
        lightsOn2[32] = !lightsOn2[32];
        lightsOn2[1] = !lightsOn2[1];
        lightsOn2[10] = !lightsOn2[10];
        lightsOn2[2] = !lightsOn2[2];
        lightsOn2[43] = !lightsOn2[43];
    }
    if (document.getElementsByClassName("lightButtons2")[38].id == "active") {
        lightsOn2[34] = !lightsOn2[34];
        lightsOn2[22] = !lightsOn2[22];
        lightsOn2[21] = !lightsOn2[21];
        lightsOn2[64] = !lightsOn2[64];
        lightsOn2[27] = !lightsOn2[27];
    }
    if (document.getElementsByClassName("lightButtons2")[39].id == "active") {
        lightsOn2[64] = !lightsOn2[64];
        lightsOn2[5] = !lightsOn2[5];
        lightsOn2[36] = !lightsOn2[36];
        lightsOn2[57] = !lightsOn2[57];
    }
    if (document.getElementsByClassName("lightButtons2")[40].id == "active") {
        lightsOn2[41] = !lightsOn2[41];
        lightsOn2[55] = !lightsOn2[55];
        lightsOn2[52] = !lightsOn2[52];
        lightsOn2[66] = !lightsOn2[66];
    }
    if (document.getElementsByClassName("lightButtons2")[41].id == "active") {
        lightsOn2[45] = !lightsOn2[45];
        lightsOn2[48] = !lightsOn2[48];
        lightsOn2[3] = !lightsOn2[3];
        lightsOn2[15] = !lightsOn2[15];
        lightsOn2[4] = !lightsOn2[4];
    }
    if (document.getElementsByClassName("lightButtons2")[42].id == "active") {
        lightsOn2[0] = !lightsOn2[0];
        lightsOn2[8] = !lightsOn2[8];
        lightsOn2[34] = !lightsOn2[34];
        lightsOn2[61] = !lightsOn2[61];
    }
    if (document.getElementsByClassName("lightButtons2")[43].id == "active") {
        lightsOn2[9] = !lightsOn2[9];
        lightsOn2[27] = !lightsOn2[27];
        lightsOn2[21] = !lightsOn2[21];
        lightsOn2[18] = !lightsOn2[18];
        lightsOn2[71] = !lightsOn2[71];
    }
    if (document.getElementsByClassName("lightButtons2")[44].id == "active") {
        lightsOn2[64] = !lightsOn2[64];
        lightsOn2[33] = !lightsOn2[33];
        lightsOn2[61] = !lightsOn2[61];
        lightsOn2[50] = !lightsOn2[50];
        lightsOn2[21] = !lightsOn2[21];
    }
    if (document.getElementsByClassName("lightButtons2")[45].id == "active") {
        lightsOn2[47] = !lightsOn2[47];
        lightsOn2[6] = !lightsOn2[6];
        lightsOn2[29] = !lightsOn2[29];
    }
    if (document.getElementsByClassName("lightButtons2")[46].id == "active") {
        lightsOn2[37] = !lightsOn2[37];
        lightsOn2[28] = !lightsOn2[28];
        lightsOn2[40] = !lightsOn2[40];
    }
    if (document.getElementsByClassName("lightButtons2")[47].id == "active") {
        lightsOn2[17] = !lightsOn2[17];
        lightsOn2[30] = !lightsOn2[30];
        lightsOn2[23] = !lightsOn2[23];
        lightsOn2[45] = !lightsOn2[45];
        lightsOn2[26] = !lightsOn2[26];
    }
    if (document.getElementsByClassName("lightButtons2")[48].id == "active") {
        lightsOn2[58] = !lightsOn2[58];
        lightsOn2[39] = !lightsOn2[39];
        lightsOn2[59] = !lightsOn2[59];
    }
    if (document.getElementsByClassName("lightButtons2")[49].id == "active") {
        lightsOn2[4] = !lightsOn2[4];
        lightsOn2[14] = !lightsOn2[14];
        lightsOn2[46] = !lightsOn2[46];
    }
    if (document.getElementsByClassName("lightButtons2")[50].id == "active") {
        lightsOn2[22] = !lightsOn2[22];
        lightsOn2[58] = !lightsOn2[58];
        lightsOn2[4] = !lightsOn2[4];
    }
    if (document.getElementsByClassName("lightButtons2")[51].id == "active") {
        lightsOn2[45] = !lightsOn2[45];
        lightsOn2[67] = !lightsOn2[67];
        lightsOn2[10] = !lightsOn2[10];
        lightsOn2[43] = !lightsOn2[43];
    }
    if (document.getElementsByClassName("lightButtons2")[52].id == "active") {
        lightsOn2[9] = !lightsOn2[9];
        lightsOn2[46] = !lightsOn2[46];
        lightsOn2[15] = !lightsOn2[15];
    }
    if (document.getElementsByClassName("lightButtons2")[53].id == "active") {
        lightsOn2[56] = !lightsOn2[56];
        lightsOn2[5] = !lightsOn2[5];
        lightsOn2[35] = !lightsOn2[35];
    }
    if (document.getElementsByClassName("lightButtons2")[54].id == "active") {
        lightsOn2[28] = !lightsOn2[28];
        lightsOn2[47] = !lightsOn2[47];
        lightsOn2[0] = !lightsOn2[0];
        lightsOn2[32] = !lightsOn2[32];
        lightsOn2[61] = !lightsOn2[61];
    }
    if (document.getElementsByClassName("lightButtons2")[55].id == "active") {
        lightsOn2[57] = !lightsOn2[57];
        lightsOn2[2] = !lightsOn2[2];
        lightsOn2[71] = !lightsOn2[71];
        lightsOn2[27] = !lightsOn2[27];
        lightsOn2[32] = !lightsOn2[32];
    }
    if (document.getElementsByClassName("lightButtons2")[56].id == "active") {
        lightsOn2[70] = !lightsOn2[70];
        lightsOn2[17] = !lightsOn2[17];
        lightsOn2[42] = !lightsOn2[42];
        lightsOn2[22] = !lightsOn2[22];
    }
    if (document.getElementsByClassName("lightButtons2")[57].id == "active") {
        lightsOn2[44] = !lightsOn2[44];
        lightsOn2[9] = !lightsOn2[9];
        lightsOn2[6] = !lightsOn2[6];
        lightsOn2[11] = !lightsOn2[11];
        lightsOn2[61] = !lightsOn2[61];
    }
    if (document.getElementsByClassName("lightButtons2")[58].id == "active") {
        lightsOn2[16] = !lightsOn2[16];
        lightsOn2[25] = !lightsOn2[25];
        lightsOn2[8] = !lightsOn2[8];
        lightsOn2[40] = !lightsOn2[40];
    }
    if (document.getElementsByClassName("lightButtons2")[59].id == "active") {
        lightsOn2[1] = !lightsOn2[1];
        lightsOn2[17] = !lightsOn2[17];
        lightsOn2[21] = !lightsOn2[21];
        lightsOn2[9] = !lightsOn2[9];
    }
    if (document.getElementsByClassName("lightButtons2")[60].id == "active") {
        lightsOn2[39] = !lightsOn2[39];
        lightsOn2[67] = !lightsOn2[67];
        lightsOn2[25] = !lightsOn2[25];
        lightsOn2[56] = !lightsOn2[56];
        lightsOn2[69] = !lightsOn2[69];
    }
    if (document.getElementsByClassName("lightButtons2")[61].id == "active") {
        lightsOn2[30] = !lightsOn2[30];
        lightsOn2[10] = !lightsOn2[10];
        lightsOn2[68] = !lightsOn2[68];
        lightsOn2[48] = !lightsOn2[48];
        lightsOn2[5] = !lightsOn2[5];
    }
    if (document.getElementsByClassName("lightButtons2")[62].id == "active") {
        lightsOn2[24] = !lightsOn2[24];
        lightsOn2[16] = !lightsOn2[16];
        lightsOn2[51] = !lightsOn2[51];
    }
    if (document.getElementsByClassName("lightButtons2")[63].id == "active") {
        lightsOn2[43] = !lightsOn2[43];
        lightsOn2[13] = !lightsOn2[13];
        lightsOn2[31] = !lightsOn2[31];
        lightsOn2[58] = !lightsOn2[58];
        lightsOn2[50] = !lightsOn2[50];
    }
    if (document.getElementsByClassName("lightButtons2")[64].id == "active") {
        lightsOn2[62] = !lightsOn2[62];
        lightsOn2[48] = !lightsOn2[48];
        lightsOn2[25] = !lightsOn2[25];
    }
    if (document.getElementsByClassName("lightButtons2")[65].id == "active") {
        lightsOn2[0] = !lightsOn2[0];
        lightsOn2[34] = !lightsOn2[34];
        lightsOn2[31] = !lightsOn2[31];
        lightsOn2[71] = !lightsOn2[71];
    }
    if (document.getElementsByClassName("lightButtons2")[66].id == "active") {
        lightsOn2[3] = !lightsOn2[3];
        lightsOn2[16] = !lightsOn2[16];
        lightsOn2[53] = !lightsOn2[53];
    }
    if (document.getElementsByClassName("lightButtons2")[67].id == "active") {
        lightsOn2[7] = !lightsOn2[7];
        lightsOn2[44] = !lightsOn2[44];
        lightsOn2[67] = !lightsOn2[67];
        lightsOn2[69] = !lightsOn2[69];
        lightsOn2[9] = !lightsOn2[9];
    }
    if (document.getElementsByClassName("lightButtons2")[68].id == "active") {
        lightsOn2[2] = !lightsOn2[2];
        lightsOn2[29] = !lightsOn2[29];
        lightsOn2[67] = !lightsOn2[67];
        lightsOn2[7] = !lightsOn2[7];
    }
    if (document.getElementsByClassName("lightButtons2")[69].id == "active") {
        lightsOn2[4] = !lightsOn2[4];
        lightsOn2[49] = !lightsOn2[49];
        lightsOn2[53] = !lightsOn2[53];
        lightsOn2[15] = !lightsOn2[15];
    }
    if (document.getElementsByClassName("lightButtons2")[70].id == "active") {
        lightsOn2[23] = !lightsOn2[23];
        lightsOn2[21] = !lightsOn2[21];
        lightsOn2[31] = !lightsOn2[31];
        lightsOn2[34] = !lightsOn2[34];
        lightsOn2[56] = !lightsOn2[56];
    }
    if (document.getElementsByClassName("lightButtons2")[71].id == "active") {
        lightsOn2[45] = !lightsOn2[45];
        lightsOn2[31] = !lightsOn2[31];
        lightsOn2[43] = !lightsOn2[43];
        lightsOn2[25] = !lightsOn2[25];
    }
    if (document.getElementsByClassName("lightButtons2")[72].id == "active") {
        lightsOn2[59] = !lightsOn2[59];
        lightsOn2[67] = !lightsOn2[67];
        lightsOn2[25] = !lightsOn2[25];
        lightsOn2[35] = !lightsOn2[35];
        lightsOn2[52] = !lightsOn2[52];
    }
    if (document.getElementsByClassName("lightButtons2")[73].id == "active") {
        lightsOn2[16] = !lightsOn2[16];
        lightsOn2[50] = !lightsOn2[50];
        lightsOn2[54] = !lightsOn2[54];
        lightsOn2[3] = !lightsOn2[3];
        lightsOn2[43] = !lightsOn2[43];
    }
    if (document.getElementsByClassName("lightButtons2")[74].id == "active") {
        lightsOn2[39] = !lightsOn2[39];
        lightsOn2[26] = !lightsOn2[26];
        lightsOn2[4] = !lightsOn2[4];
        lightsOn2[44] = !lightsOn2[44];
    }
    if (document.getElementsByClassName("lightButtons2")[75].id == "active") {
        lightsOn2[15] = !lightsOn2[15];
        lightsOn2[3] = !lightsOn2[3];
        lightsOn2[23] = !lightsOn2[23];
    }
    if (document.getElementsByClassName("lightButtons2")[76].id == "active") {
        lightsOn2[56] = !lightsOn2[56];
        lightsOn2[20] = !lightsOn2[20];
        lightsOn2[42] = !lightsOn2[42];
        lightsOn2[0] = !lightsOn2[0];
    }
    if (document.getElementsByClassName("lightButtons2")[77].id == "active") {
        lightsOn2[59] = !lightsOn2[59];
        lightsOn2[64] = !lightsOn2[64];
        lightsOn2[1] = !lightsOn2[1];
    }
    if (document.getElementsByClassName("lightButtons2")[78].id == "active") {
        lightsOn2[35] = !lightsOn2[35];
        lightsOn2[20] = !lightsOn2[20];
        lightsOn2[63] = !lightsOn2[63];
        lightsOn2[56] = !lightsOn2[56];
    }
    if (document.getElementsByClassName("lightButtons2")[79].id == "active") {
        lightsOn2[20] = !lightsOn2[20];
        lightsOn2[21] = !lightsOn2[21];
        lightsOn2[4] = !lightsOn2[4];
        lightsOn2[16] = !lightsOn2[16];
    }
    if (document.getElementsByClassName("lightButtons2")[80].id == "active") {
        lightsOn2[8] = !lightsOn2[8];
        lightsOn2[66] = !lightsOn2[66];
        lightsOn2[32] = !lightsOn2[32];
        lightsOn2[23] = !lightsOn2[23];
        lightsOn2[62] = !lightsOn2[62];
    }
    if (document.getElementsByClassName("lightButtons2")[81].id == "active") {
        lightsOn2[22] = !lightsOn2[22];
        lightsOn2[66] = !lightsOn2[66];
        lightsOn2[6] = !lightsOn2[6];
        lightsOn2[45] = !lightsOn2[45];
    }
    if (document.getElementsByClassName("lightButtons2")[82].id == "active") {
        lightsOn2[35] = !lightsOn2[35];
        lightsOn2[57] = !lightsOn2[57];
        lightsOn2[61] = !lightsOn2[61];
    }
    if (document.getElementsByClassName("lightButtons2")[83].id == "active") {
        lightsOn2[24] = !lightsOn2[24];
        lightsOn2[50] = !lightsOn2[50];
        lightsOn2[21] = !lightsOn2[21];
    }
    if (document.getElementsByClassName("lightButtons2")[84].id == "active") {
        lightsOn2[9] = !lightsOn2[9];
        lightsOn2[31] = !lightsOn2[31];
        lightsOn2[8] = !lightsOn2[8];
        lightsOn2[44] = !lightsOn2[44];
        lightsOn2[53] = !lightsOn2[53];
    }
    if (document.getElementsByClassName("lightButtons2")[85].id == "active") {
        lightsOn2[64] = !lightsOn2[64];
        lightsOn2[29] = !lightsOn2[29];
        lightsOn2[14] = !lightsOn2[14];
        lightsOn2[59] = !lightsOn2[59];
    }
    if (document.getElementsByClassName("lightButtons2")[86].id == "active") {
        lightsOn2[61] = !lightsOn2[61];
        lightsOn2[30] = !lightsOn2[30];
        lightsOn2[67] = !lightsOn2[67];
        lightsOn2[68] = !lightsOn2[68];
    }
    if (document.getElementsByClassName("lightButtons2")[87].id == "active") {
        lightsOn2[38] = !lightsOn2[38];
        lightsOn2[57] = !lightsOn2[57];
        lightsOn2[12] = !lightsOn2[12];
    }
    if (document.getElementsByClassName("lightButtons2")[88].id == "active") {
        lightsOn2[71] = !lightsOn2[71];
        lightsOn2[28] = !lightsOn2[28];
        lightsOn2[17] = !lightsOn2[17];
        lightsOn2[55] = !lightsOn2[55];
    }
    if (document.getElementsByClassName("lightButtons2")[89].id == "active") {
        lightsOn2[14] = !lightsOn2[14];
        lightsOn2[25] = !lightsOn2[25];
        lightsOn2[49] = !lightsOn2[49];
        lightsOn2[8] = !lightsOn2[8];
    }
    if (document.getElementsByClassName("lightButtons2")[90].id == "active") {
        lightsOn2[47] = !lightsOn2[47];
        lightsOn2[38] = !lightsOn2[38];
        lightsOn2[31] = !lightsOn2[31];
        lightsOn2[47] = !lightsOn2[47];
        lightsOn2[11] = !lightsOn2[11];
    }
    if (document.getElementsByClassName("lightButtons2")[91].id == "active") {
        lightsOn2[54] = !lightsOn2[54];
        lightsOn2[50] = !lightsOn2[50];
        lightsOn2[63] = !lightsOn2[63];
    }
    if (document.getElementsByClassName("lightButtons2")[92].id == "active") {
        lightsOn2[36] = !lightsOn2[36];
        lightsOn2[65] = !lightsOn2[65];
        lightsOn2[46] = !lightsOn2[46];
        lightsOn2[23] = !lightsOn2[23];
        lightsOn2[57] = !lightsOn2[57];
    }
    if (document.getElementsByClassName("lightButtons2")[93].id == "active") {
        lightsOn2[20] = !lightsOn2[20];
        lightsOn2[19] = !lightsOn2[19];
        lightsOn2[64] = !lightsOn2[64];
        lightsOn2[8] = !lightsOn2[8];
    }
    if (document.getElementsByClassName("lightButtons2")[94].id == "active") {
        lightsOn2[24] = !lightsOn2[24];
        lightsOn2[69] = !lightsOn2[69];
        lightsOn2[18] = !lightsOn2[18];
        lightsOn2[39] = !lightsOn2[39];
        lightsOn2[68] = !lightsOn2[68];
    }
    if (document.getElementsByClassName("lightButtons2")[95].id == "active") {
        lightsOn2[69] = !lightsOn2[69];
        lightsOn2[71] = !lightsOn2[71];
        lightsOn2[14] = !lightsOn2[14];
    }
    if (document.getElementsByClassName("lightButtons2")[96].id == "active") {
        lightsOn2[0] = !lightsOn2[0];
        lightsOn2[17] = !lightsOn2[17];
        lightsOn2[33] = !lightsOn2[33];
        lightsOn2[7] = !lightsOn2[7];
    }
    if (document.getElementsByClassName("lightButtons2")[97].id == "active") {
        lightsOn2[48] = !lightsOn2[48];
        lightsOn2[45] = !lightsOn2[45];
        lightsOn2[40] = !lightsOn2[40];
    }
    if (document.getElementsByClassName("lightButtons2")[98].id == "active") {
        lightsOn2[40] = !lightsOn2[40];
        lightsOn2[71] = !lightsOn2[71];
        lightsOn2[57] = !lightsOn2[57];
        lightsOn2[11] = !lightsOn2[11];
        lightsOn2[8] = !lightsOn2[8];
    }
    if (document.getElementsByClassName("lightButtons2")[99].id == "active") {
        lightsOn2[54] = !lightsOn2[54];
        lightsOn2[58] = !lightsOn2[58];
        lightsOn2[31] = !lightsOn2[31];
        lightsOn2[23] = !lightsOn2[23];
        lightsOn2[46] = !lightsOn2[46];
    }

    for (var i = 0; i < lightsOn2.length; i++)
    {
        if (lightsOn2[i] == true)
        {
            document.getElementsByClassName("lightList2")[i].style.backgroundColor = "green";
        }
        else
        {
            document.getElementsByClassName("lightList2")[i].style.backgroundColor = "black";
        }
    }

    if (lightsOn2.includes(false))
    {
        document.getElementById("impossText").hidden = true;
    }
    else
    {
        document.getElementById("impossText").hidden = false;
    }
}
