import day3Data from '../data/day3.js';
import './Day3.scss'

function Day3() {
    let d1n0 = 0;
    let d1n1 = 0;
    let d2n0 = 0;
    let d2n1 = 0;
    let d3n0 = 0;
    let d3n1 = 0;
    let d4n0 = 0;
    let d4n1 = 0;
    let d5n0 = 0;
    let d5n1 = 0;
    let d6n0 = 0;
    let d6n1 = 0;
    let d7n0 = 0;
    let d7n1 = 0;
    let d8n0 = 0;
    let d8n1 = 0;
    let d9n0 = 0;
    let d9n1 = 0;
    let d10n0 = 0;
    let d10n1 = 0;
    let d11n0 = 0;
    let d11n1 = 0;
    let d12n0 = 0;
    let d12n1 = 0;

    for (let i = 0; i < day3Data.length; i++) {
        if (day3Data[i][0] === '1') {
            d1n1++
        } else if (day3Data[i][0] === '0') {
            d1n0++
        }
        if (day3Data[i][1] === '1') {
            d2n1++
        } else if (day3Data[i][1] === '0') {
            d2n0++
        }
        if (day3Data[i][2] === '1') {
            d3n1++
        } else if (day3Data[i][2] === '0') {
            d3n0++
        } 
        if (day3Data[i][3] === '1') {
            d4n1++
        } else if (day3Data[i][3] === '0') {
            d4n0++
        } 
        if (day3Data[i][4] === '1') {
            d5n1++
        } else if (day3Data[i][4] === '0') {
            d5n0++
        } 
        if (day3Data[i][5] === '1') {
            d6n1++
        } else if (day3Data[i][5] === '0') {
            d6n0++
        } 
        if (day3Data[i][6] === '1') {
            d7n1++
        } else if (day3Data[i][6] === '0') {
            d7n0++
        } 
        if (day3Data[i][7] === '1') {
            d8n1++
        } else if (day3Data[i][7] === '0') {
            d8n0++
        } 
        if (day3Data[i][8] === '1') {
            d9n1++
        } else if (day3Data[i][8] === '0') {
            d9n0++
        } 
        if (day3Data[i][9] === '1') {
            d10n1++
        } else if (day3Data[i][9] === '0') {
            d10n0++
        } 
        if (day3Data[i][10] === '1') {
            d11n1++
        } else if (day3Data[i][10] === '0') {
            d11n0++
        } 
        if (day3Data[i][11] === '1') {
            d12n1++
        } else if (day3Data[i][11] === '0') {
            d12n0++
        } 
    }

    let earray = ['1', '0', '0', '1', '1', '1', '1', '0', '0', '0', '1', '0']
    let d10 = 0;
    let d11 = 0;
    let d20 = 0;
    let d21 = 0;
    let d30 = 0;
    let d31 = 0;
    let d40 = 0;
    let d41 = 0;
    let d50 = 0;
    let d51 = 0;
    let d60 = 0;
    let d61 = 0;
    let d70 = 0;
    let d71 = 0;
    let d80 = 0;
    let d81 = 0;
    let d90 = 0;
    let d91 = 0;
    let d100 = 0;
    let d101 = 0;
    let ea1 = [];
    let ea2 = [];
    let ea3 = [];
    let ea4 = [];
    let ea5 = [];
    let ea6 = [];
    let ea7 = [];
    let ea8 = [];
    let ea9 = [];
    let ea10 = [];
    let ea11 = [];
    for (let i = 0; i < day3Data.length; i++) {
        if (day3Data[i][0] === '1') {
            ea1.push(day3Data[i])
        }
    }
    for (let i = 0; i < ea1.length; i++) {
        if (ea1[i][1] === '0') {
            d10++
        } else {
            d11++
        }
    }
    for (let i = 0; i < ea1.length; i++) {
        if (ea1[i][1] === '1') {
            ea2.push(ea1[i])
        }
    }
    for (let i = 0; i < ea2.length; i++) {
        if (ea2[i][2] === '0') {
            d20++
        } else {
            d21 ++
        }
    }
    for (let i = 0; i < ea2.length; i++) {
        if (ea2[i][2] === '1') {
            ea3.push(ea2[i])
        }
    }
    for (let i = 0; i < ea3.length; i++) {
        if (ea3[i][3] === '0') {
            d30++
        } else {
            d31++
        }
    }
    for (let i = 0; i < ea3.length; i++) {
        if (ea3[i][3] === '0') {
            ea4.push(ea3[i])
        }
    }
    for (let i = 0; i < ea4.length; i++) {
        if (ea4[i][4] === '0') {
            d40++
        } else {
            d41++
        }
    }
    for (let i = 0; i < ea4.length; i++) {
        if (ea4[i][4] === '0') {
            ea5.push(ea4[i])
        }
    }
    for (let i = 0; i < ea5.length; i++) {
        if (ea5[i][5] === '0') {
            d50++
        } else {
            d51++
        }
    }
    for (let i = 0; i < ea5.length; i++) {
        if (ea5[i][5] === '1') {
            ea6.push(ea5[i])
        }
    }
    for (let i = 0; i < ea6.length; i++) {
        if (ea6[i][6] === '0') {
            d60++
        } else {
            d61++
        }
    }
    for (let i = 0; i < ea6.length; i++) {
        if (ea6[i][6] === '0') {
            ea7.push(ea6[i])
        }
    }
    for (let i = 0; i < ea7.length; i++) {
        if (ea7[i][7] === '0') {
            d70++
        } else {
            d71++
        }
    }
    for (let i = 0; i < ea7.length; i++) {
        if (ea7[i][7] === '0') {
            ea8.push(ea7[i])
        }
    }
    for (let i = 0; i < ea8.length; i++) {
        if (ea8[i][8] === '0') {
            d80++
        } else {
            d81++
        }
    }
    for (let i = 0; i < ea8.length; i++) {
        if (ea8[i][8] === '0') {
            ea9.push(ea8[i])
        }
    }
    // for (let i = 0; i < ea9.length; i++) {
    //     if (ea9[i][9] === '0') {
    //         d90++
    //     } else {
    //         d91++
    //     }
    // }
    // for (let i = 0; i < ea9.length; i++) {
    //     if (ea9[i][9] === '1') {
    //         ea10.push(ea9[i])
    //     }
    // }
    // for (let i = 0; i < ea10.length; i++) {
    //     if (ea10[i][10] === '0') {
    //         d100++
    //     } else {
    //         d101++
    //     }
    // }
    // for (let i = 0; i < ea10.length; i++) {
    //     if (ea10[i][10] === '1') {
    //         ea11.push(ea10[i])
    //     }
    // }
    
    console.log(ea1);
    console.log('0:' + d10 + ', 1:' + d11);
    console.log(ea2);
    console.log('0:' + d20 + ', 1:' + d21);
    console.log(ea3);
    console.log('0:' + d30 + ', 1:' + d31);
    console.log(ea4);
    console.log('0:' + d40 + ', 1:' + d41);
    console.log(ea5);
    console.log('0:' + d50 + ', 1:' + d51);
    console.log(ea6);
    console.log('0:' + d60 + ', 1:' + d61);
    console.log(ea7);
    console.log('0:' + d70 + ', 1:' + d71);
    console.log(ea8);
    console.log('0:' + d80 + ', 1:' + d81);
    console.log(ea9);
    console.log('0:' + d90 + ', 1:' + d91);
    console.log(ea10);
    console.log('0:' + d100 + ', 1:' + d101);
    console.log(ea11);
        
    return (
        <>
            <h1>Day 3</h1>
            <div className='container'>
                <div className='column'>
                    <h1>1</h1>
                    <p>{d1n1}</p>
                    <p>{d1n0}</p>
                </div>
                <div className='column'>
                    <h1>2</h1>
                    <p>{d2n1}</p>
                    <p>{d2n0}</p>
                </div>
                <div className='column'>
                    <h1>3</h1>
                    <p>{d3n1}</p>
                    <p>{d3n0}</p>
                </div>
                <div className='column'>
                    <h1>4</h1>
                    <p>{d4n1}</p>
                    <p>{d4n0}</p>
                </div>
                <div className='column'>
                    <h1>5</h1>
                    <p>{d5n1}</p>
                    <p>{d5n0}</p>
                </div>
                <div className='column'>
                    <h1>6</h1>
                    <p>{d6n1}</p>
                    <p>{d6n0}</p>
                </div>
                <div className='column'>
                    <h1>7</h1>
                    <p>{d7n1}</p>
                    <p>{d7n0}</p>
                </div>
                <div className='column'>
                    <h1>8</h1>
                    <p>{d8n1}</p>
                    <p>{d8n0}</p>
                </div>
                <div className='column'>
                    <h1>9</h1>
                    <p>{d9n1}</p>
                    <p>{d9n0}</p>
                </div>
                <div className='column'>
                    <h1>10</h1>
                    <p>{d10n1}</p>
                    <p>{d10n0}</p>
                </div>
                <div className='column'>
                    <h1>11</h1>
                    <p>{d11n1}</p>
                    <p>{d11n0}</p>
                </div>
                <div className='column'>
                    <h1>12</h1>
                    <p>{d12n1}</p>
                    <p>{d12n0}</p>
                </div>
            </div>
        </>
    )
}

export default Day3;