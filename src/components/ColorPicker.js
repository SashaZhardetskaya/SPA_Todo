import React, {Component} from 'react';

const COLORS = ['#FFFFFF', '#80D8FF', '#FFFF8D', '#FF8A80', '#CCFF90', '#CFD8DC', '#FFD180'];

class ColorPicker extends Component {

    render() {
        return (
            <div className='ColorPicker'>
                {
                    COLORS.map(color =>
                        <div
                            key={color}
                            // className={cx('ColorPicker__swatch', { selected: this.props.value === color })}
                            style={{ backgroundColor: color, width: '15px', height: '15px' }}
                            // onClick={this.props.onChange.bind(null, color)}
                        />
                    )
                }
            </div>
        );
    }
}

export default ColorPicker;