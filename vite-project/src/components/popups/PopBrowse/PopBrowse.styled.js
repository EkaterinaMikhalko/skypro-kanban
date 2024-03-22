import styled from "styled-components";
import { topicStyles } from "../../../lib/topic";
import { hover01, hover03 } from "../../../styled/common/styled.common";

export const PopBrowse = styled.div`
  /* display: none; */
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const PopBrowseTtlInput = styled.input`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;
export const TopicText = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 10px;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  display: block;
  opacity: 1 !important;
  background-color: ${({ $themeColor }) =>
    topicStyles[$themeColor]?.backgroundColor || "#94a6be"};

  ${TopicText} {
    color: ${({ $themeColor }) => topicStyles[$themeColor]?.color || "#ffffff"};
  }
`;

export const CategoriesThemeTopic = styled.p``;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const StatusPSubttl = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
`;

export const StatusThemeHideGray = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  background: #94a6be;
  color: #ffffff;
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormBrowseArea = styled.span`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const FormBrowseAreaEdit = styled.input`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 8px;
  @media screen and (max-width: 495px) {
    width: 100%;
    margin-right: 0px;
  }
`;
export const BtnGroup = styled.div`
  margin-right: 8px;

  @media screen and (max-width: 495px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const BtnBrowse = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  margin-right: 8px;
  width: 100%;
  height: 40px;
  color: #565eef;
  ${hover03}
  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

export const BtnBrowseClose = styled.span`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  ${hover01}
`;
export const PopBrowseBtnEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 8px;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  width: 100%;
  height: 40px;
`;

export const BtnEditEdit = styled.span`
  /* border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff; */
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  ${hover03}
`;
export const BtnEditCancel = styled.span`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  ${hover03}
`;

export const BtnEditClose = styled.span`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  ${hover01}
`;

export const ProdCheckbox = styled.div`
  font-size: 14px;
  color: #333;
  display: inline-block;
  margin-right: 10px;
  letter-spacing: 0.5px;
`;

export const RadioToolbar = styled.div``;

export const RadioToolBarInput = styled.input`
  display: none;
  &:checked + label {
    background-color: #d4dbe5;
    border: 1px solid #1ca92e;
  }
`;

export const RadioToolBarLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  line-height: 10px;
  display: inline-block;
  padding: 2px 9px;
  cursor: pointer;
  border: 1px solid #dad0ff;
  &:hover {
    background-color: #d4dbe5;
    border: 1px solid #1ca92e;
  }
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
`;
