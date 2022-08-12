import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import CreateBanner from "modules/admin/_Partials/BannerForm";

const SlideForm = ({id, handleRemove}:any) =>{
  const [slideType, setSlideType ] = React.useState("bannerId")
  return <>
    <div className={"flex flex-col"}>
      <div>
        <div className={"flex"}>
          <div className={"flex-1"}>
            <label>type</label>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="bannerId"
              name="radio-buttons-group"
              onChange={event => {
                setSlideType(event.target.value);
              }}
            >
              <FormControlLabel
                value="articleId"
                control={<Radio />}
                label="article"
              />
              <FormControlLabel
                value="bannerId"
                control={<Radio />}
                label="Banner"
              />
            </RadioGroup>
          </div>
          <div >
            <button onClick={()=>{handleRemove(id)}}><DeleteIcon className={"text-brand-green"}/></button>

          </div>
        </div>

      </div>
      <div className={"mt-4"}>
        {slideType ==="bannerId"?<CreateBanner/>:null}
      </div>

    </div>
  </>
}

export default SlideForm;
