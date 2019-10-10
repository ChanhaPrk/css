//정규표현식은 가능한 조건만 생각하면 편하다.
//괜히 안되는 조건까지 생각하다간 머리 터진다.!

function chkMemberName( event )
{
    //입력된 이름을 가지고 옴
    var name = document.getElementById('name');
    //한글만 입력 가능합니다.
   var RegExp =  /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    
    if( name.value == '' )
    {
        document.getElementById('reqText_Name').innerHTML = '현재 빈킨이에요!';
        
        return false;
    }
    else if( RegExp.test( name.value ) )
    {
        document.getElementById('reqText_Name').innerHTML = '한글만 입력하세요!';
        return false;
    }
    else    
    {
        document.getElementById('reqText_Name').innerHTML = '';
        return true;
    }
}
function chkMemberId( event )
{
    var id = document.getElementById('id');
    //10글자 내외 -> 에초에 입력을 10글자까지만 받기로 제한함 
    //100major -> x
    //maj100or -> 0
    //major100 -> 0
    var RexExp = /^[a-zA-Z][0-9a-zA-Z]+$/;
    if( RexExp.test( id.value ) )
    {
        document.getElementById('reqText_id').innerHTML = '';
        return true;
    }
    else if( id.value == '' )
    {
        document.getElementById('reqText_id').innerHTML = '현재 빈칸이에요!';
        return false;
    }
    else
    {
       document.getElementById('reqText_id').innerHTML = '다시 입력해주세요!';
        return false;
    }
}

function chkMemberPw( event )
{
    var pw = document.getElementById('pw');
    var RegExp = /^[a-zA-Z0-9]{5,12}$/;
    
    if( RegExp.test( pw.value ) )
    {
        document.getElementById('reqText_Pw').innerHTML = '';
        return true;
    }
    else if( pw.value == '' )
    {
        document.getElementById('reqText_Pw').innerHTML = '비밀번호 현재 빈칸 입니다.';
        return false;
    }
    else
    {
        document.getElementById('reqText_Pw').innerHTML = '비밀번호로 한글을 포함할 수 없습니다';
        pw.focus();
        
        return false;
    }
}
function chkMemberNick( event ) 
{
    var nick = document.getElementById('nickName');
    var RegExp = /^[a-zA-Z0-9]{5,12}$/;
    console.log( nick.value );
    if( RegExp.test( nick.value ) )
    {
        document.getElementById('reqText_Nick').innerHTML = '';
        return true;
    }
    else if( nick.value == '' )
    {
        document.getElementById('reqText_Nick').innerHTML = '닉네임 현재 빈 칸입니다.';
        return false;
    }
    else
    {
       document.getElementById('reqText_Nick').innerHTML = '닉네임은 한글을 포함할 수 없습니다';
       nick.focus();
       return false;
    }
}
function chkMemberCal( event )
{
    var cal = document.getElementById('bithday').value;
   
    if( cal == '' )
    {
        document.getElementById('reqText_Cal').innerHTML = '생년월일을 선택해주십시오!';
        return false;
    }
    else
    {
        var bith = new Date( cal );
        var year = bith.getFullYear();
        var month = bith.getMonth()+1;
        var date = bith.getDate();
        var week = [ '일','월','화','수','목','금','토' ];
        var day = week[ bith.getDay() ];
        
        document.getElementById('reqText_Cal').innerHTML = year + '년' + month + '월' +
            date + '일' + day + '요일';
        return true;
    }
}
function chkMemberInfor( event )
{
    
    
    if( chkMemberName(null) && chkMemberId(null) && chkMemberPw(null) && chkMemberNick(null) &&
       chkMemberCal( null ) )
    {
        var name = document.getElementById('name').value;
        var pw = document.getElementById('pw').value;
        var id = document.getElementById('id').value;
        var nick = document.getElementById('nickName').value;
        var cal = document.getElementById('bithday').value;
        
        var memberBirthday = getBirthdayDate( cal );
        
        alert( 'memberName : ' + name + '\n' +
               'memberId : ' + id + '\n' +
               'memberPw : ' + pw + '\n' +
               'memberNickName : ' + nick + '\n' + 
               'memberBirthDay : ' + memberBirthday.year + '년' + memberBirthday.month + '월'
              + memberBirthday.date + '일' + memberBirthday.day + '요일' );
    }
    else
    {
        alert( '모두 입력해주세요!' );
    }
}
function realWeekDay( day )
{
    var week = ['일','월','화','수','목','금','토'];
    
    if( day > 6 )
    {
        console.log( '해당 요일은 존재하지않습니다.' );
        return;
    }
    else
    {
        return week[ day ];
    }
}
function getBirthdayDate( cal )
{
    //입력된 달력 데이터를 바탕으로 Date객체를 생성함
    var c = new Date( cal );
    
    //년, 월, 일, 요일 데이터를 추출하여 
    //map 형태로 return함 
    
    var m = {
        'year' : c.getFullYear(),
        'month' : c.getMonth(),
        'date' : c.getDate(),
        'day' : realWeekDay( c.getDay() )
    };
    
    return m;
}