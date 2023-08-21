import { Fragment, useState, memo } from 'react';
import Menu from './Menu'
import Modal from './Modal'

const Index = ({ menuNameHandler, listNameHandler }) =>
{
    // type 0 不展示 1 展示菜单标题数据 2 展示内容数据
    const [isModal, setIsModal] = useState({ name: '', type: 0 })
    const ModalFun = (flag) =>
    {
        setIsModal(flag)
    }
    return (
        <Fragment>
            <Menu isScroll={isModal.type} menuNameHandler={menuNameHandler} listNameHandler={listNameHandler} ModalFun={ModalFun} />
            {isModal.type !== 0 && <Modal data={isModal} ModalFun={ModalFun} />}
        </Fragment>
    );
};
export default memo(Index) 