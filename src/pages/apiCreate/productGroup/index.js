import { Button, Card, Input, Space, Statistic } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom';

const { Search } = Input;

const gridStyle = {
    width: '20%',
    height: '100px',
    textAlign: 'center',
};

const ProductGroup = () => {

    const history = useHistory()

    const gotoMarkManagePage = () => {
        history.push('/apiCreate/markManage')
    }

    return (
        <div>
            <Card
                title="服务列表"
                extra={
                    <Space size={30}>
                        <Search placeholder="搜索项目名" onSearch={value => console.log(value)} enterButton />
                        <Button type="primary" size="middle">新增项目</Button>
                    </Space>
                }
            >
                <Card.Grid style={gridStyle} onClick={gotoMarkManagePage}><Statistic title="Active Users" value={112893} /></Card.Grid>
                <Card.Grid style={gridStyle}><Statistic title="Active Users" value={112893} /></Card.Grid>
                <Card.Grid style={gridStyle}><Statistic title="Active Users" value={112893} /></Card.Grid>
                <Card.Grid style={gridStyle}><Statistic title="Active Users" value={112893} /></Card.Grid>
                <Card.Grid style={gridStyle}><Statistic title="Active Users" value={112893} /></Card.Grid>
                <Card.Grid style={gridStyle}><Statistic title="Active Users" value={112893} /></Card.Grid>
            </Card>
        </div>
    )
}

export default ProductGroup