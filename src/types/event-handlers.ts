import {ChangeEventHandler, MouseEventHandler} from 'react';

export type TInputChangeHandler = ChangeEventHandler<HTMLInputElement>;
export type TFormChangeHandler = ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
export type TSpanClickHandler = MouseEventHandler<HTMLSpanElement>;
