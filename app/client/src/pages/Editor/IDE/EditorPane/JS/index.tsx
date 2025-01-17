import React from "react";
import { useSelector } from "react-redux";
import { Switch, useRouteMatch } from "react-router";
import { SentryRoute } from "@appsmith/AppRouter";
import { getIDEViewMode, getIsSideBySideEnabled } from "selectors/ideSelectors";
import JSEditor from "pages/Editor/JSEditor";
import ListJS from "./List";
import { EditorViewMode } from "@appsmith/entities/IDE/constants";
import { LIST_PATH } from "@appsmith/constants/routes/appRoutes";

const JSSegment = () => {
  const isSideBySideEnabled = useSelector(getIsSideBySideEnabled);
  const editorMode = useSelector(getIDEViewMode);
  const { path } = useRouteMatch();
  return (
    <Switch>
      {isSideBySideEnabled && editorMode === EditorViewMode.SplitScreen ? (
        <SentryRoute
          component={JSEditor}
          exact
          path={[path + "/:collectionId"]}
        />
      ) : null}
      <SentryRoute
        component={ListJS}
        path={[path, `${path}/:collectionId${LIST_PATH}`]}
      />
    </Switch>
  );
};

export default JSSegment;
