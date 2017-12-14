var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    P1: String,
    P2:String,
    P3:String,
    P4:String,
    P5:String,
    P6:String,
    P7:String,
    P8:String,
    P9:String,
    P10:String,
    P11:String,
    P12:String,
    P13:String,
    P14:String,
    P15:String,
    P16:String,
    P17:String,
    P18:String,
    P19:String,
    P20:Array,
    P21:String,
    P22:String,
    P23:String,
    P24:String,
    P25:String,
    P26:String,
    P27:String,
    P28:String,
    P29:String,
    P30:String,
    time: Date
});

mongoose.model('User', UserSchema);