import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/index.js";
import { deliveryTypes } from "../../delivery/types.js";
export const Exercise = sequelize.define("Exercise", {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    challenge: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    position: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: deliveryTypes,
    },
}, {
    tableName: "exercises",
});
//# sourceMappingURL=Exercise.js.map