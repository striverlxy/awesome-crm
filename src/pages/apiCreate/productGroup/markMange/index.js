import React, { useEffect, useState } from 'react'
import { Space, Image, Tree, Layout, Menu, Dropdown } from 'antd'
import {
    FolderOutlined,
    FolderOpenOutlined
} from '@ant-design/icons';
import styles from './style.less'

const { SubMenu } = Menu;

const MarkManage = () => {

    const [openKeys, setOpenKeys] = useState([]);
    const [stopClick, setStopClick] = useState(false);
    const [count, setCount] = useState(0)
    
    const [markers, setMarkers] = useState([]) 

    useEffect(() => {
        document.getElementById('source_image').onclick = e => {
            if (stopClick) {
                return;
            }

            var x = e.offsetX || e.layerX, y = e.offsetY || e.layerY;
            x -= 20
            y -= 20
            setCount(count + 1)
            createMarker(x, y, 'source_image');
        }
    })

    const createMarker = (x, y, divName) => {

        var div = document.createElement('div');
        div.className = styles.marker; 
        div.style.left = x + 'px'; 
        div.style.top = y + 'px';
        div.id = count + "-marker"
        div.innerText = count

        div.onclick = e => {
            console.log('onclick')
            e.cancelBubble = true;
        }

        div.onmouseover = () => {
            console.log('onmouseover')
            setStopClick(true)
        }

        div.onmouseout = () => {
            console.log('onmouseout')
            setStopClick(false)
        }

        document.getElementById(divName).appendChild(div)
    }

    return (
        <Space className={styles.main} align="start">
            <Layout className={styles.left_container}>
                <Menu
                    mode="inline"
                    style={{ height: '100%' }}
                    {...openKeys}
                    onOpenChange={openKeys => setOpenKeys(openKeys)}
                >
                    <SubMenu key="sub1" icon={openKeys.indexOf('sub1') > -1 ? <FolderOpenOutlined /> : <FolderOutlined />} title="subnav 1">
                        <Menu.Item key="1">
                            <Space>
                                <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={40} />
                                <span>option1</span>
                            </Space>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Space>
                                <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={40} />
                                <span>option2</span>
                            </Space>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Space>
                                <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={40} />
                                <span>option3</span>
                            </Space>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Space>
                                <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={40} />
                                <span>option4</span>
                            </Space>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Layout>
            <div>
                <Image className={styles.img} id="source_image" preview={false} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={800} />
                {
                    markers.map(item => {
                        return item
                    })
                }
            </div>
        </Space>
    )
}

export default MarkManage